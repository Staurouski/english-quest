/* English Quest v2: core helpers, storage, translations, speech, sound effects, spaced repetition.
   Plain scripts with one global EQ object, so the app runs from a static host or a local folder without a build step. */
window.EQ = window.EQ || {};
(function (EQ) {
  'use strict';

  /* ---------- lesson registry and content constructors ---------- */
  EQ.lessons = [];
  EQ.registerLesson = function (l) { l.words = l.words || []; l.sentences = l.sentences || []; l.quizzes = l.quizzes || []; EQ.lessons.push(l); };

  // Used by content/*.js
  EQ.c = {
    w: function (en, pl, ru, e, tip) { return { en: en, pl: pl, ru: ru, e: e, tip: tip }; },
    s: function (en, pl, ru) { return { en: en, pl: pl, ru: ru }; },
    mcq: function (q, options, answer, extra) { return Object.assign({ type: 'mcq', q: q, options: options, answer: answer }, extra || {}); },
    tf: function (q, answer, extra) { return Object.assign({ type: 'tf', q: q, answer: answer }, extra || {}); },
    type: function (q, answer, alt, extra) { return Object.assign({ type: 'type', q: q, answer: answer, alt: alt || [] }, extra || {}); },
    order: function (en, pl, ru) { return { type: 'order', en: en, pl: pl, ru: ru }; },
    sort: function (q, buckets) { return { type: 'sort', q: q, buckets: buckets }; },
    fix: function (sentence, wrong, right, extra) { return Object.assign({ type: 'fix', sentence: sentence, wrong: wrong, right: right }, extra || {}); },
    chat: function (who, turns) { return { type: 'chat', who: who, turns: turns }; }
  };

  /* ---------- small utilities ---------- */
  EQ.shuffle = function (arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  EQ.sample = function (arr, n) { return EQ.shuffle(arr).slice(0, n); };
  EQ.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
  EQ.uniq = function (arr) { return Array.from(new Set(arr)); };

  EQ.norm = function (s) {
    return String(s == null ? '' : s).toLowerCase()
      .replace(/[’‘`´]/g, "'")
      .replace(/[‐-―]/g, '-')
      .replace(/[.,!?;:"()]/g, '')
      .replace(/\s+/g, ' ').trim();
  };
  EQ.strip = function (t) { return String(t).replace(/[.,!?;:"]/g, ''); };

  EQ.lev = function (a, b) {
    a = String(a); b = String(b);
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let prev = new Array(n + 1), cur = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      cur[0] = i;
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      const t = prev; prev = cur; cur = t;
    }
    return prev[n];
  };
  EQ.similar = function (a, b) {
    a = EQ.norm(a); b = EQ.norm(b);
    const L = Math.max(a.length, b.length) || 1;
    return 1 - EQ.lev(a, b) / L;
  };

  // Typed answer check: 'ok', 'typo' (one small slip in a longer answer) or 'no'.
  EQ.checkTyped = function (input, answer, alt) {
    const v = EQ.norm(input).replace(/-/g, ' ');
    const all = [answer].concat(alt || []).map(function (a) { return EQ.norm(a).replace(/-/g, ' '); });
    if (all.indexOf(v) >= 0) return 'ok';
    // contractions typed without apostrophe
    if (all.some(function (a) { return a.replace(/'/g, '') === v.replace(/'/g, ''); })) return 'ok';
    const main = all[0];
    if (main.length >= 5 && EQ.lev(v, main) === 1) return 'typo';
    return 'no';
  };

  EQ.today = function (d) {
    d = d || new Date();
    const p = function (n) { return String(n).padStart(2, '0'); };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  };
  EQ.addDays = function (str, n) {
    const p = str.split('-').map(Number);
    return EQ.today(new Date(p[0], p[1] - 1, p[2] + n));
  };
  EQ.hash = function (s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); };

  // DOM builder: h('div', {class:'x', onclick: fn}, child, ...)
  EQ.h = function (tag, attrs) {
    const e = document.createElement(tag);
    const a = attrs || {};
    Object.keys(a).forEach(function (k) {
      const v = a[k];
      if (v === false || v == null) return;
      if (k === 'class') e.className = v;
      else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
      else if (k === 'html') e.innerHTML = v;
      else if (k.indexOf('on') === 0 && typeof v === 'function') e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    });
    Array.prototype.slice.call(arguments, 2).flat(Infinity).forEach(function (c) {
      if (c == null || c === false) return;
      e.append(c.nodeType ? c : document.createTextNode(String(c)));
    });
    return e;
  };
  EQ.$ = function (sel) { return document.querySelector(sel); };
  EQ.wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

  /* ---------- storage ---------- */
  const KEY = 'englishQuest.v2';
  function defaults() {
    return {
      settings: { name: '', lang: 'pl', rate: 0.9, sound: true, mic: true, newPerDay: 6, voice: '', unlockAll: false, timer: true },
      items: {}, quizSeen: {}, stars: {}, bosses: {},
      xp: 0, coins: 0, streak: 0, best: 0, lastDay: '',
      days: {}, records: {}, owned: [], wear: { hat: '', theme: 'sunny' },
      stats: { spoken: 0, maxCombo: 0, missions: 0, perfect: 0 }, badges: [], weak: {}, freezes: 1, freezeUsed: ''
    };
  }
  let S;
  try {
    const raw = localStorage.getItem(KEY);
    const d = defaults();
    S = raw ? Object.assign(d, JSON.parse(raw)) : d;
    S.settings = Object.assign(defaults().settings, S.settings || {});
    S.stats = Object.assign(defaults().stats, S.stats || {});
    S.wear = Object.assign(defaults().wear, S.wear || {});
  } catch (e) { S = defaults(); }

  EQ.store = {
    get s() { return S; },
    save: function () { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage blocked */ } },
    reset: function () { S = defaults(); EQ.store.save(); },
    exportJson: function () { return JSON.stringify(S); },
    importJson: function (text) {
      const o = JSON.parse(text);
      if (!o || typeof o !== 'object' || !o.items || !o.settings) throw new Error('bad file');
      S = Object.assign(defaults(), o); S.settings = Object.assign(defaults().settings, o.settings);
      EQ.store.save();
    }
  };
  EQ.day = function () {
    const k = EQ.today();
    return S.days[k] || (S.days[k] = { xp: 0, steps: 0, spoken: 0, combo: 0, rain: 0, blitz: 0, memory: 0, stars: 0, perfect: 0, daily: 0, claimed: [], chest: false });
  };

  /* ---------- translations (the child's interface: Polish or Russian, English kept for exercise titles) ---------- */
  const T = {
    pl: {
      hi: 'Cześć', daily: 'Misja dnia', dailyDone: 'Misja dnia zaliczona! Zagraj jeszcze', map: 'Mapa przygody', games: 'Gry', shop: 'Sklep',
      words: 'Moje słówka', parent: 'Dla rodzica', streak: 'dni z rzędu', level: 'Poziom', quests: 'Zadania na dziś', chest: 'Skrzynia!',
      check: 'Sprawdź', next: 'Dalej', hint: 'Podpowiedź', skip: 'Pomiń', home: 'Start', again: 'Jeszcze raz', back: 'Wstecz', clear: 'Wyczyść',
      wrong: 'Prawie! Poprawnie:', typo: 'Mała literówka! Poprawnie:', praise: ['Super!', 'Brawo!', 'Świetnie!', 'Ekstra!', 'Mistrz!', 'Tak jest!'],
      combo: 'combo', newWord: 'Nowe słowo', tapHear: 'Kliknij, żeby posłuchać', gotIt: 'Mam to!',
      typeHere: 'Wpisz po angielsku...', speakNow: 'Kliknij mikrofon i powiedz:', heard: 'Usłyszałem:', tryAgain: 'Spróbuj jeszcze raz!',
      micOff: 'Mikrofon niedostępny', sortTip: 'Kliknij słowo, potem pudełko', fixTip: 'Znajdź błąd i kliknij złe słowo', fixType: 'Jak powinno być?',
      pairsTip: 'Znajdź pary', sumTitle: 'Misja zakończona!', sumXp: 'XP', sumRight: 'dobrze za 1. razem', sumCoins: 'monet', bestCombo: 'najlepsze combo',
      quit: 'Wyjść z misji?', locked: 'Najpierw zdobądź gwiazdkę w poprzedniej lekcji', bossLocked: 'Boss czeka! Najpierw przejdź wszystkie lekcje tego rozdziału.',
      boss: 'Walka z bossem', bossWin: 'Pokonałeś bossa!', bossLose: 'Boss wygrał tym razem. Spróbuj jeszcze raz!',
      rain: 'Deszcz słów', rainInfo: 'Wpisuj słowa, zanim spadną na ziemię!', blitz: 'Błyskawica 60 s', blitzInfo: 'Dobrze czy źle? Klikaj szybko! (strzałki na klawiaturze też działają)',
      memory: 'Memory', memoryInfo: 'Odkrywaj karty i szukaj par', play: 'Graj!', record: 'Rekord', score: 'Wynik', lives: 'Życia', newRecord: 'Nowy rekord!',
      right: 'Dobrze', notRight: 'Źle', buy: 'Kup', wear: 'Załóż', wearing: 'Założone', needCoins: 'Za mało monet', hats: 'Czapki dla smoka', themes: 'Kolory aplikacji',
      learned: 'nauczone', gate: 'Zadanie dla dorosłego:', noVoice: 'Brak angielskiego głosu w przeglądarce. Dźwięk nie zadziała.',
      chatTip: 'Wybierz odpowiedź', fewWords: 'Najpierw naucz się kilku słów w Misji dnia!', moves: 'ruchy', time: 'czas',
      petTalk: ['Let\'s learn English!', 'You are amazing!', 'I love new words!', 'Practise every day!', 'Feed me with stars!', 'Ready for a mission?'],
      q: {
        listen: 'Posłuchaj i wybierz', see: 'Jak to jest po angielsku?', spell: 'Ułóż słowo z liter', type: 'Napisz po angielsku', typeListen: 'Posłuchaj i napisz',
        order: 'Ułóż zdanie', gap: 'Uzupełnij lukę', pick: 'Wybierz odpowiedź', tf: 'Prawda czy fałsz?', match: 'Połącz w pary', sort: 'Posortuj',
        fix: 'Popraw błąd', chat: 'Rozmowa', speak: 'Powiedz to na głos', dict: 'Dyktando: posłuchaj i napisz zdanie'
      },
      tfT: 'Prawda', tfF: 'Fałsz', idk: 'Nie wiem', newStickers: 'Nowe naklejki w albumie!', album: 'Album naklejek', freeze: 'Zamrożenie serii', freezeInfo: 'Chroni serię, gdy opuścisz jeden dzień', freezeSaved: 'Zamrożenie uratowało Twoją serię!', albumInfo: 'Każde słowo, które naprawdę umiesz, to nowa naklejka. Zbierz wszystkie!', teachTitle: 'Zapamiętaj!', copyIt: 'Napisz to raz sam, żeby zapamiętać:', why: 'Dlaczego?', ok: 'OK, rozumiem'
    },
    ru: {
      hi: 'Привет', daily: 'Миссия дня', dailyDone: 'Миссия дня выполнена! Сыграй ещё', map: 'Карта приключений', games: 'Игры', shop: 'Магазин',
      words: 'Мои слова', parent: 'Для родителей', streak: 'дней подряд', level: 'Уровень', quests: 'Задания на сегодня', chest: 'Сундук!',
      check: 'Проверить', next: 'Дальше', hint: 'Подсказка', skip: 'Пропустить', home: 'Домой', again: 'Ещё раз', back: 'Назад', clear: 'Стереть',
      wrong: 'Почти! Правильно:', typo: 'Маленькая опечатка! Правильно:', praise: ['Супер!', 'Молодец!', 'Отлично!', 'Класс!', 'Чемпион!', 'Да!'],
      combo: 'комбо', newWord: 'Новое слово', tapHear: 'Нажми, чтобы послушать', gotIt: 'Понятно!',
      typeHere: 'Пиши по-английски...', speakNow: 'Нажми микрофон и скажи:', heard: 'Я услышал:', tryAgain: 'Попробуй ещё раз!',
      micOff: 'Микрофон недоступен', sortTip: 'Нажми слово, потом коробку', fixTip: 'Найди ошибку и нажми неправильное слово', fixType: 'Как правильно?',
      pairsTip: 'Найди пары', sumTitle: 'Миссия пройдена!', sumXp: 'XP', sumRight: 'правильно с 1-го раза', sumCoins: 'монет', bestCombo: 'лучшее комбо',
      quit: 'Выйти из миссии?', locked: 'Сначала получи звезду в предыдущем уроке', bossLocked: 'Босс ждёт! Сначала пройди все уроки этого раздела.',
      boss: 'Битва с боссом', bossWin: 'Ты победил босса!', bossLose: 'В этот раз победил босс. Попробуй ещё!',
      rain: 'Дождь слов', rainInfo: 'Пиши слова, пока они не упали на землю!', blitz: 'Молния 60 с', blitzInfo: 'Правильно или нет? Жми быстро! (стрелки на клавиатуре тоже работают)',
      memory: 'Мемори', memoryInfo: 'Открывай карточки и ищи пары', play: 'Играть!', record: 'Рекорд', score: 'Очки', lives: 'Жизни', newRecord: 'Новый рекорд!',
      right: 'Правильно', notRight: 'Неправильно', buy: 'Купить', wear: 'Надеть', wearing: 'Надето', needCoins: 'Мало монет', hats: 'Шапки для дракона', themes: 'Цвета приложения',
      learned: 'выучено', gate: 'Задание для взрослого:', noVoice: 'В браузере нет английского голоса. Звук не будет работать.',
      chatTip: 'Выбери ответ', fewWords: 'Сначала выучи несколько слов в Миссии дня!', moves: 'ходов', time: 'время',
      petTalk: ['Let\'s learn English!', 'You are amazing!', 'I love new words!', 'Practise every day!', 'Feed me with stars!', 'Ready for a mission?'],
      q: {
        listen: 'Послушай и выбери', see: 'Как это по-английски?', spell: 'Собери слово из букв', type: 'Напиши по-английски', typeListen: 'Послушай и напиши',
        order: 'Собери предложение', gap: 'Заполни пропуск', pick: 'Выбери ответ', tf: 'Правда или нет?', match: 'Соедини пары', sort: 'Разложи по коробкам',
        fix: 'Исправь ошибку', chat: 'Разговор', speak: 'Скажи вслух', dict: 'Диктант: послушай и напиши предложение'
      },
      tfT: 'Правда', tfF: 'Неправда', idk: 'Не знаю', newStickers: 'Новые наклейки в альбоме!', album: 'Альбом наклеек', freeze: 'Заморозка серии', freezeInfo: 'Спасает серию, если пропустишь один день', freezeSaved: 'Заморозка спасла твою серию!', albumInfo: 'Каждое слово, которое ты по-настоящему знаешь, это новая наклейка. Собери все!', teachTitle: 'Запомни!', copyIt: 'Напиши это сам один раз, чтобы запомнить:', why: 'Почему?', ok: 'Понятно'
    }
  };
  EQ.t = function (key) {
    const L = T[S.settings.lang] || T.pl;
    let v = key.split('.').reduce(function (o, k) { return o && o[k]; }, L);
    if (v == null) v = key;
    return Array.isArray(v) && key !== 'petTalk' ? EQ.pick(v) : v;
  };
  EQ.tr = function (d) { // translation of a word/sentence/question object in the chosen language
    if (d == null) return '';
    if (typeof d === 'string') return d;
    return d[S.settings.lang] || d.pl || d.en || '';
  };

  /* ---------- speech: text to speech + speech recognition ---------- */
  const synth = window.speechSynthesis || null;
  let voices = [];
  function refresh() { voices = synth ? synth.getVoices().filter(function (v) { return /^en/i.test(v.lang); }) : []; }
  if (synth) { refresh(); if (synth.addEventListener) synth.addEventListener('voiceschanged', refresh); else synth.onvoiceschanged = refresh; }
  function bestVoice() {
    const chosen = S.settings.voice;
    if (chosen) { const v = voices.find(function (x) { return x.name === chosen; }); if (v) return v; }
    const prefer = ['Daniel', 'Google UK English Female', 'Serena', 'Kate', 'Martha', 'Arthur', 'Samantha', 'Google UK English Male', 'Karen', 'Moira'];
    for (let i = 0; i < prefer.length; i++) { const v = voices.find(function (x) { return x.name.indexOf(prefer[i]) === 0; }); if (v) return v; }
    return voices.find(function (x) { return /en[-_]GB/i.test(x.lang); }) || voices[0] || null;
  }
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  EQ.speech = {
    available: function () { return !!synth && voices.length > 0; },
    voices: function () { return voices; },
    speak: function (text, opts) {
      if (!synth || !text) return Promise.resolve();
      opts = opts || {};
      synth.cancel();
      return new Promise(function (resolve) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-GB';
        const v = bestVoice(); if (v) { u.voice = v; u.lang = v.lang; }
        u.rate = opts.rate || S.settings.rate;
        u.pitch = opts.pitch || 1;
        u.onend = resolve; u.onerror = resolve;
        setTimeout(resolve, 6000);
        synth.speak(u);
      });
    },
    slow: function (text) { return EQ.speech.speak(text, { rate: 0.6 }); },
    stop: function () { if (synth) synth.cancel(); },
    canListen: function () { return !!Rec && S.settings.mic && location.protocol !== 'file:'; },
    // Resolves with an array of transcripts (best first), or rejects with an error code.
    listen: function () {
      return new Promise(function (resolve, reject) {
        if (!Rec) { reject('unsupported'); return; }
        EQ.speech.stop();
        const r = new Rec();
        r.lang = 'en-GB'; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false;
        let done = false;
        r.onresult = function (e) {
          done = true;
          const out = [];
          for (let i = 0; i < e.results.length; i++) for (let j = 0; j < e.results[i].length; j++) out.push(e.results[i][j].transcript);
          resolve(out);
        };
        r.onerror = function (e) { if (!done) { done = true; reject(e.error || 'error'); } };
        r.onend = function () { if (!done) { done = true; resolve([]); } };
        try { r.start(); } catch (e) { reject('busy'); }
        setTimeout(function () { try { r.stop(); } catch (e) { /* already stopped */ } }, 7000);
      });
    }
  };

  /* ---------- sound effects (synthesised, no files) ---------- */
  let ac = null;
  function tone(freq, start, dur, type, gain) {
    if (!S.settings.sound) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = type || 'sine'; o.frequency.value = freq;
      g.gain.setValueAtTime(gain || 0.12, ac.currentTime + start);
      g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + dur);
      o.connect(g); g.connect(ac.destination);
      o.start(ac.currentTime + start); o.stop(ac.currentTime + start + dur + 0.02);
    } catch (e) { /* audio blocked */ }
  }
  EQ.sfx = {
    good: function (combo) { const b = 520 + Math.min(combo || 0, 12) * 30; tone(b, 0, 0.1, 'triangle'); tone(b * 1.5, 0.08, 0.16, 'triangle'); },
    bad: function () { tone(200, 0, 0.18, 'sawtooth', 0.06); tone(150, 0.12, 0.22, 'sawtooth', 0.05); },
    win: function () { [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, i * 0.11, 0.22, 'triangle'); }); },
    tap: function () { tone(600, 0, 0.04, 'sine', 0.06); },
    pop: function () { tone(900, 0, 0.06, 'square', 0.05); tone(1300, 0.04, 0.08, 'triangle', 0.06); },
    hit: function () { tone(120, 0, 0.15, 'square', 0.1); tone(80, 0.05, 0.25, 'sawtooth', 0.08); },
    coin: function () { tone(988, 0, 0.08, 'square', 0.05); tone(1319, 0.07, 0.2, 'square', 0.05); },
    tick: function () { tone(1500, 0, 0.02, 'sine', 0.03); }
  };

  /* ---------- spaced repetition (Leitner boxes 0..6) ---------- */
  const INTERVALS = [0, 0, 1, 2, 4, 8, 16];
  EQ.itemsOf = function (lesson) {
    const out = [];
    lesson.words.forEach(function (w) { out.push({ id: lesson.id + '/w/' + w.en, kind: 'word', lesson: lesson, data: w }); });
    lesson.sentences.forEach(function (s) { out.push({ id: lesson.id + '/s/' + s.en, kind: 'sentence', lesson: lesson, data: s }); });
    return out;
  };
  EQ.allItems = function () { return EQ.lessons.flatMap(EQ.itemsOf); };
  EQ.allWords = function () { return EQ.lessons.flatMap(function (l) { return l.words; }); };
  EQ.rec = function (id) { return S.items[id]; };
  EQ.grade = function (id, ok) {
    const r = S.items[id] || (S.items[id] = { box: 0, due: EQ.today(), right: 0, wrong: 0 });
    if (ok) { r.right++; r.box = r.box === 0 ? 2 : Math.min(6, r.box + 1); } else { r.wrong++; r.box = Math.max(1, Math.min(r.box - 2, 2)); }
    r.due = EQ.addDays(EQ.today(), INTERVALS[r.box]);
    r.last = EQ.today();
  };
  EQ.lessonProgress = function (lesson) {
    const items = EQ.itemsOf(lesson);
    if (!items.length) return (S.stars[lesson.id] || 0) / 3;
    let p = 0;
    items.forEach(function (it) { const r = EQ.rec(it.id); if (r) p += Math.min(r.box, 4) / 4; });
    return p / items.length;
  };
  EQ.units = function () {
    const out = [];
    EQ.lessons.forEach(function (l) {
      let u = out.find(function (x) { return x.name === l.unit; });
      if (!u) { u = { name: l.unit, lessons: [] }; out.push(u); }
      u.lessons.push(l);
    });
    return out;
  };
  EQ.unlocked = function (lesson) {
    if (S.settings.unlockAll || lesson.focus) return true;
    const book = EQ.lessons.filter(function (l) { return !l.focus; });
    const i = book.indexOf(lesson);
    return i <= 0 || (S.stars[book[i - 1].id] || 0) > 0;
  };
  EQ.bossUnlocked = function (unit) {
    return S.settings.unlockAll || unit.lessons.every(function (l) { return (S.stars[l.id] || 0) > 0; });
  };
  EQ.seenWords = function () {
    return EQ.allItems().filter(function (i) { return i.kind === 'word' && EQ.rec(i.id); });
  };
})(window.EQ);
