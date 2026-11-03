/* Screens: home, adventure map, games hub, shop, my words, parent panel. */
(function (EQ) {
  'use strict';
  const h = EQ.h, t = EQ.t;
  const S = function () { return EQ.store.s; };
  const root = function () { return document.getElementById('app'); };

  function topbar() {
    const s = S(), lv = EQ.game.level();
    return h('div', { class: 'hud' },
      h('button', { class: 'hudbtn', onclick: function () { EQ.go('home'); } }, '🏠'),
      h('span', { class: 'chip fire', title: t('freezeInfo') }, '🔥 ' + EQ.game.streak(), s.freezes ? h('small', null, ' 🧊' + s.freezes) : null),
      h('span', { class: 'chip' }, '🪙 ' + s.coins),
      h('span', { class: 'chip lv' }, t('level') + ' ' + lv.level, h('span', { class: 'mini-bar' }, h('i', { style: { width: lv.pct + '%' } }))));
  }
  function back() { return h('button', { class: 'btn ghost small', onclick: function () { EQ.go('home'); } }, '⬅ ' + t('home')); }

  function mistakeCount() { return EQ.allItems().filter(function (i) { const r = EQ.rec(i.id); return r && r.wrong > 0 && r.box <= 3; }).length; }

  function home() {
    const s = S(), pet = EQ.game.pet();
    EQ.game.claimQuests();
    const quests = EQ.game.quests();
    const bubble = h('div', { class: 'speech' }, EQ.pick(t('petTalk')));
    const petEl = EQ.game.petEl(true);
    petEl.addEventListener('click', function () {
      const line = EQ.pick(t('petTalk')); bubble.textContent = line; EQ.speech.speak(line, { pitch: 1.4 });
      petEl.classList.remove('jump'); void petEl.offsetWidth; petEl.classList.add('jump');
    });
    const bad = mistakeCount();
    const chest = EQ.game.chestReady();
    const m = new Date().getMonth();
    const deco = ['❄️⛄', '💘❄️', '🌱🌷', '🌧️🐣', '🌸🐝', '🍓☀️', '🏖️☀️', '🌻⛵', '🎒🍎', '🎃👻', '🍁🍂', '🎄🎁'][m];
    root().replaceChildren(h('div', { class: 'screen home' },
      topbar(),
      h('div', { class: 'deco' }, deco),
      h('div', { class: 'hero' },
        h('div', { class: 'petwrap' }, petEl, bubble),
        h('div', { class: 'herotext' },
          h('h1', null, t('hi') + (s.settings.name ? ', ' + s.settings.name : '') + '! 👋'),
          h('div', { class: 'psub' }, pet.name + (pet.next ? '  ·  ' + t('level') + ' ' + pet.next + ' ➜ ✨' : '')))),
      !EQ.speech.available() ? h('div', { class: 'warn' }, '🔇 ' + t('noVoice')) : null,
      h('button', { class: 'btn primary huge pulse', onclick: function () { EQ.start('daily'); } },
        EQ.game.doneToday() ? '🎯 ' + t('dailyDone') : '🚀 ' + t('daily')),
      h('div', { class: 'quests card' },
        h('h3', null, '📜 ' + t('quests')),
        quests.map(function (x) {
          return h('div', { class: 'quest' + (x.done ? ' done' : '') },
            h('span', null, x.done ? '✅' : '⬜'), h('span', { class: 'qt' }, x.text),
            h('span', { class: 'qbar' }, h('i', { style: { width: (x.value / x.q.goal * 100) + '%' } })), h('span', { class: 'qv' }, x.value + '/' + x.q.goal));
        }),
        chest ? h('button', { class: 'btn gold', onclick: function () {
          const g = EQ.game.openChest(); EQ.sfx.win(); EQ.game.confetti(); EQ.game.toast('🎁 🪙 +' + g, true); setTimeout(home, 900);
        } }, '🎁 ' + t('chest')) : (EQ.day().chest ? h('div', { class: 'psub' }, '🎁 ✅') : h('div', { class: 'psub' }, '🎁 ' + quests.filter(function (x) { return x.done; }).length + '/3'))),
      h('div', { class: 'tiles' },
        tile('🗺️', t('map'), function () { EQ.go('map'); }, 'blue'),
        tile('🎮', t('games'), function () { EQ.go('games'); }, 'purple'),
        tile('🛍️', t('shop'), function () { EQ.go('shop'); }, 'pink'),
        tile('🏷️', t('album') + ' ' + EQ.stickerCount() + '/' + EQ.allWords().length, function () { EQ.go('album'); }, 'orange'),
        tile('📚', t('words'), function () { EQ.go('words'); }, 'green'),
        bad ? tile('🩹', 'Fix my mistakes (' + bad + ')', function () { EQ.start('mistakes'); }, 'red') : null,
        tile('⚙️', t('parent'), function () { gate(); }, 'grey')),
      s.badges.length ? h('div', { class: 'badges' }, EQ.game.badges.filter(function (b) { return s.badges.indexOf(b.id) >= 0; }).map(function (b) {
        return h('div', { class: 'badge', title: EQ.game.badgeName(b) }, h('span', null, b.e), EQ.game.badgeName(b));
      })) : null));
  }
  function tile(icon, label, fn, colour) { return h('button', { class: 'tilebtn ' + (colour || ''), onclick: fn }, h('span', { class: 'ti' }, icon), h('span', null, label)); }

  function map() {
    const s = S();
    const path = h('div', { class: 'path' });
    let n = 0;
    EQ.units().forEach(function (u) {
      path.append(h('div', { class: 'unitbanner' }, u.name));
      u.lessons.forEach(function (l) {
        const open = EQ.unlocked(l), stars = s.stars[l.id] || 0;
        const off = Math.round(Math.sin(n * 0.9) * 32); n++;
        const isNext = open && !stars;
        path.append(h('div', { class: 'node-row', style: { transform: 'translateX(' + off + '%)' } },
          h('button', { class: 'node' + (open ? '' : ' locked') + (stars ? ' done' : '') + (isNext ? ' next' : ''), onclick: function () {
            if (!open) { EQ.game.toast('🔒 ' + t('locked')); EQ.sfx.bad(); return; }
            EQ.start('lesson', l.id);
          } }, h('span', { class: 'nemoji' }, open ? (l.emoji || '📖') : '🔒'),
            h('span', { class: 'nstars' }, [1, 2, 3].map(function (k) { return h('span', { class: k <= stars ? 'on' : '' }, '★'); }))),
          h('div', { class: 'nlabel' }, l.title, l.page ? h('small', null, ' p.' + l.page) : null)));
      });
      const B = EQ.bossOf(u), bopen = EQ.bossUnlocked(u), beaten = s.bosses[u.name];
      path.append(h('div', { class: 'node-row' },
        h('button', { class: 'node boss' + (bopen ? '' : ' locked') + (beaten ? ' done' : ''), onclick: function () {
          if (!bopen) { EQ.game.toast('🔒 ' + t('bossLocked')); EQ.sfx.bad(); return; }
          EQ.games.boss(u.name);
        } }, h('span', { class: 'nemoji' }, bopen ? B.e : '🔒'), beaten ? h('span', { class: 'nstars' }, '🏆') : null),
        h('div', { class: 'nlabel' }, '⚔️ ' + t('boss') + ': ' + B.name)));
    });
    root().replaceChildren(h('div', { class: 'screen mapscreen' }, topbar(), h('h1', null, '🗺️ ' + t('map')), path));
    const next = root().querySelector('.node.next');
    if (next) setTimeout(function () { next.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 150);
  }

  function games() {
    const r = S().records;
    function g(key, icon, info, colour) {
      return h('button', { class: 'gamecard ' + colour, onclick: function () { EQ.games[key](); } },
        h('span', { class: 'gi' }, icon), h('b', null, t(key)), h('span', { class: 'psub' }, info),
        r[key] ? h('span', { class: 'chip' }, '🏆 ' + r[key]) : null);
    }
    root().replaceChildren(h('div', { class: 'screen' }, topbar(), h('h1', null, '🎮 ' + t('games')),
      h('div', { class: 'gamegrid' },
        g('rain', '🌧️', t('rainInfo'), 'blue'), g('blitz', '⚡', t('blitzInfo'), 'orange'), g('memory', '🧠', t('memoryInfo'), 'green'))));
  }

  function shop() {
    const s = S();
    function buy(id, price, apply) {
      if (s.owned.indexOf(id) >= 0 || price === 0) { apply(); EQ.store.save(); shop(); return; }
      if (s.coins < price) { EQ.game.toast('🪙 ' + t('needCoins')); EQ.sfx.bad(); return; }
      s.coins -= price; s.owned.push(id); apply(); EQ.sfx.coin(); EQ.game.confetti(40); EQ.store.save(); shop();
    }
    const hats = EQ.game.HATS.map(function (x) {
      const owned = s.owned.indexOf('hat:' + x.id) >= 0, on = s.wear.hat === x.id;
      return h('button', { class: 'shopitem' + (on ? ' on' : ''), onclick: function () { buy('hat:' + x.id, x.price, function () { s.wear.hat = on ? '' : x.id; }); } },
        h('span', { class: 'si' }, x.e), h('span', null, on ? t('wearing') : owned ? t('wear') : '🪙 ' + x.price));
    });
    const themes = EQ.game.THEMES.map(function (x) {
      const owned = x.price === 0 || s.owned.indexOf('theme:' + x.id) >= 0, on = s.wear.theme === x.id;
      return h('button', { class: 'shopitem' + (on ? ' on' : ''), onclick: function () { buy('theme:' + x.id, x.price, function () { s.wear.theme = x.id; EQ.game.applyTheme(); }); } },
        h('span', { class: 'swatch', style: { background: x.sw } }), h('span', null, x.name), h('span', null, on ? '✔' : owned ? t('wear') : '🪙 ' + x.price));
    });
    const freezeBtn = h('button', { class: 'shopitem', onclick: function () {
      if (s.freezes >= 3) { EQ.game.toast('🧊 max 3'); return; }
      if (s.coins < 60) { EQ.game.toast('🪙 ' + t('needCoins')); EQ.sfx.bad(); return; }
      s.coins -= 60; s.freezes++; EQ.sfx.coin(); EQ.store.save(); shop();
    } }, h('span', { class: 'si' }, '🧊'), h('span', null, t('freeze') + ' (' + s.freezes + '/3)'), h('small', { class: 'psub' }, t('freezeInfo')), h('span', null, '🪙 60'));
    root().replaceChildren(h('div', { class: 'screen' }, topbar(), h('h1', null, '🛍️ ' + t('shop')),
      h('div', { class: 'center' }, EQ.game.petEl(true)),
      h('div', { class: 'shopgrid' }, freezeBtn),
      h('h3', null, t('hats')), h('div', { class: 'shopgrid' }, hats),
      h('h3', null, t('themes')), h('div', { class: 'shopgrid' }, themes)));
  }

  EQ.stickerCount = function () {
    return EQ.allItems().filter(function (i) { const r = EQ.rec(i.id); return i.kind === 'word' && r && r.box >= 4; }).length;
  };
  function album() {
    const pages = EQ.units().map(function (u) {
      const ws = u.lessons.flatMap(function (l) { return EQ.itemsOf(l).filter(function (i) { return i.kind === 'word'; }); });
      if (!ws.length) return null;
      const got = ws.filter(function (i) { const r = EQ.rec(i.id); return r && r.box >= 4; }).length;
      const started = ws.some(function (i) { return EQ.rec(i.id); });
      if (!started) {
        return h('div', { class: 'card albumpage later' },
          h('div', { class: 'albumhead' }, h('h3', null, '🔒 ' + u.name), h('span', { class: 'chip' }, '0/' + ws.length)));
      }
      return h('div', { class: 'card albumpage' },
        h('div', { class: 'albumhead' }, h('h3', null, u.name), h('span', { class: 'chip' }, got + '/' + ws.length + (got === ws.length ? ' 🏆' : ''))),
        h('div', { class: 'bar' }, h('i', { style: { width: (got / ws.length * 100) + '%' } })),
        h('div', { class: 'stickergrid' }, ws.map(function (i) {
          const r = EQ.rec(i.id), have = r && r.box >= 4, close = r && r.box >= 2;
          return h('button', { class: 'sticker' + (have ? ' got' : close ? ' close' : ''), title: have ? i.data.en : '?', onclick: function () { if (have) EQ.speech.speak(i.data.en); } },
            h('span', null, have ? (i.data.e || '⭐') : '❔'), h('small', null, have ? i.data.en : close ? i.data.en[0] + '...' : ''));
        })));
    });
    root().replaceChildren(h('div', { class: 'screen' }, topbar(), h('h1', null, '🏷️ ' + t('album')), h('p', { class: 'psub' }, t('albumInfo')), pages));
  }

  function words() {
    const wrap = h('div', { class: 'list' });
    let total = 0, learned = 0;
    EQ.lessons.forEach(function (l) {
      const items = EQ.itemsOf(l); if (!items.length) return;
      wrap.append(h('h3', { class: 'unit' }, (l.emoji || '') + ' ' + l.title));
      const grid = h('div', { class: 'wordgrid' });
      items.forEach(function (it) {
        const r = EQ.rec(it.id), box = r ? r.box : 0; total++; if (box >= 4) learned++;
        grid.append(h('button', { class: 'wordchip lvl' + Math.min(box, 6) + (it.kind === 'sentence' ? ' sent' : ''), onclick: function () { EQ.speech.speak(it.data.en); } },
          it.data.e ? h('span', null, it.data.e + ' ') : null, h('b', null, it.data.en), h('small', null, EQ.tr(it.data)),
          h('span', { class: 'dots' }, '●'.repeat(Math.min(box, 6)) + '○'.repeat(6 - Math.min(box, 6)))));
      });
      wrap.append(grid);
    });
    root().replaceChildren(h('div', { class: 'screen' }, topbar(), h('h1', null, '📚 ' + t('words')),
      h('div', { class: 'chip' }, '🧠 ' + learned + ' / ' + total + ' ' + t('learned')), wrap));
  }

  // A small sum keeps the child out of the settings.
  function gate() {
    const a = 6 + Math.floor(Math.random() * 4), b = 6 + Math.floor(Math.random() * 4);
    const ans = prompt(t('gate') + ' ' + a + ' × ' + b + ' = ?');
    if (ans === null) return;
    if (parseInt(ans, 10) === a * b) EQ.go('parent'); else EQ.game.toast('🙂');
  }

  function parent() {
    const s = S(), st = s.settings;
    function field(label, el) { return h('label', { class: 'field' }, h('span', null, label), el); }
    function sel(key, opts, onchange) {
      const e = h('select', { onchange: function () { st[key] = typeof opts[0][0] === 'number' ? Number(e.value) : e.value; EQ.store.save(); if (onchange) onchange(); } },
        opts.map(function (o) { return h('option', { value: o[0], selected: String(st[key]) === String(o[0]) }, o[1]); }));
      return e;
    }
    function check(key, onchange) {
      const e = h('input', { type: 'checkbox', checked: !!st[key], onchange: function () { st[key] = e.checked; EQ.store.save(); if (onchange) onchange(); } });
      return e;
    }
    const name = h('input', { type: 'text', value: st.name, oninput: function () { st.name = name.value.trim(); EQ.store.save(); } });
    const voices = EQ.speech.voices();
    const voiceSel = h('select', { onchange: function () { st.voice = voiceSel.value; EQ.store.save(); EQ.speech.speak('Hello! Let\'s learn English.'); } },
      h('option', { value: '' }, 'auto'), voices.map(function (v) { return h('option', { value: v.name, selected: v.name === st.voice }, v.name + ' (' + v.lang + ')'); }));

    // progress
    const rows = EQ.lessons.map(function (l) {
      return h('tr', null, h('td', null, (l.emoji || '') + ' ' + l.title), h('td', null, l.page || ''), h('td', null, '★'.repeat(s.stars[l.id] || 0) || '-'),
        h('td', null, Math.round(EQ.lessonProgress(l) * 100) + '%'));
    });
    const weak = EQ.allItems().filter(function (i) { const r = EQ.rec(i.id); return r && r.wrong > 0; })
      .sort(function (a, b) { return EQ.rec(b.id).wrong - EQ.rec(a.id).wrong; }).slice(0, 15);
    const days = [];
    for (let i = 13; i >= 0; i--) { const k = EQ.addDays(EQ.today(), -i); const d = s.days[k]; days.push(h('div', { class: 'day' + (d && d.daily ? ' on' : d && d.xp ? ' some' : ''), title: k + ': ' + (d ? d.xp : 0) + ' XP' }, k.slice(8))); }

    const file = h('input', { type: 'file', accept: '.json,application/json', style: { display: 'none' }, onchange: function () {
      const f = file.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = function () { try { EQ.store.importJson(rd.result); EQ.game.toast('✅'); EQ.go('home'); } catch (e) { alert('Bad file'); } };
      rd.readAsText(f);
    } });

    root().replaceChildren(h('div', { class: 'screen parent' }, back(), h('h1', null, '⚙️ ' + t('parent')),
      h('div', { class: 'card' },
        field('Imię / Имя', name),
        field('Język / Язык', sel('lang', [['pl', 'Polski'], ['ru', 'Русский']], function () { parent(); })),
        field('Głos / Голос', voiceSel),
        field('Tempo / Скорость', sel('rate', [[0.7, '0.7'], [0.8, '0.8'], [0.9, '0.9'], [1, '1.0']])),
        field('Nowe słowa dziennie / Новых слов в день', sel('newPerDay', [[4, '4'], [6, '6'], [8, '8'], [10, '10']])),
        field('Dźwięki / Звуки', check('sound')),
        field('Mikrofon (mówienie) / Микрофон', check('mic')),
        field('Timer w walce z bossem / Таймер в битве', check('timer')),
        field('Odblokuj wszystkie lekcje / Открыть все уроки', check('unlockAll'))),
      h('div', { class: 'card' }, h('h3', null, '📅 14 dni / дней'), h('div', { class: 'days' }, days),
        h('div', { class: 'psub' }, 'XP: ' + s.xp + ' · 🪙 ' + s.coins + ' · 🔥 best ' + s.best + ' · missions ' + s.stats.missions + ' · 🎤 ' + s.stats.spoken)),
      h('div', { class: 'card' }, h('h3', null, '📈'), h('table', { class: 'prog' }, h('tr', null, h('th', null, 'Lesson'), h('th', null, 'p.'), h('th', null, '★'), h('th', null, '%')), rows)),
      h('div', { class: 'card' }, h('h3', null, '🎯 Słabe tematy / Слабые темы'),
        Object.keys(s.weak || {}).length ? h('table', { class: 'prog' }, h('tr', null, h('th', null, 'Rule'), h('th', null, '✗'), h('th', null, '✓'), h('th', null, '')),
          Object.keys(s.weak).filter(function (k) { return k.indexOf('q:') !== 0; }).sort(function (a, b) { return EQ.weakness(b) - EQ.weakness(a); }).map(function (k) {
            const w = s.weak[k], bad = EQ.weakness(k) > 0.15;
            return h('tr', null, h('td', null, EQ.RULE_NAMES[k] || k), h('td', null, w.miss), h('td', null, w.hit), h('td', null, bad ? '⚠️ extra practice' : '✅'));
          })) : h('div', { class: 'psub' }, '-')),
      weak.length ? h('div', { class: 'card' }, h('h3', null, '🩹 Najtrudniejsze / Самое трудное'),
        h('div', { class: 'wordgrid' }, weak.map(function (i) { const r = EQ.rec(i.id); return h('div', { class: 'wordchip' }, h('b', null, i.data.en), h('small', null, EQ.tr(i.data) + ' · ✗' + r.wrong + ' ✓' + r.right)); }))) : null,
      h('div', { class: 'card row' },
        h('button', { class: 'btn ghost', onclick: function () {
          const a = h('a', { href: URL.createObjectURL(new Blob([EQ.store.exportJson()], { type: 'application/json' })), download: 'english-quest-progress-' + EQ.today() + '.json' });
          document.body.append(a); a.click(); a.remove();
        } }, '💾 Export'),
        h('button', { class: 'btn ghost', onclick: function () { file.click(); } }, '📂 Import'), file,
        h('button', { class: 'btn danger', onclick: function () { if (confirm('Reset ALL progress?')) { EQ.store.reset(); EQ.go('home'); } } }, '🗑 Reset'))));
  }

  const SCREENS = { home: home, map: map, games: games, shop: shop, words: words, parent: parent, album: album };
  EQ.go = function (name) {
    EQ.keyHandler = null; EQ.speech.stop();
    (SCREENS[name] || home)();
    window.scrollTo(0, 0);
    try { history.replaceState(null, '', '#' + name); } catch (e) { /* file:// */ }
  };
  EQ.start = function (mode, lessonId) {
    const steps = EQ.missionFor(mode, lessonId);
    if (!steps.length) { EQ.game.toast('👍'); EQ.go('home'); return; }
    EQ.runMission(steps, { mode: mode, lessonId: lessonId });
  };
})(window.EQ);
