/* ============================================================
   SPS Theology — app.js
   Namespace, runtime state, and initialisation entrypoint.
   ============================================================ */

window.SPS = window.SPS || {};

SPS.app = (function () {

  // ---- runtime state ----
  const state = {
    lang: 'en',          // current UI/content language
    bookId: null,        // currently displayed book
    sectionId: null,     // currently displayed division (e.g. 'D1')
    theme: 'light',      // 'light' | 'dark'
  };

  function getState() { return { ...state }; }

  function setLang(lang) {
    state.lang = lang;
    try { localStorage.setItem('sps:lang', lang); } catch (_) { }
    SPS.i18n.applyAll();

    // Reader pages: re-render the current section so passage content swaps language
    if (state.pageMode !== 'page' && state.bookId && state.sectionId && SPS.reader) {
      SPS.reader.renderSection(state.bookId, state.sectionId);
      SPS.ui.refreshSelectors();
      return;
    }

    // Non-reading pages (about/legend/commentary): redirect to the language variant
    // of the current URL, e.g. about.html <-> about.ro.html
    if (state.pageMode === 'page') {
      _switchPageLanguage(lang);
      return;
    }

    SPS.ui.refreshSelectors();
  }

  /**
   * Switch the current static page to its language variant.
   *
   * Convention:
   *   about.html       <->  about.ro.html
   *   legend.html      <->  legend.ro.html
   *   purpose-of-adam.html  <->  purpose-of-adam.ro.html
   *
   * Strategy:
   *   1. Compute the target URL by inserting/removing `.{lang}` before .html
   *   2. Navigate directly to that static file.
   */
  function _switchPageLanguage(targetLang) {
    const currentUrl = new URL(window.location.href);
    const targetPath = _computeLangVariantPath(currentUrl.pathname, targetLang);

    // If the requested language already matches this file, only refresh the UI.
    if (targetPath === currentUrl.pathname) {
      SPS.ui.refreshSelectors();
      return;
    }

    // Navigate directly. This behaves the same on file://, localhost, and
    // GitHub Pages, and avoids an HTTP HEAD pre-flight that can block a valid
    // static language page from opening.
    currentUrl.pathname = targetPath;
    window.location.assign(currentUrl.href);
  }

  /**
   * Insert or remove a language suffix in a URL path before the `.html` extension.
   *
   *   ('foo.html', 'ro')          -> 'foo.ro.html'
   *   ('foo.ro.html', 'en')       -> 'foo.html'
   *   ('foo.ro.html', 'ro')       -> 'foo.ro.html'   (unchanged)
   *   ('foo.html', 'en')          -> 'foo.html'      (unchanged)
   *   ('a/b/c.html', 'ro')        -> 'a/b/c.ro.html'
   *   ('/' or 'index.html', any)  -> unchanged (reader pages handled elsewhere)
   *
   * Supports any 2-letter language code (en, ro, future de, fr, es, etc.).
   */
  function _computeLangVariantPath(currentPath, targetLang) {
    // Pull the filename off the path
    const slash = currentPath.lastIndexOf('/');
    const dir = currentPath.substring(0, slash + 1);
    const file = currentPath.substring(slash + 1) || 'index.html';

    // Detect existing language suffix:  basename.<2letter>.html
    const m = file.match(/^(.+?)(?:\.([a-z]{2}))?\.html$/i);
    if (!m) return currentPath; // no .html, leave alone
    const base = m[1];
    // const existingLang = m[2] || 'en';

    if (targetLang === 'en') {
      return dir + base + '.html';
    } else {
      return dir + base + '.' + targetLang + '.html';
    }
  }

  /**
   * Compute the URL to the reading view (index.html) from the current page,
   * working on both http(s):// and file:// URLs by counting directory depth
   * relative to the deepest known root marker.
   *
   * Strategy: the project root contains both index.html and a `js/` directory.
   * Every static page (about/legend/commentaries) is at some depth below this
   * root. We walk up from the current document's directory until we find a
   * pathname segment we recognise as the project root, or we run out.
   *
   * In practice the structure is fixed:
   *   /              index.html, about.html, legend.html
   *   /commentaries/{book}/{D#}/{slug}.html   commentary pages (3 levels deep)
   * so we can reliably climb based on the URL alone.
   */
  function _readingViewUrl(bookId, sectionId) {
    // Get the directory portion of the current URL
    const path = location.pathname;
    const slashIdx = path.lastIndexOf('/');
    const filename = path.substring(slashIdx + 1);

    // If the current file is *.html in the same dir as index.html (about, legend, etc.),
    // a relative `index.html` resolves correctly.
    // If the current file lives in commentaries/{book}/{D#}/, we need ../../../
    // Heuristic: count occurrences of `/commentaries/` etc. by inspecting the path.

    // Count directory components from a known root segment.
    // Look for the LAST occurrence of '/commentaries/' and count slashes after it.
    const commIdx = path.indexOf('/commentaries/');
    let prefix = '';
    if (commIdx !== -1) {
      // Path looks like: .../commentaries/{book}/{D#}/{file}.html
      // Count slashes between '/commentaries/' and the file: should be 3 (= 3 levels)
      const tail = path.substring(commIdx + '/commentaries/'.length);
      const depth = tail.split('/').length - 1; // -1 because the filename itself isn't a dir
      // depth=2 means {book}/{D#}/{file}.html → climb 3 levels (commentaries, book, D#)
      // We always climb depth + 1 to escape /commentaries/ itself
      const climbs = depth + 1;
      prefix = '../'.repeat(climbs);
    }
    // else: we're at the project root (about.html, legend.html, index.html itself).
    // No prefix needed.

    return `${prefix}index.html#${bookId}/${sectionId}`;
  }

  function setBook(bookId) {
    const book = SPS.books.get(bookId);
    if (!book) return;
    state.bookId = bookId;
    // Default to first division when switching books
    state.sectionId = book.meta[state.lang].divisions[0].id;

    // If we're on a non-reading page, navigate to the reading view
    if (state.pageMode === 'page') {
      window.location.href = _readingViewUrl(state.bookId, state.sectionId);
      return;
    }

    updateHash();
    SPS.reader.renderSection(state.bookId, state.sectionId);
    SPS.ui.refreshSelectors();
  }

  function setSection(sectionId) {
    state.sectionId = sectionId;

    if (state.pageMode === 'page') {
      window.location.href = _readingViewUrl(state.bookId, state.sectionId);
      return;
    }

    updateHash();
    SPS.reader.renderSection(state.bookId, state.sectionId);
    SPS.ui.refreshSelectors();
  }

  // URL hash format: #bookId/sectionId   e.g.  #bereshit/D2
  function updateHash() {
    const h = `#${state.bookId}/${state.sectionId}`;
    if (location.hash !== h) history.replaceState(null, '', h);
  }

  function readHash() {
    const h = (location.hash || '').replace(/^#/, '');
    if (!h) return null;
    const [bookId, sectionId] = h.split('/');
    return { bookId, sectionId };
  }

  // Restore the saved language preference into state.lang, if valid.
  function _restoreLangPreference() {
    try {
      const saved = localStorage.getItem('sps:lang');
      if (saved && SPS.i18n.LANGS.find(l => l.code === saved)) state.lang = saved;
    } catch (_) { }
  }

  // Static pages encode their language in the filename, for example
  // about.ro.html or legend.ro.html. On those pages the URL is authoritative;
  // otherwise fall back to the saved preference.
  function _restorePageLanguage() {
    const filename = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const match = filename.match(/\.([a-z]{2})\.html$/i);
    const urlLang = match ? match[1].toLowerCase() : 'en';

    if (SPS.i18n.LANGS.find(l => l.code === urlLang)) {
      state.lang = urlLang;
      try { localStorage.setItem('sps:lang', urlLang); } catch (_) { }
    } else {
      _restoreLangPreference();
    }
  }

  // ---- init ----
  function init() {
    // 1) Restore language preference
    _restoreLangPreference();

    // 2) Build UI shells
    SPS.ui.buildLangDropdown();
    SPS.ui.buildBookDropdown();

    // 3) Decide initial book and section
    const hash = readHash();
    const firstBook = SPS.books.list()[0];
    if (!firstBook) {
      console.error('SPS: no books registered');
      return;
    }

    let bookId = (hash && SPS.books.get(hash.bookId)) ? hash.bookId : firstBook.id;
    const book = SPS.books.get(bookId);
    const divs = book.meta[state.lang].divisions;
    let sectionId = (hash && hash.sectionId && divs.find(d => d.id === hash.sectionId))
      ? hash.sectionId
      : divs[0].id;

    state.bookId = bookId;
    state.sectionId = sectionId;

    // 4) Apply UI strings + render
    SPS.i18n.applyAll();
    SPS.reader.renderSection(state.bookId, state.sectionId);
    SPS.ui.refreshSelectors();
    SPS.ui.attachGlobalListeners();
  }

  // ---- init for non-reading pages (commentary, about, legend) ----
  // ctx: { bookId?: string, sectionId?: string }
  // bookId/sectionId orient the top-nav selectors. About/Legend can omit.
  function initPage(ctx) {
    state.pageMode = 'page';

    // 1) Derive static-page language from the filename first
    _restorePageLanguage();

    // 2) Establish book/section context for selectors and side-panel lookups
    if (ctx && ctx.bookId && SPS.books.get(ctx.bookId)) {
      state.bookId = ctx.bookId;
      const book = SPS.books.get(ctx.bookId);
      const divs = book.meta[state.lang].divisions;
      state.sectionId = (ctx.sectionId && divs.find(d => d.id === ctx.sectionId))
        ? ctx.sectionId
        : divs[0].id;
    } else {
      // No book context — pick the first registered book so selectors still work
      const firstBook = SPS.books.list()[0];
      if (firstBook) {
        state.bookId = firstBook.id;
        state.sectionId = firstBook.meta[state.lang].divisions[0].id;
      }
    }

    // 3) Build UI shells
    SPS.ui.buildLangDropdown();
    SPS.ui.buildBookDropdown();

    // 4) Apply UI strings + selectors
    SPS.i18n.applyAll();
    SPS.ui.refreshSelectors();
    SPS.ui.attachGlobalListeners();
  }

  /**
   * Apply a theme. 'light' or 'dark'.
   *
   * Sets data-theme on <html>, persists to localStorage, refreshes
   * the toggle icon. Called by the toggle button and by the page-load
   * bootstrap (in <head>) which runs before render to avoid theme flash.
   */
  const VALID_THEMES = ['light', 'dark', 'warm'];

  function setTheme(theme) {
    if (!VALID_THEMES.includes(theme)) theme = 'light';
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('sps:theme', theme); } catch (_) { }
    if (SPS.ui && SPS.ui.refreshThemeToggle) SPS.ui.refreshThemeToggle();
  }

  /**
   * Initialise theme on page load. Reads localStorage, falls back to OS
   * preference (matchMedia), defaults to light. This is also called
   * inline in <head> via the bootstrap snippet to prevent flash.
   */
  function _initTheme() {
    let theme = null;
    try { theme = localStorage.getItem('sps:theme'); } catch (_) { }
    if (!VALID_THEMES.includes(theme)) theme = 'light';
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Apply theme as early as possible (in case the inline bootstrap is missing)
  _initTheme();

  return {
    init,
    initPage,
    getState,
    setLang,
    setBook,
    setSection,
    setTheme,
  };

})();
