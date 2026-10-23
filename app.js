const app = document.getElementById('app');
const side = document.getElementById('side');
const nav = document.getElementById('mainNav');

const LEVELS = ['A2', 'B1', 'B2', 'C1', 'ICPC'];

// ====== ВСПОМОГАТЕЛЬНОЕ ======
function getLevels() {
  const set = new Set(MATERIALS.map(m => m.level));
  return LEVELS.filter(l => set.has(l));
}
function articlesOf(level, category) {
  return MATERIALS.filter(m => m.level === level && m.category === category);
}

// ====== ГЛАВНАЯ ======
function showHome() {
  nav.innerHTML = '';
  side.innerHTML = '';
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

// ====== СТРАНИЦА УРОВНЯ ======
function showLevel(level) {
  nav.innerHTML = '';
  const theory = articlesOf(level, 'theory');
  const practice = articlesOf(level, 'practice');

  side.innerHTML = `<h4>${level}</h4>`;
  const buildLink = (a) => {
    const el = document.createElement('a');
    el.textContent = a.title;
    el.onclick = () => showArticle(a.id);
    side.appendChild(el);
  };
  if (theory.length) {
    const h = document.createElement('h4');
    h.textContent = 'Теория';
    side.appendChild(h);
    theory.forEach(buildLink);
  }
  if (practice.length) {
    const h = document.createElement('h4');
    h.textContent = 'Практика';
    side.appendChild(h);
    practice.forEach(buildLink);
  }

  let html = `<div class="crumbs"><a onclick="showHome()">Главная</a> / ${level}</div>
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
  let html = `<div class="crumbs"><a onclick="showHome()">Главная</a> / <a onclick="showLevel('${level}')">${level}</a> / ${tab === 'theory' ? 'Теория' : 'Практика'}</div>
              <h1>${level} — ${tab === 'theory' ? 'Теория' : 'Практика'}</h1>`;
  if (!items.length) {
    html += `<div class="locked">Пока нет материалов в этой категории. Добавьте их в <code>data.js</code>.</div>`;
  } else {
    html += '<ul>';
    items.forEach(a => {
      html += `<li><a href="#" onclick="showArticle(${a.id}); return false;">${a.title}</a></li>`;
    });
    html += '</ul>';
  }
  app.innerHTML = html;
}

// ====== СТРАНИЦА СТАТЬИ ======
function showArticle(id) {
  const a = MATERIALS.find(m => m.id === id);
  if (!a) { app.innerHTML = '<p>Материал не найден.</p>'; return; }
  app.innerHTML = `
    <div class="crumbs">
      <a onclick="showHome()">Главная</a> /
      <a onclick="showLevel('${a.level}')">${a.level}</a> /
      ${a.category === 'theory' ? 'Теория' : 'Практика'}
    </div>
    <h1>${a.title}</h1>
    <div class="article-content">${a.content}</div>
  `;
  window.scrollTo(0, 0);
}

// ====== СТАРТ ======
showHome();