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
<li>How old is Anna?</li>
<li>Where does her mother work?</li>
<li>How old is her brother?</li>
<li>What is the cat's name?</li>
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
<li>What time does the person get up?</li>
<li>What does the person eat for breakfast?</li>
<li>Where does the person work?</li>
<li>What time does the person finish work?</li>
<li>What does the person do in the evening?</li>
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
<li>How many bedrooms are there?</li>
<li>What is there in the living room?</li>
<li>Where is the bed?</li>
<li>Where are the books?</li>
<li>Why does the person like the house?</li>
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
<li>How old is Tom?</li>
<li>What colour are his eyes?</li>
<li>Can he play the guitar?</li>
<li>Where do the friends go?</li>
<li>What do they do at weekends?</li>
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
<li>What is the person's favourite food?</li>
<li>What does the person eat for breakfast?</li>
<li>Does the person like mushrooms?</li>
<li>What does the person drink?</li>
<li>Who does the person cook with?</li>
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
<li>Why does the person love weekends?</li>
<li>What does the person do on Saturday morning?</li>
<li>Who does the person go shopping with?</li>
<li>Where does the person go on Sunday?</li>
<li>What do they do together?</li>
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
<li>Where is Alex?</li>
<li>What places does he visit?</li>
<li>What is the weather like?</li>
<li>What does he eat and drink?</li>
<li>What does he buy for his family?</li>
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
<li>What day is tomorrow?</li>
<li>What time is the person going to get up?</li>
<li>Who is the person going to meet?</li>
<li>What are they going to do in the park?</li>
<li>What is the person going to do in the evening?</li>
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
];
