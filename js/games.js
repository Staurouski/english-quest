/* Arcade games: Word Rain, Blitz 60, Memory, and the unit Boss battle. */
(function (EQ) {
  'use strict';
  const h = EQ.h, t = EQ.t;
  const S = function () { return EQ.store.s; };
  const app = function () { return document.getElementById('app'); };

  // Words the child has met; falls back to the first unlocked lessons.
  function pool(min) {
    let words = EQ.seenWords().map(function (i) { return i.data; });
    if (words.length < (min || 6)) words = EQ.lessons.filter(EQ.unlocked).flatMap(function (l) { return l.words; }).slice(0, 30);
    const seen = {};
    return words.filter(function (w) { if (seen[w.en]) return false; seen[w.en] = 1; return true; });
  }
  function header(title, extra) {
    return h('div', { class: 'gamebar' }, h('button', { class: 'xbtn', onclick: stop }, '✕'), h('h2', null, title), extra);
  }
  let timers = [], raf = 0;
  function stop() { timers.forEach(clearInterval); timers.forEach(clearTimeout); timers = []; cancelAnimationFrame(raf); EQ.keyHandler = null; EQ.speech.stop(); EQ.go('games'); }
  function cleanup() { timers.forEach(clearInterval); timers.forEach(clearTimeout); timers = []; cancelAnimationFrame(raf); EQ.keyHandler = null; }

  function intro(key, icon, info, start) {
    const rec = S().records[key] || 0;
    app().replaceChildren(h('div', { class: 'screen gameintro' },
      header(t(key)),
      h('div', { class: 'bigemoji bounce' }, icon),
      h('p', { class: 'lead' }, info),
      rec ? h('div', { class: 'chip' }, '🏆 ' + t('record') + ': ' + rec) : null,
      h('button', { class: 'btn primary huge', onclick: start }, '▶ ' + t('play'))));
  }

  function results(key, score, lines, xpGain, coinGain) {
    cleanup();
    const rec = S().records[key] || 0;
    const isRec = score > rec;
    if (isRec) S().records[key] = score;
    EQ.game.addXp(xpGain); EQ.game.addCoins(coinGain); EQ.game.bump(key);
    EQ.game.checkBadges(); EQ.store.save();
    EQ.sfx.win(); if (isRec) EQ.game.confetti();
    app().replaceChildren(h('div', { class: 'screen summary' },
      h('div', { class: 'bigemoji' }, isRec ? '🏆' : '🎮'),
      h('h1', null, isRec ? t('newRecord') : t('score') + ': ' + score),
      isRec ? h('div', { class: 'bigscore' }, score) : h('div', { class: 'psub' }, t('record') + ': ' + Math.max(rec, score)),
      h('div', { class: 'stats' }, h('div', { class: 'stat' }, h('b', null, '+' + xpGain), h('span', null, 'XP')), h('div', { class: 'stat' }, h('b', null, '🪙 +' + coinGain), h('span', null, t('sumCoins')))),
      lines,
      h('div', { class: 'row' },
        h('button', { class: 'btn primary big', onclick: function () { EQ.game.claimQuests(); EQ.games[key](); } }, '🔁 ' + t('again')),
        h('button', { class: 'btn ghost', onclick: function () { EQ.game.claimQuests(); EQ.go('games'); } }, '🎮 ' + t('games')))));
  }

  /* ---------- Word Rain ---------- */
  function rain() {
    const words = pool(6);
    if (words.length < 4) { EQ.game.toast(t('fewWords'), true); EQ.go('games'); return; }
    intro('rain', '🌧️', t('rainInfo'), function () {
      let lives = 3, score = 0, streak = 0, spawnEvery = 3400, speed = 38, lastSpawn = 0, last = performance.now(), hits = 0;
      const drops = [], missed = [];
      const arena = h('div', { class: 'arena' });
      const livesEl = h('span', { class: 'chip' }), scoreEl = h('span', { class: 'chip' });
      const input = h('input', { class: 'textin raininput', type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: t('typeHere') });
      app().replaceChildren(h('div', { class: 'screen game' }, header(t('rain'), h('div', { class: 'chips' }, livesEl, scoreEl)), arena, input));
      function paint() { livesEl.textContent = '❤️'.repeat(lives) + '🤍'.repeat(3 - lives); scoreEl.textContent = '⭐ ' + score; }
      function spawn() {
        const recent = drops.map(function (d) { return d.w.en; });
        const w = EQ.pick(words.filter(function (x) { return recent.indexOf(x.en) < 0; }) || words);
        if (!w) return;
        const el = h('div', { class: 'drop' }, w.e ? h('div', { class: 'de' }, w.e) : null, h('div', { class: 'dt' }, EQ.tr(w)));
        el.style.left = (6 + Math.random() * 70) + '%';
        arena.append(el);
        drops.push({ w: w, el: el, y: -60 });
      }
      function loop(now) {
        const dt = Math.min(0.05, (now - last) / 1000); last = now;
        if (now - lastSpawn > spawnEvery) { spawn(); lastSpawn = now; }
        const floor = arena.clientHeight - 70;
        for (let i = drops.length - 1; i >= 0; i--) {
          const d = drops[i]; d.y += speed * dt; d.el.style.transform = 'translateY(' + d.y + 'px)';
          if (d.y > floor) {
            drops.splice(i, 1); lives--; streak = 0; missed.push(d.w);
            d.el.classList.add('splash'); d.el.replaceChildren(h('div', { class: 'dt' }, d.w.en));
            setTimeout(function () { d.el.remove(); }, 1200);
            EQ.sfx.bad(); EQ.speech.speak(d.w.en); arena.classList.add('hurt'); setTimeout(function () { arena.classList.remove('hurt'); }, 300);
            paint();
            if (lives <= 0) { end(); return; }
          }
        }
        raf = requestAnimationFrame(loop);
      }
      input.addEventListener('input', function () {
        const v = input.value;
        const i = drops.findIndex(function (d) { return EQ.checkTyped(v, d.w.en) === 'ok'; });
        if (i < 0) return;
        const d = drops.splice(i, 1)[0];
        streak++; hits++; score += 10 + Math.min(streak, 10) * 2;
        d.el.classList.add('boom'); setTimeout(function () { d.el.remove(); }, 400);
        EQ.sfx.good(streak); EQ.speech.speak(d.w.en); input.value = '';
        if (hits % 4 === 0) { speed += 7; spawnEvery = Math.max(1300, spawnEvery - 260); }
        paint();
      });
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') input.value = ''; });
      function end() {
        cancelAnimationFrame(raf);
        const uniq = EQ.uniq(missed.map(function (w) { return w.en; }));
        results('rain', score, uniq.length ? h('div', { class: 'missed' }, h('div', { class: 'psub' }, '👀'), uniq.map(function (en) {
          const w = missed.find(function (x) { return x.en === en; });
          return h('button', { class: 'chip', onclick: function () { EQ.speech.speak(en); } }, (w.e ? w.e + ' ' : '') + en + ' = ' + EQ.tr(w));
        })) : null, Math.round(score / 4), Math.round(score / 15));
      }
      paint(); spawn(); lastSpawn = performance.now(); input.focus();
      raf = requestAnimationFrame(loop);
    });
  }

  /* ---------- Blitz 60 ---------- */
  function blitzStatements() {
    const words = pool(6);
    const out = [];
    words.forEach(function (w) {
      const other = EQ.pick(words.filter(function (x) { return x.en !== w.en && (!w.e || x.e !== w.e); }));
      if (!other) return;
      const pic = w.e ? w.e : EQ.tr(w);
      out.push({ big: pic, text: w.en, ok: true, say: w.en });
      out.push({ big: pic, text: other.en, ok: false, say: w.en, fix: w.en });
    });
    EQ.lessons.filter(EQ.unlocked).forEach(function (l) {
      l.quizzes.forEach(function (q) {
        if (q.type === 'fix') {
          const right = q.sentence.split(' ').map(function (tk) { return EQ.strip(tk) === q.wrong ? tk.replace(q.wrong, q.right) : tk; }).join(' ');
          out.push({ text: q.sentence, ok: false, fix: right, say: right }, { text: right, ok: true, say: right });
        } else if (q.type === 'mcq' && typeof q.q === 'string' && q.q.indexOf('___') >= 0 && q.options.indexOf('-') < 0) {
          const bad = EQ.pick(q.options.filter(function (o) { return o !== q.answer; }));
          out.push({ text: q.q.replace('___', q.answer), ok: true, say: q.q.replace('___', q.answer) });
          if (bad) out.push({ text: q.q.replace('___', bad), ok: false, fix: q.q.replace('___', q.answer), say: q.q.replace('___', q.answer) });
        }
      });
    });
    return EQ.shuffle(out);
  }
  function blitz() {
    const list = blitzStatements();
    if (list.length < 10) { EQ.game.toast(t('fewWords'), true); EQ.go('games'); return; }
    intro('blitz', '⚡', t('blitzInfo'), function () {
      let score = 0, combo = 0, left = 60, idx = 0, lock = false;
      const card = h('div', { class: 'blitzcard' });
      const timeFill = h('i'), scoreEl = h('span', { class: 'chip' }), comboEl = h('span', { class: 'chip fire' });
      const yes = h('button', { class: 'bbtn yes', onclick: function () { answer(true); } }, '✔'), no = h('button', { class: 'bbtn no', onclick: function () { answer(false); } }, '✘');
      app().replaceChildren(h('div', { class: 'screen game' }, header(t('blitz'), h('div', { class: 'chips' }, comboEl, scoreEl)),
        h('div', { class: 'bar big timebar' }, timeFill), card, h('div', { class: 'brow' }, no, yes), h('div', { class: 'psub' }, '⬅ ' + t('notRight') + '   |   ' + t('right') + ' ➡')));
      function paint() { scoreEl.textContent = '⭐ ' + score; comboEl.textContent = combo >= 3 ? '🔥 x' + (1 + Math.floor(combo / 3)) : '🔥'; timeFill.style.width = (left / 60 * 100) + '%'; }
      function show() {
        const s = list[idx % list.length];
        card.className = 'blitzcard in';
        card.replaceChildren(s.big ? h('div', { class: 'bigemoji' }, s.big) : null, h('div', { class: 'ptext' }, s.text));
      }
      function answer(v) {
        if (lock) return;
        const s = list[idx % list.length];
        const ok = v === s.ok;
        if (ok) { combo++; score += 1 + Math.floor(combo / 3); EQ.sfx.good(combo); card.classList.add('flashgood'); }
        else {
          combo = 0; EQ.sfx.bad(); card.classList.add('flashbad');
          if (s.fix) { lock = true; card.append(h('div', { class: 'fixhint' }, '✅ ' + s.fix)); EQ.speech.speak(s.say); timers.push(setTimeout(function () { lock = false; idx++; show(); }, 1300)); paint(); return; }
        }
        idx++; paint(); timers.push(setTimeout(show, 120));
      }
      EQ.keyHandler = function (e) { if (e.key === 'ArrowRight') answer(true); if (e.key === 'ArrowLeft') answer(false); };
      timers.push(setInterval(function () {
        left--; paint(); if (left <= 5 && left > 0) EQ.sfx.tick();
        if (left <= 0) results('blitz', score, null, score * 2, Math.round(score / 2));
      }, 1000));
      paint(); show();
    });
  }

  /* ---------- Memory ---------- */
  function memory() {
    const words = pool(6);
    if (words.length < 6) { EQ.game.toast(t('fewWords'), true); EQ.go('games'); return; }
    intro('memory', '🧠', t('memoryInfo'), function () {
      const chosen = EQ.sample(words, 6);
      const cards = EQ.shuffle(chosen.flatMap(function (w) { return [{ w: w, side: 'en' }, { w: w, side: 'pic' }]; }));
      let open = [], matched = 0, moves = 0, secs = 0, busy = false;
      const grid = h('div', { class: 'memgrid' });
      const movesEl = h('span', { class: 'chip' }), timeEl = h('span', { class: 'chip' });
      app().replaceChildren(h('div', { class: 'screen game' }, header(t('memory'), h('div', { class: 'chips' }, movesEl, timeEl)), grid));
      function paint() { movesEl.textContent = '👣 ' + moves; timeEl.textContent = '⏱ ' + secs + 's'; }
      timers.push(setInterval(function () { secs++; paint(); }, 1000));
      cards.forEach(function (c) {
        const face = c.side === 'en' ? h('span', { class: 'mword' }, c.w.en) : (c.w.e ? h('span', { class: 'memoji' }, c.w.e) : h('span', { class: 'mword tr' }, EQ.tr(c.w)));
        const el = h('button', { class: 'mcard' }, h('div', { class: 'mback' }, '❓'), h('div', { class: 'mface' }, face));
        el.addEventListener('click', function () {
          if (busy || el.classList.contains('open')) return;
          el.classList.add('open'); EQ.sfx.tap();
          if (c.side === 'en') EQ.speech.speak(c.w.en);
          open.push({ c: c, el: el });
          if (open.length === 2) {
            moves++; paint();
            const a = open[0], b = open[1];
            if (a.c.w.en === b.c.w.en) {
              a.el.classList.add('done'); b.el.classList.add('done'); open = []; matched++; EQ.sfx.good(matched); EQ.speech.speak(a.c.w.en);
              if (matched === chosen.length) {
                const score = Math.max(10, 100 - (moves - 6) * 6 - Math.floor(secs / 3));
                timers.push(setTimeout(function () { results('memory', score, null, Math.round(score / 3), Math.round(score / 10)); }, 700));
              }
            } else {
              busy = true;
              timers.push(setTimeout(function () { a.el.classList.remove('open'); b.el.classList.remove('open'); open = []; busy = false; }, 900));
            }
          }
        });
        grid.append(el);
      });
      paint();
    });
  }

  /* ---------- Boss battle ---------- */
  const BOSSES = [
    { e: '👾', name: 'Messy Monster' }, { e: '🐲', name: 'Grammar Dragon' }, { e: '🦑', name: 'Captain Kraken' },
    { e: '🤖', name: 'Mega Robot' }, { e: '👻', name: 'Spelling Ghost' }, { e: '🦖', name: 'Rex the Wrong' }
  ];
  EQ.bossOf = function (unit) { return BOSSES[EQ.units().findIndex(function (u) { return u.name === unit.name; }) % BOSSES.length]; };

  function bossQuestions(unit) {
    const qs = [];
    unit.lessons.forEach(function (l) {
      l.quizzes.forEach(function (q, i) { if (['fix', 'type', 'mcq', 'tf', 'order'].indexOf(q.type) >= 0) qs.push(EQ.F.quiz(q, l.id + '/q/' + i)); });
      EQ.itemsOf(l).forEach(function (it) {
        if (it.kind === 'word' && Math.random() < 0.5) qs.push(Math.random() < 0.5 ? EQ.F.typeWord(it, true) : EQ.F.spell(it));
        if (it.kind === 'sentence' && Math.random() < 0.3) qs.push(EQ.F.order(it, true));
      });
    });
    return EQ.shuffle(qs.filter(Boolean)).map(function (q) { q.itemIds = []; return q; });
  }

  function boss(unitName) {
    const unit = EQ.units().find(function (u) { return u.name === unitName; });
    const B = EQ.bossOf(unit);
    const qs = bossQuestions(unit);
    const MAXHP = 10;
    let hp = MAXHP, hearts = 3, combo = 0, qi = 0;
    const bossEl = h('div', { class: 'bossface' }, B.e);
    const hpFill = h('i'), heartsEl = h('div', { class: 'hearts' }), timeFill = h('i');
    const stage = h('div', { class: 'stage' }), foot = h('div', { class: 'footer' });
    app().replaceChildren(h('div', { class: 'screen game bossgame' },
      header('⚔️ ' + B.name, heartsEl),
      h('div', { class: 'bossarena' }, bossEl, h('div', { class: 'bar hp' }, hpFill), h('div', { class: 'petfight' }, EQ.game.petEl(false))),
      S().settings.timer ? h('div', { class: 'bar timebar' }, timeFill) : null, stage, foot));
    function paint() { hpFill.style.width = (hp / MAXHP * 100) + '%'; heartsEl.textContent = '❤️'.repeat(hearts) + '🤍'.repeat(3 - hearts); }
    let tick = null;
    function ask() {
      clearInterval(tick);
      if (hp <= 0) return win();
      if (hearts <= 0) return lose();
      const q = qs[qi++ % qs.length];
      const body = h('div', { class: 'body' });
      stage.replaceChildren(h('h2', { class: 'title' }, t(q.title)), body);
      let answered = false;
      EQ.renderStep(q, body, foot, function (r) {
        if (answered) return; answered = true; clearInterval(tick);
        outcome(q, r.ok || r.skipped);
      });
      EQ.keyHandler = function (e) { if (e.target && e.target.tagName === 'INPUT') return; if (body.onkey) body.onkey(e); };
      let left = 30;
      if (S().settings.timer) {
        timeFill.style.width = '100%';
        tick = setInterval(function () {
          left--; timeFill.style.width = (left / 30 * 100) + '%';
          if (left <= 5 && left > 0) EQ.sfx.tick();
          if (left <= 0) { clearInterval(tick); if (!answered) { answered = true; outcome(q, false); } }
        }, 1000);
        timers.push(tick);
      }
    }
    function outcome(q, ok) {
      if (ok) {
        combo++; const dmg = combo >= 3 ? 2 : 1; hp = Math.max(0, hp - dmg);
        bossEl.classList.remove('hit'); void bossEl.offsetWidth; bossEl.classList.add('hit'); EQ.sfx.hit();
        EQ.game.floatText(bossEl, '-' + dmg + (dmg > 1 ? ' 💥' : ''), 'dmg');
      } else {
        combo = 0; hearts--; EQ.sfx.bad();
        document.querySelector('.bossgame').classList.add('hurt'); setTimeout(function () { const g = document.querySelector('.bossgame'); if (g) g.classList.remove('hurt'); }, 400);
        const ans = q.kind === 'fix' ? q.fixed : q.title === 'q.tf' ? null : q.answer;
        if (ans) { EQ.game.toast('✅ ' + ans); if (q.say || ans) EQ.speech.speak(q.say || ans); }
      }
      paint();
      timers.push(setTimeout(ask, ok ? 900 : 1900));
    }
    function win() {
      cleanup(); const first = !S().bosses[unit.name];
      S().bosses[unit.name] = (S().bosses[unit.name] || 0) + 1;
      const coins = first ? 80 : 25, xp = first ? 80 : 30;
      EQ.game.addCoins(coins); EQ.game.addXp(xp); EQ.game.checkBadges(); EQ.store.save();
      EQ.sfx.win(); EQ.game.confetti(150);
      app().replaceChildren(h('div', { class: 'screen summary' }, h('div', { class: 'bigemoji' }, '🏆'), h('h1', null, t('bossWin')),
        h('div', { class: 'bigemoji small faded' }, B.e + '💫'),
        h('div', { class: 'stats' }, h('div', { class: 'stat' }, h('b', null, '+' + xp), h('span', null, 'XP')), h('div', { class: 'stat' }, h('b', null, '🪙 +' + coins), h('span', null, t('sumCoins')))),
        h('button', { class: 'btn primary big', onclick: function () { EQ.go('map'); } }, '🗺️ ' + t('map'))));
    }
    function lose() {
      cleanup(); EQ.game.addXp(10); EQ.store.save();
      app().replaceChildren(h('div', { class: 'screen summary' }, h('div', { class: 'bigemoji' }, B.e), h('h1', null, t('bossLose')),
        h('div', { class: 'row' }, h('button', { class: 'btn primary big', onclick: function () { boss(unitName); } }, '⚔️ ' + t('again')),
          h('button', { class: 'btn ghost', onclick: function () { EQ.go('map'); } }, '🗺️ ' + t('map')))));
    }
    paint(); EQ.speech.speak('Can you beat me? Let\'s go!', { pitch: 0.6 }); setTimeout(ask, 600);
  }

  EQ.games = { rain: rain, blitz: blitz, memory: memory, boss: boss };
})(window.EQ);
