/* ============================================================
   SPS Theology — ui.js
   Selectors, dropdowns, side panel.
   ============================================================ */

window.SPS = window.SPS || {};

SPS.ui = (function () {

  // ====================================================
  // BOOK DROPDOWN
  // ====================================================
  function buildBookDropdown() {
    const list = document.getElementById('book-list');
    const lang = SPS.app.getState().lang;
    const books = SPS.books.list();
    list.innerHTML = books.map(book => {
      const meta = SPS.books.meta(book, lang);
      return `
        <li>
          <button class="dropdown-item" type="button" data-book-id="${book.id}">
            <div class="dropdown-item-row">
              <span class="dropdown-item-tag">${meta.subtitle || ''}</span>
              <span class="dropdown-item-title">${meta.title}</span>
            </div>
            ${meta.blurb ? `<div class="dropdown-item-sub">${meta.blurb}</div>` : ''}
          </button>
        </li>
      `;
    }).join('');

    list.querySelectorAll('[data-book-id]').forEach(el => {
      el.addEventListener('click', () => {
        SPS.app.setBook(el.dataset.bookId);
        _closeDropdown('book');
      });
    });
  }

  // ====================================================
  // CHAPTER (DIVISION) DROPDOWN — rebuilt each time book/lang changes
  // ====================================================
  function buildChapterDropdown() {
    const list = document.getElementById('chapter-list');
    const header = document.getElementById('chapter-dropdown-header');
    const { bookId, sectionId, lang } = SPS.app.getState();
    const book = SPS.books.get(bookId);
    if (!book) { list.innerHTML = ''; return; }
    const meta = SPS.books.meta(book, lang);

    header.textContent = `${meta.title} · ${SPS.i18n.t('dropdown_select_section')}`;

    list.innerHTML = meta.divisions.map(div => `
      <li>
        <button class="dropdown-item ${div.id === sectionId ? 'active' : ''}" type="button" data-section-id="${div.id}">
          <div class="dropdown-item-row">
            <span class="dropdown-item-tag">${div.label}</span>
            <span class="dropdown-item-title">${div.title}</span>
            <span class="dropdown-item-range">${div.range}</span>
          </div>
          ${div.subtitle ? `<div class="dropdown-item-sub">${div.subtitle}</div>` : ''}
        </button>
      </li>
    `).join('');

    list.querySelectorAll('[data-section-id]').forEach(el => {
      el.addEventListener('click', () => {
        SPS.app.setSection(el.dataset.sectionId);
        _closeDropdown('chapter');
      });
    });
  }

  // ====================================================
  // LANGUAGE DROPDOWN
  // ====================================================
  function buildLangDropdown() {
    const list = document.getElementById('lang-list');
    const currentLang = SPS.app.getState().lang;
    list.innerHTML = SPS.i18n.LANGS.map(l => `
      <li>
        <button class="dropdown-item-mini ${l.code === currentLang ? 'active' : ''}" type="button" data-lang="${l.code}">
          <span>${l.label}</span>
          <span class="dropdown-item-mini-code">${l.short}</span>
        </button>
      </li>
    `).join('');

    list.querySelectorAll('[data-lang]').forEach(el => {
      el.addEventListener('click', () => {
        SPS.app.setLang(el.dataset.lang);
        _closeDropdown('lang');
      });
    });
  }

  // ====================================================
  // SELECTOR BUTTON LABELS — refreshed when state changes
  // ====================================================
  function refreshSelectors() {
    const { bookId, sectionId, lang } = SPS.app.getState();
    const book = SPS.books.get(bookId);
    if (book) {
      const meta = SPS.books.meta(book, lang);
      document.getElementById('book-selector-value').textContent = meta.title;
      const div = meta.divisions.find(d => d.id === sectionId);
      document.getElementById('chapter-selector-value').textContent = div ? `${div.label}` : '—';
    }
    const langDef = SPS.i18n.LANGS.find(l => l.code === lang);
    if (langDef) document.getElementById('lang-selector-value').textContent = langDef.short;

    // Rebuild lang + chapter lists to reflect language and active state
    buildLangDropdown();
    buildChapterDropdown();
    // Books dropdown labels also change with language
    buildBookDropdown();
  }

  // ====================================================
  // DROPDOWN OPEN / CLOSE
  // ====================================================
  const _SELECTOR_MAP = {
    book: { btn: 'book-selector-btn', dd: 'book-selector-dropdown' },
    chapter: { btn: 'chapter-selector-btn', dd: 'chapter-selector-dropdown' },
    lang: { btn: 'lang-selector-btn', dd: 'lang-selector-dropdown' },
  };

  function _toggleDropdown(which, e) {
    if (e) e.stopPropagation();
    Object.keys(_SELECTOR_MAP).forEach(key => {
      if (key !== which) _closeDropdown(key);
    });
    const m = _SELECTOR_MAP[which];
    const btn = document.getElementById(m.btn);
    const dd = document.getElementById(m.dd);
    const isOpen = btn.classList.toggle('open');
    dd.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  }

  function _closeDropdown(which) {
    const m = _SELECTOR_MAP[which];
    const btn = document.getElementById(m.btn);
    const dd = document.getElementById(m.dd);
    if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    if (dd) dd.classList.remove('open');
  }

  function _closeAllDropdowns() {
    Object.keys(_SELECTOR_MAP).forEach(_closeDropdown);
  }

  // ====================================================
  // SIDE PANEL — TERM
  // ====================================================
  function openTerm(termKey, explicitBookId) {
    _closeAllDropdowns();
    const lang = SPS.app.getState().lang;
    const bookId = explicitBookId || SPS.app.getState().bookId;
    const book = SPS.books.get(bookId);
    if (!book) {
      console.warn('SPS: book not found for term lookup', bookId);
      return;
    }
    const terms = SPS.books.termsFor(book, lang);
    const t = terms[termKey] || (SPS.books.termsFor(book, 'en')[termKey]);
    if (!t) {
      console.warn('SPS: term not found', termKey, 'in', bookId);
      return;
    }

    const modeLabel = t.mode === 1
      ? SPS.i18n.t('mode_1_label')
      : t.mode === 2
        ? SPS.i18n.t('mode_2_label')
        : SPS.i18n.t('mode_3_label');
    const modeClass = t.mode === 1
      ? 'mode-badge-1'
      : t.mode === 2
        ? 'mode-badge-2'
        : 'mode-badge-3';

    const stepHtml = (t.steps && t.steps.length) ? `
      <div class="panel-section">
        <div class="panel-section-head">${SPS.i18n.t('panel_decision')}</div>
        <div class="step-table">
          ${t.steps.map(s => {
      const cls = s.result === 'pass' ? 'step-pass'
        : s.result === 'partial' ? 'step-partial'
          : 'step-fail';
      const lbl = s.result === 'pass' ? SPS.i18n.t('step_pass')
        : s.result === 'partial' ? SPS.i18n.t('step_partial')
          : SPS.i18n.t('step_fail');
      return `
              <div class="step-row">
                <div class="step-num">Step ${s.n}</div>
                <div class="step-desc">${s.text}</div>
                <div class="step-result ${cls}">${lbl}</div>
              </div>`;
    }).join('')}
        </div>
      </div>
    ` : '';

    const axiomsHtml = (t.axioms && t.axioms.length) ? `
      <div class="panel-section">
        <div class="panel-section-head">${SPS.i18n.t('panel_axioms')}</div>
        <div class="axioms-served">${t.axioms.map(a => `<span class="axiom-tag">${a}</span>`).join('')}</div>
      </div>
    ` : '';

    const lexiconsHtml = _renderLexicons(t.lexicons);

    document.getElementById('panel-eyebrow').textContent = '';
    document.getElementById('panel-title').textContent = SPS.i18n.t('panel_apparatus');
    document.getElementById('panel-body').innerHTML = `
      <article class="panel-entry">
        <header class="panel-entry-hero">
          <div class="panel-term">
            <span>${t.term}</span>
            ${t.heb ? `<span class="panel-term-heb">${t.heb}</span>` : ''}
          </div>
          <div class="panel-meta">
            <span class="mode-badge ${modeClass}">${modeLabel}</span>
            ${t.gloss ? `<span class="panel-meta-gloss">${t.gloss}</span>` : ''}
          </div>
        </header>
        <section class="panel-section">
          <div class="panel-section-head">${SPS.i18n.t('panel_note')}</div>
          <div class="panel-section-body">${t.note || ''}</div>
        </section>
        ${stepHtml}
        ${axiomsHtml}
        ${lexiconsHtml}
      </article>
    `;
    _openPanel();
  }

  // ====================================================
  // LEXICON REFERENCES — BDB / HALOT / LSJ / BDAG, etc.
  // Rendered from an optional `lexicons` map on a term:
  //   lexicons: { bdb: { ref: 's.v. אֱלֹהִים', note: '...' }, halot: {...} }
  // Unrecognised keys still render, using the key itself as the label,
  // so a new lexicon can be added to term data without a code change.
  // ====================================================
  const _LEXICON_NAMES = {
    bdb: 'Brown–Driver–Briggs',
    halot: 'Hebrew and Aramaic Lexicon of the Old Testament',
    lsj: 'Liddell–Scott–Jones',
    bdag: 'Bauer–Danker–Arndt–Gingrich',
  };

  function _renderLexicons(lexicons) {
    if (!lexicons) return '';
    const keys = Object.keys(lexicons).filter(k => lexicons[k]);
    if (!keys.length) return '';

    const rows = keys.map(key => {
      const entry = lexicons[key];
      const abbr = key.toUpperCase();
      const fullName = _LEXICON_NAMES[key] || '';
      return `
        <div class="lexicon-row">
          <div class="lexicon-abbr" title="${_escAttr(fullName)}">${_escAttr(abbr)}</div>
          <div class="lexicon-entry">
            ${entry.ref ? `<div class="lexicon-ref">${entry.ref}</div>` : ''}
            ${entry.note ? `<div class="lexicon-note">${entry.note}</div>` : ''}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="panel-section">
        <div class="panel-section-head">${SPS.i18n.t('panel_lexicons')}</div>
        <div class="lexicon-table">${rows}</div>
      </div>
    `;
  }

  function _escAttr(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ====================================================
  // SIDE PANEL — AMBIGUITY
  // ====================================================
  function openAmbiguity(ambKey, explicitBookId) {
    _closeAllDropdowns();
    const lang = SPS.app.getState().lang;
    const bookId = explicitBookId || SPS.app.getState().bookId;
    const book = SPS.books.get(bookId);
    if (!book) {
      console.warn('SPS: book not found for ambiguity lookup', bookId);
      return;
    }
    const ambs = SPS.books.ambiguitiesFor(book, lang);
    const a = ambs[ambKey] || (SPS.books.ambiguitiesFor(book, 'en')[ambKey]);
    if (!a) {
      console.warn('SPS: ambiguity not found', ambKey, 'in', bookId);
      return;
    }

    const readingsHtml = (a.readings || []).map(r => `
      <div class="amb-reading">
        <div class="amb-reading-label">${r.label}</div>
        <div class="amb-reading-text">${r.text}</div>
      </div>
    `).join('');

    document.getElementById('panel-eyebrow').textContent = '';
    document.getElementById('panel-title').textContent = SPS.i18n.t('panel_apparatus');
    document.getElementById('panel-body').innerHTML = `
      <article class="panel-entry">
      <header class="panel-entry-hero">
      <div class="panel-term">
        <span>${a.context || '—'}</span>
        ${a.heb ? `<span class="panel-term-heb">${a.heb}</span>` : ''}
      </div>
      <div class="panel-meta">
        <span class="mode-badge mode-badge-amb">${SPS.i18n.t('mode_amb_label')}</span>
        ${a.gloss ? `<span class="panel-meta-gloss">${a.gloss}</span>` : ''}
      </div>
      </header>
      ${a.hebrew_feature ? `
        <div class="panel-section">
          <div class="panel-section-head">${SPS.i18n.t('panel_disambiguation')}</div>
          <div class="panel-section-body">${a.hebrew_feature}</div>
        </div>` : ''}
      <div class="panel-section">
        <div class="panel-section-head">${SPS.i18n.t('panel_readings')}</div>
        <div class="panel-section-body">${readingsHtml}</div>
      </div>
      ${a.note ? `
        <div class="panel-section">
          <div class="panel-section-head">${SPS.i18n.t('panel_note')}</div>
          <div class="panel-section-body">${a.note}</div>
        </div>` : ''}
      ${(a.axioms && a.axioms.length) ? `
        <div class="panel-section">
          <div class="panel-section-head">${SPS.i18n.t('panel_axioms')}</div>
          <div class="axioms-served">${a.axioms.map(ax => `<span class="axiom-tag">${ax}</span>`).join('')}</div>
        </div>` : ''}
      </article>
    `;
    _openPanel();
  }

  // ====================================================
  // SIDE PANEL — ABOUT / LEGEND
  // ====================================================
  function openAbout() {
    _closeAllDropdowns();
    const lang = SPS.app.getState().lang;
    document.getElementById('panel-eyebrow').textContent = SPS.i18n.t('panel_about');
    document.getElementById('panel-title').textContent = SPS.i18n.t('panel_about');
    document.getElementById('panel-body').innerHTML = _aboutContent(lang);
    _openPanel();
  }

  function openLegend() {
    _closeAllDropdowns();
    const lang = SPS.app.getState().lang;
    document.getElementById('panel-eyebrow').textContent = SPS.i18n.t('panel_legend');
    document.getElementById('panel-title').textContent = SPS.i18n.t('panel_legend');
    document.getElementById('panel-body').innerHTML = _legendContent(lang);
    _openPanel();
  }

  function _aboutContent(lang) {
    if (lang === 'ro') {
      // Placeholder Romanian — refine to your preferred register
      return `
        <div class="about-content">
          <h4>Ce este SPS Theology</h4>
          <p>SPS Theology — <em>Source Preservation Scripture Theology</em> — este o traducere de referință academică a Bibliei ebraice și a Noului Testament, gândită pentru biroul de studiu, nu pentru folosință liturgică sau devoțională. Aplică o metodologie formală, guvernată de reguli, care face vizibilă și contestabilă fiecare decizie de traducere.</p>
          <h4>De ce o nouă traducere?</h4>
          <p>Traducerile convenționale ale Bibliei se confruntă cu două probleme persistente. <em>Aplatizarea semantică</em>: termeni distincți din limba sursă sunt redați printr-un singur echivalent în limba țintă, ștergând textura conceptuală a originalului. <em>Suprasarcină interpretativă</em>: cuvintele din limba țintă, modelate de secole de receptare teologică, importă în mod tăcut sensuri doctrinare ce nu sunt demonstrabil disponibile la orizontul de compoziție al textului.</p>
          <p>Această traducere de referință relocalizează deciziile interpretative din alegeri lexicale invizibile într-o procedură de decizie explicită și auditabilă.</p>
          <h4>Analogia debugging-ului</h4>
          <p>Un programator competent nu pretinde să scrie cod fără presupoziții. Își face presupozițiile vizibile în arhitectură și documentație. În SPS Theology, axiomele și procedura de decizie joacă rolul arhitecturii și documentației; textul în limba țintă joacă rolul codului. Interpretarea trăiește în aparat, unde poate fi auditată.</p>
          <h4>Orizonturi cronologice</h4>
          <p>Biblia ebraică: aproximativ 400 î.Hr. Noul Testament: aproximativ 100 d.Hr.</p>
        </div>
      `;
    }
    return `
      <div class="about-content">
        <h4>What this is</h4>
        <p>SPS Theology — <em>Source Preservation Scripture Theology</em> — is a scholarly reference translation of the Hebrew Bible and New Testament, designed for the study desk rather than for liturgical or devotional use. It applies a formal, rule-governed methodology that makes every translation decision visible and contestable.</p>
        <h4>Why another translation?</h4>
        <p>Conventional Bible translations encounter two persistent problems. <em>Semantic flattening</em>: distinct source-language terms are rendered by a single target-language equivalent, erasing the conceptual texture of the original. <em>Interpretive overdetermination</em>: target-language words shaped by centuries of theological reception silently import doctrinal meanings that are not demonstrably available at the text's compositional horizon.</p>
        <p>This reference translation relocates interpretive judgments from invisible lexical choices into an explicit, auditable decision procedure. Interpretation in translation is unavoidable; interpretation <em>in the translated text itself</em> can be substantially minimized.</p>
        <h4>The debugging analogy</h4>
        <p>A competent programmer does not claim to write code free of assumptions. They make their assumptions visible in the architecture and documentation. In SPS Theology, the axioms and the decision procedure play the role of architecture and documentation; the target-language text plays the role of code. Interpretation lives in the apparatus, where it can be audited; the translation itself is reserved for what the decision procedure has determined the source to say.</p>
        <h4>Chronological horizons</h4>
        <p>Hebrew Bible: approximately 400 BC. New Testament: approximately 100 AD. These are methodological controls against anachronism.</p>
      </div>
    `;
  }

  function _legendContent(lang) {
    if (lang === 'ro') {
      return `
        <div class="about-content">
          <h4>Mod 1 — Simplu</h4>
          <p>Redare standard în limba țintă, fără notație. Modul implicit, aplicat când sensul termenului este clar din context și echivalentul țintă păstrează gama semantică ebraică fără a importa sarcină conceptuală post-graniță.</p>
          <h4>Mod 2 — Documentat</h4>
          <p>Un echivalent în limba țintă este urmat imediat de termenul-sursă în paranteze. Acest mod semnalează că, deși textul țintă transmite sensul primar contextual, nu epuizează gama semantică a termenului.</p>
          <div class="example-box">Exemplu: <em>"Și Elohim a încetat — <span style="border-bottom:1px dotted var(--accent-soft);">shavat</span> — în a șaptea zi."</em></div>
          <h4>Mod 3 — Transliterare</h4>
          <p>Termenul-sursă este prezentat cu caractere romane, fără echivalent în limba țintă. Rezervat pentru cazuri în care niciun cuvânt țintă nu poate păstra gama semantică activă.</p>
          <div class="example-box">Exemplu: <em><span style="font-style:italic;border-bottom:1px dotted var(--accent-soft);">Elohim</span></em>, <em><span style="font-style:italic;border-bottom:1px dotted var(--accent-soft);">ruach</span></em>, <em><span style="font-style:italic;border-bottom:1px dotted var(--accent-soft);">nahash</span></em>.</p>
          <h4>Marcaje de ambiguitate</h4>
          <p>Notația <code>[[a|the]]</code> marchează un punct unde gramatica ebraică permite mai multe lecturi și contextul nu dezambiguizează. Apăsați marcajul pentru a vedea lecturile posibile și caracteristica ebraică ce produce ambiguitatea.</p>
          <h4>Marcaje de paragraf</h4>
          <p>Numerele din marginea stângă identifică direct paragrafele din secțiunea curentă.</p>
        </div>
      `;
    }
    return `
      <div class="about-content">
        <h4>Mode 1 — Plain</h4>
        <p>A standard target-language rendering, without notation. The default mode. Applied when the term's sense is contextually clear and its English equivalent preserves the Hebrew's semantic range without importing post-boundary conceptual freight.</p>
        <h4>Mode 2 — Documented</h4>
        <p>A target-language equivalent is supplied, immediately followed by the source term in brackets. This mode signals that while the English conveys the primary, contextually determined sense, it neither exhausts the term's semantic range nor preserves all its lexical connections.</p>
        <div class="example-box">Example: <em>"And Elohim ceased — <span style="border-bottom:1px dotted var(--accent-soft);">shavat</span> — on the seventh yom."</em> Click any Mode 2 word for the full apparatus.</div>
        <h4>Mode 3 — Transliteration</h4>
        <p>The source term is presented in Roman characters without a target-language equivalent in the main text. Reserved for cases where no single English word can preserve the term's active semantic range, or where any conventional equivalent imports unacceptable post-boundary interpretation.</p>
        <div class="example-box">Example: <em><span style="font-style:italic;border-bottom:1px dotted var(--accent-soft);">Elohim</span></em>, <em><span style="font-style:italic;border-bottom:1px dotted var(--accent-soft);">ruach</span></em>, <em><span style="font-style:italic;border-bottom:1px dotted var(--accent-soft);">nahash</span></em>. Italic, with a dotted underline. Click for the apparatus.</p>
        <h4>Ambiguity markers</h4>
        <p>The notation <code>[[a|the]]</code> marks a point where Hebrew grammar permits more than one reading and the context does not disambiguate. Click an ambiguity marker to see both possible readings, the Hebrew feature that creates the ambiguity, and the disambiguation co-text test.</p>
        <h4>Paragraph markers</h4>
        <p>The numbers in the left gutter identify the paragraphs of the current section directly.</p>
        <h4>The apparatus panel</h4>
        <p>Click any Mode 2 or Mode 3 word to see: the source term in its original script, its morphological gloss, the decision-procedure audit (which of the five Steps the term passed or failed and why), and the axioms served. This is the "debug view" — it shows the reasoning behind each non-default rendering.</p>
      </div>
    `;
  }

  let _panelReturnFocus = null;
  const _desktopPanelQuery = window.matchMedia('(min-width: 1101px)');

  function _isDesktopPanel() {
    return _desktopPanelQuery.matches;
  }

  function _syncPanelMode() {
    const panel = document.getElementById('panel');
    const overlay = document.getElementById('panel-overlay');
    if (!panel || !overlay) return;

    if (_isDesktopPanel()) {
      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
      panel.setAttribute('aria-modal', 'false');
      panel.setAttribute('role', 'complementary');
      overlay.classList.remove('open');
      document.body.classList.remove('panel-open');
    } else {
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-modal', 'true');
      if (!panel.classList.contains('open')) {
        panel.setAttribute('aria-hidden', 'true');
      }
    }
  }

  function _openPanel() {
    const panel = document.getElementById('panel');
    const overlay = document.getElementById('panel-overlay');
    if (!panel || !overlay) return; // page has no apparatus panel (e.g. commentary pages)
    _panelReturnFocus = document.activeElement;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');

    if (_isDesktopPanel()) {
      panel.setAttribute('aria-modal', 'false');
      panel.setAttribute('role', 'complementary');
      overlay.classList.remove('open');
      document.body.classList.remove('panel-open');
      return;
    }

    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('role', 'dialog');
    overlay.classList.add('open');
    document.body.classList.add('panel-open');
    requestAnimationFrame(() => panel.focus({ preventScroll: true }));
  }

  function closePanel() {
    if (_isDesktopPanel()) return;

    const panel = document.getElementById('panel');
    const overlay = document.getElementById('panel-overlay');
    if (!panel || !overlay) return; // page has no apparatus panel (e.g. commentary pages)
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('open');
    document.body.classList.remove('panel-open');
    if (_panelReturnFocus && typeof _panelReturnFocus.focus === 'function') {
      _panelReturnFocus.focus({ preventScroll: true });
    }
    _panelReturnFocus = null;
  }

  // ====================================================
  // GLOBAL LISTENERS
  // ====================================================
  function attachGlobalListeners() {
    _syncPanelMode();
    if (typeof _desktopPanelQuery.addEventListener === 'function') {
      _desktopPanelQuery.addEventListener('change', _syncPanelMode);
    } else if (typeof _desktopPanelQuery.addListener === 'function') {
      _desktopPanelQuery.addListener(_syncPanelMode);
    }

    document.getElementById('book-selector-btn').addEventListener('click', e => _toggleDropdown('book', e));
    document.getElementById('chapter-selector-btn').addEventListener('click', e => _toggleDropdown('chapter', e));
    document.getElementById('lang-selector-btn').addEventListener('click', e => _toggleDropdown('lang', e));

    // Theme toggle — three-way cycle: light → dark → warm → light
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = SPS.app.getState().theme;
        const next = { light: 'dark', dark: 'warm', warm: 'light' };
        SPS.app.setTheme(next[current] || 'light');
      });
    }
    refreshThemeToggle();

    document.addEventListener('click', e => {
      if (!e.target.closest('.selector-wrap')) _closeAllDropdowns();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closePanel();
        _closeAllDropdowns();
      }
    });

    // Hash navigation
    window.addEventListener('hashchange', () => {
      if (SPS.app.getState().pageMode === 'page') return;
      const h = (location.hash || '').replace(/^#/, '');
      if (!h) return;
      const [bookId, sectionId] = h.split('/');
      const state = SPS.app.getState();
      if (bookId && bookId !== state.bookId) SPS.app.setBook(bookId);
      if (sectionId && sectionId !== state.sectionId) SPS.app.setSection(sectionId);
    });

    // =====================
    // SEARCH UI
    // =====================
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    const searchResults = document.getElementById('search-results');
    const searchEmpty = document.getElementById('search-empty');

    if (searchToggle && searchOverlay) {
      searchToggle.addEventListener('click', () => {
        searchOverlay.classList.add('open');
        searchInput.focus();
        SPS.search.buildIndex(SPS.app.getState().lang);
      });

      searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('open');
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchEmpty.style.display = 'block';
      });

      searchOverlay.addEventListener('click', e => {
        if (e.target === searchOverlay) {
          searchOverlay.classList.remove('open');
          searchInput.value = '';
          searchResults.innerHTML = '';
          searchEmpty.style.display = 'block';
        }
      });

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('open')) {
          searchOverlay.classList.remove('open');
        }
        // Ctrl+K or / to open search
        if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && !e.target.closest('input, textarea, [contenteditable]'))) {
          e.preventDefault();
          searchOverlay.classList.add('open');
          searchInput.focus();
          SPS.search.buildIndex(SPS.app.getState().lang);
        }
      });

      searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim();
        if (!q) {
          searchResults.innerHTML = '';
          searchEmpty.style.display = 'block';
          return;
        }
        searchEmpty.style.display = 'none';
        const results = SPS.search.search(q);
        if (!results.length) {
          searchResults.innerHTML = '<div class="search-no-results">No results found.</div>';
          return;
        }
        searchResults.innerHTML = results.map(r => {
          const typeLabel = { term: 'Term', passage: 'Passage', ambiguity: 'Ambiguity', commentary: 'Commentary' }[r.type] || '';
          let href = '#';
          if (r.type === 'term' || r.type === 'ambiguity' || r.type === 'passage') {
            href = 'index.html#' + r.book + '/' + (r.divisionId || 'D1');
          } else if (r.type === 'commentary') {
            href = 'commentaries/' + r.book + '/' + r.divisionId + '/' + r.id + '.html';
          }
          return `
            <a class="search-result" href="${href}">
              <div class="search-result-type">${typeLabel}</div>
              <div class="search-result-title">${r.term || r.divisionTitle || r.title || r.context}</div>
              ${r.gloss ? `<div class="search-result-sub">${r.gloss}</div>` : ''}
              ${r.divisionRange ? `<div class="search-result-sub">${r.divisionRange}</div>` : ''}
              ${r.snippet ? `<div class="search-result-snippet">${r.snippet}</div>` : ''}
              <div class="search-result-book">${r.bookTitle}</div>
            </a>
          `;
        }).join('');

        // Close search overlay when a result is clicked
        searchResults.querySelectorAll('.search-result').forEach(el => {
          el.addEventListener('click', () => {
            searchOverlay.classList.remove('open');
            searchInput.value = '';
            searchResults.innerHTML = '';
            searchEmpty.style.display = 'block';
          });
        });
      });
    }
  }

  /**
   * Refresh the theme toggle button: swap icon (sun ↔ moon) and update
   * the accessible label based on the current theme.
   */
  function refreshThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const theme = SPS.app.getState().theme;
    btn.dataset.themeState = theme;
    const labels = {
      light: 'Switch to dark mode',
      dark: 'Switch to warm dark mode',
      warm: 'Switch to light mode',
    };
    btn.setAttribute('aria-label', labels[theme] || labels.light);
  }

  return {
    buildBookDropdown,
    buildChapterDropdown,
    buildLangDropdown,
    refreshSelectors,
    refreshThemeToggle,
    openTerm,
    openAmbiguity,
    openAbout,
    openLegend,
    closePanel,
    attachGlobalListeners,
  };

})();
