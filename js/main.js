(function () {
  "use strict";

  let currentLang = "fr";
  let currentFilter = "all";

  const featuredWrap = document.getElementById("featured-projects");
  const compactWrap = document.getElementById("compact-projects");
  const emptyMsg = document.getElementById("filter-empty");
  const top10Wrap = document.getElementById("top10-grid");
  const lightbox = document.getElementById("top10-lightbox");
  const lightboxImg = document.getElementById("top10-lightbox-img");
  const lightboxClose = document.getElementById("top10-lightbox-close");
  let lightboxTrigger = null;

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
    renderTop10();
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

  /* ---------- Top 10 Power BI ---------- */
  function buildTop10Card(entry, index) {
    const p = PROJECTS.find(function (item) { return item.id === entry.id; });
    if (!p) return null;

    const rank = index + 1;
    const isTop3 = rank <= 3;

    const card = document.createElement("article");
    card.className = "top10-card" + (isTop3 ? " top10-card-top3" : "");

    const metricsHtml = (p.metrics || [])
      .map(function (m) { return '<li class="top10-metric">' + m[currentLang] + "</li>"; })
      .join("");

    const noteHtml = p.dataNote
      ? '<p class="top10-note">' + p.dataNote[currentLang] + "</p>"
      : "";

    const altText = (p.imageAlt && p.imageAlt[currentLang]) || p.title;

    card.innerHTML =
      '<div class="top10-card-media">' +
        (isTop3 ? '<span class="top10-badge-top3">' + t("top10_badge_top") + "</span>" : "") +
        '<span class="top10-rank" aria-hidden="true">' + String(rank).padStart(2, "0") + "</span>" +
        '<button type="button" class="top10-img-btn" data-img="' + p.image + '" data-alt="' + altText.replace(/"/g, "&quot;") + '" aria-label="' + t("top10_lightbox_open") + " — " + p.title + '">' +
          '<img src="' + p.image + '" alt="' + altText.replace(/"/g, "&quot;") + '" loading="lazy" width="640" height="360">' +
        "</button>" +
      "</div>" +
      '<div class="top10-card-body">' +
        '<div class="top10-card-head">' +
          '<h3 class="top10-card-title">' + p.title + "</h3>" +
          '<span class="badge ' + p.badgeClass + '">' + p.tool + "</span>" +
        "</div>" +
        '<p class="top10-card-sector">' + p.sector[currentLang] + "</p>" +
        '<p class="top10-card-desc">' + entry.justification[currentLang] + "</p>" +
        '<ul class="top10-metrics">' + metricsHtml + "</ul>" +
        noteHtml +
        '<div class="top10-card-actions">' +
          '<a class="top10-cta" href="' + p.link + '" target="_blank" rel="noopener noreferrer">' + t("top10_cta_report") + "</a>" +
        "</div>" +
      "</div>";

    return card;
  }

  function renderTop10() {
    if (!top10Wrap) return;
    top10Wrap.innerHTML = "";
    TOP10_POWERBI.forEach(function (entry, i) {
      const card = buildTop10Card(entry, i);
      if (card) top10Wrap.appendChild(card);
    });
  }

  function openLightbox(src, alt, trigger) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    lightboxTrigger = trigger || null;
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.classList.remove("lightbox-open");
    if (lightboxTrigger) lightboxTrigger.focus();
  }

  if (top10Wrap && lightbox) {
    top10Wrap.addEventListener("click", function (e) {
      const btn = e.target.closest(".top10-img-btn");
      if (!btn) return;
      openLightbox(btn.dataset.img, btn.dataset.alt, btn);
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
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
  renderTop10();
})();
