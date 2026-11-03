/* Welcome unit, textbook pages 4-7. */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;

  EQ.registerLesson({
    id: 'wel-1', unit: 'Welcome unit', title: 'Classroom and stationery', page: 4, emoji: '🏫',
    words: [
      w('bin', 'kosz na śmieci', 'мусорное ведро', '🗑️'),
      w('board', 'tablica', 'доска', '📋'),
      w('chair', 'krzesło', 'стул', '🪑'),
      w('clock', 'zegar', 'часы настенные', '🕰️'),
      w('computer', 'komputer', 'компьютер', '💻'),
      w('desk', 'ławka, biurko', 'парта, стол'),
      w('poster', 'plakat', 'плакат', '🖼️'),
      w('book', 'książka', 'книга', '📖'),
      w('notebook', 'zeszyt', 'тетрадь', '📓'),
      w('pen', 'długopis', 'ручка', '🖊️'),
      w('pencil', 'ołówek', 'карандаш', '✏️'),
      w('pencil case', 'piórnik', 'пенал'),
      w('pencil sharpener', 'temperówka', 'точилка'),
      w('rubber', 'gumka', 'ластик'),
      w('ruler', 'linijka', 'линейка', '📏'),
      w('school bag', 'plecak szkolny', 'школьный рюкзак', '🎒'),
      w('sticker', 'naklejka', 'наклейка'),
      w('listen', 'słuchać', 'слушать', '👂'),
      w('repeat', 'powtarzać', 'повторять', '🔁'),
      w('write', 'pisać', 'писать', '✍️'),
      w('say', 'mówić', 'говорить', '🗣️'),
      w('read', 'czytać', 'читать', '🔤')
    ],
    sentences: [
      s("I'm sorry, I don't know.", 'Przepraszam, nie wiem.', 'Извини, я не знаю.'),
      s("Let's learn English!", 'Uczmy się angielskiego!', 'Давай учить английский!')
    ],
    quizzes: [
      c.mcq({ en: 'Which word is something you write with?', pl: 'Którym przedmiotem piszesz?', ru: 'Чем можно писать?' }, ['pen', 'bin', 'clock'], 'pen'),
      c.mcq({ en: 'Which word is a place for your pens and pencils?', pl: 'Gdzie trzymasz długopisy i ołówki?', ru: 'Где хранятся ручки и карандаши?' }, ['pencil case', 'poster', 'chair'], 'pencil case'),
      c.mcq({ en: 'Which word is something you sit on?', pl: 'Na czym siedzisz?', ru: 'На чём сидят?' }, ['chair', 'ruler', 'board'], 'chair'),
    c.sort({ en: 'Thing or action?', pl: 'Przedmiot czy czynność?', ru: 'Предмет или действие?' }, { 'thing': ['bin', 'board', 'ruler', 'school bag'], 'action': ['listen', 'repeat', 'write', 'read', 'say'] }),
    c.sort({ en: 'Where is it?', pl: 'Gdzie to jest?', ru: 'Где это лежит?' }, { 'in my pencil case': ['pen', 'rubber', 'pencil sharpener', 'pencil'], 'in the classroom': ['board', 'clock', 'desk', 'bin'] }),
    c.fix('Let\'s learns English!', 'learns', 'learn'),
    c.fix('It\'s an pen.', 'an', 'a'),
    c.fix('Two ruler are on the desk.', 'ruler', 'rulers'),
    c.fix('I\'m sorry, I not know.', 'not', 'don\'t'),
    c.fix('Write on the bord.', 'bord', 'board'),
    c.chat({ e: '🤖', name: 'Robbie' }, [
      { say: 'Hi! I\'m Robbie. What\'s your name?', replies: ['Hi, Robbie! My name\'s Kuba.', 'It\'s a pencil case.', 'I\'m eleven.'] },
      { say: 'Look! What is this?', replies: ['It\'s a ruler.', 'I\'m from Poland.', 'My name\'s Kuba.'] },
      { say: 'Listen and repeat: pencil sharpener.', replies: ['Pencil sharpener.', 'I\'m ten.', 'Goodbye, Tom.'] },
      { say: 'Let\'s learn English!', replies: ['Yes, let\'s!', 'It\'s a book.', 'I\'m eleven.'] }
    ]),
    c.type({ en: 'Translate into English: długopis', pl: 'Przetłumacz na angielski: długopis', ru: 'Переведи на английский: długopis' }, 'pen'),
    c.type({ en: 'Translate into English: plecak szkolny', pl: 'Przetłumacz na angielski: plecak szkolny', ru: 'Переведи на английский: plecak szkolny' }, 'school bag', ['schoolbag']),
    c.type({ en: 'Translate into English: Uczmy się angielskiego!', pl: 'Przetłumacz na angielski: Uczmy się angielskiego!', ru: 'Переведи на английский: Uczmy się angielskiego!' }, 'Let\'s learn English!', ['Lets learn English!', 'Let\'s learn English', 'Let us learn English!']),
    c.type({ en: 'Translate into English: Przepraszam, nie wiem.', pl: 'Przetłumacz na angielski: Przepraszam, nie wiem.', ru: 'Переведи на английский: Przepraszam, nie wiem.' }, 'I\'m sorry, I don\'t know.', ['I\'m sorry I don\'t know.', 'Im sorry, I dont know.', 'I am sorry, I do not know.', 'I\'m sorry, I do not know.'])
    ]
  });

  EQ.registerLesson({
    id: 'wel-2', unit: 'Welcome unit', title: 'Alphabet and classroom instructions', page: 5, emoji: '🔤',
    words: [],
    sentences: [
      s("What's your name?", 'Jak masz na imię?', 'Как тебя зовут?'),
      s("My name's James.", 'Mam na imię James.', 'Меня зовут James.'),
      s('How do you spell James?', 'Jak się pisze James?', 'Как пишется James?'),
      s('Spell your name!', 'Przeliteruj swoje imię!', 'Назови своё имя по буквам!'),
      s('Open your book!', 'Otwórz książkę!', 'Открой книгу!'),
      s('Close your book!', 'Zamknij książkę!', 'Закрой книгу!'),
      s("Don't open your book!", 'Nie otwieraj książki!', 'Не открывай книгу!'),
      s('Sit down!', 'Usiądź!', 'Садись!'),
      s("Don't sit down!", 'Nie siadaj!', 'Не садись!'),
      s('Stand up!', 'Wstań!', 'Встань!'),
      s('Draw a picture!', 'Narysuj obrazek!', 'Нарисуй картинку!'),
      s('Put your hand up!', 'Podnieś rękę!', 'Подними руку!')
    ],
    quizzes: [
      c.mcq({ en: 'Which letter comes after C?', pl: 'Jaka litera jest po C?', ru: 'Какая буква идёт после C?' }, ['D', 'B', 'E'], 'D'),
      c.mcq({ en: 'Which letter comes after M?', pl: 'Jaka litera jest po M?', ru: 'Какая буква идёт после M?' }, ['N', 'L', 'O'], 'N'),
      c.mcq({ en: 'Which letter comes before Z?', pl: 'Jaka litera jest przed Z?', ru: 'Какая буква стоит перед Z?' }, ['Y', 'X', 'A'], 'Y'),
      c.type({ en: 'Spell the name J-A-M-E-S. Write it as a word.', pl: 'Przeczytaj literowanie J-A-M-E-S i napisz imię.', ru: 'Прочитай по буквам J-A-M-E-S и напиши имя.' }, 'James'),
      c.mcq({ en: 'Which sentence means: Nie otwieraj książki?', pl: 'Które zdanie znaczy: Nie otwieraj książki?', ru: 'Какое предложение значит: Не открывай книгу?' }, ["Don't open your book!", 'Open your book!', 'Close your book!'], "Don't open your book!"),
      c.mcq({ en: 'Which sentence means: Wstań?', pl: 'Które zdanie znaczy: Wstań?', ru: 'Какое предложение значит: Встань?' }, ['Stand up!', 'Sit down!', 'Draw a picture!'], 'Stand up!'),
      c.order('My name is James.', 'Mam na imię James.', 'Меня зовут James.'),
    c.sort({ en: 'Do it or do not do it?', pl: 'Zrób to czy nie rób tego?', ru: 'Сделать или не делать?' }, { 'Do it!': ['Stand up!', 'Sit down!', 'Draw a picture!', 'Put your hand up!'], 'Don\'t do it!': ['Don\'t sit down!', 'Don\'t open your book!', 'Don\'t stand up!'] }),
    c.sort({ en: 'Which part of the alphabet?', pl: 'W której części alfabetu jest litera?', ru: 'В какой части алфавита буква?' }, { 'A to M': ['C', 'F', 'K', 'H'], 'N to Z': ['P', 'T', 'W', 'R'] }),
    c.fix('Opens your book!', 'Opens', 'Open'),
    c.fix('Dont sit down!', 'Dont', 'Don\'t'),
    c.fix('Whats your name?', 'Whats', 'What\'s'),
    c.fix('My name are James.', 'are', 'is'),
    c.fix('Draw a pictures!', 'pictures', 'picture'),
    c.chat({ e: '🤖', name: 'Robbie' }, [
      { say: 'Hello! What is your name?', replies: ['My name\'s Lily.', 'Open your book!', 'I\'m eleven.'] },
      { say: 'How do you spell Lily?', replies: ['L-I-L-Y.', 'It\'s a pen.', 'I\'m from Spain.'] },
      { say: 'Stand up!', replies: ['OK, I\'m standing up!', 'I\'m ten.', 'It\'s blue.'] }
    ]),
    c.type({ en: 'Translate into English: Wstań!', pl: 'Przetłumacz na angielski: Wstań!', ru: 'Переведи на английский: Wstań!' }, 'Stand up!', ['Stand up']),
    c.type({ en: 'Translate into English: Usiądź!', pl: 'Przetłumacz na angielski: Usiądź!', ru: 'Переведи на английский: Usiądź!' }, 'Sit down!', ['Sit down']),
    c.type({ en: 'Translate into English: Nie otwieraj książki!', pl: 'Przetłumacz na angielski: Nie otwieraj książki!', ru: 'Переведи на английский: Nie otwieraj książki!' }, 'Don\'t open your book!', ['Dont open your book!', 'Do not open your book!', 'Don\'t open your book']),
    c.type({ en: 'Translate into English: Narysuj obrazek!', pl: 'Przetłumacz na angielski: Narysuj obrazek!', ru: 'Переведи на английский: Narysuj obrazek!' }, 'Draw a picture!', ['Draw a picture'])
    ]
  });

  EQ.registerLesson({
    id: 'wel-3', unit: 'Welcome unit', title: 'Everyday objects and colours', page: 6, emoji: '🎨',
    words: [
      w('apple', 'jabłko', 'яблоко', '🍎'),
      w('bike', 'rower', 'велосипед', '🚲'),
      w('earphones', 'słuchawki', 'наушники', '🎧'),
      w('flower', 'kwiat', 'цветок', '🌸'),
      w('football', 'piłka nożna, piłka', 'футбол, мяч', '⚽'),
      w('ice cream', 'lody', 'мороженое', '🍦'),
      w('phone', 'telefon', 'телефон', '📱'),
      w('sandwich', 'kanapka', 'бутерброд', '🥪'),
      w('umbrella', 'parasol', 'зонтик', '☂️'),
      w('watch', 'zegarek', 'наручные часы', '⌚'),
      w('black', 'czarny', 'чёрный', '⚫'),
      w('blue', 'niebieski', 'синий, голубой', '🔵'),
      w('brown', 'brązowy', 'коричневый', '🟤'),
      w('green', 'zielony', 'зелёный', '🟢'),
      w('grey', 'szary', 'серый', '🪨'),
      w('orange', 'pomarańczowy', 'оранжевый', '🟠'),
      w('pink', 'różowy', 'розовый', '💗'),
      w('purple', 'fioletowy', 'фиолетовый', '🟣'),
      w('red', 'czerwony', 'красный', '🔴'),
      w('white', 'biały', 'белый', '⚪'),
      w('yellow', 'żółty', 'жёлтый', '🟡')
    ],
    sentences: [
      s('My brown pencil case.', 'Mój brązowy piórnik.', 'Мой коричневый пенал.'),
      s('My pink watch!', 'Mój różowy zegarek!', 'Мои розовые часы!'),
      s('Grey earphones.', 'Szare słuchawki.', 'Серые наушники.'),
      s('Blue phone.', 'Niebieski telefon.', 'Синий телефон.')
    ],
    quizzes: [
      c.mcq({ en: 'Plural of: child', pl: 'Liczba mnoga: child', ru: 'Множественное число: child' }, ['children', 'childs', 'childes', 'childrens'], 'children'),
      c.mcq({ en: 'Plural of: mouse', pl: 'Liczba mnoga: mouse', ru: 'Множественное число: mouse' }, ['mice', 'mouses', 'mices', 'mouse'], 'mice'),
      c.mcq({ en: 'Plural of: fish', pl: 'Liczba mnoga: fish', ru: 'Множественное число: fish' }, ['fish', 'fishes', 'fishs'], 'fish'),
      c.mcq({ en: 'Plural of: sandwich', pl: 'Liczba mnoga: sandwich', ru: 'Множественное число: sandwich' }, ['sandwiches', 'sandwichs', 'sandwichies', 'sandwichees'], 'sandwiches'),
      c.type({ en: 'Plural of: pencil case', pl: 'Liczba mnoga: pencil case', ru: 'Множественное число: pencil case' }, 'pencil cases'),
      c.type({ en: 'Plural of: book', pl: 'Liczba mnoga: book', ru: 'Множественное число: book' }, 'books'),
      c.mcq({ en: 'What colour is a banana?', pl: 'Jakiego koloru jest banan?', ru: 'Какого цвета банан?' }, ['yellow', 'orange', 'brown', 'purple'], 'yellow', { big: '🍌' }),
      c.mcq({ en: 'What colour is grass?', pl: 'Jakiego koloru jest trawa?', ru: 'Какого цвета трава?' }, ['green', 'pink', 'black'], 'green', { big: '🌱' }),
    c.sort({ en: 'Colour, thing or food?', pl: 'Kolor, przedmiot czy jedzenie?', ru: 'Цвет, вещь или еда?' }, { 'colour': ['purple', 'brown', 'yellow'], 'thing': ['phone', 'umbrella', 'bike'], 'food': ['sandwich', 'ice cream', 'apple'] }),
    c.sort({ en: 'a or an?', pl: 'a czy an?', ru: 'a или an?' }, { 'a': ['phone', 'bike', 'sandwich', 'watch'], 'an': ['apple', 'umbrella', 'ice cream', 'orange'] }),
    c.sort({ en: 'One or more than one?', pl: 'Jeden czy więcej?', ru: 'Один или несколько?' }, { 'one': ['flower', 'bike', 'watch'], 'more than one': ['bikes', 'flowers', 'sandwiches', 'watches'] }),
    c.fix('It\'s a umbrella.', 'a', 'an'),
    c.fix('They\'re blue earphone.', 'earphone', 'earphones'),
    c.fix('Two sandwichs and an apple.', 'sandwichs', 'sandwiches'),
    c.fix('Three childs are in the park.', 'childs', 'children'),
    c.fix('My football are green.', 'are', 'is'),
    c.chat({ e: '🤖', name: 'Robbie' }, [
      { say: 'Look at my new phone! What colour is it?', replies: ['It\'s blue.', 'It\'s a phone.', 'I\'m eleven.'] },
      { say: 'What\'s this?', replies: ['It\'s an umbrella.', 'It\'s pink.', 'I\'m from Brazil.'] },
      { say: 'What colour is the umbrella?', replies: ['It\'s yellow.', 'It\'s an apple.', 'I\'m ten.'] }
    ]),
    c.type({ en: 'Translate into English: czerwony zegarek', pl: 'Przetłumacz na angielski: czerwony zegarek', ru: 'Переведи на английский: czerwony zegarek' }, 'red watch'),
    c.type({ en: 'Translate into English: szary telefon', pl: 'Przetłumacz na angielski: szary telefon', ru: 'Переведи на английский: szary telefon' }, 'grey phone', ['gray phone']),
    c.type({ en: 'Translate into English: zielone jabłko', pl: 'Przetłumacz na angielski: zielone jabłko', ru: 'Переведи на английский: zielone jabłko' }, 'green apple'),
    c.type({ en: 'Plural of: watch', pl: 'Liczba mnoga: watch', ru: 'Множественное число: watch' }, 'watches')
    ]
  });

  const nums1 = [
    ['one', 'jeden', 'один', '1'], ['two', 'dwa', 'два', '2'], ['three', 'trzy', 'три', '3'], ['four', 'cztery', 'четыре', '4'],
    ['five', 'pięć', 'пять', '5'], ['six', 'sześć', 'шесть', '6'], ['seven', 'siedem', 'семь', '7'], ['eight', 'osiem', 'восемь', '8'],
    ['nine', 'dziewięć', 'девять', '9'], ['ten', 'dziesięć', 'десять', '10']
  ];
  const nums2 = [
    ['eleven', 'jedenaście', 'одиннадцать', '11'], ['twelve', 'dwanaście', 'двенадцать', '12'], ['thirteen', 'trzynaście', 'тринадцать', '13'],
    ['fourteen', 'czternaście', 'четырнадцать', '14'], ['fifteen', 'piętnaście', 'пятнадцать', '15'], ['sixteen', 'szesnaście', 'шестнадцать', '16'],
    ['seventeen', 'siedemnaście', 'семнадцать', '17'], ['eighteen', 'osiemnaście', 'восемнадцать', '18'], ['nineteen', 'dziewiętnaście', 'девятнадцать', '19'],
    ['twenty', 'dwadzieścia', 'двадцать', '20']
  ];
  const mk = function (a) { return w(a[0], a[1], a[2], a[3]); };

  EQ.registerLesson({
    id: 'wel-4a', unit: 'Welcome unit', title: 'Numbers 1-10', page: 7, emoji: '🔢',
    words: nums1.map(mk), sentences: [],
    quizzes: [
      c.type('four + two = ?', 'six'), c.type('five + five = ?', 'ten'), c.type('one + one = ?', 'two'),
      c.type('nine - five = ?', 'four'), c.type('ten - seven = ?', 'three'), c.type('three + five = ?', 'eight'),
    c.sort({ en: 'Even or odd?', pl: 'Parzyste czy nieparzyste?', ru: 'Чётное или нечётное?' }, { 'even (2, 4, 6...)': ['two', 'four', 'six', 'ten'], 'odd (1, 3, 5...)': ['three', 'five', 'seven', 'nine'] }),
    c.sort({ en: 'Small or big number?', pl: 'Mała czy duża liczba?', ru: 'Маленькое или большое число?' }, { 'one to five': ['two', 'one', 'five', 'three'], 'six to ten': ['eight', 'six', 'ten', 'nine'] }),
    c.fix('One, two, tree, four.', 'tree', 'three'),
    c.fix('Two plus two is for.', 'for', 'four'),
    c.fix('Seven plus one is eigth.', 'eigth', 'eight'),
    c.fix('Ten minus six is five.', 'five', 'four'),
    c.fix('Five plus five is nine.', 'nine', 'ten'),
    c.chat({ e: '🤖', name: 'Robbie' }, [
      { say: 'How old are you?', replies: ['I\'m ten.', 'I\'m from Poland.', 'It\'s red.'] },
      { say: 'What\'s three plus four?', replies: ['It\'s seven.', 'I\'m from Spain.', 'My name\'s Robbie.'] },
      { say: 'Great! Count to five!', replies: ['One, two, three, four, five!', 'I\'m sorry, I\'m ten.', 'It\'s a pen.'] }
    ]),
    c.type({ en: 'Translate into English: siedem', pl: 'Przetłumacz na angielski: siedem', ru: 'Переведи на английский: siedem' }, 'seven'),
    c.type({ en: 'Write 8 in words.', pl: 'Napisz 8 słowami.', ru: 'Напиши 8 словами.' }, 'eight'),
    c.type({ en: 'two + seven = ? (in words)', pl: 'two + seven = ? (słowami)', ru: 'two + seven = ? (словами)' }, 'nine'),
    c.type({ en: 'five - three = ? (in words)', pl: 'five - three = ? (słowami)', ru: 'five - three = ? (словами)' }, 'two')
    ]
  });

  EQ.registerLesson({
    id: 'wel-4b', unit: 'Welcome unit', title: 'Numbers 11-20', page: 7, emoji: '🔢',
    words: nums2.map(mk), sentences: [],
    quizzes: [
      c.type('eleven + three = ?', 'fourteen'), c.type('fifteen - eight = ?', 'seven'), c.type('thirteen - twelve = ?', 'one'),
      c.type('twenty - eleven = ?', 'nine'), c.type('ten + seven = ?', 'seventeen'), c.type('twenty - two = ?', 'eighteen'),
    c.sort({ en: 'Does it end in -teen?', pl: 'Czy kończy się na -teen?', ru: 'Оканчивается ли на -teen?' }, { 'ends in -teen': ['thirteen', 'fourteen', 'sixteen', 'nineteen'], 'does not end in -teen': ['eleven', 'twelve', 'twenty', 'ten'] }),
    c.sort({ en: 'Smaller or bigger than 15?', pl: 'Mniejsza czy większa niż 15?', ru: 'Меньше или больше 15?' }, { 'under 15': ['eleven', 'twelve', 'thirteen', 'fourteen'], 'over 15': ['sixteen', 'seventeen', 'eighteen', 'nineteen'] }),
    c.fix('I\'m thirten years old.', 'thirten', 'thirteen'),
    c.fix('She is sixten.', 'sixten', 'sixteen'),
    c.fix('Twelve plus one is fourteen.', 'fourteen', 'thirteen'),
    c.fix('My sister is eigthteen.', 'eigthteen', 'eighteen'),
    c.fix('Twenty minus one is ninteen.', 'ninteen', 'nineteen'),
    c.chat({ e: '🤖', name: 'Robbie' }, [
      { say: 'How old are you?', replies: ['I\'m eleven.', 'I\'m from France.', 'It\'s a clock.'] },
      { say: 'How old is your brother?', replies: ['He\'s fifteen.', 'He\'s from Turkey.', 'It\'s a pen.'] },
      { say: 'And your sister?', replies: ['She\'s thirteen.', 'She\'s Polish.', 'It\'s a book.'] }
    ]),
    c.type({ en: 'Translate into English: trzynaście', pl: 'Przetłumacz na angielski: trzynaście', ru: 'Переведи на английский: trzynaście' }, 'thirteen'),
    c.type({ en: 'Write 17 in words.', pl: 'Napisz 17 słowami.', ru: 'Напиши 17 словами.' }, 'seventeen'),
    c.type({ en: 'twenty - five = ? (in words)', pl: 'twenty - five = ? (słowami)', ru: 'twenty - five = ? (словами)' }, 'fifteen'),
    c.type({ en: 'eleven + eight = ? (in words)', pl: 'eleven + eight = ? (słowami)', ru: 'eleven + eight = ? (словами)' }, 'nineteen')
    ]
  });

  EQ.registerLesson({
    id: 'wel-4c', unit: 'Welcome unit', title: 'Days of the week', page: 7, emoji: '🗓️',
    words: [
      w('Monday', 'poniedziałek', 'понедельник'), w('Tuesday', 'wtorek', 'вторник'), w('Wednesday', 'środa', 'среда'),
      w('Thursday', 'czwartek', 'четверг'), w('Friday', 'piątek', 'пятница'), w('Saturday', 'sobota', 'суббота'), w('Sunday', 'niedziela', 'воскресенье')
    ],
    sentences: [],
    quizzes: [
      c.mcq({ en: 'Which day comes after Monday?', pl: 'Który dzień jest po poniedziałku?', ru: 'Какой день идёт после понедельника?' }, ['Tuesday', 'Tuseday', 'Thursday', 'Sunday'], 'Tuesday'),
      c.mcq({ en: 'Which day comes after Wednesday?', pl: 'Który dzień jest po środzie?', ru: 'Какой день идёт после среды?' }, ['Thursday', 'Thrusday', 'Friday', 'Tuesday'], 'Thursday'),
      c.mcq({ en: 'Which day comes before Sunday?', pl: 'Który dzień jest przed niedzielą?', ru: 'Какой день идёт перед воскресеньем?' }, ['Saturday', 'Monday', 'Friday'], 'Saturday'),
      c.type({ en: 'Friday, ___, Sunday', pl: 'Friday, ___, Sunday', ru: 'Friday, ___, Sunday' }, 'Saturday'),
    c.sort({ en: 'School days or weekend?', pl: 'Dni szkolne czy weekend?', ru: 'Учебные дни или выходные?' }, { 'school days': ['Monday', 'Tuesday', 'Wednesday', 'Friday'], 'weekend': ['Saturday', 'Sunday'] }),
    c.sort({ en: 'Day or number?', pl: 'Dzień czy liczba?', ru: 'День или число?' }, { 'day': ['Monday', 'Friday', 'Sunday'], 'number': ['ten', 'seven', 'twelve'] }),
    c.fix('Monday, Tuesday, Wensday, Thursday.', 'Wensday', 'Wednesday'),
    c.fix('I am at school on friday.', 'friday', 'Friday'),
    c.fix('After Monday is Wednesday.', 'Wednesday', 'Tuesday'),
    c.fix('Thrusday is after Wednesday.', 'Thrusday', 'Thursday'),
    c.fix('Sunday is before Saturday.', 'before', 'after'),
    c.chat({ e: '🤖', name: 'Robbie' }, [
      { say: 'What day is it today?', replies: ['It\'s Monday.', 'It\'s a pen.', 'I\'m ten.'] },
      { say: 'Is it Friday?', replies: ['No, it\'s Thursday.', 'No, I\'m Polish.', 'Yes, I\'m ten.'] },
      { say: 'What day is after Sunday?', replies: ['It\'s Monday.', 'It\'s Friday.', 'It\'s ten.'] }
    ]),
    c.type({ en: 'Translate into English: środa', pl: 'Przetłumacz na angielski: środa', ru: 'Переведи на английский: środa' }, 'Wednesday'),
    c.type({ en: 'Translate into English: czwartek', pl: 'Przetłumacz na angielski: czwartek', ru: 'Переведи на английский: czwartek' }, 'Thursday'),
    c.type({ en: 'Sunday, ___, Tuesday', pl: 'Sunday, ___, Tuesday', ru: 'Sunday, ___, Tuesday' }, 'Monday'),
    c.type({ en: 'Which day is after Friday?', pl: 'Jaki dzień jest po piątku?', ru: 'Какой день идёт после пятницы?' }, 'Saturday')
    ]
  });
})(window.EQ);
