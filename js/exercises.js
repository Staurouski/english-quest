/* Exercise generators. Each returns a plain "step" object that player.js knows how to draw.
   kinds: flash | choice | type | spell | speak | order | match | sort | fix | chat
   itemIds = vocabulary items trained by the step (spaced repetition); quizId = hand-made task from a lesson file. */
(function (EQ) {
  'use strict';
  const F = {};
  const tr = EQ.tr;

  // Wrong options that look or sound like the answer, so guessing by elimination does not work.
  function distractors(item, n, filter) {
    const d = item.data;
    const pool = EQ.uniq(EQ.allWords().map(function (w) { return w.en; })).filter(function (en) { return en !== d.en; });
    const sameLesson = item.lesson.words.map(function (w) { return w.en; });
    const byEn = {}; EQ.allWords().forEach(function (w) { byEn[w.en] = w; });
    const scored = pool.filter(function (en) { return !filter || filter(byEn[en]); }).map(function (en) {
      let s = Math.random() * 2;
      if (sameLesson.indexOf(en) >= 0) s += 2.5;
      if (en[0].toLowerCase() === d.en[0].toLowerCase()) s += 1.2;
      if (Math.abs(en.length - d.en.length) <= 2) s += 0.8;
      if (EQ.similar(en, d.en) > 0.5) s += 1.5;
      if (byEn[en].e && d.e && byEn[en].e === d.e) s -= 10;
      return { en: en, s: s };
    }).sort(function (a, b) { return b.s - a.s; });
    return scored.slice(0, n).map(function (x) { return byEn[x.en]; });
  }

  F.flash = function (item) { return { kind: 'flash', title: 'newWord', itemIds: [], item: item }; };

  F.listenPick = function (item, useText) {
    const d = item.data;
    const emojiOnly = !useText && d.e;
    const opts = [d].concat(distractors(item, 3, emojiOnly ? function (w) { return !!w.e; } : null));
    const pics = emojiOnly && opts.length === 4 && opts.every(function (w) { return w.e; });
    return {
      kind: 'choice', title: 'q.listen', itemIds: [item.id], audio: d.en, autoplay: true,
      prompt: { listen: true },
      options: EQ.shuffle(opts).map(function (w) { return { value: w.en, label: pics ? w.e : w.en, big: pics }; }),
      answer: d.en, say: d.en, sub: tr(d)
    };
  };

  F.seePick = function (item) {
    const d = item.data;
    const opts = [d].concat(distractors(item, 3));
    return {
      kind: 'choice', title: 'q.see', itemIds: [item.id],
      prompt: { big: d.e || '', text: tr(d) },
      options: EQ.shuffle(opts).map(function (w) { return { value: w.en, label: w.en }; }),
      answer: d.en, say: d.en
    };
  };

  F.spell = function (item) {
    const d = item.data;
    if (d.en.length > 14) return F.typeWord(item, false);
    const letters = d.en.split('').filter(function (c) { return /[A-Za-z']/.test(c); });
    const abc = 'abcdefghijklmnoprstuwy';
    const extra = [];
    while (extra.length < Math.min(4, 2 + Math.floor(letters.length / 4))) extra.push(abc[Math.floor(Math.random() * abc.length)]);
    return {
      kind: 'spell', title: 'q.spell', itemIds: [item.id], audio: d.en, autoplay: true,
      prompt: { big: d.e || '', text: tr(d) },
      answer: d.en, tiles: EQ.shuffle(letters.map(function (c) { return c.toLowerCase(); }).concat(extra)), say: d.en
    };
  };

  F.typeWord = function (item, listenOnly) {
    const d = item.data;
    return {
      kind: 'type', title: listenOnly ? 'q.typeListen' : 'q.type', itemIds: [item.id],
      prompt: listenOnly ? { listen: true } : { big: d.e || '', text: tr(d) },
      audio: d.en, autoplay: !!listenOnly, answer: d.en, alt: [], say: d.en, hintable: true
    };
  };

  F.speak = function (item) {
    const d = item.data;
    return { kind: 'speak', title: 'q.speak', itemIds: [item.id], prompt: { big: d.e || '', text: d.en, sub: tr(d) }, audio: d.en, answer: d.en, say: d.en };
  };

  function extraTiles(item, tokens, n) {
    const have = tokens.map(function (t) { return EQ.strip(t).toLowerCase(); });
    const pool = [];
    item.lesson.sentences.concat(EQ.lessons.flatMap(function (l) { return l.sentences; })).forEach(function (s) {
      s.en.split(' ').forEach(function (t) { const k = EQ.strip(t); if (k.length > 1 && have.indexOf(k.toLowerCase()) < 0) pool.push(k); });
    });
    ['am', 'is', 'are', 'a', 'an', 'at', 'in', 'on'].forEach(function (x) { if (have.indexOf(x) < 0) pool.push(x); });
    return EQ.sample(EQ.uniq(pool), n);
  }

  F.order = function (item, hard) {
    const d = item.data;
    const tokens = d.en.split(' ');
    const tiles = tokens.concat(hard ? extraTiles(item, tokens, tokens.length > 4 ? 3 : 2) : extraTiles(item, tokens, 1));
    return { kind: 'order', title: 'q.order', itemIds: [item.id], prompt: { text: tr(d) }, audio: d.en, tiles: EQ.shuffle(tiles), answer: d.en, say: d.en };
  };

  F.gap = function (item, typed) {
    const d = item.data;
    const toks = d.en.split(' ');
    const cands = [];
    toks.forEach(function (t, i) { if (EQ.strip(t).length > 1) cands.push(i); });
    if (!cands.length) return F.order(item, false);
    const idx = EQ.pick(cands), word = EQ.strip(toks[idx]);
    const shown = toks.map(function (t, i) { return i === idx ? '_____' + t.slice(t.indexOf(word) + word.length) : t; }).join(' ');
    if (typed) {
      return { kind: 'type', title: 'q.gap', itemIds: [item.id], prompt: { text: shown, sub: tr(d) }, answer: word, alt: [], say: d.en, hintable: true };
    }
    const wrong = [];
    const seen = {}; seen[word.toLowerCase()] = 1;
    const near = ['am', 'is', 'are', 'a', 'an', 'at', 'in', 'on', 'my', 'your', 'from'];
    const pool = near.indexOf(word.toLowerCase()) >= 0 ? near : EQ.allWords().map(function (w) { return w.en; });
    EQ.shuffle(pool).forEach(function (w) {
      const k = EQ.strip(w), kl = k.toLowerCase();
      if (wrong.length >= 3 || seen[kl] || k.indexOf(' ') >= 0) return;
      seen[kl] = 1; wrong.push(k);
    });
    return {
      kind: 'choice', title: 'q.gap', itemIds: [item.id], prompt: { text: shown, sub: tr(d) },
      options: EQ.shuffle([word].concat(wrong)).map(function (w) { return { value: w, label: w }; }), answer: word, say: d.en
    };
  };

  F.dictation = function (item) {
    const d = item.data;
    return { kind: 'type', title: 'q.dict', itemIds: [item.id], prompt: { listen: true, sub: tr(d) }, audio: d.en, autoplay: true, answer: d.en, alt: [], say: d.en, long: true };
  };

  F.match = function (items) {
    const pic = items.every(function (i) { return i.data.e; });
    return {
      kind: 'match', title: 'q.match', itemIds: items.map(function (i) { return i.id; }),
      left: items.map(function (i) { return { id: i.id, label: i.data.en }; }),
      right: EQ.shuffle(items.map(function (i) { return { id: i.id, label: pic ? i.data.e : tr(i.data), big: pic }; }))
    };
  };

  // Hand-made tasks from lesson files.
  F.quiz = function (q, quizId) {
    const st = quizBody(q, quizId);
    if (st && q.why) st.why = q.why;
    return st;
  };
  function quizBody(q, quizId) {
    const base = { itemIds: [], quizId: quizId };
    const text = q.q === undefined ? '' : tr(q.q);
    switch (q.type) {
      case 'mcq': return Object.assign(base, {
        kind: 'choice', title: 'q.pick', audio: q.audio || null, autoplay: !!q.audio, prompt: { big: q.big || '', text: text },
        answer: q.answer, say: q.say || (/___/.test(text) && /^[\x00-\x7f]*$/.test(text) ? text.replace('___', q.answer) : ''),
        options: EQ.shuffle(q.options).map(function (o) { return { value: o, label: o }; })
      });
      case 'tf': return Object.assign(base, {
        kind: 'choice', title: 'q.tf', prompt: { big: q.big || '', text: text }, answer: String(q.answer), say: q.say || '',
        options: [{ value: 'true', label: EQ.t('tfT') }, { value: 'false', label: EQ.t('tfF') }]
      });
      case 'type': return Object.assign(base, {
        kind: 'type', title: 'q.type', prompt: { big: q.big || '', text: text }, answer: q.answer, alt: q.alt || [], say: q.say || '', hintable: true
      });
      case 'order': return Object.assign(base, {
        kind: 'order', title: 'q.order', prompt: { text: tr(q) }, audio: q.en,
        tiles: EQ.shuffle(q.en.split(' ')), answer: q.en, say: q.en
      });
      case 'sort': {
        const items = [];
        Object.keys(q.buckets).forEach(function (b) { q.buckets[b].forEach(function (x) { items.push({ text: x, bucket: b }); }); });
        return Object.assign(base, { kind: 'sort', title: 'q.sort', prompt: { text: text }, buckets: Object.keys(q.buckets), items: EQ.shuffle(items) });
      }
      case 'fix': {
        const right = q.sentence.split(' ').map(function (t) { return EQ.strip(t) === q.wrong ? t.replace(q.wrong, q.right) : t; }).join(' ');
        return Object.assign(base, { kind: 'fix', title: 'q.fix', sentence: q.sentence, wrong: q.wrong, right: q.right, answer: q.right, fixed: right, say: right });
      }
      case 'chat': return Object.assign(base, { kind: 'chat', title: 'q.chat', who: q.who, turns: q.turns });
    }
    return null;
  }

  // Short grammar explanations shown after a mistake, so he learns the rule instead of guessing.
  const RULES = {
    be: { pl: 'I ➜ am · he / she / it ➜ is · you / we / they ➜ are.  Np. I am ten. She is my mum. They are cool.', ru: 'I ➜ am · he / she / it ➜ is · you / we / they ➜ are.  Например: I am ten. She is my mum. They are cool.' },
    art: { pl: '"an" przed samogłoską (a, e, i, o, u): an apple, an orange. "a" przed resztą: a pen. Gdy jest więcej niż jedna rzecz, nie ma a/an: pencils.', ru: '"an" перед гласной (a, e, i, o, u): an apple, an orange. "a" перед остальными: a pen. Если предметов много, a/an не ставим: pencils.' },
    prep: { pl: 'at home, at school, at a party, at a café · in the park, in the garden · on holiday.  Miesiące i pory roku: in May, in winter. Dni: on Monday.', ru: 'at home, at school, at a party, at a café · in the park, in the garden · on holiday.  Месяцы и времена года: in May, in winter. Дни: on Monday.' },
    cap: { pl: 'Po angielsku WIELKĄ literą piszemy: imiona, kraje, narodowości (Polish!), dni tygodnia i miesiące. Pory roku małą: summer.', ru: 'По-английски с БОЛЬШОЙ буквы пишутся: имена, страны, национальности (Polish!), дни недели и месяцы. Времена года с маленькой: summer.' },
    plural: { pl: 'Więcej niż jedno: dodaj -s (books, months). Po s, sh, ch: -es (sandwiches). Wyjątki: child ➜ children, mouse ➜ mice, fish ➜ fish.', ru: 'Больше одного: добавь -s (books, months). После s, sh, ch: -es (sandwiches). Исключения: child ➜ children, mouse ➜ mice, fish ➜ fish.' },
    nat: { pl: 'Kraj ➜ narodowość: Poland ➜ Polish, Spain ➜ Spanish, France ➜ French, the UK ➜ British, the USA ➜ American. "I am from Poland", ale "I am Polish".', ru: 'Страна ➜ национальность: Poland ➜ Polish, Spain ➜ Spanish, France ➜ French, the UK ➜ British, the USA ➜ American. "I am from Poland", но "I am Polish".' }
  };
  const NATS = ['polish', 'spanish', 'french', 'british', 'american', 'chinese', 'turkish', 'brazilian', 'australian', 'argentinian'];
  // Which grammar/spelling rule a step tests (used for the error-type log); null when it is plain vocabulary.
  EQ.ruleKey = function (st) {
    const a = EQ.norm(st.right || st.answer || ''), w = EQ.norm(st.wrong || '');
    const opts = (st.options || []).map(function (o) { return EQ.norm(o.value); });
    const has = function (list) { return list.indexOf(a) >= 0 || list.indexOf(w) >= 0 || opts.some(function (o) { return list.indexOf(o) >= 0; }); };
    if (st.kind === 'fix' && st.wrong && st.right && st.wrong.toLowerCase() === st.right.toLowerCase()) return 'cap';
    if (has(['am', 'is', 'are', "'m", "'s", "'re"])) return 'be';
    if (has(['a', 'an', '-'])) return 'art';
    if (has(['at', 'in', 'on'])) return 'prep';
    if (st.kind === 'fix' && (a === w + 's' || a === w + 'es' || ['children', 'mice'].indexOf(a) >= 0)) return 'plural';
    if (/plural/i.test((st.prompt && st.prompt.text) || '')) return 'plural';
    if (NATS.indexOf(a) >= 0 || NATS.indexOf(w) >= 0) return 'nat';
    if (has(['have', 'has', "haven't", "hasn't"])) return 'have';
    if (has(['do', 'does', "don't", "doesn't"])) return 'do';
    if (has(['can', "can't"])) return 'can';
    if (has(['this', 'that', 'these', 'those'])) return 'this';
    if (has(['my', 'your', 'his', 'her', 'our', 'their', 'its'])) return 'poss';
    if (st.why) return 'q:' + String(st.quizId || '').split('/q/')[0];
    return null;
  };
  EQ.RULE_NAMES = { be: 'am / is / are', art: 'a / an', prep: 'at / in / on', cap: 'Capital letters', plural: 'Plurals', nat: 'Countries & nationalities',
    have: 'have got / has got', do: 'do / does', can: 'can / can\'t', this: 'this / that / these / those', poss: 'my / your / his / her' };
  EQ.why = function (st) {
    if (st.why) return st.why;
    const a = EQ.norm(st.right || st.answer || ''), w = EQ.norm(st.wrong || '');
    const opts = (st.options || []).map(function (o) { return EQ.norm(o.value); });
    const has = function (list) { return list.indexOf(a) >= 0 || list.indexOf(w) >= 0 || opts.some(function (o) { return list.indexOf(o) >= 0; }); };
    if (st.kind === 'fix' && st.wrong && st.right && st.wrong.toLowerCase() === st.right.toLowerCase()) return RULES.cap;
    if (has(['am', 'is', 'are'])) return RULES.be;
    if (has(['a', 'an', '-'])) return RULES.art;
    if (has(['at', 'in', 'on'])) return RULES.prep;
    if (st.kind === 'fix' && (a === w + 's' || a === w + 'es' || ['children', 'mice'].indexOf(a) >= 0)) return RULES.plural;
    if (/plural/i.test((st.prompt && st.prompt.text) || '')) return RULES.plural;
    if (NATS.indexOf(a) >= 0 || NATS.indexOf(w) >= 0) return RULES.nat;
    return null;
  };

  function quizPool(lessons) {
    const out = [];
    lessons.forEach(function (l) { l.quizzes.forEach(function (q, i) { out.push({ id: l.id + '/q/' + i, q: q }); }); });
    return out;
  }
  // Least-seen first, and the richer task types (fix, sort, chat, typing) get a head start.
  const RICH = { fix: 1.2, sort: 1.4, chat: 1.6, type: 0.8, order: 0.6 };
  // Error-type log: rules he gets wrong more often are practised more in the next sessions.
  EQ.weakness = function (key) {
    const w = (EQ.store.s.weak || {})[key];
    if (!w) return 0;
    return Math.max(0, (w.miss * 2 - w.hit) / (w.miss + w.hit + 2));
  };
  EQ.weakRules = function () {
    const W = EQ.store.s.weak || {};
    return Object.keys(W).filter(function (k) { return W[k].miss > 0 && EQ.weakness(k) > 0.15; })
      .sort(function (a, b) { return EQ.weakness(b) - EQ.weakness(a); });
  };
  EQ.pickQuizzes = function (lessons, n, onlyRule) {
    const seen = EQ.store.s.quizSeen;
    const pool = quizPool(lessons).map(function (p) {
      const st = F.quiz(p.q, p.id); const key = st ? EQ.ruleKey(st) : null;
      return { p: p, key: key, s: (seen[p.id] || 0) - (RICH[p.q.type] || 0) - (key ? EQ.weakness(key) * 3 : 0) + Math.random() * 0.9 };
    }).filter(function (x) { return !onlyRule || x.key === onlyRule; })
      .sort(function (a, b) { return a.s - b.s; });
    const out = [], kinds = {};
    pool.forEach(function (x) { // at most 2 chats/sorts per session so missions stay varied
      if (out.length >= n) return;
      const k = x.p.q.type;
      if ((k === 'chat' || k === 'sort') && (kinds[k] || 0) >= 1) return;
      kinds[k] = (kinds[k] || 0) + 1; out.push(x.p);
    });
    return out.map(function (p) { return F.quiz(p.q, p.id); }).filter(Boolean);
  };

  // Exercises for one item depending on how well it is known (box).
  function forItem(i, mic) {
    const r = EQ.rec(i.id), box = r ? r.box : 0;
    if (i.kind === 'word') {
      if (box === 0) return [F.listenPick(i), F.spell(i)];
      if (box === 1) return [F.spell(i), F.listenPick(i, true)];
      if (box === 2) return [F.typeWord(i, false), mic ? F.speak(i) : F.seePick(i)];
      if (box === 3) return [F.typeWord(i, true), F.spell(i)];
      return [mic && Math.random() < 0.4 ? F.speak(i) : F.typeWord(i, Math.random() < 0.5)];
    }
    if (box === 0) return [F.order(i, false), F.gap(i, false)];
    if (box <= 2) return [F.order(i, true), mic ? F.speak(i) : F.gap(i, true)];
    return [Math.random() < 0.5 ? F.dictation(i) : F.gap(i, true), mic ? F.speak(i) : F.order(i, true)];
  }

  function spread(list) { // avoid the same item twice in a row
    for (let i = 1; i < list.length; i++) {
      if (list[i].itemIds[0] && list[i].itemIds[0] === list[i - 1].itemIds[0]) {
        for (let j = i + 1; j < list.length; j++) if (list[j].itemIds[0] !== list[i].itemIds[0]) { const t = list[i]; list[i] = list[j]; list[j] = t; break; }
      }
    }
    return list;
  }

  // Builds a mission. Difficulty ramps: intro cards, recognition, then production (spelling, typing, speaking) and the lesson tasks.
  EQ.buildMission = function (items, lessons, quizCount, cap) {
    const mic = EQ.speech.canListen();
    const intro = items.filter(function (i) { return !EQ.rec(i.id); }).map(F.flash);
    const first = [], second = [];
    items.forEach(function (i) { const l = forItem(i, mic); first.push(l[0]); if (l[1]) second.push(l[1]); });
    let body = spread(EQ.shuffle(first)).concat(spread(EQ.shuffle(second)).slice(0, Math.max(0, (cap || 18) - first.length)));
    const words = items.filter(function (i) { return i.kind === 'word'; });
    if (words.length >= 4) body.splice(Math.floor(body.length * 0.4), 0, F.match(EQ.sample(words, Math.min(5, words.length))));
    const quizzes = EQ.pickQuizzes(lessons, quizCount);
    // plus targeted practice of his two weakest rules, taken from any lesson already open
    if (quizCount >= 2) {
      const open = EQ.lessons.filter(EQ.unlocked);
      const have = quizzes.map(function (q) { return q.quizId; });
      EQ.weakRules().slice(0, 2).forEach(function (key) {
        EQ.pickQuizzes(open, 2, key).forEach(function (q) { if (have.indexOf(q.quizId) < 0) { q.weakFocus = key; quizzes.push(q); have.push(q.quizId); } });
      });
    }
    quizzes.forEach(function (qz, k) {
      const pos = Math.min(body.length, Math.round(body.length * (k + 1) / (quizzes.length + 0.5)) + k);
      body.splice(pos, 0, qz);
    });
    // New words: show their cards in small groups right before their first exercise.
    const steps = [];
    const introduced = {};
    body.forEach(function (st) {
      st.itemIds.forEach(function (id) {
        if (introduced[id]) return;
        introduced[id] = true;
        const card = intro.find(function (c) { return c.item.id === id; });
        if (card) steps.push(card);
      });
      steps.push(st);
    });
    return steps;
  };

  function byWeakness(a, b) {
    const ra = EQ.rec(a.id), rb = EQ.rec(b.id);
    return (ra.box - rb.box) || (ra.due < rb.due ? -1 : 1);
  }

  EQ.missionFor = function (mode, lessonId) {
    const S = EQ.store.s, today = EQ.today();
    if (mode === 'lesson') {
      const lesson = EQ.lessons.find(function (l) { return l.id === lessonId; });
      const all = EQ.itemsOf(lesson);
      if (!all.length) return EQ.pickQuizzes([lesson], 14);
      const fresh = all.filter(function (i) { return !EQ.rec(i.id); });
      const seen = all.filter(function (i) { return EQ.rec(i.id); }).sort(byWeakness);
      const items = fresh.filter(function (i) { return i.kind === 'word'; }).slice(0, 7)
        .concat(fresh.filter(function (i) { return i.kind === 'sentence'; }).slice(0, 3)).concat(seen).slice(0, 10);
      return EQ.buildMission(items, [lesson], 6, 16);
    }
    if (mode === 'mistakes') {
      const items = EQ.allItems().filter(function (i) { const r = EQ.rec(i.id); return r && r.wrong > 0 && r.box <= 3; }).sort(byWeakness).slice(0, 10);
      return items.length ? EQ.buildMission(items, EQ.uniq(items.map(function (i) { return i.lesson; })), 2, 14) : [];
    }
    // daily: due reviews + a few new things from unlocked lessons in book order
    const lessons = EQ.lessons.filter(EQ.unlocked);
    const all = lessons.flatMap(EQ.itemsOf);
    const due = all.filter(function (i) { const r = EQ.rec(i.id); return r && r.due <= today; }).sort(byWeakness).slice(0, 10);
    const fresh = [];
    // focus lessons (things he finds hard) go first
    lessons.slice().sort(function (a, b) { return (b.focus ? 1 : 0) - (a.focus ? 1 : 0); }).forEach(function (l) {
      const li = EQ.itemsOf(l);
      const wordsLeft = li.some(function (i) { return i.kind === 'word' && !EQ.rec(i.id); });
      li.forEach(function (i) { if (!EQ.rec(i.id) && (i.kind === 'word' || !wordsLeft)) fresh.push(i); });
    });
    let items = due.concat(fresh.slice(0, S.settings.newPerDay));
    if (!items.length) items = all.filter(function (i) { return EQ.rec(i.id); }).sort(byWeakness).slice(0, 8);
    if (!items.length) items = fresh.slice(0, 6);
    const involved = EQ.uniq(items.map(function (i) { return i.lesson; }));
    return EQ.buildMission(items, involved.length ? involved : lessons.slice(0, 1), 4, 18);
  };

  EQ.F = F;
})(window.EQ);
