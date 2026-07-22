/* ============================================================
   SPS Theology — reader.js
   Section rendering and prev/next navigation.
   ============================================================ */

window.SPS = window.SPS || {};

SPS.reader = (function () {

  function renderSection(bookId, sectionId) {
    const book = SPS.books.get(bookId);
    if (!book) {
      _renderEmpty('Book not found: ' + bookId);
      return;
    }
    const lang = SPS.app.getState().lang;
    const meta = SPS.books.meta(book, lang);
    const sections = SPS.books.sectionsFor(book, lang);
    const div = meta.divisions.find(d => d.id === sectionId);

    if (!div) {
      _renderEmpty('Section not found: ' + sectionId);
      return;
    }

    const paragraphs = sections[sectionId];
    const idx = meta.divisions.findIndex(d => d.id === sectionId);
    const prev = idx > 0 ? meta.divisions[idx - 1] : null;
    const next = idx < meta.divisions.length - 1 ? meta.divisions[idx + 1] : null;

    const main = document.getElementById('main');
    main.innerHTML = `
      <header class="section-header">
        <div class="section-eyebrow">
          <span>${meta.title}</span>
          <span class="section-eyebrow-sep">·</span>
          <span>${div.label}</span>
          <span class="section-eyebrow-sep">·</span>
          <span>${div.range}</span>
        </div>
        <h1 class="section-title">${div.title}</h1>
        ${div.subtitle ? `<div class="section-sub">${div.subtitle}</div>` : ''}
      </header>

      <div class="section-body" id="section-body">
        ${_renderParagraphs(paragraphs, sectionId)}
      </div>

      ${_renderPrevNext(meta, prev, next, div)}

      ${_renderCommentaries(book, sectionId, lang)}
    `;

    _attachListeners();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function _renderEmpty(msg) {
    document.getElementById('main').innerHTML =
      `<div class="section-header"><div class="section-sub">${msg}</div></div>`;
  }

  function _renderParagraphs(paras, sectionId) {
    if (!paras || !paras.length) {
      return '<p class="passage"><em>This section is not yet available.</em></p>';
    }
    return paras.map((html, i) => {
      // Allow special markers inserted as objects
      if (typeof html === 'object') {
        if (html.type === 'divider') return '<div class="divider">✻ ✻ ✻</div>';
        if (html.type === 'chapter') return `<div class="chap-mark">${html.label}</div>`;
        return '';
      }
      return `<p class="passage"><span class="passage-marker" aria-hidden="true">${i + 1}</span><span class="passage-text">${html}</span></p>`;
    }).join('\n');
  }

  function _renderPrevNext(meta, prev, next, current) {
    const prevTip = prev ? `${prev.label} · ${prev.title}` : '';
    const nextTip = next ? `${next.label} · ${next.title}` : '';
    return `
      <nav class="section-nav" aria-label="Section navigation">
        ${
          prev
            ? `<button class="section-nav-arrow section-nav-prev" type="button"
                       data-target="${prev.id}" data-tooltip="${_escAttr(prevTip)}"
                       aria-label="${SPS.i18n.t('nav_previous')}: ${_escAttr(prevTip)}">‹</button>`
            : `<button class="section-nav-arrow section-nav-prev" type="button"
                       disabled aria-label="${SPS.i18n.t('nav_no_previous')}">‹</button>`
        }
        <span class="section-nav-current" aria-current="page">${current.label}</span>
        ${
          next
            ? `<button class="section-nav-arrow section-nav-next" type="button"
                       data-target="${next.id}" data-tooltip="${_escAttr(nextTip)}"
                       aria-label="${SPS.i18n.t('nav_next')}: ${_escAttr(nextTip)}">›</button>`
            : `<button class="section-nav-arrow section-nav-next" type="button"
                       disabled aria-label="${SPS.i18n.t('nav_no_next')}">›</button>`
        }
      </nav>
    `;
  }

  function _escAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function _renderCommentaries(book, sectionId, lang) {
    const commByDiv = SPS.books.commentariesFor(book, lang);
    // Fall back to English list of commentaries if RO is empty for this division
    let entries = (commByDiv && commByDiv[sectionId]) || [];
    if ((!entries || !entries.length) && lang !== 'en') {
      const en = SPS.books.commentariesFor(book, 'en');
      entries = (en && en[sectionId]) || [];
    }

    const head = SPS.i18n.t('commentaries_head');

    if (!entries || !entries.length) {
      return `
        <section class="commentaries" aria-labelledby="commentaries-head">
          <h2 class="commentaries-head" id="commentaries-head">${head}</h2>
          <p class="commentaries-empty">${SPS.i18n.t('commentaries_none')}</p>
        </section>
      `;
    }

    const linksHtml = entries.map(c => {
      const href = `commentaries/${book.id}/${sectionId}/${c.id}.html`;
      return `
        <li class="commentaries-item">
          <a class="commentaries-link" href="${_escAttr(href)}">
            <span class="commentaries-title">${c.title}</span>
            <span class="commentaries-arrow" aria-hidden="true">→</span>
          </a>
        </li>
      `;
    }).join('');

    return `
      <section class="commentaries" aria-labelledby="commentaries-head">
        <h2 class="commentaries-head" id="commentaries-head">${head}</h2>
        <ul class="commentaries-list">${linksHtml}</ul>
      </section>
    `;
  }

  function _attachListeners() {
    // Mode 1, Mode 2, and Mode 3 terms
    document.querySelectorAll('.m1, .m2, .m3').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        const key = el.dataset.term;
        if (key) SPS.ui.openTerm(key);
      });
    });

    // Ambiguity markers
    document.querySelectorAll('.amb').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        const key = el.dataset.amb;
        if (key) SPS.ui.openAmbiguity(key);
      });
    });

    // Prev / next arrows
    document.querySelectorAll('.section-nav-arrow[data-target]').forEach(el => {
      el.addEventListener('click', () => {
        SPS.app.setSection(el.dataset.target);
      });
    });
  }

  return { renderSection };

})();
