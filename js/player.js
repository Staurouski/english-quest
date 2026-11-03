/* Drawing and checking every exercise kind, plus the mission runner (progress, combo, feedback, retries, stars). */
(function (EQ) {
  'use strict';
  const h = EQ.h, t = EQ.t;

  function speakBtns(text, big) {
    return h('div', { class: 'speakrow' + (big ? ' bigspeak' : '') },
      h('button', { class: 'speak', title: 'Listen', onclick: function (e) { e.stopPropagation(); EQ.speech.speak(text); } }, '🔊'),
      h('button', { class: 'speak slow', title: 'Slowly', onclick: function (e) { e.stopPropagation(); EQ.speech.slow(text); } }, '🐢'));
  }
  function promptBlock(st) {
    const p = st.prompt || {};
    return h('div', { class: 'prompt' },
      p.big ? h('div', { class: 'bigemoji pop' }, p.big) : null,
      p.text ? h('div', { class: 'ptext' }, p.text) : null,
      p.sub ? h('div', { class: 'psub' }, p.sub) : null,
      st.audio ? speakBtns(st.audio, p.listen) : null);
  }
  function shake(el) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }

  /* Renders one step into `body`, using `foot` for its buttons. Calls done(result) exactly once:
     result = { ok, typo, hint, skipped, intro, failedIds, partial } */
  EQ.renderStep = function (st, body, foot, done) {
    let finished = false;
    function finish(r) { if (finished) return; finished = true; done(Object.assign({ failedIds: r.ok || r.skipped || r.intro ? [] : st.itemIds }, r)); }
    foot.replaceChildren();
    const R = RENDER[st.kind];
    R(st, body, foot, finish);
    if (st.autoplay && st.audio) setTimeout(function () { EQ.speech.speak(st.audio); }, 350);
    return finish;
  };

  const RENDER = {};

  RENDER.flash = function (st, body, foot, finish) {
    const d = st.item.data, word = st.item.kind === 'word';
    const card = h('div', { class: 'flashcard flip-in', onclick: function () { EQ.speech.speak(d.en); } },
      h('div', { class: 'ribbon' }, '✨ ' + t('newWord')),
      d.e ? h('div', { class: 'bigemoji' }, d.e) : null,
      h('div', { class: word ? 'fword' : 'fsent' }, d.en),
      h('div', { class: 'psub' }, EQ.tr(d)),
      speakBtns(d.en));
    body.append(card);
    if (EQ.speech.canListen()) body.append(micWidget(d.en, function (ok) { if (ok) { EQ.game.floatText(card, '🎤 +5', 'good'); EQ.game.addXp(5); } }, true));
    foot.append(h('button', { class: 'btn primary', 'data-enter': '1', onclick: function () { finish({ intro: true }); } }, t('gotIt') + ' 👍'));
    setTimeout(function () { EQ.speech.speak(d.en); }, 300);
  };

  RENDER.choice = function (st, body, foot, finish) {
    const big = st.options.some(function (o) { return o.big; });
    const grid = h('div', { class: 'options' + (big ? ' pics' : '') + (st.options.length === 2 ? ' two' : '') });
    let locked = false;
    st.options.forEach(function (o, i) {
      const b = h('button', { class: 'opt' + (o.big ? ' big' : ''), 'data-v': o.value },
        h('span', { class: 'key' }, String(i + 1)), h('span', { class: 'lbl' }, o.label));
      b.addEventListener('click', function () {
        if (locked) return; locked = true;
        const ok = o.value === st.answer;
        b.classList.add(ok ? 'right' : 'wrong');
        if (!ok) { shake(b); grid.querySelectorAll('.opt').forEach(function (c) { if (c.getAttribute('data-v') === st.answer) c.classList.add('right'); }); }
        if (big) grid.querySelectorAll('.opt').forEach(function (c) { const v = c.getAttribute('data-v'); c.append(h('span', { class: 'cap' }, v)); });
        finish({ ok: ok });
      });
      grid.append(b);
    });
    body.append(promptBlock(st), grid);
    body.onkey = function (e) { const n = parseInt(e.key, 10); if (n >= 1 && n <= st.options.length) grid.children[n - 1].click(); };
  };

  function pattern(ans, n) {
    let shown = 0;
    return ans.split('').map(function (c) {
      if (c === ' ') return ' ';
      if (!/[A-Za-z0-9]/.test(c)) return c;
      shown++;
      return shown <= n ? c : '_';
    }).join(' ');
  }

  RENDER.type = function (st, body, foot, finish) {
    let hints = 0, locked = false;
    const input = h('input', { class: 'textin' + (st.long ? ' long' : ''), type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: t('typeHere') });
    const pat = h('div', { class: 'pattern' }, st.long ? '' : pattern(st.answer, 0));
    function check() {
      if (locked || !input.value.trim()) return;
      const res = EQ.checkTyped(input.value, st.answer, st.alt);
      locked = true; input.disabled = true;
      input.classList.add(res === 'no' ? 'wrong' : 'right');
      if (res === 'no') shake(input);
      finish({ ok: res !== 'no', typo: res === 'typo', hint: hints > 0 });
    }
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); check(); } });
    body.append(promptBlock(st), pat, input);
    const hintBtn = st.hintable || st.long ? h('button', { class: 'btn ghost', onclick: function () {
      if (locked) return; hints++;
      if (st.long) { pat.textContent = st.answer.split(' ').map(function (w, i) { return i < hints * 2 ? w : w.replace(/[A-Za-z]/g, '_'); }).join(' '); }
      else pat.textContent = pattern(st.answer, hints);
      input.focus();
    } }, '💡 ' + t('hint')) : null;
    foot.append(hintBtn, h('button', { class: 'btn primary', onclick: check }, t('check')));
    setTimeout(function () { input.focus(); }, 60);
  };

  RENDER.spell = function (st, body, foot, finish) {
    const target = st.answer.split('');
    const slots = [], placed = []; // placed[i] = tile index or null for letter slots
    const tiles = st.tiles.map(function (c, i) { return { c: c, i: i, used: false }; });
    const row = h('div', { class: 'slots' }), bank = h('div', { class: 'letterbank' });
    let locked = false;
    target.forEach(function (c, i) {
      if (/[A-Za-z']/.test(c)) { slots.push(i); placed.push(null); row.append(h('span', { class: 'slot' })); }
      else row.append(h('span', { class: 'slot gap' }, c === ' ' ? '' : c));
    });
    const slotEls = Array.prototype.filter.call(row.children, function (e) { return !e.classList.contains('gap'); });
    function draw() {
      slotEls.forEach(function (el, k) {
        const p = placed[k];
        el.textContent = p == null ? '' : tiles[p].c;
        el.classList.toggle('filled', p != null);
        el.onclick = function () { if (locked || p == null) return; tiles[p].used = false; placed[k] = null; EQ.sfx.tap(); draw(); };
      });
      bank.replaceChildren.apply(bank, tiles.map(function (tl) {
        return h('button', { class: 'ltile' + (tl.used ? ' used' : ''), disabled: tl.used || locked, onclick: function () { put(tl); } }, tl.c);
      }));
      if (placed.every(function (p) { return p != null; })) check();
    }
    function put(tl) {
      if (locked || tl.used) return;
      const k = placed.indexOf(null); if (k < 0) return;
      placed[k] = tl.i; tl.used = true; EQ.sfx.tap(); draw();
    }
    function check() {
      locked = true;
      const word = placed.map(function (p) { return tiles[p].c; }).join('');
      const want = target.filter(function (c) { return /[A-Za-z']/.test(c); }).join('').toLowerCase();
      const ok = word === want;
      row.classList.add(ok ? 'right' : 'wrong');
      if (!ok) shake(row);
      finish({ ok: ok });
    }
    body.onkey = function (e) {
      if (e.key === 'Backspace') { for (let k = placed.length - 1; k >= 0; k--) if (placed[k] != null) { tiles[placed[k]].used = false; placed[k] = null; draw(); break; } return; }
      const c = e.key.toLowerCase(); const tl = tiles.find(function (x) { return !x.used && x.c === c; }); if (tl) put(tl);
    };
    body.append(promptBlock(st), row, bank);
    foot.append(h('button', { class: 'btn ghost', onclick: function () { if (locked) return; tiles.forEach(function (x) { x.used = false; }); placed.fill(null); draw(); } }, t('clear')));
    draw();
  };

  // Microphone widget: listens, compares with the target, calls cb(ok, heard).
  function micWidget(target, cb, optional) {
    const status = h('div', { class: 'heard' });
    const btn = h('button', { class: 'mic' + (optional ? ' small' : '') }, '🎤');
    let busy = false;
    btn.addEventListener('click', function () {
      if (busy) return; busy = true; btn.classList.add('live'); status.textContent = '...';
      EQ.speech.listen().then(function (alts) {
        busy = false; btn.classList.remove('live');
        const best = alts.reduce(function (m, a) { return Math.max(m, EQ.similar(a, target)); }, 0);
        const ok = best >= 0.72 || alts.some(function (a) { return EQ.norm(a).indexOf(EQ.norm(target)) >= 0; });
        status.replaceChildren(t('heard') + ' ', h('b', null, alts[0] || '?'), ok ? ' ✅' : ' 🤔');
        if (ok) { EQ.store.s.stats.spoken++; EQ.game.bump('spoken'); EQ.sfx.good(); }
        cb(ok, alts[0] || '');
      }).catch(function (err) {
        busy = false; btn.classList.remove('live');
        status.textContent = t('micOff') + (err ? ' (' + err + ')' : '');
        if (err === 'not-allowed' || err === 'service-not-allowed') EQ.micBlocked = true;
        cb(null, '');
      });
    });
    return h('div', { class: 'micbox' + (optional ? ' optional' : '') }, optional ? h('span', { class: 'psub' }, '🎤 ' + t('speakNow')) : null, btn, status);
  }

  RENDER.speak = function (st, body, foot, finish) {
    let tries = 0;
    body.append(promptBlock(st), h('div', { class: 'psub' }, t('speakNow')),
      micWidget(st.answer, function (ok) {
        if (ok === null) { finish({ skipped: true }); return; }
        tries++;
        if (ok) finish({ ok: true, hint: tries > 1 });
        else if (tries >= 3) finish({ skipped: true });
        else EQ.game.toast(t('tryAgain'));
      }));
    foot.append(h('button', { class: 'btn ghost', onclick: function () { finish({ skipped: true }); } }, t('skip')));
    setTimeout(function () { EQ.speech.speak(st.answer); }, 300);
  };

  RENDER.order = function (st, body, foot, finish) {
    const tiles = st.tiles.map(function (x, i) { return { i: i, t: x }; });
    let placed = [], locked = false;
    const row = h('div', { class: 'answerrow' }), bank = h('div', { class: 'bank' });
    const checkBtn = h('button', { class: 'btn primary', disabled: true }, t('check'));
    function draw() {
      row.replaceChildren.apply(row, placed.map(function (p) {
        return h('button', { class: 'tile in', onclick: function () { if (locked) return; placed = placed.filter(function (x) { return x !== p; }); EQ.sfx.tap(); draw(); } }, p.t);
      }));
      bank.replaceChildren.apply(bank, tiles.map(function (p) {
        const used = placed.indexOf(p) >= 0;
        return h('button', { class: 'tile' + (used ? ' used' : ''), disabled: used, onclick: function () { if (locked) return; placed.push(p); EQ.sfx.tap(); draw(); } }, p.t);
      }));
      checkBtn.disabled = !placed.length;
    }
    checkBtn.addEventListener('click', function () {
      if (locked || !placed.length) return; locked = true;
      const ok = EQ.norm(placed.map(function (p) { return p.t; }).join(' ')) === EQ.norm(st.answer);
      row.classList.add(ok ? 'right' : 'wrong'); if (!ok) shake(row);
      finish({ ok: ok });
    });
    body.append(promptBlock(st), row, bank);
    foot.append(h('button', { class: 'btn ghost', onclick: function () { if (!locked) { placed = []; draw(); } } }, t('clear')), checkBtn);
    draw();
  };

  RENDER.match = function (st, body, foot, finish) {
    let sel = null, left = st.left.length;
    const failed = [];
    const L = h('div', { class: 'col' }), Rc = h('div', { class: 'col' });
    st.left.forEach(function (l) {
      const b = h('button', { class: 'pair' }, l.label);
      b.addEventListener('click', function () {
        if (b.classList.contains('ok')) return;
        EQ.speech.speak(l.label);
        if (sel) sel.b.classList.remove('sel');
        sel = { id: l.id, b: b }; b.classList.add('sel');
      });
      L.append(b);
    });
    st.right.forEach(function (r) {
      const b = h('button', { class: 'pair' + (r.big ? ' big' : '') }, r.label);
      b.addEventListener('click', function () {
        if (b.classList.contains('ok') || !sel) return;
        if (sel.id === r.id) {
          b.classList.add('ok'); sel.b.classList.remove('sel'); sel.b.classList.add('ok'); sel = null; left--; EQ.sfx.good(st.left.length - left);
          if (!left) finish({ ok: failed.length === 0, partial: failed.length > 0, failedIds: failed });
        } else {
          if (failed.indexOf(sel.id) < 0) failed.push(sel.id);
          const sb = sel.b; sb.classList.remove('sel'); sel = null;
          b.classList.add('no'); sb.classList.add('no'); EQ.sfx.bad();
          setTimeout(function () { b.classList.remove('no'); sb.classList.remove('no'); }, 450);
        }
      });
      Rc.append(b);
    });
    body.append(h('div', { class: 'psub' }, t('pairsTip')), h('div', { class: 'pairs' }, L, Rc));
  };

  RENDER.sort = function (st, body, foot, finish) {
    let sel = null, mistakes = 0, left = st.items.length;
    const chips = h('div', { class: 'chips sortchips' });
    const boxes = h('div', { class: 'buckets n' + st.buckets.length });
    function drop(chip, item, bucketEl, name) {
      if (item.bucket === name) {
        chip.remove(); bucketEl.querySelector('.inside').append(h('span', { class: 'chip done' }, item.text));
        EQ.sfx.good(st.items.length - left); left--; sel = null;
        if (/^[\x00-\x7f]+$/.test(item.text)) EQ.speech.speak(item.text);
        if (!left) finish({ ok: mistakes <= 1, partial: mistakes > 0 });
      } else {
        mistakes++; EQ.sfx.bad(); shake(bucketEl); chip.classList.remove('sel'); sel = null;
      }
    }
    st.items.forEach(function (it) {
      const chip = h('button', { class: 'chip big', draggable: 'true' }, it.text);
      chip.addEventListener('click', function () {
        chips.querySelectorAll('.sel').forEach(function (x) { x.classList.remove('sel'); });
        sel = { chip: chip, item: it }; chip.classList.add('sel'); EQ.sfx.tap();
      });
      chip.addEventListener('dragstart', function (e) { sel = { chip: chip, item: it }; try { e.dataTransfer.setData('text/plain', it.text); } catch (x) { /* old browser */ } });
      chips.append(chip);
    });
    st.buckets.forEach(function (name) {
      const b = h('div', { class: 'bucket' }, h('div', { class: 'bname' }, name), h('div', { class: 'inside' }));
      b.addEventListener('click', function () { if (sel) drop(sel.chip, sel.item, b, name); });
      b.addEventListener('dragover', function (e) { e.preventDefault(); b.classList.add('over'); });
      b.addEventListener('dragleave', function () { b.classList.remove('over'); });
      b.addEventListener('drop', function (e) { e.preventDefault(); b.classList.remove('over'); if (sel) drop(sel.chip, sel.item, b, name); });
      boxes.append(b);
    });
    body.append(promptBlock(st), h('div', { class: 'psub' }, t('sortTip')), chips, boxes);
  };

  RENDER.fix = function (st, body, foot, finish) {
    let wrongClicks = 0, found = false;
    const sentence = h('div', { class: 'fixline' });
    st.sentence.split(' ').forEach(function (tok) {
      const b = h('button', { class: 'word' }, tok);
      b.addEventListener('click', function () {
        if (found) return;
        if (EQ.strip(tok) === st.wrong) { found = true; b.classList.add('culprit'); EQ.sfx.pop(); askFix(b); }
        else { wrongClicks++; b.classList.add('nope'); shake(b); EQ.sfx.bad(); }
      });
      sentence.append(b);
    });
    function askFix(btn) {
      const input = h('input', { class: 'textin', type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: st.wrong + ' ➜ ?' });
      function check() {
        if (!input.value.trim()) return;
        const res = EQ.checkTyped(input.value, st.right, []);
        // capital letters matter for nationality/name mistakes
        const caseOk = st.right.toLowerCase() === st.wrong.toLowerCase() ? input.value.trim() === st.right : true;
        const ok = res !== 'no' && caseOk;
        input.disabled = true; input.classList.add(ok ? 'right' : 'wrong');
        btn.textContent = btn.textContent.replace(st.wrong, st.right); btn.classList.add('fixed');
        finish({ ok: ok && wrongClicks === 0, partial: ok && wrongClicks > 0, typo: res === 'typo' });
      }
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); check(); } });
      body.append(h('div', { class: 'psub' }, t('fixType')), input);
      foot.replaceChildren(h('button', { class: 'btn primary', onclick: check }, t('check')));
      setTimeout(function () { input.focus(); }, 50);
    }
    body.append(h('div', { class: 'bigemoji small' }, '🕵️'), h('div', { class: 'psub' }, t('fixTip')), sentence);
  };

  RENDER.chat = function (st, body, foot, finish) {
    const log = h('div', { class: 'chatlog' });
    const replies = h('div', { class: 'replies' });
    let turn = 0, mistakes = 0;
    function bubble(who, text, me) {
      const b = h('div', { class: 'bubble ' + (me ? 'me' : 'bot') },
        me ? null : h('span', { class: 'ava' }, st.who.e),
        h('div', { class: 'btext' }, me ? null : h('b', null, st.who.name), text,
          me ? null : h('button', { class: 'mini', onclick: function () { EQ.speech.speak(text); } }, '🔊')),
        me ? h('span', { class: 'ava' }, EQ.game.pet().e) : null);
      log.append(b); log.scrollTop = log.scrollHeight;
      return b;
    }
    function next() {
      if (turn >= st.turns.length) { finish({ ok: mistakes === 0, partial: mistakes > 0 }); return; }
      const tn = st.turns[turn];
      const typing = h('div', { class: 'bubble bot typing' }, h('span', { class: 'ava' }, st.who.e), h('div', { class: 'btext' }, h('i'), h('i'), h('i')));
      log.append(typing); replies.replaceChildren();
      setTimeout(function () {
        typing.remove(); bubble(st.who.name, tn.say, false); EQ.speech.speak(tn.say);
        const correct = tn.replies[0];
        EQ.shuffle(tn.replies).forEach(function (r) {
          const b = h('button', { class: 'reply' }, r);
          b.addEventListener('click', function () {
            if (r === correct) {
              EQ.sfx.good(turn); replies.replaceChildren(); bubble('me', r, true); EQ.speech.speak(r, { pitch: 1.3 });
              turn++; setTimeout(next, 900);
            } else { mistakes++; b.classList.add('wrong'); b.disabled = true; shake(b); EQ.sfx.bad(); }
          });
          replies.append(b);
        });
      }, 700);
    }
    body.append(h('div', { class: 'chathead' }, h('span', { class: 'ava big' }, st.who.e), h('b', null, st.who.name)), log, h('div', { class: 'psub' }, t('chatTip')), replies);
    next();
  };

  /* ---------------- mission runner ---------------- */
  EQ.runMission = function (steps, opts) {
    opts = opts || {};
    const app = document.getElementById('app');
    if (!steps.length) { EQ.go('home'); return; }
    const queue = steps.slice();
    const S = EQ.store.s;
    const itemMap = {}; EQ.allItems().forEach(function (i) { itemMap[i.id] = i; });
    const remaining = {}, failed = {};
    queue.forEach(function (s) { s.itemIds.forEach(function (id) { remaining[id] = (remaining[id] || 0) + 1; }); });
    const newStickers = [];
    let total = queue.filter(function (s) { return s.kind !== 'flash'; }).length, done = 0, xp = 0, combo = 0, bestCombo = 0, firstOk = 0, firstAll = 0;

    const fill = h('i'), comboEl = h('div', { class: 'combo' }), xpEl = h('span', { class: 'xpchip' }, '⭐ 0');
    const stage = h('div', { class: 'stage' }), foot = h('div', { class: 'footer' }), fb = h('div', { class: 'feedback' });
    const quit = h('button', { class: 'xbtn', onclick: function () { if (confirm(t('quit'))) { EQ.speech.stop(); EQ.go('home'); } } }, '✕');
    app.replaceChildren(h('div', { class: 'session' }, h('div', { class: 'topbar' }, quit, h('div', { class: 'bar big' }, fill), comboEl, xpEl), stage, fb, foot));

    function paint() {
      fill.style.width = Math.min(100, Math.round(done / Math.max(1, total) * 100)) + '%';
      xpEl.textContent = '⭐ ' + xp;
      comboEl.replaceChildren(combo >= 2 ? h('span', { class: 'flame' + (combo >= 10 ? ' hot' : '') }, '🔥 x' + combo) : '');
    }
    function next() {
      EQ.speech.stop(); fb.className = 'feedback'; fb.replaceChildren(); paint();
      if (!queue.length) { summary(); return; }
      const st = queue.shift();
      const body = h('div', { class: 'body' });
      stage.replaceChildren(h('h2', { class: 'title' }, st.kind === 'flash' ? '' : t(st.title),
        st.weakFocus ? h('span', { class: 'focustag' }, '🎯 ' + EQ.RULE_NAMES[st.weakFocus]) : null), body);
      stage.classList.remove('in'); void stage.offsetWidth; stage.classList.add('in');
      current = body;
      const fin = EQ.renderStep(st, body, foot, function (r) { result(st, r); });
      // "I don't know" is better than guessing: it opens the mini lesson straight away.
      if (['choice', 'type', 'spell', 'order', 'fix'].indexOf(st.kind) >= 0) {
        stage.append(h('button', { class: 'idk', onclick: function () { fin({ ok: false, idk: true }); } }, '🤷 ' + t('idk')));
      }
    }
    let current = null;

    function result(st, r) {
      if (r.intro) { next(); return; }
      if (st.quizId) S.quizSeen[st.quizId] = (S.quizSeen[st.quizId] || 0) + 1;
      const rk = EQ.ruleKey(st);
      if (rk && !r.skipped) {
        S.weak = S.weak || {};
        const wr = S.weak[rk] || (S.weak[rk] = { miss: 0, hit: 0 });
        if (r.ok && !r.partial && !r.typo) wr.hit++; else wr.miss++;
      }
      done++;
      const clean = r.ok && !r.typo && !r.hint && !st.isRetry;
      if (r.ok || r.skipped) { if (clean) combo++; } else combo = 0;
      if (combo > bestCombo) bestCombo = combo;
      EQ.game.noteCombo(combo);
      let gain = 0;
      if (r.ok) gain = clean ? 10 + Math.min(combo, 10) : 5;
      else if (r.partial) gain = 4;
      xp += gain; EQ.game.addXp(gain); EQ.game.bump('steps');
      if (!st.isRetry) { firstAll++; if (r.ok && !r.partial) firstOk++; }
      (r.failedIds || []).forEach(function (id) { failed[id] = true; });
      // A missed single-item step comes back a few steps later in an easier form.
      if (!r.ok && !r.skipped && !st.isRetry && st.itemIds.length === 1 && itemMap[st.itemIds[0]]) {
        const it = itemMap[st.itemIds[0]];
        // after the mini lesson he must recall it on his own a few steps later
        const retry = it.kind === 'word' ? (st.kind === 'spell' ? EQ.F.typeWord(it, false) : EQ.F.spell(it)) : EQ.F.order(it, false);
        retry.isRetry = true; remaining[it.id]++; total++;
        queue.splice(Math.min(4, queue.length), 0, retry);
      }
      st.itemIds.forEach(function (id) {
        remaining[id]--;
        if (remaining[id] <= 0 && itemMap[id]) {
          const before = (EQ.rec(id) || {}).box || 0;
          EQ.grade(id, !failed[id]);
          if (before < 4 && EQ.rec(id).box >= 4 && itemMap[id].kind === 'word') { newStickers.push(itemMap[id].data); }
        }
      });
      EQ.store.save();

      const good = r.ok || r.skipped;
      const ans = st.kind === 'fix' ? st.fixed : (st.kind === 'choice' && st.title === 'q.tf') ? null : st.answer;
      foot.replaceChildren();
      const idk = stage.querySelector('.idk'); if (idk) idk.remove();
      if (good || r.partial) {
        fb.className = 'feedback show ' + (r.typo || r.partial ? 'typo' : 'good');
        const why = (r.typo || r.partial) ? EQ.why(st) : null;
        fb.replaceChildren(
          h('div', { class: 'fbtext' },
            !r.typo && !r.partial ? h('b', null, (r.skipped ? '👌 ' : '🎉 ') + (r.skipped ? '' : t('praise'))) : null,
            r.typo ? [t('typo') + ' ', h('b', null, ans)] : null,
            r.partial && !r.typo ? ['👍 ', ans ? h('b', null, ans) : null] : null,
            gain ? h('span', { class: 'gain' }, ' +' + gain + ' XP') : null,
            why ? h('div', { class: 'why' }, '💡 ' + EQ.tr(why)) : null),
          h('button', { class: 'btn primary', 'data-enter': '1', onclick: next }, t('next') + ' ➜'));
        EQ.sfx.good(combo); if (combo && combo % 5 === 0) EQ.game.toast('🔥 ' + t('combo') + ' x' + combo + '!', true);
        if (st.say) setTimeout(function () { EQ.speech.speak(st.say); }, 300);
      } else {
        teach(st, ans, r);
      }
    }

    // Mini lesson after a mistake or "I don't know": the right answer with picture, sound, translation,
    // memory tip and the rule, then he writes it once himself before moving on.
    function teach(st, ans, r) {
      if (!r.idk) EQ.sfx.bad();
      const item = st.itemIds.length === 1 ? itemMap[st.itemIds[0]] : null;
      const d = item ? item.data : null;
      const target = d ? d.en : ans;
      const why = EQ.why(st);
      const tip = d && d.tip ? EQ.tr(d.tip) : '';
      const nextBtn = h('button', { class: 'btn primary', disabled: true, onclick: next }, t('next') + ' ➜');
      const parts = [h('div', { class: 'teachhead' }, r.idk ? '🧠 ' + t('teachTitle') : '🙈 ' + t('wrong'))];
      if (d) {
        parts.push(h('div', { class: 'teachcard' }, d.e ? h('div', { class: 'temoji' }, d.e) : null,
          h('div', { class: 'tmain' }, h('div', { class: 'tword' }, d.en), h('div', { class: 'psub' }, EQ.tr(d))), speakBtns(d.en)));
        if (item.kind === 'sentence' && ans && EQ.norm(ans) !== EQ.norm(d.en)) parts.push(h('div', { class: 'tanswer' }, '✅ ', h('b', null, ans)));
      } else if (ans) {
        parts.push(h('div', { class: 'teachcard' }, h('div', { class: 'tmain' }, h('div', { class: 'tword' }, ans)), /^[\x00-\x7f\u2019]+$/.test(ans) ? speakBtns(st.say || ans) : null));
      } else if (st.title === 'q.tf') {
        parts.push(h('div', { class: 'teachcard' }, h('div', { class: 'tword' }, st.answer === 'true' ? '✅ ' + t('tfT') : '❌ ' + t('tfF'))));
      }
      if (tip) parts.push(h('div', { class: 'tip' }, '🔑 ' + tip));
      if (why) parts.push(h('div', { class: 'why' }, '💡 ' + EQ.tr(why)));
      const copyTarget = target && target.length <= 60 && /[A-Za-z]/.test(target) && st.title !== 'q.tf' ? target : null;
      if (copyTarget) {
        const inp = h('input', { class: 'textin small', type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: copyTarget });
        inp.addEventListener('input', function () {
          if (EQ.checkTyped(inp.value, copyTarget) === 'ok') {
            inp.classList.add('right'); inp.disabled = true; nextBtn.disabled = false; nextBtn.setAttribute('data-enter', '1'); EQ.sfx.good(); nextBtn.focus();
          }
        });
        inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') e.stopPropagation(); });
        parts.push(h('div', { class: 'copy' }, h('div', { class: 'psub' }, '✍️ ' + t('copyIt')), inp));
        setTimeout(function () { inp.focus(); }, 400);
      } else { nextBtn.disabled = false; nextBtn.setAttribute('data-enter', '1'); }
      parts.push(nextBtn);
      fb.className = 'feedback show bad teach';
      fb.replaceChildren(h('div', { class: 'teachbox' }, parts));
      setTimeout(function () { EQ.speech.speak(target || st.say); }, 350);
    }

    function summary() {
      const acc = firstAll ? firstOk / firstAll : 1;
      const stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1;
      const coins = Math.round(xp / 5) + (acc === 1 && firstAll >= 6 ? 15 : 0);
      EQ.game.addCoins(coins);
      S.stats.missions++;
      if (acc === 1 && firstAll >= 6) { S.stats.perfect++; EQ.game.bump('perfect'); }
      let newStar = false;
      if (opts.lessonId) {
        const before = S.stars[opts.lessonId] || 0;
        if (stars > before) { S.stars[opts.lessonId] = stars; EQ.game.bump('stars', stars - before); newStar = true; }
      }
      if (opts.mode === 'daily') EQ.game.markDaily();
      const fresh = EQ.game.checkBadges();
      EQ.store.save();
      EQ.sfx.win(); EQ.game.confetti();
      app.replaceChildren(h('div', { class: 'screen summary' },
        EQ.game.petEl(true),
        h('h1', null, t('sumTitle')),
        h('div', { class: 'stars' }, [1, 2, 3].map(function (n) { return h('span', { class: 'star' + (n <= stars ? ' on' : ''), style: { animationDelay: (n * 0.25) + 's' } }, '⭐'); })),
        h('div', { class: 'stats' },
          stat('+' + xp, t('sumXp')), stat('🪙 +' + coins, t('sumCoins')),
          stat(Math.round(acc * 100) + '%', t('sumRight')), stat('🔥 ' + bestCombo, t('bestCombo'))),
        newStickers.length ? h('div', { class: 'card stickersnew' }, h('div', { class: 'psub' }, '🏷️ ' + t('newStickers')),
          h('div', { class: 'stickerrow' }, newStickers.map(function (d) { return h('span', { class: 'sticker got', title: d.en }, h('span', null, d.e || '⭐'), h('small', null, d.en)); }))) : null,
        fresh.length ? h('div', { class: 'newbadges' }, fresh.map(function (b) { return h('div', { class: 'badge got' }, h('span', null, b.e), EQ.game.badgeName(b)); })) : null,
        h('div', { class: 'row' },
          h('button', { class: 'btn primary big', 'data-enter': '1', onclick: function () { EQ.game.claimQuests(); EQ.go(opts.lessonId ? 'map' : 'home'); } }, (opts.lessonId ? '🗺️ ' + t('map') : '🏠 ' + t('home'))),
          h('button', { class: 'btn ghost', onclick: function () { EQ.start(opts.mode, opts.lessonId); } }, '🔁 ' + t('again')))));
      if (newStar) EQ.game.toast('⭐ ' + EQ.lessons.find(function (l) { return l.id === opts.lessonId; }).title, true);
    }
    function stat(b, s) { return h('div', { class: 'stat' }, h('b', null, b), h('span', null, s)); }

    // Enter = next/check, number keys = options, letters for spelling
    EQ.keyHandler = function (e) {
      if (e.target && e.target.tagName === 'INPUT') return;
      if (e.key === 'Enter') { const b = document.querySelector('[data-enter]'); if (b) { e.preventDefault(); b.click(); return; } }
      if (current && current.onkey && !fb.classList.contains('show')) current.onkey(e);
    };
    next();
  };
  document.addEventListener('keydown', function (e) { if (EQ.keyHandler) EQ.keyHandler(e); });
})(window.EQ);
