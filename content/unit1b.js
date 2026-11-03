/* Unit 1 "People and places", part 2: textbook pages 13-17. */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;

  EQ.registerLesson({
    id: 'u1-articles', unit: 'Unit 1', title: 'A, an and adjectives', page: 13, emoji: '🍎',
    words: [
      w('amazing', 'niesamowity', 'потрясающий', '🤩'),
      w('interesting', 'interesujący', 'интересный', '🧐'),
      w('new', 'nowy', 'новый', '🆕'),
      w('small', 'mały', 'маленький', '🐜'),
      w('big', 'duży', 'большой', '🐘'),
      w('old', 'stary', 'старый', '👴'),
      w('nice', 'miły, ładny', 'приятный, красивый', '🙂'),
      w('very', 'bardzo', 'очень', '➕')
    ],
    sentences: [
      s("It's an amazing party.", 'To niesamowita impreza.', 'Это потрясающая вечеринка.'),
      s("They're green backpacks.", 'To zielone plecaki.', 'Это зелёные рюкзаки.'),
      s("It's a very nice park.", 'To bardzo ładny park.', 'Это очень красивый парк.'),
      s("They're very old computers.", 'To bardzo stare komputery.', 'Это очень старые компьютеры.'),
      s("It's a very big book!", 'To bardzo duża książka!', 'Это очень большая книга!'),
      s("It's an amazing watch.", 'To niesamowity zegarek.', 'Это потрясающие часы.'),
      s("They're blue rubbers.", 'To niebieskie gumki.', 'Это синие ластики.'),
      s("They're yellow pencils.", 'To żółte ołówki.', 'Это жёлтые карандаши.')
    ],
    quizzes: [
      c.mcq("It's ___ pencil.", ['a', 'an', 'the', '-'], 'a'),
      c.mcq("It's ___ apple.", ['an', 'a', '-'], 'an'),
      c.mcq("It's ___ orange.", ['an', 'a', '-'], 'an'),
      c.mcq("It's ___ watch.", ['a', 'an', '-'], 'a'),
      c.mcq("It's ___ pen.", ['a', 'an', '-'], 'a'),
      c.mcq("They're ___ pencils.  (more than one: no a / an)", ['-', 'a', 'an'], '-'),
      c.mcq("Marcia and Bruno are ___ students.", ['-', 'a', 'an'], '-'),
      c.mcq("It's ___ amazing party.", ['an', 'a', 'the', '-'], 'an'),
      c.mcq("It's ___ very big book.", ['a', 'an', '-'], 'a'),
      c.mcq("They're ___ yellow pencils.", ['-', 'a', 'an'], '-'),
      c.order("They're green backpacks.", 'To zielone plecaki.', 'Это зелёные рюкзаки.'),
      c.order("It's a very nice park.", 'To bardzo ładny park.', 'Это очень красивый парк.'),
    c.sort({ en: 'a or an?', pl: 'a czy an?', ru: 'a или an?' }, { 'a': ['pencil', 'watch', 'ruler', 'new bike'], 'an': ['apple', 'orange', 'amazing party', 'old computer', 'umbrella'] }),
    c.sort({ en: 'One or more than one?', pl: 'Jeden czy więcej?', ru: 'Один или несколько?' }, { 'one': ['a pen', 'an orange', 'a big book'], 'more than one': ['green backpacks', 'blue rubbers', 'yellow pencils'] }),
    c.fix('It\'s a amazing watch.', 'a', 'an'),
    c.fix('It\'s an very big book!', 'an', 'a'),
    c.fix('They\'re blue rubber.', 'rubber', 'rubbers'),
    c.fix('It\'s a old computer.', 'a', 'an'),
    c.fix('Its a very nice park.', 'Its', 'It\'s'),
    c.fix('It\'s an small pen.', 'an', 'a'),
    c.chat({ e: '🧒', name: 'Joe' }, [
      { say: 'Look! What\'s this?', replies: ['It\'s a ruler.', 'They\'re umbrellas.', 'I\'m eleven.'] },
      { say: 'What are these?', replies: ['They\'re yellow pencils.', 'It\'s a yellow pencil.', 'I\'m from Spain.'] },
      { say: 'My new watch is amazing!', replies: ['It\'s a very nice watch!', 'They\'re blue rubbers.', 'My name\'s Joe.'] }
    ]),
    c.type({ en: 'Translate into English: To bardzo duża książka!', pl: 'Przetłumacz na angielski: To bardzo duża książka!', ru: 'Переведи на английский: To bardzo duża książka!' }, 'It\'s a very big book!', ['Its a very big book!', 'It is a very big book!', 'It\'s a very big book']),
    c.type({ en: 'Translate into English: To niesamowity zegarek.', pl: 'Przetłumacz na angielski: To niesamowity zegarek.', ru: 'Переведи на английский: To niesamowity zegarek.' }, 'It\'s an amazing watch.', ['Its an amazing watch.', 'It is an amazing watch.', 'It\'s an amazing watch']),
    c.type({ en: 'Translate into English: To żółte ołówki.', pl: 'Przetłumacz na angielski: To żółte ołówki.', ru: 'Переведи на английский: To żółte ołówki.' }, 'They\'re yellow pencils.', ['Theyre yellow pencils.', 'They are yellow pencils.', 'They\'re yellow pencils']),
    c.type({ en: 'It\'s ___ old computer.  (a / an)', pl: 'It\'s ___ old computer.  (a / an)', ru: 'It\'s ___ old computer.  (a / an)' }, 'an')
    ]
  });

  EQ.registerLesson({
    id: 'u1-asking', unit: 'Unit 1', title: 'Asking about people', page: 14, emoji: '🗣️',
    words: [
      w('first name', 'imię', 'имя'),
      w('surname', 'nazwisko', 'фамилия'),
      w('age', 'wiek', 'возраст'),
      w('nationality', 'narodowość', 'национальность'),
      w('country', 'kraj', 'страна'),
      w('spell', 'literować', 'называть по буквам')
    ],
    sentences: [
      s("What's your name?", 'Jak masz na imię?', 'Как тебя зовут?'),
      s('How old are you?', 'Ile masz lat?', 'Сколько тебе лет?'),
      s('How do you spell Martin?', 'Jak się pisze Martin?', 'Как пишется Martin?'),
      s("It's a great name!", 'To świetne imię!', 'Отличное имя!'),
      s("I'm ten.", 'Mam dziesięć lat.', 'Мне десять лет.'),
      s("I'm from the UK.", 'Jestem z Wielkiej Brytanii.', 'Я из Великобритании.'),
      s("My name's Mia.", 'Mam na imię Mia.', 'Меня зовут Mia.')
    ],
    quizzes: [
      c.mcq({ en: 'Answer: How old are you?', pl: 'Odpowiedz: How old are you?', ru: 'Ответь: How old are you?' }, ["I'm ten.", "I'm Polish.", "I'm from Spain."], "I'm ten."),
      c.mcq({ en: 'Answer: What’s your nationality?', pl: 'Odpowiedz: What’s your nationality?', ru: 'Ответь: What’s your nationality?' }, ["I'm French.", "I'm eleven.", "My name's Mia."], "I'm French."),
      c.mcq({ en: 'Answer: Where are you from?', pl: 'Odpowiedz: Where are you from?', ru: 'Ответь: Where are you from?' }, ["I'm from the UK.", "I'm ten.", "It's a great name!"], "I'm from the UK."),
      c.mcq({ en: 'Answer: What’s your name?', pl: 'Odpowiedz: What’s your name?', ru: 'Ответь: What’s your name?' }, ["My name's Mia.", "I'm from Poland.", "I'm eleven."], "My name's Mia."),
      c.mcq('___ old are you?', ['How', 'What', 'Where', 'Who'], 'How'),
      c.mcq('Where are you ___?', ['from', 'form', 'in', 'at'], 'from'),
      c.mcq("What's your ___?  (French, British...)", ['nationality', 'nationalty', 'surname', 'age'], 'nationality'),
      c.type({ en: 'Spell the name: Martin (use letters, e.g. A-B-C)', pl: 'Przeliteruj imię: Martin (np. A-B-C)', ru: 'Назови по буквам: Martin (например A-B-C)' }, 'M-A-R-T-I-N', ['M A R T I N']),
      c.tf('Ed Sheeran is British.', true),
      c.tf('Taylor Swift is from the USA.', true),
    c.sort({ en: 'Which question does it answer?', pl: 'Na które pytanie to odpowiedź?', ru: 'На какой вопрос это ответ?' }, { 'What\'s your name?': ['My name\'s Mia.', 'I\'m Martin.'], 'How old are you?': ['I\'m ten.', 'I\'m eleven years old.'], 'Where are you from?': ['I\'m from the UK.', 'I\'m from Poland.'] }),
    c.sort({ en: 'First name or surname?', pl: 'Imię czy nazwisko?', ru: 'Имя или фамилия?' }, { 'first name': ['Adam', 'Mia', 'Martin'], 'surname': ['Nowak', 'Sheeran', 'Swift', 'Brown'] }),
    c.fix('What\'s you name?', 'you', 'your'),
    c.fix('Where is you from?', 'is', 'are'),
    c.fix('I\'m eleven year old.', 'year', 'years'),
    c.fix('How do you spel Martin?', 'spel', 'spell'),
    c.fix('My name are Mia.', 'are', 'is'),
    c.chat({ e: '👧', name: 'Mia' }, [
      { say: 'Hi! I\'m Mia. What\'s your name?', replies: ['My name\'s Kuba.', 'I\'m from Poland.', 'I\'m ten.'] },
      { say: 'How do you spell Kuba?', replies: ['K-U-B-A.', 'It\'s a pen.', 'I\'m ten.'] },
      { say: 'How old are you?', replies: ['I\'m ten.', 'I\'m Polish.', 'My name\'s Kuba.'] },
      { say: 'Where are you from?', replies: ['I\'m from Poland.', 'It\'s a great name!', 'I\'m eleven.'] }
    ]),
    c.type({ en: 'Translate into English: Ile masz lat?', pl: 'Przetłumacz na angielski: Ile masz lat?', ru: 'Переведи на английский: Ile masz lat?' }, 'How old are you?', ['How old are you', 'How old r you?']),
    c.type({ en: 'Translate into English: Jak masz na imię?', pl: 'Przetłumacz na angielski: Jak masz na imię?', ru: 'Переведи на английский: Jak masz na imię?' }, 'What\'s your name?', ['What is your name?', 'Whats your name?', 'What\'s your name']),
    c.type({ en: 'Translate into English: Jak się pisze Martin?', pl: 'Przetłumacz na angielski: Jak się pisze Martin?', ru: 'Переведи на английский: Jak się pisze Martin?' }, 'How do you spell Martin?', ['How do you spell Martin', 'How you spell Martin?']),
    c.type({ en: 'Translate into English: Jestem z Wielkiej Brytanii.', pl: 'Przetłumacz na angielski: Jestem z Wielkiej Brytanii.', ru: 'Переведи на английский: Jestem z Wielkiej Brytanii.' }, 'I\'m from the UK.', ['I am from the UK.', 'Im from the UK.', 'I\'m from UK.'])
    ]
  });

  EQ.registerLesson({
    id: 'u1-parks', unit: 'Unit 1', title: 'Favourite parks', page: 15, emoji: '🎡',
    words: [
      w('forest', 'las', 'лес', '🌲'),
      w('tree', 'drzewo', 'дерево', '🌳'),
      w('animal', 'zwierzę', 'животное', '🐾'),
      w('bison', 'żubr', 'зубр', '🦬'),
      w('ride', 'atrakcja w parku rozrywki', 'аттракцион', '🎢'),
      w('theme park', 'park rozrywki', 'парк развлечений', '🎡'),
      w('virtual park', 'park wirtualny', 'виртуальный парк', '🥽'),
      w('national park', 'park narodowy', 'национальный парк', '🏔️'),
      w('castle', 'zamek', 'замок', '🏰'),
      w('zoo', 'zoo', 'зоопарк', '🦁'),
      w('different', 'inny', 'другой, необычный'),
      w('favourite', 'ulubiony', 'любимый', '⭐'),
      w('around the world', 'dookoła świata', 'по всему миру', '🌍')
    ],
    sentences: [
      s('My favourite park is Central Park.', 'Mój ulubiony park to Central Park.', 'Мой любимый парк это Центральный парк.'),
      s("It's four kilometres long!", 'Ma cztery kilometry długości!', 'Он длиной четыре километра!'),
      s("It's a very old forest.", 'To bardzo stary las.', 'Это очень старый лес.'),
      s("It's a theme park with over 40 rides!", 'To park rozrywki z ponad 40 atrakcjami!', 'Это парк развлечений больше чем с 40 аттракционами!'),
      s('The zoo is my favourite place.', 'Zoo to moje ulubione miejsce.', 'Зоопарк это моё любимое место.')
    ],
    quizzes: [
      c.mcq({ en: 'Ana’s project is about different...', pl: 'Projekt Any jest o różnych...', ru: 'Проект Аны о разных...' }, ['parks', 'countries', 'places', 'people'], 'parks'),
      c.mcq({ en: 'Białowieża is a very ___ forest.', pl: 'Białowieża to bardzo ___ las.', ru: 'Białowieża это очень ___ лес.' }, ['old', 'new'], 'old'),
      c.mcq({ en: 'Charlotte’s favourite park has...', pl: 'Ulubiony park Charlotte ma...', ru: 'В любимом парке Charlotte есть...' }, ['rides', 'bisons'], 'rides'),
      c.mcq({ en: 'Central Park is in New York. It is...', pl: 'Central Park jest w Nowym Jorku. To jest...', ru: 'Central Park в Нью-Йорке. Это...' }, ['an American park', 'a French park'], 'an American park'),
      c.mcq({ en: 'Which park is four kilometres long?', pl: 'Który park ma cztery kilometry długości?', ru: 'Какой парк длиной четыре километра?' }, ['Central Park', 'Illucity', 'Alton Towers', 'Białowieża'], 'Central Park'),
      c.mcq({ en: 'Where can you see bisons?', pl: 'Gdzie można zobaczyć żubry?', ru: 'Где можно увидеть зубров?' }, ['Białowieża National Park', 'Illucity in Paris', 'Alton Towers'], 'Białowieża National Park', { big: '🦬' }),
      c.mcq({ en: 'Illucity is a ___ park.', pl: 'Illucity to park ___.', ru: 'Illucity это ___ парк.' }, ['virtual', 'national'], 'virtual', { big: '🥽' }),
    c.sort({ en: 'Which park?', pl: 'Który park?', ru: 'Какой парк?' }, { 'Central Park': ['in New York', 'four kilometres long', 'an American park'], 'Białowieża': ['has bisons', 'a very old forest', 'a Polish national park'] }),
    c.fix('My favourite park are Central Park.', 'are', 'is'),
    c.fix('It\'s an very old forest.', 'an', 'a'),
    c.fix('It\'s four kilometre long!', 'kilometre', 'kilometres'),
    c.fix('Bisons lives in the forest.', 'lives', 'live'),
    c.fix('It\'s a theme park with over 40 ride!', 'ride', 'rides'),
    c.chat({ e: '👧', name: 'Ana' }, [
      { say: 'Hi! My project is about parks. What is your favourite park?', replies: ['My favourite park is Central Park.', 'My favourite colour is red.', 'I\'m from Poland.'] },
      { say: 'How long is it?', replies: ['It\'s four kilometres long!', 'It\'s a very old forest.', 'It\'s in Spain.'] },
      { say: 'Where can I see bisons?', replies: ['In Białowieża National Park.', 'It\'s an amazing party.', 'I\'m at home.'] }
    ]),
    c.type({ en: 'Translate into English: zamek', pl: 'Przetłumacz na angielski: zamek', ru: 'Переведи на английский: zamek' }, 'castle'),
    c.type({ en: 'Translate into English: drzewo', pl: 'Przetłumacz na angielski: drzewo', ru: 'Переведи на английский: drzewo' }, 'tree'),
    c.type({ en: 'Translate into English: park narodowy', pl: 'Przetłumacz na angielski: park narodowy', ru: 'Переведи на английский: park narodowy' }, 'national park'),
    c.type({ en: 'Translate into English: Zoo to moje ulubione miejsce.', pl: 'Przetłumacz na angielski: Zoo to moje ulubione miejsce.', ru: 'Переведи на английский: Zoo to moje ulubione miejsce.' }, 'The zoo is my favourite place.', ['The zoo is my favorite place.', 'Zoo is my favourite place.'])
    ]
  });

  EQ.registerLesson({
    id: 'u1-form', unit: 'Unit 1', title: 'Writing: personal information form', page: 16, emoji: '📝',
    words: [
      w('form', 'formularz', 'анкета, бланк', '📋'),
      w('summer camp', 'obóz letni', 'летний лагерь', '🏕️'),
      w('capital letter', 'wielka litera', 'заглавная буква', '🔠')
    ],
    sentences: [
      s('My first name is Adam.', 'Mam na imię Adam.', 'Моё имя Adam.'),
      s('My surname is Nowak.', 'Moje nazwisko to Nowak.', 'Моя фамилия Nowak.'),
      s("I'm eleven years old.", 'Mam jedenaście lat.', 'Мне одиннадцать лет.'),
      s("I'm Polish and I'm from Poland.", 'Jestem Polakiem i jestem z Polski.', 'Я поляк и я из Польши.')
    ],
    quizzes: [
      c.tf({ en: 'Names, countries and nationalities start with a capital letter.', pl: 'Imiona, kraje i narodowości piszemy wielką literą.', ru: 'Имена, страны и национальности пишутся с заглавной буквы.' }, true),
      c.mcq({ en: 'Which is correct?', pl: 'Które jest poprawne?', ru: 'Как правильно?' }, ['Polish', 'polish'], 'Polish'),
      c.mcq({ en: 'Which is correct?', pl: 'Które jest poprawne?', ru: 'Как правильно?' }, ['Poland', 'poland'], 'Poland'),
      c.mcq({ en: 'Which is correct?', pl: 'Które jest poprawne?', ru: 'Как правильно?' }, ['My name is Jakub.', 'My name is jakub.'], 'My name is Jakub.'),
      c.mcq({ en: 'Which is correct?', pl: 'Które jest poprawne?', ru: 'Как правильно?' }, ['Spanish', 'spanish'], 'Spanish'),
      c.type({ en: 'Adam is 11. Write 11 in words.', pl: 'Adam ma 11 lat. Napisz 11 słowami.', ru: 'Адаму 11. Напиши 11 словами.' }, 'eleven'),
      c.mcq({ en: 'Zendaya is from the USA. Her nationality is...', pl: 'Zendaya jest z USA. Jej narodowość to...', ru: 'Zendaya из США. Её национальность...' }, ['American', 'America', 'British', 'Turkish'], 'American'),
      c.order('My first name is Adam.', 'Mam na imię Adam.', 'Моё имя Adam.'),
    c.sort({ en: 'Capital letter or small letter?', pl: 'Wielka litera czy mała litera?', ru: 'Заглавная или строчная буква?' }, { 'correct': ['Polish', 'Poland', 'Adam', 'Spanish'], 'wrong (small letter)': ['polish', 'poland', 'adam', 'spanish'] }),
    c.sort({ en: 'Country, nationality or name?', pl: 'Kraj, narodowość czy imię?', ru: 'Страна, национальность или имя?' }, { 'country': ['Poland', 'Brazil', 'Turkey'], 'nationality': ['Polish', 'Brazilian', 'Turkish'], 'name': ['Adam', 'Mia', 'Nowak'] }),
    c.fix('I\'m polish and I\'m from Poland.', 'polish', 'Polish'),
    c.fix('My name is adam.', 'adam', 'Adam'),
    c.fix('My surname is nowak.', 'nowak', 'Nowak'),
    c.fix('I\'m Brazilian and I\'m from brazil.', 'brazil', 'Brazil'),
    c.fix('I\'m eleven year old.', 'year', 'years'),
    c.fix('My first name are Adam.', 'are', 'is'),
    c.chat({ e: '🧑‍🏫', name: 'Tom' }, [
      { say: 'Welcome to the summer camp! What\'s your first name?', replies: ['My first name is Adam.', 'My surname is Nowak.', 'I\'m eleven.'] },
      { say: 'And your surname?', replies: ['My surname is Nowak.', 'My first name is Adam.', 'I\'m eleven years old.'] },
      { say: 'How old are you?', replies: ['I\'m eleven years old.', 'I\'m Polish.', 'I\'m from Poland.'] },
      { say: 'What\'s your nationality?', replies: ['I\'m Polish.', 'I\'m eleven.', 'My name\'s Adam.'] }
    ]),
    c.type({ en: 'Translate into English: Moje nazwisko to Nowak.', pl: 'Przetłumacz na angielski: Moje nazwisko to Nowak.', ru: 'Переведи на английский: Moje nazwisko to Nowak.' }, 'My surname is Nowak.', ['My surname is Nowak']),
    c.type({ en: 'Translate into English: wielka litera', pl: 'Przetłumacz na angielski: wielka litera', ru: 'Переведи на английский: wielka litera' }, 'capital letter', ['a capital letter']),
    c.type({ en: 'Adam is 15. Write 15 in words.', pl: 'Adam ma 15 lat. Napisz 15 słowami.', ru: 'Адаму 15. Напиши 15 словами.' }, 'fifteen'),
    c.type({ en: 'Ana is from Brazil. Her nationality is...', pl: 'Ana jest z Brazylii. Jej narodowość to...', ru: 'Ана из Бразилии. Её национальность...' }, 'Brazilian')
    ]
  });

  EQ.registerLesson({
    id: 'u1-test', unit: 'Unit 1', title: 'Test yourself', page: 17, emoji: '✅',
    words: [], sentences: [],
    quizzes: [
      c.mcq({ en: 'Which one is different?', pl: 'Które nie pasuje?', ru: 'Что здесь лишнее?' }, ['Brazilian', 'the USA', 'Spanish'], 'the USA'),
      c.mcq({ en: 'Which one is different?', pl: 'Które nie pasuje?', ru: 'Что здесь лишнее?' }, ['Chinese', 'France', 'Australia'], 'Chinese'),
      c.mcq({ en: 'Which one is different?', pl: 'Które nie pasuje?', ru: 'Что здесь лишнее?' }, ['Argentinian', 'Turkey', 'British'], 'Turkey'),
      c.mcq({ en: 'Which one is different?', pl: 'Które nie pasuje?', ru: 'Что здесь лишнее?' }, ['Polish', 'American', 'the UK'], 'the UK'),
      c.mcq('The teacher is at ___.', ['school', 'a café', 'holiday'], 'school', { big: '🏫' }),
      c.mcq('My friend is on ___.', ['holiday', 'school', 'home'], 'holiday', { big: '🏖️' }),
      c.mcq("I'm at a summer ___.", ['camp', 'party', 'garden'], 'camp', { big: '🏕️' }),
      c.mcq('We are at a ___.', ['party', 'school', 'park'], 'party', { big: '🎉' }),
      c.mcq('It is a ___.', ['ruler', 'orange', 'friends'], 'ruler', { big: '📏' }),
      c.mcq('It is an ___.', ['orange', 'ruler', 'books'], 'orange', { big: '🟠' }),
      c.mcq('Tim and Sue are ___.', ['friends', 'amazing teacher', 'an orange'], 'friends'),
      c.mcq('She is an ___.', ['amazing teacher', 'friends', 'ruler'], 'amazing teacher'),
      c.mcq('___ are my friend.', ['You', 'am', 'he'], 'You'),
      c.mcq('I ___ a student.', ['am', 'is', 'are'], 'am'),
      c.mcq('Robbie ___ a robot.', ['is', 'are', 'you'], 'is'),
      c.mcq('They ___ teachers.', ['are', 'is', 'am'], 'are'),
      c.mcq('___ is my brother.', ['He', 'You', 'are'], 'He'),
      c.type('thirty + 3 apples = ?  (in words)', 'thirty-three', ['thirty three']),
      c.order("I'm Joe. What's your name?", 'Jestem Joe. Jak masz na imię?', 'Я Joe. Как тебя зовут?'),
      c.order("It's a great name! Where are you from?", 'To świetne imię! Skąd jesteś?', 'Отличное имя! Откуда ты?'),
      c.order("I'm from Spain. Where are you from?", 'Jestem z Hiszpanii. Skąd jesteś?', 'Я из Испании. А ты откуда?'),
      c.order("I'm from the USA.", 'Jestem z USA.', 'Я из США.'),
    c.sort({ en: 'Country, nationality or place?', pl: 'Kraj, narodowość czy miejsce?', ru: 'Страна, национальность или место?' }, { 'country': ['Spain', 'Brazil', 'the UK'], 'nationality': ['Spanish', 'Chinese', 'American'], 'place': ['at school', 'on holiday', 'in the park'] }),
    c.sort({ en: 'am, is or are?', pl: 'am, is czy are?', ru: 'am, is или are?' }, { 'am': ['I'], 'is': ['Robbie', 'My dad', 'She'], 'are': ['You', 'Lily and Robbie', 'We', 'They'] }),
    c.fix('Lily and Robbie is friends.', 'is', 'are'),
    c.fix('I\'m on school.', 'on', 'at'),
    c.fix('It\'s a orange.', 'a', 'an'),
    c.fix('Ana is Brazil.', 'Brazil', 'Brazilian'),
    c.fix('We are in a party.', 'in', 'at'),
    c.fix('Thirty plus ten is fourty.', 'fourty', 'forty'),
    c.fix('She\'s polish.', 'polish', 'Polish'),
    c.fix('They\'re very old computer.', 'computer', 'computers'),
    c.chat({ e: '🤖', name: 'Robbie' }, [
      { say: 'Hello, I\'m Robbie! I\'m a robot. What\'s your name?', replies: ['Hi, Robbie! My name\'s Kuba.', 'I\'m at a café.', 'It\'s an amazing robot.'] },
      { say: 'Where are you from, Kuba?', replies: ['I\'m from Poland. I\'m Polish.', 'I\'m eleven.', 'It\'s a big book.'] },
      { say: 'How old are you?', replies: ['I\'m eleven.', 'I\'m in the park.', 'I\'m Polish.'] },
      { say: 'Where are you now?', replies: ['I\'m at school.', 'I\'m ten.', 'I\'m from the UK.'] }
    ]),
    c.type({ en: 'seventy-five  =>  ?', pl: 'seventy-five  =>  ?', ru: 'seventy-five  =>  ?' }, '75'),
    c.type({ en: 'Translate into English: Jesteśmy w parku.', pl: 'Przetłumacz na angielski: Jesteśmy w parku.', ru: 'Переведи на английский: Jesteśmy w parku.' }, 'We are in the park.', ['We\'re in the park.', 'Were in the park.', 'We are in the park']),
    c.type({ en: 'Translate into English: To bardzo ładny zegarek.', pl: 'Przetłumacz na angielski: To bardzo ładny zegarek.', ru: 'Переведи на английский: To bardzo ładny zegarek.' }, 'It\'s a very nice watch.', ['Its a very nice watch.', 'It is a very nice watch.', 'It\'s a very nice watch']),
    c.type({ en: 'Translate into English: Jestem z Turcji.', pl: 'Przetłumacz na angielski: Jestem z Turcji.', ru: 'Переведи на английский: Jestem z Turcji.' }, 'I\'m from Turkey.', ['I am from Turkey.', 'Im from Turkey.', 'I\'m from Turkey'])
    ]
  });
})(window.EQ);
