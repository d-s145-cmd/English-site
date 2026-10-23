const app = document.getElementById('app');

const LEVELS = ['A2', 'B1', 'B2', 'C1', 'ICPC'];


function getLevels() {
  if (typeof MATERIALS === 'undefined') return [];
  const set = new Set(MATERIALS.map(m => m.level));
  return LEVELS.filter(l => set.has(l));
}

function articlesOf(level, category) {
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
      const count = MATERIALS.filter(m => m.level === l).length;
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

  let html = `<div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / ${level}</div>
              <h1>Раздел ${level}</h1>
              <div class="grid">
                <div class="card" onclick="showLevelTab('${level}','theory')">
                  <h3>📚 Теория</h3>
                  <p>${theory.length} материалов</p>
                </div>
                <div class="card" onclick="showLevelTab('${level}','practice')">
                  <h3>✍️ Практика</h3>
                  <p>${practice.length} материалов</p>
                </div>
              </div>`;
  app.innerHTML = html;
}

function showLevelTab(level, tab) {
  const items = articlesOf(level, tab);
  let html = `<div class="crumbs"><a href="#" onclick="showHome(); return false;">Главная</a> / <a href="#" onclick="showLevel('${level}'); return false;">${level}</a> / ${tab === 'theory' ? 'Теория' : 'Практика'}</div>
              <h1>${level} — ${tab === 'theory' ? 'Теория' : 'Практика'}</h1>`;
  
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
  
  app.innerHTML = `
    <div class="crumbs">
      <a href="#" onclick="showHome(); return false;">Главная</a> /
      <a href="#" onclick="showLevel('${a.level}'); return false;">${a.level}</a> /
      ${a.category === 'theory' ? 'Теория' : 'Практика'}
    </div>
    <h1>${a.title}</h1>
    <div class="article-content">${a.content}</div>
    <div style="margin-top: 30px;">
        <button class="btn" onclick="showLevel('${a.level}')">← Назад в раздел</button>
    </div>
  `;
  window.scrollTo(0, 0);
}


document.addEventListener("DOMContentLoaded", showHome);
