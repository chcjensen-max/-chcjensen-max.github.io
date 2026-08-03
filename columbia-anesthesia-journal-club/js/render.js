/* Rendering helpers shared by cardiac.html and icu.html.
   These read plain-data objects (see /data/*.js) and turn them into DOM. */

function esc(str) {
  const d = document.createElement("div");
  d.textContent = str == null ? "" : String(str);
  return d.innerHTML;
}

function linkList(items, cls) {
  if (!items || !items.length) return "";
  return `<ul class="article-list ${cls || ""}">${items
    .map((a) => `<li><a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.title)}</a></li>`)
    .join("")}</ul>`;
}

/* ---- ICU-style session timeline ---- */
function renderSessions(sessions) {
  return sessions
    .map((s) => {
      const parts = [];
      parts.push(`<div class="session" data-num="${esc(s.number)}">`);
      parts.push(`<h3>Session ${esc(s.number)}: ${esc(s.title)}</h3>`);
      const metaBits = [s.date, s.moderator ? `Moderator: ${s.moderator}` : null].filter(Boolean);
      parts.push(`<div class="session-meta">${metaBits.map(esc).join(" &middot; ")}</div>`);
      if (s.note) parts.push(`<p class="session-note">${s.note}</p>`);
      if (s.ebm && s.ebm.length) {
        parts.push(`<div class="block-label">EBM Papers</div>`);
        parts.push(linkList(s.ebm, ""));
      }
      if (s.deepDive && s.deepDive.length) {
        parts.push(`<div class="block-label deep">Deep Dive</div>`);
        parts.push(linkList(s.deepDive, "deep"));
      }
      parts.push(`</div>`);
      return parts.join("");
    })
    .join("");
}

/* ---- Cardiac-style paper cards ---- */
function renderPapers(papers) {
  return papers
    .map((p) => {
      const fields = [];
      if (p.question) fields.push(`<dt>Clinical Question</dt><dd>${p.question}</dd>`);
      if (p.methods) fields.push(`<dt>Methods + Results</dt><dd>${p.methods}</dd>`);
      if (p.takeaway) fields.push(`<dt>Take Away</dt><dd>${p.takeaway}</dd>`);
      return `
        <div class="paper-card">
          <h3><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)}</a></h3>
          ${fields.length ? `<dl>${fields.join("")}</dl>` : ""}
        </div>`;
    })
    .join("");
}

/* ---- High-impact repository (categorized link lists) ---- */
function renderRepository(categories) {
  return categories
    .map((cat) => {
      const groups = cat.groups
        ? cat.groups
            .map(
              (g) => `
              ${g.label ? `<div class="subgroup-label">${esc(g.label)}</div>` : ""}
              <ul>${g.articles.map((a) => `<li><a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.title)}</a></li>`).join("")}</ul>`
            )
            .join("")
        : `<ul>${(cat.articles || [])
            .map((a) => `<li><a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.title)}</a></li>`)
            .join("")}</ul>`;
      return `<div class="repo-category"><h3>${esc(cat.name)}</h3>${groups}</div>`;
    })
    .join("");
}

/* ---- Tab bar wiring for year switcher ---- */
function initYearTabs(rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;
  const buttons = root.querySelectorAll(".tabbar button");
  const panels = root.querySelectorAll(".year-panel");

  function activate(id, pushHash) {
    buttons.forEach((b) => b.classList.toggle("active", b.dataset.target === id));
    panels.forEach((p) => p.classList.toggle("active", p.id === id));
    if (pushHash) history.replaceState(null, "", "#" + id);
  }

  buttons.forEach((b) => {
    b.addEventListener("click", () => activate(b.dataset.target, true));
  });

  const initial = (location.hash || "").replace("#", "");
  if (initial && root.querySelector("#" + CSS.escape(initial))) {
    activate(initial, false);
  } else if (buttons.length) {
    activate(buttons[0].dataset.target, false);
  }
}
