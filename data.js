const MATERIALS = [
  { id: 1, level: "A1", category: "theory", topic: "pronouns", title: "01. Личные местоимения и глагол to be", content: `
<h3>Личные местоимения</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td>I</td><td>я</td><td>I am Anna.</td></tr>
<tr><td>you</td><td>ты / вы</td><td>You are here.</td></tr>
<tr><td>he</td><td>он</td><td>He is my brother.</td></tr>
<tr><td>she</td><td>она</td><td>She is a teacher.</td></tr>
<tr><td>it</td><td>оно; предмет/животное</td><td>It is a cat.</td></tr>
<tr><td>we</td><td>мы</td><td>We are friends.</td></tr>
<tr><td>they</td><td>они</td><td>They are at home.</td></tr>
</table>
<h3>Формы to be в настоящем времени</h3>
<table>
<tr><th>Утверждение</th><th>Краткая форма</th></tr>
<tr><td>I am</td><td>I'm</td></tr>
<tr><td>You are</td><td>You're</td></tr>
<tr><td>He is / She is / It is</td><td>He's / She's / It's</td></tr>
<tr><td>We are / They are</td><td>We're / They're</td></tr>
</table>
<p><b>Примеры:</b> I'm 20. She's happy. We're from Spain. They are at home.</p>
<h3>Отрицание</h3>
<p>Поставьте <b>not</b> после am/is/are:</p>
<ul>
<li>I am not tired. = I'm not tired.</li>
<li>He is not here. = He isn't here.</li>
<li>They are not late. = They aren't late.</li>
</ul>
<h3>Вопрос</h3>
<p>Поставьте am/is/are перед подлежащим:</p>
<ul>
<li>Are you ready? — Yes, I am. / No, I'm not.</li>
<li>Is she your sister? — Yes, she is.</li>
<li>Are they at home? — No, they aren't.</li>
</ul>
<h3>Краткие ответы</h3>
<p>В ответе обычно повторяем <b>to be</b>, а не всё предложение: Is he a student? — Yes, he is. Are you tired? — No, I'm not.</p>
<h3>Полезные модели</h3>
<ul>
<li>I'm from Russia.</li>
<li>I'm a student.</li>
<li>She's 25 years old.</li>
<li>It's cold today.</li>
<li>We're happy.</li>
<li>They aren't at school.</li>
</ul>
` },
  { id: 2, level: "A1", category: "theory", topic: "articles_nouns", title: "02. Артикли, множественное число существительных, местоимения и указательные слова", content: `
<h3>A и an</h3>
<p><b>A/an</b> ставится перед одним исчисляемым существительным в единственном числе, когда говорим о предмете не как о конкретном известном объекте.</p>
<ul>
<li>a book, a car, a teacher</li>
<li>an apple, an egg, an orange</li>
</ul>
<p>Выбираем по звуку: <b>an</b> перед гласным звуком, <b>a</b> перед согласным звуком.</p>
<ul>
<li>a university (начинается со звука /j/)</li>
<li>an hour (h не произносится)</li>
</ul>
<p><b>Примеры:</b> I'm a doctor. It's an old house.</p>
<h3>The</h3>
<p><b>The</b> употребляется, когда понятно, о каком именно предмете говорим:</p>
<ul>
<li>I have a cat. The cat is black.</li>
<li>Close the door, please. (понятно, какая дверь)</li>
</ul>
<h3>Множественное число</h3>
<p>Обычно добавляем <b>-s</b>: book → books, friend → friends</p>
<p>Добавляем <b>-es</b> после некоторых окончаний: bus → buses, box → boxes, watch → watches</p>
<p>Если слово заканчивается на согласную + <b>y</b>, часто y меняется на <b>-ies</b>: baby → babies, city → cities</p>
<p>Неправильные формы: child → children, man → men, woman → women, person → people</p>
<h3>This, that, these, those</h3>
<table>
<tr><th>Слово</th><th>Значение</th><th>Пример</th></tr>
<tr><td>this</td><td>этот/эта/это, рядом, ед. число</td><td>This is my bag.</td></tr>
<tr><td>that</td><td>тот/та/то, дальше, ед. число</td><td>That is our house.</td></tr>
<tr><td>these</td><td>эти, рядом, мн. число</td><td>These are my keys.</td></tr>
<tr><td>those</td><td>те, дальше, мн. число</td><td>Those are your shoes.</td></tr>
</table>
<h3>Притяжательные местоимения</h3>
<table>
<tr><th>Местоимение</th><th>Форма</th><th>Пример</th></tr>
<tr><td>I</td><td>my</td><td>my phone</td></tr>
<tr><td>you</td><td>your</td><td>your name</td></tr>
<tr><td>he</td><td>his</td><td>his car</td></tr>
<tr><td>she</td><td>her</td><td>her bag</td></tr>
<tr><td>it</td><td>its</td><td>its name</td></tr>
<tr><td>we</td><td>our</td><td>our house</td></tr>
<tr><td>they</td><td>their</td><td>their children</td></tr>
</table>
<p>Перед существительным используем <b>my/your/his...</b>: This is my book. Не говорим ❌ <i>This is mine book</i> на этом этапе.</p>
` },
  { id: 3, level: "A1", category: "theory", topic: "present_simple", title: "03. Present Simple: привычки и факты", content: `
<h3>Когда используем</h3>
<p>Present Simple нужен для привычек, повторяющихся действий, фактов и простых описаний.</p>
<ul>
<li>I live in Berlin.</li>
<li>We work every day.</li>
<li>The shop opens at nine.</li>
<li>He likes music.</li>
</ul>
<h3>Утверждение</h3>
<table>
<tr><th>Подлежащее</th><th>Формула</th><th>Пример</th></tr>
<tr><td>I / you / we / they</td><td>глагол в обычной форме</td><td>I work. They play tennis.</td></tr>
<tr><td>he / she / it</td><td>глагол + <b>-s/-es</b></td><td>She works. He watches TV.</td></tr>
</table>
<p>Окончание: work → works; go → goes; watch → watches; study → studies</p>
<h3>Отрицание</h3>
<p>Используем <b>don't</b> или <b>doesn't</b> + обычная форма глагола:</p>
<ul>
<li>I don't drink coffee.</li>
<li>They don't live here.</li>
<li>She doesn't work on Sunday.</li>
<li>He doesn't like fish.</li>
</ul>
<p>После <b>doesn't</b> не добавляем -s: ✅ <i>She doesn't like it.</i></p>
<h3>Вопрос</h3>
<p><b>Do/Does + подлежащее + глагол?</b></p>
<ul>
<li>Do you speak English?</li>
<li>Do they play football?</li>
<li>Does he work here?</li>
<li>Does Anna like tea?</li>
</ul>
<p>Краткие ответы: Do you live here? — Yes, I do. / No, I don't. Does she drive? — Yes, she does. / No, she doesn't.</p>
<h3>Частотные слова</h3>
<ul>
<li>always — всегда</li>
<li>usually — обычно</li>
<li>often — часто</li>
<li>sometimes — иногда</li>
<li>never — никогда</li>
<li>every day — каждый день</li>
</ul>
<p>Частотное наречие обычно стоит перед смысловым глаголом: I <b>often go</b> by bus. С глаголом <b>to be</b> — после него: She <b>is always</b> busy.</p>
<h3>Вопросительные слова</h3>
<ul>
<li>What — что / какой</li>
<li>Where — где / куда</li>
<li>When — когда</li>
<li>Who — кто</li>
<li>Why — почему</li>
<li>How — как</li>
<li>How often — как часто</li>
</ul>
<p>Примеры: Where do you live? What does he do? How often do you study?</p>
` },
  { id: 4, level: "A1", category: "theory", topic: "questions_numbers", title: "04. Вопросы, числа, время и даты", content: `
<h3>Порядок слов в вопросах</h3>
<p><b>С глаголом to be:</b> Am/Is/Are + подлежащее...?</p>
<ul>
<li>Are you tired?</li>
<li>Is he at home?</li>
<li>Where are they?</li>
</ul>
<p><b>С обычным глаголом в Present Simple:</b> Do/Does + подлежащее + глагол...?</p>
<ul>
<li>Do you work here?</li>
<li>Does she speak English?</li>
<li>Where does he live?</li>
</ul>
<h3>Вопросительные слова</h3>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td>What</td><td>что / какой</td><td>What's your name?</td></tr>
<tr><td>Where</td><td>где / куда</td><td>Where do you live?</td></tr>
<tr><td>When</td><td>когда</td><td>When is your birthday?</td></tr>
<tr><td>Who</td><td>кто</td><td>Who is that?</td></tr>
<tr><td>Why</td><td>почему</td><td>Why are you sad?</td></tr>
<tr><td>How</td><td>как</td><td>How are you?</td></tr>
<tr><td>How old</td><td>сколько лет</td><td>How old are you?</td></tr>
<tr><td>How much</td><td>сколько (цена/неисчисляемое)</td><td>How much is it?</td></tr>
<tr><td>How many</td><td>сколько (исчисляемое)</td><td>How many books?</td></tr>
</table>
<h3>Числа</h3>
<p>Запомните отдельно:</p>
<ul>
<li>13 thirteen, 30 thirty</li>
<li>14 fourteen, 40 forty</li>
<li>15 fifteen, 50 fifty</li>
<li>18 eighteen, 80 eighty</li>
</ul>
<p>В числах 21–99 обычно ставится дефис: twenty-one, thirty-five.</p>
<h3>Время</h3>
<ul>
<li>7:00 — seven o'clock</li>
<li>7:15 — seven fifteen / quarter past seven</li>
<li>7:30 — seven thirty / half past seven</li>
<li>7:45 — seven forty-five / quarter to eight</li>
</ul>
<p>Для начала можно уверенно пользоваться цифровым способом: seven fifteen, seven thirty.</p>
<h3>Дни недели</h3>
<p>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Названия дней и месяцев пишутся с большой буквы.</p>
<h3>Месяцы</h3>
<p>January, February, March, April, May, June, July, August, September, October, November, December.</p>
<h3>Представиться</h3>
<ul>
<li>What's your name? — My name is Alex.</li>
<li>Where are you from? — I'm from Poland.</li>
<li>How old are you? — I'm 22.</li>
<li>What do you do? — I'm a student.</li>
<li>What time is it? — It's half past six.</li>
</ul>
` },
  { id: 5, level: "A1", category: "theory", topic: "there_is", title: "05. There is / There are и have got", content: `
<h3>There is / There are</h3>
<p>Используем, когда говорим, что где-то что-то есть или находится.</p>
<table>
<tr><th>Единственное число</th><th>Множественное число</th></tr>
<tr><td>There is a chair in the room.</td><td>There are two chairs in the room.</td></tr>
<tr><td>There's a shop near here.</td><td>There are some shops near here.</td></tr>
</table>
<h3>Отрицание</h3>
<ul>
<li>There isn't a bathroom upstairs.</li>
<li>There aren't any apples.</li>
</ul>
<h3>Вопрос</h3>
<ul>
<li>Is there a bank near here? — Yes, there is. / No, there isn't.</li>
<li>Are there any chairs? — Yes, there are. / No, there aren't.</li>
</ul>
<h3>Have got</h3>
<p><b>Have got</b> часто используется для владения, семьи и описания внешности.</p>
<ul>
<li>I have got a brother. / I've got a brother.</li>
<li>She has got blue eyes.</li>
<li>We have got a small flat.</li>
</ul>
<table>
<tr><th>Утверждение</th><th>Отрицание</th><th>Вопрос</th></tr>
<tr><td>I/you/we/they have got</td><td>haven't got</td><td>Have ... got?</td></tr>
<tr><td>he/she/it has got</td><td>hasn't got</td><td>Has ... got?</td></tr>
</table>
<p><b>Примеры:</b> Have you got a car? — Yes, I have. / No, I haven't. Has he got a sister? — Yes, he has. They haven't got a garden.</p>
<p>В современном английском также часто говорят <b>have</b> без got: I have a car. Для A1 полезно узнавать обе формы.</p>
<h3>Описание комнаты</h3>
<ul>
<li>There is a bed next to the window.</li>
<li>There are two pictures on the wall.</li>
<li>I've got a desk and a chair.</li>
<li>My room hasn't got a TV.</li>
</ul>
` },
  { id: 6, level: "A1", category: "theory", topic: "can_imperatives", title: "06. Can, просьбы и повелительные фразы", content: `
<h3>Can / can't</h3>
<p><b>Can</b> выражает умение или возможность:</p>
<ul>
<li>I can swim.</li>
<li>She can speak English.</li>
<li>We can't come today.</li>
</ul>
<p>После can используется обычная форма глагола без <b>to</b> и без <b>-s</b>: He can drive. (не ❌ <i>can drives</i>)</p>
<h3>Вопросы и короткие ответы</h3>
<ul>
<li>Can you help me? — Yes, I can. / No, I can't.</li>
<li>Can she cook? — Yes, she can.</li>
<li>Can I sit here? — Yes, of course.</li>
</ul>
<p><b>Can I...?</b> — попросить разрешение. <b>Can you...?</b> — попросить кого-то что-то сделать.</p>
<h3>Вежливые фразы</h3>
<ul>
<li>Can you help me, please? — Вы можете мне помочь?</li>
<li>Can I have a coffee, please? — Можно мне кофе?</li>
<li>Could you repeat that, please? — Не могли бы вы повторить? (вежливая фраза, полезная для запоминания)</li>
<li>Sorry, I don't understand.</li>
<li>Could you speak more slowly, please?</li>
<li>Thank you. / You're welcome.</li>
</ul>
<h3>Повелительное наклонение</h3>
<p>Используем глагол в начальной форме:</p>
<ul>
<li>Open the book.</li>
<li>Turn left.</li>
<li>Please sit down.</li>
</ul>
<p>Отрицание: <b>Don't + глагол</b></p>
<ul>
<li>Don't run.</li>
<li>Don't worry.</li>
<li>Don't open the window.</li>
</ul>
<h3>Полезные инструкции</h3>
<ul>
<li>Listen and repeat.</li>
<li>Read the text.</li>
<li>Write your name.</li>
<li>Look at the picture.</li>
<li>Choose the correct answer.</li>
<li>Match the words.</li>
</ul>
` },
  { id: 7, level: "A1", category: "theory", topic: "present_continuous", title: "07. Present Continuous: что происходит сейчас", content: `
<h3>Когда используем</h3>
<p>Для действия, которое происходит сейчас, в момент речи:</p>
<ul>
<li>I'm reading now.</li>
<li>She's cooking.</li>
<li>They are playing football.</li>
</ul>
<h3>Формула</h3>
<p><b>am / is / are + глагол-ing</b></p>
<table>
<tr><th>Подлежащее</th><th>Форма</th></tr>
<tr><td>I</td><td>am working</td></tr>
<tr><td>he / she / it</td><td>is working</td></tr>
<tr><td>you / we / they</td><td>are working</td></tr>
</table>
<h3>Отрицание</h3>
<ul>
<li>I'm not sleeping.</li>
<li>He isn't listening.</li>
<li>We aren't watching TV.</li>
</ul>
<h3>Вопрос</h3>
<p><b>Am/Is/Are + подлежащее + глагол-ing?</b></p>
<ul>
<li>Are you studying? — Yes, I am.</li>
<li>Is she working? — No, she isn't.</li>
<li>What are they doing? — They're eating.</li>
</ul>
<h3>Как добавить -ing</h3>
<ul>
<li>work → working</li>
<li>read → reading</li>
<li>make → making (убираем конечную немую -e)</li>
<li>run → running (удваиваем согласную в некоторых коротких словах)</li>
</ul>
<h3>Слова-подсказки</h3>
<p>now, right now, at the moment, today.</p>
<h3>Present Simple или Present Continuous?</h3>
<ul>
<li>I work in a shop. — Это моя работа вообще.</li>
<li>I'm working now. — Я работаю в данный момент.</li>
<li>She usually walks to school. — Привычка.</li>
<li>She's walking to school now. — Действие сейчас.</li>
</ul>
` },
  { id: 8, level: "A1", category: "theory", topic: "past_simple", title: "08. Past Simple: базовый рассказ о прошлом", content: `
<p>На A1 достаточно начать с частых форм и простых предложений о вчерашнем дне, выходных или прошлой поездке.</p>
<h3>Глагол to be в прошлом</h3>
<ul>
<li>I / he / she / it <b>was</b></li>
<li>you / we / they <b>were</b></li>
</ul>
<p><b>Примеры:</b></p>
<ul>
<li>I was at home yesterday.</li>
<li>They were tired.</li>
<li>She wasn't at work.</li>
<li>Were you at school? — Yes, I was.</li>
</ul>
<h3>Правильные глаголы</h3>
<p>Часто добавляем <b>-ed</b>:</p>
<ul>
<li>work → worked</li>
<li>play → played</li>
<li>watch → watched</li>
</ul>
<p>Если глагол заканчивается на согласную + y: study → studied. Некоторые формы меняют написание: live → lived.</p>
<h3>Частые неправильные глаголы</h3>
<table>
<tr><th>Present</th><th>Past</th><th>Значение</th></tr>
<tr><td>go</td><td>went</td><td>идти/ехать</td></tr>
<tr><td>have</td><td>had</td><td>иметь</td></tr>
<tr><td>do</td><td>did</td><td>делать</td></tr>
<tr><td>get</td><td>got</td><td>получать/добраться</td></tr>
<tr><td>see</td><td>saw</td><td>видеть</td></tr>
<tr><td>eat</td><td>ate</td><td>есть</td></tr>
<tr><td>come</td><td>came</td><td>приходить</td></tr>
<tr><td>buy</td><td>bought</td><td>покупать</td></tr>
<tr><td>make</td><td>made</td><td>делать/создавать</td></tr>
<tr><td>take</td><td>took</td><td>брать</td></tr>
<tr><td>be</td><td>was/were</td><td>быть</td></tr>
</table>
<h3>Утверждение</h3>
<ul>
<li>I watched a film yesterday.</li>
<li>We went to the park.</li>
<li>She had breakfast at eight.</li>
</ul>
<h3>Отрицание</h3>
<p><b>didn't + обычная форма глагола</b></p>
<ul>
<li>I didn't watch TV.</li>
<li>He didn't go to work.</li>
</ul>
<p>После didn't используем начальную форму: didn't go, не ❌ <i>didn't went</i>.</p>
<h3>Вопрос</h3>
<p><b>Did + подлежащее + обычная форма?</b></p>
<ul>
<li>Did you enjoy the film? — Yes, I did. / No, I didn't.</li>
<li>Where did they go?</li>
<li>What did you eat?</li>
</ul>
<h3>Слова о прошлом</h3>
<p>yesterday, last night, last week, last year, two days ago.</p>
` },
  { id: 9, level: "A1", category: "theory", topic: "prepositions", title: "09. Предлоги места и времени и повседневные фразы", content: `
<h3>Предлоги места</h3>
<table>
<tr><th>Предлог</th><th>Значение</th><th>Пример</th></tr>
<tr><td>in</td><td>внутри</td><td>The keys are in the bag.</td></tr>
<tr><td>on</td><td>на поверхности</td><td>The book is on the table.</td></tr>
<tr><td>under</td><td>под</td><td>The cat is under the chair.</td></tr>
<tr><td>next to</td><td>рядом с</td><td>The bank is next to the shop.</td></tr>
<tr><td>behind</td><td>позади</td><td>The car is behind the house.</td></tr>
<tr><td>in front of</td><td>перед</td><td>I'm in front of the station.</td></tr>
<tr><td>between</td><td>между</td><td>The café is between the bank and the hotel.</td></tr>
<tr><td>opposite</td><td>напротив</td><td>The school is opposite the park.</td></tr>
</table>
<h3>Предлоги времени</h3>
<ul>
<li><b>at</b> + точное время: at six, at 8:30</li>
<li><b>on</b> + день/дата: on Monday, on 12 June</li>
<li><b>in</b> + месяц/год/часть дня: in May, in 2025, in the morning</li>
<li>at night — ночью</li>
<li>at the weekend — на выходных (часто в британском английском); on the weekend также используется в американском английском.</li>
</ul>
<h3>Местоимения после предлогов</h3>
<ul>
<li>with me — со мной</li>
<li>for you — для тебя/вас</li>
<li>to him — ему/к нему</li>
<li>with her — с ней</li>
<li>for us — для нас</li>
<li>to them — им/к ним</li>
</ul>
` },
    { id: 11, level: "A1", category: "practice", topic: "p1", title: "01. Местоимения и to be", content: `
<h3>A. Вставьте am/is/are</h3>
<ol>
<li>I [[am]] happy.</li>
<li>They [[are]] at home.</li>
<li>She [[is]] my sister.</li>
<li>We [[are]] not late.</li>
</ol>
<h3>B. Выберите правильный вариант</h3>
<ol>
<li>[[?mc:Is|Are|Am]] he a student?</li>
<li>Where [[?mc:are|is|am]] you from?</li>
<li>It [[?mc:is|are|am]] a cat.</li>
<li>We [[?mc:aren't|isn't|amn't]] late.</li>
<li>[[?mc:Are|Is|Am]] they at home?</li>
</ol>
<h3>C. Сделайте отрицание</h3>
<ol>
<li>He is tired. → [[He isn't tired|He is not tired]]</li>
<li>I'm from Spain. → [[I'm not from Spain|I am not from Spain]]</li>
<li>They are ready. → [[They aren't ready|They are not ready]]</li>
</ol>
<h3>D. Соберите предложение из слов</h3>
<ol>
<li>[[?order:I|am|a|student]]</li>
<li>[[?order:They|are|at|home]]</li>
<li>[[?order:He|is|not|tired]]</li>
<li>[[?order:Are|you|ready]]</li>
<li>[[?order:She|is|my|sister]]</li>
</ol>
<h3>E. Переведите</h3>
<ol>
<li>Я студент. → [[I'm a student|I am a student]]</li>
<li>Она не дома. → [[She isn't at home|She is not at home]]</li>
<li>Вы готовы? → [[Are you ready?]]</li>
</ol>
` },

  { id: 12, level: "A1", category: "practice", topic: "p2", title: "02. Артикли, множественное число и притяжательные", content: `
<h3>A. Вставьте a/an/the</h3>
<ol>
<li>She's [[a]] teacher.</li>
<li>I eat [[an]] apple every day.</li>
<li>[[The]] sun is bright.</li>
<li>It's [[an]] old house.</li>
</ol>
<h3>B. Выберите правильный вариант</h3>
<ol>
<li>I have two [[?mc:children|childs|childes]].</li>
<li>[[?mc:These|This|Those]] are my books.</li>
<li>That is [[?mc:his|he|him]] car.</li>
<li>This is [[?mc:an|a|the]] apple.</li>
<li>It's [[?mc:a|an|the]] university.</li>
</ol>
<h3>C. Напишите множественное число</h3>
<ol>
<li>book → [[books]]</li>
<li>bus → [[buses]]</li>
<li>city → [[cities]]</li>
<li>child → [[children]]</li>
</ol>
<h3>D. Соберите предложение из слов</h3>
<ol>
<li>[[?order:This|is|my|book]]</li>
<li>[[?order:These|are|my|shoes]]</li>
<li>[[?order:He|has|a|dog]]</li>
<li>[[?order:That|is|her|car]]</li>
<li>[[?order:The|dog|is|black]]</li>
</ol>
<h3>E. Переведите</h3>
<ol>
<li>Это моя сумка. → [[This is my bag|This is my handbag]]</li>
<li>Он учитель. → [[He is a teacher|He's a teacher]]</li>
<li>Эти дети мои друзья. → [[These children are my friends]]</li>
</ol>
` },

  { id: 13, level: "A1", category: "practice", topic: "p3", title: "03. Present Simple", content: `
<h3>A. Поставьте глагол в нужную форму</h3>
<ol>
<li>She [[works]] (work) in a shop.</li>
<li>I [[go]] (go) to school by bus.</li>
<li>Tom [[studies]] (study) English.</li>
<li>They [[don't like]] (not/like) coffee.</li>
</ol>
<h3>B. Выберите правильный вариант</h3>
<ol>
<li>She [[?mc:works|work|working]] in a bank.</li>
<li>They [[?mc:don't like|doesn't like|not like]] coffee.</li>
<li>[[?mc:Does|Do|Is]] she live here?</li>
<li>He [[?mc:goes|go|gos]] to school by bus.</li>
<li>I [[?mc:study|studies|studying]] English every day.</li>
</ol>
<h3>C. Составьте вопросы</h3>
<ol>
<li>you / speak English → [[Do you speak English?]]</li>
<li>she / live here → [[Does she live here?]]</li>
<li>where / they / work → [[Where do they work?]]</li>
</ol>
<h3>D. Соберите предложение из слов</h3>
<ol>
<li>[[?order:She|works|in|a|shop]]</li>
<li>[[?order:Where|does|she|work]]</li>
<li>[[?order:I|don't|like|coffee]]</li>
<li>[[?order:Do|you|speak|English]]</li>
<li>[[?order:He|doesn't|play|tennis]]</li>
</ol>
<h3>E. Переведите</h3>
<ol>
<li>Я обычно пью чай утром. → [[I usually drink tea in the morning]]</li>
<li>Она не работает по воскресеньям. → [[She doesn't work on Sundays|She does not work on Sundays]]</li>
<li>Где ты живёшь? → [[Where do you live?]]</li>
</ol>
` },

  { id: 14, level: "A1", category: "practice", topic: "p4", title: "04. Вопросы, время, даты и предлоги", content: `
<h3>A. Выберите правильный предлог (at/on/in)</h3>
<ol>
<li>[[?mc:on|at|in]] Monday</li>
<li>[[?mc:at|on|in]] 8 o'clock</li>
<li>[[?mc:in|on|at]] July</li>
<li>[[?mc:in|at|on]] the morning</li>
<li>[[?mc:on|in|at]] 12 June</li>
</ol>
<h3>B. Выберите правильный вариант</h3>
<ol>
<li>[[?mc:When|What|Where]] is your birthday?</li>
<li>My birthday is [[?mc:in|on|at]] June.</li>
<li>We have English lessons [[?mc:on|at|in]] Mondays.</li>
<li>[[?mc:How old|How many|How much]] are you?</li>
</ol>
<h3>C. Составьте вопросы</h3>
<ol>
<li>your name / what → [[What is your name?|What's your name?]]</li>
<li>you / where / live → [[Where do you live?]]</li>
<li>she / how old → [[How old is she?]]</li>
</ol>
<h3>D. Соберите предложение из слов</h3>
<ol>
<li>[[?order:What|is|your|name]]</li>
<li>[[?order:How|old|are|you]]</li>
<li>[[?order:Where|do|you|live]]</li>
<li>[[?order:What|time|is|it]]</li>
<li>[[?order:How|much|is|it]]</li>
</ol>
<h3>E. Переведите</h3>
<ol>
<li>Как тебя зовут? → [[What is your name?|What's your name?]]</li>
<li>Мой день рождения в июне. → [[My birthday is in June]]</li>
<li>Сколько это стоит? → [[How much is it?]]</li>
</ol>
` },

  { id: 15, level: "A1", category: "practice", topic: "p5", title: "05. There is/are, have got и предлоги места", content: `
<h3>A. Вставьте there is / there are</h3>
<ol>
<li>[[There is]] a shop near my house.</li>
<li>[[There are]] two bedrooms in the flat.</li>
<li>[[Is there]] a bank near here?</li>
<li>[[Are there]] any chairs in the room?</li>
</ol>
<h3>B. Выберите правильный вариант</h3>
<ol>
<li>She [[?mc:has got|have got|is got]] two brothers.</li>
<li>The keys are [[?mc:on|in|at]] the table.</li>
<li>[[?mc:Is there|Are there|There is]] a bank near here?</li>
<li>My brother [[?mc:hasn't got|haven't got|isn't got]] a car.</li>
<li>[[?mc:There is|There are|It is]] a shop near my house.</li>
</ol>
<h3>C. Вставьте have got / has got</h3>
<ol>
<li>I [[have got]] a sister.</li>
<li>Mark [[has got]] blue eyes.</li>
<li>She [[hasn't got|has not got]] a car.</li>
</ol>
<h3>D. Соберите предложение из слов</h3>
<ol>
<li>[[?order:There|is|a|shop|near|here]]</li>
<li>[[?order:I|have|got|a|sister]]</li>
<li>[[?order:The|cat|is|under|the|chair]]</li>
<li>[[?order:Have|you|got|a|brother]]</li>
<li>[[?order:There|are|two|bedrooms]]</li>
</ol>
<h3>E. Переведите</h3>
<ol>
<li>В квартире две спальни. → [[There are two bedrooms in the flat|There are two bedrooms in the apartment]]</li>
<li>У тебя есть брат? → [[Have you got a brother?]]</li>
<li>Телефон в сумке. → [[The phone is in the bag]]</li>
</ol>
` },

  { id: 16, level: "A1", category: "practice", topic: "p6", title: "06. Can/can't, просьбы и инструкции", content: `
<h3>A. Выберите правильный вариант</h3>
<ol>
<li>She [[?mc:can|can to|cans]] swim.</li>
<li>[[?mc:Can|Do|Are]] you help me, please?</li>
<li>[[?mc:Don't|Not|Doesn't]] open the window!</li>
<li>I [[?mc:can't|cannot to|don't can]] drive a car.</li>
<li>[[?mc:Could|Can|Are]] you repeat that, please?</li>
</ol>
<h3>B. Вставьте can / can't</h3>
<ol>
<li>Birds [[can]] fly.</li>
<li>I [[can't]] drive; I haven't got a licence.</li>
<li>[[Can]] I sit here?</li>
</ol>
<h3>C. Сделайте команды отрицательными</h3>
<ol>
<li>Run! → [[Don't run!|Do not run!]]</li>
<li>Open the window! → [[Don't open the window!]]</li>
<li>Touch that! → [[Don't touch that!]]</li>
</ol>
<h3>D. Соберите предложение из слов</h3>
<ol>
<li>[[?order:I|can|swim]]</li>
<li>[[?order:Can|you|help|me]]</li>
<li>[[?order:Don't|open|the|window]]</li>
<li>[[?order:She|can't|drive|a|car]]</li>
<li>[[?order:Can|I|sit|here]]</li>
</ol>
<h3>E. Переведите</h3>
<ol>
<li>Я умею плавать, но не умею водить машину. → [[I can swim, but I can't drive|I can swim, but I cannot drive]]</li>
<li>Откройте книгу, пожалуйста. → [[Open the book, please]]</li>
<li>Можно мне стакан воды? → [[Can I have a glass of water, please?]]</li>
</ol>
` },

  { id: 17, level: "A1", category: "practice", topic: "p7", title: "07. Present Continuous", content: `
<h3>A. Поставьте глагол в Present Continuous</h3>
<ol>
<li>I [[am reading]] (read) now.</li>
<li>She [[is cooking]] (cook) dinner.</li>
<li>They [[are playing]] (play) football at the moment.</li>
<li>We [[aren't watching]] (not/watch) TV now.</li>
</ol>
<h3>B. Выберите правильный вариант</h3>
<ol>
<li>She [[?mc:is cooking|cooks|is cook]] dinner now.</li>
<li>They [[?mc:are playing|play|is playing]] football at the moment.</li>
<li>[[?mc:Are|Do|Is]] you listening to me?</li>
<li>We [[?mc:aren't watching|don't watching|isn't watching]] TV now.</li>
<li>Look! The cat [[?mc:is sleeping|sleeps|sleep]] on the sofa.</li>
</ol>
<h3>C. Выберите форму (Present Simple или Continuous)</h3>
<ol>
<li>He usually [[?mc:walks|is walking|walk]] to work.</li>
<li>Look! It [[?mc:is raining|rains|rain]] .</li>
<li>I [[?mc:study|am studying|studies]] every Monday.</li>
<li>They [[?mc:are having|have|has]] lunch right now.</li>
</ol>
<h3>D. Соберите предложение из слов</h3>
<ol>
<li>[[?order:I|am|reading|now]]</li>
<li>[[?order:She|is|cooking|dinner]]</li>
<li>[[?order:What|are|you|doing]]</li>
<li>[[?order:They|are|playing|football]]</li>
<li>[[?order:We|aren't|watching|TV]]</li>
</ol>
<h3>E. Переведите</h3>
<ol>
<li>Я сейчас читаю. → [[I'm reading now|I am reading now]]</li>
<li>Она работает в магазине (вообще). → [[She works in a shop]]</li>
<li>Что ты делаешь сейчас? → [[What are you doing now?]]</li>
</ol>
` },

  { id: 18, level: "A1", category: "practice", topic: "p8", title: "08. Past Simple", content: `
<h3>A. Выберите правильный вариант</h3>
<ol>
<li>We [[?mc:went|go|goed]] to the park yesterday.</li>
<li>Did you [[?mc:see|saw|seen]] him?</li>
<li>She [[?mc:didn't|doesn't|don't]] buy bread.</li>
<li>They [[?mc:were|was|is]] tired.</li>
<li>I [[?mc:saw|see|seen]] Anna yesterday.</li>
</ol>
<h3>B. Вставьте was/were</h3>
<ol>
<li>I [[was]] at home yesterday.</li>
<li>They [[were]] tired.</li>
<li>[[Was]] she at work?</li>
<li>Where [[were]] you last night?</li>
</ol>
<h3>C. Исправьте ошибки</h3>
<ol>
<li>She didn't went home. → [[She didn't go home]]</li>
<li>Did you saw him? → [[Did you see him?]]</li>
<li>They was tired. → [[They were tired]]</li>
</ol>
<h3>D. Соберите предложение из слов</h3>
<ol>
<li>[[?order:I|went|to|school|yesterday]]</li>
<li>[[?order:Where|did|you|go]]</li>
<li>[[?order:She|didn't|buy|bread]]</li>
<li>[[?order:They|were|at|home]]</li>
<li>[[?order:Did|you|see|the|film]]</li>
</ol>
<h3>E. Переведите</h3>
<ol>
<li>Вчера я был дома. → [[I was at home yesterday]]</li>
<li>Мы ходили в парк на прошлой неделе. → [[We went to the park last week]]</li>
<li>Она не купила хлеб. → [[She didn't buy any bread|She didn't buy bread]]</li>
</ol>
` },

  { id: 19, level: "A1", category: "practice", topic: "p9", title: "09. Повседневная лексика и общение", content: `
<h3>A. Вставьте слово</h3>
<p>Слова: kitchen, thirsty, sister, bus, breakfast, bedroom, tired, water.</p>
<ol>
<li>I eat [[breakfast]] in the morning.</li>
<li>I'm [[thirsty]]; I'd like a drink.</li>
<li>My mother's daughter is my [[sister]].</li>
<li>I sleep in my [[bedroom]].</li>
<li>I cook in the [[kitchen]].</li>
</ol>
<h3>B. Выберите правильный ответ</h3>
<ol>
<li>«How are you?» — [[?mc:I'm fine, thanks.|It's Monday.|I'm 25.]]</li>
<li>«How much is it?» — [[?mc:It's five euros.|It's Monday.|I'm from Italy.]]</li>
<li>«Where are you from?» — [[?mc:I'm from Italy.|I'm at home.|I'm fine.]]</li>
<li>«Thank you.» — [[?mc:You're welcome.|Excuse me.|I'm sorry.]]</li>
<li>«Excuse me, where is the toilet?» — [[?mc:It's over there.|I'm fine.|It's five euros.]]</li>
</ol>
<h3>C. Выберите ответ (напишите букву a или b)</h3>
<ol>
<li>“How much is it?” — a) It's Monday. b) It's five euros. → [[b]]</li>
<li>“Where are you from?” — a) I'm from Italy. b) I'm at home. → [[a]]</li>
<li>“Thank you.” — a) You're welcome. b) Excuse me. → [[a]]</li>
</ol>
<h3>D. Соберите предложение из слов</h3>
<ol>
<li>[[?order:Where|is|the|station]]</li>
<li>[[?order:I|don't|understand]]</li>
<li>[[?order:I|live|in|a|small|flat]]</li>
<li>[[?order:Can|I|have|a|cup|of|tea]]</li>
<li>[[?order:I|eat|breakfast|in|the|morning]]</li>
</ol>
<h3>E. Переведите</h3>
<ol>
<li>Извините, где вокзал? → [[Excuse me, where is the station?]]</li>
<li>Я не понимаю. → [[I don't understand|I do not understand]]</li>
<li>Я живу в небольшой квартире с сестрой. → [[I live in a small flat with my sister|I live in a small apartment with my sister]]</li>
</ol>
` },

  { id: 20, level: "A1", category: "practice", topic: "p10", title: "10. Смешанная грамматика", content: `
<p>Вопросы помечены номерами тем (01–09). После проверки внизу появится разбивка: где вы слабы и на какую теорию вернуться.</p>

<h3>A. Выберите правильный вариант</h3>
<ol>
<li>She [[?mc:is|am|are::01]] my sister.</li>
<li>I have [[?mc:an|a|the::02]] apple.</li>
<li>He [[?mc:works|work|working::03]] in a bank.</li>
<li>[[?mc:When|What|Where::04]] is your birthday?</li>
<li>[[?mc:There is|There are|It is::05]] a shop near my house.</li>
<li>[[?mc:Can|Do|Are::06]] you help me, please?</li>
<li>She [[?mc:is cooking|cooks|is cook::07]] dinner now.</li>
<li>We [[?mc:went|go|goed::08]] to the park yesterday.</li>
<li>The keys are [[?mc:on|in|at::09]] the table.</li>
</ol>

<h3>B. Соберите предложения из слов</h3>
<ol>
<li>[[?order:She|is|a|teacher::01]]</li>
<li>[[?order:These|are|my|books::02]]</li>
<li>[[?order:He|works|in|a|shop::03]]</li>
<li>[[?order:Where|do|you|live::04]]</li>
<li>[[?order:There|are|two|bedrooms::05]]</li>
<li>[[?order:I|can|swim::06]]</li>
<li>[[?order:She|is|reading|a|book::07]]</li>
<li>[[?order:I|went|to|school|yesterday::08]]</li>
<li>[[?order:The|book|is|on|the|table::09]]</li>
</ol>

<h3>C. Исправьте ошибки</h3>
<ol>
<li>She go to work every day. → [[She goes to work every day::03]]</li>
<li>I am play football now. → [[I am playing football now|I'm playing football now::07]]</li>
<li>Did you went home? → [[Did you go home::08]]</li>
<li>He don't like tea. → [[He doesn't like tea::03]]</li>
<li>There is two bedrooms. → [[There are two bedrooms::05]]</li>
</ol>

<h3>D. Вставьте правильное слово</h3>
<ol>
<li>They [[?mc:don't like|doesn't like|not like::03]] fish.</li>
<li>[[?mc:Does|Do|Is::03]] she speak English?</li>
<li>The lesson starts [[?mc:at|in|on::04]] nine o'clock.</li>
<li>She [[?mc:has got|have got|is got::05]] two brothers.</li>
<li>[[?mc:Don't|Not|Doesn't::06]] open the window!</li>
</ol>

<h3>E. Выберите форму глагола</h3>
<ol>
<li>[[?mc:Are|Do|Is::07]] you listening to me?</li>
<li>Did you [[?mc:see|saw|seen::08]] him?</li>
<li>They [[?mc:were|was|is::08]] tired.</li>
<li>The cat is [[?mc:under|in|on::09]] the chair.</li>
<li>My birthday is [[?mc:in|on|at::09]] July.</li>
</ol>
` },

  { id: 21, level: "A1", category: "practice", topic: "p11", title: "11. Итоговый тест A1", content: `
<p>30 вопросов по всем темам A1. После проверки внизу появится разбивка по темам: где вы слабы и к какой теории вернуться.</p>

<h3>A. Грамматика (выбор варианта)</h3>
<ol>
<li>I [[?mc:am|is|are::01]] from Germany.</li>
<li>She [[?mc:has got|have got|is got::05]] two brothers.</li>
<li>He [[?mc:doesn't work|don't work|not work::03]] on Sundays.</li>
<li>[[?mc:Do|Does|Is::03]] you speak English?</li>
<li>Look! It [[?mc:is raining|rains|rain::07]] .</li>
<li>We [[?mc:were|was|is::08]] at home yesterday.</li>
<li>Did they [[?mc:visit|visited|visiting::08]] you?</li>
<li>There [[?mc:are|is|am::05]] three books on the desk.</li>
<li>My birthday is [[?mc:in|on|at::09]] May.</li>
<li>The cat is [[?mc:under|in|on::09]] the table.</li>
</ol>

<h3>B. Лексика и фразы</h3>
<ol>
<li>«How are you?» — [[?mc:I'm fine, thanks.|It's Monday.|I'm 25.::09]]</li>
<li>«How much is it?» — [[?mc:It's five euros.|It's Monday.|I'm from Italy.::09]]</li>
<li>This is [[?mc:an|a|the::02]] apple.</li>
<li>I have two [[?mc:children|childs|childes::02]] .</li>
<li>She [[?mc:is cooking|cooks|is cook::07]] dinner now.</li>
</ol>

<h3>C. Выберите форму</h3>
<ol>
<li>She can [[?mc:swim|swims|to swim::06]] .</li>
<li>These [[?mc:are|is|am::02]] my keys.</li>
<li>I [[?mc:watch|watches|watching::03]] TV every evening.</li>
<li>They [[?mc:aren't sleeping|don't sleeping|isn't sleeping::07]] now.</li>
<li>[[?mc:Is there|Are there|There is::05]] a shop near here?</li>
</ol>

<h3>D. Соберите предложения</h3>
<ol>
<li>[[?order:I|am|a|student::01]]</li>
<li>[[?order:Where|do|you|work::03]]</li>
<li>[[?order:We|are|cooking|dinner|now::07]]</li>
<li>[[?order:They|were|at|home|yesterday::08]]</li>
<li>[[?order:There|are|two|rooms|in|my|flat::05]]</li>
</ol>

<h3>E. Соберите предложения (продолжение)</h3>
<ol>
<li>[[?order:I|can|swim::06]]</li>
<li>[[?order:My|father|usually|goes|to|work|by|bus::03]]</li>
<li>[[?order:Did|you|buy|bread|yesterday::08]]</li>
<li>[[?order:The|book|is|on|the|table::09]]</li>
<li>[[?order:She|doesn't|like|coffee::03]]</li>
</ol>
` },
  { id: 31, level: "A1", category: "vocabulary", topic: "greetings", title: "Приветствия и базовые фразы", content: `
<p>Самые нужные фразы для начала общения.</p>
<table>
<tr><th>Фраза</th><th>Перевод</th><th>Когда использовать</th></tr>
<tr><td><b>Hello! / Hi!</b></td><td>Привет!</td><td>Неформальное приветствие.</td></tr>
<tr><td><b>Good morning.</b></td><td>Доброе утро.</td><td>До полудня.</td></tr>
<tr><td><b>How are you?</b></td><td>Как дела?</td><td>Стандартный вопрос.</td></tr>
<tr><td><b>I'm fine, thanks.</b></td><td>Хорошо, спасибо.</td><td>Стандартный ответ.</td></tr>
<tr><td><b>Excuse me.</b></td><td>Извините (чтобы обратиться).</td><td>Если нужно спросить незнакомца.</td></tr>
<tr><td><b>I'm sorry.</b></td><td>Простите.</td><td>Если вы в чем-то виноваты.</td></tr>
<tr><td><b>Where is the toilet?</b></td><td>Где туалет?</td><td>Жизненно важный вопрос.</td></tr>
<tr><td><b>How much is it?</b></td><td>Сколько это стоит?</td><td>В магазине или кафе.</td></tr>
<tr><td><b>I'd like a coffee, please.</b></td><td>Я бы хотел(а) кофе.</td><td>Вежливый заказ.</td></tr>
<tr><td><b>Can you help me?</b></td><td>Вы можете мне помочь?</td><td>Просьба о помощи.</td></tr>
<tr><td><b>I don't know.</b></td><td>Я не знаю.</td><td>Честный ответ.</td></tr>
<tr><td><b>Could you repeat that, please?</b></td><td>Повторите, пожалуйста.</td><td>Если не расслышали.</td></tr>
<tr><td><b>See you later.</b></td><td>До встречи.</td><td>Прощание.</td></tr>
</table>
` },
  { id: 32, level: "A1", category: "vocabulary", topic: "family", title: "Семья (Family)", content: `
<p>Основные слова для рассказа о своей семье.</p>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>mother</b></td><td>мама</td><td>My mother is a teacher.</td></tr>
<tr><td><b>father</b></td><td>папа</td><td>His father works here.</td></tr>
<tr><td><b>parents</b></td><td>родители</td><td>My parents live in London.</td></tr>
<tr><td><b>sister</b></td><td>сестра</td><td>I have one sister.</td></tr>
<tr><td><b>brother</b></td><td>брат</td><td>She has two brothers.</td></tr>
<tr><td><b>husband</b></td><td>муж</td><td>Her husband is a doctor.</td></tr>
<tr><td><b>wife</b></td><td>жена</td><td>My wife likes tea.</td></tr>
<tr><td><b>child</b></td><td>ребёнок</td><td>They have one child.</td></tr>
<tr><td><b>children</b></td><td>дети</td><td>How many children do you have?</td></tr>
</table>
` },
  { id: 33, level: "A1", category: "vocabulary", topic: "house", title: "Дом (House)", content: `
<p>Предметы и комнаты в доме или квартире.</p>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>house</b></td><td>дом</td><td>I live in a big house.</td></tr>
<tr><td><b>flat / apartment</b></td><td>квартира</td><td>We have a small flat.</td></tr>
<tr><td><b>room</b></td><td>комната</td><td>There are two rooms.</td></tr>
<tr><td><b>kitchen</b></td><td>кухня</td><td>I cook in the kitchen.</td></tr>
<tr><td><b>bathroom</b></td><td>ванная</td><td>The bathroom is upstairs.</td></tr>
<tr><td><b>bedroom</b></td><td>спальня</td><td>I sleep in my bedroom.</td></tr>
<tr><td><b>door</b></td><td>дверь</td><td>Close the door, please.</td></tr>
<tr><td><b>window</b></td><td>окно</td><td>Open the window.</td></tr>
<tr><td><b>table</b></td><td>стол</td><td>The keys are on the table.</td></tr>
<tr><td><b>chair</b></td><td>стул</td><td>Sit on the chair.</td></tr>
<tr><td><b>bed</b></td><td>кровать</td><td>The bed is next to the window.</td></tr>
</table>
` },
  { id: 34, level: "A1", category: "vocabulary", topic: "food", title: "Еда и напитки (Food & Drinks)", content: `
<p>Продукты и приёмы пищи.</p>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>water</b></td><td>вода</td><td>Can I have some water?</td></tr>
<tr><td><b>tea</b></td><td>чай</td><td>I drink tea in the morning.</td></tr>
<tr><td><b>coffee</b></td><td>кофе</td><td>She likes coffee.</td></tr>
<tr><td><b>bread</b></td><td>хлеб</td><td>I buy bread every day.</td></tr>
<tr><td><b>rice</b></td><td>рис</td><td>We eat rice for dinner.</td></tr>
<tr><td><b>milk</b></td><td>молоко</td><td>Do you like milk?</td></tr>
<tr><td><b>apple</b></td><td>яблоко</td><td>An apple a day is good.</td></tr>
<tr><td><b>egg</b></td><td>яйцо</td><td>I had an egg for breakfast.</td></tr>
<tr><td><b>chicken</b></td><td>курица</td><td>We had chicken and rice.</td></tr>
<tr><td><b>fish</b></td><td>рыба</td><td>He doesn't eat fish.</td></tr>
<tr><td><b>breakfast</b></td><td>завтрак</td><td>What did you have for breakfast?</td></tr>
<tr><td><b>lunch</b></td><td>обед</td><td>Let's have lunch.</td></tr>
<tr><td><b>dinner</b></td><td>ужин</td><td>Dinner is at 7 pm.</td></tr>
</table>
` },
  { id: 35, level: "A1", category: "vocabulary", topic: "verbs", title: "Повседневные глаголы", content: `
<p>Самые частые действия, которые мы совершаем каждый день.</p>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>be</b></td><td>быть</td><td>I am happy.</td></tr>
<tr><td><b>have</b></td><td>иметь</td><td>I have a car.</td></tr>
<tr><td><b>live</b></td><td>жить</td><td>We live in London.</td></tr>
<tr><td><b>work</b></td><td>работать</td><td>She works in a bank.</td></tr>
<tr><td><b>study</b></td><td>учиться</td><td>He studies English.</td></tr>
<tr><td><b>like</b></td><td>нравиться</td><td>I like music.</td></tr>
<tr><td><b>want</b></td><td>хотеть</td><td>I want a coffee.</td></tr>
<tr><td><b>need</b></td><td>нуждаться</td><td>I need help.</td></tr>
<tr><td><b>go</b></td><td>идти / ехать</td><td>They go to school.</td></tr>
<tr><td><b>come</b></td><td>приходить</td><td>Come here, please.</td></tr>
<tr><td><b>eat</b></td><td>есть</td><td>We eat at 7.</td></tr>
<tr><td><b>drink</b></td><td>пить</td><td>I drink water.</td></tr>
<tr><td><b>read</b></td><td>читать</td><td>He reads books.</td></tr>
<tr><td><b>write</b></td><td>писать</td><td>I write emails.</td></tr>
<tr><td><b>speak</b></td><td>говорить</td><td>Do you speak English?</td></tr>
<tr><td><b>listen</b></td><td>слушать</td><td>Listen to me.</td></tr>
<tr><td><b>watch</b></td><td>смотреть</td><td>We watch TV.</td></tr>
<tr><td><b>play</b></td><td>играть</td><td>They play football.</td></tr>
</table>
` },
  { id: 36, level: "A1", category: "vocabulary", topic: "adjectives", title: "Прилагательные (Adjectives)", content: `
<p>Слова для описания людей, предметов и ситуаций.</p>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>good</b></td><td>хороший</td><td>It's a good book.</td></tr>
<tr><td><b>bad</b></td><td>плохой</td><td>That's a bad idea.</td></tr>
<tr><td><b>big</b></td><td>большой</td><td>They have a big house.</td></tr>
<tr><td><b>small</b></td><td>маленький</td><td>It's a small flat.</td></tr>
<tr><td><b>old</b></td><td>старый / пожилой</td><td>My grandfather is old.</td></tr>
<tr><td><b>new</b></td><td>новый</td><td>I have a new phone.</td></tr>
<tr><td><b>young</b></td><td>молодой</td><td>She is very young.</td></tr>
<tr><td><b>happy</b></td><td>счастливый</td><td>We are happy today.</td></tr>
<tr><td><b>tired</b></td><td>уставший</td><td>I'm tired after work.</td></tr>
<tr><td><b>hungry</b></td><td>голодный</td><td>Are you hungry?</td></tr>
<tr><td><b>thirsty</b></td><td>испытывающий жажду</td><td>I'm thirsty.</td></tr>
<tr><td><b>easy</b></td><td>лёгкий</td><td>The test is easy.</td></tr>
<tr><td><b>difficult</b></td><td>трудный</td><td>English is not difficult.</td></tr>
</table>
` },

  { id: 1001, level: "A2", category: "theory", topic: "present-simple", title: "Present Simple (Настоящее простое время)", content: `
      <p><strong>Что это?</strong> Present Simple используется для описания регулярных действий, привычек, фактов и расписаний.</p>

      <h3>Формула</h3>
      <ul>
        <li><strong>Утверждение:</strong> Subject + V1 (для he/she/it добавляем <strong>-s</strong>)</li>
        <li><strong>Отрицание:</strong> Subject + do/does not + V1</li>
        <li><strong>Вопрос:</strong> Do/Does + subject + V1?</li>
      </ul>

      <h3>Примеры</h3>
      <div class="example">
        <div class="en">I <strong>go</strong> to school every day.</div>
        <div class="ru">Я хожу в школу каждый день.</div>
      </div>
      <div class="example">
        <div class="en">She <strong>reads</strong> books in the evening.</div>
        <div class="ru">Она читает книги по вечерам.</div>
      </div>
      <div class="example">
        <div class="en">They <strong>do not</strong> (don't) <strong>like</strong> coffee.</div>
        <div class="ru">Они не любят кофе.</div>
      </div>
      <div class="example">
        <div class="en"><strong>Do</strong> you <strong>speak</strong> English?</div>
        <div class="ru">Ты говоришь по-английски?</div>
      </div>

      <h3>Маркеры времени</h3>
      <ul>
        <li>every day / week / month</li>
        <li>usually, often, sometimes, never</li>
        <li>on Mondays, at 7 o'clock</li>
      </ul>
    ` },
  { id: 1002, level: "A2", category: "theory", topic: "present-continuous", title: "Present Continuous (Настоящее продолженное время)", content: `
      <p><strong>Что это?</strong> Present Continuous используется для описания действий, происходящих прямо сейчас или вокруг текущего момента.</p>

      <h3>Формула</h3>
      <ul>
        <li><strong>Утверждение:</strong> Subject + am/is/are + V-ing</li>
        <li><strong>Отрицание:</strong> Subject + am/is/are not + V-ing</li>
        <li><strong>Вопрос:</strong> Am/Is/Are + subject + V-ing?</li>
      </ul>

      <h3>Примеры</h3>
      <div class="example">
        <div class="en">She <strong>is reading</strong> a book now.</div>
        <div class="ru">Она сейчас читает книгу.</div>
      </div>
      <div class="example">
        <div class="en">I <strong>am writing</strong> an email at the moment.</div>
        <div class="ru">Я пишу письмо в данный момент.</div>
      </div>
      <div class="example">
        <div class="en">They <strong>are not playing</strong> football today.</div>
        <div class="ru">Они не играют в футбол сегодня.</div>
      </div>
      <div class="example">
        <div class="en"><strong>Are</strong> you <strong>listening</strong> to me?</div>
        <div class="ru">Ты меня слушаешь?</div>
      </div>

      <h3>Маркеры времени</h3>
      <ul>
        <li>now, right now, at the moment</li>
        <li>Look! Listen!</li>
        <li>today, this week</li>
      </ul>
    ` },
  { id: 1003, level: "A2", category: "theory", topic: "past-simple", title: "Past Simple (Прошедшее простое время)", content: `
      <p><strong>Что это?</strong> Past Simple используется для описания завершённых действий в прошлом.</p>

      <h3>Формула</h3>
      <ul>
        <li><strong>Утверждение:</strong> Subject + V2 (правильные: + -ed; неправильные: 2-я форма)</li>
        <li><strong>Отрицание:</strong> Subject + did not (didn't) + V1</li>
        <li><strong>Вопрос:</strong> Did + subject + V1?</li>
      </ul>

      <h3>Примеры</h3>
      <div class="example">
        <div class="en">We <strong>visited</strong> Paris last year.</div>
        <div class="ru">Мы посещали Париж в прошлом году.</div>
      </div>
      <div class="example">
        <div class="en">She <strong>went</strong> to the cinema yesterday.</div>
        <div class="ru">Она ходила в кино вчера.</div>
      </div>
      <div class="example">
        <div class="en">I <strong>did not</strong> (didn't) <strong>see</strong> him.</div>
        <div class="ru">Я его не видел.</div>
      </div>
      <div class="example">
        <div class="en"><strong>Did</strong> you <strong>finish</strong> your homework?</div>
        <div class="ru">Ты закончил домашнюю работу?</div>
      </div>

      <h3>Маркеры времени</h3>
      <ul>
        <li>yesterday, last week/month/year</li>
        <li>in 2010, two days ago</li>
        <li>when I was a child</li>
      </ul>
    ` },
  { id: 1004, level: "A2", category: "theory", topic: "future-will-going-to", title: "Future: will / going to (Будущее время)", content: `
      <p><strong>Что это?</strong></p>
      <ul>
        <li><strong>Will</strong> — для спонтанных решений, обещаний, предсказаний.</li>
        <li><strong>Going to</strong> — для заранее запланированных действий и предсказаний на основе доказательств.</li>
      </ul>

      <h3>Формула</h3>
      <ul>
        <li><strong>Will:</strong> Subject + will + V1</li>
        <li><strong>Going to:</strong> Subject + am/is/are + going to + V1</li>
      </ul>

      <h3>Примеры</h3>
      <div class="example">
        <div class="en">I <strong>will call</strong> you tomorrow.</div>
        <div class="ru">Я позвоню тебе завтра (обещание).</div>
      </div>
      <div class="example">
        <div class="en">We <strong>are going to travel</strong> next summer.</div>
        <div class="ru">Мы собираемся путешествовать следующим летом (план).</div>
      </div>
      <div class="example">
        <div class="en">Look at those clouds! It <strong>is going to rain</strong>.</div>
        <div class="ru">Посмотри на тучи! Будет дождь (предсказание на основе доказательств).</div>
      </div>

      <h3>Маркеры времени</h3>
      <ul>
        <li>tomorrow, next week/month/year</li>
        <li>soon, in the future</li>
        <li>tonight</li>
      </ul>
    ` },
  { id: 1005, level: "A2", category: "theory", topic: "modal-verbs", title: "Modal Verbs (Модальные глаголы)", content: `
      <p><strong>Что это?</strong> Модальные глаголы выражают отношение говорящего к действию: возможность, обязанность, разрешение, совет.</p>

      <h3>Основные модальные глаголы</h3>
      <table>
        <tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
        <tr><td><b>can</b></td><td>возможность, разрешение</td><td>Can I borrow your pen?</td></tr>
        <tr><td><b>could</b></td><td>вежливая просьба</td><td>Could you help me?</td></tr>
        <tr><td><b>should</b></td><td>совет</td><td>You should see a doctor.</td></tr>
        <tr><td><b>must</b></td><td>строгая обязанность</td><td>You must finish your homework.</td></tr>
        <tr><td><b>have to</b></td><td>вынужденность</td><td>I have to wear a uniform.</td></tr>
      </table>

      <h3>Формула</h3>
      <p>Subject + modal + V1 (без to, кроме have to)</p>

      <h3>Примеры</h3>
      <div class="example">
        <div class="en">You <strong>must</strong> finish your homework.</div>
        <div class="ru">Ты должен закончить домашнюю работу.</div>
      </div>
      <div class="example">
        <div class="en"><strong>Can</strong> I borrow your pen?</div>
        <div class="ru">Можно мне одолжить твою ручку?</div>
      </div>
    ` },
  { id: 1006, level: "A2", category: "theory", topic: "comparatives-superlatives", title: "Comparatives and Superlatives (Степени сравнения)", content: `
      <p><strong>Что это?</strong></p>
      <ul>
        <li><strong>Сравнительная степень</strong> — сравниваем два объекта.</li>
        <li><strong>Превосходная степень</strong> — выделяем объект среди всех.</li>
      </ul>

      <h3>Формула</h3>
      <table>
        <tr><th>Тип прилагательного</th><th>Сравнительная</th><th>Превосходная</th></tr>
        <tr><td>Короткие (1 слог)</td><td>+ -er</td><td>the + -est</td></tr>
        <tr><td>Длинные (2+ слога)</td><td>more + adj</td><td>the most + adj</td></tr>
        <tr><td>Исключения</td><td>better, worse</td><td>the best, the worst</td></tr>
      </table>

      <h3>Примеры</h3>
      <div class="example">
        <div class="en">She is <strong>taller</strong> than her sister.</div>
        <div class="ru">Она выше своей сестры.</div>
      </div>
      <div class="example">
        <div class="en">This is <strong>the best</strong> restaurant in town.</div>
        <div class="ru">Это лучший ресторан в городе.</div>
      </div>
      <div class="example">
        <div class="en">My car is <strong>more expensive</strong> than yours.</div>
        <div class="ru">Моя машина дороже твоей.</div>
      </div>
    ` },
  { id: 1007, level: "A2", category: "theory", topic: "passive-voice", title: "Present Simple Passive (Пассивный залог)", content: `
      <p><strong>Что это?</strong> Пассивный залог используется, когда исполнитель действия не важен или неизвестен.</p>

      <h3>Формула</h3>
      <p>Subject + am/is/are + V3 (Past Participle)</p>

      <h3>Примеры</h3>
      <div class="example">
        <div class="en">The letter <strong>is sent</strong> every day.</div>
        <div class="ru">Письмо отправляется каждый день.</div>
      </div>
      <div class="example">
        <div class="en">English <strong>is spoken</strong> in many countries.</div>
        <div class="ru">На английском говорят во многих странах.</div>
      </div>
      <div class="example">
        <div class="en">These cars <strong>are made</strong> in Germany.</div>
        <div class="ru">Эти машины производятся в Германии.</div>
      </div>
    ` },
  { id: 1008, level: "A2", category: "theory", topic: "prepositions", title: "Prepositions of Time and Place (Предлоги времени и места)", content: `
      <p><strong>Что это?</strong> Предлоги помогают указать время и место.</p>

      <h3>Предлоги времени</h3>
      <table>
        <tr><th>Предлог</th><th>Когда используем</th><th>Пример</th></tr>
        <tr><td><b>in</b></td><td>месяцы, годы, времена года</td><td>in 1990, in July</td></tr>
        <tr><td><b>on</b></td><td>дни, даты</td><td>on Monday, on 5th May</td></tr>
        <tr><td><b>at</b></td><td>точное время</td><td>at 3 p.m., at noon</td></tr>
      </table>

      <h3>Предлоги места</h3>
      <table>
        <tr><th>Предлог</th><th>Значение</th><th>Пример</th></tr>
        <tr><td><b>in</b></td><td>внутри</td><td>in the box</td></tr>
        <tr><td><b>on</b></td><td>на поверхности</td><td>on the table</td></tr>
        <tr><td><b>at</b></td><td>у, около</td><td>at the door</td></tr>
        <tr><td><b>under</b></td><td>под</td><td>under the bed</td></tr>
        <tr><td><b>next to</b></td><td>рядом с</td><td>next to the bank</td></tr>
      </table>

      <h3>Примеры</h3>
      <div class="example">
        <div class="en">The book is <strong>on</strong> the table.</div>
        <div class="ru">Книга на столе.</div>
      </div>
      <div class="example">
        <div class="en">We have a meeting <strong>at</strong> 3 p.m.</div>
        <div class="ru">У нас встреча в 3 часа дня.</div>
      </div>
    ` },

  { id: 1011, level: "A2", category: "practice", topic: "present-simple-practice", title: "Практика: Present Simple", content: `
      <p>Поставьте глагол в правильную форму Present Simple.</p>

      <h3>Упражнение 1</h3>
      <ol>
        <li>He [[goes]] to work by bus. (go)</li>
        <li>They [[do not like|don't like]] pizza. (not like)</li>
        <li>[[Does]] she [[speak]] French? (speak)</li>
        <li>I [[wake up]] at 7 o'clock every day. (wake up)</li>
        <li>My sister [[watches]] TV in the evening. (watch)</li>
      </ol>

      <h3>Упражнение 2</h3>
      <p>Выберите правильный вариант: <code>do</code> или <code>does</code>.</p>
      <ol>
        <li>[[Do]] you like coffee?</li>
        <li>[[Does]] he play football?</li>
        <li>[[Do]] they live in London?</li>
        <li>[[Does]] she work in an office?</li>
      </ol>
    ` },
  { id: 1012, level: "A2", category: "practice", topic: "present-continuous-practice", title: "Практика: Present Continuous", content: `
      <p>Поставьте глагол в правильную форму Present Continuous.</p>

      <h3>Упражнение 1</h3>
      <ol>
        <li>Look! The cat [[is sleeping]] on the sofa. (sleep)</li>
        <li>I [[am not watching]] TV now. (not watch)</li>
        <li>[[Is]] he [[working]] today? (work)</li>
        <li>She [[is reading]] a book at the moment. (read)</li>
        <li>They [[are playing]] football now. (play)</li>
      </ol>

      <h3>Упражнение 2</h3>
      <p>Выберите правильную форму: Present Simple или Present Continuous.</p>
      <ol>
        <li>I usually [[go]] to school by bus, but today I [[am walking]]. (go / walk)</li>
        <li>She [[is cooking]] dinner right now. (cook)</li>
        <li>They [[play]] tennis every weekend. (play)</li>
      </ol>
    ` },
  { id: 1013, level: "A2", category: "practice", topic: "past-simple-practice", title: "Практика: Past Simple", content: `
      <p>Поставьте глагол в правильную форму Past Simple.</p>

      <h3>Упражнение 1</h3>
      <ol>
        <li>They [[went]] to the park yesterday. (go)</li>
        <li>I [[did not eat|didn't eat]] breakfast this morning. (not eat)</li>
        <li>[[Did]] she [[call]] you last night? (call)</li>
        <li>We [[visited]] our grandparents last weekend. (visit)</li>
        <li>He [[saw]] a good film two days ago. (see)</li>
      </ol>

      <h3>Упражнение 2</h3>
      <p>Выберите правильную форму неправильного глагола.</p>
      <ol>
        <li>I [[went]] to the cinema yesterday. (go — went / goed)</li>
        <li>She [[bought]] a new dress last week. (buy — bought / buyed)</li>
        <li>They [[had]] a great time at the party. (have — had / haved)</li>
      </ol>
    ` },
  { id: 1014, level: "A2", category: "practice", topic: "future-practice", title: "Практика: Future (will / going to)", content: `
      <p>Выберите правильную форму: <code>will</code> или <code>going to</code>.</p>

      <h3>Упражнение 1</h3>
      <ol>
        <li>I think it [[will be]] sunny tomorrow. (be — предсказание)</li>
        <li>We [[are going to visit]] our grandparents next weekend. (visit — план)</li>
        <li>She [[will help]] you with your homework. (help — обещание)</li>
        <li>Look at those clouds! It [[is going to rain]]. (rain — предсказание на основе доказательств)</li>
        <li>I [[will call]] you later, I promise. (call — обещание)</li>
      </ol>

      <h3>Упражнение 2</h3>
      <p>Поставьте глагол в правильную форму будущего времени.</p>
      <ol>
        <li>I [[am going to study]] English next year. (study — план)</li>
        <li>Don't worry, I [[will help]] you. (help — спонтанное решение)</li>
        <li>They [[are going to buy]] a new car soon. (buy — план)</li>
      </ol>
    ` },
  { id: 1015, level: "A2", category: "practice", topic: "modal-verbs-practice", title: "Практика: Modal Verbs", content: `
      <p>Вставьте подходящий модальный глагол: <code>can</code>, <code>could</code>, <code>should</code>, <code>must</code> или <code>have to</code>.</p>

      <h3>Упражнение 1</h3>
      <ol>
        <li>You [[must]] finish your homework before dinner. (обязанность)</li>
        <li>[[Can]] I borrow your pen, please? (разрешение)</li>
        <li>You [[should]] see a doctor if you feel sick. (совет)</li>
        <li>I [[have to]] wear a uniform at work. (вынужденность)</li>
        <li>[[Could]] you help me with this box, please? (вежливая просьба)</li>
      </ol>

      <h3>Упражнение 2</h3>
      <p>Выберите правильный модальный глагол.</p>
      <ol>
        <li>You look tired. You [[should]] go to bed. (совет)</li>
        <li>[[Can]] you speak French? (возможность)</li>
        <li>I [[must]] go now, I'm late. (строгая обязанность)</li>
      </ol>
    ` },
  { id: 1016, level: "A2", category: "practice", topic: "comparatives-practice", title: "Практика: Comparatives and Superlatives", content: `
      <p>Раскройте скобки, используя сравнительную или превосходную степень.</p>

      <h3>Упражнение 1</h3>
      <ol>
        <li>She is [[taller]] than her sister. (tall)</li>
        <li>This is the [[best]] restaurant in town. (good)</li>
        <li>My car is [[faster]] than yours. (fast)</li>
        <li>This book is [[more interesting]] than that one. (interesting)</li>
        <li>He is the [[tallest]] boy in our class. (tall)</li>
      </ol>

      <h3>Упражнение 2</h3>
      <p>Выберите правильную форму.</p>
      <ol>
        <li>This is the [[worst]] film I have ever seen. (bad — worse / worst)</li>
        <li>My bag is [[heavier]] than yours. (heavy — heavier / more heavy)</li>
        <li>She is the [[most beautiful]] girl in the room. (beautiful — beautifullest / most beautiful)</li>
      </ol>
    ` },
  { id: 1017, level: "A2", category: "practice", topic: "passive-practice", title: "Практика: Present Simple Passive", content: `
      <p>Преобразуйте предложения в Present Simple Passive.</p>

      <h3>Упражнение 1</h3>
      <ol>
        <li>The letter [[is sent]] every day. (send)</li>
        <li>English [[is spoken]] in many countries. (speak)</li>
        <li>These cars [[are made]] in Germany. (make)</li>
        <li>This room [[is cleaned]] every morning. (clean)</li>
        <li>Bread [[is sold]] in this shop. (sell)</li>
      </ol>

      <h3>Упражнение 2</h3>
      <p>Выберите правильную форму пассивного залога.</p>
      <ol>
        <li>The book [[is written]] by a famous author. (write)</li>
        <li>These houses [[are built]] every year. (build)</li>
        <li>Coffee [[is grown]] in Brazil. (grow)</li>
      </ol>
    ` },
  { id: 1018, level: "A2", category: "practice", topic: "prepositions-practice", title: "Практика: Prepositions", content: `
      <p>Вставьте правильный предлог: <code>in</code>, <code>on</code>, <code>at</code>, <code>under</code> или <code>next to</code>.</p>

      <h3>Упражнение 1</h3>
      <ol>
        <li>The book is [[on]] the table.</li>
        <li>We have a meeting [[at]] 3 p.m.</li>
        <li>I was born [[in]] 1990.</li>
        <li>The cat is [[under]] the chair.</li>
        <li>The bank is [[next to]] the supermarket.</li>
      </ol>

      <h3>Упражнение 2</h3>
      <p>Выберите правильный предлог.</p>
      <ol>
        <li>My birthday is [[in]] July.</li>
        <li>We have English lessons [[on]] Mondays.</li>
        <li>She is [[at]] home now.</li>
        <li>The keys are [[in]] my bag.</li>
      </ol>
    ` },

  { id: 1021, level: "A2", category: "vocabulary", topic: "daily-life", title: "Повседневная жизнь (Daily Life)", content: `
      <p>Словарь по теме «Семья, друзья, повседневные дела».</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>family</td><td>семья</td></tr>
        <tr><td>friend</td><td>друг</td></tr>
        <tr><td>routine</td><td>распорядок дня</td></tr>
        <tr><td>wake up</td><td>просыпаться</td></tr>
        <tr><td>have breakfast</td><td>завтракать</td></tr>
        <tr><td>go to work/school</td><td>ходить на работу/в школу</td></tr>
        <tr><td>come home</td><td>приходить домой</td></tr>
        <tr><td>watch TV</td><td>смотреть телевизор</td></tr>
        <tr><td>go to bed</td><td>ложиться спать</td></tr>
      </table>
    ` },
  { id: 1022, level: "A2", category: "vocabulary", topic: "travel-transport", title: "Путешествия и транспорт (Travel and Transport)", content: `
      <p>Словарь по теме «Аэропорт, вокзал, билеты».</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>airport</td><td>аэропорт</td></tr>
        <tr><td>train station</td><td>железнодорожный вокзал</td></tr>
        <tr><td>ticket</td><td>билет</td></tr>
        <tr><td>passport</td><td>паспорт</td></tr>
        <tr><td>luggage</td><td>багаж</td></tr>
        <tr><td>flight</td><td>рейс</td></tr>
        <tr><td>book a ticket</td><td>забронировать билет</td></tr>
        <tr><td>departure</td><td>отправление</td></tr>
        <tr><td>arrival</td><td>прибытие</td></tr>
      </table>
    ` },
  { id: 1023, level: "A2", category: "vocabulary", topic: "shopping-restaurants", title: "Покупки и рестораны (Shopping and Restaurants)", content: `
      <p>Словарь по теме «Заказ еды, покупки».</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>shop</td><td>магазин</td></tr>
        <tr><td>buy</td><td>покупать</td></tr>
        <tr><td>price</td><td>цена</td></tr>
        <tr><td>expensive / cheap</td><td>дорогой / дешёвый</td></tr>
        <tr><td>menu</td><td>меню</td></tr>
        <tr><td>order</td><td>заказывать</td></tr>
        <tr><td>waiter</td><td>официант</td></tr>
        <tr><td>bill</td><td>счёт</td></tr>
        <tr><td>delicious</td><td>вкусный</td></tr>
      </table>
    ` },
  { id: 1024, level: "A2", category: "vocabulary", topic: "work-professions", title: "Работа и профессии (Work and Professions)", content: `
      <p>Словарь по теме «Профессии, обязанности».</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>job</td><td>работа</td></tr>
        <tr><td>profession</td><td>профессия</td></tr>
        <tr><td>doctor</td><td>врач</td></tr>
        <tr><td>teacher</td><td>учитель</td></tr>
        <tr><td>engineer</td><td>инженер</td></tr>
        <tr><td>manager</td><td>менеджер</td></tr>
        <tr><td>work</td><td>работать</td></tr>
        <tr><td>office</td><td>офис</td></tr>
        <tr><td>meeting</td><td>встреча</td></tr>
        <tr><td>responsibility</td><td>обязанность</td></tr>
      </table>
    ` },
  { id: 1025, level: "A2", category: "vocabulary", topic: "hobbies", title: "Свободное время и хобби (Free Time and Hobbies)", content: `
      <p>Словарь по теме «Увлечения, планы на выходные».</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>hobby</td><td>хобби</td></tr>
        <tr><td>free time</td><td>свободное время</td></tr>
        <tr><td>weekend</td><td>выходные</td></tr>
        <tr><td>go out</td><td>гулять</td></tr>
        <tr><td>play sports</td><td>заниматься спортом</td></tr>
        <tr><td>read books</td><td>читать книги</td></tr>
        <tr><td>watch movies</td><td>смотреть фильмы</td></tr>
        <tr><td>listen to music</td><td>слушать музыку</td></tr>
        <tr><td>travel</td><td>путешествовать</td></tr>
      </table>
    ` },
  { id: 1026, level: "A2", category: "vocabulary", topic: "health-lifestyle", title: "Здоровье и образ жизни (Health and Lifestyle)", content: `
      <p>Словарь по теме «Привычки питания, спорт, визит к врачу».</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>health</td><td>здоровье</td></tr>
        <tr><td>healthy</td><td>здоровый</td></tr>
        <tr><td>exercise</td><td>упражнение</td></tr>
        <tr><td>diet</td><td>диета</td></tr>
        <tr><td>doctor</td><td>врач</td></tr>
        <tr><td>medicine</td><td>лекарство</td></tr>
        <tr><td>feel sick</td><td>чувствовать себя больным</td></tr>
        <tr><td>headache</td><td>головная боль</td></tr>
        <tr><td>sport</td><td>спорт</td></tr>
      </table>
    ` },
  { id: 1027, level: "A2", category: "vocabulary", topic: "housing", title: "Жилье (Housing)", content: `
      <p>Словарь по теме «Описание дома, квартиры, местоположения».</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>house</td><td>дом</td></tr>
        <tr><td>flat / apartment</td><td>квартира</td></tr>
        <tr><td>room</td><td>комната</td></tr>
        <tr><td>kitchen</td><td>кухня</td></tr>
        <tr><td>bedroom</td><td>спальня</td></tr>
        <tr><td>bathroom</td><td>ванная комната</td></tr>
        <tr><td>living room</td><td>гостиная</td></tr>
        <tr><td>furniture</td><td>мебель</td></tr>
        <tr><td>address</td><td>адрес</td></tr>
        <tr><td>neighborhood</td><td>район</td></tr>
      </table>
    ` },
  { id: 1028, level: "A2", category: "vocabulary", topic: "weather-climate", title: "Погода и климат (Weather and Climate)", content: `
      <p>Словарь по теме «Обсуждение погоды, прогноз».</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>weather</td><td>погода</td></tr>
        <tr><td>sunny</td><td>солнечно</td></tr>
        <tr><td>rainy</td><td>дождливо</td></tr>
        <tr><td>cloudy</td><td>облачно</td></tr>
        <tr><td>windy</td><td>ветрено</td></tr>
        <tr><td>hot</td><td>жарко</td></tr>
        <tr><td>cold</td><td>холодно</td></tr>
        <tr><td>temperature</td><td>температура</td></tr>
        <tr><td>forecast</td><td>прогноз</td></tr>
        <tr><td>climate</td><td>климат</td></tr>
      </table>
    ` },

  { id: 601, level: "C1", category: "theory", topic: "intro", title: "Раздел C1–C2 — в разработке", content: `<p>Здесь будут материалы уровней C1–C2: Cleft Sentences, Subjunctive, Nominalisation, Academic Writing, Inversion, Advanced Idioms.</p>` },

  { id: 701, level: "ICPC", category: "theory", topic: "anatomy", title: "1.1 Анатомия условия задачи", content: `
<p>Условие — это 1–2 страницы английского текста, и время на чтение идёт в штраф. Хорошая новость: почти все условия собраны из одних и тех же блоков и шаблонных фраз.</p>
<h3>1. Из чего состоит условие</h3>
<table>
<tr><th>Раздел</th><th>Что там</th><th>Что из него вынести</th></tr>
<tr><td>Title</td><td>Буква и название: <code>B. Lantern Row</code></td><td>Буква — порядок в сете. На ICPC задачи <b>не</b> отсортированы по сложности</td></tr>
<tr><td>Header</td><td>Лимиты времени/памяти, откуда читать и куда писать</td><td>TL, ML, stdin или файл</td></tr>
<tr><td>Legend / Statement</td><td>История + формальная постановка</td><td>Что дано, что найти, какие операции разрешены</td></tr>
<tr><td>Input</td><td>Формат ввода и ограничения</td><td>Размеры, диапазоны, мультитест, гарантии</td></tr>
<tr><td>Output</td><td>Что и как вывести</td><td>Формат ответа, что делать, если ответа нет</td></tr>
<tr><td>Examples</td><td>Тесты «вход → выход»</td><td>Проверка понимания условия</td></tr>
<tr><td>Note</td><td>Пояснение к примерам</td><td>Разбор первого теста — часто ключ к пониманию</td></tr>
</table>
<h3>2. Шапка (header)</h3>
<table>
<tr><th>Фраза</th><th>Перевод</th><th>Комментарий</th></tr>
<tr><td>time limit per test</td><td>ограничение времени на один тест</td><td><i>per</i> = «на каждый». Не на все тесты вместе</td></tr>
<tr><td>memory limit per test</td><td>ограничение памяти на тест</td><td>256 megabytes ≈ 6·10<sup>7</sup> int'ов</td></tr>
<tr><td>input: standard input</td><td>ввод: стандартный (stdin)</td><td>Обычный <code>cin</code> / <code>scanf</code></td></tr>
<tr><td>output: standard output</td><td>вывод: стандартный (stdout)</td><td>Обычный <code>cout</code> / <code>printf</code></td></tr>
</table>
<div class="warn">Если в шапке вместо <code>standard input</code> написано имя файла — читайте из файла (<code>freopen</code>). Иначе получите WA на первом тесте при абсолютно правильном решении.</div>
<h3>3. Раздел Input — 10 шаблонов</h3>
<div class="example"><div class="en"><b>The first line contains a single integer</b> t (1 ≤ t ≤ 10<sup>4</sup>) — the number of test cases.</div><div class="ru">В первой строке находится одно целое число t — количество тестовых наборов.</div></div>
<div class="example"><div class="en"><b>The description of the test cases follows.</b></div><div class="ru">Далее следуют описания тестовых наборов. (<i>follow</i> = «следовать, идти далее»)</div></div>
<div class="example"><div class="en"><b>The first line of each test case contains two integers</b> n and k (1 ≤ k ≤ n ≤ 100).</div><div class="ru">Первая строка каждого тестового набора содержит два целых числа n и k.</div></div>
<div class="example"><div class="en"><b>The second line contains n integers</b> a<sub>1</sub>, a<sub>2</sub>, …, a<sub>n</sub> (1 ≤ a<sub>i</sub> ≤ 10<sup>9</sup>) — the elements of the array.</div><div class="ru">Во второй строке — n целых чисел a<sub>1</sub>…a<sub>n</sub> — элементы массива.</div></div>
<div class="example"><div class="en"><b>Each of the next m lines contains</b> two integers u<sub>i</sub> and v<sub>i</sub> (1 ≤ u<sub>i</sub>, v<sub>i</sub> ≤ n) — the endpoints of the i-th edge.</div><div class="ru">Каждая из следующих m строк содержит два числа u<sub>i</sub> и v<sub>i</sub> — концы i-го ребра.</div></div>
<div class="example"><div class="en"><b>The only line contains</b> a string s (1 ≤ |s| ≤ 100) <b>consisting of lowercase English letters</b>.</div><div class="ru">Единственная строка содержит строку s из строчных латинских букв.</div></div>
<div class="example"><div class="en"><b>The input consists of multiple test cases.</b></div><div class="ru">Ввод состоит из нескольких тестовых наборов (мультитест).</div></div>
<div class="example"><div class="en">The numbers in each line are <b>separated by single spaces</b>.</div><div class="ru">Числа в строке разделены одиночными пробелами.</div></div>
<div class="example"><div class="en"><b>It is guaranteed that</b> the given graph is connected.</div><div class="ru">Гарантируется, что граф связный.</div></div>
<div class="example"><div class="en"><b>Additional constraint on the input:</b> the given array is a permutation.</div><div class="ru">Дополнительное ограничение на ввод: массив — перестановка.</div></div>
<div class="warn">Тире <b>«—»</b> после переменной читается как «— это». <code>n — the number of lanterns</code> = «n — это количество фонарей».</div>
<h3>4. Раздел Output</h3>
<div class="example"><div class="en"><b>For each test case, print a single integer</b> — the answer to the problem.</div><div class="ru">Для каждого теста выведите одно целое число — ответ.</div></div>
<div class="example"><div class="en">Print <b>YES</b> if it is possible to sort the array, and <b>NO otherwise</b>.</div><div class="ru">Выведите YES, если массив можно отсортировать, и NO — иначе.</div></div>
<div class="example"><div class="en">You can output the answer <b>in any case (upper or lower)</b>.</div><div class="ru">Ответ можно выводить в любом регистре.</div></div>
<div class="example"><div class="en"><b>If there are multiple answers, print any of them.</b></div><div class="ru">Если ответов несколько, выведите любой.</div></div>
<div class="example"><div class="en"><b>If there is no answer, print −1.</b></div><div class="ru">Если ответа нет, выведите −1.</div></div>
` },
  { id: 702, level: "ICPC", category: "theory", topic: "numbers", title: "1.2 Числа, ограничения, количества", content: `
<p>Ограничения — самая «денежная» часть условия: по ним выбирается алгоритм и тип данных. Ошибиться в одном слове (<i>positive</i> vs <i>non-negative</i>) — значит получить WA или TL.</p>
<h3>1. Какие бывают числа</h3>
<table>
<tr><th>Термин</th><th>Значение</th><th>Ловушка</th></tr>
<tr><td>integer</td><td>целое число</td><td>Может быть отрицательным</td></tr>
<tr><td>positive integer</td><td>положительное, > 0</td><td>0 <b>не</b> положительный</td></tr>
<tr><td>non-negative integer</td><td>неотрицательное, ≥ 0</td><td>0 входит</td></tr>
<tr><td>negative</td><td>отрицательное, < 0</td><td></td></tr>
<tr><td>natural number</td><td>натуральное</td><td>Обычно ≥ 1</td></tr>
<tr><td>real number</td><td>вещественное число</td><td>Будет требование к точности</td></tr>
<tr><td>digit</td><td>цифра 0–9</td><td><i>digit ≠ number</i></td></tr>
</table>
<h3>2. Как читать ограничения</h3>
<div class="example"><div class="en">(1 ≤ n ≤ 2·10<sup>5</sup>)</div><div class="ru">Вслух: «n is between one and two times ten to the fifth». Обе границы включены.</div></div>
<div class="example"><div class="en">(1 ≤ |s| ≤ 100)</div><div class="ru">|s| — длина строки s (а не модуль).</div></div>
<div class="example"><div class="en">(−10<sup>9</sup> ≤ a<sub>i</sub> ≤ 10<sup>9</sup>)</div><div class="ru">Элементы могут быть отрицательными. Сумма уже не влезет в int.</div></div>
<table>
<tr><th>Ограничение</th><th>Ожидаемая сложность</th></tr>
<tr><td>n ≤ 20</td><td>2<sup>n</sup>, перебор подмножеств</td></tr>
<tr><td>n ≤ 500</td><td>n<sup>3</sup></td></tr>
<tr><td>n ≤ 5000</td><td>n<sup>2</sup></td></tr>
<tr><td>n ≤ 2·10<sup>5</sup></td><td>n log n или n</td></tr>
<tr><td>n ≤ 10<sup>18</sup></td><td>формула, log n, бинпоиск</td></tr>
</table>
<h3>3. Фразы сравнения</h3>
<table>
<tr><th>Фраза</th><th>Знак</th><th>Перевод</th></tr>
<tr><td>at most k</td><td>≤ k</td><td>не более k</td></tr>
<tr><td>at least k</td><td>≥ k</td><td>не менее k</td></tr>
<tr><td>less than k</td><td>&lt; k</td><td>меньше k (строго!)</td></tr>
<tr><td>greater than k</td><td>&gt; k</td><td>больше k (строго)</td></tr>
<tr><td>strictly</td><td>&lt; / &gt;</td><td>строго — равенство не подходит</td></tr>
<tr><td>between l and r, inclusive</td><td>l ≤ x ≤ r</td><td>включительно</td></tr>
</table>
<div class="warn"><i>less than</i> — строго меньше, а <i>no less than</i> — больше или равно. Одно слово «no» переворачивает знак.</div>
<h3>4. Мультитест и сумма по тестам</h3>
<div class="example"><div class="en">It is guaranteed that <b>the sum of n over all test cases</b> does not exceed 2·10<sup>5</sup>.</div><div class="ru">Гарантируется, что сумма n по всем тестам ≤ 2·10<sup>5</sup>.</div></div>
<div class="warn">Обнулять глобальный массив на каждый тест — это TL. Очищайте только первые n элементов.</div>
` },
  { id: 703, level: "ICPC", category: "theory", topic: "arithmetic", title: "1.3 Арифметика и теория чисел", content: `
<h3>1. Делимость</h3>
<table>
<tr><th>Фраза</th><th>Значение</th><th>В коде</th></tr>
<tr><td>x is divisible by y</td><td>x делится на y</td><td><code>x % y == 0</code></td></tr>
<tr><td>y divides x</td><td>y делит x</td><td><code>x % y == 0</code></td></tr>
<tr><td>x is a multiple of y</td><td>x кратно y</td><td><code>x % y == 0</code></td></tr>
<tr><td>y is a divisor of x</td><td>y — делитель x</td><td><code>x % y == 0</code></td></tr>
</table>
<div class="warn"><i>x is divisible by y</i> и <i>y divides x</i> — одно и то же, но порядок переменных противоположный.</div>
<h3>2. Остатки и округление</h3>
<table>
<tr><th>Фраза</th><th>Перевод</th><th>Пример</th></tr>
<tr><td>quotient</td><td>частное</td><td>17 / 5 → 3</td></tr>
<tr><td>remainder</td><td>остаток</td><td>17 mod 5 → 2</td></tr>
<tr><td>rounded down</td><td>округлённое вниз</td><td>⌊7/2⌋ = 3</td></tr>
<tr><td>rounded up</td><td>округлённое вверх</td><td>⌈7/2⌉ = 4</td></tr>
</table>
<div class="warn">В C++ остаток от отрицательного числа отрицательный: <code>-7 % 3 == -1</code>. Пишите <code>((x % k) + k) % k</code>.</div>
<h3>3. Простые числа, НОД и НОК</h3>
<table>
<tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>prime number</td><td>простое число</td></tr>
<tr><td>coprime / relatively prime</td><td>взаимно простые</td></tr>
<tr><td>gcd — greatest common divisor</td><td>НОД</td></tr>
<tr><td>lcm — least common multiple</td><td>НОК</td></tr>
<tr><td>prime factorization</td><td>разложение на множители</td></tr>
<tr><td>perfect square</td><td>полный квадрат</td></tr>
</table>
<div class="example"><div class="en">Note that 1 is <b>neither prime nor composite</b>.</div><div class="ru">Обратите внимание: 1 не является ни простым, ни составным.</div></div>
<h3>4. Чётность</h3>
<table>
<tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>even / odd</td><td>чётное / нечётное</td></tr>
<tr><td>parity</td><td>чётность</td></tr>
<tr><td>have the same parity</td><td>одной чётности</td></tr>
<tr><td>absolute value, |x|</td><td>модуль числа</td></tr>
</table>
` },
  { id: 704, level: "ICPC", category: "theory", topic: "arrays", title: "1.4 Массивы, строки, последовательности", content: `
<h3>1. Главная четвёрка: sub-что?</h3>
<table>
<tr><th>Термин</th><th>Что это</th><th>Подряд?</th></tr>
<tr><td>subarray</td><td>подмассив, кусок массива</td><td>да</td></tr>
<tr><td>substring</td><td>подстрока, кусок строки</td><td>да</td></tr>
<tr><td>subsequence</td><td>подпоследовательность</td><td>нет</td></tr>
<tr><td>subset</td><td>подмножество</td><td>не важен порядок</td></tr>
</table>
<div class="example"><div class="en">A sequence b is a <b>subsequence</b> of a if b can be obtained from a by <b>deleting several elements</b>.</div><div class="ru">b — подпоследовательность a, если получается удалением элементов.</div></div>
<div class="warn">Русское «подпоследовательность» часто путают с «подотрезком». Если <i>subsequence</i> — элементы можно брать не подряд.</div>
<h3>2. Порядок</h3>
<table>
<tr><th>Термин</th><th>Условие</th><th>Пример</th></tr>
<tr><td>strictly increasing</td><td>a₁ &lt; a₂ &lt; …</td><td>[1, 3, 7]</td></tr>
<tr><td>non-decreasing</td><td>a₁ ≤ a₂ ≤ …</td><td>[1, 3, 3, 7]</td></tr>
<tr><td>strictly decreasing</td><td>a₁ &gt; a₂ &gt; …</td><td>[7, 3, 1]</td></tr>
<tr><td>non-increasing</td><td>a₁ ≥ a₂ ≥ …</td><td>[7, 3, 3, 1]</td></tr>
</table>
<h3>3. Строки</h3>
<div class="example"><div class="en">You are given a <b>binary string</b> s of length n.</div><div class="ru">Дана двоичная строка — только символы «0» и «1».</div></div>
<div class="example"><div class="en">A string is a <b>palindrome</b> if it reads the same forwards and backwards.</div><div class="ru">Строка — палиндром, если читается одинаково в обе стороны.</div></div>
<h3>4. Лексикографический порядок</h3>
<p>Строка a лексикографически меньше b, если a — префикс b (и a ≠ b), или в первой различной позиции буква у a раньше по алфавиту.</p>
<div class="example"><div class="en">Find the <b>lexicographically smallest</b> string.</div><div class="ru">Найдите лексикографически минимальную строку.</div></div>
` },
  { id: 705, level: "ICPC", category: "theory", topic: "graphs", title: "1.5 Графы и деревья", content: `
<h3>1. Вершины и рёбра</h3>
<table>
<tr><th>Термин</th><th>Перевод</th></tr>
<tr><td>vertex, pl. vertices</td><td>вершина</td></tr>
<tr><td>edge</td><td>ребро</td></tr>
<tr><td>adjacent</td><td>смежные</td></tr>
<tr><td>degree</td><td>степень вершины</td></tr>
<tr><td>undirected</td><td>неориентированный</td></tr>
<tr><td>directed</td><td>ориентированный</td></tr>
<tr><td>weighted</td><td>взвешенный</td></tr>
</table>
<h3>2. Пути и связность</h3>
<div class="example"><div class="en">Find the length of the <b>shortest path</b> from vertex 1 to vertex n.</div><div class="ru">Найдите длину кратчайшего пути из 1 в n.</div></div>
<div class="example"><div class="en">Count the number of <b>connected components</b>.</div><div class="ru">Найдите количество компонент связности.</div></div>
<h3>3. Деревья</h3>
<table>
<tr><th>Термин</th><th>Перевод</th></tr>
<tr><td>tree</td><td>дерево: связный граф без циклов, n − 1 ребро</td></tr>
<tr><td>rooted tree, root</td><td>корневое дерево, корень</td></tr>
<tr><td>parent / child</td><td>родитель / ребёнок</td></tr>
<tr><td>ancestor / descendant</td><td>предок / потомок</td></tr>
<tr><td>subtree of v</td><td>поддерево v</td></tr>
<tr><td>leaf / leaves</td><td>лист</td></tr>
</table>
<div class="warn">Увидели «n − 1 edges» и «connected» — это дерево, даже если слово tree не написано.</div>
<h3>4. Сетки (grids)</h3>
<div class="example"><div class="en">You are given a <b>grid</b> with n <b>rows</b> and m <b>columns</b>.</div><div class="ru">Дано поле из n строк и m столбцов.</div></div>
<div class="example"><div class="en">In one move, you can go to a <b>side-adjacent</b> cell.</div><div class="ru">За ход можно перейти в соседнюю по стороне клетку — 4 направления.</div></div>
` },
  { id: 706, level: "ICPC", category: "theory", topic: "geometry", title: "1.6 Геометрия и координаты", content: `
<h3>1. Точки и линии</h3>
<table>
<tr><th>Термин</th><th>Перевод</th></tr>
<tr><td>point</td><td>точка</td></tr>
<tr><td>line</td><td>прямая</td></tr>
<tr><td>segment</td><td>отрезок</td></tr>
<tr><td>ray</td><td>луч</td></tr>
<tr><td>collinear</td><td>лежащие на одной прямой</td></tr>
<tr><td>origin</td><td>начало координат</td></tr>
</table>
<h3>2. Многоугольники</h3>
<div class="example"><div class="en">You are given a <b>convex polygon</b> with n vertices, listed in <b>counterclockwise order</b>.</div><div class="ru">Дан выпуклый многоугольник, вершины перечислены против часовой стрелки.</div></div>
<div class="example"><div class="en">Find the <b>area</b> and the <b>perimeter</b> of the triangle.</div><div class="ru">Найдите площадь и периметр треугольника.</div></div>
<h3>3. Расстояния</h3>
<table>
<tr><th>Название</th><th>Формула</th></tr>
<tr><td>Euclidean distance</td><td>√((x₁−x₂)² + (y₁−y₂)²)</td></tr>
<tr><td>Manhattan distance</td><td>|x₁−x₂| + |y₁−y₂|</td></tr>
<tr><td>Chebyshev distance</td><td>max(|x₁−x₂|, |y₁−y₂|)</td></tr>
</table>
<div class="warn">Сравнивайте евклидовы расстояния через квадраты — без <code>sqrt</code> и без погрешности.</div>
` },
  { id: 707, level: "ICPC", category: "theory", topic: "operations", title: "1.7 Операции, запросы, игры", content: `
<h3>1. Операции</h3>
<div class="example"><div class="en">You can perform the following operation <b>any number of times (possibly zero)</b>.</div><div class="ru">Можно выполнять операцию сколько угодно раз (возможно, ни разу).</div></div>
<div class="example"><div class="en"><b>choose an index</b> i and <b>replace</b> a<sub>i</sub> <b>with</b> a<sub>i</sub> + 1.</div><div class="ru">выбрать индекс i и заменить a<sub>i</sub> на a<sub>i</sub> + 1.</div></div>
<div class="example"><div class="en">You must perform <b>exactly</b> k operations.</div><div class="ru">Нужно сделать ровно k операций.</div></div>
<h3>2. Запросы</h3>
<div class="example"><div class="en">You are given q <b>queries</b>. Each query is <b>of one of two types</b>:</div><div class="ru">Даны q запросов двух типов:</div></div>
<div class="example"><div class="en">"1 i x" — <b>assign</b> a<sub>i</sub> := x; "2 l r" — find the sum a<sub>l</sub> + … + a<sub>r</sub>.</div><div class="ru">«1 i x» — присвоить, «2 l r» — найти сумму на отрезке.</div></div>
<h3>3. Игры</h3>
<div class="example"><div class="en">Alice and Bob play a game. They <b>take turns</b>, and Alice <b>moves first</b>.</div><div class="ru">Алиса и Боб играют. Ходят по очереди, Алиса ходит первой.</div></div>
<div class="example"><div class="en">Determine the <b>winner</b> if both players <b>play optimally</b>.</div><div class="ru">Определите победителя, если оба играют оптимально.</div></div>
` },
  { id: 708, level: "ICPC", category: "theory", topic: "quantifiers", title: "2.1 Кванторы", content: `
<h3>1. each, every, all</h3>
<div class="example"><div class="en"><b>For each</b> i from 1 to n, print a<sub>i</sub> + 1.</div><div class="ru">Для каждого i от 1 до n выведите a<sub>i</sub> + 1.</div></div>
<div class="example"><div class="en"><b>Every</b> student must be in exactly one team.</div><div class="ru">Каждый студент должен быть ровно в одной команде.</div></div>
<div class="example"><div class="en"><b>All</b> elements of the array are equal.</div><div class="ru">Все элементы массива равны.</div></div>
<h3>2. any — «любой» или «хоть один»</h3>
<div class="example"><div class="en">It holds <b>for any</b> i.</div><div class="ru">Это выполняется для любого i (то есть для всех).</div></div>
<div class="example"><div class="en">If there are multiple answers, print <b>any</b> of them.</div><div class="ru">Выведите любой из ответов.</div></div>
<div class="example"><div class="en">If <b>any</b> element is negative, print NO.</div><div class="ru">Если хоть один элемент отрицателен, выведите NO.</div></div>
<h3>3. exactly, only, both, either, neither</h3>
<table>
<tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>exactly one</td><td>ровно один</td></tr>
<tr><td>only</td><td>только</td></tr>
<tr><td>both</td><td>оба</td></tr>
<tr><td>either A or B</td><td>либо A, либо B</td></tr>
<tr><td>neither A nor B</td><td>ни A, ни B</td></tr>
<tr><td>none (of)</td><td>ни один (из)</td></tr>
<tr><td>no two</td><td>никакие два</td></tr>
</table>
<div class="warn">«not all» ≠ «none». Первое — «хотя бы один не такой», второе — «ни одного такого».</div>
` },
  { id: 709, level: "ICPC", category: "theory", topic: "extremes", title: "2.2 Сравнения и экстремумы", content: `
<h3>1. minimum, maximum</h3>
<div class="example"><div class="en">Find the <b>minimum possible</b> value of the sum.</div><div class="ru">Найдите минимально возможное значение суммы.</div></div>
<div class="example"><div class="en">You want to <b>maximize</b> your score.</div><div class="ru">Вы хотите максимизировать свои очки.</div></div>
<h3>2. as … as possible</h3>
<div class="example"><div class="en">Use <b>as few</b> operations <b>as possible</b>.</div><div class="ru">Используйте как можно меньше операций.</div></div>
<div class="example"><div class="en">Collect <b>as many</b> coins <b>as possible</b>.</div><div class="ru">Соберите как можно больше монет.</div></div>
<h3>3. Минимакс</h3>
<div class="example"><div class="en">Split the array into k parts so as to <b>minimize the maximum</b> sum of a part.</div><div class="ru">Разбейте массив на k частей так, чтобы минимизировать максимальную сумму части.</div></div>
<div class="warn">«minimize the maximum» / «maximize the minimum» — почти всегда бинарный поиск по ответу.</div>
` },
  { id: 710, level: "ICPC", category: "theory", topic: "reading_order", title: "3.1 Порядок чтения условия", content: `
<h3>1. Порядок чтения за 6 шагов</h3>
<ol>
<li><b>Шапка (5 секунд).</b> TL, ML, stdin или файл.</li>
<li><b>Output.</b> Что вообще надо найти?</li>
<li><b>Input.</b> Что дано, размеры, диапазоны, мультитест.</li>
<li><b>Формальная часть легенды.</b> Ищите сигнальные фразы.</li>
<li><b>Examples и Note.</b> Прогоните первый пример руками.</li>
<li><b>Ключевые фразы ещё раз.</b> Именно там ловушки.</li>
</ol>
<h3>2. Где в легенде формальная постановка</h3>
<div class="example"><div class="en"><b>Formally,</b> you are given an array a …</div><div class="ru">Формально: дан массив a …</div></div>
<div class="example"><div class="en"><b>In other words,</b> find the number of pairs …</div><div class="ru">Другими словами, найдите количество пар …</div></div>
<div class="example"><div class="en"><b>Your task is to</b> determine the minimum cost.</div><div class="ru">Ваша задача — определить минимальную стоимость.</div></div>
<div class="example"><div class="en"><b>Help</b> Monocarp <b>to find</b> …</div><div class="ru">Помогите Монокарпу найти …</div></div>
<h3>3. Черновик: 4 строчки на задачу</h3>
<ul>
<li><b>Дано</b> — что подаётся на вход, размеры.</li>
<li><b>Найти</b> — что нужно вывести, в каком формате.</li>
<li><b>Ограничения</b> — какая сложность допустима, какой тип данных.</li>
<li><b>Ловушки</b> — повторы, границы, формат вывода.</li>
</ul>
` },
  { id: 711, level: "ICPC", category: "theory", topic: "traps", title: "3.2 Ловушки формулировок", content: `
<h3>1. Повторы и пустые объекты</h3>
<div class="example"><div class="en">The elements are <b>not necessarily distinct</b>.</div><div class="ru">Повторы будут.</div></div>
<div class="example"><div class="en">You can delete some characters (<b>possibly zero</b>).</div><div class="ru">Можно не удалять ничего.</div></div>
<div class="example"><div class="en">Choose a <b>non-empty</b> subsequence.</div><div class="ru">Пустая подпоследовательность не считается.</div></div>
<h3>2. Одновременно или по очереди</h3>
<div class="example"><div class="en">All lamps change their state <b>simultaneously</b>.</div><div class="ru">Все лампы меняются одновременно.</div></div>
<div class="example"><div class="en">The students leave the room <b>one by one</b>.</div><div class="ru">Студенты выходят по одному.</div></div>
<h3>3. Цикличность</h3>
<div class="example"><div class="en">The array is <b>cyclic</b>: a<sub>n</sub> and a<sub>1</sub> are considered adjacent.</div><div class="ru">Массив циклический.</div></div>
<h3>4. Что считать «различным»</h3>
<div class="example"><div class="en">Two subsequences are <b>considered different</b> if the sets of their indices are different.</div><div class="ru">Считаются индексы, а не строки.</div></div>
<div class="example"><div class="en">Count the number of <b>distinct strings</b> that can be obtained.</div><div class="ru">Считаются строки, а не индексы.</div></div>
<h3>5. Формат вывода</h3>
<div class="example"><div class="en">Print the indices <b>in any order</b>.</div><div class="ru">Сортировать не нужно.</div></div>
<div class="example"><div class="en">Print the answer <b>in increasing order</b> of indices.</div><div class="ru">А здесь сортировать нужно.</div></div>
` },
  { id: 712, level: "ICPC", category: "theory", topic: "legend", title: "3.3 Отсеивание легенды", content: `
<h3>1. Словарь «сюжет → модель»</h3>
<table>
<tr><th>В легенде</th><th>Обычно это</th></tr>
<tr><td>cities and roads</td><td>граф</td></tr>
<tr><td>a row of houses / towers</td><td>массив</td></tr>
<tr><td>a field / a board / a map</td><td>сетка (grid)</td></tr>
<tr><td>a company hierarchy, a boss</td><td>дерево</td></tr>
<tr><td>Alice and Bob</td><td>игра</td></tr>
<tr><td>Monocarp, Polycarp, Vasya</td><td>просто имена</td></tr>
</table>
<h3>2. Что пропускать, а что нет</h3>
<p>Пропускайте имена, мотивацию героя, описания мира. Читайте внимательно всё, где есть числа, глаголы действия (<i>can, must, choose, move</i>) и условия (<i>if, unless, only</i>).</p>
<div class="warn">Иногда автор прячет важное ограничение прямо в сюжете: «Monocarp is lazy, so he will <b>never</b> walk the same road twice».</div>
<h3>3. Разобранная легенда</h3>
<div class="example"><div class="en">Vasya has n cats, and the i-th cat weighs w<sub>i</sub>. His basket can hold at most W grams. He wants to take as many cats as possible.</div><div class="ru"><b>Модель:</b> выбрать максимальное количество чисел из w с суммой ≤ W. Решение: сортировка и жадный выбор самых лёгких.</div></div>
` },
  { id: 713, level: "ICPC", category: "theory", topic: "examples", title: "3.4 Работа с примерами и Note", content: `
<h3>1. Ручной прогон</h3>
<ol>
<li>Возьмите первый тест первого примера.</li>
<li>Посчитайте ответ руками по вашему пониманию условия.</li>
<li>Совпало — переходите к решению.</li>
<li>Не совпало — ищите, какая фраза понята неверно.</li>
</ol>
<h3>2. Типичные фразы Note</h3>
<div class="example"><div class="en">In the first test case, <b>one of the possible answers</b> is [2, 1, 3].</div><div class="ru">В первом тесте один из возможных ответов — [2, 1, 3].</div></div>
<div class="example"><div class="en">The array <b>is transformed as follows</b>: [3, 1, 2] → [1, 3, 2] → [1, 2, 3].</div><div class="ru">Массив меняется так: … Стрелки показывают состояние после каждой операции.</div></div>
<div class="example"><div class="en"><b>It can be shown that</b> it is impossible to do it in fewer than 2 operations.</div><div class="ru">Можно показать, что меньше чем за 2 операции нельзя.</div></div>
<div class="example"><div class="en"><b>Thus</b>, the answer is 5.</div><div class="ru">Таким образом, ответ равен 5.</div></div>
` },

  { id: 751, level: "ICPC", category: "practice", topic: "anatomy_q", title: "Практика: анатомия условия", content: `
<p><b>Вопрос 1.</b> <code>time limit per test: 2 seconds</code>. Что это значит? (напиши <code>1</code>, <code>2</code> или <code>3</code>)</p>
<ul>
<li>1) 2 секунды на все тесты вместе</li>
<li>2) 2 секунды на каждый тест</li>
<li>3) 2 секунды на чтение ввода</li>
</ul>
<p>Ответ: [[2]] (per test = «на тест»)</p>
<p><b>Вопрос 2.</b> <code>The first line contains a single integer t (1 ≤ t ≤ 10<sup>4</sup>) — the number of test cases.</code> Как понимать тире «—»?</p>
<ul>
<li>1) «t — это количество тестовых наборов»</li>
<li>2) «t минус количество тестов»</li>
<li>3) «После тире — необязательный комментарий»</li>
</ul>
<p>Ответ: [[1]] (Тире после переменной = «— это», определение)</p>
<p><b>Вопрос 3.</b> <code>If there are multiple answers, print any of them.</code> Ваш ответ отличается от примера, но корректен. Что будет?</p>
<ul>
<li>1) WA</li>
<li>2) Принят</li>
<li>3) Нужно вывести все ответы</li>
</ul>
<p>Ответ: [[2]] (any of them = «любой из них»)</p>
` },
  { id: 752, level: "ICPC", category: "practice", topic: "numbers_q", title: "Практика: числа и ограничения", content: `
<p><b>Вопрос 1.</b> <code>You are given a positive integer n.</code> Может ли n быть 0? (напиши <code>yes</code> или <code>no</code>)</p>
<p>Ответ: [[no]] (positive — строго больше нуля)</p>
<p><b>Вопрос 2.</b> <code>You can perform at most k operations.</code> Сколько операций можно сделать? (введи цифру)</p>
<ul>
<li>1) Ровно k</li>
<li>2) От 0 до k</li>
<li>3) Строго больше k</li>
</ul>
<p>Ответ: [[2]] (at most = ≤)</p>
<p><b>Вопрос 3.</b> <code>Find the number of indices i such that a<sub>i</sub> is strictly greater than a<sub>i−1</sub>.</code> Если a<sub>i</sub> = a<sub>i−1</sub>, индекс засчитывается? (напиши <code>yes</code> или <code>no</code>)</p>
<p>Ответ: [[no]] (strictly — строго)</p>
` },
  { id: 753, level: "ICPC", category: "practice", topic: "arrays_q", title: "Практика: массивы и строки", content: `
<p><b>Вопрос 1.</b> Что из этого — subarray массива [1, 2, 3, 4, 5]? (введи цифру)</p>
<ul><li>1) [1, 3, 5]</li><li>2) [2, 3, 4]</li><li>3) [4, 2]</li></ul>
<p>Ответ: [[2]] (subarray — элементы подряд)</p>
<p><b>Вопрос 2.</b> Что из этого — subsequence, но не subarray? (введи цифру)</p>
<ul><li>1) [2, 3]</li><li>2) [1, 3, 5]</li><li>3) [3, 1]</li></ul>
<p>Ответ: [[2]] (Порядок сохранён, но элементы не подряд)</p>
<p><b>Вопрос 3.</b> Какой массив non-decreasing, но не strictly increasing? (введи цифру)</p>
<ul><li>1) [1, 2, 3]</li><li>2) [1, 1, 2]</li><li>3) [3, 2, 1]</li></ul>
<p>Ответ: [[2]] (non-decreasing разрешает равных соседей)</p>
` },
  { id: 754, level: "ICPC", category: "practice", topic: "graphs_q", title: "Практика: графы", content: `
<p><b>Вопрос 1.</b> Единственное число от «vertices»? (введи цифру)</p>
<ul><li>1) vertice</li><li>2) vertex</li><li>3) vertic</li></ul>
<p>Ответ: [[2]] (vertex → vertices)</p>
<p><b>Вопрос 2.</b> <code>The graph is undirected. The i-th edge connects u<sub>i</sub> and v<sub>i</sub>.</code> Можно ли пройти из v<sub>i</sub> в u<sub>i</sub>? (напиши <code>yes</code> или <code>no</code>)</p>
<p>Ответ: [[yes]] (undirected — в обе стороны)</p>
<p><b>Вопрос 3.</b> Сколько рёбер в tree из 7 вершин? (введи цифру)</p>
<p>Ответ: [[6]] (В дереве из n вершин ровно n − 1 ребро)</p>
` },
  { id: 755, level: "ICPC", category: "practice", topic: "conditionals_q", title: "Практика: условия", content: `
<p><b>Вопрос 1.</b> «unless X» означает… (введи цифру)</p>
<ul><li>1) if X</li><li>2) if not X</li><li>3) because X</li></ul>
<p>Ответ: [[2]] (unless = «если не»)</p>
<p><b>Вопрос 2.</b> <code>The robot moves right unless the next cell is blocked.</code> Следующая клетка свободна. Что делает робот? (введи цифру)</p>
<ul><li>1) Двигается вправо</li><li>2) Стоит на месте</li><li>3) Двигается влево</li></ul>
<p>Ответ: [[1]] (Клетка не занята — условие «unless» не сработало)</p>
<p><b>Вопрос 3.</b> <code>Print YES if s is a palindrome, and NO otherwise.</code> s = "ab". Что вывести? (введи слово)</p>
<p>Ответ: [[no]] («ab» не палиндром)</p>
` },

  { id: 801, level: "EXAM", category: "theory", topic: "tenses_theory", title: "01. Все времена английского языка", content: `
<h3>Обзор системы времён</h3>
<p>В английском языке времена делятся на три группы: настоящее (Present), прошедшее (Past) и будущее (Future). В каждой группе есть четыре аспекта: Simple (простой), Continuous (длительный), Perfect (совершенный) и Perfect Continuous.</p>

<h3>1.1. Present</h3>
<table>
<tr><th>Форма</th><th>Строение</th><th>Основное употребление</th><th>Пример</th></tr>
<tr><td>Present Simple</td><td>V / V-s; do/does</td><td>привычки, факты, расписания</td><td>She works from home. — Она работает из дома.</td></tr>
<tr><td>Present Continuous</td><td>am/is/are + V-ing</td><td>действие сейчас, временная ситуация, договорённость</td><td>I’m staying with my aunt this week. — На этой неделе я живу у тёти.</td></tr>
<tr><td>Present Perfect</td><td>have/has + V3</td><td>опыт, результат к настоящему, период до сих пор</td><td>I’ve lost my keys. — Я потерял ключи.</td></tr>
<tr><td>Present Perfect Continuous</td><td>have/has been + V-ing</td><td>длительность/процесс до настоящего момента</td><td>I’ve been waiting for an hour. — Я жду уже час.</td></tr>
</table>
<p><b>Сравнение:</b></p>
<ul>
<li><i>I live in Berlin.</i> — постоянный факт.</li>
<li><i>I’m living in Berlin for a few months.</i> — временная ситуация.</li>
<li><i>I’ve read the book.</i> — важен результат: книга прочитана.</li>
<li><i>I’ve been reading the book all morning.</i> — важен процесс; книга может быть не закончена.</li>
</ul>

<h3>1.2. Past</h3>
<table>
<tr><th>Форма</th><th>Строение</th><th>Основное употребление</th><th>Пример</th></tr>
<tr><td>Past Simple</td><td>V2 / did + V</td><td>завершённое действие в прошлом</td><td>We arrived late. — Мы приехали поздно.</td></tr>
<tr><td>Past Continuous</td><td>was/were + V-ing</td><td>процесс в определённый момент прошлого; фон</td><td>I was cooking when he called. — Я готовил, когда он позвонил.</td></tr>
<tr><td>Past Perfect</td><td>had + V3</td><td>действие произошло раньше другого прошлого действия</td><td>The train had left before we arrived. — Поезд ушёл до того, как мы приехали.</td></tr>
<tr><td>Past Perfect Continuous</td><td>had been + V-ing</td><td>длительный процесс до момента в прошлом</td><td>She had been working for hours, so she was tired. — Она работала несколько часов, поэтому устала.</td></tr>
</table>
<p>Past Simple сообщает, что произошло; Past Continuous показывает процесс/фон; Past Perfect подчёркивает, что действие было раньше другого прошлого события.</p>

<h3>1.3. Future</h3>
<table>
<tr><th>Форма</th><th>Строение</th><th>Основное употребление</th><th>Пример</th></tr>
<tr><td>will</td><td>will + V</td><td>спонтанное решение, обещание, прогноз/мнение</td><td>I’ll help you. — Я помогу тебе.</td></tr>
<tr><td>be going to</td><td>am/is/are going to + V</td><td>намерение или прогноз по очевидным признакам</td><td>Look at those clouds! It’s going to rain. — Посмотри на облака! Сейчас пойдёт дождь.</td></tr>
<tr><td>Present Continuous</td><td>am/is/are + V-ing</td><td>личная договорённость</td><td>I’m meeting Sam at six. — Я встречаюсь с Сэмом в шесть.</td></tr>
<tr><td>Present Simple</td><td>V / V-s</td><td>расписание</td><td>The plane leaves at 9:20. — Самолёт отправляется в 9:20.</td></tr>
<tr><td>Future Continuous</td><td>will be + V-ing</td><td>процесс в конкретный момент будущего</td><td>This time tomorrow, I’ll be flying home. — Завтра в это время я буду лететь домой.</td></tr>
<tr><td>Future Perfect</td><td>will have + V3</td><td>завершение к моменту в будущем</td><td>By Friday, I’ll have finished. — К пятнице я закончу.</td></tr>
<tr><td>Future Perfect Continuous</td><td>will have been + V-ing</td><td>длительность процесса к будущему моменту</td><td>By June, he’ll have been working here for ten years. — К июню будет десять лет, как он здесь работает.</td></tr>
</table>

<h3>1.4. Важные маркеры и ограничения</h3>
<ul>
<li><b>Present Simple:</b> usually, often, every day, never.</li>
<li><b>Present Continuous:</b> now, at the moment, currently, this week.</li>
<li><b>Past Simple:</b> yesterday, last year, two days ago, in 2019.</li>
<li><b>Present Perfect:</b> ever, never, just, already, yet, recently, so far, since, for.</li>
<li><b>Past Perfect:</b> by the time, already, before.</li>
<li><b>Future Perfect:</b> by tomorrow, by the time, before + будущий момент.</li>
</ul>
<p><b>since</b> = с какого момента; <b>for</b> = как долго.</p>
<p>Обычно не употребляем Continuous с глаголами состояния (<i>know, believe, belong, need, prefer, understand</i>).</p>
<p>После <i>when, as soon as, until, before, after, if</i> в придаточном о будущем обычно используется Present Simple: <i>I’ll call you when I arrive</i>.</p>

<h3>1.5. Быстрый алгоритм выбора времени</h3>
<ol>
<li>Когда происходит событие: настоящее, прошлое или будущее?</li>
<li>Важен факт/регулярность, процесс, результат или длительность?</li>
<li>Есть ли второе событие, относительно которого нужно показать «раньше»?</li>
<li>Период ещё продолжается или уже завершён?</li>
<li>Не является ли выражение расписанием, договорённостью или намерением?</li>
</ol>
` },
  { id: 802, level: "EXAM", category: "practice", topic: "tenses_practice", title: "01. Практика: Все времена", content: `
<h3>Практика A. Выберите правильную форму</h3>
<ol>
<li>I usually [[walk]] (walk) to work, but today I [[am taking]] (take) the bus.</li>
<li>She [[has known]] (know) Mark since primary school.</li>
<li>We [[have been waiting]] (wait) for forty minutes and the doctor still hasn’t called us.</li>
<li>When I got home, my family [[had]] already [[eaten]] (already / eat).</li>
<li>At 8 p.m. tomorrow, I [[will be driving]] (drive) to the airport.</li>
<li>By the end of this month, they [[will have completed]] (complete) the project.</li>
<li>He [[worked]] (work) in Madrid in 2022.</li>
<li>I [[haven't seen]] (not / see) that film yet.</li>
<li>The phone rang while I [[was having]] (have) a shower.</li>
<li>By next April, I [[will have been studying]] (study) English for three years.</li>
<li>The museum [[opens]] (open) at ten tomorrow, according to the website.</li>
<li>Look! That cyclist [[is going to fall]] (fall)!</li>
<li>How long [[have]] you [[been learning]] (learn) English?</li>
<li>She was exhausted because she [[had been running]] (run).</li>
<li>I promise I [[won't tell]] (not / tell) anyone.</li>
</ol>

<h3>Практика B. Исправьте ошибки</h3>
<ol>
<li>I am knowing the answer. → [[I know the answer.]]</li>
<li>We have visited Rome last summer. → [[We visited Rome last summer.]]</li>
<li>When she will arrive, we’ll start dinner. → [[When she arrives, we'll start dinner.]]</li>
<li>He works here since 2020. → [[He has worked here since 2020.|He has been working here since 2020.]]</li>
<li>By the time I arrived, the meeting already started. → [[By the time I arrived, the meeting had already started.]]</li>
<li>This time next week I will sit on the beach. → [[This time next week I will be sitting on the beach.]]</li>
<li>I have been finishing the report, so you can read it now. → [[I have finished the report, so you can read it now.]]</li>
<li>They didn’t went to the party. → [[They didn't go to the party.]]</li>
<li>She has been owning this car for years. → [[She has owned this car for years.]]</li>
<li>By 2030, scientists will discover a cure for every disease. → [[By 2030, scientists will have discovered a cure for every disease.]]</li>
</ol>

<h3>Практика C. Переведите на английский</h3>
<ol>
<li>Я живу здесь с 2021 года. → [[I have lived here since 2021.|I have been living here since 2021.]]</li>
<li>Когда я позвонил, они обсуждали план. → [[When I called, they were discussing the plan.]]</li>
<li>К тому времени, как мы добрались до станции, поезд уже ушёл. → [[By the time we got to the station, the train had already left.]]</li>
<li>Завтра в это время я буду сдавать экзамен. → [[This time tomorrow, I'll be taking an exam.]]</li>
<li>К пятнице она закончит отчёт. → [[She'll have finished the report by Friday.]]</li>
<li>Ты когда-нибудь пробовал индийскую еду? → [[Have you ever tried Indian food?]]</li>
<li>Я весь день занимаюсь, поэтому устал. → [[I've been studying all day, so I'm tired.]]</li>
<li>Мы встречаемся с клиентом в три часа. → [[We're meeting the client at three.]]</li>
<li>Если он опоздает, мы начнём без него. → [[If he is late, we'll start without him.]]</li>
<li>Через месяц будет пять лет, как они работают вместе. → [[By next month, they'll have been working together for five years.]]</li>
</ol>
` },
  { id: 803, level: "EXAM", category: "theory", topic: "passive_theory", title: "02. Passive Voice — пассивный залог", content: `
<h3>Краткая теория</h3>
<p>Пассив нужен, когда важнее действие или объект, чем исполнитель. Объект активного предложения становится подлежащим.</p>
<p><b>Active:</b> Someone repaired the road.<br><b>Passive:</b> The road was repaired. — Дорогу отремонтировали.</p>
<p>Формула: <b>be в нужном времени + V3</b>. Время выражается формой <i>be</i>:</p>
<ul>
<li>Present Simple: am/is/are + V3 — <i>The room is cleaned every day.</i></li>
<li>Past Simple: was/were + V3 — <i>The bridge was built in 1998.</i></li>
<li>Present Continuous: am/is/are being + V3 — <i>The road is being repaired.</i></li>
<li>Past Continuous: was/were being + V3 — <i>The room was being painted.</i></li>
<li>Present Perfect: have/has been + V3 — <i>The email has been sent.</i></li>
<li>Past Perfect: had been + V3 — <i>The work had been finished before noon.</i></li>
<li>Future Simple: will be + V3 — <i>The results will be announced tomorrow.</i></li>
<li>Future Perfect: will have been + V3 — <i>The project will have been completed by June.</i></li>
<li>Модальные глаголы: modal + be + V3 — <i>It must be done today.</i></li>
<li>Инфинитив: to be + V3 — <i>The report needs to be checked.</i></li>
</ul>
<p>Исполнитель с <b>by</b> добавляется, если он важен: <i>The novel was written by Orwell.</i> Не всякий глагол образует пассив: обычно нужен переходный глагол с объектом.</p>
` },
  { id: 804, level: "EXAM", category: "practice", topic: "passive_practice", title: "02. Практика: Passive Voice", content: `
<h3>Практика A. Преобразуйте в Passive</h3>
<ol>
<li>They clean the offices every evening. → [[The offices are cleaned every evening.]]</li>
<li>Someone stole my bike yesterday. → [[My bike was stolen yesterday.]]</li>
<li>The company is testing a new app. → [[A new app is being tested by the company.]]</li>
<li>They have cancelled the meeting. → [[The meeting has been cancelled.]]</li>
<li>The team had completed the work before the deadline. → [[The work had been completed before the deadline.]]</li>
<li>They will publish the results tomorrow. → [[The results will be published tomorrow.]]</li>
<li>You must wear a helmet. → [[A helmet must be worn.]]</li>
<li>They are building a new hospital near here. → [[A new hospital is being built near here.]]</li>
<li>Someone was following us. → [[We were being followed.]]</li>
<li>They will have delivered all the packages by noon. → [[All the packages will have been delivered by noon.]]</li>
<li>People speak Spanish in many countries. → [[Spanish is spoken in many countries.]]</li>
<li>Nobody has told me the truth. → [[I haven't been told the truth.]]</li>
</ol>

<h3>Практика B. Вставьте правильную форму глагола в скобках</h3>
<ol>
<li>The invitations [[were sent]] (send) yesterday.</li>
<li>This machine [[is used]] (use) every day.</li>
<li>Our house [[is being painted]] (paint) at the moment.</li>
<li>The problem [[has]] already [[been solved]] (solve).</li>
<li>The documents must [[be signed]] (sign) before Friday.</li>
<li>A new shopping centre [[was being built]] (build) when I moved here.</li>
<li>The suspect [[is being questioned]] (question) by the police now.</li>
<li>The work [[will be finished]] (finish) by the end of the week.</li>
<li>The room [[hasn't been cleaned]] (not / clean) yet.</li>
<li>When we arrived, the food [[had been prepared]] (prepare).</li>
</ol>

<h3>Практика C. Active или Passive? Выберите форму.</h3>
<ol>
<li>The chef [[prepared]] (prepared / was prepared) a special meal.</li>
<li>The special meal [[was prepared]] (prepared / was prepared) for the guests.</li>
<li>This book [[has been translated]] (has translated / has been translated) into twenty languages.</li>
<li>They [[are interviewing]] (are interviewing / are being interviewed) three candidates today.</li>
<li>The road [[will be closed]] (will close / will be closed) for repairs tonight.</li>
<li>Someone [[has damaged]] (has damaged / has been damaged) my laptop.</li>
<li>The results [[will be announced]] (announce / will be announced) next Monday.</li>
<li>The manager [[gave]] (gave / was given) us clear instructions.</li>
</ol>

<h3>Практика D. Переведите на английский</h3>
<ol>
<li>Эти письма отправляют каждую пятницу. → [[These letters are sent every Friday.]]</li>
<li>Мост строили, когда мы переехали сюда. → [[The bridge was being built when we moved here.]]</li>
<li>Все билеты уже проданы. → [[All the tickets have already been sold.]]</li>
<li>Решение объявят завтра. → [[The decision will be announced tomorrow.]]</li>
<li>Эту проблему нужно решить немедленно. → [[This problem needs to be solved immediately.]]</li>
<li>К июлю здание будет завершено. → [[The building will have been completed by July.]]</li>
<li>Меня не предупредили об изменении. → [[I wasn't told about the change.]]</li>
<li>Сейчас проверяют документы. → [[The documents are being checked now.]]</li>
</ol>
` },
  { id: 805, level: "EXAM", category: "theory", topic: "conditionals_theory", title: "03. Conditionals — условные предложения", content: `
<h3>Краткая теория</h3>
<table>
<tr><th>Тип</th><th>Значение</th><th>Формула</th><th>Пример</th></tr>
<tr><td>Zero</td><td>факт, закономерность</td><td>If + Present, Present</td><td>If you heat ice, it melts. — Если нагреть лёд, он тает.</td></tr>
<tr><td>First</td><td>реальное/возможное будущее</td><td>If + Present, will + V</td><td>If it rains, we’ll stay home. — Если пойдёт дождь, мы останемся дома.</td></tr>
<tr><td>Second</td><td>воображаемое настоящее/будущее</td><td>If + Past, would + V</td><td>If I had more time, I’d travel. — Если бы у меня было больше времени, я бы путешествовал.</td></tr>
<tr><td>Third</td><td>нереальное прошлое, сожаление</td><td>If + Past Perfect, would have + V3</td><td>If she’d left earlier, she’d have caught the train. — Если бы она вышла раньше, то успела бы на поезд.</td></tr>
<tr><td>Mixed</td><td>прошлое влияет на настоящее или наоборот</td><td>комбинация форм</td><td>If I’d studied medicine, I’d be a doctor now. — Если бы я изучал медицину, сейчас был бы врачом.</td></tr>
</table>
<p>Не ставьте <b>will</b> в обычной придаточной части с <i>if</i>: <i>If I see him, I’ll tell him.</i></p>
<p><b>Unless</b> = if … not: <i>Unless you hurry, you’ll miss the bus.</i></p>
<p><b>Provided/providing that, as long as</b> = при условии, что.</p>
<p><b>In case</b> = на случай, если; не равно обычному <i>if</i>: <i>Take an umbrella in case it rains.</i></p>
` },
  { id: 806, level: "EXAM", category: "practice", topic: "conditionals_practice", title: "03. Практика: Conditionals", content: `
<h3>Практика A. Поставьте глаголы в правильную форму</h3>
<ol>
<li>If you [[mix]] (mix) blue and yellow, you [[get]] (get) green.</li>
<li>If I [[see]] (see) Anna tomorrow, I [[will give]] (give) her your message.</li>
<li>If he [[had]] (have) more confidence, he [[would apply]] (apply) for the job.</li>
<li>If we [[had left]] (leave) earlier, we [[wouldn't have missed]] (not / miss) the train yesterday.</li>
<li>If I [[hadn't spent]] (not / spend) so much money last month, I [[would have]] (have) more now.</li>
<li>Unless you [[hurry]] (hurry), you [[will be]] (be) late.</li>
<li>If she [[had listened]] (listen) to the instructions, she wouldn’t be making this mistake now.</li>
<li>If I were you, I [[wouldn't accept]] (not / accept) the offer.</li>
<li>If they [[had booked]] (book) in advance, they would have got cheaper tickets.</li>
<li>If water [[reaches]] (reach) 100°C, it [[boils]] (boil) at sea level.</li>
<li>We’ll go hiking provided that the weather [[is]] (be) good.</li>
<li>If he hadn’t forgotten his passport, he [[would be]] (be) on the plane now.</li>
</ol>

<h3>Практика B. Перефразируйте, используя слово в скобках</h3>
<ol>
<li>Hurry up or you’ll miss the train. (IF) → [[If you don't hurry, you'll miss the train.]]</li>
<li>I didn’t study, so I failed the test. (IF) → [[If I had studied, I wouldn't have failed the test.]]</li>
<li>I don’t have a car, so I can’t drive to work. (IF) → [[If I had a car, I could drive to work.]]</li>
<li>You can borrow my laptop, but you must be careful. (AS LONG AS) → [[You can borrow my laptop as long as you're careful.]]</li>
<li>He didn’t train enough, so he isn’t fit now. (IF) → [[If he had trained more, he would be fitter now.]]</li>
<li>You won’t understand unless you ask questions. (IF) → [[If you ask questions, you'll understand.|You won't understand if you don't ask questions.]]</li>
<li>I regret not calling her. (IF) → [[If only I had called her.|I wish I had called her.]]</li>
<li>You should take a map because you might get lost. (IN CASE) → [[Take a map in case you get lost.]]</li>
</ol>

<h3>Практика D. Переведите на английский</h3>
<ol>
<li>Если завтра будет солнечно, мы поедем за город. → [[If it's sunny tomorrow, we'll go to the countryside.]]</li>
<li>Если бы я знал ответ, я бы тебе сказал. → [[If I knew the answer, I'd tell you.]]</li>
<li>Если бы они проверили адрес, они бы не заблудились. → [[If they had checked the address, they wouldn't have got lost.]]</li>
<li>Если бы я тогда принял эту работу, сейчас я жил бы в Лондоне. → [[If I had accepted that job then, I'd be living in London now.]]</li>
<li>Если не поторопишься, опоздаешь. → [[Unless you hurry, you'll be late.]]</li>
<li>Если бы она больше практиковалась, сейчас она говорила бы свободнее. → [[If she had practised more, she would speak more fluently now.]]</li>
</ol>
` },
  { id: 807, level: "EXAM", category: "theory", topic: "wishes_theory", title: "04. Wishes, If only и похожие конструкции", content: `
<h3>Краткая теория</h3>
<ul>
<li><b>wish / if only + Past Simple</b> — хочется, чтобы настоящее было другим: <i>I wish I lived near the sea.</i> — Хотелось бы жить у моря.</li>
<li><b>wish / if only + Past Perfect</b> — сожаление о прошлом: <i>I wish I had studied harder.</i> — Жаль, что я не учился усерднее.</li>
<li><b>wish + would + V</b> — раздражение или желание, чтобы кто-то изменил поведение/чтобы ситуация изменилась: <i>I wish you would stop shouting.</i> — Хотелось бы, чтобы ты перестал кричать.</li>
<li><b>wish + could + V</b> — желание иметь возможность: <i>I wish I could drive.</i> — Хотелось бы уметь водить.</li>
<li><b>If only</b> эмоциональнее, чем <i>wish</i>: <i>If only we had more time!</i></li>
<li><b>would rather + subject + Past Simple</b> — предпочтение относительно другого человека сейчас/в будущем: <i>I’d rather you came tomorrow.</i></li>
<li><b>It’s time + subject + Past Simple</b> — пора кому-то что-то сделать: <i>It’s time we left.</i></li>
<li><b>I’d rather + V</b> — предпочитаю сам: <i>I’d rather stay home.</i></li>
</ul>
<p>Не путайте <i>wish</i> с <i>hope</i>: <i>I hope she passes the exam</i> — я надеюсь, что она сдаст экзамен (это реально возможно).</p>
` },
  { id: 808, level: "EXAM", category: "practice", topic: "wishes_practice", title: "04. Практика: Wishes и If only", content: `
<h3>Практика A. Выберите форму</h3>
<ol>
<li>I wish I [[knew]] (know) how to fix this computer.</li>
<li>She wishes she [[hadn't said]] (not / say) that yesterday.</li>
<li>I wish you [[would stop]] (stop) interrupting me.</li>
<li>If only we [[had]] (have) more money!</li>
<li>He wishes he [[could]] (can) come to the concert.</li>
<li>It’s time we [[went]] (go) home.</li>
<li>I’d rather you [[didn't tell]] (not / tell) anyone about this.</li>
<li>I wish it [[weren't raining]] (not / rain) right now.</li>
<li>If only I [[had taken]] (take) your advice last year.</li>
<li>I’d rather [[watch]] (watch) a film than go out tonight.</li>
</ol>

<h3>Практика B. Перепишите предложения с заданной конструкцией</h3>
<ol>
<li>I don’t speak French, and I regret it. (WISH) → [[I wish I spoke French.]]</li>
<li>She spent all her money and now regrets it. (WISH) → [[She wishes she hadn't spent all her money.]]</li>
<li>Please stop making so much noise. (I WISH YOU ...) → [[I wish you would stop making so much noise.]]</li>
<li>We should leave now. (IT’S TIME ...) → [[It's time we left.]]</li>
<li>I prefer you not to use my computer. (I’D RATHER ...) → [[I'd rather you didn't use my computer.]]</li>
<li>I’m sorry I can’t come with you. (WISH) → [[I wish I could come with you.]]</li>
<li>He regrets not accepting the invitation. (IF ONLY) → [[If only he had accepted the invitation.]]</li>
<li>I want him to call me instead of texting. (I WISH ... WOULD) → [[I wish he would call me instead of texting.]]</li>
</ol>

<h3>Практика C. Переведите на английский</h3>
<ol>
<li>Жаль, что я не живу ближе к работе. → [[I wish I lived closer to work.]]</li>
<li>Если бы только мы купили билеты раньше! → [[If only we had bought the tickets earlier!]]</li>
<li>Хотелось бы, чтобы ты перестал опаздывать. → [[I wish you would stop being late.]]</li>
<li>Жаль, что я не послушал твой совет. → [[I wish I had listened to your advice.]]</li>
<li>Пора нам начинать. → [[It's time we started.]]</li>
<li>Я бы предпочёл, чтобы ты пришёл пораньше. → [[I'd rather you came earlier.]]</li>
<li>Хотелось бы, чтобы я мог остаться подольше. → [[I wish I could stay longer.]]</li>
<li>Надеюсь, погода улучшится. → [[I hope the weather improves.]]</li>
</ol>
` },
  { id: 809, level: "EXAM", category: "theory", topic: "reported_theory", title: "05. Reported Speech — косвенная речь", content: `
<h3>Краткая теория</h3>
<p>Косвенная речь передаёт чужие слова без точной цитаты.</p>
<p><b>Прямая:</b> Tom said, “I am tired.”<br><b>Косвенная:</b> Tom said (that) he was tired. — Том сказал, что устал.</p>
<h3>Типичные сдвиги времён</h3>
<ul>
<li>Present Simple → Past Simple</li>
<li>Present Continuous → Past Continuous</li>
<li>Past Simple → Past Perfect (часто, но не всегда обязательно, если последовательность и так ясна)</li>
<li>Present Perfect → Past Perfect</li>
<li>will → would</li>
<li>can → could</li>
<li>may → might</li>
<li>must → had to (если речь об обязанности в прошлом)</li>
</ul>
<p>Если сообщение всё ещё актуально или факт универсален, сдвиг времени необязателен: <i>The teacher said that water boils at 100°C.</i></p>
<h3>Местоимения и слова времени/места</h3>
<ul>
<li>I → he/she; my → his/her; we → they</li>
<li>now → then; today → that day; yesterday → the day before; tomorrow → the next day</li>
<li>here → there; this → that; these → those</li>
</ul>
<h3>Вопросы, просьбы и приказы</h3>
<ul>
<li>Общий вопрос: <b>asked + if/whether + subject + verb</b><br>“Are you ready?” → He asked if I was ready.</li>
<li>Специальный вопрос: <b>asked + question word + subject + verb</b><br>“Where do you live?” → She asked where I lived.</li>
<li>Просьба/приказ: <b>told/asked + object + (not) to + verb</b><br>“Please wait.” → He asked me to wait.<br>“Don’t touch it.” → She told me not to touch it.</li>
</ul>
<p>Не используйте порядок слов вопроса внутри косвенного вопроса: <i>She asked where I was</i>, не <i>where was I</i>.</p>
` },
  { id: 810, level: "EXAM", category: "practice", topic: "reported_practice", title: "05. Практика: Reported Speech", content: `
<h3>Практика A. Переведите в косвенную речь</h3>
<ol>
<li>Emma said, “I am busy.” → [[Emma said that she was busy.]]</li>
<li>He said, “I have finished the report.” → [[He said that he had finished the report.]]</li>
<li>They said, “We will call you tomorrow.” → [[They said that they would call me the next day.]]</li>
<li>Jack said, “I saw her yesterday.” → [[Jack said that he had seen her the day before.]]</li>
<li>Mia said, “I can help you.” → [[Mia said that she could help me.]]</li>
<li>The teacher said, “The Earth goes around the Sun.” → [[The teacher said that the Earth goes around the Sun.]]</li>
<li>She asked me, “Do you like coffee?” → [[She asked me if I liked coffee.]]</li>
<li>He asked, “Where did you buy this jacket?” → [[He asked where I had bought that jacket.]]</li>
<li>Mum said to me, “Don’t stay up late.” → [[Mum told me not to stay up late.]]</li>
<li>The receptionist said to us, “Please wait here.” → [[The receptionist asked us to wait there.]]</li>
<li>He asked her, “Have you ever been to Spain?” → [[He asked her if she had ever been to Spain.]]</li>
<li>Anna said, “I’m going to apply for a new job.” → [[Anna said that she was going to apply for a new job.]]</li>
</ol>

<h3>Практика B. Исправьте ошибки</h3>
<ol>
<li>He asked me where did I work. → [[He asked me where I worked.]]</li>
<li>She said me that she was tired. → [[She told me that she was tired.|She said to me that she was tired.]]</li>
<li>They told that they would arrive late. → [[They said that they would arrive late.|They told us that they would arrive late.]]</li>
<li>He asked if was I ready. → [[He asked if I was ready.]]</li>
<li>Mum told me don’t touch the oven. → [[Mum told me not to touch the oven.]]</li>
<li>She asked me what I wanted. (Правильно) → [[She asked me what I wanted.]]</li>
<li>He said that he has lost his wallet the day before. → [[He said that he had lost his wallet the day before.]]</li>
<li>I asked him where he lived. (Правильно) → [[I asked him where he lived.]]</li>
<li>The teacher told us to not talk. → [[The teacher told us not to talk.]]</li>
<li>She asked me if I had seen her keys. (Правильно) → [[She asked me if I had seen her keys.]]</li>
</ol>

<h3>Практика C. Выберите правильный вариант</h3>
<ol>
<li>“I’m hungry,” he said. → He said he [[was]] (is / was) hungry.</li>
<li>“Where are you going?” → She asked me where [[I was going]] (was I going / I was going).</li>
<li>“Don’t be late.” → He told us [[not to be]] (not to be / to not be) late.</li>
<li>“Can you help?” → She asked if I [[could]] (could / can) help.</li>
<li>“I’ll see you next week.” → He said he would see me [[the following week]] (the following week / next week).</li>
<li>“Have you finished?” → She asked whether I [[had finished]] (had finished / have finished).</li>
</ol>

<h3>Практика D. Переведите на английский</h3>
<ol>
<li>Она сказала, что никогда не была в Канаде. → [[She said that she had never been to Canada.]]</li>
<li>Он спросил меня, знаю ли я дорогу. → [[He asked me if I knew the way.]]</li>
<li>Учитель спросил, почему я опоздал. → [[The teacher asked why I had been late.]]</li>
<li>Мама попросила меня закрыть окно. → [[Mum asked me to close the window.]]</li>
<li>Они сказали, что приедут на следующий день. → [[They said that they would arrive the next day.]]</li>
<li>Он велел нам не открывать дверь. → [[He told us not to open the door.]]</li>
<li>Она спросила, закончил ли я работу. → [[She asked if I had finished the work.]]</li>
<li>Я спросил его, где он купил телефон. → [[I asked him where he had bought the phone.]]</li>
</ol>
` },
  { id: 811, level: "EXAM", category: "practice", topic: "mixed_exam", title: "06. Большой смешанный практикум", content: `
<p>В этих заданиях темы намеренно перемешаны. Определите нужную конструкцию самостоятельно: времена, пассив, условные предложения, wishes или косвенная речь.</p>

<h3>Блок A. Выберите правильный вариант</h3>
<ol>
<li>I [[have known]] her for ten years. (know / have known / am knowing)</li>
<li>The new library [[will be opened]] next spring. (will open / will be opened / will have opening)</li>
<li>If I [[were]] you, I’d apologise. (am / were / had been)</li>
<li>He said he [[had sent]] the email the day before. (sent / had sent / has sent)</li>
<li>I wish I [[hadn't spent]] so much money last weekend. (didn’t spend / hadn’t spent / wouldn’t spend)</li>
<li>This time tomorrow, we [[will be flying]] over the Atlantic. (fly / will be flying / will have flown)</li>
<li>If she had taken the medicine, she [[would feel]] better now. (would feel / would have felt / will feel)</li>
<li>The documents [[are being checked]] at the moment. (are checking / are being checked / have checked)</li>
<li>She asked me where I [[lived]]. (live / did live / lived)</li>
<li>By 2035, many new technologies [[will have been developed]]. (will develop / will have been developed / are developing)</li>
<li>If you [[heat]] ice, it melts. (will heat / heat / heated)</li>
<li>I wish my neighbours [[wouldn't play]] loud music every night. (wouldn’t play / didn’t played / won’t play)</li>
<li>The train [[had left]] before we got to the station. (left / had left / has left)</li>
<li>If he [[had studied]] harder, he would have passed. (studied / had studied / would study)</li>
<li>The manager told us [[not to use]] our phones. (not use / not to use / don’t use)</li>
<li>I [[have been studying]] for two hours, so I need a break. (study / have studied / have been studying)</li>
<li>If it [[rains]] tomorrow, the match will be cancelled. (will rain / rains / would rain)</li>
<li>The house [[was being painted]] when we arrived. (was painting / was being painted / painted)</li>
<li>She said that she [[couldn't]] come because she was ill. (can’t / couldn’t / won’t)</li>
<li>It’s time you [[made]] a decision. (make / made / have made)</li>
</ol>

<h3>Блок B. Поставьте глаголы в скобках в правильную форму</h3>
<ol>
<li>By the time the ambulance arrived, the patient [[had lost]] (lose) consciousness.</li>
<li>The new rules [[will be introduced]] (introduce) next month.</li>
<li>If I [[had been]] (be) more organised, I wouldn’t have missed the appointment yesterday.</li>
<li>He [[has been working]] (work) on this project since January.</li>
<li>She asked me whether I [[had seen]] (see) her glasses.</li>
<li>I wish I [[hadn't forgotten]] (not / forget) to save the file last night.</li>
<li>While we [[were driving]] (drive) home, we saw an accident.</li>
<li>If you [[don't water]] (not / water) plants, they die.</li>
<li>The suspect [[was arrested]] (arrest) two days ago.</li>
<li>By next December, I [[will have been living]] (live) here for five years.</li>
<li>He said he [[would call]] (call) me the following day.</li>
<li>If they had booked earlier, they [[would have paid]] (pay) less.</li>
<li>I’d rather you [[kept]] (keep) this information private.</li>
<li>The kitchen [[was being renovated]] (renovate) when they bought the house.</li>
<li>I [[had]] never [[tried]] (try) sushi before I went to Japan.</li>
<li>If she [[had taken]] (take) the job, she would be living abroad now.</li>
<li>I’m sure you [[will enjoy]] (enjoy) the film.</li>
<li>The report must [[be finished]] (finish) today.</li>
<li>She [[hasn't replied]] (not / reply) to my message yet.</li>
<li>He was tired because he [[had been running]] (run) for an hour.</li>
</ol>

<h3>Блок C. Исправьте одну ошибку в каждом предложении</h3>
<ol>
<li>I have seen him yesterday. → [[I saw him yesterday.]]</li>
<li>If I will have time, I’ll call you. → [[If I have time, I'll call you.]]</li>
<li>The room is cleaned right now. → [[The room is being cleaned right now.]]</li>
<li>She asked me where was I going. → [[She asked me where I was going.]]</li>
<li>I wish I would know the answer. → [[I wish I knew the answer.]]</li>
<li>By the time we arrived, the film already started. → [[By the time we arrived, the film had already started.]]</li>
<li>The invitations have sent already. → [[The invitations have already been sent.]]</li>
<li>If he had listened, he wouldn’t make that mistake yesterday. → [[If he had listened, he wouldn't have made that mistake yesterday.]]</li>
<li>She told me don’t worry. → [[She told me not to worry.]]</li>
<li>I am working here since 2021. → [[I have been working here since 2021.|I have worked here since 2021.]]</li>
<li>This time tomorrow, I will drive to Prague. → [[This time tomorrow, I will be driving to Prague.]]</li>
<li>If only I didn’t say that at the meeting yesterday. → [[If only I hadn't said that at the meeting yesterday.]]</li>
<li>The bridge is built in 1920. → [[The bridge was built in 1920.]]</li>
<li>He asked me did I need any help. → [[He asked me if I needed any help.]]</li>
<li>Unless you don’t hurry, you’ll miss the bus. → [[Unless you hurry, you'll miss the bus.|If you don't hurry, you'll miss the bus.]]</li>
</ol>

<h3>Блок D. Преобразуйте предложения, сохранив смысл</h3>
<ol>
<li>Someone has stolen my phone. (PASSIVE) → [[My phone has been stolen.]]</li>
<li>“I can’t come today,” Lisa said. (REPORTED SPEECH) → [[Lisa said that she couldn't come that day.]]</li>
<li>I didn’t save the document, so I lost my changes. (IF) → [[If I had saved the document, I wouldn't have lost my changes.]]</li>
<li>I don’t have enough time to learn another language. (WISH) → [[I wish I had enough time to learn another language.]]</li>
<li>They will announce the winner tomorrow. (PASSIVE) → [[The winner will be announced tomorrow.]]</li>
<li>“Where have you been?” he asked me. (REPORTED SPEECH) → [[He asked me where I had been.]]</li>
<li>I regret telling him the secret. (WISH) → [[I wish I hadn't told him the secret.]]</li>
<li>You should leave now. (IT’S TIME) → [[It's time you left.]]</li>
<li>She didn’t take the job, so she isn’t living in Paris now. (MIXED CONDITIONAL) → [[If she had taken the job, she would be living in Paris now.]]</li>
<li>Don’t touch the equipment. (TOLD) → [[We were told not to touch the equipment.|They told us not to touch the equipment.]]</li>
<li>Perhaps they’ll finish the work by Monday. (FUTURE PERFECT) → [[They will have finished the work by Monday.]]</li>
<li>I prefer you to arrive before six. (I’D RATHER) → [[I'd rather you arrived before six.]]</li>
</ol>

<h3>Блок E. Переведите на английский</h3>
<ol>
<li>Я изучаю английский уже три года. → [[I have been learning English for three years.|I have learned English for three years.]]</li>
<li>Когда мы пришли, ужин уже приготовили. → [[When we arrived, dinner had already been prepared.]]</li>
<li>К концу года все документы будут проверены. → [[All the documents will have been checked by the end of the year.]]</li>
<li>Если бы я был на твоём месте, я бы не соглашался. → [[If I were you, I wouldn't agree.]]</li>
<li>Если бы она не забыла ключи, сейчас мы были бы уже дома. → [[If she hadn't forgotten the keys, we would be home by now.]]</li>
<li>Жаль, что я не купил билеты заранее. → [[I wish I had bought the tickets in advance.]]</li>
<li>Он спросил меня, видел ли я его брата накануне. → [[He asked me if I had seen his brother the day before.]]</li>
<li>Меня попросили не пользоваться телефоном во время экзамена. → [[I was asked not to use my phone during the exam.]]</li>
<li>Сейчас ремонтируют дорогу, поэтому автобусы идут в объезд. → [[The road is being repaired now, so buses are being diverted.]]</li>
<li>Если завтра он позвонит, скажи ему, что я занят. → [[If he calls tomorrow, tell him I'm busy.]]</li>
<li>К тому времени, как ты вернёшься, я закончу уборку. → [[By the time you come back, I'll have finished cleaning.]]</li>
<li>Хотелось бы, чтобы соседи перестали шуметь по ночам. → [[I wish the neighbours would stop making noise at night.]]</li>
<li>Она сказала, что работает здесь с 2020 года. → [[She said that she had been working there since 2020.]]</li>
<li>Если не будешь практиковаться, прогресса не будет. → [[If you don't practise, you won't make progress.]]</li>
<li>Пора нам обсудить эту проблему. → [[It's time we discussed this problem.]]</li>
</ol>

<h3>Блок F. Мини-тексты: выберите формы по контексту</h3>
<h4>Текст 1</h4>
<p>Last Friday, I [[was walking]] (1) (walk) home when I [[noticed]] (2) (notice) that my wallet was missing. I [[checked]] (3) (check) my bag several times, but it wasn’t there. I realised that I [[had left]] (4) (leave) it on the bus. Luckily, a passenger [[found]] (5) (find) it and [[handed]] (6) (hand) it to the driver. By the time I reached the bus station, my wallet [[had]] (7) already [[been returned]] (return) to the lost-property office.</p>

<h4>Текст 2</h4>
<p>Our office [[is being renovated]] (1) (renovate) this month, so everyone [[is working]] (2) (work) from home. The work [[will be finished]] (3) (finish) by the end of the month. Our manager said that we [[would receive]] (4) (receive) an email when the office was ready. If everything [[goes]] (5) (go) according to plan, we [[will move]] (6) (move) back in on the first Monday of next month.</p>

<h4>Текст 3</h4>
<p>I wish I [[had taken]] (1) (take) my teacher’s advice last year. If I [[had studied]] (2) (study) more consistently, I [[would feel]] (3) (feel) more confident now. My friend told me that I [[had improved]] (4) (improve) a lot already, but I know I need more practice. If I [[keep]] (5) (keep) working, I [[will have reached]] (6) (reach) my goal by next summer.</p>
` },
  // ============================================================
  // УРОВЕНЬ B1 (Intermediate) - НОВЫЙ МАТЕРИАЛ
  // ============================================================
  { id: 2001, level: "B1", category: "theory", topic: "present-perfect-vs-past-simple", title: "Present Perfect vs Past Simple", content: `
      <p><strong>Что это?</strong> Разница между этими временами — ключевая на уровне B1. Present Perfect связывает прошлое с настоящим, а Past Simple описывает завершённый факт в прошлом.</p>
      <h3>Когда использовать Present Perfect</h3>
      <ul>
        <li><strong>Опыт:</strong> I <strong>have visited</strong> Paris. (Я бывал в Париже — неважно когда.)</li>
        <li><strong>Результат сейчас:</strong> She <strong>has lost</strong> her keys. (Она потеряла ключи — и сейчас не может войти.)</li>
        <li><strong>Незаконченный период:</strong> I <strong>have had</strong> three cups of coffee today. (Сегодня ещё не закончилось.)</li>
      </ul>
      <h3>Когда использовать Past Simple</h3>
      <ul>
        <li><strong>Конкретное время:</strong> I <strong>visited</strong> Paris <strong>last year</strong>.</li>
        <li><strong>Завершённый период:</strong> I <strong>had</strong> three cups of coffee <strong>yesterday</strong>.</li>
      </ul>
      <h3>Маркеры</h3>
      <p><b>Present Perfect:</b> ever, never, just, already, yet, since, for.</p>
      <p><b>Past Simple:</b> yesterday, last week, in 2020, two days ago.</p>
      <div class="warn">Нельзя сказать ❌ <i>I have seen him yesterday.</i> Только ✅ <i>I saw him yesterday.</i></div>
    ` },
  { id: 2002, level: "B1", category: "theory", topic: "used-to", title: "Used to (Прошлые привычки)", content: `
      <p><strong>Что это?</strong> Конструкция <b>used to + V1</b> используется для описания привычек или состояний в прошлом, которых больше нет.</p>
      <h3>Формула</h3>
      <ul>
        <li><strong>Утверждение:</strong> I <strong>used to</strong> play football. (Я раньше играл в футбол.)</li>
        <li><strong>Отрицание:</strong> I <strong>didn't use to</strong> like coffee.</li>
        <li><strong>Вопрос:</strong> <strong>Did</strong> you <strong>use to</strong> live here?</li>
      </ul>
      <h3>Примеры</h3>
      <div class="example">
        <div class="en">She <strong>used to have</strong> long hair, but now it's short.</div>
        <div class="ru">У неё раньше были длинные волосы, но сейчас короткие.</div>
      </div>
      <div class="example">
        <div class="en">I <strong>didn't use to</strong> enjoy reading.</div>
        <div class="ru">Я раньше не любил читать.</div>
      </div>
      <div class="warn">Не путайте с <b>be used to</b> (привык к) и <b>get used to</b> (привыкать к).</div>
    ` },
  { id: 2003, level: "B1", category: "theory", topic: "first-second-conditional", title: "First & Second Conditionals", content: `
      <p><strong>Что это?</strong> Условные предложения. First — для реальных ситуаций в будущем. Second — для воображаемых ситуаций в настоящем или будущем.</p>
      <h3>First Conditional</h3>
      <p><b>If + Present Simple, will + V1</b></p>
      <div class="example">
        <div class="en">If it <strong>rains</strong>, we <strong>will stay</strong> at home.</div>
        <div class="ru">Если пойдёт дождь, мы останемся дома. (Это реально возможно.)</div>
      </div>
      <h3>Second Conditional</h3>
      <p><b>If + Past Simple, would + V1</b></p>
      <div class="example">
        <div class="en">If I <strong>had</strong> a million dollars, I <strong>would travel</strong> the world.</div>
        <div class="ru">Если бы у меня был миллион долларов, я бы путешествовал по миру. (Воображаемая ситуация.)</div>
      </div>
      <div class="warn">В Second Conditional глагол <b>to be</b> всегда принимает форму <b>were</b> для всех лиц: If I <b>were</b> you...</div>
    ` },
  { id: 2004, level: "B1", category: "theory", topic: "passive-voice-all-tenses", title: "Passive Voice (все времена)", content: `
      <p><strong>Что это?</strong> Пассивный залог используется, когда действие важнее исполнителя. На B1 вы должны уметь использовать пассив в разных временах.</p>
      <h3>Формула</h3>
      <p><b>be (в нужном времени) + V3</b></p>
      <h3>Примеры по временам</h3>
      <ul>
        <li><strong>Present Simple:</strong> The office <strong>is cleaned</strong> every day.</li>
        <li><strong>Past Simple:</strong> The bridge <strong>was built</strong> in 1990.</li>
        <li><strong>Present Perfect:</strong> The email <strong>has been sent</strong>.</li>
        <li><strong>Future Simple:</strong> The results <strong>will be announced</strong> tomorrow.</li>
        <li><strong>Present Continuous:</strong> The road <strong>is being repaired</strong> now.</li>
      </ul>
      <h3>Исполнитель</h3>
      <p>Если исполнитель важен, он добавляется с предлогом <b>by</b>: <i>The novel was written <b>by</b> Orwell.</i></p>
    ` },
  { id: 2005, level: "B1", category: "theory", topic: "reported-speech", title: "Reported Speech (Косвенная речь)", content: `
      <p><strong>Что это?</strong> Передача чужих слов без прямой цитаты. На B1 важно уметь сдвигать времена.</p>
      <h3>Сдвиг времён</h3>
      <ul>
        <li>Present Simple → Past Simple</li>
        <li>Present Continuous → Past Continuous</li>
        <li>Past Simple → Past Perfect</li>
        <li>will → would, can → could, must → had to</li>
      </ul>
      <h3>Примеры</h3>
      <div class="example">
        <div class="en">"I am tired," he said. → He said (that) he <strong>was</strong> tired.</div>
      </div>
      <div class="example">
        <div class="en">"I will call you," she said. → She said she <strong>would call</strong> me.</div>
      </div>
      <h3>Вопросы в косвенной речи</h3>
      <ul>
        <li><strong>Общий вопрос:</strong> He asked <b>if</b> I was ready.</li>
        <li><strong>Специальный вопрос:</strong> She asked <b>where</b> I lived. (Прямой порядок слов!)</li>
      </ul>
    ` },
  { id: 2006, level: "B1", category: "theory", topic: "modal-verbs-obligation", title: "Modal Verbs: Obligation & Advice", content: `
      <p><strong>Что это?</strong> Модальные глаголы для выражения обязанности, совета и запрета.</p>
      <h3>Обязанность</h3>
      <ul>
        <li><strong>must:</strong> сильная личная обязанность. <i>I must study tonight.</i></li>
        <li><strong>have to:</strong> внешняя необходимость (правила, законы). <i>I have to wear a uniform at work.</i></li>
      </ul>
      <h3>Отсутствие необходимости</h3>
      <ul>
        <li><strong>don't have to:</strong> не обязательно. <i>You don't have to come early.</i></li>
      </ul>
      <h3>Запрет</h3>
      <ul>
        <li><strong>mustn't:</strong> нельзя, запрещено. <i>You mustn't smoke here.</i></li>
      </ul>
      <h3>Совет</h3>
      <ul>
        <li><strong>should / shouldn't:</strong> <i>You should see a doctor.</i></li>
      </ul>
      <div class="warn">Запомните: <b>mustn't</b> = нельзя, <b>don't have to</b> = не обязательно.</div>
    ` },
  { id: 2007, level: "B1", category: "theory", topic: "relative-clauses", title: "Relative Clauses (Относительные придаточные)", content: `
      <p><strong>Что это?</strong> Придаточные предложения, которые описывают существительное. Они делают речь более связной.</p>
      <h3>Основные слова</h3>
      <table>
        <tr><th>Слово</th><th>Для кого/чего</th><th>Пример</th></tr>
        <tr><td><b>who</b></td><td>для людей</td><td>The man <b>who</b> lives next door is a doctor.</td></tr>
        <tr><td><b>which</b></td><td>для предметов</td><td>The book <b>which</b> I bought is interesting.</td></tr>
        <tr><td><b>that</b></td><td>для людей и предметов (в определительных)</td><td>The film <b>that</b> we saw was great.</td></tr>
        <tr><td><b>where</b></td><td>для мест</td><td>The cafe <b>where</b> we met is closed.</td></tr>
      </table>
      <h3>Defining vs Non-defining</h3>
      <p><b>Defining</b> (без запятых) — уточняет, какой именно предмет. <i>The students <b>who</b> passed the exam were happy.</i></p>
      <p><b>Non-defining</b> (с запятыми) — добавляет дополнительную информацию. <i>My brother, <b>who</b> lives in London, is a teacher.</i> (В non-defining нельзя использовать <b>that</b>.)</p>
    ` },
  { id: 2008, level: "B1", category: "theory", topic: "gerund-infinitive", title: "Gerund vs Infinitive", content: `
      <p><strong>Что это?</strong> После некоторых глаголов используется форма <b>-ing</b> (gerund), после других — <b>to + V1</b> (infinitive).</p>
      <h3>Глаголы + -ing</h3>
      <p>enjoy, mind, suggest, avoid, finish, keep, practice</p>
      <div class="example">
        <div class="en">I enjoy <strong>reading</strong>. / She suggested <strong>going</strong> to the cinema.</div>
      </div>
      <h3>Глаголы + to + V1</h3>
      <p>want, need, decide, hope, plan, promise, learn</p>
      <div class="example">
        <div class="en">I want <strong>to learn</strong> English. / We decided <strong>to stay</strong>.</div>
      </div>
      <h3>После предлогов всегда -ing</h3>
      <p>good at <b>drawing</b>, interested in <b>learning</b>, before <b>leaving</b>.</p>
      <div class="warn">Некоторые глаголы могут использоваться с обеими формами с разницей в значении (например, <b>stop</b>, <b>remember</b>, <b>forget</b>).</div>
    ` },

  { id: 2011, level: "B1", category: "practice", topic: "present-perfect-past-simple-practice", title: "Практика: Present Perfect vs Past Simple", content: `
      <p>Выберите правильную форму.</p>
      <ol>
        <li>I [[have visited]] (visit) Paris three times.</li>
        <li>I [[visited]] (visit) Paris last year.</li>
        <li>She [[has just finished]] (just / finish) her homework.</li>
        <li>We [[went]] (go) to the cinema yesterday.</li>
        <li>[[Have]] you ever [[been]] (be) to London?</li>
        <li>He [[has lived]] (live) here since 2010.</li>
        <li>They [[didn't come]] (not / come) to the party last night.</li>
        <li>I [[haven't seen]] (not / see) him yet.</li>
        <li>When [[did]] you [[buy]] (buy) that car?</li>
        <li>She [[has already eaten]] (already / eat).</li>
      </ol>
    ` },
  { id: 2012, level: "B1", category: "practice", topic: "used-to-practice", title: "Практика: Used to", content: `
      <p>Перепишите предложения, используя <b>used to</b>.</p>
      <ol>
        <li>I played football when I was a child. → I [[used to play]] football.</li>
        <li>She didn't like coffee, but now she does. → She [[didn't use to like]] coffee.</li>
        <li>Did you live in London? → [[Did]] you [[use to live]] in London?</li>
        <li>He had long hair. → He [[used to have]] long hair.</li>
        <li>They didn't have a car. → They [[didn't use to have]] a car.</li>
      </ol>
    ` },
  { id: 2013, level: "B1", category: "practice", topic: "conditionals-practice", title: "Практика: Conditionals", content: `
      <p>Поставьте глагол в правильную форму (First или Second Conditional).</p>
      <ol>
        <li>If it [[rains]] (rain), we will stay at home.</li>
        <li>If I [[were]] (be) you, I would apologize.</li>
        <li>She [[will pass]] (pass) the exam if she studies hard.</li>
        <li>If I [[had]] (have) more time, I would learn Spanish.</li>
        <li>We [[will go]] (go) to the beach if the weather is good.</li>
        <li>If he [[knew]] (know) the answer, he would tell us.</li>
        <li>I [[would buy]] (buy) a new car if I had enough money.</li>
        <li>If you [[don't hurry]] (not / hurry), you will miss the bus.</li>
      </ol>
    ` },
  { id: 2014, level: "B1", category: "practice", topic: "passive-practice", title: "Практика: Passive Voice", content: `
      <p>Преобразуйте предложения в пассивный залог.</p>
      <ol>
        <li>They built this house in 1990. → This house [[was built]] in 1990.</li>
        <li>Someone has stolen my bike. → My bike [[has been stolen]].</li>
        <li>They will announce the results tomorrow. → The results [[will be announced]] tomorrow.</li>
        <li>They are repairing the road now. → The road [[is being repaired]] now.</li>
        <li>People speak English all over the world. → English [[is spoken]] all over the world.</li>
        <li>They didn't invite me to the party. → I [[wasn't invited]] to the party.</li>
      </ol>
    ` },
  { id: 2015, level: "B1", category: "practice", topic: "reported-speech-practice", title: "Практика: Reported Speech", content: `
      <p>Переведите в косвенную речь.</p>
      <ol>
        <li>He said, "I am tired." → He said he [[was tired]].</li>
        <li>She said, "I will call you." → She said she [[would call]] me.</li>
        <li>They said, "We have finished." → They said they [[had finished]].</li>
        <li>He asked, "Do you like coffee?" → He asked [[if I liked]] coffee.</li>
        <li>She asked, "Where do you live?" → She asked [[where I lived]].</li>
        <li>Mum said, "Don't be late." → Mum told me [[not to be]] late.</li>
      </ol>
    ` },
  { id: 2016, level: "B1", category: "practice", topic: "modal-verbs-practice", title: "Практика: Modal Verbs", content: `
      <p>Вставьте подходящий модальный глагол (must, mustn't, have to, don't have to, should).</p>
      <ol>
        <li>You [[mustn't]] smoke here. It's forbidden.</li>
        <li>I [[have to]] wear a uniform at work. It's the rule.</li>
        <li>You [[don't have to]] come early. The meeting starts at 10.</li>
        <li>You [[should]] see a doctor. You look sick.</li>
        <li>I [[must]] finish this report tonight. I promised.</li>
        <li>You [[shouldn't]] eat so much sugar.</li>
      </ol>
    ` },
  { id: 2017, level: "B1", category: "practice", topic: "relative-clauses-practice", title: "Практика: Relative Clauses", content: `
      <p>Вставьте правильное относительное местоимение (who, which, where, whose).</p>
      <ol>
        <li>The man [[who]] lives next door is a doctor.</li>
        <li>The book [[which]] I bought is very interesting.</li>
        <li>The cafe [[where]] we met is closed now.</li>
        <li>That's the girl [[whose]] brother is a famous singer.</li>
        <li>The film [[that]] we watched was boring.</li>
        <li>I have a friend [[who]] speaks five languages.</li>
      </ol>
    ` },
  { id: 2018, level: "B1", category: "practice", topic: "gerund-infinitive-practice", title: "Практика: Gerund vs Infinitive", content: `
      <p>Выберите правильную форму (to + V1 или V-ing).</p>
      <ol>
        <li>I enjoy [[reading]] (read) books.</li>
        <li>She wants [[to learn]] (learn) French.</li>
        <li>We decided [[to stay]] (stay) at home.</li>
        <li>He suggested [[going]] (go) to the cinema.</li>
        <li>I'm good at [[drawing]] (draw).</li>
        <li>They hope [[to visit]] (visit) us next year.</li>
        <li>Would you mind [[opening]] (open) the window?</li>
        <li>She promised [[to help]] (help) me.</li>
      </ol>
    ` },

  { id: 2021, level: "B1", category: "vocabulary", topic: "work-career", title: "Работа и карьера (Work & Career)", content: `
      <p>Словарь для обсуждения работы, обязанностей и карьерного роста.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>career</td><td>карьера</td></tr>
        <tr><td>salary</td><td>зарплата</td></tr>
        <tr><td>colleague</td><td>коллега</td></tr>
        <tr><td>employer / employee</td><td>работодатель / сотрудник</td></tr>
        <tr><td>apply for a job</td><td>подавать заявку на работу</td></tr>
        <tr><td>job interview</td><td>собеседование</td></tr>
        <tr><td>responsibility</td><td>обязанность</td></tr>
        <tr><td>deadline</td><td>крайний срок</td></tr>
        <tr><td>overtime</td><td>сверхурочная работа</td></tr>
        <tr><td>promotion</td><td>повышение</td></tr>
        <tr><td>resign</td><td>увольняться</td></tr>
        <tr><td>unemployed</td><td>безработный</td></tr>
      </table>
    ` },
  { id: 2022, level: "B1", category: "vocabulary", topic: "travel-holidays", title: "Путешествия и отпуск (Travel & Holidays)", content: `
      <p>Лексика для описания поездок, транспорта и проживания.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>destination</td><td>место назначения</td></tr>
        <tr><td>accommodation</td><td>жилье</td></tr>
        <tr><td>luggage</td><td>багаж</td></tr>
        <tr><td>flight</td><td>рейс</td></tr>
        <tr><td>book a ticket</td><td>забронировать билет</td></tr>
        <tr><td>boarding pass</td><td>посадочный талон</td></tr>
        <tr><td>delay</td><td>задержка</td></tr>
        <tr><td>sightseeing</td><td>осмотр достопримечательностей</td></tr>
        <tr><td>guided tour</td><td>экскурсия с гидом</td></tr>
        <tr><td>local cuisine</td><td>местная кухня</td></tr>
        <tr><td>souvenir</td><td>сувенир</td></tr>
        <tr><td>return ticket</td><td>билет туда и обратно</td></tr>
      </table>
    ` },
  { id: 2023, level: "B1", category: "vocabulary", topic: "health-lifestyle", title: "Здоровье и образ жизни (Health & Lifestyle)", content: `
      <p>Слова для обсуждения здоровых привычек, самочувствия и медицины.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>healthy diet</td><td>здоровое питание</td></tr>
        <tr><td>work out</td><td>тренироваться</td></tr>
        <tr><td>keep fit</td><td>поддерживать форму</td></tr>
        <tr><td>symptom</td><td>симптом</td></tr>
        <tr><td>prescription</td><td>рецепт (на лекарство)</td></tr>
        <tr><td>appointment</td><td>запись на прием</td></tr>
        <tr><td>recover</td><td>выздоравливать</td></tr>
        <tr><td>stress</td><td>стресс</td></tr>
        <tr><td>balanced</td><td>сбалансированный</td></tr>
        <tr><td>give up (smoking)</td><td>бросить (курить)</td></tr>
      </table>
    ` },
  { id: 2024, level: "B1", category: "vocabulary", topic: "environment", title: "Окружающая среда (Environment)", content: `
      <p>Экологическая лексика, которая часто встречается на B1.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>pollution</td><td>загрязнение</td></tr>
        <tr><td>recycle</td><td>перерабатывать</td></tr>
        <tr><td>climate change</td><td>изменение климата</td></tr>
        <tr><td>global warming</td><td>глобальное потепление</td></tr>
        <tr><td>renewable energy</td><td>возобновляемая энергия</td></tr>
        <tr><td>waste</td><td>отходы</td></tr>
        <tr><td>protect</td><td>защищать</td></tr>
        <tr><td>environmentally friendly</td><td>экологичный</td></tr>
        <tr><td>natural resources</td><td>природные ресурсы</td></tr>
        <tr><td>endangered species</td><td>вымирающие виды</td></tr>
      </table>
    ` },
  { id: 2025, level: "B1", category: "vocabulary", topic: "technology", title: "Технологии (Technology)", content: `
      <p>Слова для обсуждения гаджетов, интернета и цифровой жизни.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>device</td><td>устройство</td></tr>
        <tr><td>screen</td><td>экран</td></tr>
        <tr><td>charger</td><td>зарядное устройство</td></tr>
        <tr><td>battery</td><td>аккумулятор</td></tr>
        <tr><td>download / upload</td><td>скачивать / загружать</td></tr>
        <tr><td>password</td><td>пароль</td></tr>
        <tr><td>account</td><td>аккаунт</td></tr>
        <tr><td>social media</td><td>социальные сети</td></tr>
        <tr><td>log in / log out</td><td>войти / выйти</td></tr>
        <tr><td>update</td><td>обновление</td></tr>
      </table>
    ` },
  { id: 2026, level: "B1", category: "vocabulary", topic: "education", title: "Образование (Education)", content: `
      <p>Лексика для разговора об учебе, экзаменах и университете.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>degree</td><td>степень, диплом</td></tr>
        <tr><td>university</td><td>университет</td></tr>
        <tr><td>subject</td><td>предмет</td></tr>
        <tr><td>exam</td><td>экзамен</td></tr>
        <tr><td>pass / fail</td><td>сдать / провалить</td></tr>
        <tr><td>revise</td><td>повторять (к экзамену)</td></tr>
        <tr><td>research</td><td>исследование</td></tr>
        <tr><td>scholarship</td><td>стипендия</td></tr>
        <tr><td>graduate</td><td>выпускник; выпускаться</td></tr>
        <tr><td>attend</td><td>посещать</td></tr>
      </table>
    ` },
  { id: 2027, level: "B1", category: "vocabulary", topic: "feelings-emotions", title: "Чувства и эмоции (Feelings & Emotions)", content: `
      <p>Слова для выражения чувств и реакций.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>excited</td><td>взволнованный (радостно)</td></tr>
        <tr><td>worried</td><td>обеспокоенный</td></tr>
        <tr><td>nervous</td><td>нервничающий</td></tr>
        <tr><td>disappointed</td><td>разочарованный</td></tr>
        <tr><td>proud</td><td>гордый</td></tr>
        <tr><td>jealous</td><td>завистливый</td></tr>
        <tr><td>embarrassed</td><td>смущенный</td></tr>
        <tr><td>relieved</td><td>испытавший облегчение</td></tr>
        <tr><td>frustrated</td><td>разочарованный, раздраженный</td></tr>
        <tr><td>grateful</td><td>благодарный</td></tr>
      </table>
    ` },
  { id: 2028, level: "B1", category: "vocabulary", topic: "city-life", title: "Городская жизнь (City Life)", content: `
      <p>Слова для описания города, районов и инфраструктуры.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>neighbourhood</td><td>район</td></tr>
        <tr><td>suburb</td><td>пригород</td></tr>
        <tr><td>facilities</td><td>удобства, инфраструктура</td></tr>
        <tr><td>public transport</td><td>общественный транспорт</td></tr>
        <tr><td>traffic jam</td><td>пробка</td></tr>
        <tr><td>pedestrian</td><td>пешеход</td></tr>
        <tr><td>crossroads</td><td>перекресток</td></tr>
        <tr><td>roundabout</td><td>круговое движение</td></tr>
        <tr><td>pavement / sidewalk</td><td>тротуар</td></tr>
        <tr><td>accommodation</td><td>жилье</td></tr>
        <tr><td>rent</td><td>аренда</td></tr>
        <tr><td>landlord</td><td>арендодатель</td></tr>
      </table>
    ` },
  { id: 3001, level: "B2", category: "theory", topic: "mixed-conditionals", title: "Mixed Conditionals (Смешанные условные)", content: `
      <p><strong>Что это?</strong> Смешанные условные предложения используются, когда условие относится к одному времени (например, прошлому), а результат — к другому (например, настоящему).</p>
      
      <h3>Тип 1: Прошлое → Настоящее</h3>
      <p>Условие в прошлом (Past Perfect), результат в настоящем (would + V1).</p>
      <div class="example">
        <div class="en">If I <strong>had studied</strong> medicine, I <strong>would be</strong> a doctor now.</div>
        <div class="ru">Если бы я изучал медицину (в прошлом), я был бы врачом сейчас.</div>
      </div>

      <h3>Тип 2: Настоящее → Прошлое</h3>
      <p>Условие в настоящем (Past Simple), результат в прошлом (would have + V3).</p>
      <div class="example">
        <div class="en">If I <strong>were</strong> braver, I <strong>would have asked</strong> her out yesterday.</div>
        <div class="ru">Если бы я был смелее (вообще), я бы пригласил её на свидание вчера.</div>
      </div>
      <div class="warn">Смешанные условные требуют внимательного отношения к контексту. Смотрите, к какому времени относится причина, а к какому — следствие.</div>
    ` },
  { id: 3002, level: "B2", category: "theory", topic: "inversion", title: "Inversion (Инверсия)", content: `
      <p><strong>Что это?</strong> Инверсия — это обратный порядок слов (сказуемое перед подлежащим). Используется для выразительности и формального стиля.</p>
      
      <h3>1. После отрицательных наречий</h3>
      <p>Never, rarely, seldom, hardly, no sooner... than, not only... but also.</p>
      <div class="example">
        <div class="en"><strong>Never have I seen</strong> such a beautiful sunset.</div>
        <div class="ru">Никогда я не видел такого красивого заката.</div>
      </div>
      <div class="example">
        <div class="en"><strong>No sooner had he arrived than</strong> the meeting started.</div>
        <div class="ru">Не успел он прийти, как началась встреча.</div>
      </div>

      <h3>2. После "Only"</h3>
      <div class="example">
        <div class="en"><strong>Only then did I realize</strong> the truth.</div>
        <div class="ru">Только тогда я понял правду.</div>
      </div>

      <h3>3. В условных предложениях (формально)</h3>
      <div class="example">
        <div class="en"><strong>Had I known</strong>, I would have helped. (= If I had known)</div>
        <div class="ru">Знай я это, я бы помог.</div>
      </div>
    ` },
  { id: 3003, level: "B2", category: "theory", topic: "modals-in-the-past", title: "Modals in the Past (Модальные глаголы в прошлом)", content: `
      <p><strong>Что это?</strong> Конструкция <b>modal + have + V3</b> используется для выражения отношения к прошлым действиям: сожаления, критики, вероятности.</p>
      
      <h3>Should have done</h3>
      <p>Сожаление или критика (сделал что-то, но не должен был, или наоборот).</p>
      <div class="example">
        <div class="en">You <strong>should have told</strong> me about the meeting.</div>
        <div class="ru">Тебе следовало сказать мне о встрече (но ты не сказал).</div>
      </div>
      <div class="example">
        <div class="en">I <strong>shouldn't have eaten</strong> so much cake.</div>
        <div class="ru">Мне не следовало есть так много торта (но я съел).</div>
      </div>

      <h3>Could have done</h3>
      <p>Возможность в прошлом, которая не была реализована.</p>
      <div class="example">
        <div class="en">We <strong>could have won</strong> the game, but we made a mistake.</div>
        <div class="ru">Мы могли бы выиграть, но допустили ошибку.</div>
      </div>

      <h3>Must have done</h3>
      <p>Уверенная догадка о прошлом.</p>
      <div class="example">
        <div class="en">He <strong>must have forgotten</strong> my birthday.</div>
        <div class="ru">Должно быть, он забыл про мой день рождения.</div>
      </div>
    ` },
  { id: 3004, level: "B2", category: "theory", topic: "linking-structures", title: "Linking Structures (Связки)", content: `
      <p><strong>Что это?</strong> Связки помогают строить логичные и формальные предложения. На B2 вы должны уверенно использовать сложные конструкции.</p>
      
      <h3>Причина и результат</h3>
      <ul>
        <li><strong>because of / due to / owing to</strong> + noun/ing: <i>The flight was delayed due to bad weather.</i></li>
        <li><strong>so / therefore / consequently</strong>: <i>He didn't study; therefore, he failed.</i></li>
      </ul>

      <h3>Контраст</h3>
      <ul>
        <li><strong>although / even though</strong>: <i>Although it was raining, we went out.</i></li>
        <li><strong>despite / in spite of</strong> + noun/ing: <i>Despite the rain, we went out.</i></li>
        <li><strong>however / nevertheless</strong>: <i>The food was bad; however, the service was good.</i></li>
      </ul>

      <h3>Временные связки</h3>
      <ul>
        <li><strong>no sooner ... than</strong>: <i>No sooner had I arrived than the phone rang.</i></li>
        <li><strong>hardly ... when</strong>: <i>Hardly had I started when it began to rain.</i></li>
        <li><strong>by the time</strong>: <i>By the time we arrived, the film had started.</i></li>
      </ul>
    ` },
  { id: 3005, level: "B2", category: "theory", topic: "formal-informal-writing", title: "Formal vs Informal Writing", content: `
      <p><strong>Что это?</strong> На B2 важно уметь переключаться между формальным (эссе, отчёты, письма в организации) и неформальным (письма друзьям) стилями.</p>
      
      <h3>Формальный стиль</h3>
      <ul>
        <li>Избегайте сокращений (can't → cannot, don't → do not).</li>
        <li>Используйте пассив и сложные связки.</li>
        <li>Фразы: <i>I am writing to enquire about...</i>, <i>I would be grateful if...</i></li>
        <li>Заключение: <i>I look forward to hearing from you.</i></li>
      </ul>

      <h3>Неформальный стиль</h3>
      <ul>
        <li>Используйте сокращения и фразовые глаголы.</li>
        <li>Фразы: <i>How's it going?</i>, <i>I can't wait to hear from you.</i></li>
        <li>Заключение: <i>Write back soon!</i>, <i>Take care.</i></li>
      </ul>

      <h3>Эссе (Opinion Essay)</h3>
      <p>Структура: Введение (тема + мнение) → Аргумент 1 + пример → Аргумент 2 + пример → Контраргумент → Заключение.</p>
      <div class="example">
        <div class="en">In my opinion, technology has made our lives easier. Firstly, ... Secondly, ... However, some people argue that ... Nevertheless, I believe ...</div>
      </div>
    ` },
  { id: 3006, level: "B2", category: "theory", topic: "idioms-phrasal-verbs", title: "Idioms & Phrasal Verbs (Идиомы и фразовые глаголы)", content: `
      <p><strong>Что это?</strong> На B2 важно не только знать слова, но и использовать устойчивые выражения, которые делают речь естественной.</p>
      
      <h3>Фразовые глаголы</h3>
      <table>
        <tr><th>Выражение</th><th>Значение</th><th>Пример</th></tr>
        <tr><td><b>bring up</b></td><td>воспитывать; поднимать тему</td><td>She was brought up by her grandparents.</td></tr>
        <tr><td><b>take off</b></td><td>взлетать; снимать; быстро развиваться</td><td>The plane took off on time. / The business really took off.</td></tr>
        <tr><td><b>set in</b></td><td>устанавливаться (о погоде, болезни)</td><td>Winter set in early that year.</td></tr>
        <tr><td><b>turn out</b></td><td>оказаться</td><td>It turned out to be a great day.</td></tr>
        <tr><td><b>put off</b></td><td>откладывать</td><td>Don't put off your homework.</td></tr>
        <tr><td><b>give up</b></td><td>сдаваться, бросать</td><td>He gave up smoking.</td></tr>
      </table>

      <h3>Идиомы</h3>
      <ul>
        <li><b>a blessing in disguise</b> — неприятность, обернувшаяся удачей.</li>
        <li><b>beat around the bush</b> — ходить вокруг да около.</li>
        <li><b>once in a blue moon</b> — очень редко.</li>
        <li><b>under the weather</b> — плохо себя чувствовать.</li>
        <li><b>cost an arm and a leg</b> — стоить очень дорого.</li>
      </ul>
    ` },
  { id: 3007, level: "B2", category: "theory", topic: "collocations", title: "Collocations (Устойчивые словосочетания)", content: `
      <p><strong>Что это?</strong> Коллокации — это слова, которые привычно используются вместе. Их нельзя объяснить логикой, их нужно запоминать.</p>
      
      <h3>С глаголом MAKE</h3>
      <ul>
        <li><b>make a decision</b> — принять решение</li>
        <li><b>make a mistake</b> — совершить ошибку</li>
        <li><b>make friends</b> — заводить друзей</li>
        <li><b>make an effort</b> — прилагать усилие</li>
        <li><b>make progress</b> — делать успехи</li>
      </ul>

      <h3>С глаголом DO</h3>
      <ul>
        <li><b>do homework</b> — делать домашнюю работу</li>
        <li><b>do business</b> — вести дела</li>
        <li><b>do a favour</b> — оказать услугу</li>
        <li><b>do harm</b> — причинять вред</li>
        <li><b>do your best</b> — сделать всё возможное</li>
      </ul>

      <h3>С глаголом HAVE</h3>
      <ul>
        <li><b>have an argument</b> — поссориться</li>
        <li><b>have an operation</b> — перенести операцию</li>
        <li><b>have a conversation</b> — поговорить</li>
        <li><b>have a good time</b> — хорошо провести время</li>
      </ul>

      <h3>Прилагательные + существительные</h3>
      <ul>
        <li><b>heavy rain</b> — сильный дождь</li>
        <li><b>strong coffee</b> — крепкий кофе</li>
        <li><b>deep sleep</b> — глубокий сон</li>
        <li><b>highly recommended</b> — настоятельно рекомендуется</li>
      </ul>
    ` },
  { id: 3008, level: "B2", category: "theory", topic: "synonyms-antonyms", title: "Synonyms & Antonyms (Синонимы и антонимы)", content: `
      <p><strong>Что это?</strong> На B2 важно уметь заменять простые слова на более точные синонимы, чтобы речь была богаче.</p>
      
      <h3>Вместо "good"</h3>
      <ul>
        <li>excellent, outstanding, superb, remarkable, exceptional</li>
      </ul>

      <h3>Вместо "bad"</h3>
      <ul>
        <li>awful, terrible, dreadful, poor, unsatisfactory</li>
      </ul>

      <h3>Вместо "very"</h3>
      <ul>
        <li>extremely, incredibly, remarkably, highly, utterly</li>
        <li><i>very good</i> → <i>excellent</i></li>
        <li><i>very tired</i> → <i>exhausted</i></li>
        <li><i>very hungry</i> → <i>starving</i></li>
        <li><i>very cold</i> → <i>freezing</i></li>
        <li><i>very hot</i> → <i>boiling</i></li>
      </ul>

      <h3>Антонимы</h3>
      <ul>
        <li>increase ↔ decrease</li>
        <li>advantage ↔ disadvantage</li>
        <li>generous ↔ selfish</li>
        <li>optimistic ↔ pessimistic</li>
        <li>temporary ↔ permanent</li>
      </ul>
    ` },

  { id: 3011, level: "B2", category: "practice", topic: "mixed-conditionals-practice", title: "Практика: Mixed Conditionals", content: `
      <p>Поставьте глагол в правильную форму.</p>
      <ol>
        <li>If I [[had studied]] (study) harder at school, I [[would have]] (have) a better job now.</li>
        <li>If she [[were]] (be) more careful, she [[wouldn't have made]] (not / make) that mistake yesterday.</li>
        <li>If he [[had taken]] (take) the medicine, he [[would feel]] (feel) better now.</li>
        <li>If I [[didn't have]] (not / have) so much work, I [[would have gone]] (go) to the party last night.</li>
        <li>If we [[had left]] (leave) earlier, we [[would be]] (be) there by now.</li>
      </ol>
    ` },
  { id: 3012, level: "B2", category: "practice", topic: "inversion-practice", title: "Практика: Inversion", content: `
      <p>Перепишите предложения, используя инверсию.</p>
      <ol>
        <li>I have never seen such a beautiful place. → [[Never have I seen]] such a beautiful place.</li>
        <li>He had hardly arrived when the phone rang. → [[Hardly had he arrived]] when the phone rang.</li>
        <li>I only realized the truth later. → [[Only later did I realize]] the truth.</li>
        <li>If I had known, I would have helped. → [[Had I known]], I would have helped.</li>
        <li>She not only sings but also dances. → [[Not only does she sing]], but she also dances.</li>
      </ol>
    ` },
  { id: 3013, level: "B2", category: "practice", topic: "modals-past-practice", title: "Практика: Modals in the Past", content: `
      <p>Вставьте правильную конструкцию: should have, shouldn't have, could have, must have.</p>
      <ol>
        <li>You [[should have told]] (tell) me about the meeting. I missed it.</li>
        <li>I [[shouldn't have eaten]] (not / eat) so much cake. I feel sick.</li>
        <li>We [[could have won]] (win) the game, but we made a mistake.</li>
        <li>He [[must have forgotten]] (forget) my birthday.</li>
        <li>She [[could have taken]] (take) a taxi, but she walked.</li>
      </ol>
    ` },
  { id: 3014, level: "B2", category: "practice", topic: "linking-practice", title: "Практика: Linking Structures", content: `
      <p>Выберите правильную связку (although, despite, however, because of, therefore).</p>
      <ol>
        <li>[[Although]] it was raining, we went for a walk.</li>
        <li>[[Despite]] the bad weather, the flight was on time.</li>
        <li>The service was slow; [[however]], the food was delicious.</li>
        <li>He was late [[because of]] the traffic.</li>
        <li>She didn't study; [[therefore]], she failed the exam.</li>
      </ol>
    ` },
  { id: 3015, level: "B2", category: "practice", topic: "formal-informal-practice", title: "Практика: Formal vs Informal", content: `
      <p>Перепишите предложения в формальном стиле (без сокращений, с формальной лексикой).</p>
      <ol>
        <li>I can't come to the meeting. → [[I am unable to attend the meeting.]]</li>
        <li>Thanks for your email. → [[Thank you for your email.]]</li>
        <li>I'm writing to ask about the job. → [[I am writing to enquire about the position.]]</li>
        <li>Write back soon! → [[I look forward to hearing from you.]]</li>
        <li>Don't forget to send the report. → [[Please remember to send the report.]]</li>
      </ol>
    ` },
  { id: 3016, level: "B2", category: "practice", topic: "idioms-practice", title: "Практика: Idioms & Phrasal Verbs", content: `
      <p>Вставьте подходящее слово из списка: up, off, out, in, around, moon, weather, disguise.</p>
      <ol>
        <li>She was brought [[up]] by her grandparents.</li>
        <li>The plane took [[off]] on time.</li>
        <li>It turned [[out]] to be a great day.</li>
        <li>Don't beat [[around]] the bush. Tell me the truth.</li>
        <li>I feel a bit under the [[weather]] today.</li>
        <li>Losing that job was a blessing in [[disguise]].</li>
      </ol>
    ` },
  { id: 3017, level: "B2", category: "practice", topic: "collocations-practice", title: "Практика: Collocations", content: `
      <p>Вставьте правильный глагол (make, do, have).</p>
      <ol>
        <li>I need to [[make]] a decision.</li>
        <li>She [[did]] her homework before dinner.</li>
        <li>We [[had]] an argument about money.</li>
        <li>He [[made]] a mistake in the report.</li>
        <li>They [[did]] their best to help us.</li>
        <li>I [[had]] a good time at the party.</li>
      </ol>
    ` },
  { id: 3018, level: "B2", category: "practice", topic: "synonyms-practice", title: "Практика: Synonyms & Antonyms", content: `
      <p>Замените выделенные слова на более точные синонимы.</p>
      <ol>
        <li>The film was very good. → The film was [[excellent|outstanding|superb]].</li>
        <li>I am very tired. → I am [[exhausted]].</li>
        <li>It is very cold outside. → It is [[freezing]] outside.</li>
        <li>The food was very bad. → The food was [[awful|terrible|dreadful]].</li>
        <li>She is very happy. → She is [[delighted|thrilled|overjoyed]].</li>
      </ol>
    ` },

  { id: 3021, level: "B2", category: "vocabulary", topic: "society-politics", title: "Общество и политика (Society & Politics)", content: `
      <p>Словарь для обсуждения социальных и политических тем.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>society</td><td>общество</td></tr>
        <tr><td>government</td><td>правительство</td></tr>
        <tr><td>election</td><td>выборы</td></tr>
        <tr><td>policy</td><td>политика (курс)</td></tr>
        <tr><td>protest</td><td>протест</td></tr>
        <tr><td>equality</td><td>равенство</td></tr>
        <tr><td>human rights</td><td>права человека</td></tr>
        <tr><td>poverty</td><td>бедность</td></tr>
        <tr><td>wealth</td><td>богатство</td></tr>
        <tr><td>tax</td><td>налог</td></tr>
      </table>
    ` },
  { id: 3022, level: "B2", category: "vocabulary", topic: "science-technology", title: "Наука и технологии (Science & Technology)", content: `
      <p>Лексика для обсуждения научных достижений и инноваций.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>research</td><td>исследование</td></tr>
        <tr><td>experiment</td><td>эксперимент</td></tr>
        <tr><td>discovery</td><td>открытие</td></tr>
        <tr><td>invention</td><td>изобретение</td></tr>
        <tr><td>artificial intelligence</td><td>искусственный интеллект</td></tr>
        <tr><td>breakthrough</td><td>прорыв</td></tr>
        <tr><td>innovation</td><td>инновация</td></tr>
        <tr><td>development</td><td>разработка</td></tr>
        <tr><td>data</td><td>данные</td></tr>
        <tr><td>device</td><td>устройство</td></tr>
      </table>
    ` },
  { id: 3023, level: "B2", category: "vocabulary", topic: "culture-arts", title: "Культура и искусство (Culture & Arts)", content: `
      <p>Слова для обсуждения культуры, кино, литературы и искусства.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>exhibition</td><td>выставка</td></tr>
        <tr><td>performance</td><td>выступление</td></tr>
        <tr><td>masterpiece</td><td>шедевр</td></tr>
        <tr><td>plot</td><td>сюжет</td></tr>
        <tr><td>character</td><td>персонаж</td></tr>
        <tr><td>review</td><td>рецензия</td></tr>
        <tr><td>audience</td><td>публика</td></tr>
        <tr><td>talent</td><td>талант</td></tr>
        <tr><td>creative</td><td>творческий</td></tr>
        <tr><td>inspiring</td><td>вдохновляющий</td></tr>
      </table>
    ` },
  { id: 3024, level: "B2", category: "vocabulary", topic: "global-issues", title: "Глобальные проблемы (Global Issues)", content: `
      <p>Лексика для обсуждения мировых проблем.</p>
      <table>
        <tr><th>English</th><th>Русский</th></tr>
        <tr><td>climate change</td><td>изменение климата</td></tr>
        <tr><td>pollution</td><td>загрязнение</td></tr>
        <tr><td>deforestation</td><td>вырубка лесов</td></tr>
        <tr><td>global warming</td><td>глобальное потепление</td></tr>
        <tr><td>natural disaster</td><td>стихийное бедствие</td></tr>
        <tr><td>hunger</td><td>голод</td></tr>
        <tr><td>poverty</td><td>бедность</td></tr>
        <tr><td>war</td><td>война</td></tr>
        <tr><td>peace</td><td>мир</td></tr>
        <tr><td>sustainability</td><td>устойчивое развитие</td></tr>
      </table>
    ` },
      { id: 1101, level: "A1", category: "reading", topic: "reading-family", title: "01. My Family — Моя семья", content: `
<div class="audio-placeholder" data-audio="audio/a1-my-family.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a1-my-family.mp3)</i>
</div>

<h3>English</h3>
<p>My name is Anna. I am twenty years old. I live in a small town with my family. My family is not very big. I have a mother, a father and a brother.</p>
<p>My mother is a teacher. She works at a school. My father is a doctor. He works in a hospital. My brother is fifteen years old. He likes football and computer games.</p>
<p>We have a cat. Its name is Fluffy. It is white and very friendly. I love my family very much.</p>

<h3>Перевод</h3>
<p>Меня зовут Анна. Мне двадцать лет. Я живу в маленьком городе со своей семьёй. Моя семья не очень большая. У меня есть мама, папа и брат.</p>
<p>Моя мама — учительница. Она работает в школе. Мой папа — врач. Он работает в больнице. Моему брату пятнадцать лет. Он любит футбол и компьютерные игры.</p>
<p>У нас есть кошка. Её зовут Флаффи. Она белая и очень дружелюбная. Я очень люблю свою семью.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>town</td><td>городок</td></tr>
<tr><td>hospital</td><td>больница</td></tr>
<tr><td>friendly</td><td>дружелюбный</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>How old is Anna? → [[twenty|20|twenty years old]]</li>
<li>Where does her mother work? → [[at a school|at school|in a school]]</li>
<li>How old is her brother? → [[fifteen|15|fifteen years old]]</li>
<li>What is the cat's name? → [[Fluffy]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>Anna lives in a big city. → [[False]]</li>
<li>Her mother is a teacher. → [[True]]</li>
<li>Her father works at a school. → [[False]]</li>
<li>Her brother likes football. → [[True]]</li>
<li>The cat is black. → [[False]]</li>
</ol>
` },

  { id: 1102, level: "A1", category: "reading", topic: "reading-routine", title: "02. My Daily Routine — Мой распорядок дня", content: `
<div class="audio-placeholder" data-audio="audio/a1-my-routine.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a1-my-routine.mp3)</i>
</div>

<h3>English</h3>
<p>I usually get up at seven o'clock. I wash my face and brush my teeth. Then I have breakfast. I usually eat eggs and bread and drink tea.</p>
<p>At eight o'clock I go to work. I work in an office. I have lunch at one o'clock. I usually eat soup or chicken with rice.</p>
<p>I finish work at five o'clock. After work, I go home. Sometimes I watch TV or read a book. In the evening, I have dinner with my family.</p>
<p>I go to bed at ten o'clock. I like my daily routine.</p>

<h3>Перевод</h3>
<p>Обычно я встаю в семь часов. Я умываюсь и чищу зубы. Затем я завтракаю. Обычно я ем яйца и хлеб и пью чай.</p>
<p>В восемь часов я иду на работу. Я работаю в офисе. Я обедаю в час дня. Обычно я ем суп или курицу с рисом.</p>
<p>Я заканчиваю работу в пять часов. После работы я иду домой. Иногда я смотрю телевизор или читаю книгу. Вечером я ужинаю со своей семьёй.</p>
<p>Я ложусь спать в десять часов. Мне нравится мой распорядок дня.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>wash</td><td>мыть(ся)</td></tr>
<tr><td>brush my teeth</td><td>чистить зубы</td></tr>
<tr><td>finish</td><td>заканчивать</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What time does the person get up? → [[seven|at seven|seven o'clock|at seven o'clock|7|at 7]]</li>
<li>What does the person eat for breakfast? → [[eggs and bread|bread and eggs]]</li>
<li>Where does the person work? → [[in an office|an office|office]]</li>
<li>What time does the person finish work? → [[five|at five|five o'clock|at five o'clock|5|at 5]]</li>
<li>What does the person do in the evening? → [[has dinner|have dinner|has dinner with the family|has dinner with family]]</li>
</ol>

<h3>Exercise — Complete the sentences</h3>
<ol>
<li>I usually [[get]] up at seven.</li>
<li>I [[have]] breakfast in the morning.</li>
<li>I go to work at [[eight]] o'clock.</li>
<li>I [[watch]] TV in the evening.</li>
<li>I go to [[bed]] at ten o'clock.</li>
</ol>
` },

  { id: 1103, level: "A1", category: "reading", topic: "reading-house", title: "03. My House — Мой дом", content: `
<div class="audio-placeholder" data-audio="audio/a1-my-house.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a1-my-house.mp3)</i>
</div>

<h3>English</h3>
<p>I live in a small house. My house has two bedrooms, a living room, a kitchen and a bathroom.</p>
<p>The living room is big and comfortable. There is a sofa, a table and a TV. There are two windows in the room.</p>
<p>My bedroom is small but nice. There is a bed near the window. There is a wardrobe next to the bed. My books are on the table.</p>
<p>The kitchen is very clean. There is a fridge, a cooker and a small table. I like my house because it is warm and comfortable.</p>

<h3>Перевод</h3>
<p>Я живу в небольшом доме. В моём доме две спальни, гостиная, кухня и ванная комната.</p>
<p>Гостиная большая и удобная. Там есть диван, стол и телевизор. В комнате два окна.</p>
<p>Моя спальня маленькая, но красивая. Кровать находится возле окна. Рядом с кроватью стоит шкаф. Мои книги лежат на столе.</p>
<p>Кухня очень чистая. Там есть холодильник, плита и небольшой стол. Мне нравится мой дом, потому что он тёплый и уютный.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>sofa</td><td>диван</td></tr>
<tr><td>wardrobe</td><td>шкаф</td></tr>
<tr><td>fridge</td><td>холодильник</td></tr>
<tr><td>near</td><td>рядом, возле</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>How many bedrooms are there? → [[two|2]]</li>
<li>What is there in the living room? → [[a sofa, a table and a TV|a sofa a table and a TV|sofa table TV]]</li>
<li>Where is the bed? → [[near the window|by the window|next to the window]]</li>
<li>Where are the books? → [[on the table]]</li>
<li>Why does the person like the house? → [[because it is warm and comfortable|it is warm and comfortable|warm and comfortable]]</li>
</ol>

<h3>Exercise — Choose the correct option</h3>
<ol>
<li>There [[are]] (is / are) two bedrooms.</li>
<li>There [[is]] (is / are) a sofa in the living room.</li>
<li>The books are [[on]] (on / under) the table.</li>
<li>The bed is [[near]] (near / in) the window.</li>
</ol>
` },

  { id: 1104, level: "A1", category: "reading", topic: "reading-best-friend", title: "04. My Best Friend — Мой лучший друг", content: `
<div class="audio-placeholder" data-audio="audio/a1-my-best-friend.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a1-my-best-friend.mp3)</i>
</div>

<h3>English</h3>
<p>My best friend's name is Tom. He is twenty-one years old. He is tall and slim. He has got short brown hair and blue eyes.</p>
<p>Tom is very kind and funny. He likes music, films and sports. He can play the guitar, but he cannot play the piano.</p>
<p>We often meet after work. We go to the park, drink coffee and talk about different things. At weekends, we sometimes watch films together.</p>
<p>I am happy to have such a good friend.</p>

<h3>Перевод</h3>
<p>Моего лучшего друга зовут Том. Ему двадцать один год. Он высокий и стройный. У него короткие каштановые волосы и голубые глаза.</p>
<p>Том очень добрый и весёлый. Он любит музыку, фильмы и спорт. Он умеет играть на гитаре, но не умеет играть на пианино.</p>
<p>Мы часто встречаемся после работы. Мы ходим в парк, пьём кофе и разговариваем о разных вещах. По выходным мы иногда смотрим фильмы вместе.</p>
<p>Я рад, что у меня есть такой хороший друг.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>slim</td><td>стройный</td></tr>
<tr><td>kind</td><td>добрый</td></tr>
<tr><td>funny</td><td>весёлый</td></tr>
<tr><td>guitar</td><td>гитара</td></tr>
<tr><td>together</td><td>вместе</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>How old is Tom? → [[twenty-one|21|twenty one]]</li>
<li>What colour are his eyes? → [[blue]]</li>
<li>Can he play the guitar? → [[yes|yes he can]]</li>
<li>Where do the friends go? → [[to the park|the park|park]]</li>
<li>What do they do at weekends? → [[watch films|watch movies|they watch films|they watch movies]]</li>
</ol>
` },

  { id: 1105, level: "A1", category: "reading", topic: "reading-food", title: "05. My Favourite Food — Моя любимая еда", content: `
<div class="audio-placeholder" data-audio="audio/a1-my-favourite-food.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a1-my-favourite-food.mp3)</i>
</div>

<h3>English</h3>
<p>I love food. My favourite food is pizza. I like pizza with cheese, tomatoes and chicken. I also like pasta and vegetable soup.</p>
<p>For breakfast, I usually eat porridge or eggs. I drink coffee with milk. For lunch, I often have rice with chicken or fish.</p>
<p>I don't like onions or mushrooms. I never drink cola because I prefer water and fresh juice.</p>
<p>On Sundays, I cook dinner with my mother. We make something delicious. Cooking is fun!</p>

<h3>Перевод</h3>
<p>Я люблю еду. Моё любимое блюдо — пицца. Мне нравится пицца с сыром, помидорами и курицей. Я также люблю макароны и овощной суп.</p>
<p>На завтрак я обычно ем кашу или яйца. Я пью кофе с молоком. На обед я часто ем рис с курицей или рыбой.</p>
<p>Я не люблю лук и грибы. Я никогда не пью колу, потому что предпочитаю воду и свежий сок.</p>
<p>По воскресеньям я готовлю ужин с мамой. Мы готовим что-нибудь вкусное. Готовить весело!</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>pasta</td><td>макароны</td></tr>
<tr><td>porridge</td><td>каша</td></tr>
<tr><td>onion</td><td>лук</td></tr>
<tr><td>mushroom</td><td>гриб</td></tr>
<tr><td>fresh juice</td><td>свежий сок</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What is the person's favourite food? → [[pizza]]</li>
<li>What does the person eat for breakfast? → [[porridge or eggs|eggs or porridge]]</li>
<li>Does the person like mushrooms? → [[no|no they don't]]</li>
<li>What does the person drink? → [[water and fresh juice|fresh juice and water|coffee with milk|coffee]]</li>
<li>Who does the person cook with? → [[mother|with mother|with my mother|mum|with mum]]</li>
</ol>
` },

  { id: 1106, level: "A1", category: "reading", topic: "reading-weekend", title: "06. My Weekend — Мои выходные", content: `
<div class="audio-placeholder" data-audio="audio/a1-my-weekend.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a1-my-weekend.mp3)</i>
</div>

<h3>English</h3>
<p>I love weekends because I don't work on Saturday and Sunday.</p>
<p>On Saturday, I usually get up late. I have breakfast and clean my room. Then I go shopping with my friend. We sometimes go to a café and drink tea.</p>
<p>In the afternoon, I like walking in the park. I listen to music and take photos. In the evening, I watch films or play computer games.</p>
<p>On Sunday, I visit my grandparents. We have lunch together and talk. Sometimes we play board games.</p>
<p>My weekends are always interesting!</p>

<h3>Перевод</h3>
<p>Я люблю выходные, потому что не работаю в субботу и воскресенье.</p>
<p>В субботу я обычно поздно встаю. Я завтракаю и убираю свою комнату. Затем я иду за покупками с другом. Иногда мы ходим в кафе и пьём чай.</p>
<p>Днём я люблю гулять в парке. Я слушаю музыку и фотографирую. Вечером я смотрю фильмы или играю в компьютерные игры.</p>
<p>В воскресенье я навещаю бабушку и дедушку. Мы вместе обедаем и разговариваем. Иногда мы играем в настольные игры.</p>
<p>Мои выходные всегда интересные!</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>clean</td><td>убирать, чистить</td></tr>
<tr><td>shopping</td><td>покупки</td></tr>
<tr><td>take photos</td><td>фотографировать</td></tr>
<tr><td>visit</td><td>навещать</td></tr>
<tr><td>grandparents</td><td>бабушка и дедушка</td></tr>
<tr><td>board games</td><td>настольные игры</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>Why does the person love weekends? → [[because they don't work|because I don't work|doesn't work|no work]]</li>
<li>What does the person do on Saturday morning? → [[has breakfast and cleans the room|cleans the room|clean the room|gets up late]]</li>
<li>Who does the person go shopping with? → [[a friend|with a friend|friend|my friend]]</li>
<li>Where does the person go on Sunday? → [[to visit grandparents|visits grandparents|grandparents|visit grandparents]]</li>
<li>What do they do together? → [[have lunch and talk|lunch and talk|talk and have lunch|play board games]]</li>
</ol>
` },

  { id: 1107, level: "A1", category: "reading", topic: "reading-london", title: "07. A Day in London — День в Лондоне", content: `
<div class="audio-placeholder" data-audio="audio/a1-a-day-in-london.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a1-a-day-in-london.mp3)</i>
</div>

<h3>English</h3>
<p>My name is Alex. I am on holiday in London. London is a beautiful city. There are many interesting places here.</p>
<p>Today I visit Big Ben and Buckingham Palace. I take many photos. The weather is sunny but a little cold.</p>
<p>Then I go to a small café. I eat a sandwich and drink hot chocolate. There are many people in the café.</p>
<p>In the afternoon, I take a red bus and go to the city centre. I buy some souvenirs for my family.</p>
<p>I like London very much. I want to come here again!</p>

<h3>Перевод</h3>
<p>Меня зовут Алекс. Я на отдыхе в Лондоне. Лондон — красивый город. Здесь много интересных мест.</p>
<p>Сегодня я посещаю Биг-Бен и Букингемский дворец. Я делаю много фотографий. Погода солнечная, но немного холодная.</p>
<p>Затем я иду в небольшое кафе. Я ем бутерброд и пью горячий шоколад. В кафе много людей.</p>
<p>Днём я сажусь на красный автобус и еду в центр города. Я покупаю несколько сувениров для своей семьи.</p>
<p>Мне очень нравится Лондон. Я хочу приехать сюда снова!</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>holiday</td><td>отпуск, каникулы</td></tr>
<tr><td>sandwich</td><td>бутерброд</td></tr>
<tr><td>city centre</td><td>центр города</td></tr>
<tr><td>souvenir</td><td>сувенир</td></tr>
<tr><td>again</td><td>снова</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>Where is Alex? → [[in London|London]]</li>
<li>What places does he visit? → [[Big Ben and Buckingham Palace|Buckingham Palace and Big Ben]]</li>
<li>What is the weather like? → [[sunny but a little cold|sunny and cold|sunny but cold]]</li>
<li>What does he eat and drink? → [[a sandwich and hot chocolate|hot chocolate and a sandwich|sandwich and hot chocolate]]</li>
<li>What does he buy for his family? → [[souvenirs|souvenir|some souvenirs]]</li>
</ol>
` },

  { id: 1108, level: "A1", category: "reading", topic: "reading-plans", title: "08. My Plans for Tomorrow — Мои планы на завтра", content: `
<div class="audio-placeholder" data-audio="audio/a1-my-plans.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a1-my-plans.mp3)</i>
</div>

<h3>English</h3>
<p>Tomorrow is Saturday. I am going to have a busy day.</p>
<p>In the morning, I am going to get up at eight o'clock. I am going to have breakfast and go to the supermarket. I need to buy some food.</p>
<p>After that, I am going to meet my friend Sarah. We are going to walk in the park and take some photos.</p>
<p>In the afternoon, I am going to clean my room and do my homework. In the evening, I am going to watch a new film with my family.</p>
<p>I think tomorrow is going to be a great day!</p>

<h3>Перевод</h3>
<p>Завтра суббота. У меня будет насыщенный день.</p>
<p>Утром я собираюсь встать в восемь часов. Я собираюсь позавтракать и пойти в супермаркет. Мне нужно купить немного еды.</p>
<p>После этого я собираюсь встретиться с подругой Сарой. Мы собираемся гулять в парке и фотографироваться.</p>
<p>Днём я собираюсь убрать свою комнату и сделать домашнее задание. Вечером я собираюсь посмотреть новый фильм с семьёй.</p>
<p>Я думаю, завтра будет отличный день!</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>busy</td><td>занятый, насыщенный</td></tr>
<tr><td>supermarket</td><td>супермаркет</td></tr>
<tr><td>after that</td><td>после этого</td></tr>
<tr><td>homework</td><td>домашнее задание</td></tr>
<tr><td>plan</td><td>план</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What day is tomorrow? → [[Saturday]]</li>
<li>What time is the person going to get up? → [[eight|at eight|eight o'clock|at eight o'clock|8|at 8]]</li>
<li>Who is the person going to meet? → [[Sarah|a friend Sarah|friend Sarah]]</li>
<li>What are they going to do in the park? → [[walk and take photos|take photos|walk|walk and take some photos]]</li>
<li>What is the person going to do in the evening? → [[watch a new film|watch a film|watch a movie|watch a new movie]]</li>
</ol>
` },
  { id: 1110, level: "A1", category: "vocabulary", topic: "reading-words", title: "Слова из текстов для чтения (A1)", content: `
<p>Слова, которые встречаются в разделе «Чтение» и дополняют основной словарь.</p>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>town</td><td>городок</td></tr>
<tr><td>hospital</td><td>больница</td></tr>
<tr><td>brush my teeth</td><td>чистить зубы</td></tr>
<tr><td>sofa</td><td>диван</td></tr>
<tr><td>wardrobe</td><td>шкаф</td></tr>
<tr><td>fridge</td><td>холодильник</td></tr>
<tr><td>slim</td><td>стройный</td></tr>
<tr><td>guitar</td><td>гитара</td></tr>
<tr><td>pasta</td><td>макароны</td></tr>
<tr><td>porridge</td><td>каша</td></tr>
<tr><td>onion</td><td>лук</td></tr>
<tr><td>mushroom</td><td>гриб</td></tr>
<tr><td>fresh juice</td><td>свежий сок</td></tr>
<tr><td>shopping</td><td>покупки</td></tr>
<tr><td>take photos</td><td>фотографировать</td></tr>
<tr><td>grandparents</td><td>бабушка и дедушка</td></tr>
<tr><td>board games</td><td>настольные игры</td></tr>
<tr><td>holiday</td><td>отпуск, каникулы</td></tr>
<tr><td>sandwich</td><td>бутерброд</td></tr>
<tr><td>souvenir</td><td>сувенир</td></tr>
<tr><td>busy</td><td>занятый, насыщенный</td></tr>
<tr><td>supermarket</td><td>супермаркет</td></tr>
<tr><td>homework</td><td>домашнее задание</td></tr>
</table>
` },

{ id: 1009, level: "A2", category: "theory", topic: "past-continuous", title: "Past Continuous (Прошедшее продолженное)", content: `
  <p><strong>Что это?</strong> Past Continuous описывает процесс, который длился в определённый момент прошлого. Часто используется как фон для другого события.</p>

  <h3>Формула</h3>
  <ul>
    <li><strong>Утверждение:</strong> Subject + was/were + V-ing</li>
    <li><strong>Отрицание:</strong> Subject + was/were not + V-ing</li>
    <li><strong>Вопрос:</strong> Was/Were + subject + V-ing?</li>
  </ul>

  <h3>Примеры</h3>
  <div class="example">
    <div class="en">I <strong>was walking</strong> home when it started to rain.</div>
    <div class="ru">Я шёл домой, когда начался дождь.</div>
  </div>
  <div class="example">
    <div class="en">They <strong>were playing</strong> football at 5 o'clock yesterday.</div>
    <div class="ru">Вчера в 5 часов они играли в футбол.</div>
  </div>
  <div class="example">
    <div class="en">She <strong>wasn't listening</strong> to the teacher.</div>
    <div class="ru">Она не слушала учителя.</div>
  </div>

  <h3>Past Continuous vs Past Simple</h3>
  <ul>
    <li><b>Past Continuous</b> — процесс (фон): <i>We were walking along the path.</i></li>
    <li><b>Past Simple</b> — завершённое событие, которое прерывает процесс: <i>The weather suddenly changed.</i></li>
  </ul>

  <h3>Маркеры времени</h3>
  <ul>
    <li>at 5 o'clock yesterday, at that moment</li>
    <li>while, when (в комбинации с Past Simple)</li>
    <li>all morning / all day yesterday</li>
  </ul>
` },

{ id: 1010, level: "A2", category: "theory", topic: "present-perfect", title: "Present Perfect (Настоящее совершённое)", content: `
  <p><strong>Что это?</strong> Present Perfect связывает прошлое с настоящим: важен результат или жизненный опыт, а не конкретное время действия.</p>

  <h3>Формула</h3>
  <ul>
    <li><strong>Утверждение:</strong> Subject + have/has + V3</li>
    <li><strong>Отрицание:</strong> Subject + have/has not + V3</li>
    <li><strong>Вопрос:</strong> Have/Has + subject + V3?</li>
  </ul>

  <h3>Примеры</h3>
  <div class="example">
    <div class="en">I <strong>have lost</strong> my keys. (результат: не могу войти)</div>
    <div class="ru">Я потерял ключи.</div>
  </div>
  <div class="example">
    <div class="en">She <strong>has never been</strong> to London.</div>
    <div class="ru">Она никогда не была в Лондоне. (опыт)</div>
  </div>
  <div class="example">
    <div class="en"><strong>Have</strong> you <strong>finished</strong> your homework yet?</div>
    <div class="ru">Ты уже закончил домашнюю работу?</div>
  </div>

  <h3>Present Perfect vs Past Simple</h3>
  <ul>
    <li><b>Present Perfect</b> — нет конкретного времени, важен результат: <i>I have bought a new phone.</i></li>
    <li><b>Past Simple</b> — есть конкретное время в прошлом: <i>I bought a new phone yesterday.</i></li>
  </ul>

  <h3>Маркеры времени</h3>
  <ul>
    <li>ever, never, just, already, yet, recently, so far</li>
    <li>since (с какого момента), for (как долго)</li>
  </ul>
` },

{ id: 1019, level: "A2", category: "theory", topic: "infinitive-gerund", title: "Infinitive vs Gerund (Инфинитив и герундий)", content: `
  <p><strong>Что это?</strong> После некоторых глаголов используется инфинитив с <b>to</b> (to + V1), после других — форма с <b>-ing</b> (V-ing).</p>

  <h3>Глаголы + to + V1</h3>
  <p>decide, want, need, hope, plan, promise, learn, try</p>
  <div class="example">
    <div class="en">I decided <strong>to learn</strong> how to cook. / She wants <strong>to become</strong> a manager.</div>
  </div>

  <h3>Глаголы + V-ing</h3>
  <p>enjoy, mind, suggest, avoid, finish, keep, practise</p>
  <div class="example">
    <div class="en">I enjoy <strong>cooking</strong>. / He kept <strong>trying</strong>.</div>
  </div>

  <h3>После love / like / hate возможны обе формы</h3>
  <div class="example">
    <div class="en">I love <strong>cooking</strong>. = I love <strong>to cook</strong>.</div>
  </div>

  <h3>После предлогов всегда -ing</h3>
  <p>good at <b>drawing</b>, interested in <b>learning</b>, before <b>leaving</b>.</p>
` },

{ id: 1020, level: "A2", category: "theory", topic: "countable-uncountable", title: "Countable / Uncountable (Исчисляемые и неисчисляемые)", content: `
  <p><strong>Что это?</strong> Исчисляемые существительные можно посчитать (one book, two books). Неисчисляемые обычно не имеют множественного числа (water, information, money).</p>

  <h3>Some / Any</h3>
  <ul>
    <li><b>Some</b> — в утвердительных предложениях: <i>I need some water.</i></li>
    <li><b>Any</b> — в вопросах и отрицаниях: <i>Do you have any questions? / There aren't any apples.</i></li>
  </ul>

  <h3>Much / Many</h3>
  <ul>
    <li><b>Many</b> + исчисляемые: <i>many books, many people</i></li>
    <li><b>Much</b> + неисчисляемые: <i>much water, much money</i></li>
  </ul>

  <h3>Примеры</h3>
  <div class="example">
    <div class="en">There are <strong>some</strong> notebooks in the box, but there aren't <strong>any</strong> headphones.</div>
    <div class="ru">В коробке есть несколько тетрадей, но нет наушников.</div>
  </div>
  <div class="example">
    <div class="en">How <strong>many</strong> items did you order? How <strong>much</strong> did you pay?</div>
    <div class="ru">Сколько товаров ты заказал? Сколько ты заплатил?</div>
  </div>
` },

{ id: 1029, level: "A2", category: "practice", topic: "past-continuous-practice", title: "Практика: Past Continuous", content: `
  <p>Поставьте глагол в Past Continuous или Past Simple.</p>
  <ol>
    <li>I [[was walking]] (walk) home when I [[saw]] (see) an old friend.</li>
    <li>They [[were playing]] (play) football at 5 o'clock yesterday.</li>
    <li>She [[wasn't listening]] (not / listen) when the teacher asked a question.</li>
    <li>While we [[were having]] (have) dinner, the phone [[rang]] (ring).</li>
    <li>What [[were]] you [[doing]] (do) at 8 p.m. yesterday?</li>
    <li>He [[was driving]] (drive) to work when the accident [[happened]] (happen).</li>
  </ol>
` },

{ id: 1030, level: "A2", category: "practice", topic: "present-perfect-practice", title: "Практика: Present Perfect", content: `
  <p>Поставьте глагол в Present Perfect или Past Simple.</p>
  <ol>
    <li>I [[have just finished]] (just / finish) my homework.</li>
    <li>She [[visited]] (visit) Paris last summer.</li>
    <li>[[Have]] you ever [[been]] (be) to London?</li>
    <li>We [[haven't seen]] (not / see) that film yet.</li>
    <li>He [[lost]] (lose) his keys yesterday.</li>
    <li>They [[have lived]] (live) here since 2019.</li>
    <li>I [[have never eaten]] (never / eat) sushi.</li>
    <li>She [[has already sent]] (already / send) the email.</li>
  </ol>
` },

{ id: 1031, level: "A2", category: "practice", topic: "infinitive-gerund-practice", title: "Практика: Infinitive vs Gerund", content: `
  <p>Выберите правильную форму (to + V1 или V-ing).</p>
  <ol>
    <li>I decided [[to learn]] (learn) how to cook.</li>
    <li>She enjoys [[baking]] (bake) cakes.</li>
    <li>He wants [[to become]] (become) a manager.</li>
    <li>They kept [[trying]] (try) even when it was difficult.</li>
    <li>I don't mind [[waiting]] (wait) for a few minutes.</li>
    <li>We hope [[to visit]] (visit) you next summer.</li>
    <li>She suggested [[going]] (go) to the cinema.</li>
    <li>He promised [[to help]] (help) me with the project.</li>
  </ol>
` },

{ id: 1032, level: "A2", category: "practice", topic: "countable-uncountable-practice", title: "Практика: Countable / Uncountable", content: `
  <p>Вставьте some, any, much или many.</p>
  <ol>
    <li>I need [[some]] water.</li>
    <li>Do you have [[any]] questions?</li>
    <li>There aren't [[any]] apples in the fridge.</li>
    <li>How [[many]] books did you buy?</li>
    <li>How [[much]] money do you need?</li>
    <li>She has [[some]] good friends.</li>
    <li>I don't have [[much]] time today.</li>
    <li>There are [[many]] people in the park.</li>
  </ol>
` },

{ id: 1201, level: "A2", category: "reading", topic: "reading-new-job", title: "01. A New Job — Новая работа", content: `
<div class="audio-placeholder" data-audio="audio/a2-new-job.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a2-new-job.mp3)</i>
</div>

<h3>English</h3>
<p>My name is Daniel, and I work as a receptionist in a small hotel. I started this job six months ago. At first, everything was difficult because I had to learn many new things. Now I feel more confident and enjoy my work.</p>
<p>I usually start at eight in the morning. I answer phone calls, welcome guests and help them with their questions. I also check reservations and give visitors information about the town.</p>
<p>This week, our hotel is very busy because a large group of tourists is staying here. I am working longer hours than usual, but I don't mind. My colleagues are friendly, and we help each other.</p>
<p>I would like to become a hotel manager one day. I know I need more experience, so I am trying to learn something new every day.</p>

<h3>Перевод</h3>
<p>Меня зовут Дэниел, и я работаю администратором в небольшом отеле. Я начал эту работу шесть месяцев назад. Сначала всё было трудно, потому что мне нужно было узнать много нового. Теперь я чувствую себя увереннее, и мне нравится моя работа.</p>
<p>Обычно я начинаю работать в восемь утра. Я отвечаю на телефонные звонки, встречаю гостей и помогаю им с вопросами. Также я проверяю бронирования и даю посетителям информацию о городе.</p>
<p>На этой неделе наш отель очень загружен, потому что здесь остановилась большая группа туристов. Я работаю дольше, чем обычно, но меня это не беспокоит. Мои коллеги дружелюбные, и мы помогаем друг другу.</p>
<p>Однажды я хотел бы стать управляющим отеля. Я знаю, что мне нужно больше опыта, поэтому стараюсь узнавать что-то новое каждый день.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>receptionist</td><td>администратор на стойке регистрации</td></tr>
<tr><td>at first</td><td>сначала</td></tr>
<tr><td>confident</td><td>уверенный в себе</td></tr>
<tr><td>welcome guests</td><td>встречать гостей</td></tr>
<tr><td>reservation</td><td>бронирование</td></tr>
<tr><td>colleague</td><td>коллега</td></tr>
<tr><td>experience</td><td>опыт</td></tr>
<tr><td>each other</td><td>друг другу</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>Where does Daniel work? → [[in a small hotel|a small hotel|small hotel]]</li>
<li>When did he start this job? → [[six months ago|6 months ago]]</li>
<li>What does he do at work? → [[answers phone calls welcomes guests and helps them|answers phone calls|welcomes guests]]</li>
<li>Why is the hotel busy this week? → [[because a large group of tourists is staying here|a large group of tourists|tourists]]</li>
<li>What would Daniel like to become? → [[a hotel manager|hotel manager]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>Daniel has worked at the hotel for six months. → [[True]]</li>
<li>He works as a cook. → [[False]]</li>
<li>The hotel is busy because of a group of tourists. → [[True]]</li>
<li>Daniel wants to learn more. → [[True]]</li>
</ol>
` },

{ id: 1202, level: "A2", category: "reading", topic: "reading-unforgettable-weekend", title: "02. An Unforgettable Weekend — Незабываемые выходные", content: `
<div class="audio-placeholder" data-audio="audio/a2-unforgettable-weekend.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a2-unforgettable-weekend.mp3)</i>
</div>

<h3>English</h3>
<p>Last weekend, my friends and I went to the mountains. We planned the trip for a long time, and we were very excited. We left home early on Saturday morning and travelled by train.</p>
<p>While we were walking along a mountain path, the weather suddenly changed. It started raining heavily, and we couldn't see the path very well. We found a small wooden shelter and waited there for about twenty minutes.</p>
<p>When the rain stopped, we continued our walk. We reached a beautiful lake in the afternoon and had lunch near the water. The view was amazing, so we took lots of photos.</p>
<p>We came home late in the evening. We were tired, but we felt happy because we had spent a wonderful day together.</p>

<h3>Перевод</h3>
<p>В прошлые выходные мы с друзьями ездили в горы. Мы долго планировали эту поездку и очень волновались от предвкушения. В субботу рано утром мы вышли из дома и отправились на поезде.</p>
<p>Пока мы шли по горной тропе, погода внезапно изменилась. Начался сильный дождь, и мы не могли хорошо видеть тропу. Мы нашли небольшое деревянное укрытие и ждали там около двадцати минут.</p>
<p>Когда дождь закончился, мы продолжили прогулку. Днём мы добрались до красивого озера и пообедали у воды. Вид был потрясающий, поэтому мы сделали много фотографий.</p>
<p>Мы вернулись домой поздно вечером. Мы устали, но были счастливы, потому что провели вместе замечательный день.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>unforgettable</td><td>незабываемый</td></tr>
<tr><td>mountains</td><td>горы</td></tr>
<tr><td>excited</td><td>взволнованный</td></tr>
<tr><td>mountain path</td><td>горная тропа</td></tr>
<tr><td>suddenly</td><td>внезапно</td></tr>
<tr><td>heavily</td><td>сильно</td></tr>
<tr><td>shelter</td><td>укрытие</td></tr>
<tr><td>view</td><td>вид, пейзаж</td></tr>
<tr><td>reach</td><td>добираться</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>Where did the friends go? → [[to the mountains|the mountains|mountains]]</li>
<li>How did they travel? → [[by train|train]]</li>
<li>What happened while they were walking? → [[the weather suddenly changed|it started raining|it started raining heavily]]</li>
<li>Where did they wait for the rain to stop? → [[in a small wooden shelter|a small wooden shelter|wooden shelter]]</li>
<li>How did they feel at the end of the day? → [[tired but happy|happy|tired and happy]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>We went to the mountains by car. → [[False]]</li>
<li>It started raining during the walk. → [[True]]</li>
<li>They had lunch near a lake. → [[True]]</li>
</ol>
` },

{ id: 1203, level: "A2", category: "reading", topic: "reading-healthy-lifestyle", title: "03. A Healthy Lifestyle — Здоровый образ жизни", content: `
<div class="audio-placeholder" data-audio="audio/a2-healthy-lifestyle.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a2-healthy-lifestyle.mp3)</i>
</div>

<h3>English</h3>
<p>Many people want to feel healthier, but they don't know where to start. You don't need to change your whole life in one day. Small habits can make a big difference.</p>
<p>First, you should drink enough water during the day. You should also eat fruit and vegetables and try not to eat too much fast food. It is important to have regular meals and not skip breakfast.</p>
<p>Exercise is another important part of a healthy lifestyle. You don't have to go to the gym every day. You can walk to work, ride a bike or do some simple exercises at home. Try to be active for at least thirty minutes a day.</p>
<p>You should also get enough sleep. Most adults need about seven or eight hours every night. If you feel tired, take a short break and relax. Remember: healthy habits take time, so don't give up.</p>

<h3>Перевод</h3>
<p>Многие люди хотят чувствовать себя здоровее, но не знают, с чего начать. Не нужно менять всю свою жизнь за один день. Небольшие привычки могут многое изменить.</p>
<p>Во-первых, в течение дня следует пить достаточно воды. Также следует есть фрукты и овощи и стараться не употреблять слишком много фастфуда. Важно регулярно питаться и не пропускать завтрак.</p>
<p>Физическая активность — ещё одна важная часть здорового образа жизни. Необязательно ходить в спортзал каждый день. Можно ходить на работу пешком, ездить на велосипеде или выполнять простые упражнения дома. Старайтесь быть активными хотя бы тридцать минут в день.</p>
<p>Также следует достаточно спать. Большинству взрослых нужно около семи или восьми часов сна каждую ночь. Если вы чувствуете усталость, сделайте небольшой перерыв и отдохните. Помните: здоровые привычки требуют времени, поэтому не сдавайтесь.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>healthy</td><td>здоровый</td></tr>
<tr><td>habit</td><td>привычка</td></tr>
<tr><td>make a difference</td><td>иметь большое значение</td></tr>
<tr><td>enough</td><td>достаточно</td></tr>
<tr><td>skip breakfast</td><td>пропускать завтрак</td></tr>
<tr><td>exercise</td><td>упражнение; физическая нагрузка</td></tr>
<tr><td>at least</td><td>как минимум</td></tr>
<tr><td>give up</td><td>сдаваться</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>Why can small habits be useful? → [[they can make a big difference|make a big difference]]</li>
<li>What should people drink during the day? → [[enough water|water]]</li>
<li>Do you have to go to the gym every day? → [[no|no you don't]]</li>
<li>How long should people try to be active? → [[at least thirty minutes a day|thirty minutes|30 minutes]]</li>
<li>How many hours of sleep do most adults need? → [[seven or eight|seven or eight hours|7 or 8]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>You must change everything in one day. → [[False]]</li>
<li>People should eat fruit and vegetables. → [[True]]</li>
<li>Walking can be a form of exercise. → [[True]]</li>
</ol>
` },

{ id: 1204, level: "A2", category: "reading", topic: "reading-trip-coast", title: "04. A Trip to the Coast — Поездка на побережье", content: `
<div class="audio-placeholder" data-audio="audio/a2-trip-to-coast.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a2-trip-to-coast.mp3)</i>
</div>

<h3>English</h3>
<p>Last summer, my family spent a week in a small town by the sea. We usually go to the countryside, so this holiday was different from our usual trips.</p>
<p>The town was smaller than our city, but it was much quieter and more relaxing. Our hotel was close to the beach, and the sea was warmer than we expected. Every morning, we went swimming before breakfast.</p>
<p>One day, we visited the oldest part of the town. The streets were narrow, and there were many beautiful old buildings. We also tried the local fish. It was the most delicious meal of our holiday.</p>
<p>I enjoyed this trip more than I expected. I think holidays by the sea are perfect when you want to relax and spend time with your family.</p>

<h3>Перевод</h3>
<p>Прошлым летом моя семья провела неделю в небольшом городке у моря. Обычно мы ездим за город, поэтому этот отпуск отличался от наших привычных поездок.</p>
<p>Городок был меньше нашего города, но намного тише и спокойнее. Наш отель находился недалеко от пляжа, а море было теплее, чем мы ожидали. Каждое утро мы плавали перед завтраком.</p>
<p>Однажды мы посетили самую старую часть города. Улицы были узкими, и там было много красивых старинных зданий. Мы также попробовали местную рыбу. Это было самое вкусное блюдо за весь отпуск.</p>
<p>Мне понравилась эта поездка больше, чем я ожидал. Думаю, отдых на море идеально подходит, когда хочется расслабиться и провести время с семьёй.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>coast</td><td>побережье</td></tr>
<tr><td>countryside</td><td>сельская местность</td></tr>
<tr><td>quiet</td><td>тихий</td></tr>
<tr><td>relaxing</td><td>расслабляющий</td></tr>
<tr><td>expect</td><td>ожидать</td></tr>
<tr><td>narrow</td><td>узкий</td></tr>
<tr><td>local</td><td>местный</td></tr>
<tr><td>delicious</td><td>вкусный</td></tr>
<tr><td>spend time</td><td>проводить время</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>Where did the family spend their holiday? → [[in a small town by the sea|a small town by the sea|by the sea]]</li>
<li>How was the town different from their city? → [[smaller quieter and more relaxing|smaller and quieter|quieter]]</li>
<li>Where was the hotel? → [[close to the beach|near the beach]]</li>
<li>What did they do every morning? → [[went swimming|swimming]]</li>
<li>What was the most delicious meal? → [[the local fish|local fish|fish]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>The family usually goes to the seaside. → [[False]]</li>
<li>The sea was warmer than they expected. → [[True]]</li>
<li>They visited the newest part of the town. → [[False]]</li>
</ol>
` },

{ id: 1205, level: "A2", category: "reading", topic: "reading-missing-bag", title: "05. The Missing Bag — Потерянная сумка", content: `
<div class="audio-placeholder" data-audio="audio/a2-missing-bag.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a2-missing-bag.mp3)</i>
</div>

<h3>English</h3>
<p>Emma has just arrived at the airport, but she can't find her suitcase. She has looked near the check-in desk and around the luggage area, but it isn't there.</p>
<p>She went to the information desk and spoke to an airport assistant. Emma explained that she had travelled from Madrid and that her suitcase was dark blue with a small red label.</p>
<p>The assistant asked her to complete a form and gave her a reference number. He said that the airport staff would look for the bag and contact her as soon as possible.</p>
<p>Emma has never lost her luggage before, so she feels worried. However, she has already received a message from the airline. They have found a suitcase that looks like hers, and she is going to check it now.</p>

<h3>Перевод</h3>
<p>Эмма только что прибыла в аэропорт, но не может найти свой чемодан. Она уже посмотрела возле стойки регистрации и в зоне выдачи багажа, но его там нет.</p>
<p>Она подошла к справочной стойке и поговорила с сотрудником аэропорта. Эмма объяснила, что прилетела из Мадрида и что её чемодан тёмно-синий с небольшой красной биркой.</p>
<p>Сотрудник попросил её заполнить форму и дал ей номер обращения. Он сказал, что сотрудники аэропорта будут искать сумку и свяжутся с ней как можно скорее.</p>
<p>Эмма никогда раньше не теряла багаж, поэтому она переживает. Однако она уже получила сообщение от авиакомпании. Они нашли чемодан, похожий на её, и сейчас она собирается его проверить.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>suitcase</td><td>чемодан</td></tr>
<tr><td>luggage</td><td>багаж</td></tr>
<tr><td>check-in desk</td><td>стойка регистрации</td></tr>
<tr><td>information desk</td><td>справочная стойка</td></tr>
<tr><td>complete a form</td><td>заполнить форму</td></tr>
<tr><td>reference number</td><td>номер обращения</td></tr>
<tr><td>as soon as possible</td><td>как можно скорее</td></tr>
<tr><td>airline</td><td>авиакомпания</td></tr>
<tr><td>worried</td><td>обеспокоенный</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>Where has Emma arrived? → [[at the airport|the airport|airport]]</li>
<li>What colour is her suitcase? → [[dark blue|blue]]</li>
<li>Where did she travel from? → [[Madrid|from Madrid]]</li>
<li>What did the assistant give her? → [[a reference number|reference number]]</li>
<li>What message has Emma received? → [[the airline has found a suitcase|they have found a suitcase|airline found a suitcase]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>Emma can find her suitcase near the check-in desk. → [[False]]</li>
<li>Her suitcase is dark blue. → [[True]]</li>
<li>The airport has found a possible match. → [[True]]</li>
</ol>
` },

{ id: 1206, level: "A2", category: "reading", topic: "reading-learning-new", title: "06. Learning Something New — Учиться новому", content: `
<div class="audio-placeholder" data-audio="audio/a2-learning-something-new.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a2-learning-something-new.mp3)</i>
</div>

<h3>English</h3>
<p>Last year, I decided to learn how to cook. I enjoyed eating different dishes, but I couldn't prepare anything more difficult than an omelette.</p>
<p>At first, I watched short videos and tried to follow the recipes. I made many mistakes. Sometimes I forgot to add an ingredient, and once I burned the rice. But I didn't stop practising.</p>
<p>Now I can cook several simple meals. I love making vegetable soup and baking cakes for my friends. I also want to learn to prepare traditional dishes from other countries.</p>
<p>Learning to cook has taught me to be patient. I understand that it is important to keep trying, even when something doesn't work the first time.</p>

<h3>Перевод</h3>
<p>В прошлом году я решил научиться готовить. Мне нравилось есть разные блюда, но я не умел готовить ничего сложнее омлета.</p>
<p>Сначала я смотрел короткие видео и старался следовать рецептам. Я совершал много ошибок. Иногда я забывал добавить ингредиент, а однажды сжёг рис. Но я не перестал практиковаться.</p>
<p>Теперь я умею готовить несколько простых блюд. Мне нравится готовить овощной суп и печь торты для друзей. Я также хочу научиться готовить традиционные блюда других стран.</p>
<p>Обучение кулинарии научило меня быть терпеливым. Я понимаю, что важно продолжать попытки, даже если что-то не получается с первого раза.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>decide</td><td>решать</td></tr>
<tr><td>prepare</td><td>готовить; подготавливать</td></tr>
<tr><td>dish</td><td>блюдо</td></tr>
<tr><td>recipe</td><td>рецепт</td></tr>
<tr><td>ingredient</td><td>ингредиент</td></tr>
<tr><td>burn</td><td>сжечь; подгореть</td></tr>
<tr><td>practise</td><td>практиковаться</td></tr>
<tr><td>bake</td><td>печь</td></tr>
<tr><td>patient</td><td>терпеливый</td></tr>
<tr><td>keep trying</td><td>продолжать пытаться</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What did the person decide to learn last year? → [[to cook|cook|cooking]]</li>
<li>What could the person cook before? → [[an omelette|omelette]]</li>
<li>What mistakes did the person make? → [[forgot to add an ingredient and burned the rice|burned the rice|forgot an ingredient]]</li>
<li>What meals can the person cook now? → [[vegetable soup and cakes|soup and cakes|vegetable soup]]</li>
<li>What has cooking taught the person? → [[to be patient|patience|be patient]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>The person already knew how to cook many dishes. → [[False]]</li>
<li>The person once burned the rice. → [[True]]</li>
<li>The person wants to learn dishes from other countries. → [[True]]</li>
</ol>
` },

{ id: 1207, level: "A2", category: "reading", topic: "reading-problem-order", title: "07. A Problem with an Order — Проблема с заказом", content: `
<div class="audio-placeholder" data-audio="audio/a2-problem-with-order.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a2-problem-with-order.mp3)</i>
</div>

<h3>English</h3>
<p>Yesterday, I ordered some things from an online shop. I needed a new phone case, two notebooks and a pair of headphones. The website looked simple, and the prices were reasonable.</p>
<p>The parcel arrived this morning, but there was a problem. There were no headphones in the box, and one notebook was damaged. I checked the order confirmation and saw that I had paid for all the items.</p>
<p>I contacted customer service and explained the situation. The assistant was polite and asked me to send a photo of the damaged notebook. She said they would send the missing headphones and replace the notebook.</p>
<p>I hope everything will be fine. Shopping online is convenient, but sometimes you have to solve problems.</p>

<h3>Перевод</h3>
<p>Вчера я заказал несколько вещей в интернет-магазине. Мне был нужен новый чехол для телефона, две тетради и наушники. Сайт выглядел простым, а цены были разумными.</p>
<p>Посылка пришла сегодня утром, но возникла проблема. В коробке не было наушников, а одна тетрадь была повреждена. Я проверил подтверждение заказа и увидел, что оплатил все товары.</p>
<p>Я связался со службой поддержки и объяснил ситуацию. Сотрудница была вежливой и попросила меня отправить фотографию повреждённой тетради. Она сказала, что они отправят недостающие наушники и заменят тетрадь.</p>
<p>Надеюсь, всё будет хорошо. Покупать онлайн удобно, но иногда приходится решать проблемы.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>online shop</td><td>интернет-магазин</td></tr>
<tr><td>phone case</td><td>чехол для телефона</td></tr>
<tr><td>headphones</td><td>наушники</td></tr>
<tr><td>reasonable</td><td>разумный; приемлемый</td></tr>
<tr><td>parcel</td><td>посылка</td></tr>
<tr><td>damaged</td><td>повреждённый</td></tr>
<tr><td>order confirmation</td><td>подтверждение заказа</td></tr>
<tr><td>customer service</td><td>служба поддержки</td></tr>
<tr><td>replace</td><td>заменять</td></tr>
<tr><td>missing</td><td>недостающий</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What did the person order? → [[a phone case two notebooks and headphones|a phone case|two notebooks|headphones]]</li>
<li>When did the parcel arrive? → [[this morning|morning]]</li>
<li>What was missing? → [[the headphones|headphones]]</li>
<li>What was wrong with one notebook? → [[it was damaged|damaged]]</li>
<li>What did customer service promise to do? → [[send the missing headphones and replace the notebook|send headphones and replace the notebook]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>The person ordered a laptop. → [[False]]</li>
<li>There were no headphones in the parcel. → [[True]]</li>
<li>Customer service asked for a photo. → [[True]]</li>
</ol>
` },

{ id: 1208, level: "A2", category: "reading", topic: "reading-future-city", title: "08. What Will Our City Be Like? — Каким будет наш город?", content: `
<div class="audio-placeholder" data-audio="audio/a2-future-city.mp3">
  🔊 <i>Аудио: будет добавлено (audio/a2-future-city.mp3)</i>
</div>

<h3>English</h3>
<p>Our city is changing quickly. New houses and shops are appearing, and the local government is planning to improve public transport. I think life in the city will be more comfortable in the future.</p>
<p>There are going to be more cycle paths, so people will be able to travel around the centre more safely. The city is also going to plant hundreds of trees in parks and along the streets.</p>
<p>I believe that many people will use electric buses instead of cars. This will help reduce air pollution. However, I don't think all problems will disappear. The city will still need more affordable homes and better schools.</p>
<p>I hope these plans will make our city a cleaner and nicer place to live.</p>

<h3>Перевод</h3>
<p>Наш город быстро меняется. Появляются новые дома и магазины, а местные власти планируют улучшить общественный транспорт. Думаю, в будущем жизнь в городе станет комфортнее.</p>
<p>Появится больше велосипедных дорожек, поэтому люди смогут безопаснее передвигаться по центру. Город также собирается посадить сотни деревьев в парках и вдоль улиц.</p>
<p>Я считаю, что многие люди будут пользоваться электрическими автобусами вместо автомобилей. Это поможет уменьшить загрязнение воздуха. Однако я не думаю, что все проблемы исчезнут. Городу по-прежнему будет нужно больше доступного жилья и лучшие школы.</p>
<p>Надеюсь, эти планы сделают наш город более чистым и приятным местом для жизни.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>local government</td><td>местные власти</td></tr>
<tr><td>improve</td><td>улучшать</td></tr>
<tr><td>public transport</td><td>общественный транспорт</td></tr>
<tr><td>cycle path</td><td>велосипедная дорожка</td></tr>
<tr><td>safely</td><td>безопасно</td></tr>
<tr><td>plant trees</td><td>сажать деревья</td></tr>
<tr><td>electric bus</td><td>электрический автобус</td></tr>
<tr><td>reduce</td><td>уменьшать</td></tr>
<tr><td>air pollution</td><td>загрязнение воздуха</td></tr>
<tr><td>affordable</td><td>доступный по цене</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>How is the city changing? → [[new houses and shops are appearing|new houses and shops|changing quickly]]</li>
<li>What is the local government planning to improve? → [[public transport|transport]]</li>
<li>Why will cycle paths be useful? → [[people will be able to travel more safely|travel safely|safely]]</li>
<li>How will electric buses help? → [[reduce air pollution|help reduce air pollution|reduce pollution]]</li>
<li>What else will the city need? → [[affordable homes and better schools|more affordable homes and better schools|homes and schools]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>The city is planning to remove all parks. → [[False]]</li>
<li>There will be more cycle paths. → [[True]]</li>
<li>The writer thinks every problem will disappear. → [[False]]</li>
</ol>
` },

{ id: 1210, level: "A2", category: "vocabulary", topic: "reading-words", title: "Слова из текстов для чтения (A2)", content: `
<p>Слова, которые встречаются в разделе «Чтение» уровня A2.</p>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>receptionist</td><td>администратор на стойке регистрации</td></tr>
<tr><td>at first</td><td>сначала</td></tr>
<tr><td>confident</td><td>уверенный в себе</td></tr>
<tr><td>welcome guests</td><td>встречать гостей</td></tr>
<tr><td>reservation</td><td>бронирование</td></tr>
<tr><td>colleague</td><td>коллега</td></tr>
<tr><td>experience</td><td>опыт</td></tr>
<tr><td>each other</td><td>друг другу</td></tr>
<tr><td>unforgettable</td><td>незабываемый</td></tr>
<tr><td>mountains</td><td>горы</td></tr>
<tr><td>excited</td><td>взволнованный</td></tr>
<tr><td>mountain path</td><td>горная тропа</td></tr>
<tr><td>suddenly</td><td>внезапно</td></tr>
<tr><td>heavily</td><td>сильно</td></tr>
<tr><td>shelter</td><td>укрытие</td></tr>
<tr><td>view</td><td>вид, пейзаж</td></tr>
<tr><td>reach</td><td>добираться</td></tr>
<tr><td>healthy</td><td>здоровый</td></tr>
<tr><td>habit</td><td>привычка</td></tr>
<tr><td>make a difference</td><td>иметь большое значение</td></tr>
<tr><td>enough</td><td>достаточно</td></tr>
<tr><td>skip breakfast</td><td>пропускать завтрак</td></tr>
<tr><td>exercise</td><td>упражнение; физическая нагрузка</td></tr>
<tr><td>at least</td><td>как минимум</td></tr>
<tr><td>give up</td><td>сдаваться</td></tr>
<tr><td>coast</td><td>побережье</td></tr>
<tr><td>countryside</td><td>сельская местность</td></tr>
<tr><td>quiet</td><td>тихий</td></tr>
<tr><td>relaxing</td><td>расслабляющий</td></tr>
<tr><td>expect</td><td>ожидать</td></tr>
<tr><td>narrow</td><td>узкий</td></tr>
<tr><td>local</td><td>местный</td></tr>
<tr><td>delicious</td><td>вкусный</td></tr>
<tr><td>spend time</td><td>проводить время</td></tr>
<tr><td>suitcase</td><td>чемодан</td></tr>
<tr><td>luggage</td><td>багаж</td></tr>
<tr><td>check-in desk</td><td>стойка регистрации</td></tr>
<tr><td>information desk</td><td>справочная стойка</td></tr>
<tr><td>complete a form</td><td>заполнить форму</td></tr>
<tr><td>reference number</td><td>номер обращения</td></tr>
<tr><td>as soon as possible</td><td>как можно скорее</td></tr>
<tr><td>airline</td><td>авиакомпания</td></tr>
<tr><td>worried</td><td>обеспокоенный</td></tr>
<tr><td>decide</td><td>решать</td></tr>
<tr><td>prepare</td><td>готовить; подготавливать</td></tr>
<tr><td>dish</td><td>блюдо</td></tr>
<tr><td>recipe</td><td>рецепт</td></tr>
<tr><td>ingredient</td><td>ингредиент</td></tr>
<tr><td>burn</td><td>сжечь; подгореть</td></tr>
<tr><td>practise</td><td>практиковаться</td></tr>
<tr><td>bake</td><td>печь</td></tr>
<tr><td>patient</td><td>терпеливый</td></tr>
<tr><td>keep trying</td><td>продолжать пытаться</td></tr>
<tr><td>online shop</td><td>интернет-магазин</td></tr>
<tr><td>phone case</td><td>чехол для телефона</td></tr>
<tr><td>headphones</td><td>наушники</td></tr>
<tr><td>reasonable</td><td>разумный; приемлемый</td></tr>
<tr><td>parcel</td><td>посылка</td></tr>
<tr><td>damaged</td><td>повреждённый</td></tr>
<tr><td>order confirmation</td><td>подтверждение заказа</td></tr>
<tr><td>customer service</td><td>служба поддержки</td></tr>
<tr><td>replace</td><td>заменять</td></tr>
<tr><td>missing</td><td>недостающий</td></tr>
<tr><td>local government</td><td>местные власти</td></tr>
<tr><td>improve</td><td>улучшать</td></tr>
<tr><td>public transport</td><td>общественный транспорт</td></tr>
<tr><td>cycle path</td><td>велосипедная дорожка</td></tr>
<tr><td>safely</td><td>безопасно</td></tr>
<tr><td>plant trees</td><td>сажать деревья</td></tr>
<tr><td>electric bus</td><td>электрический автобус</td></tr>
<tr><td>reduce</td><td>уменьшать</td></tr>
<tr><td>air pollution</td><td>загрязнение воздуха</td></tr>
<tr><td>affordable</td><td>доступный по цене</td></tr>
</table>
` },

  // ============================================================
  // B1 READING — файлы в папке audio/
  // ============================================================
  { id: 2101, level: "B1", category: "reading", topic: "reading-difficult-decision", title: "01. A Difficult Decision — Трудное решение", content: `
<div class="audio-placeholder" data-audio="audio/b1-difficult-decision.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b1-difficult-decision.mp3)</i>
</div>

<h3>English</h3>
<p>When Maria finished university, she had to make a difficult decision. She had studied economics, and her parents expected her to find a well-paid job in a bank. However, Maria had always dreamed of working with children. During her studies, she had volunteered at a local school every weekend, and she had discovered that teaching gave her more satisfaction than any other activity.</p>
<p>Her parents were worried. They believed that teaching was not a serious career and that Maria would regret her choice later. They argued that she had wasted four years of her life studying economics. Maria listened carefully, but she felt strongly that she should follow her heart.</p>
<p>In the end, Maria applied for a teaching qualification. The course was demanding, and she had to work part-time in a café to support herself. It was not an easy year, but she never doubted her decision. Today, she teaches at a primary school and says she has never been happier.</p>
<p>Looking back, Maria believes that the hardest part was not the financial struggle, but the fear of disappointing her parents. She has learnt that making your own choices sometimes means accepting that not everyone will agree with you.</p>

<h3>Перевод</h3>
<p>Когда Мария закончила университет, ей пришлось принять трудное решение. Она изучала экономику, и родители ожидали, что она найдёт хорошо оплачиваемую работу в банке. Однако Мария всегда мечтала работать с детьми. Во время учёбы она каждые выходные работала волонтёром в местной школе и обнаружила, что преподавание приносит ей больше удовлетворения, чем любая другая деятельность.</p>
<p>Её родители волновались. Они считали, что преподавание — не серьёзная карьера и что Мария позже пожалеет о своём выборе. Они утверждали, что она потратила четыре года жизни на изучение экономики. Мария внимательно слушала, но твёрдо чувствовала, что должна следовать зову сердца.</p>
<p>В итоге Мария поступила на педагогические курсы. Программа была требовательной, и ей приходилось подрабатывать официанткой в кафе, чтобы содержать себя. Это был нелёгкий год, но она никогда не сомневалась в своём решении. Сегодня она преподаёт в начальной школе и говорит, что никогда не была счастливее.</p>
<p>Оглядываясь назад, Мария считает, что самым трудным была не финансовая борьба, а страх разочаровать родителей. Она поняла, что делать собственный выбор иногда означает принимать то, что не все с тобой согласятся.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>well-paid</td><td>хорошо оплачиваемый</td></tr>
<tr><td>volunteer</td><td>работать волонтёром</td></tr>
<tr><td>satisfaction</td><td>удовлетворение</td></tr>
<tr><td>regret</td><td>сожалеть</td></tr>
<tr><td>waste</td><td>тратить впустую</td></tr>
<tr><td>qualification</td><td>квалификация, диплом</td></tr>
<tr><td>demanding</td><td>требовательный</td></tr>
<tr><td>doubt</td><td>сомневаться</td></tr>
<tr><td>struggle</td><td>борьба</td></tr>
<tr><td>disappoint</td><td>разочаровать</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What did Maria study at university? → [[economics]]</li>
<li>What did her parents expect her to do? → [[find a well-paid job in a bank|work in a bank|find a job in a bank]]</li>
<li>What had she done every weekend during her studies? → [[volunteered at a local school|volunteered at a school|volunteered]]</li>
<li>Why did Maria work part-time in a café? → [[to support herself|support herself]]</li>
<li>What does Maria believe was the hardest part? → [[the fear of disappointing her parents|fear of disappointing her parents|disappointing her parents]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>Maria's parents wanted her to become a teacher. → [[False]]</li>
<li>She volunteered at a school every weekend. → [[True]]</li>
<li>She now works at a primary school. → [[True]]</li>
<li>She regrets her decision. → [[False]]</li>
</ol>
` },

  { id: 2102, level: "B1", category: "reading", topic: "reading-volunteering", title: "02. Why I Volunteer — Почему я занимаюсь волонтёрством", content: `
<div class="audio-placeholder" data-audio="audio/b1-why-i-volunteer.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b1-why-i-volunteer.mp3)</i>
</div>

<h3>English</h3>
<p>Three years ago, I started volunteering at an animal shelter near my house. At first, I only went there once a month because I was busy with work. However, I soon realised that those few hours made me feel more energetic and positive about everything else in my life.</p>
<p>My main tasks are simple: I clean the cages, feed the animals and walk the dogs. I also help the shelter staff when they receive new animals. Some of the dogs have been badly treated, and it takes time to earn their trust. When a frightened dog finally lets you touch it, it is a wonderful feeling.</p>
<p>Volunteering has taught me a lot about patience and responsibility. It has also helped me meet people from different backgrounds. Interestingly, I have made some of my closest friends at the shelter, even though our daytime jobs have nothing in common.</p>
<p>Some people ask me why I give up my free time without being paid. The answer is simple: volunteering has changed my life for the better. I would encourage anyone to try it, even for a few hours a month.</p>

<h3>Перевод</h3>
<p>Три года назад я начал работать волонтёром в приюте для животных рядом с домом. Сначала я ходил туда всего раз в месяц, потому что был занят работой. Однако вскоре я понял, что эти несколько часов дают мне больше энергии и позитива в отношении всего остального в жизни.</p>
<p>Мои основные задачи просты: я убираю клетки, кормлю животных и выгуливаю собак. Ещё я помогаю сотрудникам приюта, когда к ним поступают новые животные. Некоторых собак плохо обращали, и завоевать их доверие требует времени. Когда испуганная собака наконец позволяет себя погладить — это удивительное чувство.</p>
<p>Волонтёрство научило меня многому о терпении и ответственности. Оно также помогло мне познакомиться с людьми разного происхождения. Интересно, что некоторых своих самых близких друзей я нашёл именно в приюте, хотя наши основные работы не имеют между собой ничего общего.</p>
<p>Некоторые спрашивают меня, зачем я отдаю своё свободное время без оплаты. Ответ прост: волонтёрство изменило мою жизнь к лучшему. Я бы посоветовал каждому попробовать, хотя бы несколько часов в месяц.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>shelter</td><td>приют</td></tr>
<tr><td>energetic</td><td>энергичный</td></tr>
<tr><td>cage</td><td>клетка</td></tr>
<tr><td>treat</td><td>обращаться (с кем-то)</td></tr>
<tr><td>earn trust</td><td>заслужить доверие</td></tr>
<tr><td>frightened</td><td>испуганный</td></tr>
<tr><td>patience</td><td>терпение</td></tr>
<tr><td>responsibility</td><td>ответственность</td></tr>
<tr><td>background</td><td>происхождение; опыт</td></tr>
<tr><td>encourage</td><td>побуждать, советовать</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>Where does the person volunteer? → [[at an animal shelter|animal shelter|shelter]]</li>
<li>How often did the person go there at first? → [[once a month|monthly]]</li>
<li>Why do some dogs take time to trust people? → [[they have been badly treated|they were badly treated|badly treated]]</li>
<li>What has volunteering taught the person? → [[patience and responsibility]]</li>
<li>Why does the person recommend volunteering? → [[it has changed their life for the better|it changed their life|it changes your life]]</li>
</ol>
` },

  { id: 2103, level: "B1", category: "reading", topic: "reading-letter-friend", title: "03. A Letter to a Friend — Письмо другу", content: `
<div class="audio-placeholder" data-audio="audio/b1-letter-to-friend.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b1-letter-to-friend.mp3)</i>
</div>

<h3>English</h3>
<p>Dear Sophie,</p>
<p>How are you? I hope everything is going well. It feels like ages since we last saw each other, and I have so much to tell you.</p>
<p>I have some exciting news: I have finally moved into my new flat! It is much smaller than my old place, but it is cosy and close to the city centre. The best part is the balcony, where I can sit in the mornings and drink coffee. Of course, moving was not easy. I had to pack all my things, and I discovered that I had collected far too much over the years. I ended up giving away four boxes of books and old clothes.</p>
<p>Work is going well too. Last month, my manager asked me to lead a small project team. I was nervous at first, but it has been a great experience. I have learnt how to organise meetings and support my colleagues when they need help.</p>
<p>Anyway, I would love to hear your news. Why don't you come and visit me next month? There is a spare room in the flat, and I have already found a lovely café near my place. Let me know when you are free.</p>
<p>Lots of love,<br>Emma</p>

<h3>Перевод</h3>
<p>Дорогая Софи,</p>
<p>Как ты? Надеюсь, всё идёт хорошо. Кажется, прошла целая вечность с тех пор, как мы последний раз виделись, и мне так много нужно тебе рассказать.</p>
<p>У меня есть волнующие новости: я наконец переехала в новую квартиру! Она намного меньше моей старой, но уютная и близко к центру города. Лучшее — это балкон, где я могу сидеть по утрам и пить кофе. Конечно, переезд был нелёгким. Мне пришлось упаковать все свои вещи, и я обнаружила, что за эти годы накопила слишком много. В итоге я отдала четыре коробки книг и старой одежды.</p>
<p>Работа тоже идёт хорошо. В прошлом месяце менеджер попросил меня возглавить небольшую команду проекта. Сначала я нервничала, но это оказался отличный опыт. Я научилась организовывать встречи и поддерживать коллег, когда им нужна помощь.</p>
<p>В общем, мне очень хочется услышать твои новости. Почему бы тебе не приехать ко мне в следующем месяце? В квартире есть свободная комната, и я уже нашла милое кафе рядом с домом. Дай знать, когда ты свободна.</p>
<p>С любовью,<br>Эмма</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>it feels like ages</td><td>кажется, прошла целая вечность</td></tr>
<tr><td>cosy</td><td>уютный</td></tr>
<tr><td>pack</td><td>упаковывать</td></tr>
<tr><td>end up</td><td>в итоге оказаться (где-то/с чем-то)</td></tr>
<tr><td>give away</td><td>отдавать</td></tr>
<tr><td>lead a team</td><td>возглавлять команду</td></tr>
<tr><td>nervous</td><td>нервничать</td></tr>
<tr><td>support</td><td>поддерживать</td></tr>
<tr><td>spare room</td><td>свободная комната</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>Who wrote the letter and to whom? → [[Emma wrote to Sophie|Emma to Sophie|Emma, Sophie]]</li>
<li>What is the best part of the new flat? → [[the balcony]]</li>
<li>What did Emma give away? → [[four boxes of books and old clothes|books and old clothes]]</li>
<li>What did her manager ask her to do? → [[lead a small project team|lead a project team|lead a team]]</li>
<li>Why does Emma invite Sophie? → [[there is a spare room and a nice café|to visit her|to see the new flat]]</li>
</ol>

<h3>Exercise — True or False</h3>
<ol>
<li>The new flat is bigger than the old one. → [[False]]</li>
<li>Emma gave away some books. → [[True]]</li>
<li>Emma found leading the team easy from the start. → [[False]]</li>
</ol>
` },

  { id: 2104, level: "B1", category: "reading", topic: "reading-little-cafe", title: "04. The Little Café — Маленькое кафе", content: `
<div class="audio-placeholder" data-audio="audio/b1-little-cafe.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b1-little-cafe.mp3)</i>
</div>

<h3>English</h3>
<p>On the corner of a quiet street in my town, there is a small café called "The Blue Door". It is not a famous place, and it does not look special from the outside. However, if you visit it once, you will probably return many times.</p>
<p>The owner, an elderly woman named Mrs. Patel, has been running the café for over twenty years. She bakes fresh cakes every morning and knows most of her customers by name. When you walk in, she smiles as if you are an old friend. There are only six tables, and the decoration has not changed since the 1990s. Somehow, this makes the café feel even more comfortable.</p>
<p>What I like most about "The Blue Door" is the atmosphere. People go there to read, write, or simply escape from their busy lives for an hour. Nobody rushes you. You can order one cup of tea and sit for the whole afternoon without feeling guilty.</p>
<p>In a world where everything is becoming faster and more digital, places like this café are becoming rare. I am grateful that Mrs. Patel has kept her little world exactly the way it is.</p>

<h3>Перевод</h3>
<p>На углу тихой улицы в моём городке есть маленькое кафе под названием «Голубая дверь». Это не известное место, и снаружи оно не выглядит особенным. Однако если вы зайдёте туда однажды, скорее всего, вы вернётесь много раз.</p>
<p>Владелица, пожилая женщина по имени миссис Патель, управляет кафе более двадцати лет. Она печёт свежие торты каждое утро и знает большинство клиентов по имени. Когда вы входите, она улыбается так, будто вы — старый друг. Там всего шесть столиков, и обстановка не менялась с 1990-х. Почему-то это делает кафе ещё более уютным.</p>
<p>Больше всего в «Голубой двери» мне нравится атмосфера. Люди приходят туда читать, писать или просто на час убежать от суетливой жизни. Никто вас не торопит. Вы можете заказать одну чашку чая и просидеть весь день, не чувствуя вины.</p>
<p>В мире, где всё становится быстрее и цифровее, такие кафе становятся редкостью. Я благодарен миссис Патель за то, что она сохранила свой маленький мир точно таким, какой он есть.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>owner</td><td>владелец</td></tr>
<tr><td>run a business</td><td>управлять делом</td></tr>
<tr><td>bake</td><td>печь</td></tr>
<tr><td>decoration</td><td>оформление, убранство</td></tr>
<tr><td>atmosphere</td><td>атмосфера</td></tr>
<tr><td>escape</td><td>убегать, спасаться</td></tr>
<tr><td>rush</td><td>торопить</td></tr>
<tr><td>guilty</td><td>виноватый</td></tr>
<tr><td>rare</td><td>редкий</td></tr>
<tr><td>grateful</td><td>благодарный</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What is the café called? → [[The Blue Door]]</li>
<li>How long has Mrs. Patel run it? → [[over twenty years|more than twenty years|20 years]]</li>
<li>How many tables are there? → [[six|6]]</li>
<li>What can people do in the café? → [[read, write, or escape from their busy lives|read and write|relax]]</li>
<li>Why are such cafés becoming rare? → [[the world is becoming faster and more digital|everything is becoming faster|modern life]]</li>
</ol>
` },

  { id: 2105, level: "B1", category: "reading", topic: "reading-habits", title: "05. The Power of Small Habits — Сила маленьких привычек", content: `
<div class="audio-placeholder" data-audio="audio/b1-power-of-habits.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b1-power-of-habits.mp3)</i>
</div>

<h3>English</h3>
<p>Many people believe that big changes require big actions. However, researchers have found that small habits, repeated consistently, can have a surprising effect on our lives.</p>
<p>Imagine that you want to read more. Instead of promising to read a book every week, you could start by reading just five pages a day. This goal is so easy that you cannot really fail. After a month, you will have read about 150 pages, and reading will have become a natural part of your daily routine.</p>
<p>The same principle applies to exercise, learning a language or saving money. Small actions are easier to repeat, and repetition is what builds lasting change. Our brains are designed to save energy, so they prefer familiar behaviours. The key is to make the new habit so simple that it does not feel like a challenge.</p>
<p>Another useful idea is to connect a new habit to an existing one. For example, you could drink a glass of water every time you make coffee. Over time, the two actions become linked, and you do not need to rely on willpower.</p>
<p>Changing your life does not happen overnight. But if you are patient and consistent, small habits can quietly lead you to big results.</p>

<h3>Перевод</h3>
<p>Многие люди считают, что большие изменения требуют больших действий. Однако исследователи обнаружили, что маленькие привычки, повторяемые последовательно, могут оказывать удивительное влияние на нашу жизнь.</p>
<p>Представьте, что вы хотите больше читать. Вместо того чтобы обещать себе читать книгу каждую неделю, начните с пяти страниц в день. Эта цель настолько проста, что вы практически не можете её не достичь. Через месяц вы прочтёте около 150 страниц, и чтение станет естественной частью вашей повседневности.</p>
<p>Тот же принцип применим к спорту, изучению языка или накоплению денег. Маленькие действия легче повторять, а именно повторение создаёт устойчивые перемены. Наш мозг устроен так, чтобы экономить энергию, поэтому он предпочитает знакомое поведение. Главное — сделать новую привычку настолько простой, чтобы она не воспринималась как вызов.</p>
<p>Ещё одна полезная идея — связать новую привычку с уже существующей. Например, вы можете выпивать стакан воды каждый раз, когда варите кофе. Со временем эти два действия связываются, и вам уже не нужно полагаться на силу воли.</p>
<p>Изменение жизни не происходит за одну ночь. Но если вы терпеливы и последовательны, маленькие привычки могут тихо привести вас к большим результатам.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>consistently</td><td>последовательно, постоянно</td></tr>
<tr><td>effect</td><td>эффект, влияние</td></tr>
<tr><td>fail</td><td>потерпеть неудачу</td></tr>
<tr><td>routine</td><td>распорядок; рутина</td></tr>
<tr><td>principle</td><td>принцип</td></tr>
<tr><td>lasting change</td><td>устойчивые перемены</td></tr>
<tr><td>behaviour</td><td>поведение</td></tr>
<tr><td>rely on</td><td>полагаться на</td></tr>
<tr><td>willpower</td><td>сила воли</td></tr>
<tr><td>overnight</td><td>за одну ночь</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What do many people believe about change? → [[it requires big actions|big changes require big actions|big actions]]</li>
<li>What example of a small goal is given? → [[reading five pages a day|five pages a day]]</li>
<li>Why does the brain prefer familiar behaviours? → [[to save energy|it saves energy]]</li>
<li>How can you connect a new habit to an existing one? → [[drink water when making coffee|drink a glass of water every time you make coffee]]</li>
<li>What is the main message of the text? → [[small habits lead to big results|small habits matter|consistency matters]]</li>
</ol>
` },

  { id: 2106, level: "B1", category: "reading", topic: "reading-plastic-problem", title: "06. A World Without Plastic? — Мир без пластика?", content: `
<div class="audio-placeholder" data-audio="audio/b1-world-without-plastic.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b1-world-without-plastic.mp3)</i>
</div>

<h3>English</h3>
<p>Every year, millions of tons of plastic end up in the oceans. Marine animals often mistake small pieces of plastic for food, and this causes serious health problems. Environmental groups warn that unless we change our habits, the amount of plastic in the sea will continue to grow.</p>
<p>However, the problem is not only about plastic itself. Many everyday products are wrapped in plastic that we throw away after using them only once. Supermarkets, for example, sell vegetables in plastic packaging, even though nature has already provided them with their own skin. Shops could offer paper bags, and customers could bring their own containers.</p>
<p>Some governments have introduced taxes on single-use plastic bags. In several countries, this simple measure has reduced plastic waste by more than fifty percent. Other governments encourage companies to use recyclable materials and to design products that last longer.</p>
<p>As consumers, we can also make a difference. Small actions, such as carrying a reusable bottle or refusing a plastic straw, may seem unimportant on their own. But if millions of people change their habits, the effect will be enormous. The planet does not need a few people who do everything perfectly. It needs millions of people who do something, even imperfectly.</p>

<h3>Перевод</h3>
<p>Каждый год миллионы тонн пластика попадают в океаны. Морские животные часто путают мелкие кусочки пластика с едой, и это вызывает серьёзные проблемы со здоровьем. Экологические организации предупреждают, что если мы не изменим свои привычки, количество пластика в море продолжит расти.</p>
<p>Однако проблема не только в самом пластике. Многие повседневные товары завёрнуты в пластик, который выбрасывают после единственного использования. Супермаркеты, например, продают овощи в пластиковой упаковке, хотя природа уже дала им собственную кожуру. Магазины могли бы предлагать бумажные пакеты, а покупатели — приносить свои контейнеры.</p>
<p>Некоторые правительства ввели налог на одноразовые пластиковые пакеты. В ряде стран эта простая мера сократила пластиковые отходы более чем на пятьдесят процентов. Другие правительства поощряют компании использовать перерабатываемые материалы и создавать товары, которые служат дольше.</p>
<p>Как потребители, мы тоже можем внести свой вклад. Маленькие действия — например, носить многоразовую бутылку или отказываться от пластиковой трубочки — по отдельности могут показаться незначительными. Но если миллионы людей изменят свои привычки, эффект будет огромным. Планете не нужны несколько человек, которые делают всё идеально. Ей нужны миллионы людей, которые делают хоть что-то, даже несовершенно.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>marine</td><td>морской</td></tr>
<tr><td>mistake A for B</td><td>принимать A за B</td></tr>
<tr><td>environmental</td><td>экологический</td></tr>
<tr><td>warn</td><td>предупреждать</td></tr>
<tr><td>wrap</td><td>заворачивать</td></tr>
<tr><td>packaging</td><td>упаковка</td></tr>
<tr><td>single-use</td><td>одноразовый</td></tr>
<tr><td>measure</td><td>мера</td></tr>
<tr><td>recyclable</td><td>перерабатываемый</td></tr>
<tr><td>reusable</td><td>многоразовый</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What happens to plastic in the oceans? → [[marine animals mistake it for food|animals eat it|animals mistake it for food]]</li>
<li>Why is plastic packaging a problem for vegetables? → [[nature already provided them with their own skin|it is unnecessary|vegetables have skin]]</li>
<li>What happened after taxes on plastic bags? → [[plastic waste dropped by more than 50%|waste reduced|plastic waste reduced]]</li>
<li>What can consumers do? → [[carry a reusable bottle and refuse plastic straws|small actions]]</li>
<li>What is the main idea? → [[millions of people doing small things matters|small actions matter|collective action]]</li>
</ol>
` },

  // ============================================================
  // B2 READING — файлы в папке audio/
  // ============================================================
  { id: 3101, level: "B2", category: "reading", topic: "reading-future-of-work", title: "01. The Future of Work — Будущее работы", content: `
<div class="audio-placeholder" data-audio="audio/b2-future-of-work.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b2-future-of-work.mp3)</i>
</div>

<h3>English</h3>
<p>The nature of work is changing more rapidly than at any point in modern history. Automation, artificial intelligence and remote technologies are reshaping not only what we do, but also how, when and where we do it. Some predict a future in which millions of traditional jobs disappear, while others argue that new roles will emerge to replace them.</p>
<p>What is clear is that the skills employers value are shifting. Routine tasks are increasingly performed by machines, whereas creativity, critical thinking, emotional intelligence and adaptability are becoming more valuable than ever. In other words, the ability to keep learning may prove more important than any specific qualification.</p>
<p>Remote work has also transformed expectations. Many employees now prioritise flexibility over a higher salary, and companies that refuse to offer hybrid arrangements risk losing talented staff. At the same time, remote work can blur the boundary between professional and personal life, leading to burnout if not managed carefully.</p>
<p>Another concern is inequality. Highly skilled professionals can benefit enormously from global competition, whereas those without digital skills may find themselves increasingly excluded. Governments and educators therefore face a difficult task: preparing people not just for the jobs of today, but for those that do not yet exist.</p>
<p>Ultimately, the future of work is not predetermined. It will depend on the choices made by companies, policymakers and workers themselves. The question is not whether work will change, but whether we can shape that change to benefit the many, not just the few.</p>

<h3>Перевод</h3>
<p>Природа работы меняется быстрее, чем когда-либо в современной истории. Автоматизация, искусственный интеллект и удалённые технологии меняют не только то, что мы делаем, но и как, когда и где. Некоторые предсказывают будущее, в котором исчезнут миллионы традиционных рабочих мест, другие утверждают, что появятся новые роли им на замену.</p>
<p>Ясно одно: навыки, которые ценят работодатели, меняются. Рутинные задачи всё чаще выполняют машины, тогда как креативность, критическое мышление, эмоциональный интеллект и адаптивность становятся ценнее, чем когда-либо. Иными словами, способность постоянно учиться может оказаться важнее любой конкретной квалификации.</p>
<p>Удалённая работа также изменила ожидания. Многие сотрудники теперь предпочитают гибкость более высокой зарплате, и компании, отказывающиеся предлагать гибридный формат, рискуют потерять талантливых специалистов. При этом удалённая работа может размыть границу между профессиональной и личной жизнью, что при неаккуратном управлении приводит к выгоранию.</p>
<p>Ещё одна проблема — неравенство. Высококвалифицированные специалисты могут много выиграть от глобальной конкуренции, тогда как люди без цифровых навыков рискуют оказаться всё более исключёнными. Поэтому перед правительствами и преподавателями стоит трудная задача: готовить людей не только к сегодняшним профессиям, но и к тем, которые ещё не существуют.</p>
<p>В конечном счёте будущее работы не предопределено. Оно будет зависеть от решений компаний, политиков и самих работников. Вопрос не в том, изменится ли работа, а в том, сможем ли мы направить эти изменения на пользу многим, а не только избранным.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>reshape</td><td>перекраивать, менять форму</td></tr>
<tr><td>emerge</td><td>появляться</td></tr>
<tr><td>employer</td><td>работодатель</td></tr>
<tr><td>adaptability</td><td>адаптивность</td></tr>
<tr><td>qualification</td><td>квалификация</td></tr>
<tr><td>hybrid arrangements</td><td>гибридный формат (офис+дом)</td></tr>
<tr><td>burnout</td><td>выгорание</td></tr>
<tr><td>inequality</td><td>неравенство</td></tr>
<tr><td>exclude</td><td>исключать</td></tr>
<tr><td>predetermined</td><td>предопределённый</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What forces are reshaping work? → [[automation, AI and remote technologies|automation and AI|technology]]</li>
<li>Which skills are becoming more valuable? → [[creativity, critical thinking, emotional intelligence, adaptability]]</li>
<li>What do many employees now prefer? → [[flexibility over a higher salary|flexibility]]</li>
<li>What is the risk of unmanaged remote work? → [[burnout]]</li>
<li>What is the main concern about inequality? → [[those without digital skills may be excluded|digital skills gap|people without digital skills]]</li>
</ol>
` },

  { id: 3102, level: "B2", category: "reading", topic: "reading-cultural-shock", title: "02. Coping with Culture Shock — Преодоление культурного шока", content: `
<div class="audio-placeholder" data-audio="audio/b2-culture-shock.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b2-culture-shock.mp3)</i>
</div>

<h3>English</h3>
<p>When people move to a new country, they often expect to feel excited. However, after the initial enthusiasm fades, many experience what psychologists call "culture shock". This phenomenon is not a sign of weakness; it is a natural reaction to losing the familiar frameworks that once guided everyday behaviour.</p>
<p>Culture shock typically unfolds in several stages. The first is often called the "honeymoon phase", when everything seems new and fascinating. This is followed by a period of frustration, when small differences — from the way people queue to how they express disagreement — start to feel overwhelming. In the final stage, newcomers gradually adapt, developing a kind of bicultural identity: they can function comfortably in both their host culture and their own.</p>
<p>What determines how quickly someone adapts? Research suggests that personality matters, but so do practical factors. Having a supportive social network, learning the language, and maintaining connections with one's own culture all make a significant difference. Interestingly, those who try to erase their original identity tend to struggle more than those who integrate both worlds.</p>
<p>Employers increasingly recognise the value of supporting international staff through this process. Simple measures, such as mentoring programmes or informal social events, can help newcomers feel less isolated and more confident in their new environment.</p>
<p>Ultimately, culture shock is not something to be avoided. It is a sign that someone is genuinely engaging with a new reality. The discomfort is temporary; the skills and perspective gained are not.</p>

<h3>Перевод</h3>
<p>Когда люди переезжают в новую страну, они часто ожидают почувствовать воодушевление. Однако, когда первоначальный энтузиазм угасает, многие переживают то, что психологи называют «культурным шоком». Это явление не является признаком слабости; это естественная реакция на утрату знакомых ориентиров, которые когда-то направляли повседневное поведение.</p>
<p>Культурный шок обычно разворачивается в несколько этапов. Первый часто называют «фазой медового месяца», когда всё кажется новым и увлекательным. За ним следует период разочарования, когда мелкие различия — от того, как люди стоят в очереди, до того, как они выражают несогласие — начинают казаться непосильными. На последней стадии новички постепенно адаптируются, формируя бикультурную идентичность: они могут комфортно существовать как в принимающей культуре, так и в своей.</p>
<p>Что определяет скорость адаптации? Исследования показывают, что важна личность, но важны и практические факторы. Поддерживающая социальная сеть, изучение языка и сохранение связей со своей культурой имеют большое значение. Интересно, что те, кто пытается стереть свою изначальную идентичность, обычно справляются труднее, чем те, кто интегрирует оба мира.</p>
<p>Работодатели всё чаще признают ценность поддержки иностранных сотрудников в этом процессе. Простые меры, например программы наставничества или неформальные встречи, помогают новичкам чувствовать себя менее изолированными и более уверенными в новой среде.</p>
<p>В конечном итоге культурный шок — это не то, чего следует избегать. Это признак того, что человек по-настоящему взаимодействует с новой реальностью. Дискомфорт временен; навыки и перспективы, полученные в процессе, — нет.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>initial</td><td>первоначальный</td></tr>
<tr><td>fade</td><td>угасать</td></tr>
<tr><td>weakness</td><td>слабость</td></tr>
<tr><td>framework</td><td>структура, рамки</td></tr>
<tr><td>honeymoon phase</td><td>фаза медового месяца</td></tr>
<tr><td>overwhelming</td><td>непосильный, ошеломляющий</td></tr>
<tr><td>adapt</td><td>адаптироваться</td></tr>
<tr><td>identity</td><td>идентичность</td></tr>
<tr><td>integrate</td><td>интегрировать</td></tr>
<tr><td>isolated</td><td>изолированный</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What is culture shock? → [[a natural reaction to losing familiar frameworks|natural reaction]]</li>
<li>What are the three stages described? → [[honeymoon, frustration, adaptation|honeymoon frustration adaptation]]</li>
<li>Which newcomers tend to struggle more? → [[those who try to erase their original identity|those who erase their identity]]</li>
<li>What can employers do to help? → [[mentoring programmes or social events|support international staff|mentoring]]</li>
<li>How does the author view culture shock? → [[not to be avoided|temporary, valuable|something to engage with]]</li>
</ol>
` },

  { id: 3103, level: "B2", category: "reading", topic: "reading-benefits-of-reading", title: "03. The Case for Reading — В защиту чтения", content: `
<div class="audio-placeholder" data-audio="audio/b2-case-for-reading.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b2-case-for-reading.mp3)</i>
</div>

<h3>English</h3>
<p>In an age dominated by screens and constant notifications, the habit of reading long-form texts seems to be in decline. Yet a growing body of research suggests that reading offers benefits that no other activity can replicate.</p>
<p>First, reading fiction appears to strengthen empathy. When we follow characters through their struggles, we are essentially practising the skill of imagining another person's inner life. Studies have shown that regular readers of literary fiction score higher on tests measuring the ability to understand others' emotions. In a divided world, this capacity may be more valuable than ever.</p>
<p>Reading also improves focus. Unlike social media, which trains the brain to switch attention rapidly, a book requires sustained concentration. This ability to focus deeply on a single task has become increasingly rare — and increasingly valuable — in the modern workplace.</p>
<p>Some critics argue that reading is an outdated and even elitist activity. They point out that information is now available instantly, so why spend hours on a single book? But this argument misunderstands what reading is for. Reading is not merely a way of transferring information; it is a way of slowing down thought, of living inside another person's perspective, of discovering that complex ideas require patience.</p>
<p>Perhaps that is why so many successful people, from scientists to entrepreneurs, describe reading as a lifelong habit. In a world that rewards speed, the slow, deliberate act of reading might be one of the most subversive things we can do.</p>

<h3>Перевод</h3>
<p>В век, где господствуют экраны и постоянные уведомления, привычка читать длинные тексты, кажется, идёт на спад. Однако всё больше исследований свидетельствуют о том, что чтение даёт преимущества, которые не может воспроизвести ни одна другая деятельность.</p>
<p>Во-первых, чтение художественной литературы, по-видимому, укрепляет эмпатию. Когда мы следим за персонажами через их трудности, мы по сути тренируем навык воображать внутреннюю жизнь другого человека. Исследования показывают, что постоянные читатели литературной прозы набирают больше баллов в тестах на способность понимать чужие эмоции. В разделённом мире эта способность может быть ценнее, чем когда-либо.</p>
<p>Чтение также улучшает концентрацию. В отличие от соцсетей, которые приучают мозг быстро переключать внимание, книга требует устойчивой сосредоточенности. Эта способность глубоко фокусироваться на одной задаче стала всё более редкой — и всё более ценной — на современном рабочем месте.</p>
<p>Некоторые критики утверждают, что чтение — устаревшее и даже элитарное занятие. Они указывают, что информация теперь доступна мгновенно, так зачем тратить часы на одну книгу? Но этот аргумент неверно понимает, для чего нужно чтение. Чтение — не просто способ передачи информации; это способ замедлить мысль, пожить внутри чужой перспективы, обнаружить, что сложные идеи требуют терпения.</p>
<p>Возможно, именно поэтому многие успешные люди — от учёных до предпринимателей — называют чтение привычкой на всю жизнь. В мире, который вознаграждает скорость, медленный, осознанный акт чтения может быть одним из самых подрывных действий, которые мы можем совершить.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>dominate</td><td>господствовать</td></tr>
<tr><td>decline</td><td>спад, упадок</td></tr>
<tr><td>replicate</td><td>воспроизводить</td></tr>
<tr><td>empathy</td><td>эмпатия, сочувствие</td></tr>
<tr><td>capacity</td><td>способность</td></tr>
<tr><td>sustained concentration</td><td>устойчивая концентрация</td></tr>
<tr><td>outdated</td><td>устаревший</td></tr>
<tr><td>elitist</td><td>элитарный</td></tr>
<tr><td>perspective</td><td>перспектива, точка зрения</td></tr>
<tr><td>subversive</td><td>подрывной</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What does reading fiction seem to strengthen? → [[empathy]]</li>
<li>How does reading differ from social media? → [[it requires sustained concentration|sustained focus]]</li>
<li>What do critics of reading claim? → [[it is outdated and elitist|outdated]]</li>
<li>What does the author say reading really is? → [[a way of slowing down thought|not just information transfer|a way of slowing thought]]</li>
<li>What is the author's overall stance? → [[reading is more valuable than ever|reading is valuable|in defence of reading]]</li>
</ol>
` },

  { id: 3104, level: "B2", category: "reading", topic: "reading-privacy-tech", title: "04. Privacy in the Digital Age — Приватность в цифровую эпоху", content: `
<div class="audio-placeholder" data-audio="audio/b2-privacy-digital-age.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b2-privacy-digital-age.mp3)</i>
</div>

<h3>English</h3>
<p>Every time we open an app, search the web or even walk down the street with a smartphone in our pocket, we leave a trail of data. Companies collect this information to personalise services, target advertising and improve their products. On the surface, this seems like a fair exchange: we give up some data, and in return we receive convenience.</p>
<p>However, the scale of this exchange is greater than most people realise. The average user interacts with dozens of apps and services each day, and the terms of service they agree to are often impossible to read in full. A single click can grant access to location, contacts, microphone and much more. Few users understand exactly what they have consented to.</p>
<p>The consequences extend beyond targeted advertising. Insurance companies may use health data to adjust premiums. Employers might check social media before hiring. Governments in some countries monitor communications on a massive scale. Individually, these practices may seem justified; collectively, they create a society in which being watched becomes the default.</p>
<p>Some argue that privacy is dead and that we should simply accept it. But this resignation is dangerous. Privacy is not about hiding wrongdoing; it is about maintaining personal autonomy. Without it, individuals may begin to censor themselves, avoid legitimate activities and lose trust in institutions.</p>
<p>Meaningful reform is possible, but it requires both regulatory action and individual awareness. Companies should be required to explain their practices in plain language. Users should be able to choose without losing access to essential services. And societies should debate openly what kind of digital world they actually want.</p>

<h3>Перевод</h3>
<p>Каждый раз, когда мы открываем приложение, ищем в интернете или даже идём по улице со смартфоном в кармане, мы оставляем след из данных. Компании собирают эту информацию, чтобы персонализировать сервисы, нацеливать рекламу и улучшать свои продукты. На первый взгляд это выглядит справедливым обменом: мы отдаём часть данных и взамен получаем удобство.</p>
<p>Однако масштаб этого обмена больше, чем большинство людей осознают. Средний пользователь взаимодействует с десятками приложений и сервисов в день, а условия использования, которые он принимает, часто невозможно прочитать целиком. Один клик может предоставить доступ к местоположению, контактам, микрофону и многому другому. Мало кто понимает, на что именно он дал согласие.</p>
<p>Последствия выходят за рамки таргетированной рекламы. Страховые компании могут использовать данные о здоровье для корректировки тарифов. Работодатели могут проверять соцсети перед наймом. Правительства в некоторых странах следят за коммуникациями в массовом масштабе. По отдельности эти практики могут казаться оправданными; в совокупности они создают общество, в котором наблюдение становится нормой.</p>
<p>Некоторые утверждают, что приватность мертва и нам просто следует это принять. Но эта смиренность опасна. Приватность — не про сокрытие проступков; она про личную автономию. Без неё люди могут начать цензурировать себя, избегать законных занятий и терять доверие к институтам.</p>
<p>Реальная реформа возможна, но она требует как регулирующих действий, так и осознанности самих людей. Компании должны быть обязаны объяснять свои практики простым языком. Пользователи должны иметь возможность выбора, не теряя доступа к необходимым сервисам. А общества должны открыто обсуждать, какой цифровой мир они на самом деле хотят.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>trail of data</td><td>след данных</td></tr>
<tr><td>target advertising</td><td>нацеливать рекламу</td></tr>
<tr><td>terms of service</td><td>условия использования</td></tr>
<tr><td>consent</td><td>согласие</td></tr>
<tr><td>consequence</td><td>последствие</td></tr>
<tr><td>premium</td><td>страховой взнос</td></tr>
<tr><td>surveillance</td><td>наблюдение, слежка</td></tr>
<tr><td>default</td><td>норма, состояние по умолчанию</td></tr>
<tr><td>resignation</td><td>смирение</td></tr>
<tr><td>legitimate</td><td>законный</td></tr>
<tr><td>reform</td><td>реформа</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What do companies do with user data? → [[personalise services, target ads, improve products]]</li>
<li>What does a single click on many apps do? → [[grant access to location, contacts, microphone|grant access]]</li>
<li>Give one example of consequences beyond advertising. → [[insurance premiums, hiring checks, government surveillance]]</li>
<li>Why is the idea that "privacy is dead" dangerous? → [[individuals may censor themselves|it undermines autonomy|it's dangerous]]</li>
<li>What does the author propose? → [[regulatory action and individual awareness|reform and awareness]]</li>
</ol>
` },

  { id: 3105, level: "B2", category: "reading", topic: "reading-learning-failure", title: "05. The Value of Failure — Ценность неудачи", content: `
<div class="audio-placeholder" data-audio="audio/b2-value-of-failure.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b2-value-of-failure.mp3)</i>
</div>

<h3>English</h3>
<p>In many cultures, failure is treated as something shameful. Children are taught to avoid mistakes, and adults are encouraged to present only their successes to the world. Yet a growing number of psychologists, educators and entrepreneurs argue that this attitude is not only unhelpful — it is actively harmful.</p>
<p>Consider the way we learn to walk. No child succeeds on the first attempt. Falling is an essential part of the process. Somehow, as we grow up, we forget this simple truth. We begin to treat failure as a verdict on our abilities rather than as information about what to try next.</p>
<p>Research on learning supports this view. Studies show that students who are praised for their effort, rather than for their intelligence, are more willing to tackle difficult problems. Those praised for being "smart" tend to avoid challenges, because they fear that failure will undermine the identity they have been given.</p>
<p>Some of the most successful innovators in history have failed repeatedly. Thomas Edison famously remarked that he had not failed; he had found ten thousand ways that did not work. More recently, many celebrated entrepreneurs describe their first companies as essential learning experiences.</p>
<p>None of this means that failure is pleasant. It is not. But the difference between those who grow and those who stagnate often lies in how they interpret setbacks. If we can learn to treat failure as a teacher rather than a judge, we may find that it becomes one of our most valuable allies.</p>

<h3>Перевод</h3>
<p>Во многих культурах неудача воспринимается как нечто постыдное. Детей учат избегать ошибок, а взрослых поощряют показывать миру только свои успехи. Однако всё больше психологов, педагогов и предпринимателей утверждают, что такое отношение не только не помогает — оно активно вредит.</p>
<p>Вспомните, как мы учимся ходить. Ни один ребёнок не достигает успеха с первой попытки. Падение — важная часть процесса. Почему-то, взрослея, мы забываем эту простую истину. Мы начинаем относиться к неудаче как к приговору нашим способностям, а не как к информации о том, что попробовать дальше.</p>
<p>Исследования в области обучения подтверждают эту точку зрения. Учёные показывают, что ученики, которых хвалят за усилия, а не за интеллект, более охотно берутся за трудные задачи. Тех же, кого хвалят за то, что они «умные», склонны избегать вызовов, потому что боятся, что провал подорвёт данную им идентичность.</p>
<p>Некоторые из самых успешных новаторов в истории проваливались неоднократно. Томас Эдисон заметил, что не потерпел неудачу; он нашёл десять тысяч способов, которые не работают. В последнее время многие известные предприниматели описывают свои первые компании как важнейший учебный опыт.</p>
<p>Ничто из этого не означает, что неудача приятна. Это не так. Но разница между теми, кто растёт, и теми, кто застревает, часто заключается в том, как они интерпретируют неудачи. Если мы научимся относиться к провалу как к учителю, а не как к судье, мы можем обнаружить, что он становится одним из наших самых ценных союзников.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>shameful</td><td>постыдный</td></tr>
<tr><td>attitude</td><td>отношение</td></tr>
<tr><td>essential</td><td>неотъемлемый, важный</td></tr>
<tr><td>verdict</td><td>приговор</td></tr>
<tr><td>praise</td><td>хвалить</td></tr>
<tr><td>tackle</td><td>браться за</td></tr>
<tr><td>undermine</td><td>подрывать</td></tr>
<tr><td>stagnate</td><td>застаиваться</td></tr>
<tr><td>setback</td><td>неудача, шаг назад</td></tr>
<tr><td>ally</td><td>союзник</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>How is failure often treated in many cultures? → [[as shameful|shameful]]</li>
<li>What does the walking example illustrate? → [[falling is essential to learning|failure is part of learning]]</li>
<li>Which students are more willing to face challenges? → [[those praised for effort|effort-praised]]</li>
<li>What did Edison say about his failures? → [[he found ten thousand ways that didn't work]]</li>
<li>What does the author suggest? → [[treat failure as a teacher|treat failure as teacher]]</li>
</ol>
` },

  { id: 3106, level: "B2", category: "reading", topic: "reading-media-truth", title: "06. Media and Truth — Медиа и истина", content: `
<div class="audio-placeholder" data-audio="audio/b2-media-and-truth.mp3">
  🔊 <i>Аудио: будет добавлено (audio/b2-media-and-truth.mp3)</i>
</div>

<h3>English</h3>
<p>The relationship between the media and truth has always been complicated, but in the age of social networks, it has become more complex still. Anyone with an internet connection can now publish information to a global audience, and stories can spread faster than facts can be verified.</p>
<p>This democratisation of information has obvious benefits. Ordinary citizens can document events that powerful institutions might prefer to hide. Independent journalists can reach audiences without depending on traditional gatekeepers. In many cases, this has strengthened accountability.</p>
<p>At the same time, the speed and scale of modern media create new problems. Algorithms reward engagement, not accuracy. A provocative claim will often travel further than a careful correction. False information, once released, is notoriously difficult to retract; even when it is corrected, the correction rarely reaches the same audience.</p>
<p>Some observers argue that the answer is better media literacy. If people were taught from an early age to check sources, question statistics and recognise manipulation, they would be less vulnerable to misinformation. Others argue that platforms themselves must take more responsibility, for example by labelling disputed content or slowing the spread of unverified claims.</p>
<p>What seems clear is that no single solution will be sufficient. A healthy information environment requires educated citizens, responsible platforms and credible journalism. Each of us, in other words, has a role to play — first as a reader, and then as a person who decides what to share.</p>

<h3>Перевод</h3>
<p>Отношения между медиа и истиной всегда были сложными, но в эпоху социальных сетей они стали ещё сложнее. Любой, у кого есть подключение к интернету, может теперь публиковать информацию для глобальной аудитории, а истории могут распространяться быстрее, чем удаётся проверить факты.</p>
<p>У этой демократизации информации есть очевидные плюсы. Обычные граждане могут документировать события, которые влиятельные институты предпочли бы скрыть. Независимые журналисты могут доходить до аудитории, не завися от традиционных «стражей». Во многих случаях это укрепило подотчётность.</p>
<p>В то же время скорость и масштаб современных медиа создают новые проблемы. Алгоритмы вознаграждают вовлечённость, а не точность. Провокационное утверждение часто распространяется дальше, чем аккуратная поправка. Ложную информацию, однажды выпущенную, как известно, трудно отозвать; даже когда её исправляют, исправление редко достигает той же аудитории.</p>
<p>Некоторые наблюдатели утверждают, что ответ — в лучшей медиаграмотности. Если бы людей с раннего возраста учили проверять источники, сомневаться в статистике и распознавать манипуляции, они были бы менее уязвимы к дезинформации. Другие утверждают, что сами платформы должны брать больше ответственности, например маркируя спорный контент или замедляя распространение непроверенных заявлений.</p>
<p>Ясно одно: ни одно решение не будет достаточным. Здоровая информационная среда требует образованных граждан, ответственных платформ и надёжной журналистики. Каждый из нас, иными словами, играет свою роль — сначала как читатель, а затем как человек, решающий, чем поделиться.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>verify</td><td>проверять</td></tr>
<tr><td>democratisation</td><td>демократизация</td></tr>
<tr><td>institution</td><td>институт, учреждение</td></tr>
<tr><td>gatekeeper</td><td>«страж» (контролирующий доступ)</td></tr>
<tr><td>accountability</td><td>подотчётность</td></tr>
<tr><td>engagement</td><td>вовлечённость</td></tr>
<tr><td>accuracy</td><td>точность</td></tr>
<tr><td>retract</td><td>отзывать</td></tr>
<tr><td>literacy</td><td>грамотность</td></tr>
<tr><td>misinformation</td><td>дезинформация</td></tr>
<tr><td>unverified</td><td>непроверенный</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What has changed with social networks? → [[anyone can publish and stories spread fast|information spreads fast|anyone can publish]]</li>
<li>What benefit does democratisation of information bring? → [[citizens can document hidden events|accountability|independent journalism]]</li>
<li>What do algorithms reward? → [[engagement, not accuracy|engagement]]</li>
<li>What is one proposed solution? → [[media literacy|educated citizens|labelling disputed content]]</li>
<li>What does the author think is needed? → [[educated citizens, responsible platforms, credible journalism|a combination of solutions]]</li>
</ol>
` },

  // ============================================================
  // C1 READING — файлы в папке audio/
  // ============================================================
  { id: 4101, level: "C1", category: "reading", topic: "reading-paradox-choice", title: "01. The Paradox of Choice — Парадокс выбора", content: `
<div class="audio-placeholder" data-audio="audio/c1-paradox-of-choice.mp3">
  🔊 <i>Аудио: будет добавлено (audio/c1-paradox-of-choice.mp3)</i>
</div>

<h3>English</h3>
<p>For much of human history, choice was a luxury reserved for the few. Today, it is a burden imposed on almost everyone. The average supermarket stocks tens of thousands of products; online platforms offer endless catalogues of films, books and potential partners. Conventional wisdom holds that more choice must be better, but a substantial body of psychological research suggests the opposite.</p>
<p>The psychologist Barry Schwartz famously coined the term "the paradox of choice" to describe the counterintuitive finding that an abundance of options can lead to anxiety, indecision and, ultimately, dissatisfaction. In one well-known experiment, shoppers who were offered a tasting of six jams were ten times more likely to make a purchase than those who were presented with twenty-four. Too much choice, it seems, paralyses rather than liberates.</p>
<p>There are several reasons for this. First, evaluating numerous options demands cognitive effort, and the resulting fatigue can lead people to defer decisions altogether. Second, the more alternatives we consider, the higher our expectations become, making it almost inevitable that the chosen option will fall short. Third, abundance increases the risk of regret: with so many possibilities, we can always imagine that a different choice might have been better.</p>
<p>Schwartz distinguishes between "maximisers", who strive to identify the best possible option, and "satisficers", who settle for something that is good enough. Counterintuitively, maximisers tend to be less satisfied with their decisions, even when objectively they have chosen better. The pursuit of the perfect choice, it appears, is a reliable route to unhappiness.</p>
<p>None of this implies that we should abandon choice altogether. Rather, it suggests that we might benefit from deliberately limiting our options, setting personal standards in advance and resisting the urge to keep searching once a decision has been made. In a world of infinite possibility, the greatest freedom may lie in knowing when to stop looking.</p>

<h3>Перевод</h3>
<p>На протяжении большей части человеческой истории выбор был роскошью, доступной немногим. Сегодня это бремя, возложенное почти на всех. Средний супермаркет предлагает десятки тысяч товаров; онлайн-платформы предлагают бесконечные каталоги фильмов, книг и потенциальных партнёров. Обыденная мудрость гласит, что больше выбора — всегда лучше, но значительный объём психологических исследований говорит об обратном.</p>
<p>Психолог Барри Шварц ввёл термин «парадокс выбора», чтобы описать нелогичный на первый взгляд вывод: изобилие вариантов может вести к тревоге, нерешительности и, в конечном счёте, к неудовлетворённости. В одном известном эксперименте покупатели, которым предлагали попробовать шесть сортов варенья, делали покупку в десять раз чаще, чем те, кому предлагали двадцать четыре. Слишком большой выбор, по-видимому, парализует, а не освобождает.</p>
<p>Причин тому несколько. Во-первых, оценка множества вариантов требует когнитивных усилий, и возникающая усталость может заставить людей вовсе отложить решение. Во-вторых, чем больше альтернатив мы рассматриваем, тем выше становятся наши ожидания, из-за чего выбранный вариант почти неизбежно оказывается хуже ожидаемого. В-третьих, изобилие повышает риск сожаления: при таком множестве возможностей мы всегда можем представить, что другой выбор был бы лучше.</p>
<p>Шварц различает «максимизаторов», которые стремятся найти наилучший возможный вариант, и «сатисфайсеров», которые довольствуются достаточно хорошим. В противоположность интуиции, максимизаторы, как правило, менее удовлетворены своими решениями, даже когда объективно выбрали лучше. Погоня за идеальным выбором, судя по всему, — надёжный путь к несчастью.</p>
<p>Ничто из этого не означает, что следует вовсе отказаться от выбора. Скорее, это говорит о том, что нам может пойти на пользу сознательное ограничение вариантов, установление личных стандартов заранее и сопротивление искушению продолжать искать после того, как решение принято. В мире бесконечных возможностей величайшая свобода может заключаться в умении вовремя остановиться.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>impose</td><td>навязывать</td></tr>
<tr><td>counterintuitive</td><td>противоречащий интуиции</td></tr>
<tr><td>abundance</td><td>изобилие</td></tr>
<tr><td>paralyse</td><td>парализовать</td></tr>
<tr><td>defer</td><td>откладывать</td></tr>
<tr><td>inevitable</td><td>неизбежный</td></tr>
<tr><td>fall short</td><td>не соответствовать (ожиданиям)</td></tr>
<tr><td>maximiser / satisficer</td><td>максимизатор / сатисфайсер</td></tr>
<tr><td>pursuit</td><td>погоня, стремление</td></tr>
<tr><td>deliberately</td><td>сознательно</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What did the jam experiment reveal? → [[fewer options led to more purchases|too much choice paralyses|less choice is better]]</li>
<li>Why does abundance increase the risk of regret? → [[we can always imagine a better alternative|we imagine better options]]</li>
<li>How do maximisers differ from satisficers? → [[maximisers seek the best option, satisficers settle for good enough]]</li>
<li>Who tends to be less satisfied? → [[maximisers]]</li>
<li>What does the author suggest we do? → [[limit options, set standards, stop searching once decided|deliberately limit choices]]</li>
</ol>
` },

  { id: 4102, level: "C1", category: "reading", topic: "reading-language-identity", title: "02. Language and Identity — Язык и идентичность", content: `
<div class="audio-placeholder" data-audio="audio/c1-language-and-identity.mp3">
  🔊 <i>Аудио: будет добавлено (audio/c1-language-and-identity.mp3)</i>
</div>

<h3>English</h3>
<p>Few aspects of human experience are as intimately bound up with identity as language. The words we use, the accent we carry, even the grammatical structures we take for granted, all carry subtle information about who we are and where we come from. Yet the relationship between language and identity is far from straightforward.</p>
<p>Consider the phenomenon of code-switching, in which bilingual speakers alternate between languages within a single conversation. Far from being a sign of confusion, code-switching is typically a sophisticated strategy: it allows speakers to signal solidarity with a particular group, to shift between social roles or to convey nuances that no single language can express. In this sense, multilingualism does not dilute identity; it multiplies the resources through which identity can be performed.</p>
<p>Language also plays a crucial role in the construction of national identity. Governments have long understood that a shared language can serve as a powerful unifying force, and many have pursued aggressive policies of linguistic homogenisation. Such policies, however, have often come at a devastating cost to minority communities. When a language disappears, a unique way of perceiving the world disappears with it.</p>
<p>Linguists estimate that roughly half of the world's seven thousand languages may vanish by the end of this century. Each loss diminishes our collective understanding of what human language is capable of. Encouragingly, many communities are now engaged in revitalisation efforts, from immersion schools to digital archives, in an attempt to ensure that their languages survive.</p>
<p>The debate about language is not merely academic. It touches on questions of power, justice and belonging. To speak a language is to inhabit a world; to lose one is to lose a world. If we value diversity in any meaningful sense, we must value the languages that sustain it.</p>

<h3>Перевод</h3>
<p>Мало какие аспекты человеческого опыта так тесно связаны с идентичностью, как язык. Слова, которые мы используем, акцент, который мы несём, даже грамматические структуры, которые мы воспринимаем как само собой разумеющееся, — всё это содержит тонкую информацию о том, кто мы и откуда. Однако отношения между языком и идентичностью далеко не просты.</p>
<p>Рассмотрим феномен переключения кодов, при котором двуязычные говорящие чередуют языки в рамках одной беседы. Вовсе не будучи признаком путаницы, переключение кодов обычно является изощрённой стратегией: оно позволяет говорящим сигнализировать солидарность с определённой группой, переключаться между социальными ролями или передавать нюансы, которые ни один язык не выразит. В этом смысле многоязычие не размывает идентичность; оно умножает ресурсы, через которые идентичность может быть явлена.</p>
<p>Язык также играет решающую роль в конструировании национальной идентичности. Правительства давно поняли, что общий язык может служить мощной объединяющей силой, и многие проводили агрессивную политику языковой гомогенизации. Однако такая политика часто обходилась страшной ценой для сообществ меньшинств. Когда язык исчезает, вместе с ним исчезает и уникальный способ восприятия мира.</p>
<p>Лингвисты оценивают, что примерно половина из семи тысяч языков мира может исчезнуть к концу этого столетия. Каждая утрата обедняет наше коллективное понимание того, на что способен человеческий язык. Обнадёживает то, что многие сообщества сейчас занимаются ревитализацией — от школ погружения до цифровых архивов — в попытке обеспечить выживание своих языков.</p>
<p>Спор о языке — не просто академический. Он касается вопросов власти, справедливости и принадлежности. Говорить на языке — значит населять мир; потерять его — значит потерять мир. Если мы ценим разнообразие в сколько-нибудь осмысленном смысле, мы должны ценить языки, которые его поддерживают.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>intimately bound up</td><td>тесно связан</td></tr>
<tr><td>take for granted</td><td>воспринимать как должное</td></tr>
<tr><td>code-switching</td><td>переключение кодов</td></tr>
<tr><td>solidarity</td><td>солидарность</td></tr>
<tr><td>convey</td><td>передавать</td></tr>
<tr><td>nuance</td><td>нюанс, оттенок</td></tr>
<tr><td>dilute</td><td>размывать</td></tr>
<tr><td>homogenisation</td><td>гомогенизация</td></tr>
<tr><td>devastating</td><td>разрушительный</td></tr>
<tr><td>revitalisation</td><td>ревитализация, оживление</td></tr>
<tr><td>inhabit</td><td>населять</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What is code-switching? → [[alternating between languages in one conversation|alternating languages]]</li>
<li>How does the author view multilingualism? → [[it multiplies resources for identity|it enriches identity]]</li>
<li>What is the cost of aggressive homogenisation? → [[devastating for minority communities|languages disappear|minority loss]]</li>
<li>What is happening to the world's languages? → [[about half may vanish this century|half may vanish]]</li>
<li>What does the author argue? → [[diversity requires valuing languages|we must value languages]]</li>
</ol>
` },

  { id: 4103, level: "C1", category: "reading", topic: "reading-rethinking-education", title: "03. Rethinking Education — Переосмысляя образование", content: `
<div class="audio-placeholder" data-audio="audio/c1-rethinking-education.mp3">
  🔊 <i>Аудио: будет добавлено (audio/c1-rethinking-education.mp3)</i>
</div>

<h3>English</h3>
<p>The modern school system, with its rows of desks, standardised tests and division of knowledge into discrete subjects, is a surprisingly recent invention. It emerged in the nineteenth century to meet the needs of industrial society: punctuality, obedience and the ability to perform repetitive tasks. Whatever its merits, it was never designed for the world we now inhabit.</p>
<p>Critics argue that today's education systems remain stubbornly industrial in spirit. Children are still sorted by age, taught in batches and assessed largely on their capacity to memorise information. The implicit message, as the education theorist Sir Ken Robinson famously observed, is that the most important thing is to get the right answer — which is precisely the wrong lesson in a world that rewards creativity, adaptability and problem-solving.</p>
<p>Defenders of traditional education counter that structure and discipline are valuable in themselves. Learning to follow instructions, they argue, is not the same as being passive; it is a prerequisite for any sustained intellectual work. Moreover, standardised assessment, for all its limitations, provides a transparent means of comparing outcomes and identifying underperforming schools.</p>
<p>Both positions contain important truths. The challenge is to design systems that cultivate curiosity without sacrificing rigour, that value collaboration without abandoning individual accountability. Some schools have experimented with project-based learning, mixed-age classrooms and reduced testing. The results have been mixed, but they suggest that meaningful reform is possible.</p>
<p>Ultimately, the debate about education is a debate about what kind of society we want. If we want citizens who can think critically, work collaboratively and adapt to constant change, our schools must reflect these priorities. It is not enough to tinker with the curriculum; we may need to rethink the fundamental assumptions on which our educational institutions were built.</p>

<h3>Перевод</h3>
<p>Современная школьная система с рядами парт, стандартизированными тестами и разделением знания на отдельные предметы — изобретение на удивление недавнее. Она возникла в XIX веке, чтобы соответствовать нуждам индустриального общества: пунктуальность, послушание и способность выполнять повторяющиеся задачи. Как бы то ни было, она никогда не была задумана для мира, в котором мы живём сегодня.</p>
<p>Критики утверждают, что сегодняшние образовательные системы остаются упорно индустриальными по духу. Детей всё ещё делят по возрасту, обучают партиями и оценивают в основном по способности запоминать информацию. Неявное послание, как метко заметил теоретик образования сэр Кен Робинсон, состоит в том, что важнее всего — дать правильный ответ. А это как раз не тот урок, который нужен миру, вознаграждающему творчество, адаптивность и умение решать проблемы.</p>
<p>Защитники традиционного образования возражают, что структура и дисциплина ценны сами по себе. Учиться следовать инструкциям, утверждают они, — не то же самое, что быть пассивным; это предпосылка любой продолжительной интеллектуальной работы. Более того, стандартизированная оценка, при всех её ограничениях, обеспечивает прозрачный способ сравнивать результаты и выявлять слабые школы.</p>
<p>Обе позиции содержат важную правду. Задача — разработать системы, которые культивируют любопытство, не жертвуя строгостью, ценят сотрудничество, не отказываясь от индивидуальной ответственности. Некоторые школы экспериментировали с проектным обучением, разновозрастными классами и сокращением тестирования. Результаты были неоднозначными, но они показывают, что осмысленная реформа возможна.</p>
<p>В конечном счёте спор об образовании — это спор о том, какое общество мы хотим. Если мы хотим граждан, способных критически мыслить, работать совместно и адаптироваться к постоянным изменениям, наши школы должны отражать эти приоритеты. Недостаточно подправлять учебный план; возможно, нам придётся переосмыслить фундаментальные допущения, на которых построены наши образовательные институты.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>discrete</td><td>отдельный, дискретный</td></tr>
<tr><td>punctuality</td><td>пунктуальность</td></tr>
<tr><td>obedience</td><td>послушание</td></tr>
<tr><td>stubbornly</td><td>упорно</td></tr>
<tr><td>assess</td><td>оценивать</td></tr>
<tr><td>implicit</td><td>неявный</td></tr>
<tr><td>prerequisite</td><td>предпосылка</td></tr>
<tr><td>rigour</td><td>строгость</td></tr>
<tr><td>tinker with</td><td>подправлять, возиться</td></tr>
<tr><td>assumption</td><td>допущение</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What needs did the modern school system originally serve? → [[industrial society needs|industrial needs|punctuality and obedience]]</li>
<li>What does the system still reward, according to critics? → [[memorising and right answers|the right answer|memory]]</li>
<li>How do defenders respond? → [[structure and discipline are valuable|structure matters]]</li>
<li>What have some schools experimented with? → [[project-based learning, mixed-age classes, less testing]]</li>
<li>What does the author conclude? → [[we may need to rethink fundamental assumptions|fundamental reform needed|rethink assumptions]]</li>
</ol>
` },

  { id: 4104, level: "C1", category: "reading", topic: "reading-ethics-ai", title: "04. The Ethics of Artificial Intelligence — Этика ИИ", content: `
<div class="audio-placeholder" data-audio="audio/c1-ethics-ai.mp3">
  🔊 <i>Аудио: будет добавлено (audio/c1-ethics-ai.mp3)</i>
</div>

<h3>English</h3>
<p>Artificial intelligence has moved from the realm of science fiction to the centre of everyday life with remarkable speed. Algorithms now determine which news we see, which candidates are invited to interviews and even which medical treatments are recommended. The question is no longer whether AI will shape our societies, but on what principles it should do so.</p>
<p>One of the most pressing concerns is bias. Machine learning systems learn from historical data, and if that data reflects existing inequalities, the resulting models will reproduce and even amplify them. Facial recognition software, for instance, has been shown to perform less accurately on darker-skinned faces, largely because the training datasets were skewed. The danger is that such systems, presented as objective, may entrench discrimination behind a veneer of mathematical neutrality.</p>
<p>Another issue is accountability. When an autonomous vehicle causes an accident, or an algorithm denies someone a loan, who is responsible? The engineer who wrote the code? The company that deployed it? The dataset that shaped it? Existing legal frameworks, designed for a world of human decision-makers, struggle to answer such questions.</p>
<p>There is also the matter of transparency. Many of the most powerful AI systems are "black boxes": even their creators cannot fully explain why they produce a particular output. In high-stakes domains such as medicine or criminal justice, this opacity is deeply troubling. A decision that cannot be explained cannot be properly challenged.</p>
<p>Some argue that these problems will be solved by better technology, but this is optimistic. Ethics is not a technical problem; it is a political and philosophical one. It requires public deliberation, robust regulation and a willingness to accept that some applications of AI may be simply too dangerous to pursue. The future of AI will be determined not by what is technically possible, but by what we, as a society, choose to permit.</p>

<h3>Перевод</h3>
<p>Искусственный интеллект с поразительной скоростью перешёл из области научной фантастики в центр повседневной жизни. Алгоритмы теперь определяют, какие новости мы видим, каких кандидатов приглашают на собеседования и даже какое лечение рекомендуется. Вопрос уже не в том, будет ли ИИ формировать наши общества, а в том, на каких принципах он должен это делать.</p>
<p>Одна из самых острых проблем — предвзятость. Системы машинного обучения учатся на исторических данных, и если эти данные отражают существующее неравенство, полученные модели будут его воспроизводить и даже усиливать. Программы распознавания лиц, например, как было показано, работают менее точно на лицах с более тёмной кожей, во многом потому что обучающие наборы данных были смещены. Опасность в том, что такие системы, представленные как объективные, могут закреплять дискриминацию под покровом математической нейтральности.</p>
<p>Ещё одна проблема — подотчётность. Когда беспилотный автомобиль становится причиной аварии или алгоритм отказывает кому-то в кредите, кто несёт ответственность? Инженер, написавший код? Компания, развернувшая систему? Набор данных, который её сформировал? Существующие правовые рамки, созданные для мира, где решения принимают люди, с трудом отвечают на такие вопросы.</p>
<p>Есть и вопрос прозрачности. Многие из самых мощных систем ИИ — это «чёрные ящики»: даже их создатели не могут полностью объяснить, почему они выдают тот или иной результат. В сферах с высокими ставками, таких как медицина или уголовное правосудие, эта непрозрачность глубоко тревожит. Решение, которое нельзя объяснить, нельзя и должным образом оспорить.</p>
<p>Некоторые утверждают, что эти проблемы будут решены лучшими технологиями, но это оптимизм. Этика — не техническая проблема, а политическая и философская. Она требует публичного обсуждения, надёжного регулирования и готовности признать, что некоторые применения ИИ могут быть просто слишком опасны, чтобы их разрабатывать. Будущее ИИ будет определяться не тем, что технически возможно, а тем, что мы как общество решим позволить.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>realm</td><td>сфера, область</td></tr>
<tr><td>bias</td><td>предвзятость</td></tr>
<tr><td>amplify</td><td>усиливать</td></tr>
<tr><td>skewed</td><td>смещённый</td></tr>
<tr><td>entrench</td><td>закреплять</td></tr>
<tr><td>veneer</td><td>покров, видимость</td></tr>
<tr><td>accountability</td><td>подотчётность</td></tr>
<tr><td>deploy</td><td>развертывать, внедрять</td></tr>
<tr><td>opacity</td><td>непрозрачность</td></tr>
<tr><td>deliberation</td><td>обсуждение, совещание</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>Why is bias in AI a problem? → [[training data may reflect existing inequalities|data reflects inequalities|training data bias]]</li>
<li>What example of bias is given? → [[facial recognition less accurate on darker skin|facial recognition]]</li>
<li>What is the accountability issue? → [[unclear who is responsible when an AI harms someone|who is responsible]]</li>
<li>What does "black box" mean in this context? → [[the output can't be fully explained|unexplainable output]]</li>
<li>What does the author conclude? → [[the future of AI depends on what society permits|we must choose what to allow]]</li>
</ol>
` },

  // ============================================================
  // C2 READING — файлы в папке audio/
  // ============================================================
  { id: 5101, level: "C2", category: "reading", topic: "reading-architecture-memory", title: "01. The Architecture of Memory — Архитектура памяти", content: `
<div class="audio-placeholder" data-audio="audio/c2-architecture-memory.mp3">
  🔊 <i>Аудио: будет добавлено (audio/c2-architecture-memory.mp3)</i>
</div>

<h3>English</h3>
<p>There is a particular kind of house that exists only in memory. It has no precise address; its rooms are neither perfectly proportioned nor reliably lit. Yet it is more vivid than any building I have ever entered, and its corridors open onto feelings I cannot otherwise locate. I have come to suspect that such houses are not remembered at all, but rather fabricated by the act of remembering — a palimpsest of half-observed details, overlaid with the long sediment of childhood.</p>
<p>My grandmother's house, for example, was small and unremarkable from the street. But inside, space behaved according to its own logic. The kitchen seemed to expand at dusk, absorbing the dining room, the hallway, even the garden beyond the window. The staircase, by contrast, compressed whenever I climbed it, so that by the time I reached the landing I had the sensation of emerging into a different climate altogether. These distortions, I now realise, were not perceptual errors. They were the house's true architecture — the architecture of belonging.</p>
<p>What is the function of such memories? Some would argue that they are merely nostalgic indulgence, a sentimental retreat from the demands of the present. But I am inclined to think otherwise. These remembered spaces are not escapes; they are foundations. They provide the imaginative vocabulary through which we interpret every subsequent room we enter, every door we close behind us. To lose them would be to lose not only a past, but a language.</p>
<p>The house itself has long since been sold, repainted, subdivided. Strangers sleep in what was once my bedroom. Yet it remains intact in a place more durable than brick: in the mind that keeps returning to it. Perhaps that is the only architecture that truly endures — not the one we build, but the one we carry.</p>

<h3>Перевод</h3>
<p>Существует особый вид дома, который существует только в памяти. У него нет точного адреса; его комнаты не идеально пропорциональны и не надёжно освещены. И всё же он ярче любого здания, в которое я когда-либо входил, а его коридоры открываются в чувства, которые иначе я не могу локализовать. Я начинаю подозревать, что такие дома вовсе не вспоминаются, а создаются самим актом воспоминания — палимпсест полузамеченных деталей, поверх которого лёг долгий осадок детства.</p>
<p>Дом моей бабушки, например, был небольшим и непримечательным с улицы. Но внутри пространство вело себя по собственной логике. Кухня, казалось, расширялась в сумерках, поглощая столовую, прихожую, даже сад за окном. Лестница, напротив, сжималась всякий раз, когда я по ней поднимался, так что к моменту, когда я достигал площадки, у меня было ощущение, что я выхожу в совершенно другой климат. Эти искажения, как я теперь понимаю, не были ошибками восприятия. Они были подлинной архитектурой дома — архитектурой принадлежности.</p>
<p>Какова функция таких воспоминаний? Некоторые стали бы утверждать, что это просто ностальгическое потакание себе, сентиментальное бегство от требований настоящего. Но я склонен думать иначе. Эти вспоминаемые пространства — не побеги; это фундаменты. Они дают тот воображаемый словарь, через который мы интерпретируем каждую последующую комнату, в которую входим, каждую дверь, которую закрываем за собой. Потерять их означало бы потерять не только прошлое, но и язык.</p>
<p>Сам дом давно продан, перекрашен, разделён на части. Незнакомцы спят в том, что когда-то было моей спальней. И всё же он остаётся нетронутым в месте более долговечном, чем кирпич: в сознании, которое продолжает к нему возвращаться. Возможно, это единственная архитектура, которая по-настоящему сохраняется — не та, которую мы строим, а та, которую мы несём с собой.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>proportioned</td><td>пропорциональный</td></tr>
<tr><td>palimpsest</td><td>палимпсест (многослойная запись)</td></tr>
<tr><td>sediment</td><td>осадок, отложение</td></tr>
<tr><td>distortion</td><td>искажение</td></tr>
<tr><td>perceptual</td><td>перцептивный, относящийся к восприятию</td></tr>
<tr><td>nostalgic</td><td>ностальгический</td></tr>
<tr><td>indulgence</td><td>потакание, баловство</td></tr>
<tr><td>retreat</td><td>отступление, убежище</td></tr>
<tr><td>durable</td><td>долговечный, прочный</td></tr>
<tr><td>endure</td><td>выдерживать, сохраняться</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>According to the author, what are houses in memory? → [[fabricated by the act of remembering|created by memory]]</li>
<li>How does the grandmother's kitchen behave in memory? → [[it expands at dusk|it expands]]</li>
<li>What does the author reject about nostalgic memories? → [[the idea that they are mere indulgence|that they're just nostalgia|escapism]]</li>
<li>What function do these memories serve? → [[they provide foundations and a vocabulary|foundations|they ground us]]</li>
<li>What kind of architecture endures? → [[the one we carry in the mind|the one in memory]]</li>
</ol>
` },

  { id: 5102, level: "C2", category: "reading", topic: "reading-in-defence-difficulty", title: "02. In Defence of Difficulty — В защиту сложности", content: `
<div class="audio-placeholder" data-audio="audio/c2-in-defence-of-difficulty.mp3">
  🔊 <i>Аудио: будет добавлено (audio/c2-in-defence-of-difficulty.mp3)</i>
</div>

<h3>English</h3>
<p>There is a prevailing assumption in contemporary culture that difficulty is a defect — something to be eliminated, circumvented or apologised for. Instructions must be simplified; texts must be made "accessible"; arguments must be reduced to bullet points. The underlying premise is that comprehension should be effortless, and that anything requiring sustained effort is, by definition, exclusionary.</p>
<p>This assumption is, I want to suggest, both mistaken and pernicious. To claim that difficulty is inherently a barrier is to confuse two quite different things: the difficulty of access and the difficulty of substance. A book written in impenetrable jargon is genuinely exclusionary, but a book written with precision and complexity is not. The first withholds meaning; the second demands that we rise to meet it. The difference is not one of ease, but of generosity.</p>
<p>Consider the experience of reading a genuinely difficult work — a philosophical treatise, a dense novel, a poem that resists paraphrase. The initial encounter is often frustrating. We lose the thread, we reread passages, we suspect ourselves of missing something obvious. And then, gradually, something shifts. The text begins to yield. What was opaque becomes legible, not because the text has changed, but because we have. The understanding we arrive at is not merely information; it is a transformation of the reader.</p>
<p>Such transformations are, by their very nature, inefficient. They cannot be accelerated, standardised or measured on a rubric. They take time, and time is precisely what our culture of optimisation resists. But to eliminate difficulty in the name of accessibility is to deprive people of the very experiences that make intellectual life worthwhile. It is to mistake the removal of obstacles for the achievement of ends.</p>
<p>The defence of difficulty is not a defence of obscurity. There is no virtue in making things hard for their own sake. But there is considerable virtue in refusing to make them easy when ease would mean shallowness. The task of the serious writer, teacher or thinker is not to lower the bar, but to make the height of the bar feel worth reaching.</p>

<h3>Перевод</h3>
<p>В современной культуре существует распространённое допущение, что сложность — это дефект, который нужно устранить, обойти или за который надо извиняться. Инструкции должны быть упрощены; тексты должны быть «доступными»; аргументы должны быть сведены к маркированным спискам. В основе лежит предпосылка, что понимание должно быть без усилий, а всё, что требует продолжительных усилий, по определению является исключающим.</p>
<p>Это допущение, как я хочу показать, и ошибочно, и пагубно. Утверждать, что сложность по своей сути является барьером, — значит путать две совершенно разные вещи: сложность доступа и сложность содержания. Книга, написанная непроницаемым жаргоном, действительно исключает; но книга, написанная с точностью и глубиной, — нет. Первая скрывает смысл; вторая требует, чтобы мы поднялись к ней навстречу. Разница не в лёгкости, а в щедрости.</p>
<p>Вспомните опыт чтения действительно сложного произведения — философского трактата, плотного романа, стихотворения, сопротивляющегося пересказу. Первая встреча часто разочаровывает. Мы теряем нить, перечитываем фрагменты, подозреваем себя в том, что упускаем что-то очевидное. И затем постепенно что-то меняется. Текст начинает уступать. То, что было непрозрачным, становится читаемым — не потому, что текст изменился, а потому, что изменились мы. Понимание, к которому мы приходим, — не просто информация; это преображение читателя.</p>
<p>Такие преображения по своей природе неэффективны. Их нельзя ускорить, стандартизировать или измерить по рубрике. Они требуют времени, а время — именно то, чему сопротивляется наша культура оптимизации. Но устранять сложность во имя доступности — значит лишать людей самих тех опытов, которые делают интеллектуальную жизнь стоящей. Это значит путать устранение препятствий с достижением цели.</p>
<p>Защита сложности — не защита туманности. Нет добродетели в том, чтобы делать вещи трудными ради них самих. Но есть немалая добродетель в том, чтобы отказываться делать их лёгкими, когда лёгкость означала бы поверхностность. Задача серьёзного писателя, учителя или мыслителя — не опускать планку, а делать высоту планки достойной того, чтобы к ней тянуться.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>prevailing</td><td>господствующий, преобладающий</td></tr>
<tr><td>circumvent</td><td>обходить</td></tr>
<tr><td>underlying</td><td>лежащий в основе</td></tr>
<tr><td>pernicious</td><td>пагубный</td></tr>
<tr><td>inherently</td><td>по своей сути</td></tr>
<tr><td>impenetrable</td><td>непроницаемый</td></tr>
<tr><td>jargon</td><td>жаргон</td></tr>
<tr><td>paraphrase</td><td>пересказ</td></tr>
<tr><td>opaque</td><td>непрозрачный</td></tr>
<tr><td>legible</td><td>читаемый, разборчивый</td></tr>
<tr><td>rubric</td><td>рубрика, критерий оценивания</td></tr>
<tr><td>shallowness</td><td>поверхностность</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What is the prevailing assumption about difficulty? → [[it is a defect|that it should be removed|that it is a barrier]]</li>
<li>What distinction does the author draw? → [[difficulty of access vs difficulty of substance|access vs substance]]</li>
<li>What happens when we read a difficult work? → [[we change, and the text yields|the reader is transformed|gradual understanding]]</li>
<li>Why does the author resist eliminating difficulty? → [[it would deprive people of transformative experiences|it would be shallowness]]</li>
<li>What is the author not defending? → [[obscurity for its own sake|obscurity]]</li>
</ol>
` },

  { id: 5103, level: "C2", category: "reading", topic: "reading-cartography-belonging", title: "03. The Cartography of Belonging — Картография принадлежности", content: `
<div class="audio-placeholder" data-audio="audio/c2-cartography-belonging.mp3">
  🔊 <i>Аудио: будет добавлено (audio/c2-cartography-belonging.mp3)</i>
</div>

<h3>English</h3>
<p>Every map is a lie of omission. To render the world legible, the cartographer must decide what to include and what to discard: rivers but not rainfall, roads but not footpaths, borders but not the histories that made them. What remains on the page is not the territory, but a particular argument about the territory — an argument advanced by whoever held the pen.</p>
<p>The maps we carry inside us are no different. Each of us navigates by an internal cartography, assembled from fragments of experience, inherited stories and the quiet instructions of those who raised us. These maps are not neutral. They privilege certain routes over others, marking some places as home and others as foreign, some people as familiar and others as strange. And like all maps, they become most visible precisely when they fail us.</p>
<p>I have been thinking about this in the context of belonging. To belong somewhere is not merely to occupy a location; it is to possess a map that renders that location meaningful. The émigré who returns to a childhood city discovers that the map no longer matches the territory. Streets have been renamed, buildings demolished, languages shifted. The disorientation is not spatial but cartographic: the internal map has become illegible against the external world.</p>
<p>Some respond to this dislocation by redrawing the map — by learning new routes, new landmarks, new ways of being. Others cling to the old cartography and live, in effect, in exile even at home. Neither response is simply right or wrong. What matters, perhaps, is the willingness to acknowledge that the map is not the territory, and that belonging is not a place we find but a practice we sustain.</p>
<p>The most honest maps, in the end, are those that confess their own incompleteness. They leave blank spaces at the edges. They mark uncertain regions with the old cartographic warning: <i>hic sunt dracones</i> — here be dragons. To belong, perhaps, is to be at peace with the dragons at the edge of the map, to accept that the territory will always exceed our capacity to describe it.</p>

<h3>Перевод</h3>
<p>Любая карта — это ложь умолчания. Чтобы сделать мир читаемым, картограф должен решить, что включить, а что отбросить: реки, но не осадки, дороги, но не тропы, границы, но не истории, их создавшие. То, что остаётся на странице, — не территория, а определённый довод о территории, довод, выдвинутый тем, кто держал перо.</p>
<p>Карты, которые мы носим внутри себя, ничем не отличаются. Каждый из нас ориентируется по внутренней картографии, собранной из фрагментов опыта, унаследованных историй и тихих наставлений тех, кто нас растил. Эти карты не нейтральны. Они отдают предпочтение одним маршрутам перед другими, отмечая одни места как дом, а другие как чужбину, одних людей как знакомых, а других как странных. И, как и все карты, они становятся наиболее заметными именно тогда, когда подводят нас.</p>
<p>Я размышлял об этом в контексте принадлежности. Принадлежать куда-то — не просто занимать место; это обладать картой, которая делает это место осмысленным. Эмигрант, возвращающийся в город детства, обнаруживает, что карта больше не соответствует территории. Улицы переименованы, здания снесены, языки сместились. Дезориентация не пространственная, а картографическая: внутренняя карта стала нечитаемой относительно внешнего мира.</p>
<p>Некоторые отвечают на эту дислокацию перерисовкой карты — изучением новых маршрутов, новых ориентиров, новых способов быть. Другие цепляются за старую картографию и живут, по сути, в изгнании даже у себя дома. Ни один ответ не является просто правильным или неправильным. Важно, пожалуй, готовность признать, что карта — не территория, и что принадлежность — не место, которое мы находим, а практика, которую мы поддерживаем.</p>
<p>Самые честные карты, в конечном счёте, — те, что признают собственную неполноту. Они оставляют пустые пространства по краям. Они отмечают неопределённые области старым картографическим предупреждением: <i>hic sunt dracones</i> — здесь драконы. Принадлежать, возможно, — значит быть в мире с драконами на краю карты, принимать, что территория всегда будет превосходить нашу способность её описать.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>omission</td><td>умолчание, пропуск</td></tr>
<tr><td>render</td><td>представлять, делать</td></tr>
<tr><td>legible</td><td>читаемый</td></tr>
<tr><td>cartographer</td><td>картограф</td></tr>
<tr><td>discard</td><td>отбрасывать</td></tr>
<tr><td>privilege</td><td>отдавать предпочтение</td></tr>
<tr><td>émigré</td><td>эмигрант</td></tr>
<tr><td>demolish</td><td>сносить</td></tr>
<tr><td>disorientation</td><td>дезориентация</td></tr>
<tr><td>dislocation</td><td>смещение, дислокация</td></tr>
<tr><td>cling to</td><td>цепляться за</td></tr>
<tr><td>exile</td><td>изгнание</td></tr>
<tr><td>acknowledge</td><td>признавать</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What does the author mean by "a map is a lie of omission"? → [[cartographers choose what to include and exclude|maps omit things]]</li>
<li>What is internal cartography? → [[a mental map assembled from experience and stories|mental map]]</li>
<li>Why does the émigré feel disoriented? → [[the internal map no longer matches the changed city|the city changed]]</li>
<li>What are the two possible responses to dislocation? → [[redraw the map or cling to the old one|redraw or cling]]</li>
<li>What does "hic sunt dracones" symbolise here? → [[accepting the limits of our maps|the unknown at the edges|incompleteness]]</li>
</ol>
` },

  { id: 5104, level: "C2", category: "reading", topic: "reading-on-progress", title: "04. On the Nature of Progress — О природе прогресса", content: `
<div class="audio-placeholder" data-audio="audio/c2-on-nature-of-progress.mp3">
  🔊 <i>Аудио: будет добавлено (audio/c2-on-nature-of-progress.mp3)</i>
</div>

<h3>English</h3>
<p>The idea of progress is one of the most seductive narratives of modernity. It promises that tomorrow will be better than today, that history moves in a discernible direction, and that human effort, properly applied, can be counted upon to yield cumulative improvement. Yet the longer one examines this idea, the more it appears less like a description of reality and more like a secular article of faith.</p>
<p>To be sure, certain forms of progress are undeniable. Life expectancy has risen dramatically; literacy has spread; diseases that once decimated populations have been largely contained. These achievements are real and should not be dismissed. But they are also uneven, reversible and, in many cases, accompanied by costs that were not anticipated. The same technologies that extend life also produce new forms of alienation. The same systems that distribute goods also concentrate power.</p>
<p>The philosopher Theodor Adorno observed that progress, as commonly conceived, tends to obscure the ways in which it is entangled with regression. Every advance in mastery over nature, he argued, is also an advance in mastery over human beings. The tools we invent to liberate ourselves become the instruments of new servitudes. This is not pessimism for its own sake; it is a warning against the complacency that progress narratives encourage.</p>
<p>A more honest account of progress would be dialectical: it would acknowledge that gains and losses are often inseparable, that the direction of history is contested, and that what counts as improvement depends on values that cannot themselves be derived from empirical observation. Progress, in other words, is not a fact about the world; it is a judgement we make about the world.</p>
<p>None of this requires us to abandon hope. It asks only that we hold our hopes with the appropriate measure of humility — recognising that the future is not a destination to be reached, but a condition to be negotiated, always imperfectly, always with costs that we may not yet see.</p>

<h3>Перевод</h3>
<p>Идея прогресса — один из самых соблазнительных нарративов современности. Она обещает, что завтра будет лучше, чем сегодня, что история движется в различимом направлении, и что человеческие усилия, должным образом приложенные, можно рассчитывать, дадут накопительное улучшение. Однако чем дольше исследуешь эту идею, тем больше она кажется не описанием реальности, а мирским символом веры.</p>
<p>Разумеется, некоторые формы прогресса неоспоримы. Продолжительность жизни резко возросла; грамотность распространилась; болезни, некогда опустошавшие население, в значительной мере сдерживаются. Эти достижения реальны, и их не следует отрицать. Но они также неравномерны, обратимы и во многих случаях сопровождаются издержками, которые не были предусмотрены. Те же технологии, что продлевают жизнь, порождают новые формы отчуждения. Те же системы, что распределяют блага, концентрируют власть.</p>
<p>Философ Теодор Адорно заметил, что прогресс в его обычном понимании склонен скрывать то, как он переплетён с регрессом. Всякий шаг в овладении природой, утверждал он, есть также шаг в овладении людьми. Инструменты, которые мы изобретаем, чтобы освободить себя, становятся орудиями новых форм зависимости. Это не пессимизм ради пессимизма; это предупреждение против самодовольства, которое поощряют нарративы прогресса.</p>
<p>Более честный отчёт о прогрессе был бы диалектическим: он признавал бы, что приобретения и потери часто неразделимы, что направление истории оспаривается, и что то, что считается улучшением, зависит от ценностей, которые сами не могут быть выведены из эмпирического наблюдения. Прогресс, иными словами, — не факт о мире; это суждение, которое мы выносим о мире.</p>
<p>Ничто из этого не требует от нас отказа от надежды. Это просит лишь о том, чтобы мы держали свои надежды с должной мерой смирения — признавая, что будущее — не пункт назначения, которого нужно достичь, а состояние, о котором нужно договариваться, всегда несовершенно, всегда с издержками, которых мы, возможно, ещё не видим.</p>

<h3>Новые слова</h3>
<table>
<tr><th>English</th><th>Русский</th></tr>
<tr><td>seductive</td><td>соблазнительный</td></tr>
<tr><td>discernible</td><td>различимый</td></tr>
<tr><td>cumulative</td><td>накопительный</td></tr>
<tr><td>secular</td><td>светский</td></tr>
<tr><td>decimate</td><td>опустошать, уничтожать</td></tr>
<tr><td>reversible</td><td>обратимый</td></tr>
<tr><td>alienation</td><td>отчуждение</td></tr>
<tr><td>entangled</td><td>переплетённый</td></tr>
<tr><td>regression</td><td>регресс</td></tr>
<tr><td>servitude</td><td>зависимость, рабство</td></tr>
<tr><td>complacency</td><td>самодовольство, самоуспокоенность</td></tr>
<tr><td>dialectical</td><td>диалектический</td></tr>
<tr><td>empirical</td><td>эмпирический</td></tr>
</table>

<h3>Questions</h3>
<ol>
<li>What is the author's initial critique of the idea of progress? → [[it is more faith than fact|it's an article of faith]]</li>
<li>What undeniable achievements are mentioned? → [[life expectancy, literacy, disease control|life expectancy and literacy]]</li>
<li>What did Adorno argue? → [[every advance in mastery over nature is also mastery over people|mastery over nature is mastery over people]]</li>
<li>What does the author mean by "dialectical"? → [[gains and losses are often inseparable|inseparable gains and losses]]</li>
<li>What does the author ask of us? → [[hold hope with humility|hope with humility]]</li>
</ol>
` },

  { id: 1306, level: "A1", category: "listening", topic: "listening-airport-checkin", title: "01. At the Airport Check-in — Регистрация в аэропорту", content: `
<div class="audio-placeholder" data-audio="listening/a1-airport-checkin.mp3">
  🔊 <i>Аудио: будет добавлено (listening/a1-airport-checkin.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>Where is the customer flying to?<br>a) Paris<br>b) Rome<br>c) London</li>
<li>How many bags does the customer check in?<br>a) One<br>b) Two<br>c) Three</li>
<li>Where would the customer prefer to sit?<br>a) Window<br>b) Aisle<br>c) Doesn't matter</li>
<li>What time does boarding start?<br>a) 10:15<br>b) 10:30<br>c) 10:45</li>
<li>What is the gate number?<br>a) 12<br>b) 14<br>c) 18</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The customer is flying to Rome. — True / False</li>
<li>The customer has two bags. — True / False</li>
<li>The customer prefers a window seat. — True / False</li>
<li>Boarding starts at 10:15. — True / False</li>
<li>The gate number is 14. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Agent:</b> Good morning. May I see your passport, please?</p>
<p><b>Customer:</b> Yes, here you are.</p>
<p><b>Agent:</b> Thank you. Where are you flying today?</p>
<p><b>Customer:</b> To Rome.</p>
<p><b>Agent:</b> How many bags are you checking in?</p>
<p><b>Customer:</b> Just one, please.</p>
<p><b>Agent:</b> Would you like a window or an aisle seat?</p>
<p><b>Customer:</b> A window seat, please. I like looking outside.</p>
<p><b>Agent:</b> Of course. Boarding starts at ten thirty, and your gate is fourteen.</p>
<p><b>Customer:</b> Thanks very much.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-a, 3-a, 4-b, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 1307, level: "A1", category: "listening", topic: "listening-hotel-checkin", title: "02. At the Hotel — В гостинице", content: `
<div class="audio-placeholder" data-audio="listening/a1-hotel-checkin.mp3">
  🔊 <i>Аудио: будет добавлено (listening/a1-hotel-checkin.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the customer's name?<br>a) Mr. Brown<br>b) Mr. Green<br>c) Mr. Smith</li>
<li>How many nights will the customer stay?<br>a) Two<br>b) Three<br>c) Five</li>
<li>What time is breakfast?<br>a) From 7 to 9<br>b) From 7 to 10<br>c) From 8 to 10</li>
<li>What floor is the room on?<br>a) Second<br>b) Third<br>c) Fourth</li>
<li>What is the Wi-Fi password?<br>a) hotel123<br>b) welcome123<br>c) guest2024</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The customer's name is Mr. Brown. — True / False</li>
<li>The customer is staying for three nights. — True / False</li>
<li>Breakfast is from 7 to 10. — True / False</li>
<li>The room is on the third floor. — True / False</li>
<li>The Wi-Fi password is hotel123. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Receptionist:</b> Good evening. Do you have a reservation?</p>
<p><b>Customer:</b> Yes, my name is Mr. Green.</p>
<p><b>Receptionist:</b> Let me see... Mr. Green, yes. You're staying for three nights.</p>
<p><b>Customer:</b> That's right. What time is breakfast?</p>
<p><b>Receptionist:</b> Breakfast is from seven to ten in the restaurant on the ground floor.</p>
<p><b>Customer:</b> Great. And what floor is my room on?</p>
<p><b>Receptionist:</b> The third floor, room 312. And the Wi-Fi password is welcome123.</p>
<p><b>Customer:</b> Thank you very much.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-b, 3-b, 4-b, 5-b</p>
<p><b>Task 2:</b> 1-F, 2-T, 3-T, 4-T, 5-F</p>
</details>
` },

  { id: 1308, level: "A1", category: "listening", topic: "listening-weather-forecast", title: "03. Weather Forecast — Прогноз погоды", content: `
<div class="audio-placeholder" data-audio="listening/a1-weather-forecast.mp3">
  🔊 <i>Аудио: будет добавлено (listening/a1-weather-forecast.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the weather like in the north this morning?<br>a) Sunny<br>b) Rainy<br>c) Cloudy</li>
<li>What will the temperature be in the south this afternoon?<br>a) 15<br>b) 20<br>c) 25</li>
<li>When will it rain in the west?<br>a) This morning<br>b) This afternoon<br>c) This evening</li>
<li>What will the weather be like tomorrow in the east?<br>a) Snowy<br>b) Sunny<br>c) Windy</li>
<li>What is the announcer's advice?<br>a) Take an umbrella<br>b) Wear a coat<br>c) Stay at home</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>In the north, it's sunny this morning. — True / False</li>
<li>In the south, the temperature will be 25 degrees. — True / False</li>
<li>It will rain in the west this evening. — True / False</li>
<li>In the east, it will snow tomorrow. — True / False</li>
<li>The announcer says to stay at home. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Announcer:</b> Good morning, and here is today's weather. In the north, it's cloudy this morning, but it will be sunny this afternoon. In the south, it will be very warm — around twenty-five degrees. In the west, it will rain this evening, so take an umbrella if you go out. And tomorrow in the east, we can expect snow. So, keep warm, everyone!</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-c, 2-c, 3-c, 4-a, 5-a</p>
<p><b>Task 2:</b> 1-F, 2-T, 3-T, 4-T, 5-F</p>
</details>
` },

  { id: 1309, level: "A1", category: "listening", topic: "listening-my-weekend", title: "04. My Weekend — Мои выходные", content: `
<div class="audio-placeholder" data-audio="listening/a1-my-weekend.mp3">
  🔊 <i>Аудио: будет добавлено (listening/a1-my-weekend.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What does Tom do on Saturday morning?<br>a) Plays football<br>b) Goes shopping<br>c) Visits family</li>
<li>Who does he visit on Saturday afternoon?<br>a) His parents<br>b) His friends<br>c) His brother</li>
<li>What does he do on Sunday morning?<br>a) Reads a book<br>b) Cleans the house<br>c) Watches TV</li>
<li>What sport does he play on Sunday afternoon?<br>a) Tennis<br>b) Football<br>c) Basketball</li>
<li>What does he do in the evening?<br>a) Cooks dinner<br>b) Goes to bed early<br>c) Watches a film</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>Tom goes shopping with his sister on Saturday morning. — True / False</li>
<li>Tom's parents live in the city. — True / False</li>
<li>Tom cleans the house on Sunday morning. — True / False</li>
<li>Tom plays tennis on Sunday afternoon. — True / False</li>
<li>Tom cooks dinner and watches a film in the evening. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Tom:</b> Hi, I'm Tom. On Saturday morning, I usually go shopping with my sister. In the afternoon, I visit my parents. They live in the countryside. On Sunday morning, I clean the house, and in the afternoon I play football with my friends. In the evening, I usually cook dinner and watch a film on TV. I love weekends!</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-a, 3-b, 4-b, 5-c</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 1310, level: "A1", category: "listening", topic: "listening-doctor-simple", title: "05. At the Doctor — У врача", content: `
<div class="audio-placeholder" data-audio="listening/a1-doctor-simple.mp3">
  🔊 <i>Аудио: будет добавлено (listening/a1-doctor-simple.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the patient's problem?<br>a) A headache<br>b) A stomach ache<br>c) A cold</li>
<li>How long has the patient had the problem?<br>a) One day<br>b) Two days<br>c) Three days</li>
<li>What does the doctor tell the patient to do?<br>a) Stay in bed<br>b) Drink coffee<br>c) Go to work</li>
<li>How often should the patient take the medicine?<br>a) Once a day<br>b) Twice a day<br>c) Three times a day</li>
<li>When should the patient come back?<br>a) In one day<br>b) In three days<br>c) In a week</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The patient has a cold. — True / False</li>
<li>The patient has had symptoms for two days. — True / False</li>
<li>The doctor tells the patient to drink coffee. — True / False</li>
<li>The medicine should be taken twice a day. — True / False</li>
<li>The patient should come back in one week. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Doctor:</b> Good morning. What's the problem?</p>
<p><b>Patient:</b> I have a bad cold.</p>
<p><b>Doctor:</b> How long have you had it?</p>
<p><b>Patient:</b> For two days.</p>
<p><b>Doctor:</b> You should stay in bed and drink lots of tea. And take this medicine twice a day.</p>
<p><b>Patient:</b> OK, thank you.</p>
<p><b>Doctor:</b> Come back in three days if you don't feel better.</p>
<p><b>Patient:</b> Alright, thank you, doctor.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-c, 2-b, 3-a, 4-b, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-T, 3-F, 4-T, 5-F</p>
</details>
` },

  { id: 1406, level: "A2", category: "listening", topic: "listening-flat-viewing", title: "01. Viewing a Flat — Осмотр квартиры", content: `
<div class="audio-placeholder" data-audio="listening/a2-flat-viewing.mp3">
  🔊 <i>Аудио: будет добавлено (listening/a2-flat-viewing.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>Where is the flat located?<br>a) In the city centre<br>b) In the suburbs<br>c) Near the park</li>
<li>How much is the monthly rent?<br>a) £600<br>b) £700<br>c) £800</li>
<li>How many bedrooms does the flat have?<br>a) One<br>b) Two<br>c) Three</li>
<li>What is NOT included in the rent?<br>a) Water<br>b) Heating<br>c) Internet</li>
<li>When can the tenant move in?<br>a) This weekend<br>b) Next month<br>c) In two weeks</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The flat is in the city centre. — True / False</li>
<li>The monthly rent is £700. — True / False</li>
<li>The flat has two bedrooms. — True / False</li>
<li>Internet is included in the rent. — True / False</li>
<li>The tenant can move in next month. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Agent:</b> Good afternoon. Thanks for coming to see the flat.</p>
<p><b>Tenant:</b> Thank you. Can you tell me a bit about it?</p>
<p><b>Agent:</b> Of course. It's in the suburbs, about fifteen minutes from the city centre by bus. The rent is seven hundred pounds a month.</p>
<p><b>Tenant:</b> How many bedrooms are there?</p>
<p><b>Agent:</b> Two bedrooms, a large living room, and a modern kitchen.</p>
<p><b>Tenant:</b> That sounds good. What's included in the rent?</p>
<p><b>Agent:</b> Water and heating are included, but internet is not — you'd need to set that up yourself.</p>
<p><b>Tenant:</b> OK. And when can I move in?</p>
<p><b>Agent:</b> From next month, the first of the month.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-b, 3-b, 4-c, 5-b</p>
<p><b>Task 2:</b> 1-F, 2-T, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 1407, level: "A2", category: "listening", topic: "listening-cinema-tickets", title: "02. At the Cinema — В кино", content: `
<div class="audio-placeholder" data-audio="listening/a2-cinema-tickets.mp3">
  🔊 <i>Аудио: будет добавлено (listening/a2-cinema-tickets.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What type of film does the customer want to see?<br>a) A comedy<br>b) A thriller<br>c) A documentary</li>
<li>What time does the film start?<br>a) 6:15<br>b) 7:30<br>c) 8:00</li>
<li>How many tickets does the customer buy?<br>a) One<br>b) Two<br>c) Three</li>
<li>How much do the tickets cost in total?<br>a) £12<br>b) £16<br>c) £20</li>
<li>Where are the seats?<br>a) In the front row<br>b) In the middle<br>c) At the back</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The customer wants to see a thriller. — True / False</li>
<li>The film starts at 6:15. — True / False</li>
<li>The customer buys two tickets. — True / False</li>
<li>The total cost is £20. — True / False</li>
<li>The seats are in the middle of the cinema. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Cashier:</b> Hi, what can I get you?</p>
<p><b>Customer:</b> Two tickets for the thriller, please. What time does it start?</p>
<p><b>Cashier:</b> It starts at half past seven.</p>
<p><b>Customer:</b> Great. And how much is it?</p>
<p><b>Cashier:</b> That's eight pounds per ticket — sixteen pounds in total.</p>
<p><b>Customer:</b> Here you are. Where are the seats?</p>
<p><b>Cashier:</b> Middle of the cinema, row G. Enjoy the film!</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-b, 3-b, 4-b, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 1408, level: "A2", category: "listening", topic: "listening-phone-friend", title: "03. A Phone Call — Звонок другу", content: `
<div class="audio-placeholder" data-audio="listening/a2-phone-call.mp3">
  🔊 <i>Аудио: будет добавлено (listening/a2-phone-call.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>Why is Anna calling?<br>a) To invite Ben to dinner<br>b) To cancel a plan<br>c) To ask for help</li>
<li>Why can't Ben come tonight?<br>a) He's working late<br>b) He's ill<br>c) He's on holiday</li>
<li>What day is the new arrangement?<br>a) Friday<br>b) Saturday<br>c) Sunday</li>
<li>What time does Anna suggest?<br>a) Six o'clock<br>b) Seven o'clock<br>c) Eight o'clock</li>
<li>Where will they meet?<br>a) At the restaurant<br>b) At Anna's house<br>c) At the cinema</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>Anna is inviting Ben for dinner. — True / False</li>
<li>Ben can come this evening. — True / False</li>
<li>They agree to meet on Saturday. — True / False</li>
<li>Ben suggests eight o'clock. — True / False</li>
<li>They will meet at the restaurant. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Anna:</b> Hi Ben, it's Anna. Are you free this evening?</p>
<p><b>Ben:</b> Hi Anna! I'm sorry, I can't come tonight. I have to work late.</p>
<p><b>Anna:</b> Oh no! Would Saturday work instead?</p>
<p><b>Ben:</b> Yes, Saturday is fine. What time?</p>
<p><b>Anna:</b> How about seven o'clock at the Italian restaurant near the park?</p>
<p><b>Ben:</b> Perfect. See you Saturday at seven. Bye!</p>
<p><b>Anna:</b> Bye!</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-a, 2-a, 3-b, 4-b, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 1409, level: "A2", category: "listening", topic: "listening-gym", title: "04. At the Gym — В спортзале", content: `
<div class="audio-placeholder" data-audio="listening/a2-gym.mp3">
  🔊 <i>Аудио: будет добавлено (listening/a2-gym.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What does the visitor want?<br>a) A one-day pass<br>b) A monthly membership<br>c) A personal trainer</li>
<li>How much is the monthly membership?<br>a) £20<br>b) £30<br>c) £45</li>
<li>Which facilities are included?<br>a) Gym only<br>b) Gym, pool and sauna<br>c) Pool and sauna</li>
<li>When does the gym open?<br>a) 6 AM<br>b) 7 AM<br>c) 8 AM</li>
<li>What does the receptionist offer to show first?<br>a) The gym<br>b) The sauna<br>c) The changing rooms</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The visitor wants to join the gym. — True / False</li>
<li>The monthly membership is £20. — True / False</li>
<li>The membership includes the pool and sauna. — True / False</li>
<li>The gym opens at 7 AM. — True / False</li>
<li>The receptionist offers to show the gym. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Receptionist:</b> Good morning! Is this your first time at our gym?</p>
<p><b>Visitor:</b> Yes, I'm thinking of joining. How much is a monthly membership?</p>
<p><b>Receptionist:</b> It's thirty pounds a month. That includes the gym, the pool and the sauna.</p>
<p><b>Visitor:</b> That's great. What time do you open?</p>
<p><b>Receptionist:</b> We open at six in the morning and close at ten at night.</p>
<p><b>Visitor:</b> Perfect. Can I have a look around?</p>
<p><b>Receptionist:</b> Of course! Let me show you the gym first.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-b, 3-b, 4-a, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 1410, level: "A2", category: "listening", topic: "listening-taxi-booking", title: "05. Booking a Taxi — Заказ такси", content: `
<div class="audio-placeholder" data-audio="listening/a2-taxi-booking.mp3">
  🔊 <i>Аудио: будет добавлено (listening/a2-taxi-booking.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>Where is the customer going?<br>a) To the airport<br>b) To the train station<br>c) To a hotel</li>
<li>When does the customer want the taxi?<br>a) At 5:00<br>b) At 5:30<br>c) At 6:00</li>
<li>How many people are travelling?<br>a) One<br>b) Two<br>c) Three</li>
<li>How much luggage does the customer have?<br>a) No luggage<br>b) Two large bags<br>c) Three bags</li>
<li>How will the customer pay?<br>a) By card<br>b) In cash<br>c) Online</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The customer is going to the airport. — True / False</li>
<li>The taxi is booked for 5:30 AM. — True / False</li>
<li>There are two passengers. — True / False</li>
<li>The customer has two large bags. — True / False</li>
<li>The customer will pay in cash. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Operator:</b> Good evening, City Taxi. How can I help?</p>
<p><b>Customer:</b> Hi, I'd like to book a taxi to the airport, please.</p>
<p><b>Operator:</b> Certainly. What time would you like it?</p>
<p><b>Customer:</b> At five o'clock tomorrow morning. My flight is at seven.</p>
<p><b>Operator:</b> And how many passengers?</p>
<p><b>Customer:</b> Two adults. And we have two large bags.</p>
<p><b>Operator:</b> No problem. We'll send a bigger car. How would you like to pay?</p>
<p><b>Customer:</b> By card, please.</p>
<p><b>Operator:</b> Great. See you tomorrow at five.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-a, 2-a, 3-b, 4-b, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-T, 5-F</p>
</details>
` },

  { id: 2306, level: "B1", category: "listening", topic: "listening-library-join", title: "01. Joining the Library — Запись в библиотеку", content: `
<div class="audio-placeholder" data-audio="listening/b1-library-join.mp3">
  🔊 <i>Аудио: будет добавлено (listening/b1-library-join.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What does the visitor want to do?<br>a) Borrow books<br>b) Join the library<br>c) Return a book</li>
<li>What document is required?<br>a) A passport<br>b) A student card<br>c) Proof of address</li>
<li>How many books can a member borrow at once?<br>a) Three<br>b) Five<br>c) Ten</li>
<li>How long can a book be kept?<br>a) Two weeks<br>b) Three weeks<br>c) One month</li>
<li>What happens if a book is returned late?<br>a) A fine is charged<br>b) The card is cancelled<br>c) Nothing happens</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The visitor wants to join the library. — True / False</li>
<li>A passport is required to join. — True / False</li>
<li>Members can borrow up to five books at once. — True / False</li>
<li>Books can be kept for two weeks. — True / False</li>
<li>There is a fine for late returns. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Librarian:</b> Good morning! Can I help you?</p>
<p><b>Visitor:</b> Yes, I'd like to join the library, please.</p>
<p><b>Librarian:</b> Certainly. I just need a document that proves your address — a utility bill or a bank statement will do.</p>
<p><b>Visitor:</b> I have a bank statement here. How many books can I borrow at once?</p>
<p><b>Librarian:</b> Up to five books at a time, and you can keep each one for three weeks.</p>
<p><b>Visitor:</b> Great. And what happens if I return a book late?</p>
<p><b>Librarian:</b> There's a small fine — twenty pence per day. But if you renew online before the due date, there's no charge.</p>
<p><b>Visitor:</b> Perfect, thank you very much.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-c, 3-b, 4-b, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 2307, level: "B1", category: "listening", topic: "listening-lost-property", title: "02. Lost Property Office — Бюро находок", content: `
<div class="audio-placeholder" data-audio="listening/b1-lost-property.mp3">
  🔊 <i>Аудио: будет добавлено (listening/b1-lost-property.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What did the passenger lose?<br>a) A suitcase<br>b) A backpack<br>c) A handbag</li>
<li>Where did they leave it?<br>a) On the bus<br>b) On the train<br>c) At the station</li>
<li>What colour was the bag?<br>a) Black<br>b) Blue<br>c) Brown</li>
<li>What was inside the bag?<br>a) A laptop<br>b) A passport<br>c) A camera</li>
<li>What does the officer ask the passenger to do?<br>a) Fill in a form<br>b) Come back tomorrow<br>c) Pay a fee</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The passenger lost a backpack. — True / False</li>
<li>The bag was left on the bus. — True / False</li>
<li>The bag is black with a red logo. — True / False</li>
<li>The passenger's passport was in the bag. — True / False</li>
<li>The passenger needs to fill in a form. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Officer:</b> Good afternoon. What can I do for you?</p>
<p><b>Passenger:</b> Hi, I think I left my backpack on the train this morning.</p>
<p><b>Officer:</b> Can you describe it?</p>
<p><b>Passenger:</b> Yes, it's black, medium-sized, with a red logo on the front.</p>
<p><b>Officer:</b> And what was inside?</p>
<p><b>Passenger:</b> My laptop and some books. No passport, thank goodness.</p>
<p><b>Officer:</b> OK. Could you fill in this form with your details and a description of the bag? We'll call you if we find it.</p>
<p><b>Passenger:</b> Of course. Thank you so much.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-b, 3-a, 4-a, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 2308, level: "B1", category: "listening", topic: "listening-university-open-day", title: "03. University Open Day — День открытых дверей", content: `
<div class="audio-placeholder" data-audio="listening/b1-university-open-day.mp3">
  🔊 <i>Аудио: будет добавлено (listening/b1-university-open-day.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the student interested in studying?<br>a) Engineering<br>b) Business<br>c) Psychology</li>
<li>What does the university offer for international students?<br>a) A scholarship<br>b) Free accommodation<br>c) Language support courses</li>
<li>What is the entry requirement?<br>a) IELTS 6.0<br>b) IELTS 6.5<br>c) IELTS 7.0</li>
<li>When does the course start?<br>a) September<br>b) October<br>c) January</li>
<li>What does the student want to do next?<br>a) Take an entrance exam<br>b) Visit the campus<br>c) Meet a professor</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The student is interested in business. — True / False</li>
<li>The university offers free accommodation for international students. — True / False</li>
<li>The entry requirement is IELTS 6.5. — True / False</li>
<li>The course starts in September. — True / False</li>
<li>The student wants to visit the campus. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Advisor:</b> Welcome to our open day! What would you like to study?</p>
<p><b>Student:</b> I'm interested in business, and I'd like to know more about your international programmes.</p>
<p><b>Advisor:</b> Our business course is very popular. For international students, we offer language support courses during the first term.</p>
<p><b>Student:</b> What are the entry requirements?</p>
<p><b>Advisor:</b> You need IELTS 6.5 overall. The course starts in October, so there's plenty of time to prepare.</p>
<p><b>Student:</b> Could I visit the campus? I'd like to see the business building and the library.</p>
<p><b>Advisor:</b> Absolutely. I'll arrange a tour for you at two o'clock.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-c, 3-b, 4-b, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 2309, level: "B1", category: "listening", topic: "listening-doctor-followup", title: "04. Medical Follow-up — Повторный приём у врача", content: `
<div class="audio-placeholder" data-audio="listening/b1-doctor-followup.mp3">
  🔊 <i>Аудио: будет добавлено (listening/b1-doctor-followup.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What was the original problem?<br>a) A back injury<br>b) A skin allergy<br>c) High blood pressure</li>
<li>How does the patient feel now?<br>a) Much better<br>b) The same<br>c) Worse</li>
<li>What exercise does the patient do?<br>a) Swimming<br>b) Daily walks<br>c) Cycling</li>
<li>What should the patient reduce?<br>a) Coffee<br>b) Salt<br>c) Exercise</li>
<li>When is the next appointment?<br>a) In two weeks<br>b) In one month<br>c) In three months</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The original problem was high blood pressure. — True / False</li>
<li>The patient feels worse now. — True / False</li>
<li>The patient is walking daily. — True / False</li>
<li>The doctor recommends reducing salt. — True / False</li>
<li>The next appointment is in three months. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Doctor:</b> Good morning. How have you been since your last visit?</p>
<p><b>Patient:</b> Much better, actually. The medication seems to be working. My blood pressure is lower.</p>
<p><b>Doctor:</b> That's excellent news. Are you still doing the daily walks I recommended?</p>
<p><b>Patient:</b> Yes, thirty minutes every morning.</p>
<p><b>Doctor:</b> Perfect. Keep that up. And try to reduce salt in your diet — that makes a real difference.</p>
<p><b>Patient:</b> I'll do my best. And should I keep taking the tablets?</p>
<p><b>Doctor:</b> Yes, continue with the same dose. Let's have another check-up in one month.</p>
<p><b>Patient:</b> OK. Thank you, doctor.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-c, 2-a, 3-b, 4-b, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-T, 5-F</p>
</details>
` },

  { id: 2310, level: "B1", category: "listening", topic: "listening-returning-product", title: "05. Returning a Faulty Product — Возврат товара", content: `
<div class="audio-placeholder" data-audio="listening/b1-returning-product.mp3">
  🔊 <i>Аудио: будет добавлено (listening/b1-returning-product.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What did the customer buy?<br>a) Headphones<br>b) A laptop<br>c) A phone</li>
<li>What is the problem?<br>a) The screen is broken<br>b) The sound doesn't work<br>c) The battery is dead</li>
<li>When did the customer buy it?<br>a) Yesterday<br>b) Last week<br>c) Last month</li>
<li>Where is the receipt?<br>a) On paper<br>b) At home<br>c) On their phone</li>
<li>What does the customer choose?<br>a) A full refund<br>b) A repair<br>c) An exchange</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The customer bought headphones. — True / False</li>
<li>Only one side of the headphones works. — True / False</li>
<li>The customer bought them last month. — True / False</li>
<li>The customer has a paper receipt. — True / False</li>
<li>The customer chooses an exchange. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Assistant:</b> Good morning. How can I help?</p>
<p><b>Customer:</b> I bought these headphones here last week, and they've stopped working. Only one side plays sound.</p>
<p><b>Assistant:</b> I'm sorry to hear that. Do you have the receipt?</p>
<p><b>Customer:</b> Yes, it's on my phone. Here it is.</p>
<p><b>Assistant:</b> Thank you. Since they're faulty, you can have a refund or an exchange.</p>
<p><b>Customer:</b> I'd prefer an exchange, actually — if you have the same model in black.</p>
<p><b>Assistant:</b> Let me check the stock. Yes, we have one. I'll get it for you now.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-a, 2-b, 3-b, 4-c, 5-c</p>
<p><b>Task 2:</b> 1-T, 2-T, 3-F, 4-F, 5-T</p>
</details>
` },

  { id: 3306, level: "B2", category: "listening", topic: "listening-job-offer", title: "01. Negotiating a Job Offer — Переговоры о работе", content: `
<div class="audio-placeholder" data-audio="listening/b2-job-offer.mp3">
  🔊 <i>Аудио: будет добавлено (listening/b2-job-offer.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the candidate mainly concerned about?<br>a) The starting salary<br>b) The holiday allowance<br>c) The job location</li>
<li>What is the company's initial offer?<br>a) £40,000<br>b) £42,000<br>c) £45,000</li>
<li>What does the candidate reference as leverage?<br>a) A competing offer<br>b) Extensive experience<br>c) A personal connection</li>
<li>What does the company offer instead of a higher salary?<br>a) A one-off bonus<br>b) Extra holiday<br>c) Flexible working</li>
<li>What does the candidate decide to do?<br>a) Accept the offer<br>b) Reject the offer<br>c) Ask for time to think</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The company initially offers £42,000. — True / False</li>
<li>The candidate wants £45,000. — True / False</li>
<li>The company offers a higher salary than requested. — True / False</li>
<li>The company offers flexible working after probation. — True / False</li>
<li>The candidate accepts immediately. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>HR Manager:</b> We're delighted to offer you the position. The starting salary is forty-two thousand pounds.</p>
<p><b>Candidate:</b> Thank you. I'm very interested, but I was hoping for something closer to forty-five thousand, given my experience.</p>
<p><b>HR Manager:</b> I appreciate that. Unfortunately, forty-two is the top of the band for this role. That said, we could offer a one-off signing bonus of three thousand pounds, and flexible working after the probation period.</p>
<p><b>Candidate:</b> That's a good offer. Could I have a couple of days to think about it and come back to you?</p>
<p><b>HR Manager:</b> Of course. Take until Friday — but I'd encourage you to make a decision soon.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-a, 2-b, 3-b, 4-a, 5-c</p>
<p><b>Task 2:</b> 1-T, 2-T, 3-F, 4-T, 5-F</p>
</details>
` },

  { id: 3307, level: "B2", category: "listening", topic: "listening-remote-learning", title: "02. Debating Remote Learning — Дебаты об онлайн-обучении", content: `
<div class="audio-placeholder" data-audio="listening/b2-remote-learning.mp3">
  🔊 <i>Аудио: будет добавлено (listening/b2-remote-learning.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the main topic of the debate?<br>a) School uniforms<br>b) Online learning<br>c) Exam reform</li>
<li>What does Sarah say about remote learning?<br>a) It is always effective<br>b) It cannot replace face-to-face teaching<br>c) It is cheaper for schools</li>
<li>What does James argue?<br>a) Online learning should replace classrooms<br>b) A hybrid model is needed<br>c) Remote learning should be abolished</li>
<li>What does Sarah suggest should happen?<br>a) A hybrid model<br>b) A full return to in-person<br>c) A complete switch to online</li>
<li>What do both speakers agree on?<br>a) Technology is useless<br>b) Teachers are essential<br>c) The debate is pointless</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>Sarah is sceptical about remote learning. — True / False</li>
<li>Sarah argues remote learning completely failed. — True / False</li>
<li>James supports a hybrid model. — True / False</li>
<li>Both speakers agree teachers are essential. — True / False</li>
<li>Sarah wants to abolish remote learning entirely. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Moderator:</b> Tonight's debate: is remote learning here to stay? Sarah, you're sceptical.</p>
<p><b>Sarah:</b> Very sceptical. Yes, technology made it possible to continue during the pandemic, but we've seen the damage. Students miss the social dimension of learning, teachers can't easily spot confusion, and results suffered. Remote learning can complement the classroom, but it cannot replace it.</p>
<p><b>Moderator:</b> And James, you take a different view?</p>
<p><b>James:</b> I do. Look, for students in rural areas or with caring responsibilities, remote learning is a lifeline. It's not about replacing teachers — it's about reaching people who would otherwise be excluded. What we need is a hybrid model, thoughtfully implemented.</p>
<p><b>Sarah:</b> I'd agree with that. My concern is when it's used as a cost-cutting measure, replacing real human interaction.</p>
<p><b>James:</b> On that, we completely agree.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-b, 3-b, 4-a, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-T, 5-F</p>
</details>
` },

  { id: 3308, level: "B2", category: "listening", topic: "listening-customs", title: "03. At Customs — На таможне", content: `
<div class="audio-placeholder" data-audio="listening/b2-customs.mp3">
  🔊 <i>Аудио: будет добавлено (listening/b2-customs.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>Where has the traveller come from?<br>a) Spain<br>b) France<br>c) Italy</li>
<li>What is the purpose of the trip?<br>a) Business<br>b) Tourism<br>c) Study</li>
<li>How long will the traveller stay?<br>a) One week<br>b) Two weeks<br>c) One month</li>
<li>What is the traveller carrying?<br>a) Only clothes<br>b) Some gifts for friends<br>c) Commercial samples</li>
<li>What does the officer ask the traveller to do?<br>a) Pay a fine<br>b) Open the suitcase<br>c) Return to customs</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The traveller is from Barcelona. — True / False</li>
<li>The traveller is on business. — True / False</li>
<li>The traveller is staying for one month. — True / False</li>
<li>The traveller has gifts for friends. — True / False</li>
<li>The officer asks the traveller to open the suitcase. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Officer:</b> Good afternoon. Passport, please. Where have you come from today?</p>
<p><b>Traveller:</b> From Barcelona. I flew in this morning.</p>
<p><b>Officer:</b> And what's the purpose of your visit?</p>
<p><b>Traveller:</b> Tourism. I'm here for two weeks — I want to see the museums and the countryside.</p>
<p><b>Officer:</b> Very good. Are you carrying any goods to declare? Anything for business, or over the duty-free limits?</p>
<p><b>Traveller:</b> No, just clothes and a few small gifts for friends.</p>
<p><b>Officer:</b> Could you open your suitcase, please? Just a routine check.</p>
<p><b>Traveller:</b> Of course. Here you are.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-a, 2-b, 3-b, 4-b, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-F, 4-T, 5-T</p>
</details>
` },

  { id: 3309, level: "B2", category: "listening", topic: "listening-documentary", title: "04. Discussing a Documentary — Обсуждаем документальный фильм", content: `
<div class="audio-placeholder" data-audio="listening/b2-documentary.mp3">
  🔊 <i>Аудио: будет добавлено (listening/b2-documentary.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the documentary about?<br>a) The Amazon rainforest<br>b) The Great Barrier Reef<br>c) Mount Everest</li>
<li>What did the speakers disagree on?<br>a) The cinematography<br>b) The scientific depth<br>c) The narration</li>
<li>Why was Ben disappointed?<br>a) The documentary was too short<br>b) The scientific content was shallow<br>c) The film was boring</li>
<li>What did Anna appreciate?<br>a) The drone footage<br>b) The interviews with scientists<br>c) The soundtrack</li>
<li>What did they agree on?<br>a) That it was a masterpiece<br>b) That it was worth watching<br>c) That it should be longer</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The documentary is about the Great Barrier Reef. — True / False</li>
<li>Ben was disappointed by the scientific content. — True / False</li>
<li>Anna thought the documentary was a masterpiece. — True / False</li>
<li>Ben appreciated the cinematography. — True / False</li>
<li>Both agree the documentary is worth watching. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Anna:</b> So, what did you think of the documentary?</p>
<p><b>Ben:</b> Honestly, I was a bit disappointed. The cinematography is stunning — those drone shots of the reef are incredible — but the scientific content is very shallow. It feels more like entertainment than education.</p>
<p><b>Anna:</b> I see what you mean, but I thought the interviews with the marine biologists were well done. It's clearly aimed at a general audience, not specialists.</p>
<p><b>Ben:</b> Fair enough. I suppose for someone who doesn't know much about coral bleaching, it's a useful introduction. I just wanted more depth.</p>
<p><b>Anna:</b> Well, on that we agree — it's a good starting point, but it's not going to satisfy someone with a scientific background.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-b, 3-b, 4-b, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-T, 3-F, 4-T, 5-T</p>
</details>
` },

  { id: 3310, level: "B2", category: "listening", topic: "listening-medical-consultation", title: "05. A Medical Consultation — Медицинская консультация", content: `
<div class="audio-placeholder" data-audio="listening/b2-medical-consultation.mp3">
  🔊 <i>Аудио: будет добавлено (listening/b2-medical-consultation.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the patient's main symptom?<br>a) Dizziness<br>b) Chest pain<br>c) Nausea</li>
<li>When does the symptom occur?<br>a) At night<br>b) In the mornings<br>c) After eating</li>
<li>What does the patient consume too much of?<br>a) Meat and salt<br>b) Sugar and coffee<br>c) Fruit and vegetables</li>
<li>What does the doctor recommend first?<br>a) Medication<br>b) Diet changes<br>c) Surgery</li>
<li>What test does the doctor suggest?<br>a) A blood test<br>b) An X-ray<br>c) An MRI</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The patient has chest pain in the mornings. — True / False</li>
<li>The patient also has shortness of breath. — True / False</li>
<li>The patient eats a lot of salt. — True / False</li>
<li>The doctor prescribes medication immediately. — True / False</li>
<li>The doctor recommends a blood test. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Doctor:</b> Come in, have a seat. What brings you here today?</p>
<p><b>Patient:</b> I've been having chest pain in the mornings. It usually starts when I get up.</p>
<p><b>Doctor:</b> Any other symptoms? Shortness of breath, dizziness?</p>
<p><b>Patient:</b> No, just the pain. It goes away after an hour or so.</p>
<p><b>Doctor:</b> I see. Can you tell me about your diet?</p>
<p><b>Patient:</b> I eat a lot of meat, and I suppose I add quite a lot of salt to my food.</p>
<p><b>Doctor:</b> That's likely a contributing factor. Before we consider medication, I'd like you to try reducing salt and saturated fat. And let's do a blood test to check your cholesterol.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-b, 3-a, 4-b, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 4306, level: "C1", category: "listening", topic: "listening-urban-loneliness", title: "01. Urban Loneliness — Городское одиночество", content: `
<div class="audio-placeholder" data-audio="listening/c1-urban-loneliness.mp3">
  🔊 <i>Аудио: будет добавлено (listening/c1-urban-loneliness.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What paradox does the guest identify?<br>a) Cities are crowded, yet people feel isolated<br>b) People avoid each other on purpose<br>c) Loneliness is a rural problem</li>
<li>What does the guest say about modern architecture?<br>a) It encourages community<br>b) It can isolate residents<br>c) It is irrelevant to loneliness</li>
<li>What does the guest suggest would help?<br>a) Shared public spaces<br>b) Cheaper housing<br>c) Fewer skyscrapers</li>
<li>What is the host's response?<br>a) Agreement<br>b) Scepticism<br>c) Indifference</li>
<li>What example does the guest give?<br>a) Barcelona's superblocks<br>b) Tokyo's capsule hotels<br>c) New York's high-rises</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The guest argues urban loneliness is structural. — True / False</li>
<li>The host fully agrees with the guest. — True / False</li>
<li>The guest cites Barcelona's superblocks as an example. — True / False</li>
<li>The guest thinks modern cities encourage community contact. — True / False</li>
<li>The guest believes the principle can be adapted to different cities. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Host:</b> Loneliness is often framed as an individual problem. You argue it's structural.</p>
<p><b>Guest:</b> Precisely. Cities are the greatest concentration of human beings in history, yet an astonishing proportion of urban residents report chronic loneliness. That's the paradox. The infrastructure we've built — high-rise apartments, private transport, anonymous commercial spaces — actively discourages casual contact.</p>
<p><b>Host:</b> But isn't that a romanticisation of the past? Villages had their own forms of isolation.</p>
<p><b>Guest:</b> I'd push back on that. It's not about romanticising anything. It's about asking what kinds of environments make community possible. Barcelona's superblocks — where traffic is restricted and streets are reclaimed for pedestrians — have measurably strengthened neighbourhood ties. That's not nostalgia, it's urban design.</p>
<p><b>Host:</b> And do you think that's transferable?</p>
<p><b>Guest:</b> The principle is. The specific interventions have to be adapted to each city. But the underlying logic — that shared public space creates opportunities for unplanned interaction — is universal.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-a, 2-b, 3-a, 4-b, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },

  { id: 4307, level: "C1", category: "listening", topic: "listening-homework-debate", title: "02. Debate on Homework — Дебаты о домашних заданиях", content: `
<div class="audio-placeholder" data-audio="listening/c1-homework-debate.mp3">
  🔊 <i>Аудио: будет добавлено (listening/c1-homework-debate.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the first speaker's position?<br>a) Homework is essential<br>b) Homework is largely counterproductive<br>c) Homework should be doubled</li>
<li>What evidence does the first speaker cite?<br>a) Studies showing no clear benefit for younger pupils<br>b) Economic data<br>c) Parent surveys</li>
<li>What does the second speaker argue?<br>a) Homework should be abolished completely<br>b) Meaningful assignments build independence<br>c) Students should choose their own homework</li>
<li>What compromise is proposed?<br>a) A complete ban<br>b) Fewer, more meaningful assignments<br>c) Only weekend homework</li>
<li>What do both agree on?<br>a) That homework is useless<br>b) That the quality of homework matters<br>c) That teachers assign too little</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The first speaker argues homework is counterproductive for primary children. — True / False</li>
<li>The first speaker wants to abolish homework for all ages. — True / False</li>
<li>The second speaker agrees that quantity matters. — True / False</li>
<li>Both speakers think quality matters. — True / False</li>
<li>The second speaker wants to triple homework. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Debater 1:</b> My position is straightforward: for primary-school children, homework is largely counterproductive. The research is fairly consistent — there's no clear academic benefit, and there's often a real cost in terms of free play, family time and, frankly, stress.</p>
<p><b>Debater 2:</b> I understand the concern, but I think we're conflating quantity with quality. Yes, twenty maths problems every night is unhelpful. But a single thoughtful assignment — reading a chapter, preparing a question — can build independence and consolidate learning.</p>
<p><b>Debater 1:</b> I'd agree that quality matters enormously. My objection is to the ritual, the assumption that more is better. If homework is going to exist at all, it should be limited, meaningful and never a punishment.</p>
<p><b>Debater 2:</b> On that, we're aligned. The problem isn't homework per se, it's the way it's designed and the way it's assessed.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-a, 3-b, 4-b, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-T, 5-F</p>
</details>
` },

  { id: 4308, level: "C1", category: "listening", topic: "listening-intellectual-property", title: "03. Intellectual Property — Интеллектуальная собственность", content: `
<div class="audio-placeholder" data-audio="listening/c1-intellectual-property.mp3">
  🔊 <i>Аудио: будет добавлено (listening/c1-intellectual-property.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What does the first speaker argue about current IP law?<br>a) It protects creators well<br>b) It has become excessively restrictive<br>c) It should be abolished entirely</li>
<li>What example does the first speaker give?<br>a) Pharmaceuticals and software patents<br>b) Music streaming<br>c) Books</li>
<li>What does the second speaker argue?<br>a) Creators need protection to survive<br>b) IP law is irrelevant<br>c) Copyright should be unlimited</li>
<li>What compromise does the first speaker suggest?<br>a) A two-tier system<br>b) Shorter, renewable terms<br>c) No copyright at all</li>
<li>What does the second speaker concede?<br>a) That copyright terms may be too long<br>b) That creators earn too much<br>c) That all IP should be abolished</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The first speaker wants to abolish IP law entirely. — True / False</li>
<li>The first speaker cites pharmaceuticals and software patents as examples. — True / False</li>
<li>The second speaker argues that strong IP protection is necessary for creators. — True / False</li>
<li>The first speaker proposes shorter, renewable terms. — True / False</li>
<li>The second speaker completely rejects any reform. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>First speaker:</b> My argument is that intellectual property law, as it currently stands, has drifted far from its original purpose. It was meant to incentivise creativity, but today it functions largely as a tool for entrenching market power. Consider pharmaceuticals and software patents: the terms are so long that innovation is actively stifled.</p>
<p><b>Second speaker:</b> I'd push back on that. Without strong protection, creators — writers, musicians, small studios — simply cannot survive. The market rewards those who can afford to give their work away.</p>
<p><b>First speaker:</b> I'm not suggesting abolition. I'm suggesting reform. Shorter terms, renewable in exchange for genuine use, and broader exemptions for education and research.</p>
<p><b>Second speaker:</b> I'd accept that the terms may be excessive in some areas. But we should be careful — every exception you carve out is a hole through which creators fall.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-a, 3-a, 4-b, 5-a</p>
<p><b>Task 2:</b> 1-F, 2-T, 3-T, 4-T, 5-F</p>
</details>
` },

  { id: 4309, level: "C1", category: "listening", topic: "listening-conference-qa", title: "04. Conference Q&A — Вопросы на конференции", content: `
<div class="audio-placeholder" data-audio="listening/c1-conference-qa.mp3">
  🔊 <i>Аудио: будет добавлено (listening/c1-conference-qa.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What was the presenter's main claim?<br>a) The data clearly support the hypothesis<br>b) The data are inconclusive<br>c) The data are irrelevant</li>
<li>What was the questioner's main concern?<br>a) The methodology<br>b) The sample size<br>c) The interpretation of results</li>
<li>What did the presenter concede?<br>a) That the sample was small<br>b) That the analysis may need revising<br>c) That the hypothesis was wrong</li>
<li>What future work does the presenter propose?<br>a) A larger replication study<br>b) A different methodology<br>c) Ending the project</li>
<li>What was the tone of the exchange?<br>a) Hostile<br>b) Collegial but rigorous<br>c) Dismissive</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The presenter claimed the data clearly support the hypothesis. — True / False</li>
<li>The questioner thought the sample was too small. — True / False</li>
<li>The presenter completely rejected the criticism. — True / False</li>
<li>The presenter plans a larger replication study. — True / False</li>
<li>The exchange was hostile. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Questioner:</b> Thank you for the presentation. Your claim is that the data clearly support the hypothesis, but I'm not convinced. The sample is small and the confidence intervals overlap considerably.</p>
<p><b>Presenter:</b> I appreciate the challenge. You're right that the sample is modest, and I should be more cautious in my language. I'd say the data are suggestive, not conclusive.</p>
<p><b>Questioner:</b> Would you agree that a replication study is warranted before any strong claims are made?</p>
<p><b>Presenter:</b> Absolutely. In fact, I'm planning a larger study for next year. The methodology will be similar, but with a much broader sample.</p>
<p><b>Questioner:</b> That's reassuring. I look forward to seeing the results.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-a, 2-b, 3-b, 4-a, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-T, 3-F, 4-T, 5-F</p>
</details>
` },

  { id: 4310, level: "C1", category: "listening", topic: "listening-linguistic-relativity", title: "05. Linguistic Relativity — Лингвистическая относительность", content: `
<div class="audio-placeholder" data-audio="listening/c1-linguistic-relativity.mp3">
  🔊 <i>Аудио: будет добавлено (listening/c1-linguistic-relativity.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What does the speaker discuss?<br>a) The relationship between language and thought<br>b) The history of linguistics<br>c) How to learn new languages</li>
<li>What is the strong version of the Sapir-Whorf hypothesis?<br>a) Language shapes thought<br>b) Language determines thought<br>c) Language reflects thought</li>
<li>What does the speaker say about the strong version?<br>a) It is widely accepted<br>b) It is largely discredited<br>c) It is untestable</li>
<li>What example does the speaker give?<br>a) Colour perception<br>b) Grammar structures<br>c) Time metaphors</li>
<li>What does the speaker argue about the weaker version?<br>a) It has empirical support<br>b) It is meaningless<br>c) It is political</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The strong version of Sapir-Whorf says language determines thought. — True / False</li>
<li>The speaker fully endorses the strong version. — True / False</li>
<li>The speaker mentions colour perception as an example. — True / False</li>
<li>The speaker argues language imprisons thought. — True / False</li>
<li>The speaker supports a weaker version of the hypothesis. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Speaker:</b> The question of whether language shapes thought is one of the most enduring in linguistics. The strong version of the Sapir-Whorf hypothesis — that language determines thought — is now largely discredited. If it were true, translation would be impossible, and bilingual speakers would inhabit two incompatible mental worlds. Clearly that's not the case.</p>
<p>But a weaker version is more defensible: language may subtly influence certain cognitive processes. Consider colour perception: some languages have many more colour terms than others, and speakers of those languages tend to distinguish certain shades more quickly. That doesn't mean they see the world differently, but it does suggest that language provides a habitual framework for attention.</p>
<p>So my argument is not that language imprisons thought, but that it inclines it.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-a, 2-b, 3-b, 4-a, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` },


  { id: 5306, level: "C2", category: "listening", topic: "listening-poststructuralism", title: "01. A Poststructuralism Dialogue — Диалог о постструктурализме", content: `
<div class="audio-placeholder" data-audio="listening/c2-poststructuralism.mp3">
  🔊 <i>Аудио: будет добавлено (listening/c2-poststructuralism.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What does Alice object to?<br>a) The obscurity of poststructuralist writing<br>b) The political implications of poststructuralism<br>c) The lack of empirical rigour</li>
<li>What does Ben defend?<br>a) The difficulty as productive<br>b) The political neutrality of the movement<br>c) The clarity of the style</li>
<li>What does Alice say about the defence of difficulty?<br>a) It's a convenient excuse<br>b) It's a valid methodological choice<br>c) It's a political stance</li>
<li>Who does Ben cite as an example?<br>a) Derrida<br>b) Foucault<br>c) Saussure</li>
<li>What does Ben concede?<br>a) That some writing is genuinely obscurantist<br>b) That poststructuralism is irrelevant<br>c) That clarity is impossible</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>Alice objects to the obscurity of poststructuralist writing. — True / False</li>
<li>Ben argues that difficulty is incidental to the argument. — True / False</li>
<li>Ben concedes that some writing is genuinely obscurantist. — True / False</li>
<li>Alice accepts that Foucault is an exception. — True / False</li>
<li>Alice and Ben completely agree. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Alice:</b> I have to say, I find the whole poststructuralist project exasperating. The prose is deliberately obscure, and obscurity functions as a shield against criticism. If you can't say clearly what you mean, you can't be shown to be wrong.</p>
<p><b>Ben:</b> That's a familiar charge, but I think it misses what the writing is trying to do. The difficulty isn't incidental — it's part of the argument. If you're claiming that meaning is unstable, then to write as if it were perfectly stable would contradict your thesis.</p>
<p><b>Alice:</b> But that's a convenient excuse, isn't it? One could make the same argument about any intellectual work. It doesn't exempt you from the basic obligations of clarity and evidence.</p>
<p><b>Ben:</b> I'd concede that some writing in this tradition is genuinely obscurantist. There's a difference between difficulty that repays effort and difficulty that conceals the absence of argument. But the best work — Foucault, for instance — is demanding in a way that's justified.</p>
<p><b>Alice:</b> I'll grant you Foucault. But he's the exception, not the rule.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-a, 2-a, 3-a, 4-b, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-T, 5-F</p>
</details>
` },

  { id: 5307, level: "C2", category: "listening", topic: "listening-memory-ethics", title: "02. The Ethics of Memory Editing — Этика редактирования памяти", content: `
<div class="audio-placeholder" data-audio="listening/c2-memory-ethics.mp3">
  🔊 <i>Аудио: будет добавлено (listening/c2-memory-ethics.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the main topic?<br>a) The science of memory<br>b) The ethics of memory editing<br>c) The history of trauma</li>
<li>What does the first speaker say about memory editing?<br>a) It is purely beneficial<br>b) It raises serious ethical questions<br>c) It should be banned immediately</li>
<li>What does the second speaker argue?<br>a) Memory editing could reduce suffering<br>b) Memory editing is impossible<br>c) Memory editing is always wrong</li>
<li>What distinction does the first speaker make?<br>a) Between therapeutic and enhancement uses<br>b) Between past and future memories<br>c) Between voluntary and involuntary memories</li>
<li>What does the second speaker concede?<br>a) That regulation will be difficult<br>b) That memory editing is impossible<br>c) That the technology should be banned</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The discussion is about the ethics of memory editing. — True / False</li>
<li>The first speaker believes memory editing has no potential benefits. — True / False</li>
<li>The second speaker argues memory editing could help people with PTSD. — True / False</li>
<li>The first speaker distinguishes between therapeutic and enhancement uses. — True / False</li>
<li>The second speaker thinks regulation will be straightforward. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Moderator:</b> Memory editing — erasing or altering traumatic memories — is no longer science fiction. Is it ethical?</p>
<p><b>First speaker:</b> The technology is genuinely remarkable, and I don't doubt its therapeutic potential. But we're talking about altering the very substance of personal identity. Our memories are what make us who we are. To edit them, even with the best intentions, is to intervene in something that goes far beyond medicine.</p>
<p><b>Second speaker:</b> I understand the concern, but let's be clear about what's at stake. For someone with severe PTSD, whose memories are a source of daily torment, memory editing might be the only path back to a tolerable life. Refusing to develop it on abstract grounds seems to me a failure of compassion.</p>
<p><b>First speaker:</b> I'm not refusing anything. I'm distinguishing two uses. Therapeutic memory editing, carefully regulated and consensually administered, is one thing. Enhancement — erasing painful memories of a bad breakup, say — is another. The line is essential.</p>
<p><b>Second speaker:</b> On that, I agree. But drawing the line will be far harder than you imply.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-b, 3-a, 4-a, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-T, 5-F</p>
</details>
` },

  { id: 5308, level: "C2", category: "listening", topic: "listening-philosophy-math", title: "03. Philosophy of Mathematics — Философия математики", content: `
<div class="audio-placeholder" data-audio="listening/c2-philosophy-math.mp3">
  🔊 <i>Аудио: будет добавлено (listening/c2-philosophy-math.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What position does the first speaker defend?<br>a) Formalism<br>b) Mathematical Platonism<br>c) Intuitionism</li>
<li>What does the second speaker object to?<br>a) Platonism's ontological commitments<br>b) Platonism's logical structure<br>c) Platonism's practical applications</li>
<li>Whose observation does the first speaker cite?<br>a) Wigner's<br>b) Einstein's<br>c) Hilbert's</li>
<li>What is the second speaker's counter-argument to the effectiveness argument?<br>a) That mathematics has been refined to be effective<br>b) That mathematics is not actually effective<br>c) That physics is more fundamental</li>
<li>What does the first speaker say the second speaker's position reduces mathematics to?<br>a) A human invention<br>b) A cosmic accident<br>c) A mathematical miracle</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The first speaker defends mathematical Platonism. — True / False</li>
<li>The second speaker thinks Platonism is parsimonious. — True / False</li>
<li>The first speaker cites Wigner's observation. — True / False</li>
<li>The second speaker argues mathematics is effective because we've refined it. — True / False</li>
<li>The first speaker thinks Platonism makes mathematics into an accident. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>First speaker:</b> I want to defend a version of mathematical Platonism. Mathematical truths — that two and two make four, that there are infinitely many primes — are not inventions. They are discoveries. They exist independently of any human mind, in a realm of abstract objects.</p>
<p><b>Second speaker:</b> That's a lot of metaphysical baggage. You're postulating a whole other realm of entities, just to explain why our mathematical beliefs happen to be true. Isn't that deeply unparsimonious?</p>
<p><b>First speaker:</b> Parsimony is a virtue, but not the only one. Consider the alternative: if mathematics is purely a human construction, why is it so astonishingly effective in describing the physical world? Wigner called this the "unreasonable effectiveness of mathematics." Platonism explains it; formalism doesn't.</p>
<p><b>Second speaker:</b> I think the effectiveness argument is weaker than it looks. Mathematics is effective because we've refined it to be so. We've been tinkering for centuries, and the successes are the ones that survived.</p>
<p><b>First speaker:</b> That's a reasonable position, but it seems to concede more than it should. It makes the applicability of mathematics into a kind of cosmic accident.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-a, 3-a, 4-a, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-T, 5-F</p>
</details>
` },

  { id: 5309, level: "C2", category: "listening", topic: "listening-institutional-trust", title: "04. Institutional Trust — Доверие к институтам", content: `
<div class="audio-placeholder" data-audio="listening/c2-institutional-trust.mp3">
  🔊 <i>Аудио: будет добавлено (listening/c2-institutional-trust.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What does the first speaker argue about institutional trust?<br>a) It has always been low<br>b) It has declined in recent decades<br>c) It is impossible to measure</li>
<li>What reasons does the first speaker give?<br>a) Economic inequality alone<br>b) Scandals and transparency failures<br>c) Media distortion only</li>
<li>What does the second speaker argue?<br>a) Trust is a matter of perception<br>b) Trust depends on institutional performance<br>c) Trust should be abolished</li>
<li>What example does the second speaker give?<br>a) Healthcare<br>b) Banking<br>c) Education</li>
<li>What do both speakers agree on?<br>a) That trust is a complex problem<br>b) That trust is irrelevant<br>c) That institutions should be privatised</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>Institutional trust has declined in recent decades. — True / False</li>
<li>The first speaker blames only media distortion. — True / False</li>
<li>The second speaker argues trust depends on institutional performance. — True / False</li>
<li>The second speaker cites healthcare as an example. — True / False</li>
<li>Both speakers agree that rebuilding trust will be difficult. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Moderator:</b> Institutional trust is widely reported to be in crisis. Is that accurate?</p>
<p><b>First speaker:</b> I think it is. Surveys consistently show that confidence in governments, media, banks and even scientific institutions has declined over the past three decades. And there are good reasons for that decline — repeated scandals, opaque decision-making, and a growing sense that institutions serve elites rather than the public.</p>
<p><b>Second speaker:</b> I'd push back on the framing. Trust isn't a free-floating attitude; it's calibrated to performance. If trust has declined, that might be less a crisis of perception than a signal that institutions genuinely haven't performed. Healthcare, for example — where systems have been underfunded for years — trust has fallen precisely in line with declining access and quality.</p>
<p><b>First speaker:</b> That's a fair point. But I'd argue that even when institutions perform well, they're increasingly distrusted. Part of this is political polarisation, part is the way media amplifies scandals.</p>
<p><b>Second speaker:</b> Agreed. So trust isn't just about performance — it's about the information environment through which performance is perceived. That's a much harder problem to solve.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-b, 2-b, 3-b, 4-a, 5-a</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-T, 5-T</p>
</details>
` },

  { id: 5310, level: "C2", category: "listening", topic: "listening-literary-translation", title: "05. Literary Translation — Художественный перевод", content: `
<div class="audio-placeholder" data-audio="listening/c2-literary-translation.mp3">
  🔊 <i>Аудио: будет добавлено (listening/c2-literary-translation.mp3)</i>
</div>

<h3>Task 1 — Choose the correct option</h3>
<ol>
<li>What is the main topic?<br>a) The art of literary translation<br>b) The history of a novel<br>c) The economics of publishing</li>
<li>What does the first speaker argue?<br>a) Translation is a form of betrayal<br>b) Translation is a form of creation<br>c) Translation should be literal</li>
<li>What does the second speaker say about fidelity?<br>a) It is the only criterion<br>b) It is more complex than it appears<br>c) It is irrelevant</li>
<li>What example is given?<br>a) A translation of a poem by Rilke<br>b) A translation of a Russian novel<br>c) A translation of a German play</li>
<li>What do both agree on?<br>a) That translation is impossible<br>b) That translation involves trade-offs<br>c) That translation is trivial</li>
</ol>

<h3>Task 2 — True or False</h3>
<ol>
<li>The first speaker argues that translation is a form of creation. — True / False</li>
<li>The second speaker says fidelity is simple. — True / False</li>
<li>The first speaker cites Rilke as an example. — True / False</li>
<li>Both speakers agree that translation is impossible. — True / False</li>
<li>Both speakers agree that translations involve trade-offs. — True / False</li>
</ol>

<details>
<summary>📄 Show transcript</summary>
<p><b>Moderator:</b> Literary translation has been called both an art and a betrayal. Where do you stand?</p>
<p><b>First speaker:</b> Firmly on the side of art. The translator is not a copyist but a creator. To translate a novel is to write it again in another language, with all the interpretive choices that implies. The fantasy of the "faithful" translation is just that — a fantasy.</p>
<p><b>Second speaker:</b> I'd agree that fidelity is more complicated than it sounds, but I'd resist the framing that translation is pure creation. There's a responsibility to the original, and to the reader who comes to it through your work.</p>
<p><b>First speaker:</b> Of course. But consider translating Rilke. You cannot reproduce both the rhyme and the meaning. You choose. And in choosing, you impose an interpretation. Every translation is a reading.</p>
<p><b>Second speaker:</b> I'd accept that — every translation involves trade-offs. But the best translations are those that make their trade-offs visible, that don't pretend to be the original.</p>
<p><b>First speaker:</b> On that, we completely agree.</p>
</details>

<details>
<summary>✅ Show answers</summary>
<p><b>Task 1:</b> 1-a, 2-b, 3-b, 4-a, 5-b</p>
<p><b>Task 2:</b> 1-T, 2-F, 3-T, 4-F, 5-T</p>
</details>
` }
]
