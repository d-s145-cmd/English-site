const app = document.getElementById('app');
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1–C2', 'ICPC'];

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
    if (btn.dataset.section === section) {
      btn.classList.add('active');
    }
  });
}

function showHome() {
  highlightNav('home');
  const levels = getLevels();
  let html = '<h1>Выберите уровень</h1><div class="grid">';
  
  if (!levels.length) {
    html += '<p>В <code>data.js</code> пока нет материалов.</p>';
  } else {
    levels.forEach(l => {
      let count = MATERIALS.filter(m => m.level === l || (l === 'C1–C2' && (m.level === 'C1' || m.level === 'C2'))).length;
      html += `<button class="card-btn" onclick="showLevel('${l}')">
                 <span class="card-title">${l}</span>
                 <span class="card-subtitle">${count} материалов</span>
               </button>`;
    });
  }
  html += '</div>';
  app.innerHTML = html;
}

function showSection(category) {
  highlightNav(category);
  const names = { theory: 'Теория', practice: 'Практика', vocabulary: 'Словарь' };
  const name = names[category] || 'Материалы';
  const levels = getLevels().filter(level => articlesOf(level, category).length > 0);

  let html = `<button class="back-home-btn" onclick="showHome()">← На главную</button>
              <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a><span>/ ${name}</span></div>
              <div class="section-heading">
                <p class="eyebrow">ENGLISH LEARNING</p>
                <h1>${name}</h1>
                <p class="section-intro">Выберите уровень, чтобы открыть нужные материалы.</p>
              </div>
              <div class="grid">`;

  if (!levels.length) {
    html += `<div class="locked">Пока нет материалов в разделе «${name}».</div>`;
  } else {
    levels.forEach(level => {
      const count = articlesOf(level, category).length;
      html += `<button class="card-btn" onclick="showLevelTab('${level}','${category}')">
                 <span class="card-icon">${category === 'theory' ? '📚' : category === 'practice' ? '✍️' : '📖'}</span>
                 <span class="card-title">${level}</span>
                 <span class="card-subtitle">${count} ${count === 1 ? 'материал' : count >= 2 && count <= 4 ? 'материала' : 'материалов'}</span>
               </button>`;
    });
  }
  html += '</div>';
  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function showLevel(level) {
  highlightNav('');
  const theory = articlesOf(level, 'theory');
  const practice = articlesOf(level, 'practice');
  const vocab = articlesOf(level, 'vocabulary');

  let html = `<button class="back-home-btn" onclick="showHome()">← На главную</button>
              <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> <span>/ ${level}</span></div>
              <h1>Раздел ${level}</h1>
              <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
                <button class="card-btn" onclick="showLevelTab('${level}','theory')">
                  <span class="card-title">📚 Теория</span>
                  <span class="card-subtitle">${theory.length} материалов</span>
                </button>
                <button class="card-btn" onclick="showLevelTab('${level}','practice')">
                  <span class="card-title">✍️ Практика</span>
                  <span class="card-subtitle">${practice.length} материалов</span>
                </button>`;
  
  if (level !== 'ICPC') {
    html += `<button class="card-btn" onclick="showLevelTab('${level}','vocabulary')">
                  <span class="card-title">📖 Лексика</span>
                  <span class="card-subtitle">${vocab.length} материалов</span>
                </button>`;
  }
  html += `</div>`;
  app.innerHTML = html;
  window.scrollTo(0, 0);
}

function showLevelTab(level, tab) {
  highlightNav(tab);
  const items = articlesOf(level, tab);
  let tabName = tab === 'theory' ? 'Теория' : tab === 'practice' ? 'Практика' : 'Лексика';

  let html = `<button class="back-home-btn" onclick="showLevel('${level}')">← Назад в раздел ${level}</button>
              <div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showLevel('${level}'); return false;">${level}</a> <span>/ ${tabName}</span></div>
              <h1>${level} — ${tabName}</h1>`;
  
  if (!items.length) {
    html += `<div class="locked">Пока нет материалов в этой категории.</div>`;
  } else {
    html += '<div class="button-list">';
    items.forEach(a => {
      html += `<button class="list-btn" onclick="showArticle(${a.id})">${a.title}</button>`;
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

  const items = articlesOf(a.level, a.category);
  const currentIndex = items.findIndex(item => item.id === a.id);
  
  const prevArticle = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextArticle = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  let content = a.content;
  if (a.category === 'practice' && content.includes('[[')) {
    content = renderInteractive(content);
  }

  let catName = a.category === 'theory' ? 'Теория' : a.category === 'practice' ? 'Практика' : 'Лексика';
  let backLevel = (a.level === 'C1' || a.level === 'C2') ? 'C1–C2' : a.level;

  let navHtml = '<div class="article-nav">';
  if (prevArticle) {
    navHtml += `<button class="btn btn-secondary" onclick="showArticle(${prevArticle.id})">← ${prevArticle.title}</button>`;
  } else {
    navHtml += `<span></span>`; // Пустой блок для выравнивания
  }

  if (nextArticle) {
    navHtml += `<button class="btn btn-secondary" onclick="showArticle(${nextArticle.id})">${nextArticle.title} →</button>`;
  } else {
    navHtml += `<span></span>`;
  }
  navHtml += '</div>';

  app.innerHTML = `
    <button class="back-home-btn" onclick="showLevelTab('${backLevel}', '${a.category}')">← Назад к списку</button>
    <div class="crumbs">
      <a href="#" onclick="showHome(); return false;">Главная</a> /
      <a href="#" onclick="showLevel('${backLevel}'); return false;">${backLevel}</a> <span>/ ${catName}</span>
    </div>
    <h1>${a.title}</h1>
    <div class="article-content">${content}</div>
    
    <div class="article-footer">
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="btn btn-secondary" onclick="showLevelTab('${backLevel}', '${a.category}')">← К списку тем</button>
            ${a.category === 'practice' ? '<button class="btn btn-dark" onclick="checkAllInputs()">Проверить ответы</button>' : ''}
        </div>
        ${navHtml}
    </div>
  `;
  window.scrollTo(0, 0);
}

function renderInteractive(html) {
  let counter = 0;
  let processed = html.replace(/\[\[(.*?)\]\]/g, (match, answer) => {
    counter++;
    let parts = answer.split('|').map(s => s.trim());
    let mainAnswer = parts[0];
    let altAnswers = parts.slice(1).join('|');
    let widthClass = mainAnswer.length > 15 ? 'quiz-input wide' : 'quiz-input';
    return `<input type="text" class="${widthClass}" id="input-${counter}" data-answer="${mainAnswer}" data-alt="${altAnswers}" placeholder="..." autocomplete="off">`;
  });
  return processed + `<div id="score-display" style="display:none; margin-top:20px; padding:15px; background:#e8f4fd; border-radius:8px; font-size:18px; color:#2980b9;"></div>`;
}

function checkAllInputs() {
  const inputs = document.querySelectorAll('.quiz-input');
  let correctCount = 0;
  
  inputs.forEach(input => {
    let userAnswer = input.value.trim().toLowerCase().replace(/\.$/, '');
    let validAnswers = [input.dataset.answer.trim().toLowerCase()];
    if (input.dataset.alt) {
      validAnswers = validAnswers.concat(input.dataset.alt.split('|').map(s => s.trim().toLowerCase()));
    }
    input.classList.remove('correct', 'incorrect');
    if (validAnswers.includes(userAnswer)) {
      input.classList.add('correct');
      correctCount++;
    } else if (userAnswer !== "") {
      input.classList.add('incorrect');
    }
  });

  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.style.display = 'block';
    scoreDisplay.innerHTML = `Ваш результат: <b>${correctCount} из ${inputs.length}</b>`;
  }
}

document.addEventListener("DOMContentLoaded", showHome);
