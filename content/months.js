/* Extra focus unit: seasons and months (hard for him, so these lessons are always open and go first in the daily mission).
   w(en, pl, ru, emoji, tip): tip is a memory hook shown when he gets the word wrong. */
(function (EQ) {
  const c = EQ.c, w = c.w, s = c.s;
  const CAP = { pl: 'Po angielsku miesiące piszemy WIELKĄ literą! (po polsku małą)', ru: 'По-английски месяцы пишутся с БОЛЬШОЙ буквы! (по-русски с маленькой)' };

  EQ.registerLesson({
    id: 'x-seasons', unit: 'Focus: months and seasons', title: 'Seasons', emoji: '🍂', focus: true,
    words: [
      w('spring', 'wiosna', 'весна', '🌷', { pl: 'spring = też "sprężyna": wiosną wszystko wyskakuje z ziemi jak sprężyna!', ru: 'spring = ещё и "пружина": весной всё выпрыгивает из земли, как пружина!' }),
      w('summer', 'lato', 'лето', '☀️', { pl: 'summer brzmi jak "sun": słońce = lato', ru: 'summer похоже на sun (солнце): солнце = лето' }),
      w('autumn', 'jesień', 'осень', '🍂', { pl: 'au-tumn: na końcu jest ciche "n", słyszysz tylko "o-tem"', ru: 'au-tumn: последняя n не читается, звучит "о-тем"' }),
      w('winter', 'zima', 'зима', '❄️', { pl: 'winter ~ "wind": zimą wieje zimny wiatr', ru: 'winter ~ wind (ветер): зимой дует холодный ветер' }),
      w('season', 'pora roku', 'время года', '🔄'),
      w('month', 'miesiąc', 'месяц', '🗓️', { pl: 'month ~ "moon" (księżyc): jeden miesiąc to jeden obrót księżyca', ru: 'month ~ moon (луна): месяц это один круг луны' }),
      w('year', 'rok', 'год', '🗓️'),
      w('birthday', 'urodziny', 'день рождения', '🎂', { pl: 'birth + day = dzień narodzin', ru: 'birth (рождение) + day (день)' })
    ],
    sentences: [
      s('My favourite season is summer.', 'Moja ulubiona pora roku to lato.', 'Моё любимое время года лето.'),
      s("It's cold in winter.", 'Zimą jest zimno.', 'Зимой холодно.'),
      s("It's hot in summer.", 'Latem jest gorąco.', 'Летом жарко.'),
      s('There are four seasons in a year.', 'W roku są cztery pory roku.', 'В году четыре времени года.')
    ],
    quizzes: [
      c.mcq({ en: 'Snow, snowman, Christmas. Which season?', pl: 'Śnieg, bałwan, święta. Jaka pora roku?', ru: 'Снег, снеговик, Рождество. Какое время года?' }, ['winter', 'summer', 'spring', 'autumn'], 'winter', { big: '⛄', why: { pl: 'winter = zima', ru: 'winter = зима' } }),
      c.mcq({ en: 'Beach, ice cream, holiday. Which season?', pl: 'Plaża, lody, wakacje. Jaka pora roku?', ru: 'Пляж, мороженое, каникулы. Какое время года?' }, ['summer', 'winter', 'autumn', 'spring'], 'summer', { big: '🏖️', why: { pl: 'summer = lato', ru: 'summer = лето' } }),
      c.mcq({ en: 'Leaves fall from the trees. Which season?', pl: 'Liście spadają z drzew. Jaka pora roku?', ru: 'Листья падают с деревьев. Какое время года?' }, ['autumn', 'spring', 'summer', 'winter'], 'autumn', { big: '🍁', why: { pl: 'autumn = jesień', ru: 'autumn = осень' } }),
      c.mcq({ en: 'Flowers, birds, Easter. Which season?', pl: 'Kwiaty, ptaki, Wielkanoc. Jaka pora roku?', ru: 'Цветы, птицы, Пасха. Какое время года?' }, ['spring', 'autumn', 'winter', 'summer'], 'spring', { big: '🐣', why: { pl: 'spring = wiosna', ru: 'spring = весна' } }),
      c.order('spring summer autumn winter', 'Ułóż pory roku po kolei, od wiosny', 'Расставь времена года по порядку, начиная с весны'),
      c.mcq("It's cold ___ winter.", ['in', 'on', 'at'], 'in', { why: { pl: 'Pory roku i miesiące zawsze z "in": in winter, in May.', ru: 'Со временами года и месяцами всегда "in": in winter, in May.' } }),
      c.fix("It's hot in Summer.", 'Summer', 'summer', { why: { pl: 'Pory roku piszemy małą literą (a miesiące wielką!).', ru: 'Времена года пишутся с маленькой буквы (а месяцы с большой!).' } }),
      c.fix("It's cold on winter.", 'on', 'in', { why: { pl: 'in winter, in summer: pory roku zawsze z "in".', ru: 'in winter, in summer: с временами года всегда "in".' } }),
      c.fix('There are four season in a year.', 'season', 'seasons', { why: { pl: 'Cztery = więcej niż jedna, więc dodajemy -s.', ru: 'Четыре = больше одного, поэтому добавляем -s.' } }),
      c.type({ en: 'Write in English: jesień / осень', pl: 'Napisz po angielsku: jesień', ru: 'Напиши по-английски: осень' }, 'autumn', ['fall']),
      c.type({ en: 'Write in English: wiosna / весна', pl: 'Napisz po angielsku: wiosna', ru: 'Напиши по-английски: весна' }, 'spring'),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: "Hi! What's your favourite season?", replies: ['My favourite season is summer.', "I'm ten.", "It's a pen."] },
        { say: 'Why?', replies: ["It's hot and I'm on holiday!", "It's Monday.", "I'm from Poland."] },
        { say: 'Is it cold in winter in Poland?', replies: ["Yes, it's very cold!", 'Yes, it is a cat.', "No, it's Tuesday."] }
      ])
    ]
  });

  const M = [
    ['January', 'styczeń', 'январь', '⛄', 'Jan-u-ary ~ январь'],
    ['February', 'luty', 'февраль', '💘', 'Feb-ru-ary ~ февраль (w środku ukryte "r"!)'],
    ['March', 'marzec', 'март', '🌱', 'March ~ marzec ~ март'],
    ['April', 'kwiecień', 'апрель', '🌧️', 'April ~ апрель ~ prima aprilis'],
    ['May', 'maj', 'май', '🌸', 'May ~ maj ~ май'],
    ['June', 'czerwiec', 'июнь', '🍓', 'June ~ июнь, czyta się "dżun"'],
    ['July', 'lipiec', 'июль', '🏖️', 'July ~ июль, czyta się "dżu-LAJ"'],
    ['August', 'sierpień', 'август', '🌻', 'August ~ август'],
    ['September', 'wrzesień', 'сентябрь', '🎒', 'Sep-tem-ber ~ сентябрь: szkoła!'],
    ['October', 'październik', 'октябрь', '🎃', 'Oc-to-ber ~ октябрь: Halloween'],
    ['November', 'listopad', 'ноябрь', '🍁', 'No-vem-ber ~ ноябрь'],
    ['December', 'grudzień', 'декабрь', '🎄', 'De-cem-ber ~ декабрь: święta']
  ];
  function month(m) {
    return w(m[0], m[1], m[2], m[3], {
      pl: m[4] + '. Po rosyjsku prawie tak samo! ' + CAP.pl,
      ru: m[0] + ' ~ ' + m[2] + ': почти как по-русски! ' + CAP.ru
    });
  }
  const capWhy = { pl: CAP.pl, ru: CAP.ru };
  const inWhy = { pl: 'Z miesiącami mówimy "in": in May, in July. (A z dniami "on": on Monday.)', ru: 'С месяцами говорим "in": in May, in July. (А с днями "on": on Monday.)' };
  const afterQ = function (a, b, opts) {
    return c.mcq({ en: 'Which month comes after ' + a + '?', pl: 'Jaki miesiąc jest po ' + a + '?', ru: 'Какой месяц идёт после ' + a + '?' }, opts, b, { why: { pl: a + ' ➜ ' + b, ru: a + ' ➜ ' + b }, say: a + ', ' + b });
  };

  EQ.registerLesson({
    id: 'x-months-1', unit: 'Focus: months and seasons', title: 'Months: January to June', emoji: '🗓️', focus: true,
    words: M.slice(0, 6).map(month),
    sentences: [
      s('My birthday is in May.', 'Mam urodziny w maju.', 'Мой день рождения в мае.'),
      s('January is the first month.', 'Styczeń to pierwszy miesiąc.', 'Январь первый месяц.'),
      s("It's cold in February.", 'W lutym jest zimno.', 'В феврале холодно.'),
      s('When is your birthday?', 'Kiedy masz urodziny?', 'Когда у тебя день рождения?')
    ],
    quizzes: [
      c.order('January February March', 'Ułóż po kolei: styczeń, luty, marzec', 'По порядку: январь, февраль, март'),
      c.order('April May June', 'Ułóż po kolei: kwiecień, maj, czerwiec', 'По порядку: апрель, май, июнь'),
      afterQ('January', 'February', ['February', 'March', 'December', 'June']),
      afterQ('March', 'April', ['April', 'May', 'February', 'August']),
      afterQ('May', 'June', ['June', 'July', 'March', 'April']),
      c.sort({ en: 'Winter or spring? (in Poland)', pl: 'Zima czy wiosna? (w Polsce)', ru: 'Зима или весна? (в Польше)' }, { 'winter ❄️': ['January', 'February'], 'spring 🌷': ['March', 'April', 'May'], 'summer ☀️': ['June'] }),
      c.fix('My birthday is in may.', 'may', 'May', { why: capWhy }),
      c.fix('January is the first month.'.replace('January', 'january'), 'january', 'January', { why: capWhy }),
      c.fix('My birthday is on April.', 'on', 'in', { why: inWhy }),
      c.fix('Febuary is cold.', 'Febuary', 'February', { why: { pl: 'Feb-RU-ary: nie zapomnij o "r" w środku!', ru: 'Feb-RU-ary: не забудь "r" в середине!' } }),
      c.type({ en: 'Write the month: luty / февраль', pl: 'Napisz miesiąc: luty', ru: 'Напиши месяц: февраль' }, 'February', [], { why: capWhy }),
      c.type({ en: 'Write the month: czerwiec / июнь', pl: 'Napisz miesiąc: czerwiec', ru: 'Напиши месяц: июнь' }, 'June', [], { why: capWhy }),
      c.type({ en: 'January, February, ___', pl: 'January, February, ___', ru: 'January, February, ___' }, 'March'),
      c.type({ en: 'Which is the first month of the year?', pl: 'Który miesiąc jest pierwszy w roku?', ru: 'Какой месяц первый в году?' }, 'January'),
      c.tf({ en: 'Easter is usually in March or April.', pl: 'Wielkanoc jest zwykle w marcu albo kwietniu.', ru: 'Пасха обычно в марте или апреле.' }, true),
      c.chat({ e: '🤖', name: 'Robbie' }, [
        { say: 'When is your birthday?', replies: ["It's in March.", "I'm eleven.", "It's on the desk."] },
        { say: 'Cool! Is it cold in March?', replies: ['Yes, a little.', 'Yes, I am a robot.', "No, it's a pencil."] },
        { say: 'What month is after March?', replies: ['April.', 'February.', 'Monday.'] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'x-months-2', unit: 'Focus: months and seasons', title: 'Months: July to December', emoji: '🗓️', focus: true,
    words: M.slice(6).map(month),
    sentences: [
      s('School starts in September.', 'Szkoła zaczyna się we wrześniu.', 'Школа начинается в сентябре.'),
      s('Christmas is in December.', 'Boże Narodzenie jest w grudniu.', 'Рождество в декабре.'),
      s('Halloween is in October.', 'Halloween jest w październiku.', 'Хэллоуин в октябре.'),
      s('There are twelve months in a year.', 'W roku jest dwanaście miesięcy.', 'В году двенадцать месяцев.')
    ],
    quizzes: [
      c.order('July August September', 'Ułóż po kolei: lipiec, sierpień, wrzesień', 'По порядку: июль, август, сентябрь'),
      c.order('October November December', 'Ułóż po kolei: październik, listopad, grudzień', 'По порядку: октябрь, ноябрь, декабрь'),
      afterQ('July', 'August', ['August', 'June', 'September', 'April']),
      afterQ('October', 'November', ['November', 'December', 'September', 'August']),
      afterQ('December', 'January', ['January', 'November', 'February', 'June']),
      c.sort({ en: 'Which season? (in Poland)', pl: 'Jaka pora roku? (w Polsce)', ru: 'Какое время года? (в Польше)' }, { 'summer ☀️': ['July', 'August'], 'autumn 🍂': ['September', 'October', 'November'], 'winter ❄️': ['December', 'January'] }),
      c.sort({ en: 'Month or day?', pl: 'Miesiąc czy dzień tygodnia?', ru: 'Месяц или день недели?' }, { 'month 🗓️': ['June', 'March', 'November', 'August'], 'day 🗓️': ['Monday', 'Friday', 'Sunday', 'Tuesday'] }),
      c.fix('Christmas is in december.', 'december', 'December', { why: capWhy }),
      c.fix('School starts on September.', 'on', 'in', { why: inWhy }),
      c.fix('Halloween is in November.', 'November', 'October', { why: { pl: 'Halloween: 31 października = 31 October 🎃', ru: 'Хэллоуин: 31 октября = 31 October 🎃' } }),
      c.fix('There are twelve month in a year.', 'month', 'months', { why: { pl: 'Dwanaście = dużo, więc months z -s.', ru: 'Двенадцать = много, поэтому months с -s.' } }),
      c.type({ en: 'Write the month: wrzesień / сентябрь', pl: 'Napisz miesiąc: wrzesień', ru: 'Напиши месяц: сентябрь' }, 'September', [], { why: capWhy }),
      c.type({ en: 'Write the month: grudzień / декабрь', pl: 'Napisz miesiąc: grudzień', ru: 'Напиши месяц: декабрь' }, 'December', [], { why: capWhy }),
      c.type({ en: 'October, November, ___', pl: 'October, November, ___', ru: 'October, November, ___' }, 'December'),
      c.type({ en: 'How many months are there in a year? (in words)', pl: 'Ile miesięcy ma rok? (słowem)', ru: 'Сколько месяцев в году? (словом)' }, 'twelve'),
      c.tf({ en: 'July is a winter month in Poland.', pl: 'Lipiec to w Polsce miesiąc zimowy.', ru: 'Июль в Польше зимний месяц.' }, false, { why: { pl: 'July = lipiec = lato ☀️', ru: 'July = июль = лето ☀️' } }),
      c.chat({ e: '🐱', name: 'Lily' }, [
        { say: 'What month is it now?', replies: ["It's November.", "It's Monday.", "It's twelve."] },
        { say: 'And when does school start?', replies: ['In September.', 'In the garden.', 'On holiday.'] },
        { say: 'What is your favourite month?', replies: ['December, because of Christmas!', "I'm from Spain.", "It's a big book."] }
      ])
    ]
  });

  EQ.registerLesson({
    id: 'x-months-all', unit: 'Focus: months and seasons', title: 'All twelve months', emoji: '🏆', focus: true,
    words: [], sentences: [],
    quizzes: [
      c.order('January February March April May June', 'Ułóż pierwsze sześć miesięcy', 'Расставь первые шесть месяцев'),
      c.order('July August September October November December', 'Ułóż ostatnie sześć miesięcy', 'Расставь последние шесть месяцев'),
      c.sort({ en: 'Sort the months into seasons', pl: 'Posortuj miesiące na pory roku', ru: 'Разложи месяцы по временам года' }, { 'spring 🌷': ['March', 'April', 'May'], 'summer ☀️': ['June', 'July', 'August'], 'autumn 🍂': ['September', 'October', 'November'] }),
      c.type({ en: 'May, June, ___', pl: 'May, June, ___', ru: 'May, June, ___' }, 'July'),
      c.type({ en: 'August, September, ___', pl: 'August, September, ___', ru: 'August, September, ___' }, 'October'),
      c.type({ en: 'The month before March?', pl: 'Miesiąc przed marcem?', ru: 'Месяц перед мартом?' }, 'February'),
      c.type({ en: 'The month before June?', pl: 'Miesiąc przed czerwcem?', ru: 'Месяц перед июнем?' }, 'May'),
      c.type({ en: 'The last month of the year?', pl: 'Ostatni miesiąc roku?', ru: 'Последний месяц года?' }, 'December'),
      afterQ('June', 'July', ['July', 'June', 'January', 'August']),
      afterQ('November', 'December', ['December', 'October', 'September', 'January']),
      afterQ('February', 'March', ['March', 'May', 'January', 'April']),
      c.fix('My birthday is in july.', 'july', 'July', { why: capWhy }),
      c.fix('It is hot on August.', 'on', 'in', { why: inWhy }),
      c.fix('Children go to school in Agust.', 'Agust', 'August', { why: { pl: 'AU-gust, jak po rosyjsku август', ru: 'AU-gust, как август' } }),
      c.mcq({ en: 'Your birthday is on 5th June. Your birthday is in...', pl: 'Masz urodziny 5 czerwca. Twoje urodziny są w...', ru: 'Твой день рождения 5 июня. Он в...' }, ['June', 'July', 'January', 'May'], 'June', { why: { pl: 'czerwiec = June, lipiec = July: łatwo pomylić! June ~ июнь, July ~ июль', ru: 'June = июнь, July = июль: их легко перепутать!' } }),
      c.mcq({ en: 'Lipiec / Июль', pl: 'Lipiec', ru: 'Июль' }, ['July', 'June', 'January', 'April'], 'July', { why: { pl: 'July ~ июль, czyta się "dżu-LAJ"', ru: 'July ~ июль' } })
    ]
  });
})(window.EQ);
