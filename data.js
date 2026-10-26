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
  { id: 2, level: "A1", category: "theory", topic: "articles_nouns", title: "02. Артикли, существительные и указательные слова", content: `
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
<h3>Притяжательные прилагательные</h3>
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
<li>[[Is]] he a student?</li>
<li>Where [[are]] you from?</li>
</ol>
<h3>B. Сделайте отрицание</h3>
<ol>
<li>He is tired. → [[He isn't tired|He is not tired]]</li>
<li>I'm from Spain. → [[I'm not from Spain|I am not from Spain]]</li>
<li>They are ready. → [[They aren't ready|They are not ready]]</li>
</ol>
<h3>C. Переведите</h3>
<ol>
<li>Я студент. → [[I'm a student|I am a student]]</li>
<li>Она не дома. → [[She isn't at home|She is not at home]]</li>
<li>Вы готовы? → [[Are you ready?]]</li>
<li>Мы из Польши. → [[We're from Poland|We are from Poland]]</li>
</ol>
` },
  { id: 12, level: "A1", category: "practice", topic: "p2", title: "02. Артикли, множественное число и притяжательные", content: `
<h3>A. Вставьте a/an/the</h3>
<ol>
<li>She's [[a]] teacher.</li>
<li>I eat [[an]] apple every day.</li>
<li>[[The]] sun is bright.</li>
<li>He has [[a]] dog. [[The]] dog is black.</li>
<li>It's [[an]] old house.</li>
</ol>
<h3>B. Напишите множественное число</h3>
<ol>
<li>book → [[books]]</li>
<li>bus → [[buses]]</li>
<li>city → [[cities]]</li>
<li>child → [[children]]</li>
<li>box → [[boxes]]</li>
<li>woman → [[women]]</li>
</ol>
<h3>C. Выберите вариант</h3>
<ol>
<li>This is (my/mine) phone. → [[my]]</li>
<li>(This/These) are my shoes. → [[These]]</li>
<li>That is (his/he) car. → [[his]]</li>
<li>(These/This) is my key. → [[This]]</li>
</ol>
<h3>D. Переведите</h3>
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
<li>He [[doesn't play]] (not/play) tennis.</li>
</ol>
<h3>B. Составьте вопросы</h3>
<ol>
<li>you / speak English → [[Do you speak English?]]</li>
<li>she / live here → [[Does she live here?]]</li>
<li>where / they / work → [[Where do they work?]]</li>
<li>what time / he / get up → [[What time does he get up?]]</li>
</ol>
<h3>C. Переведите</h3>
<ol>
<li>Я обычно пью чай утром. → [[I usually drink tea in the morning]]</li>
<li>Она не работает по воскресеньям. → [[She doesn't work on Sundays|She does not work on Sundays]]</li>
<li>Где ты живёшь? → [[Where do you live?]]</li>
<li>Мой брат ездит на работу на автобусе. → [[My brother goes to work by bus]]</li>
</ol>
` },
  { id: 14, level: "A1", category: "practice", topic: "p4", title: "04. Вопросы, время, даты и предлоги", content: `
<h3>A. Составьте вопросы</h3>
<ol>
<li>your name / what → [[What is your name?|What's your name?]]</li>
<li>you / where / live → [[Where do you live?]]</li>
<li>she / how old → [[How old is she?]]</li>
<li>the lesson / what time / start → [[What time does the lesson start?]]</li>
<li>he / speak English → [[Does he speak English?]]</li>
</ol>
<h3>B. Вставьте at/on/in</h3>
<ol>
<li>[[on]] Monday</li>
<li>[[at]] 8 o'clock</li>
<li>[[in]] July</li>
<li>[[in]] the morning</li>
<li>[[at]] night</li>
<li>[[on]] 12 June</li>
</ol>
<h3>C. Напишите время словами</h3>
<ol>
<li>7:00 → [[seven o'clock]]</li>
<li>7:15 → [[seven fifteen|quarter past seven]]</li>
<li>9:30 → [[nine thirty|half past nine]]</li>
<li>10:45 → [[ten forty-five|quarter to eleven]]</li>
</ol>
<h3>D. Переведите</h3>
<ol>
<li>Как тебя зовут? → [[What is your name?|What's your name?]]</li>
<li>Во сколько начинается урок? → [[What time does the lesson start?]]</li>
<li>Мой день рождения в июне. → [[My birthday is in June]]</li>
<li>Сколько это стоит? → [[How much is it?]]</li>
</ol>
` },
  { id: 15, level: "A1", category: "practice", topic: "p5", title: "05. There is/are, have got и предлоги места", content: `
<h3>A. Вставьте there is/there are/is there/are there</h3>
<ol>
<li>[[There is]] a shop near my house.</li>
<li>[[There are]] two bedrooms in the flat.</li>
<li>[[Is there]] a bank near here?</li>
<li>[[Are there]] any chairs in the room?</li>
</ol>
<h3>B. Вставьте have got/has got</h3>
<ol>
<li>I [[have got]] a sister.</li>
<li>Mark [[has got]] blue eyes.</li>
<li>[[Have]] you [[got]] a pet?</li>
<li>She [[hasn't got|has not got]] a car.</li>
</ol>
<h3>C. Вставьте предлог</h3>
<ol>
<li>The book is [[on]] the table.</li>
<li>The cat is [[under]] the chair (ниже).</li>
<li>The bank is [[between]] the café and the hotel.</li>
<li>The school is [[opposite]] the park (на другой стороне).</li>
<li>My keys are [[in]] my bag.</li>
</ol>
<h3>D. Переведите</h3>
<ol>
<li>В квартире две спальни. → [[There are two bedrooms in the flat|There are two bedrooms in the apartment]]</li>
<li>У тебя есть брат? → [[Have you got a brother?]]</li>
<li>Кафе рядом с банком. → [[The café is next to the bank|The cafe is next to the bank]]</li>
<li>Телефон в сумке. → [[The phone is in the bag]]</li>
</ol>
` },
  { id: 16, level: "A1", category: "practice", topic: "p6", title: "06. Can/can't, просьбы и инструкции", content: `
<h3>A. Вставьте can/can't</h3>
<ol>
<li>Birds [[can]] fly.</li>
<li>I [[can't]] drive; I haven't got a licence.</li>
<li>[[Can]] you help me, please?</li>
<li>[[Can]] I sit here?</li>
</ol>
<h3>B. Сделайте команды отрицательными</h3>
<ol>
<li>Run! → [[Don't run!|Do not run!]]</li>
<li>Open the window! → [[Don't open the window!]]</li>
<li>Worry! → [[Don't worry!]]</li>
<li>Touch that! → [[Don't touch that!]]</li>
</ol>
<h3>C. Переведите</h3>
<ol>
<li>Я умею плавать, но не умею водить машину. → [[I can swim, but I can't drive|I can swim, but I cannot drive]]</li>
<li>Откройте книгу, пожалуйста. → [[Open the book, please]]</li>
<li>Можно мне стакан воды? → [[Can I have a glass of water, please?]]</li>
<li>Повторите, пожалуйста, медленнее. → [[Could you repeat that more slowly, please?]]</li>
</ol>
` },
  { id: 17, level: "A1", category: "practice", topic: "p7", title: "07. Present Continuous", content: `
<h3>A. Поставьте глагол в Present Continuous</h3>
<ol>
<li>I [[am reading]] (read) now.</li>
<li>She [[is cooking]] (cook) dinner.</li>
<li>They [[are playing]] (play) football at the moment.</li>
<li>We [[aren't watching]] (not/watch) TV now.</li>
<li>[[Are]] you [[listening]] (listen) to me?</li>
</ol>
<h3>B. Выберите Present Simple или Present Continuous</h3>
<ol>
<li>He usually (walk / is walking) to work. → [[walks]]</li>
<li>Look! It (rains / is raining). → [[is raining]]</li>
<li>I (study / am studying) every Monday. → [[study]]</li>
<li>They (have / are having) lunch right now. → [[are having]]</li>
</ol>
<h3>C. Переведите</h3>
<ol>
<li>Я сейчас читаю. → [[I'm reading now|I am reading now]]</li>
<li>Она работает в магазине (вообще). → [[She works in a shop]]</li>
<li>Что ты делаешь сейчас? → [[What are you doing now?]]</li>
<li>Мы не смотрим телевизор в данный момент. → [[We aren't watching TV at the moment|We are not watching TV at the moment]]</li>
</ol>
` },
  { id: 18, level: "A1", category: "practice", topic: "p8", title: "08. Past Simple", content: `
<h3>A. Вставьте was/were</h3>
<ol>
<li>I [[was]] at home yesterday.</li>
<li>They [[were]] tired.</li>
<li>[[Was]] she at work?</li>
<li>Where [[were]] you last night?</li>
</ol>
<h3>B. Поставьте глагол в Past Simple</h3>
<ol>
<li>We [[visited]] (visit) our friends last week.</li>
<li>He [[went]] (go) to town yesterday.</li>
<li>I [[saw]] (see) Anna.</li>
<li>She [[didn't buy]] (not/buy) bread.</li>
<li>[[Did]] you [[watch]] (watch) the film?</li>
<li>Where [[did]] they [[go]] (go)?</li>
</ol>
<h3>C. Исправьте ошибки</h3>
<ol>
<li>She didn't went home. → [[She didn't go home]]</li>
<li>Did you saw him? → [[Did you see him?]]</li>
<li>They was tired. → [[They were tired]]</li>
</ol>
<h3>D. Переведите</h3>
<ol>
<li>Вчера я был дома. → [[I was at home yesterday]]</li>
<li>Мы ходили в парк на прошлой неделе. → [[We went to the park last week]]</li>
<li>Она не купила хлеб. → [[She didn't buy any bread|She didn't buy bread]]</li>
<li>Ты видел этот фильм? → [[Did you see this film?|Did you see this movie?]]</li>
</ol>
` },
  { id: 19, level: "A1", category: "practice", topic: "p9", title: "09. Повседневная лексика и общение", content: `
<h3>A. Вставьте слово</h3>
<p>Слова: kitchen, thirsty, sister, bus, breakfast, bedroom, tired, water.</p>
<ol>
<li>I eat [[breakfast]] in the morning.</li>
<li>I'm [[thirsty]]; I'd like a drink.</li>
<li>My mother's daughter is my [[sister]].</li>
<li>I go to work by [[bus]].</li>
<li>I sleep in my [[bedroom]].</li>
<li>I'm very [[tired]] after work.</li>
<li>I cook in the [[kitchen]].</li>
<li>Can I have some [[water]]?</li>
</ol>
<h3>B. Выберите ответ (напишите букву a или b)</h3>
<ol>
<li>“How are you?” — a) I'm fine, thanks. b) I'm 25. → [[a]]</li>
<li>“How much is it?” — a) It's Monday. b) It's five euros. → [[b]]</li>
<li>“Where are you from?” — a) I'm from Italy. b) I'm at home. → [[a]]</li>
<li>“Thank you.” — a) You're welcome. b) Excuse me. → [[a]]</li>
</ol>
<h3>C. Переведите</h3>
<ol>
<li>Извините, где вокзал? → [[Excuse me, where is the station?]]</li>
<li>Я хотел(а) бы чашку чая, пожалуйста. → [[I'd like a cup of tea, please|I would like a cup of tea, please]]</li>
<li>Я не понимаю. → [[I don't understand|I do not understand]]</li>
<li>Я живу в небольшой квартире с сестрой. → [[I live in a small flat with my sister|I live in a small apartment with my sister]]</li>
</ol>
` },
  { id: 20, level: "A1", category: "practice", topic: "p10", title: "10. Смешанная грамматика", content: `
<h3>A. Поставьте глагол в правильную форму</h3>
<ol>
<li>My sister usually [[gets up]] (get up) at seven.</li>
<li>Look! The children [[are playing]] (play) in the garden.</li>
<li>We [[went]] (go) to the cinema yesterday.</li>
<li>He [[doesn't like]] (not/like) fish.</li>
<li>I [[was]] (be) at home last night.</li>
<li>[[Do]] you [[speak]] (speak) English?</li>
<li>She [[isn't watching]] (not/watch) TV now.</li>
<li>Tom [[bought]] (buy) a phone last week.</li>
<li>Where [[are]] your parents [[now]] (be) now?</li>
<li>My dad [[drives]] (drive) to work every morning.</li>
<li>I [[didn't go]] (not/go) to school yesterday.</li>
<li>Listen! Someone [[is singing]] (sing).</li>
<li>[[Was]] she [[at]] (be) at work yesterday?</li>
<li>We usually [[don't eat]] (not/eat) dinner late.</li>
<li>They [[have]] (have) breakfast at eight every day.</li>
</ol>
<h3>B. Выберите правильный вариант (напишите выбранное слово)</h3>
<ol>
<li>He (works/is working) every Saturday. → [[works]]</li>
<li>I (do/am doing) homework right now. → [[am doing]]</li>
<li>They (was/were) happy yesterday. → [[were]]</li>
<li>(Do/Are) you like coffee? → [[Do]]</li>
<li>Did she (call/called) you? → [[call]]</li>
<li>There (is/are) three apples. → [[are]]</li>
<li>My brother (can/cans) swim. → [[can]]</li>
<li>She doesn't (play/plays) tennis. → [[play]]</li>
<li>We (have got/has got) a dog. → [[have got]]</li>
<li>The keys are (in/at) my bag. → [[in]]</li>
</ol>
<h3>C. Исправьте ошибки (введите правильное предложение)</h3>
<ol>
<li>She go to work every day. → [[She goes to work every day]]</li>
<li>I am play football now. → [[I am playing football now|I'm playing football now]]</li>
<li>Did you went home? → [[Did you go home?]]</li>
<li>He don't like tea. → [[He doesn't like tea]]</li>
<li>There is two bedrooms. → [[There are two bedrooms]]</li>
<li>They was at the cinema yesterday. → [[They were at the cinema yesterday]]</li>
<li>Does he works here? → [[Does he work here?]]</li>
<li>I didn't saw her. → [[I didn't see her]]</li>
<li>She can to swim. → [[She can swim]]</li>
<li>These is my books. → [[These are my books]]</li>
</ol>
` },
  { id: 21, level: "A1", category: "practice", topic: "p11", title: "11. Итоговый тест A1", content: `
<h3>A. Грамматика</h3>
<ol>
<li>I [[am]] from Germany.</li>
<li>She [[has got]] two brothers.</li>
<li>He [[doesn't work]] (not/work) on Sundays.</li>
<li>[[Do]] you speak English?</li>
<li>Look! It [[is raining]] (rain).</li>
<li>We [[were]] at home yesterday.</li>
<li>Did they [[visit]] (visit) you?</li>
<li>There [[are]] three books on the desk.</li>
<li>My birthday is [[in]] May.</li>
<li>The cat is [[under]] the table (ниже стола).</li>
<li>She can [[swim]] (swim).</li>
<li>These [[are]] my keys.</li>
<li>I [[watch]] (watch) TV every evening.</li>
<li>They [[aren't sleeping]] (not/sleep) now.</li>
<li>[[Is]] there a shop near here?</li>
</ol>
<h3>B. Переведите</h3>
<ol>
<li>Я студент. → [[I'm a student|I am a student]]</li>
<li>Она не любит кофе. → [[She doesn't like coffee|She does not like coffee]]</li>
<li>Где ты работаешь? → [[Where do you work?]]</li>
<li>Сейчас мы готовим ужин. → [[We're cooking dinner now|We are cooking dinner now]]</li>
<li>Вчера они были дома. → [[They were at home yesterday]]</li>
<li>Ты купил хлеб вчера? → [[Did you buy bread yesterday?]]</li>
<li>В моей квартире две комнаты. → [[There are two rooms in my flat|There are two rooms in my apartment]]</li>
<li>Я умею плавать. → [[I can swim]]</li>
<li>Мой отец обычно ездит на работу на автобусе. → [[My father usually goes to work by bus]]</li>
<li>Повторите, пожалуйста. → [[Could you repeat that, please?|Could you repeat that please]]</li>
</ol>
<h3>C. Исправьте ошибку</h3>
<ol>
<li>He don't like apples. → [[He doesn't like apples]]</li>
<li>She is work now. → [[She is working now]]</li>
<li>Did you saw him? → [[Did you see him?]]</li>
<li>There is three books. → [[There are three books]]</li>
<li>They was tired yesterday. → [[They were tired yesterday]]</li>
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

  { id: 101, level: "A2", category: "theory", topic: "present_tenses", title: "01. Present tenses: расширение A2", content: `
<h3>1. Краткое повторение A1</h3>
<ul>
<li><b>Present Simple:</b> привычки, факты, регулярные действия. <i>I usually walk to work.</i></li>
<li><b>Present Continuous:</b> действие происходит сейчас или в текущий период. <i>I'm studying for an exam this week.</i></li>
</ul>
<h3>2. Как выбрать время</h3>
<table>
<tr><th>Ситуация</th><th>Время</th><th>Пример</th></tr>
<tr><td>Привычка или расписание</td><td>Present Simple</td><td>She works on Mondays.</td></tr>
<tr><td>Действие прямо сейчас</td><td>Present Continuous</td><td>I'm cooking now.</td></tr>
<tr><td>Временная ситуация</td><td>Present Continuous</td><td>He's staying with friends this month.</td></tr>
<tr><td>Изменение или развитие</td><td>Present Continuous</td><td>The days are getting longer.</td></tr>
<tr><td>Состояние, мнение, чувство</td><td>Обычно Present Simple</td><td>I know the answer.</td></tr>
</table>
<h3>3. Глаголы состояния (stative verbs)</h3>
<p>Обычно не употребляются в Continuous, когда описывают состояние:</p>
<ul>
<li>know, understand, believe, remember</li>
<li>like, love, hate, prefer, need, want</li>
<li>belong, own, seem</li>
<li>mean, agree</li>
</ul>
<p>Правильно: <i>I understand you.</i> Необычно в обычном значении: <i>I'm understanding you.</i></p>
<p>Некоторые глаголы меняют значение:</p>
<ul>
<li><i>I think you're right.</i> — я считаю.</li>
<li><i>I'm thinking about the problem.</i> — я обдумываю.</li>
<li><i>This soup tastes salty.</i> — у супа солёный вкус.</li>
<li><i>The chef is tasting the soup.</i> — повар пробует суп.</li>
</ul>
<h3>4. Частотные слова</h3>
<ul>
<li>Present Simple: always, usually, often, sometimes, hardly ever, never.</li>
<li>Present Continuous: now, right now, at the moment, today, this week.</li>
</ul>
<p>Частотное наречие обычно стоит перед смысловым глаголом: <i>I often read.</i> С <b>be</b> оно стоит после глагола: <i>She is usually busy.</i></p>
<h3>5. Типичные ошибки</h3>
<ul>
<li>She works (не She work).</li>
<li>I'm working (не I working).</li>
<li>I don't understand (не I'm not understanding, если речь о состоянии).</li>
<li>What are you doing? — сейчас; What do you do? — работа/занятие вообще.</li>
</ul>
<h3>6. Практика</h3>
<p>Выбери форму:</p>
<ol>
<li>I usually ___ (take) the bus, but today I ___ (walk).</li>
<li>He ___ (not/like) coffee.</li>
<li>Why ___ you ___ (wear) a coat indoors?</li>
<li>The price ___ (go) up every year.</li>
<li>I ___ (think) this film is great.</li>
</ol>
<p><b>Ответы:</b> 1. take, am walking; 2. doesn't like; 3. are, wearing; 4. goes; 5. think.</p>
` },
  { id: 102, level: "A2", category: "theory", topic: "past_tenses", title: "02. Past tenses: Past Simple и Past Continuous", content: `
<h3>1. Краткое повторение A1: Past Simple</h3>
<p>Используем для завершённых действий в прошлом:</p>
<ul>
<li>We visited York last year.</li>
<li>She didn't call me.</li>
<li>Did they arrive on time?</li>
</ul>
<p>После did/didn't используем начальную форму: Did you go?</p>
<h3>2. Past Continuous</h3>
<p><b>Форма:</b> was/were + verb-ing</p>
<ul>
<li>I/he/she/it was working</li>
<li>you/we/they were working</li>
<li>отрицание: wasn't/weren't working</li>
<li>вопрос: Were you working?</li>
</ul>
<p>Используем, когда действие было в процессе в определённый момент прошлого: <i>At 8 p.m. I was having dinner.</i></p>
<h3>3. Past Simple или Past Continuous?</h3>
<ul>
<li>Длительный фон + короткое событие: <i>I was walking home when it started to rain.</i></li>
<li>Два действия шли одновременно: <i>While I was cooking, my brother was setting the table.</i></li>
<li>Последовательность завершённых событий: <i>I opened the door, went in and sat down.</i></li>
</ul>
<p>Часто:</p>
<ul>
<li>when вводит событие, которое произошло;</li>
<li>while подчёркивает длительность/параллельное действие.</li>
</ul>
<p>Это не жёсткое правило: выбирай время по смыслу.</p>
<h3>4. Важные маркеры</h3>
<p>Past Simple: yesterday, last week, two days ago, in 2020.<br>Past Continuous: at 7 o'clock, while, when — если подчёркивается процесс.</p>
<h3>5. Типичные ошибки</h3>
<ul>
<li>I was watching TV (не I watching TV).</li>
<li>They were playing (не They was playing).</li>
<li>When I arrived, they were eating. — они уже были в процессе.</li>
<li>Не ставь did вместе с формой прошедшего времени: Did she see?</li>
</ul>
<h3>6. Практика</h3>
<ol>
<li>I ___ (drive) home when I ___ (see) the accident.</li>
<li>While we ___ (wait), it ___ (start) to snow.</li>
<li>At 9 yesterday, they ___ (study).</li>
<li>She ___ (open) the window and ___ (look) outside.</li>
</ol>
<p><b>Ответы:</b> 1. was driving, saw; 2. were waiting, started; 3. were studying; 4. opened, looked.</p>
` },
  { id: 103, level: "A2", category: "theory", topic: "present_perfect", title: "03. Present Perfect", content: `
<p>Форма: have/has + V3. I have visited London. She has lost her keys.</p>
<h3>Использование</h3>
<ul>
<li>Опыт без точного времени: I've been to Spain.</li>
<li>Результат сейчас: She's lost her phone.</li>
<li>Недавно: I've just finished.</li>
<li>Период ещё не закончился: I've had two coffees today.</li>
</ul>
<h3>Слова</h3>
<ul>
<li>ever — когда-либо: Have you ever tried sushi?</li>
<li>never — никогда: I've never flown.</li>
<li>just — только что; already — уже; yet — уже/ещё, обычно в вопросах и отрицаниях.</li>
</ul>
<h3>Present Perfect vs Past Simple</h3>
<p>Have you ever been to Paris? (опыт)<br>When did you go? (конкретное прошлое)</p>
<p>Не используйте Present Perfect с yesterday/last year/in 2020: ✅ I saw him yesterday.</p>
<h3>Been/gone</h3>
<p>She's been to the shop — сходила и вернулась/имеет опыт; she's gone to the shop — ушла и ещё не вернулась.</p>
<p>Частые V3: been, gone, done, seen, eaten, drunk, written, read, bought, made, had, taken.</p>
` },
  { id: 104, level: "A2", category: "theory", topic: "future_forms", title: "04. Будущее: going to, will и планы", content: `
<h3>Going to</h3>
<p>Планы/намерения и прогноз по видимым признакам: I'm going to study tonight. Look at the clouds! It's going to rain.</p>
<p>Форма: am/is/are + going to + V1.</p>
<h3>Will</h3>
<p>Решение в момент речи, обещание, помощь, мнение: I'll answer the phone. I'll help you. I think you'll like it.</p>
<p>will + V1, без to и без -s.</p>
<h3>Present Continuous для договорённостей</h3>
<p>I'm meeting Jane at six. We're flying on Friday.</p>
<h3>Present Simple для расписаний</h3>
<p>The train leaves at 7:15.</p>
<h3>Сравните</h3>
<p>I'm going to learn to drive (намерение); I'll get it (решение сейчас); I'm seeing the dentist tomorrow (договорённость).</p>
<p>Ошибки: ❌ She will goes → ✅ She will go; ❌ I'm going study → ✅ I'm going to study.</p>
` },
  { id: 105, level: "A2", category: "theory", topic: "questions_negatives", title: "05. Questions and negatives: расширение A2", content: `
<h3>1. Краткое повторение A1</h3>
<p>Базовые модели:</p>
<ul>
<li>Are you ready?</li>
<li>Do you live here?</li>
<li>Did he call?</li>
<li>She doesn't drive.</li>
</ul>
<p>В вопросах с do/does/did смысловой глагол стоит в начальной форме.</p>
<h3>2. Вопросы с Present Perfect</h3>
<ul>
<li>Have you ever been to Italy? — Ты когда-нибудь был в Италии?</li>
<li>Have you finished yet? — Ты уже закончил?</li>
<li>I've just arrived. / I haven't finished yet.</li>
<li>How long have you lived here? — Как долго ты здесь живёшь?</li>
</ul>
<p>ever часто используется в вопросах об опыте; never — «никогда»; yet — обычно в вопросах и отрицаниях; already — «уже»; just — «только что».</p>
<h3>3. Вопросы с предлогом в конце</h3>
<p>В разговорном английском предлог часто остаётся в конце:</p>
<ul>
<li>Who are you talking to?</li>
<li>What are you looking for?</li>
<li>Which hotel did you stay at?</li>
</ul>
<h3>4. Косвенные вопросы (polite indirect questions)</h3>
<p>Более вежливые варианты:</p>
<ul>
<li>Could you tell me where the station is?</li>
<li>Do you know what time the shop closes?</li>
<li>Can you tell me how much it costs?</li>
</ul>
<p>После вводной фразы используем порядок слов обычного утверждения: where the station is, не where is the station.</p>
<h3>5. Вопросы-переспросы и короткие реакции</h3>
<ul>
<li>Really? — Правда?</li>
<li>Sorry, what was that? — Простите, что вы сказали?</li>
<li>You did? — Правда, ты это сделал?</li>
<li>Didn't you? / Isn't it? — короткие вопросы-хвостики; изучай частые формы как готовые выражения.</li>
</ul>
<h3>6. Практика</h3>
<ol>
<li>Have you ___ eaten sushi? (ever/yet)</li>
<li>Could you tell me where ___? (the bank is / is the bank)</li>
<li>How long ___ you ___ here? (live)</li>
<li>What are you looking ___?</li>
<li>I haven't called her ___. (already/yet)</li>
</ol>
<p><b>Ответы:</b> 1. ever; 2. the bank is; 3. have, lived; 4. for; 5. yet.</p>
` },
  { id: 106, level: "A2", category: "theory", topic: "nouns_quantifiers", title: "06. Nouns and quantifiers: количество на уровне A2", content: `
<h3>2. Исчисляемые и неисчисляемые</h3>
<p><b>Исчисляемые:</b> a book, two apples, many people<br><b>Неисчисляемые:</b> water, money, information, advice, furniture</p>
<p>Не говорим an advice или informations. Используй:</p>
<ul>
<li>a piece of advice</li>
<li>some information</li>
<li>two bottles of water</li>
</ul>
<h3>3. Some, any, no</h3>
<ul>
<li>some — обычно в утвердительных предложениях: We have some bread.</li>
<li>any — обычно в вопросах и отрицаниях: Do you have any questions?</li>
<li>no — без дополнительного отрицания: There is no milk. / There isn't any milk.</li>
</ul>
<p>some возможно в предложениях-предложениях/просьбах: Would you like some tea?</p>
<h3>4. Much, many, a lot of</h3>
<ul>
<li>many + исчисляемое множественное: many books</li>
<li>much + неисчисляемое: much time</li>
<li>a lot of + оба типа: a lot of people / a lot of work</li>
</ul>
<p>В утвердительной разговорной речи часто естественнее a lot of.</p>
<h3>5. Few, a few, little, a little</h3>
<ul>
<li>a few — несколько, достаточно для чего-то: I have a few friends here.</li>
<li>few — мало, почти недостаточно: Few people understood.</li>
<li>a little — немного: We have a little time.</li>
<li>little — мало, почти недостаточно: We have little time left.</li>
</ul>
<h3>6. Too much / too many / enough</h3>
<ul>
<li>too much + неисчисляемое: too much sugar</li>
<li>too many + исчисляемое: too many messages</li>
<li>adjective + enough: warm enough</li>
<li>enough + noun: enough chairs</li>
<li>too + adjective: too expensive</li>
</ul>
<h3>7. Практика</h3>
<ol>
<li>There aren't ___ chairs for everyone.</li>
<li>We have ___ time, so let's hurry. (little/a little — смысл «почти нет»)</li>
<li>You put ___ sugar in my tea!</li>
<li>Do you have ___ information?</li>
<li>This room isn't big ___.</li>
</ol>
<p><b>Ответы:</b> 1. enough; 2. little; 3. too much; 4. any; 5. enough.</p>
` },
  { id: 107, level: "A2", category: "theory", topic: "pronouns_possessives", title: "07. Pronouns: дополнительные конструкции A2", content: `
<h3>1. Краткое повторение A1</h3>
<p>Личные и притяжательные формы: I/me/my/mine, you/you/your/yours, he/him/his, she/her/hers, we/us/our/ours, they/them/their/theirs.</p>
<h3>2. Возвратные местоимения (reflexive pronouns)</h3>
<p>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</p>
<ul>
<li>I cut myself. — Я порезался.</li>
<li>She taught herself English. — Она самостоятельно выучила английский.</li>
<li>We enjoyed ourselves. — Мы хорошо провели время.</li>
</ul>
<p>Для «самостоятельно / сам» можно использовать by myself: I went there by myself.</p>
<h3>3. One / ones</h3>
<p>Используем, чтобы не повторять существительное:</p>
<ul>
<li>I like the blue one. (= the blue shirt)</li>
<li>Which shoes do you want? The black ones.</li>
<li>This one is cheaper than that one.</li>
</ul>
<h3>4. Both, either, neither</h3>
<ul>
<li>Both options are good. — оба варианта.</li>
<li>You can take either bus. — любой из двух.</li>
<li>Neither answer is correct. — ни один из двух.</li>
</ul>
<p>На уровне A2 достаточно уверенно понимать и использовать эти выражения в коротких фразах.</p>
<h3>5. Something, anything, nothing, someone</h3>
<ul>
<li>something / someone — обычно в утверждениях;</li>
<li>anything / anyone — часто в вопросах и отрицаниях;</li>
<li>nothing / nobody уже содержит отрицательное значение: I saw nothing (не I didn't see nothing в стандартном английском).</li>
</ul>
<p>Примеры: Would you like something to eat? / I don't know anyone here.</p>
<h3>6. Практика</h3>
<ol>
<li>I made this cake by ___.</li>
<li>Which bag is yours? The red ___.</li>
<li>___ of my parents speak English. (оба)</li>
<li>I didn't see ___ at the bus stop.</li>
<li>You can choose ___ of these two desserts.</li>
</ol>
<p><b>Ответы:</b> 1. myself; 2. one; 3. Both; 4. anyone; 5. either.</p>
` },
  { id: 108, level: "A2", category: "theory", topic: "modals_requests_advice", title: "08. Модальные глаголы, просьбы и советы", content: `
<ul>
<li>can: умение/возможность: I can swim.</li>
<li>could: вежливая просьба или умение в прошлом: Could you help me? I could swim when I was five.</li>
<li>must: сильная необходимость: You must wear a seat belt.</li>
<li>mustn't: запрещено: You mustn't smoke here.</li>
<li>have to: необходимость: I have to get up early.</li>
<li>don't have to: нет необходимости: You don't have to come early.</li>
</ul>
<p><b>Важно:</b> mustn't = нельзя; don't have to = не обязательно.</p>
<ul>
<li>should/shouldn't: совет: You should see a doctor. You shouldn't worry.</li>
<li>may/might (часто A2+): May I come in? It might rain later.</li>
</ul>
<p>Предложения: Let's go for a walk. Why don't we try this café? How about going by bus?</p>
<p>После модальных глаголов — V1 без to: She should rest, не *should to rest*.</p>
` },
  { id: 109, level: "A2", category: "theory", topic: "comparatives_superlatives", title: "09. Сравнительная и превосходная степени", content: `
<p>Сравнительные конструкции помогают сравнивать людей, предметы, места, события и действия. В английском важно выбрать правильную форму прилагательного и не забыть слова than или the, если они нужны.</p>
<h3>1. Comparative — сравнительная степень</h3>
<p>Используем, когда сравниваем <b>два</b> предмета или человека. Часто переводится как «-ее», «более…».</p>
<h4>Короткие прилагательные: adjective + -er</h4>
<p>Обычно это односложные прилагательные:</p>
<ul>
<li>small → smaller — маленький → меньше;</li>
<li>cheap → cheaper — дешёвый → дешевле;</li>
<li>fast → faster — быстрый → быстрее;</li>
<li>young → younger — молодой → моложе.</li>
</ul>
<p>Пример: My room is smaller than yours. — Моя комната меньше твоей.</p>
<h4>Орфографические правила</h4>
<ol>
<li>Большинство коротких прилагательных: добавляем -er: tall → taller.</li>
<li>Если слово заканчивается на -e, добавляем только -r: nice → nicer.</li>
<li>Если короткое слово заканчивается на согласную + y, меняем y на i: happy → happier, easy → easier.</li>
<li>В некоторых коротких словах с ударением на последнем согласном удваиваем согласную: big → bigger, hot → hotter, thin → thinner.</li>
</ol>
<h4>Длинные прилагательные: more + adjective</h4>
<p>Чаще всего используем more с длинными прилагательными:</p>
<ul>
<li>more expensive — дороже;</li>
<li>more interesting — интереснее;</li>
<li>more comfortable — удобнее;</li>
<li>more difficult — труднее.</li>
</ul>
<p>Пример: This exercise is more difficult than the last one.</p>
<p>Не используй одновременно more и окончание -er: не more cheaper, а cheaper.</p>
<h4>Исключения</h4>
<table>
<tr><th>Обычная форма</th><th>Сравнительная</th><th>Пример</th></tr>
<tr><td>good</td><td>better</td><td>This book is better than that one.</td></tr>
<tr><td>bad</td><td>worse</td><td>The weather is worse today.</td></tr>
<tr><td>far</td><td>farther/further</td><td>The station is farther away.</td></tr>
<tr><td>little (количество)</td><td>less</td><td>I have less time today.</td></tr>
<tr><td>much/many</td><td>more</td><td>We need more chairs.</td></tr>
</table>
<p>Farther чаще относится к физическому расстоянию; further также часто означает «дальнейший/дополнительный». В повседневной речи значения могут пересекаться.</p>
<h4>Сравнение с than</h4>
<p>После сравнительной степени часто ставим than — «чем»:</p>
<ul>
<li>A train is faster than a bus.</li>
<li>This café is more popular than that one.</li>
<li>Today is better than yesterday.</li>
</ul>
<p>Если вторая часть понятна, существительное можно заменить местоимением: My bag is heavier than yours. (= your bag)</p>
<h3>2. Superlative — превосходная степень</h3>
<p>Используем, когда выделяем одного человека или предмет из <b>группы из трёх или более</b>. Часто переводится как «самый…».</p>
<h4>Короткие прилагательные: the + adjective-est</h4>
<ul>
<li>small → the smallest;</li>
<li>fast → the fastest;</li>
<li>big → the biggest;</li>
<li>happy → the happiest.</li>
</ul>
<p>Орфографические изменения такие же, как в сравнительной степени: nice → the nicest, hot → the hottest.</p>
<h4>Длинные прилагательные: the most + adjective</h4>
<ul>
<li>the most interesting;</li>
<li>the most expensive;</li>
<li>the most comfortable.</li>
</ul>
<p>Пример: It's the most interesting museum in the city.</p>
<h4>Исключения</h4>
<ul>
<li>good → the best;</li>
<li>bad → the worst;</li>
<li>far → the farthest/furthest;</li>
<li>little → the least;</li>
<li>much/many → the most.</li>
</ul>
<h4>Артикль the</h4>
<p>Перед превосходной степенью обычно используем the:</p>
<ul>
<li>She is the tallest student in our class.</li>
<li>This is the best restaurant here.</li>
</ul>
<p>С притяжательным словом the не нужен: my best friend, а не the my best friend.</p>
<h4>in и of</h4>
<ul>
<li>in часто указывает на место или группу: the oldest building in the town;</li>
<li>of часто вводит конкретную группу/набор: the cheapest of the three.</li>
</ul>
<h3>3. Конструкция as ... as</h3>
<p>Используем для равенства или похожей степени:</p>
<ul>
<li>My bag is as heavy as yours. — Моя сумка такая же тяжёлая, как твоя.</li>
<li>This film is as interesting as the book.</li>
</ul>
<p>Отрицательная форма not as ... as означает «не такой… как»:</p>
<ul>
<li>This exercise isn't as difficult as the last one.</li>
<li>The blue car isn't as expensive as the black car.</li>
</ul>
<p>Между as ставим обычную форму прилагательного, не сравнительную: as tall as, не as taller as.</p>
<h3>4. Too и enough</h3>
<p>Эти слова помогают описать чрезмерную степень или достаточность.</p>
<h4>too + adjective</h4>
<p>Too означает «слишком», часто подразумевает проблему:</p>
<ul>
<li>It's too cold to swim. — Слишком холодно, чтобы плавать.</li>
<li>This box is too heavy for me. — Эта коробка слишком тяжёлая для меня.</li>
</ul>
<h4>adjective + enough</h4>
<p>Enough после прилагательного означает «достаточно»:</p>
<ul>
<li>The room is warm enough.</li>
<li>Are you old enough to drive?</li>
<li>I'm not tall enough to reach the shelf.</li>
</ul>
<h4>enough + noun</h4>
<p>Перед существительным ставим enough:</p>
<ul>
<li>We have enough time.</li>
<li>There aren't enough chairs.</li>
<li>Do you have enough money?</li>
</ul>
<p>Не путай порядок: good enough, но enough food.</p>
<h3>5. Усиление и смягчение сравнения</h3>
<p>На A2 полезно использовать:</p>
<ul>
<li>much/far + comparative: much cheaper, far better — намного дешевле/лучше;</li>
<li>a little/a bit + comparative: a little colder, a bit more expensive — немного холоднее/дороже.</li>
</ul>
<p>Примеры:</p>
<ul>
<li>The train is much faster than the bus.</li>
<li>This phone is a bit more expensive.</li>
</ul>
<h3>6. Типичные ошибки</h3>
<ul>
<li>❌ more easier → ✅ easier</li>
<li>❌ the most fastest → ✅ the fastest</li>
<li>❌ as taller as → ✅ as tall as</li>
<li>❌ She is tallest in the class → обычно ✅ She is the tallest in the class</li>
<li>❌ enough big → ✅ big enough</li>
<li>❌ enough chairs not → ✅ not enough chairs</li>
</ul>
` },
  { id: 110, level: "A2", category: "theory", topic: "infinitive_gerund", title: "10. Инфинитив с to и форма -ing", content: `
<p>После английских глаголов могут идти разные формы следующего глагола: to + verb, форма с -ing или начальная форма без to. Часто выбор зависит от первого глагола, поэтому полезно учить выражения целиком.</p>
<h3>1. Инфинитив с to</h3>
<p>Форма: <b>to + начальная форма глагола</b> — to go, to study, to be.</p>
<h4>Частые модели verb + to + verb</h4>
<ul>
<li>want to do — хотеть сделать;</li>
<li>need to do — нужно сделать;</li>
<li>would like to do — хотел(а) бы сделать;</li>
<li>hope to do — надеяться сделать;</li>
<li>plan to do — планировать сделать;</li>
<li>decide to do — решить сделать;</li>
<li>learn to do — учиться делать;</li>
<li>promise to do — обещать сделать;</li>
<li>forget to do — забыть сделать;</li>
<li>try to do — пытаться сделать.</li>
</ul>
<p>Примеры:</p>
<ul>
<li>I want to learn English.</li>
<li>We decided to stay at home.</li>
<li>She hopes to find a new job.</li>
</ul>
<h4>Инфинитив после прилагательного</h4>
<p>Часто используем adjective + to + verb:</p>
<ul>
<li>It's easy to use.</li>
<li>I'm happy to help.</li>
<li>It's difficult to understand this rule.</li>
<li>This bag is too heavy to carry.</li>
</ul>
<h4>Инфинитив цели: «чтобы»</h4>
<p>Инфинитив может объяснять, зачем человек что-то делает:</p>
<ul>
<li>I went to the shop to buy some milk. — Я пошёл в магазин, чтобы купить молока.</li>
<li>She called me to ask a question. — Она позвонила, чтобы задать вопрос.</li>
</ul>
<h3>2. Глагол + -ing</h3>
<p>Форма verb + -ing может работать как существительное или как форма после определённых глаголов.</p>
<h4>Частые модели verb + -ing</h4>
<ul>
<li>enjoy doing — получать удовольствие от;</li>
<li>finish doing — закончить;</li>
<li>don't mind doing — не возражать;</li>
<li>avoid doing — избегать;</li>
<li>keep doing — продолжать;</li>
<li>suggest doing — предлагать;</li>
<li>practise doing — практиковать;</li>
<li>like/love/hate doing — любить/не любить делать.</li>
</ul>
<p>Примеры:</p>
<ul>
<li>I enjoy reading before bed.</li>
<li>She finished cleaning the kitchen.</li>
<li>Would you mind opening the window?</li>
<li>He keeps asking the same question.</li>
</ul>
<p>После enjoy нельзя ставить to + verb в стандартной модели: I enjoy reading.</p>
<h3>3. После предлогов используем -ing</h3>
<p>Если после предлога идёт глагол, обычно он принимает форму -ing:</p>
<ul>
<li>good at cooking;</li>
<li>interested in learning English;</li>
<li>before leaving;</li>
<li>after eating;</li>
<li>without saying goodbye;</li>
<li>Thank you for helping me.</li>
</ul>
<p>Сравни:</p>
<ul>
<li>I'm interested in music. — после in существительное;</li>
<li>I'm interested in learning music. — после in форма -ing.</li>
</ul>
<p>В выражении look forward to слово to является предлогом, поэтому дальше используется -ing: I look forward to seeing you. Это полезное расширение, которое можно запомнить готовой фразой.</p>
<h3>4. Когда возможны обе формы</h3>
<p>После like, love, hate, prefer часто возможны обе формы:</p>
<ul>
<li>I like swimming.</li>
<li>I like to walk in the morning.</li>
</ul>
<p>Разница часто небольшая. Форма -ing нередко описывает занятие в целом, а to + verb может подчёркивать привычку или конкретный выбор, но в обычной речи это не абсолютное правило.</p>
<h3>5. Глагол без to после модальных глаголов</h3>
<p>После can, could, should, must, might ставим начальную форму без to:</p>
<ul>
<li>I can swim.</li>
<li>You should rest.</li>
<li>We must leave now.</li>
<li>It might rain later.</li>
</ul>
<p>Не говорим can to swim или should resting.</p>
<p>Исключение для запоминания: have to — это отдельная конструкция, после которой используется инфинитив с to: I have to work.</p>
<h3>6. Как запоминать модель</h3>
<p>Запоминай не только глагол, а всё сочетание:</p>
<ul>
<li>want to learn;</li>
<li>enjoy learning;</li>
<li>good at learning;</li>
<li>can learn.</li>
</ul>
<p>Универсального правила, которое предсказывает форму после любого глагола, нет. Если сомневаешься, проверяй словарный пример.</p>
` },
  { id: 111, level: "A2", category: "theory", topic: "prepositions_phrasal_verbs", title: "11. Предлоги, устойчивые сочетания и фразовые глаголы A2", content: `
<h3>2. Устойчивые сочетания с предлогами</h3>
<p>Некоторые прилагательные и глаголы обычно требуют определённого предлога. Лучше учить сочетание целиком.</p>
<h4>Прилагательное + предлог</h4>
<ul>
<li>interested in — интересоваться: I'm interested in music.</li>
<li>good at — хорошо уметь: She's good at cooking.</li>
<li>afraid of — бояться: He's afraid of dogs.</li>
<li>different from — отличаться от: This is different from mine.</li>
<li>worried about — беспокоиться о: I'm worried about the exam.</li>
<li>proud of — гордиться: They're proud of their daughter.</li>
<li>famous for — быть известным благодаря: The town is famous for its cheese.</li>
<li>kind to — быть добрым к: Be kind to people.</li>
</ul>
<h4>Глагол + предлог</h4>
<ul>
<li>wait for — ждать: I'm waiting for the bus.</li>
<li>listen to — слушать: Listen to this song.</li>
<li>look at — смотреть на: Look at the picture.</li>
<li>look for — искать: I'm looking for my keys.</li>
<li>talk to someone — разговаривать с кем-то;</li>
<li>talk about something — говорить о чём-то;</li>
<li>depend on — зависеть от: It depends on the weather.</li>
<li>belong to — принадлежать: This bag belongs to me.</li>
<li>pay for — платить за: I paid for lunch.</li>
<li>think about — обдумывать: I'll think about your idea.</li>
<li>ask for — просить: She asked for help.</li>
</ul>
<h4>Arrive in и arrive at</h4>
<ul>
<li>arrive in + город/страна: We arrived in Berlin.</li>
<li>arrive at + конкретное место/здание: We arrived at the station.</li>
</ul>
<p>Обычно не говорят arrive to London; говорят arrive in London.</p>
<h3>3. Предлог + существительное или -ing</h3>
<p>После предлога, если дальше стоит глагол, обычно используем -ing:</p>
<ul>
<li>before leaving;</li>
<li>after having dinner;</li>
<li>without saying anything;</li>
<li>good at drawing;</li>
<li>interested in learning.</li>
</ul>
<p>Пример: She left without saying goodbye.</p>
<h3>4. Что такое фразовый глагол?</h3>
<p>Фразовый глагол обычно состоит из глагола и короткого слова (up, off, on, out, back и т. п.). Вместе они образуют значение, которое не всегда понятно из отдельных частей:</p>
<ul>
<li>get — получать; get up — вставать;</li>
<li>turn — поворачивать; turn off — выключать;</li>
<li>find — находить; find out — выяснять.</li>
</ul>
<p>Один фразовый глагол может иметь несколько значений. Ориентируйся на контекст и учи частые значения.</p>
<h3>5. Частые фразовые глаголы A2</h3>
<table>
<tr><th>Фразовый глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td>wake up</td><td>просыпаться</td><td>I wake up at seven.</td></tr>
<tr><td>get up</td><td>вставать с постели</td><td>I get up at half past seven.</td></tr>
<tr><td>turn on</td><td>включать</td><td>Turn on the light.</td></tr>
<tr><td>turn off</td><td>выключать</td><td>Turn off the TV.</td></tr>
<tr><td>put on</td><td>надевать</td><td>Put on your coat.</td></tr>
<tr><td>take off</td><td>снимать одежду; взлетать</td><td>Take off your shoes.</td></tr>
<tr><td>pick up</td><td>поднять; забрать</td><td>I'll pick you up at six.</td></tr>
<tr><td>look for</td><td>искать</td><td>I'm looking for my phone.</td></tr>
<tr><td>find out</td><td>выяснить</td><td>I need to find out the time.</td></tr>
<tr><td>come back</td><td>возвращаться</td><td>What time did you come back?</td></tr>
<tr><td>give back</td><td>вернуть</td><td>Please give back my book.</td></tr>
<tr><td>go out</td><td>выходить, проводить время вне дома</td><td>We went out on Friday.</td></tr>
<tr><td>run out of</td><td>исчерпать запас</td><td>We've run out of milk.</td></tr>
<tr><td>try on</td><td>примерить одежду</td><td>Can I try on this jacket?</td></tr>
<tr><td>look after</td><td>присматривать за</td><td>She looks after her little brother.</td></tr>
</table>
<h3>6. Отделяемые и неотделяемые фразовые глаголы</h3>
<p>У некоторых фразовых глаголов дополнение можно поставить между глаголом и частицей:</p>
<ul>
<li>Turn off the light.</li>
<li>Turn the light off.</li>
</ul>
<p>Если дополнение — местоимение (it, them, him, her), у отделяемого глагола оно ставится в середину:</p>
<ul>
<li>Turn it off. ✅</li>
<li>Turn off it. ❌</li>
</ul>
<p>Ещё примеры:</p>
<ul>
<li>Put on your coat. / Put your coat on. / Put it on.</li>
<li>Pick up the bag. / Pick the bag up. / Pick it up.</li>
</ul>
<p>Некоторые сочетания не отделяются:</p>
<ul>
<li>look after the child — не look the child after;</li>
<li>look for my keys — не look my keys for.</li>
</ul>
<p>На A2 полезнее запоминать модель вместе с примером, чем пытаться вывести её из одного общего правила.</p>
<h3>7. Как учить предлоги и фразовые глаголы</h3>
<ol>
<li>Записывай выражение полностью: good at drawing, а не только good.</li>
<li>Добавляй свой пример.</li>
<li>Группируй по ситуации: дом, работа, поездки, общение.</li>
<li>Повторяй выражение в разные дни.</li>
<li>Проверяй предлог: например, listen to, но hear a sound без to.</li>
</ol>
<h3>8. Типичные ошибки</h3>
<ul>
<li>❌ listen music → ✅ listen to music</li>
<li>❌ married with (в значении «женат/замужем») → обычно ✅ married to</li>
<li>❌ arrive to London → ✅ arrive in London</li>
<li>❌ Turn off it → ✅ Turn it off</li>
<li>❌ interested on → ✅ interested in</li>
</ul>
<h3>9. Практика</h3>
<p>Вставь подходящее слово:</p>
<ol>
<li>I'm interested ___ art.</li>
<li>Please turn ___ the lights before you leave.</li>
<li>I'm looking ___ my passport.</li>
<li>Can you pick me ___ at six?</li>
<li>He is good ___ languages.</li>
<li>We arrived ___ Paris late at night.</li>
<li>She looks ___ her younger brother after school.</li>
<li>We've run ___ ___ coffee.</li>
</ol>
<p><b>Ответы:</b> 1. in; 2. off; 3. for; 4. up; 5. at; 6. in; 7. after; 8. out of.</p>
` },
  { id: 112, level: "A2", category: "theory", topic: "conditionals_connectors", title: "12. Условные предложения и связки", content: `
<p>Условные предложения описывают, что происходит при определённом условии. Связки помогают соединять идеи и показывать причину, результат, последовательность или противопоставление.</p>
<h3>1. Zero Conditional — общие факты и закономерности</h3>
<p>Используем для научных фактов, правил, привычных результатов и ситуаций, которые обычно происходят одинаково.</p>
<p><b>Формула:</b> If + Present Simple, Present Simple</p>
<ul>
<li>If you heat ice, it melts. — Если нагреть лёд, он тает.</li>
<li>If I don't sleep enough, I feel tired. — Если я недостаточно сплю, я чувствую усталость.</li>
<li>Plants die if they don't get water. — Растения погибают, если не получают воду.</li>
</ul>
<p>Вместо if в некоторых предложениях можно использовать when, если речь о том, что происходит регулярно: When I drink coffee late, I can't sleep.</p>
<h3>2. First Conditional — реальная возможность в будущем</h3>
<p>Используем, когда условие может выполниться в будущем и мы говорим о вероятном результате.</p>
<p><b>Формула:</b> If + Present Simple, will + начальная форма глагола</p>
<ul>
<li>If it rains, we'll stay at home. — Если пойдёт дождь, мы останемся дома.</li>
<li>I'll call you if I have time. — Я позвоню тебе, если у меня будет время.</li>
<li>If you study, you'll do better in the test.</li>
</ul>
<p>В части с if обычно используем Present Simple, даже если смысл относится к будущему:</p>
<ul>
<li>✅ If she comes, I'll tell her.</li>
<li>❌ If she will come, I'll tell her.</li>
</ul>
<p>В главной части часто используется will, но возможны также повелительная форма или модальный глагол:</p>
<ul>
<li>If you see Tom, tell him to call me.</li>
<li>If you feel ill, you should see a doctor.</li>
</ul>
<h3>3. Где ставить часть с if</h3>
<p>Условие можно поставить в начале или в конце:</p>
<ul>
<li>If I'm tired, I'll go to bed early.</li>
<li>I'll go to bed early if I'm tired.</li>
</ul>
<p>Если предложение начинается с части if, обычно ставим запятую после неё. Если условие стоит в конце, запятая обычно не нужна.</p>
<h3>4. When и if: в чём разница?</h3>
<ul>
<li>when — говорящий ожидает, что событие произойдёт, и говорит о времени;</li>
<li>if — событие возможно, но не гарантировано.</li>
</ul>
<p>Сравни:</p>
<ul>
<li>When I get home, I'll make dinner. — Когда я приду домой, приготовлю ужин (ожидаю, что приду).</li>
<li>If I get home early, I'll make dinner. — Если я приду домой рано, приготовлю ужин (не уверен, что это будет рано).</li>
</ul>
<p>В придаточной части времени с будущим значением также обычно используем Present Simple: When I arrive, I'll text you.</p>
<h3>5. Связки причины, результата и противопоставления</h3>
<h4>Причина: because</h4>
<p>Because отвечает на вопрос «почему?»:</p>
<ul>
<li>I stayed at home because I was tired.</li>
<li>She took a taxi because it was late.</li>
</ul>
<h4>Результат: so</h4>
<p>So показывает результат:</p>
<ul>
<li>I was tired, so I went to bed early.</li>
<li>The bus was late, so we walked.</li>
</ul>
<p>Не путай:</p>
<ul>
<li>because + причина;</li>
<li>so + результат.</li>
</ul>
<h4>Добавление и противопоставление</h4>
<ul>
<li>and — и: I bought bread and milk.</li>
<li>but — но: I was tired, but I finished the work.</li>
<li>or — или: Would you like tea or coffee?</li>
</ul>
<h4>Последовательность</h4>
<ul>
<li>first — сначала;</li>
<li>then / next — затем;</li>
<li>after that — после этого;</li>
<li>finally — наконец.</li>
</ul>
<p>Пример: First, we bought tickets. Then, we got on the train. Finally, we arrived at the hotel.</p>
<h4>Время: before, after, when, while</h4>
<ul>
<li>Wash your hands before you eat.</li>
<li>We went for a walk after we had lunch.</li>
<li>Call me when you arrive.</li>
<li>While I was cooking, my friend set the table.</li>
</ul>
<p>Когда говорим о будущем после when, before, after или as soon as, в придаточной части обычно используем Present Simple: I'll call you as soon as I arrive.</p>
<h3>6. Although — хотя (A2+)</h3>
<p>Although показывает контраст:</p>
<ul>
<li>Although it was cold, we went for a walk.</li>
<li>I enjoyed the trip although the hotel was noisy.</li>
</ul>
<p>Не используй одновременно although и but в одной и той же конструкции:</p>
<ul>
<li>✅ Although it was raining, we went out.</li>
<li>✅ It was raining, but we went out.</li>
<li>❌ Although it was raining, but we went out.</li>
</ul>
<h3>7. Как соединить несколько идей</h3>
<p>Вместо отдельных коротких предложений используй связки:</p>
<ul>
<li>I was late. The bus didn't come. → I was late because the bus didn't come.</li>
<li>It was cold. We went for a walk. → Although it was cold, we went for a walk.</li>
<li>I'll finish work. Then I'll call you. → I'll call you when I finish work.</li>
</ul>
<h3>8. Типичные ошибки</h3>
<ul>
<li>❌ If it will rain, we'll stay home. → ✅ If it rains, we'll stay home.</li>
<li>❌ Because I was tired, so I went home. → выбери because или so.</li>
<li>❌ Although it was late, but we stayed. → убери but.</li>
<li>❌ When I will arrive, I'll call. → ✅ When I arrive, I'll call.</li>
</ul>
` },

  { id: 201, level: "A2", category: "practice", topic: "present_tenses", title: "01. Практика: Present tenses", content: `
<p>Выбери правильную форму (Present Simple или Present Continuous).</p>
<ol>
<li>I usually [[take]] (take) the bus, but today I [[am walking]] (walk).</li>
<li>He [[doesn't like]] (not/like) coffee.</li>
<li>Why [[are]] you [[wearing]] (wear) a coat indoors?</li>
<li>The price [[goes]] (go) up every year.</li>
<li>I [[think]] (think) this film is great.</li>
<li>She [[is staying]] (stay) with friends this month.</li>
<li>The days [[are getting]] (get) longer.</li>
<li>I [[know]] (know) the answer.</li>
<li>She [[is usually]] busy. (be/usually) <i>Введите оба слова через пробел</i></li>
<li>I [[often read]] (often/read).</li>
</ol>
` },
  { id: 202, level: "A2", category: "practice", topic: "past_tenses", title: "02. Практика: Past tenses", content: `
<p>Поставь глаголы в Past Simple или Past Continuous.</p>
<ol>
<li>I [[was driving]] (drive) home when I [[saw]] (see) the accident.</li>
<li>While we [[were waiting]] (wait), it [[started]] (start) to snow.</li>
<li>At 9 yesterday, they [[were studying]] (study).</li>
<li>She [[opened]] (open) the window and [[looked]] (look) outside.</li>
<li>I [[was walking]] (walk) home when it [[started]] (start) to rain.</li>
<li>While I [[was cooking]] (cook), my brother [[was setting]] (set) the table.</li>
<li>I [[opened]] (open) the door, [[went]] (go) in and [[sat]] (sit) down.</li>
<li>At 8 p.m. I [[was having]] (have) dinner.</li>
<li>We [[visited]] (visit) York last year.</li>
<li>She [[didn't call]] (not/call) me.</li>
</ol>
` },
  { id: 203, level: "A2", category: "practice", topic: "present_perfect", title: "03. Практика: Present Perfect", content: `
<p>Вставь правильную форму Present Perfect или Past Simple.</p>
<ol>
<li>I [[have visited]] (visit) London.</li>
<li>She [[has lost]] (lose) her keys.</li>
<li>Have you ever [[tried]] (try) sushi?</li>
<li>I've never [[flown]] (fly).</li>
<li>I've just [[finished]] (finish).</li>
<li>I've [[had]] (have) two coffees today.</li>
<li>I [[saw]] (see) him yesterday.</li>
<li>She's [[been]] (be) to the shop.</li>
<li>She's [[gone]] (go) to the shop.</li>
<li>When did you [[go]] (go)?</li>
</ol>
` },
  { id: 204, level: "A2", category: "practice", topic: "future_forms", title: "04. Практика: Future forms", content: `
<p>Вставь правильную форму будущего (will, going to, Present Continuous, Present Simple).</p>
<ol>
<li>I'm [[going to study]] (study) tonight.</li>
<li>Look at the clouds! It's [[going to rain]] (rain).</li>
<li>I [[will answer|'ll answer]] (answer) the phone.</li>
<li>I [[will help|'ll help]] (help) you.</li>
<li>I think you [[will like|'ll like]] (like) it.</li>
<li>I'm [[meeting]] (meet) Jane at six.</li>
<li>We're [[flying]] (fly) on Friday.</li>
<li>The train [[leaves]] (leave) at 7:15.</li>
<li>I'm [[seeing]] (see) the dentist tomorrow.</li>
<li>She [[will go]] (go) tomorrow. <i>(Простое будущее)</i></li>
</ol>
` },
  { id: 205, level: "A2", category: "practice", topic: "questions_negatives", title: "05. Практика: Questions and negatives", content: `
<p>Вставь правильное слово или форму.</p>
<ol>
<li>Have you [[ever]] eaten sushi? (ever/yet)</li>
<li>Could you tell me where [[the bank is]]? (the bank is / is the bank)</li>
<li>How long [[have]] you [[lived]] here? (live)</li>
<li>What are you looking [[for]]?</li>
<li>I haven't called her [[yet]]. (already/yet)</li>
<li>Have you [[ever]] been to Italy?</li>
<li>Have you finished [[yet]]?</li>
<li>I've [[just]] arrived.</li>
<li>Who are you talking [[to]]?</li>
<li>Which hotel did you stay [[at]]?</li>
</ol>
` },
  { id: 206, level: "A2", category: "practice", topic: "nouns_quantifiers", title: "06. Практика: Nouns and quantifiers", content: `
<p>Вставь правильное слово.</p>
<ol>
<li>There aren't [[enough]] chairs for everyone.</li>
<li>We have [[little]] time, so let's hurry. (мало, почти нет)</li>
<li>You put [[too much]] sugar in my tea!</li>
<li>Do you have [[any]] information?</li>
<li>This room isn't big [[enough]].</li>
<li>We have [[some]] bread.</li>
<li>Would you like [[some]] tea?</li>
<li>I have [[a few]] friends here.</li>
<li>[[Few]] people understood.</li>
<li>We have [[little]] time left.</li>
</ol>
` },
  { id: 207, level: "A2", category: "practice", topic: "pronouns_possessives", title: "07. Практика: Pronouns", content: `
<p>Вставь правильное местоимение.</p>
<ol>
<li>I made this cake by [[myself]].</li>
<li>Which bag is yours? The red [[one]].</li>
<li>[[Both]] of my parents speak English. (оба)</li>
<li>I didn't see [[anyone]] at the bus stop.</li>
<li>You can choose [[either]] of these two desserts.</li>
<li>I cut [[myself]].</li>
<li>She taught [[herself]] English.</li>
<li>We enjoyed [[ourselves]].</li>
<li>I went there by [[myself]].</li>
<li>I like the blue [[one]].</li>
</ol>
` },
  { id: 208, level: "A2", category: "practice", topic: "modals_requests_advice", title: "08. Практика: Модальные глаголы", content: `
<p>Вставь правильный модальный глагол (can, could, must, mustn't, have to, don't have to, should, shouldn't).</p>
<ol>
<li>I [[can]] swim.</li>
<li>[[Could]] you help me?</li>
<li>I [[could]] swim when I was five.</li>
<li>You [[must]] wear a seat belt.</li>
<li>You [[mustn't]] smoke here.</li>
<li>I [[have to]] get up early.</li>
<li>You [[don't have to]] come early.</li>
<li>You [[should]] see a doctor.</li>
<li>You [[shouldn't]] worry.</li>
<li>[[May]] I come in?</li>
</ol>
` },
  { id: 209, level: "A2", category: "practice", topic: "comparatives_superlatives", title: "09. Практика: Comparatives and Superlatives", content: `
<p>Поставь прилагательное в правильную форму.</p>
<ol>
<li>My room is [[smaller]] (small) than yours.</li>
<li>This exercise is [[more difficult]] (difficult) than the last one.</li>
<li>This book is [[better]] (good) than that one.</li>
<li>The weather is [[worse]] (bad) today.</li>
<li>The station is [[farther]] (far) away.</li>
<li>I have [[less]] (little) time today.</li>
<li>We need [[more]] (many) chairs.</li>
<li>My bag is [[heavier]] (heavy) than yours.</li>
<li>She is the [[tallest]] (tall) student in our class.</li>
<li>This is the [[best]] (good) restaurant here.</li>
<li>It's the [[most interesting]] (interesting) museum in the city.</li>
<li>My bag is as [[heavy]] (heavy) as yours.</li>
<li>This exercise isn't as [[difficult]] (difficult) as the last one.</li>
<li>It's [[too]] cold to swim.</li>
<li>This box is [[too]] heavy for me.</li>
<li>The room is warm [[enough]].</li>
<li>We have [[enough]] time.</li>
<li>The train is [[much]] faster than the bus.</li>
<li>This phone is [[a bit]] more expensive.</li>
</ol>
` },
  { id: 210, level: "A2", category: "practice", topic: "infinitive_gerund", title: "10. Практика: Infinitives and Gerunds", content: `
<p>Выбери правильную форму (to + verb или -ing).</p>
<ol>
<li>I want [[to learn]] (learn) English.</li>
<li>We decided [[to stay]] (stay) at home.</li>
<li>She hopes [[to find]] (find) a new job.</li>
<li>I enjoy [[reading]] (read) before bed.</li>
<li>She finished [[cleaning]] (clean) the kitchen.</li>
<li>Would you mind [[opening]] (open) the window?</li>
<li>He keeps [[asking]] (ask) the same question.</li>
<li>I'm good at [[cooking]] (cook).</li>
<li>I'm interested in [[learning]] (learn) English.</li>
<li>Thank you for [[helping]] (help) me.</li>
<li>I look forward to [[seeing]] (see) you.</li>
<li>I can [[swim]] (swim).</li>
<li>You should [[rest]] (rest).</li>
<li>I have to [[work]] (work).</li>
</ol>
` },
  { id: 211, level: "A2", category: "practice", topic: "prepositions_phrasal_verbs", title: "11. Практика: Prepositions and Phrasal Verbs", content: `
<p>Вставь подходящий предлог или частицу.</p>
<ol>
<li>I'm interested [[in]] art.</li>
<li>Please turn [[off]] the lights before you leave.</li>
<li>I'm looking [[for]] my passport.</li>
<li>Can you pick me [[up]] at six?</li>
<li>He is good [[at]] languages.</li>
<li>We arrived [[in]] Paris late at night.</li>
<li>She looks [[after]] her younger brother after school.</li>
<li>We've run [[out]] [[of]] coffee.</li>
<li>I'm waiting [[for]] the bus.</li>
<li>Listen [[to]] this song.</li>
<li>Look [[at]] the picture.</li>
<li>I'm looking [[for]] my keys.</li>
<li>It depends [[on]] the weather.</li>
<li>This bag belongs [[to]] me.</li>
<li>I paid [[for]] lunch.</li>
<li>I'll think [[about]] your idea.</li>
<li>She asked [[for]] help.</li>
<li>We arrived [[at]] the station.</li>
<li>She left without [[saying]] (say) goodbye.</li>
<li>Can I try [[on]] this jacket?</li>
</ol>
` },
  { id: 212, level: "A2", category: "practice", topic: "conditionals_connectors", title: "12. Практика: Conditionals and Connectors", content: `
<p>Вставь правильную форму глагола или связку.</p>
<ol>
<li>If you heat ice, it [[melts]] (melt).</li>
<li>If I don't sleep enough, I [[feel]] (feel) tired.</li>
<li>Plants die if they [[don't get]] (not/get) water.</li>
<li>If it [[rains]] (rain), we'll stay at home.</li>
<li>I'll call you if I [[have]] (have) time.</li>
<li>If you [[study]] (study), you'll do better in the test.</li>
<li>If she [[comes]] (come), I'll tell her.</li>
<li>If I'm tired, I'll [[go]] (go) to bed early.</li>
<li>When I [[get]] (get) home, I'll make dinner.</li>
<li>When I [[arrive]] (arrive), I'll text you.</li>
<li>I stayed at home [[because]] I was tired.</li>
<li>I was tired, [[so]] I went to bed early.</li>
<li>I bought bread [[and]] milk.</li>
<li>I was tired, [[but]] I finished the work.</li>
<li>Would you like tea [[or]] coffee?</li>
<li>First, we bought tickets. [[Then]], we got on the train.</li>
<li>[[Finally]], we arrived at the hotel.</li>
<li>Wash your hands [[before]] you eat.</li>
<li>We went for a walk [[after]] we had lunch.</li>
<li>Call me [[when]] you arrive.</li>
<li>While I [[was cooking]] (cook), my friend set the table.</li>
<li>I'll call you as soon as I [[arrive]] (arrive).</li>
<li>[[Although]] it was cold, we went for a walk.</li>
<li>I enjoyed the trip [[although]] the hotel was noisy.</li>
</ol>
` },
  { id: 300, level: "A2", category: "practice", topic: "mixed_tenses", title: "13. Смешанная практика: времена", content: `
<p>Поставьте глагол в правильную форму (Present Simple, Present Continuous, Past Simple, Past Continuous или Present Perfect).</p>
<ol>
<li>She usually [[walks]] (walk) to school, but today she [[is taking]] (take) the bus.</li>
<li>Look! The cat [[is climbing]] (climb) the tree.</li>
<li>I [[visited]] (visit) my grandmother last weekend.</li>
<li>They [[were playing]] (play) football when it [[started]] (start) to rain.</li>
<li>I [[have never seen]] (never / see) such a beautiful sunset.</li>
<li>He [[has lived]] (live) here since 2015.</li>
<li>We [[were having]] (have) dinner when the phone [[rang]] (ring).</li>
<li>She [[works]] (work) in a bank, but this month she [[is working]] (work) from home.</li>
<li>I [[haven't finished]] (not / finish) my homework yet.</li>
<li>My brother [[goes]] (go) to the gym every Monday.</li>
<li>While I [[was waiting]] (wait) for the bus, I [[saw]] (see) an old friend.</li>
<li>We [[have known]] (know) each other for ten years.</li>
<li>Look! It [[is raining]] (rain).</li>
<li>He [[didn't go]] (not / go) to work yesterday because he [[was]] (be) ill.</li>
<li>I [[have already done]] (already / do) the shopping.</li>
</ol>
` },
  { id: 301, level: "A2", category: "practice", topic: "final_test", title: "14. Итоговый тест по разделу A2", content: `
<p>Проверьте свои знания по всем темам раздела A2.</p>
<h3>Блок 1. Времена</h3>
<ol>
<li>He [[doesn't like]] (not / like) coffee.</li>
<li>They [[are playing]] (play) football right now.</li>
<li>I [[have visited]] (visit) Paris.</li>
<li>She [[was reading]] (read) when the phone rang.</li>
<li>We [[will go]] (go) to the beach if the weather is nice.</li>
<li>I think it [[will rain]] (rain) tomorrow.</li>
<li>Look at those clouds! It [[is going to rain]] (rain).</li>
</ol>
<h3>Блок 2. Вопросы и отрицания</h3>
<ol start="8">
<li>[[Have]] you ever [[been]] (be) to Italy?</li>
<li>Could you tell me where [[the station is]] (the station is / is the station)?</li>
<li>I haven't called her [[yet]].</li>
<li>What are you looking [[for]]?</li>
</ol>
<h3>Блок 3. Существительные и количество</h3>
<ol start="12">
<li>There aren't [[enough]] chairs.</li>
<li>We have [[little]] time left. (почти нет)</li>
<li>You put [[too much]] sugar in my tea!</li>
<li>I have [[a few]] friends here.</li>
</ol>
<h3>Блок 4. Модальные глаголы и местоимения</h3>
<ol start="16">
<li>You [[mustn't]] smoke here.</li>
<li>You [[don't have to]] come early.</li>
<li>You [[should]] see a doctor.</li>
<li>I made this cake by [[myself]].</li>
<li>[[Both]] of my parents speak English.</li>
</ol>
<h3>Блок 5. Сравнения и конструкции</h3>
<ol start="21">
<li>This book is [[better]] (good) than that one.</li>
<li>She is the [[tallest]] (tall) student in our class.</li>
<li>It's [[too]] cold to swim.</li>
<li>I want [[to learn]] (learn) English.</li>
<li>I enjoy [[reading]] (read) before bed.</li>
</ol>
<h3>Блок 6. Предлоги и связки</h3>
<ol start="26">
<li>I'm interested [[in]] art.</li>
<li>We arrived [[in]] Paris late at night.</li>
<li>I stayed at home [[because]] I was tired.</li>
<li>I was tired, [[so]] I went to bed early.</li>
<li>[[Although]] it was cold, we went for a walk.</li>
</ol>
` },

  { id: 221, level: "A2", category: "vocabulary", topic: "people_home", title: "Люди, отношения, дом и повседневная жизнь", content: `
<h3>Люди и характер</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>friendly</b></td><td>дружелюбный</td><td>Our neighbours are friendly.</td></tr>
<tr><td><b>polite</b></td><td>вежливый</td><td>Please be polite.</td></tr>
<tr><td><b>honest</b></td><td>честный</td><td>He's an honest person.</td></tr>
<tr><td><b>patient</b></td><td>терпеливый</td><td>You need to be patient.</td></tr>
<tr><td><b>shy</b></td><td>застенчивый</td><td>I was shy at school.</td></tr>
<tr><td><b>confident</b></td><td>уверенный в себе</td><td>She feels confident now.</td></tr>
<tr><td><b>hard-working</b></td><td>трудолюбивый</td><td>He's very hard-working.</td></tr>
<tr><td><b>reliable</b></td><td>надёжный</td><td>She's a reliable friend.</td></tr>
<tr><td><b>sociable</b></td><td>общительный</td><td>My cousin is sociable.</td></tr>
<tr><td><b>generous</b></td><td>щедрый</td><td>It was generous of you.</td></tr>
<tr><td><b>colleague</b></td><td>коллега</td><td>My colleagues are helpful.</td></tr>
<tr><td><b>neighbour</b></td><td>сосед</td><td>Our neighbour is kind.</td></tr>
<tr><td><b>relationship</b></td><td>отношения</td><td>They have a good relationship.</td></tr>
<tr><td><b>argue</b></td><td>спорить, ссориться</td><td>They argue about money.</td></tr>
<tr><td><b>invite</b></td><td>приглашать</td><td>I invited her to dinner.</td></tr>
</table>
<h3>Дом и быт</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>flat/apartment</b></td><td>квартира</td><td>They rent a small flat.</td></tr>
<tr><td><b>landlord</b></td><td>арендодатель</td><td>I called the landlord.</td></tr>
<tr><td><b>rent</b></td><td>арендовать; аренда</td><td>We rent a house.</td></tr>
<tr><td><b>bill</b></td><td>счёт к оплате</td><td>The electricity bill is high.</td></tr>
<tr><td><b>shelf</b></td><td>полка</td><td>Put it on the shelf.</td></tr>
<tr><td><b>cupboard</b></td><td>шкафчик</td><td>The cups are in the cupboard.</td></tr>
<tr><td><b>drawer</b></td><td>выдвижной ящик</td><td>My keys are in the drawer.</td></tr>
<tr><td><b>sink</b></td><td>раковина</td><td>The plates are in the sink.</td></tr>
<tr><td><b>tidy</b></td><td>прибранный; убирать</td><td>Keep your room tidy.</td></tr>
<tr><td><b>messy</b></td><td>неубранный</td><td>My desk is messy.</td></tr>
<tr><td><b>repair</b></td><td>ремонтировать</td><td>They need to repair the door.</td></tr>
<tr><td><b>do the laundry</b></td><td>стирать вещи</td><td>I do the laundry on Sundays.</td></tr>
<tr><td><b>make the bed</b></td><td>заправлять кровать</td><td>I make the bed every morning.</td></tr>
<tr><td><b>take out the rubbish</b></td><td>выносить мусор</td><td>Take out the rubbish, please.</td></tr>
<tr><td><b>get ready</b></td><td>собираться</td><td>I get ready in ten minutes.</td></tr>
<tr><td><b>be in a hurry</b></td><td>спешить</td><td>I'm in a hurry.</td></tr>
<tr><td><b>stay up late</b></td><td>поздно ложиться</td><td>I stayed up late last night.</td></tr>
<tr><td><b>run out of</b></td><td>остаться без запаса</td><td>We've run out of coffee.</td></tr>
</table>
<h3>Полезные сочетания</h3>
<ul>
<li>make friends — заводить друзей</li>
<li>keep in touch — поддерживать связь</li>
<li>get on well with — ладить с</li>
<li>spend time with someone — проводить время с кем-то</li>
<li>do someone a favour — оказать услугу</li>
<li>make a mess — устроить беспорядок</li>
<li>save time — экономить время</li>
<li>waste time — тратить время впустую</li>
</ul>
` },
  { id: 222, level: "A2", category: "vocabulary", topic: "food_work_study", title: "Еда, покупки, работа и учёба", content: `
<h3>Еда и приготовление</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>ingredient</b></td><td>ингредиент</td><td>What ingredients do we need?</td></tr>
<tr><td><b>recipe</b></td><td>рецепт</td><td>This recipe is easy.</td></tr>
<tr><td><b>meal</b></td><td>приём пищи</td><td>Lunch is my biggest meal.</td></tr>
<tr><td><b>snack</b></td><td>перекус</td><td>I have a snack at four.</td></tr>
<tr><td><b>dish</b></td><td>блюдо</td><td>It's a local dish.</td></tr>
<tr><td><b>spicy</b></td><td>острый</td><td>The curry is too spicy.</td></tr>
<tr><td><b>sour</b></td><td>кислый</td><td>These lemons are sour.</td></tr>
<tr><td><b>fresh</b></td><td>свежий</td><td>Do you have fresh bread?</td></tr>
<tr><td><b>frozen</b></td><td>замороженный</td><td>We bought frozen vegetables.</td></tr>
<tr><td><b>boil</b></td><td>варить</td><td>Boil the potatoes.</td></tr>
<tr><td><b>fry</b></td><td>жарить</td><td>Fry the onions.</td></tr>
<tr><td><b>bake</b></td><td>печь, запекать</td><td>I baked a cake.</td></tr>
<tr><td><b>order</b></td><td>заказывать</td><td>I'd like to order a salad.</td></tr>
</table>
<h3>Покупки и услуги</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>discount</b></td><td>скидка</td><td>Is there a discount?</td></tr>
<tr><td><b>receipt</b></td><td>чек</td><td>Keep the receipt.</td></tr>
<tr><td><b>cash</b></td><td>наличные</td><td>Can I pay in cash?</td></tr>
<tr><td><b>change</b></td><td>сдача</td><td>Here's your change.</td></tr>
<tr><td><b>afford</b></td><td>позволить себе по деньгам</td><td>I can't afford a new phone.</td></tr>
<tr><td><b>borrow</b></td><td>брать взаймы</td><td>Can I borrow your pen?</td></tr>
<tr><td><b>lend</b></td><td>давать взаймы</td><td>Could you lend me ten euros?</td></tr>
<tr><td><b>refund</b></td><td>возврат денег</td><td>Can I get a refund?</td></tr>
<tr><td><b>exchange</b></td><td>обменивать</td><td>Can I exchange this shirt?</td></tr>
<tr><td><b>size</b></td><td>размер</td><td>Do you have a larger size?</td></tr>
<tr><td><b>fit</b></td><td>подходить по размеру</td><td>These shoes don't fit me.</td></tr>
<tr><td><b>customer</b></td><td>покупатель, клиент</td><td>The customer asked for help.</td></tr>
<tr><td><b>complain</b></td><td>жаловаться</td><td>I want to complain about the service.</td></tr>
<tr><td><b>delivery</b></td><td>доставка</td><td>The delivery arrived late.</td></tr>
<tr><td><b>queue</b></td><td>очередь</td><td>We waited in a queue.</td></tr>
</table>
<h3>Работа</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>career</b></td><td>карьера</td><td>She wants a career in design.</td></tr>
<tr><td><b>full-time</b></td><td>полный рабочий день</td><td>He works full-time.</td></tr>
<tr><td><b>part-time</b></td><td>неполный рабочий день</td><td>I have a part-time job.</td></tr>
<tr><td><b>shift</b></td><td>смена</td><td>I work the evening shift.</td></tr>
<tr><td><b>salary</b></td><td>зарплата</td><td>The salary is good.</td></tr>
<tr><td><b>earn</b></td><td>зарабатывать</td><td>She earns enough money.</td></tr>
<tr><td><b>meeting</b></td><td>совещание, встреча</td><td>We have a meeting at ten.</td></tr>
<tr><td><b>task</b></td><td>задача</td><td>I finished the task.</td></tr>
<tr><td><b>deadline</b></td><td>крайний срок</td><td>The deadline is Friday.</td></tr>
<tr><td><b>apply for a job</b></td><td>подавать заявку на работу</td><td>I'm applying for a job.</td></tr>
<tr><td><b>experience</b></td><td>опыт</td><td>Do you have any experience?</td></tr>
<tr><td><b>unemployed</b></td><td>безработный</td><td>He was unemployed for six months.</td></tr>
</table>
<h3>Учёба</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>subject</b></td><td>учебный предмет</td><td>My favourite subject is history.</td></tr>
<tr><td><b>timetable</b></td><td>расписание</td><td>Check the timetable.</td></tr>
<tr><td><b>pass an exam</b></td><td>сдать экзамен</td><td>She passed the exam.</td></tr>
<tr><td><b>fail an exam</b></td><td>провалить экзамен</td><td>He failed his driving test.</td></tr>
<tr><td><b>revise for a test</b></td><td>повторять к тесту</td><td>I need to revise for the test.</td></tr>
<tr><td><b>take notes</b></td><td>делать записи</td><td>I take notes in class.</td></tr>
<tr><td><b>hand in homework</b></td><td>сдавать домашнюю работу</td><td>Hand in your homework tomorrow.</td></tr>
<tr><td><b>improve</b></td><td>улучшать</td><td>I want to improve my English.</td></tr>
<tr><td><b>skill</b></td><td>навык</td><td>Listening is an important skill.</td></tr>
<tr><td><b>make progress</b></td><td>делать успехи</td><td>You're making progress.</td></tr>
</table>
<h3>Фразы</h3>
<ul>
<li>Could I have ...? — Можно мне…?</li>
<li>I'd like to return this. — Я хотел(а) бы вернуть это.</li>
<li>It doesn't fit. — Это не подходит по размеру.</li>
<li>Could we have the bill, please? — Можно счёт?</li>
<li>pay attention — обращать внимание</li>
<li>make a mistake — совершить ошибку</li>
<li>study for an exam — готовиться к экзамену</li>
</ul>
` },
  { id: 223, level: "A2", category: "vocabulary", topic: "travel_health", title: "Путешествия, город, здоровье и погода", content: `
<h3>Путешествия и транспорт</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>journey</b></td><td>поездка, путь</td><td>The journey took three hours.</td></tr>
<tr><td><b>destination</b></td><td>место назначения</td><td>What's your destination?</td></tr>
<tr><td><b>luggage</b></td><td>багаж</td><td>My luggage is heavy.</td></tr>
<tr><td><b>suitcase</b></td><td>чемодан</td><td>I packed my suitcase.</td></tr>
<tr><td><b>booking</b></td><td>бронирование</td><td>I have a hotel booking.</td></tr>
<tr><td><b>reception</b></td><td>стойка регистрации</td><td>Ask at reception.</td></tr>
<tr><td><b>check in</b></td><td>зарегистрироваться</td><td>We checked in online.</td></tr>
<tr><td><b>check out</b></td><td>выписаться из отеля</td><td>We check out at eleven.</td></tr>
<tr><td><b>platform</b></td><td>платформа</td><td>The train leaves from platform four.</td></tr>
<tr><td><b>return ticket</b></td><td>билет туда и обратно</td><td>A return ticket, please.</td></tr>
<tr><td><b>delay</b></td><td>задержка</td><td>The train has a delay.</td></tr>
<tr><td><b>cancel</b></td><td>отменять</td><td>They cancelled the flight.</td></tr>
<tr><td><b>miss a bus</b></td><td>опоздать на автобус</td><td>I missed the last bus.</td></tr>
<tr><td><b>catch a train</b></td><td>успеть на поезд</td><td>We ran to catch the train.</td></tr>
<tr><td><b>traffic jam</b></td><td>пробка</td><td>We were stuck in a traffic jam.</td></tr>
<tr><td><b>hire a car</b></td><td>арендовать машину</td><td>We hired a car at the airport.</td></tr>
</table>
<h3>Город и направления</h3>
<ul>
<li>town/city centre — центр города</li>
<li>neighbourhood — район</li>
<li>square — площадь</li>
<li>crossing — переход</li>
<li>pavement/sidewalk — тротуар</li>
<li>corner — угол улицы</li>
<li>roundabout — круговое движение</li>
<li>entrance / exit — вход / выход</li>
<li>car park/parking lot — парковка</li>
<li>pharmacy/chemist's — аптека</li>
<li>go straight on — идти прямо</li>
<li>turn left/right — повернуть налево/направо</li>
<li>go past — пройти мимо</li>
<li>go across — пересечь</li>
<li>at the end of the street — в конце улицы</li>
<li>on your left/right — слева/справа</li>
<li>opposite — напротив</li>
<li>nearby — поблизости</li>
</ul>
<p>Фразы:</p>
<ul>
<li>Excuse me, how do I get to the station? — Как пройти к вокзалу?</li>
<li>Is it far from here? — Это далеко отсюда?</li>
<li>It's about five minutes on foot. — Это примерно пять минут пешком.</li>
</ul>
<h3>Здоровье и самочувствие</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>feel unwell</b></td><td>плохо себя чувствовать</td><td>I feel unwell today.</td></tr>
<tr><td><b>headache</b></td><td>головная боль</td><td>I've got a headache.</td></tr>
<tr><td><b>stomach ache</b></td><td>боль в животе</td><td>He has a stomach ache.</td></tr>
<tr><td><b>sore throat</b></td><td>боль в горле</td><td>I have a sore throat.</td></tr>
<tr><td><b>cough</b></td><td>кашель; кашлять</td><td>She has a bad cough.</td></tr>
<tr><td><b>fever/temperature</b></td><td>температура</td><td>He has a temperature.</td></tr>
<tr><td><b>appointment</b></td><td>запись на приём</td><td>I have a doctor's appointment.</td></tr>
<tr><td><b>medicine</b></td><td>лекарство</td><td>Take your medicine as directed.</td></tr>
<tr><td><b>rest</b></td><td>отдыхать; отдых</td><td>You need some rest.</td></tr>
<tr><td><b>recover</b></td><td>выздоравливать</td><td>It took a week to recover.</td></tr>
<tr><td><b>worried</b></td><td>обеспокоенный</td><td>I'm worried about the test.</td></tr>
<tr><td><b>nervous</b></td><td>нервничающий</td><td>I get nervous before interviews.</td></tr>
<tr><td><b>excited</b></td><td>радостно взволнованный</td><td>I'm excited about the trip.</td></tr>
<tr><td><b>disappointed</b></td><td>разочарованный</td><td>We were disappointed.</td></tr>
<tr><td><b>proud</b></td><td>гордый</td><td>I'm proud of you.</td></tr>
<tr><td><b>exhausted</b></td><td>совершенно уставший</td><td>I'm exhausted after work.</td></tr>
</table>
<h3>Одежда и погода</h3>
<ul>
<li>tight — тесный</li>
<li>loose — свободный</li>
<li>suit someone — идти кому-то (об одежде)</li>
<li>cloudy — облачный</li>
<li>foggy — туманный</li>
<li>storm — буря, гроза</li>
<li>thunder — гром</li>
<li>lightning — молния</li>
<li>shower — кратковременный дождь</li>
<li>freezing — очень холодный</li>
<li>boiling — очень жаркий</li>
<li>mild — умеренный</li>
<li>forecast — прогноз погоды</li>
<li>coast — побережье</li>
<li>forest — лес</li>
<li>waterfall — водопад</li>
<li>environment — окружающая среда</li>
<li>recycle — перерабатывать</li>
<li>pollution — загрязнение</li>
</ul>
` },
  { id: 224, level: "A2", category: "vocabulary", topic: "free_time_tech", title: "Досуг, технологии, мнения и общение", content: `
<h3>Свободное время и культура</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>hobby</b></td><td>хобби</td><td>Photography is my hobby.</td></tr>
<tr><td><b>join</b></td><td>присоединяться</td><td>Would you like to join us?</td></tr>
<tr><td><b>take up</b></td><td>начать заниматься</td><td>I took up swimming last year.</td></tr>
<tr><td><b>give up</b></td><td>бросить, отказаться</td><td>He gave up smoking.</td></tr>
<tr><td><b>performance</b></td><td>выступление</td><td>The performance was excellent.</td></tr>
<tr><td><b>exhibition</b></td><td>выставка</td><td>We visited an exhibition.</td></tr>
<tr><td><b>audience</b></td><td>публика, зрители</td><td>The audience clapped.</td></tr>
<tr><td><b>entrance fee</b></td><td>плата за вход</td><td>Is there an entrance fee?</td></tr>
<tr><td><b>recommend</b></td><td>рекомендовать</td><td>Can you recommend a film?</td></tr>
<tr><td><b>review</b></td><td>отзыв, рецензия</td><td>I read a review online.</td></tr>
<tr><td><b>plot</b></td><td>сюжет</td><td>The plot was easy to follow.</td></tr>
<tr><td><b>character</b></td><td>персонаж</td><td>My favourite character is the detective.</td></tr>
<tr><td><b>ending</b></td><td>концовка</td><td>I didn't like the ending.</td></tr>
<tr><td><b>documentary</b></td><td>документальный фильм</td><td>We watched a documentary.</td></tr>
<tr><td><b>subtitles</b></td><td>субтитры</td><td>I watched it with subtitles.</td></tr>
</table>
<h3>Технологии и интернет</h3>
<ul>
<li>device — устройство</li>
<li>screen — экран</li>
<li>charger — зарядное устройство</li>
<li>battery — аккумулятор</li>
<li>download / upload — скачивать / загружать в интернет</li>
<li>attachment — вложение</li>
<li>password — пароль</li>
<li>account — аккаунт</li>
<li>website — сайт</li>
<li>search for — искать</li>
<li>save a file — сохранить файл</li>
<li>delete — удалить</li>
<li>connection — соединение, связь</li>
<li>log in / log out — войти / выйти из аккаунта</li>
<li>send an attachment — отправить вложение</li>
</ul>
<p>Примеры:</p>
<ul>
<li>My battery is low.</li>
<li>The internet connection is slow.</li>
<li>I deleted the message by mistake.</li>
</ul>
<h3>Мнения и реакции</h3>
<ul>
<li>In my opinion, ... — по моему мнению…</li>
<li>I agree. / I don't agree. — Я согласен/не согласен.</li>
<li>I'm not sure. — Я не уверен(а).</li>
<li>It depends. — Это зависит.</li>
<li>That sounds good. — Звучит хорошо.</li>
<li>I see what you mean. — Понимаю, что ты имеешь в виду.</li>
<li>I'd rather ... — Я бы предпочёл…</li>
<li>I prefer A to B. — Я предпочитаю A варианту B.</li>
<li>I'm keen on ... — Я увлекаюсь…</li>
<li>I don't mind ... — Я не против…</li>
<li>I can't stand ... — Терпеть не могу…</li>
<li>What a pity! — Как жаль!</li>
<li>Never mind. — Ничего страшного.</li>
<li>I'm sorry to hear that. — Мне жаль это слышать.</li>
<li>Congratulations! — Поздравляю!</li>
<li>Good luck! — Удачи!</li>
</ul>
<h3>Вежливое общение</h3>
<ul>
<li>Could you help me, please? — Не могли бы вы мне помочь?</li>
<li>Would you mind opening the window? — Не возражаете открыть окно?</li>
<li>Would you like to ...? — Хотите…?</li>
<li>Shall we ...? — Может, давай…?</li>
<li>Why don't we ...? — Почему бы нам не…?</li>
<li>How about + -ing? — Как насчёт…?</li>
<li>Could you repeat that, please? — Не могли бы вы повторить?</li>
<li>Could you speak more slowly? — Не могли бы вы говорить медленнее?</li>
<li>What does this word mean? — Что означает это слово?</li>
<li>How do you spell that? — Как это пишется по буквам?</li>
</ul>
` },
  { id: 225, level: "A2", category: "vocabulary", topic: "verbs_linkers", title: "Частые глаголы, сочетания, наречия и связки", content: `
<h3>Частые глаголы</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>decide</b></td><td>решать</td><td>We decided to stay.</td></tr>
<tr><td><b>agree</b></td><td>соглашаться</td><td>I agree with you.</td></tr>
<tr><td><b>suggest</b></td><td>предлагать</td><td>She suggested going by train.</td></tr>
<tr><td><b>explain</b></td><td>объяснять</td><td>Can you explain the rule?</td></tr>
<tr><td><b>expect</b></td><td>ожидать</td><td>I expect he'll be late.</td></tr>
<tr><td><b>seem</b></td><td>казаться</td><td>You seem tired.</td></tr>
<tr><td><b>happen</b></td><td>происходить</td><td>What happened yesterday?</td></tr>
<tr><td><b>manage</b></td><td>суметь, справиться</td><td>I managed to finish on time.</td></tr>
<tr><td><b>avoid</b></td><td>избегать</td><td>Try to avoid mistakes.</td></tr>
<tr><td><b>refuse</b></td><td>отказываться</td><td>He refused to answer.</td></tr>
<tr><td><b>offer</b></td><td>предлагать</td><td>She offered to help.</td></tr>
<tr><td><b>promise</b></td><td>обещать</td><td>I promise to call.</td></tr>
<tr><td><b>prefer</b></td><td>предпочитать</td><td>I prefer walking.</td></tr>
<tr><td><b>miss</b></td><td>скучать; пропускать</td><td>I missed the bus.</td></tr>
<tr><td><b>spend</b></td><td>тратить; проводить время</td><td>I spent two hours studying.</td></tr>
</table>
<h3>Фразовые глаголы</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>get on with</b></td><td>ладить с</td><td>I get on with my neighbours.</td></tr>
<tr><td><b>look after</b></td><td>присматривать за</td><td>Can you look after the dog?</td></tr>
<tr><td><b>look for</b></td><td>искать</td><td>I'm looking for my keys.</td></tr>
<tr><td><b>find out</b></td><td>выяснять</td><td>Let's find out the answer.</td></tr>
<tr><td><b>put off</b></td><td>откладывать</td><td>Don't put off your homework.</td></tr>
<tr><td><b>carry on</b></td><td>продолжать</td><td>Please carry on reading.</td></tr>
<tr><td><b>pick up</b></td><td>поднять; забрать</td><td>I'll pick you up at seven.</td></tr>
<tr><td><b>set off</b></td><td>отправляться в путь</td><td>We set off early.</td></tr>
<tr><td><b>get back</b></td><td>возвращаться</td><td>What time did you get back?</td></tr>
<tr><td><b>try on</b></td><td>примерить</td><td>Try on these shoes.</td></tr>
<tr><td><b>work out</b></td><td>тренироваться; получаться</td><td>I work out twice a week.</td></tr>
<tr><td><b>turn on/off</b></td><td>включить/выключить</td><td>Turn off the TV.</td></tr>
<tr><td><b>take off</b></td><td>снять; взлететь</td><td>Take off your shoes.</td></tr>
<tr><td><b>run out of</b></td><td>исчерпать запас</td><td>We've run out of bread.</td></tr>
</table>
<h3>Словосочетания — учи целиком</h3>
<ul>
<li>make a decision — принять решение</li>
<li>make a mistake — совершить ошибку</li>
<li>make friends — подружиться</li>
<li>do your best — сделать всё возможное</li>
<li>have a good time — хорошо провести время</li>
<li>have a rest — отдохнуть</li>
<li>take a break — сделать перерыв</li>
<li>take a photo — сделать фото</li>
<li>catch a bus/train — успеть на автобус/поезд</li>
<li>miss a bus/train — опоздать на автобус/поезд</li>
<li>keep in touch — поддерживать связь</li>
<li>save money — экономить/копить деньги</li>
<li>spend money on — тратить деньги на</li>
<li>pay attention to — обращать внимание на</li>
<li>tell the truth — говорить правду</li>
<li>give someone a hand — помочь кому-то</li>
<li>book a room — забронировать номер</li>
<li>pass/fail an exam — сдать/провалить экзамен</li>
</ul>
<h3>Наречия и связки</h3>
<ul>
<li>recently — недавно</li>
<li>already — уже</li>
<li>yet — уже/ещё (часто вопрос/отрицание)</li>
<li>just — только что</li>
<li>still — всё ещё</li>
<li>soon — скоро</li>
<li>during — во время + существительное</li>
<li>while — пока/в то время как + предложение</li>
<li>until — до тех пор пока</li>
<li>as soon as — как только</li>
<li>at first — сначала</li>
<li>in the end — в итоге</li>
<li>finally — наконец</li>
<li>almost — почти</li>
<li>enough — достаточно</li>
<li>quite — довольно</li>
<li>hardly ever — почти никогда</li>
<li>although — хотя</li>
<li>for example — например</li>
<li>first of all — прежде всего</li>
</ul>
` },

  { id: 401, level: "B1", category: "theory", topic: "past_perfect", title: "01. Past Perfect — более раннее прошлое", content: `
<p><b>Past Perfect = had + V3.</b> Показывает, что одно действие произошло раньше другого момента или действия в прошлом.</p>
<ul>
<li>When we arrived, the film <b>had started</b>. — Когда мы приехали, фильм уже начался.</li>
<li>She was nervous because she <b>had never flown</b> before. — Она нервничала, потому что раньше никогда не летала.</li>
<li>By the time I got to the station, the train <b>had left</b>. — К тому времени, когда я добрался до станции, поезд уже ушёл.</li>
</ul>
<h3>Формы</h3>
<ul>
<li>Утверждение: subject + <b>had + V3</b> — They had finished.</li>
<li>Отрицание: subject + <b>hadn't + V3</b> — They hadn't finished.</li>
<li>Вопрос: <b>Had + subject + V3?</b> — Had they finished?</li>
</ul>
<h3>Past Perfect и Past Simple</h3>
<p>Past Simple сообщает о событии в прошлом. Past Perfect подчёркивает, что событие произошло ещё раньше:</p>
<ul>
<li>When I arrived, he <b>had left</b>. — Когда я приехал, он уже ушёл.</li>
</ul>
<p>Не нужно использовать Past Perfect для каждого действия в прошлом. Он нужен, когда важно показать предшествование.</p>
<h3>Маркеры</h3>
<p><b>already, just, never, before, after, by the time</b> часто встречаются с Past Perfect, если речь идёт о более раннем действии.</p>
` },
  { id: 402, level: "B1", category: "theory", topic: "present_perfect_continuous", title: "02. Present Perfect Continuous", content: `
<p><b>have/has been + V-ing</b> подчёркивает длительность процесса, начавшегося в прошлом и продолжающегося сейчас, или недавнюю деятельность с заметным результатом.</p>
<ul>
<li>I’ve been learning English for three years. — Я изучаю английский три года.</li>
<li>She’s tired because she’s been running. — Она устала, потому что бегала.</li>
<li>How long have you been waiting? — Как долго ты ждёшь?</li>
</ul>
<h3>Сравнение</h3>
<p>Present Perfect часто акцентирует результат/количество; Present Perfect Continuous — процесс.</p>
<ul>
<li>I’ve read three chapters. — Я прочитал три главы.</li>
<li>I’ve been reading for two hours. — Я читаю уже два часа.</li>
</ul>
<p>С глаголами состояния обычно используйте Present Perfect: I’ve known her for years, не I’ve been knowing her.</p>
` },
  { id: 403, level: "B1", category: "theory", topic: "future_continuous", title: "03. Future Continuous и временные придаточные о будущем", content: `
<h3>Future Continuous</h3>
<p><b>Форма: will be + V-ing.</b> Используется, когда действие будет в процессе в определённый момент будущего.</p>
<ul>
<li>This time tomorrow, I'll be flying to Rome. — Завтра в это время я буду лететь в Рим.</li>
<li>At eight tonight, we'll be having dinner. — Сегодня в восемь мы будем ужинать.</li>
</ul>
<p>Вопрос: <b>Will + subject + be + V-ing?</b> — Will you be working at six?<br>Отрицание: <b>won't be + V-ing</b> — I won't be working tomorrow evening.</p>
<p>Future Continuous также помогает вежливо спросить о планах: <b>Will you be using the car tonight?</b> — Ты будешь пользоваться машиной сегодня вечером?</p>
<h3>Будущее после when, as soon as, until, before и after</h3>
<p>Если речь о будущем, в придаточной части времени обычно используется <b>Present Simple</b>, а не will.</p>
<ul>
<li>I'll call you when I arrive. — Я позвоню тебе, когда приеду.</li>
<li>We'll wait until she comes. — Мы подождём, пока она не придёт.</li>
<li>I'll send the message as soon as I get home. — Я отправлю сообщение, как только доберусь домой.</li>
</ul>
` },
  { id: 404, level: "B1", category: "theory", topic: "modals_deduction", title: "04. Модальные глаголы B1: вероятность и выводы о прошлом", content: `
<h3>Вероятность в настоящем</h3>
<ul>
<li><b>may / might / could + V1</b> — возможно.</li>
<li><b>must + V1</b> — говорящий почти уверен.</li>
<li><b>can't + V1</b> — говорящий считает это невозможным.</li>
</ul>
<ul>
<li>She might be at home. — Возможно, она дома.</li>
<li>He must be tired after the trip. — Должно быть, он устал после поездки.</li>
<li>That can't be true. — Это не может быть правдой.</li>
</ul>
<p>Здесь <b>must</b> выражает логический вывод, а не обязанность.</p>
<h3>Выводы о прошлом</h3>
<p>Используйте <b>modal verb + have + V3</b>:</p>
<ul>
<li><b>must have + V3</b> — должно быть, произошло.</li>
<li><b>might/may/could have + V3</b> — возможно, произошло.</li>
<li><b>can't have + V3</b> — не могло произойти.</li>
<li><b>should have + V3</b> — следовало сделать, но не сделал; сожаление или критика.</li>
</ul>
<ul>
<li>She must have forgotten the meeting. — Должно быть, она забыла о встрече.</li>
<li>They might have taken a taxi. — Возможно, они взяли такси.</li>
<li>He can't have seen us. — Он не мог нас видеть.</li>
<li>I should have checked the address. — Мне следовало проверить адрес.</li>
</ul>
<p><b>Must have done</b> — вывод о прошлом; <b>had to do</b> — необходимость в прошлом:</p>
<ul>
<li>He must have left. — Должно быть, он ушёл.</li>
<li>He had to leave early. — Ему пришлось уйти рано.</li>
</ul>
` },
  { id: 405, level: "B1", category: "theory", topic: "conditionals_2_3", title: "05. Условные предложения B1: Second и Third Conditional", content: `
<h3>Second Conditional — воображаемое настоящее или будущее</h3>
<p><b>If + Past Simple, would + V1.</b> Используется для гипотетической ситуации или совета.</p>
<ul>
<li>If I had more time, I would travel more. — Если бы у меня было больше времени, я бы больше путешествовал.</li>
<li>If I were you, I'd apologise. — На твоём месте я бы извинился.</li>
</ul>
<p>Хотя используется Past Simple, речь обычно не о прошлом, а о воображаемой ситуации сейчас или в будущем.</p>
<h3>Third Conditional — нереальное прошлое</h3>
<p><b>If + Past Perfect, would have + V3.</b> Говорим о прошлом, которое уже нельзя изменить.</p>
<ul>
<li>If we had left earlier, we would have caught the train. — Если бы мы вышли раньше, мы бы успели на поезд.</li>
<li>If she had studied harder, she might have passed the exam. — Если бы она занималась усерднее, возможно, она сдала бы экзамен.</li>
</ul>
<h3>Unless</h3>
<p><b>Unless = if…not</b> («если не»).</p>
<ul>
<li>I won't go unless you come. — Я не пойду, если ты не придёшь.</li>
<li>Unless we hurry, we'll miss the bus. — Если мы не поторопимся, мы опоздаем на автобус.</li>
</ul>
` },
  { id: 406, level: "B1", category: "theory", topic: "passive_voice", title: "06. Passive Voice — пассивный залог", content: `
<p>Пассив нужен, когда важнее действие или объект, чем исполнитель. Форма: <b>be в нужном времени + V3</b>.</p>
<ul>
<li>Present Simple: The rooms are cleaned daily. — Комнаты убирают каждый день.</li>
<li>Past Simple: The bridge was built in 1998. — Мост построили в 1998 году.</li>
<li>Present Perfect: The email has been sent. — Письмо отправлено.</li>
<li>Future: The results will be announced tomorrow. — Результаты объявят завтра.</li>
<li>Modal: This problem can be solved. — Эту проблему можно решить.</li>
</ul>
<p>Актив: Someone stole my phone. Пассив: My phone was stolen. Исполнитель с <b>by</b> добавляется, если он важен: The novel was written by Orwell.</p>
<p>Не все глаголы допускают пассив: arrive, sleep, happen обычно не имеют прямого дополнения.</p>
` },
  { id: 407, level: "B1", category: "theory", topic: "reported_speech", title: "07. Reported Speech — косвенная речь", content: `
<p>Косвенная речь передаёт смысл, а не точную цитату.<br>Direct: Tom said, “I am tired.” → Tom said (that) he was tired. — Том сказал, что устал.</p>
<h3>Частый сдвиг времён</h3>
<p>Present Simple → Past Simple; Present Continuous → Past Continuous; Past Simple → Past Perfect; will → would; can → could; may → might. Сдвиг зависит от контекста и не всегда обязателен, если информация актуальна.</p>
<p>Слова времени и места могут меняться: today → that day, tomorrow → the next day, here → there, this → that.</p>
<h3>Вопросы</h3>
<p>Общий вопрос: ask + if/whether + прямой порядок слов. “Are you busy?” → She asked if I was busy.<br>Специальный вопрос: ask + question word + subject + verb. “Where do you live?” → He asked where I lived. Не: where did I live.</p>
<h3>Просьбы</h3>
<p>tell/ask + object + (not) to + V1: “Please wait.” → He asked me to wait. “Don’t touch it.” → She told us not to touch it.</p>
<h3>Say / tell</h3>
<p>say something; tell someone something. She said she was busy. / She told me she was busy.</p>
` },
  { id: 408, level: "B1", category: "theory", topic: "relative_clauses", title: "08. Relative Clauses", content: `
<p>Относительные придаточные уточняют человека, предмет, место или время.</p>
<ul>
<li><b>who</b> — люди: The woman who lives next door is a doctor. — Женщина, которая живёт по соседству, врач.</li>
<li><b>which</b> — предметы: The book which I bought is useful. — Книга, которую я купил, полезная.</li>
<li><b>that</b> — люди/предметы в ограничительных придаточных.</li>
<li><b>whose</b> — принадлежность: the boy whose bike was stolen — мальчик, чей велосипед украли.</li>
<li><b>where</b> — место; <b>when</b> — время.</li>
</ul>
<p>Defining clause необходима для смысла, без запятых: The students who passed can leave. Non-defining добавляет информацию и выделяется запятыми: My brother, who lives in Canada, is visiting us. В non-defining обычно не используется that.</p>
<p>Если местоимение — дополнение, его можно опустить: The film (that) we saw was excellent. Если это подлежащее, опускать нельзя: The man who called is here.</p>
` },
  { id: 409, level: "B1", category: "theory", topic: "indirect_questions_tags", title: "09. Косвенные вопросы и Question Tags", content: `
<h3>Косвенные вопросы</h3>
<p>Косвенные вопросы звучат вежливее и часто начинаются с <b>Could you tell me…?</b>, <b>Do you know…?</b>, <b>I wonder…</b>. Внутри используется прямой порядок слов; вспомогательный do/does/did обычно исчезает.</p>
<ul>
<li>Where is the station? → Could you tell me <b>where the station is</b>? — Не могли бы вы сказать, где станция?</li>
<li>What time does it start? → Do you know <b>what time it starts</b>? — Вы знаете, во сколько это начинается?</li>
<li>Did she call? → Do you know <b>if/whether she called</b>? — Вы знаете, звонила ли она?</li>
</ul>
<p>Если исходный вопрос предполагает ответ «да/нет», используйте <b>if</b> или <b>whether</b>.</p>
<h3>Question tags — разделительные вопросы</h3>
<p>Короткие хвостики соответствуют русскому «не так ли?», «правда?».</p>
<ul>
<li>Утверждение + отрицательный хвостик: You're tired, <b>aren't you?</b></li>
<li>Отрицание + положительный хвостик: She doesn't drive, <b>does she?</b></li>
</ul>
<p>В хвостике повторяется вспомогательный или модальный глагол:</p>
<ul>
<li>They can swim, can't they? — Они умеют плавать, не так ли?</li>
<li>He went home, didn't he? — Он пошёл домой, не так ли?</li>
</ul>
<p>Особые формы: <b>Let's go, shall we?</b> и <b>I'm late, aren't I?</b></p>
` },
  { id: 410, level: "B1", category: "theory", topic: "used_to", title: "10. Used to / be used to / get used to", content: `
<p><b>used to + V1</b> — прежняя привычка или состояние, которых теперь нет: I used to live in a village. — Раньше я жил в деревне.</p>
<p><b>be used to + noun/V-ing</b> — быть привычным к чему-то: I’m used to cold weather. — Я привык к холодной погоде. Здесь to — предлог, поэтому нужен -ing.</p>
<p><b>get used to + noun/V-ing</b> — привыкать постепенно: I’m getting used to my new job. — Я привыкаю к новой работе.</p>
<p>Сравните: I used to wake up at ten. — Раньше я просыпался в десять. I’m used to waking up at six. — Я привык просыпаться в шесть.</p>
` },
  { id: 411, level: "B1", category: "theory", topic: "word_formation", title: "11. Словообразование", content: `
<p>Суффиксы помогают распознавать части речи:</p>
<ul>
<li>существительные: -tion (information), -ment (development), -ness (kindness), -er (teacher), -ity (possibility);</li>
<li>прилагательные: -ful (useful), -less (careless), -ous (dangerous), -able (comfortable), -ive (creative);</li>
<li>наречия: -ly (carefully), но fast/hard/well имеют особые формы.</li>
</ul>
<p>Семейства: decide → decision → decisive; succeed → success → successful → successfully; care → careful/careless; possible → possibility/impossible.</p>
<p>Приставки: un- (unhappy), im-/in-/ir-/il- (impossible, incorrect, irregular, illegal), dis- (disagree), re- (rewrite), mis- (misunderstand).</p>
<p>Составные прилагательные: a five-year-old child; a ten-minute walk. Но: The child is five years old.</p>
` },
  { id: 412, level: "B1", category: "theory", topic: "functional_english", title: "12. Functional English — реальные ситуации", content: `
<h3>Мнение</h3>
<p>I think/believe that… — Я думаю/считаю, что…; In my opinion… — По моему мнению…; As far as I’m concerned… — Что касается меня…</p>
<h3>Согласие/несогласие</h3>
<p>Exactly. — Именно. / I see your point, but… — Я понимаю твою точку зрения, но… / I’m afraid I disagree. — Боюсь, я не согласен. / I agree up to a point. — Отчасти я согласен.</p>
<h3>Просьба и предложение</h3>
<p>Could you possibly help me? — Не могли бы вы помочь? / Would you mind sending it again? — Вы не возражаете отправить ещё раз? / Why don’t we take a break? — Почему бы нам не сделать перерыв? / How about going for a walk? — Как насчёт прогулки?</p>
<h3>Извинение и уточнение</h3>
<p>I’m sorry for being late. — Извини, что опоздал. / I didn’t mean to upset you. — Я не хотел тебя расстроить. / Could you say that again? — Не могли бы вы повторить? / What I’m trying to say is… — Я пытаюсь сказать, что…</p>
` },
  { id: 413, level: "B1", category: "theory", topic: "writing", title: "13. Письмо B1", content: `
<h3>Неофициальное письмо</h3>
<p>Структура: приветствие → дружелюбное вступление → ответ на вопросы/детали → встречный вопрос → завершение.<br>Фразы: Thanks for your message! / It was great to hear from you. / Write back soon! / Best wishes,</p>
<h3>Формальное письмо</h3>
<p>Dear Sir or Madam; I am writing to enquire about…; Could you please provide…?; I would be grateful if…; I look forward to hearing from you. Если имя неизвестно: Yours faithfully; если известно: Yours sincerely.</p>
<h3>Рассказ</h3>
<p>Past Simple — основные события; Past Continuous — фон; Past Perfect — более раннее событие. Связки: at first, suddenly, a few minutes later, fortunately, in the end.</p>
<h3>Отзыв</h3>
<p>Что оцениваете → краткое описание → плюсы/минусы → рекомендация. Фразы: What I liked most was…; One drawback is…; Overall, I would recommend it.</p>
<h3>Эссе-мнение</h3>
<p>Вступление → аргумент 1 → аргумент 2/контраргумент → вывод. Связки: Firstly, On the other hand, In addition, To sum up.</p>
<h3>Проверка</h3>
<p>Ответил ли я на все пункты? Есть ли абзацы и связки? Проверены ли времена, артикли, порядок слов и орфография?</p>
` },
  { id: 451, level: "B1", category: "practice", topic: "past_perfect", title: "01. Практика: Past Perfect", content: `
<p>Вставьте правильную форму глагола (Past Simple или Past Perfect).</p>
<ol>
<li>By the time we arrived, the shop [[had closed]] (close).</li>
<li>When I called Anna, she [[had]] already [[gone]] (go) to bed.</li>
<li>Переведите: «Когда я пришёл, они уже ушли» → [[When I arrived, they had already left.]]</li>
<li>When we arrived, the film [[had started]] (start).</li>
<li>She was nervous because she [[had never flown]] (never/fly) before.</li>
<li>By the time I got to the station, the train [[had left]] (leave).</li>
</ol>
` },
  { id: 452, level: "B1", category: "practice", topic: "present_perfect_continuous", title: "02. Практика: Present Perfect Continuous", content: `
<p>Выберите правильную форму или переведите.</p>
<ol>
<li>Выберите: I’ve written / I’ve been writing emails all morning. → [[I've been writing]]</li>
<li>Переведите: «Как долго ты ждёшь?» → [[How long have you been waiting?]]</li>
<li>Переведите: «Я сделал домашнее задание» → [[I have done my homework.|I've done my homework.]]</li>
<li>I [[have been learning]] (learn) English for three years.</li>
<li>She’s tired because she [[has been running]] (run).</li>
<li>I [[have known]] (know) her for years.</li>
</ol>
` },
  { id: 453, level: "B1", category: "practice", topic: "future_continuous", title: "03. Практика: Future Continuous", content: `
<p>Вставьте правильную форму (Future Continuous или Present Simple).</p>
<ol>
<li>This time next week, we [[will be lying]] (lie) on the beach.</li>
<li>Will you [[be using]] (use) the computer at 7 p.m.?</li>
<li>Переведите: «Я позвоню, как только закончу работу» → [[I will call you as soon as I finish work.]]</li>
<li>This time tomorrow, I [[will be flying]] (fly) to Rome.</li>
<li>At eight tonight, we [[will be having]] (have) dinner.</li>
<li>I [[won't be working]] (not/work) tomorrow evening.</li>
<li>I'll call you when I [[arrive]] (arrive).</li>
<li>We'll wait until she [[comes]] (come).</li>
<li>I'll send the message as soon as I [[get]] (get) home.</li>
</ol>
` },
  { id: 454, level: "B1", category: "practice", topic: "modals_deduction", title: "04. Практика: Модальные глаголы", content: `
<p>Вставьте правильный модальный глагол (must, might, can't, should).</p>
<ol>
<li>The lights are off. They [[must]] have gone to bed.</li>
<li>She [[might]] have missed the train; I'm not sure.</li>
<li>You [[should]] have called me earlier. I was worried.</li>
<li>Переведите: «Должно быть, они забыли наш адрес» → [[They must have forgotten our address.]]</li>
<li>She might [[be]] at home.</li>
<li>He must [[be]] tired after the trip.</li>
<li>That [[can't]] be true.</li>
<li>She must [[have forgotten]] (forget) the meeting.</li>
<li>They might [[have taken]] (take) a taxi.</li>
<li>He can't [[have seen]] (see) us.</li>
<li>I should [[have checked]] (check) the address.</li>
</ol>
` },
  { id: 455, level: "B1", category: "practice", topic: "conditionals_2_3", title: "05. Практика: Second и Third Conditional", content: `
<p>Вставьте правильную форму глагола.</p>
<ol>
<li>If I [[were]] (be) you, I [[would talk]] (talk) to her.</li>
<li>If they had booked earlier, they [[would have paid]] (pay) less.</li>
<li>Переведите: «Если бы я знал об этом, я бы тебе позвонил» → [[If I had known about it, I would have called you.]]</li>
<li>If I [[had]] more time, I [[would travel]] (travel) more.</li>
<li>If I were you, I [[would apologise|'d apologise]] (apologise).</li>
<li>If we [[had left]] (leave) earlier, we [[would have caught]] (catch) the train.</li>
<li>If she had studied harder, she [[might have passed]] (pass) the exam.</li>
<li>I won't go [[unless]] you come.</li>
<li>[[Unless]] we hurry, we'll miss the bus.</li>
</ol>
` },
  { id: 456, level: "B1", category: "practice", topic: "passive_voice", title: "06. Практика: Passive Voice", content: `
<p>Преобразуйте предложения в пассивный залог.</p>
<ol>
<li>They make these shoes in Italy. → [[These shoes are made in Italy.]]</li>
<li>Someone has broken the window. → [[The window has been broken.]]</li>
<li>They will publish the report next week. → [[The report will be published next week.]]</li>
<li>The rooms are cleaned daily. (Перевод: Комнаты убирают каждый день.)</li>
<li>The bridge was built in 1998. (Перевод: Мост построили в 1998 году.)</li>
<li>The email has been sent. (Перевод: Письмо отправлено.)</li>
</ol>
` },
  { id: 457, level: "B1", category: "practice", topic: "reported_speech", title: "07. Практика: Reported Speech", content: `
<p>Передайте косвенно.</p>
<ol>
<li>“I can help you,” Mark said. → [[Mark said he could help me.]]</li>
<li>“Where are you going?” she asked me. → [[She asked me where I was going.]]</li>
<li>“Don’t be late,” Dad told us. → [[Dad told us not to be late.]]</li>
<li>Tom said, “I am tired.” → [[Tom said (that) he was tired.]]</li>
<li>“Are you busy?” → [[She asked if I was busy.]]</li>
<li>“Please wait.” → [[He asked me to wait.]]</li>
<li>“Don’t touch it.” → [[She told us not to touch it.]]</li>
</ol>
` },
  { id: 458, level: "B1", category: "practice", topic: "relative_clauses", title: "08. Практика: Relative Clauses", content: `
<p>Вставьте who/which/whose/where.</p>
<ol>
<li>The person [[who]] helped me was kind.</li>
<li>This is the house [[where]] I grew up.</li>
<li>The woman [[whose]] car was damaged called the police.</li>
<li>The woman [[who]] lives next door is a doctor.</li>
<li>The book [[which]] I bought is useful.</li>
<li>the boy [[whose]] bike was stolen</li>
</ol>
` },
  { id: 459, level: "B1", category: "practice", topic: "indirect_questions_tags", title: "09. Практика: Косвенные вопросы и Tags", content: `
<ol>
<li>Сделайте вопрос косвенным: Where does he work? → [[Do you know where he works?]]</li>
<li>Сделайте вопрос косвенным: Is the shop open? → [[Could you tell me if the shop is open?]]</li>
<li>Добавьте tag: You haven't seen her, ___? → [[have you]]</li>
<li>Добавьте tag: Let's start, ___? → [[shall we]]</li>
<li>Could you tell me [[where the station is]] (where is the station / where the station is)?</li>
<li>Do you know [[what time it starts]] (what time does it start / what time it starts)?</li>
<li>Do you know [[if]] she called? (if/that)</li>
<li>You're tired, [[aren't you]]?</li>
<li>She doesn't drive, [[does she]]?</li>
<li>They can swim, [[can't they]]?</li>
</ol>
` },
  { id: 460, level: "B1", category: "practice", topic: "used_to", title: "10. Практика: Used to", content: `
<ol>
<li>I’m used to [[working]] (work/working) at night.</li>
<li>We used to [[go]] (go/going) there.</li>
<li>Переведите: «Я постепенно привыкаю говорить по-английски» → [[I'm getting used to speaking English.]]</li>
<li>I [[used to]] live in a village. (раньше жил)</li>
<li>I’m used to [[cold]] weather. (холодная погода)</li>
<li>I’m getting used to my [[new]] job. (новая работа)</li>
<li>I used to [[wake]] up at ten. (просыпался раньше)</li>
<li>I’m used to [[waking]] up at six. (привык просыпаться)</li>
</ol>
` },
  { id: 461, level: "B1", category: "practice", topic: "word_formation", title: "11. Практика: Словообразование", content: `
<ol>
<li>Образуйте существительное от decide: [[decision]]</li>
<li>Образуйте существительное от improve: [[improvement]]</li>
<li>Образуйте существительное от kind: [[kindness]]</li>
<li>Образуйте существительное от possible: [[possibility]]</li>
<li>She explained it very [[clearly]] (clear).</li>
<li>It was a difficult [[decision]] (decide).</li>
<li>un- (unhappy), im- (impossible), dis- (disagree), re- (rewrite).</li>
<li>a five-[[year]]-old child (years/year)</li>
<li>a ten-[[minute]] walk (minutes/minute)</li>
</ol>
` },
  { id: 462, level: "B1", category: "practice", topic: "functional_english", title: "12. Практика: Functional English", content: `
<p>Дополните фразы.</p>
<ol>
<li>Мнение: [[In my opinion|I think]] ...</li>
<li>Согласие: [[Exactly]].</li>
<li>Несогласие: I’m afraid I [[disagree]].</li>
<li>Просьба: [[Could]] you possibly help me?</li>
<li>Предложение: How [[about]] going for a walk?</li>
<li>Извинение: I’m sorry [[for]] being late.</li>
<li>Уточнение: [[What]] I’m trying to say is…</li>
</ol>
` },
  { id: 463, level: "B1", category: "practice", topic: "writing", title: "13. Практика: Письмо", content: `
<p>Вставьте подходящие фразы.</p>
<ol>
<li>Неофициальное приветствие: [[Thanks for your message!]]</li>
<li>Ответ на вопросы и детали: [[It was great to hear from you.|It was great to hear from you!]]</li>
<li>Завершение: [[Write back soon!]]</li>
<li>Формальное приветствие (если имя неизвестно): [[Dear Sir or Madam]]</li>
<li>Формальное завершение (если имя неизвестно): [[Yours faithfully]]</li>
<li>Формальное завершение (если имя известно): [[Yours sincerely]]</li>
<li>Эссе-мнение (вступление): [[Firstly|To sum up]] ...</li>
<li>Эссе-мнение (вывод): [[To sum up]] ...</li>
</ol>
` },
  { id: 501, level: "B2", category: "theory", topic: "intro", title: "Раздел B2 — в разработке", content: `<p>Здесь будут материалы уровня B2: Inversion, Mixed Conditionals, Advanced Modals, Phrasal Verbs.</p>` },
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
  { id: 470, level: "B1", category: "practice", topic: "grammar_practice", title: "Грамматическая практика B1", content: `
<ol>
<li>She usually [[takes]] (take) the bus, but today she [[is walking]] (walk).</li>
<li>I [[haven't finished]] (not finish) the report yet.</li>
<li>I [[was cooking]] (cook) when the alarm went off.</li>
<li>By the time we arrived, the train [[had left]] (leave).</li>
<li>This time tomorrow, I [[will be flying]] (fly) to Lisbon.</li>
<li>I [[have known]] (know) him since school.</li>
<li>You [[mustn't]] (must/not) smoke here; it’s forbidden.</li>
<li>You [[don't have to]] (not have to) bring food; there will be a buffet.</li>
<li>If it [[rains]] (rain), we’ll stay home.</li>
<li>If I [[had]] (have) more time, I would travel.</li>
<li>If they had left earlier, they [[wouldn't have missed]] (not miss) the train.</li>
<li>The office [[is cleaned]] (clean) every evening. (passive)</li>
<li>“I can help,” Mark said. → Mark said that he [[could]] help.</li>
<li>I enjoy [[reading]] (read) detective stories.</li>
<li>There isn’t [[much]] (much/any) information available.</li>
<li>This exercise is [[easier]] (easy) than the last one.</li>
<li>Could you tell me where the station [[is]]?</li>
<li>I’m used to [[working]] (work) at night.</li>
<li>I’ll call you when I [[arrive]] (arrive).</li>
<li>Переведите: «Мне следовало проверить билет» → [[I should have checked the ticket.]]</li>
</ol>
` },
  { id: 471, level: "B1", category: "practice", topic: "vocab_speaking", title: "Лексика и говорение B1", content: `
<h3>Вставьте слово</h3>
<p>Слова: deadline, after, colleague, out, salary.</p>
<ol>
<li>A person you work with is a [[colleague]].</li>
<li>To discover information: find [[out]].</li>
<li>To take care of a pet: look [[after]] it.</li>
<li>A date by which work must be done: [[deadline]].</li>
<li>Money received for work: [[salary]].</li>
</ol>
<h3>Переведите</h3>
<ol>
<li>Я подал заявку на работу. → [[I applied for a job.]]</li>
<li>Нам нужно уложиться в срок. → [[We need to meet the deadline.]]</li>
<li>Мы хорошо ладим с соседями. → [[We get on well with our neighbours.]]</li>
<li>Рейс задержали из-за тумана. → [[The flight was delayed because of the fog.]]</li>
<li>Я постепенно привыкаю вставать рано. → [[I'm getting used to getting up early.]]</li>
<li>Я разочарован результатом. → [[I'm disappointed with the result.]]</li>
<li>Не могли бы вы повторить? → [[Could you say that again, please?]]</li>
</ol>
<h3>Говорение — 1–2 минуты на тему</h3>
<ul>
<li>Describe a person you admire.</li>
<li>Talk about a trip that did not go as planned.</li>
<li>What are the advantages and disadvantages of working from home?</li>
<li>How has technology changed the way people study?</li>
<li>What do you do to stay healthy?</li>
</ul>
` },
  { id: 472, level: "B1", category: "practice", topic: "mixed_practice_b1", title: "Смешанная практика B1", content: `
<h3>Переведите</h3>
<ol>
<li>Я никогда не был в Шотландии. → [[I've never been to Scotland.]]</li>
<li>Когда я шёл домой, я встретил старого друга. → [[I was walking home when I met an old friend.]]</li>
<li>Если завтра будет хорошая погода, мы поедем за город. → [[If the weather is good tomorrow, we'll go to the countryside.]]</li>
<li>Она сказала, что устала. → [[She said she was tired.]]</li>
<li>Этот дом построили более ста лет назад. → [[This house was built more than a hundred years ago.]]</li>
<li>Я привык работать в шумном офисе. → [[I'm used to working in a noisy office.]]</li>
<li>Тебе не нужно покупать хлеб — я уже купил его. → [[You don't have to buy bread — I've already bought it.]]</li>
<li>Если бы мы забронировали билеты раньше, они были бы дешевле. → [[If we had booked earlier, the tickets would have been cheaper.]]</li>
<li>Позвони мне, как только закончишь. → [[Call me as soon as you finish.]]</li>
<li>Я ищу ключи уже двадцать минут. → [[I've been looking for my keys for twenty minutes.]]</li>
</ol>
<h3>Исправьте ошибки</h3>
<ol>
<li>She don’t like spicy food. → [[She doesn't like spicy food.]]</li>
<li>I have bought this yesterday. → [[I bought this yesterday.]]</li>
<li>If it will be sunny, we’ll go out. → [[If it is sunny, we'll go out.]]</li>
<li>He asked me where was I going. → [[He asked me where I was going.]]</li>
<li>I’m interested to learn Spanish. → [[I'm interested in learning Spanish.]]</li>
<li>There are too much people here. → [[There are too many people here.]]</li>
<li>The room cleans every day. → [[The room is cleaned every day.]]</li>
<li>I used to getting up early. → [[I used to get up early.]]</li>
<li>Despite it was cold, we went swimming. → [[Although it was cold, we went swimming.]]</li>
<li>She speaks English more fluent than me. → [[She speaks English more fluently than me.]]</li>
</ol>
<h3>Письмо</h3>
<p>Напишите 100–140 слов о том, как изменился ваш распорядок за последний год. Используйте Present Perfect, Past Simple, used to и минимум три связки.</p>
` },
  { id: 480, level: "B1", category: "practice", topic: "mid_test", title: "Промежуточный тест B1", content: `
<h3>Грамматика</h3>
<ol>
<li>I [[haven't seen]] (not see) her since Monday.</li>
<li>While we [[were driving]] (drive), we saw an accident.</li>
<li>If I [[were]] (be) you, I’d ask for help.</li>
<li>The package [[was delivered]] (deliver) yesterday.</li>
<li>He asked me where I [[worked]] (work).</li>
<li>You [[mustn't]] (must / not) smoke here; it’s prohibited.</li>
<li>I enjoy [[learning]] (learn) languages.</li>
<li>By the time she arrived, we [[had finished]] (finish) dinner.</li>
<li>I’ll call you when I [[get]] (get) home.</li>
<li>This is the person [[who]] helped me.</li>
</ol>
<h3>Исправьте</h3>
<ol>
<li>I have met him last week. → [[I met him last week.]]</li>
<li>If it will be sunny, we’ll go out. → [[If it is sunny, we’ll go out.]]</li>
<li>She asked me what did I want. → [[She asked me what I wanted.]]</li>
<li>He suggested to take a taxi. → [[He suggested taking a taxi.]]</li>
<li>The documents sent yesterday. → [[The documents were sent yesterday.]]</li>
</ol>
<h3>Перевод</h3>
<ol>
<li>Я работаю здесь с 2020 года. → [[I have been working here since 2020.|I have worked here since 2020.]]</li>
<li>Если бы у меня было больше времени, я бы занимался спортом. → [[If I had more time, I would do sports.]]</li>
<li>Мне следовало сказать правду. → [[I should have told the truth.]]</li>
<li>Не могли бы вы сказать, как добраться до центра? → [[Could you tell me how to get to the centre?|Could you tell me how to get to the center?]]</li>
<li>Когда мы приехали, фильм уже начался. → [[When we arrived, the film had already started.]]</li>
</ol>
<h3>Письмо</h3>
<p>100–140 слов на тему “A change in my life”.</p>
` },
  { id: 481, level: "B1", category: "practice", topic: "final_test", title: "Итоговый тест B1", content: `
<h3>A. Грамматика и лексика</h3>
<ol>
<li>I [[have been studying]] (study) for two hours and need a break.</li>
<li>She [[has already sent]] (already/send) the email.</li>
<li>When I arrived, they [[were discussing]] (discuss) the problem.</li>
<li>If you [[don't hurry]] (not hurry), you’ll miss the bus.</li>
<li>If I had known, I [[would have told]] (tell) you.</li>
<li>This building [[was built]] (build) in the 19th century.</li>
<li>He promised [[to help]] (help) us.</li>
<li>I remember [[meeting]] (meet) her at the conference.</li>
<li>Could you tell me where the nearest bank [[is]]?</li>
<li>The film was [[so]] interesting that I watched it twice.</li>
</ol>
<h3>B. Перефразируйте</h3>
<ol>
<li>Someone has damaged the car. → The car [[has been damaged]].</li>
<li>“I am leaving tomorrow,” she said. → She said that [[she was leaving the next day|she was leaving tomorrow]].</li>
<li>It’s a good idea to rest. → You [[should rest]].</li>
<li>I started working here in 2021. → I have [[worked here since 2021|been working here since 2021]].</li>
<li>If he had studied, he [[would have passed]] (pass) the exam.</li>
</ol>
<h3>C. Перевод</h3>
<ol>
<li>Я никогда не летал на самолёте. → [[I have never flown on a plane.|I have never flown.]]</li>
<li>Пока я готовил, мой брат накрывал на стол. → [[While I was cooking, my brother was setting the table.]]</li>
<li>Если завтра будет дождь, мы останемся дома. → [[If it rains tomorrow, we will stay at home.]]</li>
<li>Она спросила меня, видел ли я её ключи. → [[She asked me if I had seen her keys.]]</li>
<li>Тебе не нужно приходить раньше. → [[You don't have to come earlier.]]</li>
` },
  { id: 491, level: "B1", category: "vocabulary", topic: "people_relationships", title: "Люди и отношения", content: `
<h3>Характер</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>reliable</b></td><td>надёжный</td><td>He is a reliable friend.</td></tr>
<tr><td><b>honest</b></td><td>честный</td><td>She is an honest person.</td></tr>
<tr><td><b>generous</b></td><td>щедрый</td><td>It was generous of you to help.</td></tr>
<tr><td><b>selfish</b></td><td>эгоистичный</td><td>Don't be so selfish.</td></tr>
<tr><td><b>patient</b></td><td>терпеливый</td><td>You need to be patient with children.</td></tr>
<tr><td><b>confident</b></td><td>уверенный</td><td>She feels confident before the exam.</td></tr>
<tr><td><b>shy</b></td><td>застенчивый</td><td>He was too shy to speak.</td></tr>
<tr><td><b>outgoing</b></td><td>общительный</td><td>She has an outgoing personality.</td></tr>
<tr><td><b>stubborn</b></td><td>упрямый</td><td>He is too stubborn to change his mind.</td></tr>
<tr><td><b>considerate</b></td><td>внимательный к другим</td><td>It was very considerate of you.</td></tr>
<tr><td><b>ambitious</b></td><td>амбициозный</td><td>She is an ambitious young lawyer.</td></tr>
<tr><td><b>easy-going</b></td><td>лёгкий в общении</td><td>My boss is very easy-going.</td></tr>
</table>
<h3>Отношения</h3>
<table>
<tr><th>Фраза</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>get on well with</b></td><td>ладить с</td><td>I get on well with my colleagues.</td></tr>
<tr><td><b>fall out with</b></td><td>поссориться</td><td>We fell out over money.</td></tr>
<tr><td><b>make up</b></td><td>помириться</td><td>They argued but later made up.</td></tr>
<tr><td><b>keep in touch</b></td><td>поддерживать связь</td><td>Let's keep in touch.</td></tr>
<tr><td><b>lose touch</b></td><td>потерять связь</td><td>We lost touch after school.</td></tr>
<tr><td><b>rely on</b></td><td>полагаться на</td><td>You can rely on me.</td></tr>
<tr><td><b>apologise</b></td><td>извиняться</td><td>He apologised for being late.</td></tr>
<tr><td><b>forgive</b></td><td>прощать</td><td>Please forgive me.</td></tr>
<tr><td><b>bring up children</b></td><td>воспитывать детей</td><td>It's hard to bring up children alone.</td></tr>
<tr><td><b>grow up</b></td><td>вырасти</td><td>I grew up in a small town.</td></tr>
<tr><td><b>take after</b></td><td>быть похожим на родственника</td><td>She takes after her mother.</td></tr>
</table>
` },
  { id: 492, level: "B1", category: "vocabulary", topic: "work_study_tech", title: "Работа, учёба и технологии", content: `
<h3>Работа</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>apply for a job</b></td><td>подать заявку на работу</td><td>I applied for a job at the bank.</td></tr>
<tr><td><b>attend an interview</b></td><td>пройти собеседование</td><td>I have to attend an interview tomorrow.</td></tr>
<tr><td><b>earn a salary</b></td><td>получать зарплату</td><td>She earns a good salary.</td></tr>
<tr><td><b>get promoted</b></td><td>получить повышение</td><td>He got promoted last month.</td></tr>
<tr><td><b>resign</b></td><td>уволиться</td><td>She resigned because of stress.</td></tr>
<tr><td><b>retire</b></td><td>выйти на пенсию</td><td>My father will retire next year.</td></tr>
<tr><td><b>colleague</b></td><td>коллега</td><td>My colleagues are very friendly.</td></tr>
<tr><td><b>employer</b></td><td>работодатель</td><td>My employer pays for training.</td></tr>
<tr><td><b>employee</b></td><td>сотрудник</td><td>The company has 100 employees.</td></tr>
<tr><td><b>qualification</b></td><td>квалификация</td><td>You need qualifications for this job.</td></tr>
<tr><td><b>deadline</b></td><td>срок сдачи</td><td>We have to meet a tight deadline.</td></tr>
<tr><td><b>workload</b></td><td>рабочая нагрузка</td><td>My workload is very heavy this week.</td></tr>
<tr><td><b>flexible hours</b></td><td>гибкий график</td><td>I prefer flexible hours.</td></tr>
</table>
<h3>Учёба</h3>
<ul>
<li><b>assignment</b> — задание</li>
<li><b>degree</b> — диплом/степень</li>
<li><b>pass/fail an exam</b> — сдать/провалить экзамен</li>
<li><b>revise for a test</b> — готовиться к тесту</li>
<li><b>make progress</b> — делать успехи</li>
<li><b>concentrate on</b> — сосредоточиться на</li>
</ul>
<h3>Технологии</h3>
<ul>
<li><b>device</b> — устройство</li>
<li><b>download/upload</b> — скачать/загрузить</li>
<li><b>update</b> — обновление</li>
<li><b>privacy</b> — конфиденциальность</li>
<li><b>reliable connection</b> — надёжное соединение</li>
<li><b>data</b> — данные</li>
<li><b>search engine</b> — поисковая система</li>
<li><b>artificial intelligence</b> — искусственный интеллект</li>
</ul>
<h3>Сочетания</h3>
<ul>
<li>meet a deadline — уложиться в срок</li>
<li>gain experience — получить опыт</li>
<li>do research — проводить исследование</li>
<li>take notes — делать записи</li>
<li>solve a problem — решить проблему</li>
<li>back up data — сделать резервную копию данных</li>
</ul>
` },
  { id: 493, level: "B1", category: "vocabulary", topic: "travel_home_env", title: "Путешествия, дом и экология", content: `
<h3>Путешествия</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>book accommodation</b></td><td>забронировать жильё</td><td>We booked accommodation online.</td></tr>
<tr><td><b>check in/out</b></td><td>зарегистрироваться/выехать</td><td>We checked in at 2 pm.</td></tr>
<tr><td><b>boarding pass</b></td><td>посадочный талон</td><td>Please show your boarding pass.</td></tr>
<tr><td><b>delayed/cancelled</b></td><td>задержанный/отменённый</td><td>Our flight was delayed.</td></tr>
<tr><td><b>destination</b></td><td>пункт назначения</td><td>What is your final destination?</td></tr>
<tr><td><b>luggage</b></td><td>багаж</td><td>My luggage is very heavy.</td></tr>
<tr><td><b>sightseeing</b></td><td>осмотр достопримечательностей</td><td>We went sightseeing in the morning.</td></tr>
<tr><td><b>get lost</b></td><td>заблудиться</td><td>We got lost in the old town.</td></tr>
<tr><td><b>miss a connection</b></td><td>опоздать на пересадку</td><td>We missed our connection in Paris.</td></tr>
<tr><td><b>travel insurance</b></td><td>страховка</td><td>Always buy travel insurance.</td></tr>
</table>
<h3>Дом</h3>
<ul>
<li><b>rent</b> — арендовать</li>
<li><b>landlord</b> — арендодатель</li>
<li><b>tenant</b> — арендатор</li>
<li><b>deposit</b> — залог</li>
<li><b>bills</b> — счета</li>
<li><b>spacious</b> — просторный</li>
<li><b>cosy</b> — уютный</li>
<li><b>furnished</b> — меблированный</li>
<li><b>neighbourhood</b> — район</li>
<li><b>household chores</b> — домашние обязанности</li>
</ul>
<h3>Экология</h3>
<ul>
<li><b>pollution</b> — загрязнение</li>
<li><b>waste</b> — отходы</li>
<li><b>recycle</b> — перерабатывать</li>
<li><b>renewable energy</b> — возобновляемая энергия</li>
<li><b>climate change</b> — изменение климата</li>
<li><b>protect wildlife</b> — защищать дикую природу</li>
<li><b>reduce emissions</b> — сокращать выбросы</li>
<li><b>public transport</b> — общественный транспорт</li>
<li><b>drought</b> — засуха</li>
<li><b>flood</b> — наводнение</li>
</ul>
` },
  { id: 494, level: "B1", category: "vocabulary", topic: "health_society", title: "Здоровье, эмоции и общество", content: `
<h3>Здоровье</h3>
<table>
<tr><th>English</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>symptom</b></td><td>симптом</td><td>A cough is a common symptom.</td></tr>
<tr><td><b>treatment</b></td><td>лечение</td><td>He is receiving treatment for his back.</td></tr>
<tr><td><b>recover</b></td><td>выздоравливать</td><td>She is recovering from the flu.</td></tr>
<tr><td><b>suffer from</b></td><td>страдать от</td><td>Many people suffer from allergies.</td></tr>
<tr><td><b>injury</b></td><td>травма</td><td>He has a knee injury.</td></tr>
<tr><td><b>prescription</b></td><td>рецепт</td><td>You need a prescription for this medicine.</td></tr>
<tr><td><b>appointment</b></td><td>запись к врачу</td><td>I have a doctor's appointment at five.</td></tr>
<tr><td><b>balanced diet</b></td><td>сбалансированное питание</td><td>Eat a balanced diet.</td></tr>
<tr><td><b>get enough sleep</b></td><td>достаточно спать</td><td>You should get enough sleep.</td></tr>
</table>
<h3>Эмоции</h3>
<ul>
<li><b>delighted</b> — в восторге</li>
<li><b>disappointed</b> — разочарованный</li>
<li><b>embarrassed</b> — смущённый</li>
<li><b>frustrated</b> — раздражённый</li>
<li><b>relieved</b> — испытывающий облегчение</li>
<li><b>anxious</b> — тревожный</li>
<li><b>proud</b> — гордый</li>
<li><b>confused</b> — растерянный</li>
<li><b>exhausted</b> — измотанный</li>
</ul>
<h3>Общество</h3>
<ul>
<li><b>volunteer</b> — волонтёр / работать добровольно</li>
<li><b>charity</b> — благотворительность</li>
<li><b>community</b> — сообщество</li>
<li><b>crime</b> — преступление</li>
<li><b>witness</b> — свидетель</li>
<li><b>raise awareness</b> — привлекать внимание</li>
<li><b>take part</b> — участвовать</li>
<li><b>donate</b> — жертвовать</li>
<li><b>campaign</b> — кампания</li>
</ul>
<h3>Сочетания</h3>
<ul>
<li>feel relieved — чувствовать облегчение</li>
<li>be proud of — гордиться чем-то</li>
<li>be worried about — беспокоиться о</li>
<li>take part in — принимать участие в</li>
<li>raise money for charity — собрать деньги на благотворительность</li>
<li>report a crime — сообщить о преступлении</li>
</ul>
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
  { id: 501, level: "B2", category: "theory", topic: "present_perfect_continuous", title: "01. Present Perfect Continuous", content: `
<h3>Форма и употребление</h3>
<p><b>have/has been + V-ing</b> подчёркивает длительность процесса, начавшегося в прошлом и продолжающегося сейчас, или недавнюю деятельность с заметным результатом.</p>
<ul>
<li>I’ve been learning English for three years. — Я изучаю английский три года.</li>
<li>She’s tired because she’s been running. — Она устала, потому что бегала.</li>
<li>How long have you been waiting? — Как долго ты ждёшь?</li>
</ul>

<h3>Сравнение с Present Perfect</h3>
<p>Present Perfect часто акцентирует результат/количество; Present Perfect Continuous — процесс.</p>
<ul>
<li>I’ve read three chapters. — Я прочитал три главы.</li>
<li>I’ve been reading for two hours. — Я читаю уже два часа.</li>
</ul>
<p>С глаголами состояния обычно используйте Present Perfect: <i>I’ve known her for years</i>, не <i>I’ve been knowing her</i>.</p>
` },
  { id: 502, level: "B2", category: "practice", topic: "present_perfect_continuous", title: "01. Практика: Present Perfect Continuous", content: `
<h3>Практика</h3>
<ol>
<li>Выберите: I’ve written / I’ve been writing emails all morning. → [[I've been writing]]</li>
<li>Переведите: «Как долго ты ждёшь?» → [[How long have you been waiting?]]</li>
<li>Переведите: «Я сделал домашнее задание» → [[I have done my homework.|I've done my homework.]]</li>
</ol>
` },

  { id: 503, level: "B2", category: "theory", topic: "passive_voice", title: "02. Passive Voice — пассивный залог", content: `
<h3>Краткая теория</h3>
<p>Пассив нужен, когда важнее действие или объект, чем исполнитель. Форма: <b>be в нужном времени + V3</b>.</p>
<ul>
<li>Present Simple: The rooms are cleaned daily. — Комнаты убирают каждый день.</li>
<li>Past Simple: The bridge was built in 1998. — Мост построили в 1998 году.</li>
<li>Present Perfect: The email has been sent. — Письмо отправлено.</li>
<li>Future: The results will be announced tomorrow. — Результаты объявят завтра.</li>
<li>Modal: This problem can be solved. — Эту проблему можно решить.</li>
</ul>
<p>Актив: <i>Someone stole my phone.</i> Пассив: <i>My phone was stolen.</i> Исполнитель с <b>by</b> добавляется, если он важен: <i>The novel was written by Orwell.</i></p>
<p>Не все глаголы допускают пассив: <i>arrive, sleep, happen</i> обычно не имеют прямого дополнения.</p>
` },
  { id: 504, level: "B2", category: "practice", topic: "passive_voice", title: "02. Практика: Passive Voice", content: `
<h3>Практика</h3>
<p>Преобразуйте в пассивный залог:</p>
<ol>
<li>They make these shoes in Italy. → [[These shoes are made in Italy.]]</li>
<li>Someone has broken the window. → [[The window has been broken.]]</li>
<li>They will publish the report next week. → [[The report will be published next week.]]</li>
</ol>
` },

  { id: 505, level: "B2", category: "theory", topic: "reported_speech", title: "03. Reported Speech — косвенная речь", content: `
<h3>Краткая теория</h3>
<p>Косвенная речь передаёт смысл, а не точную цитату.</p>
<p><b>Direct:</b> Tom said, “I am tired.” → <b>Reported:</b> Tom said (that) he was tired. — Том сказал, что устал.</p>

<h3>Частый сдвиг времён</h3>
<p>Present Simple → Past Simple; Present Continuous → Past Continuous; Past Simple → Past Perfect; will → would; can → could; may → might. Сдвиг зависит от контекста и не всегда обязателен, если информация актуальна.</p>
<p>Слова времени и места могут меняться: <i>today → that day, tomorrow → the next day, here → there, this → that</i>.</p>

<h3>Вопросы</h3>
<ul>
<li>Общий вопрос: <b>ask + if/whether + прямой порядок слов</b>. “Are you busy?” → She asked if I was busy.</li>
<li>Специальный вопрос: <b>ask + question word + subject + verb</b>. “Where do you live?” → He asked where I lived. Не: where did I live.</li>
</ul>

<h3>Просьбы</h3>
<p><b>tell/ask + object + (not) to + V1</b>: “Please wait.” → He asked me to wait. “Don’t touch it.” → She told us not to touch it.</p>

<h3>Say / tell</h3>
<p><b>say something</b>; <b>tell someone something</b>. <i>She said she was busy. / She told me she was busy.</i></p>
` },
  { id: 506, level: "B2", category: "practice", topic: "reported_speech", title: "03. Практика: Reported Speech", content: `
<h3>Практика</h3>
<p>Передайте косвенно:</p>
<ol>
<li>“I can help you,” Mark said. → [[Mark said he could help me.]]</li>
<li>“Where are you going?” she asked me. → [[She asked me where I was going.]]</li>
<li>“Don’t be late,” Dad told us. → [[Dad told us not to be late.]]</li>
</ol>
` },

  { id: 507, level: "B2", category: "theory", topic: "relative_clauses", title: "04. Relative Clauses — относительные придаточные", content: `
<h3>Краткая теория</h3>
<p>Относительные придаточные уточняют человека, предмет, место или время.</p>
<ul>
<li><b>who</b> — люди: The woman who lives next door is a doctor. — Женщина, которая живёт по соседству, врач.</li>
<li><b>which</b> — предметы: The book which I bought is useful. — Книга, которую я купил, полезная.</li>
<li><b>that</b> — люди/предметы в ограничительных придаточных.</li>
<li><b>whose</b> — принадлежность: the boy whose bike was stolen — мальчик, чей велосипед украли.</li>
<li><b>where</b> — место; <b>when</b> — время.</li>
</ul>
<p><b>Defining clause</b> необходима для смысла, без запятых: <i>The students who passed can leave.</i> <b>Non-defining</b> добавляет информацию и выделяется запятыми: <i>My brother, who lives in Canada, is visiting us.</i> В non-defining обычно не используется <i>that</i>.</p>
<p>Если местоимение — дополнение, его можно опустить: <i>The film (that) we saw was excellent.</i> Если это подлежащее, опускать нельзя: <i>The man who called is here.</i></p>
` },
  { id: 508, level: "B2", category: "practice", topic: "relative_clauses", title: "04. Практика: Relative Clauses", content: `
<h3>Практика</h3>
<p>Вставьте who/which/whose/where:</p>
<ol>
<li>The person [[who]] helped me was kind.</li>
<li>This is the house [[where]] I grew up.</li>
<li>The woman [[whose]] car was damaged called the police.</li>
</ol>
` },

  { id: 509, level: "B2", category: "theory", topic: "used_to", title: "05. Used to / be used to / get used to", content: `
<h3>Краткая теория</h3>
<ul>
<li><b>used to + V1</b> — прежняя привычка или состояние, которых теперь нет: <i>I used to live in a village.</i> — Раньше я жил в деревне.</li>
<li><b>be used to + noun/V-ing</b> — быть привычным к чему-то: <i>I’m used to cold weather.</i> — Я привык к холодной погоде. Здесь <i>to</i> — предлог, поэтому нужен <i>-ing</i>.</li>
<li><b>get used to + noun/V-ing</b> — привыкать постепенно: <i>I’m getting used to my new job.</i> — Я привыкаю к новой работе.</li>
</ul>
<p>Сравните: <i>I used to wake up at ten.</i> — Раньше я просыпался в десять. <i>I’m used to waking up at six.</i> — Я привык просыпаться в шесть.</p>
` },
  { id: 510, level: "B2", category: "practice", topic: "used_to", title: "05. Практика: Used to", content: `
<h3>Практика</h3>
<ol>
<li>I’m used to [[working]] (work/working) at night.</li>
<li>We used to [[go]] (go/going) there.</li>
<li>Переведите: «Я постепенно привыкаю говорить по-английски» → [[I'm getting used to speaking English.]]</li>
</ol>
` },

  { id: 511, level: "B2", category: "theory", topic: "word_formation", title: "06. Словообразование", content: `
<h3>Краткая теория</h3>
<p>Суффиксы помогают распознавать части речи:</p>
<ul>
<li>существительные: <i>-tion</i> (information), <i>-ment</i> (development), <i>-ness</i> (kindness), <i>-er</i> (teacher), <i>-ity</i> (possibility);</li>
<li>прилагательные: <i>-ful</i> (useful), <i>-less</i> (careless), <i>-ous</i> (dangerous), <i>-able</i> (comfortable), <i>-ive</i> (creative);</li>
<li>наречия: <i>-ly</i> (carefully), но <i>fast/hard/well</i> имеют особые формы.</li>
</ul>
<p>Семейства: <i>decide → decision → decisive; succeed → success → successful → successfully; care → careful/careless; possible → possibility/impossible.</i></p>
<p>Приставки: <i>un-</i> (unhappy), <i>im-/in-/ir-/il-</i> (impossible, incorrect, irregular, illegal), <i>dis-</i> (disagree), <i>re-</i> (rewrite), <i>mis-</i> (misunderstand).</p>
<p>Составные прилагательные: <i>a five-year-old child; a ten-minute walk.</i> Но: <i>The child is five years old.</i></p>
` },
  { id: 512, level: "B2", category: "practice", topic: "word_formation", title: "06. Практика: Словообразование", content: `
<h3>Практика</h3>
<ol>
<li>Образуйте существительное: decide → [[decision]], improve → [[improvement]], kind → [[kindness]], possible → [[possibility]].</li>
<li>She explained it very [[clearly]] (clear). It was a difficult [[decision]] (decide).</li>
</ol>
` },

  { id: 513, level: "B2", category: "theory", topic: "functional_english", title: "07. Functional English — реальные ситуации", content: `
<h3>Краткая теория</h3>
<h4>Мнение</h4>
<p><i>I think/believe that…</i> — Я думаю/считаю, что…; <i>In my opinion…</i> — По моему мнению…; <i>As far as I’m concerned…</i> — Что касается меня…</p>

<h4>Согласие/несогласие</h4>
<p><i>Exactly.</i> — Именно. / <i>I see your point, but…</i> — Я понимаю твою точку зрения, но… / <i>I’m afraid I disagree.</i> — Боюсь, я не согласен. / <i>I agree up to a point.</i> — Отчасти я согласен.</p>

<h4>Просьба и предложение</h4>
<p><i>Could you possibly help me?</i> — Не могли бы вы помочь? / <i>Would you mind sending it again?</i> — Вы не возражаете отправить ещё раз? / <i>Why don’t we take a break?</i> — Почему бы нам не сделать перерыв? / <i>How about going for a walk?</i> — Как насчёт прогулки?</p>

<h4>Извинение и уточнение</h4>
<p><i>I’m sorry for being late.</i> — Извини, что опоздал. / <i>I didn’t mean to upset you.</i> — Я не хотел тебя расстроить. / <i>Could you say that again?</i> — Не могли бы вы повторить? / <i>What I’m trying to say is…</i> — Я пытаюсь сказать, что…</p>
` },
  { id: 514, level: "B2", category: "practice", topic: "functional_english", title: "07. Практика: Functional English", content: `
<h3>Практика</h3>
<p>Подготовьте диалоги (напишите ваши реплики):</p>
<ol>
<li>Попросите коллегу помочь. → [[Could you possibly help me?]]</li>
<li>Вежливо не согласитесь. → [[I'm afraid I disagree.|I see your point, but I disagree.]]</li>
<li>Предложите провести выходные вместе. → [[Why don't we spend the weekend together?|How about spending the weekend together?]]</li>
<li>Извинитесь за опоздание. → [[I'm sorry for being late.]]</li>
</ol>
` },

  { id: 515, level: "B2", category: "theory", topic: "writing", title: "08. Письмо B1–B2", content: `
<h3>Краткая теория</h3>
<h4>Неофициальное письмо</h4>
<p>Структура: приветствие → дружелюбное вступление → ответ на вопросы/детали → встречный вопрос → завершение.<br>Фразы: <i>Thanks for your message! / It was great to hear from you. / Write back soon! / Best wishes,</i></p>

<h4>Формальное письмо</h4>
<p><i>Dear Sir or Madam; I am writing to enquire about…; Could you please provide…?; I would be grateful if…; I look forward to hearing from you.</i> Если имя неизвестно: <i>Yours faithfully</i>; если известно: <i>Yours sincerely</i>.</p>

<h4>Рассказ</h4>
<p>Past Simple — основные события; Past Continuous — фон; Past Perfect — более раннее событие. Связки: <i>at first, suddenly, a few minutes later, fortunately, in the end.</i></p>

<h4>Отзыв</h4>
<p>Что оцениваете → краткое описание → плюсы/минусы → рекомендация. Фразы: <i>What I liked most was…; One drawback is…; Overall, I would recommend it.</i></p>

<h4>Эссе-мнение</h4>
<p>Вступление → аргумент 1 → аргумент 2/контраргумент → вывод. Связки: <i>Firstly, On the other hand, In addition, To sum up.</i></p>

<h4>Проверка</h4>
<p>Ответил ли я на все пункты? Есть ли абзацы и связки? Проверены ли времена, артикли, порядок слов и орфография?</p>
` },
  { id: 516, level: "B2", category: "practice", topic: "writing", title: "08. Практика: Письмо", content: `
<h3>Практика</h3>
<p>Напишите 100–140 слов на одну из тем:</p>
<ol>
<li>Письмо другу о новом хобби (неофициальное).</li>
<li>Отзыв о фильме.</li>
<li>Эссе «Should people work from home?».</li>
</ol>
` },

  { id: 517, level: "B2", category: "theory", topic: "pronunciation", title: "09. Произношение и беглость", content: `
<h3>Краткая теория</h3>
<p>Цель B1–B2 — понятная речь, а не идеальный акцент. Уделяйте внимание окончаниям <i>-s/-es</i> и <i>-ed</i>, ударению, интонации вопросов и связной речи.</p>

<h4>Ударение</h4>
<p>Учите слово вместе с ударением и аудиопримером. В предложении смысловые слова обычно звучат сильнее, служебные часто редуцируются. Не произносите все слова с одинаковой силой.</p>

<h4>Тренировка shadowing</h4>
<ol>
<li>Прослушайте короткий фрагмент.</li>
<li>Повторите фразу вслед за диктором.</li>
<li>Запишите себя и сравните ритм и окончания.</li>
<li>Перескажите содержание своими словами.</li>
</ol>

<h4>Ежедневно 10 минут</h4>
<p>2 минуты чтение вслух; 3 минуты повторение за аудио; 3 минуты свободный рассказ; 2 минуты анализ одной ошибки.</p>
` },
  { id: 518, level: "B2", category: "practice", topic: "pronunciation", title: "09. Практика: Произношение", content: `
<h3>Практика</h3>
<p>Выполните следующее задание:</p>
<ol>
<li>Выберите короткий текст (3–4 предложения).</li>
<li>Прочитайте его вслух, запишите на диктофон.</li>
<li>Прослушайте запись и отметьте, где вы сбились с ритма или неверно произнесли окончание.</li>
<li>Перескажите текст своими словами (запишите аудио).</li>
</ol>
` },
  { id: 531, level: "B2", category: "practice", topic: "b1_grammar_practice", title: "10. Практика: Грамматика B1 (тест)", content: `
<p>Поставьте глаголы в правильную форму или вставьте пропущенное слово.</p>
<ol>
<li>She usually [[takes]] (take) the bus, but today she [[is walking]] (walk).</li>
<li>I [[haven't finished]] (not finish) the report yet.</li>
<li>I [[was cooking]] (cook) when the alarm went off.</li>
<li>By the time we arrived, the train [[had left]] (leave).</li>
<li>This time tomorrow, I [[will be flying]] (fly) to Lisbon.</li>
<li>I [[have known]] (know) him since school.</li>
<li>You [[mustn't]] smoke here; it’s forbidden.</li>
<li>You [[don't have to]] bring food; there will be a buffet.</li>
<li>If it [[rains]] (rain), we’ll stay home.</li>
<li>If I [[had]] (have) more time, I would travel.</li>
<li>If they had left earlier, they [[wouldn't have missed]] (not miss) the train.</li>
<li>The office [[is cleaned]] (clean) every evening. (passive)</li>
<li>“I can help,” Mark said. → Mark said that he [[could]] help.</li>
<li>I enjoy [[reading]] (read) detective stories.</li>
<li>There isn’t [[much]] information available.</li>
<li>This exercise is [[easier]] (easy) than the last one.</li>
<li>Could you tell me where the station [[is]]?</li>
<li>I’m used to [[working]] (work) at night.</li>
<li>I’ll call you when I [[arrive]] (arrive).</li>
<li>Переведите: «Мне следовало проверить билет». → [[I should have checked the ticket.]]</li>
</ol>
` },

  { id: 532, level: "B2", category: "practice", topic: "b1_vocab_speaking_practice", title: "11. Практика: Лексика B1", content: `
<h3>Вставьте слово</h3>
<p>Слова: deadline, after, colleague, out, salary.</p>
<ol>
<li>A person you work with is a [[colleague]].</li>
<li>To discover information: find [[out]].</li>
<li>To take care of a pet: look [[after]] it.</li>
<li>A date by which work must be done: [[deadline]].</li>
<li>Money received for work: [[salary]].</li>
</ol>

<h3>Переведите</h3>
<ol>
<li>Я подал заявку на работу. → [[I applied for a job.]]</li>
<li>Нам нужно уложиться в срок. → [[We need to meet the deadline.]]</li>
<li>Мы хорошо ладим с соседями. → [[We get on well with our neighbours.]]</li>
<li>Рейс задержали из-за тумана. → [[The flight was delayed because of the fog.]]</li>
<li>Я постепенно привыкаю вставать рано. → [[I'm getting used to getting up early.]]</li>
<li>Я разочарован результатом. → [[I'm disappointed with the result.]]</li>
<li>Не могли бы вы повторить? → [[Could you say that again, please?]]</li>
</ol>
` },

  { id: 533, level: "B2", category: "practice", topic: "b1_mixed_practice", title: "12. Практика: Смешанные задания B1", content: `
<h3>Переведите</h3>
<ol>
<li>Я никогда не был в Шотландии. → [[I've never been to Scotland.]]</li>
<li>Когда я шёл домой, я встретил старого друга. → [[I was walking home when I met an old friend.]]</li>
<li>Если завтра будет хорошая погода, мы поедем за город. → [[If the weather is good tomorrow, we'll go to the countryside.]]</li>
<li>Она сказала, что устала. → [[She said she was tired.]]</li>
<li>Этот дом построили более ста лет назад. → [[This house was built more than a hundred years ago.]]</li>
<li>Я привык работать в шумном офисе. → [[I'm used to working in a noisy office.]]</li>
<li>Тебе не нужно покупать хлеб — я уже купил его. → [[You don't have to buy bread — I've already bought it.]]</li>
<li>Если бы мы забронировали билеты раньше, они были бы дешевле. → [[If we had booked earlier, the tickets would have been cheaper.]]</li>
<li>Позвони мне, как только закончишь. → [[Call me as soon as you finish.]]</li>
<li>Я ищу ключи уже двадцать минут. → [[I've been looking for my keys for twenty minutes.]]</li>
</ol>

<h3>Исправьте ошибки</h3>
<ol>
<li>She don’t like spicy food. → [[She doesn't like spicy food.]]</li>
<li>I have bought this yesterday. → [[I bought this yesterday.]]</li>
<li>If it will be sunny, we’ll go out. → [[If it is sunny, we'll go out.]]</li>
<li>He asked me where was I going. → [[He asked me where I was going.]]</li>
<li>I’m interested to learn Spanish. → [[I'm interested in learning Spanish.]]</li>
<li>There are too much people here. → [[There are too many people here.]]</li>
<li>The room cleans every day. → [[The room is cleaned every day.]]</li>
<li>I used to getting up early. → [[I used to get up early.]]</li>
<li>Despite it was cold, we went swimming. → [[Although it was cold, we went swimming.]]</li>
<li>She speaks English more fluent than me. → [[She speaks English more fluently than me.]]</li>
</ol>
` },
  { id: 541, level: "B2", category: "practice", topic: "b1_mid_test", title: "13. Практика: Промежуточный тест B1", content: `
<h3>Грамматика</h3>
<ol>
<li>I [[haven't seen]] (not see) her since Monday.</li>
<li>While we [[were driving]] (drive), we saw an accident.</li>
<li>If I [[were]] (be) you, I’d ask for help.</li>
<li>The package [[was delivered]] (deliver) yesterday.</li>
<li>He asked me where I [[worked]] (work).</li>
<li>You [[mustn't]] smoke here; it’s prohibited.</li>
<li>I enjoy [[learning]] (learn) languages.</li>
<li>By the time she arrived, we [[had finished]] (finish) dinner.</li>
<li>I’ll call you when I [[get]] (get) home.</li>
<li>This is the person [[who]] helped me.</li>
</ol>

<h3>Исправьте ошибки</h3>
<ol>
<li>I have met him last week. → [[I met him last week.]]</li>
<li>If it will be sunny, we’ll go out. → [[If it is sunny, we'll go out.]]</li>
<li>She asked me what did I want. → [[She asked me what I wanted.]]</li>
<li>He suggested to take a taxi. → [[He suggested taking a taxi.]]</li>
<li>The documents sent yesterday. → [[The documents were sent yesterday.]]</li>
</ol>

<h3>Перевод</h3>
<ol>
<li>Я работаю здесь с 2020 года. → [[I have been working here since 2020.|I have worked here since 2020.]]</li>
<li>Если бы у меня было больше времени, я бы занимался спортом. → [[If I had more time, I would do sports.]]</li>
<li>Мне следовало сказать правду. → [[I should have told the truth.]]</li>
<li>Не могли бы вы сказать, как добраться до центра? → [[Could you tell me how to get to the centre?|Could you tell me how to get to the center?]]</li>
<li>Когда мы приехали, фильм уже начался. → [[When we arrived, the film had already started.]]</li>
</ol>
` },

  { id: 542, level: "B2", category: "practice", topic: "b1_final_test", title: "14. Практика: Итоговый тест B1", content: `
<h3>A. Грамматика и лексика</h3>
<ol>
<li>I [[have been studying]] (study) for two hours and need a break.</li>
<li>She [[has already sent]] (already/send) the email.</li>
<li>When I arrived, they [[were discussing]] (discuss) the problem.</li>
<li>If you [[don't hurry]] (not hurry), you’ll miss the bus.</li>
<li>If I had known, I [[would have told]] (tell) you.</li>
<li>This building [[was built]] (build) in the 19th century.</li>
<li>He promised [[to help]] (help) us.</li>
<li>I remember [[meeting]] (meet) her at the conference.</li>
<li>Could you tell me where the nearest bank [[is]]?</li>
<li>The film was [[so]] interesting that I watched it twice.</li>
</ol>

<h3>B. Перефразируйте</h3>
<ol>
<li>Someone has damaged the car. → The car [[has been damaged]].</li>
<li>“I am leaving tomorrow,” she said. → She said that [[she was leaving the next day|she was leaving tomorrow]].</li>
<li>It’s a good idea to rest. → You [[should rest]].</li>
<li>I started working here in 2021. → I have [[worked here since 2021|been working here since 2021]].</li>
<li>If he had studied, he [[would have passed]] (pass) the exam.</li>
</ol>

<h3>C. Перевод</h3>
<ol>
<li>Я никогда не летал на самолёте. → [[I have never flown on a plane.|I have never flown.]]</li>
<li>Пока я готовил, мой брат накрывал на стол. → [[While I was cooking, my brother was setting the table.]]</li>
<li>Если завтра будет дождь, мы останемся дома. → [[If it rains tomorrow, we will stay at home.]]</li>
<li>Она спросила меня, видел ли я её ключи. → [[She asked me if I had seen her keys.]]</li>
<li>Тебе не нужно приходить раньше. → [[You don't have to come earlier.]]</li>
</ol>
` },
  { id: 601, level: "B2", category: "vocabulary", topic: "people", title: "01. Люди и отношения", content: `
<h3>Характер</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>reliable</b></td><td>надёжный</td></tr>
<tr><td><b>honest</b></td><td>честный</td></tr>
<tr><td><b>generous</b></td><td>щедрый</td></tr>
<tr><td><b>selfish</b></td><td>эгоистичный</td></tr>
<tr><td><b>patient</b></td><td>терпеливый</td></tr>
<tr><td><b>confident</b></td><td>уверенный</td></tr>
<tr><td><b>shy</b></td><td>застенчивый</td></tr>
<tr><td><b>outgoing</b></td><td>общительный</td></tr>
<tr><td><b>stubborn</b></td><td>упрямый</td></tr>
<tr><td><b>considerate</b></td><td>внимательный к другим</td></tr>
<tr><td><b>ambitious</b></td><td>амбициозный</td></tr>
<tr><td><b>easy-going</b></td><td>лёгкий в общении</td></tr>
</table>

<h3>Отношения</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>get on well with</b></td><td>ладить</td></tr>
<tr><td><b>fall out with</b></td><td>поссориться</td></tr>
<tr><td><b>make up</b></td><td>помириться</td></tr>
<tr><td><b>keep in touch</b></td><td>поддерживать связь</td></tr>
<tr><td><b>lose touch</b></td><td>потерять связь</td></tr>
<tr><td><b>rely on</b></td><td>полагаться</td></tr>
<tr><td><b>apologise</b></td><td>извиняться</td></tr>
<tr><td><b>forgive</b></td><td>прощать</td></tr>
<tr><td><b>bring up children</b></td><td>воспитывать детей</td></tr>
<tr><td><b>grow up</b></td><td>вырасти</td></tr>
<tr><td><b>take after</b></td><td>быть похожим на родственника</td></tr>
</table>

<h3>Примеры</h3>
<p>I get on well with my colleagues. — Я хорошо лажу с коллегами.<br>We fell out but made up later. — Мы поссорились, но потом помирились.</p>

<h3>Мини-практика</h3>
<ol>
<li>You can [[rely]] on me. (полагаться)</li>
<li>They argued but later [[made]] up. (помирились)</li>
<li>A [[honest]] person tells the truth. (честный)</li>
</ol>
` },

  { id: 602, level: "B2", category: "vocabulary", topic: "work_study_technology", title: "02. Работа, учёба и технологии", content: `
<h3>Работа</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>apply for a job</b></td><td>подать заявку</td></tr>
<tr><td><b>attend an interview</b></td><td>пройти собеседование</td></tr>
<tr><td><b>earn a salary</b></td><td>получать зарплату</td></tr>
<tr><td><b>get promoted</b></td><td>получить повышение</td></tr>
<tr><td><b>resign</b></td><td>уволиться</td></tr>
<tr><td><b>retire</b></td><td>выйти на пенсию</td></tr>
<tr><td><b>colleague</b></td><td>коллега</td></tr>
<tr><td><b>employer</b></td><td>работодатель</td></tr>
<tr><td><b>employee</b></td><td>сотрудник</td></tr>
<tr><td><b>qualification</b></td><td>квалификация</td></tr>
<tr><td><b>deadline</b></td><td>срок сдачи</td></tr>
<tr><td><b>workload</b></td><td>рабочая нагрузка</td></tr>
<tr><td><b>flexible hours</b></td><td>гибкий график</td></tr>
</table>

<h3>Учёба</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>assignment</b></td><td>задание</td></tr>
<tr><td><b>degree</b></td><td>диплом/степень</td></tr>
<tr><td><b>pass/fail an exam</b></td><td>сдать/провалить экзамен</td></tr>
<tr><td><b>revise for a test</b></td><td>готовиться к тесту</td></tr>
<tr><td><b>make progress</b></td><td>делать успехи</td></tr>
<tr><td><b>concentrate on</b></td><td>сосредоточиться</td></tr>
</table>

<h3>Технологии</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>device</b></td><td>устройство</td></tr>
<tr><td><b>download/upload</b></td><td>скачать/загрузить</td></tr>
<tr><td><b>update</b></td><td>обновление</td></tr>
<tr><td><b>privacy</b></td><td>конфиденциальность</td></tr>
<tr><td><b>reliable connection</b></td><td>надёжное соединение</td></tr>
<tr><td><b>data</b></td><td>данные</td></tr>
<tr><td><b>search engine</b></td><td>поисковая система</td></tr>
<tr><td><b>artificial intelligence</b></td><td>искусственный интеллект</td></tr>
</table>

<h3>Сочетания</h3>
<p>meet a deadline, gain experience, do research, take notes, solve a problem, back up data.</p>

<h3>Мини-практика</h3>
<ol>
<li>Never share your [[privacy|personal data]]. (конфиденциальность/личные данные)</li>
<li>I have a job [[interview]] tomorrow. (собеседование)</li>
<li>We’re making good [[progress]]. (успехи)</li>
</ol>
` },

  { id: 603, level: "B2", category: "vocabulary", topic: "travel_home_environment", title: "03. Путешествия, дом и экология", content: `
<h3>Путешествия</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>book accommodation</b></td><td>забронировать жильё</td></tr>
<tr><td><b>check in/out</b></td><td>зарегистрироваться/выехать</td></tr>
<tr><td><b>boarding pass</b></td><td>посадочный талон</td></tr>
<tr><td><b>delayed/cancelled</b></td><td>задержанный/отменённый</td></tr>
<tr><td><b>destination</b></td><td>пункт назначения</td></tr>
<tr><td><b>luggage</b></td><td>багаж</td></tr>
<tr><td><b>sightseeing</b></td><td>осмотр достопримечательностей</td></tr>
<tr><td><b>get lost</b></td><td>заблудиться</td></tr>
<tr><td><b>miss a connection</b></td><td>опоздать на пересадку</td></tr>
<tr><td><b>travel insurance</b></td><td>страховка</td></tr>
</table>

<h3>Дом</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>rent</b></td><td>арендовать</td></tr>
<tr><td><b>landlord</b></td><td>арендодатель</td></tr>
<tr><td><b>tenant</b></td><td>арендатор</td></tr>
<tr><td><b>deposit</b></td><td>залог</td></tr>
<tr><td><b>bills</b></td><td>счета</td></tr>
<tr><td><b>spacious</b></td><td>просторный</td></tr>
<tr><td><b>cosy</b></td><td>уютный</td></tr>
<tr><td><b>furnished</b></td><td>меблированный</td></tr>
<tr><td><b>neighbourhood</b></td><td>район</td></tr>
<tr><td><b>household chores</b></td><td>домашние обязанности</td></tr>
</table>

<h3>Экология</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>pollution</b></td><td>загрязнение</td></tr>
<tr><td><b>waste</b></td><td>отходы</td></tr>
<tr><td><b>recycle</b></td><td>перерабатывать</td></tr>
<tr><td><b>renewable energy</b></td><td>возобновляемая энергия</td></tr>
<tr><td><b>climate change</b></td><td>изменение климата</td></tr>
<tr><td><b>protect wildlife</b></td><td>защищать дикую природу</td></tr>
<tr><td><b>reduce emissions</b></td><td>сокращать выбросы</td></tr>
<tr><td><b>public transport</b></td><td>общественный транспорт</td></tr>
<tr><td><b>drought</b></td><td>засуха</td></tr>
<tr><td><b>flood</b></td><td>наводнение</td></tr>
</table>

<h3>Пример</h3>
<p>Our flight was delayed, so we missed the connection. — Рейс задержали, поэтому мы опоздали на пересадку.</p>

<h3>Мини-практика</h3>
<ol>
<li>Переведите «Рейс отменили» → [[The flight was cancelled.]]</li>
<li>Переведите «Я снимаю уютную квартиру» → [[I rent a cosy flat.|I rent a cosy apartment.]]</li>
<li>Переведите «Нужно перерабатывать отходы» → [[We need to recycle waste.]]</li>
</ol>
` },

  { id: 604, level: "B2", category: "vocabulary", topic: "health_society", title: "04. Здоровье, эмоции и общество", content: `
<h3>Здоровье</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>symptom</b></td><td>симптом</td></tr>
<tr><td><b>treatment</b></td><td>лечение</td></tr>
<tr><td><b>recover</b></td><td>выздоравливать</td></tr>
<tr><td><b>suffer from</b></td><td>страдать от</td></tr>
<tr><td><b>injury</b></td><td>травма</td></tr>
<tr><td><b>prescription</b></td><td>рецепт</td></tr>
<tr><td><b>appointment</b></td><td>запись к врачу</td></tr>
<tr><td><b>balanced diet</b></td><td>сбалансированное питание</td></tr>
<tr><td><b>get enough sleep</b></td><td>достаточно спать</td></tr>
</table>

<h3>Эмоции</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>delighted</b></td><td>в восторге</td></tr>
<tr><td><b>disappointed</b></td><td>разочарованный</td></tr>
<tr><td><b>embarrassed</b></td><td>смущённый</td></tr>
<tr><td><b>frustrated</b></td><td>раздражённый</td></tr>
<tr><td><b>relieved</b></td><td>испытывающий облегчение</td></tr>
<tr><td><b>anxious</b></td><td>тревожный</td></tr>
<tr><td><b>proud</b></td><td>гордый</td></tr>
<tr><td><b>confused</b></td><td>растерянный</td></tr>
<tr><td><b>exhausted</b></td><td>измотанный</td></tr>
</table>

<h3>Общество</h3>
<table>
<tr><th>English</th><th>Перевод</th></tr>
<tr><td><b>volunteer</b></td><td>волонтёр/работать добровольно</td></tr>
<tr><td><b>charity</b></td><td>благотворительность</td></tr>
<tr><td><b>community</b></td><td>сообщество</td></tr>
<tr><td><b>crime</b></td><td>преступление</td></tr>
<tr><td><b>witness</b></td><td>свидетель</td></tr>
<tr><td><b>raise awareness</b></td><td>привлекать внимание</td></tr>
<tr><td><b>take part</b></td><td>участвовать</td></tr>
<tr><td><b>donate</b></td><td>жертвовать</td></tr>
<tr><td><b>campaign</b></td><td>кампания</td></tr>
</table>

<h3>Сочетания</h3>
<p>feel relieved, be proud of, be worried about, take part in, raise money for charity, report a crime.</p>

<h3>Мини-практика</h3>
<ol>
<li>Someone who sees an accident is a [[witness]]. (свидетель)</li>
<li>Giving money to help others means to [[donate]]. (жертвовать)</li>
</ol>
` }
];
