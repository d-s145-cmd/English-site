const MATERIALS = [
  // ================== A2: ТЕОРИЯ ==================
  { id: 101, level: "A2", category: "theory", topic: "articles", title: "Артикли a/an/the", content: `
<p>Артикль — слово перед существительным, которого в русском языке нет. Он отвечает на вопрос: предмет «какой-то один из многих» или «тот самый, конкретный»?</p>
<h3>a / an / the / нулевой</h3>
<table>
<tr><th>Артикль</th><th>Когда</th><th>Примеры</th></tr>
<tr><td>a</td><td>неопределённый, перед согласным звуком</td><td>a dog, a university, a European city</td></tr>
<tr><td>an</td><td>неопределённый, перед гласным звуком</td><td>an apple, an hour, an umbrella</td></tr>
<tr><td>the</td><td>конкретный предмет, повторное упоминание, уникальные объекты, превосходная степень</td><td>the dog (тот самый), the sun, the best</td></tr>
<tr><td>∅</td><td>мн. число и неисчисляемые в общем смысле, имена, языки, приёмы пищи</td><td>Cats are cute. I love music. We have breakfast at 8.</td></tr>
</table>
<p><b>Важно:</b> a/an зависит от <b>звука</b>, а не от буквы: <i>a university</i> (звук «ю» — согласный), но <i>an hour</i> (h немое).</p>
<h3>Примеры</h3>
<div class="example"><div class="en">I saw a dog in the park. The dog was brown.</div><div class="ru">Первое упоминание — a, повторное — the.</div></div>
<div class="example"><div class="en">The sun rises in the east.</div><div class="ru">Уникальные объекты — the.</div></div>
<div class="example"><div class="en">I study at a university.</div><div class="ru">Звук «ю» — a, несмотря на букву u.</div></div>
<h3>Когда the НЕ ставим</h3>
<ul>
<li>Страны, города, континенты: Russia, London, Europe.</li>
<li>Отдельные горы и озёра: Everest, Lake Baikal (но цепи гор: the Alps).</li>
<li>Приёмы пищи: have breakfast / lunch / dinner.</li>
<li>Учреждения по функции: go to school / university / hospital / bed.</li>
<li>Транспорт: by bus / car / train, on foot.</li>
<li>next / last + время: next week, last year (но <i>the next chapter</i> — порядок).</li>
</ul>
<div class="warn"><b>Разница с русским:</b> в русском артиклей нет вовсе. Типичные ошибки: пропуск артикля («I saw dog») или лишний the («I like the music»).</div>
` },
  { id: 102, level: "A2", category: "theory", topic: "comparatives", title: "Степени сравнения", content: `
<p>Comparative — «больше/меньше чем». Superlative — «самый».</p>
<h3>Формула</h3>
<table>
<tr><th>Тип прилагательного</th><th>Comparative</th><th>Superlative</th></tr>
<tr><td>Короткие: big, fast, nice</td><td>bigger, faster, nicer</td><td>the biggest, the fastest</td></tr>
<tr><td>Длинные: expensive, interesting</td><td>more expensive</td><td>the most expensive</td></tr>
<tr><td>Исключения</td><td>good → better, bad → worse, far → farther/further</td><td>the best, the worst, the farthest</td></tr>
</table>
<p>Орфография: big → bigger (удвоение), nice → nicer (-e убираем), happy → happier (y → i).</p>
<div class="example"><div class="en">This car is faster than that one.</div><div class="ru">Сравнение двух объектов.</div></div>
<div class="example"><div class="en">She is the tallest girl in the class.</div><div class="ru">Превосходная степень — the + -est.</div></div>
<div class="warn"><b>Разница с русским:</b> выбор между -er и more — жёсткое правило по числу слогов, а не стиль. Ошибки «more big», «fastest» без the звучат явно неверно.</div>
` },
  { id: 103, level: "A2", category: "theory", topic: "modals", title: "Модальные глаголы: can, must, should", content: `
<p>Модальные глаголы добавляют к действию отношение: возможность, необходимость, совет.</p>
<h3>Формула</h3>
<table>
<tr><th></th><th>Утверждение</th><th>Отрицание</th><th>Вопрос</th></tr>
<tr><td>can</td><td>She can swim.</td><td>She can't swim.</td><td>Can she swim?</td></tr>
<tr><td>could</td><td>He could run fast.</td><td>He couldn't run fast.</td><td>Could he run fast?</td></tr>
<tr><td>must</td><td>You must go.</td><td>You mustn't smoke here.</td><td>Must I go?</td></tr>
<tr><td>have to</td><td>She has to work.</td><td>She doesn't have to work.</td><td>Does she have to work?</td></tr>
<tr><td>should</td><td>You should rest.</td><td>You shouldn't rest.</td><td>Should I rest?</td></tr>
</table>
<div class="warn"><b>Главная ловушка:</b> <i>mustn't</i> = запрещено; <i>don't have to</i> = не обязательно. Это почти противоположности.</div>
<div class="example"><div class="en">You must wear a seatbelt.</div><div class="ru">Личное убеждение/правило.</div></div>
<div class="example"><div class="en">I have to finish this report by Friday.</div><div class="ru">Внешняя необходимость (начальник).</div></div>
<div class="example"><div class="en">You should see a doctor.</div><div class="ru">Совет.</div></div>
<h3>Степень уверенности: must / might / can't / should</h3>
<table>
<tr><th>Уверенность</th><th>Глагол</th><th>Пример</th></tr>
<tr><td>~100% да</td><td>must</td><td>She must be at home — her car is outside.</td></tr>
<tr><td>высокая</td><td>should</td><td>The package should arrive tomorrow.</td></tr>
<tr><td>~50%</td><td>might / may / could</td><td>He might be busy right now.</td></tr>
<tr><td>~100% нет</td><td>can't</td><td>She can't be at home — her car isn't here.</td></tr>
</table>
<p><b>mustn't ≠ отрицание уверенности.</b> «Я уверен, что это не так» — это <i>can't</i>, а не <i>mustn't</i>.</p>
` },
  { id: 104, level: "A2", category: "theory", topic: "prepositions", title: "Предлоги in / on / at", content: `
<p>Логика параллельна: от широкого (in) к точечному (at).</p>
<h3>Время</h3>
<table>
<tr><th>Предлог</th><th>Для чего</th><th>Примеры</th></tr>
<tr><td>in</td><td>месяцы, годы, века, части дня, сезоны</td><td>in May, in 2010, in the morning, in summer</td></tr>
<tr><td>on</td><td>дни недели, даты, особые дни</td><td>on Monday, on 5th May, on my birthday</td></tr>
<tr><td>at</td><td>точное время, night, weekend, Christmas</td><td>at 5 o'clock, at night, at the weekend</td></tr>
</table>
<h3>Место</h3>
<table>
<tr><th>Предлог</th><th>Для чего</th><th>Примеры</th></tr>
<tr><td>in</td><td>внутри объёма, город, страна</td><td>in the box, in London, in the room</td></tr>
<tr><td>on</td><td>на поверхности</td><td>on the table, on the wall, on the second floor</td></tr>
<tr><td>at</td><td>точка/адрес/событие</td><td>at the bus stop, at school, at 25 Baker Street</td></tr>
</table>
<div class="example"><div class="en">I was born in 1995, in May, in the morning.</div><div class="ru">Год, месяц, часть дня — in.</div></div>
<div class="example"><div class="en">See you on Monday.</div><div class="ru">День недели — on.</div></div>
<div class="example"><div class="en">The meeting is at 5 o'clock.</div><div class="ru">Точное время — at.</div></div>
<div class="warn"><b>Разница с русским:</b> «в понедельник» по-русски — «в», а по-английски — <i>on</i>. Это нужно запоминать, логики «один русский предлог = один английский» нет.</div>
` },
  { id: 105, level: "A2", category: "theory", topic: "tenses", title: "Времена: Present Simple / Continuous, Past Simple, Present Perfect", content: `
<p>В английском почти всегда важно <b>откуда</b> мы смотрим на действие.</p>
<h3>Сводная таблица</h3>
<table>
<tr><th>Время</th><th>Формула</th><th>Маркеры</th><th>Суть</th></tr>
<tr><td>Present Simple</td><td>V(s)</td><td>always, usually, every day</td><td>факт, привычка, расписание</td></tr>
<tr><td>Present Continuous</td><td>am/is/are + V-ing</td><td>now, at the moment</td><td>процесс сейчас</td></tr>
<tr><td>Past Simple</td><td>V2</td><td>yesterday, last year, in 2010</td><td>завершённое действие с конкретным временем</td></tr>
<tr><td>Present Perfect</td><td>have/has + V3</td><td>ever, just, since, for</td><td>опыт, результат сейчас</td></tr>
<tr><td>Future (will)</td><td>will + V</td><td>tomorrow</td><td>предсказание/спонтанное решение</td></tr>
<tr><td>Future (going to)</td><td>am/is/are going to + V</td><td>tomorrow</td><td>план/предсказание с доказательством</td></tr>
<tr><td>Past Continuous</td><td>was/were + V-ing</td><td>at 5 o'clock yesterday, while</td><td>процесс в конкретный момент прошлого</td></tr>
<tr><td>First Conditional</td><td>If + Present Simple, will + V</td><td>if</td><td>реальное условие в будущем</td></tr>
</table>
<div class="example"><div class="en">She works at a hospital.</div><div class="ru">Факт, Present Simple.</div></div>
<div class="example"><div class="en">She is working right now.</div><div class="ru">Процесс сейчас, Present Continuous.</div></div>
<div class="example"><div class="en">I visited London last year.</div><div class="ru">Конкретное время — Past Simple.</div></div>
<div class="example"><div class="en">I have visited Paris.</div><div class="ru">Опыт, время не важно — Present Perfect.</div></div>
<div class="warn"><b>Главное правило:</b> есть конкретное время → Past Simple. Нет времени, важен факт/результат → Present Perfect. Если в условной части будущее — будет ошибкой: <i>If it will rain</i> ✗, нужно <i>If it rains</i> ✔.</div>
` },
  { id: 106, level: "A2", category: "theory", topic: "tenses2", title: "Future will / going to, Past Continuous, First Conditional", content: `
<h3>will vs going to</h3>
<table>
<tr><th></th><th>will</th><th>going to</th></tr>
<tr><td>Предсказание</td><td>без доказательств: I think it will rain.</td><td>с доказательством: Look at the clouds! It's going to rain.</td></tr>
<tr><td>Решение</td><td>спонтанно: The phone is ringing. — I'll get it!</td><td>заранее: She's going to travel to Spain next month.</td></tr>
</table>
<h3>Past Continuous</h3>
<p>was/were + V-ing. Процесс в конкретный момент прошлого или фон для короткого события.</p>
<div class="example"><div class="en">I was reading when the phone rang.</div><div class="ru">Длинный фон + короткое событие.</div></div>
<h3>First Conditional</h3>
<p><b>If + Present Simple, will + V.</b> В if-части будущее <b>запрещено</b>.</p>
<div class="example"><div class="en">If it rains tomorrow, I will stay home.</div><div class="ru">Реальное условие в будущем.</div></div>
<div class="warn"><b>Типичная ошибка русскоговорящих:</b> «If it will rain…» — нельзя. В if-части всегда Present Simple.</div>
` },

  // ================== A2: ПРАКТИКА ==================
  { id: 201, level: "A2", category: "practice", topic: "articles", title: "Артикли: упражнения (25)", content: `
<p>Вставь нужный артикль (a / an / the) или прочерк (--).</p>
<ol>
<li>I saw __ dog in the park.</li>
<li>She is __ doctor.</li>
<li>__ sun rises in the east.</li>
<li>I need __ umbrella — it's raining.</li>
<li>He is __ best student in the class.</li>
<li>I study at __ university.</li>
<li>It took me __ hour to finish.</li>
<li>I love __ music.</li>
<li>Can you pass me __ salt, please?</li>
<li>This is __ interesting book.</li>
<li>I bought __ book yesterday. __ book was expensive.</li>
<li>__ Earth goes round __ Sun.</li>
<li>My brother is __ engineer, and my sister is __ artist.</li>
<li>We had __ great time at __ party last night.</li>
<li>__ cats are independent animals.</li>
<li>He plays __ guitar every evening.</li>
<li>She's reading __ book about __ history of __ Rome.</li>
<li>Can you open __ door, please?</li>
<li>I had __ egg and __ apple for breakfast.</li>
<li>He is __ most talented musician I know.</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Я видел мужчину возле дома. Мужчина держал зонт.»</li>
<li>Исправь ошибку: "I want to be a doctor because I like a help people."</li>
<li>Переведи: «Луна вращается вокруг Земли.»</li>
<li>Исправь ошибку: "She bought an new car yesterday."</li>
<li>Переведи: «Это была лучшая книга, которую я когда-либо читал.»</li>
</ol>
<p><b>Ответы:</b> 1 a; 2 a; 3 The; 4 an; 5 the; 6 a; 7 an; 8 --; 9 the; 10 an; 11 a / The; 12 The / the; 13 an / an; 14 a / the; 15 --; 16 the; 17 a / -- / --; 18 the; 19 an / an; 20 the; 21 I saw a man near the house. The man was holding an umbrella.; 22 I want to be a doctor because I like helping people.; 23 The Moon orbits the Earth.; 24 She bought a new car yesterday.; 25 It was the best book I have ever read.</p>
` },
  { id: 202, level: "A2", category: "practice", topic: "comparatives", title: "Степени сравнения: упражнения (25)", content: `
<ol>
<li>This car is __ (fast) than that one.</li>
<li>She is the __ (tall) girl in the class.</li>
<li>This book is __ (interesting) than that film.</li>
<li>Health is the __ (important) thing in life.</li>
<li>My bag is __ (heavy) than yours.</li>
<li>This is the __ (expensive) restaurant in town.</li>
<li>Winter is __ (cold) than autumn.</li>
<li>He is the __ (good) player on the team.</li>
<li>This exercise is __ (easy) than the last one.</li>
<li>That was the __ (bad) film I've ever seen.</li>
<li>This flat is __ (big) than the one we saw yesterday, but it's __ (expensive) too.</li>
<li>Of all my friends, she is the __ (funny).</li>
<li>The new phone is __ (thin) and __ (light) than the old model.</li>
<li>This is by far the __ (difficult) exam I've taken this year.</li>
<li>My brother is __ (old) than me, but I am __ (tall) than him.</li>
<li>This café serves the __ (delicious) coffee in the city.</li>
<li>Traveling by train is usually __ (comfortable) than by bus.</li>
<li>She works __ (hard) than anyone else in the office.</li>
<li>Of the three routes, this one is the __ (short).</li>
<li>The weather today is __ (bad) than yesterday, but it's not the __ (bad) this month.</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Этот телефон дороже, но качественнее, чем тот.»</li>
<li>Исправь ошибку: "This is the most fastest car in the world."</li>
<li>Переведи: «Она самая умная студентка на курсе.»</li>
<li>Исправь ошибку: "My house is more big than yours."</li>
<li>Переведи: «Сегодня погода лучше, чем была вчера.»</li>
</ol>
<p><b>Ответы:</b> 1 faster; 2 tallest; 3 more interesting; 4 most important; 5 heavier; 6 most expensive; 7 colder; 8 best; 9 easier; 10 worst; 11 bigger / more expensive; 12 funniest; 13 thinner / lighter; 14 most difficult; 15 older / taller; 16 most delicious; 17 more comfortable; 18 harder; 19 shortest; 20 worse / worst; 21 This phone is more expensive, but better quality, than that one.; 22 This is the fastest car in the world.; 23 She is the smartest student on the course.; 24 My house is bigger than yours.; 25 The weather is better today than it was yesterday.</p>
` },
  { id: 203, level: "A2", category: "practice", topic: "modals", title: "Модальные глаголы: упражнения (25)", content: `
<ol>
<li>She __ (can / speak) three languages.</li>
<li>I __ (can / open) the window?</li>
<li>He __ (can / not / swim) when he was a child.</li>
<li>You __ (must / wear) a seatbelt in the car.</li>
<li>I __ (have to / finish) this report by Friday.</li>
<li>You __ (should / see) a doctor.</li>
<li>You __ (should / not / eat) so much sugar.</li>
<li>We __ (have to / not / hurry), we have plenty of time.</li>
<li>__ he __ (have to / work) on Saturdays?</li>
<li>You __ (must / not / smoke) here.</li>
<li>I __ (could / not / sleep) last night — too much noise.</li>
<li>__ you __ (could / help) me with this bag, please?</li>
<li>You look exhausted — you __ (must / be) tired after that flight.</li>
<li>You __ (don't have to / come) if you're busy.</li>
<li>Employees __ (must / not / use) their phones during meetings.</li>
<li>She __ (have to / renew) her passport — it expires next month.</li>
<li>__ we __ (must / bring) our own equipment?</li>
<li>You __ (should / not / ignore) his advice.</li>
<li>I __ (can / not / believe) this is happening!</li>
<li>As a child, I __ (could / climb) trees really fast.</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Тебе не нужно приходить, если ты занят.»</li>
<li>Исправь ошибку: "You mustn't come if you don't want to."</li>
<li>Переведи: «Здесь категорически нельзя курить.»</li>
<li>Исправь ошибку: "She can to speak French."</li>
<li>Переведи: «Ты, должно быть, устал после такого перелёта.»</li>
</ol>
<p><b>Ответы:</b> 1 can speak; 2 Can I open; 3 couldn't swim; 4 must wear; 5 have to finish; 6 should see; 7 shouldn't eat; 8 don't have to hurry; 9 Does he have to work; 10 mustn't smoke; 11 couldn't sleep; 12 Could you help; 13 must be; 14 don't have to come; 15 mustn't use; 16 has to renew; 17 Must we bring; 18 shouldn't ignore; 19 can't believe; 20 could climb; 21 You don't have to come if you're busy.; 22 You don't have to come if you don't want to.; 23 You mustn't smoke here.; 24 She can speak French.; 25 You must be tired after such a flight.</p>
` },
  { id: 204, level: "A2", category: "practice", topic: "prepositions", title: "Предлоги in / on / at: упражнения (25)", content: `
<ol>
<li>I was born __ 1995.</li>
<li>See you __ Monday.</li>
<li>The meeting is __ 5 o'clock.</li>
<li>She lives __ London.</li>
<li>The keys are __ the table.</li>
<li>We'll meet __ the bus stop.</li>
<li>My birthday is __ May.</li>
<li>I usually wake up early __ the morning.</li>
<li>The party is __ Saturday evening.</li>
<li>He works __ a big company __ Berlin.</li>
<li>I'll see you __ the weekend — we're meeting __ 3 pm __ my house.</li>
<li>The book is __ the shelf, __ the second floor of the library.</li>
<li>She was born __ the 5th of May, __ 1998, __ the morning.</li>
<li>We always have a big dinner __ Christmas.</li>
<li>The conference starts __ 9 am __ Monday __ the city centre.</li>
<li>He's waiting for you __ the reception, not __ the café.</li>
<li>__ night the streets __ this town are very quiet.</li>
<li>I left my umbrella __ the office, __ my desk.</li>
<li>The exam is __ the 20th of June, __ 10 o'clock, __ Room 204.</li>
<li>They got married __ a small church __ the countryside.</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Встретимся в понедельник в 5 часов у входа.»</li>
<li>Исправь ошибку: "I will see you in Monday."</li>
<li>Переведи: «Она работает в Лондоне с 2020 года, в большой компании.»</li>
<li>Исправь ошибку: "The book is in the table."</li>
<li>Переведи: «Мы встретимся на автобусной остановке в 8 утра.»</li>
</ol>
<p><b>Ответы:</b> 1 in; 2 on; 3 at; 4 in; 5 on; 6 at; 7 in; 8 in; 9 on; 10 at / in; 11 at / at / at; 12 on / on; 13 on / in / in; 14 at; 15 at / on / in; 16 at / in; 17 At / in; 18 in / at; 19 on / at / in; 20 in / in; 21 See you on Monday at 5 o'clock at the entrance.; 22 I will see you on Monday.; 23 She has worked in London since 2020, at a big company.; 24 The book is on the table.; 25 We'll meet at the bus stop at 8 am.</p>
` },
  { id: 205, level: "A2", category: "practice", topic: "present_simple", title: "Present Simple: упражнения (25)", content: `
<ol>
<li>She __ (work) at a hospital.</li>
<li>They __ (live) in London.</li>
<li>He __ (not / like) coffee.</li>
<li>I __ (go) to school every day.</li>
<li>My brother __ (play) football on Sundays.</li>
<li>We __ (not / have) a car.</li>
<li>__ she __ (speak) French?</li>
<li>The shop __ (open) at 9 am.</li>
<li>Cats __ (sleep) a lot.</li>
<li>My father __ (drive) to work.</li>
<li>Look! It __ (rain).</li>
<li>Water __ (boil) at 100°C.</li>
<li>I __ (not / watch) TV now, I __ (read) a book.</li>
<li>He usually __ (take) the bus, but today he __ (walk).</li>
<li>__ you __ (understand) this rule?</li>
<li>She __ (not / work) today because she __ (be) ill.</li>
<li>The Earth __ (go) round the Sun.</li>
<li>Why __ he __ (shout) right now?</li>
<li>We __ (meet) every Friday, but this week we __ (meet) on Thursday.</li>
<li>My parents __ (currently / stay) with us this month.</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Она никогда не пьёт кофе, но сейчас она пьёт чай.»</li>
<li>Исправь ошибку: "He don't like fish."</li>
<li>Переведи: «Поезд отправляется в 6 вечера каждый день.»</li>
<li>Исправь ошибку: "She is knowing the answer."</li>
<li>Переведи: «Смотри! Она сейчас готовит ужин, хотя обычно готовит её мама.»</li>
</ol>
<p><b>Ответы:</b> 1 works; 2 live; 3 doesn't like; 4 go; 5 plays; 6 don't have; 7 Does she speak; 8 opens; 9 sleep; 10 drives; 11 is raining; 12 boils; 13 'm not watching / 'm reading; 14 takes / is walking; 15 Do you understand; 16 isn't working / is; 17 goes; 18 is he shouting; 19 meet / are meeting; 20 are currently staying; 21 She never drinks coffee, but she is drinking tea now.; 22 He doesn't like fish.; 23 The train leaves at 6 pm every day.; 24 She knows the answer.; 25 Look! She is cooking dinner now, although her mother usually cooks.</p>
` },
  { id: 206, level: "A2", category: "practice", topic: "present_continuous", title: "Present Continuous: упражнения (25)", content: `
<ol>
<li>I __ (write) an email right now.</li>
<li>She __ (read) a book at the moment.</li>
<li>They __ (play) football now.</li>
<li>We __ (not / work) today.</li>
<li>__ you __ (listen) to me?</li>
<li>He __ (sleep) right now.</li>
<li>The children __ (watch) cartoons.</li>
<li>I __ (not / eat) breakfast now.</li>
<li>__ it __ (rain) outside?</li>
<li>My sister __ (study) for her exam at the moment.</li>
<li>I usually __ (drive) to work, but this week I __ (take) the bus.</li>
<li>She __ (live) with her parents while her flat __ (be) renovated.</li>
<li>He (always / leave) his socks on the floor!</li>
<li>Why __ you __ (look) at me like that?</li>
<li>We __ (not / usually / eat) out, but tonight we __ (eat) at a restaurant.</li>
<li>__ she __ (still / wait) for the bus?</li>
<li>The company __ (currently / develop) a new app.</li>
<li>He __ (not / work) at the moment — he's on holiday.</li>
<li>Look, the sun __ (set)!</li>
<li>They __ (build) a new bridge near our house this year.</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Она обычно носит очки, но сегодня она в линзах.»</li>
<li>Исправь ошибку: "I am knowing the answer now."</li>
<li>Переведи: «Он вечно теряет свои ключи! (раздражение)»</li>
<li>Исправь ошибку: "She is wanting a new phone."</li>
<li>Переведи: «Пока экономика растёт, цены тоже повышаются.»</li>
</ol>
<p><b>Ответы:</b> 1 am writing; 2 is reading; 3 are playing; 4 aren't working; 5 Are you listening; 6 is sleeping; 7 are watching; 8 am not eating; 9 Is it raining; 10 is studying; 11 drive / am taking; 12 is living / is; 13 is always leaving; 14 are you looking; 15 don't usually eat / are eating; 16 Is she still waiting; 17 is currently developing; 18 isn't working; 19 is setting; 20 are building; 21 She usually wears glasses, but today she is wearing contact lenses.; 22 I know the answer now.; 23 He is always losing his keys!; 24 She wants a new phone.; 25 While the economy is growing, prices are rising too.</p>
` },
  { id: 207, level: "A2", category: "practice", topic: "past_simple", title: "Past Simple: упражнения (25)", content: `
<ol>
<li>I __ (visit) my grandmother last weekend.</li>
<li>She __ (go) to Paris in 2018.</li>
<li>They __ (not / watch) the film yesterday.</li>
<li>__ you __ (see) that movie?</li>
<li>He __ (buy) a new car last month.</li>
<li>We __ (have) dinner at 7 pm yesterday.</li>
<li>My father __ (build) this house in 1990.</li>
<li>She __ (not / come) to the party.</li>
<li>I __ (get) up early yesterday.</li>
<li>They __ (make) a cake for the party.</li>
<li>When __ you __ (arrive) in London?</li>
<li>He __ (not / know) the answer, so he __ (ask) the teacher.</li>
<li>She __ (live) in Rome for two years, then she __ (move) to Milan.</li>
<li>__ they __ (finish) the project before the deadline?</li>
<li>Yesterday I __ (take) an exam at 5 pm.</li>
<li>We __ (not / have) time to visit the museum last time.</li>
<li>He __ (come) home late and __ (go) straight to bed.</li>
<li>Where __ (be) you born?</li>
<li>She __ (win) the competition last year.</li>
<li>I __ (not / understand) the question, so I __ (raise) my hand.</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Я видел его вчера.»</li>
<li>Исправь ошибку: "I have seen him yesterday."</li>
<li>Переведи: «Она родилась в 1995 году.»</li>
<li>Исправь ошибку: "Did you went to the party?"</li>
<li>Переведи: «Когда мне было десять лет, я жил в Тамбове.»</li>
</ol>
<p><b>Ответы:</b> 1 visited; 2 went; 3 didn't watch; 4 Did you see; 5 bought; 6 had; 7 built; 8 didn't come; 9 got; 10 made; 11 did you arrive; 12 didn't know / asked; 13 lived / moved; 14 Did they finish; 15 took; 16 didn't have; 17 came / went; 18 were; 19 won; 20 didn't understand / raised; 21 I saw him yesterday.; 22 I saw him yesterday.; 23 She was born in 1995.; 24 Did you go to the party?; 25 When I was ten, I lived in Tambov.</p>
` },
  { id: 208, level: "A2", category: "practice", topic: "present_perfect", title: "Present Perfect: упражнения (25)", content: `
<ol>
<li>I __ (visit) Paris. (когда именно — не важно)</li>
<li>She __ (just / finish) her homework.</li>
<li>They __ (not / see) that film yet.</li>
<li>__ you ever __ (be) to Japan?</li>
<li>He __ (lose) his keys.</li>
<li>We __ (already / do) the shopping.</li>
<li>She __ (not / call) me yet.</li>
<li>__ he __ (finish) his homework yet?</li>
<li>I __ (never / try) sushi.</li>
<li>They __ (just / arrive).</li>
<li>He __ (live) here since 2015.</li>
<li>I __ (know) her for ten years.</li>
<li>__ you __ (finish) your homework yet?</li>
<li>She __ (not / eat) anything since breakfast.</li>
<li>We __ (be) friends since childhood.</li>
<li>He __ (just / leave) the office — you can still catch him.</li>
<li>I __ (never / see) such a beautiful sunset before.</li>
<li>__ they __ (already / move) into the new house?</li>
<li>She __ (work) here for three months.</li>
<li>This is the best film I __ (ever / watch).</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Я никогда не был в Лондоне.»</li>
<li>Исправь ошибку: "I have seen him yesterday."</li>
<li>Переведи: «Она живёт здесь с 2020 года.»</li>
<li>Исправь ошибку: "I have visited my grandmother last week."</li>
<li>Переведи: «Мы только что закончили проект.»</li>
</ol>
<p><b>Ответы:</b> 1 have visited; 2 has just finished; 3 haven't seen; 4 Have you ever been; 5 has lost; 6 have already done; 7 hasn't called; 8 Has he finished; 9 have never tried; 10 have just arrived; 11 has lived; 12 have known; 13 Have you finished; 14 hasn't eaten; 15 have been; 16 has just left; 17 have never seen; 18 Have they already moved; 19 has worked; 20 have ever watched; 21 I have never been to London.; 22 I saw him yesterday.; 23 She has lived here since 2020.; 24 I visited my grandmother last week.; 25 We have just finished the project.</p>
` },
  { id: 209, level: "A2", category: "practice", topic: "past_continuous", title: "Past Continuous: упражнения (25)", content: `
<ol>
<li>At 5 o'clock yesterday, I __ (watch) TV.</li>
<li>She __ (read) a book all evening yesterday.</li>
<li>They __ (not / sleep) at midnight.</li>
<li>__ you __ (work) at 9 am yesterday?</li>
<li>He __ (cook) dinner at 7 pm.</li>
<li>We __ (not / listen) to music then.</li>
<li>__ it __ (rain) at that moment?</li>
<li>I __ (do) my homework all day yesterday.</li>
<li>The children __ (play) in the garden at noon.</li>
<li>She __ (not / work) at 6 pm yesterday.</li>
<li>I __ (read) a book when the phone __ (ring).</li>
<li>While she __ (cook), he __ (clean) the kitchen.</li>
<li>What __ you __ (do) when I called you yesterday?</li>
<li>He __ (walk) home when he __ (see) an old friend.</li>
<li>They __ (not / pay) attention when the teacher __ (explain) the rule.</li>
<li>While I __ (wait) for the bus, it __ (start) to rain.</li>
<li>__ she __ (drive) when the accident __ (happen)?</li>
<li>We __ (have) dinner when the lights __ (go) out.</li>
<li>He __ (not / listen) when she __ (tell) him the news.</li>
<li>I __ (just / leave) the house when it __ (start) to snow.</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Я читал книгу, когда зазвонил телефон.»</li>
<li>Исправь ошибку: "When I arrived, she was cooked dinner."</li>
<li>Переведи: «Пока он готовил ужин, она убирала кухню.»</li>
<li>Исправь ошибку: "What were you doing at 5 o'clock yesterday? I watched TV."</li>
<li>Переведи: «Что ты делал вчера в 5 часов?»</li>
</ol>
<p><b>Ответы:</b> 1 was watching; 2 was reading; 3 weren't sleeping; 4 Were you working; 5 was cooking; 6 weren't listening; 7 Was it raining; 8 was doing; 9 were playing; 10 wasn't working; 11 was reading / rang; 12 was cooking / was cleaning; 13 were you doing; 14 was walking / saw; 15 weren't paying / was explaining; 16 was waiting / started; 17 Was she driving / happened; 18 were having / went; 19 wasn't listening / was telling; 20 had just left / started; 21 I was reading a book when the phone rang.; 22 When I arrived, she was cooking dinner.; 23 While he was cooking dinner, she was cleaning the kitchen.; 24 What were you doing at 5 o'clock yesterday? — I was watching TV.; 25 What were you doing at 5 o'clock yesterday?</p>
` },
  { id: 210, level: "A2", category: "practice", topic: "future_will_going_to", title: "Future will / going to: упражнения (25)", content: `
<ol>
<li>I think it __ (rain) tomorrow.</li>
<li>Look at those clouds! It __ (rain).</li>
<li>The phone is ringing. — I __ (get) it!</li>
<li>She __ (travel) to Spain next month. She already bought tickets.</li>
<li>I promise I __ (help) you tomorrow.</li>
<li>__ you __ (help) me carry this bag?</li>
<li>He __ (study) medicine after school. It's his plan for years.</li>
<li>I __ (not / go) to the party, I've already decided.</li>
<li>Maybe I __ (call) you later.</li>
<li>We __ (not / be) late, I promise.</li>
<li>The shelf looks like it's about to fall! — I __ (fix) it right now.</li>
<li>I __ (meet) my friend at 6 pm. We arranged it yesterday.</li>
<li>__ you __ (be) free this weekend?</li>
<li>She's got her suitcase ready — she __ (leave) soon.</li>
<li>I don't know yet. Maybe I __ (stay) home this weekend.</li>
<li>We __ (not / go) out tonight — let's decide now: we __ (stay) in.</li>
<li>According to the forecast, it __ (be) sunny tomorrow.</li>
<li>He looks exhausted — he __ (fall) asleep any minute.</li>
<li>I __ (probably / see) you next week.</li>
<li>They __ (get) married in June — the invitations are already sent.</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Кажется, будет дождь.»</li>
<li>Исправь ошибку: "Look! The bus is going to leaves."</li>
<li>Переведи: «Я уже решил — я поступаю в этот университет.»</li>
<li>Исправь ошибку: "I will going to call you tomorrow."</li>
<li>Переведи: «Подожди, я тебе помогу!»</li>
</ol>
<p><b>Ответы:</b> 1 will rain; 2 is going to rain; 3 'll get; 4 is going to travel; 5 will help; 6 Will you help; 7 is going to study; 8 'm not going to go; 9 will call; 10 won't be; 11 'll fix; 12 am going to meet; 13 Will you be; 14 is going to leave; 15 will stay; 16 aren't going to go / will stay; 17 will be; 18 is going to fall asleep; 19 will probably see; 20 are going to get; 21 I think it will rain.; 22 Look! The bus is going to leave.; 23 I've already decided — I'm going to apply to this university.; 24 I will call you tomorrow.; 25 Wait, I'll help you!</p>
` },
  { id: 211, level: "A2", category: "practice", topic: "first_conditional", title: "First Conditional: упражнения (25)", content: `
<ol>
<li>If it __ (rain) tomorrow, I __ (stay) home.</li>
<li>If you __ (study) hard, you __ (pass) the exam.</li>
<li>She __ (be) angry if you __ (be) late.</li>
<li>If we __ (hurry), we __ (not / miss) the train.</li>
<li>If he __ (not / call) me, I __ (call) him.</li>
<li>You __ (feel) better if you __ (get) some rest.</li>
<li>If they __ (win), everyone __ (celebrate).</li>
<li>I __ (help) you if you __ (need) it.</li>
<li>If it __ (be) sunny tomorrow, we __ (go) to the beach.</li>
<li>__ you __ (be) upset if I __ (leave) early?</li>
<li>If she __ (not / finish) the report tonight, she __ (have to) stay late tomorrow.</li>
<li>We __ (miss) the flight if we __ (not / leave) now.</li>
<li>If you __ (eat) too much, you __ (feel) sick.</li>
<li>__ he __ (be) surprised if we __ (arrive) early?</li>
<li>If the weather __ (change), the match __ (be) cancelled.</li>
<li>I __ (not / go) if it __ (cost) too much.</li>
<li>If you __ (need) anything, just __ (ask) me.</li>
<li>They __ (be) disappointed if the plan __ (not / work).</li>
<li>If she __ (see) him, she __ (tell) him the news.</li>
<li>We __ (not / have) enough time if the meeting __ (start) late.</li>
</ol>
<p><b>Сложные:</b></p>
<ol start="21">
<li>Переведи: «Если пойдёт дождь, я останусь дома.»</li>
<li>Исправь ошибку: "If it will rain, I will stay home."</li>
<li>Переведи: «Если ты не поторопишься, ты опоздаешь на поезд.»</li>
<li>Исправь ошибку: "If you will study hard, you pass the exam."</li>
<li>Переведи: «Она расстроится, если ты не придёшь на вечеринку.»</li>
</ol>
<p><b>Ответы:</b> 1 rains / will stay; 2 study / will pass; 3 will be / are; 4 hurry / won't miss; 5 doesn't call / will call; 6 will feel / get; 7 win / will celebrate; 8 will help / need; 9 is / will go; 10 Will you be / leave; 11 doesn't finish / will have to; 12 will miss / don't leave; 13 eat / will feel; 14 Will he be / arrive; 15 changes / will be; 16 won't go / costs; 17 need / ask; 18 will be / doesn't work; 19 sees / will tell; 20 won't have / starts; 21 If it rains, I will stay home.; 22 If it rains, I will stay home.; 23 If you don't hurry, you will miss the train.; 24 If you study hard, you will pass the exam.; 25 She will be upset if you don't come to the party.</p>
` },

  // ================== B1 / B2 / C1: ЗАГОТОВКИ ==================
  { id: 301, level: "B1", category: "theory", topic: "intro", title: "Раздел B1 — в разработке", content: `<p>Здесь будут материалы уровня B1: Conditionals 2/3, Passive Voice, Reported Speech, Relative Clauses.</p>` },
  { id: 401, level: "B2", category: "theory", topic: "intro", title: "Раздел B2 — в разработке", content: `<p>Здесь будут материалы уровня B2: Inversion, Mixed Conditionals, Advanced Modals, Phrasal Verbs.</p>` },
  { id: 501, level: "C1", category: "theory", topic: "intro", title: "Раздел C1 — в разработке", content: `<p>Здесь будут материалы уровня C1: Cleft Sentences, Subjunctive, Nominalisation, Academic Writing.</p>` },

  // ================== ICPC: ТЕОРИЯ ==================
  { id: 601, level: "ICPC", category: "theory", topic: "anatomy", title: "1.1 Анатомия условия задачи", content: `
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
  { id: 602, level: "ICPC", category: "theory", topic: "numbers", title: "1.2 Числа, ограничения, количества", content: `
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
  { id: 603, level: "ICPC", category: "theory", topic: "arithmetic", title: "1.3 Арифметика и теория чисел", content: `
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
  { id: 604, level: "ICPC", category: "theory", topic: "arrays", title: "1.4 Массивы, строки, последовательности", content: `
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
  { id: 605, level: "ICPC", category: "theory", topic: "graphs", title: "1.5 Графы и деревья", content: `
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
  { id: 606, level: "ICPC", category: "theory", topic: "geometry", title: "1.6 Геометрия и координаты", content: `
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
  { id: 607, level: "ICPC", category: "theory", topic: "operations", title: "1.7 Операции, запросы, игры", content: `
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
  { id: 608, level: "ICPC", category: "theory", topic: "passive", title: "2.1 Пассивный залог", content: `
<h3>1. Формула: be + третья форма глагола</h3>
<p>Пассив строится как <b>is / are / was / will be / can be + V3</b>.</p>
<div class="example"><div class="en">You <b>are given</b> an array of n integers.</div><div class="ru">Вам дан массив из n чисел.</div></div>
<div class="example"><div class="en">The vertices <b>are numbered</b> from 1 to n.</div><div class="ru">Вершины пронумерованы от 1 до n.</div></div>
<div class="example"><div class="en">It <b>is guaranteed</b> that the answer exists.</div><div class="ru">Гарантируется, что ответ существует.</div></div>
<h3>2. Определения через пассив</h3>
<div class="example"><div class="en">An array <b>is called</b> good if all its elements are even.</div><div class="ru">Массив называется хорошим, если все его элементы чётны.</div></div>
<div class="example"><div class="en">The length of s <b>is denoted by</b> |s|.</div><div class="ru">Длина s обозначается |s|.</div></div>
<h3>3. can be + V3</h3>
<div class="example"><div class="en">String t <b>can be obtained</b> from s by deleting some characters.</div><div class="ru">Строку t можно получить из s удалением символов.</div></div>
<h3>4. Нужные неправильные глаголы</h3>
<table>
<tr><th>Глагол</th><th>V3</th><th>Пример</th></tr>
<tr><td>give</td><td>given</td><td>you are given</td></tr>
<tr><td>choose</td><td>chosen</td><td>the chosen element</td></tr>
<tr><td>write</td><td>written</td><td>numbers are written on the board</td></tr>
<tr><td>take</td><td>taken</td><td>no element can be taken twice</td></tr>
<tr><td>show</td><td>shown</td><td>it can be shown that</td></tr>
</table>
` },
  { id: 609, level: "ICPC", category: "theory", topic: "conditionals", title: "2.2 Условия: if, unless, otherwise", content: `
<h3>1. if, only if, if and only if</h3>
<div class="example"><div class="en">Print YES <b>if</b> the array is sorted.</div><div class="ru">Выведите YES, если массив отсортирован.</div></div>
<div class="example"><div class="en">A move is allowed <b>only if</b> the target cell is empty.</div><div class="ru">Ход разрешён, только если целевая клетка пуста.</div></div>
<div class="example"><div class="en">A number is good <b>if and only if</b> it is divisible by 3.</div><div class="ru">Число хорошее тогда и только тогда, когда делится на 3.</div></div>
<h3>2. unless — «если не»</h3>
<div class="example"><div class="en">The robot moves to the right <b>unless</b> the next cell is blocked.</div><div class="ru">Робот идёт вправо, если следующая клетка не занята.</div></div>
<div class="warn"><i>unless X</i> = <i>if not X</i>. В коде это <code>if (!X)</code>. Перепутать — значит инвертировать всю логику.</div>
<h3>3. otherwise</h3>
<div class="example"><div class="en">Print YES if s is a palindrome, and NO <b>otherwise</b>.</div><div class="ru">Выведите YES, если s — палиндром, и NO в противном случае.</div></div>
<h3>4. Условия времени</h3>
<table>
<tr><th>Фраза</th><th>Перевод</th><th>В коде</th></tr>
<tr><td>provided that X</td><td>при условии, что X</td><td><code>if (X)</code></td></tr>
<tr><td>as long as X</td><td>пока X</td><td><code>while (X)</code></td></tr>
<tr><td>as soon as X</td><td>как только X</td><td><code>if (X) break;</code></td></tr>
<tr><td>until X</td><td>пока не X</td><td><code>while (!X)</code></td></tr>
</table>
` },
  { id: 610, level: "ICPC", category: "theory", topic: "suchthat", title: "2.3 such that и длинные конструкции", content: `
<h3>1. such that — «такой, что»</h3>
<div class="example"><div class="en">Find the minimum k <b>such that</b> a<sub>k</sub> ≥ 10.</div><div class="ru">Найдите минимальное k, такое что a<sub>k</sub> ≥ 10.</div></div>
<div class="example"><div class="en">Count the pairs (i, j) <b>such that</b> i &lt; j and a<sub>i</sub> + a<sub>j</sub> = s.</div><div class="ru">Посчитайте пары (i, j), для которых i &lt; j и a<sub>i</sub> + a<sub>j</sub> = s.</div></div>
<h3>2. Придаточные: where, which, whose</h3>
<table>
<tr><th>Слово</th><th>Перевод</th></tr>
<tr><td>where</td><td>где (уточнение)</td></tr>
<tr><td>which / that</td><td>который</td></tr>
<tr><td>whose</td><td>чей, у которого</td></tr>
<tr><td>for which</td><td>для которого</td></tr>
</table>
<div class="example"><div class="en">Count the subarrays <b>whose</b> sum is even.</div><div class="ru">Посчитайте подмассивы, сумма которых чётна.</div></div>
<h3>3. Разбор длинной фразы: «голова и хвосты»</h3>
<p><b>Голова</b> — главное существительное после глагола. <b>Хвосты</b> — уточнения после предлогов of, in, after, with.</p>
<div class="example"><div class="en">Find <b>the maximum possible number</b> of pairwise distinct elements in the array after performing at most k operations.</div><div class="ru">Голова: количество. Чего? различных элементов. Где? в массиве. Когда? после ≤ k операций.</div></div>
` },
  { id: 611, level: "ICPC", category: "theory", topic: "quantifiers", title: "2.4 Кванторы", content: `
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
  { id: 612, level: "ICPC", category: "theory", topic: "modals_icpc", title: "2.5 Модальные глаголы", content: `
<h3>1. Обязательно: must, have to</h3>
<div class="example"><div class="en">Each team <b>must</b> consist of exactly three people.</div><div class="ru">Каждая команда обязана состоять ровно из трёх человек.</div></div>
<div class="example"><div class="en">You <b>have to</b> use all the cards.</div><div class="ru">Вы должны использовать все карты.</div></div>
<h3>2. Разрешено: can, may, is allowed</h3>
<div class="example"><div class="en">You <b>can</b> choose any two elements.</div><div class="ru">Можно выбрать любые два элемента.</div></div>
<div class="example"><div class="en">You <b>are allowed to</b> skip at most one level.</div><div class="ru">Разрешено пропустить не более одного уровня.</div></div>
<h3>3. Запрещено: cannot, must not</h3>
<div class="example"><div class="en">You <b>cannot</b> move through walls.</div><div class="ru">Проходить сквозь стены нельзя.</div></div>
<div class="example"><div class="en">Two adjacent cells <b>must not</b> have the same color.</div><div class="ru">Две соседние клетки не должны быть одного цвета.</div></div>
<h3>4. Не обязательно: do not have to</h3>
<div class="example"><div class="en">You <b>do not have to</b> minimize the number of operations.</div><div class="ru">Не обязательно минимизировать число операций.</div></div>
<div class="warn"><i>must not</i> — «нельзя», <i>do not have to</i> — «можно не делать». Если перепутать, вы будете решать задачу с лишним ограничением или без нужного.</div>
` },
  { id: 613, level: "ICPC", category: "theory", topic: "extremes", title: "2.6 Сравнения и экстремумы", content: `
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
  { id: 614, level: "ICPC", category: "theory", topic: "reading_order", title: "3.1 Порядок чтения условия", content: `
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
  { id: 615, level: "ICPC", category: "theory", topic: "traps", title: "3.2 Ловушки формулировок", content: `
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
  { id: 616, level: "ICPC", category: "theory", topic: "legend", title: "3.3 Отсеивание легенды", content: `
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
  { id: 617, level: "ICPC", category: "theory", topic: "examples", title: "3.4 Работа с примерами и Note", content: `
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

  // ================== ICPC: ПРАКТИКА ==================
  { id: 651, level: "ICPC", category: "practice", topic: "anatomy_q", title: "Практика: анатомия условия", content: `
<p><b>Вопрос 1.</b> <code>time limit per test: 2 seconds</code>. Что это значит?</p>
<ul>
<li>A) 2 секунды на все тесты вместе</li>
<li>B) 2 секунды на каждый тест</li>
<li>C) 2 секунды на чтение ввода</li>
</ul>
<p><b>Ответ:</b> B. <i>per test</i> = «на тест».</p>
<p><b>Вопрос 2.</b> <code>The first line contains a single integer t (1 ≤ t ≤ 10<sup>4</sup>) — the number of test cases.</code> Как понимать тире «—»?</p>
<ul>
<li>A) «t — это количество тестовых наборов»</li>
<li>B) «t минус количество тестов»</li>
<li>C) «После тире — необязательный комментарий»</li>
</ul>
<p><b>Ответ:</b> A. Тире после переменной = «— это», определение.</p>
<p><b>Вопрос 3.</b> <code>If there are multiple answers, print any of them.</code> Ваш ответ отличается от примера, но корректен. Что будет?</p>
<ul>
<li>A) WA</li>
<li>B) Принят</li>
<li>C) Нужно вывести все ответы</li>
</ul>
<p><b>Ответ:</b> B. <i>any of them</i> = «любой из них».</p>
` },
  { id: 652, level: "ICPC", category: "practice", topic: "numbers_q", title: "Практика: числа и ограничения", content: `
<p><b>Вопрос 1.</b> <code>You are given a positive integer n.</code> Может ли n быть 0?</p>
<ul><li>A) Да</li><li>B) Нет</li></ul>
<p><b>Ответ:</b> B. <i>positive</i> — строго больше нуля.</p>
<p><b>Вопрос 2.</b> <code>You can perform at most k operations.</code> Сколько операций можно сделать?</p>
<ul><li>A) Ровно k</li><li>B) От 0 до k</li><li>C) Строго больше k</li></ul>
<p><b>Ответ:</b> B. <i>at most</i> = ≤.</p>
<p><b>Вопрос 3.</b> <code>Find the number of indices i such that a<sub>i</sub> is strictly greater than a<sub>i−1</sub>.</code> Если a<sub>i</sub> = a<sub>i−1</sub>, индекс засчитывается?</p>
<ul><li>A) Да</li><li>B) Нет</li></ul>
<p><b>Ответ:</b> B. <i>strictly</i> — строго.</p>
` },
  { id: 653, level: "ICPC", category: "practice", topic: "arrays_q", title: "Практика: массивы и строки", content: `
<p><b>Вопрос 1.</b> Что из этого — subarray массива [1, 2, 3, 4, 5]?</p>
<ul><li>A) [1, 3, 5]</li><li>B) [2, 3, 4]</li><li>C) [4, 2]</li></ul>
<p><b>Ответ:</b> B. subarray — элементы подряд.</p>
<p><b>Вопрос 2.</b> Что из этого — subsequence, но не subarray?</p>
<ul><li>A) [2, 3]</li><li>B) [1, 3, 5]</li><li>C) [3, 1]</li></ul>
<p><b>Ответ:</b> B. Порядок сохранён, но элементы не подряд.</p>
<p><b>Вопрос 3.</b> Какой массив non-decreasing, но не strictly increasing?</p>
<ul><li>A) [1, 2, 3]</li><li>B) [1, 1, 2]</li><li>C) [3, 2, 1]</li></ul>
<p><b>Ответ:</b> B. <i>non-decreasing</i> разрешает равных соседей.</p>
` },
  { id: 654, level: "ICPC", category: "practice", topic: "graphs_q", title: "Практика: графы", content: `
<p><b>Вопрос 1.</b> Единственное число от «vertices»?</p>
<ul><li>A) vertice</li><li>B) vertex</li><li>C) vertic</li></ul>
<p><b>Ответ:</b> B. vertex → vertices.</p>
<p><b>Вопрос 2.</b> <code>The graph is undirected. The i-th edge connects u<sub>i</sub> and v<sub>i</sub>.</code> Можно ли пройти из v<sub>i</sub> в u<sub>i</sub>?</p>
<ul><li>A) Да</li><li>B) Нет</li></ul>
<p><b>Ответ:</b> A. <i>undirected</i> — в обе стороны.</p>
<p><b>Вопрос 3.</b> Сколько рёбер в tree из 7 вершин?</p>
<ul><li>A) 6</li><li>B) 7</li><li>C) 8</li></ul>
<p><b>Ответ:</b> A. В дереве из n вершин ровно n − 1 ребро.</p>
` },
  { id: 655, level: "ICPC", category: "practice", topic: "conditionals_q", title: "Практика: условия", content: `
<p><b>Вопрос 1.</b> «unless X» означает…</p>
<ul><li>A) if X</li><li>B) if not X</li><li>C) because X</li></ul>
<p><b>Ответ:</b> B. <i>unless</i> = «если не».</p>
<p><b>Вопрос 2.</b> <code>The robot moves right unless the next cell is blocked.</code> Следующая клетка свободна. Что делает робот?</p>
<ul><li>A) Двигается вправо</li><li>B) Стоит на месте</li><li>C) Двигается влево</li></ul>
<p><b>Ответ:</b> A. Клетка не занята — условие «unless» не сработало.</p>
<p><b>Вопрос 3.</b> <code>Print YES if s is a palindrome, and NO otherwise.</code> s = "ab". Что вывести?</p>
<ul><li>A) YES</li><li>B) NO</li><li>C) −1</li></ul>
<p><b>Ответ:</b> B. «ab» не палиндром.</p>
` }
];