/* Shared site header + footer.
   Renders into <div id="site-header"></div> and <div id="site-footer"></div>
   that must exist on every page. The active page is set via
   <body data-page="icu"> (values: home, cardiac, icu, didactics, fulltext, about) */

(function () {
  const PULSE_SVG = `
    <svg class="pulse-rule" viewBox="0 0 600 20" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 10 H230 L242 10 L250 2 L258 18 L266 10 L276 10 L284 4 L292 10 H600" />
    </svg>`;

  function headerHTML(active) {
    const item = (key, href, label) =>
      `<div class="nav-item ${active === key ? "active" : ""}"><a href="${href}">${label}</a></div>`;

    const dropdown = (key, label, highImpactHref, years) => `
      <div class="nav-item ${active === key ? "active" : ""}">
        <button type="button" aria-haspopup="true">${label} ▾</button>
        <div class="dropdown">
          <a href="${highImpactHref}">High Impact Articles</a>
          ${years.map((y) => `<a href="${y.href}">${y.label}</a>`).join("")}
        </div>
      </div>`;

    return `
      <div class="masthead">
        <a class="brand" href="index.html">
          Critical Care &amp; Cardiac Anesthesia Journal Club
          <small>Columbia University · Dept. of Anesthesiology</small>
        </a>
        <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="primaryNav">☰ Menu</button>
        <a class="gh-link" href="https://github.com/amittel4/" target="_blank" rel="noopener">github.com/amittel4</a>
      </div>
      ${PULSE_SVG}
      <nav class="primary-nav" id="primaryNav">
        ${item("home", "index.html", "Home")}
        ${dropdown("cardiac", "Cardiac", "cardiac.html#high-impact", [
          { href: "cardiac.html#2025-2026", label: "2025–2026" },
          { href: "cardiac.html#2024-2025", label: "2024–2025" },
          { href: "cardiac.html#2023-2024", label: "2023–2024" },
          { href: "cardiac.html#2022-2023", label: "2022–2023" },
          { href: "cardiac.html#2021-2022", label: "2021–2022" },
        ])}
        ${dropdown("icu", "ICU", "icu.html#high-impact", [
          { href: "icu.html#2025-2026", label: "2025–2026" },
          { href: "icu.html#2024-2025", label: "2024–2025" },
          { href: "icu.html#2023-2024", label: "2023–2024" },
          { href: "icu.html#2022-2023", label: "2022–2023" },
        ])}
        ${item("didactics", "didactics.html", "Periop Didactics")}
        ${item("fulltext", "full-text.html", "Full Text Instructions")}
        ${item("about", "about.html", "About")}
      </nav>
    `;
  }

  const footerHTML = `
    Anesthesia Journal Club &middot; Columbia University Irving Medical Center &middot;
    Educational use only, not medical advice &middot;
    <a href="about.html">About</a> &middot;
    <a href="https://github.com/amittel4/" target="_blank" rel="noopener">GitHub</a>
  `;

  function mount() {
    const headerEl = document.getElementById("site-header");
    const footerEl = document.getElementById("site-footer");
    const active = document.body.getAttribute("data-page") || "";
    if (headerEl) {
      headerEl.innerHTML = headerHTML(active);
      const toggle = document.getElementById("navToggle");
      const nav = document.getElementById("primaryNav");
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      // mobile: tap a dropdown label to expand its sublist
      nav.querySelectorAll(".nav-item > button").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (window.innerWidth > 760) return;
          btn.parentElement.classList.toggle("open");
        });
      });
    }
    if (footerEl) footerEl.innerHTML = footerHTML;
  }

  document.addEventListener("DOMContentLoaded", mount);
})();
