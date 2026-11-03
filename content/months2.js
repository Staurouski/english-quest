/* Extra focus unit, part 2: weather, ordinal numbers, dates and holidays, calendar challenge.
   Same unit as months.js. Do not duplicate the months/seasons words from there (they are only reused inside quizzes).
   Agent/model: Claude (Sonnet). */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;
  const UNIT = 'Focus: months and seasons';
  const CAP = { pl: 'Po angielsku miesiące i dni tygodnia piszemy WIELKĄ literą! (po polsku małą)', ru: 'По-английски месяцы и дни недели пишутся с БОЛЬШОЙ буквы! (по-русски с маленькой)' };
  const capWhy = { pl: CAP.pl, ru: CAP.ru };
  const inWhy = { pl: 'Z miesiącami i porami roku mówimy "in": in May, in summer.', ru: 'С месяцами и временами года говорим "in": in May, in summer.' };
  const onWhy = { pl: 'Z dniami i datami mówimy "on": on Monday, on the fifth of May.', ru: 'С днями и датами говорим "on": on Monday, on the fifth of May.' };
  const lowWhy = { pl: 'Słowa o pogodzie i pory roku piszemy małą literą.', ru: 'Слова о погоде и времена года пишутся с маленькой буквы.' };

  /* ---------------- 1. Weather ---------------- */
  EQ.registerLesson({
    id: 'x-weather', unit: UNIT, title: 'Weather', emoji: '🌦️', focus: true,
    words: [
      w('weather', 'pogoda', 'погода', '🌦️', { pl: 'weather: "ea" czyta się jak w "head". Nie myl z "whether" (czy)!', ru: 'weather: "ea" читается как в "head". Не путай с "whether" (ли)!' }),
      w('sunny', 'słonecznie', 'солнечно', '☀️', { pl: 'sunny = sun + y. Słońce świeci, więc jest sunny.', ru: 'sunny = sun (солнце) + y. Солнце светит, значит sunny.' }),
      w('cloudy', 'pochmurnie', 'облачно', '☁️', { pl: 'cloudy = cloud (chmura) + y', ru: 'cloudy = cloud (облако) + y' }),
      w('rainy', 'deszczowo', 'дождливо', '🌧️', { pl: 'rainy = rain (deszcz) + y. Pamiętaj parasol!', ru: 'rainy = rain (дождь) + y. Не забудь зонтик!' }),
      w('windy', 'wietrznie', 'ветрено', '💨', { pl: 'windy = wind (wiatr) + y. Winter też ma "wind" w środku.', ru: 'windy = wind (ветер) + y. Зимой (winter) тоже дует wind.' }),
      w('snowy', 'śnieżnie', 'снежно', '🌨️', { pl: 'snowy = snow (śnieg) + y. Czas na bałwana!', ru: 'snowy = snow (снег) + y. Время лепить снеговика!' }),
      w('foggy', 'mgliście', 'туманно', '🌫️', { pl: 'foggy = fog (mgła) + y. Pisze się z dwoma g: fo-ggy.', ru: 'foggy = fog (туман) + y. Пишется с двумя g: fo-ggy.' }),
      w('hot', 'gorąco', 'жарко', '🥵', { pl: 'hot jak "hot dog": gorąca kiełbaska!', ru: 'hot как в "хот-дог": горячая сосиска!' }),
      w('cold', 'zimno', 'холодно', '🥶', { pl: 'cold brzmi prawie jak rosyjskie "холод" (zimno).', ru: 'cold звучит почти как "холод".' }),
      w('warm', 'ciepło', 'тепло', '🌤️', { pl: 'warm = przyjemnie ciepło, jak ciepły sweter. Mniej niż hot.', ru: 'warm = приятно тепло, как тёплый свитер. Меньше, чем hot.' }),
      w('cool', 'chłodno', 'прохладно', '🍃', { pl: 'cool = trochę chłodno (jesienią). Mniej niż cold. Ale "cool" to też "fajny"!', ru: 'cool = немного прохладно (осенью). Меньше, чем cold. А ещё cool = "классный"!' })
    ],
    sentences: [
      s("What's the weather like?", 'Jaka jest pogoda?', 'Какая погода?'),
      s("It's sunny.", 'Jest słonecznie.', 'Солнечно.'),
      s("It's cold and snowy in winter.", 'Zimą jest zimno i śnieżnie.', 'Зимой холодно и снежно.'),
      s("It's often rainy and windy in autumn.", 'Jesienią często jest deszczowo i wietrznie.', 'Осенью часто дождливо и ветрено.'),
      s("It's hot and sunny in July.", 'W lipcu jest gorąco i słonecznie.', 'В июле жарко и солнечно.')
    ],
    quizzes: [
      c.mcq({ en: 'The sun is shining. It is ___.', pl: 'Świeci słońce. Jest ___.', ru: 'Светит солнце. Сегодня ___.' }, ['sunny', 'cloudy', 'rainy', 'foggy'], 'sunny', { big: '☀️', why: { pl: 'sun (słońce) + y = sunny', ru: 'sun (солнце) + y = sunny' } }),
      c.mcq({ en: 'Rain, rain, rain! It is ___.', pl: 'Deszcz, deszcz, deszcz! Jest ___.', ru: 'Дождь, дождь, дождь! Сегодня ___.' }, ['rainy', 'snowy', 'windy', 'cloudy'], 'rainy', { big: '🌧️', why: { pl: 'rain (deszcz) + y = rainy', ru: 'rain (дождь) + y = rainy' } }),
      c.mcq({ en: 'You cannot see far. It is ___.', pl: 'Nie widać daleko. Jest ___.', ru: 'Ничего не видно вдалеке. Сегодня ___.' }, ['foggy', 'cloudy', 'windy', 'cool'], 'foggy', { big: '🌫️', why: { pl: 'fog (mgła) + gy = foggy', ru: 'fog (туман) + gy = foggy' } }),
      c.mcq({ en: 'Poland, July, 35 degrees. It is very ___!', pl: 'Polska, lipiec, 35 stopni. Jest bardzo ___!', ru: 'Польша, июль, 35 градусов. Очень ___!' }, ['hot', 'warm', 'cool', 'cold'], 'hot', { big: '🥵', why: { pl: 'hot = gorąco (jak hot dog), warm = tylko ciepło', ru: 'hot = жарко (как хот-дог), warm = просто тепло' } }),
      c.mcq({ en: 'What is the right answer to "What\'s the weather like?"', pl: 'Jaka jest dobra odpowiedź na "What\'s the weather like?"', ru: 'Какой ответ подходит к "What\'s the weather like?"' }, ["It's windy.", 'It windy.', "It's wind.", "I'm windy."], "It's windy.", { why: { pl: 'It\'s + przymiotnik: It\'s windy. Nie zapomnij o "It\'s" (It is)!', ru: 'It\'s + прилагательное: It\'s windy. Не забудь "It\'s" (It is)!' } }),
      c.tf({ en: 'It is snowy in Poland in July.', pl: 'W Polsce w lipcu jest śnieżnie.', ru: 'В Польше в июле снежно.' }, false, { why: { pl: 'July = lipiec = lato ☀️, więc jest hot i sunny.', ru: 'July = июль = лето ☀️, поэтому hot и sunny.' } }),
      c.tf({ en: 'Hot is the opposite of cold.', pl: 'Hot to przeciwieństwo cold.', ru: 'Hot это противоположность cold.' }, true),
      c.tf({ en: 'We make a snowman on a snowy day.', pl: 'Bałwana lepimy w śnieżny dzień.', ru: 'Снеговика лепим в снежный день.' }, true),
      c.type({ en: 'Write in English: pogoda / погода', pl: 'Napisz po angielsku: pogoda', ru: 'Напиши по-английски: погода' }, 'weather'),
      c.type({ en: 'cloud + y = ___', pl: 'cloud + y = ___', ru: 'cloud + y = ___' }, 'cloudy', [], { why: lowWhy }),
      c.type({ en: 'Write in English: zimno / холодно', pl: 'Napisz po angielsku: zimno', ru: 'Напиши по-английски: холодно' }, 'cold'),
      c.order("What's the weather like?", 'Ułóż pytanie o pogodę', 'Составь вопрос о погоде'),
      c.order("It's sunny and warm in May.", 'Ułóż zdanie: W maju jest słonecznie i ciepło', 'Составь предложение: В мае солнечно и тепло'),
      c.sort({ en: 'Which season? (in Poland)', pl: 'Jaka pora roku? (w Polsce)', ru: 'Какое время года? (в Польше)' }, { 'winter ❄️': ['snowy', 'cold'], 'summer ☀️': ['hot', 'sunny', 'warm'], 'autumn 🍂': ['windy', 'foggy', 'rainy', 'cool'] }),
      c.sort({ en: 'Weather, month or season?', pl: 'Pogoda, miesiąc czy pora roku?', ru: 'Погода, месяц или время года?' }, { 'weather 🌦️': ['rainy', 'windy', 'cold'], 'month 🗓️': ['March', 'July', 'October'], 'season 🔄': ['autumn', 'spring', 'winter'] }),
      c.fix("Its sunny today.", 'Its', "It's", { why: { pl: 'It\'s = It is (jest). "Its" znaczy "jego" i nie pasuje.', ru: 'It\'s = It is (есть). "Its" значит "его" и здесь не подходит.' } }),
      c.fix("What's the whether like?", 'whether', 'weather', { why: { pl: 'weather = pogoda, whether = czy. Pogoda ma "ea" jak w "head".', ru: 'weather = погода, whether = ли. В погоде "ea" как в "head".' } }),
      c.fix("It's often rainy on April.", 'on', 'in', { why: inWhy }),
      c.fix("It's sun today.", 'sun', 'sunny', { why: { pl: 'It\'s + przymiotnik: sunny, nie rzeczownik "sun".', ru: 'It\'s + прилагательное: sunny, а не существительное "sun".' } }),
      c.fix("It's Snowy in winter.", 'Snowy', 'snowy', { why: lowWhy }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: "Hi! What's the weather like today?", replies: ["It's cold and cloudy.", "It's Monday.", "It's my dog."] },
        { say: 'Do you like snow?', replies: ['Yes, I do! I like snowmen.', "Yes, it's July.", 'No, I am a pen.'] },
        { say: "What's the weather like in July in Poland?", replies: ["It's hot and sunny.", "It's cold and snowy.", "It's twelve o'clock."] },
        { say: 'Is it windy in autumn?', replies: ["Yes, it's often windy.", 'Yes, I like pizza.', "No, it's a book."] }
      ])
    ]
  });

  /* ---------------- 2. Ordinals ---------------- */
  const O = [
    ['first', 'pierwszy', 'первый', '1st', 'first = "pierwszy". Najpierw: first aid = pierwsza pomoc. Nie "oneth"!', 'first = "первый". First aid = первая помощь. Не "oneth"!'],
    ['second', 'drugi', 'второй', '2nd', 'second to też "sekunda" (jak rosyjskie секунда). Nie "twoth"!', 'second это ещё и "секунда". Не "twoth"!'],
    ['third', 'trzeci', 'третий', '3rd', 'third ~ three, ale "ir" w środku: th-ir-d. Nie "threeth"!', 'third ~ three (три), но внутри "ir": th-ir-d. Не "threeth"!'],
    ['fourth', 'czwarty', 'четвёртый', '4th', 'four + th. Zwykła reguła (od 4 do 20 dodajemy -th).', 'four + th. Обычное правило (с 4 до 20 добавляем -th).'],
    ['fifth', 'piąty', 'пятый', '5th', 'five ➜ fifth: "ve" zamienia się w "f". F-I-F-th!', 'five ➜ fifth: "ve" превращается в "f". F-I-F-th!'],
    ['sixth', 'szósty', 'шестой', '6th', 'six + th = sixth', 'six + th = sixth'],
    ['seventh', 'siódmy', 'седьмой', '7th', 'seven + th = seventh', 'seven + th = seventh'],
    ['eighth', 'ósmy', 'восьмой', '8th', 'eight + h (nie eightth!). Tylko jedno t: eigh-th.', 'eight + h (не eightth!). Только одно t: eigh-th.'],
    ['ninth', 'dziewiąty', 'девятый', '9th', 'nine ➜ ninth: znika "e". Nie "nineth"!', 'nine ➜ ninth: пропадает "e". Не "nineth"!'],
    ['tenth', 'dziesiąty', 'десятый', '10th', 'ten + th = tenth', 'ten + th = tenth'],
    ['eleventh', 'jedenasty', 'одиннадцатый', '11th', 'eleven + th = eleventh. Nie "11st"! Po 11 nie ma końcówki -st.', 'eleven + th = eleventh. Не "11st"! У 11 нет окончания -st.'],
    ['twelfth', 'dwunasty', 'двенадцатый', '12th', 'twelve ➜ twelfth: "ve" zamienia się w "f", jak w fifth. Trudne słowo, ćwicz!', 'twelve ➜ twelfth: "ve" превращается в "f", как в fifth. Трудное слово, тренируйся!'],
    ['twentieth', 'dwudziesty', 'двадцатый', '20th', 'twenty ➜ twentieth: "y" zamienia się w "ie" + th.', 'twenty ➜ twentieth: "y" превращается в "ie" + th.'],
    ['twenty-first', 'dwudziesty pierwszy', 'двадцать первый', '21st', 'Tylko ostatnia liczba jest porządkowa: twenty-FIRST. Z myślnikiem!', 'Порядковым становится только последнее число: twenty-FIRST. Через дефис!'],
    ['thirtieth', 'trzydziesty', 'тридцатый', '30th', 'thirty ➜ thirtieth: "y" zamienia się w "ie" + th, jak w twentieth.', 'thirty ➜ thirtieth: "y" превращается в "ie" + th, как в twentieth.'],
    ['thirty-first', 'trzydziesty pierwszy', 'тридцать первый', '31st', '31 października to Halloween: the thirty-first of October 🎃', '31 октября это Хэллоуин: the thirty-first of October 🎃']
  ];
  EQ.registerLesson({
    id: 'x-ordinals', unit: UNIT, title: 'Ordinal numbers', emoji: '🔢', focus: true,
    words: O.map(function (o) { return w(o[0], o[1], o[2], o[3], { pl: o[4], ru: o[5] }); }),
    sentences: [
      s('January is the first month.', 'Styczeń to pierwszy miesiąc.', 'Январь это первый месяц.'),
      s('December is the twelfth month.', 'Grudzień to dwunasty miesiąc.', 'Декабрь это двенадцатый месяц.'),
      s("I'm in the fourth class.", 'Jestem w czwartej klasie.', 'Я в четвёртом классе.'),
      s('It is my tenth birthday.', 'To moje dziesiąte urodziny.', 'Это мой десятый день рождения.'),
      s('Halloween is on the thirty-first of October.', 'Halloween jest trzydziestego pierwszego października.', 'Хэллоуин тридцать первого октября.')
    ],
    quizzes: [
      c.mcq({ en: 'Write 5th in words: the ___ day', pl: 'Napisz 5th słowami: the ___ day', ru: 'Напиши 5th словами: the ___ day' }, ['fifth', 'fiveth', 'five', 'fifeth'], 'fifth', { big: '5️⃣', why: { pl: 'five ➜ fifth: "ve" zamienia się w "f".', ru: 'five ➜ fifth: "ve" превращается в "f".' } }),
      c.mcq({ en: 'Write 8th in words: the ___ month', pl: 'Napisz 8th słowami: the ___ month', ru: 'Напиши 8th словами: the ___ month' }, ['eighth', 'eightth', 'eigth', 'eight'], 'eighth', { big: '8️⃣', why: { pl: 'eight + h = eighth (jedno t!).', ru: 'eight + h = eighth (одно t!).' } }),
      c.mcq({ en: 'Write 9th in words: the ___ month', pl: 'Napisz 9th słowami: the ___ month', ru: 'Напиши 9th словами: the ___ month' }, ['ninth', 'nineth', 'nine', 'ninetth'], 'ninth', { big: '9️⃣', why: { pl: 'nine ➜ ninth: znika "e".', ru: 'nine ➜ ninth: пропадает "e".' } }),
      c.mcq({ en: 'Write 12th in words: the ___ month', pl: 'Napisz 12th słowami: the ___ month', ru: 'Напиши 12th словами: the ___ month' }, ['twelfth', 'twelveth', 'twelth', 'twelf'], 'twelfth', { why: { pl: 'twelve ➜ twelfth: "ve" zamienia się w "f".', ru: 'twelve ➜ twelfth: "ve" превращается в "f".' } }),
      c.tf({ en: 'January is the first month of the year.', pl: 'Styczeń to pierwszy miesiąc roku.', ru: 'Январь это первый месяц года.' }, true),
      c.tf({ en: 'December is the eleventh month.', pl: 'Grudzień to jedenasty miesiąc.', ru: 'Декабрь это одиннадцатый месяц.' }, false, { why: { pl: 'Grudzień jest dwunasty: the twelfth month.', ru: 'Декабрь двенадцатый: the twelfth month.' } }),
      c.tf({ en: 'The short form of "third" is 3rd.', pl: 'Skrót od "third" to 3rd.', ru: 'Сокращение от "third" это 3rd.' }, true),
      c.type({ en: 'Write in words: 1st', pl: 'Napisz słowami: 1st', ru: 'Напиши словами: 1st' }, 'first', [], { why: { pl: 'Nie "oneth"! one ➜ first.', ru: 'Не "oneth"! one ➜ first.' } }),
      c.type({ en: 'Write in words: 12th', pl: 'Napisz słowami: 12th', ru: 'Напиши словами: 12th' }, 'twelfth', [], { why: { pl: 'twelve ➜ twelfth', ru: 'twelve ➜ twelfth' } }),
      c.type({ en: 'August is the ___ month. (8th, in words)', pl: 'August is the ___ month. (8th, słowem)', ru: 'August is the ___ month. (8th, словом)' }, 'eighth', [], { why: { pl: 'eight + h = eighth', ru: 'eight + h = eighth' } }),
      c.type({ en: 'Write in words: 31st', pl: 'Napisz słowami: 31st', ru: 'Напиши словами: 31st' }, 'thirty-first', ['thirty first', 'thirtyfirst'], { why: { pl: 'Z myślnikiem: thirty-first.', ru: 'Через дефис: thirty-first.' } }),
      c.order('June is the sixth month.', 'Ułóż zdanie: Czerwiec to szósty miesiąc', 'Составь предложение: Июнь это шестой месяц'),
      c.order("I'm in the fourth class.", 'Ułóż zdanie: Jestem w czwartej klasie', 'Составь предложение: Я в четвёртом классе'),
      c.sort({ en: 'Number or ordinal?', pl: 'Liczba czy liczebnik porządkowy?', ru: 'Количественное или порядковое?' }, { 'number 🔢': ['one', 'five', 'twelve', 'thirty'], 'ordinal 🥇': ['first', 'third', 'fifth', 'twelfth', 'thirtieth'] }),
      c.sort({ en: 'Which ending?', pl: 'Jaka końcówka?', ru: 'Какое окончание?' }, { '1st, 2nd, 3rd': ['1st', '2nd', '3rd', '21st', '22nd'], '-th': ['4th', '11th', '12th', '20th'] }),
      c.fix("It's my fiveth birthday.", 'fiveth', 'fifth', { why: { pl: 'five ➜ fifth: "ve" zamienia się w "f".', ru: 'five ➜ fifth: "ve" превращается в "f".' } }),
      c.fix('August is the eightth month.', 'eightth', 'eighth', { why: { pl: 'eight + h = eighth, tylko jedno t.', ru: 'eight + h = eighth, только одно t.' } }),
      c.fix('December is the twelveth month.', 'twelveth', 'twelfth', { why: { pl: 'twelve ➜ twelfth: "ve" zamienia się w "f".', ru: 'twelve ➜ twelfth: "ve" превращается в "f".' } }),
      c.fix("I'm in the four class.", 'four', 'fourth', { why: { pl: 'Klasa "czwarta" to the fourth class: potrzebujemy liczebnika porządkowego (-th).', ru: '"Четвёртый" класс это the fourth class: нужно порядковое число (-th).' } }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'What is the first month of the year?', replies: ['January.', 'December.', 'Monday.'] },
        { say: 'And what is the twelfth month?', replies: ['December.', 'The twelve month.', 'It is Friday.'] },
        { say: 'What is special about the thirty-first of October?', replies: ["It's Halloween!", "It's Easter.", "It's a Sunday."] },
        { say: 'Which class are you in?', replies: ["I'm in the fourth class.", "I'm in the kitchen.", "I'm in Poland on Monday."] }
      ])
    ]
  });

  /* ---------------- 3. Dates and birthdays ---------------- */
  EQ.registerLesson({
    id: 'x-dates', unit: UNIT, title: 'Dates and birthdays', emoji: '🎂', focus: true,
    words: [
      w('date', 'data', 'дата', '🗓️', { pl: 'date = data. Prawie tak samo po polsku i po rosyjsku (дата)! Uwaga: angielskie "data" to dane.', ru: 'date = дата. Почти как по-русски! Внимание: английское "data" это "данные".' }),
      w('today', 'dzisiaj', 'сегодня', '📆'),
      w('party', 'impreza, przyjęcie', 'вечеринка', '🥳', { pl: 'birthday party = impreza urodzinowa. Z tortem i balonami!', ru: 'birthday party = праздник на день рождения. С тортом и шарами!' }),
      w('present', 'prezent', 'подарок', '🎁', { pl: 'present = prezent. Brzmi jak "prezent": łatwe!', ru: 'present = подарок. Похоже на "презент": легко!' }),
      w('Christmas', 'Boże Narodzenie', 'Рождество', '🎄', { pl: 'Christ-mas: w środku jest "Christ" (Chrystus), jak в слове "Христос"', ru: 'Christ-mas: внутри слово "Christ" (Христос), Рождество Христово' }),
      w('Christmas Eve', 'Wigilia', 'Сочельник', '🕯️', { pl: 'Eve = wigilia (wieczór przed świętem). Christmas Eve = 24 grudnia.', ru: 'Eve = канун (вечер перед праздником). Christmas Eve = 24 декабря.' }),
      w('Easter', 'Wielkanoc', 'Пасха', '🐣', { pl: 'Easter ~ east (wschód): słońce wschodzi na wschodzie, wiosna się budzi. Zawsze wiosną!', ru: 'Easter ~ east (восток): солнце встаёт на востоке, просыпается весна. Всегда весной!' }),
      w("New Year's Day", 'Nowy Rok (1 stycznia)', 'Новый год (1 января)', '🎆', { pl: 'New Year = Nowy Rok; Day = dzień. 1 stycznia.', ru: 'New Year = Новый год; Day = день. 1 января.' }),
      w('Halloween', 'Halloween', 'Хэллоуин', '🎃', { pl: 'Halloween jest 31 października. Dynie i przebrania!', ru: 'Хэллоуин 31 октября. Тыквы и костюмы!' }),
      w("Children's Day", 'Dzień Dziecka', 'День защиты детей', '🧒', { pl: "Children's Day w Polsce: 1 czerwca (the first of June). Z apostrofem!", ru: "Children's Day в Польше: 1 июня (the first of June). С апострофом!" }),
      w('name day', 'imieniny', 'именины', '🎉', { pl: 'name day = dzień imienia, czyli imieniny (opcjonalnie: w Anglii nie świętuje się imienin).', ru: 'name day = день имени, то есть именины (по желанию: в Англии именины не празднуют).' })
    ],
    sentences: [
      s('When is your birthday?', 'Kiedy masz urodziny?', 'Когда у тебя день рождения?'),
      s("It's on the fifth of May.", 'To piątego maja.', 'Это пятого мая.'),
      s("What's the date today?", 'Jaka jest dzisiaj data?', 'Какое сегодня число?'),
      s("It's the second of November.", 'Jest drugi listopada.', 'Сегодня второе ноября.'),
      s('Christmas is on the twenty-fifth of December.', 'Boże Narodzenie jest dwudziestego piątego grudnia.', 'Рождество двадцать пятого декабря.'),
      s("Children's Day is on the first of June.", 'Dzień Dziecka jest pierwszego czerwca.', 'День защиты детей первого июня.'),
      s('We go skiing in winter.', 'Zimą jeździmy na nartach.', 'Зимой мы катаемся на лыжах.')
    ],
    quizzes: [
      c.mcq({ en: 'My birthday is ___ the fifth of May.', pl: 'My birthday is ___ the fifth of May.', ru: 'My birthday is ___ the fifth of May.' }, ['on', 'in', 'at', 'of'], 'on', { why: onWhy }),
      c.mcq({ en: 'We go to the lake ___ summer.', pl: 'We go to the lake ___ summer.', ru: 'We go to the lake ___ summer.' }, ['in', 'on', 'at', 'to'], 'in', { why: inWhy }),
      c.mcq({ en: 'When is your birthday? Choose the best answer.', pl: 'When is your birthday? Wybierz najlepszą odpowiedź.', ru: 'When is your birthday? Выбери лучший ответ.' }, ["It's on the fifth of May.", "It's in the fifth of May.", "It's at May the five.", "It's on five May."], "It's on the fifth of May.", { why: { pl: 'Z datą: on the fifth of May (on + liczebnik porządkowy + of + miesiąc).', ru: 'С датой: on the fifth of May (on + порядковое число + of + месяц).' } }),
      c.mcq({ en: 'The 31st of October is...', pl: '31 października to...', ru: '31 октября это...' }, ['Halloween', 'Easter', 'Christmas', "New Year's Day"], 'Halloween', { big: '🎃' }),
      c.mcq({ en: 'The 1st of June in Poland is...', pl: '1 czerwca w Polsce to...', ru: '1 июня в Польше это...' }, ["Children's Day", 'Name day', 'Easter', "Mother's Day"], "Children's Day", { big: '🧒', why: { pl: "Children's Day: 1 czerwca, the first of June.", ru: "Children's Day: 1 июня, the first of June." } }),
      c.tf({ en: 'Easter is in summer.', pl: 'Wielkanoc jest latem.', ru: 'Пасха летом.' }, false, { why: { pl: 'Easter jest wiosną (marzec albo kwiecień) 🐣', ru: 'Easter весной (март или апрель) 🐣' } }),
      c.tf({ en: 'We say "in May" but "on the fifth of May".', pl: 'Mówimy "in May", ale "on the fifth of May".', ru: 'Говорим "in May", но "on the fifth of May".' }, true, { why: { pl: 'in + miesiąc, on + dzień/data.', ru: 'in + месяц, on + день/число.' } }),
      c.type({ en: 'Christmas is on the ___ of December. (25th, in words)', pl: 'Christmas is on the ___ of December. (25th, słowem)', ru: 'Christmas is on the ___ of December. (25th, словом)' }, 'twenty-fifth', ['twenty fifth', 'twentyfifth', '25th']),
      c.type({ en: 'New Year\'s Day is on the first of ___.', pl: "New Year's Day is on the first of ___.", ru: "New Year's Day is on the first of ___." }, 'January', [], { why: capWhy }),
      c.type({ en: 'Write in English: Dzień Dziecka / День защиты детей', pl: 'Napisz po angielsku: Dzień Dziecka', ru: 'Напиши по-английски: День защиты детей' }, "Children's Day", ["children's day", 'childrens day', 'Childrens Day'], { why: { pl: "Children's z apostrofem i wielką literą: Children's Day.", ru: "Children's с апострофом и большой буквой: Children's Day." } }),
      c.type({ en: 'My birthday is on the third of ___. (marzec / март)', pl: 'My birthday is on the third of ___. (marzec)', ru: 'My birthday is on the third of ___. (март)' }, 'March', [], { why: capWhy }),
      c.order('When is your birthday?', 'Ułóż pytanie: Kiedy masz urodziny?', 'Составь вопрос: Когда у тебя день рождения?'),
      c.order("It's on the fifth of May.", 'Ułóż odpowiedź: To piątego maja', 'Составь ответ: Это пятого мая'),
      c.sort({ en: 'in or on?', pl: 'in czy on?', ru: 'in или on?' }, { 'in 🗓️': ['May', 'summer', 'winter', 'December'], 'on 🎯': ['Monday', 'the fifth of May', 'the first of June', 'Sunday'] }),
      c.sort({ en: 'Date or month?', pl: 'Data czy miesiąc?', ru: 'Дата или месяц?' }, { 'date 🗓️': ['the first of June', 'the fifth of May', 'the third of March', 'the second of November'], 'month 🗓️': ['June', 'May', 'March', 'November'] }),
      c.fix('My birthday is in the fifth of May.', 'in', 'on', { why: onWhy }),
      c.fix('My birthday is on may.', 'may', 'May', { why: capWhy }),
      c.fix('When is you birthday?', 'you', 'your', { why: { pl: 'your = twój/twoje (czyj?). "you" to "ty".', ru: 'your = твой (чей?). "you" это "ты".' } }),
      c.fix("What's the data today?", 'data', 'date', { why: { pl: 'date = data kalendarzowa. Angielskie "data" to dane (jak w komputerze)!', ru: 'date = число, дата. Английское "data" это данные (как в компьютере)!' } }),
      c.fix('Halloween is on the thirty-first of october.', 'october', 'October', { why: capWhy }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'When is your birthday?', replies: ["It's on the fifth of May.", "It's in the kitchen.", "I'm ten years old."] },
        { say: 'Cool! What do you do on your birthday?', replies: ['I have a party with my friends!', "I'm a robot.", 'It is on Monday.'] },
        { say: "What's the date today?", replies: ["It's the second of November.", "It's very cold.", "It's two o'clock on Monday."] },
        { say: 'When is Christmas Eve?', replies: ["It's on the twenty-fourth of December.", "It's in the garden.", "It's twenty-four dogs."] }
      ])
    ]
  });

  /* ---------------- 4. Calendar challenge (revision, quizzes only) ---------------- */
  EQ.registerLesson({
    id: 'x-calendar-test', unit: UNIT, title: 'Calendar challenge', emoji: '🏆', focus: true,
    words: [], sentences: [],
    quizzes: [
      c.mcq({ en: 'The eleventh month is ___.', pl: 'Jedenasty miesiąc to ___.', ru: 'Одиннадцатый месяц это ___.' }, ['November', 'December', 'October', 'September'], 'November', { why: { pl: 'eleventh = 11, listopad = November (No-vem-ber ~ ноябрь).', ru: 'eleventh = 11, ноябрь = November.' } }),
      c.mcq({ en: 'It is snowy and cold. Which season?', pl: 'Jest śnieżnie i zimno. Jaka pora roku?', ru: 'Снежно и холодно. Какое время года?' }, ['winter', 'autumn', 'spring', 'summer'], 'winter', { big: '⛄', why: { pl: 'winter = zima', ru: 'winter = зима' } }),
      c.mcq({ en: '___ summer it is hot and sunny.', pl: '___ summer it is hot and sunny.', ru: '___ summer it is hot and sunny.' }, ['In', 'On', 'At', 'By'], 'In', { why: inWhy }),
      c.mcq({ en: "Children's Day is on the ___ of June.", pl: "Children's Day is on the ___ of June.", ru: "Children's Day is on the ___ of June." }, ['first', 'one', 'oneth', 'onest'], 'first', { big: '🧒', why: { pl: 'Daty mówimy liczebnikiem porządkowym: the first, nie "one".', ru: 'Даты говорим порядковым числом: the first, а не "one".' } }),
      c.mcq({ en: "What's the weather like in November in Poland?", pl: "What's the weather like in November in Poland?", ru: "What's the weather like in November in Poland?" }, ["It's cold and foggy.", "It's hot and sunny.", "It's very hot.", "It's warm and sunny."], "It's cold and foggy.", { big: '🌫️' }),
      c.tf({ en: 'Autumn comes after summer.', pl: 'Jesień jest po lecie.', ru: 'Осень идёт после лета.' }, true),
      c.tf({ en: 'We write "july" with a small letter.', pl: 'Piszemy "july" małą literą.', ru: 'Мы пишем "july" с маленькой буквы.' }, false, { why: capWhy }),
      c.type({ en: 'Write the month: listopad / ноябрь', pl: 'Napisz miesiąc: listopad', ru: 'Напиши месяц: ноябрь' }, 'November', [], { why: capWhy }),
      c.type({ en: 'Write in words: 5th', pl: 'Napisz słowami: 5th', ru: 'Напиши словами: 5th' }, 'fifth', [], { why: { pl: 'five ➜ fifth', ru: 'five ➜ fifth' } }),
      c.type({ en: 'Write in words: 20th', pl: 'Napisz słowami: 20th', ru: 'Напиши словами: 20th' }, 'twentieth', [], { why: { pl: 'twenty ➜ twentieth', ru: 'twenty ➜ twentieth' } }),
      c.type({ en: 'Write in English: jesień / осень', pl: 'Napisz po angielsku: jesień', ru: 'Напиши по-английски: осень' }, 'autumn', ['fall']),
      c.order("It's cold and snowy in January.", 'Ułóż zdanie: W styczniu jest zimno i śnieżnie', 'Составь предложение: В январе холодно и снежно'),
      c.order('Christmas is on the twenty-fifth of December.', 'Ułóż zdanie: Boże Narodzenie jest dwudziestego piątego grudnia', 'Составь предложение: Рождество двадцать пятого декабря'),
      c.sort({ en: 'Weather, month or ordinal?', pl: 'Pogoda, miesiąc czy liczebnik porządkowy?', ru: 'Погода, месяц или порядковое число?' }, { 'weather 🌦️': ['foggy', 'windy', 'hot'], 'month 🗓️': ['August', 'April', 'June'], 'ordinal 🥇': ['third', 'ninth', 'eleventh'] }),
      c.sort({ en: 'Which season? (in Poland)', pl: 'Jaka pora roku? (w Polsce)', ru: 'Какое время года? (в Польше)' }, { 'spring 🌷': ['March', 'May'], 'summer ☀️': ['July', 'August'], 'winter ❄️': ['December', 'February'] }),
      c.fix("It's hot in august.", 'august', 'August', { why: capWhy }),
      c.fix('My birthday is on the thirteen of June.', 'thirteen', 'thirteenth', { why: { pl: 'Daty: liczebnik porządkowy, czyli thirteen + th = thirteenth.', ru: 'Даты: порядковое число, то есть thirteen + th = thirteenth.' } }),
      c.fix("It's rainy on autumn.", 'on', 'in', { why: inWhy }),
      c.fix("What's the whether like today?", 'whether', 'weather', { why: { pl: 'weather = pogoda, whether = czy.', ru: 'weather = погода, whether = ли.' } }),
      c.fix("It's Windy today.", 'Windy', 'windy', { why: lowWhy }),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: "Hi! What's the date today?", replies: ["It's the second of November.", "It's very sunny.", "It's in the fifth class."] },
        { say: "What's the weather like?", replies: ["It's cold and cloudy.", "It's on Monday.", "It's my birthday present."] },
        { say: 'When is your birthday?', replies: ["It's on the fifth of May.", "It's a big cake.", "I'm from December."] },
        { say: 'What is your favourite season?', replies: ['My favourite season is summer.', 'My favourite Monday is May.', "It's a rainy pen."] }
      ])
    ]
  });
})(window.EQ);
