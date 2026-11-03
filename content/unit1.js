/* Unit 1 "People and places", part 1: textbook pages 8-12. */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;

  EQ.registerLesson({
    id: 'u1-countries', unit: 'Unit 1', title: 'Countries', page: 8, emoji: '🌍',
    words: [
      w('Argentina', 'Argentyna', 'Аргентина', '🇦🇷'),
      w('Australia', 'Australia', 'Австралия', '🇦🇺'),
      w('Brazil', 'Brazylia', 'Бразилия', '🇧🇷'),
      w('China', 'Chiny', 'Китай', '🇨🇳'),
      w('France', 'Francja', 'Франция', '🇫🇷'),
      w('Poland', 'Polska', 'Польша', '🇵🇱'),
      w('Spain', 'Hiszpania', 'Испания', '🇪🇸'),
      w('the UK', 'Wielka Brytania', 'Великобритания', '🇬🇧'),
      w('the USA', 'Stany Zjednoczone', 'США', '🇺🇸'),
      w('Turkey', 'Turcja', 'Турция', '🇹🇷')
    ],
    sentences: [
      s("I'm from Poland.", 'Jestem z Polski.', 'Я из Польши.'),
      s('Where are you from?', 'Skąd jesteś?', 'Откуда ты?')
    ],
    quizzes: [
      c.mcq({ en: 'The Eiffel Tower is in...', pl: 'Wieża Eiffla jest w...', ru: 'Эйфелева башня находится в...' }, ['France', 'French', 'Spain', 'China'], 'France', { big: '🗼' }),
      c.mcq({ en: 'The Statue of Liberty is in...', pl: 'Statua Wolności jest w...', ru: 'Статуя Свободы находится в...' }, ['the USA', 'American', 'Brazil', 'Turkey'], 'the USA', { big: '🗽' }),
      c.mcq({ en: 'Big Ben is in...', pl: 'Big Ben jest w...', ru: 'Биг-Бен находится в...' }, ['the UK', 'Poland', 'Australia'], 'the UK', { big: '🕰️' }),
      c.mcq({ en: 'The Great Wall is in...', pl: 'Wielki Mur jest w...', ru: 'Великая стена находится в...' }, ['China', 'Chinese', 'Argentina', 'France'], 'China', { big: '🧱' }),
      c.mcq({ en: 'Kangaroos live in...', pl: 'Kangury żyją w...', ru: 'Кенгуру живут в...' }, ['Australia', 'Spain', 'the UK'], 'Australia', { big: '🦘' }),
    c.sort({ en: 'Europe or not Europe?', pl: 'Europa czy nie Europa?', ru: 'Европа или не Европа?' }, { 'Europe': ['Poland', 'France', 'Spain', 'the UK'], 'not Europe': ['Brazil', 'China', 'Australia', 'the USA', 'Argentina'] }),
    c.sort({ en: 'With "the" or without?', pl: 'Z "the" czy bez?', ru: 'С "the" или без?' }, { 'with "the"': ['the UK', 'the USA'], 'without "the"': ['Spain', 'France', 'Poland', 'Brazil'] }),
    c.fix('I\'m from poland.', 'poland', 'Poland'),
    c.fix('Whare are you from?', 'Whare', 'Where'),
    c.fix('The Eiffel Tower is in Spain.', 'Spain', 'France'),
    c.fix('Kangaroos live in Brasil.', 'Brasil', 'Brazil'),
    c.fix('Big Ben is in the USA.', 'USA', 'UK'),
    c.chat({ e: '🤖', name: 'Robbie' }, [
      { say: 'Hi! Where are you from?', replies: ['I\'m from Poland.', 'I\'m ten.', 'It\'s a pen.'] },
      { say: 'Where is Big Ben?', replies: ['It\'s in the UK.', 'I\'m eleven.', 'My name\'s Kuba.'] },
      { say: 'And where are kangaroos from?', replies: ['They\'re from Australia.', 'I\'m from Australia.', 'They\'re ten.'] }
    ]),
    c.type({ en: 'Translate into English: Hiszpania', pl: 'Przetłumacz na angielski: Hiszpania', ru: 'Переведи на английский: Hiszpania' }, 'Spain'),
    c.type({ en: 'Translate into English: Wielka Brytania', pl: 'Przetłumacz na angielski: Wielka Brytania', ru: 'Переведи на английский: Wielka Brytania' }, 'the UK', ['UK', 'the United Kingdom', 'United Kingdom', 'Great Britain']),
    c.type({ en: 'Translate into English: Jestem z Polski.', pl: 'Przetłumacz na angielski: Jestem z Polski.', ru: 'Переведи на английский: Jestem z Polski.' }, 'I\'m from Poland.', ['I am from Poland.', 'Im from Poland.', 'I\'m from Poland']),
    c.type({ en: 'Translate into English: Skąd jesteś?', pl: 'Przetłumacz na angielski: Skąd jesteś?', ru: 'Переведи на английский: Skąd jesteś?' }, 'Where are you from?', ['Where are you from', 'Where r you from?'])
    ]
  });

  EQ.registerLesson({
    id: 'u1-nationalities', unit: 'Unit 1', title: 'Nationalities', page: 9, emoji: '🙋',
    words: [
      w('American', 'amerykański', 'американский', '🇺🇸'),
      w('Argentinian', 'argentyński', 'аргентинский', '🇦🇷'),
      w('Australian', 'australijski', 'австралийский', '🇦🇺'),
      w('Brazilian', 'brazylijski', 'бразильский', '🇧🇷'),
      w('British', 'brytyjski', 'британский', '🇬🇧'),
      w('Chinese', 'chiński', 'китайский', '🇨🇳'),
      w('French', 'francuski', 'французский', '🇫🇷'),
      w('Polish', 'polski', 'польский', '🇵🇱'),
      w('Spanish', 'hiszpański', 'испанский', '🇪🇸'),
      w('Turkish', 'turecki', 'турецкий', '🇹🇷')
    ],
    sentences: [
      s("I'm Polish.", 'Jestem Polakiem (Polką).', 'Я поляк (полька).'),
      s("What's your nationality?", 'Jakiej jesteś narodowości?', 'Какой ты национальности?'),
      s("I'm French.", 'Jestem Francuzem (Francuzką).', 'Я француз (француженка).')
    ],
    quizzes: [
      c.mcq('Spain  ➡  ?', ['Spanish', 'Spain', 'Spainish', 'Spanian'], 'Spanish'),
      c.mcq('France  ➡  ?', ['French', 'Francian', 'France', 'Frenchish'], 'French'),
      c.mcq('the UK  ➡  ?', ['British', 'UKish', 'English only'], 'British'),
      c.mcq('Poland  ➡  ?', ['Polish', 'Polandian', 'Pole', 'Polsh'], 'Polish'),
      c.type('the USA  ➡  A______', 'American'),
      c.type('Brazil  ➡  B_______', 'Brazilian'),
      c.type('Turkey  ➡  T______', 'Turkish'),
      c.order("I'm from Turkey.", 'Jestem z Turcji.', 'Я из Турции.'),
    c.sort({ en: 'Country or nationality?', pl: 'Kraj czy narodowość?', ru: 'Страна или национальность?' }, { 'country': ['Spain', 'Poland', 'Turkey', 'Brazil'], 'nationality': ['Spanish', 'Polish', 'French', 'Chinese'] }),
    c.sort({ en: 'How does the word end?', pl: 'Jak kończy się to słowo?', ru: 'Как заканчивается слово?' }, { '-an / -ian': ['American', 'Brazilian', 'Australian'], '-ish': ['Polish', 'Spanish', 'Turkish', 'British'], 'other': ['French', 'Chinese'] }),
    c.fix('I\'m polish.', 'polish', 'Polish'),
    c.fix('I\'m Spain.', 'Spain', 'Spanish'),
    c.fix('She is french.', 'french', 'French'),
    c.fix('Ana is Brazil.', 'Brazil', 'Brazilian'),
    c.fix('What\'s your nationalty?', 'nationalty', 'nationality'),
    c.chat({ e: '🐱', name: 'Lily' }, [
      { say: 'Hello! I\'m Lily. I\'m British. What\'s your nationality?', replies: ['I\'m Polish.', 'I\'m ten.', 'It\'s red.'] },
      { say: 'My friend Ana is from Brazil. What is her nationality?', replies: ['She\'s Brazilian.', 'She\'s from Poland.', 'She\'s ten.'] },
      { say: 'And Mickey is from the UK. What is his nationality?', replies: ['He\'s British.', 'He\'s eleven.', 'It\'s a robot.'] }
    ]),
    c.type({ en: 'Australia  =>  A_________', pl: 'Australia  =>  A_________', ru: 'Australia  =>  A_________' }, 'Australian'),
    c.type({ en: 'Argentina  =>  A__________', pl: 'Argentina  =>  A__________', ru: 'Argentina  =>  A__________' }, 'Argentinian', ['Argentine']),
    c.type({ en: 'Translate into English: Jestem Polakiem.', pl: 'Przetłumacz na angielski: Jestem Polakiem.', ru: 'Переведи на английский: Jestem Polakiem.' }, 'I\'m Polish.', ['I am Polish.', 'Im Polish.', 'I\'m Polish']),
    c.type({ en: 'Translate into English: Jakiej jesteś narodowości?', pl: 'Przetłumacz na angielski: Jakiej jesteś narodowości?', ru: 'Переведи на английский: Jakiej jesteś narodowości?' }, 'What\'s your nationality?', ['What is your nationality?', 'Whats your nationality?', 'What\'s your nationality'])
    ]
  });

  EQ.registerLesson({
    id: 'u1-be', unit: 'Unit 1', title: 'Verb be: am, is, are', page: 10, emoji: '🧩',
    words: [
      w('mum', 'mama', 'мама', '👩'),
      w('dad', 'tata', 'папа', '👨'),
      w('cat', 'kot', 'кот', '🐱'),
      w('robot', 'robot', 'робот', '🤖'),
      w('friend', 'przyjaciel', 'друг', '🧑‍🤝‍🧑'),
      w('student', 'uczeń', 'ученик', '🧑‍🎓'),
      w('teacher', 'nauczyciel', 'учитель', '🧑‍🏫'),
      w('cool', 'super, fajny', 'классный', '😎')
    ],
    sentences: [
      s('I am eleven.', 'Mam jedenaście lat.', 'Мне одиннадцать лет.'),
      s("I'm 11 years old.", 'Mam 11 lat.', 'Мне 11 лет.'),
      s("She's my mum.", 'To moja mama.', 'Она моя мама.'),
      s("He's my dad.", 'To mój tata.', 'Он мой папа.'),
      s("They're cool.", 'Oni są super.', 'Они классные.'),
      s("He's a robot.", 'On jest robotem.', 'Он робот.'),
      s("You're amazing, Robbie!", 'Jesteś niesamowity, Robbie!', 'Ты потрясающий, Robbie!'),
      s("Don't worry. It's OK.", 'Nie martw się. Jest OK.', 'Не волнуйся. Всё в порядке.'),
      s('What a mess!', 'Co za bałagan!', 'Какой беспорядок!'),
      s('We are students.', 'Jesteśmy uczniami.', 'Мы ученики.'),
      s("It's our cat, Lily.", 'To nasz kot, Lily.', 'Это наша кошка Lily.'),
      s("We're from Manchester.", 'Jesteśmy z Manchesteru.', 'Мы из Манчестера.')
    ],
    quizzes: [
      c.mcq('I ___ eleven.', ['am', 'is', 'are'], 'am'),
      c.mcq('You ___ orange!', ['are', 'is', 'am', 'be'], 'are'),
      c.mcq('He ___ my dad.', ['is', 'are', 'am'], 'is'),
      c.mcq('She ___ from Brazil.', ['is', 'are', 'am'], 'is'),
      c.mcq('It ___ OK.', ['is', 'are', 'am'], 'is'),
      c.mcq('We ___ students.', ['are', 'is', 'am'], 'are'),
      c.mcq('They ___ amazing.', ['are', 'is', 'am'], 'are'),
      c.mcq('Mr and Mrs Brown ___ cool.', ['are', 'is', 'am', 'be'], 'are'),
      c.mcq('I ___ a student.', ['am', 'are', 'is'], 'am'),
      c.mcq('Robbie ___ a robot.', ['is', 'are', 'am'], 'is'),
      c.type("I am ➡ short form: I___", "I'm", ["Im"]),
      c.type("She is ➡ short form: She___", "She's", ['Shes']),
      c.type("They are ➡ short form: They___", "They're", ['Theyre']),
      c.tf('Mickey is from the UK.', true),
      c.tf('Ana is Brazilian.', true),
      c.tf('Lily and Robbie are robots.', false),
    c.sort({ en: 'am, is or are?', pl: 'am, is czy are?', ru: 'am, is или are?' }, { 'am': ['I'], 'is': ['He', 'She', 'It', 'My cat'], 'are': ['You', 'We', 'They', 'Mum and Dad'] }),
    c.sort({ en: 'Which verb is in the short form?', pl: 'Który czasownik jest w formie skróconej?', ru: 'Какой глагол скрыт в краткой форме?' }, { 'am': ['I\'m'], 'is': ['he\'s', 'she\'s', 'it\'s'], 'are': ['we\'re', 'they\'re', 'you\'re'] }),
    c.fix('I is eleven.', 'is', 'am'),
    c.fix('They is cool.', 'is', 'are'),
    c.fix('We am students.', 'am', 'are'),
    c.fix('My dad are a teacher.', 'are', 'is'),
    c.fix('Robbie and Lily is friends.', 'is', 'are'),
    c.fix('It are OK.', 'are', 'is'),
    c.chat({ e: '🧒', name: 'Joe' }, [
      { say: 'Hi! I\'m Joe. How old are you?', replies: ['I\'m eleven.', 'I\'m from Poland.', 'She\'s my mum.'] },
      { say: 'Who is that man?', replies: ['He\'s my dad.', 'She\'s my mum.', 'It\'s our cat.'] },
      { say: 'And who\'s Robbie?', replies: ['He\'s a robot.', 'She\'s a cat.', 'We\'re students.'] }
    ]),
    c.type({ en: 'Translate into English: To moja mama.', pl: 'Przetłumacz na angielski: To moja mama.', ru: 'Переведи на английский: To moja mama.' }, 'She\'s my mum.', ['She is my mum.', 'Shes my mum.', 'She\'s my mum']),
    c.type({ en: 'Translate into English: Jesteśmy uczniami.', pl: 'Przetłumacz na angielski: Jesteśmy uczniami.', ru: 'Переведи на английский: Jesteśmy uczniami.' }, 'We are students.', ['We\'re students.', 'Were students.', 'We are students']),
    c.type({ en: 'Translate into English: Mam jedenaście lat.', pl: 'Przetłumacz na angielski: Mam jedenaście lat.', ru: 'Переведи на английский: Mam jedenaście lat.' }, 'I\'m eleven.', ['I am eleven.', 'Im eleven.', 'I\'m eleven years old.', 'I\'m 11.']),
    c.type({ en: 'Translate into English: Oni są super.', pl: 'Przetłumacz na angielski: Oni są super.', ru: 'Переведи на английский: Oni są super.' }, 'They\'re cool.', ['They are cool.', 'Theyre cool.', 'They\'re cool'])
    ]
  });

  EQ.registerLesson({
    id: 'u1-places', unit: 'Unit 1', title: 'Places', page: 12, emoji: '📍',
    words: [
      w('at a café', 'w kawiarni', 'в кафе', '☕'),
      w('at a party', 'na przyjęciu', 'на вечеринке', '🎉'),
      w('at a summer camp', 'na obozie letnim', 'в летнем лагере', '🏕️'),
      w('at home', 'w domu', 'дома', '🏠'),
      w('at school', 'w szkole', 'в школе', '🏫'),
      w('in the garden', 'w ogrodzie', 'в саду', '🌳'),
      w('in the park', 'w parku', 'в парке', '🏞️'),
      w('on holiday', 'na wakacjach', 'в отпуске, на каникулах', '🏖️')
    ],
    sentences: [
      s("I'm at a café!", 'Jestem w kawiarni!', 'Я в кафе!'),
      s("I'm at home.", 'Jestem w domu.', 'Я дома.'),
      s("I'm in the park.", 'Jestem w parku.', 'Я в парке.'),
      s("I'm on holiday.", 'Jestem na wakacjach.', 'Я в отпуске.'),
      s('We are at a party.', 'Jesteśmy na przyjęciu.', 'Мы на вечеринке.')
    ],
    quizzes: [
      c.mcq("I'm ___ school.", ['at', 'in', 'on', 'to'], 'at'),
      c.mcq("I'm ___ the park.", ['in', 'at', 'on'], 'in'),
      c.mcq("I'm ___ holiday.", ['on', 'at', 'in', 'to'], 'on'),
      c.mcq("I'm ___ home.", ['at', 'in', 'on'], 'at'),
      c.mcq('We are ___ a summer camp.', ['at', 'in', 'on'], 'at'),
      c.mcq("I'm ___ the garden.", ['in', 'on', 'at'], 'in'),
      c.mcq({ en: 'Where is the girl?', pl: 'Gdzie jest dziewczynka?', ru: 'Где девочка?' }, ['at a party', 'at school', 'at home'], 'at a party', { big: '🎂' }),
    c.sort({ en: 'at, in or on?', pl: 'at, in czy on?', ru: 'at, in или on?' }, { 'at': ['school', 'home', 'a party', 'a summer camp'], 'in': ['the park', 'the garden'], 'on': ['holiday'] }),
    c.fix('I\'m in school.', 'in', 'at'),
    c.fix('I\'m at the park.', 'at', 'in'),
    c.fix('I\'m in holiday.', 'in', 'on'),
    c.fix('We are in a party.', 'in', 'at'),
    c.fix('I\'m on home.', 'on', 'at'),
    c.fix('She\'s at the garden.', 'at', 'in'),
    c.chat({ e: '🤖', name: 'Robbie' }, [
      { say: 'Hi, Joe! Where are you?', replies: ['I\'m at home.', 'I\'m eleven.', 'I\'m Polish.'] },
      { say: 'Where are Mum and Dad?', replies: ['They\'re in the garden.', 'They\'re cool.', 'He\'s my dad.'] },
      { say: 'And where\'s Lily?', replies: ['She\'s at a café.', 'She\'s my friend.', 'She\'s eleven.'] }
    ]),
    c.type({ en: 'Translate into English: w parku', pl: 'Przetłumacz na angielski: w parku', ru: 'Переведи на английский: w parku' }, 'in the park'),
    c.type({ en: 'Translate into English: w domu', pl: 'Przetłumacz na angielski: w domu', ru: 'Переведи на английский: w domu' }, 'at home'),
    c.type({ en: 'Translate into English: na wakacjach', pl: 'Przetłumacz na angielski: na wakacjach', ru: 'Переведи на английский: na wakacjach' }, 'on holiday'),
    c.type({ en: 'Translate into English: Jesteśmy na przyjęciu.', pl: 'Przetłumacz na angielski: Jesteśmy na przyjęciu.', ru: 'Переведи на английский: Jesteśmy na przyjęciu.' }, 'We are at a party.', ['We\'re at a party.', 'Were at a party.', 'We are at a party'])
    ]
  });

  const tens = [
    ['thirty', 'trzydzieści', 'тридцать', '30'], ['forty', 'czterdzieści', 'сорок', '40'], ['fifty', 'pięćdziesiąt', 'пятьдесят', '50'],
    ['sixty', 'sześćdziesiąt', 'шестьдесят', '60'], ['seventy', 'siedemdziesiąt', 'семьдесят', '70'], ['eighty', 'osiemdziesiąt', 'восемьдесят', '80'],
    ['ninety', 'dziewięćdziesiąt', 'девяносто', '90'], ['a hundred', 'sto', 'сто', '100']
  ];
  EQ.registerLesson({
    id: 'u1-numbers', unit: 'Unit 1', title: 'Numbers 30-100', page: 12, emoji: '💯',
    words: tens.map(function (a) { return w(a[0], a[1], a[2], a[3]); }),
    sentences: [],
    quizzes: [
      c.type('thirty-three  ➡  ?', '33'), c.type('forty-six  ➡  ?', '46'), c.type('fifty-two  ➡  ?', '52'),
      c.type('sixty-three  ➡  ?', '63'), c.type('seventy-seven  ➡  ?', '77'), c.type('ninety-seven  ➡  ?', '97'),
      c.type('ninety-nine  ➡  ?', '99'), c.type('forty-eight  ➡  ?', '48'),
      c.type('twenty-one  ➡  ?', '21'), c.type('thirty + three = ?  (in words)', 'thirty-three', ['thirty three']),
      c.mcq('Which number is 52?', ['fifty-two', 'twenty-five', 'fifty-five', 'fifty-three'], 'fifty-two'),
    c.sort({ en: '-teen or -ty?', pl: '-teen czy -ty?', ru: '-teen или -ty?' }, { '-teen (13, 14...)': ['sixteen', 'fourteen', 'nineteen', 'thirteen'], '-ty (30, 40...)': ['sixty', 'forty', 'ninety', 'thirty'] }),
    c.sort({ en: 'Less than 50 or more than 50?', pl: 'Mniej niż 50 czy więcej niż 50?', ru: 'Меньше или больше 50?' }, { 'less than 50': ['thirty-three', 'forty-six', 'twenty-one'], 'more than 50': ['sixty-three', 'seventy-seven', 'ninety-nine'] }),
    c.fix('Forty is 14.', '14', '40'),
    c.fix('Sixty-three is 36.', '36', '63'),
    c.fix('My dad is fourty.', 'fourty', 'forty'),
    c.fix('A hundred is 1000.', '1000', '100'),
    c.fix('Eighty minus ten is sixty.', 'sixty', 'seventy'),
    c.chat({ e: '🤖', name: 'Robbie' }, [
      { say: 'How old is your dad?', replies: ['He\'s forty-two.', 'He\'s from Spain.', 'It\'s red.'] },
      { say: 'And your mum?', replies: ['She\'s thirty-nine.', 'She\'s Polish.', 'It\'s a book.'] },
      { say: 'Count in tens: ten, twenty, thirty...', replies: ['Forty, fifty, sixty!', 'One, two, three!', 'Monday, Tuesday!'] }
    ]),
    c.type({ en: 'Translate into English: dziewięćdziesiąt', pl: 'Przetłumacz na angielski: dziewięćdziesiąt', ru: 'Переведи на английский: dziewięćdziesiąt' }, 'ninety'),
    c.type({ en: 'Translate into English: siedemdziesiąt', pl: 'Przetłumacz na angielski: siedemdziesiąt', ru: 'Переведи на английский: siedemdziesiąt' }, 'seventy'),
    c.type({ en: 'Write 58 in words.', pl: 'Napisz 58 słowami.', ru: 'Напиши 58 словами.' }, 'fifty-eight', ['fifty eight']),
    c.type({ en: 'Translate into English: sto', pl: 'Przetłumacz na angielski: sto', ru: 'Переведи на английский: sto' }, 'a hundred', ['one hundred', 'hundred', '100'])
    ]
  });
})(window.EQ);
