/* ============================================================
   SPS Theology — books.js
   Book registry. Each book module calls SPS.books.registerBook().
   ============================================================ */

window.SPS = window.SPS || {};

SPS.books = (function () {

  const _books = {};
  const _order = [];

  /**
   * Register a book. Called once per book module.
   *
   * Book schema:
   * {
   *   id: 'bereshit',
   *   testament: 'hebrew' | 'greek',           // for grouping in dropdown
   *   meta: {
   *     en: {
   *       title: 'Bereshit',
   *       subtitle: 'Genesis',
   *       blurb: 'The first book of the Torah.',
   *       divisions: [
   *         { id: 'D1', label: 'D1', title: '...', range: 'Gen 1:1 – 2:3', subtitle: '...' },
   *         ...
   *       ]
   *     },
   *     ro: { ... same shape, Romanian content ... }
   *   },
   *   terms: {
   *     en: { 'elohim': { term, heb, mode, gloss, note, steps, axioms }, ... },
   *     ro: { 'elohim': { ... Romanian apparatus ... }, ... }
   *   },
   *   ambiguities: {
   *     en: { 'amb-D1-p2-art': { context, hebrew_feature, readings: [{label, text}], disambiguation } },
   *     ro: { ... }
   *   },
   *   sections: {
   *     en: { 'D1': ['<p html>', ...], 'D2': [...], ... },
   *     ro: { 'D1': [...], 'D2': [...] }
   *   }
   * }
   */
  function registerBook(book) {
    if (!book || !book.id) {
      console.error('SPS.books: invalid book', book);
      return;
    }
    if (_books[book.id]) {
      console.warn('SPS.books: overwriting book', book.id);
    } else {
      _order.push(book.id);
    }
    _books[book.id] = book;
  }

  function get(id) { return _books[id] || null; }

  function list() { return _order.map(id => _books[id]); }

  // Helpers for fetching localised content with safe English fallback
  function meta(book, lang) {
    return (book.meta && book.meta[lang]) || (book.meta && book.meta.en) || null;
  }

  function termsFor(book, lang) {
    return (book.terms && book.terms[lang]) || (book.terms && book.terms.en) || {};
  }

  function ambiguitiesFor(book, lang) {
    return (book.ambiguities && book.ambiguities[lang]) || (book.ambiguities && book.ambiguities.en) || {};
  }

  function sectionsFor(book, lang) {
    return (book.sections && book.sections[lang]) || (book.sections && book.sections.en) || {};
  }

  function commentariesFor(book, lang) {
    return (book.commentaries && book.commentaries[lang]) || (book.commentaries && book.commentaries.en) || {};
  }

  return {
    registerBook,
    get,
    list,
    meta,
    termsFor,
    ambiguitiesFor,
    sectionsFor,
    commentariesFor,
  };

})();
