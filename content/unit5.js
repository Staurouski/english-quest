/* Unit 5 "Me and my food", textbook pages 64-77. */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;
  const Q = function (en, pl, ru) { return { en: en, pl: pl, ru: ru }; };
  const U = 'Unit 5: Me and my food';
  const aAn = { pl: 'an stoi przed GŁOSKĄ samogłoskową (an apple, an orange), a przed spółgłoską jest a (a banana). Liczy się dźwięk, nie litera!', ru: 'an стоит перед гласным ЗВУКОМ (an apple, an orange), а перед согласным a (a banana). Важен звук, а не буква!' };
  const unc = { pl: 'Rzeczy niepoliczalne (milk, rice, bread) nie mają a/an ani -s. Mówimy: some milk, a lot of rice.', ru: 'Неисчисляемые слова (milk, rice, bread) без a/an и без -s. Говорим: some milk, a lot of rice.' };
  const someAny = { pl: 'some w zdaniach twierdzących; any w przeczeniach i pytaniach (I haven\'t got any, Have you got any?).', ru: 'some в утверждениях; any в отрицаниях и вопросах (I haven\'t got any, Have you got any?).' };
  const thereIs = { pl: 'there is + liczba pojedyncza lub rzecz niepoliczalna; there are + liczba mnoga. Nie mówimy "have" ani "is" bez there.', ru: 'there is + единственное число или неисчисляемое; there are + множественное число. Не говорим "have" и не пропускаем there.' };
  const wouldLike = { pl: 'I\'d like = I would like: grzeczna prośba w kawiarni. Po niej rzeczownik (I\'d like a pizza) albo to + czasownik.', ru: 'I\'d like = I would like: вежливая просьба в кафе. После неё существительное (I\'d like a pizza).' };

  EQ.registerLesson({
    id: 'u5-food', unit: U, title: 'Food and drink', page: 64, emoji: '🍽️',
    words: [
      w('bread', 'chleb', 'хлеб', '🍞'),
      w('butter', 'masło', 'масло', '🧈', { pl: 'butter to masło (nie "butelka"!). Czyta się "báter".', ru: 'butter это сливочное масло. Читается "бАтэр".' }),
      w('cheese', 'ser', 'сыр', '🧀', { pl: 'cheese: ch jak w "church", potem długie "i": "czi:z"', ru: 'cheese: читается "чиз", ee даёт долгий звук и' }),
      w('egg', 'jajko', 'яйцо', '🥚'),
      w('milk', 'mleko', 'молоко', '🥛'),
      w('water', 'woda', 'вода', '💧', { pl: 'water czyta się "łoter", nie "wejter"', ru: 'water читается "вОтэ", a не "ватер"' }),
      w('juice', 'sok', 'сок', '🧃', { pl: 'j-u-i-c-e: czyta się "dżu:s", litera i milczy', ru: 'j-u-i-c-e: читается "джус", буква i не читается' }),
      w('rice', 'ryż', 'рис', '🍚', { pl: 'rice (ryż) i rise (wstawać) brzmią podobnie. Ryż ma "c"!', ru: 'rice (рис) и rise (вставать) похожи. У риса буква "c"!' }),
      w('pasta', 'makaron', 'макароны', '🍝'),
      w('chicken', 'kurczak', 'курица', '🍗', { pl: 'chicken: "czikin". Po polsku "ki" na końcu, po angielsku "ken".', ru: 'chicken: читается "чИкин"' }),
      w('fish', 'ryba', 'рыба', '🐟'),
      w('salad', 'sałatka', 'салат', '🥗', { pl: 'salad to SAŁATKA (danie), a sałata w ogrodzie to lettuce.', ru: 'salad это салат как блюдо, а салат-латук это lettuce.' }),
      w('sandwich', 'kanapka', 'бутерброд', '🥪', { pl: 'sand-wich: "w" milczy! Liczba mnoga: sandwiches.', ru: 'sand-wich: буква "w" не читается! Мн. число: sandwiches.' })
    ],
    sentences: [
      s('I drink milk for breakfast.', 'Piję mleko na śniadanie.', 'Я пью молоко на завтрак.'),
      s('My dad makes great pasta.', 'Mój tata robi świetny makaron.', 'Мой папа делает отличные макароны.'),
      s('I like cheese sandwiches.', 'Lubię kanapki z serem.', 'Я люблю бутерброды с сыром.'),
      s('Fish and rice is my favourite lunch.', 'Ryba z ryżem to mój ulubiony lunch.', 'Рыба с рисом мой любимый обед.')
    ],
    quizzes: [
      c.mcq(Q('You drink it. It is white and comes from a cow.', 'Pijesz to. Jest białe i pochodzi od krowy.', 'Это пьют. Оно белое, его дают коровы.'), ['milk', 'juice', 'water', 'butter'], 'milk', { big: '🐄' }),
      c.mcq(Q('What is it?', 'Co to jest?', 'Что это?'), ['chicken', 'fish', 'egg', 'cheese'], 'chicken', { big: '🍗' }),
      c.mcq(Q('Which word means "kanapka"?', 'Które słowo znaczy "kanapka"?', 'Какое слово значит "бутерброд"?'), ['sandwich', 'sandwitch', 'sanwich', 'sandwish'], 'sandwich', { big: '🥪' }),
      c.mcq(Q('Which word means "ryż"?', 'Które słowo znaczy "ryż"?', 'Какое слово значит "рис"?'), ['rice', 'rise', 'ride', 'price'], 'rice', { big: '🍚' }),
      c.mcq(Q('Hens give us...', 'Kury dają nam...', 'Куры дают нам...'), ['eggs', 'cheese', 'bread', 'rice'], 'eggs', { big: '🐔' }),
      c.tf(Q('Juice is a drink.', 'Sok to napój.', 'Сок это напиток.'), true),
      c.tf(Q('Butter is a drink.', 'Masło to napój.', 'Масло это напиток.'), false, { why: { pl: 'butter = masło. Masło jemy, nie pijemy!', ru: 'butter = масло. Его едят, а не пьют!' } }),
      c.type(Q('Write in English: ser / сыр', 'Napisz po angielsku: ser', 'Напиши по-английски: сыр'), 'cheese'),
      c.type(Q('Write in English: chleb / хлеб', 'Napisz po angielsku: chleb', 'Напиши по-английски: хлеб'), 'bread'),
      c.type(Q('Write in English: kurczak / курица', 'Napisz po angielsku: kurczak', 'Напиши по-английски: курица'), 'chicken'),
      c.order('I like cheese sandwiches', 'Ułóż zdanie: Lubię kanapki z serem', 'Составь предложение: Я люблю бутерброды с сыром'),
      c.order('I drink milk for breakfast', 'Ułóż zdanie: Piję mleko na śniadanie', 'Составь предложение: Я пью молоко на завтрак'),
      c.sort(Q('Eat or drink?', 'Jemy czy pijemy?', 'Едим или пьём?'), { 'eat 🍴': ['bread', 'cheese', 'rice', 'pasta', 'fish'], 'drink 🥤': ['milk', 'water', 'juice'] }),
      c.sort(Q('Animal or plant?', 'Od zwierzęcia czy z rośliny?', 'От животного или из растения?'), { 'animal 🐄': ['milk', 'cheese', 'egg', 'chicken', 'fish'], 'plant 🌱': ['bread', 'rice', 'salad', 'juice'] }),
      c.fix('I eat a rice for dinner.', 'a', 'some', { why: unc }),
      c.fix('I like chiken sandwiches.', 'chiken', 'chicken'),
      c.fix('I have a sandwitch for lunch.', 'sandwitch', 'sandwich', { why: { pl: 'sand-WICH: na końcu "wich", bez "t".', ru: 'sand-WICH: в конце "wich", без "t".' } }),
      c.fix('My mum makes great sallad.', 'sallad', 'salad'),
      c.fix('We have two breads on the table.', 'breads', 'bread', { why: unc }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'I am hungry! Do you have a sandwich?', replies: ['Yes, I do. Here you are!', 'Yes, I am.', "No, it isn't."] },
        { say: 'Thanks! What do you drink with lunch?', replies: ['Water or juice.', 'In the kitchen.', "At one o'clock."] },
        { say: 'Do you like fish?', replies: ["No, I don't. I like chicken.", "No, I'm not.", 'Yes, it is.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u5-meals', unit: U, title: 'Meals and healthy food', page: 66, emoji: '🥕',
    words: [
      w('breakfast', 'śniadanie', 'завтрак', '🥣', { pl: 'break + fast: "przerwanie postu" po całej nocy!', ru: 'break + fast: "прервать пост" после целой ночи!' }),
      w('lunch', 'drugie śniadanie / lunch', 'второй завтрак / обед', '🍱'),
      w('dinner', 'obiad / kolacja', 'ужин / обед', '🍽️', { pl: 'dinner to główny posiłek dnia, w Anglii zwykle wieczorem. Polski "obiad" to często lunch.', ru: 'dinner это главный приём пищи, в Англии обычно вечером.' }),
      w('snack', 'przekąska', 'перекус', '🍿'),
      w('healthy', 'zdrowy', 'полезный', '🥦', { pl: 'health = zdrowie, healthy = zdrowy. Dodaj -y.', ru: 'health = здоровье, healthy = здоровый, полезный.' }),
      w('unhealthy', 'niezdrowy', 'вредный', '🍟', { pl: 'un- na początku to "nie": un + healthy.', ru: 'un- в начале это "не": un + healthy.' }),
      w('picnic', 'piknik', 'пикник', '🧺'),
      w('apple', 'jabłko', 'яблоко', '🍎'),
      w('banana', 'banan', 'банан', '🍌'),
      w('orange', 'pomarańcza', 'апельсин', '🍊', { pl: 'orange to owoc i kolor pomarańczowy. Przed nim stoi an!', ru: 'orange это и фрукт, и оранжевый цвет. Перед ним an!' }),
      w('carrot', 'marchewka', 'морковка', '🥕', { pl: 'carrot: dwa "r" w środku, czyta się "kerit".', ru: 'carrot: два "r" в середине, читается "кЭрит".' }),
      w('tomato', 'pomidor', 'помидор', '🍅'),
      w('potato', 'ziemniak', 'картошка', '🥔'),
      w('chocolate', 'czekolada', 'шоколад', '🍫', { pl: 'chocolate: czyta się "czoklit", środkowe o i a prawie nie słychać.', ru: 'chocolate: читается "чОклит", середина почти не слышна.' })
    ],
    sentences: [
      s('I have breakfast at seven o\'clock.', 'Jem śniadanie o siódmej.', 'Я завтракаю в семь часов.'),
      s('Carrots and apples are healthy.', 'Marchewki i jabłka są zdrowe.', 'Морковь и яблоки полезны.'),
      s('Chocolate is tasty but unhealthy.', 'Czekolada jest smaczna, ale niezdrowa.', 'Шоколад вкусный, но вредный.'),
      s('We have a picnic in the park.', 'Urządzamy piknik w parku.', 'Мы устраиваем пикник в парке.'),
      s('An apple a day keeps the doctor away.', 'Jedno jabłko dziennie i lekarz niepotrzebny.', 'Одно яблоко в день и доктор не нужен.')
    ],
    quizzes: [
      c.mcq(Q('The first meal of the day is...', 'Pierwszy posiłek dnia to...', 'Первый приём пищи за день это...'), ['breakfast', 'lunch', 'dinner', 'snack'], 'breakfast', { big: '🌅' }),
      c.mcq(Q('Which food is healthy?', 'Które jedzenie jest zdrowe?', 'Какая еда полезная?'), ['a carrot', 'chocolate', 'a burger', 'sweets'], 'a carrot', { big: '🥕' }),
      c.mcq(Q('Which word means "niezdrowy"?', 'Które słowo znaczy "niezdrowy"?', 'Какое слово значит "вредный"?'), ['unhealthy', 'healthy', 'unhappy', 'health'], 'unhealthy'),
      c.mcq(Q('___ orange', '___ orange', '___ orange'), ['an', 'a', 'the', 'some'], 'an', { big: '🍊', why: { pl: aAn.pl, ru: aAn.ru } }),
      c.mcq(Q('___ banana', '___ banana', '___ banana'), ['a', 'an', 'two', 'any'], 'a', { big: '🍌', why: { pl: aAn.pl, ru: aAn.ru } }),
      c.tf(Q('Potatoes are tomatoes.', 'Ziemniaki to pomidory.', 'Картошка это помидоры.'), false),
      c.tf(Q('You eat a picnic.', 'Piknik się je.', 'Пикник едят.'), false, { why: { pl: 'picnic to piknik: robimy go na trawie, a jemy na nim kanapki.', ru: 'picnic это пикник: его устраивают на траве, а едят на нём бутерброды.' } }),
      c.type(Q('Write in English: marchewka / морковка', 'Napisz po angielsku: marchewka', 'Напиши по-английски: морковка'), 'carrot'),
      c.type(Q('Write in English: zdrowy / полезный', 'Napisz po angielsku: zdrowy', 'Напиши по-английски: полезный'), 'healthy'),
      c.type(Q('Write in English: czekolada / шоколад', 'Napisz po angielsku: czekolada', 'Напиши по-английски: шоколад'), 'chocolate'),
      c.order('Carrots and apples are healthy', 'Ułóż zdanie: Marchewki i jabłka są zdrowe', 'Составь предложение: Морковь и яблоки полезны'),
      c.order('We have a picnic in the park', 'Ułóż zdanie: Urządzamy piknik w parku', 'Составь предложение: Мы устраиваем пикник в парке'),
      c.sort(Q('Healthy or unhealthy?', 'Zdrowe czy niezdrowe?', 'Полезное или вредное?'), { 'healthy 💪': ['apple', 'carrot', 'tomato', 'banana'], 'unhealthy 🍬': ['chocolate', 'crisps', 'cola', 'sweets'] }),
      c.sort(Q('a or an?', 'a czy an?', 'a или an?'), { 'a': ['banana', 'tomato', 'carrot', 'potato'], 'an': ['apple', 'orange', 'egg'] }),
      c.fix('I eat a orange every day.', 'a', 'an', { why: aAn }),
      c.fix('Carrots is healthy.', 'is', 'are', { why: { pl: 'Carrots to liczba mnoga, więc are (nie is).', ru: 'Carrots это множественное число, поэтому are (не is).' } }),
      c.fix('I have a banan for lunch.', 'banan', 'banana'),
      c.fix('We have dinner in the morning at six.', 'morning', 'evening', { why: { pl: 'dinner jemy wieczorem: in the evening.', ru: 'dinner едим вечером: in the evening.' } }),
      c.fix('Chocolate is healthy.', 'healthy', 'unhealthy', { why: { pl: 'Czekolada ma dużo cukru, więc jest unhealthy.', ru: 'В шоколаде много сахара, поэтому он unhealthy.' } }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'What do you have for breakfast?', replies: ['I have bread and an egg.', "I'm in the kitchen.", 'It is seven.'] },
        { say: 'Is that healthy?', replies: ['Yes, it is.', 'Yes, I do.', "No, I'm not."] },
        { say: 'I love chocolate! Is it healthy?', replies: ['No, it is unhealthy.', 'No, I am unhealthy.', 'Yes, I am a banana.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u5-some', unit: U, title: 'Some, any, a lot of', page: 68, emoji: '🧺',
    words: [
      w('pizza', 'pizza', 'пицца', '🍕', { pl: 'pizza: po angielsku "pi:tsa", nie "pidza".', ru: 'pizza: читается "пИтса".' }),
      w('ice cream', 'lody', 'мороженое', '🍦', { pl: 'ice cream to dwa słowa i liczba pojedyncza. Po polsku lody są w mnogiej.', ru: 'ice cream это два слова и единственное число.' }),
      w('soup', 'zupa', 'суп', '🍲'),
      w('crisps', 'chipsy', 'чипсы', '🥔', { pl: 'crisps = chipsy (UK). Chips = frytki!', ru: 'crisps = чипсы (UK). Chips = жареная картошка!' }),
      w('sweets', 'słodycze', 'конфеты', '🍬'),
      w('cake', 'ciasto / tort', 'торт', '🍰'),
      w('biscuit', 'ciastko', 'печенье', '🍪', { pl: 'biscuit: czyta się "biskit", u milczy.', ru: 'biscuit: читается "бИскит", u не читается.' }),
      w('burger', 'burger', 'бургер', '🍔'),
      w('strawberry', 'truskawka', 'клубника', '🍓', { pl: 'straw + berry = słomka + jagoda', ru: 'straw + berry = соломинка + ягода' }),
      w('grapes', 'winogrona', 'виноград', '🍇', { pl: 'grapes jest w liczbie mnogiej: some grapes.', ru: 'grapes во множественном числе: some grapes.' }),
      w('lemon', 'cytryna', 'лимон', '🍋', { pl: 'lemon to cytryna. Lemoniada to lemonade.', ru: 'lemon это лимон. Лимонад это lemonade.' }),
      w('sugar', 'cukier', 'сахар', undefined, { pl: 'sugar: czyta się "szuger", a nie "sjugar".', ru: 'sugar: читается "шУга".' })
    ],
    sentences: [
      s('There is some soup in the kitchen.', 'W kuchni jest trochę zupy.', 'На кухне есть немного супа.'),
      s('Have we got any eggs?', 'Czy mamy jakieś jajka?', 'У нас есть яйца?'),
      s("I haven't got any sweets.", 'Nie mam żadnych słodyczy.', 'У меня нет конфет.'),
      s('I eat a lot of fruit.', 'Jem dużo owoców.', 'Я ем много фруктов.'),
      s('I want some ice cream, please.', 'Poproszę trochę lodów.', 'Я хочу немного мороженого, пожалуйста.')
    ],
    quizzes: [
      c.mcq(Q("We've got ___ biscuits.", 'Mamy ___ ciastka.', 'У нас есть ___ печенье.'), ['some', 'any', 'a', 'an'], 'some', { big: '🍪', why: someAny }),
      c.mcq(Q("We haven't got ___ crisps.", 'Nie mamy ___ chipsów.', 'У нас нет ___ чипсов.'), ['any', 'some', 'a', 'an'], 'any', { why: someAny }),
      c.mcq(Q('Have you got ___ lemons?', 'Czy masz ___ cytryny?', 'У тебя есть ___ лимоны?'), ['any', 'some', 'a', 'an'], 'any', { big: '🍋', why: someAny }),
      c.mcq(Q('Which one is uncountable?', 'Które słowo jest niepoliczalne?', 'Какое слово неисчисляемое?'), ['sugar', 'biscuit', 'burger', 'strawberry'], 'sugar', { why: unc }),
      c.mcq(Q('Which one is countable?', 'Które słowo jest policzalne?', 'Какое слово исчисляемое?'), ['strawberry', 'soup', 'sugar', 'ice cream'], 'strawberry', { big: '🍓', why: unc }),
      c.tf(Q('"Two sugars" is correct for sugar in your tea.', '"Two sugars" jest poprawne.', '"Two sugars" правильно.'), true, { why: { pl: 'Kiedy mówimy o łyżeczkach lub kostkach, sugar może być policzalne: two sugars, please. Ale zwykle: some sugar.', ru: 'Когда речь о ложках или кусочках, sugar можно считать: two sugars, please. Обычно: some sugar.' } }),
      c.tf(Q('We say "a lot of" in positive and negative sentences.', 'Mówimy "a lot of" w zdaniach twierdzących i przeczących.', '"A lot of" говорим в утверждениях и отрицаниях.'), true, { why: { pl: 'a lot of = dużo, pasuje do policzalnych i niepoliczalnych: a lot of grapes, a lot of soup.', ru: 'a lot of = много, подходит к исчисляемым и неисчисляемым: a lot of grapes, a lot of soup.' } }),
      c.type(Q('I eat ___ of fruit. (dużo / много)', 'Jem ___ owoców. (dużo)', 'Я ем ___ фруктов. (много) Write 3 words.'), 'a lot of'),
      c.type(Q('Write in English: truskawka / клубника', 'Napisz po angielsku: truskawka', 'Напиши по-английски: клубника'), 'strawberry'),
      c.type(Q('Write in English: lody / мороженое', 'Napisz po angielsku: lody', 'Напиши по-английски: мороженое'), 'ice cream', ['icecream', 'an ice cream']),
      c.order('Have we got any eggs', 'Ułóż pytanie: Czy mamy jakieś jajka?', 'Составь вопрос: У нас есть яйца?'),
      c.order("I haven't got any sweets", 'Ułóż zdanie: Nie mam żadnych słodyczy', 'Составь предложение: У меня нет конфет'),
      c.sort(Q('Countable or uncountable?', 'Policzalne czy niepoliczalne?', 'Исчисляемое или нет?'), { 'countable (1, 2, 3...)': ['biscuit', 'burger', 'strawberry', 'lemon'], 'uncountable': ['soup', 'sugar', 'ice cream', 'pasta'] }),
      c.sort(Q('some or any?', 'some czy any?', 'some или any?'), { 'some (+)': ['I\'ve got ___ cake.', 'We have ___ soup.', 'There is ___ juice.'], 'any (- / ?)': ['Have you got ___ pizza?', "We haven't got ___ milk.", 'Is there ___ sugar?'] }),
      c.fix("I haven't got some sweets.", 'some', 'any', { why: someAny }),
      c.fix('Have you got some strawberries?', 'some', 'any', { why: someAny }),
      c.fix('I want a ice cream, please.', 'a', 'an', { why: { pl: 'ice cream zaczyna się samogłoską "ai", więc an.', ru: 'ice cream начинается с гласного звука "ай", поэтому an.' } }),
      c.fix('We have a lot of sugars in the kitchen.', 'sugars', 'sugar', { why: unc }),
      c.fix('She eats a lot of grape.', 'grape', 'grapes', { why: { pl: 'a lot of + liczba mnoga: grapes (winogron jest dużo).', ru: 'a lot of + множественное число: grapes (винограда много).' } }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Mickey wants to make a cake. Have we got any eggs?', replies: ["Yes, we've got some eggs.", "Yes, we haven't.", 'No, we have some.'] },
        { say: 'Have we got any sugar?', replies: ["No, we haven't got any sugar.", "No, we haven't got some sugar.", 'Yes, we have a sugar.'] },
        { say: 'Oh no! What can we do?', replies: ["Let's buy some sugar!", "Let's buy a sugar!", "Let's buy any sugar."] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u5-there', unit: U, title: 'There is, there are', page: 70, emoji: '🧊',
    words: [
      w('fridge', 'lodówka', 'холодильник', '🧊', { pl: 'fridge: czyta się "frydż", d milczy.', ru: 'fridge: читается "фридж", d не читается.' }),
      w('kitchen', 'kuchnia', 'кухня', '🍳'),
      w('lunch box', 'pudełko śniadaniowe', 'ланч-бокс', '🍱'),
      w('bottle', 'butelka', 'бутылка', '🍼'),
      w('plate', 'talerz', 'тарелка', '🍽️'),
      w('bowl', 'miska', 'миска', '🥣', { pl: 'bowl: czyta się "boul", nie "bałl". Pasuje do zupy.', ru: 'bowl: читается "боул". Для супа.' }),
      w('spoon', 'łyżka', 'ложка', '🥄'),
      w('fork', 'widelec', 'вилка', '🍴'),
      w('knife', 'nóż', 'нож', '🔪', { pl: 'knife: k na początku milczy! Czyta się "najf".', ru: 'knife: k в начале не читается! Читается "найф".' }),
      w('cup', 'filiżanka / kubek', 'чашка', '☕')
    ],
    sentences: [
      s('There is some cheese in the fridge.', 'W lodówce jest trochę sera.', 'В холодильнике есть немного сыра.'),
      s('There are two apples in my lunch box.', 'W moim pudełku są dwa jabłka.', 'В моём ланч-боксе два яблока.'),
      s("There isn't any milk in the bottle.", 'W butelce nie ma mleka.', 'В бутылке нет молока.'),
      s('Is there a spoon on the table? Yes, there is.', 'Czy na stole jest łyżka? Tak, jest.', 'На столе есть ложка? Да, есть.'),
      s('Are there any cups? No, there aren\'t.', 'Czy są jakieś kubki? Nie, nie ma.', 'Есть чашки? Нет, нет.')
    ],
    quizzes: [
      c.mcq(Q('There ___ a banana in my bag.', 'W mojej torbie ___ banan.', 'В моей сумке ___ банан.'), ['is', 'are', 'have', 'has'], 'is', { why: thereIs }),
      c.mcq(Q('There ___ three eggs in the fridge.', 'W lodówce ___ trzy jajka.', 'В холодильнике ___ три яйца.'), ['are', 'is', 'have', 'be'], 'are', { big: '🥚', why: thereIs }),
      c.mcq(Q('___ there any milk in the bottle?', '___ jakieś mleko w butelce?', '___ молоко в бутылке?'), ['Is', 'Are', 'Do', 'Have'], 'Is', { big: '🍼', why: thereIs }),
      c.mcq(Q('Are there any crisps? ➜ No, ___.', 'Czy są chipsy? ➜ Nie, ___.', 'Есть чипсы? ➜ Нет, ___.'), ["there aren't", "there isn't", "they aren't", "it isn't"], "there aren't", { why: { pl: 'Odpowiedź krótka: Yes, there are. / No, there aren\'t. Dla liczby mnogiej: are.', ru: 'Краткий ответ: Yes, there are. / No, there aren\'t. Для мн. числа: are.' } }),
      c.mcq(Q('You eat soup with a...', 'Zupę jemy...', 'Суп едят...'), ['spoon', 'fork', 'knife', 'plate'], 'spoon', { big: '🥄' }),
      c.tf(Q('"There are some milk in the fridge" is correct.', '"There are some milk in the fridge" jest poprawne.', '"There are some milk in the fridge" правильно.'), false, { why: thereIs }),
      c.tf(Q('We say "There is a fork on the table".', 'Mówimy "There is a fork on the table".', 'Мы говорим "There is a fork on the table".'), true),
      c.type(Q('There ___ two knives on the table. (is / are)', 'Na stole ___ dwa noże.', 'На столе ___ два ножа.'), 'are', [], { why: thereIs }),
      c.type(Q('Is there a cup? Short answer: Yes, ___ ___.', 'Is there a cup? Krótka odpowiedź: Yes, ___ ___.', 'Is there a cup? Краткий ответ: Yes, ___ ___.'), 'there is', []),
      c.type(Q('Write in English: lodówka / холодильник', 'Napisz po angielsku: lodówka', 'Напиши по-английски: холодильник'), 'fridge'),
      c.order('There are two apples in my lunch box', 'Ułóż zdanie: W moim pudełku są dwa jabłka', 'Составь предложение: В моём ланч-боксе два яблока'),
      c.order("There isn't any milk in the bottle", 'Ułóż zdanie: W butelce nie ma mleka', 'Составь предложение: В бутылке нет молока'),
      c.sort(Q('is or are?', 'is czy are?', 'is или are?'), { 'There is...': ['a plate', 'some bread', 'a bottle', 'some soup'], 'There are...': ['two cups', 'three spoons', 'some apples', 'four eggs'] }),
      c.sort(Q('Table or fridge?', 'Na stole czy w lodówce?', 'На столе или в холодильнике?'), { 'on the table 🍽️': ['plate', 'fork', 'knife', 'spoon'], 'in the fridge 🧊': ['cheese', 'milk', 'butter', 'eggs'] }),
      c.fix('In my lunch box have a sandwich.', 'have', 'is', { why: { pl: 'Po polsku "jest" ale po angielsku There is: In my lunch box there is a sandwich. Nie używamy "have".', ru: 'По-русски "есть", а по-английски There is: In my lunch box there is a sandwich. "Have" тут не нужно.' } }),
      c.fix('There is three spoons on the table.', 'is', 'are', { why: thereIs }),
      c.fix('Is a banana in the bag?', 'Is', 'Is there', { why: thereIs }),
      c.fix("There aren't any milk in the fridge.", 'aren\'t', "isn't", { why: thereIs }),
      c.fix('There are a knife on the plate.', 'are', 'is', { why: thereIs }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: "Hi! I'm in the kitchen. What's in the fridge?", replies: ['There is some cheese and some milk.', 'There have cheese.', 'It is a fridge.'] },
        { say: 'Are there any eggs?', replies: ["Yes, there are. There are six.", 'Yes, there is.', "No, they aren't eggs."] },
        { say: 'Is there any chocolate?', replies: ["No, there isn't. Sorry!", "No, there aren't.", "Yes, I'm chocolate."] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u5-cafe', unit: U, title: 'At the cafe: I\'d like...', page: 72, emoji: '☕',
    words: [
      w('menu', 'menu', 'меню', '📋'),
      w('waiter', 'kelner', 'официант', '🤵'),
      w('waitress', 'kelnerka', 'официантка', '🤵‍♀️'),
      w('bill', 'rachunek', 'счёт', '🧾', { pl: 'bill to rachunek (nie banknot).', ru: 'bill это счёт в кафе.' }),
      w('tea', 'herbata', 'чай', '🍵', { pl: 'tea czyta się "ti:", jak litera T.', ru: 'tea читается "ти", как буква T.' }),
      w('hot chocolate', 'gorąca czekolada', 'горячий шоколад', '☕'),
      w('milkshake', 'koktajl mleczny', 'молочный коктейль', '🥤'),
      w('hungry', 'głodny', 'голодный', '😋', { pl: 'hungry (głodny) i angry (zły) są podobne. Głód = hungry.', ru: 'hungry (голодный) и angry (злой) похожи. Голод = hungry.' }),
      w('thirsty', 'spragniony', 'хотящий пить', '🥵', { pl: 'thirsty: th jak w "three", potem "ir": "Tersti".', ru: 'thirsty: th как в three, потом "ir": "Тёсти".' }),
      w('please', 'proszę', 'пожалуйста', '🙏')
    ],
    sentences: [
      s("I'd like a milkshake, please.", 'Poproszę koktajl mleczny.', 'Я бы хотел молочный коктейль, пожалуйста.'),
      s('Would you like tea or juice?', 'Czy chcesz herbatę czy sok?', 'Хочешь чай или сок?'),
      s('Yes, please. / No, thank you.', 'Tak, proszę. / Nie, dziękuję.', 'Да, пожалуйста. / Нет, спасибо.'),
      s('Can I have the bill, please?', 'Czy mogę prosić rachunek?', 'Можно счёт, пожалуйста?'),
      s('Here you are.', 'Proszę (podając coś).', 'Пожалуйста (когда подаёшь).')
    ],
    quizzes: [
      c.mcq(Q("You're hungry. The waiter asks: What would you like?", 'Jesteś głodny. Kelner pyta: What would you like?', 'Ты голоден. Официант спрашивает: What would you like?'), ["I'd like a sandwich, please.", "I'm a sandwich.", 'I have a sandwich table.', 'Sandwich is a waiter.'], "I'd like a sandwich, please.", { big: '🤵', why: { pl: wouldLike.pl, ru: wouldLike.ru } }),
      c.mcq(Q('Would you like some tea? You want it. You say...', 'Czy chcesz herbatę? Chcesz. Mówisz...', 'Хочешь чай? Ты хочешь. Говоришь...'), ['Yes, please.', 'Yes, I like.', 'Yes, thanks you.', 'Please, yes I am.'], 'Yes, please.', { big: '🍵', why: { pl: 'Chcesz coś: Yes, please. Nie chcesz: No, thank you.', ru: 'Хочешь: Yes, please. Не хочешь: No, thank you.' } }),
      c.mcq(Q('Would you like tea ___ juice?', 'Czy chcesz herbatę ___ sok?', 'Хочешь чай ___ сок?'), ['or', 'and', 'but', 'with'], 'or', { why: { pl: 'or pokazuje wybór (herbata albo sok). and łączy, gdy chcemy oba.', ru: 'or показывает выбор (чай или сок). and соединяет, когда хотим оба.' } }),
      c.mcq(Q('I want a pizza ___ a cola.', 'Chcę pizzę ___ colę.', 'Я хочу пиццу ___ колу.'), ['and', 'or', 'but', 'so'], 'and', { big: '🍕', why: { pl: 'and = i (chcę obie rzeczy). or = albo (wybór).', ru: 'and = и (хочу обе вещи). or = или (выбор).' } }),
      c.mcq(Q('Who brings the food in a cafe?', 'Kto przynosi jedzenie w kawiarni?', 'Кто приносит еду в кафе?'), ['the waiter', 'the menu', 'the bill', 'the milkshake'], 'the waiter'),
      c.tf(Q('"I\'d like" is more polite than "I want".', '"I\'d like" jest grzeczniejsze niż "I want".', '"I\'d like" вежливее, чем "I want".'), true, { why: wouldLike }),
      c.tf(Q('You pay the bill before you order.', 'Płacisz rachunek, zanim zamówisz.', 'Ты платишь по счёту до заказа.'), false),
      c.type(Q('I ___ like a hot chocolate, please. (one full word)', 'I ___ like a hot chocolate, please. (jedno pełne słowo)', 'I ___ like a hot chocolate, please. (одно полное слово)'), 'would', ["'d"], { why: wouldLike }),
      c.type(Q('Write in English: kelner / официант', 'Napisz po angielsku: kelner', 'Напиши по-английски: официант'), 'waiter'),
      c.type(Q('Write in English: rachunek / счёт', 'Napisz po angielsku: rachunek', 'Напиши по-английски: счёт'), 'bill'),
      c.order("I'd like a milkshake please", 'Ułóż zdanie: Poproszę koktajl mleczny', 'Составь предложение: Я бы хотел молочный коктейль'),
      c.order('Would you like tea or juice', 'Ułóż pytanie: Czy chcesz herbatę czy sok?', 'Составь вопрос: Хочешь чай или сок?'),
      c.sort(Q('Hungry or thirsty? What do you want?', 'Głodny czy spragniony? Co zamawiasz?', 'Голодный или хочешь пить? Что закажешь?'), { 'hungry 😋': ['a sandwich', 'pasta', 'a burger', 'soup'], 'thirsty 🥵': ['water', 'a milkshake', 'juice', 'tea'] }),
      c.sort(Q('Who says it? Waiter or customer?', 'Kto to mówi? Kelner czy klient?', 'Кто это говорит? Официант или клиент?'), { 'waiter 🤵': ['What would you like?', 'Here you are.', 'Would you like a dessert?'], 'customer 🧒': ["I'd like a pizza.", 'Can I have the bill?', 'Yes, please.'] }),
      c.fix('I want a milkshake, please.', 'want', "would like", { why: wouldLike }),
      c.fix("I'd likes a pizza, please.", 'likes', 'like', { why: wouldLike }),
      c.fix("I'd like a tea and a juice. Just one!", 'and', 'or', { why: { pl: 'Jeśli wybieramy jedno z dwóch, używamy or (albo).', ru: 'Если выбираем одно из двух, нужно or (или).' } }),
      c.fix('Would you likes some water?', 'likes', 'like', { why: { pl: 'Po would czasownik jest bez -s: Would you like...?', ru: 'После would глагол без -s: Would you like...?' } }),
      c.fix('Can I have the bill, pleas?', 'pleas', 'please', { why: { pl: 'please: p-l-e-a-s-e, na końcu jest "e".', ru: 'please: p-l-e-a-s-e, в конце "e".' } }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'Welcome to the Cat Cafe! What would you like?', replies: ["I'd like a hot chocolate, please.", 'I like hot chocolate table.', 'I am a hot chocolate.'] },
        { say: 'Would you like a biscuit too?', replies: ['Yes, please!', 'Yes, I am.', 'No, I would.'] },
        { say: "Here you are. That's four pounds.", replies: ['Thank you!', 'You are welcome, cat.', 'I like four.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'u5-test', unit: U, title: 'Test yourself: Unit 5', page: 77, emoji: '🏆',
    words: [], sentences: [],
    quizzes: [
      c.mcq(Q("There ___ some grapes in the bowl.", 'W misce ___ trochę winogron.', 'В миске ___ виноград.'), ['are', 'is', 'have', 'has'], 'are', { big: '🍇', why: thereIs }),
      c.mcq(Q('We haven\'t got ___ bread.', 'Nie mamy ___ chleba.', 'У нас нет ___ хлеба.'), ['any', 'some', 'a', 'an'], 'any', { big: '🍞', why: someAny }),
      c.mcq(Q('___ you like some juice?', '___ ochotę na sok?', '___ хочешь немного сока?'), ['Would', 'Do', 'Are', 'Will'], 'Would', { big: '🧃', why: wouldLike }),
      c.mcq(Q('Which one is unhealthy?', 'Które jest niezdrowe?', 'Что вредное?'), ['crisps', 'carrot', 'apple', 'salad'], 'crisps', { big: '🍟' }),
      c.mcq(Q('Which one is uncountable?', 'Które jest niepoliczalne?', 'Что неисчисляемое?'), ['milk', 'egg', 'banana', 'burger'], 'milk', { why: unc }),
      c.tf(Q('"An banana" is correct.', '"An banana" jest poprawne.', '"An banana" правильно.'), false, { why: aAn }),
      c.tf(Q('We use "any" in questions.', 'Używamy "any" w pytaniach.', 'Мы используем "any" в вопросах.'), true, { why: someAny }),
      c.type(Q('Write in English: lody / мороженое', 'Napisz po angielsku: lody', 'Напиши по-английски: мороженое'), 'ice cream', ['icecream']),
      c.type(Q('There ___ any milk. (negative, 2 words)', 'There ___ any milk. (przeczenie, 2 słowa)', 'There ___ any milk. (отрицание, 2 слова)'), "isn't", ['is not'], { why: thereIs }),
      c.type(Q('I ___ like a pizza, please. (one full word)', 'I ___ like a pizza, please. (jedno pełne słowo)', 'I ___ like a pizza, please. (одно полное слово)'), 'would', ["'d"], { why: wouldLike }),
      c.type(Q('Write in English: śniadanie / завтрак', 'Napisz po angielsku: śniadanie', 'Напиши по-английски: завтрак'), 'breakfast'),
      c.order('There is some cheese in the fridge', 'Ułóż zdanie: W lodówce jest trochę sera', 'Составь предложение: В холодильнике есть немного сыра'),
      c.order('I eat a lot of fruit', 'Ułóż zdanie: Jem dużo owoców', 'Составь предложение: Я ем много фруктов'),
      c.sort(Q('Healthy or unhealthy?', 'Zdrowe czy niezdrowe?', 'Полезное или вредное?'), { 'healthy 💪': ['salad', 'carrot', 'fish', 'orange'], 'unhealthy 🍬': ['sweets', 'burger', 'cake', 'cola'] }),
      c.sort(Q('Countable or uncountable?', 'Policzalne czy niepoliczalne?', 'Исчисляемое или нет?'), { 'countable': ['egg', 'apple', 'sandwich', 'strawberry'], 'uncountable': ['rice', 'water', 'butter', 'soup'] }),
      c.fix('I drink a water every day.', 'a', 'some', { why: unc }),
      c.fix('Have you got some sweets?', 'some', 'any', { why: someAny }),
      c.fix('There is two eggs in the fridge.', 'is', 'are', { why: thereIs }),
      c.fix('I eat a apple at school.', 'a', 'an', { why: aAn }),
      c.fix('I want a hot chocolate, please.', 'want', "would like", { why: wouldLike }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'Lunch time! Is there any pizza?', replies: ["Yes, there is. There's a big one.", 'Yes, there are.', 'Yes, I have.'] },
        { say: 'Would you like some pizza or some salad?', replies: ["Some salad, please. It's healthy.", 'Yes, I would.', 'I am salad.'] },
        { say: 'I love pizza! It is unhealthy but tasty.', replies: ['Ha ha! Eat a lot of salad too.', 'Ha ha! I am eat.', 'Ha ha! You are pizza.'] }
      ])
    ]
  });
})(window.EQ);
