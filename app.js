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

const STORAGE_KEY = 'english-learning-progress-v1';
const VOCAB_STORAGE_KEY = 'english-learning-vocab-v1';

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
      const cat = m.category === 'theory' ? 'Теория' : m.category === 'practice' ? 'Практика' : 'Словарь';
      
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
      words.push({ english, translation });
    }
  });

  return words;
}

function getAllVocab() {
  const vocabArticles = MATERIALS.filter(m => m.category === 'vocabulary');
  let allWords = [];
  vocabArticles.forEach(m => {
    const words = parseVocabTable(m.content);
    words.forEach(w => {
      allWords.push({
        ...w,
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

  if (quality === 0) {
    interval = 0;
  } else if (quality === 1) {
    interval = 1;
  } else if (quality === 2) {
    interval = interval === 0 ? 3 : interval * 1.5;
  } else if (quality === 3) {
    interval = interval === 0 ? 7 : interval * 2.5;
  }

  const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000;
  VOCAB_STATE[cardId] = { interval, nextReview };
  saveVocabState();
}

function showVocabCards(level) {
  highlightNav('vocabulary');
  toggleVocabNavVisibility(true);
  saveLastRoute('vocabCards', [level]);

  const words = getAllVocab().filter(w => {
    if (level === 'ALL') return true;
    const wLevel = w.materialId ? MATERIALS.find(m => m.id === w.materialId).level : null;
    return wLevel === level;
  });

  const now = Date.now();
  const dueWords = words.filter(w => {
    const state = getVocabCardState(w.id);
    return state.nextReview <= now;
  });

  if (!dueWords.length) {
    app.innerHTML = `
      <button class="back-home-btn" onclick="showSection('vocabulary')">← Назад к словарю</button>
      <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showSection('vocabulary'); return false;">Словарь</a> <span>/ ${level}</span></div>
      <h1>Словарь — ${level === 'ALL' ? 'Все уровни' : level}</h1>
      <div class="locked" style="margin-top: 40px;">
        <p style="font-size: 24px; margin-bottom: 10px;">🎩 Отлично!</p>
        <p>Нет карточек для повторения на сегодня.</p>
        <button class="btn btn-secondary" style="margin-top: 20px;" onclick="showVocabCards('${level}')">Обновить</button>
      </div>
    `;
    window.scrollTo(0, 0);
    return;
  }

  renderFlashcard(level, dueWords, 0);
}

function renderFlashcard(level, dueWords, index) {
  if (index >= dueWords.length) {
    app.innerHTML = `
      <button class="back-home-btn" onclick="showSection('vocabulary')">← Назад к словарю</button>
      <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showSection('vocabulary'); return false;">Словарь</a> <span>/ ${level}</span></div>
      <h1>Словарь — ${level === 'ALL' ? 'Все уровни' : level}</h1>
      <div class="locked" style="margin-top: 40px; border-color: #2E7D5B; color: #2E7D5B;">
        <p style="font-size: 24px; margin-bottom: 10px;">🎉 Сессия завершена!</p>
        <p>Вы повторили ${dueWords.length} карточек.</p>
        <button class="btn btn-dark" style="margin-top: 20px;" onclick="showVocabCards('${level}')">Продолжить</button>
      </div>
    `;
    window.scrollTo(0, 0);
    return;
  }

  const word = dueWords[index];

  app.innerHTML = `
    <button class="back-home-btn" onclick="showSection('vocabulary')">← Назад к словарю</button>
    <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showSection('vocabulary'); return false;">Словарь</a> <span>/ ${level === 'ALL' ? 'Все уровни' : level}</span></div>
    
    <div class="flashcard-progress">
      Карточка ${index + 1} из ${dueWords.length}
    </div>

    <div class="flashcard-container" id="flashcard" onclick="flipCard()">
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <div class="flashcard-word">${word.english}</div>
          <div class="flashcard-hint">Нажмите, чтобы увидеть перевод</div>
        </div>
        <div class="flashcard-back">
          <div class="flashcard-word">${word.translation}</div>
          <div class="flashcard-hint">Нажмите, чтобы вернуться</div>
        </div>
      </div>
    </div>

    <div class="flashcard-controls" id="flashcardControls">
      <button class="btn btn-danger" onclick="handleVocabResponse('${word.id}', 0)">Забыл (1)</button>
      <button class="btn btn-warning" onclick="handleVocabResponse('${word.id}', 1)">Трудно (2)</button>
      <button class="btn btn-success" onclick="handleVocabResponse('${word.id}', 2)">Хорошо (3)</button>
      <button class="btn btn-primary" onclick="handleVocabResponse('${word.id}', 3)">Легко (4)</button>
    </div>
  `;
  window.scrollTo(0, 0);
  window.__currentFlashcard = { level, dueWords, index };
}

function flipCard() {
  const card = document.getElementById('flashcard');
  if (card) {
    card.classList.toggle('flipped');
  }
}

function handleVocabResponse(wordId, quality) {
  updateVocabCardState(wordId, quality);
  if (window.__currentFlashcard) {
    const { level, dueWords, index } = window.__currentFlashcard;
    renderFlashcard(level, dueWords, index + 1);
  }
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
      html += `<button class="card-btn" onclick="showLevel('${l}')">
                 <span class="card-title">${l}</span>
                 <span class="card-subtitle">${count} материалов</span>
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
  showHome();
}

function showSection(category) {
  highlightNav(category);
  toggleVocabNavVisibility(category !== 'vocabulary');
  saveLastRoute('section', [category]);
  const names = { theory: 'Теория', practice: 'Практика', vocabulary: 'Словарь' };
  const name = names[category] || 'Материалы';
  
  let html = `<button class="back-home-btn" onclick="showHome()">← На главную</button>
              <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a><span>/ ${name}</span></div>
              <div class="section-heading">
                <p class="eyebrow">ENGLISH LEARNING</p>
                <h1>${name}</h1>
                <p class="section-intro">${category === 'vocabulary' ? 'Выберите уровень для карточек или начните повторение всех слов.' : 'Выберите уровень, чтобы открыть нужные материалы.'}</p>
              </div>`;

  if (category === 'vocabulary') {
    const levels = getLevels().filter(level => articlesOf(level, category).length > 0);
    html += '<div class="grid">';
    
    if (levels.length > 0) {
      html += `<button class="card-btn" onclick="showVocabCards('ALL')">
                 <span class="card-icon">🧠</span>
                 <span class="card-title">Все слова</span>
                 <span class="card-subtitle">Интервальное повторение</span>
               </button>`;
    }

    levels.forEach(level => {
      const count = getAllVocab().filter(w => {
        const m = MATERIALS.find(x => x.id === w.materialId);
        return m && m.level === level;
      }).length;
      
      html += `<button class="card-btn" onclick="showVocabCards('${level}')">
                 <span class="card-icon">📖</span>
                 <span class="card-title">${level}</span>
                 <span class="card-subtitle">${count} слов</span>
               </button>`;
    });
    html += '</div>';
  } else {
    const levels = getLevels().filter(level => articlesOf(level, category).length > 0);
    html += '<div class="grid">';
    if (!levels.length) {
      html += `<div class="locked">Пока нет материалов в разделе «${name}».</div>`;
    } else {
      levels.forEach(level => {
        const count = articlesOf(level, category).length;
        html += `<button class="card-btn" onclick="showLevelTab('${level}','${category}')">
                   <span class="card-icon">${category === 'theory' ? '📚' : '✍️'}</span>
                   ${progressBadge(level, category)}
                   <span class="card-title">${level}</span>
                   <span class="card-subtitle">${count} ${count === 1 ? 'материал' : count >= 2 && count <= 4 ? 'материала' : 'материалов'}</span>
                 </button>`;
      });
    }
    html += '</div>';
  }

  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function showLevel(level) {
  highlightNav('');
  saveLastRoute('level', [level]);
  const isExamOrICPC = (level === 'EXAM' || level === 'ICPC');
  toggleVocabNavVisibility(!isExamOrICPC);

  const theory = articlesOf(level, 'theory');
  const practice = articlesOf(level, 'practice');
  const vocabCount = getAllVocab().filter(w => {
    const m = MATERIALS.find(x => x.id === w.materialId);
    return m && m.level === level;
  }).length;

  let html = `<button class="back-home-btn" onclick="showHome()">← На главную</button>
              <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> <span>/ ${level}</span></div>
              <h1>Раздел ${level}</h1>
              <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
                <button class="card-btn" onclick="showLevelTab('${level}','theory')">
                  ${progressBadge(level, 'theory')}
                  <span class="card-title">📚 Теория</span>
                  <span class="card-subtitle">${theory.length} материалов</span>
                </button>
                <button class="card-btn" onclick="showLevelTab('${level}','practice')">
                  ${progressBadge(level, 'practice')}
                  <span class="card-title">✍️ Практика</span>
                  <span class="card-subtitle">${practice.length} материалов</span>
                </button>`;

  if (!isExamOrICPC) {
    html += `<button class="card-btn" onclick="showVocabCards('${level}')">
                  <span class="card-title">📖 Лексика</span>
                  <span class="card-subtitle">${vocabCount} слов</span>
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
  const tabName = tab === 'theory' ? 'Теория' : tab === 'practice' ? 'Практика' : 'Лексика';

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

  let content = a.content;
  if (a.category === 'practice' && content.includes('[[')) {
    content = renderInteractive(content);
  }

  const catName = a.category === 'theory' ? 'Теория' : a.category === 'practice' ? 'Практика' : 'Лексика';
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

  const practiceButtons = a.category === 'practice'
    ? `<button class="btn btn-dark" onclick="checkAllInputs()">Проверить ответы</button>
       <button class="btn btn-secondary" onclick="showAllAnswers()">Показать ответы</button>
       <button class="btn btn-secondary" onclick="retryMistakes()">Повторить ошибки</button>
       <button class="btn btn-secondary" onclick="resetInputs()">Очистить</button>`
    : '';

  app.innerHTML = `
    <button class="back-home-btn" onclick="showLevelTab('${backLevel}', '${a.category}')">← Назад к списку</button>
    <div class="crumbs">
      <a href="#" onclick="showHome(); return false;">Главная</a> /
      <a href="#" onclick="showLevel('${backLevel}'); return false;">${backLevel}</a> <span>/ ${catName}</span>
    </div>
    <h1>${a.title} ${doneBadge}</h1>
    <div class="article-content">${content}</div>

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

function renderInteractive(html) {
  let counter = 0;
  const processed = html.replace(/\[\[(.*?)\]\]/g, (match, answer) => {
    counter++;
    const parts = answer.split('|').map(s => s.trim());
    const mainAnswer = parts[0];
    const altAnswers = parts.slice(1).join('|');
    const widthClass = mainAnswer.length > 15 ? 'quiz-input wide' : 'quiz-input';

    const hint = mainAnswer.length > 3
      ? `${mainAnswer.slice(0, 3)}… (${mainAnswer.length} симв.)`
      : (mainAnswer.length ? `${mainAnswer.slice(0, 1)}…` : '');

    return `<span class="quiz-wrap">
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
  const inputs = document.querySelectorAll('.quiz-input');
  if (!inputs.length) return;

  let correctCount = 0;

  inputs.forEach(input => {
    const userAnswer = input.value.trim();
    input.classList.remove('correct', 'incorrect', 'revealed');
    if (!userAnswer) return;

    const valid = getAllValidAnswers(input);
    if (isAnswerCorrect(userAnswer, valid)) {
      input.classList.add('correct');
      correctCount++;
    } else {
      input.classList.add('incorrect');
    }
  });

  if (window.__currentArticle) {
    saveArticleResult(window.__currentArticle, correctCount, inputs.length);
  }

  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.style.display = 'block';
    const pct = inputs.length ? Math.round(correctCount / inputs.length * 100) : 0;
    let message;
    if (correctCount === inputs.length) message = '<span class="score-perfect">🎩 Блестяще! Все ответы верны.</span>';
    else if (pct >= 70) message = '<span class="score-good">Хороший результат — почти всё верно.</span>';
    else if (pct >= 40) message = '<span class="score-ok">Неплохо, но есть над чем поработать.</span>';
    else message = '<span class="score-low">Стоит повторить материал и попробовать снова.</span>';

    scoreDisplay.innerHTML = `
      <div class="score-line">Ваш результат: <b>${correctCount} из ${inputs.length}</b> <span class="score-pct">(${pct}%)</span></div>
      <div class="score-message">${message}</div>
    `;
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
  const inputs = document.querySelectorAll('.quiz-input');
  inputs.forEach(input => {
    const valid = getAllValidAnswers(input);
    const main = valid[0] || '';
    input.classList.remove('correct', 'incorrect');
    input.classList.add('revealed');
    input.value = main;

    const wrap = input.parentElement;
    if (wrap && !wrap.querySelector('.revealed-label')) {
      const label = document.createElement('span');
      label.className = 'revealed-label';
      label.textContent = 'ответ';
      wrap.appendChild(label);
    }
  });

  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.style.display = 'block';
    scoreDisplay.innerHTML = '<div class="score-line">Ответы показаны. Попробуйте пройти снова без подсказок.</div>';
  }
}

function retryMistakes() {
  const inputs = document.querySelectorAll('.quiz-input');
  let mistakeCount = 0;

  inputs.forEach(input => {
    if (input.classList.contains('incorrect')) {
      input.value = '';
      input.classList.remove('incorrect', 'correct', 'revealed');
      input.classList.add('retry');
      const wrap = input.parentElement;
      if (wrap) {
        const label = wrap.querySelector('.revealed-label');
        if (label) label.remove();
      }
      mistakeCount++;
    }
  });

  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.style.display = 'block';
    if (mistakeCount === 0) {
      scoreDisplay.innerHTML = '<div class="score-line">Ошибок нет — нечего повторять. 🎩</div>';
    } else {
      scoreDisplay.innerHTML = `<div class="score-line">Оставлено для повтора: <b>${mistakeCount}</b> ${pluralize(mistakeCount, 'поле', 'поля', 'полей')}.</div>`;
    }
  }

  const firstRetry = document.querySelector('.quiz-input.retry');
  if (firstRetry) {
    firstRetry.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstRetry.focus();
  }
}

function resetInputs() {
  const inputs = document.querySelectorAll('.quiz-input');
  inputs.forEach(input => {
    input.value = '';
    input.classList.remove('correct', 'incorrect', 'revealed', 'retry');
    const wrap = input.parentElement;
    if (wrap) {
      const label = wrap.querySelector('.revealed-label');
      if (label) label.remove();
      const hint = wrap.querySelector('.hint-text');
      if (hint) hint.remove();
    }
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
      case 'vocabCards': return showVocabCards(route.args[0]);
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
  restoreLastRoute();
});
