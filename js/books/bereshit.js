/* ============================================================
   SPS Theology — Bereshit (Genesis)

   Bilingual book module: English content is populated for D1 and D2
   from the source manuscript. Romanian content is provided as
   structurally-complete stubs you can refine. Translate the
   stubs in place — the schema, division IDs, and term keys are
   already wired up.

   Term keys (e.g. "elohim", "ruach") are GLOBAL identifiers used
   in the section markup. Both English and Romanian apparatus must
   share these keys.

   ============================================================ */

(function () {

  // ======================================================
  // ENGLISH — TERM APPARATUS
  // ======================================================
  const TERMS_EN = {

    // D1 — complete refined lexical apparatus
    "be": {
      "term": "be-",
      "heb": "בְּ־",
      "mode": 2,
      "axioms": [
        "TA1",
        "TA4"
      ],
      "gloss": "Prefixed preposition: in, at, by, with, or when, according to construction.",
      "note": "In בְּרֵאשִׁית, be- is the prefixed preposition; it does not itself contain the definite article. English “in the beginning” therefore supplies “the” from the interpretation of the whole phrase, not from be-. Because Hebrew be- can introduce location, time, circumstance, or a temporal clause, the syntax of Genesis 1:1 must be decided from the full construction rather than from the prefix alone.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. בְּ",
          "note": "Catalogues the preposition’s broad relational range, including spatial “in/at,” temporal “in/when,” instrumental “by/with,” and other context-governed uses."
        },
        "halot": {
          "ref": "s.v. בְּ",
          "note": "Treats the prefix as a multifunctional preposition whose English rendering is determined by its complement and clause-level syntax; no article is encoded in the consonant בְּ itself."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The prefix participates in the programmatic opening phrase and therefore has structural significance.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The immediate construction narrows the relation to a temporal setting, but does not by itself settle whether the clause is absolute (“in the beginning”) or dependent (“when … began”).",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "English “in” represents the basic relation, but “in the” adds definiteness not morphologically expressed by the prefix.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "Documenting be- preserves the distinction between the preposition and the following noun reshit.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "The conventional phrase “In the beginning” carries strong liturgical and doctrinal reception; the apparatus identifies what is supplied by interpretation.",
          "result": "fail"
        }
      ]
    },
    "reshit": {
      "term": "reshit",
      "heb": "רֵאשִׁית",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA4",
        "TA6"
      ],
      "gloss": "Feminine noun: beginning, first part, earliest stage, chief or best part; often used in construct relations.",
      "note": "Reshit denotes the first or initial part of something, and in other contexts can denote the chief or choice portion. In Genesis 1:1 the form is compatible with a construct reading and lacks an overt article; the clause may nevertheless be understood definitively from syntax and discourse. The noun itself does not lexically specify an absolute beginning, creation from nothing, or a philosophical beginning of time.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. רֵאשִׁית",
          "note": "Lists beginning, first part, firstfruits, and chief or choice portion, with frequent construct usage linking the “beginning” to what follows."
        },
        "halot": {
          "ref": "s.v. רֵאשִׁית",
          "note": "Organizes temporal beginning, first portion, and priority senses under one lemma and recognizes both absolute and construct-like uses; the noun alone does not decide the full syntax of Genesis 1:1."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Reshit is the opening lexical anchor of the book and recurs in temporal, rank, and first-portion domains.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text identifies an initial creative setting but does not eliminate the noun’s construct potential or its broader “first/chief part” range.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Beginning” is close, but English commonly hears an absolute point of origin more strongly than the Hebrew noun requires.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "Transliteration preserves the relation between reshit and other Hebrew firstness/first-portion uses that “beginning” does not display.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "“In the beginning” has accumulated philosophical, creedal, and liturgical meanings that exceed the lexical content of reshit.",
          "result": "fail"
        }
      ]
    },
    "elohim": {
      "term": "Elohim",
      "heb": "אֱלֹהִים",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA4",
        "TA6"
      ],
      "gloss": "Morphologically plural noun; in Genesis 1 it refers to Israel’s deity and normally governs singular verbal forms.",
      "note": "Elohim has a plural form and a context-dependent semantic range that includes the God of Israel, other gods, and divine or supernatural beings. In Genesis 1 the consistent singular verbal agreement identifies the referent as a single acting deity. The noun remains distinct from YHWH, El, and other divine designations; neither English “God” nor “gods” reproduces both its morphology and its contextual function.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. אֱלֹהִים (related to אֱלוֹהַּ)",
          "note": "Covers the God of Israel, gods of the nations, and divine beings, with grammatical agreement and context determining whether the reference is singular or plural."
        },
        "halot": {
          "ref": "s.v. אֱלֹהִים",
          "note": "Distinguishes singular reference to Israel’s God from plural references by syntax and co-text while retaining the same plural-form lemma."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Primary divine designation throughout Genesis 1; recurrent and structurally dominant.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "Singular verbs resolve the number of the referent in this discourse, but not the full lexical range of the noun across Scripture.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“God” suppresses plural morphology; “gods” misrepresents the singular discourse referent.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "A single English title does not preserve the distinction among Elohim, YHWH, El, and related designations.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "“God” carries later philosophical and systematic-theological freight not encoded by the Hebrew form itself.",
          "result": "fail"
        }
      ]
    },
    "bara": {
      "term": "bara",
      "heb": "בָּרָא",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Qal verb, here perfect 3ms: create, bring about, fashion, or produce.",
      "note": "In the Hebrew Bible, bara is characteristically used with God as subject and denotes the bringing about of a new state, entity, people, or condition. The verb does not by itself specify the material process, and it does not lexically encode creatio ex nihilo. In Genesis 1 it marks decisive divine acts, including the creation of the cosmic totality, the tanninim, and ha-adam.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. בָּרָא",
          "note": "Defines the Qal as create or shape, with God as the regular subject, and lists objects ranging from heaven and earth to humanity and new conditions."
        },
        "halot": {
          "ref": "s.v. ברא",
          "note": "Treats the verb as divine creating or bringing into existence/being, without making “from nothing” part of the verb’s lexical definition."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Bara is a recurrent, programmatic creation verb and is contrasted with other making/forming verbs.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The context clearly identifies divine creative action, but does not specify the material mechanism.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Create” is the nearest equivalent, yet many readers hear “create from nothing,” which the verb alone does not state.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "Transliteration preserves distinctions among bara, asah, yatsar, and banah.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "The target word “create” often imports later metaphysical debates into the lexical form.",
          "result": "fail"
        }
      ]
    },
    "shamaim": {
      "term": "shamaim",
      "heb": "שָׁמַיִם",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Plural- or dual-form noun used for the sky, heavens, and the realm above the earth.",
      "note": "Shamaim is a plural-form noun without an ordinary singular counterpart in Biblical Hebrew usage. Its referential range includes the visible sky, the region of birds and weather, the celestial expanse, and the divine realm. Genesis 1 uses it both in the merism “the shamaim and the earth” and as the name given to the raqiaʿ; translating it only as “sky” or only as “heaven” narrows the range.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. שָׁמַיִם",
          "note": "Lists sky/heavens, including the region of weather and birds and the dwelling-place of God, under a plural-form noun."
        },
        "halot": {
          "ref": "s.v. שָׁמַיִם",
          "note": "Presents the visible and cosmic senses as contextual realizations of the same lemma rather than as separate Hebrew words."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "A recurrent cosmological term forming one pole of the heaven-and-earth totality.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "Local contexts narrow particular references, but the D1 discourse moves across visible-sky and cosmic-heavens functions.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Sky” is too narrow; “heaven(s)” can imply later cosmological or afterlife concepts.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "Transliteration keeps one Hebrew term visible across its several contextual functions.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Target equivalents are heavily shaped by later cosmologies and religious conceptions of “heaven.”",
          "result": "fail"
        }
      ]
    },
    "tohu-va-vohu": {
      "term": "tohu va-vohu",
      "heb": "תֹהוּ וָבֹהוּ",
      "mode": 2,
      "axioms": [
        "TA1",
        "TA4"
      ],
      "gloss": "Assonantal noun pair: waste/indeterminacy and emptiness/void.",
      "note": "Tohu va-vohu is a tightly bound sound-pair. Tohu can denote wasteness, emptiness, unreality, or an unproductive wilderness; vohu is rare and occurs only in association with tohu. In Jeremiah 4:23 and Isaiah 34:11 the pair evokes de-created or devastated conditions. “Formlessness and emptiness” is defensible in Genesis 1:2, but it is an interpretive rendering rather than a one-to-one reproduction of the pair’s semantic and sonic force.",
      "lexicons": {
        "bdb": {
          "ref": "s.vv. תֹּהוּ; בֹּהוּ",
          "note": "Gives tohu a range including wasteness, emptiness, and unproductive space; treats vohu as a rare noun meaning emptiness, occurring with tohu."
        },
        "halot": {
          "ref": "s.vv. תֹּהוּ; בֹּהוּ",
          "note": "Maintains the pair’s semantic field of desolation/emptiness and notes its formulaic reuse in prophetic descriptions of devastation."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The pair is structurally prominent at the narrative’s initial condition and recurs intertextually.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The context supports an unformed/unfilled condition but does not reduce tohu to geometric “formlessness” alone.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Formlessness and emptiness” communicates a major sense but loses lexical breadth and sound-patterning.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "The Hebrew alliteration/assonance and prophetic reuse form a contrastive network not recoverable in plain English.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Later chaos-cosmos systems can overdetermine the phrase beyond what the nouns themselves assert.",
          "result": "fail"
        }
      ]
    },
    "darkness": {
      "term": "darkness / ḥoshekh",
      "heb": "חֹשֶׁךְ",
      "mode": 1,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Masculine noun: darkness, obscurity, absence of light.",
      "note": "In Genesis 1, ḥoshekh denotes literal darkness in opposition to or (“light”); Elohim separates the two and names the darkness “Night.” The noun can carry figurative senses elsewhere, but Genesis 1 does not call the darkness evil, hostile, or a personal power. The asterisk marks that the ordinary English equivalent is retained while the apparatus blocks later moral symbolism from being read back into this occurrence.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. חֹשֶׁךְ",
          "note": "Begins with literal darkness opposed to light and also records later figurative uses such as obscurity, distress, or judgment."
        },
        "halot": {
          "ref": "s.v. חֹשֶׁךְ",
          "note": "Distinguishes physical darkness from metaphorical extensions; Genesis 1 belongs to the literal cosmological use."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Darkness is structurally important in the light/darkness and day/night oppositions.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text clearly narrows the sense to physical darkness.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "English “darkness” preserves the denotation without material loss.",
          "result": "pass"
        },
        {
          "n": 4,
          "text": "English maintains the contrast with “light” just as Hebrew maintains ḥoshekh/or.",
          "result": "pass"
        },
        {
          "n": 5,
          "text": "The word can attract later moral symbolism, but the plain rendering remains valid when the apparatus explicitly limits this occurrence to the contextual sense.",
          "result": "pass"
        }
      ]
    },
    "tehom": {
      "term": "tehom",
      "heb": "תְּהוֹם",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Noun: deep, oceanic depth, abyss, or subterranean/primeval waters.",
      "note": "Tehom denotes the great watery deep or abyss. It is etymologically related to Akkadian tiāmtu/tâmtu (“sea”), but Genesis 1 does not grammatically personify it and the Hebrew word should not simply be equated with the Babylonian goddess Tiamat. “The deep” is a workable gloss, yet it can conceal the term’s ancient cosmological register and its later uses for sea-depths and subterranean waters.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. תְּהוֹם",
          "note": "Lists deep, sea, abyss, and subterranean waters, including Genesis 1:2 and poetic descriptions of the oceanic depths."
        },
        "halot": {
          "ref": "s.v. תְּהוֹם",
          "note": "Covers primeval/oceanic deep and related water-depth senses while treating the Hebrew noun as non-personal in its ordinary grammar."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Tehom is a central cosmological term in the opening scene and recurs throughout biblical water imagery.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "Genesis 1 narrows the referent to the watery deep, but not to a single modern cosmological model.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Deep” is semantically close but less specific and can sound merely spatial rather than oceanic/cosmic.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "Transliteration distinguishes tehom from yam, mayim, and other Hebrew water terms.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Both mythological identification with Tiamat and modern demythologizing paraphrases can exceed the Hebrew noun.",
          "result": "fail"
        }
      ]
    },
    "ruach": {
      "term": "ruach",
      "heb": "רוּחַ",
      "mode": 3,
      "axioms": [
        "TA2",
        "TA3",
        "TA4"
      ],
      "gloss": "Common-gender noun with a semantic range including wind, breath, spirit, and animating force.",
      "note": "Ruach names moving air, breath, a creature’s animating vitality, a person’s disposition, or a divine spirit. In Genesis 1:2 it stands in a construct relation with Elohim and is followed by the feminine participle merachefet. Grammatically viable readings include “wind of Elohim,” “spirit of Elohim,” and, by an idiomatic analysis of the genitive, “a mighty/divine wind.” The immediate co-text does not force a single English equivalent.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. רוּחַ",
          "note": "Treats wind, breath, spirit, disposition, and divine agency as contextual senses of one broad lemma."
        },
        "halot": {
          "ref": "s.v. רוּחַ",
          "note": "Organizes atmospheric, physiological, psychological, and divine uses under the same lexical entry and recognizes the interpretive difficulty of construct phrases such as Genesis 1:2."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Ruach is programmatic in the opening scene and belongs to a major biblical lexical domain.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The construct phrase and co-text leave several established senses grammatically live.",
          "result": "fail"
        },
        {
          "n": 3,
          "text": "No single English word preserves wind, breath, spirit, and animating-force possibilities together.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "Choosing one equivalent erases the lexical continuity of ruach across physical and personal contexts.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "“Spirit” readily imports later pneumatological personhood; “wind” can exclude the divine-agency reading.",
          "result": "fail"
        }
      ]
    },
    "merachefet": {
      "term": "merachefet",
      "heb": "מְרַחֶפֶת",
      "mode": 2,
      "axioms": [
        "TA1"
      ],
      "gloss": "Piel participle feminine singular of רחף: hovering, fluttering, or moving to and fro above.",
      "note": "Merachefet agrees grammatically with ruach and presents the action as ongoing. The Piel form occurs in Genesis 1:2 and Deuteronomy 32:11, where an eagle hovers/flutters over its young. That parallel supplies avian motion imagery, but “protective” is an inference from the Deuteronomy context rather than part of the verb’s lexical definition. “Hovering” is therefore a sound rendering when the Hebrew form and intertext are documented.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. רָחַף",
          "note": "Defines the Piel with hovering, fluttering, or moving gently, citing Genesis 1:2 and Deuteronomy 32:11."
        },
        "halot": {
          "ref": "s.v. רחף",
          "note": "Treats the Piel participle as sustained hovering/fluttering motion and distinguishes lexical movement from contextual implications such as protection."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The participle shapes the dynamic image of the opening scene and echoes Deuteronomy 32:11.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text narrows the action to sustained movement over the waters.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "“Hovering” conveys the central motion accurately.",
          "result": "pass"
        },
        {
          "n": 4,
          "text": "The documented form preserves feminine agreement and the rare Deuteronomy parallel that English alone does not show.",
          "result": "partial"
        },
        {
          "n": 5,
          "text": "Avoiding “brooding” prevents imported reproductive or sentimental imagery not required by the verb.",
          "result": "pass"
        }
      ]
    },
    "or": {
      "term": "or",
      "heb": "אוֹר",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA4"
      ],
      "gloss": "Masculine noun: light, illumination, daylight, or radiance.",
      "note": "Or denotes light itself rather than a light-bearing object. Genesis 1 distinguishes or from maʾor/meʾorot, the luminary or luminaries appointed later. The sequence places the appearance of or before the appointment of the celestial luminaries, but the lexical distinction alone should not be expanded into a physical theory of light.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. אוֹר",
          "note": "Lists light, daylight, and illumination in literal and figurative uses."
        },
        "halot": {
          "ref": "s.v. אוֹר",
          "note": "Distinguishes the noun “light” from מָאוֹר, a source or bearer of light, while retaining literal and metaphorical extensions."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Or is a major structural term in the day-one/day-four correspondence.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The context clearly identifies visible illumination, though not its physical mechanism.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Light” is close but cannot display the distinction from maʾor when both become “light/lights.”",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "Transliteration preserves the lexical contrast or ↔ meʾorot.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Later metaphysical or christological symbolism must not be built into the lexical rendering of Genesis 1.",
          "result": "fail"
        }
      ]
    },
    "yom": {
      "term": "yom",
      "heb": "יוֹם",
      "mode": 3,
      "axioms": [
        "TA2",
        "TA6"
      ],
      "gloss": "Masculine noun: daylight, day, a day-cycle, or a bounded time/occasion.",
      "note": "Yom has a context-sensitive range. In Genesis 1:5 it first names the lighted portion in contrast with Night, and the repeated evening–morning formula then frames numbered cycles. Elsewhere the same noun can denote an occasion or an extended period, as in “in the yom of …”. The D1 literary pattern supports recurring bounded cycles, but the noun alone does not settle every modern chronological question attached to the creation days.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. יוֹם",
          "note": "Lists daylight, day as a temporal unit, and broader time or occasion uses, with meaning governed by syntax and accompanying expressions."
        },
        "halot": {
          "ref": "s.v. יוֹם",
          "note": "Differentiates daylight, calendar day, and indefinite/appointed time uses within one lemma."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Yom structures the entire seven-part sequence and also names the lighted period.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "Numbering and evening–morning formulas narrow each refrain to a recurring bounded cycle, while the lemma retains broader uses elsewhere.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "English “day” is close but tends to collapse daylight, day-cycle, and broader-time senses into one modern assumption.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "Transliteration makes visible that the same Hebrew word serves both the named daylight and the numbered units.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "“Day” is burdened by modern age-of-earth debates that the lexical form itself does not resolve.",
          "result": "fail"
        }
      ]
    },
    "raqia": {
      "term": "raqiaʿ",
      "heb": "רָקִיעַ",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Masculine noun: an extended or spread-out expanse; related to the verb רקע, “spread out, stamp, beat out.”",
      "note": "Raqiaʿ is the expanse placed between waters and named shamaim. Its derivational relationship to raqaʿ evokes spreading or beating out, but etymology alone does not determine whether Genesis imagines a rigid material dome, an open expanse, or another ancient cosmological conception. “Firmament” overstates firmness for many readers; “expanse” communicates function but loses the root imagery.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. רָקִיעַ; compare רָקַע",
          "note": "Defines the noun as an extended surface or expanse and connects it with the verb used for spreading or hammering out."
        },
        "halot": {
          "ref": "s.v. רָקִיעַ",
          "note": "Glosses firmament/expanse and records its cosmological use without making one modern material reconstruction part of the lexical definition."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Raqiaʿ is a central cosmological structure and a recurrent term in D1.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text defines its separating and naming functions but not its precise material constitution.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Firmament” and “expanse” each preserve only part of the lexical and reception profile.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "Transliteration preserves the relation to raqaʿ and distinguishes the object from shamaim.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Modern solid-dome versus atmosphere debates can make either English equivalent overdeterminative.",
          "result": "fail"
        }
      ]
    },
    "good": {
      "term": "good / tov",
      "heb": "טוֹב",
      "mode": 1,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Adjective, here predicative: good, pleasing, beneficial, suitable, or fitting.",
      "note": "In the refrain ki tov, the adjective expresses Elohim’s positive evaluation of what has appeared or been ordered. Tov has moral, aesthetic, practical, and beneficial senses across Biblical Hebrew; this context does not require choosing only one. “Good” is the correct plain equivalent, but it should not automatically be expanded to “morally perfect,” “metaphysically flawless,” or “incapable of later change.”",
      "lexicons": {
        "bdb": {
          "ref": "s.v. טוֹב",
          "note": "Lists pleasant, agreeable, beneficial, valuable, fitting, and morally good senses, with the relevant nuance supplied by context."
        },
        "halot": {
          "ref": "s.v. טוֹב",
          "note": "Treats evaluative, qualitative, beneficial, and ethical uses under one adjective; Genesis 1 uses a broad positive evaluation."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The repeated evaluation is a major refrain and contributes to the structure of D1.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text clearly narrows the term to a positive evaluation while leaving aesthetic, functional, and beneficial dimensions compatible.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "English “good” preserves a comparably broad evaluative range.",
          "result": "pass"
        },
        {
          "n": 4,
          "text": "The translation maintains the repeated tov refrain consistently, including tov meʾod at the climax.",
          "result": "pass"
        },
        {
          "n": 5,
          "text": "Although later theology may overread “good” as technical perfection, the ordinary equivalent remains valid when the note marks that limit.",
          "result": "pass"
        }
      ]
    },
    "zera": {
      "term": "zeraʿ",
      "heb": "זֶרַע",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA2"
      ],
      "gloss": "Masculine collective noun: seed; by extension offspring, progeny, or lineage.",
      "note": "In Genesis 1 the immediate referent is botanical seed and seed-producing vegetation. Across Genesis, however, the same noun becomes a major term for human offspring and lineage. Retaining zeraʿ at selected points preserves the lexical bridge between biological propagation, genealogical continuity, and promise language that separate English words (“seed,” “offspring,” “descendants”) divide.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. זֶרַע",
          "note": "Lists seed in the agricultural sense and collective offspring or descendants in human and animal contexts."
        },
        "halot": {
          "ref": "s.v. זֶרַע",
          "note": "Organizes botanical seed, semen, offspring, and posterity as related uses of one collective noun."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Zeraʿ becomes a structurally important cross-Genesis term linking vegetation, reproduction, genealogy, and promise.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "Genesis 1 narrows the local sense to plant seed, but the book-level lexical network remains active.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Seed” works locally but sounds archaic or merely botanical; “offspring” cannot be used for plants.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "No one English word preserves the botanical-to-genealogical continuity of zeraʿ.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Later doctrinal readings of “seed” should not replace the lemma’s ordinary collective range.",
          "result": "fail"
        }
      ]
    },
    "meorot": {
      "term": "meʾorot",
      "heb": "מְאֹרֹת",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA4"
      ],
      "gloss": "Masculine plural of maʾor: luminaries, light-bearers, or sources of illumination.",
      "note": "Meʾorot are the light-bearing bodies placed in the raqiaʿ to illuminate the earth, mark signs and moʿadim, and govern day and night. The noun is related to or (“light”) but is not identical with it: or is illumination, while maʾor is a bearer or source of illumination. Genesis calls them the greater and lesser luminary rather than naming the sun and moon directly.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. מָאוֹר",
          "note": "Defines a light, luminary, or light-bearing object and distinguishes it from the abstract/substantive noun אוֹר, “light.”"
        },
        "halot": {
          "ref": "s.v. מָאוֹר",
          "note": "Lists luminary and source of light, including the celestial bodies and sanctuary lighting contexts."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Meʾorot anchors the day-four panel and corresponds structurally to the creation of or on day one.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The context identifies celestial light-bearers without naming their astronomical identities in the noun itself.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Lights” collapses bearer and illumination; “luminaries” is accurate but formal and less transparent.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "Transliteration preserves the deliberate lexical relation and distinction between or and meʾorot.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Modern astronomical terminology and ancient-deity identifications can both overdetermine the neutral functional noun.",
          "result": "fail"
        }
      ]
    },
    "moadim": {
      "term": "moʿadim",
      "heb": "מוֹעֲדִים",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA2"
      ],
      "gloss": "Plural of moʿed: appointed times, fixed occasions, assemblies, or calendrical observances.",
      "note": "In Genesis 1:14 the luminaries serve, among other functions, for moʿadim. The term can denote appointed times generally, meeting times, assemblies, and later Israel’s cultic festivals. “Seasons” may be too meteorological or vague; “festivals” imports a later specialized use into the creation context. Transliteration preserves the calendrical and appointed-time range.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. מוֹעֵד",
          "note": "Lists appointed time, appointed place, meeting, assembly, and sacred season or festival according to context."
        },
        "halot": {
          "ref": "s.v. מוֹעֵד",
          "note": "Distinguishes temporal appointment, meeting/assembly, and cultic-calendar uses within the same lemma."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The term links the celestial calendar of Genesis 1 with later appointed-time vocabulary.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The creation context narrows the sense toward calendrical appointed times but does not specify festivals alone.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Seasons” and “festivals” each capture only part of the range.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "Transliteration preserves continuity with later moʿed/moʿadim texts.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "A liturgical-calendar reading may be relevant intertextually but should not be inserted as the sole lexical meaning here.",
          "result": "fail"
        }
      ]
    },
    "nephesh-chayyah": {
      "term": "nephesh chayyah",
      "heb": "נֶפֶשׁ חַיָּה",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA2",
        "TA6"
      ],
      "gloss": "Noun plus agreeing adjective: a living nephesh; a living creature or animated being.",
      "note": "Nephesh chayyah designates living, breathing creatures. Genesis 1 applies the phrase to aquatic and land creatures; Genesis 2:7 applies the same phrase to ha-adam after receiving the breath of life. Nephesh does not here denote an immaterial soul separable from the body. No single English rendering preserves both the creaturely sense and the phrase’s continuity across animals and human beings.",
      "lexicons": {
        "bdb": {
          "ref": "s.vv. נֶפֶשׁ; חַי",
          "note": "For nephesh, lists living being, life, self, appetite, and person; the phrase נֶפֶשׁ חַיָּה is used of living creatures and of the human in Genesis 2:7."
        },
        "halot": {
          "ref": "s.vv. נֶפֶשׁ; חַי",
          "note": "Treats nephesh as the living being/self rather than a technical immaterial component, with chayyah marking the being as alive."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The phrase is a major anthropological and zoological bridge between Genesis 1 and 2.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The immediate context identifies living creatures, but the phrase’s application across species remains significant.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Living creature” works for animals but can conceal that the same Hebrew expression is used of ha-adam; “living soul” is misleading.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "Transliteration preserves the continuity of nephesh vocabulary across animal and human life.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "“Soul” imports later body–soul dualism into a phrase denoting the living being as a whole.",
          "result": "fail"
        }
      ]
    },
    "tanninim": {
      "term": "tanninim",
      "heb": "תַּנִּינִם",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA2"
      ],
      "gloss": "Masculine plural of tannin: large serpentine, marine, or formidable creatures.",
      "note": "Tannin has a broad range that can include large sea creatures, serpents, and dragon-like beings in poetic imagery. In Genesis 1:21 the article and adjective identify “the great tanninim,” but the text does not specify a biological species such as whales. The narrative places these culturally formidable creatures within the created order as objects of Elohim’s bara.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. תַּנִּין",
          "note": "Lists serpent, dragon, and large sea or river creature, with the precise referent determined by context."
        },
        "halot": {
          "ref": "s.v. תַּנִּין",
          "note": "Covers aquatic monster/large creature and serpent-like uses, including literal and poetic contexts."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The tanninim are singled out in the day-five creation account and carry strong ancient imaginative resonance.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The marine context narrows the domain but not the exact species or degree of mythic imagery.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Sea monsters,” “great sea creatures,” and “whales” each over- or under-specify the noun.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "Transliteration preserves continuity with serpent/dragon/sea-creature uses elsewhere.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Both mythological personification and modern zoological reduction can impose more than the Genesis wording states.",
          "result": "fail"
        }
      ]
    },
    "barakh": {
      "term": "barakh",
      "heb": "בָּרַךְ; וַיְבָרֶךְ",
      "mode": 2,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Piel verb: bless, confer benefit, favor, fruitfulness, or an empowered state.",
      "note": "In D1 Elohim barakh the living creatures and ha-adam in connection with fruitfulness and multiplication, and later barakh the seventh yom. “Blessed” is the standard equivalent, but the contexts show that blessing is performative: it grants or establishes a beneficial capacity or status rather than merely expressing a good wish. The root’s full range should be derived from usage, not from a simplistic etymology connecting it to “knee.”",
      "lexicons": {
        "bdb": {
          "ref": "s.v. בָּרַךְ",
          "note": "For the Piel, lists bless, invoke blessing, and confer prosperity or benefit, with God and humans as subjects in different constructions."
        },
        "halot": {
          "ref": "s.v. ברך",
          "note": "Treats Piel blessing as effective or declarative bestowal of favor/benefit, distinct from the Qal “kneel” use."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Barakh marks major transitions: animal fertility, human vocation, and the seventh day.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "Each context narrows the concrete effect, but the verb retains a wider performative blessing domain.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Blessed” is correct but can sound like verbal approval or a wish rather than an effective conferral.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "The apparatus links all D1 occurrences to one Hebrew root despite different beneficiaries.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Later sacramental or prosperity-theology concepts should not be imported into the lexical form.",
          "result": "fail"
        }
      ]
    },
    "adam": {
      "term": "adam",
      "heb": "אָדָם / הָאָדָם",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA4",
        "TA6"
      ],
      "gloss": "Collective/common noun: human, humankind, or the human; grammatically singular but often corporately referential.",
      "note": "In Genesis 1:26 adam appears without the article and refers collectively to humanity; in 1:27 ha-adam is created as male and female, and the discourse moves from singular “him” to plural “them.” The word is not required here to function as the personal name “Adam.” Later Genesis develops a sound-network among adam, adamah, and related terms, which ordinary English “man/humanity” cannot preserve consistently.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. אָדָם",
          "note": "Lists human being, humankind, and the individual human, with the article and context helping distinguish generic, collective, and more individualized uses."
        },
        "halot": {
          "ref": "s.v. אָדָם",
          "note": "Recognizes collective humanity, an individual person, and the personal-name development as contextually differentiated uses."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Adam is the central anthropological term of Genesis 1–3 and participates in a major lexical network.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The male-and-female and singular/plural syntax resolves the reference as corporate humanity in Genesis 1.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "“Man” is gender-narrowing; “humanity” loses the singular grammar; “human” does not preserve the adam/adamah sound-link.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "No single English solution preserves collective singularity, later individualization, and the adam/adamah network.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Traditional identification with a male individual named Adam can be prematurely imported into Genesis 1:26–27.",
          "result": "fail"
        }
      ]
    },
    "tselem": {
      "term": "tselem",
      "heb": "צֶלֶם",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Masculine noun: image, representation, statue, or material likeness.",
      "note": "Tselem commonly denotes an image or representation, including cultic images and statues. In Genesis 1 it describes humanity’s relation to Elohim and is immediately followed by the vocation to rule. Ancient Near Eastern royal and image practices illuminate a representative function, but “embodying divine presence and authority” is an interpretation of the literary-cultural setting, not the bare dictionary meaning of tselem.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. צֶלֶם",
          "note": "Lists image, likeness, and representative figure, including physical images and the Genesis image-of-Elohim texts."
        },
        "halot": {
          "ref": "s.v. צֶלֶם",
          "note": "Includes statue/image and figurative representation, allowing context to define how the image relation functions in Genesis."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Tselem is a central anthropological and royal-representational term in Genesis 1.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text links the image relation with humanity’s corporate vocation, but does not exhaust the noun’s content.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Image” is close but carries later philosophical and theological definitions not contained in the noun alone.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "Transliteration preserves its distinction from demut and its concrete image/statue uses elsewhere.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Imago Dei traditions can overdetermine the term through later faculty, substance, or relational theories.",
          "result": "fail"
        }
      ]
    },
    "demut": {
      "term": "demut",
      "heb": "דְּמוּת",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Feminine noun: likeness, resemblance, comparable form, or pattern.",
      "note": "Demut denotes likeness or resemblance. In Genesis 1:26 it stands beside tselem; Genesis 5:1 and 5:3 reuse the vocabulary for divine–human and father–son resemblance. This later inner-Genesis parallel supports a relational/resemblance dimension, but “filial legal continuity” should not be presented as the lexicon’s definition. The pairing does not require the two nouns to be either exact synonyms or sharply separable technical components.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. דְּמוּת",
          "note": "Lists likeness, similitude, and appearance, including comparisons and the Genesis image-likeness passages."
        },
        "halot": {
          "ref": "s.v. דְּמוּת",
          "note": "Treats resemblance/form and comparative appearance as the core range, with context determining the relation intended."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Demut participates in the key image-likeness formula and recurs in Genesis 5.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text supports resemblance and correspondence but does not define a technical ontology.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Likeness” is close but can sound abstract and loses the link to later father–son resemblance language.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "Transliteration keeps demut distinct from tselem while allowing overlap rather than forcing a later dichotomy.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Later theological schemes that assign separate faculties to “image” and “likeness” should not be encoded in translation.",
          "result": "fail"
        }
      ]
    },
    "yirdu": {
      "term": "yirdu",
      "heb": "יִרְדּוּ",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Qal imperfect/jussive 3mp of רדה: let them rule, govern, or exercise dominion.",
      "note": "Yirdu expresses the intended rule of collective adam over the listed creatures. The verb radah can denote governance or dominion and can be used for both legitimate and harsh rule in other contexts; benevolent “stewardship” is therefore not contained in the verb by itself. Genesis 1 frames the rule through divine image-language, creaturely blessing, and food provision, which must inform interpretation without rewriting the lexical force.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. רָדָה",
          "note": "Lists rule, have dominion, and dominate, with uses ranging from royal governance to oppressive rule depending on context."
        },
        "halot": {
          "ref": "s.v. רדה",
          "note": "Defines exercise of rule/control and allows the surrounding discourse to determine its quality and limits."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The verb states the central human vocation in Genesis 1:26 and 1:28.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text identifies the governed domain and divine commission, but does not reduce the verb to either exploitation or gentle care.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Rule” and “have dominion” are possible but carry different modern political and ecological connotations.",
          "result": "fail"
        },
        {
          "n": 4,
          "text": "Transliteration preserves the specific radah vocabulary and its reuse beyond Genesis.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Both exploitative and idealized stewardship readings can import ethical conclusions beyond the verb’s lexical content.",
          "result": "fail"
        }
      ]
    },
    "kivshuha": {
      "term": "kivshuha",
      "heb": "כִבְשֻׁהָ",
      "mode": 3,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Qal imperative 2mp of כבש plus 3fs suffix: subdue it, bring it under control, or subject it.",
      "note": "Kivshuha addresses the human pair corporately: “subdue it,” with the feminine singular suffix referring to the earth. Kabash is a strong verb used elsewhere for bringing land or people under control and can denote subjugation. The Genesis commission therefore should not be softened lexically into “care for,” though its ethical exercise must be interpreted within the wider creation discourse rather than equated automatically with abuse.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. כָּבַשׁ",
          "note": "Lists subdue, bring into bondage, force, or bring under control, with land and peoples among its objects."
        },
        "halot": {
          "ref": "s.v. כבש",
          "note": "Defines subjection/control and retains the verb’s forceful potential while leaving moral evaluation to context."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The imperative is a key component of the human commission and has major reception-historical consequences.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The object suffix clearly refers to the earth, but the manner and limits of subduing are not lexically specified.",
          "result": "partial"
        },
        {
          "n": 3,
          "text": "“Subdue it” preserves the force better than softer paraphrases, but remains heavily loaded in modern English.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "Transliteration keeps kabash distinct from radah and from verbs of serving/guarding in Genesis 2.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Ecological exploitation or, conversely, mere caretaking should not be inserted into the verb without broader argument.",
          "result": "fail"
        }
      ]
    },
    "natatti": {
      "term": "natatti",
      "heb": "נָתַתִּי",
      "mode": 2,
      "axioms": [
        "TA1"
      ],
      "gloss": "Qal perfect 1cs of נתן: I have given, granted, assigned, or placed.",
      "note": "Natatti presents Elohim as the first-person giver and the food provision as an enacted grant: “I have given.” The Hebrew perfect is well represented by the English present perfect here. The apparatus is useful primarily for tracing the recurrent natan (“give/set/place/appoint”) root and for showing that the food arrangement is expressed as a grant, not merely as an observation.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. נָתַן",
          "note": "Lists give, set, put, place, appoint, and grant, with the construction and object determining the English sense."
        },
        "halot": {
          "ref": "s.v. נתן",
          "note": "Treats transfer, placement, assignment, and appointment as contextually related uses of the highly frequent verb."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The form is locally important because it frames food as divine provision, though the lemma is not a specialized domain term.",
          "result": "partial"
        },
        {
          "n": 2,
          "text": "The co-text clearly narrows the sense to giving/granting.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "“I have given” preserves person, aspectual force, and basic meaning very well.",
          "result": "pass"
        },
        {
          "n": 4,
          "text": "The documented form can trace natan across give/place/appoint contexts that English separates.",
          "result": "partial"
        },
        {
          "n": 5,
          "text": "The ordinary translation carries little later doctrinal burden.",
          "result": "pass"
        }
      ]
    },
    "lakhem": {
      "term": "lakhem",
      "heb": "לָכֶם",
      "mode": 2,
      "axioms": [
        "TA1",
        "TA4"
      ],
      "gloss": "Preposition לְ plus 2mp suffix: to you or for you, addressed to a plural group.",
      "note": "Lakhem is explicitly plural. In Genesis 1:29 the addressees are the male-and-female humanity just blessed; Biblical Hebrew uses the masculine plural as the normal form for a mixed group. The form therefore does not restrict the grant to males. English “you” preserves neither number nor grammatical gender, so the apparatus makes the corporate address visible.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. לְ; pronominal suffix כֶם",
          "note": "The preposition marks direction, recipient, possession, purpose, or benefit; the -khem suffix is second-person masculine plural."
        },
        "halot": {
          "ref": "s.v. לְ",
          "note": "Analyzes the preposition with pronominal suffix as “to/for you (plural),” with grammatical masculine plural capable of addressing a mixed group."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The plural recipient is significant for the corporate human commission and provision.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text clearly identifies the male-and-female human pair/community as the addressee.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "English “you” conveys the recipient but erases plurality and grammatical form.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "The apparatus preserves the contrast between singular and plural second-person forms that English lacks.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Documenting mixed-group masculine grammar prevents an anachronistic inference that only males are addressed.",
          "result": "fail"
        }
      ]
    },
    "tov_meod": {
      "term": "tov meʾod",
      "heb": "טוֹב מְאֹד",
      "mode": 2,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Adjective plus intensifier: very good, exceedingly good, or good to a high degree.",
      "note": "Tov meʾod is the climactic evaluation after Elohim sees “all that he had made.” Meʾod functions adverbially as an intensifier, so “very good” is a direct rendering. The phrase evaluates the completed ordered whole; it does not lexically mean “perfect,” “unchangeable,” or “incapable of corruption,” and such claims require arguments beyond the phrase itself.",
      "lexicons": {
        "bdb": {
          "ref": "s.vv. טוֹב; מְאֹד",
          "note": "Tov covers broad positive evaluation; meʾod commonly functions adverbially as very, exceedingly, or greatly."
        },
        "halot": {
          "ref": "s.vv. טוֹב; מְאֹד",
          "note": "Treats the phrase as intensified positive evaluation, with meʾod marking degree rather than introducing a separate technical quality."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The phrase is the evaluative climax of the six-day sequence.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text clearly applies the evaluation to the totality of what was made.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "“Very good” is an excellent equivalent for the phrase.",
          "result": "pass"
        },
        {
          "n": 4,
          "text": "Documenting the Hebrew preserves the contrast between repeated tov and climactic tov meʾod.",
          "result": "partial"
        },
        {
          "n": 5,
          "text": "The note is needed because theological reception often expands “very good” into technical metaphysical perfection.",
          "result": "partial"
        }
      ]
    },
    "kalah": {
      "term": "kalah / vaykhal",
      "heb": "כָּלָה / וַיְכַל",
      "mode": 2,
      "axioms": [
        "TA1"
      ],
      "gloss": "Piel verb, here wayyiqtol 3ms: finished, completed, or brought to an end.",
      "note": "Genesis 2:2 uses vaykhal, a Piel form of kalah, for Elohim completing his work. The preceding verse uses a related passive form for the completion of the shamaim, earth, and their host. The verb marks completion, not exhaustion. The statement “on the seventh yom” belongs to the WLC wording; textual variants that read “sixth” are a separate textual-critical issue, not a lexical meaning of kalah.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. כָּלָה",
          "note": "For the Piel, lists complete, finish, bring to an end, and consume, with the object and stem determining the nuance."
        },
        "halot": {
          "ref": "s.v. כלה",
          "note": "Distinguishes completion/ending in the Piel from other stem-specific senses and includes Genesis 2:2 among completion uses."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The verb marks the transition from creative work to cessation and forms a completion motif across Genesis 2:1–2.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The work-object clearly narrows the sense to completing/finishing.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "“Finished” and “completed” both represent the sense accurately.",
          "result": "pass"
        },
        {
          "n": 4,
          "text": "The apparatus links the active and passive Hebrew forms in the two verses, which English may render differently.",
          "result": "partial"
        },
        {
          "n": 5,
          "text": "No fatigue or depletion should be inferred from the completion verb itself.",
          "result": "pass"
        }
      ]
    },
    "shevi": {
      "term": "sheviʿi",
      "heb": "שְׁבִיעִי / הַשְּׁבִיעִי",
      "mode": 2,
      "axioms": [
        "TA1",
        "TA4"
      ],
      "gloss": "Masculine singular ordinal adjective: seventh; with the article, “the seventh.”",
      "note": "Sheviʿi is the ordinal “seventh,” agreeing with yom. Genesis 2 repeatedly uses the definite form ha-sheviʿi (“the seventh”), marking this day as a specific member and culmination of the sequence. The word is related to the numeral seven; it should not be treated as lexically derived from shavat, although the narrative creates a strong sound-and-theme association between seventh and cessation.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. שְׁבִיעִי",
          "note": "Defines the ordinal seventh and records masculine/feminine forms and their agreement with the nouns they modify."
        },
        "halot": {
          "ref": "s.v. שְׁבִיעִי",
          "note": "Treats it as the ordinal from the seven-number system; definiteness is supplied by the article in the Genesis form."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The seventh day is the climax of the sequence and the ordinal is repeated three times in Genesis 2:2–3.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The co-text fully resolves the ordinal meaning and its referent.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "English “seventh” preserves the basic meaning accurately.",
          "result": "pass"
        },
        {
          "n": 4,
          "text": "The documented form preserves the repeated article and the Hebrew sound-pattern beside shavat.",
          "result": "partial"
        },
        {
          "n": 5,
          "text": "Later Sabbath law and theology should be related intertextually, not inserted into the ordinal adjective itself.",
          "result": "pass"
        }
      ]
    },
    "shavat": {
      "term": "shavat",
      "heb": "שָׁבַת / וַיִּשְׁבֹּת",
      "mode": 2,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Qal verb: cease, stop, desist, or come to an end from an activity.",
      "note": "Shavat denotes ceasing from work or activity. Genesis 2 does not use a verb meaning recovery from fatigue; “rested” can therefore mislead if it implies tiredness. The noun Shabbat is associated with this root, and Genesis 2 establishes the creation-pattern of cessation, while later legal and theological developments must be distinguished from the verb’s immediate lexical sense.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. שָׁבַת",
          "note": "Lists cease, desist, stop, and put an end to, including cessation from labor and the ending of activities or conditions."
        },
        "halot": {
          "ref": "s.v. שבת",
          "note": "Treats cessation/desisting as the core Qal meaning and distinguishes it from verbs whose primary sense is repose or settling down."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "Shavat is the key verb of the seventh-day climax and a foundational root for later Sabbath vocabulary.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The complement “from all his work” clearly narrows the sense to cessation from activity.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "“Ceased” preserves the lexical sense better than “rested,” which can imply fatigue.",
          "result": "pass"
        },
        {
          "n": 4,
          "text": "Documenting shavat preserves its distinction from nuach and other rest/settling verbs.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Later Sabbath institutions are relevant reception and intertext, but should not replace the immediate verbal meaning.",
          "result": "partial"
        }
      ]
    },
    "qadash": {
      "term": "qiddesh / qadash",
      "heb": "וַיְקַדֵּשׁ / קדש",
      "mode": 2,
      "axioms": [
        "TA1",
        "TA6"
      ],
      "gloss": "Piel verb: consecrate, declare holy, treat as sacred, or set apart for a special status.",
      "note": "Genesis 2:3 uses vayqaddesh, the Piel of qadash, with the seventh yom as object. “Set it apart” communicates differentiation and special designation, but the root belongs intrinsically to the holy/sacred domain; reducing it to mere separation would be incomplete. “Consecrated it” or “made it holy” preserves more of that register but can sound institutionally later, so the documented rendering should state both dimensions.",
      "lexicons": {
        "bdb": {
          "ref": "s.v. קָדַשׁ",
          "note": "For the Piel, lists consecrate, sanctify, declare holy, or set apart as sacred, with persons, objects, places, and times as possible objects."
        },
        "halot": {
          "ref": "s.v. קדש",
          "note": "Treats the Piel as assigning or recognizing sacred/holy status, not merely spatial separation."
        }
      },
      "steps": [
        {
          "n": 1,
          "text": "The verb establishes the seventh day’s distinctive status and becomes a major biblical holiness term.",
          "result": "pass"
        },
        {
          "n": 2,
          "text": "The object and blessing context narrow the action to assigning sacred/distinct status to the day.",
          "result": "pass"
        },
        {
          "n": 3,
          "text": "“Set it apart” is understandable but underexpresses holiness; “sanctified” may be opaque or reception-heavy.",
          "result": "partial"
        },
        {
          "n": 4,
          "text": "The apparatus preserves continuity with the wider qadash holiness vocabulary.",
          "result": "fail"
        },
        {
          "n": 5,
          "text": "Later ritual systems should not be imported wholesale, yet the sacred register must not be erased in the name of neutrality.",
          "result": "fail"
        }
      ]
    },


    'nephesh': {
      term: 'nephesh',
      heb: 'נֶפֶשׁ',
      mode: 3,
      axioms: ['TA2', 'TA6'],
      gloss: 'Noun: living being, life, self, creature.',
      note: 'A noun referring broadly to a living being, life, self, or creature. The translation retains nephesh in key places to preserve this wider semantic range rather than limiting it to a single sense such as "soul" or "life."',
      steps: [{
          n: 3,
          text: '"Soul" is the most misleading common equivalent; "life" or "creature" each reduces range.',
          result: 'fail'
        },
        {
          n: 5,
          text: '"Soul" imports body/soul dualism not in pre-400 BC Hebrew anthropology.',
          result: 'fail'
        },
      ],
    },

    'ha-adam': {
      term: 'ha-adam',
      heb: 'הָאָדָם',
      mode: 3,
      axioms: ['TA1', 'TA4'],
      gloss: 'Definite noun: the adam; the human; embedded in the adam/adamah/aphar network.',
      note: 'Ha-adam is the definite form of adam, "the human." It is the central node of the Gen 2–3 lexical network (adam / adamah / aphar) on which the text\'s anthropology and theology of mortality rests.',
      steps: [{
        n: 4,
        text: 'Consistent transliteration of ha-adam / adamah / aphar required by the structural necessity of preserving the lexical network.',
        result: 'fail'
      }],
    },

    // D2 terms
    'toledot': {
      term: 'toledot',
      heb: 'תּוֹלְדוֹת',
      mode: 3,
      axioms: ['TA1'],
      gloss: 'Structural noun: what is brought forth; generations; narrative that proceeds from.',
      note: 'Hebrew structural term meaning "what is brought forth." Used in Genesis to introduce what proceeds from a person, group, or entity, including lineage and narrative development. No single English word captures its full range.',
      steps: [{
        n: 3,
        text: '"Generations" emphasizes lineage; "account" emphasizes narrative — no single English term captures both.',
        result: 'fail'
      }],
    },

    'yhwh': {
      term: 'YHWH',
      heb: 'יהוה',
      mode: 3,
      axioms: ['TA1', 'TA5'],
      gloss: 'The tetragrammaton: the personal, covenantal name of Israel\'s God.',
      note: 'The tetragrammaton (יהוה), the personal and covenantal name of Israel\'s God. Most target-language translations render YHWH as "LORD" — a substitution convention derived from the Masoretic qere tradition. This is not a translation of the name but the substitution of a different word for it. The present system preserves YHWH.',
      steps: [{
        n: 3,
        text: '"LORD" is a substitution, not a translation.',
        result: 'fail'
      }],
    },

    'adamah': {
      term: 'adamah',
      heb: 'אֲדָמָה',
      mode: 3,
      axioms: ['TA1', 'TA4'],
      gloss: 'Noun: cultivable ground, the territory.',
      note: 'The cultivable land, the territory. Etymologically linked to adam, forming the foundational wordplay of the Gen 2–3 anthropology.',
      steps: [{
        n: 4,
        text: '"Ground," "earth," "land" all sever the sonic-etymological bond with adam.',
        result: 'fail'
      }],
    },

    'aphar': {
      term: 'aphar',
      heb: 'עָפָר',
      mode: 3,
      axioms: ['TA1', 'TA4'],
      gloss: 'Noun: dry particulate matter.',
      note: 'Not mere "dirt," but the dry, particulate, unstable base matter. It represents contingency, fragility, and materiality. The network adam / adamah / aphar is the foundation of the text\'s anthropology and theology of mortality.',
      steps: [{
        n: 4,
        text: 'Gen 3:19 — "for aphar you are, and to aphar you shall return" — depends on consistent preservation.',
        result: 'fail'
      }],
    },

    'yatsar': {
      term: 'yatsar',
      heb: 'יָצַר',
      mode: 2,
      axioms: ['TA1'],
      gloss: 'Verb: to form, shape, fashion (commonly used of a potter).',
      note: 'To form, shape, fashion. The verb is commonly used for a potter shaping clay, emphasizing deliberate manual formation.',
      steps: [{
        n: 3,
        text: '"Formed" conveys the sense but loses the potter-craftsman register.',
        result: 'partial'
      }],
    },

    'nishmat-chayyim': {
      term: 'nishmat chayyim',
      heb: 'נִשְׁמַת חַיִּים',
      mode: 3,
      axioms: ['TA2', 'TA6'],
      gloss: 'Construct phrase: breath of lives (plural form).',
      note: 'nishmat chayyim ("breath of lives") employs a plural form that exceeds mere biological animation, marking a divinely granted endowment of life, capacity, and authority.',
      steps: [{
        n: 3,
        text: '"Breath of life" singularizes the plural noun and under-determines its range.',
        result: 'fail'
      }],
    },

    'eden': {
      term: 'Eden',
      heb: 'עֵדֶן',
      mode: 3,
      axioms: ['TA1'],
      gloss: 'Place name; associated lexically with delight, pleasure, abundance.',
      note: 'A term associated with delight, pleasure, or abundance. In Genesis it functions as a place name, though the lexical sense can also suggest a place characterized by abundance or delight.',
      steps: [],
    },

    'avad-shamar': {
      term: 'avad / shamar',
      heb: 'עָבַד / שָׁמַר',
      mode: 2,
      axioms: ['TA1'],
      gloss: 'Paired verbs: to work / to guard.',
      note: 'Avad denotes working, cultivating, or performing assigned labor; shamar denotes guarding, keeping, or watching over something entrusted. Elsewhere this pairing is used for entrusted responsibilities including sanctuary service (Num 3:7–8; 8:26; 18:5–6).',
      steps: [],
    },

    'mot-tamut': {
      term: 'mot tamut',
      heb: 'מוֹת תָּמוּת',
      mode: 2,
      axioms: ['TA1', 'TA4'],
      gloss: 'Infinitive absolute + finite verb: "dying you shall die" — emphatic construction.',
      note: 'The phrase translated "you shall surely die" uses a Hebrew emphatic construction (literally, "dying you shall die") expressing certainty. In Gen 3:4 the same construction is repeated and negated (lo mot temutun). The serpent\'s wording directly echoes and reverses the phrasing of the command.',
      steps: [],
    },

    'ezer-kenegdo': {
      term: 'ʿezer kenegdo',
      heb: 'עֵזֶר כְּנֶגְדּוֹ',
      mode: 3,
      axioms: ['TA2', 'TA6'],
      gloss: '"Help corresponding-to-him"; powerful aid, complementarity, correspondence.',
      note: '"Helper" implies a subordinate or assistant role, but the Hebrew domain carries a much more powerful and essential weight. ʿezer denotes powerful aid (often divine); kenegdo means "opposite/facing him," indicating complementarity and correspondence.',
      steps: [{
        n: 5,
        text: '"Helper" in English has accumulated connotations of subordination absent from the Hebrew — a paradigmatic case of interpretive overdetermination.',
        result: 'fail'
      }],
    },

    'tardemah': {
      term: 'tardemah',
      heb: 'תַּרְדֵּמָה',
      mode: 3,
      axioms: ['TA2'],
      gloss: 'A deep or heavy sleep, often divinely induced.',
      note: 'A deep or heavy sleep, often described as divinely induced. The term appears at narrative thresholds (Gen 2:21; 15:12; 1 Sam 26:12; Job 4:13; 33:15; Isa 29:10).',
      steps: [{
        n: 3,
        text: '"Deep sleep" under-determines; the term has a specific narrative register of divinely-induced suspension.',
        result: 'fail'
      }],
    },

    'tsela': {
      term: 'tselaʿ',
      heb: 'צֵלָע',
      mode: 3,
      axioms: ['TA1', 'TA6'],
      gloss: 'Noun: side (consistently, e.g., of buildings or hills).',
      note: 'Hebrew tselaʿ consistently means "side." The traditional translation "rib" originates from later Greek and Latin translations.',
      steps: [{
        n: 5,
        text: '"Rib" imports a reading first stabilized in the Septuagint and Vulgate, not supported by the Hebrew lexical range.',
        result: 'fail'
      }],
    },

    'sagar': {
      term: 'sagar',
      heb: 'סָגַר',
      mode: 2,
      axioms: ['TA1'],
      gloss: 'Verb: to close, shut, enclose.',
      note: 'To close, shut, enclose. The same verb appears in Gen 7:16 when YHWH "shut" the door of the ark.',
      steps: [{
        n: 3,
        text: '"Closed" works but loses the resonance with Gen 7:16.',
        result: 'partial'
      }],
    },

    'banah': {
      term: 'banah',
      heb: 'בָּנָה',
      mode: 2,
      axioms: ['TA1'],
      gloss: 'Verb: to build, construct (architectural imagery).',
      note: 'Commonly used for building houses, cities, or structures. In Gen 2:22 it describes the construction of the woman from the tselaʿ. This contrasts with yatsar ("to form") used earlier in Gen 2:7.',
      steps: [{
        n: 3,
        text: '"Built" works but English does not carry the technical contrast with "formed" (yatsar).',
        result: 'partial'
      }],
    },

    'nahash': {
      term: 'nahash',
      heb: 'נָחָשׁ',
      mode: 3,
      axioms: ['TA1', 'TA3'],
      gloss: 'Triple-register wordplay: serpent; to divine/observe omens; possibly shining/bronze.',
      note: 'A "word domain" with a triple entendre across three vowelizations of the root: (1) noun "serpent"; (2) verb (Piel) "to divine, observe omens" (cf. Gen 30:27); (3) possibly connected to nechoshet, "bronze, shining." Transliterated to keep the Hebrew ambiguity alive.',
      steps: [{
          n: 2,
          text: 'Context does not disambiguate among the three registers.',
          result: 'fail'
        },
        {
          n: 3,
          text: '"Serpent" collapses all three into a single image.',
          result: 'fail'
        },
      ],
    },

    'yada': {
      term: 'yadaʿ',
      heb: 'יָדַע',
      mode: 2,
      axioms: ['TA2'],
      gloss: 'Verb: to know, including experiential knowledge, recognition, discernment.',
      note: 'The Hebrew verb yadaʿ has a wide semantic range including experiential knowledge, recognition, and discernment.',
      steps: [{
        n: 3,
        text: '"Knowing" covers the primary sense but loses the experiential/relational depth.',
        result: 'partial'
      }],
    },

    'chavvah': {
      term: 'Ḥavvah',
      heb: 'חַוָּה',
      mode: 3,
      axioms: ['TA1'],
      gloss: 'Proper name; etymologically linked to ḥayyah, "living."',
      note: 'Proper name; the text states she is so called "because she was the mother of all living (ḥay)." Traditional rendering "Eve" via Greek Ἑύα and Latin Hevva loses the sonic-etymological bond with ḥayyah.',
      steps: [],
    },

    'keruvim': {
      term: 'keruvim',
      heb: 'כְּרוּבִים',
      mode: 3,
      axioms: ['TA1', 'TA6'],
      gloss: 'Guardian beings of the ANE imaginative world.',
      note: 'Guardian beings; in ANE iconography, composite winged creatures. English "cherubim" is technically a transliteration but in modern usage has accumulated sentimental/iconographic freight at odds with the ANE register.',
      steps: [],
    },

  };

  // ======================================================
  // ROMANIAN — TERM APPARATUS
  // Translate the marked fields in place. Search the file for
  // the marker //// ==== Ro ==== //// to find every spot.
  // Keys, modes, axioms, and step numbers must NOT change.
  // ======================================================
  const TERMS_RO = {

    'elohim': {
      term: "Elohim",
      heb: "אֱלֹהִים",
      mode: 3,
      axioms: ["TA1", "TA4", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Masculine plural noun governing singular verbs when referring to the deity of Israel.",
      //// ==== Ro ==== ////
      note: "The plural Hebrew noun Elohim, when referring to the God of Israel, takes singular verbs. It is a term of power and divinity, distinct from the personal name YHWH. Elohim denotes a being whose mode of existence belongs to the non-adam, supernatural/divine realm.",
      lexicons: {
        bdb: {
          ref: "s.v. אֱלֹהִים (from אֱלוֹהַּ)",
          note: "Entered as the plural of אֱלוֹהַּ; the lemma spans the God of Israel, pagan deities, divine beings generally, and — in a small set of cases — human judges or rulers, with the intended sense fixed by verb agreement and co-text rather than the noun's own form.",
        },
        halot: {
          ref: "s.v. אֱלֹהִים",
          note: "Groups the same range of senses under one entry and cross-references אֵל and אֱלוֹהַּ; flags the singular-verb-with-plural-noun pattern as the grammatical marker that signals reference to Israel's God specifically.",
        },
      },
      steps: [{
          n: 1,
          //// ==== Ro ==== ////
          text: "Primary divine designation throughout Genesis 1. Structurally prominent, conceptually dense, recurrent.",
          result: "pass",
        },
        {
          n: 2,
          //// ==== Ro ==== ////
          text: "Morphologically plural; governs singular verbs for the deity of Israel; elsewhere denotes divine beings, heavenly assembly members, or human authorities. Co-text does not resolve the full range.",
          result: "fail",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"God\" is singular and theologically specific; \"gods\" introduces polytheistic connotation. Neither preserves the morphological complexity.",
          result: "fail",
        },
        {
          n: 4,
          //// ==== Ro ==== ////
          text: "No single target-language term distinguishes Elohim from YHWH, El, or other divine designations.",
          result: "fail",
        },
        {
          n: 5,
          //// ==== Ro ==== ////
          text: "\"God\" carries monotheistic-philosophical and systematic-theological freight from centuries after the pre-400 BC horizon.",
          result: "fail",
        },
      ],
    },

    'shamaim': {
      term: "shamaim",
      heb: "שָׁמַיִם",
      mode: 3,
      axioms: ["TA1", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Plural-form noun.",
      //// ==== Ro ==== ////
      note: "Plural-form noun referring to the sky or the realm above the earth. Can denote the visible sky, the atmospheric heavens, or the upper expanse. The translation retains shamaim to preserve the Hebrew term and its full semantic range without specifying a particular structure or level.",
      lexicons: {
        bdb: {
          ref: "s.v. שָׁמַיִם",
          note: "Treats the word as a plural-only noun (no attested singular in use) covering the visible sky, the place of birds and weather, and the dwelling of God, without subdividing these into separate numbered senses.",
        },
        halot: {
          ref: "s.v. שָׁמַיִם",
          note: "Lists the cosmological range — sky, heavens as God's abode, the firmament's location — as facets of one lemma rather than distinct entries, matching the apparatus's reading that the term is not pre-partitioned into levels.",
        },
      },
      steps: [{
          n: 1,
          //// ==== Ro ==== ////
          text: "Recurrent cosmological term across the Bereshit narrative.",
          result: "pass",
        },
        {
          n: 2,
          //// ==== Ro ==== ////
          text: "Range not narrowed by immediate co-text; term spans visible sky, atmospheric heavens, and upper cosmic expanse.",
          result: "partial",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Heaven(s)\" carries post-biblical spatial-cosmological assumptions; \"sky\" reduces range.",
          result: "fail",
        },
      ],
    },

    'tohu-va-vohu': {
      term: "tohu va-vohu",
      heb: "תֹהוּ וָבֹהוּ",
      mode: 2,
      axioms: ["TA1", "TA4"],
      //// ==== Ro ==== ////
      gloss: "Assonantal pair: formlessness and emptiness; structurally significant.",
      //// ==== Ro ==== ////
      note: "The paired expression tohu va-vohu (\"formlessness and emptiness\") is a sonically bound doublet that reappears in the prophetic literature (Isa 34:11; Jer 4:23) as a signal of de-creation. The sonic texture is essential to the phrase's force.",
      steps: [{
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Formless and empty\" conveys the sense but loses the assonance.",
          result: "partial",
        },
        {
          n: 4,
          //// ==== Ro ==== ////
          text: "The sonically bound pair is structurally significant and recurs in later prophetic texts.",
          result: "fail",
        },
      ],
    },

    'tehom': {
      term: "tehom",
      heb: "תְּהוֹם",
      mode: 3,
      axioms: ["TA1", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Deep, abyss; primeval waters.",
      //// ==== Ro ==== ////
      note: "Hebrew tehom — deep, abyss; primeval waters. Cognate with Akkadian Tiamat, though the Gen 1 usage does not personify. The term carries ANE cosmological register that \"the deep\" in English flattens.",
      steps: [{
        n: 5,
        //// ==== Ro ==== ////
        text: "\"The deep\" / \"the abyss\" each either over- or under-reads the term.",
        result: "fail",
      }, ],
    },

    'ruach': {
      term: "ruach",
      heb: "רוּחַ",
      mode: 3,
      axioms: ["TA2", "TA3"],
      //// ==== Ro ==== ////
      gloss: "Noun with a range including wind, breath, spirit, animating force.",
      //// ==== Ro ==== ////
      note: "The Hebrew term ruach carries a range of meanings: wind, breath, spirit, or animating force. In Genesis 1:2 the grammatical construction (construct state: \"wind/breath/spirit of Elohim\") is inherently ambiguous and can be understood in several primary ways, each supported by lexical and contextual evidence.",
      lexicons: {
        bdb: {
          ref: "s.v. רוּחַ",
          note: "Runs a single lemma from atmospheric wind and human breath through to spirit and divine agency, presenting these as one continuum of use rather than separate homonyms — the basis for the apparatus's claim that no one English word covers the same continuum.",
        },
        halot: {
          ref: "s.v. רוּחַ",
          note: "Organizes the wind / breath / spirit senses under a shared entry and notes the construct-state ambiguity at Gen 1:2 specifically as a crux where more than one of these senses is grammatically live at once.",
        },
      },
      steps: [{
          n: 1,
          //// ==== Ro ==== ////
          text: "Structurally significant — appears at the opening of the cosmogony.",
          result: "pass",
        },
        {
          n: 2,
          //// ==== Ro ==== ////
          text: "Co-text (waters, darkness, tohu va-vohu) does not privilege any single sense.",
          result: "fail",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "No single target-language word preserves wind / breath / spirit / animating-force simultaneously.",
          result: "fail",
        },
      ],
    },

    'merachefet': {
      term: "merachefet",
      heb: "מְרַחֶפֶת",
      mode: 2,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Piel participle feminine singular, from רחף (rachaf), \"to hover, flutter, move gently above.\"",
      //// ==== Ro ==== ////
      note: "From the verb rachaf, meaning \"to hover, to flutter, to move gently above.\" The word appears elsewhere (Deuteronomy 32:11) describing an eagle hovering over its young. It conveys a sense of protective, sustained presence, not chaotic motion.",
      steps: [{
          n: 2,
          //// ==== Ro ==== ////
          text: "Context narrows toward dynamic, protective movement (cf. Deut 32:11, eagle over young).",
          result: "pass",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Hovering\" conveys the primary sense but loses the specific imagery of protective, sustained presence.",
          result: "partial",
        },
      ],
    },

    'or': {
      term: "or",
      heb: "אוֹר",
      mode: 3,
      axioms: ["TA1", "TA4"],
      //// ==== Ro ==== ////
      gloss: "Noun: light, illumination, radiance.",
      //// ==== Ro ==== ////
      note: "\"Light,\" meaning illumination or radiance itself, not a physical source of light. In Genesis 1, or appears before the creation of the sun, moon, and stars, indicating that light exists independently of its later carriers (me'orot).",
      steps: [{
          n: 1,
          //// ==== Ro ==== ////
          text: "Structurally significant in the day 1 / day 4 pairing.",
          result: "pass",
        },
        {
          n: 4,
          //// ==== Ro ==== ////
          text: "Rendering both or and me'or as \"light\"/\"lights\" collapses a distinction the Hebrew maintains.",
          result: "fail",
        },
      ],
    },

    'yom': {
      term: "yom",
      heb: "יוֹם",
      mode: 3,
      axioms: ["TA2", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Noun: day; bounded period; epoch.",
      //// ==== Ro ==== ////
      note: "In Hebrew Bible usage, yom can denote: daylight (Gen 1:5a); a 24-hour cycle (Gen 1:5b with evening–morning); a bounded period (\"in the day of…\", Gen 2:4); a decisive time (\"day of YHWH\"). Here it certainly designates a bounded time, but not necessarily 24 hours long; \"day\" in English is too narrow.",
      steps: [{
        n: 5,
        //// ==== Ro ==== ////
        text: "\"Day\" in creation narratives carries specific modern theological baggage (young-earth vs. framework readings) that the Hebrew does not presuppose.",
        result: "fail",
      }, ],
    },

    'raqia': {
      term: "raqiaʿ",
      heb: "רָקִיעַ",
      mode: 3,
      axioms: ["TA1", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Noun, from a verb meaning \"to spread out\" or \"to beat out.\"",
      //// ==== Ro ==== ////
      note: "A noun derived from a verb meaning \"to spread out\" or \"to beat out.\" It denotes an extended expanse or spread-out surface. In Genesis 1 it is described as separating waters from waters and associated with the shamaim.",
      steps: [{
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Firmament\" is archaic and misleading; \"expanse\" loses the beaten/extended imagery.",
          result: "fail",
        },
        {
          n: 5,
          //// ==== Ro ==== ////
          text: "Target-language renderings carry cosmological reconstructions (solid dome / atmospheric layer) not required by pre-400 BC Hebrew usage.",
          result: "fail",
        },
      ],
    },

    'moadim': {
      term: "moʿadim",
      heb: "מוֹעֲדִים",
      mode: 3,
      axioms: ["TA2"],
      //// ==== Ro ==== ////
      gloss: "Plural of moʿed: appointed time, fixed time, designated occasion.",
      //// ==== Ro ==== ////
      note: "Plural of moʿed, meaning an appointed time, fixed time, or designated occasion.",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "\"Seasons\" reduces the range; \"festivals\" over-specifies.",
        result: "fail",
      }, ],
    },

    'nephesh': {
      term: "nephesh",
      heb: "נֶפֶשׁ",
      mode: 3,
      axioms: ["TA2", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Noun: living being, life, self, creature.",
      //// ==== Ro ==== ////
      note: "A noun referring broadly to a living being, life, self, or creature. The translation retains nephesh in key places to preserve this wider semantic range rather than limiting it to a single sense such as \"soul\" or \"life.\"",
      steps: [{
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Soul\" is the most misleading common equivalent; \"life\" or \"creature\" each reduces range.",
          result: "fail",
        },
        {
          n: 5,
          //// ==== Ro ==== ////
          text: "\"Soul\" imports body/soul dualism not in pre-400 BC Hebrew anthropology.",
          result: "fail",
        },
      ],
    },

    'tanninim': {
      term: "tanninim",
      heb: "תַּנִּינִים",
      mode: 3,
      axioms: ["TA2"],
      //// ==== Ro ==== ////
      gloss: "Plural of tannin — large or formidable creatures, especially of sea or deep waters.",
      //// ==== Ro ==== ////
      note: "Plural of tannin, a term for large or formidable creatures, especially associated with the sea or deep waters. The translation retains tanninim to avoid narrowing the term to a specific species.",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "\"Sea monsters\" is dramatic and English-specific.",
        result: "fail",
      }, ],
    },

    'tselem': {
      term: "tselem",
      heb: "צֶלֶם",
      mode: 3,
      axioms: ["TA1", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Noun: image; physical representation embodying presence and authority in ANE culture.",
      //// ==== Ro ==== ////
      note: "Akkadian cognate ṣalmu denotes a physical image that embodied the presence and authority of a deity or king in ANE culture. Genesis reconfigures this concept by presenting ha-adam as a living, animated image of divine sovereignty.",
      steps: [{
        n: 5,
        //// ==== Ro ==== ////
        text: "\"Image\" in English theology carries imago Dei reception layered through Irenaean, Thomistic, and Reformation readings.",
        result: "fail",
      }, ],
    },

    'demut': {
      term: "demut",
      heb: "דְּמוּת",
      mode: 3,
      axioms: ["TA1", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Noun: likeness; filial resemblance; legal continuity.",
      //// ==== Ro ==== ////
      note: "Demut (\"likeness\") denotes filial resemblance and legal continuity in ANE genealogy. In Genesis it signifies inherited capacity and authority.",
      steps: [{
        n: 4,
        //// ==== Ro ==== ////
        text: "Paired with tselem as a technical doublet — rendering both as \"image and likeness\" obscures their distinct registers.",
        result: "fail",
      }, ],
    },

    'yirdu': {
      term: "yirdu",
      heb: "יִרְדּוּ",
      mode: 2,
      axioms: ["TA6"],
      //// ==== Ro ==== ////
      gloss: "Qal imperfect 3mp of radah: to rule.",
      //// ==== Ro ==== ////
      note: "Denotes the rule of a shepherd-king — authority exercised for the benefit and order of the governed. It is stewardship, not exploitation.",
      steps: [{
        n: 5,
        //// ==== Ro ==== ////
        text: "Target-language \"dominion\" has been the storm-center of ecological critiques of Genesis.",
        result: "fail",
      }, ],
    },

    'ha-adam': {
      term: "ha-adam",
      heb: "הָאָדָם",
      mode: 3,
      axioms: ["TA1", "TA4"],
      //// ==== Ro ==== ////
      gloss: "Definite noun: the adam; the human; embedded in the adam/adamah/aphar network.",
      //// ==== Ro ==== ////
      note: "Ha-adam is the definite form of adam, \"the human.\" It is the central node of the Gen 2–3 lexical network (adam / adamah / aphar) on which the text's anthropology and theology of mortality rests.",
      steps: [{
        n: 4,
        //// ==== Ro ==== ////
        text: "Consistent transliteration of ha-adam / adamah / aphar required by the structural necessity of preserving the lexical network.",
        result: "fail",
      }, ],
    },

    'kalah': {
      term: "kalah",
      heb: "כָּלָה",
      mode: 2,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Verb: to finish, complete, bring to an end.",
      //// ==== Ro ==== ////
      note: "A verb meaning \"to finish,\" \"to complete,\" or \"to bring to an end.\" It denotes the completion of an activity or process.",
      steps: [{
        n: 2,
        //// ==== Ro ==== ////
        text: "Context clearly narrows to completion of the work of creation.",
        result: "pass",
      }, ],
    },

    'shavat': {
      term: "shavat",
      heb: "שָׁבַת",
      mode: 2,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Verb: to cease, stop from activity.",
      //// ==== Ro ==== ////
      note: "The verb denotes ceasing or stopping from activity. It does not necessarily imply rest due to fatigue. From this root derives Shabbat — here the meaning is ceasing an action, not resting.",
      steps: [{
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Rested\" imports the fatigue-rest frame absent from the verb.",
          result: "fail",
        },
        {
          n: 4,
          //// ==== Ro ==== ////
          text: "\"Rested\" obscures the semantic distinction between shavat and nuach.",
          result: "fail",
        },
      ],
    },

    'qadash': {
      term: "qadash",
      heb: "קָדַשׁ",
      mode: 2,
      axioms: ["TA6"],
      //// ==== Ro ==== ////
      gloss: "Verb: to set apart, make distinct, designate as dedicated.",
      //// ==== Ro ==== ////
      note: "A verb meaning \"to set apart,\" \"to make distinct,\" or \"to designate as holy.\" The translation uses \"set apart\" to preserve the basic meaning without importing later theological interpretations.",
      steps: [{
        n: 5,
        //// ==== Ro ==== ////
        text: "Post-biblical Christian and rabbinic holiness terminology goes far beyond the pre-400 BC semantic base.",
        result: "fail",
      }, ],
    },

    'toledot': {
      term: "toledot",
      heb: "תּוֹלְדוֹת",
      mode: 3,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Structural noun: what is brought forth; generations; narrative that proceeds from.",
      //// ==== Ro ==== ////
      note: "Hebrew structural term meaning \"what is brought forth.\" Used in Genesis to introduce what proceeds from a person, group, or entity, including lineage and narrative development. No single English word captures its full range.",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "\"Generations\" emphasizes lineage; \"account\" emphasizes narrative — no single English term captures both.",
        result: "fail",
      }, ],
    },

    'yhwh': {
      term: "YHWH",
      heb: "יהוה",
      mode: 3,
      axioms: ["TA1", "TA5"],
      //// ==== Ro ==== ////
      gloss: "The tetragrammaton: the personal, covenantal name of Israel's God.",
      //// ==== Ro ==== ////
      note: "The tetragrammaton (יהוה), the personal and covenantal name of Israel's God. Most target-language translations render YHWH as \"LORD\" — a substitution convention derived from the Masoretic qere tradition. This is not a translation of the name but the substitution of a different word for it. The present system preserves YHWH.",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "\"LORD\" is a substitution, not a translation.",
        result: "fail",
      }, ],
    },

    'adamah': {
      term: "adamah",
      heb: "אֲדָמָה",
      mode: 3,
      axioms: ["TA1", "TA4"],
      //// ==== Ro ==== ////
      gloss: "Noun: cultivable ground, the territory.",
      //// ==== Ro ==== ////
      note: "The cultivable land, the territory. Etymologically linked to adam, forming the foundational wordplay of the Gen 2–3 anthropology.",
      steps: [{
        n: 4,
        //// ==== Ro ==== ////
        text: "\"Ground,\" \"earth,\" \"land\" all sever the sonic-etymological bond with adam.",
        result: "fail",
      }, ],
    },

    'aphar': {
      term: "aphar",
      heb: "עָפָר",
      mode: 3,
      axioms: ["TA1", "TA4"],
      //// ==== Ro ==== ////
      gloss: "Noun: dry particulate matter.",
      //// ==== Ro ==== ////
      note: "Not mere \"dirt,\" but the dry, particulate, unstable base matter. It represents contingency, fragility, and materiality. The network adam / adamah / aphar is the foundation of the text's anthropology and theology of mortality.",
      steps: [{
        n: 4,
        //// ==== Ro ==== ////
        text: "Gen 3:19 — \"for aphar you are, and to aphar you shall return\" — depends on consistent preservation.",
        result: "fail",
      }, ],
    },

    'yatsar': {
      term: "yatsar",
      heb: "יָצַר",
      mode: 2,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Verb: to form, shape, fashion (commonly used of a potter).",
      //// ==== Ro ==== ////
      note: "To form, shape, fashion. The verb is commonly used for a potter shaping clay, emphasizing deliberate manual formation.",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "\"Formed\" conveys the sense but loses the potter-craftsman register.",
        result: "partial",
      }, ],
    },

    'nishmat-chayyim': {
      term: "nishmat chayyim",
      heb: "נִשְׁמַת חַיִּים",
      mode: 3,
      axioms: ["TA2", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Construct phrase: breath of lives (plural form).",
      //// ==== Ro ==== ////
      note: "nishmat chayyim (\"breath of lives\") employs a plural form that exceeds mere biological animation, marking a divinely granted endowment of life, capacity, and authority.",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "\"Breath of life\" singularizes the plural noun and under-determines its range.",
        result: "fail",
      }, ],
    },

    'nephesh-chayyah': {
      term: "nephesh chayyah",
      heb: "נֶפֶשׁ חַיָּה",
      mode: 3,
      axioms: ["TA2", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Construct phrase: living nephesh.",
      //// ==== Ro ==== ////
      note: "Nepeš ḥayyāh denotes an animated, desiring life rather than an immaterial \"soul.\"",
      steps: [{
        n: 5,
        //// ==== Ro ==== ////
        text: "\"Living soul\" imports post-biblical body/soul dualism.",
        result: "fail",
      }, ],
    },

    'eden': {
      term: "Eden",
      heb: "עֵדֶן",
      mode: 3,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Place name; associated lexically with delight, pleasure, abundance.",
      //// ==== Ro ==== ////
      note: "A term associated with delight, pleasure, or abundance. In Genesis it functions as a place name, though the lexical sense can also suggest a place characterized by abundance or delight.",
      steps: [],
    },

    'avad-shamar': {
      term: "avad / shamar",
      heb: "עָבַד / שָׁמַר",
      mode: 2,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Paired verbs: to work / to guard.",
      //// ==== Ro ==== ////
      note: "Avad denotes working, cultivating, or performing assigned labor; shamar denotes guarding, keeping, or watching over something entrusted. Elsewhere this pairing is used for entrusted responsibilities including sanctuary service (Num 3:7–8; 8:26; 18:5–6).",
      steps: [],
    },

    'mot-tamut': {
      term: "mot tamut",
      heb: "מוֹת תָּמוּת",
      mode: 2,
      axioms: ["TA1", "TA4"],
      //// ==== Ro ==== ////
      gloss: "Infinitive absolute + finite verb: \"dying you shall die\" — emphatic construction.",
      //// ==== Ro ==== ////
      note: "The phrase translated \"you shall surely die\" uses a Hebrew emphatic construction (literally, \"dying you shall die\") expressing certainty. In Gen 3:4 the same construction is repeated and negated (lo mot temutun). The serpent's wording directly echoes and reverses the phrasing of the command.",
      steps: [],
    },

    'ezer-kenegdo': {
      term: "ʿezer kenegdo",
      heb: "עֵזֶר כְּנֶגְדּוֹ",
      mode: 3,
      axioms: ["TA2", "TA6"],
      //// ==== Ro ==== ////
      gloss: "\"Help corresponding-to-him\"; powerful aid, complementarity, correspondence.",
      //// ==== Ro ==== ////
      note: "\"Helper\" implies a subordinate or assistant role, but the Hebrew domain carries a much more powerful and essential weight. ʿezer denotes powerful aid (often divine); kenegdo means \"opposite/facing him,\" indicating complementarity and correspondence.",
      steps: [{
        n: 5,
        //// ==== Ro ==== ////
        text: "\"Helper\" in English has accumulated connotations of subordination absent from the Hebrew — a paradigmatic case of interpretive overdetermination.",
        result: "fail",
      }, ],
    },

    'tardemah': {
      term: "tardemah",
      heb: "תַּרְדֵּמָה",
      mode: 3,
      axioms: ["TA2"],
      //// ==== Ro ==== ////
      gloss: "A deep or heavy sleep, often divinely induced.",
      //// ==== Ro ==== ////
      note: "A deep or heavy sleep, often described as divinely induced. The term appears at narrative thresholds (Gen 2:21; 15:12; 1 Sam 26:12; Job 4:13; 33:15; Isa 29:10).",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "\"Deep sleep\" under-determines; the term has a specific narrative register of divinely-induced suspension.",
        result: "fail",
      }, ],
    },

    'tsela': {
      term: "tselaʿ",
      heb: "צֵלָע",
      mode: 3,
      axioms: ["TA1", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Noun: side (consistently, e.g., of buildings or hills).",
      //// ==== Ro ==== ////
      note: "Hebrew tselaʿ consistently means \"side.\" The traditional translation \"rib\" originates from later Greek and Latin translations.",
      steps: [{
        n: 5,
        //// ==== Ro ==== ////
        text: "\"Rib\" imports a reading first stabilized in the Septuagint and Vulgate, not supported by the Hebrew lexical range.",
        result: "fail",
      }, ],
    },

    'sagar': {
      term: "sagar",
      heb: "סָגַר",
      mode: 2,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Verb: to close, shut, enclose.",
      //// ==== Ro ==== ////
      note: "To close, shut, enclose. The same verb appears in Gen 7:16 when YHWH \"shut\" the door of the ark.",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "\"Closed\" works but loses the resonance with Gen 7:16.",
        result: "partial",
      }, ],
    },

    'banah': {
      term: "banah",
      heb: "בָּנָה",
      mode: 2,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Verb: to build, construct (architectural imagery).",
      //// ==== Ro ==== ////
      note: "Commonly used for building houses, cities, or structures. In Gen 2:22 it describes the construction of the woman from the tselaʿ. This contrasts with yatsar (\"to form\") used earlier in Gen 2:7.",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "\"Built\" works but English does not carry the technical contrast with \"formed\" (yatsar).",
        result: "partial",
      }, ],
    },

    'nahash': {
      term: "nahash",
      heb: "נָחָשׁ",
      mode: 3,
      axioms: ["TA1", "TA3"],
      //// ==== Ro ==== ////
      gloss: "Triple-register wordplay: serpent; to divine/observe omens; possibly shining/bronze.",
      //// ==== Ro ==== ////
      note: "A \"word domain\" with a triple entendre across three vowelizations of the root: (1) noun \"serpent\"; (2) verb (Piel) \"to divine, observe omens\" (cf. Gen 30:27); (3) possibly connected to nechoshet, \"bronze, shining.\" Transliterated to keep the Hebrew ambiguity alive.",
      steps: [{
          n: 2,
          //// ==== Ro ==== ////
          text: "Context does not disambiguate among the three registers.",
          result: "fail",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Serpent\" collapses all three into a single image.",
          result: "fail",
        },
      ],
    },

    'yada': {
      term: "yadaʿ",
      heb: "יָדַע",
      mode: 2,
      axioms: ["TA2"],
      //// ==== Ro ==== ////
      gloss: "Verb: to know, including experiential knowledge, recognition, discernment.",
      //// ==== Ro ==== ////
      note: "The Hebrew verb yadaʿ has a wide semantic range including experiential knowledge, recognition, and discernment.",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "\"Knowing\" covers the primary sense but loses the experiential/relational depth.",
        result: "partial",
      }, ],
    },

    'zera': {
      term: "zeraʿ",
      heb: "זֶרַע",
      mode: 3,
      axioms: ["TA2"],
      //// ==== Ro ==== ////
      gloss: "Seed or offspring; continuity and propagation of life.",
      //// ==== Ro ==== ////
      note: "Refers to the continuity and propagation of life rather than to biological material alone.",
      steps: [{
        n: 3,
        //// ==== Ro ==== ////
        text: "English \"seed\" is either archaic or biological; \"offspring\" loses the continuity register.",
        result: "partial",
      }, ],
    },

    'chavvah': {
      term: "Ḥavvah",
      heb: "חַוָּה",
      mode: 3,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Proper name; etymologically linked to ḥayyah, \"living.\"",
      //// ==== Ro ==== ////
      note: "Proper name; the text states she is so called \"because she was the mother of all living (ḥay).\" Traditional rendering \"Eve\" via Greek Ἑύα and Latin Hevva loses the sonic-etymological bond with ḥayyah.",
      steps: [],
    },

    'keruvim': {
      term: "keruvim",
      heb: "כְּרוּבִים",
      mode: 3,
      axioms: ["TA1", "TA6"],
      //// ==== Ro ==== ////
      gloss: "Guardian beings of the ANE imaginative world.",
      //// ==== Ro ==== ////
      note: "Guardian beings; in ANE iconography, composite winged creatures. English \"cherubim\" is technically a transliteration but in modern usage has accumulated sentimental/iconographic freight at odds with the ANE register.",
      steps: [],
    },

  };


  // ======================================================
  // AMBIGUITIES — clickable [[a|the]] markers
  // ======================================================
  const AMBIGUITIES_EN = {

    'amb-D1-p2-ruach-art': {
      context: 'a / the ruach of Elohim',
      heb: 'רוּחַ אֱלֹהִים',
      gloss: 'Definite article ambiguity in a construct phrase.',
      hebrew_feature: 'Hebrew construct chains take the definite article from the second (governing) noun. Here only Elohim is unambiguously definite; whether ruach reads as "a wind/breath/spirit" or "the wind/breath/spirit" is determined by interpretive choice, not grammar.',
      readings: [{
          label: 'Indefinite',
          text: 'a wind/breath/spirit of Elohim was hovering over the face of the waters'
        },
        {
          label: 'Definite',
          text: 'the wind/breath/spirit of Elohim was hovering over the face of the waters'
        },
      ],
      note: 'Both readings are grammatically permissible. The translation preserves the openness rather than silently closing it.',
      axioms: ['TA3'],
    },

  };

  // ======================================================
  // ROMANIAN — AMBIGUITIES
  // Translate the marked fields in place. Same structure as EN;
  // search for //// ==== Ro ==== //// markers.
  // ======================================================
  const AMBIGUITIES_RO = {

    'amb-D1-p2-ruach-art': {
      //// ==== Ro ==== ////
      context: "a / the ruach of Elohim",
      heb: "רוּחַ אֱלֹהִים",
      //// ==== Ro ==== ////
      gloss: "Definite article ambiguity in a construct phrase.",
      //// ==== Ro ==== ////
      hebrew_feature: "Hebrew construct chains take the definite article from the second (governing) noun. Here only Elohim is unambiguously definite; whether ruach reads as \"a wind/breath/spirit\" or \"the wind/breath/spirit\" is determined by interpretive choice, not grammar.",
      readings: [{
          //// ==== Ro ==== ////
          label: "Indefinite",
          //// ==== Ro ==== ////
          text: "a wind/breath/spirit of Elohim was hovering over the face of the waters",
        },
        {
          //// ==== Ro ==== ////
          label: "Definite",
          //// ==== Ro ==== ////
          text: "the wind/breath/spirit of Elohim was hovering over the face of the waters",
        },
      ],
      //// ==== Ro ==== ////
      note: "Both readings are grammatically permissible. The translation preserves the openness rather than silently closing it.",
      axioms: ["TA3"],
    },

  };


  // ======================================================
  // META — book information per language
  // ======================================================

  const DIVISIONS_BASE = [{
      id: 'D1',
      range: 'Gen 1:1 – 2:3'
    },
    {
      id: 'D2',
      range: 'Gen 2:4 – 4:26'
    },
    {
      id: 'D3',
      range: 'Gen 5:1 – 5:32'
    },
    {
      id: 'D4',
      range: 'Gen 6:1 – 6:8'
    },
    {
      id: 'D5',
      range: 'Gen 6:9 – 9:29'
    },
    {
      id: 'D6',
      range: 'Gen 10:1 – 10:32'
    },
    {
      id: 'D7',
      range: 'Gen 11:1 – 11:9'
    },
    {
      id: 'D8',
      range: 'Gen 11:10 – 11:26'
    },
    {
      id: 'D9',
      range: 'Gen 11:27 – 12:20'
    },
  ];

  const DIVISIONS_EN = [{
      ...DIVISIONS_BASE[0],
      label: 'D1',
      title: 'In beginning…',
      subtitle: 'Creation · The seven yomim'
    },
    {
      ...DIVISIONS_BASE[1],
      label: 'D2',
      title: 'These are the toledot of the shamaim and the earth…',
      subtitle: 'Eden · nahash · Qayin and Hevel'
    },
    {
      ...DIVISIONS_BASE[2],
      label: 'D3',
      title: 'This is the book of the toledot of Adam…',
      subtitle: 'From Adam to Noaḥ'
    },
    {
      ...DIVISIONS_BASE[3],
      label: 'D4',
      title: 'And it happened that ha-adam began to multiply…',
      subtitle: 'bene ha-Elohim · nephilim'
    },
    {
      ...DIVISIONS_BASE[4],
      label: 'D5',
      title: 'These are the toledot of Noaḥ…',
      subtitle: 'The mabbul · berit · qeshet'
    },
    {
      ...DIVISIONS_BASE[5],
      label: 'D6',
      title: 'And these are the toledot of the sons of Noaḥ…',
      subtitle: 'Table of nations'
    },
    {
      ...DIVISIONS_BASE[6],
      label: 'D7',
      title: 'And all the earth was of one safah…',
      subtitle: 'Bavel · confusion of the lip'
    },
    {
      ...DIVISIONS_BASE[7],
      label: 'D8',
      title: 'These are the toledot of Shem…',
      subtitle: 'From Shem to Teraḥ'
    },
    {
      ...DIVISIONS_BASE[8],
      label: 'D9',
      title: 'And these are the toledot of Teraḥ…',
      subtitle: 'Avram · the call · Mitsrayim'
    },
  ];

  const DIVISIONS_RO = [{
      ...DIVISIONS_BASE[0],
      label: 'D1',
      title: 'La început…',
      subtitle: 'Creația · cele șapte yomim'
    },
    {
      ...DIVISIONS_BASE[1],
      label: 'D2',
      title: 'Acestea sunt toledot ale shamaim și ale pământului…',
      subtitle: 'Eden · nahash · Qayin și Hevel'
    },
    {
      ...DIVISIONS_BASE[2],
      label: 'D3',
      title: 'Și ha-adam a cunoscut-o pe Ḥavvah, femeia sa…',
      subtitle: 'Qayin și Hevel (extins)'
    },
    {
      ...DIVISIONS_BASE[3],
      label: 'D4',
      title: 'Aceasta este cartea toledot a lui Adam…',
      subtitle: 'De la Adam la Noaḥ'
    },
    {
      ...DIVISIONS_BASE[4],
      label: 'D5',
      title: 'Și s-a întâmplat că ha-adam a început să se înmulțească…',
      subtitle: 'bene ha-Elohim · nephilim'
    },
    {
      ...DIVISIONS_BASE[5],
      label: 'D6',
      title: 'Acestea sunt toledot ale lui Noaḥ…',
      subtitle: 'mabbul · berit · qeshet'
    },
    {
      ...DIVISIONS_BASE[6],
      label: 'D7',
      title: 'Și acestea sunt toledot ale fiilor lui Noaḥ…',
      subtitle: 'Tabla națiunilor'
    },
    {
      ...DIVISIONS_BASE[7],
      label: 'D8',
      title: 'Și tot pământul era de o singură safah…',
      subtitle: 'Bavel · confuzia buzei'
    },
    {
      ...DIVISIONS_BASE[8],
      label: 'D9',
      title: 'Acestea sunt toledot ale lui Shem…',
      subtitle: 'De la Shem la Teraḥ'
    },
    {
      ...DIVISIONS_BASE[9],
      label: 'D10',
      title: 'Și acestea sunt toledot ale lui Teraḥ…',
      subtitle: 'Avram · chemarea · Mitsrayim'
    },
  ];

  // ======================================================
  // SECTIONS — D1 and D2 in English. D3–D10 stubs.
  // ======================================================

  const SECTIONS_EN = {
    D1: [
      // 1
      '<span class="m2" data-term="be">In<span class="m2-apparatus"><span class="heb">be</span></span></span> <span class="m3" data-term="reshit">reshit</span>, <span class="m3" data-term="elohim">elohim</span> <span class="m3" data-term="bara">bara</span> the <span class="m3" data-term="shamaim">shamaim</span> and the earth. And the earth was <span class="m2" data-term="tohu-va-vohu">formlessness and emptiness<span class="m2-apparatus"><span class="heb">tohu-va-vohu</span></span></span>, and <span class="m1" data-term="darkness">darkness*</span> over the face of the <span class="m3" data-term="tehom">tehom</span>, and <span class="amb" data-amb="amb-D1-p2-ruach-art">[[a | the]]</span> <span class="m3" data-term="ruach">ruach</span> of <em>elohim</em> was <span class="m2" data-term="merachefet">hovering<span class="m2-apparatus"><span class="heb">merachefet</span></span></span> over the face of the waters.',

      // 2
      'And <em>elohim</em> said, "Let there be <span class="m3" data-term="or">or</span>," and there was <em>or</em>. And <em>elohim</em> saw the <em>or</em>, that it was <span class="m1" data-term="good">good*</span>, and <em>elohim</em> separated between the <em>or</em> and between the <span class="m1" data-term="darkness">darkness*</span>. And <em>elohim</em> called the <em>or</em> "Day," and the <span class="m1" data-term="darkness">darkness*</span> he called "Night." And there was evening, and there was morning — <span class="m3" data-term="yom">yom</span> one.',

      // 3
      'And <em>elohim</em> said, "Let there be a <span class="m3" data-term="raqia">raqiaʿ</span> in the midst of the waters, and let it separate between waters and between waters." And <em>elohim</em> made the <em>raqiaʿ</em>, and he separated between the waters that were under the <em>raqiaʿ</em> and between the waters that were above the <em>raqiaʿ</em>. And it was so. And <em>elohim</em> called the <em>raqiaʿ</em> "<em>shamaim</em>." And there was evening, and there was morning — <em>yom</em> two.',

      // 4
      'And <em>elohim</em> said, "Let the waters under the <em>shamaim</em> be gathered to one place, and let the dry land appear." And it was so. And <em>elohim</em> called the dry land "earth," and the gathering of the waters he called "seas." And <em>elohim</em> saw that it was <span class="m1" data-term="good">good*</span>. And <em>elohim</em> said, "Let the earth sprout vegetation: seeding-<span class="m3" data-term="zera">zeraʿ</span> plants, fruit trees making fruit according to its kind, whose <em>zeraʿ</em> is in it, upon the earth." And it was so. And the earth brought forth vegetation: plants seeding-<em>zeraʿ</em> according to its kind, and trees making fruit whose <em>zeraʿ</em> is in it according to its kind. And <em>elohim</em> saw that it was <span class="m1" data-term="good">good*</span>. And there was evening, and there was morning — <em>yom</em> three.',

      // 5
      `And <em>elohim</em> said, "Let there be <span class="m3" data-term="meorot">meʾorot</span> in the <em>raqiaʿ</em> of the
      <em>shamaim</em> to separate between the day and between the
      night, and let them be for signs and for <span class="m3" data-term="moadim">moʿadim</span> and for days
      {yomim} and years, and let them be for <em>meʾorot</em> in the <em>raqiaʿ</em> of the
      <em>shamaim</em> to give <em>or</em> upon the earth." And it was so. And <em>elohim</em>
      made the two great <em>meʾorot</em> — the greater <em>meʾor</em> to rule the day,
      and the lesser <em>meʾor</em> to rule the night — and the stars. And <em>elohim</em>
      set them in the <em>raqiaʿ</em> of the <em>shamaim</em> to give <em>or</em> upon the earth,
      and to rule over the day and over the night, and to separate
      between the <em>or</em> and between the <span class="m1" data-term="darkness">darkness*</span>. And <em>elohim</em> saw that
      it was <span class="m1" data-term="good">good*</span>. And there was evening, and there was morning —
      <em>yom</em> four.`.replace(/\s+/g, ' ').trim(),

      // 6
      `And <em>elohim</em> said, "Let the waters swarm with swarms of
      <span class="m3" data-term="nephesh-chayyah">nephesh chayyah</span>,
      and let flying creatures fly above the earth, over the face
      of the <em>raqiaʿ</em> of the <em>shamaim</em>." And <em>elohim</em> <em>bara</em> the great
      <span class="m3" data-term="tanninim">tanninim</span>, and every <em>nephesh ha-chayyah</em> that moves, with which
      the waters swarmed according to their kinds, and every winged
      flying creature according to its kind. And <em>elohim</em> saw that it was
      <span class="m1" data-term="good">good*</span>. And <em>elohim</em>
      <span class="m2" data-term="barakh">blessed<span class="m2-apparatus"><span class="heb">barakh</span></span></span> them, saying, "Be fruitful
      and multiply, and fill the waters in the seas, and let the flying
      creatures multiply on the earth." And there was evening, and
      there was morning — <em>yom</em> five.`.replace(/\s+/g, ' ').trim(),

      // 7
      `And <em>elohim</em> said, "Let the earth bring forth <em>nephesh chayyah</em>
      according to their kind: livestock and creeping things and
      <em>chayyah</em> of the land according to their kind." And it was so. And
      <em>elohim</em> made the <em>chayyah</em> of the earth according to their kind,
      and the livestock according to their kind, and every creeping
      thing of the ground according to its kind. And <em>elohim</em> saw that
      it was <span class="m1" data-term="good">good*</span>. And <em>elohim</em> said:
      "Let us make <span class="m3" data-term="adam">adam</span> in our <span class="m3" data-term="tselem">tselem</span>
      and according to our <span class="m3" data-term="demut">demut</span>;
      and let them <span class="m3" data-term="yirdu">yirdu</span> over the fish of
      the sea, the flying creatures of the <em>shamaim</em>, the livestock, the
      whole earth, and every creeping thing." So <em>elohim</em> <em>bara</em> <em>ha-adam</em>
      in his <em>tselem</em>; in the <em>tselem</em> of <em>elohim</em> he <em>bara</em> him; male and
      female he <em>bara</em> them.
      And <em>elohim</em> <span class="m2" data-term="barakh">blessed<span class="m2-apparatus"><span class="heb">barakh</span></span></span>
      them; and <em>elohim</em> said to them: "Be
      fruitful and multiply; fill the earth and <span class="m3" data-term="kivshuha">kivshuha</span>; and <em>yirdu</em> over
      the fish of the sea, and over the flying creatures of the <em>shamaim</em>,
      and over every <em>chayyah</em> that moves on the earth." And <em>elohim</em>
      said, "Look, I have <span class="m2" data-term="natatti">given<span class="m2-apparatus"><span class="heb">natatti</span></span></span>
      to <span class="m2" data-term="lakhem">you<span class="m2-apparatus"><span class="heb">lakhem</span></span></span>
      every seeding-<em>zeraʿ</em> plant that is upon the face of all the earth, and every tree in
      which is the fruit of a tree seeding-<em>zeraʿ</em> — to you it shall be for
      food. And to every <em>chayyah</em> of the earth, and to every flying
      creature of the <em>shamaim</em>, and to everything that creeps on the
      earth in which there is a <em>nephesh chayyah</em>, every green plant for
      food." And it was so.
      And <em>elohim</em> saw all that he had made, and look — it was
      <span class="m2" data-term="tov_meod">very good<span class="m2-apparatus"><span class="heb">tov meʾod</span></span></span>.
      And there was evening, and there was morning
      — <em>yom</em> the sixth.`.replace(/\s+/g, ' ').trim(),

      // 8
      `And the <em>shamaim</em> and the earth were completed, and all their
      host. And <em>elohim</em>
      <span class="m2" data-term="kalah">finished<span class="m2-apparatus"><span class="heb">kalah</span></span></span>
      on <em>yom</em> the <span class="m2" data-term="shevi">seventh<span class="m2-apparatus"><span class="heb">sheviʿi</span></span></span>
      his work which he had done, and he
      <span class="m2" data-term="shavat">ceased<span class="m2-apparatus"><span class="heb">shavat</span></span></span> on the
      <span class="m2" data-term="shevi">seventh<span class="m2-apparatus"><span class="heb">sheviʿi</span></span></span> <em>yom</em> from all his work which he had done. And
      <em>elohim</em> <span class="m2" data-term="barakh">blessed<span class="m2-apparatus"><span class="heb">barakh</span></span></span> the <span class="m2" data-term="shevi">seventh<span class="m2-apparatus"><span class="heb">sheviʿi</span></span></span>
      <em>yom</em> and <span class="m2" data-term="qadash">set it apart<span class="m2-apparatus"><span class="heb">qadash</span></span></span> — because in it he
      <span class="m2" data-term="shavat">ceased<span class="m2-apparatus"><span class="heb">shavat</span></span></span> from all his work which <em>elohim</em>
      <em>bara</em> to do.`.replace(/\s+/g, ' ').trim()
    ],

    D2: [
      // p1 — FIRST: toledot, shamaim, yom, YHWH, Elohim
      'These are the <span class="m3" data-term="toledot">toledot</span> of the <span class="m3" data-term="shamaim">shamaim</span> and the earth when they were created, in the <span class="m3" data-term="yom">yom</span> of <span class="m3" data-term="yhwh">YHWH</span> <span class="m3" data-term="elohim">Elohim</span>\'s making of earth and shamaim.',

      // p2 — FIRST: adam, adamah. yhwh, elohim = plain
      'And every shrub of the field was not yet in the earth, and every plant of the field had not yet sprouted, because YHWH Elohim had not caused it to rain upon the earth, and there was no <span class="m3" data-term="ha-adam">adam</span> to work the <span class="m3" data-term="adamah">adamah</span>.',

      // p3 — adamah = plain
      'And a mist would rise from the earth and water all the face of the adamah.',

      // p4 — FIRST: yatsar, ha-adam, aphar, nishmat-chayyim, nephesh-chayyah. yhwh, elohim, adamah = plain
      'And YHWH Elohim formed — <span class="m2" data-term="yatsar">yatsar<span class="m2-apparatus"><span class="heb">יָצַר</span></span></span> — <span class="m3" data-term="ha-adam">ha-adam</span> from the <span class="m3" data-term="aphar">aphar</span> of the adamah; and He breathed into his nostrils the <span class="m3" data-term="nishmat-chayyim">nishmat chayyim</span>; and ha-adam became a <span class="m3" data-term="nephesh-chayyah">nephesh chayyah</span>.',

      // p5 — FIRST: Eden. yhwh, elohim, ha-adam = plain
      'And YHWH Elohim planted a garden in <span class="m3" data-term="eden">Eden</span>, in the east, and placed there ha-adam whom he had formed.',

      // p6 — yhwh, elohim, adamah = plain
      'And YHWH Elohim caused to grow from the adamah every tree desirable for sight and good for food, and the tree of life in the middle of the garden, and the tree of the knowledge of good and evil.',

      // p7 — eden = plain
      'And a river went out from Eden to water the garden, and from there it divided and became four heads.',

      // p8 — all plain
      'The name of the first is Pishon; it is the one going around the whole land of Ḥavilah, where there is gold. And the gold of that land is good; there is bedolach and the stone of shoham.',

      // p9 — all plain
      'And the name of the second river is Gihon; it is the one going around the whole land of Kush.',

      // p10 — all plain
      'And the name of the third river is Ḥiddeqel; it is the one going east of Ashur. And the fourth river is Perat.',

      // p11 — FIRST: avad-shamar. yhwh, elohim, ha-adam, eden = plain
      'And YHWH Elohim took ha-adam and placed him in the garden of Eden to work it and to guard it — <span class="m2" data-term="avad-shamar">ʿavad and shamar<span class="m2-apparatus"><span class="heb">עָבַד / שָׁמַר</span></span></span>.',

      // p12 — FIRST: mot-tamut. yhwh, elohim, ha-adam, yom = plain
      'And YHWH Elohim commanded ha-adam, saying, "From every tree of the garden you may surely eat, but from the tree of the knowledge of good and evil you shall not eat from it, for in the yom you eat from it, <span class="m2" data-term="mot-tamut">dying you shall die<span class="m2-apparatus"><span class="heb">מוֹת תָּמוּת</span></span></span>."',

      // p13 — FIRST: ezer-kenegdo. yhwh, elohim, ha-adam = plain
      'And YHWH Elohim said, "It is not good for ha-adam to be alone; I will make for him an <span class="m3" data-term="ezer-kenegdo">ʿezer kenegdo</span>."',

      // p14 — yhwh, elohim, adamah, shamaim, ha-adam = plain
      'And YHWH Elohim formed from the adamah every living thing of the field and every flying creature of the shamaim, and he brought them to ha-adam to see what he would call them.',

      // p15 — ha-adam = plain, nephesh (first in D2? was in D1, but per your rule: first in D2 gets marked. Let's check — not in TERMS_EN for D2? Actually nephesh IS in TERMS_EN, and it appears first time in D2 here as plain text. If you want it marked, add m3. But you said first occurrence only — since nephesh was marked in D1, and this is a fresh D2 load, it should be marked here too. But you said "each time the first occurrence should be present in each D" — so marking it:)
      'And whatever ha-adam called each <span class="m3" data-term="nephesh">nephesh</span> living being, that was its name.',

      // p16 — ha-adam, shamaim, ezer-kenegdo, nephesh = plain
      'And ha-adam gave names to all the livestock, and to the flying creatures of the shamaim, and to every living thing of the field, but for ha-adam no ezer kenegdo was found.',

      // p17 — FIRST: tardemah, tsela, sagar. yhwh, elohim, ha-adam = plain
      'And YHWH Elohim caused a <span class="m3" data-term="tardemah">tardemah</span> to fall upon ha-adam, and he slept. And he took one of his <span class="m3" data-term="tsela">tselaʿot</span> and closed — <span class="m2" data-term="sagar">sagar<span class="m2-apparatus"><span class="heb">סָגַר</span></span></span> — flesh in its place.',

      // p18 — FIRST: banah. yhwh, elohim, tsela, ha-adam = plain
      'And YHWH Elohim built — <span class="m2" data-term="banah">banah<span class="m2-apparatus"><span class="heb">בָּנָה</span></span></span> — the tselaʿ that he had taken from ha-adam into a woman, and he brought her to ha-adam.',

      // p19 — ha-adam = plain
      'And ha-adam said: "This one, this time — bone from my bones and flesh from my flesh. This one shall be called Woman (Ishah), for from Man (Ish) this one was taken."',

      // p20 — ha-adam = plain
      'Therefore, a man leaves his father and his mother and clings to his woman, and they become one flesh. And the two of them were naked — ha-adam and his woman — and they were not ashamed.',

      // p21 — FIRST: nahash. yhwh, elohim = plain
      'And the <span class="m3" data-term="nahash">nahash</span> was more cunning than every living thing of the field that YHWH Elohim had made.',

      // p22 — elohim = plain (already first in p1), nahash = plain
      'And he said to the woman: "Is it really that Elohim said, \'You shall not eat from any tree of the garden\'?"',

      // p23 — nahash, elohim = plain
      'And the woman said to the nahash: "From the fruit of the trees of the garden we may eat, but from the fruit of the tree that is in the middle of the garden, Elohim said, \'You shall not eat from it, and you shall not touch it, lest you die.\'"',

      // p24 — FIRST: yada. nahash, elohim, yom, mot-tamut = plain
      'And the nahash said to the woman: "Dying you shall not die. For Elohim knows that in the yom you eat from it, your eyes will be opened, and you will be like Elohim, <span class="m2" data-term="yada">knowing<span class="m2-apparatus"><span class="heb">יָדַע</span></span></span> good and evil."',

      // p25 — all plain
      'And the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was desirable for gaining insight.',

      // p26 — all plain
      'And she took from its fruit and ate, and she also gave to her man with her, and he ate.',

      // p27 — all plain
      'And the eyes of both of them were opened, and they knew that they were naked.',

      // p28 — all plain
      'And they sewed fig leaves and made for themselves coverings.',

      // p29 — yhwh, elohim, ha-adam = plain
      'And they heard the sound of YHWH Elohim walking in the garden at the breeze of the day, and ha-adam and his woman hid themselves from the face of YHWH Elohim in the midst of the trees of the garden.',

      // p30 — yhwh, elohim, ha-adam = plain
      'YHWH Elohim called to ha-adam and said to him: "Where are you?"',

      // p31 — ha-adam = plain
      'And ha-adam said: "I heard your sound in the garden, and I was afraid because I was naked, and I hid myself."',

      // p32 — all plain
      'And he said: "Who told you that you were naked? From the tree from which I commanded you not to eat — have you eaten?"',

      // p33 — ha-adam = plain
      'And ha-adam said: "The woman whom you gave to be with me — she gave to me from the tree, and I ate."',

      // p34 — yhwh, elohim = plain
      'And YHWH Elohim said to the woman: "What is this that you have done?"',

      // p35 — nahash = plain
      'And the woman said: "The nahash deceived me, and I ate."',

      // p36 — yhwh, elohim, nahash, aphar = plain
      'And YHWH Elohim said to the nahash: "Because you have done this, cursed are you more than all the livestock and more than every living thing of the field; on your belly you shall go, and aphar you shall eat all the days of your life.',

      // p37 — FIRST: zera. nahash = plain
      'And enmity I will put between you and between the woman, and between your <span class="m3" data-term="zera">zeraʿ</span> and between her zeraʿ; he shall strike you at the head, and you shall strike him at the heel."',

      // p38 — all plain
      'To the woman he said: "I will greatly multiply your pain and your conception; in pain you shall bear children. And your desire shall be toward your man, and he shall rule over you."',

      // p39 — ha-adam, adamah, aphar = plain
      'And to ha-adam he said: "Because you listened to the voice of your woman and ate from the tree about which I commanded you, saying, \'You shall not eat from it,\' cursed is the adamah because of you; in pain you shall eat from it all the days of your life.',

      // p40 — adamah, aphar = plain
      'And thorn and thistle it shall bring forth for you, and you shall eat the plants of the field. By the sweat of your face you shall eat bread until you return to the adamah, because from it you were taken; for aphar you are, and to aphar you shall return."',

      // p41 — FIRST: chavvah. ha-adam = plain
      'And ha-adam called the name of his woman <span class="m3" data-term="chavvah">Ḥavvah</span>, because she was the mother of all living.',

      // p42 — yhwh, elohim, ha-adam = plain
      'And YHWH Elohim made for ha-adam and for his woman garments of skin, and he clothed them.',

      // p43 — yhwh, elohim, ha-adam, yada = plain
      'And YHWH Elohim said: "Look, ha-adam has become like one of us, knowing good and evil. And now, lest he stretch out his hand and take also from the tree of life, and eat, and live forever—"',

      // p44 — yhwh, elohim, eden, adamah, ha-adam = plain
      'And YHWH Elohim sent him out from the garden of Eden, to work the adamah from which he was taken. And he drove out ha-adam.',

      // p45 — FIRST: keruvim. eden = plain
      'And he placed east of the garden of Eden the <span class="m3" data-term="keruvim">keruvim</span> and the flame of the sword that turns itself, to guard the way to the tree of life.',

      // p46 — ha-adam, chavvah = plain; yhwh = plain
      'And ha-adam knew Ḥavvah his woman, and she conceived and bore Qayin. And she said: "I have acquired a man with YHWH."',

      // p47 — all plain
      'And she added to bear his brother, Hevel.',

      // p48 — adamah = plain
      'And Hevel became a keeper of flock, and Qayin became a worker of adamah.',

      // p49 — yhwh = plain
      'And it happened from the end of days, Qayin brought from the fruit of the adamah a gift to YHWH. And Hevel, he also brought from the firstborn of his flock, from their fat-parts.',

      // p50 — yhwh = plain
      'And YHWH regarded Hevel and his gift, but Qayin and his gift he did not regard. And it burned to Qayin exceedingly, and his face fell.',

      // p51 — yhwh = plain
      'And YHWH said to Qayin: "Why has it burned to you? And why has your face fallen? Is it not so: if you do well, lifting? But if you do not do well, ḥata\'t is crouching at the opening, and its desire is for you — but you, you may rule over it."',

      // p52 — all plain
      'And Qayin said to Hevel his brother…',

      // p53 — all plain
      'And it happened when they were in the field, Qayin rose up against Hevel his brother and killed him.',

      // p54 — yhwh = plain
      'And YHWH said to Qayin: "Where is Hevel your brother?" And he said, "I do not know. Am I my brother\'s keeper?"',

      // p55 — adamah = plain
      'And he said: "What have you done? The voice of your brother\'s bloods is crying out to me from the adamah.',

      // p56 — adamah = plain
      'And now, cursed are you from the adamah, which opened its mouth to receive your brother\'s blood from your hand. When you work the adamah, it will not again give its strength to you. A wanderer and a stray you will be on the earth."',

      // p57 — yhwh, adamah = plain
      'And Qayin said to YHWH: "My awon is too great to bear. Behold, you have driven me out this day from upon the face of the adamah, and from your face I will be hidden.',

      // p58 — all plain
      'And I will be a wanderer and a stray on the earth, and it will be that anyone finding me will kill me."',

      // p59 — yhwh = plain
      'And YHWH said to him: "Therefore, anyone killing Qayin — sevenfold it will be avenged." And YHWH set an ot for Qayin, so that anyone finding him would not strike him.',

      // p60 — yhwh, eden = plain
      'And Qayin went out from the presence of YHWH and dwelt in the land of Nod, east of Eden.',

      // p61 — all plain
      'And Qayin knew his woman, and she conceived and bore Ḥanoḵ. And he was building a city, and he called the name of the city according to the name of his son, Ḥanoḵ.',

      // p62 — all plain
      'And to Ḥanoḵ was born \'Irad, and \'Irad fathered Meḥuya\'el, and Meḥuya\'el fathered Metusha\'el, and Metusha\'el fathered Lemekh.',

      // p63 — all plain
      'And Lemekh took for himself two women: the name of the first, \'Adah, and the name of the second, Ẓillah.',

      // p64 — all plain
      'And \'Adah bore Yaval; he was the father of those dwelling in tents and possessing livestock.',

      // p65 — all plain
      'And the name of his brother was Yuval; he was the father of all those grasping the kinnor and the ugav.',

      // p66 — all plain
      'And Ẓillah, she also bore Tuval-Qayin, a sharpener of every craftsman in bronze and iron. And the sister of Tuval-Qayin was Na\'amah.',

      // p67 — all plain
      'And Lemekh said to his women: "\'Adah and Ẓillah, hear my voice; wives of Lemekh, give ear to my saying: For a man I have killed for my wound, and a youth for my bruise. For sevenfold Qayin will be avenged, but Lemekh — seventy-sevenfold."',

      // p68 — ha-adam, chavvah, elohim, zera = plain (all previously seen)
      'And ha-adam knew his woman again, and she bore a son and called his name Shet, "For Elohim has set for me another zeraʿ in place of Hevel, for Qayin killed him."',

      // p69 — yhwh = plain
      'And to Shet also, to him a son was born, and he called his name Enosh. Then it was ḥuchal to call on the name of YHWH.',
    ],

    // Stubs — fill in as you go.
    D3: [
      // p1 — FIRST: toledot, adam (as person), yom, elohim, demut. Note: "Adam" here is the personal name, distinct from ha-adam.
      'This is the book of the <span class="m3" data-term="toledot">toledot</span> of Adam. In the <span class="m3" data-term="yom">yom</span> <span class="m3" data-term="elohim">Elohim</span> created Adam, in the <span class="m3" data-term="demut">demut</span> of Elohim he made him.',

      // p2 — FIRST: tselem. demut, elohim, yom = plain
      'Male and female he created them. And he blessed them. And he called their name Adam, in the yom they were created.',

      // p3 — tselem, demut = plain
      'And Adam lived thirty and one hundred years, and he fathered in his demut, according to his <span class="m3" data-term="tselem">tselem</span>, and he called his name Shet.',

      // p4 — all plain
      'And the days of Adam after he fathered Shet were eight hundred years, and he fathered sons and daughters.',

      // p5 — all plain
      'And all the days of Adam were nine hundred and thirty years, and he died.',

      // p6 — all plain
      'And Shet lived five years and one hundred years, and he fathered Enosh. And Shet lived after he fathered Enosh eight hundred and seven years, and he fathered sons and daughters. And all the days of Shet were twelve years and nine hundred years, and he died.',

      // p7 — all plain
      'And Enosh lived ninety years, and he fathered Qenan. And Enosh lived after he fathered Qenan eight hundred and fifteen years, and he fathered sons and daughters. And all the days of Enosh were five years and nine hundred years, and he died.',

      // p8 — all plain
      'And Qenan lived seventy years, and he fathered Mahalal\'el. And Qenan lived after he fathered Mahalal\'el eight hundred and forty years, and he fathered sons and daughters. And all the days of Qenan were ten years and nine hundred years, and he died.',

      // p9 — all plain
      'And Mahalal\'el lived five years and sixty years, and he fathered Yered. And Mahalal\'el lived after he fathered Yered eight hundred and thirty years, and he fathered sons and daughters. And all the days of Mahalal\'el were five and ninety years and eight hundred years, and he died.',

      // p10 — all plain
      'And Yered lived two and sixty years and one hundred years, and he fathered Ḥanoḵ. And Yered lived after he fathered Ḥanoḵ eight hundred years, and he fathered sons and daughters. And all the days of Yered were two and sixty years and nine hundred years, and he died.',

      // p11 — elohim = plain
      'And Ḥanoḵ lived five and sixty years, and he fathered Metushelaḥ. And Ḥanoḵ walked with Elohim after he fathered Metushelaḥ three hundred years, and he fathered sons and daughters.',

      // p12 — elohim = plain
      'And all the days of Ḥanoḵ were five and sixty years and three hundred years. And Ḥanoḵ walked with Elohim, and he was not, for Elohim took him.',

      // p13 — all plain
      'And Metushelaḥ lived seven and eighty years and one hundred years, and he fathered Lemekh. And Metushelaḥ lived after he fathered Lemekh seven hundred and eighty-two years, and he fathered sons and daughters. And all the days of Metushelaḥ were nine and sixty years and nine hundred years, and he died.',

      // p14 — FIRST: adamah, YHWH. Note: these are first in D3 context.
      'And Lemekh lived two and eighty years and one hundred years, and he fathered a son. And he called his name Noaḥ, saying: "This one will comfort us from our work and from the pain of our hands, from the <span class="m3" data-term="adamah">adamah</span> which <span class="m3" data-term="yhwh">YHWH</span> cursed."',

      // p15 — all plain
      'And Lemekh lived after he fathered Noaḥ five hundred and ninety-five years, and he fathered sons and daughters. And all the days of Lemekh were seven and seventy years and seven hundred years, and he died.',

      // p16 — all plain
      'And Noaḥ was five hundred years old, and Noaḥ fathered Shem, Ḥam, and Yaphet.',
    ],
    D4: [
      // p1 — FIRST: ha-adam, adamah
      'And it happened that <span class="m3" data-term="ha-adam">ha-adam</span> began to multiply upon the face of the <span class="m3" data-term="adamah">adamah</span>, and daughters were born to them.',

      // p2 — bene ha-Elohim (no term entry — transliterated plain), ha-adam = plain
      'And the bene ha-Elohim — sons of Elohim — saw the daughters of ha-adam, that they were tov, and they took for themselves women from all that they chose.',

      // p3 — FIRST: YHWH, ruach. ha-adam = plain
      'And <span class="m3" data-term="yhwh">YHWH</span> said: "My <span class="m3" data-term="ruach">ruach</span> shall not remain in ha-adam forever, in that he is flesh; and his days shall be one hundred and twenty years."',

      // p4 — nephilim (no term entry — transliterated plain). ha-adam = plain
      'The nephilim were on the earth in those days — and also afterward — when bene ha-Elohim came in to the daughters of ha-adam, and they bore to them.',

      // p5 — all plain
      'These were the mighty ones who were from of old, men of name.',

      // p6 — YHWH, ha-adam = plain
      'And YHWH regretted that he had made ha-adam on the earth, and it grieved him to his heart.',

      // p7 — FIRST: shamaim. YHWH, ha-adam, adamah = plain
      'And YHWH said, "I will wipe away ha-adam whom I have created from upon the face of the adamah — from ha-adam to beast, to creeping thing, and to flying creature of the <span class="m3" data-term="shamaim">shamaim</span> — for I regret that I have made them."',

      // p8 — YHWH = plain; ḥen (no term entry — transliterated plain)
      'And Noaḥ found ḥen in the eyes of YHWH.',
    ],
    D5: [
      // p1 — FIRST: toledot. tsaddiq, tamim (no term entries — transliterated plain). Elohim = plain
      'These are the <span class="m3" data-term="toledot">toledot</span> of Noaḥ. Noaḥ was a tsaddiq man, tamim in his generations; Noaḥ walked with Elohim.',

      // p2 — all plain
      'And Noaḥ fathered three sons: Shem, Ḥam, and Yephet.',

      // p3 — shaḥat, ḥamas (no term entries — transliterated plain). Elohim = plain
      'And the earth was shaḥat before Elohim, and the earth was filled with ḥamas.',

      // p4 — shaḥat = plain; Elohim = plain
      'And Elohim saw the earth, and behold, it was shaḥat, for all flesh had shaḥat its way upon the earth.',

      // p5 — qets, tevah, qinnim, kaphar, kofer (no term entries — transliterated plain). Elohim, shaḥat, ḥamas = plain
      'And Elohim said to Noaḥ: "The qets of all flesh has come before me, for the earth is filled with ḥamas from before them; and behold, I am about to shaḥat them with the earth. Make for yourself a tevah of gopher-wood; qinnim you shall make in the tevah, and you shall kaphar it inside and outside with kofer.',

      // p6 — tevah = plain
      'And this is how you shall make it: three hundred cubits the length of the tevah, fifty cubits its breadth, and thirty cubits its height.',

      // p7 — tsohar (no term entry — transliterated plain). tevah = plain
      'A tsohar you shall make for the tevah, and to a cubit you shall finish it from above; and the door of the tevah you shall place in its side; lower, second, and third you shall make it.',

      // p8 — FIRST: mabbul (no term entry — will appear as transliterated). ruach = plain (was in D1/D4, but first in D6 — mark it). FIRST: ruach in D6.
      'And I — behold, I am bringing the mabbul of waters upon the earth, to destroy all flesh in which is the <span class="m3" data-term="ruach">ruach</span> of life from under the heavens; everything that is on the earth shall expire.',

      // p9 — FIRST: berit (no term entry — transliterated plain). tevah = plain
      'And I will establish my berit with you, and you shall come into the tevah — you, and your sons, and your woman, and the women of your sons with you.',

      // p10 — tevah = plain
      'And from every living thing, from all flesh, two from each you shall bring into the tevah to keep them alive with you; male and female they shall be.',

      // p11 — all plain
      'From the flying creatures according to their kind, and from the livestock according to their kind, from every creeping thing of the ground according to its kind — two from each shall come to you, to keep them alive.',

      // p12 — Elohim = plain
      'And you — take for yourself from every food that is eaten, and gather it to yourself, and it shall be for you and for them for food." And Noaḥ did according to all that Elohim commanded him; thus he did.',

      // p13 — FIRST: YHWH. tsaddiq (plain). tevah = plain
      'And <span class="m3" data-term="yhwh">YHWH</span> said to Noaḥ: "Come — you and all your house — into the tevah, for you I have seen tsaddiq before me in this generation.',

      // p14 — behemah, tehorah (no term entries — transliterated plain)
      'From every behemah that is tehorah you shall take for yourself seven, seven — a male and his female; and from the behemah that is not tehorah, two — a male and his female.',

      // p15 — FIRST: zera. zeraʿ = plain
      'Also from the flying creatures of the heavens, seven, seven — male and female — to keep <span class="m3" data-term="zera">zeraʿ</span> alive upon the face of all the earth.',

      // p16 — FIRST: adamah. YHWH, adamah = plain
      'For yet seven days, and I will cause rain upon the earth forty days and forty nights, and I will wipe away every standing thing that I have made from upon the face of the <span class="m3" data-term="adamah">adamah</span>." And Noaḥ did according to all that YHWH commanded him.',

      // p17 — mabbul = plain
      'And Noaḥ was six hundred years old, and the mabbul of waters came upon the earth.',

      // p18 — tevah, mabbul = plain
      'And Noaḥ came — and his sons, and his woman, and the women of his sons with him — into the tevah, from before the waters of the mabbul.',

      // p19 — behemah, tehorah, adamah, tevah, Elohim = plain
      'From the behemah that is tehorah, and from the behemah that is not tehorah, and from the flying creatures, and from everything that creeps upon the adamah, two, two they came to Noaḥ into the tevah, male and female, as Elohim commanded Noaḥ.',

      // p20 — mabbul = plain
      'And it happened after seven days, and the waters of the mabbul came upon the earth.',

      // p21 — FIRST: tehom, shamaim. tehom, shamaim
      'In the six hundredth year of the life of Noaḥ, in the second month, on the seventeenth day of the month, on that day all the springs of the great <span class="m3" data-term="tehom">tehom</span> were split open, and the windows of the <span class="m3" data-term="shamaim">shamaim</span> were opened.',

      // p22 — all plain
      'And the rain was upon the earth forty days and forty nights.',

      // p23 — tevah = plain
      'On that very day Noaḥ came, and Shem, and Ḥam, and Yephet, the sons of Noaḥ, and the woman of Noaḥ, and the three women of his sons with them, into the tevah.',

      // p24 — behemah = plain
      'They, and every living thing according to its kind, and all the behemah according to its kind, and every creeping thing that creeps upon the earth according to its kind, and every flying creature according to its kind — every bird, every winged thing.',

      // p25 — tevah, ruach = plain
      'And they came to Noaḥ into the tevah, two, two from all flesh in which is the ruach of life.',

      // p26 — Elohim, YHWH = plain
      'And those coming — male and female from all flesh — came, as Elohim commanded him; and YHWH shut him in.',

      // p27 — mabbul, tevah = plain
      'And the mabbul was forty days upon the earth, and the waters increased and lifted up the tevah, and it rose from upon the earth.',

      // p28 — tevah = plain
      'And the waters strengthened and increased greatly upon the earth, and the tevah went upon the face of the waters.',

      // p29 — all plain
      'And the waters strengthened exceedingly upon the earth, and all the high mountains that were under all the heavens were covered. Fifteen cubits upward the waters strengthened, and the mountains were covered.',

      // p30 — FIRST: ha-adam. behemah, ha-adam
      'And all flesh that moves upon the earth expired — flying creatures, and behemah, and living things, and every swarming thing that swarms upon the earth, and all <span class="m3" data-term="ha-adam">ha-adam</span>.',

      // p31 — FIRST: nishmat-chayyim (via nishmat). ruach = plain
      'Everything in whose nostrils was the nishmat of the ruach of life, from all that was on the dry land, died.',

      // p32 — adamah, ha-adam, behemah, shamaim = plain
      'And he wiped away every standing thing that was upon the face of the adamah — from ha-adam to behemah, to creeping thing, and to flying creature of the shamaim; and they were wiped away from the earth.',

      // p33 — tevah = plain
      'And only Noaḥ was left, and those who were with him in the tevah. And the waters strengthened upon the earth one hundred and fifty days.',

      // p34 — FIRST: Elohim (first marked in D6). zakhar (no term entry). behemah, tevah, ruach = plain
      'And <span class="m3" data-term="elohim">Elohim</span> zakhar Noaḥ, and every living thing, and all the behemah that were with him in the tevah; and Elohim caused a ruach to pass over the earth, and the waters subsided.',

      // p35 — tehom, shamaim = plain
      'And the springs of the tehom were closed, and the windows of the shamaim, and the rain from the shamaim was restrained.',

      // p36 — all plain
      'And the waters returned from upon the earth, going and returning, and the waters diminished at the end of one hundred and fifty days.',

      // p37 — tevah = plain
      'And the tevah rested in the seventh month, on the seventeenth day of the month, upon the mountains of Ararat.',

      // p38 — all plain
      'And the waters continued diminishing until the tenth month; in the tenth month, on the first day of the month, the tops of the mountains were seen.',

      // p39 — tevah = plain
      'And it happened, at the end of forty days, that Noaḥ opened the window of the tevah that he had made.',

      // p40 — ʿorev (no term entry — transliterated plain)
      'And he sent out the ʿorev, and it went out, going and returning, until the waters were dried from upon the earth.',

      // p41 — yonah (no term entry — transliterated plain)
      'And he sent out the yonah from him, to see whether the waters had lightened from upon the face of the ground.',

      // p42 — yonah, tevah = plain
      'And the yonah found no resting place for the sole of her foot, and she returned to him into the tevah, for waters were upon the face of all the earth; and he sent out his hand and took her and brought her to him into the tevah.',

      // p43 — yonah, tevah = plain
      'And he waited yet another seven days, and again he sent out the yonah from the tevah.',

      // p44 — yonah = plain
      'And the yonah came to him at the time of evening, and behold — a freshly plucked olive leaf was in her mouth; and Noaḥ knew that the waters had lightened from upon the earth.',

      // p45 — yonah = plain
      'And he waited yet another seven days, and he sent out the yonah, and she did not return to him again.',

      // p46 — FIRST: adamah. tevah = plain
      'And it happened, in the six hundred and first year, in the first month, on the first day of the month, the waters were dried from upon the earth; and Noaḥ removed the covering of the tevah and saw — and behold — the face of the adamah was dried.',

      // p47 — all plain
      'And in the second month, on the twenty-seventh day of the month, the earth was dry.',

      // p48 — Elohim, tevah = plain
      'And Elohim spoke to Noaḥ, saying: "Go out from the tevah — you, and your woman, and your sons, and the women of your sons with you.',

      // p49 — behemah = plain
      'Every living thing that is with you from all flesh — flying creatures, and behemah, and every creeping thing that creeps upon the earth — bring out with you, and let them swarm on the earth, and be fruitful and multiply upon the earth."',

      // p50 — tevah = plain
      'And Noaḥ went out, and his sons, and his woman, and the women of his sons with him. Every living thing, every creeping thing, and every flying creature, everything that moves upon the earth, according to their families, went out from the tevah.',

      // p51 — mizbeach, ʿolot (no term entries — transliterated plain). YHWH, behemah, tehorah = plain
      'And Noaḥ built a mizbeach to YHWH, and he took from every behemah that is tehorah and from every flying creature that is tehorah, and he offered ʿolot upon the mizbeach.',

      // p52 — reah niḥoaḥ (no term entry — transliterated plain). YHWH, adamah, ha-adam = plain
      'And YHWH smelled the reah niḥoaḥ, and YHWH said in his heart: "I will not again curse the adamah on account of ha-adam, for the inclination of the heart of ha-adam is evil from his youth; and I will not again strike every living thing as I have done.',

      // p53 — all plain
      'While all the days of the earth remain, seed-time and harvest, cold and heat, summer and winter, day and night shall not cease."',

      // p54 — Elohim = plain
      'And Elohim blessed Noaḥ and his sons, and he said to them: "Be fruitful and multiply, and fill the earth.',

      // p55 — shamaim, adamah = plain
      'And the fear of you and the dread of you shall be upon every living thing of the earth, and upon every flying creature of the shamaim, with everything that creeps upon the adamah, and all the fish of the sea — into your hand they are given.',

      // p56 — FIRST: nephesh (in D6). Also nefesh variant
      'Every moving thing that lives shall be for you for food; like the green plant, I have given you everything. But flesh with its <span class="m3" data-term="nephesh">nefesh</span>, its blood, you shall not eat.',

      // p57 — nephesh, ha-adam = plain
      'And surely your blood, for your nefesh, I will require; from the hand of every living thing I will require it, and from the hand of ha-adam, from the hand of a man — his brother — I will require the nefesh of ha-adam.',

      // p58 — FIRST: tselem. ha-adam, Elohim = plain
      'Whoever sheds the blood of ha-adam, by ha-adam shall his blood be shed; for in the <span class="m3" data-term="tselem">tselem</span> of Elohim he made ha-adam.',

      // p59 — all plain
      'And you — be fruitful and multiply; swarm upon the earth and multiply in it."',

      // p60 — Elohim, berit, zera, nephesh, behemah, tevah = plain
      'And Elohim said to Noaḥ and to his sons with him, saying, "And I — behold, I am establishing my berit with you, and with your zeraʿ after you, and with every living nefesh that is with you — the flying creatures, the behemah, and every living thing of the earth with you, from all that came out of the tevah, to every living thing of the earth.',

      // p61 — berit, mabbul, shaḥat = plain
      'And I establish my berit with you: never again shall all flesh be cut off by the waters of the mabbul, and never again shall there be a mabbul to shaḥat the earth."',

      // p62 — Elohim, berit, nephesh, olam (no term entry — transliterated plain)
      'And Elohim said, "This is the sign of the berit which I am setting between me and you and every living nefesh that is with you, for generations of olam.',

      // p63 — qeshet (no term entry — transliterated plain). berit = plain
      'My qeshet I have set in the cloud, and it shall be for a sign of the berit between me and the earth.',

      // p64 — qeshet, zakhar, berit, nephesh, mabbul, shaḥat = plain
      'And it shall be, when I cause cloud to cover the earth, and the qeshet is seen in the cloud, that I will zakhar my berit which is between me and you and every living nefesh of all flesh, and the waters shall no more become a mabbul to shaḥat all flesh.',

      // p65 — qeshet, zakhar, berit, olam, Elohim, nephesh = plain
      'And the qeshet shall be in the cloud, and I will see it, to zakhar the berit of olam between Elohim and every living nefesh of all flesh that is upon the earth."',

      // p66 — Elohim, berit = plain
      'And Elohim said to Noaḥ, "This is the sign of the berit which I have established between me and all flesh that is upon the earth."',

      // p67 — tevah = plain
      'And the sons of Noaḥ who went out from the tevah were Shem, Ḥam, and Yephet; and Ḥam was the father of Kenaʿan.',

      // p68 — all plain
      'These three were the sons of Noaḥ, and from these the whole earth was scattered.',

      // p69 — adamah = plain
      'And Noaḥ began as a man of the adamah, and he planted a vineyard.',

      // p70 — all plain
      'And he drank from the wine and became drunk, and he uncovered himself within his tent.',

      // p71 — all plain
      'And Ḥam, the father of Kenaʿan, saw the nakedness of his father, and he told his two brothers outside.',

      // p72 — all plain
      'And Shem and Yephet took the garment and placed it upon the shoulders of both of them, and they walked backward and covered the nakedness of their father; and their faces were backward, and the nakedness of their father they did not see.',

      // p73 — all plain
      'And Noaḥ awoke from his wine, and he knew what his younger son had done to him.',

      // p74 — all plain
      'And he said, "Cursed is Kenaʿan; a servant of servants shall he be to his brothers."',

      // p75 — FIRST: YHWH, Elohim = already marked. All plain.
      'And he said, "Blessed is YHWH, the Elohim of Shem; and Kenaʿan shall be a servant to him. May Elohim enlarge Yephet, and may he dwell in the tents of Shem; and Kenaʿan shall be a servant to them."',

      // p76 — mabbul = plain
      'And Noaḥ lived after the mabbul three hundred and fifty years. And all the days of Noaḥ were nine hundred and fifty years, and he died.',
    ],
    D6: [
      // p1 — FIRST: toledot. mabbul (no term entry — transliterated plain)
      'And these are the <span class="m3" data-term="toledot">toledot</span> of the sons of Noaḥ: Shem, Ḥam, and Yephet. And sons were born to them after the mabbul.',

      // p2 — all plain
      'The sons of Yephet: Gomer, and Magog, and Madai, and Yavan, and Tuval, and Meshekh, and Tiras.',

      // p3 — all plain
      'And the sons of Gomer: Ashkenaz, and Rifat, and Togarmah.',

      // p4 — all plain
      'And the sons of Yavan: Elishah, and Tarshish, Kittim, and Dodanim.',

      // p5 — all plain
      'From these were separated the coastlands of the nations, each according to its land, according to its language, according to their families, within their nations.',

      // p6 — all plain
      'And the sons of Ḥam: Kush, and Mitsrayim, and Put, and Kenaʿan.',

      // p7 — all plain
      'And the sons of Kush: Seva, and Ḥavilah, and Savta, and Raʿamah, and Savteka. And the sons of Raʿamah: Sheva and Dedan.',

      // p8 — gibbor (no term entry — transliterated plain)
      'And Kush fathered Nimrod; he began to be a gibbor on the earth.',

      // p9 — FIRST: YHWH. gibbor tsayid (no term entry — transliterated plain)
      'He was a gibbor tsayid before <span class="m3" data-term="yhwh">YHWH</span>; therefore it is said, "Like Nimrod, a gibbor tsayid before YHWH."',

      // p10 — all plain
      'And the beginning of his kingdom was Bavel, and Erekh, and Akkad, and Kalneh, in the land of Shinʿar.',

      // p11 — all plain
      'From that land he went out to Ashur, and he built Ninveh, and Reḥovot-ʿIr, and Kalaḥ, and Resen between Ninveh and between Kalaḥ — that is the great city.',

      // p12 — all plain
      'And Mitsrayim fathered Ludim, and ʿAnamim, and Lehavim, and Naftuḥim, and Patrusim, and Kasluḥim — from whom came the Pelishtim — and Kaftorim.',

      // p13 — all plain
      'And Kenaʿan fathered Tsidon his firstborn, and Ḥet, and the Yevusi, and the Emori, and the Girgashi, and the Ḥivi, and the Arqi, and the Sini, and the Arvadi, and the Tsemari, and the Ḥamati.',

      // p14 — all plain
      'And afterward the families of the Kenaʿani were spread out.',

      // p15 — all plain
      'And the border of the Kenaʿani was from Tsidon, as you go toward Gerar, as far as ʿAzzah; as you go toward Sedom and Amorah and Admah and Tsevoʿim, as far as Leshaʿ.',

      // p16 — all plain
      'These are the sons of Ḥam, according to their families, according to their languages, in their lands, in their nations.',

      // p17 — all plain
      'And to Shem also were born sons — he was the father of all the sons of ʿEver, the brother of Yephet the elder.',

      // p18 — all plain
      'The sons of Shem: ʿElam, and Ashur, and Arpakhshad, and Lud, and Aram.',

      // p19 — all plain
      'And the sons of Aram: ʿUts, and Ḥul, and Geter, and Mash.',

      // p20 — all plain
      'And Arpakhshad fathered Shelaḥ; and Shelaḥ fathered ʿEver.',

      // p21 — all plain
      'And to ʿEver were born two sons: the name of the one was Peleg, for in his days the earth was divided; and the name of his brother was Yoqtan.',

      // p22 — all plain
      'And Yoqtan fathered Almodad, and Shelef, and Ḥatsarmavet, and Yeraḥ, and Hadoram, and Uzal, and Diqlah, and ʿOval, and Avimaʾel, and Sheva, and Ofir, and Ḥavilah, and Yovav; all these were the sons of Yoqtan.',

      // p23 — all plain
      'And their dwelling was from Meshaʿ, as you go toward Sephar, the hill-country of the east.',

      // p24 — all plain
      'These are the sons of Shem, according to their families, according to their languages, in their lands, according to their nations.',

      // p25 — toledot, mabbul = plain (toledot already marked in p1; mabbul has no term entry)
      'These are the families of the sons of Noaḥ, according to their toledot, in their nations; and from these the nations were separated on the earth after the mabbul.',
    ],
    D7: [
      // p1 — safah, devarim (no term entries — transliterated plain)
      'And all the earth was of one safah and of one set of devarim.',

      // p2 — all plain
      'And it happened as they journeyed from the east that they found a plain in the land of Shinʿar, and they dwelt there.',

      // p3 — ḥemar (no term entry — transliterated plain)
      'And they said, a man to his fellow, "Come, let us make bricks and burn them thoroughly." And the brick was for them as stone, and the ḥemar was for them as mortar.',

      // p4 — FIRST: shamaim. safah = plain
      'And they said, "Come, let us build for ourselves a city and a tower with its head in the <span class="m3" data-term="shamaim">shamaim</span>, and let us make for ourselves a name, lest we be scattered over the face of all the earth."',

      // p5 — FIRST: YHWH, ha-adam
      'And <span class="m3" data-term="yhwh">YHWH</span> came down to see the city and the tower which the sons of <span class="m3" data-term="ha-adam">ha-adam</span> had built.',

      // p6 — YHWH, safah = plain
      'And YHWH said, "Behold, they are one people, and one safah is for all of them; and this they have begun to do.',

      // p7 — YHWH, safah = plain
      'And now, nothing that they plan to do will be withheld from them. Come, let us go down, and let us confuse there their lip, so that a man will not hear the safah of his fellow."',

      // p8 — YHWH = plain
      'And YHWH scattered them from there over the face of all the earth, and they ceased building the city.',

      // p9 — YHWH = plain
      'Therefore its name was called Bavel, for there YHWH confused the lip of all the earth; and from there YHWH scattered them over the face of all the earth.',
    ],
    D8: [
      // p1 — FIRST: toledot. mabbul (no term entry — transliterated plain)
      'These are the <span class="m3" data-term="toledot">toledot</span> of Shem. Shem was a son of one hundred years, and he fathered Arpakhshad two years after the mabbul.',

      // p2 — all plain
      'And Shem lived after he fathered Arpakhshad five hundred years, and he fathered sons and daughters.',

      // p3 — all plain
      'And Arpakhshad lived thirty-five years, and he fathered Shelaḥ. And Arpakhshad lived after he fathered Shelaḥ four hundred and three years, and he fathered sons and daughters.',

      // p4 — all plain
      'And Shelaḥ lived thirty years, and he fathered ʿEver. And Shelaḥ lived after he fathered ʿEver four hundred and three years, and he fathered sons and daughters.',

      // p5 — all plain
      'And ʿEver lived thirty-four years, and he fathered Peleg. And ʿEver lived after he fathered Peleg four hundred and thirty years, and he fathered sons and daughters.',

      // p6 — all plain
      'And Peleg lived thirty years, and he fathered Reʿu. And Peleg lived after he fathered Reʿu two hundred and nine years, and he fathered sons and daughters.',

      // p7 — all plain
      'And Reʿu lived thirty-two years, and he fathered Serug. And Reʿu lived after he fathered Serug two hundred and seven years, and he fathered sons and daughters.',

      // p8 — all plain
      'And Serug lived thirty years, and he fathered Naḥor. And Serug lived after he fathered Naḥor two hundred years, and he fathered sons and daughters.',

      // p9 — all plain
      'And Naḥor lived twenty-nine years, and he fathered Teraḥ. And Naḥor lived after he fathered Teraḥ one hundred and nineteen years, and he fathered sons and daughters.',

      // p10 — all plain
      'And Teraḥ lived seventy years, and he fathered Avram, Naḥor, and Haran.',
    ],
    D9: [
      // p1 — FIRST: toledot
      'And these are the <span class="m3" data-term="toledot">toledot</span> of Teraḥ. Teraḥ fathered Avram, Naḥor, and Haran; and Haran fathered Lot.',

      // p2 — all plain
      'And Haran died in the presence of Teraḥ his father in the land of his kindred, in Ur of the Kasdim.',

      // p3 — all plain
      'And Avram and Naḥor took for themselves wives; the name of the wife of Avram was Sarai, and the name of the wife of Naḥor was Milkah, the daughter of Haran, the father of Milkah and the father of Yiskah.',

      // p4 — all plain
      'And Sarai was barren; there was no child to her.',

      // p5 — all plain
      'And Teraḥ took Avram his son, and Lot the son of Haran, the son of his son, and Sarai his daughter-in-law, the wife of Avram his son; and they went out together from Ur of the Kasdim to go to the land of Kenaʿan. And they came as far as Ḥaran and dwelt there. And the days of Teraḥ were two hundred and five years; and Teraḥ died in Ḥaran.',

      // p6 — FIRST: YHWH. halakh, barakh (no term entries — transliterated plain)
      'And <span class="m3" data-term="yhwh">YHWH</span> said to Avram, "Go — halakh — from your land and from your kindred and from your father\'s house to the land that I will show you.',

      // p7 — FIRST: adamah. barakh = plain. arar (no term entry — transliterated plain)
      'And I will make you into a great nation, and I will bless — barakh — you, and I will make your name great, and you shall be a blessing. And I will bless those who bless you, and the one who curses you I will curse — arar —, and in you all the families of the <span class="m3" data-term="adamah">adamah</span> shall be blessed."',

      // p8 — YHWH = plain
      'And Avram went, just as YHWH had spoken to him, and Lot went with him. And Avram was seventy-five years old when he went out from Ḥaran.',

      // p9 — FIRST: nephesh. YHWH, adamah = plain
      'And Avram took Sarai his wife, and Lot his brother\'s son, and all their possessions that they had gathered, and the <span class="m3" data-term="nephesh">nephesh</span> that they had acquired in Ḥaran, and they went out to go to the land of Kenaʿan, and they came to the land of Kenaʿan.',

      // p10 — all plain
      'And Avram passed through the land to the place of Shekhem, to the oak of Moreh. And the Kenaʿani was then in the land.',

      // p11 — FIRST: zera. YHWH = plain. raʾah (no term entry — transliterated plain)
      'And YHWH appeared — raʾah — to Avram and said, "To your <span class="m3" data-term="zera">zeraʿ</span> I will give this land." And he built there an altar to YHWH, who had appeared to him.',

      // p12 — YHWH = plain
      'And he moved from there to the hill country east of Bet-El, and pitched his tent, with Bet-El on the west and Ha-Ai on the east. And he built there an altar to YHWH and called upon the name of YHWH.',

      // p13 — all plain
      'And Avram journeyed, going on toward the Negev.',

      // p14 — nephesh = plain (already marked in p9)
      'And there was a famine in the land, and Avram went down to Mitsrayim to sojourn there, because the famine was heavy in the land.',

      // p15 — all plain
      'And it came about when he was about to enter Mitsrayim that he said to Sarai his wife, "See now, I know that you are a woman beautiful in appearance.',

      // p16 — all plain
      'And it will happen when the Mitsrim see you that they will say, \'This is his wife,\' and they will kill me but they will let you live.',

      // p17 — nephesh = plain
      'Please say that you are my sister, so that it may go well with me because of you, and my nephesh may live because of you."',

      // p18 — all plain
      'And it happened when Avram came into Mitsrayim, the Mitsrim saw that the woman was very beautiful.',

      // p19 — all plain
      'And the officials of Parʿoh saw her and praised her to Parʿoh, and the woman was taken to the house of Parʿoh.',

      // p20 — all plain
      'And he treated Avram well because of her, and he had sheep and cattle and male donkeys and male servants and female servants and female donkeys and camels.',

      // p21 — FIRST: YHWH (already marked in p6). nagaʿ (no term entry — transliterated plain)
      'But YHWH struck — nagaʿ — Parʿoh and his house with great plagues because of Sarai, Avram\'s wife.',

      // p22 — all plain
      'And Parʿoh called Avram and said, "What is this you have done to me? Why did you not tell me that she was your wife?',

      // p23 — all plain
      'Why did you say, \'She is my sister,\' so that I took her for myself as a wife? Now then, here is your wife. Take her and go."',

      // p24 — all plain
      'And Parʿoh commanded men concerning him, and they sent him away with his wife and all that he had.',
    ],

  };

  // Romanian sections — placeholder paragraphs you'll replace.
  // Each entry currently mirrors the EN structure but contains
  // a single Romanian placeholder paragraph so the section is
  // visibly identified as needing translation.
  const SECTIONS_RO = {
    D1: [
      '<em>[D1 — text în lucru. Înlocuiește acest paragraf cu traducerea ta în limba română, păstrând marcajele <code>m2</code>, <code>m3</code> și <code>amb</code> din versiunea engleză.]</em>',
    ],
    D2: [
      '<em>[D2 — text în lucru.]</em>',
    ],
    D3: [],
    D4: [],
    D5: [],
    D6: [],
    D7: [],
    D8: [],
    D9: [],
    D10: [],
  };

  // ======================================================
  // COMMENTARIES — list of essays per division
  // The page lives at commentaries/bereshit/{D#}/{id}.html
  // Add an entry here, then create the HTML file. To use the same
  // commentary list across both languages, share the same id; only
  // override en/ro when a translated commentary file exists.
  // ======================================================
  const COMMENTARIES_EN = {
    D1: [{
      id: 'purpose-of-adam',
      title: 'The purpose of adam in Bereshit D1'
    }, ],
    D2: [],
    D3: [],
    D4: [],
    D5: [],
    D6: [],
    D7: [],
    D8: [],
    D9: [],
    D10: [],
  };
  const COMMENTARIES_RO = {
    D1: [{
      id: 'purpose-of-adam.ro',
      title: 'Scopul lui Adam în Bereshit D1'
    }, ],
    D2: [],
    D3: [],
    D4: [],
    D5: [],
    D6: [],
    D7: [],
    D8: [],
    D9: [],
    D10: [],
  };

  // ======================================================
  // REGISTER
  // ======================================================
  SPS.books.registerBook({
    id: 'bereshit',
    testament: 'hebrew',
    meta: {
      en: {
        title: 'Bereshit',
        subtitle: 'Genesis',
        blurb: 'The opening book of the Torah — creation, the toledot of the shamaim and the earth, the line through Noaḥ to Avram.',
        divisions: DIVISIONS_EN,
      },
      ro: {
        title: 'Bereshit',
        subtitle: 'Geneza',
        blurb: 'Cartea de început a Torei — creația, toledot ale shamaim și ale pământului, linia prin Noaḥ până la Avram.',
        divisions: DIVISIONS_RO,
      },
    },
    terms: {
      en: TERMS_EN,
      ro: TERMS_RO
    },
    ambiguities: {
      en: AMBIGUITIES_EN,
      ro: AMBIGUITIES_RO
    },
    sections: {
      en: SECTIONS_EN,
      ro: SECTIONS_RO
    },
    commentaries: {
      en: COMMENTARIES_EN,
      ro: COMMENTARIES_RO
    },
  });

})();