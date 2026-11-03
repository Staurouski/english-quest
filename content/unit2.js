/* Unit 2 "Me and my clothes": textbook pages 22-33 (approximate). */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;
  const U = 'Unit 2: Me and my clothes';
  const T = (en, pl, ru) => ({ en, pl, ru });
  const Y = (pl, ru) => ({ pl, ru });
  const pluralWhy = { why: Y('jeans, trousers, shorts, shoes, socks są zawsze w liczbie mnogiej: są "are", nie "is".', 'jeans, trousers, shorts, shoes, socks всегда во множественном числе: "are", а не "is".') };
  const adjWhy = { why: Y('Przymiotnik stoi PRZED rzeczownikiem i nigdy nie dostaje -s: a kind girl, two kind girls.', 'Прилагательное стоит ПЕРЕД существительным и никогда не получает -s: a kind girl, two kind girls.') };
  const negWhy = { why: Y('Przeczenie z być: I am not, he/she/it is not (isn\'t), we/you/they are not (aren\'t). Nie ma "amn\'t".', 'Отрицание с be: I am not, he/she/it is not (isn\'t), we/you/they are not (aren\'t). Формы "amn\'t" нет.') };
  const shortWhy = { why: Y('Krótka odpowiedź: Yes, I am. / No, he isn\'t. Po "Yes" nie skracamy: nie "Yes, I\'m".', 'Краткий ответ: Yes, I am. / No, he isn\'t. После "Yes" не сокращаем: не "Yes, I\'m".') };

  EQ.registerLesson({
    id: 'u2-clothes', unit: U, title: 'Clothes', page: 22, emoji: '👕',
    words: [
      w('T-shirt', 'koszulka', 'футболка', '👕'),
      w('jeans', 'dżinsy', 'джинсы', '👖', { pl: 'jeans to zawsze liczba mnoga: my jeans ARE blue.', ru: 'jeans всегда во множественном числе: my jeans ARE blue.' }),
      w('trousers', 'spodnie', 'брюки', '👖', { pl: 'trou-sers: ma "ou" jak w "house" i nie zapomnij o -s na końcu.', ru: 'trou-sers: "ou" как в "house", и не забудь -s на конце.' }),
      w('shorts', 'szorty', 'шорты', '🩳'),
      w('dress', 'sukienka', 'платье', '👗'),
      w('skirt', 'spódnica', 'юбка', '👗', { pl: 'skirt czytamy "skert", nie "skirt" po polsku.', ru: 'skirt читается "скёрт".' }),
      w('jacket', 'kurtka', 'куртка', '🧥', { pl: 'jacket ma "ck": ja-CK-et, nie "jaket".', ru: 'jacket пишется с "ck": ja-CK-et.' }),
      w('coat', 'płaszcz', 'пальто', '🧥'),
      w('jumper', 'sweter', 'свитер', '🧶', { pl: 'W brytyjskim angielskim sweter to jumper (nie sweater, to amerykańskie).', ru: 'В британском английском свитер это jumper (sweater американский).' }),
      w('cap', 'czapka z daszkiem', 'кепка', '🧢'),
      w('shoes', 'buty', 'туфли, обувь', '👞'),
      w('trainers', 'adidasy, buty sportowe', 'кроссовки', '👟', { pl: 'trainers = buty do trenowania, czyli sportowe. Nie "adidasy" po angielsku!', ru: 'trainers = обувь для тренировки (кроссовки). Не "adidas"!' }),
      w('socks', 'skarpetki', 'носки', '🧦'),
      w('boots', 'kozaki, buty zimowe', 'ботинки, сапоги', '🥾')
    ],
    sentences: [
      s("It's a red T-shirt.", 'To jest czerwona koszulka.', 'Это красная футболка.'),
      s("They're my new trainers.", 'To są moje nowe adidasy.', 'Это мои новые кроссовки.'),
      s('My jeans are blue.', 'Moje dżinsy są niebieskie.', 'Мои джинсы синие.'),
      s('Where are my socks?', 'Gdzie są moje skarpetki?', 'Где мои носки?')
    ],
    quizzes: [
      c.mcq(T('It is -10 degrees outside! You put on a...', 'Na dworze jest -10 stopni! Zakładasz...', 'На улице -10 градусов! Ты надеваешь...'), ['coat', 'T-shirt', 'shorts', 'skirt'], 'coat', { big: '🥶' }),
      c.mcq(T('You wear them for PE: running and football.', 'Zakładasz je na WF: bieganie i piłka nożna.', 'Ты надеваешь их на физкультуру: бег и футбол.'), ['trainers', 'boots', 'shoes', 'socks'], 'trainers', { big: '⚽' }),
      c.mcq(T('My ___ are blue.', 'Moje ___ są niebieskie.', 'Мои ___ синие.'), ['jeans', 'jacket', 'dress', 'skirt'], 'jeans', pluralWhy),
      c.mcq(T('It is hot in July. You wear...', 'W lipcu jest gorąco. Zakładasz...', 'В июле жарко. Ты надеваешь...'), ['shorts', 'boots', 'a jumper', 'a coat'], 'shorts', { big: '🏖️' }),
      c.mcq(T('What is this?', 'Co to jest?', 'Что это?'), ['dress', 'skirt', 'jacket', 'coat'], 'dress', { big: '👗' }),
      c.tf(T('We say "a trousers".', 'Mówimy "a trousers".', 'Мы говорим "a trousers".'), false, { why: Y('trousers są w liczbie mnogiej, więc: "my trousers" lub "a pair of trousers".', 'trousers во множественном числе: "my trousers" или "a pair of trousers".') }),
      c.tf(T('A jumper is warm and good for winter.', 'Sweter jest ciepły i dobry na zimę.', 'Свитер тёплый и хорош для зимы.'), true),
      c.type(T('Write in English: skarpetki / носки', 'Napisz po angielsku: skarpetki', 'Напиши по-английски: носки'), 'socks'),
      c.type(T('Write in English: kurtka / куртка', 'Napisz po angielsku: kurtka', 'Напиши по-английски: куртка'), 'jacket'),
      c.type(T('Translate: To jest czerwona koszulka.', 'Przetłumacz: To jest czerwona koszulka.', 'Переведи: To jest czerwona koszulka.'), "It's a red T-shirt.", ["It is a red T-shirt.", "Its a red T-shirt.", "It's a red T-shirt", "It's a red t-shirt."]),
      c.order('They are my new trainers', 'Ułóż zdanie: To są moje nowe adidasy', 'Составь предложение: Это мои новые кроссовки'),
      c.sort(T('Top (T-shirt side) or bottom (legs side)?', 'Góra czy dół?', 'Верх или низ?'), { 'top 👕': ['T-shirt', 'jumper', 'jacket', 'coat'], 'bottom 👖': ['jeans', 'shorts', 'skirt', 'trousers'] }),
      c.sort(T('Singular (a/an) or plural (are)?', 'Liczba pojedyncza czy mnoga?', 'Единственное или множественное число?'), { 'a / an ...': ['dress', 'T-shirt', 'cap', 'skirt'], 'plural, "are" ...': ['jeans', 'shorts', 'socks', 'trainers', 'trousers'] }),
      c.fix('My shoes is new.', 'is', 'are', pluralWhy),
      c.fix('Where are my sock?', 'sock', 'socks', { why: Y('Mówisz o parze, więc: socks, z -s (a "are" pasuje do liczby mnogiej).', 'Речь о паре, поэтому socks с -s (и "are" подходит ко множественному числу).') }),
      c.fix('Put on your jaket.', 'jaket', 'jacket', { why: Y('ja-CK-et: w środku jest "ck".', 'ja-CK-et: посередине "ck".') }),
      c.fix('Where are my trosers?', 'trosers', 'trousers', { why: Y('trousers: "ou" jak w "house".', 'trousers: "ou" как в "house".') }),
      c.fix('I love my new jumpper.', 'jumpper', 'jumper', { why: Y('jumper ma tylko jedno "p" w środku: ju-m-per.', 'В jumper в середине только одна "p".') }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: "It's snowy today! What do I put on?", replies: ['Put on a coat and boots!', 'Put on shorts and a T-shirt!', 'Put on a cap and sunglasses!'] },
        { say: 'Where are my socks? My feet are cold!', replies: ["They're in the bag.", "It's in the bag.", 'They is a bag.'] },
        { say: 'Do you like my new trainers?', replies: ['Yes, they are cool!', 'Yes, it is a coat.', 'No, I am a jumper.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u2-adjectives', unit: U, title: 'What are you like?', page: 24, emoji: '🦸',
    words: [
      w('clever', 'mądry, zdolny', 'умный, способный', '🧠'),
      w('funny', 'zabawny', 'смешной, забавный', '🤣', { pl: 'fun-ny: dwa "n". Funny = śmieszny (nie "fanny").', ru: 'fun-ny: две "n". Funny = смешной.' }),
      w('kind', 'miły, dobry', 'добрый', '🤗'),
      w('shy', 'nieśmiały', 'застенчивый', '🙈'),
      w('brave', 'odważny', 'смелый', '🦁', { pl: 'brave ~ "brawo!" Odważnemu mówimy brawo.', ru: 'brave ~ "браво!" Смелому говорят браво.' }),
      w('friendly', 'przyjazny', 'дружелюбный', '😊', { pl: 'friend + ly: friendly. Pamiętaj "ie" jak w friend.', ru: 'friend + ly: friendly. Помни "ie" как в friend.' }),
      w('lazy', 'leniwy', 'ленивый', '😴'),
      w('strong', 'silny', 'сильный', '💪'),
      w('quiet', 'cichy', 'тихий', '🤫', { pl: 'quiet (cichy) to nie quite (całkiem): qui-et ma dwie sylaby.', ru: 'quiet (тихий) это не quite (довольно): qui-et две слога.' }),
      w('hero', 'bohater', 'герой', '🦸'),
      w('costume', 'strój, kostium', 'костюм', '🎭'),
      w('cape', 'peleryna', 'плащ, накидка', '🦸')
    ],
    sentences: [
      s('Robbie is a clever robot.', 'Robbie to mądry robot.', 'Робби умный робот.'),
      s('My friends are funny and kind.', 'Moi przyjaciele są zabawni i mili.', 'Мои друзья смешные и добрые.'),
      s('A hero is brave and strong.', 'Bohater jest odważny i silny.', 'Герой смелый и сильный.'),
      s('She is a shy girl.', 'To nieśmiała dziewczynka.', 'Это застенчивая девочка.')
    ],
    quizzes: [
      c.mcq(T('Superman helps everybody and is not afraid. He is...', 'Superman pomaga wszystkim i się nie boi. On jest...', 'Супермен всем помогает и ничего не боится. Он...'), ['brave', 'shy', 'lazy', 'quiet'], 'brave', { big: '🦸' }),
      c.mcq(T('Anna never talks in class and goes red. She is...', 'Anna nigdy nie mówi na lekcji i się czerwieni. Ona jest...', 'Анна никогда не говорит на уроке и краснеет. Она...'), ['shy', 'funny', 'strong', 'friendly'], 'shy', { big: '🙈' }),
      c.mcq(T('Choose the correct sentence.', 'Wybierz poprawne zdanie.', 'Выбери правильное предложение.'), ['She is a clever girl.', 'She is a girl clever.', 'She is clever a girl.', 'She is a cleverr girl.'], 'She is a clever girl.', adjWhy),
      c.mcq(T('Choose the correct sentence.', 'Wybierz poprawne zdanie.', 'Выбери правильное предложение.'), ['They are friendly dogs.', 'They are friendlys dogs.', 'They are dogs friendly.', 'They are a friendly dogs.'], 'They are friendly dogs.', adjWhy),
      c.mcq(T('Lazy is the opposite of...', 'Przeciwieństwo lazy to...', 'Противоположность lazy это...'), ['active', 'quiet', 'shy', 'kind'], 'active', { big: '🛋️' }),
      c.tf(T('"Kind" and "funny" are the same.', '"Kind" i "funny" znaczą to samo.', '"Kind" и "funny" значат одно и то же.'), false, { why: Y('kind = miły, dobry; funny = zabawny, śmieszny.', 'kind = добрый; funny = смешной.') }),
      c.tf(T('We say "two friendlys boys".', 'Mówimy "two friendlys boys".', 'Мы говорим "two friendlys boys".'), false, adjWhy),
      c.type(T('Write in English: odważny / смелый', 'Napisz po angielsku: odważny', 'Напиши по-английски: смелый'), 'brave'),
      c.type(T('Write in English: bohater / герой', 'Napisz po angielsku: bohater', 'Напиши по-английски: герой'), 'hero'),
      c.type(T('Translate: Ona jest mądrą dziewczynką.', 'Przetłumacz: Ona jest mądrą dziewczynką.', 'Переведи: Ona jest mądrą dziewczynką.'), 'She is a clever girl.', ["She's a clever girl.", "She's a clever girl", 'She is a clever girl']),
      c.order('Robbie is a strong and funny robot', 'Ułóż zdanie: Robbie to silny i zabawny robot', 'Составь предложение: Робби сильный и смешной робот'),
      c.sort(T('Nice or not nice?', 'Miłe czy nie?', 'Приятное или нет?'), { 'nice 😊': ['kind', 'friendly', 'funny', 'clever'], 'we need to change it': ['lazy', 'shy'] }),
      c.sort(T('Person or clothes?', 'Osoba czy ubranie?', 'Человек или одежда?'), { 'about a person 🙂': ['brave', 'shy', 'kind', 'funny'], 'clothes 👕': ['cape', 'costume', 'cap', 'jacket'] }),
      c.fix('She is an shy girl.', 'an', 'a', { why: Y('"an" tylko przed samogłoską w wymowie. shy zaczyna się od "sz", więc: a shy girl.', '"an" только перед гласным звуком. shy начинается на согласный: a shy girl.') }),
      c.fix('They are kinds girls.', 'kinds', 'kind', adjWhy),
      c.fix('My cat is frendly.', 'frendly', 'friendly', { why: Y('friend + ly: ie jak w friend.', 'friend + ly: ie как в friend.') }),
      c.fix('He is a lazy boys.', 'boys', 'boy', { why: Y('"a" oznacza jednego: a lazy boy.', '"a" значит один: a lazy boy.') }),
      c.fix('Be quite, please. I read.', 'quite', 'quiet', { why: Y('quiet = cichy; quite = całkiem. Łatwo pomylić, kolejność liter qui-ET!', 'quiet = тихий; quite = довольно. Легко перепутать: qui-ET!') }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Hi! I am a robot. I am strong and clever. What are you like?', replies: ["I'm kind and funny.", "I'm a jacket.", "I'm blue socks."] },
        { say: 'Is your best friend shy?', replies: ["No, he isn't. He's very friendly.", 'No, he is a hat.', 'Yes, it is a T-shirt.'] },
        { say: 'Who is your hero?', replies: ['My hero is Spider-Man. He is brave!', 'My hero is on the table.', 'My hero is two o\'clock.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u2-be-questions', unit: U, title: 'Is he? Are you? No, I am not', page: 26, emoji: '❓',
    words: [
      w('who', 'kto', 'кто', '🧑', { pl: 'who = kto (o osobę), what = co (o rzecz).', ru: 'who = кто (о человеке), what = что (о вещи).' }),
      w('what', 'co, jaki', 'что, какой', '❔'),
      w('where', 'gdzie', 'где', '📍', { pl: 'where (gdzie) ma "e" na końcu, wear (nosić) wymawiamy tak samo!', ru: 'where (где) и wear (носить) звучат одинаково!' }),
      w('why', 'dlaczego', 'почему', '🤔'),
      w('how old', 'ile lat', 'сколько лет', '🎂', { pl: 'Po angielsku: "I am ten." (jestem), nie "I have ten".', ru: 'По-английски: "I am ten." (я есть), а не "I have ten".' }),
      w('favourite', 'ulubiony', 'любимый', '⭐', { pl: 'fav-OU-rite: w brytyjskim "ou", nie "favorite".', ru: 'fav-OU-rite: в британском английском "ou".' }),
      w('colour', 'kolor', 'цвет', '🎨', { pl: 'colour: w brytyjskim z "ou", jak favourite.', ru: 'colour: в британском с "ou", как favourite.' }),
      w('name', 'imię', 'имя', '🏷️'),
      w('yes', 'tak', 'да', '✅'),
      w('no', 'nie', 'нет', '❌')
    ],
    sentences: [
      s('Who is she? She is my teacher.', 'Kim ona jest? To moja nauczycielka.', 'Кто она? Это моя учительница.'),
      s("What's your favourite colour?", 'Jaki jest twój ulubiony kolor?', 'Какой у тебя любимый цвет?'),
      s('Are you shy? No, I am not.', 'Jesteś nieśmiały? Nie, nie jestem.', 'Ты застенчивый? Нет, не застенчивый.'),
      s("Is Lily a dog? No, she isn't. She's a cat.", 'Czy Lily to pies? Nie. To kot.', 'Лили собака? Нет. Она кошка.')
    ],
    quizzes: [
      c.mcq(T('___ is that girl? She is Ana.', '___ jest ta dziewczynka? To Ana.', '___ эта девочка? Это Ана.'), ['Who', 'What', 'Where', 'Why'], 'Who', { why: Y('Pytamy o osobę: Who is...? (kto). O rzecz: What is...?', 'О человеке спрашиваем: Who is...? О вещи: What is...?') }),
      c.mcq(T('___ is your favourite colour? Blue!', '___ jest twój ulubiony kolor? Niebieski!', '___ твой любимый цвет? Синий!'), ['What', 'Who', 'Where', 'Are'], 'What', { why: Y('What is...? pyta o rzecz, kolor, nazwę.', 'What is...? спрашивает о вещи, цвете, названии.') }),
      c.mcq(T('___ you ten? Yes, I am.', '___ masz dziesięć lat? Tak.', '___ тебе десять? Да.'), ['Are', 'Is', 'Am', 'Do'], 'Are', { why: Y('Pytanie z być: czasownik na początek: Are you...? Is he...? Am I...?', 'Вопрос с be: глагол в начало: Are you...? Is he...? Am I...?') }),
      c.mcq(T('Is Robbie a cat? No, ...', 'Czy Robbie to kot? Nie, ...', 'Робби кошка? Нет, ...'), ["he isn't.", "he isn't a.", "he not is.", "he's not."], "he isn't.", shortWhy),
      c.tf(T('"Yes, I\'m." is a correct short answer.', '"Yes, I\'m." to poprawna krótka odpowiedź.', '"Yes, I\'m." это правильный краткий ответ.'), false, shortWhy),
      c.tf(T('We say "I amn\'t shy".', 'Mówimy "I amn\'t shy".', 'Мы говорим "I amn\'t shy".'), false, negWhy),
      c.type(T('Answer for you: Are you a robot? (No...)', 'Odpowiedz: Czy jesteś robotem? (Nie...)', 'Ответь: Ты робот? (Нет...)'), "No, I'm not.", ['No, I am not.', 'No, I am not', "No, I'm not", 'No I am not.', 'No, Im not.'], negWhy),
      c.type(T('Write the question: ___ he funny? (Is / Are)', 'Wpisz: ___ he funny? (Is / Are)', 'Впиши: ___ he funny? (Is / Are)'), 'Is', ['is'], { why: Y('he/she/it ➜ Is. you/we/they ➜ Are. I ➜ Am.', 'he/she/it ➜ Is. you/we/they ➜ Are. I ➜ Am.') }),
      c.type(T('Translate: Kto jest twoim bohaterem?', 'Przetłumacz: Kto jest twoim bohaterem?', 'Переведи: Kto jest twoim bohaterem?'), 'Who is your hero?', ["Who's your hero?", 'Who is your hero', "Who's your hero"]),
      c.order('Is your brother shy', 'Ułóż pytanie: Czy twój brat jest nieśmiały?', 'Составь вопрос: Твой брат застенчивый?'),
      c.order('No he is not a hero', 'Ułóż odpowiedź: Nie, on nie jest bohaterem', 'Составь ответ: Нет, он не герой'),
      c.sort(T('Who or What?', 'Who czy What?', 'Who или What?'), { 'Who ...? 🧑': ['is your teacher', 'is that girl', 'are your friends'], 'What ...? ❔': ['is your name', 'is this', 'is your favourite colour'] }),
      c.sort(T('Yes or No answer?', 'Odpowiedź Yes czy No?', 'Ответ Yes или No?'), { 'Yes, ...': ['I am.', 'she is.', 'they are.'], 'No, ...': ["I'm not.", "he isn't.", "we aren't."] }),
      c.fix("Are you a girl? Yes, I'm.", "I'm", 'I am', shortWhy),
      c.fix('Is you ten?', 'Is', 'Are', { why: Y('you zawsze z are: Are you...? (nawet jeden "ty").', 'you всегда с are: Are you...? (даже один "ты").') }),
      c.fix('Are he kind?', 'Are', 'Is', { why: Y('he/she/it ➜ Is.', 'he/she/it ➜ Is.') }),
      c.fix('What is she? She is Ana.', 'What', 'Who', { why: Y('O osobę pytamy Who is she?', 'О человеке спрашиваем Who is she?') }),
      c.fix('I amn\'t shy.', "amn't", 'am not', negWhy),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: "Hi, I'm Lily. Who are you?", replies: ["I'm Kuba. Nice to meet you!", "It's a pen.", 'I am blue.'] },
        { say: 'Are you shy?', replies: ["No, I'm not. I'm friendly!", 'No, I amn\'t.', 'Yes, I\'m.'] },
        { say: 'Is Robbie a cat?', replies: ["No, he isn't. He's a robot.", 'No, he not is.', "Yes, he's."] },
        { say: "What's your favourite colour?", replies: ['My favourite colour is green.', 'I am green.', 'Who is green?'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u2-time', unit: U, title: 'What time is it?', page: 28, emoji: '🕒',
    words: [
      w("o'clock", 'równo (godzina)', 'ровно (час)', '🕒', { pl: "o'clock: apostrof po o! Używamy tylko dla pełnej godziny: three o'clock.", ru: "o'clock: апостроф после o! Только для целого часа: three o'clock." }),
      w('half past', 'pół godziny po (np. 3:30)', 'полчаса после (напр. 3:30)', '🕞', { pl: 'UWAGA: half past six = 6:30. Po polsku "wpół do siódmej" to ta sama godzina!', ru: 'ВНИМАНИЕ: half past six = 6:30. По-русски "половина седьмого" это то же время!' }),
      w('time', 'czas, godzina', 'время', '⏰'),
      w('clock', 'zegar', 'часы (настенные)', '🕰️'),
      w('lesson', 'lekcja', 'урок', '📚'),
      w('break', 'przerwa', 'перемена', '🛝'),
      w('bell', 'dzwonek', 'звонок', '🔔'),
      w('late', 'spóźniony', 'опоздавший', '🏃', { pl: 'late = późno / spóźniony. I am late! = Spóźniłem się!', ru: 'late = поздно / опоздавший. I am late! = Я опоздал!' }),
      w('early', 'wcześnie', 'рано', '🌅'),
      w('morning', 'ranek, rano', 'утро', '🌞')
    ],
    sentences: [
      s('What time is it?', 'Która godzina?', 'Который час?'),
      s("It's three o'clock.", 'Jest trzecia.', 'Сейчас три часа.'),
      s("It's half past four.", 'Jest wpół do piątej (4:30).', 'Сейчас половина пятого (4:30).'),
      s("Oh no, I'm late for school!", 'O nie, spóźniam się do szkoły!', 'О нет, я опаздываю в школу!')
    ],
    quizzes: [
      c.mcq(T('What time is it?', 'Która godzina?', 'Который час?'), ["It's three o'clock.", "It's half past three.", "It's two o'clock.", "It's four o'clock."], "It's three o'clock.", { big: '🕒' }),
      c.mcq(T('What time is it?', 'Która godzina?', 'Который час?'), ["It's half past three.", "It's three o'clock.", "It's half past four.", "It's half past two."], "It's half past three.", { big: '🕞', why: Y('half past three = 3:30. Po polsku "wpół do czwartej" to ta sama godzina, ale po angielsku mówimy "po trzeciej".', 'half past three = 3:30. По-русски "половина четвёртого", а по-английски "половина после трёх".') }),
      c.mcq(T('What time is it?', 'Która godzina?', 'Который час?'), ["It's seven o'clock.", "It's half past seven.", "It's six o'clock.", "It's eight o'clock."], "It's seven o'clock.", { big: '🕖' }),
      c.mcq(T('The bell rings at half past eight. School starts at...', 'Dzwonek bije o 8:30. Lekcje zaczynają się o...', 'Звонок в 8:30. Уроки начинаются в...'), ['8:30', '8:00', '9:30', '7:30'], '8:30', { why: Y('half past eight = 8:30', 'half past eight = 8:30') }),
      c.tf(T("6:30 is \"half past six\".", '6:30 to "half past six".', '6:30 это "half past six".'), true, { why: Y('half past six = pół godziny PO szóstej.', 'half past six = полчаса ПОСЛЕ шести.') }),
      c.tf(T("We say \"it's half past seven o'clock\".", 'Mówimy "it\'s half past seven o\'clock".', 'Мы говорим "it\'s half past seven o\'clock".'), false, { why: Y("o'clock tylko dla pełnych godzin: seven o'clock, ale half past seven.", "o'clock только для целых часов: seven o'clock, но half past seven.") }),
      c.type(T('Write the question: Która godzina?', 'Napisz pytanie: Która godzina?', 'Напиши вопрос: Который час?'), 'What time is it?', ["What's the time?", 'What time is it', "What's the time", 'What time is it ?']),
      c.type(T("Write: 5:00 (five ... )", 'Napisz: 5:00 (five ...)', 'Напиши: 5:00 (five ...)'), "It's five o'clock.", ["It is five o'clock.", "Its five o'clock.", "five o'clock", "It's five o'clock", "It's 5 o'clock."]),
      c.type(T('Write: 9:30 in English words', 'Napisz po angielsku: 9:30', 'Напиши по-английски: 9:30'), "It's half past nine.", ["half past nine", "It is half past nine.", "It's half past nine", "Its half past nine."]),
      c.order("It's half past ten", 'Ułóż zdanie: Jest wpół do jedenastej (10:30)', 'Составь предложение: Сейчас 10:30'),
      c.order("Hurry up we are late", 'Ułóż zdanie: Pośpiesz się, jesteśmy spóźnieni', 'Составь предложение: Быстрее, мы опаздываем'),
      c.sort(T("Full hour (o'clock) or half past?", 'Pełna godzina czy wpół?', 'Целый час или половина?'), { "o'clock": ['2:00', '5:00', '9:00', '12:00'], 'half past': ['2:30', '5:30', '9:30', '1:30'] }),
      c.sort(T('School or home?', 'Szkoła czy dom?', 'Школа или дом?'), { 'school 🏫': ['lesson', 'break', 'bell', 'teacher'], 'home 🏠': ['bed', 'sofa', 'breakfast'] }),
      c.fix("It's half past tree.", 'tree', 'three', { why: Y('three: "th" to język między zębami, nie "t". Tree to drzewo!', 'three: "th" язык между зубами, не "t". Tree это дерево!') }),
      c.fix("It's five oclock.", 'oclock', "o'clock", { why: Y("o'clock = of the clock. Apostrof po o!", "o'clock = of the clock. Апостроф после o!") }),
      c.fix('What hour is it?', 'hour', 'time', { why: Y('Pytamy: What time is it? (nie hour).', 'Спрашиваем: What time is it? (не hour).') }),
      c.fix("Its half past two.", 'Its', "It's", { why: Y("It's = it is. Its (bez apostrofu) znaczy 'jego'.", "It's = it is. Its (без апострофа) значит 'его'.") }),
      c.fix("It's half to seven.", 'to', 'past', { why: Y('6:30 to half PAST six. "to" mówimy tylko przy minutach przed następną godziną.', '6:30 это half PAST six.') }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Quick! What time is it?', replies: ["It's half past eight!", "It's a clock.", 'It is red.'] },
        { say: "Oh no! The bell rings at 8:30. Are we late?", replies: ["Yes, we are! Run!", 'Yes, I\'m.', 'No, it is Monday.'] },
        { say: 'When is break?', replies: ["It's at ten o'clock.", "It's a lesson book.", 'It is a break of bread.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u2-test', unit: U, title: 'Test yourself', page: 33, emoji: '🏆',
    words: [], sentences: [],
    quizzes: [
      c.mcq(T('Winter in Poland! Which clothes?', 'Zima w Polsce! Jakie ubrania?', 'Зима в Польше! Какая одежда?'), ['coat, boots, jumper', 'shorts, T-shirt', 'skirt, sandals', 'cap, shorts'], 'coat, boots, jumper', { big: '⛄' }),
      c.mcq(T('My ___ are new.', 'Moje ___ są nowe.', 'Мои ___ новые.'), ['trainers', 'jacket', 'T-shirt', 'dress'], 'trainers', pluralWhy),
      c.mcq(T('Choose the correct sentence.', 'Wybierz poprawne zdanie.', 'Выбери правильное предложение.'), ['He is a brave hero.', 'He is a hero brave.', 'He is a braves hero.', 'He is an brave hero.'], 'He is a brave hero.', adjWhy),
      c.mcq(T('Is Lily a dog? ...', 'Czy Lily to pies? ...', 'Лили собака? ...'), ["No, she isn't.", "No, she amn't.", "No, she not.", "Yes, she's."], "No, she isn't.", negWhy),
      c.mcq(T('What time is it?', 'Która godzina?', 'Который час?'), ["It's half past six.", "It's six o'clock.", "It's half past five.", "It's seven o'clock."], "It's half past six.", { big: '🕡' }),
      c.tf(T('"Who" asks about a person.', '"Who" pyta o osobę.', '"Who" спрашивает о человеке.'), true),
      c.tf(T('We say "a jeans".', 'Mówimy "a jeans".', 'Мы говорим "a jeans".'), false, pluralWhy),
      c.type(T('Write in English: sweter (British word!)', 'Napisz po angielsku: sweter (brytyjskie słowo!)', 'Напиши по-английски: свитер (британское слово!)'), 'jumper', ['a jumper']),
      c.type(T('Answer: Are you shy? (No, ...)', 'Odpowiedz: Czy jesteś nieśmiały? (Nie...)', 'Ответь: Ты застенчивый? (Нет...)'), "No, I'm not.", ['No, I am not.', "No, I'm not", 'No, I am not', 'No I am not.'], negWhy),
      c.type(T('Write: 3:30 in English', 'Napisz po angielsku: 3:30', 'Напиши по-английски: 3:30'), "It's half past three.", ['half past three', "It is half past three.", "It's half past three"]),
      c.order('Is she a clever girl', 'Ułóż pytanie: Czy ona jest mądrą dziewczynką?', 'Составь вопрос: Она умная девочка?'),
      c.sort(T('Clothes or character?', 'Ubrania czy cecha?', 'Одежда или характер?'), { 'clothes 👕': ['jumper', 'skirt', 'socks', 'boots'], 'character 🙂': ['brave', 'funny', 'shy', 'kind'] }),
      c.sort(T('Singular or plural?', 'Liczba pojedyncza czy mnoga?', 'Единственное или множественное число?'), { 'a / an ...': ['dress', 'coat', 'cap'], 'plural, "are"': ['shorts', 'jeans', 'socks', 'trousers'] }),
      c.fix('My shorts is blue.', 'is', 'are', pluralWhy),
      c.fix('She is a kinds girl.', 'kinds', 'kind', adjWhy),
      c.fix('Are he your brother?', 'Are', 'Is', { why: Y('he/she/it ➜ Is.', 'he/she/it ➜ Is.') }),
      c.fix("Is Tom a hero? Yes, he's.", "he's", 'he is.', shortWhy),
      c.fix("It's six oclock.", 'oclock', "o'clock", { why: Y("o'clock: apostrof po o.", "o'clock: апостроф после o.") }),
      c.chat({ e: '🐭', name: 'Mickey' }, [
        { say: "Hello! I'm Mickey. Who are you?", replies: ["I'm Ola. Nice to meet you!", 'I am blue.', "It's a cap."] },
        { say: 'Is it cold today?', replies: ['Yes, it is. Put on a coat!', 'Yes, I am. Put on shorts!', 'No, they are socks.'] },
        { say: 'Do you like my new cap?', replies: ['Yes, it is cool!', 'Yes, they are cool!', 'Who is the cap?'] }
      ])
    ]
  });
})(window.EQ);
