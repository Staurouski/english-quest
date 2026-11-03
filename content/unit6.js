/* Unit 6 "Out and about!", textbook pages 78-89. */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;
  const Q = function (en, pl, ru) { return { en: en, pl: pl, ru: ru }; };
  const U = 'Unit 6: Out and about!';
  const canBase = { pl: 'Po can czasownik jest w formie podstawowej: bez -s, bez to, bez -ing. He can swim.', ru: 'После can глагол в начальной форме: без -s, без to, без -ing. He can swim.' };
  const canQ = { pl: 'Pytanie z can: Can + osoba + czasownik? Nie dodajemy do/does. Can you swim?', ru: 'Вопрос с can: Can + кто + глагол? Без do/does. Can you swim?' };
  const canShort = { pl: 'Krótka odpowiedź: Yes, I can. / No, I can\'t. Powtarzamy can, bez czasownika.', ru: 'Краткий ответ: Yes, I can. / No, I can\'t. Повторяем can, глагол не нужен.' };
  const adv = { pl: 'Przysłówek mówi JAK: zwykle przymiotnik + -ly (slow ➜ slowly, careful ➜ carefully). Wyjątki: good ➜ well, fast ➜ fast.', ru: 'Наречие говорит КАК: обычно прилагательное + -ly (slow ➜ slowly, careful ➜ carefully). Исключения: good ➜ well, fast ➜ fast.' };
  const collo = { pl: 'play + sport lub gra (play football), play the + instrument (play the guitar), ride + bike/horse, make + coś, co tworzysz (make a cake).', ru: 'play + спорт/игра (play football), play the + инструмент (play the guitar), ride + bike/horse, make + то, что создаёшь (make a cake).' };
  const perm = { pl: 'Prosisz: Can I...? Odpowiadasz o osobie, która pyta: Yes, you can. / No, you can\'t. (Nie "Yes, I can"!)', ru: 'Просишь: Can I...? Отвечаешь про того, кто спрашивает: Yes, you can. / No, you can\'t. (Не "Yes, I can"!)' };

  EQ.registerLesson({
    id: 'u6-sports', unit: U, title: 'Sports and hobbies', page: 78, emoji: '⚽',
    words: [
      w('swim', 'pływać', 'плавать', '🏊'),
      w('run', 'biegać', 'бегать', '🏃'),
      w('jump', 'skakać', 'прыгать', '🤾'),
      w('climb', 'wspinać się', 'лазать', '🧗', { pl: 'climb: b na końcu milczy! Czyta się "klajm".', ru: 'climb: b на конце не читается! Читается "клайм".' }),
      w('dance', 'tańczyć', 'танцевать', '💃'),
      w('sing', 'śpiewać', 'петь', '🎤'),
      w('skate', 'jeździć na łyżwach / rolkach', 'кататься на коньках / роликах', '⛸️'),
      w('ride a bike', 'jeździć na rowerze', 'ездить на велосипеде', '🚴', { pl: 'po angielsku ride a bike, nie "go on bike".', ru: 'по-английски ride a bike.' }),
      w('play football', 'grać w piłkę nożną', 'играть в футбол', '⚽', { pl: 'play football BEZ "the" i bez "w": po prostu play + sport.', ru: 'play football БЕЗ the: просто play + вид спорта.' }),
      w('play tennis', 'grać w tenisa', 'играть в теннис', '🎾'),
      w('play the guitar', 'grać na gitarze', 'играть на гитаре', '🎸', { pl: 'Na instrumencie gramy z "the": play the guitar. W sporcie bez: play football.', ru: 'На инструменте играем с the: play the guitar. В спорте без: play football.' }),
      w('make a cake', 'upiec ciasto', 'испечь торт', '🎂', { pl: 'cake pieczemy po angielsku "make" (robić), nie "bake" w zwrocie z make.', ru: 'торт "делаем": make a cake.' }),
      w('make a video', 'nakręcić film', 'снять видео', '🎬'),
      w('racket', 'rakieta', 'ракетка', '🏸')
    ],
    sentences: [
      s('I play football on Saturdays.', 'Gram w piłkę nożną w soboty.', 'Я играю в футбол по субботам.'),
      s('My brother plays the guitar.', 'Mój brat gra na gitarze.', 'Мой брат играет на гитаре.'),
      s('We make a video for our class.', 'Nagrywamy film dla klasy.', 'Мы снимаем видео для класса.'),
      s('I ride my bike to school.', 'Jeżdżę do szkoły na rowerze.', 'Я езжу в школу на велосипеде.')
    ],
    quizzes: [
      c.mcq(Q('Lewandowski ___ football.', 'Lewandowski ___ w piłkę nożną.', 'Левандовски ___ в футбол.'), ['plays', 'makes', 'rides', 'does'], 'plays', { big: '⚽', why: { pl: collo.pl, ru: collo.ru } }),
      c.mcq(Q('I ___ a cake for my mum\'s birthday.', '___ ciasto na urodziny mamy.', 'Я ___ торт на день рождения мамы.'), ['make', 'play', 'ride', 'swim'], 'make', { big: '🎂', why: { pl: collo.pl, ru: collo.ru } }),
      c.mcq(Q('She ___ her bike to the park.', 'Ona ___ rowerem do parku.', 'Она ___ на велосипеде в парк.'), ['rides', 'plays', 'makes', 'climbs'], 'rides', { big: '🚴', why: { pl: collo.pl, ru: collo.ru } }),
      c.mcq(Q('Ana ___ the guitar.', 'Ana ___ na gitarze.', 'Ана ___ на гитаре.'), ['plays', 'makes', 'rides', 'sings'], 'plays', { big: '🎸', why: { pl: collo.pl, ru: collo.ru } }),
      c.mcq(Q('You do this in water.', 'Robisz to w wodzie.', 'Это делают в воде.'), ['swim', 'skate', 'climb', 'dance'], 'swim', { big: '🌊' }),
      c.tf(Q('We say "play the football".', 'Mówimy "play the football".', 'Мы говорим "play the football".'), false, { why: { pl: 'Przed nazwą sportu nie ma the: play football.', ru: 'Перед названием спорта the не ставим: play football.' } }),
      c.tf(Q('The "b" in "climb" is silent.', 'Litera "b" w "climb" jest niema.', 'Буква "b" в "climb" не читается.'), true),
      c.type(Q('Write in English: tańczyć / танцевать', 'Napisz po angielsku: tańczyć', 'Напиши по-английски: танцевать'), 'dance'),
      c.type(Q('Write in English: wspinać się / лазать', 'Napisz po angielsku: wspinać się', 'Напиши по-английски: лазать'), 'climb'),
      c.type(Q('I ___ the guitar after school. (play)', '___ na gitarze po lekcjach.', 'Я ___ на гитаре после школы. (play)'), 'play', [], { why: { pl: collo.pl, ru: collo.ru } }),
      c.order('I ride my bike to school', 'Ułóż zdanie: Jeżdżę do szkoły na rowerze', 'Составь предложение: Я езжу в школу на велосипеде'),
      c.order('My brother plays the guitar', 'Ułóż zdanie: Mój brat gra na gitarze', 'Составь предложение: Мой брат играет на гитаре'),
      c.sort(Q('play, make or ride?', 'play, make czy ride?', 'play, make или ride?'), { 'play': ['football', 'tennis', 'the guitar'], 'make': ['a cake', 'a video', 'breakfast'], 'ride': ['a bike', 'a horse'] }),
      c.sort(Q('Sport or music?', 'Sport czy muzyka?', 'Спорт или музыка?'), { 'sport 🏅': ['swim', 'run', 'skate', 'play tennis'], 'music 🎵': ['sing', 'play the guitar', 'dance'] }),
      c.fix('I do football every day.', 'do', 'play', { why: collo }),
      c.fix('She plays guitar in the band.', 'guitar', 'the guitar', { why: collo }),
      c.fix('We do a cake for Mum.', 'do', 'make', { why: collo }),
      c.fix('My brother plays a bike.', 'plays', 'rides', { why: collo }),
      c.fix('I like climb trees.', 'climb', 'climbing', { why: { pl: 'Po like czasownik z -ing: like climbing, like swimming.', ru: 'После like глагол с -ing: like climbing, like swimming.' } }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'What do you do after school?', replies: ['I play football with my friends.', 'I am after school.', 'I plays football.'] },
        { say: 'Cool! Do you play the guitar too?', replies: ["No, I don't. I play the piano.", 'No, I play not.', "Yes, I'm the guitar."] },
        { say: "Let's make a video of us!", replies: ["Great idea! I'll bring my bike.", 'I make a video football.', 'Yes, you are a video.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u6-can', unit: U, title: 'Can and can\'t', page: 80, emoji: '💪',
    words: [
      w('fly', 'latać', 'летать', '🦅'),
      w('draw', 'rysować', 'рисовать', '🎨'),
      w('cook', 'gotować', 'готовить', '🍳'),
      w('speak', 'mówić (językiem)', 'говорить (на языке)', '🗣️', { pl: 'speak English, say hello, tell a story: różne czasowniki "mówić".', ru: 'speak English, say hello, tell a story: разные глаголы "говорить".' }),
      w('ride a horse', 'jeździć konno', 'ездить на лошади', '🐎'),
      w('juggle', 'żonglować', 'жонглировать', '🤹', { pl: 'juggle: czyta się "dżagl".', ru: 'juggle: читается "джаггл".' }),
      w('whistle', 'gwizdać', 'свистеть', '😗', { pl: 'whistle: "w" czyta się, "t" milczy: "łisl".', ru: 'whistle: t не читается: "уисл".' }),
      w('do a handstand', 'stanąć na rękach', 'встать на руки', '🤸'),
      w('stand on one leg', 'stać na jednej nodze', 'стоять на одной ноге', '🦩'),
      w('count to a hundred', 'liczyć do stu', 'считать до ста', '💯')
    ],
    sentences: [
      s('I can draw, but I can\'t cook.', 'Umiem rysować, ale nie umiem gotować.', 'Я умею рисовать, но не умею готовить.'),
      s('Can you swim? Yes, I can.', 'Czy umiesz pływać? Tak, umiem.', 'Ты умеешь плавать? Да, умею.'),
      s('Robbie can run fast, but he can\'t swim.', 'Robbie szybko biega, ale nie umie pływać.', 'Робби быстро бегает, но не умеет плавать.'),
      s('What can you do?', 'Co potrafisz robić?', 'Что ты умеешь делать?'),
      s('Birds can fly, but cats can\'t.', 'Ptaki potrafią latać, a koty nie.', 'Птицы умеют летать, а кошки нет.')
    ],
    quizzes: [
      c.mcq(Q('He ___ swim.', 'On ___ pływać.', 'Он ___ плавать.'), ['can', 'cans', 'can to', 'is can'], 'can', { why: canBase }),
      c.mcq(Q('___ you play the guitar?', '___ grać na gitarze?', 'Ты ___ играть на гитаре?'), ['Can', 'Do can', 'Are', 'Does'], 'Can', { why: canQ }),
      c.mcq(Q('Can she draw? ➜ Yes, ___.', 'Czy ona umie rysować? ➜ Tak, ___.', 'Она умеет рисовать? ➜ Да, ___.'), ['she can', 'she cans', 'she does', 'she is'], 'she can', { big: '🎨', why: canShort }),
      c.mcq(Q('Can they fly? ➜ No, ___.', 'Czy oni umieją latać? ➜ Nie, ___.', 'Они умеют летать? ➜ Нет, ___.'), ["they can't", "they don't", "they aren't", "they can"], "they can't", { why: canShort }),
      c.mcq(Q('Which sentence is correct?', 'Które zdanie jest poprawne?', 'Какое предложение правильное?'), ['My cat can climb trees.', 'My cat cans climb trees.', 'My cat can to climb trees.', 'My cat can climbs trees.'], 'My cat can climb trees.', { big: '🐱', why: canBase }),
      c.tf(Q('We say "She can plays the piano".', 'Mówimy "She can plays the piano".', 'Мы говорим "She can plays the piano".'), false, { why: canBase }),
      c.tf(Q("Birds can fly, but cats can't.", 'Ptaki potrafią latać, a koty nie.', 'Птицы умеют летать, а кошки нет.'), true),
      c.type(Q('I ___ speak English. (umiem / умею)', 'I ___ speak English. (umiem)', 'I ___ speak English. (умею)'), 'can', [], { why: canBase }),
      c.type(Q('Negative: I ___ cook. (nie umiem / не умею)', 'I ___ cook. (nie umiem; 2 słowa lub skrót)', 'I ___ cook. (не умею; скрепка или 2 слова)'), "can't", ['cant', 'cannot', 'can not'], { why: canBase }),
      c.type(Q('Write in English: rysować / рисовать', 'Napisz po angielsku: rysować', 'Напиши по-английски: рисовать'), 'draw'),
      c.type(Q('Can you juggle? Short answer: Yes, I ___.', 'Can you juggle? Krótka odpowiedź: Yes, I ___.', 'Can you juggle? Краткий ответ: Yes, I ___.'), 'can', [], { why: canShort }),
      c.order('Can you swim', 'Ułóż pytanie: Czy umiesz pływać?', 'Составь вопрос: Ты умеешь плавать?'),
      c.order("Robbie can run fast but he can't swim", 'Ułóż zdanie: Robbie szybko biega, ale nie umie pływać', 'Составь предложение: Робби быстро бегает, но не умеет плавать'),
      c.sort(Q('Can or can\'t? (a normal cat)', 'Can czy can\'t? (zwykły kot)', 'Can или can\'t? (обычный кот)'), { 'a cat can... 🐱': ['climb a tree', 'jump', 'run fast', 'swim a bit'], "a cat can't... 🙅": ['speak English', 'ride a horse', 'cook dinner', 'do homework'] }),
      c.sort(Q('Can a human do it?', 'Czy człowiek to potrafi?', 'Человек это умеет?'), { 'yes ✅': ['swim', 'draw', 'sing', 'juggle'], 'no ❌': ['fly like a bird', 'breathe under water', 'run 100 km/h'] }),
      c.fix('My brother cans swim very well.', 'cans', 'can', { why: canBase }),
      c.fix('She can dancing.', 'dancing', 'dance', { why: canBase }),
      c.fix('Can you draws a cat?', 'draws', 'draw', { why: canBase }),
      c.fix('Do you can ride a horse?', 'Do', 'Can', { why: canQ }),
      c.fix('Tom can plays the guitar.', 'plays', 'play', { why: canBase }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Hi! I can run and jump. What can you do?', replies: ['I can swim and draw.', 'I cans swim and draw.', 'I can to swim.'] },
        { say: 'Can you speak Russian?', replies: ["Yes, I can. And I can speak Polish too!", 'Yes, I speak can.', "No, I don't can."] },
        { say: "I can't swim. Robots can't swim! Can you help me?", replies: ['Sure! I can teach you.', 'Sure! I teach can you.', 'No, I help.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u6-adverbs', unit: U, title: 'How do you do it?', page: 82, emoji: '🐢',
    words: [
      w('well', 'dobrze', 'хорошо', '👍', { pl: 'well to przysłówek od good. Nie mówimy "plays good"!', ru: 'well это наречие от good. Не говорим "plays good"!' }),
      w('badly', 'źle', 'плохо', '👎'),
      w('fast', 'szybko', 'быстро', '🚀', { pl: 'fast jest takie samo: fast car, runs fast. Nie "fastly"!', ru: 'fast одинаковое: fast car, runs fast. Не "fastly"!' }),
      w('slowly', 'wolno', 'медленно', '🐢'),
      w('carefully', 'ostrożnie', 'осторожно', '🥚', { pl: 'careful + ly = carefully (dwa "l" na końcu).', ru: 'careful + ly = carefully (две "l" в конце).' }),
      w('quietly', 'cicho', 'тихо', '🤫'),
      w('loudly', 'głośno', 'громко', '📢'),
      w('quickly', 'szybko (prędko)', 'быстро (скоро)', '⚡'),
      w('easily', 'łatwo', 'легко', '😎', { pl: 'easy + ly = easily (y zamienia się w i).', ru: 'easy + ly = easily (y меняется на i).' }),
      w('happily', 'radośnie', 'радостно', '😄')
    ],
    sentences: [
      s('Robbie dances badly, but he is very happy.', 'Robbie tańczy źle, ale jest bardzo szczęśliwy.', 'Робби танцует плохо, но очень счастлив.'),
      s('My sister sings really well.', 'Moja siostra śpiewa naprawdę dobrze.', 'Моя сестра поёт очень хорошо.'),
      s('Please walk slowly with the eggs.', 'Proszę, idź powoli z jajkami.', 'Пожалуйста, иди медленно с яйцами.'),
      s('Lily runs fast and climbs easily.', 'Lily szybko biega i łatwo się wspina.', 'Лили быстро бегает и легко лазает.')
    ],
    quizzes: [
      c.mcq(Q('Ana plays football very ___.', 'Ana gra w piłkę bardzo ___.', 'Ана играет в футбол очень ___.'), ['well', 'good', 'goodly', 'best'], 'well', { big: '⚽', why: adv }),
      c.mcq(Q('The cheetah runs ___.', 'Gepard biega ___.', 'Гепард бегает ___.'), ['fast', 'fastly', 'fasty', 'slow'], 'fast', { big: '🐆', why: adv }),
      c.mcq(Q('The snail moves ___.', 'Ślimak porusza się ___.', 'Улитка двигается ___.'), ['slowly', 'slow', 'slowy', 'fast'], 'slowly', { big: '🐌', why: adv }),
      c.mcq(Q('Be ___ with the eggs!', 'Bądź ___ z jajkami!', 'Будь ___ с яйцами!'), ['careful', 'carefully', 'care', 'carefull'], 'careful', { big: '🥚', why: { pl: 'Po be (jesteś) używamy przymiotnika: Be careful! Po czasowniku akcji: Walk carefully.', ru: 'После be (быть) прилагательное: Be careful! После глагола действия: Walk carefully.' } }),
      c.mcq(Q('Shh! Speak ___ in the library.', 'Ciii! Mów ___ w bibliotece.', 'Тсс! Говори ___ в библиотеке.'), ['quietly', 'quiet', 'quietily', 'loudly'], 'quietly', { big: '📚', why: adv }),
      c.tf(Q('"She sings good" is correct.', '"She sings good" jest poprawne.', '"She sings good" правильно.'), false, { why: adv }),
      c.tf(Q('The opposite of "well" is "badly".', 'Przeciwieństwem "well" jest "badly".', 'Противоположность "well" это "badly".'), true),
      c.type(Q('He is a good player. He plays ___.', 'On jest dobrym graczem. Gra ___.', 'Он хороший игрок. Он играет ___.'), 'well', [], { why: adv }),
      c.type(Q('She is slow. She walks ___.', 'Ona jest wolna. Chodzi ___.', 'Она медленная. Она ходит ___.'), 'slowly', [], { why: adv }),
      c.type(Q('Write in English: cicho / тихо', 'Napisz po angielsku: cicho', 'Напиши по-английски: тихо'), 'quietly', ['quiet'], { why: adv }),
      c.order('She sings really well', 'Ułóż zdanie: Ona śpiewa naprawdę dobrze', 'Составь предложение: Она поёт очень хорошо'),
      c.order('Please walk slowly with the eggs', 'Ułóż zdanie: Proszę, idź powoli z jajkami', 'Составь предложение: Пожалуйста, иди медленно с яйцами'),
      c.sort(Q('Adjective or adverb?', 'Przymiotnik czy przysłówek?', 'Прилагательное или наречие?'), { 'adjective (a quiet girl)': ['slow', 'quiet', 'careful', 'good'], 'adverb (she talks quietly)': ['slowly', 'quietly', 'carefully', 'well'] }),
      c.sort(Q('Good for... or bad for...?', 'Dobre czy złe?', 'Хорошо или плохо?'), { 'well 👍': ['sings beautifully', 'plays perfectly', 'draws nicely'], 'badly 👎': ['sings off-key', 'always loses the ball', 'drops everything'] }),
      c.fix('My dad cooks very good.', 'good', 'well', { why: adv }),
      c.fix('The car goes fastly.', 'fastly', 'fast', { why: adv }),
      c.fix('He plays football good.', 'good', 'well', { why: adv }),
      c.fix('Walk carefuly on the ice!', 'carefuly', 'carefully', { why: adv }),
      c.fix('She is a slowly runner.', 'slowly', 'slow', { why: { pl: 'Przed rzeczownikiem (runner) potrzebny jest przymiotnik: a slow runner.', ru: 'Перед существительным (runner) нужно прилагательное: a slow runner.' } }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'Can you play the guitar?', replies: ['Yes, I can, but I play badly.', 'Yes, I play bad can.', 'No, I am guitar.'] },
        { say: 'Ha ha! I dance well, but I sing badly.', replies: ['Let us dance together then!', 'I sing badly dance you.', 'You are dancing well bad.'] },
        { say: 'Quick! Walk carefully, the cake is on the floor!', replies: ['Oh no! Walk slowly!', 'Oh no! Walk carefulness!', 'Oh no! I walk cake!'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u6-permission', unit: U, title: 'Can I...? Asking permission', page: 84, emoji: '🙋',
    words: [
      w('borrow', 'pożyczyć (od kogoś)', 'взять взаймы', '🤲', { pl: 'borrow = pożyczam OD kogoś; lend = pożyczam KOMUŚ.', ru: 'borrow = беру у кого-то; lend = даю кому-то.' }),
      w('lend', 'pożyczyć (komuś)', 'одолжить (кому-то)', '🤝'),
      w('window', 'okno', 'окно', '🪟'),
      w('toilet', 'toaleta', 'туалет', '🚽', { pl: 'W szkole w Anglii pytamy: Can I go to the toilet, please?', ru: 'В английской школе просят: Can I go to the toilet, please?' }),
      w('ruler', 'linijka', 'линейка', '📏'),
      w('rubber', 'gumka', 'ластик', '🧽', { pl: 'W UK rubber to gumka do mazania. W USA mówią eraser.', ru: 'В UK rubber это ластик. В США говорят eraser.' }),
      w('corridor', 'korytarz', 'коридор', '🚪'),
      w('of course', 'oczywiście', 'конечно', '✅'),
      w('sorry', 'przepraszam', 'извини', '🙇'),
      w('allowed', 'dozwolony', 'разрешено', '👌')
    ],
    sentences: [
      s('Can I borrow your pen, please?', 'Czy mogę pożyczyć twój długopis?', 'Можно взять твою ручку?'),
      s("Yes, of course. Here you are.", 'Tak, oczywiście. Proszę.', 'Да, конечно. Вот, держи.'),
      s("Sorry, you can't.", 'Przepraszam, nie możesz.', 'Извини, нельзя.'),
      s('Can I open the window? It is hot.', 'Czy mogę otworzyć okno? Jest gorąco.', 'Можно открыть окно? Жарко.'),
      s("You can't run in the corridor.", 'Nie wolno biegać na korytarzu.', 'В коридоре нельзя бегать.')
    ],
    quizzes: [
      c.mcq(Q('Friend: "Can I use your rubber?" You say yes:', 'Koleżanka: "Can I use your rubber?" Zgadzasz się:', 'Подруга: "Can I use your rubber?" Ты соглашаешься:'), ['Yes, you can.', 'Yes, I can.', 'Yes, I do.', 'Yes, it is.'], 'Yes, you can.', { big: '🧽', why: perm }),
      c.mcq(Q('Ana: "Can I open the window?" You say no:', 'Ana: "Can I open the window?" Odmawiasz:', 'Ана: "Can I open the window?" Ты отказываешь:'), ["No, you can't. It's cold.", "No, I can't. It's cold.", "No, you don't.", 'No, I am not.'], "No, you can't. It's cold.", { big: '🪟', why: perm }),
      c.mcq(Q('Can I ___ your ruler? (take it for a minute)', 'Can I ___ your ruler? (wziąć na chwilę)', 'Can I ___ your ruler? (взять на минуту)'), ['borrow', 'lend', 'give', 'bring'], 'borrow', { big: '📏', why: { pl: 'Ja biorę od ciebie ➜ borrow. Ty dajesz mnie ➜ lend: Can you lend me your ruler?', ru: 'Я беру у тебя ➜ borrow. Ты даёшь мне ➜ lend: Can you lend me your ruler?' } }),
      c.mcq(Q('Can you ___ me your pen?', 'Can you ___ me your pen?', 'Can you ___ me your pen?'), ['lend', 'borrow', 'take', 'borrows'], 'lend', { why: { pl: 'Ty dajesz mnie ➜ lend me. Ja biorę od ciebie ➜ borrow.', ru: 'Ты даёшь мне ➜ lend me. Я беру у тебя ➜ borrow.' } }),
      c.mcq(Q('In class you say...', 'Na lekcji mówisz...', 'На уроке говоришь...'), ['Can I go to the toilet, please?', 'I go toilet now.', 'You can toilet me?', 'Toilet open?'], 'Can I go to the toilet, please?', { big: '🚽', why: perm }),
      c.tf(Q('"Can I to open the window?" is correct.', '"Can I to open the window?" jest poprawne.', '"Can I to open the window?" правильно.'), false, { why: canBase }),
      c.tf(Q('"Sorry, you can\'t" is a polite way to say no.', '"Sorry, you can\'t" to grzeczna odmowa.', '"Sorry, you can\'t" это вежливый отказ.'), true),
      c.type(Q('Can I open the window? Yes, you ___.', 'Can I open the window? Yes, you ___.', 'Can I open the window? Yes, you ___.'), 'can', [], { why: perm }),
      c.type(Q('Can I run here? No, you ___. (3 forms OK)', 'Can I run here? No, you ___.', 'Can I run here? No, you ___.'), "can't", ['cant', 'cannot'], { why: perm }),
      c.type(Q('Write in English: oczywiście / конечно (2 words)', 'Napisz po angielsku: oczywiście (2 słowa)', 'Напиши по-английски: конечно (2 слова)'), 'of course'),
      c.order('Can I borrow your pen please', 'Ułóż pytanie: Czy mogę pożyczyć twój długopis?', 'Составь вопрос: Можно взять твою ручку?'),
      c.order("You can't run in the corridor", 'Ułóż zdanie: Nie wolno biegać na korytarzu', 'Составь предложение: В коридоре нельзя бегать'),
      c.sort(Q('Yes, you can... or No, you can\'t...?', 'Można czy nie?', 'Можно или нельзя?'), { 'You can ✅': ['ask a question in class', 'borrow a pen (ask first)', 'drink water at lunch'], "You can't ❌": ['run in the corridor', 'shout in the library', 'eat in the exam', 'copy the test'] }),
      c.sort(Q('Who says it? Asking or answering?', 'Pytanie czy odpowiedź?', 'Просьба или ответ?'), { 'asking 🙋': ['Can I borrow your ruler?', 'Can I open the window?', 'Can I go home?'], 'answering 🗣️': ['Yes, of course.', "No, you can't.", 'Sorry, you can\'t.'] }),
      c.fix('Can I borrowing your rubber?', 'borrowing', 'borrow', { why: canBase }),
      c.fix('Can I go to the toilet? Yes, we can.', 'we', 'you', { why: perm }),
      c.fix('Can you borrow me your pencil?', 'borrow', 'lend', { why: { pl: 'Ty dajesz MI ➜ lend me. Ja biorę od ciebie ➜ borrow.', ru: 'Ты даёшь МНЕ ➜ lend me. Я беру у тебя ➜ borrow.' } }),
      c.fix('Can I opens the window?', 'opens', 'open', { why: canBase }),
      c.fix('Sorry, you cant run here.', 'cant', "can't", { why: { pl: "can't ma apostrof: can't = cannot.", ru: "В can't есть апостроф: can't = cannot." } }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Excuse me, Ana. Can I borrow your pen, please?', replies: ['Yes, of course. Here you are.', 'Yes, I can. Here you are.', 'Yes, I borrow.'] },
        { say: 'Thank you! Can I open the window? It is very hot.', replies: ["Sorry, you can't. It's raining!", "Sorry, I can't. It's raining!", "Sorry, you don't. It's open."] },
        { say: 'Oh, my robot circuits are wet! Can I go to the toilet?', replies: ['Ha ha! Yes, you can.', 'Ha ha! Yes, I am.', 'Ha ha! No, you are not.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u6-sportsworld', unit: U, title: 'Sports around the world', page: 88, emoji: '🏆',
    words: [
      w('team', 'drużyna', 'команда', '👥'),
      w('match', 'mecz', 'матч', '🏟️'),
      w('win', 'wygrać', 'выиграть', '🏆'),
      w('lose', 'przegrać', 'проиграть', '😢', { pl: 'lose (przegrać) i loose (luźny) to dwa różne słowa. Przegrywasz z jednym "o".', ru: 'lose (проиграть) и loose (свободный) разные слова. Проигрыш пишется с одной "o".' }),
      w('player', 'gracz / zawodnik', 'игрок', '🧑‍🤝‍🧑'),
      w('fan', 'kibic', 'болельщик', '📣'),
      w('basketball', 'koszykówka', 'баскетбол', '🏀'),
      w('volleyball', 'siatkówka', 'волейбол', '🏐'),
      w('ice hockey', 'hokej na lodzie', 'хоккей', '🏒'),
      w('cricket', 'krykiet', 'крикет', '🏏', { pl: 'cricket w Anglii: mecz może trwać kilka dni!', ru: 'cricket в Англии: матч может длиться несколько дней!' })
    ],
    sentences: [
      s('In Poland, many children play football and volleyball.', 'W Polsce wiele dzieci gra w piłkę nożną i siatkówkę.', 'В Польше многие дети играют в футбол и волейбол.'),
      s('Cricket is very popular in England.', 'Krykiet jest bardzo popularny w Anglii.', 'Крикет очень популярен в Англии.'),
      s('Canadian children love ice hockey.', 'Dzieci w Kanadzie uwielbiają hokej na lodzie.', 'Дети в Канаде обожают хоккей.'),
      s('Our team can win the match!', 'Nasza drużyna może wygrać mecz!', 'Наша команда может выиграть матч!'),
      s('The fans sing loudly in the stadium.', 'Kibice głośno śpiewają na stadionie.', 'Болельщики громко поют на стадионе.')
    ],
    quizzes: [
      c.mcq(Q('Which sport do you play with a ball and a net, with your hands?', 'W którą grę gra się piłką nad siatką, rękami?', 'В какой игре мяч бросают через сетку руками?'), ['volleyball', 'cricket', 'ice hockey', 'swimming'], 'volleyball', { big: '🏐' }),
      c.mcq(Q('Children in Canada love...', 'Dzieci w Kanadzie kochają...', 'Дети в Канаде любят...'), ['ice hockey', 'cricket', 'volleyball', 'sumo'], 'ice hockey', { big: '🇨🇦' }),
      c.mcq(Q('Cricket is very popular in...', 'Krykiet jest bardzo popularny w...', 'Крикет очень популярен в...'), ['England', 'Poland', 'Canada', 'Spain'], 'England', { big: '🏏' }),
      c.mcq(Q('The opposite of "win" is...', 'Przeciwieństwem "win" jest...', 'Противоположность "win" это...'), ['lose', 'loose', 'lost', 'play'], 'lose', { big: '🏆', why: { pl: 'win ➜ lose. Po can zawsze forma podstawowa: can win, can lose.', ru: 'win ➜ lose. После can всегда начальная форма: can win, can lose.' } }),
      c.mcq(Q('A person who loves a team and shouts a lot is a...', 'Osoba, która kocha drużynę i głośno krzyczy, to...', 'Человек, который любит команду и громко кричит, это...'), ['fan', 'player', 'match', 'racket'], 'fan', { big: '📣' }),
      c.tf(Q('Many Polish children play football and volleyball.', 'Wiele polskich dzieci gra w piłkę nożną i siatkówkę.', 'Многие польские дети играют в футбол и волейбол.'), true),
      c.tf(Q('You play ice hockey on a beach.', 'W hokeja na lodzie gra się na plaży.', 'В хоккей играют на пляже.'), false, { why: { pl: 'ice = lód. Hokej na lodzie gra się na lodzie ❄️', ru: 'ice = лёд. В хоккей играют на льду ❄️' } }),
      c.type(Q('Write in English: drużyna / команда', 'Napisz po angielsku: drużyna', 'Напиши по-английски: команда'), 'team'),
      c.type(Q('Write in English: wygrać / выиграть', 'Napisz po angielsku: wygrać', 'Напиши по-английски: выиграть'), 'win'),
      c.type(Q('Our team ___ win the match! (może / может)', 'Our team ___ win the match!', 'Our team ___ win the match!'), 'can', [], { why: canBase }),
      c.order('Our team can win the match', 'Ułóż zdanie: Nasza drużyna może wygrać mecz', 'Составь предложение: Наша команда может выиграть матч'),
      c.order('Cricket is very popular in England', 'Ułóż zdanie: Krykiet jest bardzo popularny w Anglii', 'Составь предложение: Крикет очень популярен в Англии'),
      c.sort(Q('Ball sports or not?', 'Z piłką czy bez?', 'С мячом или нет?'), { 'ball 🏀': ['basketball', 'volleyball', 'football', 'tennis'], 'no ball': ['swimming', 'skating', 'climbing', 'dancing'] }),
      c.sort(Q('Team or one player?', 'Drużynowy czy indywidualny?', 'Командный или индивидуальный?'), { 'team sports 👥': ['football', 'volleyball', 'basketball', 'ice hockey'], 'one player 🧍': ['swimming', 'skating', 'climbing'] }),
      c.fix('The fans singing loudly.', 'singing', 'sing', { why: { pl: 'W Present Simple nie ma -ing: The fans sing loudly.', ru: 'В Present Simple нет -ing: The fans sing loudly.' } }),
      c.fix('Our team can wins the match.', 'wins', 'win', { why: canBase }),
      c.fix('Canadian children play ice hocky.', 'hocky', 'hockey'),
      c.fix('Polish players plays volleyball well.', 'plays', 'play', { why: { pl: 'players to liczba mnoga (oni), więc play bez -s.', ru: 'players это множественное число (они), поэтому play без -s.' } }),
      c.fix('The match is very bad. Our team won!', 'bad', 'great', { why: { pl: 'Wygrana drużyny to dobra wiadomość: great.', ru: 'Победа команды это хорошо: great.' } }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'Mickey says Poland has a great volleyball team. Is it true?', replies: ['Yes, it is. They play very well.', 'Yes, it has.', 'No, I am a team.'] },
        { say: 'Can you play volleyball?', replies: ["Yes, I can, but I'm not very good.", 'Yes, I play can.', 'No, I volleyball.'] },
        { say: 'Come on, play with our team after school!', replies: ['Great! I can play at four.', 'Great! I playing at four.', 'Great! I can to play.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u6-test', unit: U, title: 'Test yourself: Unit 6', page: 89, emoji: '🏅',
    words: [], sentences: [],
    quizzes: [
      c.mcq(Q('My dad ___ cook very well.', 'Mój tata ___ bardzo dobrze gotować.', 'Мой папа очень хорошо ___ готовить.'), ['can', 'cans', 'can to', 'is can'], 'can', { big: '🍳', why: canBase }),
      c.mcq(Q('___ she play the piano?', '___ ona grać na pianinie?', 'Она ___ играть на пианино?'), ['Can', 'Do', 'Does can', 'Is'], 'Can', { big: '🎹', why: canQ }),
      c.mcq(Q('Can I borrow your pen? ➜ Yes, ___.', 'Czy mogę pożyczyć długopis? ➜ Tak, ___.', 'Можно взять ручку? ➜ Да, ___.'), ['you can', 'I can', 'you do', 'it can'], 'you can', { why: perm }),
      c.mcq(Q('He plays football very ___.', 'On gra w piłkę bardzo ___.', 'Он играет в футбол очень ___.'), ['well', 'good', 'goodly', 'best'], 'well', { why: adv }),
      c.mcq(Q('I ___ a video for school.', '___ film do szkoły.', 'Я ___ видео для школы.'), ['make', 'play', 'ride', 'do'], 'make', { why: collo }),
      c.tf(Q('We say "play the tennis".', 'Mówimy "play the tennis".', 'Мы говорим "play the tennis".'), false, { why: collo }),
      c.tf(Q('"Can you to swim?" is correct.', '"Can you to swim?" jest poprawne.', '"Can you to swim?" правильно.'), false, { why: canBase }),
      c.type(Q('Write in English: umiem pływać (3 words)', 'Napisz po angielsku: umiem pływać', 'Напиши по-английски: я умею плавать'), 'I can swim', ['i can swim'], { why: canBase }),
      c.type(Q('Negative: She ___ fly. (nie umie)', 'She ___ fly. (nie umie)', 'She ___ fly. (не умеет)'), "can't", ['cant', 'cannot', 'can not'], { why: canBase }),
      c.type(Q('She is slow. She walks ___.', 'Ona jest wolna. Chodzi ___.', 'Она медленная. Она ходит ___.'), 'slowly', [], { why: adv }),
      c.type(Q('Write in English: gitara (play the ___)', 'Napisz po angielsku: gitara (play the ___)', 'Напиши по-английски: гитара (play the ___)'), 'guitar'),
      c.order('Can I open the window please', 'Ułóż pytanie: Czy mogę otworzyć okno?', 'Составь вопрос: Можно открыть окно?'),
      c.order('He can run fast but he cannot swim', 'Ułóż zdanie: On szybko biega, ale nie umie pływać', 'Составь предложение: Он быстро бегает, но не умеет плавать'),
      c.sort(Q('play, make or ride?', 'play, make czy ride?', 'play, make или ride?'), { 'play': ['volleyball', 'the guitar', 'tennis'], 'make': ['a cake', 'a video'], 'ride': ['a bike', 'a horse'] }),
      c.sort(Q('Adjective or adverb?', 'Przymiotnik czy przysłówek?', 'Прилагательное или наречие?'), { 'adjective': ['good', 'quiet', 'slow'], 'adverb': ['well', 'quietly', 'slowly'] }),
      c.fix('My sister cans dance.', 'cans', 'can', { why: canBase }),
      c.fix('He can plays the guitar.', 'plays', 'play', { why: canBase }),
      c.fix('I do tennis after school.', 'do', 'play', { why: collo }),
      c.fix('She sings very good.', 'good', 'well', { why: adv }),
      c.fix('Can I opens the window?', 'opens', 'open', { why: canBase }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Hi! What can you do?', replies: ['I can swim and I can play the guitar.', 'I cans swim.', 'I can to play the guitar.'] },
        { say: 'Can you play it well?', replies: ["No, I can't. I play badly!", 'No, I play can.', 'Yes, I am good.'] },
        { say: 'Can I borrow your guitar?', replies: ['Yes, of course. Play carefully!', 'Yes, I can. Play careful!', 'Yes, you borrow.'] }
      ])
    ]
  });
})(window.EQ);
