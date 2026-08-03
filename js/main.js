(function () {
  "use strict";

  let currentLang = "fr";
  let currentFilter = "all";

  const featuredWrap = document.getElementById("featured-projects");
  const compactWrap = document.getElementById("compact-projects");
  const emptyMsg = document.getElementById("filter-empty");

  /* ---------- i18n ---------- */
  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const entry = TRANSLATIONS[key];
      if (entry && entry[lang]) el.textContent = entry[lang];
    });
    document.documentElement.lang = lang;
  }

  function setLang(lang) {
    currentLang = lang;
    applyTranslations(lang);
    renderProjects();
    const toggle = document.getElementById("lang-toggle");
    toggle.querySelector(".lang-fr").classList.toggle("is-active", lang === "fr");
    toggle.querySelector(".lang-en").classList.toggle("is-active", lang === "en");
  }

  document.getElementById("lang-toggle").addEventListener("click", function () {
    setLang(currentLang === "fr" ? "en" : "fr");
  });

  /* ---------- Projects rendering ---------- */
  function t(key) {
    return (TRANSLATIONS[key] && TRANSLATIONS[key][currentLang]) || "";
  }

  function buildFeaturedCard(p, index) {
    const article = document.createElement("article");
    article.className = "proj-card";
    article.dataset.tool = p.tool;

    article.innerHTML =
      '<div class="proj-card-head">' +
        '<div>' +
          '<span class="proj-index">0' + (index + 1) + "</span>" +
          '<h3 class="proj-title">' + p.title + "</h3>" +
          '<span class="proj-sector">' + p.sector[currentLang] + "</span>" +
        "</div>" +
        '<span class="badge ' + p.badgeClass + '">' + p.tool + "</span>" +
      "</div>" +
      '<div class="proj-field">' +
        '<span class="proj-field-label">' + t("label_problem") + '</span>' +
        '<span class="proj-field-value">' + p.problem[currentLang] + "</span>" +
      "</div>" +
      '<div class="proj-field">' +
        '<span class="proj-field-label">' + t("label_approach") + '</span>' +
        '<span class="proj-field-value">' + p.approach[currentLang] + "</span>" +
      "</div>" +
      '<div class="proj-field proj-result">' +
        '<span class="proj-field-label">' + t("label_result") + '</span>' +
        '<span class="proj-field-value">' + p.result[currentLang] + "</span>" +
      "</div>" +
      '<a class="proj-link" href="' + p.link + '" target="_blank" rel="noopener noreferrer">' + t("cta_view_dashboard") + "</a>";

    return article;
  }

  function buildCompactRow(p, index) {
    const row = document.createElement("div");
    row.className = "compact-item";
    row.dataset.tool = p.tool;

    row.innerHTML =
      '<span class="compact-index">' + String(index + 1).padStart(2, "0") + "</span>" +
      '<div class="compact-main">' +
        '<div class="compact-title">' + p.title + "</div>" +
        '<div class="compact-sector">' + p.sector[currentLang] + "</div>" +
      "</div>" +
      '<span class="badge ' + p.badgeClass + '">' + p.tool + "</span>" +
      '<span class="compact-result">' + p.result[currentLang] + "</span>" +
      '<a class="compact-cta" href="' + p.link + '" target="_blank" rel="noopener noreferrer">' + t("cta_view_dashboard") + "</a>";

    return row;
  }

  function renderProjects() {
    const featured = PROJECTS.filter(function (p) { return p.featured; });
    const compact = PROJECTS.filter(function (p) { return !p.featured; });

    featuredWrap.innerHTML = "";
    featured.forEach(function (p, i) {
      const card = buildFeaturedCard(p, i);
      if (currentFilter !== "all" && p.tool !== currentFilter) card.hidden = true;
      featuredWrap.appendChild(card);
    });

    compactWrap.innerHTML = "";
    compact.forEach(function (p, i) {
      const row = buildCompactRow(p, i);
      if (currentFilter !== "all" && p.tool !== currentFilter) row.hidden = true;
      compactWrap.appendChild(row);
    });

    const visibleCount = PROJECTS.filter(function (p) {
      return currentFilter === "all" || p.tool === currentFilter;
    }).length;
    emptyMsg.hidden = visibleCount !== 0;
  }

  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentFilter = btn.dataset.filter;
      document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      renderProjects();
    });
  });

  /* ---------- KPI count-up ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    if (reduceMotion || isNaN(target)) {
      el.textContent = target;
      return;
    }
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const kpiStrip = document.getElementById("kpi-strip");
  if (kpiStrip) {
    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          kpiStrip.querySelectorAll(".kpi-value").forEach(animateCount);
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 });
    observer.observe(kpiStrip);
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Init ---------- */
  renderProjects();
})();
