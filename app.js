const app = document.getElementById('app');
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1–C2', 'EXAM', 'ICPC'];

const CONTRACTION_MAP = [
  [/\bcan\s+not\b/g, 'cannot'],
  [/\bcan't\b/g, 'cannot'],
  [/\bcannot\b/g, 'cannot'],
  [/\bwon't\b/g, 'will not'],
  [/\bshan't\b/g, 'shall not'],
  [/\blet's\b/g, 'let us'],
  [/\bi'm\b/g, 'i am'],
  [/\bi've\b/g, 'i have'],
  [/\bi'll\b/g, 'i will'],
  [/\bi'd\b/g, 'i would'],
  [/\byou're\b/g, 'you are'],
  [/\byou've\b/g, 'you have'],
  [/\byou'll\b/g, 'you will'],
  [/\byou'd\b/g, 'you would'],
  [/\bhe's\b/g, 'he is'],
  [/\bhe'll\b/g, 'he will'],
  [/\bhe'd\b/g, 'he would'],
  [/\bshe's\b/g, 'she is'],
  [/\bshe'll\b/g, 'she will'],
  [/\bshe'd\b/g, 'she would'],
  [/\bit's\b/g, 'it is'],
  [/\bit'll\b/g, 'it will'],
  [/\bit'd\b/g, 'it would'],
  [/\bwe're\b/g, 'we are'],
  [/\bwe've\b/g, 'we have'],
  [/\bwe'll\b/g, 'we will'],
  [/\bwe'd\b/g, 'we would'],
  [/\bthey're\b/g, 'they are'],
  [/\bthey've\b/g, 'they have'],
  [/\bthey'll\b/g, 'they will'],
  [/\bthey'd\b/g, 'they would'],
  [/\bthat's\b/g, 'that is'],
  [/\bthere's\b/g, 'there is'],
  [/\bwhat's\b/g, 'what is'],
  [/\bwhere's\b/g, 'where is'],
  [/\bwho's\b/g, 'who is'],
  [/\bhow's\b/g, 'how is'],
  [/\bhere's\b/g, 'here is'],
  [/\bdon't\b/g, 'do not'],
  [/\bdoesn't\b/g, 'does not'],
  [/\bdidn't\b/g, 'did not'],
  [/\bisn't\b/g, 'is not'],
  [/\baren't\b/g, 'are not'],
  [/\bwasn't\b/g, 'was not'],
  [/\bweren't\b/g, 'were not'],
  [/\bhaven't\b/g, 'have not'],
  [/\bhasn't\b/g, 'has not'],
  [/\bhadn't\b/g, 'had not'],
  [/\bwouldn't\b/g, 'would not'],
  [/\bcouldn't\b/g, 'could not'],
  [/\bshouldn't\b/g, 'should not'],
  [/\bmustn't\b/g, 'must not'],
  [/\bmightn't\b/g, 'might not'],
  [/\bneedn't\b/g, 'need not'],
  [/\b'd\b/g, ' would'],
  [/\b'll\b/g, ' will'],
  [/\b've\b/g, ' have'],
  [/\b're\b/g, ' are'],
  [/\b'm\b/g, ' am'],
  [/\bn't\b/g, ' not']
];

const IPA_DICTIONARY = {
  "i": "aɪ", "you": "juː", "he": "hiː", "she": "ʃiː", "it": "ɪt", "we": "wiː", "they": "ðeɪ",
  "my": "maɪ", "your": "jɔː", "his": "hɪz", "her": "hɜː", "its": "ɪts", "our": "aʊə", "their": "ðeə",
  "hello": "həˈləʊ", "hi": "haɪ", "good": "ɡʊd", "morning": "ˈmɔːnɪŋ", "water": "ˈwɔːtə",
  "tea": "tiː", "coffee": "ˈkɒfi", "bread": "bred", "apple": "ˈæpl", "family": "ˈfæmɪli",
  "mother": "ˈmʌðə", "father": "ˈfɑːðə", "parents": "ˈpeərənts", "sister": "ˈsɪstə", "brother": "ˈbrʌðə",
  "husband": "ˈhʌzbənd", "wife": "waɪf", "child": "tʃaɪld", "children": "ˈtʃɪldrən",
  "house": "haʊs", "flat": "flæt", "apartment": "əˈpɑːtmənt", "room": "ruːm", "kitchen": "ˈkɪtʃɪn",
  "bathroom": "ˈbɑːθruːm", "bedroom": "ˈbedruːm", "door": "dɔː", "window": "ˈwɪndəʊ",
  "table": "ˈteɪbl", "chair": "tʃeə", "bed": "bed", "rice": "raɪs", "milk": "mɪlk",
  "egg": "eɡ", "chicken": "ˈtʃɪkɪn", "fish": "fɪʃ", "breakfast": "ˈbrekfəst", "lunch": "lʌntʃ",
  "dinner": "ˈdɪnə", "be": "biː", "have": "hæv", "live": "lɪv", "work": "wɜːk",
  "study": "ˈstʌdi", "like": "laɪk", "want": "wɒnt", "need": "niːd", "go": "ɡəʊ",
  "come": "kʌm", "eat": "iːt", "drink": "drɪŋk", "read": "riːd", "write": "raɪt",
  "speak": "spiːk", "listen": "ˈlɪsn", "watch": "wɒtʃ", "play": "pleɪ", "bad": "bæd",
  "big": "bɪɡ", "small": "smɔːl", "old": "əʊld", "new": "njuː", "young": "jʌŋ",
  "happy": "ˈhæpi", "tired": "ˈtaɪəd", "hungry": "ˈhʌŋɡri", "thirsty": "ˈθɜːsti", "easy": "ˈiːzi",
  "difficult": "ˈdɪfɪkəlt",
  "friend": "frend", "routine": "ruːˈtiːn", "wake up": "weɪk ʌp", "have breakfast": "hæv ˈbrekfəst",
  "go to work/school": "ɡəʊ tuː wɜːk", "come home": "kʌm həʊm", "watch tv": "wɒtʃ tiː viː",
  "go to bed": "ɡəʊ tuː bed", "airport": "ˈeəpɔːt", "train station": "treɪn ˈsteɪʃn", "ticket": "ˈtɪkɪt",
  "passport": "ˈpɑːspɔːt", "luggage": "ˈlʌɡɪdʒ", "flight": "flaɪt", "book a ticket": "bʊk ə ˈtɪkɪt",
  "departure": "dɪˈpɑːtʃə", "arrival": "əˈraɪvl", "shop": "ʃɒp", "buy": "baɪ",
  "price": "praɪs", "expensive": "ɪkˈspensɪv", "cheap": "tʃiːp", "menu": "ˈmenjuː",
  "order": "ˈɔːdə", "waiter": "ˈweɪtə", "bill": "bɪl", "delicious": "dɪˈlɪʃəs",
  "job": "dʒɒb", "profession": "prəˈfeʃn", "doctor": "ˈdɒktə", "teacher": "ˈtiːtʃə",
  "engineer": "ˌendʒɪˈnɪə", "manager": "ˈmænɪdʒə", "office": "ˈɒfɪs", "meeting": "ˈmiːtɪŋ",
  "responsibility": "rɪˌspɒnsəˈbɪləti", "hobby": "ˈhɒbi", "free time": "friː taɪm", "weekend": "ˌwiːkˈend",
  "go out": "ɡəʊ aʊt", "play sports": "pleɪ spɔːts", "read books": "riːd bʊks", "watch movies": "wɒtʃ ˈmuːviz",
  "listen to music": "ˈlɪsn tuː ˈmjuːzɪk", "travel": "ˈtrævl", "health": "helθ", "healthy": "ˈhelθi",
  "exercise": "ˈeksəsaɪz", "diet": "ˈdaɪət", "medicine": "ˈmedsn", "feel sick": "fiːl sɪk",
  "headache": "ˈhedeɪk", "sport": "spɔːt", "living room": "ˈlɪvɪŋ ruːm", "furniture": "ˈfɜːnɪtʃə",
  "address": "əˈdres", "neighborhood": "ˈneɪbəhʊd", "weather": "ˈweðə", "sunny": "ˈsʌni",
  "rainy": "ˈreɪni", "cloudy": "ˈklaʊdi", "windy": "ˈwɪndi", "hot": "hɒt", "cold": "kəʊld",
  "temperature": "ˈtemprətʃə", "forecast": "ˈfɔːkɑːst", "climate": "ˈklaɪmət",
  "career": "kəˈrɪə", "salary": "ˈsæləri", "colleague": "ˈkɒliːɡ", "employer": "ɪmˈplɔɪə",
  "employee": "ɪmˈplɔɪiː", "apply for a job": "əˈplaɪ fɔːr ə dʒɒb", "job interview": "dʒɒb ˈɪntəvjuː",
  "deadline": "ˈdedlaɪn", "overtime": "ˈəʊvətaɪm", "promotion": "prəˈməʊʃn", "resign": "rɪˈzaɪn",
  "unemployed": "ˌʌnɪmˈplɔɪd", "destination": "ˌdestɪˈneɪʃn", "accommodation": "əˌkɒməˈdeɪʃn",
  "boarding pass": "ˈbɔːdɪŋ pɑːs", "delay": "dɪˈleɪ", "sightseeing": "ˈsaɪtsiːɪŋ", "guided tour": "ˈɡaɪdɪd tʊə",
  "local cuisine": "ˈləʊkl kwɪˈziːn", "souvenir": "ˌsuːvəˈnɪə", "return ticket": "rɪˈtɜːn ˈtɪkɪt",
  "healthy diet": "ˈhelθi ˈdaɪət", "work out": "wɜːk aʊt", "keep fit": "kiːp fɪt", "symptom": "ˈsɪmptəm",
  "prescription": "prɪˈskrɪpʃn", "appointment": "əˈpɔɪntmənt", "recover": "rɪˈkʌvə", "stress": "stres",
  "balanced": "ˈbælənst", "give up": "ɡɪv ʌp", "pollution": "pəˈluːʃn", "recycle": "ˌriːˈsaɪkl",
  "climate change": "ˈklaɪmət tʃeɪndʒ", "global warming": "ˈɡləʊbl ˈwɔːmɪŋ", "renewable energy": "rɪˈnjuːəbl ˈenədʒi",
  "waste": "weɪst", "protect": "prəˈtekt", "environmentally friendly": "ɪnˌvaɪrənˈmentəli ˈfrendli",
  "natural resources": "ˈnætʃrəl rɪˈsɔːsɪz", "endangered species": "ɪnˈdeɪndʒəd ˈspiːʃiːz", "device": "dɪˈvaɪs",
  "screen": "skriːn", "charger": "ˈtʃɑːdʒə", "battery": "ˈbætri", "download": "ˌdaʊnˈləʊd",
  "upload": "ˌʌpˈləʊd", "password": "ˈpɑːswɜːd", "account": "əˈkaʊnt", "social media": "ˈsəʊʃl ˈmiːdiə",
  "log in": "lɒɡ ɪn", "log out": "lɒɡ aʊt", "update": "ˌʌpˈdeɪt", "degree": "dɪˈɡriː",
  "university": "ˌjuːnɪˈvɜːsəti", "subject": "ˈsʌbdʒɪkt", "exam": "ɪɡˈzæm", "pass": "pɑːs",
  "fail": "feɪl", "revise": "rɪˈvaɪz", "research": "rɪˈsɜːtʃ", "scholarship": "ˈskɒləʃɪp",
  "graduate": "ˈɡrædʒuət", "attend": "əˈtend", "excited": "ɪkˈsaɪtɪd", "worried": "ˈwʌrid",
  "nervous": "ˈnɜːvəs", "disappointed": "ˌdɪsəˈpɔɪntɪd", "proud": "praʊd", "jealous": "ˈdʒeləs",
  "embarrassed": "ɪmˈbærəst", "relieved": "rɪˈliːvd", "frustrated": "frʌˈstreɪtɪd", "grateful": "ˈɡreɪtfl",
  "suburb": "ˈsʌbɜːb", "facilities": "fəˈsɪlətiz", "public transport": "ˈpʌblɪk ˈtrænspɔːt", "traffic jam": "ˈtræfɪk dʒæm",
  "pedestrian": "pəˈdestriən", "crossroads": "ˈkrɒsrəʊdz", "roundabout": "ˈraʊndəbaʊt", "pavement": "ˈpeɪvmənt",
  "sidewalk": "ˈsaɪdwɔːk", "rent": "rent", "landlord": "ˈlændlɔːd",
  "society": "səˈsaɪəti", "government": "ˈɡʌvənmənt", "election": "ɪˈlekʃn", "policy": "ˈpɒləsi",
  "protest": "ˈprəʊtest", "equality": "iˈkwɒləti", "human rights": "ˈhjuːmən raɪts", "poverty": "ˈpɒvəti",
  "wealth": "welθ", "tax": "tæks", "experiment": "ɪkˈsperɪmənt", "discovery": "dɪˈskʌvəri",
  "invention": "ɪnˈvenʃn", "artificial intelligence": "ˌɑːtɪˈfɪʃl ɪnˈtelɪdʒəns", "breakthrough": "ˈbreɪkθruː",
  "innovation": "ˌɪnəˈveɪʃn", "development": "dɪˈveləpmənt", "data": "ˈdeɪtə", "exhibition": "ˌeksɪˈbɪʃn",
  "performance": "pəˈfɔːməns", "masterpiece": "ˈmɑːstəpiːs", "plot": "plɒt", "character": "ˈkærəktə",
  "review": "rɪˈvjuː", "audience": "ˈɔːdiəns", "talent": "ˈtælənt", "creative": "kriˈeɪtɪv",
  "inspiring": "ɪnˈspaɪərɪŋ", "deforestation": "ˌdiːˌfɒrɪˈsteɪʃn", "natural disaster": "ˈnætʃrəl dɪˈzɑːstə",
  "hunger": "ˈhʌŋɡə", "war": "wɔː", "peace": "piːs", "sustainability": "səˌsteɪnəˈbɪləti"
};

const STORAGE_KEY = 'english-learning-progress-v1';
const VOCAB_STORAGE_KEY = 'english-learning-vocab-v1';
const STREAK_KEY = 'english-learning-streak-v1';
const MASTERED_INTERVAL = 21;

function getTodayISO() {
  return new Date().toISOString().slice(0, 10);
}

function loadStreakDates() {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function recordStudySession() {
  const dates = loadStreakDates();
  const today = getTodayISO();
  if (!dates.includes(today)) {
    dates.push(today);
    try { localStorage.setItem(STREAK_KEY, JSON.stringify(dates)); } catch {}
  }
}

function getStreak() {
  const dates = loadStreakDates();
  if (!dates.length) return 0;
  const set = new Set(dates);
  let count = 0;
  const d = new Date();
  while (set.has(d.toISOString().slice(0, 10))) {
    count++;
    d.setDate(d.getDate() - 1);
  }
  return count;
}

function splitTranslations(raw) {
  return String(raw || '')
    .split(/[,/]/)
    .map(s => s.trim())
    .filter(Boolean);
}

function expandContractions(str) {
  let result = ' ' + str + ' ';
  CONTRACTION_MAP.forEach(([pattern, replacement]) => {
    result = result.replace(pattern, replacement);
  });
  return result.replace(/\s+/g, ' ').trim();
}

function normalizeAnswer(str) {
  if (str == null) return '';
  let s = String(str)
    .replace(/[’‘`´]/g, "'")
    .replace(/[—–−]/g, '-')
    .replace(/\u00A0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
  s = expandContractions(s);
  return s.replace(/\s+/g, ' ').trim();
}

function stripTrailingPunct(str) {
  return str.replace(/[.,!?;:]+$/g, '').trim();
}

function canonical(str) {
  return stripTrailingPunct(normalizeAnswer(str));
}

function isAnswerCorrect(userAnswer, validAnswers) {
  const user = canonical(userAnswer);
  if (!user) return false;
  return validAnswers.some(v => canonical(v) === user);
}

function getAllValidAnswers(input) {
  const main = input.dataset.answer || '';
  const alt = input.dataset.alt || '';
  return [main, alt]
    .filter(Boolean)
    .join('|')
    .split('|')
    .map(s => s.trim())
    .filter(Boolean);
}

const defaultProgress = {
  completedTopics: {},
  results: {},
  lastOpened: null,
  lastRoute: null
};

function cloneDefault() {
  return JSON.parse(JSON.stringify(defaultProgress));
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return cloneDefault();
    const p = JSON.parse(raw);
    return {
      completedTopics: p.completedTopics || {},
      results: p.results || {},
      lastOpened: p.lastOpened || null,
      lastRoute: p.lastRoute || null
    };
  } catch {
    return cloneDefault();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(PROGRESS));
  } catch {}
}

let PROGRESS = loadProgress();
let VOCAB_STATE = {};

function loadVocabState() {
  try {
    const raw = localStorage.getItem(VOCAB_STORAGE_KEY);
    if (raw) VOCAB_STATE = JSON.parse(raw);
  } catch {
    VOCAB_STATE = {};
  }
}

function saveVocabState() {
  try {
    localStorage.setItem(VOCAB_STORAGE_KEY, JSON.stringify(VOCAB_STATE));
  } catch {}
}

function progressKey(material) {
  const level = (material.level === 'C1' || material.level === 'C2') ? 'C1–C2' : material.level;
  return `${level}|${material.category}|${material.topic}`;
}

function saveArticleResult(material, correct, total) {
  const key = progressKey(material);
  PROGRESS.results[key] = { correct, total, date: Date.now() };
  if (correct === total && total > 0) {
    PROGRESS.completedTopics[key] = true;
  }
  saveProgress();
}

function saveLastOpened(id) {
  PROGRESS.lastOpened = id;
  saveProgress();
}

function saveLastRoute(type, args) {
  PROGRESS.lastRoute = { type, args: args || [] };
  saveProgress();
}

function getLevels() {
  if (typeof MATERIALS === 'undefined') return [];
  const rawLevels = new Set(MATERIALS.map(m => m.level));
  if (rawLevels.has('C1') || rawLevels.has('C2')) {
    rawLevels.add('C1–C2');
    rawLevels.delete('C1');
    rawLevels.delete('C2');
  }
  return LEVELS.filter(l => rawLevels.has(l));
}

function articlesOf(level, category) {
  if (level === 'C1–C2') {
    return MATERIALS.filter(m => (m.level === 'C1' || m.level === 'C2') && m.category === category);
  }
  return MATERIALS.filter(m => m.level === level && m.category === category);
}

function highlightNav(section) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.section === section) btn.classList.add('active');
  });
}

function toggleVocabNavVisibility(show) {
  const vocabNavBtn = document.querySelector('.nav-btn[data-section="vocabulary"]');
  if (vocabNavBtn) {
    vocabNavBtn.style.display = show ? '' : 'none';
  }
}

function progressBadge(level, category) {
  const items = articlesOf(level, category);
  if (!items.length) return '';
  let done = 0;
  items.forEach(it => {
    if (PROGRESS.completedTopics[progressKey(it)]) done++;
  });
  if (!done) return '';
  return `<span class="progress-badge">✓ ${done}/${items.length}</span>`;
}

function stripHtml(html) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function highlightMatch(text, query) {
  if (!query) return text;
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${safeQuery})`, 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function getSnippet(text, query, radius = 40) {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);
  if (index === -1) return text.slice(0, radius * 2) + '...';

  let start = Math.max(0, index - radius);
  let end = Math.min(text.length, index + lowerQuery.length + radius);

  let snippet = text.slice(start, end).trim();
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  return snippet;
}

function renderSearchBar() {
  return `
    <div class="search-wrap">
      <input type="text" id="globalSearch" class="search-input" placeholder="Поиск по темам..." autocomplete="off">
      <div id="searchResults" class="search-results" style="display:none;"></div>
    </div>
  `;
}

function initSearch() {
  const input = document.getElementById('globalSearch');
  const resultsBox = document.getElementById('searchResults');
  if (!input || !resultsBox) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length < 2) {
      resultsBox.style.display = 'none';
      resultsBox.innerHTML = '';
      return;
    }

    const lowerQuery = query.toLowerCase();
    const found = [];

    MATERIALS.forEach(m => {
      const cleanText = stripHtml(m.content);
      const titleLower = m.title.toLowerCase();
      const textLower = cleanText.toLowerCase();

      let score = 0;
      if (titleLower.includes(lowerQuery)) score += 10;
      if (textLower.includes(lowerQuery)) score += 1;

      if (score > 0) {
        found.push({ material: m, score, cleanText });
      }
    });

    found.sort((a, b) => b.score - a.score);

    if (!found.length) {
      resultsBox.innerHTML = '<div class="search-empty">Ничего не найдено</div>';
      resultsBox.style.display = 'block';
      return;
    }

    resultsBox.innerHTML = found.slice(0, 15).map(item => {
      const m = item.material;
      const level = (m.level === 'C1' || m.level === 'C2') ? 'C1–C2' : m.level;
      const cat = m.category === 'theory' ? 'Теория'
                : m.category === 'practice' ? 'Практика'
                : m.category === 'reading' ? 'Чтение'
                : m.category === 'listening' ? 'Аудирование'
                : 'Словарь';

      const highlightedTitle = highlightMatch(m.title, query);
      const snippet = item.score === 10 ? '' : getSnippet(item.cleanText, query);
      const highlightedSnippet = snippet ? highlightMatch(snippet, query) : '';

      return `<div class="search-result-item" onclick="showArticle(${m.id})">
                <span class="search-result-level">${level} · ${cat}</span>
                <span class="search-result-title">${highlightedTitle}</span>
                ${highlightedSnippet ? `<span class="search-result-snippet">${highlightedSnippet}</span>` : ''}
              </div>`;
    }).join('');
    resultsBox.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !resultsBox.contains(e.target)) {
      resultsBox.style.display = 'none';
    }
  });
}

function parseVocabTable(htmlContent) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  const table = tempDiv.querySelector('table');
  if (!table) return [];

  const rows = Array.from(table.querySelectorAll('tr')).slice(1);
  const words = [];

  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    if (cells.length >= 2) {
      const english = cells[0].textContent.trim();
      const translation = cells[1].textContent.trim();
      const example = cells[2] ? cells[2].textContent.trim() : '';
      words.push({ english, translation, example });
    }
  });

  return words;
}

function getAllVocab() {
  const vocabArticles = MATERIALS.filter(m => m.category === 'vocabulary');
  let allWords = [];
  const seen = new Set();

  vocabArticles.forEach(m => {
    const words = parseVocabTable(m.content);
    words.forEach(w => {
      const key = w.english.toLowerCase().trim();
      if (seen.has(key)) return;
      seen.add(key);

      const translations = splitTranslations(w.translation);
      const isPhrase = /\s/.test(w.english) || /[!?]/.test(w.english);
      const ipa = IPA_DICTIONARY[w.english.toLowerCase().trim()] || '';

      allWords.push({
        english: w.english,
        translation: w.translation,
        example: w.example || '',
        translations,
        isPhrase,
        ipa,
        id: `${m.level}|${m.topic}|${w.english}`,
        materialId: m.id,
        materialTitle: m.title
      });
    });
  });
  return allWords;
}

function getVocabCardState(cardId) {
  return VOCAB_STATE[cardId] || { interval: 0, nextReview: 0 };
}

function updateVocabCardState(cardId, quality) {
  const state = getVocabCardState(cardId);
  let interval = state.interval || 0;

  if (quality === 0) interval = 0;
  else if (quality === 1) interval = 1;
  else if (quality === 2) interval = interval === 0 ? 3 : Math.round(interval * 1.5);
  else if (quality === 3) interval = interval === 0 ? 7 : Math.round(interval * 2.5);

  const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000;
  VOCAB_STATE[cardId] = { interval, nextReview };
  saveVocabState();
  recordStudySession();
}

function getVocabStats(level) {
  const words = getAllVocab().filter(w => {
    if (!level || level === 'ALL') return true;
    const m = w.materialId ? MATERIALS.find(x => x.id === w.materialId) : null;
    return m && m.level === level;
  });
  let known = 0, learning = 0, fresh = 0;
  words.forEach(w => {
    const s = getVocabCardState(w.id);
    if (!s || (!s.interval && !s.nextReview)) fresh++;
    else if (s.interval >= MASTERED_INTERVAL) known++;
    else learning++;
  });
  return { known, learning, fresh, total: words.length };
}

function renderStatsRow(stats) {
  const streak = getStreak();
  return `
    <div class="vocab-stats">
      <div class="vocab-stat"><span class="vs-num">${stats.known}</span><span class="vs-lbl">выучено</span></div>
      <div class="vocab-stat"><span class="vs-num">${stats.learning}</span><span class="vs-lbl">на повторении</span></div>
      <div class="vocab-stat"><span class="vs-num">${stats.fresh}</span><span class="vs-lbl">новых</span></div>
      <div class="vocab-stat streak"><span class="vs-num">🔥 ${streak}</span><span class="vs-lbl">${pluralize(streak, 'день', 'дня', 'дней')} подряд</span></div>
    </div>
  `;
}

function showVocabCards(level, direction, onlyPhrases) {
  direction = direction || 'EN→RU';
  highlightNav('vocabulary');
  toggleVocabNavVisibility(true);
  saveLastRoute('vocabCards', [level, direction, onlyPhrases]);

  const all = getAllVocab().filter(w => {
    if (onlyPhrases === 'phrases' && !w.isPhrase) return false;
    if (onlyPhrases === 'words' && w.isPhrase) return false;
    if (level === 'ALL') return true;
    const m = w.materialId ? MATERIALS.find(x => x.id === w.materialId) : null;
    return m && m.level === level;
  });

  const now = Date.now();
  const dueWords = all.filter(w => getVocabCardState(w.id).nextReview <= now);

  if (!dueWords.length) {
    app.innerHTML = `
      <button class="back-home-btn" onclick="showSection('vocabulary')">← Назад к словарю</button>
      <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showSection('vocabulary'); return false;">Словарь</a> <span>/ ${level === 'ALL' ? 'Все уровни' : level}</span></div>
      <h1>Словарь — ${level === 'ALL' ? 'Все уровни' : level}</h1>
      ${renderStatsRow(getVocabStats(level))}
      <div class="locked" style="margin-top: 40px;">
        <p style="font-size: 24px; margin-bottom: 10px;">🎩 Отлично!</p>
        <p>Нет карточек для повторения на сегодня.</p>
        <button class="btn btn-secondary" style="margin-top: 20px;" onclick="showVocabCards('${level}', '${direction}', ${onlyPhrases ? `'${onlyPhrases}'` : 'null'})">Обновить</button>
      </div>
    `;
    window.scrollTo(0, 0);
    return;
  }

  renderFlashcard(level, dueWords.slice(), 0, direction);
}

function renderFlashcard(level, dueWords, index, direction) {
  direction = direction || 'EN→RU';
  window.__currentFlashcard = { level, dueWords, index, direction };

  if (index >= dueWords.length) {
    app.innerHTML = `
      <button class="back-home-btn" onclick="showSection('vocabulary')">← Назад к словарю</button>
      <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showSection('vocabulary'); return false;">Словарь</a> <span>/ ${level === 'ALL' ? 'Все уровни' : level}</span></div>
      <h1>Словарь — ${level === 'ALL' ? 'Все уровни' : level}</h1>
      ${renderStatsRow(getVocabStats(level))}
      <div class="locked" style="margin-top: 40px; border-color: #2E7D5B; color: #2E7D5B;">
        <p style="font-size: 24px; margin-bottom: 10px;">🎉 Сессия завершена!</p>
        <p>Вы повторили ${dueWords.length} карточек.</p>
        <button class="btn btn-dark" style="margin-top: 20px;" onclick="showVocabCards('${level}', '${direction}')">Продолжить</button>
      </div>
    `;
    window.scrollTo(0, 0);
    return;
  }

  const word = dueWords[index];
  const isReverse = direction === 'RU→EN';
  const frontText = isReverse ? word.translation : word.english;
  const backText = isReverse ? word.english : word.translation;

  const ipaLine = word.ipa
    ? `<div class="flashcard-ipa">/${escapeAttr(word.ipa)}/</div>`
    : '';
  const exampleLine = (!isReverse && word.example)
    ? `<div class="flashcard-example">${escapeAttr(word.example)}</div>`
    : '';

  const inputBlock = isReverse
    ? `<div class="fc-input-wrap">
         <input id="fc-input" type="text" class="fc-input" placeholder="Введите английское слово" autocomplete="off" spellcheck="false">
       </div>`
    : '';

  app.innerHTML = `
    <button class="back-home-btn" onclick="showSection('vocabulary')">← Назад к словарю</button>
    <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showSection('vocabulary'); return false;">Словарь</a> <span>/ ${level === 'ALL' ? 'Все уровни' : level}</span></div>

    <div class="flashcard-progress">
      Карточка ${index + 1} из ${dueWords.length} · ${direction}
    </div>

    <div class="flashcard-container" id="flashcard" onclick="flipCard()">
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <div class="flashcard-word">${escapeAttr(frontText)}</div>
          ${inputBlock}
          <div class="flashcard-hint">${isReverse ? 'Введите ответ и нажмите Enter или «Проверить»' : 'Нажмите или пробел, чтобы увидеть перевод'}</div>
        </div>
        <div class="flashcard-back">
          <div class="flashcard-word">${escapeAttr(backText)}</div>
          ${ipaLine}
          ${exampleLine}
          <div id="fc-feedback" class="fc-feedback"></div>
          <div class="flashcard-hint">1–4 — оценить</div>
        </div>
      </div>
    </div>

    <div class="flashcard-controls locked" id="flashcardControls">
      <button class="btn btn-danger" disabled data-id="${escapeAttr(word.id)}" onclick="handleVocabResponse(this.dataset.id, 0)">Забыл (1)</button>
      <button class="btn btn-warning" disabled data-id="${escapeAttr(word.id)}" onclick="handleVocabResponse(this.dataset.id, 1)">Трудно (2)</button>
      <button class="btn btn-success" disabled data-id="${escapeAttr(word.id)}" onclick="handleVocabResponse(this.dataset.id, 2)">Хорошо (3)</button>
      <button class="btn btn-primary" disabled data-id="${escapeAttr(word.id)}" onclick="handleVocabResponse(this.dataset.id, 3)">Легко (4)</button>
    </div>
  `;
  window.scrollTo(0, 0);
}

function flipCard() {
  const card = document.getElementById('flashcard');
  if (!card || card.classList.contains('flipped')) return;
  card.classList.add('flipped');

  const controls = document.getElementById('flashcardControls');
  if (controls) {
    controls.classList.remove('locked');
    controls.querySelectorAll('button').forEach(b => (b.disabled = false));
  }

  const fc = window.__currentFlashcard;
  if (fc && fc.direction === 'RU→EN') {
    const input = document.getElementById('fc-input');
    if (input) input.blur();
    const feedback = document.getElementById('fc-feedback');
    const word = fc.dueWords[fc.index];
    if (!word || !feedback) return;
    const user = (input?.value || '').trim().toLowerCase();
    const correct = String(word.english).toLowerCase();
    if (!user) {
      feedback.textContent = '';
      feedback.className = 'fc-feedback';
    } else if (user === correct) {
      feedback.textContent = '✅ Верно!';
      feedback.className = 'fc-feedback correct';
    } else {
      feedback.innerHTML = `❌ Правильно: <b>${escapeAttr(word.english)}</b>`;
      feedback.className = 'fc-feedback incorrect';
    }
  }
}

function handleVocabResponse(wordId, quality) {
  const card = document.getElementById('flashcard');
  if (!card || !card.classList.contains('flipped')) return;

  const fc = window.__currentFlashcard;
  if (!fc) return;
  const { level, dueWords, index, direction } = fc;

  if (quality === 0) {
    const current = dueWords[index];
    const repeatCount = current.__repeatCount || 0;
    if (repeatCount < 2) {
      dueWords.push({ ...current, __repeat: true, __repeatCount: repeatCount + 1 });
    }
  }

  updateVocabCardState(wordId, quality);
  renderFlashcard(level, dueWords, index + 1, direction);
}

function showVocabDirectory(level) {
  highlightNav('vocabulary');
  toggleVocabNavVisibility(true);
  saveLastRoute('vocabDirectory', [level]);

  const words = getAllVocab().filter(w => {
    if (level === 'ALL') return true;
    const wLevel = w.materialId ? MATERIALS.find(m => m.id === w.materialId)?.level : null;
    return wLevel === level;
  });

  words.sort((a, b) => a.english.localeCompare(b.english));

  let html = `
    <button class="back-home-btn" onclick="showSection('vocabulary')">← Назад к словарю</button>
    <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showSection('vocabulary'); return false;">Словарь</a> <span>/ Справочник (${level === 'ALL' ? 'Все уровни' : level})</span></div>
    <div class="section-heading">
      <p class="eyebrow">VOCABULARY DIRECTORY</p>
      <h1>Справочник слов — ${level === 'ALL' ? 'Все уровни' : level}</h1>
    </div>
  `;

  if (!words.length) {
    html += `<div class="locked">Пока нет слов.</div>`;
    app.innerHTML = html;
    return;
  }

  html += `<div class="vocab-directory">`;
  words.forEach(w => {
    html += `
      <div class="vocab-item">
        <div class="vocab-item-main">
          <span class="vocab-word">${escapeAttr(w.english)}</span>
          ${w.ipa ? `<span class="vocab-ipa">/${escapeAttr(w.ipa)}/</span>` : ''}
        </div>
        <div class="vocab-item-side">
          <span class="vocab-translation">${escapeAttr(w.translation)}</span>
        </div>
      </div>
    `;
  });
  html += `</div>`;

  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function showHome() {
  highlightNav('home');
  toggleVocabNavVisibility(true);
  saveLastRoute('home');

  const levels = getLevels();
  let html = renderSearchBar();

  if (PROGRESS.lastOpened) {
    const last = MATERIALS.find(m => m.id === PROGRESS.lastOpened);
    if (last) {
      html += `<div class="continue-banner">
        <span class="continue-label">Продолжить с того места</span>
        <button class="continue-btn" onclick="showArticle(${last.id})">
          ${last.title} →
        </button>
      </div>`;
    }
  }

  html += '<h1>Выберите уровень</h1><div class="grid">';

  if (!levels.length) {
    html += '<p>В <code>data.js</code> пока нет материалов.</p>';
  } else {
    levels.forEach(l => {
      const count = MATERIALS.filter(m =>
        m.level === l || (l === 'C1–C2' && (m.level === 'C1' || m.level === 'C2'))
      ).length;
      const word = pluralize(count, 'материал', 'материала', 'материалов');
      html += `<button class="card-btn" onclick="showLevel('${l}')">
                 <span class="card-title">${l}</span>
                 <span class="card-subtitle">${count} ${word}</span>
               </button>`;
    });
  }
  html += '</div>';

  html += renderProgressOverview();

  app.innerHTML = html;
  window.scrollTo(0, 0);
  initSearch();
}

function renderProgressOverview() {
  const results = Object.entries(PROGRESS.results);
  if (!results.length) return '';

  let totalCorrect = 0, totalQuestions = 0;
  results.forEach(([, r]) => {
    totalCorrect += r.correct;
    totalQuestions += r.total;
  });

  const completed = Object.keys(PROGRESS.completedTopics).length;
  const pct = totalQuestions ? Math.round(totalCorrect / totalQuestions * 100) : 0;

  return `
    <div class="progress-overview">
      <h3 class="progress-title">Ваш прогресс</h3>
      <div class="progress-stats">
        <div class="progress-stat">
          <span class="stat-number">${completed}</span>
          <span class="stat-label">тем пройдено</span>
        </div>
        <div class="progress-stat">
          <span class="stat-number">${totalCorrect}/${totalQuestions}</span>
          <span class="stat-label">верных ответов</span>
        </div>
        <div class="progress-stat">
          <span class="stat-number">${pct}%</span>
          <span class="stat-label">точность</span>
        </div>
      </div>
      <button class="btn btn-secondary" onclick="resetProgress()">Сбросить прогресс</button>
    </div>
  `;
}

function resetProgress() {
  if (!confirm('Сбросить весь прогресс? Это действие нельзя отменить.')) return;
  PROGRESS = cloneDefault();
  VOCAB_STATE = {};
  saveProgress();
  saveVocabState();
  try { localStorage.removeItem(STREAK_KEY); } catch {}
  showHome();
}

function showSection(category) {
  highlightNav(category);
  toggleVocabNavVisibility(category !== 'vocabulary');
  saveLastRoute('section', [category]);
  const names = {
    theory: 'Теория',
    practice: 'Практика',
    vocabulary: 'Словарь',
    reading: 'Чтение',
    listening: 'Аудирование'
  };
  const name = names[category] || 'Материалы';

  let html = `<button class="back-home-btn" onclick="showHome()">← На главную</button>
              <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a><span>/ ${name}</span></div>
              <div class="section-heading">
                <p class="eyebrow">ENGLISH LEARNING</p>
                <h1>${name}</h1>
                <p class="section-intro">${category === 'vocabulary' ? 'Выберите режим: игра с карточками или справочник слов.' : 'Выберите уровень, чтобы открыть нужные материалы.'}</p>
              </div>`;

  if (category === 'vocabulary') {
    html += '<div class="grid">';

    html += `<button class="card-btn" onclick="showVocabCards('ALL')">
               <span class="card-icon">🧠</span>
               <span class="card-title">EN→RU</span>
               <span class="card-subtitle">Интервальное повторение</span>
             </button>`;

    html += `<button class="card-btn" onclick="showVocabCards('ALL', 'RU→EN')">
               <span class="card-icon">🔁</span>
               <span class="card-title">RU→EN</span>
               <span class="card-subtitle">Ввод с клавиатуры</span>
             </button>`;

    html += `<button class="card-btn" onclick="showVocabCards('ALL', 'EN→RU', 'words')">
               <span class="card-icon">📝</span>
               <span class="card-title">Только слова</span>
               <span class="card-subtitle">Без фраз</span>
             </button>`;

    html += `<button class="card-btn" onclick="showVocabCards('ALL', 'EN→RU', 'phrases')">
               <span class="card-icon">💬</span>
               <span class="card-title">Только фразы</span>
               <span class="card-subtitle">Разговорные выражения</span>
             </button>`;

    html += `<button class="card-btn" onclick="showVocabDirectory('ALL')">
               <span class="card-icon">📖</span>
               <span class="card-title">Справочник слов</span>
               <span class="card-subtitle">Транскрипция и перевод</span>
             </button>`;

    html += `<button class="card-btn" onclick="resetVocabProgress()">
               <span class="card-icon">🔄</span>
               <span class="card-title">Сбросить карточки</span>
               <span class="card-subtitle">Начать повторение заново</span>
             </button>`;

    html += '</div>';

    const levels = getLevels().filter(level => articlesOf(level, category).length > 0);
    if (levels.length > 0) {
       html += `<h3 style="margin-top: 50px; margin-bottom: 20px;">Играть по уровням:</h3>`;
       html += '<div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));">';
       levels.forEach(level => {
         const count = getAllVocab().filter(w => {
           const m = MATERIALS.find(x => x.id === w.materialId);
           return m && m.level === level;
         }).length;
         const word = pluralize(count, 'слово', 'слова', 'слов');

         html += `<button class="card-btn" onclick="showVocabCards('${level}')" style="padding: 20px 10px;">
                    <span class="card-title" style="font-size: 20px;">${level}</span>
                    <span class="card-subtitle">${count} ${word}</span>
                  </button>`;
       });
       html += '</div>';
    }

  } else {
    const levels = getLevels().filter(level => articlesOf(level, category).length > 0);
    html += '<div class="grid">';
    if (!levels.length) {
      html += `<div class="locked">Пока нет материалов в разделе «${name}».</div>`;
    } else {
      levels.forEach(level => {
        const count = articlesOf(level, category).length;
        const word = pluralize(count, 'материал', 'материала', 'материалов');
        html += `<button class="card-btn" onclick="showLevelTab('${level}','${category}')">
                   <span class="card-icon">${category === 'theory' ? '📚' : category === 'practice' ? '✍️' : category === 'listening' ? '🎧' : '📖'}</span>
                   ${progressBadge(level, category)}
                   <span class="card-title">${level}</span>
                   <span class="card-subtitle">${count} ${word}</span>
                 </button>`;
      });
    }
    html += '</div>';
  }

  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function resetVocabProgress() {
  if (!confirm('Сбросить прогресс по карточкам? Результаты тестов останутся.')) return;
  VOCAB_STATE = {};
  saveVocabState();
  try { localStorage.removeItem(STREAK_KEY); } catch {}
  showSection('vocabulary');
}

function showLevel(level) {
  highlightNav('');
  saveLastRoute('level', [level]);
  const isExamOrICPC = (level === 'EXAM' || level === 'ICPC');
  toggleVocabNavVisibility(!isExamOrICPC);

  const theory = articlesOf(level, 'theory');
  const practice = articlesOf(level, 'practice');
  const reading = articlesOf(level, 'reading');
  const listening = articlesOf(level, 'listening');

  const vocabCount = getAllVocab().filter(w => {
    const m = MATERIALS.find(x => x.id === w.materialId);
    if (!m) return false;
    if (level === 'C1–C2') return m.level === 'C1' || m.level === 'C2';
    return m.level === level;
  }).length;

  const theoryWord = pluralize(theory.length, 'материал', 'материала', 'материалов');
  const practiceWord = pluralize(practice.length, 'материал', 'материала', 'материалов');
  const vocabWord = pluralize(vocabCount, 'слово', 'слова', 'слов');
  const readingWord = pluralize(reading.length, 'текст', 'текста', 'текстов');
  const listeningWord = pluralize(listening.length, 'материал', 'материала', 'материалов');

  let html = `<button class="back-home-btn" onclick="showHome()">← На главную</button>
              <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> <span>/ ${level}</span></div>
              <h1>Раздел ${level}</h1>`;

  if (!isExamOrICPC && vocabCount > 0) {
    html += renderStatsRow(getVocabStats(level));
  }

  html += `<div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">`;

  if (theory.length > 0) {
    html += `<button class="card-btn" onclick="showLevelTab('${level}','theory')">
              ${progressBadge(level, 'theory')}
               <span class="card-title">📚 Теория</span>
               <span class="card-subtitle">${theory.length} ${theoryWord}</span>
             </button>`;
  }

  if (practice.length > 0) {
    html += `<button class="card-btn" onclick="showLevelTab('${level}','practice')">
              ${progressBadge(level, 'practice')}
                <span class="card-title">✍️ Практика</span>
                <span class="card-subtitle">${practice.length} ${practiceWord}</span>
            </button>`;
  }

  if (reading.length > 0) {
    html += `<button class="card-btn" onclick="showLevelTab('${level}','reading')">
              ${progressBadge(level, 'reading')}
               <span class="card-title">📖 Чтение</span>
               <span class="card-subtitle">${reading.length} ${readingWord}</span>
            </button>`;
  }

  if (listening.length > 0) {
    html += `<button class="card-btn" onclick="showLevelTab('${level}','listening')">
              ${progressBadge(level, 'listening')}
               <span class="card-title">🎧 Аудио</span>
               <span class="card-subtitle">${listening.length} ${listeningWord}</span>
            </button>`;
  }

  if (!isExamOrICPC && vocabCount > 0) {
    html += `<button class="card-btn" onclick="showVocabCards('${level}')">
              <span class="card-title">📖 Лексика</span>
              <span class="card-subtitle">${vocabCount} ${vocabWord}</span>
            </button>`;
  }

  html += `</div>`;
  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function showLevelTab(level, tab) {
  highlightNav(tab);
  toggleVocabNavVisibility(tab !== 'vocabulary');
  saveLastRoute('levelTab', [level, tab]);
  const items = articlesOf(level, tab);
  const tabName =
    tab === 'theory' ? 'Теория'
    : tab === 'practice' ? 'Практика'
    : tab === 'reading' ? 'Чтение'
    : tab === 'listening' ? 'Аудирование'
    : 'Лексика';

  let html = `<button class="back-home-btn" onclick="showLevel('${level}')">← Назад в раздел ${level}</button>
              <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showLevel('${level}'); return false;">${level}</a> <span>/ ${tabName}</span></div>
              <h1>${level} — ${tabName}</h1>`;

  if (!items.length) {
    html += `<div class="locked">Пока нет материалов в этой категории.</div>`;
  } else {
    html += '<div class="button-list">';
    items.forEach(a => {
      const key = progressKey(a);
      const isDone = PROGRESS.completedTopics[key];
      const res = PROGRESS.results[key];
      let badge = '';
      if (isDone) badge = '<span class="topic-badge done">✓ пройдено</span>';
      else if (res) badge = `<span class="topic-badge partial">${res.correct}/${res.total}</span>`;

      html += `<button class="list-btn" onclick="showArticle(${a.id})">
                 <span class="list-btn-title">${a.title}</span>
                 ${badge}
               </button>`;
    });
    html += '</div>';
  }
  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function findRelatedPractice(theory) {
  if (!theory || theory.category !== 'theory') return null;

  const sameLevel = (m) => {
    const tLevel = theory.level;
    if (tLevel === 'C1' || tLevel === 'C2') {
      return m.level === 'C1' || m.level === 'C2';
    }
    return m.level === tLevel;
  };

  let match = MATERIALS.find(m =>
    m.category === 'practice' && m.topic === theory.topic && sameLevel(m)
  );
  if (match) return match;

  if (theory.level === 'ICPC') {
    match = MATERIALS.find(m =>
      m.category === 'practice' && m.topic === theory.topic + '_q' && m.level === 'ICPC'
    );
    if (match) return match;
    return null;
  }

  const theories = articlesOf(theory.level, 'theory');
  const practices = articlesOf(theory.level, 'practice');
  const idx = theories.findIndex(t => t.id === theory.id);
  if (idx >= 0 && idx < practices.length) {
    return practices[idx];
  }

  return null;
}

function interleaveTranslation(content) {
  const splitRegex = /<h3>\s*Перевод\s*<\/h3>/i;
  if (!splitRegex.test(content)) return content;

  const idx = content.search(splitRegex);
  const englishPart = content.slice(0, idx);
  const russianPart = content.slice(idx).replace(splitRegex, '');

  const paraRegex = /<p\b[^>]*>[\s\S]*?<\/p>/gi;
  const engParas = englishPart.match(paraRegex) || [];
  const rusParas = russianPart.match(paraRegex) || [];

  if (engParas.length < 2 || engParas.length !== rusParas.length) {
    return content.replace(
      /<h3>\s*Перевод\s*<\/h3>([\s\S]*?)(?=<h3>|$)/i,
      '<details class="translation-toggle"><summary>Показать перевод</summary>$1</details>'
    );
  }

  const posRegex = /<p\b[^>]*>[\s\S]*?<\/p>/gi;
  const positions = [];
  let m;
  while ((m = posRegex.exec(englishPart)) !== null) {
    positions.push({ start: m.index, end: m.index + m[0].length, text: m[0] });
  }

  let result = '';
  let cursor = 0;
  for (let i = 0; i < positions.length; i++) {
    const pos = positions[i];
    result += englishPart.slice(cursor, pos.start);
    result += `<div class="paragraph-pair">
      ${pos.text}
      <details class="paragraph-translation">
        <summary>Перевод</summary>
        ${rusParas[i]}
      </details>
    </div>`;
    cursor = pos.end;
  }
  result += englishPart.slice(cursor);

  const extra = russianPart.replace(paraRegex, '').trim();
  if (extra) result += extra;

  return result;
}

function injectListeningStyles() {
  if (document.getElementById('listening-enhance-styles')) return;
  const style = document.createElement('style');
  style.id = 'listening-enhance-styles';
  style.textContent = `
    .tf-question { margin: 0 0 10px; font-weight: 500; line-height: 1.45; color: #2b1a1a; }
    .tf-options { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px; }
    .tf-option { padding: 8px 16px; border: 1.5px solid #d6cbb8; background: #fff; border-radius: 8px; cursor: pointer; font-size: 15px; font-family: inherit; line-height: 1.3; color: #2b1a1a; transition: border-color .15s ease, background .15s ease, color .15s ease, transform .08s ease; }
    .tf-option:hover { border-color: #6b1e2e; background: #fdf6f0; }
    .tf-option:active { transform: scale(0.98); }
    .tf-option.selected { border-color: #6b1e2e; background: #6b1e2e; color: #fff; }
    .tf-option.selected:hover { background: #7d2436; }
    .tf-option.correct { border-color: #2E7D5B; background: #e6f4ec; color: #1d5a3f; font-weight: 600; }
    .tf-option.incorrect { border-color: #c0392b; background: #fbe9e7; color: #a2301f; }
    .tf-option:disabled { cursor: default; opacity: 0.85; }
    .listening-check-bar { margin: 28px 0 24px; padding: 20px 24px; background: #f7f3ea; border: 1.5px solid #e0d8c9; border-radius: 12px; display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
    .listening-check-bar .btn { margin: 0; }
    .listening-warning { color: #a2301f; font-size: 14px; font-weight: 500; line-height: 1.4; }
    .listening-result { font-size: 16px; line-height: 1.5; color: #2b1a1a; }
    .listening-result b { color: #6b1e2e; font-weight: 700; }
    details[data-locked="true"] { opacity: 0.55; pointer-events: none; }
    details[data-locked="true"] > summary { pointer-events: none; cursor: not-allowed; list-style: none; }
    details[data-locked="true"] > summary::-webkit-details-marker { display: none; }
    details[data-locked="true"] > summary::before { content: "🔒 "; margin-right: 4px; }
    details[data-locked="false"] { opacity: 1; pointer-events: auto; }
    details[data-locked="false"] > summary { pointer-events: auto; cursor: pointer; }
    details[data-locked="false"] > summary::before { content: ""; }
    [data-theme="midnight"] .tf-question { color: #e8dfd4; }
    [data-theme="midnight"] .tf-option { background: #2a1e22; border-color: #4a363c; color: #e8dfd4; }
    [data-theme="midnight"] .tf-option:hover { border-color: #c9a04a; background: #3a262c; }
    [data-theme="midnight"] .tf-option.selected { border-color: #c9a04a; background: #c9a04a; color: #1a0f12; }
    [data-theme="midnight"] .tf-option.correct { border-color: #2E7D5B; background: #1c3a2b; color: #b3e6c9; }
    [data-theme="midnight"] .tf-option.incorrect { border-color: #c0392b; background: #3a1c1a; color: #f4b8ad; }
    [data-theme="midnight"] .listening-check-bar { background: #241a1e; border-color: #4a363c; }
    [data-theme="midnight"] .listening-warning { color: #f4b8ad; }
    [data-theme="midnight"] .listening-result { color: #e8dfd4; }
    [data-theme="midnight"] .listening-result b { color: #c9a04a; }
  `;
  document.head.appendChild(style);
}

function blockSummaryClick(e) {
  const summary = e.currentTarget;
  const details = summary.parentElement;
  if (details && details.getAttribute('data-locked') === 'true') {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
}

function blockSummaryKeydown(e) {
  const summary = e.currentTarget;
  const details = summary.parentElement;
  if (details && details.getAttribute('data-locked') === 'true') {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
  }
}

function shouldEnhanceListening(a, content) {
  return a.category === 'listening'
    && /<details[\s>]/i.test(content)
    && /Task\s*1/i.test(content)
    && /Task\s*2/i.test(content);
}

function parseListeningAnswerKey(detailsEl) {
  if (!detailsEl) return { ans1: [], ans2: [] };
  const text = detailsEl.textContent || '';
  const m1 = text.match(/Task\s*1\s*[:\-]?\s*([\s\S]*?)(?=Task\s*2|$)/i);
  const m2 = text.match(/Task\s*2\s*[:\-]?\s*([\s\S]*?)$/i);

  const extract = (str, letters) => {
    if (!str) return [];
    return str.split(/,\s*/).map(part => {
      const m = part.match(new RegExp(`([${letters}])`, 'i'));
      return m ? m[1].toLowerCase() : '';
    }).filter(Boolean);
  };

  const ans1 = m1 ? extract(m1[1], 'abc') : [];
  const ans2 = m2 ? extract(m2[1], 'tf') : [];
  return { ans1, ans2 };
}

function findAnswersDetails(root) {
  return Array.from(root.querySelectorAll('details')).find(d => {
    const s = (d.querySelector('summary')?.textContent || '').toLowerCase();
    const t = (d.textContent || '').toLowerCase();
    return /answer|ответ/i.test(s) || /task\s*1\s*:/.test(t);
  });
}

function parseMCQuestion(li) {
  const html = li.innerHTML;
  const parts = html.split(/<br\s*\/?>/i).map(s => s.trim()).filter(Boolean);
  if (parts.length < 2) return null;
  const question = parts[0];
  const options = [];
  for (let i = 1; i < parts.length; i++) {
    const m = parts[i].match(/^\s*[-–—]?\s*([a-c])\s*[).\:]\s*(.+)$/i);
    if (m) options.push({ letter: m[1].toLowerCase(), text: m[2].trim() });
  }
  if (options.length < 2) return null;
  return { question, options };
}

function parseTFStatement(li) {
  const raw = li.textContent
    .replace(/[\s—–\-]*(True\s*\/\s*False|T\s*\/\s*F)\s*$/i, '')
    .trim();
  return raw || null;
}

function enhanceListeningContent(content) {
  injectListeningStyles();
  try {
    const root = document.createElement('div');
    root.innerHTML = content;

    const answersDetails = findAnswersDetails(root);
    const { ans1, ans2 } = answersDetails
      ? parseListeningAnswerKey(answersDetails)
      : { ans1: [], ans2: [] };

    const findTaskHeading = (num) =>
      Array.from(root.querySelectorAll('h1, h2, h3, h4, h5, h6, p, strong, b'))
        .find(h => new RegExp(`^\\s*Task\\s*${num}`, 'i').test(h.textContent.trim()));

    const resolveOL = (heading) => {
      if (!heading) return null;
      let el = heading.nextElementSibling;
      while (el && !/^(OL|UL)$/.test(el.tagName)) {
        if (el.querySelector && el.querySelector('ol, ul')) return el.querySelector('ol, ul');
        el = el.nextElementSibling;
      }
      return el && /^(OL|UL)$/.test(el.tagName) ? el : null;
    };

    let transformed = 0;

    const ol1 = resolveOL(findTaskHeading(1));
    if (ol1) {
      Array.from(ol1.querySelectorAll(':scope > li')).forEach((li, idx) => {
        const parsed = parseMCQuestion(li);
        if (!parsed) return;
        const correct = ans1[idx] || '';
        const buttons = parsed.options.map(opt =>
          `<button type="button" class="tf-option" data-letter="${opt.letter}" data-correct="${correct}">${opt.letter}) ${opt.text}</button>`
        ).join('');
        li.innerHTML = `
          <div class="tf-question">${parsed.question}</div>
          <div class="tf-options">${buttons}</div>
        `;
        transformed++;
      });
    }

    const ol2 = resolveOL(findTaskHeading(2));
    if (ol2) {
      Array.from(ol2.querySelectorAll(':scope > li')).forEach((li, idx) => {
        const statement = parseTFStatement(li);
        if (!statement) return;
        const correct = (ans2[idx] === 't') ? 'True' : 'False';
        li.innerHTML = `
          <div class="tf-question">${statement}</div>
          <div class="tf-options">
            <button type="button" class="tf-option" data-value="True" data-correct="${correct}">True</button>
            <button type="button" class="tf-option" data-value="False" data-correct="${correct}">False</button>
          </div>
        `;
        transformed++;
      });
    }

    root.querySelectorAll('details').forEach(d => {
      d.classList.add('locked-details');
      d.setAttribute('data-locked', 'true');
      const summary = d.querySelector('summary');
      if (summary) {
        summary.setAttribute('tabindex', '-1');
        summary.setAttribute('aria-disabled', 'true');
        summary.addEventListener('click', blockSummaryClick, true);
        summary.addEventListener('keydown', blockSummaryKeydown, true);
      }
    });

    const bar = document.createElement('div');
    bar.className = 'listening-check-bar';
    bar.innerHTML = `
      <button class="btn btn-dark" type="button" onclick="checkListeningTasks(this)">
        ${transformed > 0 ? 'Проверить ответы и открыть текст' : 'Показать текст и ответы'}
      </button>
    `;

    const firstDetails = root.querySelector('details');
    if (firstDetails && firstDetails.parentNode) {
      firstDetails.parentNode.insertBefore(bar, firstDetails);
    } else {
      root.appendChild(bar);
    }

    return root.innerHTML;
  } catch (e) {
    return content;
  }
}

function checkListeningTasks(btn) {
  const content = btn.closest('.article-content');
  if (!content) return;

  const blocks = content.querySelectorAll('.tf-options');

  let total = 0;
  let correct = 0;
  let unanswered = 0;

  blocks.forEach(block => {
    const options = block.querySelectorAll('.tf-option');
    const selected = block.querySelector('.tf-option.selected');
    options.forEach(o => o.classList.remove('correct', 'incorrect'));

    if (!selected) { unanswered++; return; }
    total++;

    const chosen = selected.dataset.letter || selected.dataset.value;
    const expected = selected.dataset.correct || '';
    if (!expected) return;

    if (chosen === expected) {
      selected.classList.add('correct');
      correct++;
    } else {
      selected.classList.add('incorrect');
      options.forEach(o => {
        const v = o.dataset.letter || o.dataset.value;
        if (v === expected) o.classList.add('correct');
      });
    }
  });

  if (unanswered > 0) {
    const bar = btn.closest('.listening-check-bar');
    if (bar) {
      let msg = bar.querySelector('.listening-warning');
      if (!msg) {
        msg = document.createElement('div');
        msg.className = 'listening-warning';
        bar.appendChild(msg);
      }
      msg.textContent = `Осталось ответить на ${unanswered} ${pluralize(unanswered, 'задание', 'задания', 'заданий')}.`;
    }
    return;
  }

  content.querySelectorAll('details[data-locked="true"]').forEach(d => {
    d.setAttribute('data-locked', 'false');
    d.classList.add('unlocked');
    const summary = d.querySelector('summary');
    if (summary) {
      summary.removeAttribute('tabindex');
      summary.removeAttribute('aria-disabled');
    }
  });

  const bar = btn.closest('.listening-check-bar');
  if (bar) {
    bar.innerHTML = total > 0
      ? `<div class="listening-result">Ваш результат: <b>${correct} из ${total}</b>. Текст и правильные ответы теперь доступны ниже.</div>`
      : `<div class="listening-result">Задания выполнены. Текст и ответы теперь доступны ниже.</div>`;
  }
}

function showArticle(id) {
  const a = MATERIALS.find(m => m.id === id);
  if (!a) { app.innerHTML = '<p>Материал не найден.</p>'; return; }

  highlightNav(a.category);
  toggleVocabNavVisibility(a.category !== 'vocabulary');
  saveLastOpened(id);
  saveLastRoute('article', [id]);

  const items = articlesOf(a.level, a.category);
  const currentIndex = items.findIndex(item => item.id === a.id);
  const prevArticle = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextArticle = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;
  const relatedPractice = findRelatedPractice(a);

  let content = a.content;

  if (a.category === 'reading' || a.category === 'listening') {
    content = content.replace(
      /<div class="audio-placeholder" data-audio="([^"]+)">[\s\S]*?<\/div>/g,
      '<audio controls preload="none" style="width:100%;margin-bottom:20px;" src="$1"></audio>'
    );
  }

  if (a.category === 'reading') {
    content = interleaveTranslation(content);
  }

  if ((a.category === 'practice' || a.category === 'reading' || a.category === 'listening') && content.includes('[[')) {
    content = renderInteractive(content);
  }

  if (shouldEnhanceListening(a, content)) {
    content = enhanceListeningContent(content);
  }

  const catName =
    a.category === 'theory' ? 'Теория'
    : a.category === 'practice' ? 'Практика'
    : a.category === 'reading' ? 'Чтение'
    : a.category === 'listening' ? 'Аудирование'
    : 'Лексика';

  const backLevel = (a.level === 'C1' || a.level === 'C2') ? 'C1–C2' : a.level;

  const key = progressKey(a);
  const doneBadge = PROGRESS.completedTopics[key]
    ? '<span class="article-done-badge">✓ Пройдено</span>'
    : '';

  let navHtml = '<div class="article-nav">';
  navHtml += prevArticle
    ? `<button class="btn btn-secondary" onclick="showArticle(${prevArticle.id})">← ${prevArticle.title}</button>`
    : '<span></span>';
  navHtml += nextArticle
    ? `<button class="btn btn-secondary" onclick="showArticle(${nextArticle.id})">${nextArticle.title} →</button>`
    : '<span></span>';
  navHtml += '</div>';

  const showQuizBtns =
    a.category === 'practice' ||
    a.category === 'reading' ||
    (a.category === 'listening' && a.content.includes('[['));

  const practiceButtons = showQuizBtns
    ? `<button class="btn btn-dark" onclick="checkAllInputs()">Проверить ответы</button>
       <button class="btn btn-secondary" onclick="showAllAnswers()">Показать ответы</button>
       <button class="btn btn-secondary" onclick="retryMistakes()">Повторить ошибки</button>
       <button class="btn btn-secondary" onclick="resetInputs()">Очистить</button>`
    : '';

  let practiceCta = '';
  if (relatedPractice) {
    practiceCta = `
      <div class="theory-to-practice">
        <div class="theory-to-practice-text">Готовы применить знания?</div>
        <button class="btn btn-dark" onclick="showArticle(${relatedPractice.id})">
          Перейти к практике по этой теме →
        </button>
      </div>
    `;
  }

  app.innerHTML = `
    <button class="back-home-btn" onclick="showLevelTab('${backLevel}', '${a.category}')">← Назад к списку</button>
    <div class="crumbs">
      <a href="#" onclick="showHome(); return false;">Главная</a> /
      <a href="#" onclick="showLevel('${backLevel}'); return false;">${backLevel}</a> <span>/ ${catName}</span>
    </div>
    <h1>${a.title} ${doneBadge}</h1>
        <div class="article-content">${content}</div>
    ${practiceCta}

    <div class="article-footer">
        <div class="article-actions">
            <button class="btn btn-secondary" onclick="showLevelTab('${backLevel}', '${a.category}')">← К списку тем</button>
            ${practiceButtons}
        </div>
        ${navHtml}
    </div>
  `;
  window.scrollTo(0, 0);
  window.__currentArticle = a;
}

function extractTopic(str) {
  const m = String(str).match(/^(.*?)::([\w-]+)$/s);
  if (m) return { content: m[1], topic: m[2] };
  return { content: str, topic: null };
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getQuizAnswer(wrap) {
  const input = wrap.querySelector('.quiz-input');
  if (input) return input.value.trim();

  const mc = wrap.querySelector('.quiz-mc');
  if (mc) {
    const sel = mc.querySelector('.mc-option.selected');
    return sel ? sel.dataset.value : '';
  }

  const order = wrap.querySelector('.quiz-order');
  if (order) {
    const tokens = order.querySelectorAll('.order-answer .order-token');
    return Array.from(tokens).map(t => t.dataset.word).join(' ');
  }
  return '';
}

function getQuizValidAnswers(wrap) {
  const input = wrap.querySelector('.quiz-input');
  if (input) return getAllValidAnswers(input);

  const mc = wrap.querySelector('.quiz-mc');
  if (mc) return [mc.dataset.answer];

  const order = wrap.querySelector('.quiz-order');
  if (order) return [order.dataset.answer];

  return [];
}

function findTheoryIdByTopic(topic, level) {
  const mat = MATERIALS.find(m =>
    m.category === 'theory' && m.topic === topic && m.level === level
  );
  return mat ? mat.id : null;
}

function findTopicTitle(topic, level) {
  const mat = MATERIALS.find(m =>
    m.category === 'theory' && m.topic === topic && m.level === level
  );
  return mat ? mat.title : `Тема ${topic}`;
}

function renderTopicBreakdown(topicResults, level) {
  const entries = Object.entries(topicResults);
  if (!entries.length) return '';
  const weak = [], good = [];
  entries.forEach(([topic, r]) => {
    const pct = r.total ? r.correct / r.total : 0;
    const item = { topic, ...r, pct };
    if (pct < 0.7) weak.push(item); else good.push(item);
  });
  weak.sort((a, b) => a.pct - b.pct);

  let html = '<div class="topic-breakdown">';
  if (weak.length) {
    html += '<h4 class="tb-heading tb-weak">Слабые места</h4><ul class="tb-list">';
    weak.forEach(w => {
      const theoryId = findTheoryIdByTopic(w.topic, level);
      const title = findTopicTitle(w.topic, level);
      html += `<li>
        <span class="tb-title">${escapeAttr(title)}</span>
        <span class="tb-score">${w.correct}/${w.total} (${Math.round(w.pct * 100)}%)</span>
        ${theoryId != null ? `<button class="btn btn-secondary tb-link" onclick="showArticle(${theoryId})">Повторить теорию →</button>` : ''}
      </li>`;
    });
    html += '</ul>';
  }
  if (good.length) {
    html += '<h4 class="tb-heading tb-good">Хорошо усвоено</h4><ul class="tb-list">';
    good.forEach(g => {
      const title = findTopicTitle(g.topic, level);
      html += `<li><span class="tb-title">${escapeAttr(title)}</span> <span class="tb-score">${g.correct}/${g.total}</span></li>`;
    });
    html += '</ul>';
  }
  html += '</div>';
  return html;
}

function renderInteractive(html) {
  let counter = 0;
  const processed = html.replace(/\[\[([\s\S]*?)\]\]/g, (match, inner) => {
    counter++;
    const { content, topic } = extractTopic(inner);
    const topicAttr = topic ? ` data-topic="${escapeAttr(topic)}"` : '';

    if (content.startsWith('?mc:')) {
      const parts = content.slice(4).split('|').map(s => s.trim()).filter(Boolean);
      if (parts.length < 2) return match;
      const correct = parts[0];
      const options = shuffle(parts);
      const buttons = options.map(opt =>
        `<button type="button" class="mc-option" data-value="${escapeAttr(opt)}">${escapeAttr(opt)}</button>`
      ).join('');
      return `<span class="quiz-wrap" data-type="mc"${topicAttr}>
        <span class="quiz-mc" data-answer="${escapeAttr(correct)}">${buttons}</span>
      </span>`;
    }

    if (content.startsWith('?order:')) {
      const words = content.slice(7).split('|').map(s => s.trim()).filter(Boolean);
      if (words.length < 2) return match;
      const correct = words.join(' ');
      const shuffled = shuffle(words);
      const tokens = shuffled.map(w =>
        `<button type="button" class="order-token" data-word="${escapeAttr(w)}">${escapeAttr(w)}</button>`
      ).join('');
      return `<span class="quiz-wrap" data-type="order"${topicAttr}>
        <span class="quiz-order" data-answer="${escapeAttr(correct)}">
          <span class="order-answer"></span>
          <span class="order-tokens">${tokens}</span>
        </span>
      </span>`;
    }

    const parts = content.split('|').map(s => s.trim());
    const mainAnswer = parts[0];
    const altAnswers = parts.slice(1).join('|');
    const widthClass = mainAnswer.length > 15 ? 'quiz-input wide' : 'quiz-input';
    const hint = mainAnswer.length > 3
      ? `${mainAnswer.slice(0, 3)}… (${mainAnswer.length} симв.)`
      : (mainAnswer.length ? `${mainAnswer.slice(0, 1)}…` : '');

    return `<span class="quiz-wrap" data-type="text"${topicAttr}>
      <input type="text" class="${widthClass}" id="input-${counter}"
             data-answer="${escapeAttr(mainAnswer)}"
             data-alt="${escapeAttr(altAnswers)}"
             placeholder="..." autocomplete="off" spellcheck="false">
      <button class="hint-btn" type="button" title="Подсказка"
              onclick="showHint(this, '${escapeAttr(hint)}')">?</button>
    </span>`;
  });

  return processed + `<div id="score-display" style="display:none"></div>`;
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function showHint(btn, hint) {
  const wrap = btn.parentElement;
  const existing = wrap.querySelector('.hint-text');
  if (existing) { existing.remove(); return; }

  const hintEl = document.createElement('span');
  hintEl.className = 'hint-text';
  hintEl.textContent = hint;
  wrap.appendChild(hintEl);
}

function checkAllInputs() {
  const wraps = document.querySelectorAll('.quiz-wrap');
  if (!wraps.length) return;

  let correctCount = 0;
  const topicResults = {};
  let hasTagged = false;

  wraps.forEach(wrap => {
    const answer = getQuizAnswer(wrap);
    const valid = getQuizValidAnswers(wrap);
    const isCorrect = !!answer && isAnswerCorrect(answer, valid);

    const input = wrap.querySelector('.quiz-input');
    const mc = wrap.querySelector('.quiz-mc');
    const order = wrap.querySelector('.quiz-order');

    if (input) input.classList.remove('correct', 'incorrect', 'revealed');
    if (mc) mc.querySelectorAll('.mc-option').forEach(o => o.classList.remove('correct', 'incorrect'));
    if (order) order.classList.remove('correct', 'incorrect');

    if (answer) {
      if (isCorrect) {
        correctCount++;
        if (input) input.classList.add('correct');
        if (mc) mc.querySelectorAll('.mc-option').forEach(o => {
          if (o.dataset.value === mc.dataset.answer) o.classList.add('correct');
        });
        if (order) order.classList.add('correct');
      } else {
        if (input) input.classList.add('incorrect');
        if (mc) mc.querySelectorAll('.mc-option').forEach(o => {
          if (o.classList.contains('selected')) o.classList.add('incorrect');
        });
        if (order) order.classList.add('incorrect');
      }
    }

    const topic = wrap.dataset.topic;
    if (topic) {
      hasTagged = true;
      if (!topicResults[topic]) topicResults[topic] = { correct: 0, total: 0 };
      topicResults[topic].total++;
      if (isCorrect) topicResults[topic].correct++;
    }
  });

  if (window.__currentArticle) {
    saveArticleResult(window.__currentArticle, correctCount, wraps.length);
  }

  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.style.display = 'block';
    const pct = wraps.length ? Math.round(correctCount / wraps.length * 100) : 0;
    let message;
    if (correctCount === wraps.length) message = '<span class="score-perfect">🎩 Блестяще! Все ответы верны.</span>';
    else if (pct >= 70) message = '<span class="score-good">Хороший результат — почти всё верно.</span>';
    else if (pct >= 40) message = '<span class="score-ok">Неплохо, но есть над чем поработать.</span>';
    else message = '<span class="score-low">Стоит повторить материал и попробовать снова.</span>';

    let html = `
      <div class="score-line">Ваш результат: <b>${correctCount} из ${wraps.length}</b> <span class="score-pct">(${pct}%)</span></div>
      <div class="score-message">${message}</div>
    `;

    if (hasTagged && window.__currentArticle) {
      html += renderTopicBreakdown(topicResults, window.__currentArticle.level);
    }

    scoreDisplay.innerHTML = html;
    scoreDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  if (window.__currentArticle && PROGRESS.completedTopics[progressKey(window.__currentArticle)]) {
    const h1 = app.querySelector('h1');
    if (h1 && !h1.querySelector('.article-done-badge')) {
      const badge = document.createElement('span');
      badge.className = 'article-done-badge';
      badge.textContent = '✓ Пройдено';
      h1.appendChild(badge);
    }
  }
}

function showAllAnswers() {
  const wraps = document.querySelectorAll('.quiz-wrap');
  wraps.forEach(wrap => {
    const valid = getQuizValidAnswers(wrap);
    const main = valid[0] || '';

    const input = wrap.querySelector('.quiz-input');
    if (input) {
      input.classList.remove('correct', 'incorrect');
      input.classList.add('revealed');
      input.value = main;
      if (!wrap.querySelector('.revealed-label')) {
        const label = document.createElement('span');
        label.className = 'revealed-label';
        label.textContent = 'ответ';
        wrap.appendChild(label);
      }
      return;
    }

    const mc = wrap.querySelector('.quiz-mc');
    if (mc) {
      mc.querySelectorAll('.mc-option').forEach(o => {
        o.classList.remove('correct', 'incorrect', 'selected');
        if (o.dataset.value === mc.dataset.answer) o.classList.add('correct');
        o.disabled = true;
      });
      return;
    }

    const order = wrap.querySelector('.quiz-order');
    if (order) {
      const answerEl = order.querySelector('.order-answer');
      const tokensEl = order.querySelector('.order-tokens');
      answerEl.innerHTML = '';
      tokensEl.innerHTML = '';
      main.split(' ').forEach(w => {
        const t = document.createElement('button');
        t.type = 'button';
        t.className = 'order-token';
        t.dataset.word = w;
        t.textContent = w;
        t.disabled = true;
        answerEl.appendChild(t);
      });
      order.classList.add('correct');
    }
  });

  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.style.display = 'block';
    scoreDisplay.innerHTML = '<div class="score-line">Ответы показаны. Попробуйте пройти снова без подсказок.</div>';
  }
}

function retryMistakes() {
  const wraps = document.querySelectorAll('.quiz-wrap');
  let mistakeCount = 0;

  wraps.forEach(wrap => {
    const input = wrap.querySelector('.quiz-input');
    const mc = wrap.querySelector('.quiz-mc');
    const order = wrap.querySelector('.quiz-order');

    const isWrong =
      (input && input.classList.contains('incorrect')) ||
      (mc && mc.querySelector('.mc-option.incorrect')) ||
      (order && order.classList.contains('incorrect'));

    if (!isWrong) return;

    if (input) {
      input.value = '';
      input.classList.remove('incorrect', 'correct', 'revealed');
      input.classList.add('retry');
      const label = wrap.querySelector('.revealed-label');
      if (label) label.remove();
    }

    if (mc) {
      mc.querySelectorAll('.mc-option').forEach(o => o.classList.remove('correct', 'incorrect', 'selected'));
    }

    if (order) {
      order.classList.remove('correct', 'incorrect');
      order.querySelectorAll('.order-answer .order-token').forEach(t => {
        t.disabled = false;
        order.querySelector('.order-tokens').appendChild(t);
      });
    }

    mistakeCount++;
  });

  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.style.display = 'block';
    if (mistakeCount === 0) {
      scoreDisplay.innerHTML = '<div class="score-line">Ошибок нет — нечего повторять. 🎩</div>';
    } else {
      scoreDisplay.innerHTML = `<div class="score-line">Оставлено для повтора: <b>${mistakeCount}</b> ${pluralize(mistakeCount, 'задание', 'задания', 'заданий')}.</div>`;
    }
  }

  const firstRetry = document.querySelector('.quiz-input.retry');
  if (firstRetry) {
    firstRetry.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstRetry.focus();
  }
}

function resetInputs() {
  const wraps = document.querySelectorAll('.quiz-wrap');
  wraps.forEach(wrap => {
    const input = wrap.querySelector('.quiz-input');
    if (input) {
      input.value = '';
      input.classList.remove('correct', 'incorrect', 'revealed', 'retry');
    }

    const mc = wrap.querySelector('.quiz-mc');
    if (mc) {
      mc.querySelectorAll('.mc-option').forEach(o => {
        o.classList.remove('correct', 'incorrect', 'selected');
        o.disabled = false;
      });
    }

    const order = wrap.querySelector('.quiz-order');
    if (order) {
      order.classList.remove('correct', 'incorrect');
      order.querySelectorAll('.order-answer .order-token').forEach(t => {
        t.disabled = false;
        order.querySelector('.order-tokens').appendChild(t);
      });
    }

    const label = wrap.querySelector('.revealed-label');
    if (label) label.remove();
    const hint = wrap.querySelector('.hint-text');
    if (hint) hint.remove();
  });

  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.style.display = 'none';
    scoreDisplay.innerHTML = '';
  }
}

function pluralize(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

function restoreLastRoute() {
  const route = PROGRESS.lastRoute;
  if (!route || !route.type) return showHome();

  try {
    switch (route.type) {
      case 'home': return showHome();
      case 'section': return showSection(route.args[0]);
      case 'level': return showLevel(route.args[0]);
      case 'levelTab': return showLevelTab(route.args[0], route.args[1]);
      case 'article': return showArticle(route.args[0]);
      case 'vocabCards': return showVocabCards(route.args[0], route.args[1], route.args[2]);
      case 'vocabDirectory': return showVocabDirectory(route.args[0]);
      default: return showHome();
    }
  } catch {
    showHome();
  }
}

const THEME_KEY = 'english-learning-theme';

function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'burgundy';
}

function applyTheme(theme) {
  if (theme === 'midnight') {
    document.documentElement.setAttribute('data-theme', 'midnight');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  updateThemeToggle();
}

function updateThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const isMidnight = getCurrentTheme() === 'midnight';
  const icon = btn.querySelector('.theme-icon');
  if (icon) icon.textContent = isMidnight ? '☀' : '☾';
  btn.setAttribute('title', isMidnight ? 'Светлая тема (Burgundy)' : 'Тёмная тема (Midnight)');
}

function toggleTheme() {
  const next = getCurrentTheme() === 'midnight' ? 'burgundy' : 'midnight';
  applyTheme(next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {}
}

document.addEventListener('DOMContentLoaded', () => {
  loadVocabState();
  updateThemeToggle();
  injectListeningStyles();
  restoreLastRoute();
});

document.addEventListener('toggle', (e) => {
  const d = e.target;
  if (d && d.tagName === 'DETAILS'
      && d.getAttribute('data-locked') === 'true'
      && d.open) {
    d.open = false;
  }
}, true);

document.addEventListener('click', (e) => {
  const tfBtn = e.target.closest('.tf-option');
  if (tfBtn && !tfBtn.disabled) {
    const siblings = tfBtn.parentElement.querySelectorAll('.tf-option');
    siblings.forEach(s => {
      if (!s.classList.contains('correct') && !s.classList.contains('incorrect')) {
        s.classList.remove('selected');
      }
    });
    tfBtn.classList.add('selected');
    return;
  }

  const mcBtn = e.target.closest('.mc-option');
  if (mcBtn && !mcBtn.disabled) {
    const mc = mcBtn.closest('.quiz-mc');
    mc.querySelectorAll('.mc-option').forEach(o => o.classList.remove('selected', 'correct', 'incorrect'));
    mcBtn.classList.add('selected');
    return;
  }

  const token = e.target.closest('.order-token');
  if (token && !token.disabled) {
    const order = token.closest('.quiz-order');
    const answerEl = order.querySelector('.order-answer');
    const tokensEl = order.querySelector('.order-tokens');
    if (token.parentElement === tokensEl) {
      answerEl.appendChild(token);
    } else {
      tokensEl.appendChild(token);
    }
    order.classList.remove('correct', 'incorrect');
  }
});

document.addEventListener('keydown', (e) => {
  const fc = window.__currentFlashcard;
  if (!fc) return;
  const card = document.getElementById('flashcard');
  if (!card) return;

  const tag = (e.target.tagName || '').toUpperCase();
  if (tag === 'INPUT' || tag === 'TEXTAREA') {
    if (e.key === 'Enter') {
      e.preventDefault();
      flipCard();
    }
    return;
  }

  if (e.key === ' ' || e.code === 'Space') {
    e.preventDefault();
    flipCard();
    return;
  }

  if (['1', '2', '3', '4'].includes(e.key)) {
    if (!card.classList.contains('flipped')) return;
    const word = fc.dueWords[fc.index];
    if (!word) return;
    e.preventDefault();
    handleVocabResponse(word.id, Number(e.key) - 1);
  }
});
