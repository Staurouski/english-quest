/* Unit 8 "Time out!", textbook pages 106-117. */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;
  const Q = function (en, pl, ru) { return { en: en, pl: pl, ru: ru }; };
  const U = 'Unit 8: Time out!';
  const thereIs = { pl: 'there is + liczba pojedyncza, there are + liczba mnoga. Nie mówimy "in my town have a cinema". Mówimy: there is a cinema in my town.', ru: 'there is + единственное число, there are + множественное. Не говорим "in my town have a cinema". Говорим: there is a cinema in my town.' };
  const place = { pl: 'Przyimki miejsca: next to (obok), opposite (naprzeciwko), between (pomiędzy), behind (za), in front of (przed).', ru: 'Предлоги места: next to (рядом), opposite (напротив), between (между), behind (позади), in front of (перед).' };
  const imp = { pl: 'Polecenie (imperative) to sam czasownik, bez you i bez to: Turn left! Zakaz: Don\'t run!', ru: 'Повелительное наклонение: просто глагол, без you и без to: Turn left! Запрет: Don\'t run!' };
  const ing = { pl: 'Pisownia -ing: zwykle po prostu +ing (play ➜ playing); ciche "e" znika (make ➜ making); krótkie słowo z jedną samogłoską + spółgłoską podwaja ją (run ➜ running, swim ➜ swimming).', ru: 'Правописание -ing: обычно просто +ing (play ➜ playing); немая "e" пропадает (make ➜ making); короткое слово с одной гласной + согласной удваивает её (run ➜ running, swim ➜ swimming).' };
  const cont = { pl: 'Present continuous = am / is / are + czasownik-ing. Używamy go, gdy coś dzieje się TERAZ: I am reading. Nie: "I reading" ani "I am read".', ru: 'Present continuous = am / is / are + глагол-ing. Используем, когда что-то происходит СЕЙЧАС: I am reading. Не: "I reading" и не "I am read".' };
  const contNeg = { pl: 'Przeczenie: am not / isn\'t / aren\'t + czasownik-ing. She isn\'t swimming. Nie dodajemy don\'t!', ru: 'Отрицание: am not / isn\'t / aren\'t + глагол-ing. She isn\'t swimming. Don\'t не добавляем!' };
  const contQ = { pl: 'Pytanie: Am / Is / Are + osoba + czasownik-ing? Odpowiedź: Yes, she is. / No, I\'m not.', ru: 'Вопрос: Am / Is / Are + кто + глагол-ing? Ответ: Yes, she is. / No, I\'m not.' };
  const vs = { pl: 'every day, usually, always ➜ Present Simple (zwyczaj). now, at the moment, Look!, Listen! ➜ Present Continuous (dzieje się teraz).', ru: 'every day, usually, always ➜ Present Simple (привычка). now, at the moment, Look!, Listen! ➜ Present Continuous (происходит сейчас).' };

  EQ.registerLesson({
    id: 'u8-places', unit: U, title: 'Places in town', page: 106, emoji: '🏙️',
    words: [
      w('town', 'miasto', 'город', '🏘️'),
      w('street', 'ulica', 'улица', '🛣️'),
      w('park', 'park', 'парк', '🌳'),
      w('shop', 'sklep', 'магазин', '🛍️', { pl: 'shop to sklep. Robić zakupy = go shopping.', ru: 'shop это магазин. Ходить за покупками = go shopping.' }),
      w('library', 'biblioteka', 'библиотека', '📚', { pl: 'library to biblioteka, nie księgarnia (to bookshop)!', ru: 'library это библиотека, а не книжный магазин (то bookshop)!' }),
      w('museum', 'muzeum', 'музей', '🏛️', { pl: 'museum: akcent na "zi": mju-ZI-em.', ru: 'museum: ударение на "зи": мью-ЗИ-эм.' }),
      w('cinema', 'kino', 'кинотеатр', '🎬', { pl: 'cinema to kino. Po angielsku "go to the cinema" (w USA: movies).', ru: 'cinema это кинотеатр. Go to the cinema.' }),
      w('station', 'stacja / dworzec', 'вокзал / станция', '🚉'),
      w('bridge', 'most', 'мост', '🌉', { pl: 'bridge: "dż" na końcu, litera d milczy w wymowie "brydż".', ru: 'bridge: читается "бридж".' }),
      w('square', 'rynek / plac', 'площадь', '⛲')
    ],
    sentences: [
      s('There is a cinema in my town.', 'W moim mieście jest kino.', 'В моём городе есть кинотеатр.'),
      s("There aren't any museums near my house.", 'W pobliżu mojego domu nie ma muzeów.', 'Рядом с моим домом нет музеев.'),
      s('The library is next to the shop.', 'Biblioteka jest obok sklepu.', 'Библиотека рядом с магазином.'),
      s('Is there a park in your town? Yes, there is.', 'Czy w twoim mieście jest park? Tak.', 'В твоём городе есть парк? Да.'),
      s('We meet in the square on Saturday.', 'Spotykamy się na rynku w sobotę.', 'Мы встречаемся на площади в субботу.')
    ],
    quizzes: [
      c.mcq(Q('You watch a film at the...', 'Oglądasz film w...', 'Ты смотришь фильм в...'), ['cinema', 'library', 'station', 'bridge'], 'cinema', { big: '🍿' }),
      c.mcq(Q('You borrow books from the...', 'Wypożyczasz książki z...', 'Ты берёшь книги в...'), ['library', 'shop', 'museum', 'park'], 'library', { big: '📚' }),
      c.mcq(Q('You catch a train at the...', 'Łapiesz pociąg na...', 'Ты садишься на поезд на...'), ['station', 'square', 'street', 'bridge'], 'station', { big: '🚆' }),
      c.mcq(Q('___ a bridge in my town.', 'W moim mieście ___ most.', 'В моём городе ___ мост.'), ['There is', 'There are', 'Is', 'It has'], 'There is', { big: '🌉', why: thereIs }),
      c.mcq(Q('___ any shops near your house?', '___ jakieś sklepy blisko twojego domu?', '___ магазины рядом с твоим домом?'), ['Are there', 'Is there', 'Have', 'Do there'], 'Are there', { why: thereIs }),
      c.tf(Q('A library is a place where you buy books.', 'Biblioteka to miejsce, gdzie kupujesz książki.', 'Библиотека это место, где покупают книги.'), false, { why: { pl: 'W bibliotece książki się wypożycza; kupuje się je w księgarni (bookshop).', ru: 'В библиотеке книги берут; покупают их в книжном магазине (bookshop).' } }),
      c.tf(Q('There are two museums in my town. (correct grammar)', 'There are two museums in my town. (poprawna gramatyka)', 'There are two museums in my town. (правильная грамматика)'), true, { why: thereIs }),
      c.type(Q('Write in English: most / мост', 'Napisz po angielsku: most', 'Напиши по-английски: мост'), 'bridge'),
      c.type(Q('Write in English: biblioteka / библиотека', 'Napisz po angielsku: biblioteka', 'Напиши по-английски: библиотека'), 'library'),
      c.type(Q('Is there a park? Short answer: Yes, ___ ___.', 'Is there a park? Yes, ___ ___.', 'Is there a park? Yes, ___ ___.'), 'there is', [], { why: thereIs }),
      c.order('There is a cinema in my town', 'Ułóż zdanie: W moim mieście jest kino', 'Составь предложение: В моём городе есть кинотеатр'),
      c.order('The library is next to the shop', 'Ułóż zdanie: Biblioteka jest obok sklepu', 'Составь предложение: Библиотека рядом с магазином'),
      c.sort(Q('What do you do there?', 'Co tam robisz?', 'Что ты там делаешь?'), { 'cinema 🍿': ['watch a film', 'eat popcorn'], 'library 📚': ['read books', 'borrow a book'], 'station 🚉': ['catch a train', 'buy a ticket'] }),
      c.sort(Q('Singular or plural? (There is / There are)', 'Liczba pojedyncza czy mnoga?', 'Единственное или множественное?'), { 'There is...': ['a museum', 'a bridge', 'a park', 'a station'], 'There are...': ['two cinemas', 'three shops', 'some streets'] }),
      c.fix('In my town have a museum.', 'have', 'is', { why: thereIs }),
      c.fix('There are a cinema in my town.', 'are', 'is', { why: thereIs }),
      c.fix('The library is next of the shop.', 'of', 'to', { why: place }),
      c.fix('There is three shops in my street.', 'is', 'are', { why: thereIs }),
      c.fix('My town is small. Is a nice park.', 'Is', 'There is', { why: { pl: 'Po angielsku zawsze potrzebny podmiot: There is a nice park. (nie samo "Is").', ru: 'По-английски всегда нужно подлежащее: There is a nice park. (не просто "Is").' } }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'Is there a cinema in your town?', replies: ['Yes, there is. It is in the square.', 'Yes, it has.', 'Yes, I have.'] },
        { say: 'Are there any museums?', replies: ["No, there aren't. But there is a big library.", "No, there isn't any museums.", "No, they haven't."] },
        { say: 'Cool! What do you do on Saturday?', replies: ['I go to the cinema with my friends.', 'I am go to cinema.', 'I at the cinema.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u8-holiday', unit: U, title: 'Holiday and postcards', page: 108, emoji: '🏖️',
    words: [
      w('holiday', 'wakacje / urlop', 'каникулы / отпуск', '🧳', { pl: 'on holiday = na wakacjach. W USA: vacation.', ru: 'on holiday = на каникулах. В США: vacation.' }),
      w('beach', 'plaża', 'пляж', '🏖️', { pl: 'beach czyta się z długim "i:" (bi:cz). Krótkie "i" to już całkiem inne słowo, więc mów wyraźnie długo!', ru: 'beach читается с долгим "и:" (бич). С коротким "и" получится совсем другое слово, поэтому тяни звук!' }),
      w('sea', 'morze', 'море', '🌊', { pl: 'sea (morze) brzmi jak litera C: "si:".', ru: 'sea (море) звучит как буква C: "си".' }),
      w('mountains', 'góry', 'горы', '⛰️', { pl: 'mountains jest liczbą mnogą: in the mountains.', ru: 'mountains во мн. числе: in the mountains.' }),
      w('forest', 'las', 'лес', '🌲'),
      w('lake', 'jezioro', 'озеро', '🏞️'),
      w('hotel', 'hotel', 'отель', '🏨', { pl: 'hotel: akcent na drugą sylabę: ho-TEL.', ru: 'hotel: ударение на втором слоге: хоу-ТЕЛ.' }),
      w('camping', 'biwakowanie', 'кемпинг', '⛺'),
      w('sightseeing', 'zwiedzanie', 'осмотр достопримечательностей', '🗺️', { pl: 'sight + seeing = widok + oglądanie.', ru: 'sight + seeing = вид + осмотр.' }),
      w('postcard', 'pocztówka', 'открытка', '💌', { pl: 'post + card = poczta + karta.', ru: 'post + card = почта + карточка.' })
    ],
    sentences: [
      s('We are on holiday in the mountains.', 'Jesteśmy na wakacjach w górach.', 'Мы на каникулах в горах.'),
      s('The sea is blue and the weather is hot.', 'Morze jest niebieskie i jest gorąco.', 'Море голубое и погода жаркая.'),
      s('Dear Granny, we love the beach!', 'Droga Babciu, uwielbiamy plażę!', 'Дорогая бабушка, мы обожаем пляж!'),
      s('Tomorrow we go sightseeing.', 'Jutro idziemy zwiedzać.', 'Завтра мы идём осматривать достопримечательности.'),
      s('Love from Ana.', 'Całuję, Ana.', 'С любовью, Ана.')
    ],
    quizzes: [
      c.mcq(Q('We swim in the...', 'Pływamy w...', 'Мы плаваем в...'), ['sea', 'forest', 'mountains', 'hotel'], 'sea', { big: '🌊' }),
      c.mcq(Q('Trees, animals, mushrooms. Where are you?', 'Drzewa, zwierzęta, grzyby. Gdzie jesteś?', 'Деревья, звери, грибы. Где ты?'), ['in the forest', 'on the beach', 'in the hotel', 'on the sea'], 'in the forest', { big: '🌲' }),
      c.mcq(Q('We are ___ holiday in Italy.', 'Jesteśmy ___ wakacjach we Włoszech.', 'Мы ___ каникулах в Италии.'), ['on', 'in', 'at', 'to'], 'on', { why: { pl: 'on holiday = na wakacjach. Także: at home, at school, in the mountains, on the beach.', ru: 'on holiday = на каникулах. Ещё: at home, at school, in the mountains, on the beach.' } }),
      c.mcq(Q('We are ___ the mountains.', 'Jesteśmy ___ górach.', 'Мы ___ горах.'), ['in', 'on', 'at', 'to'], 'in', { big: '⛰️', why: { pl: 'in the mountains, in the forest, in the sea; ale on the beach, on holiday.', ru: 'in the mountains, in the forest, in the sea; но on the beach, on holiday.' } }),
      c.mcq(Q('You write a postcard to say...', 'Piszesz pocztówkę, żeby...', 'Ты пишешь открытку, чтобы...'), ['where you are on holiday', 'what you eat for breakfast', 'how to do homework', 'which bus to take'], 'where you are on holiday', { big: '💌' }),
      c.tf(Q('You sleep in a hotel on holiday.', 'Na wakacjach śpisz w hotelu.', 'В отпуске спят в отеле.'), true),
      c.tf(Q('A postcard goes in your pocket and you never send it.', 'Pocztówkę trzyma się w kieszeni i nigdy nie wysyła.', 'Открытку носят в кармане и никогда не отправляют.'), false),
      c.type(Q('Write in English: góry / горы', 'Napisz po angielsku: góry', 'Напиши по-английски: горы'), 'mountains'),
      c.type(Q('Write in English: jezioro / озеро', 'Napisz po angielsku: jezioro', 'Напиши по-английски: озеро'), 'lake'),
      c.type(Q('Write in English: pocztówka / открытка', 'Napisz po angielsku: pocztówka', 'Напиши по-английски: открытка'), 'postcard'),
      c.order('We are on holiday in the mountains', 'Ułóż zdanie: Jesteśmy na wakacjach w górach', 'Составь предложение: Мы на каникулах в горах'),
      c.order('Dear Granny we love the beach', 'Ułóż zdanie: Droga Babciu, uwielbiamy plażę', 'Составь предложение: Дорогая бабушка, мы обожаем пляж'),
      c.sort(Q('Where? on, in or at?', 'Gdzie? on, in czy at?', 'Где? on, in или at?'), { 'on': ['the beach', 'holiday'], 'in': ['the mountains', 'the forest', 'the sea'], 'at': ['home', 'school'] }),
      c.sort(Q('Beach holiday or mountain holiday?', 'Wakacje nad morzem czy w górach?', 'Отпуск на море или в горах?'), { 'beach 🏖️': ['swim', 'sunbathe', 'build a sandcastle'], 'mountains ⛰️': ['hike', 'climb', 'go camping'] }),
      c.fix('We are in holiday now.', 'in', 'on', { why: { pl: 'on holiday = na wakacjach (stały zwrot).', ru: 'on holiday = на каникулах (устойчивое выражение).' } }),
      c.fix('We are on the mountains.', 'on', 'in', { why: { pl: 'Mówimy in the mountains (w górach).', ru: 'Говорим in the mountains (в горах).' } }),
      c.fix('Dear granny, we love the sea!', 'granny', 'Granny', { why: { pl: 'Granny użyte jak imię piszemy z dużej litery, tak jak Mum.', ru: 'Granny как имя пишем с большой буквы, как Mum.' } }),
      c.fix('The sea is very blu.', 'blu', 'blue', { why: { pl: 'blue: po u jest e na końcu (b-l-u-e).', ru: 'blue: после u в конце есть e (b-l-u-e).' } }),
      c.fix('We go to the hotel in Monday.', 'in', 'on', { why: { pl: 'Dni tygodnia z on: on Monday.', ru: 'Дни недели с on: on Monday.' } }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Where are you on holiday?', replies: ['We are on holiday in the mountains.', 'We are in holiday mountains.', 'We have holiday on mountains.'] },
        { say: 'Is there a lake near your hotel?', replies: ['Yes, there is. It is very big!', 'Yes, it has.', 'Yes, I am.'] },
        { say: 'Send me a postcard!', replies: ['OK! I will write: Dear Robbie, love the lake!', 'OK! I postcard you.', 'OK! You are a postcard.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u8-directions', unit: U, title: 'Giving directions', page: 110, emoji: '🧭',
    words: [
      w('turn left', 'skręć w lewo', 'поверни налево', '⬅️'),
      w('turn right', 'skręć w prawo', 'поверни направо', '➡️'),
      w('go straight on', 'idź prosto', 'иди прямо', '⬆️'),
      w('cross the road', 'przejdź przez ulicę', 'перейди дорогу', '🚸'),
      w('next to', 'obok', 'рядом с', '↔️'),
      w('opposite', 'naprzeciwko', 'напротив', '🔄', { pl: 'opposite = naprzeciwko, nie "opozycja" ani "przeciwieństwo" w tym zdaniu.', ru: 'opposite = напротив.' }),
      w('between', 'pomiędzy', 'между', '↕️'),
      w('behind', 'za', 'позади', '🔙'),
      w('in front of', 'przed', 'перед', '⏫'),
      w('on the corner', 'na rogu', 'на углу', '🔲')
    ],
    sentences: [
      s('Excuse me, where is the station?', 'Przepraszam, gdzie jest stacja?', 'Извините, где вокзал?'),
      s('Go straight on and turn left.', 'Idź prosto i skręć w lewo.', 'Иди прямо и поверни налево.'),
      s('The cinema is opposite the library.', 'Kino jest naprzeciwko biblioteki.', 'Кинотеатр напротив библиотеки.'),
      s('The shop is between the museum and the bridge.', 'Sklep jest pomiędzy muzeum a mostem.', 'Магазин между музеем и мостом.'),
      s("Don't cross the road here!", 'Nie przechodź tu przez ulicę!', 'Не переходи здесь дорогу!')
    ],
    quizzes: [
      c.mcq(Q('Imagine: you walk. The bridge is in front of you. You want to go over it. You say...', 'Idziesz. Most jest przed tobą. Chcesz przejść. Mówisz...', 'Ты идёшь. Мост перед тобой. Ты хочешь пройти. Говоришь...'), ['Go straight on.', 'Turn left.', 'You turns left.', 'Going left.'], 'Go straight on.', { big: '🌉', why: imp }),
      c.mcq(Q('The cinema is ___ the library. (on the other side of the street)', 'Kino jest ___ biblioteki. (po drugiej stronie ulicy)', 'Кинотеатр ___ библиотеки. (на другой стороне улицы)'), ['opposite', 'between', 'behind', 'in'], 'opposite', { why: place }),
      c.mcq(Q('The shop is ___ the museum and the cinema. (in the middle)', 'Sklep jest ___ muzeum a kinem. (w środku)', 'Магазин ___ музеем и кинотеатром. (посередине)'), ['between', 'opposite', 'behind', 'next to'], 'between', { why: place }),
      c.mcq(Q('Which sentence is correct?', 'Które zdanie jest poprawne?', 'Какое предложение правильное?'), ['Turn right at the bridge.', 'You turn to right at the bridge.', 'Turning right at the bridge.', 'Turn to the right you.'], 'Turn right at the bridge.', { why: imp }),
      c.mcq(Q('Excuse me, ___ is the station?', 'Przepraszam, ___ jest stacja?', 'Извините, ___ вокзал?'), ['where', 'what', 'who', 'when'], 'where', { big: '🚉' }),
      c.tf(Q('"Go to straight" is correct.', '"Go to straight" jest poprawne.', '"Go to straight" правильно.'), false, { why: { pl: 'Mówimy go straight on (idź prosto), bez "to".', ru: 'Говорим go straight on (иди прямо), без "to".' } }),
      c.tf(Q('"Don\'t run in the library" tells you not to run.', '"Don\'t run in the library" mówi, żeby nie biegać.', '"Don\'t run in the library" значит не бегай.'), true, { why: imp }),
      c.type(Q('Write in English: skręć w prawo / поверни направо (2 words)', 'Napisz po angielsku: skręć w prawo (2 słowa)', 'Напиши по-английски: поверни направо (2 слова)'), 'turn right'),
      c.type(Q('Write in English: naprzeciwko / напротив', 'Napisz po angielsku: naprzeciwko', 'Напиши по-английски: напротив'), 'opposite'),
      c.type(Q('Write in English: pomiędzy / между', 'Napisz po angielsku: pomiędzy', 'Напиши по-английски: между'), 'between'),
      c.order('Go straight on and turn left', 'Ułóż zdanie: Idź prosto i skręć w lewo', 'Составь предложение: Иди прямо и поверни налево'),
      c.order('The cinema is opposite the library', 'Ułóż zdanie: Kino jest naprzeciwko biblioteki', 'Составь предложение: Кинотеатр напротив библиотеки'),
      c.sort(Q('Direction words or place words?', 'Kierunek czy miejsce?', 'Направление или место?'), { 'directions 🧭': ['turn left', 'turn right', 'go straight on', 'cross the road'], 'where it is 📍': ['next to', 'opposite', 'between', 'behind'] }),
      c.sort(Q('Command or not a command?', 'Polecenie czy nie?', 'Команда или нет?'), { 'command ❗': ['Turn left!', 'Stop!', "Don't run!"], 'not a command': ['I like the park.', 'The station is big.', 'She turns left.'] }),
      c.fix('Turns left at the bridge.', 'Turns', 'Turn', { why: imp }),
      c.fix('Turn to right at the shop.', 'to', 'at', { why: imp }),
      c.fix('The shop is in front the cinema.', 'front', 'front of', { why: place }),
      c.fix('The shop is between the museum.', 'between', 'next to', { why: { pl: 'between potrzebuje dwóch miejsc: between A and B. Z jednym miejscem: next to.', ru: 'between требует двух мест: between A and B. С одним местом: next to.' } }),
      c.fix('Turning left and go straight.', 'Turning', 'Turn', { why: imp }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: "Excuse me, I'm lost! Where is the library?", replies: ['Go straight on and turn right.', 'You going straight on.', 'The library goes straight.'] },
        { say: 'Is it near here?', replies: ["Yes, it's next to the museum.", 'Yes, it is on right.', "Yes, it's behind of the corner."] },
        { say: 'Thank you! You are very kind.', replies: ["You're welcome!", 'No, I am not.', 'Yes, thank you.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u8-ing', unit: U, title: 'Verb + -ing', page: 112, emoji: '🏃',
    words: [
      w('swimming', 'pływanie / pływając', 'плавание / плавая', '🏊', { pl: 'swim ➜ swimming: podwajamy "m"!', ru: 'swim ➜ swimming: удваиваем "m"!' }),
      w('running', 'bieganie / biegnąc', 'бег / бегущий', '🏃', { pl: 'run ➜ running: podwajamy "n"!', ru: 'run ➜ running: удваиваем "n"!' }),
      w('sitting', 'siedzenie / siedząc', 'сидя', '🪑', { pl: 'sit ➜ sitting: podwajamy "t"!', ru: 'sit ➜ sitting: удваиваем "t"!' }),
      w('making', 'robienie / robiąc', 'делая', '🛠️', { pl: 'make ➜ making: znika "e"!', ru: 'make ➜ making: "e" пропадает!' }),
      w('taking photos', 'robienie zdjęć', 'фотографирование', '📸', { pl: 'take ➜ taking: znika "e". Zdjęcia się "bierze" (take), nie "robi".', ru: 'take ➜ taking: "e" пропадает. Фото "берут" (take), а не "делают".' }),
      w('dancing', 'tańczenie / tańcząc', 'танцуя', '💃', { pl: 'dance ➜ dancing: znika "e".', ru: 'dance ➜ dancing: "e" пропадает.' }),
      w('reading', 'czytanie / czytając', 'чтение / читая', '📖'),
      w('playing', 'granie / grając', 'игра / играя', '🎮', { pl: 'play ➜ playing: po y nic nie zmieniamy.', ru: 'play ➜ playing: после y ничего не меняем.' }),
      w('cycling', 'jazda na rowerze', 'езда на велосипеде', '🚴'),
      w('writing', 'pisanie / pisząc', 'писание / пишет', '✍️', { pl: 'write ➜ writing: znika "e".', ru: 'write ➜ writing: "e" пропадает.' })
    ],
    sentences: [
      s('I like swimming in the sea.', 'Lubię pływać w morzu.', 'Я люблю плавать в море.'),
      s('My hobby is taking photos.', 'Moim hobby jest robienie zdjęć.', 'Моё хобби фотографирование.'),
      s('Running is good for you.', 'Bieganie jest dla ciebie dobre.', 'Бег полезен для тебя.'),
      s('We love dancing at parties.', 'Uwielbiamy tańczyć na imprezach.', 'Мы обожаем танцевать на вечеринках.'),
      s('She hates sitting in the car.', 'Nie znosi siedzieć w samochodzie.', 'Она ненавидит сидеть в машине.')
    ],
    quizzes: [
      c.mcq(Q('swim + ing =', 'swim + ing =', 'swim + ing ='), ['swimming', 'swiming', 'swimiing', 'swimmming'], 'swimming', { big: '🏊', why: { pl: ing.pl, ru: ing.ru } }),
      c.mcq(Q('make + ing =', 'make + ing =', 'make + ing ='), ['making', 'makeing', 'makking', 'maiking'], 'making', { big: '🛠️', why: ing }),
      c.mcq(Q('run + ing =', 'run + ing =', 'run + ing ='), ['running', 'runing', 'runeing', 'runnning'], 'running', { big: '🏃', why: ing }),
      c.mcq(Q('take + ing =', 'take + ing =', 'take + ing ='), ['taking', 'takeing', 'takking', 'taiking'], 'taking', { big: '📸', why: ing }),
      c.mcq(Q('play + ing =', 'play + ing =', 'play + ing ='), ['playing', 'plaing', 'plaiing', 'plying'], 'playing', { big: '🎮', why: ing }),
      c.mcq(Q('I like ___ in the sea.', 'Lubię ___ w morzu.', 'Я люблю ___ в море.'), ['swimming', 'swim', 'swims', 'to swimming'], 'swimming', { why: { pl: 'Po like / love / hate często czasownik z -ing: like swimming.', ru: 'После like / love / hate часто глагол с -ing: like swimming.' } }),
      c.tf(Q('"dance" ➜ "dancing" (the "e" goes away).', '"dance" ➜ "dancing" ("e" znika).', '"dance" ➜ "dancing" ("e" пропадает).'), true, { why: ing }),
      c.tf(Q('"sit" ➜ "siting" is correct.', '"sit" ➜ "siting" jest poprawne.', '"sit" ➜ "siting" правильно.'), false, { why: ing }),
      c.type(Q('write + ing = ?', 'write + ing = ?', 'write + ing = ?'), 'writing', [], { why: ing }),
      c.type(Q('sit + ing = ?', 'sit + ing = ?', 'sit + ing = ?'), 'sitting', [], { why: ing }),
      c.type(Q('dance + ing = ?', 'dance + ing = ?', 'dance + ing = ?'), 'dancing', [], { why: ing }),
      c.order('My hobby is taking photos', 'Ułóż zdanie: Moim hobby jest robienie zdjęć', 'Составь предложение: Моё хобби фотографирование'),
      c.order('We love dancing at parties', 'Ułóż zdanie: Uwielbiamy tańczyć na imprezach', 'Составь предложение: Мы обожаем танцевать на вечеринках'),
      c.sort(Q('How do you make the -ing form?', 'Jak tworzymy formę -ing?', 'Как образуется форма -ing?'), { 'just + ing': ['playing', 'reading', 'cycling'], 'drop e, + ing': ['making', 'taking', 'dancing', 'writing'], 'double letter, + ing': ['swimming', 'running', 'sitting'] }),
      c.sort(Q('Right or wrong spelling?', 'Dobra czy zła pisownia?', 'Правильно или неправильно?'), { 'correct ✅': ['running', 'making', 'sitting', 'swimming'], 'wrong ❌': ['runing', 'makeing', 'siting', 'swiming'] }),
      c.fix('She is runing in the park.', 'runing', 'running', { why: ing }),
      c.fix('I love danceing.', 'danceing', 'dancing', { why: ing }),
      c.fix('We are swiming in the lake.', 'swiming', 'swimming', { why: ing }),
      c.fix('He likes takeing photos.', 'takeing', 'taking', { why: ing }),
      c.fix('She is siting on the beach.', 'siting', 'sitting', { why: ing }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'What is your hobby?', replies: ['My hobby is taking photos.', 'My hobby is take photos.', 'My hobby takes photos.'] },
        { say: 'I like swimming. Do you like swimming?', replies: ["Yes, I do. I love swimming!", 'Yes, I swimming.', "No, I'm not swimming."] },
        { say: 'Let us go swimming on Saturday!', replies: ['Great idea!', 'Great, I am Saturday.', 'Great, you swim Saturday.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u8-continuous', unit: U, title: 'What are you doing?', page: 114, emoji: '📸',
    words: [
      w('now', 'teraz', 'сейчас', '🔔'),
      w('at the moment', 'w tej chwili', 'в данный момент', '⏱️'),
      w('sunbathe', 'opalać się', 'загорать', '🌞', { pl: 'sunbathe: czyta się "sanbejD", na końcu "th" dźwięczne.', ru: 'sunbathe: читается "санбэйð".' }),
      w('build a sandcastle', 'budować zamek z piasku', 'строить замок из песка', '🏰'),
      w('fly a kite', 'puszczać latawiec', 'запускать воздушного змея', '🪁'),
      w('collect shells', 'zbierać muszelki', 'собирать ракушки', '🐚'),
      w('eat an ice cream', 'jeść lody', 'есть мороженое', '🍦'),
      w('send a postcard', 'wysyłać pocztówkę', 'отправлять открытку', '📮'),
      w('rain', 'padać (deszcz)', 'идти (дождь)', '🌧️', { pl: 'It is raining = pada deszcz (teraz).', ru: 'It is raining = идёт дождь (сейчас).' }),
      w('have fun', 'dobrze się bawić', 'веселиться', '🎉', { pl: 'Mówimy have fun, nie "make fun" (to znaczy wyśmiewać).', ru: 'Говорим have fun, а не "make fun" (это значит дразнить).' })
    ],
    sentences: [
      s('Lily is swimming in the sea.', 'Lily pływa w morzu.', 'Лили плавает в море.'),
      s("I'm not wearing a coat.", 'Nie mam na sobie płaszcza.', 'Я без пальто.'),
      s('Are you having fun? Yes, I am.', 'Czy dobrze się bawisz? Tak.', 'Тебе весело? Да.'),
      s('What are they doing? They are flying a kite.', 'Co oni robią? Puszczają latawiec.', 'Что они делают? Они запускают змея.'),
      s('Look! It is raining!', 'Patrz! Pada deszcz!', 'Смотри! Идёт дождь!')
    ],
    quizzes: [
      c.mcq(Q('Look! Ana ___ a photo.', 'Patrz! Ana ___ zdjęcie.', 'Смотри! Ана ___ фото.'), ['is taking', 'takes', 'taking', 'is take'], 'is taking', { big: '📸', why: cont }),
      c.mcq(Q('Listen! They ___ the guitar.', 'Posłuchaj! Oni ___ na gitarze.', 'Послушай! Они ___ на гитаре.'), ['are playing', 'plays', 'playing', 'are play'], 'are playing', { big: '🎸', why: cont }),
      c.mcq(Q('I ___ eating an ice cream.', '___ jem lody.', 'Я ___ ем мороженое.'), ['am', 'is', 'are', 'do'], 'am', { big: '🍦', why: cont }),
      c.mcq(Q('She ___ swimming. She is on the beach.', 'Ona ___ pływa. Jest na plaży.', 'Она ___ плавает. Она на пляже.'), ["isn't", "doesn't", "don't", 'not'], "isn't", { why: contNeg }),
      c.mcq(Q('___ you having fun?', '___ dobrze się bawisz?', 'Тебе весело?'), ['Are', 'Do', 'Is', 'Does'], 'Are', { big: '🎉', why: contQ }),
      c.mcq(Q('Which sentence is about NOW?', 'Które zdanie jest o TERAZ?', 'Какое предложение про СЕЙЧАС?'), ['Look! It is raining.', 'It rains in autumn.', 'I go to school every day.', 'He always plays football.'], 'Look! It is raining.', { why: vs }),
      c.tf(Q('"I am swim in the sea" is correct.', '"I am swim in the sea" jest poprawne.', '"I am swim in the sea" правильно.'), false, { why: cont }),
      c.tf(Q('"Is she reading?" ➜ "Yes, she is." is correct.', '"Is she reading?" ➜ "Yes, she is." jest poprawne.', '"Is she reading?" ➜ "Yes, she is." правильно.'), true, { why: contQ }),
      c.type(Q('Mickey ___ flying a kite. (is / are)', 'Mickey ___ flying a kite.', 'Mickey ___ flying a kite.'), 'is', [], { why: cont }),
      c.type(Q('Are they sunbathing? Short answer: No, they ___.', 'Are they sunbathing? Krótka odpowiedź: No, they ___.', 'Are they sunbathing? Краткий ответ: No, they ___.'), "aren't", ['are not', 'arent'], { why: contQ }),
      c.type(Q('Write in English: teraz / сейчас', 'Napisz po angielsku: teraz', 'Напиши по-английски: сейчас'), 'now'),
      c.order('What are they doing', 'Ułóż pytanie: Co oni robią?', 'Составь вопрос: Что они делают?'),
      c.order('Lily is swimming in the sea', 'Ułóż zdanie: Lily pływa w morzu', 'Составь предложение: Лили плавает в море'),
      c.sort(Q('Now or every day?', 'Teraz czy codziennie?', 'Сейчас или каждый день?'), { 'now (is / are + -ing)': ['Look!', 'Listen!', 'at the moment', 'now'], 'every day (simple)': ['usually', 'always', 'every day', 'never'] }),
      c.sort(Q('Which tense?', 'Który czas?', 'Какое время?'), { 'continuous 📸': ['She is dancing.', 'I am reading.', 'They are swimming.'], 'simple 🗓️': ['She dances.', 'I read.', 'They swim.'] }),
      c.fix('She is swim in the sea.', 'swim', 'swimming', { why: cont }),
      c.fix('We swimming in the lake.', 'swimming', 'are swimming', { why: cont }),
      c.fix("He don't playing football.", "don't", "isn't", { why: contNeg }),
      c.fix('Do you reading a book now?', 'Do', 'Are', { why: contQ }),
      c.fix('I am wear a hat now.', 'wear', 'wearing', { why: cont }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Hi! What are you doing?', replies: ["I'm building a sandcastle!", 'I build sandcastle now.', 'I am build.'] },
        { say: 'Is Lily helping you?', replies: ["Yes, she is. She's collecting shells.", 'Yes, she helps.', "Yes, she isn't."] },
        { say: 'Are you having fun?', replies: ['Yes, we are! It is great!', 'Yes, we do!', 'Yes, we have.'] },
        { say: 'Oh no! It is raining!', replies: ["Let's run to the hotel!", 'Let us running.', 'It rains me.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u8-test', unit: U, title: 'Test yourself: Unit 8', page: 117, emoji: '🌟',
    words: [], sentences: [],
    quizzes: [
      c.mcq(Q('Look! Tom ___ a postcard.', 'Patrz! Tom ___ pocztówkę.', 'Смотри! Том ___ открытку.'), ['is writing', 'writes', 'is write', 'writing'], 'is writing', { big: '💌', why: cont }),
      c.mcq(Q('___ a museum in your town?', '___ muzeum w twoim mieście?', '___ музей в твоём городе?'), ['Is there', 'Are there', 'Has', 'Have'], 'Is there', { why: thereIs }),
      c.mcq(Q('Go ___ on and turn left.', 'Idź ___ i skręć w lewo.', 'Иди ___ и поверни налево.'), ['straight', 'straights', 'to straight', 'right'], 'straight', { why: imp }),
      c.mcq(Q('run + ing =', 'run + ing =', 'run + ing ='), ['running', 'runing', 'runeing', 'runnning'], 'running', { why: ing }),
      c.mcq(Q('The cinema is ___ the library. (other side of the street)', 'Kino jest ___ biblioteki. (po drugiej stronie ulicy)', 'Кинотеатр ___ библиотеки. (на другой стороне улицы)'), ['opposite', 'between', 'behind', 'next'], 'opposite', { why: place }),
      c.tf(Q('"They are playing football now" is correct.', '"They are playing football now" jest poprawne.', '"They are playing football now" правильно.'), true, { why: cont }),
      c.tf(Q('We say "on the mountains".', 'Mówimy "on the mountains".', 'Мы говорим "on the mountains".'), false, { why: { pl: 'Mówimy in the mountains. (On the beach, ale in the mountains.)', ru: 'Говорим in the mountains. (On the beach, но in the mountains.)' } }),
      c.type(Q('make + ing = ?', 'make + ing = ?', 'make + ing = ?'), 'making', [], { why: ing }),
      c.type(Q('Are you having fun? Short answer: Yes, I ___.', 'Are you having fun? Yes, I ___.', 'Are you having fun? Yes, I ___.'), 'am', [], { why: contQ }),
      c.type(Q('Write in English: biblioteka / библиотека', 'Napisz po angielsku: biblioteka', 'Напиши по-английски: библиотека'), 'library'),
      c.type(Q('Write in English: skręć w lewo / поверни налево', 'Napisz po angielsku: skręć w lewo', 'Напиши по-английски: поверни налево'), 'turn left'),
      c.order("She isn't swimming now", 'Ułóż zdanie: Ona teraz nie pływa', 'Составь предложение: Она сейчас не плавает'),
      c.order('Excuse me where is the station', 'Ułóż pytanie: Przepraszam, gdzie jest stacja?', 'Составь вопрос: Извините, где вокзал?'),
      c.sort(Q('Now or every day?', 'Teraz czy codziennie?', 'Сейчас или каждый день?'), { 'now': ['Look!', 'at the moment', 'Listen!'], 'every day': ['always', 'usually', 'never'] }),
      c.sort(Q('-ing spelling', 'Pisownia -ing', 'Правописание -ing'), { 'drop e': ['making', 'taking', 'dancing'], 'double letter': ['running', 'swimming', 'sitting'] }),
      c.fix('She is runing in the park.', 'runing', 'running', { why: ing }),
      c.fix('We are in holiday now.', 'in', 'on', { why: { pl: 'on holiday = na wakacjach.', ru: 'on holiday = на каникулах.' } }),
      c.fix('Is a museum in my town.', 'Is', 'There is', { why: thereIs }),
      c.fix('Turns left at the bridge.', 'Turns', 'Turn', { why: imp }),
      c.fix('He is play with his friends now.', 'play', 'playing', { why: cont }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'Where are you on holiday?', replies: ["We're on holiday at the seaside.", 'We are in holiday sea.', 'We have holiday seaside.'] },
        { say: 'What are you doing now?', replies: ["I'm sending a postcard to Granny.", 'I send a postcard now.', 'I am send postcard.'] },
        { say: 'Where is the post box?', replies: ['Go straight on. It is next to the shop.', 'Going straight. It is next shop.', 'You go to straight.'] }
      ])
    ]
  });
})(window.EQ);
