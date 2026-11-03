/* Unit 3 "Our things": textbook pages 36-49 (approximate). */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;
  const U = 'Unit 3: Our things';
  const T = (en, pl, ru) => ({ en, pl, ru });
  const Y = (pl, ru) => ({ pl, ru });
  const posWhy = { why: Y('my/your/his/her/our/their stoją PRZED rzeczownikiem. his = jego (chłopiec), her = jej (dziewczynka), their = ich.', 'my/your/his/her/our/their стоят ПЕРЕД существительным. his = его (мальчик), her = её (девочка), their = их.') };
  const apWhy = { why: Y('Właściciel + \'s + rzecz: Tom\'s bag (nie "bag of Tom", nie "Toms bag" bez apostrofu).', 'Владелец + \'s + вещь: Tom\'s bag (не "bag of Tom", не "Toms bag" без апострофа).') };
  const whoseWhy = { why: Y('Whose = czyj (pyta o właściciela). Who\'s = who is (kto jest).', 'Whose = чей (спрашивает о владельце). Who\'s = who is (кто).') };
  const prepWhy = { why: Y('in = w środku, on = na wierzchu, under = pod, next to = obok, behind = za, in front of = przed, between = między.', 'in = внутри, on = на поверхности, under = под, next to = рядом, behind = за, in front of = перед, between = между.') };
  const demWhy = { why: Y('this/that = jedna rzecz (this blisko, that daleko). these/those = kilka rzeczy (these blisko, those daleko).', 'this/that = одна вещь (this близко, that далеко). these/those = несколько вещей (these близко, those далеко).') };
  const priceWhy = { why: Y('Jedna rzecz: How much IS it? Wiele rzeczy: How much ARE they? Cena 2 i więcej: two pounds (z -s).', 'Одна вещь: How much IS it? Много вещей: How much ARE they? Цена от 2: two pounds (с -s).') };

  EQ.registerLesson({
    id: 'u3-room', unit: U, title: 'My room', page: 36, emoji: '🛏️',
    words: [
      w('bed', 'łóżko', 'кровать', '🛏️'),
      w('sofa', 'kanapa', 'диван', '🛋️'),
      w('table', 'stół', 'стол', '🍽️'),
      w('desk', 'biurko', 'письменный стол', '🖥️'),
      w('chair', 'krzesło', 'стул', '🪑'),
      w('lamp', 'lampa', 'лампа', '💡'),
      w('wardrobe', 'szafa na ubrania', 'шкаф для одежды', '👚', { pl: 'ward-robe: czytamy "łodrołb", pamiętaj o "w" na początku i "e" na końcu.', ru: 'ward-robe: читается "уордроуб", помни "w" в начале и "e" в конце.' }),
      w('shelf', 'półka', 'полка', '📚', { pl: 'Liczba mnoga: shelf ➜ shelves (f zmienia się na ves).', ru: 'Множественное число: shelf ➜ shelves (f меняется на ves).' }),
      w('carpet', 'dywan', 'ковёр', '🧶'),
      w('window', 'okno', 'окно', '🪟'),
      w('mirror', 'lustro', 'зеркало', '🪞', { pl: 'mi-RR-or: dwa "r" w środku.', ru: 'mi-RR-or: две "r" в середине.' }),
      w('door', 'drzwi', 'дверь', '🚪')
    ],
    sentences: [
      s('This is my room.', 'To jest mój pokój.', 'Это моя комната.'),
      s('My clothes are in the wardrobe.', 'Moje ubrania są w szafie.', 'Моя одежда в шкафу.'),
      s('The lamp is on my desk.', 'Lampa stoi na moim biurku.', 'Лампа на моём письменном столе.'),
      s('I love my big, soft sofa!', 'Uwielbiam moją dużą, miękką kanapę!', 'Обожаю свой большой мягкий диван!')
    ],
    quizzes: [
      c.mcq(T('You sleep in a...', 'Śpisz w...', 'Ты спишь на...'), ['bed', 'sofa', 'carpet', 'shelf'], 'bed', { big: '😴' }),
      c.mcq(T('You look at yourself in a...', 'Przeglądasz się w...', 'Ты смотришь на себя в...'), ['mirror', 'window', 'lamp', 'shelf'], 'mirror', { big: '🪞' }),
      c.mcq(T('Your clothes are in the...', 'Twoje ubrania są w...', 'Твоя одежда в...'), ['wardrobe', 'shelf', 'carpet', 'lamp'], 'wardrobe', { big: '👕' }),
      c.mcq(T('You do your homework at the...', 'Odrabiasz lekcje przy...', 'Ты делаешь уроки за...'), ['desk', 'sofa', 'door', 'carpet'], 'desk', { big: '✏️' }),
      c.mcq(T('Books and photos are on the...', 'Książki i zdjęcia stoją na...', 'Книги и фотографии стоят на...'), ['shelf', 'floor', 'mirror', 'lamp'], 'shelf', { big: '📚' }),
      c.tf(T('A wardrobe is for clothes.', 'Szafa jest na ubrania.', 'Шкаф для одежды.'), true),
      c.tf(T('We sit on a lamp.', 'Siadamy na lampie.', 'Мы сидим на лампе.'), false, { why: Y('Siadamy na chair (krześle) albo sofa (kanapie).', 'Мы садимся на chair (стул) или sofa (диван).') }),
      c.type(T('Write in English: dywan / ковёр', 'Napisz po angielsku: dywan', 'Напиши по-английски: ковёр'), 'carpet'),
      c.type(T('Write in English: szafa na ubrania / шкаф', 'Napisz po angielsku: szafa na ubrania', 'Напиши по-английски: шкаф для одежды'), 'wardrobe'),
      c.type(T('Translate: To jest moje łóżko.', 'Przetłumacz: To jest moje łóżko.', 'Переведи: To jest moje łóżko.'), 'This is my bed.', ['This is my bed', "It's my bed.", 'It is my bed.', "It's my bed"]),
      c.type(T('Plural: one shelf, two ___', 'Liczba mnoga: one shelf, two ___', 'Множественное число: one shelf, two ___'), 'shelves', [], { why: Y('f na końcu zmienia się na ves: shelf ➜ shelves.', 'f на конце меняется на ves: shelf ➜ shelves.') }),
      c.order('My clothes are in the wardrobe', 'Ułóż zdanie: Moje ubrania są w szafie', 'Составь предложение: Моя одежда в шкафу'),
      c.sort(T('Where is it? Bedroom or living room?', 'Gdzie to stoi? Sypialnia czy salon?', 'Где это стоит? Спальня или гостиная?'), { 'bedroom 🛏️': ['bed', 'wardrobe', 'desk', 'mirror'], 'living room 🛋️': ['sofa', 'carpet', 'table', 'lamp'] }),
      c.sort(T('Furniture or part of the room?', 'Meble czy część pokoju?', 'Мебель или часть комнаты?'), { 'furniture 🪑': ['sofa', 'table', 'chair', 'bed'], 'part of the room': ['window', 'door', 'floor', 'wall'] }),
      c.fix('My clothes are in the wardrop.', 'wardrop', 'wardrobe', { why: Y('ward-ROBE: na końcu "robe" (szata), nie "rop".', 'ward-ROBE: на конце "robe" (халат), не "rop".') }),
      c.fix('Look in the mirrow!', 'mirrow', 'mirror', { why: Y('mi-RR-or: dwa "r".', 'mi-RR-or: две "r".') }),
      c.fix('The shelfs are full of books.', 'shelfs', 'shelves', { why: Y('shelf ➜ shelves (f zmienia się na ves).', 'shelf ➜ shelves (f меняется на ves).') }),
      c.fix('Lily sleeps on the lamp.', 'lamp', 'sofa', { why: Y('Kot śpi na kanapie (sofa), nie na lampie. 😸', 'Кошка спит на диване (sofa), а не на лампе. 😸') }),
      c.chat({ e: '👧', name: 'Ana' }, [
        { say: 'Welcome to my room! This is my bed.', replies: ['Wow, it is big!', 'Wow, it is a pen!', "I'm from Poland."] },
        { say: 'And that is my wardrobe. My clothes are in it.', replies: ['Cool! Where are your trainers?', 'Cool! Where is your Tuesday?', 'Cool! I am a mirror.'] },
        { say: 'My trainers are under the bed. Do you like my lamp?', replies: ['Yes, it is great!', 'Yes, I am a lamp.', 'No, they are great.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u3-things', unit: U, title: 'Things and recycling', page: 38, emoji: '♻️',
    words: [
      w('bag', 'torba, plecak', 'сумка, рюкзак', '🎒'),
      w('bottle', 'butelka', 'бутылка', '🍼', { pl: 'bo-ttle: dwa "t". Czytamy "botl".', ru: 'bo-ttle: две "t". Читается "ботл".' }),
      w('watch', 'zegarek na rękę', 'наручные часы', '⌚', { pl: 'watch = zegarek (na ręce), clock = zegar ścienny.', ru: 'watch = наручные часы, clock = настенные часы.' }),
      w('keys', 'klucze', 'ключи', '🔑', { pl: 'keys są w liczbie mnogiej: Where ARE my keys?', ru: 'keys во множественном числе: Where ARE my keys?' }),
      w('glasses', 'okulary', 'очки', '👓', { pl: 'glasses = okulary (mnoga!). glass = szkło lub szklanka.', ru: 'glasses = очки (мн.ч.!). glass = стекло или стакан.' }),
      w('phone', 'telefon', 'телефон', '📱'),
      w('notebook', 'zeszyt', 'тетрадь', '📓'),
      w('paper', 'papier', 'бумага', '📰'),
      w('plastic', 'plastik', 'пластик', '🥤'),
      w('glass', 'szkło', 'стекло', '🫙'),
      w('recycling', 'recykling', 'переработка', '♻️'),
      w('bin', 'kosz na śmieci', 'мусорное ведро', '🗑️')
    ],
    sentences: [
      s('Where are my keys?', 'Gdzie są moje klucze?', 'Где мои ключи?'),
      s('The plastic bottle goes in the yellow bin.', 'Plastikowa butelka idzie do żółtego kosza.', 'Пластиковая бутылка идёт в жёлтый контейнер.'),
      s('This is my new watch.', 'To jest mój nowy zegarek.', 'Это мои новые часы.'),
      s('Paper, plastic and glass: recycling is cool!', 'Papier, plastik i szkło: recykling jest super!', 'Бумага, пластик и стекло: переработка это круто!')
    ],
    quizzes: [
      c.mcq(T('You wear them on your nose to see well.', 'Nosisz je na nosie, żeby dobrze widzieć.', 'Ты носишь их на носу, чтобы хорошо видеть.'), ['glasses', 'glass', 'keys', 'watch'], 'glasses', { big: '👓', why: Y('glasses (okulary) w liczbie mnogiej, glass to szkło.', 'glasses (очки) во множественном числе, glass это стекло.') }),
      c.mcq(T('You open the door with your...', 'Otwierasz drzwi swoim...', 'Ты открываешь дверь своим...'), ['keys', 'watch', 'phone', 'notebook'], 'keys', { big: '🚪' }),
      c.mcq(T('A newspaper goes into the ___ bin.', 'Gazeta wędruje do kosza na ___.', 'Газета идёт в мусорный бак для ___.'), ['paper', 'glass', 'plastic', 'metal'], 'paper', { big: '📰' }),
      c.mcq(T('You look at it to see the time. It is on your arm.', 'Patrzysz na niego, żeby sprawdzić czas. Jest na twojej ręce.', 'Ты смотришь на них, чтобы узнать время. Они на твоей руке.'), ['watch', 'clock', 'phone', 'bag'], 'watch', { big: '⌚' }),
      c.tf(T('"Glasses" is plural.', '"Glasses" jest w liczbie mnogiej.', '"Glasses" во множественном числе.'), true),
      c.tf(T('A plastic bottle goes in the paper bin.', 'Plastikowa butelka idzie do kosza na papier.', 'Пластиковая бутылка идёт в бак для бумаги.'), false, { why: Y('Plastic ➜ plastic bin (u nas zwykle żółty).', 'Plastic ➜ пластиковый бак (у нас обычно жёлтый).') }),
      c.type(T('Write in English: butelka / бутылка', 'Napisz po angielsku: butelka', 'Напиши по-английски: бутылка'), 'bottle'),
      c.type(T('Write in English: klucze / ключи', 'Napisz po angielsku: klucze', 'Напиши по-английски: ключи'), 'keys'),
      c.type(T('Translate: Gdzie są moje okulary?', 'Przetłumacz: Gdzie są moje okulary?', 'Переведи: Gdzie są moje okulary?'), 'Where are my glasses?', ['Where are my glasses', 'Where r my glasses?'], { why: Y('glasses to liczba mnoga, więc "are".', 'glasses во множественном числе, значит "are".') }),
      c.order('The plastic bottle goes in the bin', 'Ułóż zdanie: Plastikowa butelka idzie do kosza', 'Составь предложение: Пластиковая бутылка идёт в мусорный бак'),
      c.sort(T('Which bin?', 'Do którego kosza?', 'В какой бак?'), { 'paper 📰': ['newspaper', 'paper bag', 'notebook'], 'plastic 🥤': ['plastic bag', 'plastic bottle', 'toy car'], 'glass 🫙': ['glass bottle', 'glass jar', 'glass cup'] }),
      c.sort(T('One thing or two (or more) things?', 'Jedna rzecz czy kilka?', 'Одна вещь или несколько?'), { 'one: is': ['bag', 'bottle', 'watch', 'phone'], 'more: are': ['keys', 'glasses', 'jeans', 'trainers'] }),
      c.fix('Where is my keys?', 'is', 'are', { why: Y('keys to liczba mnoga: Where ARE my keys?', 'keys во множественном числе: Where ARE my keys?') }),
      c.fix('I need my glass to read.', 'glass', 'glasses', { why: Y('Okulary po angielsku to glasses (zawsze mnoga). Glass to szkło.', 'Очки по-английски glasses (всегда мн.ч.). Glass это стекло.') }),
      c.fix('Put the botle in the bin.', 'botle', 'bottle', { why: Y('bo-TT-le: dwa "t".', 'bo-TT-le: две "t".') }),
      c.fix('Recycle the plastc bag.', 'plastc', 'plastic', { why: Y('plas-tic: pamiętaj o "i" przed c.', 'plas-tic: не забудь "i" перед c.') }),
      c.fix('My clock is on my arm.', 'clock', 'watch', { why: Y('Zegarek na ręku to watch, ale zegar na ścianie to clock.', 'Наручные часы это watch, а настенные это clock.') }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Help! I cannot find my keys!', replies: ['Look! They are on the desk.', 'Look! It is on the desk.', 'Look! They is a desk.'] },
        { say: 'Thanks! This bottle is plastic. Which bin?', replies: ['The yellow bin, please.', 'The blue chair, please.', 'The big window, please.'] },
        { say: 'Recycling is great. Do you recycle paper?', replies: ['Yes, I do. In the blue bin.', 'Yes, I am. In the blue bin.', 'No, I have a watch.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u3-where', unit: U, title: 'Where is it?', page: 40, emoji: '📍',
    words: [
      w('in', 'w, wewnątrz', 'в, внутри', '📦', { pl: 'in = W (w środku): in the box, in the bag.', ru: 'in = В (внутри): in the box, in the bag.' }),
      w('on', 'na', 'на', '🔝', { pl: 'on = NA wierzchu: on the table, on the shelf.', ru: 'on = НА поверхности: on the table, on the shelf.' }),
      w('under', 'pod', 'под', '⬇️'),
      w('next to', 'obok', 'рядом с', '↔️', { pl: 'next to to dwa słowa. Nie "near" (blisko).', ru: 'next to это два слова. Не "near" (недалеко).' }),
      w('behind', 'za', 'за, позади', '🫣'),
      w('in front of', 'przed', 'перед', '🧍', { pl: 'in front of = trzy słowa, zawsze z "of" na końcu.', ru: 'in front of = три слова, всегда с "of" на конце.' }),
      w('between', 'między', 'между', '🥪', { pl: 'between: be-TWEEN, w środku "tween" jak "two": między dwoma rzeczami.', ru: 'between: be-TWEEN, "tween" как "two": между двумя вещами.' }),
      w('box', 'pudełko', 'коробка', '📦'),
      w('ball', 'piłka', 'мяч', '⚽'),
      w('floor', 'podłoga', 'пол', '⬜'),
      w('wall', 'ściana', 'стена', '🧱')
    ],
    sentences: [
      s('The cat is under the bed.', 'Kot jest pod łóżkiem.', 'Кошка под кроватью.'),
      s('My bag is next to the door.', 'Moja torba jest obok drzwi.', 'Моя сумка рядом с дверью.'),
      s('The ball is between the box and the chair.', 'Piłka jest między pudełkiem a krzesłem.', 'Мяч между коробкой и стулом.'),
      s('I am at home. I am not in school.', 'Jestem w domu. Nie jestem w szkole.', 'Я дома. Я не в школе.')
    ],
    quizzes: [
      c.mcq(T('Lily the cat is inside the box 🐱📦. Lily is ___ the box.', 'Kotka Lily jest w środku pudełka. Lily jest ___ pudełka.', 'Кошка Лили внутри коробки. Лили ___ коробки.'), ['in', 'on', 'under', 'behind'], 'in', { big: '📦', ...prepWhy }),
      c.mcq(T('The book is on top of the table 📖. The book is ___ the table.', 'Książka leży na stole. Książka jest ___ stołu.', 'Книга лежит на столе. Книга ___ стола.'), ['on', 'in', 'under', 'between'], 'on', { big: '📖', ...prepWhy }),
      c.mcq(T('Robbie stands 🤖 and the bed is behind him. Robbie is ___ the bed.', 'Robbie stoi, a łóżko jest za nim. Robbie jest ___ łóżka.', 'Робби стоит, а кровать позади него. Робби ___ кровати.'), ['in front of', 'behind', 'next to', 'under'], 'in front of', { big: '🤖', ...prepWhy }),
      c.mcq(T('The ball is in the middle: a chair on the left and a box on the right. The ball is...', 'Piłka jest pośrodku: krzesło po lewej, pudełko po prawej. Piłka jest...', 'Мяч посередине: стул слева, коробка справа. Мяч...'), ['between the chair and the box', 'next the chair and the box', 'in the chair and the box', 'under of the chair'], 'between the chair and the box', { big: '⚽', ...prepWhy }),
      c.tf(T('"On the table" means on top of the table.', '"On the table" znaczy na stole.', '"On the table" значит на столе.'), true),
      c.tf(T('We say "I am in home".', 'Mówimy "I am in home".', 'Мы говорим "I am in home".'), false, { why: Y('Mówimy at home (w domu), at school (w szkole). Bez "in".', 'Говорим at home (дома), at school (в школе). Без "in".') }),
      c.type(T('Write in English: pod / под', 'Napisz po angielsku: pod', 'Напиши по-английски: под'), 'under'),
      c.type(T('Write in English: obok / рядом с', 'Napisz po angielsku: obok', 'Напиши по-английски: рядом с'), 'next to'),
      c.type(T('Translate: Kot jest pod łóżkiem.', 'Przetłumacz: Kot jest pod łóżkiem.', 'Переведи: Kot jest pod łóżkiem.'), 'The cat is under the bed.', ['The cat is under the bed', 'The cat is under the bed.']),
      c.type(T('Answer: Where is your bag? (on the chair)', 'Odpowiedz: Gdzie jest twoja torba? (na krześle)', 'Ответь: Где твоя сумка? (на стуле)'), 'It is on the chair.', ["It's on the chair.", 'It is on the chair', "It's on the chair", 'My bag is on the chair.', 'Its on the chair.'], prepWhy),
      c.order('The ball is between the box and the chair', 'Ułóż zdanie: Piłka jest między pudełkiem a krzesłem', 'Составь предложение: Мяч между коробкой и стулом'),
      c.sort(T('in, on or under?', 'in, on czy under?', 'in, on или under?'), { 'in 📦': ['the box', 'the bag', 'the wardrobe'], 'on 🔝': ['the table', 'the shelf', 'the floor'], 'under ⬇️': ['the bed', 'the chair', 'the carpet'] }),
      c.sort(T('One word or more words?', 'Jedno słowo czy kilka?', 'Одно слово или несколько?'), { 'one word': ['between', 'behind', 'under', 'on'], 'two or three words': ['in front of', 'next to'] }),
      c.fix('My keys are in the table.', 'in', 'on', prepWhy),
      c.fix('I am in home now.', 'in', 'at', { why: Y('at home (w domu), at school (w szkole): stałe zwroty.', 'at home (дома), at school (в школе): устойчивые выражения.') }),
      c.fix('The ball is betwen the box and the bag.', 'betwen', 'between', { why: Y('be-TWEEN: "tween", nie "ten".', 'be-TWEEN: "tween", а не "ten".') }),
      c.fix('My shoes are on the bed. Look! They are over the floor.', 'over', 'on', prepWhy),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: "Meow! I can't find my toy mouse. Is it under the sofa?", replies: ["No, it isn't. It's behind the lamp.", 'No, I am not. It is a lamp.', "Yes, it's in home."] },
        { say: 'Oh yes! And where is my ball?', replies: ["It's in the box next to the door.", 'It is at the box and door.', "It's the ball of the box."] },
        { say: 'You are clever! Where are my glasses?', replies: ['They are on your nose!', 'It is on your nose!', 'They is under nose.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u3-possessives', unit: U, title: 'Whose is it?', page: 42, emoji: '🙋',
    words: [
      w('my', 'mój', 'мой', '🙋', { pl: 'my = mój/moja/moje. Nie mylić z "me"!', ru: 'my = мой/моя/моё. Не путай с "me"!' }),
      w('your', 'twój, wasz', 'твой, ваш', '👉'),
      w('his', 'jego', 'его', '👦', { pl: 'his = jego (chłopiec ma rzecz). her = jej (dziewczynka ma rzecz).', ru: 'his = его (вещь мальчика). her = её (вещь девочки).' }),
      w('her', 'jej', 'её', '👧'),
      w('our', 'nasz', 'наш', '👫'),
      w('their', 'ich', 'их', '👨‍👩‍👧', { pl: 'their (ich) i there (tam) brzmią tak samo, ale their = należy do nich.', ru: 'their (их) и there (там) звучат одинаково, но their = принадлежит им.' }),
      w('whose', 'czyj', 'чей', '❓', { pl: 'Whose? = Czyj? Nie mylić z who\'s (= who is).', ru: 'Whose? = Чей? Не путай с who\'s (= who is).' }),
      w('teacher', 'nauczyciel', 'учитель', '🧑‍🏫'),
      w('classmate', 'kolega z klasy', 'одноклассник', '🧑‍🎓')
    ],
    sentences: [
      s('Whose bag is it? It is Tom\'s.', 'Czyja to torba? To torba Toma.', 'Чья это сумка? Это сумка Тома.'),
      s("Ana's cat is white.", 'Kot Any jest biały.', 'Кошка Аны белая.'),
      s('This is our classroom. Their classroom is next door.', 'To jest nasza klasa. Ich klasa jest obok.', 'Это наш класс. Их класс рядом.'),
      s('He likes his dog. She likes her cat.', 'On lubi swojego psa. Ona lubi swojego kota.', 'Он любит свою собаку. Она любит свою кошку.')
    ],
    quizzes: [
      c.mcq(T('Ana has a cat. ___ cat is white.', 'Ana ma kota. ___ kot jest biały.', 'У Аны есть кошка. ___ кошка белая.'), ['Her', 'His', 'Their', 'Our'], 'Her', posWhy),
      c.mcq(T('Tom has a bike. ___ bike is red.', 'Tom ma rower. ___ rower jest czerwony.', 'У Тома есть велосипед. ___ велосипед красный.'), ['His', 'Her', 'Its', 'Your'], 'His', posWhy),
      c.mcq(T('Tom and Ana love football. ___ favourite team is Barcelona.', 'Tom i Ana kochają piłkę. ___ ulubiona drużyna to Barcelona.', 'Том и Ана любят футбол. ___ любимая команда Барселона.'), ['Their', 'Our', 'His', 'Her'], 'Their', posWhy),
      c.mcq(T('Pointing at a bag: ___ bag is this? It is Kuba\'s.', 'Pokazujesz torbę: ___ torba to jest? To torba Kuby.', 'Показываешь на сумку: ___ это сумка? Это сумка Кубы.'), ['Whose', 'Who\'s', 'Who', 'What'], 'Whose', whoseWhy),
      c.mcq(T('Choose the correct sentence.', 'Wybierz poprawne zdanie.', 'Выбери правильное предложение.'), ["It's Tom's bag.", "It's the bag of Tom.", "It's Toms bag.", "It's Tom bag."], "It's Tom's bag.", apWhy),
      c.tf(T('"Ana\'s book" means the book of Ana.', '"Ana\'s book" znaczy książka Any.', '"Ana\'s book" значит книга Аны.'), true, apWhy),
      c.tf(T('We say "his" for a girl\'s things.', 'Mówimy "his" o rzeczach dziewczynki.', 'Мы говорим "his" о вещах девочки.'), false, posWhy),
      c.type(T('Translate: Czyja to jest torba?', 'Przetłumacz: Czyja to jest torba?', 'Переведи: Czyja to jest torba?'), 'Whose bag is it?', ['Whose bag is it', 'Whose backpack is it?', 'Whose rucksack is it?'], whoseWhy),
      c.type(T('Write: To jest torba Toma.', 'Napisz po angielsku: To jest torba Toma.', 'Напиши по-английски: To jest torba Toma.'), "It's Tom's bag.", ["This is Tom's bag.", "It's Tom's bag", "It is Tom's bag.", "This is Tom's bag", "It's Toms bag."], apWhy),
      c.type(T('Answer: Whose cat is it? (Ana)', 'Odpowiedz: Czyj to kot? (Ana)', 'Ответь: Чья это кошка? (Ана)'), "It's Ana's.", ["It's Ana's cat.", "It is Ana's.", "It is Ana's cat.", "Its Ana's."], apWhy),
      c.order("Whose bag is it", 'Ułóż pytanie: Czyja to torba?', 'Составь вопрос: Чья это сумка?'),
      c.order("It is Tom's bag", 'Ułóż odpowiedź: To jest torba Toma.', 'Составь ответ: Это сумка Тома.'),
      c.sort(T('his, her or their?', 'his, her czy their?', 'his, her или their?'), { 'his (boy) 👦': ['Tom', 'Kuba', 'my brother'], 'her (girl) 👧': ['Ana', 'Lily', 'my sister'], 'their (more people) 👫': ['Tom and Ana', 'the boys', 'my parents'] }),
      c.fix('This is Toms bag.', 'Toms', "Tom's", apWhy),
      c.fix('Ana loves his cat.', 'his', 'her', posWhy),
      c.fix('Tom and Ana love her dog.', 'her', 'their', posWhy),
      c.fix('Whos bag is this?', 'Whos', 'Whose', whoseWhy),
      c.fix('This is the pen of Mickey.', 'of', "Mickey's", apWhy),
      c.chat({ e: '🐭', name: 'Mickey' }, [
        { say: 'Look! A red bag. Whose bag is it?', replies: ["It's Ana's.", "It's Ana.", 'It is of Ana.'] },
        { say: 'And whose are these trainers?', replies: ["They're Tom's.", "It's Tom's.", "They're Toms."] },
        { say: 'Is that your classroom?', replies: ["No, it isn't. It's their classroom.", 'No, it isn\'t. It\'s her classrooms.', 'Yes, he is.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u3-this-that', unit: U, title: 'This, that, these, those', page: 44, emoji: '🛍️',
    words: [
      w('this', 'ten, ta, to (blisko)', 'этот, эта (близко)', '👈', { pl: 'this /dis/ ma krótkie "i" jak w "sit".', ru: 'this /дис/ с коротким "и" как в "sit".' }),
      w('that', 'tamten (daleko)', 'тот (далеко)', '👉'),
      w('these', 'te (kilka, blisko)', 'эти (несколько, близко)', '🤲', { pl: 'these /diiz/ ma długie "ii" jak w "see". This ≠ these!', ru: 'these /дииз/ с долгим "ии" как в "see". This ≠ these!' }),
      w('those', 'tamte (kilka, daleko)', 'те (несколько, далеко)', '🔭'),
      w('how much', 'ile kosztuje', 'сколько стоит', '💷'),
      w('pound', 'funt', 'фунт', '💷', { pl: 'W Wielkiej Brytanii płacimy funtami (£): one pound, two pounds.', ru: 'В Великобритании платят фунтами (£): one pound, two pounds.' }),
      w('price', 'cena', 'цена', '🏷️'),
      w('cheap', 'tani', 'дешёвый', '🪙'),
      w('expensive', 'drogi', 'дорогой', '💎', { pl: 'ex-PEN-sive: nacisk na środku.', ru: 'ex-PEN-sive: ударение в середине.' }),
      w('shop', 'sklep', 'магазин', '🏪'),
      w('buy', 'kupować', 'покупать', '🛒', { pl: 'buy czytamy "baj", tak samo jak "by" i "bye".', ru: 'buy читается "бай", как "by" и "bye".' })
    ],
    sentences: [
      s('How much is this T-shirt? It is eight pounds.', 'Ile kosztuje ta koszulka? Osiem funtów.', 'Сколько стоит эта футболка? Восемь фунтов.'),
      s('How much are those shoes? They are twenty pounds.', 'Ile kosztują tamte buty? Dwadzieścia funtów.', 'Сколько стоят те туфли? Двадцать фунтов.'),
      s('These trainers are cool, but that bag is cheap!', 'Te adidasy są super, ale tamta torba jest tania!', 'Эти кроссовки классные, но та сумка дешёвая!'),
      s('I want to buy this watch.', 'Chcę kupić ten zegarek.', 'Я хочу купить эти часы.')
    ],
    quizzes: [
      c.mcq(T('You hold a hat in your hand 🧢. ___ is my hat.', 'Trzymasz czapkę w ręce. ___ jest moja czapka.', 'Ты держишь кепку в руке. ___ моя кепка.'), ['This', 'That', 'These', 'Those'], 'This', { big: '🧢', ...demWhy }),
      c.mcq(T('You see two boys far away in the park 🏞️. ___ are my friends.', 'Widzisz dwóch chłopców daleko w parku. ___ są moimi przyjaciółmi.', 'Ты видишь двух мальчиков далеко в парке. ___ мои друзья.'), ['Those', 'These', 'That', 'This'], 'Those', { big: '🏞️', ...demWhy }),
      c.mcq(T('You hold two sweets in your hand 🍬🍬. ___ are for you.', 'Trzymasz dwa cukierki w ręce. ___ są dla ciebie.', 'Ты держишь две конфеты в руке. ___ для тебя.'), ['These', 'Those', 'This', 'That'], 'These', { big: '🍬', ...demWhy }),
      c.mcq(T('How much ___ these socks?', 'Ile ___ te skarpetki?', 'Сколько ___ эти носки?'), ['are', 'is', 'am', 'be'], 'are', priceWhy),
      c.mcq(T('How much is the T-shirt? It is...', 'Ile kosztuje koszulka? Kosztuje...', 'Сколько стоит футболка? Она стоит...'), ['five pounds', 'five pound', 'five of pounds', 'pounds five'], 'five pounds', priceWhy),
      c.tf(T('"These" means more than one thing, near me.', '"These" znaczy kilka rzeczy blisko mnie.', '"These" значит несколько вещей рядом со мной.'), true, demWhy),
      c.tf(T('We say "How much is these shoes?"', 'Mówimy "How much is these shoes?"', 'Мы говорим "How much is these shoes?"'), false, priceWhy),
      c.type(T('Translate: Ile kosztuje ta torba?', 'Przetłumacz: Ile kosztuje ta torba?', 'Переведи: Ile kosztuje ta torba?'), 'How much is this bag?', ['How much is this bag', 'How much is that bag?'], priceWhy),
      c.type(T('Translate: Ile kosztują te buty? (blisko)', 'Przetłumacz: Ile kosztują te buty?', 'Переведи: Ile kosztują te buty?'), 'How much are these shoes?', ['How much are these shoes', 'How much are these trainers?', 'How much are those shoes?'], priceWhy),
      c.type(T('Answer: The watch is £12.', 'Odpowiedz: Zegarek kosztuje 12 funtów.', 'Ответь: Часы стоят 12 фунтов.'), 'It is twelve pounds.', ["It's twelve pounds.", 'It is twelve pounds', "It's twelve pounds", 'Twelve pounds.', 'It is 12 pounds.', "It's 12 pounds."], priceWhy),
      c.type(T('Write in English: tani / дешёвый', 'Napisz po angielsku: tani', 'Напиши по-английски: дешёвый'), 'cheap'),
      c.order('How much are those shoes', 'Ułóż pytanie: Ile kosztują tamte buty?', 'Составь вопрос: Сколько стоят те туфли?'),
      c.sort(T('this/that (one) or these/those (more)?', 'this/that (jedna) czy these/those (kilka)?', 'this/that (один) или these/those (несколько)?'), { 'one: this / that': ['this watch', 'that bag', 'this phone', 'that shop'], 'more: these / those': ['these keys', 'those shoes', 'these glasses', 'those jeans'] }),
      c.sort(T('Cheap or expensive?', 'Tanie czy drogie?', 'Дешёвое или дорогое?'), { 'cheap 🪙': ['a pen: 1 pound', 'a sweet: 20 pence', 'socks: 3 pounds'], 'expensive 💎': ['a phone: 500 pounds', 'a bike: 200 pounds', 'a laptop: 700 pounds'] }),
      c.fix('How much is these socks?', 'is', 'are', priceWhy),
      c.fix('That shoes are cool.', 'That', 'Those', demWhy),
      c.fix('It is two pound.', 'pound', 'pounds', priceWhy),
      c.fix('This are my keys.', 'This', 'These', demWhy),
      c.fix('I want to by this watch.', 'by', 'buy', { why: Y('buy = kupować (baj). by = przy, obok.', 'buy = покупать (бай). by = у, рядом.') }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Hello! Welcome to my shop. Can I help you?', replies: ['Yes, please. How much is this cap?', 'Yes, please. How much are this cap?', 'Yes, please. Whose is a cap?'] },
        { say: 'It is five pounds.', replies: ['Great! And how much are those trainers?', 'Great! And how much is those trainers?', 'Great! And what pounds are trainers?'] },
        { say: 'They are thirty pounds.', replies: ['Hmm, they are expensive. I buy the cap, please.', 'Hmm, they are cheap. I am a cap, please.', 'Hmm, it is Tuesday. Bye bye cap.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u3-test', unit: U, title: 'Test yourself', page: 49, emoji: '🏆',
    words: [], sentences: [],
    quizzes: [
      c.mcq(T('Your clothes are in the...', 'Twoje ubrania są w...', 'Твоя одежда в...'), ['wardrobe', 'carpet', 'mirror', 'lamp'], 'wardrobe', { big: '👕' }),
      c.mcq(T('The cat is inside the box. The cat is ___ the box.', 'Kot jest w środku pudełka. Kot jest ___ pudełka.', 'Кошка внутри коробки. Кошка ___ коробки.'), ['in', 'on', 'under', 'between'], 'in', { big: '🐱', ...prepWhy }),
      c.mcq(T('Tom has a ball. ___ ball is green.', 'Tom ma piłkę. ___ piłka jest zielona.', 'У Тома есть мяч. ___ мяч зелёный.'), ['His', 'Her', 'Their', 'Our'], 'His', posWhy),
      c.mcq(T('___ pen is this? It is Ana\'s.', '___ długopis to jest? To długopis Any.', '___ это ручка? Это ручка Аны.'), ['Whose', 'Who\'s', 'Who', 'Where'], 'Whose', whoseWhy),
      c.mcq(T('You point at two shoes far from you. ___ shoes are nice.', 'Wskazujesz dwa buty daleko od siebie. ___ buty są ładne.', 'Ты показываешь на две туфли далеко от тебя. ___ туфли красивые.'), ['Those', 'These', 'That', 'This'], 'Those', demWhy),
      c.tf(T('We say "I am at home".', 'Mówimy "I am at home".', 'Мы говорим "I am at home".'), true),
      c.tf(T('How much IS these socks?', 'How much IS these socks?', 'How much IS these socks?'), false, priceWhy),
      c.type(T('Write in English: okulary / очки', 'Napisz po angielsku: okulary', 'Напиши по-английски: очки'), 'glasses'),
      c.type(T('Translate: Czyj to jest zegarek?', 'Przetłumacz: Czyj to jest zegarek?', 'Переведи: Czyj to jest zegarek?'), 'Whose watch is it?', ['Whose watch is it', 'Whose watch is this?'], whoseWhy),
      c.type(T('Write: five pounds (the price £5, short answer)', 'Napisz: To kosztuje 5 funtów.', 'Напиши: Это стоит 5 фунтов.'), 'It is five pounds.', ["It's five pounds.", 'It is five pounds', "It's five pounds", "It's 5 pounds.", 'It is 5 pounds.'], priceWhy),
      c.order('The keys are on the shelf', 'Ułóż zdanie: Klucze są na półce', 'Составь предложение: Ключи на полке'),
      c.sort(T('Which word?', 'Które słowo?', 'Какое слово?'), { 'place words (in, on ...)': ['under', 'behind', 'next to', 'between'], 'owner words (my, his ...)': ['their', 'our', 'her', 'your'] }),
      c.sort(T('Which bin?', 'Do którego kosza?', 'В какой бак?'), { 'paper 📰': ['newspaper', 'notebook'], 'plastic 🥤': ['plastic bag', 'plastic bottle'], 'glass 🫙': ['glass jar', 'glass bottle'] }),
      c.fix('Where is my keys?', 'is', 'are', { why: Y('keys = liczba mnoga ➜ are.', 'keys = мн.ч. ➜ are.') }),
      c.fix('This is Toms bag.', 'Toms', "Tom's", apWhy),
      c.fix('Ana loves his cat.', 'his', 'her', posWhy),
      c.fix('My book is in the desk.', 'in', 'on', prepWhy),
      c.fix('That socks are cool.', 'That', 'Those', demWhy),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'Whose bag is that on the sofa?', replies: ["It's Ana's.", "It's Ana.", "It's of Ana."] },
        { say: 'Where are her keys?', replies: ['They are in the bag.', 'It is in the bag.', 'They is in the bag.'] },
        { say: 'How much is that watch?', replies: ['It is ten pounds.', 'They are ten pounds.', 'It is ten pound.'] }
      ])
    ]
  });
})(window.EQ);
