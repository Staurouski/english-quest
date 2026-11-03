/* Unit 7 "My week", textbook pages 92-105. */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;
  const Q = function (en, pl, ru) { return { en: en, pl: pl, ru: ru }; };
  const U = 'Unit 7: My week';
  const sForm = { pl: 'He / she / it: czasownik + -s (he gets up). Po s, sh, ch, x, o dodajemy -es (watches, goes); spółgłoska + y daje -ies (studies). have ➜ has.', ru: 'He / she / it: глагол + -s (he gets up). После s, sh, ch, x, o добавляем -es (watches, goes); согласная + y даёт -ies (studies). have ➜ has.' };
  const dont = { pl: 'I / you / we / they: don\'t + czasownik w formie podstawowej. I don\'t like fish.', ru: 'I / you / we / they: don\'t + глагол в начальной форме. I don\'t like fish.' };
  const doesnt = { pl: 'He / she / it: doesn\'t + czasownik BEZ -s (-s jest już w doesn\'t). He doesn\'t like fish.', ru: 'He / she / it: doesn\'t + глагол БЕЗ -s (-s уже есть в doesn\'t). He doesn\'t like fish.' };
  const doQ = { pl: 'Pytanie: Do + I / you / we / they, Does + he / she / it. Po do/does czasownik BEZ -s. Do you like...? Does she like...?', ru: 'Вопрос: Do + I / you / we / they, Does + he / she / it. После do/does глагол БЕЗ -s. Do you like...? Does she like...?' };
  const shortAns = { pl: 'Krótka odpowiedź powtarza do/does: Yes, she does. / No, I don\'t. (bez czasownika głównego)', ru: 'Краткий ответ повторяет do/does: Yes, she does. / No, I don\'t. (без основного глагола)' };
  const freq = { pl: 'Przysłówki częstotliwości (always, usually, never) stoją PRZED czasownikiem, ale PO "be": I always get up. / He is always late.', ru: 'Наречия частоты (always, usually, never) стоят ПЕРЕД глаголом, но ПОСЛЕ "be": I always get up. / He is always late.' };
  const prep = { pl: 'at + godzina (at seven), on + dzień (on Monday), in the morning / afternoon / evening, ale at night.', ru: 'at + время (at seven), on + день (on Monday), in the morning / afternoon / evening, но at night.' };
  const timeWhy = { pl: 'half past eight = 8:30 (pół godziny PO ósmej). Po polsku "wpół do dziewiątej", ale po angielsku mówimy o ósmej!', ru: 'half past eight = 8:30 (полчаса ПОСЛЕ восьми). По-русски "половина девятого", а по-английски говорим про восемь!' };

  EQ.registerLesson({
    id: 'u7-subjects', unit: U, title: 'School subjects', page: 92, emoji: '🎒',
    words: [
      w('Maths', 'matematyka', 'математика', '🔢', { pl: 'Po brytyjsku Maths z -s na końcu, po amerykańsku Math.', ru: 'В британском варианте Maths с -s на конце, в американском Math.' }),
      w('Science', 'przyroda / nauki ścisłe', 'естествознание', '🔬', { pl: 'Science: "saj-ens". Piszemy z dużej litery jako nazwę przedmiotu.', ru: 'Science: "сай-энс". Название предмета пишем с большой буквы.' }),
      w('History', 'historia', 'история', '🏛️'),
      w('Geography', 'geografia', 'география', '🌍', { pl: 'Geography: "dżi-OG-rafi". Dużo liter, mało dźwięków.', ru: 'Geography: "джи-ОГ-рафи".' }),
      w('Art', 'plastyka', 'рисование', '🎨'),
      w('Music', 'muzyka', 'музыка', '🎵'),
      w('PE', 'W-F', 'физкультура', '🤸', { pl: 'PE = Physical Education, czyta się "pi: i:".', ru: 'PE = Physical Education, читается "пи и".' }),
      w('IT', 'informatyka', 'информатика', '💻', { pl: 'IT = Information Technology, czyta się "aj ti:".', ru: 'IT = Information Technology, читается "ай ти".' }),
      w('English', 'angielski', 'английский', '🇬🇧', { pl: 'Nazwy języków piszemy dużą literą: English, Polish.', ru: 'Названия языков пишем с большой буквы: English, Polish.' }),
      w('subject', 'przedmiot szkolny', 'школьный предмет', '📚'),
      w('timetable', 'plan lekcji', 'расписание', '🗓️', { pl: 'time + table = tabela z czasem.', ru: 'time + table = таблица времени.' }),
      w('favourite', 'ulubiony', 'любимый', '⭐', { pl: 'Brytyjskie favourite ma "ou". Czyta się "fejwerit".', ru: 'В британском favourite есть "ou". Читается "фэйверит".' })
    ],
    sentences: [
      s('My favourite subject is Art.', 'Moim ulubionym przedmiotem jest plastyka.', 'Мой любимый предмет рисование.'),
      s('I love Music, but I hate Maths.', 'Uwielbiam muzykę, ale nienawidzę matematyki.', 'Я обожаю музыку, но ненавижу математику.'),
      s('We have English on Monday and Thursday.', 'Mamy angielski w poniedziałek i czwartek.', 'У нас английский в понедельник и четверг.'),
      s('I like History because it is interesting.', 'Lubię historię, bo jest ciekawa.', 'Я люблю историю, потому что она интересная.'),
      s('Do you like Science?', 'Czy lubisz przyrodę?', 'Ты любишь естествознание?')
    ],
    quizzes: [
      c.mcq(Q('You draw and paint in...', 'Rysujesz i malujesz na...', 'Ты рисуешь и красишь на уроке...'), ['Art', 'Music', 'Maths', 'IT'], 'Art', { big: '🎨' }),
      c.mcq(Q('You use computers in...', 'Używasz komputerów na...', 'Ты работаешь с компьютерами на...'), ['IT', 'PE', 'History', 'Art'], 'IT', { big: '💻' }),
      c.mcq(Q('You run and play games in...', 'Biegasz i grasz w gry na...', 'Ты бегаешь и играешь на уроке...'), ['PE', 'Maths', 'Science', 'Music'], 'PE', { big: '⚽' }),
      c.mcq(Q('We have English ___ Monday.', 'Mamy angielski ___ poniedziałek.', 'У нас английский ___ понедельник.'), ['on', 'in', 'at', 'by'], 'on', { why: prep }),
      c.mcq(Q('I ___ Maths. It is my favourite!', '___ matematykę. To mój ulubiony!', 'Я ___ математику. Это мой любимый!'), ['love', 'loves', 'am love', 'hate'], 'love', { big: '🔢', why: { pl: 'love = uwielbiam, like = lubię, hate = nienawidzę. Po I zawsze bez -s.', ru: 'love = обожаю, like = люблю, hate = ненавижу. После I без -s.' } }),
      c.tf(Q('"Maths" is a school subject.', '"Maths" to przedmiot szkolny.', '"Maths" это школьный предмет.'), true),
      c.tf(Q('PE means "Physical Education".', 'PE oznacza "Physical Education".', 'PE значит "Physical Education".'), true),
      c.type(Q('Write in English: informatyka / информатика', 'Napisz po angielsku: informatyka', 'Напиши по-английски: информатика'), 'IT'),
      c.type(Q('Write in English: ulubiony / любимый', 'Napisz po angielsku: ulubiony (brytyjska pisownia)', 'Напиши по-английски: любимый (британское написание)'), 'favourite', ['favorite']),
      c.type(Q('My favourite subject ___ Music. (is / are)', 'Mój ulubiony przedmiot ___ muzyka.', 'Мой любимый предмет ___ музыка.'), 'is', [], { why: { pl: 'Subject to liczba pojedyncza, więc is.', ru: 'Subject это единственное число, поэтому is.' } }),
      c.order('I love Music but I hate Maths', 'Ułóż zdanie: Uwielbiam muzykę, ale nienawidzę matematyki', 'Составь предложение: Я обожаю музыку, но ненавижу математику'),
      c.order('We have English on Monday', 'Ułóż zdanie: Mamy angielski w poniedziałek', 'Составь предложение: У нас английский в понедельник'),
      c.sort(Q('Which lesson?', 'Która lekcja?', 'Какой урок?'), { 'Art 🎨': ['paint a picture', 'draw a cat'], 'Music 🎵': ['sing a song', 'play the recorder'], 'PE 🤸': ['run', 'play volleyball'] }),
      c.sort(Q('Love it or hate it? (Robbie\'s opinion)', 'Uwielbia czy nienawidzi? (Robbie)', 'Обожает или ненавидит? (Робби)'), { 'love 😍': ['pizza', 'Saturday', 'holidays'], 'hate 😖': ['Monday morning', 'tests', 'rain'] }),
      c.fix('I like maths very much.', 'maths', 'Maths', { why: { pl: 'Nazwy przedmiotów szkolnych piszemy dużą literą: Maths, Art.', ru: 'Названия школьных предметов пишем с большой буквы: Maths, Art.' } }),
      c.fix('We have Art in Tuesday.', 'in', 'on', { why: prep }),
      c.fix('She love Music.', 'love', 'loves', { why: sForm }),
      c.fix('My favorite subject is IT.', 'favorite', 'favourite', { why: { pl: 'W brytyjskiej angielszczyźnie: favourite (z "ou").', ru: 'В британском английском: favourite (с "ou").' } }),
      c.fix('I hate History, it is boring.', 'hate', 'love', { why: { pl: 'Jeśli coś jest boring, to raczej nie lubisz. Tu: ciekawa historia ➜ love.', ru: 'Тут мысль другая: интересная история ➜ love.' } }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: "What's your favourite subject?", replies: ['My favourite subject is Science.', 'I am Science.', 'I favourite Science.'] },
        { say: 'Why?', replies: ['Because I love experiments!', 'Because I am Monday.', 'Because it is on a table.'] },
        { say: 'Do you like Maths?', replies: ["No, I don't. It's difficult.", "No, I'm not.", 'Yes, I Maths.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u7-routine', unit: U, title: 'My day', page: 94, emoji: '⏰',
    words: [
      w('get up', 'wstawać', 'вставать', '🛏️'),
      w('brush your teeth', 'myć zęby', 'чистить зубы', '🪥', { pl: 'teeth to liczba mnoga od tooth: jeden ząb ➜ dużo zębów.', ru: 'teeth это мн. число от tooth: один зуб ➜ много зубов.' }),
      w('have breakfast', 'jeść śniadanie', 'завтракать', '🥣'),
      w('go to school', 'iść do szkoły', 'идти в школу', '🏫', { pl: 'go to school bez "the": Chodzę do szkoły = I go to school.', ru: 'go to school без the.' }),
      w('have lunch', 'jeść lunch', 'обедать', '🍱'),
      w('do homework', 'odrabiać lekcje', 'делать уроки', '📝', { pl: 'homework to rzecz niepoliczalna: some homework, a lot of homework.', ru: 'homework неисчисляемое: some homework, a lot of homework.' }),
      w('watch TV', 'oglądać telewizję', 'смотреть телевизор', '📺'),
      w('play computer games', 'grać w gry komputerowe', 'играть в компьютерные игры', '🎮'),
      w('go to bed', 'iść spać', 'ложиться спать', '😴'),
      w('in the morning', 'rano', 'утром', '🌅'),
      w('in the afternoon', 'po południu', 'днём', '🌞'),
      w('in the evening', 'wieczorem', 'вечером', '🌆'),
      w('at night', 'w nocy', 'ночью', '🌙', { pl: 'at night (nie "in the night"): wyjątek, uczymy się na pamięć.', ru: 'at night (не "in the night"): исключение, запомни.' })
    ],
    sentences: [
      s("I get up at seven o'clock.", 'Wstaję o siódmej.', 'Я встаю в семь часов.'),
      s('I do my homework in the afternoon.', 'Odrabiam lekcje po południu.', 'Я делаю уроки днём.'),
      s('We have lunch at school.', 'Jemy lunch w szkole.', 'Мы обедаем в школе.'),
      s('I go to bed at nine.', 'Idę spać o dziewiątej.', 'Я ложусь спать в девять.'),
      s('Robbie never sleeps at night. He charges.', 'Robbie nigdy nie śpi w nocy. On się ładuje.', 'Робби никогда не спит ночью. Он заряжается.')
    ],
    quizzes: [
      c.mcq(Q('Sun is up. You wake up. It is...', 'Słońce wschodzi. Budzisz się. To jest...', 'Солнце встаёт. Ты просыпаешься. Это...'), ['in the morning', 'in the afternoon', 'at night', 'at evening'], 'in the morning', { big: '🌅', why: prep }),
      c.mcq(Q('The stars are out. It is...', 'Gwiazdy są na niebie. To jest...', 'На небе звёзды. Это...'), ['at night', 'in the night', 'on night', 'in night'], 'at night', { big: '🌙', why: prep }),
      c.mcq(Q('I go to school ___ eight o\'clock.', 'Idę do szkoły ___ ósmej.', 'Я иду в школу ___ восемь часов.'), ['at', 'in', 'on', 'to'], 'at', { why: prep }),
      c.mcq(Q('I do my homework ___ the afternoon.', 'Odrabiam lekcje ___ po południu.', 'Я делаю уроки ___ днём.'), ['in', 'at', 'on', 'by'], 'in', { why: prep }),
      c.mcq(Q('You do this after dinner and before bed.', 'Robisz to po kolacji i przed snem.', 'Это делают после ужина и перед сном.'), ['brush your teeth', 'get up', 'go to school', 'have breakfast'], 'brush your teeth', { big: '🪥' }),
      c.tf(Q('We say "in the night" for 11 p.m.', 'Mówimy "in the night" o 23:00.', 'Мы говорим "in the night" про 23:00.'), false, { why: prep }),
      c.tf(Q('"I go to the school" is correct.', '"I go to the school" jest poprawne.', '"I go to the school" правильно.'), false, { why: { pl: 'Mówimy go to school (bez the), bo chodzimy tam jako uczniowie.', ru: 'Говорим go to school (без the), потому что идём туда как ученики.' } }),
      c.type(Q('Write in English: wstawać / вставать (2 words)', 'Napisz po angielsku: wstawać (2 słowa)', 'Напиши по-английски: вставать (2 слова)'), 'get up'),
      c.type(Q('Write in English: rano / утром (3 words)', 'Napisz po angielsku: rano (3 słowa)', 'Напиши по-английски: утром (3 слова)'), 'in the morning'),
      c.type(Q("I get up ___ seven. (at / on / in)", 'I get up ___ seven.', 'I get up ___ seven.'), 'at', [], { why: prep }),
      c.order("I get up at seven o'clock", 'Ułóż zdanie: Wstaję o siódmej', 'Составь предложение: Я встаю в семь часов'),
      c.order('I do my homework in the afternoon', 'Ułóż zdanie: Odrabiam lekcje po południu', 'Составь предложение: Я делаю уроки днём'),
      c.sort(Q('When do you do it?', 'Kiedy to robisz?', 'Когда ты это делаешь?'), { 'in the morning 🌅': ['get up', 'have breakfast', 'go to school'], 'in the afternoon 🌞': ['have lunch', 'do homework'], 'in the evening / at night 🌙': ['watch TV', 'play computer games', 'go to bed'] }),
      c.sort(Q('at, on or in?', 'at, on czy in?', 'at, on или in?'), { 'at': ['seven o\'clock', 'night', 'half past two'], 'on': ['Monday', 'Friday', 'Sunday'], 'in': ['the morning', 'the evening', 'May'] }),
      c.fix('I get up in seven o\'clock.', 'in', 'at', { why: prep }),
      c.fix('I watch TV at the evening.', 'at', 'in', { why: prep }),
      c.fix('I go to bed in night.', 'in', 'at', { why: prep }),
      c.fix('I do homeworks every day.', 'homeworks', 'homework', { why: { pl: 'homework jest niepoliczalne: nie ma -s.', ru: 'homework неисчисляемое: без -s.' } }),
      c.fix('She brush her teeth twice a day.', 'brush', 'brushes', { why: sForm }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'What time do you get up?', replies: ["I get up at half past seven.", 'I get up in seven.', 'I am up at seven.'] },
        { say: 'And what do you do in the evening?', replies: ['I watch TV and I play computer games.', 'I watching TV.', 'I am the evening.'] },
        { say: 'When do you go to bed?', replies: ['I go to bed at nine.', 'I go to bed on nine.', 'I am bed at nine.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u7-time', unit: U, title: 'What time is it?', page: 96, emoji: '🕒',
    words: [
      w("o'clock", 'równo (godzina)', 'ровно (час)', '🕐', { pl: "o'clock = of the clock. Z apostrofem!", ru: "o'clock = of the clock. С апострофом!" }),
      w('half past', 'wpół po (30 min)', 'половина', '🕤', { pl: 'half past eight = 8:30. Pół godziny PO ósmej.', ru: 'half past eight = 8:30. Полчаса ПОСЛЕ восьми.' }),
      w('quarter past', 'kwadrans po (15 min)', 'четверть после', '🕗'),
      w('quarter to', 'za kwadrans (45 min)', 'без четверти', '🕢'),
      w('past', 'po', 'после', '➡️'),
      w('to', 'do (przed pełną godziną)', 'до', '⬅️'),
      w('clock', 'zegar', 'часы (настенные)', '🕰️'),
      w('hour', 'godzina', 'час', '⏳', { pl: 'hour: h milczy! Czyta się "aur", jak "our".', ru: 'hour: h не читается! Читается "ауэ".' }),
      w('minute', 'minuta', 'минута', '⏱️'),
      w('early', 'wcześnie', 'рано', '🌄'),
      w('late', 'późno / spóźniony', 'поздно / опоздавший', '🏃')
    ],
    sentences: [
      s("What time is it? It's quarter past four.", 'Która godzina? Jest kwadrans po czwartej.', 'Который час? Четверть пятого.'),
      s('It is half past eight.', 'Jest wpół do dziewiątej (8:30).', 'Сейчас половина девятого (8:30).'),
      s("It's quarter to ten.", 'Jest za kwadrans dziesiąta (9:45).', 'Без четверти десять (9:45).'),
      s('What time do you have lunch? At one.', 'O której jesz lunch? O pierwszej.', 'Во сколько ты обедаешь? В час.'),
      s('Hurry up! We are late!', 'Pośpiesz się! Spóźniamy się!', 'Скорее! Мы опаздываем!')
    ],
    quizzes: [
      c.mcq(Q('3:00 ➜ It is three ___.', '3:00 ➜ Jest trzecia ___.', '3:00 ➜ Сейчас три ___.'), ["o'clock", 'past', 'half', 'hour'], "o'clock", { big: '🕒' }),
      c.mcq(Q('8:30 ➜ It is...', '8:30 ➜ Jest...', '8:30 ➜ Сейчас...'), ['half past eight', 'half past nine', 'half to eight', 'quarter past eight'], 'half past eight', { big: '🕣', why: timeWhy }),
      c.mcq(Q('4:15 ➜ It is...', '4:15 ➜ Jest...', '4:15 ➜ Сейчас...'), ['quarter past four', 'quarter to four', 'quarter past five', 'half past four'], 'quarter past four', { big: '🕓', why: { pl: 'quarter past four = czwarta i kwadrans: 4:15.', ru: 'quarter past four = четверть пятого: 4:15.' } }),
      c.mcq(Q('9:45 ➜ It is...', '9:45 ➜ Jest...', '9:45 ➜ Сейчас...'), ['quarter to ten', 'quarter past nine', 'quarter to nine', 'half past nine'], 'quarter to ten', { big: '🕙', why: { pl: 'quarter to ten = brakuje kwadransa do dziesiątej: 9:45.', ru: 'quarter to ten = без четверти десять: 9:45.' } }),
      c.mcq(Q('What time is it?  🕖 (7:30)', 'Która godzina? 🕖 (7:30)', 'Который час? 🕖 (7:30)'), ["It's half past seven.", "It's half past eight.", "It's seven o'clock.", "It's quarter to seven."], "It's half past seven.", { why: timeWhy }),
      c.tf(Q('Half past six is 6:30.', 'Half past six to 6:30.', 'Half past six это 6:30.'), true, { why: timeWhy }),
      c.tf(Q('Half past six is 5:30.', 'Half past six to 5:30.', 'Half past six это 5:30.'), false, { why: timeWhy }),
      c.type(Q('7:00 ➜ It is seven ___.', '7:00 ➜ Jest siódma ___.', '7:00 ➜ Сейчас семь ___.'), "o'clock", ['oclock', "o' clock"]),
      c.type(Q('Write in English: godzina (60 min) / час', 'Napisz po angielsku: godzina (60 minut)', 'Напиши по-английски: час (60 минут)'), 'hour'),
      c.type(Q('I get up ___ seven. (at / on / in)', 'I get up ___ seven.', 'I get up ___ seven.'), 'at', [], { why: prep }),
      c.order("It is half past eight", 'Ułóż zdanie: Jest 8:30', 'Составь предложение: Сейчас 8:30'),
      c.order('What time do you have lunch', 'Ułóż pytanie: O której jesz lunch?', 'Составь вопрос: Во сколько ты обедаешь?'),
      c.sort(Q('Which time?', 'Która godzina?', 'Какое время?'), { 'past (:15, :30) 🕐': ['3:15', '6:30', '10:15'], 'to (:45) 🕛': ['2:45', '8:45', '11:45'], "o'clock (:00)": ['5:00', '9:00'] }),
      c.sort(Q('Early or late?', 'Wcześnie czy późno?', 'Рано или поздно?'), { 'early 🌄': ['5 a.m.', '6:30 a.m.', '7 a.m.'], 'late 🌃': ['10 p.m.', '11:30 p.m.', 'midnight'] }),
      c.fix('It is half to eight. (7:30)', 'to', 'past', { why: timeWhy }),
      c.fix("It's quarter past nine. (8:45)", 'past', 'to', { why: { pl: '8:45 to quarter to nine (kwadrans DO dziewiątej).', ru: '8:45 это quarter to nine (без четверти девять).' } }),
      c.fix('I get up on seven o\'clock.', 'on', 'at', { why: prep }),
      c.fix('We have lunch in one.', 'in', 'at', { why: prep }),
      c.fix('What time is it? Is two o clock.', 'Is', 'It is', { why: { pl: 'Po angielsku zawsze podajemy podmiot: It is... (nie "Is...").', ru: 'По-английски всегда нужен подлежащее: It is... (не "Is...").' } }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Quick! What time is it?', replies: ["It's half past eight!", "It's eight clocks.", 'It is a clock.'] },
        { say: 'Oh no! School starts at quarter to nine!', replies: ["We've got fifteen minutes. Run!", 'We have fifteen hours.', 'We start the minutes.'] },
        { say: 'What time do you usually get up?', replies: ['I usually get up at seven.', 'I usually get up on seven.', 'I am usually up seven.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u7-simple', unit: U, title: 'He gets up, she doesn\'t', page: 98, emoji: '🔁',
    words: [
      w('always', 'zawsze', 'всегда', '💯', { pl: 'always: stoi przed czasownikiem: I always get up.', ru: 'always стоит перед глаголом: I always get up.' }),
      w('usually', 'zwykle', 'обычно', '👍'),
      w('often', 'często', 'часто', '🔁', { pl: 'often czyta się "ofn", "t" milczy (czasem się je wymawia).', ru: 'often читается "офн", t обычно не читается.' }),
      w('sometimes', 'czasami', 'иногда', '🌗'),
      w('never', 'nigdy', 'никогда', '🚫', { pl: 'never już zawiera "nie": nie dodajemy don\'t. I never eat fish.', ru: 'never уже значит "не": don\'t не добавляем. I never eat fish.' }),
      w('every day', 'codziennie', 'каждый день', '📆', { pl: 'every day to dwa słowa.', ru: 'every day это два слова.' }),
      w('weekend', 'weekend', 'выходные', '🛋️'),
      w('watch', 'oglądać (he watches)', 'смотреть (he watches)', '👀', { pl: 'watch + es = watches (po ch dodajemy -es).', ru: 'watch + es = watches (после ch добавляем -es).' }),
      w('study', 'uczyć się (he studies)', 'учиться (he studies)', '📖', { pl: 'study ➜ studies (spółgłoska + y zmienia się w ies).', ru: 'study ➜ studies (согласная + y меняется на ies).' }),
      w('go', 'iść (he goes)', 'идти (he goes)', '🚶', { pl: 'go ➜ goes (po o dodajemy -es).', ru: 'go ➜ goes (после o добавляем -es).' }),
      w('have', 'mieć / jeść (he has)', 'иметь / есть (he has)', '🤲', { pl: 'have ➜ has: wyjątek, nie "haves"!', ru: 'have ➜ has: исключение, не "haves"!' })
    ],
    sentences: [
      s('He gets up at seven every day.', 'Wstaje o siódmej codziennie.', 'Он встаёт в семь каждый день.'),
      s("She doesn't like Maths.", 'Ona nie lubi matematyki.', 'Она не любит математику.'),
      s("I don't have breakfast on Sundays.", 'W niedziele nie jem śniadania.', 'По воскресеньям я не завтракаю.'),
      s('My dad always watches TV after dinner.', 'Mój tata zawsze ogląda telewizję po obiedzie.', 'Мой папа всегда смотрит телевизор после ужина.'),
      s('At the weekend I usually play with my friends.', 'W weekend zwykle gram z kolegami.', 'В выходные я обычно играю с друзьями.')
    ],
    quizzes: [
      c.mcq(Q('My brother ___ football every day.', 'Mój brat ___ w piłkę codziennie.', 'Мой брат ___ в футбол каждый день.'), ['plays', 'play', 'playing', 'is play'], 'plays', { big: '⚽', why: sForm }),
      c.mcq(Q('She ___ her homework at four.', 'Ona ___ lekcje o czwartej.', 'Она ___ уроки в четыре.'), ['does', 'do', 'doing', 'dos'], 'does', { why: sForm }),
      c.mcq(Q('He ___ to school by bus.', 'On ___ do szkoły autobusem.', 'Он ___ в школу на автобусе.'), ['goes', 'go', 'gos', 'going'], 'goes', { big: '🚌', why: sForm }),
      c.mcq(Q('Tom ___ like fish.', 'Tom nie lubi ryb.', 'Том не любит рыбу.'), ["doesn't", "don't", "isn't", "not"], "doesn't", { big: '🐟', why: doesnt }),
      c.mcq(Q('We ___ have school on Sundays.', 'My ___ mamy szkoły w niedziele.', 'У нас ___ школы по воскресеньям.'), ["don't", "doesn't", "aren't", 'not'], "don't", { why: dont }),
      c.mcq(Q('Which sentence is correct?', 'Które zdanie jest poprawne?', 'Какое предложение правильное?'), ["She doesn't watch TV.", "She doesn't watches TV.", "She don't watch TV.", "She not watch TV."], "She doesn't watch TV.", { why: doesnt }),
      c.mcq(Q('He is ___ late. (zawsze)', 'On ___ się spóźnia.', 'Он ___ опаздывает.'), ['always', 'is always', 'always is', 'every'], 'always', { why: freq }),
      c.tf(Q('"He study English" is correct.', '"He study English" jest poprawne.', '"He study English" правильно.'), false, { why: sForm }),
      c.tf(Q('"Lily never eats fish" is correct.', '"Lily never eats fish" jest poprawne.', '"Lily never eats fish" правильно.'), true, { why: freq }),
      c.type(Q('study ➜ He ___ English. (he)', 'study ➜ He ___ English.', 'study ➜ He ___ English.'), 'studies', [], { why: sForm }),
      c.type(Q('have ➜ She ___ a cat. (she)', 'have ➜ She ___ a cat.', 'have ➜ She ___ a cat.'), 'has', [], { why: sForm }),
      c.type(Q('watch ➜ My dad ___ TV. (he)', 'watch ➜ My dad ___ TV.', 'watch ➜ My dad ___ TV.'), 'watches', [], { why: sForm }),
      c.order('He gets up at seven every day', 'Ułóż zdanie: Wstaje o siódmej codziennie', 'Составь предложение: Он встаёт в семь каждый день'),
      c.order("She doesn't like Maths", 'Ułóż zdanie: Ona nie lubi matematyki', 'Составь предложение: Она не любит математику'),
      c.sort(Q('-s, -es or -ies? (he ...)', '-s, -es czy -ies? (he ...)', '-s, -es или -ies? (he ...)'), { '-s': ['plays', 'gets up', 'sleeps'], '-es': ['watches', 'goes', 'brushes'], '-ies': ['studies', 'tries'] }),
      c.sort(Q('How often? (from most to least)', 'Jak często?', 'Как часто?'), { 'always / usually 💯': ['always', 'usually'], 'sometimes / often 🌗': ['sometimes', 'often'], 'never 🚫': ['never'] }),
      c.fix('My mum watch TV in the evening.', 'watch', 'watches', { why: sForm }),
      c.fix("He doesn't likes pizza.", 'likes', 'like', { why: doesnt }),
      c.fix("I doesn't have a bike.", "doesn't", "don't", { why: dont }),
      c.fix('She have a big dog.', 'have', 'has', { why: sForm }),
      c.fix('He always late.', 'always', 'is always', { why: { pl: 'Brakuje czasownika be: He is always late. Zdanie bez be jest błędne.', ru: 'Пропущен глагол be: He is always late. Без be нельзя.' } }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'My brother always gets up late. And you?', replies: ['I usually get up at seven.', 'I usually gets up at seven.', 'I always am up.'] },
        { say: 'Does your brother help at home?', replies: ["No, he doesn't. He never helps!", "No, he don't. He never helps!", 'No, he never doesn\'t help.'] },
        { say: 'What does he do at the weekend?', replies: ['He plays computer games.', 'He play computer games.', 'He does plays games.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u7-questions', unit: U, title: 'Do you...? Does she...?', page: 102, emoji: '❓',
    words: [
      w('happy', 'szczęśliwy', 'счастливый', '😄', { pl: 'happy: dwa "p"', ru: 'happy: две "p"' }),
      w('sad', 'smutny', 'грустный', '😢'),
      w('tired', 'zmęczony', 'уставший', '😴', { pl: 'tired: czyta się "tajerd". Nie "tirid".', ru: 'tired: читается "тайэд".' }),
      w('angry', 'zły', 'сердитый', '😠', { pl: 'angry (zły) i hungry (głodny) są podobne, ale to różne słowa!', ru: 'angry (злой) и hungry (голодный) похожи, но это разные слова!' }),
      w('bored', 'znudzony', 'скучающий', '🥱'),
      w('excited', 'podekscytowany', 'взволнованный', '🤩'),
      w('scared', 'przestraszony', 'испуганный', '😨'),
      w('when', 'kiedy', 'когда', '❓'),
      w('what time', 'o której godzinie', 'во сколько', '🕐')
    ],
    sentences: [
      s('Do you get up at seven? Yes, I do.', 'Czy wstajesz o siódmej? Tak.', 'Ты встаёшь в семь? Да.'),
      s("Does he like Maths? No, he doesn't.", 'Czy on lubi matematykę? Nie.', 'Ему нравится математика? Нет.'),
      s('What time does Lily go to bed?', 'O której Lily idzie spać?', 'Во сколько Лили ложится спать?'),
      s('She goes to bed at nine.', 'Ona idzie spać o dziewiątej.', 'Она ложится спать в девять.'),
      s('I am tired on Monday mornings.', 'W poniedziałkowe poranki jestem zmęczony.', 'По утрам в понедельник я устал.')
    ],
    quizzes: [
      c.mcq(Q('___ you like pizza?', '___ lubisz pizzę?', 'Ты любишь пиццу?'), ['Do', 'Does', 'Are', 'Is'], 'Do', { big: '🍕', why: doQ }),
      c.mcq(Q('___ your sister play tennis?', '___ twoja siostra gra w tenisa?', 'Твоя сестра играет в теннис?'), ['Does', 'Do', 'Is', 'Can'], 'Does', { big: '🎾', why: doQ }),
      c.mcq(Q('Does he get up early? ➜ No, ___.', 'Czy on wstaje wcześnie? ➜ Nie, ___.', 'Он встаёт рано? ➜ Нет, ___.'), ["he doesn't", "he don't", "he isn't", "he not"], "he doesn't", { why: shortAns }),
      c.mcq(Q('Do they have PE on Friday? ➜ Yes, ___.', 'Czy oni mają W-F w piątek? ➜ Tak, ___.', 'У них физкультура в пятницу? ➜ Да, ___.'), ['they do', 'they have', 'they does', 'they are'], 'they do', { why: shortAns }),
      c.mcq(Q('What time ___ she get up?', 'O której ona wstaje?', 'Во сколько она встаёт?'), ['does', 'do', 'is', 'did'], 'does', { why: doQ }),
      c.mcq(Q('You did not sleep. You feel...', 'Nie spałeś. Czujesz się...', 'Ты не выспался. Ты чувствуешь себя...'), ['tired', 'excited', 'scared', 'happy'], 'tired', { big: '🥱' }),
      c.tf(Q('"Does she likes Maths?" is correct.', '"Does she likes Maths?" jest poprawne.', '"Does she likes Maths?" правильно.'), false, { why: doQ }),
      c.tf(Q('"You like pizza?" is a normal English question.', '"You like pizza?" to normalne pytanie po angielsku.', '"You like pizza?" обычный английский вопрос.'), false, { why: doQ }),
      c.type(Q('___ he like fish? (do / does)', '___ he like fish?', '___ he like fish?'), 'Does', ['does'], { why: doQ }),
      c.type(Q('Do you play football? Short answer: Yes, I ___.', 'Do you play football? Krótka odpowiedź: Yes, I ___.', 'Do you play football? Краткий ответ: Yes, I ___.'), 'do', [], { why: shortAns }),
      c.type(Q('Does she watch TV? Short answer: No, she ___.', 'Does she watch TV? Krótka odpowiedź: No, she ___.', 'Does she watch TV? Краткий ответ: No, she ___.'), "doesn't", ['does not', 'doesnt'], { why: shortAns }),
      c.order('What time does Lily go to bed', 'Ułóż pytanie: O której Lily idzie spać?', 'Составь вопрос: Во сколько Лили ложится спать?'),
      c.order('Do you get up at seven', 'Ułóż pytanie: Czy wstajesz o siódmej?', 'Составь вопрос: Ты встаёшь в семь?'),
      c.sort(Q('Do or does?', 'Do czy does?', 'Do или does?'), { 'Do...': ['I', 'you', 'we', 'they'], 'Does...': ['he', 'she', 'it', 'Mickey'] }),
      c.sort(Q('How do you feel?', 'Jak się czujesz?', 'Как ты себя чувствуешь?'), { 'good 😄': ['happy', 'excited'], 'not so good 😕': ['sad', 'tired', 'angry', 'scared', 'bored'] }),
      c.fix('Does Ana plays the guitar?', 'plays', 'play', { why: doQ }),
      c.fix('Do he have a bike?', 'Do', 'Does', { why: doQ }),
      c.fix('Where you live?', 'Where', 'Where do', { why: { pl: 'Pytanie bez be/can potrzebuje do: Where do you live?', ru: 'Вопросу без be/can нужно do: Where do you live?' } }),
      c.fix('Does she goes to school by bike?', 'goes', 'go', { why: doQ }),
      c.fix('Do you likes tomatoes?', 'likes', 'like', { why: doQ }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Hi Mickey! Do you get up early on Saturdays?', replies: ["No, I don't. I sleep a lot!", 'No, I am not.', 'No, I does not.'] },
        { say: 'Does your brother get up early?', replies: ['Yes, he does. He plays games at six!', 'Yes, he gets.', 'Yes, he is.'] },
        { say: 'What time does he go to bed?', replies: ['He goes to bed at nine.', 'He go to bed at nine.', 'He is bed at nine.'] },
        { say: 'Are you tired now?', replies: ['Yes, I am. I need a snack!', 'Yes, I do.', 'Yes, I tired.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u7-test', unit: U, title: 'Test yourself: Unit 7', page: 105, emoji: '🏁',
    words: [], sentences: [],
    quizzes: [
      c.mcq(Q('My dad ___ TV every evening.', 'Mój tata ___ telewizję każdego wieczoru.', 'Мой папа ___ телевизор каждый вечер.'), ['watches', 'watch', 'watchs', 'is watch'], 'watches', { big: '📺', why: sForm }),
      c.mcq(Q('She ___ like Maths.', 'Ona nie lubi matematyki.', 'Она не любит математику.'), ["doesn't", "don't", "isn't", "not"], "doesn't", { why: doesnt }),
      c.mcq(Q('___ they have English on Monday?', '___ mają angielski w poniedziałek?', 'У них английский в понедельник?'), ['Do', 'Does', 'Are', 'Have'], 'Do', { why: doQ }),
      c.mcq(Q('9:30 ➜ It is...', '9:30 ➜ Jest...', '9:30 ➜ Сейчас...'), ['half past nine', 'half past ten', 'half to nine', 'quarter past nine'], 'half past nine', { big: '🕤', why: timeWhy }),
      c.mcq(Q('I wake up ___ night when it is very dark.', 'Budzę się ___ nocy, kiedy jest ciemno.', 'Я просыпаюсь ___ ночью, когда темно.'), ['at', 'in', 'on', 'by'], 'at', { why: prep }),
      c.tf(Q('"He go to school" is correct.', '"He go to school" jest poprawne.', '"He go to school" правильно.'), false, { why: sForm }),
      c.tf(Q('"I usually get up at seven" is correct.', '"I usually get up at seven" jest poprawne.', '"I usually get up at seven" правильно.'), true, { why: freq }),
      c.type(Q('Does Lily like cats? Short answer: Yes, she ___.', 'Does Lily like cats? Yes, she ___.', 'Does Lily like cats? Yes, she ___.'), 'does', [], { why: shortAns }),
      c.type(Q('study ➜ He ___ every day. (he)', 'study ➜ He ___ every day.', 'study ➜ He ___ every day.'), 'studies', [], { why: sForm }),
      c.type(Q('Write in English: informatyka / информатика', 'Napisz po angielsku: informatyka', 'Напиши по-английски: информатика'), 'IT'),
      c.type(Q('Write in English: nigdy / никогда', 'Napisz po angielsku: nigdy', 'Напиши по-английски: никогда'), 'never'),
      c.order('Does he get up at seven', 'Ułóż pytanie: Czy on wstaje o siódmej?', 'Составь вопрос: Он встаёт в семь?'),
      c.order("I don't have breakfast on Sundays", 'Ułóż zdanie: W niedziele nie jem śniadania', 'Составь предложение: По воскресеньям я не завтракаю'),
      c.sort(Q('at, on or in?', 'at, on czy in?', 'at, on или in?'), { 'at': ['seven o\'clock', 'night'], 'on': ['Monday', 'Friday'], 'in': ['the morning', 'the evening'] }),
      c.sort(Q('Do or does?', 'Do czy does?', 'Do или does?'), { 'Do': ['you', 'they', 'we'], 'Does': ['he', 'she', 'my dog'] }),
      c.fix('He have a computer.', 'have', 'has', { why: sForm }),
      c.fix("She doesn't plays football.", 'plays', 'play', { why: doesnt }),
      c.fix('You like Science?', 'You', 'Do you', { why: doQ }),
      c.fix('We have lunch in one o\'clock.', 'in', 'at', { why: prep }),
      c.fix('She always happy.', 'always', 'is always', { why: { pl: 'Brakuje czasownika be: She is always happy.', ru: 'Пропущен глагол be: She is always happy.' } }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'What time do you get up on Mondays?', replies: ['I get up at half past six.', 'I get up in half past six.', 'I am up half six.'] },
        { say: 'Do you like Mondays?', replies: ["No, I don't. I'm tired!", 'No, I am not like.', 'Yes, I Monday.'] },
        { say: 'Does Ana like Mondays?', replies: ["Yes, she does. She loves Art on Mondays.", 'Yes, she likes.', "No, she doesn't likes."] }
      ])
    ]
  });
})(window.EQ);
