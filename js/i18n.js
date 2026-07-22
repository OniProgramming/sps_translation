/* ============================================================
   SPS Theology — i18n.js
   Language registry + UI string table.
   ============================================================ */

window.SPS = window.SPS || {};

SPS.i18n = (function () {

  // Supported languages. Add more here when needed.
  const LANGS = [
    { code: 'en', label: 'English',  short: 'EN' },
    { code: 'ro', label: 'Română',   short: 'RO' },
  ];

  // UI string table.
  // Romanian strings are starter translations — refine to your preferred register.
  const STRINGS = {
    en: {
      brand_tagline:        'Source Preservation Scripture',
      selector_book:        'Book',
      selector_chapter:     'Section',
      dropdown_select_book: 'Select a book',
      dropdown_select_section: 'Sections in this book',
      nav_about:            'About',
      nav_legend:           'Legend',
      panel_note:           'Note',
      panel_apparatus:      'Lexical apparatus',
      panel_about:          'About',
      panel_legend:         'Legend',
      panel_ambiguity:      'Ambiguity',
      panel_decision:       'Decision procedure',
      panel_axioms:         'Axioms served',
      panel_lexicons:       'Lexicons',
      panel_readings:       'Possible readings',
      panel_disambiguation: 'Disambiguation context',
      mode_1_label:         'Mode 1 · Plain',
      mode_2_label:         'Mode 2 · Documented',
      mode_3_label:         'Mode 3 · Transliteration',
      mode_amb_label:       'Open ambiguity',
      step_pass:            'Pass',
      step_partial:         'Partial',
      step_fail:            'Fail',
      nav_previous:         'Previous',
      nav_next:             'Next',
      nav_no_previous:      'You are at the first section.',
      nav_no_next:          'You are at the last section.',
      commentaries_head:    'Commentaries',
      commentaries_none:    'No commentary available for this section yet.',
      back_to_reading:      'Back to reading',
      page_about_eyebrow:   'About',
      page_legend_eyebrow:  'Legend',
      page_commentary_eyebrow: 'Commentary',
      lang_fallback_message: 'The {lang} version of this page is not yet available — staying on the current version.',
      theme_toggle_dark:    'Switch to dark mode',
      theme_toggle_light:   'Switch to light mode',
    },
    ro: {
      brand_tagline:        'Sursă-Păstrată Scriptură',
      selector_book:        'Carte',
      selector_chapter:     'Secțiune',
      dropdown_select_book: 'Alege o carte',
      dropdown_select_section: 'Secțiunile acestei cărți',
      nav_about:            'Despre',
      nav_legend:           'Legendă',
      panel_note:           'Notă',
      panel_apparatus:      'Aparat lexical',
      panel_about:          'Despre',
      panel_legend:         'Legendă',
      panel_ambiguity:      'Ambiguitate',
      panel_decision:       'Procedura de decizie',
      panel_axioms:         'Axiome servite',
      panel_lexicons:       'Dicționare',
      panel_readings:       'Lecturi posibile',
      panel_disambiguation: 'Context de dezambiguizare',
      mode_1_label:         'Mod 1 · Simplu',
      mode_2_label:         'Mod 2 · Documentat',
      mode_3_label:         'Mod 3 · Transliterare',
      mode_amb_label:       'Ambiguitate deschisă',
      step_pass:            'Trece',
      step_partial:         'Parțial',
      step_fail:            'Eșuează',
      nav_previous:         'Anterior',
      nav_next:             'Următor',
      nav_no_previous:      'Sunteți la prima secțiune.',
      nav_no_next:          'Sunteți la ultima secțiune.',
      commentaries_head:    'Comentarii',
      commentaries_none:    'Niciun comentariu disponibil pentru această secțiune încă.',
      back_to_reading:      'Înapoi la lectură',
      page_about_eyebrow:   'Despre',
      page_legend_eyebrow:  'Legendă',
      page_commentary_eyebrow: 'Comentariu',
      lang_fallback_message: 'Versiunea în {lang} a acestei pagini nu este disponibilă încă — rămâneți pe versiunea curentă.',
      theme_toggle_dark:    'Comută la mod întunecat',
      theme_toggle_light:   'Comută la mod luminos',
    },
  };

  function t(key) {
    const lang = SPS.app.getState().lang;
    return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
  }

  // Apply translations to all [data-i18n] elements
  function applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    // Also adjust <html lang>
    document.documentElement.lang = SPS.app.getState().lang;
  }

  return { LANGS, STRINGS, t, applyAll };

})();
