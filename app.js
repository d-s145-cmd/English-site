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


function showHome() {
  if (typeof MATERIALS === 'undefined') {
    app.innerHTML = '<p style="color:red">Ошибка: файл data.js не загружен.</p>';
    return;
  }
  const levels = getLevels();
  let html = '<h1>Выберите уровень</h1><div class="grid">';
  if (!levels.length) {
    html += '<p>В <code>data.js</code> пока нет материалов.</p>';
  } else {
    levels.forEach(l => {
      let count = 0;
      if (l === 'C1–C2') {
        count = MATERIALS.filter(m => m.level === 'C1' || m.level === 'C2').length;
      } else {
        count = MATERIALS.filter(m => m.level === l).length;
      }
      html += `<div class="card" onclick="showLevel('${l}')">
                 <h3>${l}</h3>
                 <div class="muted">${count} материалов</div>
               </div>`;
    });
  }
  html += '</div>';
  app.innerHTML = html;
}


function showLevel(level) {
  const theory = articlesOf(level, 'theory');
  const practice = articlesOf(level, 'practice');
  const vocab = articlesOf(level, 'vocabulary');

  let html = `<div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / ${level}</div>
              <h1>Раздел ${level}</h1>
              <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
                <div class="card" onclick="showLevelTab('${level}','theory')">
                  <h3>📚 Теория</h3>
                  <p>${theory.length} материалов</p>
                </div>
                <div class="card" onclick="showLevelTab('${level}','practice')">
                  <h3>✍️ Практика</h3>
                  <p>${practice.length} материалов</p>
                </div>`;
  
  if (level !== 'ICPC') {
    html += `<div class="card" onclick="showLevelTab('${level}','vocabulary')">
                  <h3>📖 Лексика</h3>
                  <p>${vocab.length} материалов</p>
                </div>`;
  }

  html += `</div>`;
  app.innerHTML = html;
}

function showLevelTab(level, tab) {
  const items = articlesOf(level, tab);
  let tabName = '';
  if (tab === 'theory') tabName = 'Теория';
  else if (tab === 'practice') tabName = 'Практика';
  else if (tab === 'vocabulary') tabName = 'Лексика';

  let html = `<div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showLevel('${level}'); return false;">${level}</a> / ${tabName}</div>
              <h1>${level} — ${tabName}</h1>`;
  
  if (!items.length) {
    html += `<div class="locked">Пока нет материалов в этой категории.</div>`;
  } else {
    html += '<ul class="article-list">';
    items.forEach(a => {
      html += `<li><a href="#" onclick="showArticle(${a.id}); return false;">${a.title}</a></li>`;
    });
    html += '</ul>';
  }
  app.innerHTML = html;
}


function showArticle(id) {
  const a = MATERIALS.find(m => m.id === id);
  if (!a) { app.innerHTML = '<p>Материал не найден.</p>'; return; }
  
  let content = a.content;

  if (a.category === 'practice' && content.includes('[[')) {
    content = renderInteractive(content);
  }

  let catName = '';
  if (a.category === 'theory') catName = 'Теория';
  else if (a.category === 'practice') catName = 'Практика';
  else if (a.category === 'vocabulary') catName = 'Лексика';

  let backLevel = a.level;
  if (a.level === 'C1' || a.level === 'C2') backLevel = 'C1–C2';

  app.innerHTML = `
    <div class="crumbs">
      <a href="#" onclick="showHome(); return false;">Главная</a> /
      <a href="#" onclick="showLevel('${backLevel}'); return false;">${backLevel}</a> /
      ${catName}
    </div>
    <h1>${a.title}</h1>
    <div class="article-content">${content}</div>
    <div style="margin-top: 30px;">
        <button class="btn" onclick="showLevel('${backLevel}')">← Назад в раздел</button>
        ${a.category === 'practice' ? '<button class="btn" onclick="checkAllInputs()" style="background:#27ae60; margin-left:10px;">Проверить все ответы</button>' : ''}
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
