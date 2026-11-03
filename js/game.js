/* Rewards: XP and levels, coins, the pet dragon, daily quests, streak, badges, confetti. */
(function (EQ) {
  'use strict';
  const h = EQ.h;
  const S = function () { return EQ.store.s; };

  const PET = [
    { lvl: 1, e: '🥚', name: 'Egg' }, { lvl: 2, e: '🐣', name: 'Baby' }, { lvl: 4, e: '🦎', name: 'Lizzy' },
    { lvl: 7, e: '🐲', name: 'Drako' }, { lvl: 11, e: '🐉', name: 'Drako the Great' }
  ];
  const HATS = [
    { id: 'cap', e: '🧢', price: 40 }, { id: 'bow', e: '🎀', price: 40 }, { id: 'tophat', e: '🎩', price: 80 },
    { id: 'grad', e: '🎓', price: 120 }, { id: 'helmet', e: '⛑️', price: 120 }, { id: 'crown', e: '👑', price: 250 },
    { id: 'wizard', e: '🧙', price: 300 }, { id: 'star', e: '🌟', price: 400 }
  ];
  const THEMES = [
    { id: 'sunny', name: 'Sunny', sw: '#ffb703', price: 0 }, { id: 'ocean', name: 'Ocean', sw: '#219ebc', price: 60 },
    { id: 'jungle', name: 'Jungle', sw: '#2a9d8f', price: 60 }, { id: 'candy', name: 'Candy', sw: '#ff5d8f', price: 90 },
    { id: 'space', name: 'Space', sw: '#7b2cbf', price: 150 }, { id: 'lava', name: 'Lava', sw: '#e63946', price: 150 }
  ];

  const QUESTS = [
    { id: 'xp150', goal: 150, key: 'xp', pl: 'Zdobądź 150 XP', ru: 'Набери 150 XP' },
    { id: 'xp300', goal: 300, key: 'xp', pl: 'Zdobądź 300 XP', ru: 'Набери 300 XP' },
    { id: 'combo8', goal: 8, key: 'combo', pl: 'Zrób combo x8', ru: 'Сделай комбо x8' },
    { id: 'combo15', goal: 15, key: 'combo', pl: 'Zrób combo x15', ru: 'Сделай комбо x15' },
    { id: 'speak5', goal: 5, key: 'spoken', pl: 'Powiedz 5 rzeczy na głos', ru: 'Скажи вслух 5 раз', mic: true },
    { id: 'rain', goal: 1, key: 'rain', pl: 'Zagraj w Deszcz słów', ru: 'Сыграй в Дождь слов' },
    { id: 'blitz', goal: 1, key: 'blitz', pl: 'Zagraj w Błyskawicę', ru: 'Сыграй в Молнию' },
    { id: 'memory', goal: 1, key: 'memory', pl: 'Zagraj w Memory', ru: 'Сыграй в Мемори' },
    { id: 'star', goal: 1, key: 'stars', pl: 'Zdobądź gwiazdkę na mapie', ru: 'Получи звезду на карте' },
    { id: 'perfect', goal: 1, key: 'perfect', pl: 'Skończ misję bez błędu', ru: 'Пройди миссию без ошибок' }
  ];

  function level(xp) { // level n needs 60*n*(n+1)/2 XP in total, so levels slow down gently
    let n = 1;
    while (xp >= 60 * n * (n + 1) / 2) n++;
    const lo = 60 * (n - 1) * n / 2, hi = 60 * n * (n + 1) / 2;
    return { level: n, into: xp - lo, need: hi - lo, pct: Math.round(((xp - lo) / (hi - lo)) * 100) };
  }

  EQ.game = {
    HATS: HATS, THEMES: THEMES,
    level: function () { return level(S().xp); },
    pet: function () {
      const lv = level(S().xp).level;
      let p = PET[0];
      PET.forEach(function (x) { if (lv >= x.lvl) p = x; });
      const next = PET.find(function (x) { return x.lvl > lv; });
      return { e: p.e, name: p.name, next: next ? next.lvl : null, hat: (HATS.find(function (x) { return x.id === S().wear.hat; }) || {}).e || '' };
    },
    petEl: function (big) {
      const p = EQ.game.pet();
      return h('div', { class: 'pet' + (big ? ' big' : '') }, p.hat ? h('span', { class: 'hat' }, p.hat) : null, h('span', { class: 'body' }, p.e));
    },
    addXp: function (n) {
      if (!n) return;
      const before = level(S().xp).level;
      S().xp += n; EQ.day().xp += n;
      const after = level(S().xp).level;
      if (after > before) EQ.game.toast('⬆️ ' + EQ.t('level') + ' ' + after + '!', true);
    },
    addCoins: function (n) { S().coins += n; },
    noteCombo: function (c) {
      const d = EQ.day();
      if (c > d.combo) d.combo = c;
      if (c > S().stats.maxCombo) S().stats.maxCombo = c;
    },
    bump: function (key, n) { const d = EQ.day(); d[key] = (d[key] || 0) + (n || 1); },

    quests: function () {
      const pool = QUESTS.filter(function (q) { return !q.mic || EQ.speech.canListen(); });
      const seed = EQ.hash(EQ.today());
      const out = [], used = {};
      for (let i = 0; out.length < 3 && i < 50; i++) {
        const q = pool[(seed + i * 7) % pool.length];
        if (used[q.key]) continue;
        used[q.key] = 1; out.push(q);
      }
      const d = EQ.day();
      return out.map(function (q) {
        const v = d[q.key] || 0;
        return { q: q, text: q[S().settings.lang] || q.pl, value: Math.min(v, q.goal), done: v >= q.goal, claimed: d.claimed.indexOf(q.id) >= 0 };
      });
    },
    // Pays out finished quests; returns coins gained.
    claimQuests: function () {
      const d = EQ.day(); let gain = 0;
      EQ.game.quests().forEach(function (x) { if (x.done && !x.claimed) { d.claimed.push(x.q.id); gain += 20; } });
      if (gain) { EQ.game.addCoins(gain); EQ.game.toast('🪙 +' + gain, false); EQ.sfx.coin(); }
      EQ.store.save();
      return gain;
    },
    chestReady: function () { const d = EQ.day(); return !d.chest && EQ.game.quests().every(function (x) { return x.done; }); },
    openChest: function () {
      const d = EQ.day(); if (d.chest) return 0;
      d.chest = true; const gain = 40 + Math.floor(Math.random() * 41);
      EQ.game.addCoins(gain); EQ.store.save(); return gain;
    },

    // Streak counts days on which the daily mission was finished.
    markDaily: function () {
      const s = S(), today = EQ.today();
      EQ.day().daily++;
      if (s.lastDay !== today) {
        const missedOne = s.lastDay === EQ.addDays(today, -2);
        if (s.lastDay === EQ.addDays(today, -1)) s.streak++;
        else if (missedOne && s.freezes > 0) { s.freezes--; s.freezeUsed = today; s.streak++; EQ.game.toast('🧊 ' + EQ.t('freezeSaved'), true); }
        else s.streak = 1;
        if (s.streak > 0 && s.streak % 7 === 0 && s.freezes < 3) s.freezes++;
        s.lastDay = today;
        if (s.streak > s.best) s.best = s.streak;
        EQ.game.addCoins(10 + Math.min(s.streak, 10) * 2);
      }
    },
    streak: function () {
      const s = S();
      const alive = s.lastDay === EQ.today() || s.lastDay === EQ.addDays(EQ.today(), -1) || (s.freezes > 0 && s.lastDay === EQ.addDays(EQ.today(), -2));
      return alive ? s.streak : 0;
    },
    doneToday: function () { return EQ.day().daily > 0; },

    badges: [
      { id: 'first', e: '🌱', pl: 'Pierwsza misja', ru: 'Первая миссия', test: function (s) { return s.stats.missions >= 1; } },
      { id: 'streak3', e: '🔥', pl: '3 dni z rzędu', ru: '3 дня подряд', test: function (s) { return s.best >= 3; } },
      { id: 'streak7', e: '🏅', pl: 'Tydzień z rzędu', ru: 'Неделя подряд', test: function (s) { return s.best >= 7; } },
      { id: 'combo20', e: '⚡', pl: 'Combo x20', ru: 'Комбо x20', test: function (s) { return s.stats.maxCombo >= 20; } },
      { id: 'words50', e: '📚', pl: '50 słów', ru: '50 слов', test: function () { return EQ.seenWords().length >= 50; } },
      { id: 'words100', e: '🧠', pl: '100 słów', ru: '100 слов', test: function () { return EQ.seenWords().length >= 100; } },
      { id: 'speaker', e: '🎤', pl: 'Mówca: 30 razy', ru: 'Оратор: 30 раз', test: function (s) { return s.stats.spoken >= 30; } },
      { id: 'boss', e: '⚔️', pl: 'Pogromca bossa', ru: 'Победитель босса', test: function (s) { return Object.keys(s.bosses).length > 0; } },
      { id: 'perfect', e: '💎', pl: 'Misja bez błędu', ru: 'Миссия без ошибок', test: function (s) { return s.stats.perfect >= 1; } },
      { id: 'rich', e: '💰', pl: '500 monet', ru: '500 монет', test: function (s) { return s.coins >= 500; } }
    ],
    checkBadges: function () {
      const s = S(), fresh = [];
      EQ.game.badges.forEach(function (b) { if (s.badges.indexOf(b.id) < 0 && b.test(s)) { s.badges.push(b.id); fresh.push(b); } });
      return fresh;
    },
    badgeName: function (b) { return b[S().settings.lang] || b.pl; },

    toast: function (text, big) {
      const el = h('div', { class: 'toast' + (big ? ' big' : '') }, text);
      document.body.append(el);
      setTimeout(function () { el.classList.add('out'); }, 1600);
      setTimeout(function () { el.remove(); }, 2200);
    },
    floatText: function (anchor, text, cls) {
      const r = anchor.getBoundingClientRect();
      const el = h('div', { class: 'floater ' + (cls || ''), style: { left: (r.left + r.width / 2) + 'px', top: (r.top + window.scrollY) + 'px' } }, text);
      document.body.append(el);
      setTimeout(function () { el.remove(); }, 1100);
    },
    confetti: function (n) {
      const box = h('div', { class: 'confetti' });
      const colours = ['#ffb703', '#fb8500', '#219ebc', '#8ecae6', '#e63946', '#2a9d8f', '#ff5d8f', '#7b2cbf'];
      for (let i = 0; i < (n || 90); i++) {
        box.append(h('i', { style: {
          left: Math.random() * 100 + 'vw', background: colours[i % colours.length],
          animationDelay: (Math.random() * 0.6) + 's', animationDuration: (1.6 + Math.random() * 1.6) + 's',
          transform: 'rotate(' + Math.random() * 360 + 'deg)'
        } }));
      }
      document.body.append(box);
      setTimeout(function () { box.remove(); }, 3600);
    },
    applyTheme: function () { document.documentElement.setAttribute('data-theme', S().wear.theme || 'sunny'); }
  };
})(window.EQ);
