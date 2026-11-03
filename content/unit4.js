/* Unit 4 "Family and friends": textbook pages 50-61 (approximate). */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;
  const U = 'Unit 4: Family and friends';
  const T = (en, pl, ru) => ({ en, pl, ru });
  const Y = (pl, ru) => ({ pl, ru });
  const hairWhy = { why: Y('hair to w angielskim liczba POJEDYNCZA: My hair IS long (po polsku "włosy są", po angielsku "hair is").', 'hair в английском в ЕДИНСТВЕННОМ числе: My hair IS long (по-русски "волосы длинные", но по-английски "hair is").') };
  const hgWhy = { why: Y('I/you/we/they ➜ have got. he/she/it ➜ has got. Przeczenie: haven\'t got / hasn\'t got.', 'I/you/we/they ➜ have got. he/she/it ➜ has got. Отрицание: haven\'t got / hasn\'t got.') };
  const hgQWhy = { why: Y('Pytanie: Have you got...? Has she got...? Krótko: Yes, I have. / No, she hasn\'t. Bez "do"!', 'Вопрос: Have you got...? Has she got...? Кратко: Yes, I have. / No, she hasn\'t. Без "do"!') };
  const apWhy = { why: Y('Właściciel + \'s: Ana\'s brother (brat Any). Apostrof jest ważny!', 'Владелец + \'s: Ana\'s brother (брат Аны). Апостроф важен!') };
  const posWhy = { why: Y('his = jego (dla chłopca), her = jej (dla dziewczynki).', 'his = его (для мальчика), her = её (для девочки).') };
  const adjWhy = { why: Y('Przymiotnik przed rzeczownikiem, bez -s: long hair, brown eyes.', 'Прилагательное перед существительным, без -s: long hair, brown eyes.') };

  EQ.registerLesson({
    id: 'u4-face-hair', unit: U, title: 'Face and hair', page: 50, emoji: '🙂',
    words: [
      w('face', 'twarz', 'лицо', '🙂'),
      w('hair', 'włosy', 'волосы', '💇', { pl: 'hair = włosy, ale po angielsku LICZBA POJEDYNCZA: my hair IS long.', ru: 'hair = волосы, но в английском ЕДИНСТВЕННОЕ число: my hair IS long.' }),
      w('eyes', 'oczy', 'глаза', '👀'),
      w('nose', 'nos', 'нос', '👃'),
      w('mouth', 'usta, buzia', 'рот', '👄', { pl: 'mouth: "th" na końcu jak w "think".', ru: 'mouth: "th" на конце как в "think".' }),
      w('ears', 'uszy', 'уши', '👂'),
      w('long', 'długi', 'длинный', '📏'),
      w('short', 'krótki', 'короткий', '✂️'),
      w('curly', 'kręcone', 'кудрявые', '🌀'),
      w('straight', 'proste', 'прямые', '➖', { pl: 'straight: "gh" jest ciche. Czytamy "streit".', ru: 'straight: "gh" не читается. Читается "стрейт".' }),
      w('blond', 'jasny (blond)', 'светлые (блонд)', '👱', { pl: 'blond = jasne włosy. Dla dziewczyny też piszemy blonde, ale mówimy tak samo.', ru: 'blond = светлые волосы. Для девочки пишут blonde, но звучит так же.' }),
      w('dark', 'ciemny', 'тёмный', '🌑'),
      w('red', 'rudy, czerwony', 'рыжий, красный', '🦊', { pl: 'Rude włosy po angielsku: red hair (czerwone!).', ru: 'Рыжие волосы по-английски: red hair (красные!).' }),
      w('beard', 'broda', 'борода', '🧔', { pl: 'beard czytamy "bierd" (długie "ie").', ru: 'beard читается "бирд" (долгое "и").' })
    ],
    sentences: [
      s('Her hair is long and curly.', 'Jej włosy są długie i kręcone.', 'Её волосы длинные и кудрявые.'),
      s('He has a beard and short dark hair.', 'On ma brodę i krótkie ciemne włosy.', 'У него борода и короткие тёмные волосы.'),
      s('My little brother has big brown eyes.', 'Mój młodszy brat ma duże brązowe oczy.', 'У моего младшего брата большие карие глаза.'),
      s('Ana has straight blond hair.', 'Ana ma proste jasne włosy.', 'У Аны прямые светлые волосы.')
    ],
    quizzes: [
      c.mcq(T('Her hair ___ long and curly.', 'Jej włosy ___ długie i kręcone.', 'Её волосы ___ длинные и кудрявые.'), ['is', 'are', 'am', 'be'], 'is', hairWhy),
      c.mcq(T('Hair that goes straight down, not curly, and light yellow:', 'Włosy proste, nie kręcone, jasno żółte:', 'Волосы прямые, не кудрявые, светло-жёлтые:'), ['straight blond hair', 'curly blond hair', 'straight dark hair', 'short red hair'], 'straight blond hair', { big: '👱' }),
      c.mcq(T('He is a man with a ___.', 'To mężczyzna z ___.', 'Это мужчина с ___.'), ['beard', 'curly', 'long', 'ears'], 'beard', { big: '🧔' }),
      c.mcq(T('She has ___ hair.', 'Ona ma ___ włosy.', 'У неё ___ волосы.'), ['long dark', 'dark long', 'longs dark', 'long darks'], 'long dark', adjWhy),
      c.mcq(T('You hear with your...', 'Słyszysz swoimi...', 'Ты слышишь своими...'), ['ears', 'eyes', 'nose', 'mouth'], 'ears', { big: '👂' }),
      c.tf(T('We say "My hair are long".', 'Mówimy "My hair are long".', 'Мы говорим "My hair are long".'), false, hairWhy),
      c.tf(T('"Straight" has a silent "gh".', '"Straight" ma ciche "gh".', 'В "straight" "gh" не читается.'), true),
      c.type(T('Write in English: kręcone / кудрявые', 'Napisz po angielsku: kręcone', 'Напиши по-английски: кудрявые'), 'curly'),
      c.type(T('Write in English: broda / борода', 'Napisz po angielsku: broda', 'Напиши по-английски: борода'), 'beard'),
      c.type(T('Translate: Jej włosy są długie.', 'Przetłumacz: Jej włosy są długie.', 'Переведи: Jej włosy są długie.'), 'Her hair is long.', ['Her hair is long', 'Her hair is long.'], hairWhy),
      c.type(T('Translate: On ma brązowe oczy.', 'Przetłumacz: On ma brązowe oczy.', 'Переведи: On ma brązowe oczy.'), 'He has brown eyes.', ["He's got brown eyes.", 'He has got brown eyes.', 'He has brown eyes', "He's got brown eyes", 'He has got brown eyes'], adjWhy),
      c.order('His hair is short and dark', 'Ułóż zdanie: Jego włosy są krótkie i ciemne', 'Составь предложение: Его волосы короткие и тёмные'),
      c.sort(T('Hair or face?', 'Włosy czy twarz?', 'Волосы или лицо?'), { 'hair 💇': ['long', 'short', 'curly', 'straight'], 'face 🙂': ['eyes', 'nose', 'mouth', 'ears'] }),
      c.sort(T('Colour or shape?', 'Kolor czy kształt?', 'Цвет или форма?'), { 'colour 🎨': ['blond', 'dark', 'red', 'brown'], 'shape / length ✂️': ['curly', 'straight', 'long', 'short'] }),
      c.fix('Her hair are long.', 'are', 'is', hairWhy),
      c.fix('She has blue eyess.', 'eyess', 'eyes', { why: Y('eyes: tylko jedno "s" na końcu.', 'eyes: только одна "s" на конце.') }),
      c.fix('He has a bird.', 'bird', 'beard', { why: Y('bird = ptak, beard = broda. Brzmią podobnie, ale inne litery!', 'bird = птица, beard = борода. Звучат похоже, но буквы разные!') }),
      c.fix('She has long hairs.', 'hairs', 'hair', hairWhy),
      c.fix('Mum has curly hair and green eys.', 'eys', 'eyes', { why: Y('eyes: e-y-e-s, jak "eye" + s.', 'eyes: e-y-e-s, как "eye" + s.') }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Look at this photo. Who is this girl?', replies: ["It's Ana. Her hair is long and curly.", "It's Ana. Her hair are long and curly.", "It's Ana. His hair is curly."] },
        { say: 'And what colour are her eyes?', replies: ['Her eyes are green.', 'Her eyes is green.', 'Her eyes green are not.'] },
        { say: 'I am a robot. Have I got a nose?', replies: ["No, you haven't. You've got a metal face!", 'Yes, you has. It is a nose.', "No, you aren't. You are hair."] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u4-family', unit: U, title: 'My family', page: 52, emoji: '👨‍👩‍👧‍👦',
    words: [
      w('family', 'rodzina', 'семья', '👨‍👩‍👧‍👦'),
      w('mum', 'mama', 'мама', '👩', { pl: 'W brytyjskim angielskim: Mum. W USA: Mom.', ru: 'В британском английском: Mum. В США: Mom.' }),
      w('dad', 'tata', 'папа', '👨'),
      w('parents', 'rodzice', 'родители', '👫', { pl: 'FAŁSZYWY PRZYJACIEL: parents = rodzice, a nie "krewni" (to relatives)!', ru: 'ЛОЖНЫЙ ДРУГ: parents = родители, а не "родственники" (это relatives)!' }),
      w('brother', 'brat', 'брат', '👦'),
      w('sister', 'siostra', 'сестра', '👧'),
      w('grandma', 'babcia', 'бабушка', '👵'),
      w('grandpa', 'dziadek', 'дедушка', '👴'),
      w('aunt', 'ciocia', 'тётя', '👩‍🦰', { pl: 'aunt czytamy "ant" (jak mrówka) albo "aant". Ciocia, nie "aunta"!', ru: 'aunt читается "ант" (как муравей) или "аант".' }),
      w('uncle', 'wujek', 'дядя', '👨‍🦲'),
      w('cousin', 'kuzyn, kuzynka', 'двоюродный брат / сестра', '🧒', { pl: 'cousin dotyczy zarówno chłopca, jak i dziewczynki. Czytamy "kazyn".', ru: 'cousin и для мальчика, и для девочки. Читается "казн".' }),
      w('friend', 'przyjaciel', 'друг', '🤝', { pl: 'fri-END: "ie" jak w pie. Nie "frend"!', ru: 'fri-END: "ie" как в pie. Не "frend"!' })
    ],
    sentences: [
      s('This is my family.', 'To jest moja rodzina.', 'Это моя семья.'),
      s('My mum and dad are my parents.', 'Moja mama i mój tata to moi rodzice.', 'Мама и папа мои родители.'),
      s("My mum's sister is my aunt.", 'Siostra mojej mamy to moja ciocia.', 'Сестра моей мамы моя тётя.'),
      s('Ana is my best friend.', 'Ana jest moją najlepszą przyjaciółką.', 'Ана моя лучшая подруга.')
    ],
    quizzes: [
      c.mcq(T("Your mum's sister is your...", 'Siostra twojej mamy to twoja...', 'Сестра твоей мамы это твоя...'), ['aunt', 'cousin', 'grandma', 'sister'], 'aunt', { big: '👩‍🦰' }),
      c.mcq(T("Your uncle's son is your...", 'Syn twojego wujka to twój...', 'Сын твоего дяди это твой...'), ['cousin', 'brother', 'uncle', 'grandpa'], 'cousin', { big: '🧒' }),
      c.mcq(T('Your mum and dad are your...', 'Twoja mama i tata to twoi...', 'Твои мама и папа это твои...'), ['parents', 'relatives', 'friends', 'cousins'], 'parents', { why: Y('parents = rodzice. Krewni to relatives. Fałszywy przyjaciel!', 'parents = родители. Родственники это relatives. Ложный друг!') }),
      c.mcq(T("Your dad's father is your...", 'Ojciec twojego taty to twój...', 'Отец твоего папы это твой...'), ['grandpa', 'uncle', 'brother', 'dad'], 'grandpa', { big: '👴' }),
      c.mcq(T('This is my ___. She is my mum\'s mum.', 'To jest moja ___. To mama mojej mamy.', 'Это моя ___. Это мама моей мамы.'), ['grandma', 'aunt', 'sister', 'cousin'], 'grandma', { big: '👵' }),
      c.tf(T('"Mum" is British English, "mom" is American.', '"Mum" to brytyjski angielski, "mom" amerykański.', '"Mum" британский английский, "mom" американский.'), true),
      c.tf(T('"Parents" means aunts and uncles.', '"Parents" znaczy ciocie i wujkowie.', '"Parents" значит тёти и дяди.'), false, { why: Y('parents = tylko mama i tata. Ciocie i wujkowie to relatives.', 'parents = только мама и папа. Тёти и дяди это relatives.') }),
      c.type(T('Write in English: ciocia / тётя', 'Napisz po angielsku: ciocia', 'Напиши по-английски: тётя'), 'aunt'),
      c.type(T('Write in English: rodzice / родители', 'Napisz po angielsku: rodzice', 'Напиши по-английски: родители'), 'parents'),
      c.type(T('Translate: To jest moja babcia.', 'Przetłumacz: To jest moja babcia.', 'Переведи: To jest moja babcia.'), 'This is my grandma.', ['This is my grandmother.', 'This is my grandma', 'This is my grandmother', "It's my grandma.", 'She is my grandma.']),
      c.type(T("Complete: My dad's brother is my ___.", "Uzupełnij: My dad's brother is my ___.", "Дополни: My dad's brother is my ___."), 'uncle'),
      c.order("This is my best friend Ana", 'Ułóż zdanie: To jest moja najlepsza przyjaciółka Ana', 'Составь предложение: Это моя лучшая подруга Ана'),
      c.sort(T('Girl or boy?', 'Dziewczyna czy chłopak?', 'Девочка или мальчик?'), { 'girl 👧': ['mum', 'sister', 'grandma', 'aunt'], 'boy 👦': ['dad', 'brother', 'grandpa', 'uncle'] }),
      c.sort(T('In the family or not?', 'W rodzinie czy nie?', 'В семье или нет?'), { 'family 👨‍👩‍👧': ['cousin', 'aunt', 'parents', 'brother'], 'not family': ['friend', 'teacher', 'classmate', 'neighbour'] }),
      c.fix("My mum's sister is my uncle.", 'uncle', 'aunt', { why: Y('Siostra mamy to aunt (ciocia). Brat mamy to uncle (wujek).', 'Сестра мамы это aunt (тётя). Брат мамы это uncle (дядя).') }),
      c.fix('These are my parent.', 'parent', 'parents', { why: Y('Mama i tata to dwie osoby ➜ parents, z -s.', 'Мама и папа это два человека ➜ parents, с -s.') }),
      c.fix('Ana is my best frend.', 'frend', 'friend', { why: Y('fri-END: "ie" jak w pie.', 'fri-END: "ie" как в pie.') }),
      c.fix('This is my mom.', 'mom', 'mum', { why: Y('W brytyjskim angielskim: Mum (mom to amerykańskie).', 'В британском английском: Mum (mom американское).') }),
      c.fix('My brother and my sister is funny.', 'is', 'are', { why: Y('Dwie osoby ➜ are.', 'Два человека ➜ are.') }),
      c.chat({ e: '🐭', name: 'Mickey' }, [
        { say: "Hi! Look, it's a photo of my family. Who is this?", replies: ["That's your mum!", "That's your parents!", 'That is a aunt.'] },
        { say: "Yes! And that's my uncle. He's my dad's brother. Have you got an uncle?", replies: ["Yes, I have. He's my mum's brother.", 'Yes, I am. He is a mum.', 'No, I am not.'] },
        { say: 'Cool! Who is your best friend?', replies: ['My best friend is Kuba.', 'My best friends are aunt.', 'My best friend are Kuba.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u4-have-got', unit: U, title: 'Have got and has got', page: 54, emoji: '🐶',
    words: [
      w('pet', 'zwierzątko domowe', 'домашний питомец', '🐾'),
      w('dog', 'pies', 'собака', '🐶'),
      w('cat', 'kot', 'кошка', '🐱'),
      w('hamster', 'chomik', 'хомяк', '🐹', { pl: 'hamster: "h" jest wyraźne (oddech), nie "chomik"!', ru: 'hamster: "h" произносится (выдох), не "хомяк"!' }),
      w('rabbit', 'królik', 'кролик', '🐰'),
      w('parrot', 'papuga', 'попугай', '🦜'),
      w('bike', 'rower', 'велосипед', '🚲'),
      w('computer', 'komputer', 'компьютер', '💻'),
      w('tablet', 'tablet', 'планшет', '📱'),
      w('game', 'gra', 'игра', '🎮')
    ],
    sentences: [
      s("I've got a dog.", 'Mam psa.', 'У меня есть собака.'),
      s('She has got two brothers.', 'Ona ma dwóch braci.', 'У неё два брата.'),
      s("He hasn't got a bike.", 'On nie ma roweru.', 'У него нет велосипеда.'),
      s('Have you got a pet? Yes, I have.', 'Masz zwierzątko? Tak, mam.', 'У тебя есть питомец? Да, есть.')
    ],
    quizzes: [
      c.mcq(T('She ___ got a cat.', 'Ona ___ kota.', 'У неё ___ кошка.'), ['has', 'have', 'is', 'does'], 'has', hgWhy),
      c.mcq(T('I ___ got two brothers.', 'Ja ___ dwóch braci.', 'У меня ___ два брата.'), ['have', 'has', 'am', 'do'], 'have', hgWhy),
      c.mcq(T('Have you got a bike? Yes, I ___.', 'Masz rower? Tak, ___.', 'У тебя есть велосипед? Да, ___.'), ['have', 'has', 'am', 'do'], 'have', hgQWhy),
      c.mcq(T('Has Tom got a dog? No, he ___.', 'Czy Tom ma psa? Nie, ___.', 'У Тома есть собака? Нет, ___.'), ["hasn't", "haven't", "isn't", "doesn't"], "hasn't", hgQWhy),
      c.mcq(T('Choose the correct question.', 'Wybierz poprawne pytanie.', 'Выбери правильный вопрос.'), ['Has she got a hamster?', 'Does she got a hamster?', 'Is she got a hamster?', 'Have she got a hamster?'], 'Has she got a hamster?', hgQWhy),
      c.tf(T('We say "He have got a dog".', 'Mówimy "He have got a dog".', 'Мы говорим "He have got a dog".'), false, hgWhy),
      c.tf(T('"Have you got a pet?" is correct.', '"Have you got a pet?" jest poprawne.', '"Have you got a pet?" правильно.'), true, hgQWhy),
      c.type(T('Translate: Ona ma psa.', 'Przetłumacz: Ona ma psa.', 'Переведи: Ona ma psa.'), 'She has got a dog.', ["She's got a dog.", 'She has got a dog', "She's got a dog", 'She has a dog.'], hgWhy),
      c.type(T('Translate: Nie mam roweru.', 'Przetłumacz: Nie mam roweru.', 'Переведи: Nie mam roweru.'), "I haven't got a bike.", ['I have not got a bike.', "I haven't got a bike", 'I havent got a bike.', "I haven't a bike."], hgWhy),
      c.type(T('Answer: Have you got a brother? (Yes)', 'Odpowiedz: Masz brata? (Tak)', 'Ответь: У тебя есть брат? (Да)'), 'Yes, I have.', ['Yes I have.', 'Yes, I have', 'Yes, I have got.'], hgQWhy),
      c.type(T('Answer: Has Robbie got a nose? (No)', 'Odpowiedz: Czy Robbie ma nos? (Nie)', 'Ответь: У Робби есть нос? (Нет)'), "No, he hasn't.", ['No, he has not.', "No he hasn't.", "No, he hasn't"], hgQWhy),
      c.order("I have got a pet hamster", 'Ułóż zdanie: Mam chomika', 'Составь предложение: У меня есть хомяк'),
      c.order("Has your sister got a bike", 'Ułóż pytanie: Czy twoja siostra ma rower?', 'Составь вопрос: У твоей сестры есть велосипед?'),
      c.sort(T('have got or has got?', 'have got czy has got?', 'have got или has got?'), { 'have got': ['I', 'you', 'we', 'they'], 'has got': ['he', 'she', 'it', 'my mum'] }),
      c.sort(T('Yes or no?', 'Zdanie twierdzące czy przeczące?', 'Утверждение или отрицание?'), { 'yes ✅': ["She's got a cat.", "I've got a bike.", 'He has got a dog.'], 'no ❌': ["He hasn't got a dog.", "I haven't got a bike.", "They haven't got a cat."] }),
      c.fix('He have got a dog.', 'have', 'has', hgWhy),
      c.fix('I has got a cat.', 'has', 'have', hgWhy),
      c.fix('Have she got a bike?', 'Have', 'Has', hgQWhy),
      c.fix("My brother haven't got a bike.", "haven't", "hasn't", hgWhy),
      c.fix('Have you gots a pet?', 'gots', 'got', { why: Y('got się nie zmienia: have got, has got.', 'got не меняется: have got, has got.') }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'Meow! Have you got a pet?', replies: ["Yes, I have. I've got a dog.", 'Yes, I am. I am a dog.', 'Yes, I has. A dog.'] },
        { say: 'Cool! What is his name?', replies: ["His name's Max.", "Her name's Max.", "Its a Max dog."] },
        { say: "I haven't got a dog. I've got a hamster. Has your dog got a bike?", replies: ["No, he hasn't! He's a dog!", 'No, he haven\'t. He is a bike.', 'Yes, I have a bike dog.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u4-describe', unit: U, title: 'Describe a person', page: 56, emoji: '🕵️',
    words: [
      w('tall', 'wysoki', 'высокий', '🦒'),
      w('small', 'mały', 'маленький', '🐜'),
      w('young', 'młody', 'молодой', '🧒', { pl: 'young: "you" + ng, czytamy "jang".', ru: 'young: "you" + ng, читается "янг".' }),
      w('old', 'stary', 'старый', '🧓'),
      w('thin', 'szczupły', 'худой', '🧍'),
      w('glasses', 'okulary', 'очки', '👓'),
      w('moustache', 'wąsy', 'усы', '🥸', { pl: 'mous-tache: czytamy "mastasz", jest "ou" i "ache".', ru: 'mous-tache: читается "мэсташ".' }),
      w('smile', 'uśmiech', 'улыбка', '😊'),
      w('look like', 'wyglądać jak', 'выглядеть как', '🔍', { pl: 'What does he look like? = Jak on wygląda? (opis wyglądu).', ru: 'What does he look like? = Как он выглядит? (описание внешности).' }),
      w('best friend', 'najlepszy przyjaciel', 'лучший друг', '🤝')
    ],
    sentences: [
      s('What does your best friend look like?', 'Jak wygląda twój najlepszy przyjaciel?', 'Как выглядит твой лучший друг?'),
      s('He is tall and he has got short dark hair.', 'Jest wysoki i ma krótkie ciemne włosy.', 'Он высокий, и у него короткие тёмные волосы.'),
      s("She's got big green eyes and long straight hair.", 'Ma duże zielone oczy i długie proste włosy.', 'У неё большие зелёные глаза и длинные прямые волосы.'),
      s("Ana's grandpa has got a moustache and glasses.", 'Dziadek Any ma wąsy i okulary.', 'У дедушки Аны усы и очки.')
    ],
    quizzes: [
      c.mcq(T('Tom: short dark hair, glasses, tall. Which sentence is right?', 'Tom: krótkie ciemne włosy, okulary, wysoki. Które zdanie jest poprawne?', 'Том: короткие тёмные волосы, очки, высокий. Какое предложение правильное?'), ['Tom is tall and he has got glasses.', 'Tom is tall and he have got glasses.', 'Tom has tall and he is glasses.', 'Tom is tall and he hasn\'t got glasses.'], 'Tom is tall and he has got glasses.', { big: '🤓', ...hgWhy }),
      c.mcq(T('Ana ___ got long red hair.', 'Ana ___ długie rude włosy.', 'У Аны ___ длинные рыжие волосы.'), ['has', 'have', 'is', 'are'], 'has', hgWhy),
      c.mcq(T('Pointing at Lily the cat: ___ eyes are green.', 'Wskazujesz na kotkę Lily: ___ oczy są zielone.', 'Показываешь на кошку Лили: ___ глаза зелёные.'), ['Her', 'His', 'Their', 'Your'], 'Her', posWhy),
      c.mcq(T('What is the question for: "She is tall with long hair"?', 'Jakie jest pytanie do: "She is tall with long hair"?', 'Какой вопрос к: "She is tall with long hair"?'), ['What does she look like?', 'Who is she like?', 'What is she like with?', 'How she looks like?'], 'What does she look like?', { why: Y('What does she look like? = Jak ona wygląda?', 'What does she look like? = Как она выглядит?') }),
      c.mcq(T('This is ___ brother. He is ten.', 'To jest brat ___. Ma dziesięć lat.', 'Это брат ___. Ему десять.'), ["Ana's", 'Ana', 'Anas', 'of Ana'], "Ana's", apWhy),
      c.tf(T('"Old" is the opposite of "young".', '"Old" to przeciwieństwo "young".', '"Old" противоположность "young".'), true),
      c.tf(T('"Her hairs are long" is correct.', '"Her hairs are long" jest poprawne.', '"Her hairs are long" правильно.'), false, hairWhy),
      c.type(T('Write in English: wąsy / усы', 'Napisz po angielsku: wąsy', 'Напиши по-английски: усы'), 'moustache', ['mustache']),
      c.type(T('Write in English: wysoki / высокий', 'Napisz po angielsku: wysoki', 'Напиши по-английски: высокий'), 'tall'),
      c.type(T('Translate: Mój brat ma okulary.', 'Przetłumacz: Mój brat ma okulary.', 'Переведи: Mój brat ma okulary.'), 'My brother has got glasses.', ["My brother's got glasses.", 'My brother has glasses.', 'My brother has got glasses', "My brother's got glasses"], hgWhy),
      c.type(T("Translate: Brat Any jest wysoki.", "Przetłumacz: Brat Any jest wysoki.", "Переведи: Brat Any jest wysoki."), "Ana's brother is tall.", ["Ana's brother is tall", 'Anas brother is tall.'], apWhy),
      c.order("She has got big green eyes", 'Ułóż zdanie: Ona ma duże zielone oczy', 'Составь предложение: У неё большие зелёные глаза'),
      c.order("What does your best friend look like", 'Ułóż pytanie: Jak wygląda twój najlepszy przyjaciel?', 'Составь вопрос: Как выглядит твой лучший друг?'),
      c.sort(T('Describe: hair or person?', 'Opis: włosy czy osoba?', 'Описание: волосы или человек?'), { 'hair 💇': ['curly', 'straight', 'blond', 'dark'], 'person 🧍': ['tall', 'thin', 'young', 'old'] }),
      c.sort(T('his or her?', 'his czy her?', 'his или her?'), { 'his 👦': ['Tom\'s beard', 'my dad\'s moustache', 'grandpa\'s glasses'], 'her 👧': ['Ana\'s long hair', 'my mum\'s smile', 'grandma\'s curly hair'] }),
      c.fix("She's got a long hairs.", 'hairs', 'hair', hairWhy),
      c.fix('Her eyes is green.', 'is', 'are', { why: Y('eyes to liczba mnoga ➜ are. (hair jest pojedyncze ➜ is).', 'eyes мн.ч. ➜ are. (hair ед.ч. ➜ is).') }),
      c.fix('This is Ana brother.', 'Ana', "Ana's", apWhy),
      c.fix('My grandpa have a moustache.', 'have', 'has', hgWhy),
      c.fix('Tom loves her bike. Tom is a boy.', 'her', 'his', posWhy),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: "Let's play 'guess who'! She is tall. She has got long curly hair.", replies: ['Is it Ana?', 'It is Ana hair?', 'She is a hair.'] },
        { say: 'Yes! What does your best friend look like?', replies: ["He's short and he's got glasses.", 'He have glasses and short.', 'He looks like a glasses.'] },
        { say: "Has he got a beard?", replies: ["No, he hasn't. He's only ten!", 'No, he haven\'t. He is ten.', 'Yes, he is a beard.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u4-celebrations', unit: U, title: 'Parties around the world', page: 60, emoji: '🎉',
    words: [
      w('party', 'przyjęcie, impreza', 'вечеринка, праздник', '🎉'),
      w('cake', 'tort, ciasto', 'торт', '🎂'),
      w('present', 'prezent', 'подарок', '🎁'),
      w('balloon', 'balon', 'воздушный шарик', '🎈', { pl: 'bal-LOON: dwa "l" i dwa "o".', ru: 'bal-LOON: две "l" и две "o".' }),
      w('candle', 'świeczka', 'свеча', '🕯️', { pl: 'candle: "d" przed "l", nie "candel".', ru: 'candle: "d" перед "l", не "candel".' }),
      w('card', 'kartka', 'открытка', '💌'),
      w('guest', 'gość', 'гость', '🧑‍🤝‍🧑'),
      w('invite', 'zapraszać', 'приглашать', '📨', { pl: 'invite /inWAJT/ to czasownik. Zaproszenie to invitation.', ru: 'invite это глагол. Приглашение это invitation.' }),
      w('celebrate', 'świętować', 'праздновать', '🥳'),
      w('together', 'razem', 'вместе', '🫂')
    ],
    sentences: [
      s('We celebrate my birthday with a party.', 'Świętujemy moje urodziny przyjęciem.', 'Мы празднуем мой день рождения вечеринкой.'),
      s('My grandma makes the cake and my uncle brings the balloons.', 'Babcia piecze tort, a wujek przynosi balony.', 'Бабушка печёт торт, а дядя приносит шарики.'),
      s('In every country, families are different, but they celebrate together.', 'W każdym kraju rodziny są inne, ale świętują razem.', 'В каждой стране семьи разные, но они празднуют вместе.'),
      s('Happy birthday! Make a wish and blow out the candles!', 'Wszystkiego najlepszego! Pomyśl życzenie i zdmuchnij świeczki!', 'С днём рождения! Загадай желание и задуй свечи!')
    ],
    quizzes: [
      c.mcq(T('On your birthday you blow out the...', 'W urodziny zdmuchujesz...', 'В день рождения ты задуваешь...'), ['candles', 'cards', 'guests', 'balloons'], 'candles', { big: '🎂' }),
      c.mcq(T('Your friends and family come to your party. They are your...', 'Twoi przyjaciele i rodzina przychodzą na przyjęcie. To twoi...', 'Твои друзья и семья приходят на праздник. Они твои...'), ['guests', 'presents', 'cakes', 'parents'], 'guests', { big: '🧑‍🤝‍🧑' }),
      c.mcq(T('What do you give your cousin on her birthday?', 'Co dajesz kuzynce w urodziny?', 'Что ты даришь двоюродной сестре на день рождения?'), ['a present', 'a guest', 'a candle only', 'a shelf'], 'a present', { big: '🎁' }),
      c.mcq(T('This is my cousin. ___ birthday is in May.', 'To moja kuzynka. ___ urodziny są w maju.', 'Это моя двоюродная сестра. ___ день рождения в мае.'), ['Her', 'His', 'Their', 'My'], 'Her', posWhy),
      c.mcq(T('I ___ got a big family. We celebrate together.', 'Ja ___ dużą rodzinę. Świętujemy razem.', 'У меня ___ большая семья. Мы празднуем вместе.'), ['have', 'has', 'am', 'is'], 'have', hgWhy),
      c.tf(T('In the text, families are the same in every country.', 'W tekście rodziny są takie same w każdym kraju.', 'В тексте семьи одинаковые в каждой стране.'), false, { why: Y('Families are DIFFERENT, but they celebrate together.', 'Families are DIFFERENT, но они празднуют вместе.') }),
      c.tf(T('You make a wish before you blow out the candles.', 'Pomyślasz życzenie, zanim zdmuchniesz świeczki.', 'Ты загадываешь желание, прежде чем задуть свечи.'), true),
      c.type(T('Write in English: prezent / подарок', 'Napisz po angielsku: prezent', 'Напиши по-английски: подарок'), 'present', ['a present', 'gift']),
      c.type(T('Write in English: razem / вместе', 'Napisz po angielsku: razem', 'Напиши по-английски: вместе'), 'together'),
      c.type(T('Write in English: świeczka / свеча', 'Napisz po angielsku: świeczka', 'Напиши по-английски: свеча'), 'candle'),
      c.type(T('Translate: Babcia ma duży tort.', 'Przetłumacz: Babcia ma duży tort.', 'Переведи: Babcia ma duży tort.'), 'Grandma has got a big cake.', ["Grandma's got a big cake.", 'Grandma has a big cake.', 'My grandma has got a big cake.', "My grandma's got a big cake.", 'Grandma has got a big cake'], hgWhy),
      c.order('Happy birthday make a wish', 'Ułóż: Wszystkiego najlepszego! Pomyśl życzenie!', 'Составь: С днём рождения! Загадай желание!'),
      c.sort(T('On a party table or a bedroom?', 'Na stole imprezowym czy w sypialni?', 'На праздничном столе или в спальне?'), { 'party 🎉': ['cake', 'balloon', 'candle', 'present'], 'bedroom 🛏️': ['bed', 'wardrobe', 'lamp', 'carpet'] }),
      c.sort(T('A person or a thing?', 'Osoba czy rzecz?', 'Человек или вещь?'), { 'person 🧑': ['guest', 'cousin', 'aunt', 'friend'], 'thing 🎁': ['card', 'present', 'cake', 'balloon'] }),
      c.fix('Blow out the candels!', 'candels', 'candles', { why: Y('candle + s = candles. "d" przed "l".', 'candle + s = candles. "d" перед "l".') }),
      c.fix('I invite all my frends.', 'frends', 'friends', { why: Y('friend + s: fri-ENDS.', 'friend + s: fri-ENDS.') }),
      c.fix('Thanks for the presant!', 'presant', 'present', { why: Y('pre-SENT: "e" w środku, nie "a".', 'pre-SENT: "e" в середине, не "a".') }),
      c.fix("This is Lily present.", 'Lily', "Lily's", apWhy),
      c.chat({ e: '👧', name: 'Ana' }, [
        { say: 'My birthday party is on Saturday! Can you come?', replies: ["Yes, I can. Thanks for the invitation!", 'Yes, I am. Thanks for the pet!', 'Yes, I have. Thanks for the shelf!'] },
        { say: 'Great! My grandma makes the cake. What present do you want for your birthday?', replies: ['A new bike, please!', 'A new Tuesday, please!', 'A new blow candle, please!'] },
        { say: 'Cool! Who is your guest?', replies: ['My cousin and my best friend.', 'My cousins is a friend.', 'My best friend are a cake.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u4-test', unit: U, title: 'Test yourself', page: 61, emoji: '🏆',
    words: [], sentences: [],
    quizzes: [
      c.mcq(T('Your dad\'s sister is your...', 'Siostra twojego taty to twoja...', 'Сестра твоего папы это твоя...'), ['aunt', 'cousin', 'grandma', 'mum'], 'aunt', { big: '👩‍🦰' }),
      c.mcq(T('Her hair ___ long.', 'Jej włosy ___ długie.', 'Её волосы ___ длинные.'), ['is', 'are', 'have', 'has'], 'is', hairWhy),
      c.mcq(T('He ___ got a moustache.', 'On ___ wąsy.', 'У него ___ усы.'), ['has', 'have', 'is', 'does'], 'has', hgWhy),
      c.mcq(T('Have you got a pet? No, I ___.', 'Masz zwierzątko? Nie, ___.', 'У тебя есть питомец? Нет, ___.'), ["haven't", "hasn't", "don't", "am not"], "haven't", hgQWhy),
      c.mcq(T('This is ___ bag. (Tom has a bag.)', 'To jest torba ___. (Tom ma torbę.)', 'Это сумка ___. (У Тома есть сумка.)'), ["Tom's", 'Toms', 'Tom', 'of Tom'], "Tom's", apWhy),
      c.tf(T('"Parents" means mum and dad.', '"Parents" znaczy mama i tata.', '"Parents" значит мама и папа.'), true),
      c.tf(T('We say "Has she got a dog? Yes, she has."', 'Mówimy "Has she got a dog? Yes, she has."', 'Мы говорим "Has she got a dog? Yes, she has."'), true, hgQWhy),
      c.type(T('Write in English: wujek / дядя', 'Napisz po angielsku: wujek', 'Напиши по-английски: дядя'), 'uncle'),
      c.type(T('Translate: On ma krótkie ciemne włosy.', 'Przetłumacz: On ma krótkie ciemne włosy.', 'Переведи: On ma krótkie ciemne włosy.'), 'He has got short dark hair.', ["He's got short dark hair.", 'He has short dark hair.', 'He has got short dark hair', "He's got short dark hair"], hgWhy),
      c.type(T('Answer: Has your mum got a car? (Yes)', 'Odpowiedz: Czy twoja mama ma samochód? (Tak)', 'Ответь: У твоей мамы есть машина? (Да)'), 'Yes, she has.', ['Yes she has.', 'Yes, she has', 'Yes, she has got.'], hgQWhy),
      c.order("My brother has got curly hair", 'Ułóż zdanie: Mój brat ma kręcone włosy', 'Составь предложение: У моего брата кудрявые волосы'),
      c.sort(T('have got or has got?', 'have got czy has got?', 'have got или has got?'), { 'have got': ['I', 'we', 'they', 'you'], 'has got': ['she', 'he', 'it', 'Ana'] }),
      c.sort(T('Family or not?', 'Rodzina czy nie?', 'Семья или нет?'), { 'family 👨‍👩‍👧': ['uncle', 'grandpa', 'cousin', 'sister'], 'not family': ['friend', 'teacher', 'guest', 'neighbour'] }),
      c.fix('She have got a pet.', 'have', 'has', hgWhy),
      c.fix('Have she got a pet?', 'Have', 'Has', hgQWhy),
      c.fix('My hair are curly.', 'are', 'is', hairWhy),
      c.fix('This is Ana mum.', 'Ana', "Ana's", apWhy),
      c.fix('Tom loves her dog. Tom is a boy.', 'her', 'his', posWhy),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'Have you got a big family?', replies: ["Yes, I have. I've got two cousins.", 'Yes, I am. I am got cousins.', 'Yes, I has.'] },
        { say: 'What does your mum look like?', replies: ['She is tall and she has got long hair.', 'She have long hairs.', 'She looks hair tall.'] },
        { say: "Is Ana's brother tall?", replies: ["No, he isn't. He's small.", 'No, he haven\'t. He is small.', 'Yes, she is tall.'] }
      ])
    ]
  });

})(window.EQ);
