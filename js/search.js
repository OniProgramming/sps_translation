/* ============================================================
   SPS Theology — search.js
   In-memory search index over terms, passages, and commentaries.
   ============================================================ */

window.SPS = window.SPS || {};

SPS.search = (function () {

  let _index = [];
  let _indexLang = null;

  /**
   * Build the search index from all registered books.
   * Safe to call on every search-overlay open — it's a no-op
   * if the index is already current for the requested language.
   */
  function buildIndex(lang) {
    if (_indexLang === lang) return;
    _indexLang = lang;
    _index = [];
    const books = SPS.books.list();

    books.forEach(book => {
      const meta = SPS.books.meta(book, lang);
      const terms = SPS.books.termsFor(book, lang);
      const ambiguities = SPS.books.ambiguitiesFor(book, lang);
      const sections = SPS.books.sectionsFor(book, lang);
      const commentaries = SPS.books.commentariesFor(book, lang);

      // Index terms
      Object.entries(terms).forEach(([key, t]) => {
        _pushIndexed({
          type: 'term',
          book: book.id,
          bookTitle: meta.title,
          key: key,
          term: t.term,
          heb: t.heb || '',
          gloss: t.gloss || '',
          note: stripHtml(t.note || ''),
          mode: t.mode,
        });
      });

      // Index ambiguities
      Object.entries(ambiguities).forEach(([key, a]) => {
        _pushIndexed({
          type: 'ambiguity',
          book: book.id,
          bookTitle: meta.title,
          key: key,
          context: a.context || '',
          heb: a.heb || '',
          gloss: a.gloss || '',
          note: stripHtml(a.note || ''),
        });
      });

      // Index passages (by division)
      Object.entries(sections).forEach(([divId, paragraphs]) => {
        const divMeta = meta.divisions.find(d => d.id === divId);
        if (!divMeta || !paragraphs) return;
        const fullText = paragraphs.map(p => {
          if (typeof p === 'string') return stripHtml(p);
          return '';
        }).join(' ');
        _pushIndexed({
          type: 'passage',
          book: book.id,
          bookTitle: meta.title,
          divisionId: divId,
          divisionLabel: divMeta.label,
          divisionTitle: divMeta.title,
          divisionRange: divMeta.range,
          text: fullText,
        });
      });

      // Index commentaries
      Object.entries(commentaries).forEach(([divId, comms]) => {
        comms.forEach(c => {
          _pushIndexed({
            type: 'commentary',
            book: book.id,
            bookTitle: meta.title,
            divisionId: divId,
            id: c.id,
            title: c.title,
          });
        });
      });
    });
  }

  function _pushIndexed(item) {
    // Precompute normalized field text + weight once per item, at index-build
    // time, so every keystroke during search only has to normalize the query.
    item._fields = getSearchableFields(item).map(f => ({
      text: f.text,
      weight: f.weight,
      norm: normalize(f.text),
    }));
    _index.push(item);
  }

  const _stripScratch = document.createElement('div');
  function stripHtml(html) {
    _stripScratch.innerHTML = html;
    const text = _stripScratch.textContent || _stripScratch.innerText || '';
    _stripScratch.innerHTML = '';
    return text;
  }

  /**
   * Lowercase and strip diacritics/combining marks, so e.g. "sters"
   * matches "șters" and "elohim" matches "Elohím" regardless of accents.
   */
  function normalize(str) {
    return String(str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  /**
   * Search the index. Returns results ranked by match quality.
   *
   * Query is split into tokens (words); a result must contain every
   * token *somewhere* among its fields (not necessarily the same field
   * or in order), so multi-word queries like "purpose adam" match a
   * title like "The purpose of adam" regardless of word order. Matches
   * are diacritic-insensitive. Field weights (e.g. a term's headword
   * outranks its prose note) and match quality (exact > prefix >
   * word-start > substring) combine into the final score.
   *
   * @param {string} query
   * @param {object} filters - { types: ['term','passage',...], books: ['bereshit',...] }
   * @returns {array}
   */
  function search(query, filters = {}) {
    const tokens = normalize(query).split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];

    const types = filters.types || ['term', 'passage', 'ambiguity', 'commentary'];
    const books = filters.books || null;

    return _index
      .filter(item => {
        if (!types.includes(item.type)) return false;
        if (books && !books.includes(item.book)) return false;
        return true;
      })
      .map(item => ({ item, score: _scoreItem(item, tokens) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30) // limit results
      .map(({ item, score }) => Object.assign({}, item, { score, snippet: _buildSnippet(item, tokens) }));
  }

  // Every token must match at least one field somewhere in the item
  // (AND across tokens, OR across fields) or the item is excluded.
  function _scoreItem(item, tokens) {
    let total = 0;
    for (const token of tokens) {
      let best = 0;
      for (const f of item._fields) {
        if (!f.norm) continue;
        let quality = 0;
        if (f.norm === token) quality = 100;
        else if (f.norm.startsWith(token)) quality = 60;
        else if (_matchesWordStart(f.norm, token)) quality = 35;
        else if (f.norm.includes(token)) quality = 12;
        if (quality) best = Math.max(best, quality * f.weight);
      }
      if (best === 0) return 0; // this token matched nothing — item is out
      total += best;
    }
    // Small bonus for the tokens also appearing as a contiguous phrase.
    if (tokens.length > 1) {
      const phrase = tokens.join(' ');
      if (item._fields.some(f => f.norm.includes(phrase))) total += 40;
    }
    return total;
  }

  // True if `token` starts at a word boundary inside `text` (e.g. "of adam"
  // finding "adam" at the start of a later word), ranked above a mid-word
  // substring hit but below a full prefix match on the field itself.
  function _matchesWordStart(text, token) {
    let idx = text.indexOf(token);
    while (idx !== -1) {
      if (idx === 0 || /\s/.test(text[idx - 1])) return true;
      idx = text.indexOf(token, idx + 1);
    }
    return false;
  }

  function getSearchableFields(item) {
    switch (item.type) {
      case 'term':
        return [
          { text: item.term, weight: 4 },
          { text: item.heb, weight: 3 },
          { text: item.gloss, weight: 2 },
          { text: item.note, weight: 1 },
        ];
      case 'ambiguity':
        return [
          { text: item.context, weight: 4 },
          { text: item.heb, weight: 3 },
          { text: item.gloss, weight: 2 },
          { text: item.note, weight: 1 },
        ];
      case 'passage':
        return [
          { text: item.divisionTitle, weight: 3 },
          { text: item.divisionLabel, weight: 2 },
          { text: item.text, weight: 1 },
        ];
      case 'commentary':
        return [{ text: item.title, weight: 3 }];
      default:
        return [];
    }
  }

  /**
   * Build a short highlighted excerpt around the first matching token,
   * from whichever field carried the strongest match — so passage and
   * note hits show *where* the query was found, not just a bare title.
   * Returns null when the best field is short enough to show in full
   * already (e.g. a term headword), or when no safe excerpt can be
   * located (diacritic-only matches aren't re-located in the original
   * text, to avoid mis-mapping normalized indices back onto it).
   */
  function _buildSnippet(item, tokens) {
    const RADIUS = 70;
    let bestField = null;
    let bestLen = -1;
    item._fields.forEach(f => {
      if (f.text && f.text.length > bestLen && tokens.some(t => f.norm.includes(t))) {
        // Prefer the longest matching field — that's where an excerpt is useful.
        if (f.text.length > 40) { bestField = f; bestLen = f.text.length; }
      }
    });
    if (!bestField) return null;

    const text = bestField.text;
    const lower = text.toLowerCase();
    let matchAt = -1;
    let matchLen = 0;
    for (const token of tokens) {
      const at = lower.indexOf(token);
      if (at !== -1) { matchAt = at; matchLen = token.length; break; }
    }
    if (matchAt === -1) return null; // only matched via diacritic-folding; skip rather than mis-highlight

    const start = Math.max(0, matchAt - RADIUS);
    const end = Math.min(text.length, matchAt + matchLen + RADIUS);
    const before = _escHtml(text.slice(start, matchAt));
    const match = _escHtml(text.slice(matchAt, matchAt + matchLen));
    const after = _escHtml(text.slice(matchAt + matchLen, end));
    return (start > 0 ? '…' : '') + before + '<mark>' + match + '</mark>' + after + (end < text.length ? '…' : '');
  }

  function _escHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return { buildIndex, search };

})();
