const MATERIALS = [
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
  { id: 104, level: "A2", category: "theory", topic: "modals_icpc", title: "Модальные глаголы в условиях", content: `
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
  { id: 105, level: "A2", category: "theory", topic: "prepositions", title: "Предлоги in / on / at", content: `
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
  { id: 106, level: "A2", category: "theory", topic: "tenses", title: "Времена: Present Simple / Continuous, Past Simple, Present Perfect", content: `
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
  { id: 107, level: "A2", category: "theory", topic: "tenses2", title: "Future will / going to, Past Continuous, First Conditional", content: `
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

  { id: 201, level: "A2", category: "practice", topic: "articles", title: "Артикли: упражнения (25)", content: `
<p>Вставь нужный артикль (a / an / the) или напиши <code>--</code>, если артикль не нужен.</p>
<ol>
<li>I saw [[a]] dog in the park.</li>
<li>She is [[a]] doctor.</li>
<li>[[The]] sun rises in the east.</li>
<li>I need [[an]] umbrella — it's raining.</li>
<li>He is [[the]] best student in the class.</li>
<li>I study at [[a]] university.</li>
<li>It took me [[an]] hour to finish.</li>
<li>I love [[--]] music.</li>
<li>Can you pass me [[the]] salt, please?</li>
<li>This is [[an]] interesting book.</li>
<li>I bought [[a]] book yesterday. [[The]] book was expensive.</li>
<li>[[The]] Earth goes round [[the]] Sun.</li>
<li>My brother is [[an]] engineer, and my sister is [[an]] artist.</li>
<li>We had [[a]] great time at [[the]] party last night.</li>
<li>[[--]] cats are independent animals.</li>
<li>He plays [[the]] guitar every evening.</li>
<li>She's reading [[a]] book about [[the]] history of [[--]] Rome.</li>
<li>Can you open [[the]] door, please?</li>
<li>I had [[an]] egg and [[an]] apple for breakfast.</li>
<li>He is [[the]] most talented musician I know.</li>
</ol>
` },
  { id: 202, level: "A2", category: "practice", topic: "comparatives", title: "Степени сравнения: упражнения (25)", content: `
<ol>
<li>This car is [[faster]] (fast) than that one.</li>
<li>She is the [[tallest]] (tall) girl in the class.</li>
<li>This book is [[more interesting]] (interesting) than that film.</li>
<li>Health is the [[most important]] (important) thing in life.</li>
<li>My bag is [[heavier]] (heavy) than yours.</li>
<li>This is the [[most expensive]] (expensive) restaurant in town.</li>
<li>Winter is [[colder]] (cold) than autumn.</li>
<li>He is the [[best]] (good) player on the team.</li>
<li>This exercise is [[easier]] (easy) than the last one.</li>
<li>That was the [[worst]] (bad) film I've ever seen.</li>
<li>This flat is [[bigger]] (big) than the one we saw yesterday, but it's [[more expensive]] (expensive) too.</li>
<li>Of all my friends, she is the [[funniest]] (funny).</li>
<li>The new phone is [[thinner]] (thin) and [[lighter]] (light) than the old model.</li>
<li>This is by far the [[most difficult]] (difficult) exam I've taken this year.</li>
<li>My brother is [[older]] (old) than me, but I am [[taller]] (tall) than him.</li>
<li>This café serves the [[most delicious]] (delicious) coffee in the city.</li>
<li>Traveling by train is usually [[more comfortable]] (comfortable) than by bus.</li>
<li>She works [[harder]] (hard) than anyone else in the office.</li>
<li>Of the three routes, this one is the [[shortest]] (short).</li>
<li>The weather today is [[worse]] (bad) than yesterday, but it's not the [[worst]] (bad) this month.</li>
</ol>
` },
  { id: 203, level: "A2", category: "practice", topic: "modals", title: "Модальные глаголы: упражнения (25)", content: `
<ol>
<li>She [[can speak]] (can / speak) three languages.</li>
<li>[[Can I open]] (can / open) the window?</li>
<li>He [[couldn't swim]] (can / not / swim) when he was a child.</li>
<li>You [[must wear]] (must / wear) a seatbelt in the car.</li>
<li>I [[have to finish]] (have to / finish) this report by Friday.</li>
<li>You [[should see]] (should / see) a doctor.</li>
<li>You [[shouldn't eat]] (should / not / eat) so much sugar.</li>
<li>We [[don't have to hurry]] (have to / not / hurry), we have plenty of time.</li>
<li>[[Does he have to work]] (have to / work) on Saturdays?</li>
<li>You [[mustn't smoke]] (must / not / smoke) here.</li>
<li>I [[couldn't sleep]] (could / not / sleep) last night — too much noise.</li>
<li>[[Could you help]] (could / help) me with this bag, please?</li>
<li>You look exhausted — you [[must be]] (must / be) tired after that flight.</li>
<li>You [[don't have to come]] (don't have to / come) if you're busy.</li>
<li>Employees [[mustn't use]] (must / not / use) their phones during meetings.</li>
<li>She [[has to renew]] (have to / renew) her passport — it expires next month.</li>
<li>[[Must we bring]] (must / bring) our own equipment?</li>
<li>You [[shouldn't ignore]] (should / not / ignore) his advice.</li>
<li>I [[can't believe]] (can / not / believe) this is happening!</li>
<li>As a child, I [[could climb]] (could / climb) trees really fast.</li>
</ol>
` },
  { id: 204, level: "A2", category: "practice", topic: "prepositions", title: "Предлоги in / on / at: упражнения (25)", content: `
<ol>
<li>I was born [[in]] 1995.</li>
<li>See you [[on]] Monday.</li>
<li>The meeting is [[at]] 5 o'clock.</li>
<li>She lives [[in]] London.</li>
<li>The keys are [[on]] the table.</li>
<li>We'll meet [[at]] the bus stop.</li>
<li>My birthday is [[in]] May.</li>
<li>I usually wake up early [[in]] the morning.</li>
<li>The party is [[on]] Saturday evening.</li>
<li>He works [[at]] a big company [[in]] Berlin.</li>
<li>I'll see you [[at]] the weekend — we're meeting [[at]] 3 pm [[at]] my house.</li>
<li>The book is [[on]] the shelf, [[on]] the second floor of the library.</li>
<li>She was born [[on]] the 5th of May, [[in]] 1998, [[in]] the morning.</li>
<li>We always have a big dinner [[at]] Christmas.</li>
<li>The conference starts [[at]] 9 am [[on]] Monday [[in]] the city centre.</li>
<li>He's waiting for you [[at]] the reception, not [[in]] the café.</li>
<li>[[At]] night the streets [[in]] this town are very quiet.</li>
<li>I left my umbrella [[in]] the office, [[at]] my desk.</li>
<li>The exam is [[on]] the 20th of June, [[at]] 10 o'clock, [[in]] Room 204.</li>
<li>They got married [[in]] a small church [[in]] the countryside.</li>
</ol>
` },
  { id: 205, level: "A2", category: "practice", topic: "present_simple", title: "Present Simple: упражнения (25)", content: `
<ol>
<li>She [[works]] (work) at a hospital.</li>
<li>They [[live]] (live) in London.</li>
<li>He [[doesn't like]] (not / like) coffee.</li>
<li>I [[go]] (go) to school every day.</li>
<li>My brother [[plays]] (play) football on Sundays.</li>
<li>We [[don't have]] (not / have) a car.</li>
<li>[[Does she speak]] (she / speak) French?</li>
<li>The shop [[opens]] (open) at 9 am.</li>
<li>Cats [[sleep]] (sleep) a lot.</li>
<li>My father [[drives]] (drive) to work.</li>
<li>Look! It [[is raining]] (rain).</li>
<li>Water [[boils]] (boil) at 100°C.</li>
<li>I [[am not watching]] (not / watch) TV now, I [[am reading]] (read) a book.</li>
<li>He usually [[takes]] (take) the bus, but today he [[is walking]] (walk).</li>
<li>[[Do you understand]] (you / understand) this rule?</li>
<li>She [[isn't working]] (not / work) today because she [[is]] (be) ill.</li>
<li>The Earth [[goes]] (go) round the Sun.</li>
<li>Why [[is he shouting]] (he / shout) right now?</li>
<li>We [[meet]] (meet) every Friday, but this week we [[are meeting]] (meet) on Thursday.</li>
<li>My parents [[are currently staying]] (currently / stay) with us this month.</li>
</ol>
` },
  { id: 206, level: "A2", category: "practice", topic: "present_continuous", title: "Present Continuous: упражнения (25)", content: `
<ol>
<li>I [[am writing]] (write) an email right now.</li>
<li>She [[is reading]] (read) a book at the moment.</li>
<li>They [[are playing]] (play) football now.</li>
<li>We [[aren't working]] (not / work) today.</li>
<li>[[Are you listening]] (you / listen) to me?</li>
<li>He [[is sleeping]] (sleep) right now.</li>
<li>The children [[are watching]] (watch) cartoons.</li>
<li>I [[am not eating]] (not / eat) breakfast now.</li>
<li>[[Is it raining]] (it / rain) outside?</li>
<li>My sister [[is studying]] (study) for her exam at the moment.</li>
<li>I usually [[drive]] (drive) to work, but this week I [[am taking]] (take) the bus.</li>
<li>She [[is living]] (live) with her parents while her flat [[is]] (be) renovated.</li>
<li>He [[is always leaving]] (always / leave) his socks on the floor!</li>
<li>Why [[are you looking]] (you / look) at me like that?</li>
<li>We [[don't usually eat]] (not / usually / eat) out, but tonight we [[are eating]] (eat) at a restaurant.</li>
<li>[[Is she still waiting]] (she / still / wait) for the bus?</li>
<li>The company [[is currently developing]] (currently / develop) a new app.</li>
<li>He [[isn't working]] (not / work) at the moment — he's on holiday.</li>
<li>Look, the sun [[is setting]] (set)!</li>
<li>They [[are building]] (build) a new bridge near our house this year.</li>
</ol>
` },
  { id: 207, level: "A2", category: "practice", topic: "past_simple", title: "Past Simple: упражнения (25)", content: `
<ol>
<li>I [[visited]] (visit) my grandmother last weekend.</li>
<li>She [[went]] (go) to Paris in 2018.</li>
<li>They [[didn't watch]] (not / watch) the film yesterday.</li>
<li>[[Did you see]] (you / see) that movie?</li>
<li>He [[bought]] (buy) a new car last month.</li>
<li>We [[had]] (have) dinner at 7 pm yesterday.</li>
<li>My father [[built]] (build) this house in 1990.</li>
<li>She [[didn't come]] (not / come) to the party.</li>
<li>I [[got]] (get) up early yesterday.</li>
<li>They [[made]] (make) a cake for the party.</li>
<li>When [[did you arrive]] (you / arrive) in London?</li>
<li>He [[didn't know]] (not / know) the answer, so he [[asked]] (ask) the teacher.</li>
<li>She [[lived]] (live) in Rome for two years, then she [[moved]] (move) to Milan.</li>
<li>[[Did they finish]] (they / finish) the project before the deadline?</li>
<li>Yesterday I [[took]] (take) an exam at 5 pm.</li>
<li>We [[didn't have]] (not / have) time to visit the museum last time.</li>
<li>He [[came]] (come) home late and [[went]] (go) straight to bed.</li>
<li>Where [[were]] (be) you born?</li>
<li>She [[won]] (win) the competition last year.</li>
<li>I [[didn't understand]] (not / understand) the question, so I [[raised]] (raise) my hand.</li>
</ol>
` },
  { id: 208, level: "A2", category: "practice", topic: "present_perfect", title: "Present Perfect: упражнения (25)", content: `
<ol>
<li>I [[have visited]] (visit) Paris. (когда именно — не важно)</li>
<li>She [[has just finished]] (just / finish) her homework.</li>
<li>They [[haven't seen]] (not / see) that film yet.</li>
<li>[[Have you ever been]] (you ever / be) to Japan?</li>
<li>He [[has lost]] (lose) his keys.</li>
<li>We [[have already done]] (already / do) the shopping.</li>
<li>She [[hasn't called]] (not / call) me yet.</li>
<li>[[Has he finished]] (he / finish) his homework yet?</li>
<li>I [[have never tried]] (never / try) sushi.</li>
<li>They [[have just arrived]] (just / arrive).</li>
<li>He [[has lived]] (live) here since 2015.</li>
<li>I [[have known]] (know) her for ten years.</li>
<li>[[Have you finished]] (you / finish) your homework yet?</li>
<li>She [[hasn't eaten]] (not / eat) anything since breakfast.</li>
<li>We [[have been]] (be) friends since childhood.</li>
<li>He [[has just left]] (just / leave) the office — you can still catch him.</li>
<li>I [[have never seen]] (never / see) such a beautiful sunset before.</li>
<li>[[Have they already moved]] (they / already / move) into the new house?</li>
<li>She [[has worked]] (work) here for three months.</li>
<li>This is the best film I [[have ever watched]] (ever / watch).</li>
</ol>
` },
  { id: 209, level: "A2", category: "practice", topic: "past_continuous", title: "Past Continuous: упражнения (25)", content: `
<ol>
<li>At 5 o'clock yesterday, I [[was watching]] (watch) TV.</li>
<li>She [[was reading]] (read) a book all evening yesterday.</li>
<li>They [[weren't sleeping]] (not / sleep) at midnight.</li>
<li>[[Were you working]] (you / work) at 9 am yesterday?</li>
<li>He [[was cooking]] (cook) dinner at 7 pm.</li>
<li>We [[weren't listening]] (not / listen) to music then.</li>
<li>[[Was it raining]] (it / rain) at that moment?</li>
<li>I [[was doing]] (do) my homework all day yesterday.</li>
<li>The children [[were playing]] (play) in the garden at noon.</li>
<li>She [[wasn't working]] (not / work) at 6 pm yesterday.</li>
<li>I [[was reading]] (read) a book when the phone [[rang]] (ring).</li>
<li>While she [[was cooking]] (cook), he [[was cleaning]] (clean) the kitchen.</li>
<li>What [[were you doing]] (you / do) when I called you yesterday?</li>
<li>He [[was walking]] (walk) home when he [[saw]] (see) an old friend.</li>
<li>They [[weren't paying]] (not / pay) attention when the teacher [[was explaining]] (explain) the rule.</li>
<li>While I [[was waiting]] (wait) for the bus, it [[started]] (start) to rain.</li>
<li>[[Was she driving]] (she / drive) when the accident [[happened]] (happen)?</li>
<li>We [[were having]] (have) dinner when the lights [[went]] (go) out.</li>
<li>He [[wasn't listening]] (not / listen) when she [[was telling]] (tell) him the news.</li>
<li>I [[had just left]] (just / leave) the house when it [[started]] (start) to snow.</li>
</ol>
` },
  { id: 210, level: "A2", category: "practice", topic: "future_will_going_to", title: "Future will / going to: упражнения (25)", content: `
<ol>
<li>I think it [[will rain]] (rain) tomorrow.</li>
<li>Look at those clouds! It [[is going to rain]] (rain).</li>
<li>The phone is ringing. — I [[will get]] (get) it!</li>
<li>She [[is going to travel]] (travel) to Spain next month. She already bought tickets.</li>
<li>I promise I [[will help]] (help) you tomorrow.</li>
<li>[[Will you help]] (you / help) me carry this bag?</li>
<li>He [[is going to study]] (study) medicine after school. It's his plan for years.</li>
<li>I [[am not going to go]] (not / go) to the party, I've already decided.</li>
<li>Maybe I [[will call]] (call) you later.</li>
<li>We [[won't be]] (not / be) late, I promise.</li>
<li>The shelf looks like it's about to fall! — I [[will fix]] (fix) it right now.</li>
<li>I [[am going to meet]] (meet) my friend at 6 pm. We arranged it yesterday.</li>
<li>[[Will you be]] (you / be) free this weekend?</li>
<li>She's got her suitcase ready — she [[is going to leave]] (leave) soon.</li>
<li>I don't know yet. Maybe I [[will stay]] (stay) home this weekend.</li>
<li>We [[aren't going to go]] (not / go) out tonight — let's decide now: we [[will stay]] (stay) in.</li>
<li>According to the forecast, it [[will be]] (be) sunny tomorrow.</li>
<li>He looks exhausted — he [[is going to fall]] (fall) asleep any minute.</li>
<li>I [[will probably see]] (probably / see) you next week.</li>
<li>They [[are going to get]] (get) married in June — the invitations are already sent.</li>
</ol>
` },
  { id: 211, level: "A2", category: "practice", topic: "first_conditional", title: "First Conditional: упражнения (25)", content: `
<ol>
<li>If it [[rains]] (rain) tomorrow, I [[will stay]] (stay) home.</li>
<li>If you [[study]] (study) hard, you [[will pass]] (pass) the exam.</li>
<li>She [[will be]] (be) angry if you [[are]] (be) late.</li>
<li>If we [[hurry]] (hurry), we [[won't miss]] (not / miss) the train.</li>
<li>If he [[doesn't call]] (not / call) me, I [[will call]] (call) him.</li>
<li>You [[will feel]] (feel) better if you [[get]] (get) some rest.</li>
<li>If they [[win]] (win), everyone [[will celebrate]] (celebrate).</li>
<li>I [[will help]] (help) you if you [[need]] (need) it.</li>
<li>If it [[is]] (be) sunny tomorrow, we [[will go]] (go) to the beach.</li>
<li>[[Will you be]] (you / be) upset if I [[leave]] (leave) early?</li>
<li>If she [[doesn't finish]] (not / finish) the report tonight, she [[will have to]] (have to) stay late tomorrow.</li>
<li>We [[will miss]] (miss) the flight if we [[don't leave]] (not / leave) now.</li>
<li>If you [[eat]] (eat) too much, you [[will feel]] (feel) sick.</li>
<li>[[Will he be]] (he / be) surprised if we [[arrive]] (arrive) early?</li>
<li>If the weather [[changes]] (change), the match [[will be]] (be) cancelled.</li>
<li>I [[won't go]] (not / go) if it [[costs]] (cost) too much.</li>
<li>If you [[need]] (need) anything, just [[ask]] (ask) me.</li>
<li>They [[will be]] (be) disappointed if the plan [[doesn't work]] (not / work).</li>
<li>If she [[sees]] (see) him, she [[will tell]] (tell) him the news.</li>
<li>We [[won't have]] (not / have) enough time if the meeting [[starts]] (start) late.</li>
</ol>
` },

  { id: 301, level: "B1", category: "theory", topic: "intro", title: "Раздел B1 — в разработке", content: `<p>Здесь будут материалы уровня B1: Conditionals 2/3, Passive Voice, Reported Speech, Relative Clauses.</p>` },
  { id: 401, level: "B2", category: "theory", topic: "intro", title: "Раздел B2 — в разработке", content: `<p>Здесь будут материалы уровня B2: Inversion, Mixed Conditionals, Advanced Modals, Phrasal Verbs.</p>` },
  { id: 501, level: "C1", category: "theory", topic: "intro", title: "Раздел C1 — в разработке", content: `<p>Здесь будут материалы уровня C1: Cleft Sentences, Subjunctive, Nominalisation, Academic Writing.</p>` },

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
  { id: 608, level: "ICPC", category: "theory", topic: "quantifiers", title: "2.1 Кванторы", content: `
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
  { id: 609, level: "ICPC", category: "theory", topic: "extremes", title: "2.2 Сравнения и экстремумы", content: `
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
  { id: 610, level: "ICPC", category: "theory", topic: "reading_order", title: "3.1 Порядок чтения условия", content: `
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
  { id: 611, level: "ICPC", category: "theory", topic: "traps", title: "3.2 Ловушки формулировок", content: `
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
  { id: 612, level: "ICPC", category: "theory", topic: "legend", title: "3.3 Отсеивание легенды", content: `
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
  { id: 613, level: "ICPC", category: "theory", topic: "examples", title: "3.4 Работа с примерами и Note", content: `
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

  { id: 651, level: "ICPC", category: "practice", topic: "anatomy_q", title: "Практика: анатомия условия", content: `
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
  { id: 652, level: "ICPC", category: "practice", topic: "numbers_q", title: "Практика: числа и ограничения", content: `
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
  { id: 653, level: "ICPC", category: "practice", topic: "arrays_q", title: "Практика: массивы и строки", content: `
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
  { id: 654, level: "ICPC", category: "practice", topic: "graphs_q", title: "Практика: графы", content: `
<p><b>Вопрос 1.</b> Единственное число от «vertices»? (введи цифру)</p>
<ul><li>1) vertice</li><li>2) vertex</li><li>3) vertic</li></ul>
<p>Ответ: [[2]] (vertex → vertices)</p>
<p><b>Вопрос 2.</b> <code>The graph is undirected. The i-th edge connects u<sub>i</sub> and v<sub>i</sub>.</code> Можно ли пройти из v<sub>i</sub> в u<sub>i</sub>? (напиши <code>yes</code> или <code>no</code>)</p>
<p>Ответ: [[yes]] (undirected — в обе стороны)</p>
<p><b>Вопрос 3.</b> Сколько рёбер в tree из 7 вершин? (введи цифру)</p>
<p>Ответ: [[6]] (В дереве из n вершин ровно n − 1 ребро)</p>
` },
  { id: 655, level: "ICPC", category: "practice", topic: "conditionals_q", title: "Практика: условия", content: `
<p><b>Вопрос 1.</b> «unless X» означает… (введи цифру)</p>
<ul><li>1) if X</li><li>2) if not X</li><li>3) because X</li></ul>
<p>Ответ: [[2]] (unless = «если не»)</p>
<p><b>Вопрос 2.</b> <code>The robot moves right unless the next cell is blocked.</code> Следующая клетка свободна. Что делает робот? (введи цифру)</p>
<ul><li>1) Двигается вправо</li><li>2) Стоит на месте</li><li>3) Двигается влево</li></ul>
<p>Ответ: [[1]] (Клетка не занята — условие «unless» не сработало)</p>
<p><b>Вопрос 3.</b> <code>Print YES if s is a palindrome, and NO otherwise.</code> s = "ab". Что вывести? (введи слово)</p>
<p>Ответ: [[no]] («ab» не палиндром)</p>
` }
  ,
  { id: 251, level: "A2", category: "vocabulary", topic: "travel", title: "Путешествия (Travel)", content: `
<p><b>Тема:</b> Аэропорт, отель, транспорт.</p>
<table>
<tr><th>Слово / Фраза</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>boarding pass</b></td><td>посадочный талон</td><td>Please show your boarding pass.</td></tr>
<tr><td><b>luggage / baggage</b></td><td>багаж</td><td>Where can I collect my luggage?</td></tr>
<tr><td><b>round-trip ticket</b></td><td>билет туда-обратно</td><td>I bought a round-trip ticket to Paris.</td></tr>
<tr><td><b>one-way ticket</b></td><td>билет в одну сторону</td><td>He needs a one-way ticket.</td></tr>
<tr><td><b>to check in</b></td><td>регистрироваться (в отеле/аэропорту)</td><td>We need to check in at 3 pm.</td></tr>
<tr><td><b>to check out</b></td><td>выписываться из отеля</td><td>Check out is at 12 noon.</td></tr>
<tr><td><b>delay</b></td><td>задержка</td><td>The flight has a 2-hour delay.</td></tr>
<tr><td><b>gate</b></td><td>выход на посадку</td><td>Flight 203 departs from gate 5.</td></tr>
</table>
` },
  { id: 252, level: "A2", category: "vocabulary", topic: "food", title: "Еда и рестораны (Food & Restaurants)", content: `
<p><b>Тема:</b> Заказ еды, меню, оплата.</p>
<table>
<tr><th>Слово / Фраза</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>appetizer / starter</b></td><td>закуска</td><td>I'll have a salad as a starter.</td></tr>
<tr><td><b>main course</b></td><td>основное блюдо</td><td>For the main course, I'd like fish.</td></tr>
<tr><td><b>dessert</b></td><td>десерт</td><td>Do you want dessert?</td></tr>
<tr><td><b>bill / check</b></td><td>счёт</td><td>Can we have the bill, please?</td></tr>
<tr><td><b>tip</b></td><td>чаевые</td><td>We left a 10% tip.</td></tr>
<tr><td><b>to order</b></td><td>заказывать</td><td>Are you ready to order?</td></tr>
<tr><td><b>vegetarian</b></td><td>вегетарианское (блюдо)</td><td>Do you have vegetarian options?</td></tr>
<tr><td><b>spicy / mild</b></td><td>острый / неострый</td><td>Is this dish spicy?</td></tr>
</table>
` },


  { id: 351, level: "B1", category: "vocabulary", topic: "work", title: "Работа и карьера (Work & Career)", content: `
<p><b>Тема:</b> Собеседования, офис, обязанности.</p>
<table>
<tr><th>Слово / Фраза</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>resume / CV</b></td><td>резюме</td><td>Please send your CV by Friday.</td></tr>
<tr><td><b>job interview</b></td><td>собеседование</td><td>I have a job interview tomorrow.</td></tr>
<tr><td><b>salary</b></td><td>зарплата (оклад)</td><td>The salary is negotiable.</td></tr>
<tr><td><b>deadline</b></td><td>срок сдачи</td><td>We have a tight deadline.</td></tr>
<tr><td><b>to be in charge of</b></td><td>отвечать за что-то</td><td>She is in charge of the marketing team.</td></tr>
<tr><td><b>promotion</b></td><td>повышение</td><td>He got a promotion last month.</td></tr>
<tr><td><b>to resign / to quit</b></td><td>уволиться</td><td>She decided to resign.</td></tr>
<tr><td><b>overtime</b></td><td>сверхурочные</td><td>I had to work overtime yesterday.</td></tr>
</table>
` },


  { id: 451, level: "B2", category: "vocabulary", topic: "environment", title: "Окружающая среда (Environment)", content: `
<p><b>Тема:</b> Экология, климат, проблемы.</p>
<table>
<tr><th>Слово / Фраза</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>climate change</b></td><td>изменение климата</td><td>Climate change is a global issue.</td></tr>
<tr><td><b>global warming</b></td><td>глобальное потепление</td><td>Global warming affects the polar ice caps.</td></tr>
<tr><td><b>pollution</b></td><td>загрязнение</td><td>Air pollution in cities is increasing.</td></tr>
<tr><td><b>renewable energy</b></td><td>возобновляемая энергия</td><td>We need to invest in renewable energy.</td></tr>
<tr><td><b>carbon footprint</b></td><td>углеродный след</td><td>Try to reduce your carbon footprint.</td></tr>
<tr><td><b>sustainable</b></td><td>устойчивый, экологичный</td><td>Sustainable development is important.</td></tr>
<tr><td><b>deforestation</b></td><td>вырубка лесов</td><td>Deforestation destroys habitats.</td></tr>
<tr><td><b>to conserve</b></td><td>сохранять, беречь</td><td>We must conserve water.</td></tr>
</table>
` },


  { id: 551, level: "C1", category: "vocabulary", topic: "academic", title: "Академический английский (Academic English)", content: `
<p><b>Тема:</b> Слова для эссе, научных работ, дебатов.</p>
<table>
<tr><th>Слово / Фраза</th><th>Перевод</th><th>Пример</th></tr>
<tr><td><b>to substantiate</b></td><td>обосновывать (доводами)</td><td>You need to substantiate your claim.</td></tr>
<tr><td><b>to scrutinize</b></td><td>тщательно изучать</td><td>The committee will scrutinize the proposal.</td></tr>
<tr><td><b>inevitable</b></td><td>неизбежный</td><td>Change is inevitable.</td></tr>
<tr><td><b>ambiguous</b></td><td>двусмысленный</td><td>The results are somewhat ambiguous.</td></tr>
<tr><td><b>to imply</b></td><td>подразумевать</td><td>Are you implying that I lied?</td></tr>
<tr><td><b>to infer</b></td><td>делать вывод</td><td>We can infer from the data that…</td></tr>
<tr><td><b>comprehensive</b></td><td>всеобъемлющий</td><td>A comprehensive study is needed.</td></tr>
<tr><td><b>plausible</b></td><td>правдоподобный</td><td>That is a plausible explanation.</td></tr>
</table>
` }
];
