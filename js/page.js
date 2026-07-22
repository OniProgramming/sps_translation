/* ============================================================
   SPS Theology — page.js
   Init script for non-reading pages: commentaries, About, Legend.

   Responsibilities:
   - Read context from <body data-book="..." data-section="...">
   - Initialise the top nav (selectors, dropdowns, language switcher)
   - Wire up Mode 2 / Mode 3 / ambiguity clicks inside the page body
     to open the same side panel used on the reading view

   A clickable term in the page body looks the same as on the reading
   page:   <span class="m3" data-term="elohim">Elohim</span>
   To cite a term from a different book, add data-book="ioanes":
                            <span class="m3" data-term="logos" data-book="ioanes">Logos</span>
   Same convention applies to ambiguity markers.
   ============================================================ */

(function () {

  document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const ctx = {
      bookId:    body.dataset.book    || null,
      sectionId: body.dataset.section || null,
    };

    // Boot the shared top-nav UI in page-mode
    SPS.app.initPage(ctx);

    // Rewrite static-page links so language is sticky across navigation:
    // if we're on *.ro.html, About/Legend links should also point to *.ro.html.
    // The reading-view link (index.html) is handled separately — the reader
    // honours localStorage and renders in the saved language regardless.
    _rewriteStaticLinksForLanguage();

    // Wire Mode 2 / Mode 3 term clicks
    document.querySelectorAll('.page-body .m2, .page-body .m3').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        const termKey = el.dataset.term;
        const bookId  = el.dataset.book || ctx.bookId; // per-element override
        if (termKey) SPS.ui.openTerm(termKey, bookId);
      });
    });

    // Wire ambiguity marker clicks
    document.querySelectorAll('.page-body .amb').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        const ambKey = el.dataset.amb;
        const bookId = el.dataset.book || ctx.bookId;
        if (ambKey) SPS.ui.openAmbiguity(ambKey, bookId);
      });
    });
  });

  /**
   * If the current page is a non-default language variant (e.g. about.ro.html),
   * rewrite any sibling static-page links inside the document so they point to
   * the matching language variant and the user stays in their chosen language
   * as they navigate between About / Legend / commentaries.
   *
   * Reading-view links (index.html) are NOT rewritten — the reading view
   * reads localStorage and renders in the saved language internally.
   *
   * Heuristic: any <a> whose href ends in `.html` (other than index.html) and
   * does not already carry a 2-letter language suffix gets the current page's
   * suffix appended. Anchors with explicit `data-no-lang-rewrite` are skipped.
   */
  function _rewriteStaticLinksForLanguage() {
    // Detect the language suffix of the current page
    const pathname = location.pathname;
    const filename = pathname.substring(pathname.lastIndexOf('/') + 1) || 'index.html';
    const m = filename.match(/^.+?\.([a-z]{2})\.html$/i);
    if (!m) return; // we're on a default-language page, nothing to rewrite
    const lang = m[1];

    document.querySelectorAll('a[href]').forEach(a => {
      if (a.dataset.noLangRewrite !== undefined) return;

      const href = a.getAttribute('href');
      if (!href) return;
      // Skip anchors, mailto:, external URLs, JS handlers
      if (href.startsWith('#') || href.startsWith('mailto:') ||
          href.startsWith('http://') || href.startsWith('https://') ||
          href.startsWith('javascript:')) return;

      // Split href into path + (hash and/or query)
      const hashIdx  = href.indexOf('#');
      const queryIdx = href.indexOf('?');
      let cut = href.length;
      if (hashIdx  !== -1) cut = Math.min(cut, hashIdx);
      if (queryIdx !== -1) cut = Math.min(cut, queryIdx);
      const pathPart = href.substring(0, cut);
      const tail     = href.substring(cut);

      // Only rewrite paths ending in .html
      if (!/\.html$/i.test(pathPart)) return;

      // Skip the reading view (index.html) — the reader handles language internally
      const finalSegment = pathPart.substring(pathPart.lastIndexOf('/') + 1);
      if (/^index\.html$/i.test(finalSegment)) return;

      // Skip if already language-suffixed
      if (/\.[a-z]{2}\.html$/i.test(pathPart)) return;

      // Insert .{lang} before .html
      const newPath = pathPart.replace(/\.html$/i, '.' + lang + '.html');
      a.setAttribute('href', newPath + tail);
    });
  }

})();
