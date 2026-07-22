/* ============================================================
   SPS Theology — Ioanes (Gospel of John)

   Bilingual book module. The English Prologue (D1, John 1:1–18)
   is fully populated from SBLGNT with complete Mode 2/3 apparatus
   and ambiguity markers. The remaining divisions (D2–D22) are
   declared as empty stubs to populate over time.

   Romanian content is structurally complete with translatable
   stubs — translate the `note`, `gloss`, and section paragraphs
   in place. Do NOT change keys, modes, axioms, or step numbers.

   Term keys (e.g. "logos", "theos", "exegesato") are GLOBAL
   identifiers used in the section markup. Both English and
   Romanian apparatus must share these keys.

   Text base: SBLGNT (Holmes 2010), Society of Biblical Literature.
   Working horizon: pre-100 AD Greek usage.
   ============================================================ */

(function () {

  // ======================================================
  // ENGLISH — TERM APPARATUS
  // ======================================================
  const TERMS_EN = {

    'logos': {
      term: 'Logos', heb: 'ὁ λόγος', mode: 3, axioms: ['TA1', 'TA4', 'TA6'],
      gloss: 'Greek λόγος: speech, account, reasoned utterance, organizing principle, narrative.',
      note: 'The Greek term λόγος carries a range no single English word covers: spoken word, reasoned account, principle, formula, narrative. In pre-100 AD Hellenistic-Jewish discourse (Philo) and Stoic philosophy, λόγος denotes the rational ordering principle of reality — the structuring word by which the world holds together. The Johannine Prologue activates this whole field at once: the Logos is *spoken* (creative utterance, echoing Gen 1), *reasoned* (the principle by which all came-to-be), and *narrative* (the one who is later "exegeted" in v.18). "Word" in English is too thin and has been domesticated by reception.',
      lexicons: {
        lsj: {
          ref: 's.v. λόγος',
          note: 'Runs from the concrete "computation, reckoning" and "speech, utterance" senses through to "reason" and "principle" in Stoic and later philosophical usage, treating them as one lemma\'s development rather than unrelated words that happen to share a form.',
        },
        bdag: {
          ref: 's.v. λόγος',
          note: 'Devotes a long entry to New Testament usage specifically, and singles out the Johannine Prologue\'s use as a distinct sub-sense — the personified, pre-existent Word — rather than folding it into the ordinary "speech/account" senses used elsewhere in the corpus.',
        },
      },
      steps: [
        { n: 1, text: 'Structurally central — the term that opens the Prologue and recurs at v.14.', result: 'pass' },
        { n: 2, text: 'Co-text does not narrow the term to a single sense; the Prologue plays on multiple registers simultaneously.', result: 'fail' },
        { n: 3, text: '"Word" reduces λόγος to spoken-utterance and loses the rational/structural register.', result: 'fail' },
        { n: 4, text: 'No single English term preserves the speech/reason/narrative complex.', result: 'fail' },
        { n: 5, text: '"The Word" in English carries reception-history weight (Christological, Trinitarian) that goes beyond pre-100 AD usage.', result: 'fail' },
      ],
    },

    'theos': {
      term: 'Theos', heb: 'θεός', mode: 3, axioms: ['TA1', 'TA4', 'TA6'],
      gloss: 'Greek θεός: deity, god, divine being. Distinguishable in Greek by article presence/absence.',
      note: 'Greek θεός is the standard term for "god / deity." In John 1:1 the term appears twice in immediate succession with a distinction the English "God" cannot preserve: (a) πρὸς τὸν θεόν — *the* Theos (articular, definite reference); (b) θεὸς ἦν ὁ λόγος — Theos (anarthrous, predicate position before the verb). Greek grammar (Colwell 1933; Harner 1973) makes anarthrous predicate nouns before the copula qualitative-or-definite ambiguous: the construction can express "God [the same one]," "a god [one of many]," or "divine [in nature]." The English options ("the Word was God" / "the Word was a god" / "the Word was divine") each silently close a question the Greek leaves open. Transliterating Theos in both positions preserves the noun-stem identity while letting the article distinction be visible at the apparatus level. The grammatical situation is documented; the dogmatic decision is left to the reader.',
      lexicons: {
        lsj: {
          ref: 's.v. θεός',
          note: 'Documents the ordinary range of "god, goddess" in classical usage — Olympian deities, deified abstractions, and (rarely) exceptional human beings — without any of the article-based distinctions later Christian grammarians read into New Testament occurrences.',
        },
        bdag: {
          ref: 's.v. θεός',
          note: 'Discusses the anarthrous predicate construction at John 1:1c directly, surveying the qualitative and definite readings scholars have proposed, which is the same crux the apparatus\'s decision-procedure documents at step 2 above.',
        },
      },
      steps: [
        { n: 1, text: 'Central to the opening claim of the Prologue.', result: 'pass' },
        { n: 2, text: 'Greek article/anarthrous distinction is not resolved by co-text in v.1c.', result: 'fail' },
        { n: 3, text: 'No single English equivalent preserves the article distinction; "God" capitalised neutralises it; "a god" over-determines.', result: 'fail' },
        { n: 5, text: '"God" carries Nicene-Trinitarian dogmatic reception that postdates the pre-100 AD horizon.', result: 'fail' },
      ],
    },

    'arche': {
      term: 'archē', heb: 'ἀρχή', mode: 2, axioms: ['TA1', 'TA4'],
      gloss: 'Greek ἀρχή: beginning, origin, first principle, ruling source.',
      note: 'Greek ἀρχή denotes both temporal beginning and source/origin/principle. The opening *ἐν ἀρχῇ* is a deliberate intertextual echo of LXX Gen 1:1 (*ἐν ἀρχῇ ἐποίησεν ὁ θεός*). "Beginning" preserves the temporal sense but loses the source/principle register that Greek philosophical usage attaches to the term (cf. Aristotle on archē as causal principle). The intertextual link to Genesis is the structural payoff and is preserved by the matched English rendering.',
      lexicons: {
        lsj: {
          ref: 's.v. ἀρχή',
          note: 'Lists "beginning, origin" alongside "first cause, origin" in the philosophical sense and "sovereignty, office of rule" in the political sense — the same three-way spread (temporal, causal, governmental) the note above draws on.',
        },
        bdag: {
          ref: 's.v. ἀρχή',
          note: 'Marks the Johannine Prologue\'s opening phrase as an intentional echo of LXX Genesis 1:1, supporting the reading that ἐν ἀρχῇ here carries the Genesis intertext rather than a bare temporal marker.',
        },
      },
      steps: [
        { n: 2, text: 'Co-text (the Genesis echo) narrows toward beginning-as-origin, but the philosophical register remains active.', result: 'partial' },
        { n: 3, text: '"Beginning" works as primary equivalent but under-determines.', result: 'partial' },
      ],
    },

    'pros': {
      term: 'pros', heb: 'πρός', mode: 2, axioms: ['TA1'],
      gloss: 'Greek preposition with accusative: toward, oriented-to, in-relation-to (not merely "with").',
      note: 'The preposition πρός with accusative carries directional/orientational force — "toward, facing, in relation to" — distinct from the more static μετά ("with, alongside"). The phrase πρὸς τὸν θεόν in 1:1b–2 expresses the Logos\'s relational orientation toward the Theos, not mere spatial accompaniment. Standard English "with" loses this directional dimension. Translators sometimes render "toward God" or "face-to-face with God"; the present rendering retains pros to keep the dynamic relational sense visible.',
      steps: [
        { n: 3, text: '"With" flattens directional/relational force to spatial accompaniment.', result: 'fail' },
      ],
    },

    'egeneto': {
      term: 'egeneto / ginomai', heb: 'ἐγένετο / γίνομαι', mode: 2, axioms: ['TA1', 'TA4'],
      gloss: 'Aorist of γίνομαι: came-to-be, came-into-being, happened. Contrast with εἰμί ("to be").',
      note: 'The Prologue maintains a strict structural distinction between two verbs: ἦν (imperfect of εἰμί, "was" — durative state) used of the Logos in vv. 1, 2, 4, 8, 9, 10, 15; and ἐγένετο (aorist of γίνομαι, "came-to-be / happened") used of created things and events in vv. 3 (×3), 6, 10, 14, 17. The Logos *was* — atemporally, durative; created things and events *came-to-be* — punctiliarly, into existence. English "was" collapses this distinction by translating both verbs identically. Preserving the contrast (ἦν → "was"; ἐγένετο → "came-to-be") is structurally essential — it is one of the Prologue\'s primary theological-grammatical claims, made by syntax rather than by explicit assertion.',
      steps: [
        { n: 1, text: 'Structurally significant — the verb pattern carries the Prologue\'s theological grammar.', result: 'pass' },
        { n: 4, text: 'Conventional "was" collapses ἦν and ἐγένετο into a single English verb, erasing the structural contrast.', result: 'fail' },
      ],
    },

    'zoe': {
      term: 'zōē', heb: 'ζωή', mode: 3, axioms: ['TA1', 'TA6'],
      gloss: 'Greek ζωή: life. Distinct from βίος (way-of-life, livelihood, biography).',
      note: 'Greek distinguishes ζωή ("life" as principle of animation, the fact of being alive) from βίος ("life" as way-of-living, biography, livelihood). The Johannine corpus uses ζωή as a technical term that accumulates weight across the Gospel (3:16; 5:24; 6:35; 11:25; 14:6; 20:31). English "life" cannot preserve the ζωή/βίος distinction. Transliteration keeps the term visible as a recurring node in the Johannine network.',
      steps: [
        { n: 1, text: 'Recurrent technical term across the Gospel.', result: 'pass' },
        { n: 3, text: '"Life" cannot distinguish ζωή from βίος; English has only one word.', result: 'fail' },
      ],
    },

    'anthropos': {
      term: 'anthrōpos / anthrōpoi', heb: 'ἄνθρωπος / ἄνθρωποι', mode: 3, axioms: ['TA2', 'TA6'],
      gloss: 'Greek ἄνθρωπος: human being (gender-inclusive). Distinct from ἀνήρ ("man, adult male").',
      note: 'Greek ἄνθρωπος denotes the human being as such, gender-inclusive, distinct from ἀνήρ ("adult male"). The Prologue uses ἄνθρωπος of the genus "humanity" (vv. 4, 9). English "man" was historically gender-inclusive but is increasingly read as gender-specific; "human" works but loses the term\'s philosophical-anthropological register. The genitive τῶν ἀνθρώπων in v.4 is itself ambiguous (objective: "light that illumines humans"; advantage: "light for the benefit of humans"; possessive: "light belonging to humans"); see the apparatus on the v.4 genitive.',
      steps: [
        { n: 3, text: '"Man" carries gender ambiguity in modern English; "human" loses register.', result: 'partial' },
      ],
    },

    'iohannes': {
      term: 'Iōannēs', heb: 'Ἰωάννης', mode: 3, axioms: ['TA1', 'TA5'],
      gloss: 'Greek transliteration of Hebrew Yoḥanan ("YHWH has shown favor").',
      note: 'Greek Ἰωάννης transliterates Hebrew יוֹחָנָן (Yoḥanan), "YHWH has shown favor." English "John" is a heavily anglicised form via Latin Iohannes / Old French Jehan. The transliterated Greek form keeps the Semitic etymology visible.',
      steps: [],
    },

    'iesous': {
      term: 'Iēsous', heb: 'Ἰησοῦς', mode: 3, axioms: ['TA1', 'TA5'],
      gloss: 'Greek transliteration of Hebrew Yēšūaʿ ("YHWH saves" / "YHWH is salvation").',
      note: 'Greek Ἰησοῦς transliterates Hebrew יֵשׁוּעַ (Yēšūaʿ), the post-exilic short form of יְהוֹשֻׁעַ (Yəhōšuaʿ, "Joshua"), meaning "YHWH saves." English "Jesus" is the conventional anglicisation through Latin Iesus.',
      steps: [],
    },

    'christos': {
      term: 'Christos', heb: 'Χριστός', mode: 3, axioms: ['TA1', 'TA5', 'TA6'],
      gloss: 'Greek Χριστός: anointed-one. LXX rendering of Hebrew מָשִׁיחַ (māšiaḥ).',
      note: 'Greek Χριστός is a verbal adjective from χρίω ("to anoint"), used by the LXX to translate Hebrew מָשִׁיחַ (māšiaḥ, "anointed one"). In the pre-100 AD horizon it denotes a figure ritually anointed for office (priest, king, prophet). English "Christ" is a transliteration that has become a quasi-proper-name in Christian usage, losing the participial / functional sense ("the one who has been anointed") that the Greek preserves.',
      steps: [
        { n: 5, text: '"Christ" in modern English carries Christological dogmatic reception that postdates the term\'s functional sense in pre-100 AD usage.', result: 'fail' },
      ],
    },

    'mouses': {
      term: 'Mōusēs', heb: 'Μωϋσῆς', mode: 3, axioms: ['TA1', 'TA5'],
      gloss: 'Greek transliteration of Hebrew מֹשֶׁה (Mōšeh).',
      note: 'Greek Μωϋσῆς transliterates Hebrew מֹשֶׁה (Mōšeh). The Greek form preserves the Semitic name visible to Hellenistic readers.',
      steps: [],
    },

    'pisteuo-eis': {
      term: 'pisteuein eis', heb: 'πιστεύω εἰς', mode: 2, axioms: ['TA1', 'TA6'],
      gloss: 'Greek construction: trust-into / believe-into. Johannine signature for relational adherence.',
      note: 'The construction πιστεύω + εἰς + accusative ("trust-into / believe-into") is distinctive to Johannine Greek. It expresses not propositional assent ("believe that X is the case") but directional relational trust ("trust-into / commit-to / adhere-to"). English "believe in" is the conventional rendering but has been weakened by usage. The construction governs the Prologue\'s anthropology of those who receive the Logos (vv. 7, 12) and recurs throughout the Gospel.',
      steps: [
        { n: 3, text: '"Believe in" works but loses the directional/relational specificity of εἰς.', result: 'partial' },
      ],
    },

    'tekna': {
      term: 'tekna', heb: 'τέκνα', mode: 2, axioms: ['TA2', 'TA6'],
      gloss: 'Greek τέκνα: children (gender-inclusive). Distinct from υἱοί ("sons").',
      note: 'Greek τέκνα is the gender-inclusive plural for "children, offspring," distinct from υἱοί ("sons" specifically). John\'s choice of τέκνα θεοῦ (1:12) rather than υἱοὶ θεοῦ marks the term as inclusive — a point of significant Johannine theology (cf. 11:52). "Children" preserves this; "sons" would obscure it.',
      steps: [
        { n: 4, text: 'Distinguishing τέκνα from υἱοί is structurally significant in the Gospel.', result: 'pass' },
      ],
    },

    'sarx': {
      term: 'sarx', heb: 'σάρξ', mode: 3, axioms: ['TA1', 'TA6'],
      gloss: 'Greek σάρξ: flesh. Range includes physical body, mortal nature, embodied existence.',
      note: 'Greek σάρξ ranges from "flesh" (physical material) to "human / mortal nature" (embodied existence as such) to "the realm of the merely human" (especially in Pauline usage, 100 AD horizon). In John 1:14 the claim "the Logos sarx came-to-be" employs the term without the negative valuation Pauline usage often attaches; here σάρξ marks embodied human existence as the locus of the Logos\'s entry into the world. English "flesh" preserves the physical sense but has accumulated negative associations from Pauline reception that may not be active in this Johannine usage.',
      steps: [
        { n: 5, text: '"Flesh" in English theology has acquired Pauline-Augustinian negative freight.', result: 'fail' },
      ],
    },

    'eskenosen': {
      term: 'eskēnōsen / skēnoō', heb: 'ἐσκήνωσεν / σκηνόω', mode: 2, axioms: ['TA1', 'TA4', 'TA6'],
      gloss: 'Aorist of σκηνόω: to pitch a tent, to dwell-in-a-tent. Etymologically linked to σκηνή (Tabernacle).',
      note: 'The verb σκηνόω literally means "to pitch a tent, to dwell in a tent." It is etymologically connected to σκηνή — the LXX term for the Tabernacle (Hebrew מִשְׁכָּן, mishkan) where the divine presence (kavod) was understood to reside in Israel\'s wilderness journey (Ex 25–40). John\'s choice of σκηνόω rather than κατοικέω ("to settle, dwell permanently") activates this Tabernacle resonance: the Logos "tabernacles" among us. The conventional English "dwelt" loses both the temporary / tent-dwelling register and the structural intertextual link to Exodus and the Tabernacle theology. Combined with the immediately following clause "we beheld his doxa" (echoing the kavod theology of Ex 33–40), this is one of the Prologue\'s most loaded structural moves.',
      steps: [
        { n: 1, text: 'Structurally pivotal — anchors the Prologue\'s incarnation claim to the Exodus Tabernacle theology.', result: 'pass' },
        { n: 4, text: '"Dwelt" severs the lexical-intertextual link to σκηνή (Tabernacle).', result: 'fail' },
      ],
    },

    'doxa': {
      term: 'doxa', heb: 'δόξα', mode: 3, axioms: ['TA1', 'TA4', 'TA6'],
      gloss: 'Greek δόξα: glory, radiance, weight-of-presence; in classical usage also "opinion, reputation."',
      note: 'Greek δόξα has two distinguishable lexical fields. (1) Classical usage: "opinion, reputation, what-seems-to-be" (from δοκέω, "to seem"). (2) LXX usage: translator\'s choice for Hebrew כָּבוֹד (kavod) — "weight, gravitas, manifest presence, radiance," especially of the divine presence. The Johannine use draws on the LXX/kavod register, not the classical one. The link to σκηνόω in v.14 (Tabernacle imagery) makes this unmistakable: "we beheld his δόξα" echoes the Tabernacle scenes of Exodus where Moses sees the kavod fill the tent. English "glory" carries some of this but has been thinned by liturgical reception.',
      steps: [
        { n: 1, text: 'Recurrent technical term carrying the kavod theology into the Gospel.', result: 'pass' },
        { n: 5, text: '"Glory" in English has been reduced to abstract praise-language, losing the kavod weight.', result: 'fail' },
      ],
    },

    'monogenes': {
      term: 'monogenēs', heb: 'μονογενής', mode: 3, axioms: ['TA1', 'TA6'],
      gloss: 'Greek μονογενής: one-of-its-kind, unique, singular-in-genus. From μόνος + γένος.',
      note: 'Greek μονογενής is morphologically composed of μόνος ("only") + γένος ("kind, class, family"). Strict morphological reading: "only-of-its-kind, unique, singular-in-class." The Latin Vulgate rendering *unigenitus* ("only-begotten") is etymologically defensible (γένος is cognate with γεννάω, "to beget") but pushes the morphology further toward generation/begetting than the Greek requires. By the 4th-century Arian controversies "only-begotten" had become a Nicene battleground term — the dogmatic decision to read μονογενής as "begotten" became theologically loaded in ways foreign to the pre-100 AD usage. In John\'s usage (1:14, 18; 3:16, 18; 1 John 4:9) the term marks the singular/unique status of the figure described. Transliteration avoids the Latin "begotten" reception layer.',
      steps: [
        { n: 3, text: '"Only-begotten" imports a Latin-Nicene reading; "unique" loses the genus-relation register.', result: 'fail' },
        { n: 5, text: 'Centuries of Trinitarian / Arian / Nicene reception attach to "only-begotten" — a paradigmatic case of post-boundary overdetermination.', result: 'fail' },
      ],
    },

    'charis': {
      term: 'charis', heb: 'χάρις', mode: 3, axioms: ['TA1', 'TA6'],
      gloss: 'Greek χάρις: favor, gracious-disposition, generous-gift. Cognate with Hebrew ḥen.',
      note: 'Greek χάρις in pre-100 AD usage denotes graciousness, favor, generous disposition — a relational concept of unmerited goodwill. The LXX uses χάρις to translate Hebrew חֵן (ḥen), "favor" (cf. Gen 6:8 of Noaḥ). English "grace" has been so thoroughly absorbed into Pauline-Augustinian-Reformation soteriological frameworks that it imports specific theological content (justification, sola gratia, etc.) that postdates the Johannine horizon. Transliteration foreignises the term to slow domesticated reading.',
      steps: [
        { n: 5, text: '"Grace" carries Pauline-Augustinian-Reformation reception that domesticates the term.', result: 'fail' },
      ],
    },

    'aletheia': {
      term: 'alētheia', heb: 'ἀλήθεια', mode: 2, axioms: ['TA1', 'TA6'],
      gloss: 'Greek ἀλήθεια: truth, un-hiddenness, that-which-is-not-concealed.',
      note: 'Greek ἀλήθεια is morphologically privative: ἀ- ("un-") + λήθη ("forgetfulness, hiddenness"). The literal sense is "un-hiddenness, that-which-is-disclosed." In the LXX it commonly translates Hebrew אֱמֶת (emet, "faithfulness, reliability"). The Johannine usage layers both registers — disclosure (especially of the Theos, cf. v.18) and faithfulness/reliability. "Truth" carries the disclosure sense weakly.',
      steps: [
        { n: 3, text: '"Truth" in English has become primarily propositional (correct-statement) and loses the disclosure register.', result: 'partial' },
      ],
    },

    'nomos': {
      term: 'nomos', heb: 'νόμος', mode: 2, axioms: ['TA1', 'TA5', 'TA6'],
      gloss: 'Greek νόμος: law, custom, instruction. LXX rendering of Hebrew תּוֹרָה (Torah).',
      note: 'Greek νόμος in pre-100 AD usage denotes law, custom, established practice. The LXX adopts νόμος to translate Hebrew תּוֹרָה (Torah, "instruction, teaching"), but the semantic ranges only partially overlap: Torah includes narrative, instruction, and statute, while νόμος in classical Greek leans toward statutory/customary law. When John writes "the nomos was given through Mōusēs" (1:17), the referent is the Torah; rendering "law" risks importing a narrower juridical sense than Torah carries.',
      steps: [
        { n: 3, text: '"Law" narrows the Hebrew Torah\'s broader range (instruction + narrative + statute).', result: 'partial' },
      ],
    },

    'kosmos': {
      term: 'kosmos', heb: 'κόσμος', mode: 2, axioms: ['TA2', 'TA6'],
      gloss: 'Greek κόσμος: ordered-world, cosmos. In Johannine usage often the human-realm-set-against-Theos.',
      note: 'Greek κόσμος literally means "ordered arrangement, ornament, beauty" (cognate with English "cosmetic"). Philosophical usage extends it to "the ordered universe / cosmos." The Johannine usage develops a specific technical sense: κόσμος as the human-realm, often as the realm-in-opposition-to-Theos (cf. 1:10; 3:16; 15:18–19; 17:14–16). In the Prologue the term first appears in v.9 and then cascades through vv. 10–11. "World" in English captures the basic referent but misses the ordered-arrangement etymology and the specifically Johannine adversarial register that develops later.',
      steps: [
        { n: 3, text: '"World" works as primary equivalent but under-determines the Johannine technical sense.', result: 'partial' },
      ],
    },

    'katelaben': {
      term: 'katelaben / katalambanō', heb: 'κατέλαβεν / καταλαμβάνω', mode: 3, axioms: ['TA1', 'TA3'],
      gloss: 'Greek καταλαμβάνω: (a) to grasp / comprehend; (b) to overcome / overpower / seize.',
      note: 'The verb καταλαμβάνω in pre-100 AD Greek carries two distinct semantic ranges, both well-attested: (a) cognitive — "to grasp, lay hold of mentally, comprehend, understand"; (b) physical/agonistic — "to overtake, overpower, seize, capture, master." Both senses are active in Johannine usage: cf. 12:35 where the verb appears in the agonistic sense ("lest darkness overtake you"). In 1:5 — *ἡ σκοτία αὐτὸ οὐ κατέλαβεν* — the Greek does not disambiguate. Both readings produce coherent meaning: (a) "the darkness did not comprehend [the light]" — failure of recognition; (b) "the darkness did not overpower [the light]" — failure of opposition. The translation marks the ambiguity as live rather than silently choosing.',
      steps: [
        { n: 1, text: 'Structurally pivotal — closes the Prologue\'s opening cosmogonic movement.', result: 'pass' },
        { n: 2, text: 'Co-text does not disambiguate; both senses are coherent and Johannine.', result: 'fail' },
        { n: 3, text: 'No single English verb carries both grasp/comprehend and overcome/overpower.', result: 'fail' },
      ],
    },

    'exegesato': {
      term: 'exēgēsato / exēgeomai', heb: 'ἐξηγήσατο / ἐξηγέομαι', mode: 2, axioms: ['TA1', 'TA4', 'TA6'],
      gloss: 'Aorist middle of ἐξηγέομαι: to lead-out, draw-out, unfold, narrate, expound. Source of English "exegesis."',
      note: 'Greek ἐξηγέομαι (from ἐκ "out" + ἡγέομαι "to lead") literally means "to lead out, to draw out, to bring forth into narrative." Classical usage spans: a guide leading travelers out of a place; a priest expounding sacred mysteries; a storyteller "unfolding" a story so the hearers can see it; a herald or interpreter giving voice to what was hidden. The English noun "exegesis" derives directly from this verb. In John 1:18 the verb closes the Prologue with a structural inclusio: no one has ever seen Theos (the deity), but the monogenēs has *exegeted* / *unfolded* / *drawn-out* the Father — made him narratable, knowable, perceivable. The image is not metaphysical transformation but narrative disclosure: the Father is "led-forth into perception" through the monogenēs. Conventional English "made him known" preserves the disclosure sense but loses the narrative-leading-out register that the Greek verb specifically activates.',
      steps: [
        { n: 1, text: 'Structurally pivotal — the closing verb of the Prologue, in inclusio with v.1.', result: 'pass' },
        { n: 3, text: '"Made known / declared / explained" all preserve part of the sense but lose the narrative-unfolding register.', result: 'partial' },
        { n: 4, text: 'The verb is the etymological source of "exegesis" — preserving its visibility makes a structural feature of the Prologue audible to the reader.', result: 'fail' },
      ],
    },

    'theon': {
      term: 'Theon', heb: 'θεόν', mode: 2, axioms: ['TA1'],
      gloss: 'Accusative singular of θεός. Object of "no one has seen."',
      note: 'In John 1:18a the noun appears in the accusative case (Θεόν) as the direct object of ἑώρακεν ("has seen"). The Greek case ending is meaningful here because v.18 is in structural inclusio with v.1: v.1 ends with θεός in predicate position; v.18 opens with Θεόν in object position; the closing clause has μονογενὴς θεός (anarthrous, again predicate-like). Capitalising the form Theon in transliteration preserves the case visibility for English readers.',
      steps: [
        { n: 1, text: 'Inclusio structure with v.1 makes the case-ending visible significant.', result: 'pass' },
      ],
    },

  };

    // ======================================================
  // ROMANIAN — TERM APPARATUS
  // Translate the marked fields in place. Search the file for
  // the marker //// ==== Ro ==== //// to find every spot.
  // Keys, modes, axioms, and step numbers must NOT change.
  // ======================================================
  const TERMS_RO = {

    'logos': {
      term: "Logos",
      heb: "ὁ λόγος",
      mode: 3,
      axioms: ["TA1","TA4","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek λόγος: speech, account, reasoned utterance, organizing principle, narrative.",
      //// ==== Ro ==== ////
      note: "The Greek term λόγος carries a range no single English word covers: spoken word, reasoned account, principle, formula, narrative. In pre-100 AD Hellenistic-Jewish discourse (Philo) and Stoic philosophy, λόγος denotes the rational ordering principle of reality — the structuring word by which the world holds together. The Johannine Prologue activates this whole field at once: the Logos is *spoken* (creative utterance, echoing Gen 1), *reasoned* (the principle by which all came-to-be), and *narrative* (the one who is later \"exegeted\" in v.18). \"Word\" in English is too thin and has been domesticated by reception.",
      lexicons: {
        lsj: {
          ref: "s.v. λόγος",
          note: "Runs from the concrete \"computation, reckoning\" and \"speech, utterance\" senses through to \"reason\" and \"principle\" in Stoic and later philosophical usage, treating them as one lemma's development rather than unrelated words that happen to share a form.",
        },
        bdag: {
          ref: "s.v. λόγος",
          note: "Devotes a long entry to New Testament usage specifically, and singles out the Johannine Prologue's use as a distinct sub-sense — the personified, pre-existent Word — rather than folding it into the ordinary \"speech/account\" senses used elsewhere in the corpus.",
        },
      },
      steps: [
        {
          n: 1,
          //// ==== Ro ==== ////
          text: "Structurally central — the term that opens the Prologue and recurs at v.14.",
          result: "pass",
        },
        {
          n: 2,
          //// ==== Ro ==== ////
          text: "Co-text does not narrow the term to a single sense; the Prologue plays on multiple registers simultaneously.",
          result: "fail",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Word\" reduces λόγος to spoken-utterance and loses the rational/structural register.",
          result: "fail",
        },
        {
          n: 4,
          //// ==== Ro ==== ////
          text: "No single English term preserves the speech/reason/narrative complex.",
          result: "fail",
        },
        {
          n: 5,
          //// ==== Ro ==== ////
          text: "\"The Word\" in English carries reception-history weight (Christological, Trinitarian) that goes beyond pre-100 AD usage.",
          result: "fail",
        },
      ],
    },

    'theos': {
      term: "Theos",
      heb: "θεός",
      mode: 3,
      axioms: ["TA1","TA4","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek θεός: deity, god, divine being. Distinguishable in Greek by article presence/absence.",
      //// ==== Ro ==== ////
      note: "Greek θεός is the standard term for \"god / deity.\" In John 1:1 the term appears twice in immediate succession with a distinction the English \"God\" cannot preserve: (a) πρὸς τὸν θεόν — *the* Theos (articular, definite reference); (b) θεὸς ἦν ὁ λόγος — Theos (anarthrous, predicate position before the verb). Greek grammar (Colwell 1933; Harner 1973) makes anarthrous predicate nouns before the copula qualitative-or-definite ambiguous: the construction can express \"God [the same one],\" \"a god [one of many],\" or \"divine [in nature].\" The English options (\"the Word was God\" / \"the Word was a god\" / \"the Word was divine\") each silently close a question the Greek leaves open. Transliterating Theos in both positions preserves the noun-stem identity while letting the article distinction be visible at the apparatus level. The grammatical situation is documented; the dogmatic decision is left to the reader.",
      lexicons: {
        lsj: {
          ref: "s.v. θεός",
          note: "Documents the ordinary range of \"god, goddess\" in classical usage — Olympian deities, deified abstractions, and (rarely) exceptional human beings — without any of the article-based distinctions later Christian grammarians read into New Testament occurrences.",
        },
        bdag: {
          ref: "s.v. θεός",
          note: "Discusses the anarthrous predicate construction at John 1:1c directly, surveying the qualitative and definite readings scholars have proposed, which is the same crux the apparatus's decision-procedure documents at step 2 above.",
        },
      },
      steps: [
        {
          n: 1,
          //// ==== Ro ==== ////
          text: "Central to the opening claim of the Prologue.",
          result: "pass",
        },
        {
          n: 2,
          //// ==== Ro ==== ////
          text: "Greek article/anarthrous distinction is not resolved by co-text in v.1c.",
          result: "fail",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "No single English equivalent preserves the article distinction; \"God\" capitalised neutralises it; \"a god\" over-determines.",
          result: "fail",
        },
        {
          n: 5,
          //// ==== Ro ==== ////
          text: "\"God\" carries Nicene-Trinitarian dogmatic reception that postdates the pre-100 AD horizon.",
          result: "fail",
        },
      ],
    },

    'arche': {
      term: "archē",
      heb: "ἀρχή",
      mode: 2,
      axioms: ["TA1","TA4"],
      //// ==== Ro ==== ////
      gloss: "Greek ἀρχή: beginning, origin, first principle, ruling source.",
      //// ==== Ro ==== ////
      note: "Greek ἀρχή denotes both temporal beginning and source/origin/principle. The opening *ἐν ἀρχῇ* is a deliberate intertextual echo of LXX Gen 1:1 (*ἐν ἀρχῇ ἐποίησεν ὁ θεός*). \"Beginning\" preserves the temporal sense but loses the source/principle register that Greek philosophical usage attaches to the term (cf. Aristotle on archē as causal principle). The intertextual link to Genesis is the structural payoff and is preserved by the matched English rendering.",
      lexicons: {
        lsj: {
          ref: "s.v. ἀρχή",
          note: "Lists \"beginning, origin\" alongside \"first cause, origin\" in the philosophical sense and \"sovereignty, office of rule\" in the political sense — the same three-way spread (temporal, causal, governmental) the note above draws on.",
        },
        bdag: {
          ref: "s.v. ἀρχή",
          note: "Marks the Johannine Prologue's opening phrase as an intentional echo of LXX Genesis 1:1, supporting the reading that ἐν ἀρχῇ here carries the Genesis intertext rather than a bare temporal marker.",
        },
      },
      steps: [
        {
          n: 2,
          //// ==== Ro ==== ////
          text: "Co-text (the Genesis echo) narrows toward beginning-as-origin, but the philosophical register remains active.",
          result: "partial",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Beginning\" works as primary equivalent but under-determines.",
          result: "partial",
        },
      ],
    },

    'pros': {
      term: "pros",
      heb: "πρός",
      mode: 2,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Greek preposition with accusative: toward, oriented-to, in-relation-to (not merely \"with\").",
      //// ==== Ro ==== ////
      note: "The preposition πρός with accusative carries directional/orientational force — \"toward, facing, in relation to\" — distinct from the more static μετά (\"with, alongside\"). The phrase πρὸς τὸν θεόν in 1:1b–2 expresses the Logos's relational orientation toward the Theos, not mere spatial accompaniment. Standard English \"with\" loses this directional dimension. Translators sometimes render \"toward God\" or \"face-to-face with God\"; the present rendering retains pros to keep the dynamic relational sense visible.",
      steps: [
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"With\" flattens directional/relational force to spatial accompaniment.",
          result: "fail",
        },
      ],
    },

    'egeneto': {
      term: "egeneto / ginomai",
      heb: "ἐγένετο / γίνομαι",
      mode: 2,
      axioms: ["TA1","TA4"],
      //// ==== Ro ==== ////
      gloss: "Aorist of γίνομαι: came-to-be, came-into-being, happened. Contrast with εἰμί (\"to be\").",
      //// ==== Ro ==== ////
      note: "The Prologue maintains a strict structural distinction between two verbs: ἦν (imperfect of εἰμί, \"was\" — durative state) used of the Logos in vv. 1, 2, 4, 8, 9, 10, 15; and ἐγένετο (aorist of γίνομαι, \"came-to-be / happened\") used of created things and events in vv. 3 (×3), 6, 10, 14, 17. The Logos *was* — atemporally, durative; created things and events *came-to-be* — punctiliarly, into existence. English \"was\" collapses this distinction by translating both verbs identically. Preserving the contrast (ἦν → \"was\"; ἐγένετο → \"came-to-be\") is structurally essential — it is one of the Prologue's primary theological-grammatical claims, made by syntax rather than by explicit assertion.",
      steps: [
        {
          n: 1,
          //// ==== Ro ==== ////
          text: "Structurally significant — the verb pattern carries the Prologue's theological grammar.",
          result: "pass",
        },
        {
          n: 4,
          //// ==== Ro ==== ////
          text: "Conventional \"was\" collapses ἦν and ἐγένετο into a single English verb, erasing the structural contrast.",
          result: "fail",
        },
      ],
    },

    'zoe': {
      term: "zōē",
      heb: "ζωή",
      mode: 3,
      axioms: ["TA1","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek ζωή: life. Distinct from βίος (way-of-life, livelihood, biography).",
      //// ==== Ro ==== ////
      note: "Greek distinguishes ζωή (\"life\" as principle of animation, the fact of being alive) from βίος (\"life\" as way-of-living, biography, livelihood). The Johannine corpus uses ζωή as a technical term that accumulates weight across the Gospel (3:16; 5:24; 6:35; 11:25; 14:6; 20:31). English \"life\" cannot preserve the ζωή/βίος distinction. Transliteration keeps the term visible as a recurring node in the Johannine network.",
      steps: [
        {
          n: 1,
          //// ==== Ro ==== ////
          text: "Recurrent technical term across the Gospel.",
          result: "pass",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Life\" cannot distinguish ζωή from βίος; English has only one word.",
          result: "fail",
        },
      ],
    },

    'anthropos': {
      term: "anthrōpos / anthrōpoi",
      heb: "ἄνθρωπος / ἄνθρωποι",
      mode: 3,
      axioms: ["TA2","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek ἄνθρωπος: human being (gender-inclusive). Distinct from ἀνήρ (\"man, adult male\").",
      //// ==== Ro ==== ////
      note: "Greek ἄνθρωπος denotes the human being as such, gender-inclusive, distinct from ἀνήρ (\"adult male\"). The Prologue uses ἄνθρωπος of the genus \"humanity\" (vv. 4, 9). English \"man\" was historically gender-inclusive but is increasingly read as gender-specific; \"human\" works but loses the term's philosophical-anthropological register. The genitive τῶν ἀνθρώπων in v.4 is itself ambiguous (objective: \"light that illumines humans\"; advantage: \"light for the benefit of humans\"; possessive: \"light belonging to humans\"); see the apparatus on the v.4 genitive.",
      steps: [
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Man\" carries gender ambiguity in modern English; \"human\" loses register.",
          result: "partial",
        },
      ],
    },

    'iohannes': {
      term: "Iōannēs",
      heb: "Ἰωάννης",
      mode: 3,
      axioms: ["TA1","TA5"],
      //// ==== Ro ==== ////
      gloss: "Greek transliteration of Hebrew Yoḥanan (\"YHWH has shown favor\").",
      //// ==== Ro ==== ////
      note: "Greek Ἰωάννης transliterates Hebrew יוֹחָנָן (Yoḥanan), \"YHWH has shown favor.\" English \"John\" is a heavily anglicised form via Latin Iohannes / Old French Jehan. The transliterated Greek form keeps the Semitic etymology visible.",
      steps: [],
    },

    'iesous': {
      term: "Iēsous",
      heb: "Ἰησοῦς",
      mode: 3,
      axioms: ["TA1","TA5"],
      //// ==== Ro ==== ////
      gloss: "Greek transliteration of Hebrew Yēšūaʿ (\"YHWH saves\" / \"YHWH is salvation\").",
      //// ==== Ro ==== ////
      note: "Greek Ἰησοῦς transliterates Hebrew יֵשׁוּעַ (Yēšūaʿ), the post-exilic short form of יְהוֹשֻׁעַ (Yəhōšuaʿ, \"Joshua\"), meaning \"YHWH saves.\" English \"Jesus\" is the conventional anglicisation through Latin Iesus.",
      steps: [],
    },

    'christos': {
      term: "Christos",
      heb: "Χριστός",
      mode: 3,
      axioms: ["TA1","TA5","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek Χριστός: anointed-one. LXX rendering of Hebrew מָשִׁיחַ (māšiaḥ).",
      //// ==== Ro ==== ////
      note: "Greek Χριστός is a verbal adjective from χρίω (\"to anoint\"), used by the LXX to translate Hebrew מָשִׁיחַ (māšiaḥ, \"anointed one\"). In the pre-100 AD horizon it denotes a figure ritually anointed for office (priest, king, prophet). English \"Christ\" is a transliteration that has become a quasi-proper-name in Christian usage, losing the participial / functional sense (\"the one who has been anointed\") that the Greek preserves.",
      steps: [
        {
          n: 5,
          //// ==== Ro ==== ////
          text: "\"Christ\" in modern English carries Christological dogmatic reception that postdates the term's functional sense in pre-100 AD usage.",
          result: "fail",
        },
      ],
    },

    'mouses': {
      term: "Mōusēs",
      heb: "Μωϋσῆς",
      mode: 3,
      axioms: ["TA1","TA5"],
      //// ==== Ro ==== ////
      gloss: "Greek transliteration of Hebrew מֹשֶׁה (Mōšeh).",
      //// ==== Ro ==== ////
      note: "Greek Μωϋσῆς transliterates Hebrew מֹשֶׁה (Mōšeh). The Greek form preserves the Semitic name visible to Hellenistic readers.",
      steps: [],
    },

    'pisteuo-eis': {
      term: "pisteuein eis",
      heb: "πιστεύω εἰς",
      mode: 2,
      axioms: ["TA1","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek construction: trust-into / believe-into. Johannine signature for relational adherence.",
      //// ==== Ro ==== ////
      note: "The construction πιστεύω + εἰς + accusative (\"trust-into / believe-into\") is distinctive to Johannine Greek. It expresses not propositional assent (\"believe that X is the case\") but directional relational trust (\"trust-into / commit-to / adhere-to\"). English \"believe in\" is the conventional rendering but has been weakened by usage. The construction governs the Prologue's anthropology of those who receive the Logos (vv. 7, 12) and recurs throughout the Gospel.",
      steps: [
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Believe in\" works but loses the directional/relational specificity of εἰς.",
          result: "partial",
        },
      ],
    },

    'tekna': {
      term: "tekna",
      heb: "τέκνα",
      mode: 2,
      axioms: ["TA2","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek τέκνα: children (gender-inclusive). Distinct from υἱοί (\"sons\").",
      //// ==== Ro ==== ////
      note: "Greek τέκνα is the gender-inclusive plural for \"children, offspring,\" distinct from υἱοί (\"sons\" specifically). John's choice of τέκνα θεοῦ (1:12) rather than υἱοὶ θεοῦ marks the term as inclusive — a point of significant Johannine theology (cf. 11:52). \"Children\" preserves this; \"sons\" would obscure it.",
      steps: [
        {
          n: 4,
          //// ==== Ro ==== ////
          text: "Distinguishing τέκνα from υἱοί is structurally significant in the Gospel.",
          result: "pass",
        },
      ],
    },

    'sarx': {
      term: "sarx",
      heb: "σάρξ",
      mode: 3,
      axioms: ["TA1","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek σάρξ: flesh. Range includes physical body, mortal nature, embodied existence.",
      //// ==== Ro ==== ////
      note: "Greek σάρξ ranges from \"flesh\" (physical material) to \"human / mortal nature\" (embodied existence as such) to \"the realm of the merely human\" (especially in Pauline usage, 100 AD horizon). In John 1:14 the claim \"the Logos sarx came-to-be\" employs the term without the negative valuation Pauline usage often attaches; here σάρξ marks embodied human existence as the locus of the Logos's entry into the world. English \"flesh\" preserves the physical sense but has accumulated negative associations from Pauline reception that may not be active in this Johannine usage.",
      steps: [
        {
          n: 5,
          //// ==== Ro ==== ////
          text: "\"Flesh\" in English theology has acquired Pauline-Augustinian negative freight.",
          result: "fail",
        },
      ],
    },

    'eskenosen': {
      term: "eskēnōsen / skēnoō",
      heb: "ἐσκήνωσεν / σκηνόω",
      mode: 2,
      axioms: ["TA1","TA4","TA6"],
      //// ==== Ro ==== ////
      gloss: "Aorist of σκηνόω: to pitch a tent, to dwell-in-a-tent. Etymologically linked to σκηνή (Tabernacle).",
      //// ==== Ro ==== ////
      note: "The verb σκηνόω literally means \"to pitch a tent, to dwell in a tent.\" It is etymologically connected to σκηνή — the LXX term for the Tabernacle (Hebrew מִשְׁכָּן, mishkan) where the divine presence (kavod) was understood to reside in Israel's wilderness journey (Ex 25–40). John's choice of σκηνόω rather than κατοικέω (\"to settle, dwell permanently\") activates this Tabernacle resonance: the Logos \"tabernacles\" among us. The conventional English \"dwelt\" loses both the temporary / tent-dwelling register and the structural intertextual link to Exodus and the Tabernacle theology. Combined with the immediately following clause \"we beheld his doxa\" (echoing the kavod theology of Ex 33–40), this is one of the Prologue's most loaded structural moves.",
      steps: [
        {
          n: 1,
          //// ==== Ro ==== ////
          text: "Structurally pivotal — anchors the Prologue's incarnation claim to the Exodus Tabernacle theology.",
          result: "pass",
        },
        {
          n: 4,
          //// ==== Ro ==== ////
          text: "\"Dwelt\" severs the lexical-intertextual link to σκηνή (Tabernacle).",
          result: "fail",
        },
      ],
    },

    'doxa': {
      term: "doxa",
      heb: "δόξα",
      mode: 3,
      axioms: ["TA1","TA4","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek δόξα: glory, radiance, weight-of-presence; in classical usage also \"opinion, reputation.\"",
      //// ==== Ro ==== ////
      note: "Greek δόξα has two distinguishable lexical fields. (1) Classical usage: \"opinion, reputation, what-seems-to-be\" (from δοκέω, \"to seem\"). (2) LXX usage: translator's choice for Hebrew כָּבוֹד (kavod) — \"weight, gravitas, manifest presence, radiance,\" especially of the divine presence. The Johannine use draws on the LXX/kavod register, not the classical one. The link to σκηνόω in v.14 (Tabernacle imagery) makes this unmistakable: \"we beheld his δόξα\" echoes the Tabernacle scenes of Exodus where Moses sees the kavod fill the tent. English \"glory\" carries some of this but has been thinned by liturgical reception.",
      steps: [
        {
          n: 1,
          //// ==== Ro ==== ////
          text: "Recurrent technical term carrying the kavod theology into the Gospel.",
          result: "pass",
        },
        {
          n: 5,
          //// ==== Ro ==== ////
          text: "\"Glory\" in English has been reduced to abstract praise-language, losing the kavod weight.",
          result: "fail",
        },
      ],
    },

    'monogenes': {
      term: "monogenēs",
      heb: "μονογενής",
      mode: 3,
      axioms: ["TA1","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek μονογενής: one-of-its-kind, unique, singular-in-genus. From μόνος + γένος.",
      //// ==== Ro ==== ////
      note: "Greek μονογενής is morphologically composed of μόνος (\"only\") + γένος (\"kind, class, family\"). Strict morphological reading: \"only-of-its-kind, unique, singular-in-class.\" The Latin Vulgate rendering *unigenitus* (\"only-begotten\") is etymologically defensible (γένος is cognate with γεννάω, \"to beget\") but pushes the morphology further toward generation/begetting than the Greek requires. By the 4th-century Arian controversies \"only-begotten\" had become a Nicene battleground term — the dogmatic decision to read μονογενής as \"begotten\" became theologically loaded in ways foreign to the pre-100 AD usage. In John's usage (1:14, 18; 3:16, 18; 1 John 4:9) the term marks the singular/unique status of the figure described. Transliteration avoids the Latin \"begotten\" reception layer.",
      steps: [
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Only-begotten\" imports a Latin-Nicene reading; \"unique\" loses the genus-relation register.",
          result: "fail",
        },
        {
          n: 5,
          //// ==== Ro ==== ////
          text: "Centuries of Trinitarian / Arian / Nicene reception attach to \"only-begotten\" — a paradigmatic case of post-boundary overdetermination.",
          result: "fail",
        },
      ],
    },

    'charis': {
      term: "charis",
      heb: "χάρις",
      mode: 3,
      axioms: ["TA1","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek χάρις: favor, gracious-disposition, generous-gift. Cognate with Hebrew ḥen.",
      //// ==== Ro ==== ////
      note: "Greek χάρις in pre-100 AD usage denotes graciousness, favor, generous disposition — a relational concept of unmerited goodwill. The LXX uses χάρις to translate Hebrew חֵן (ḥen), \"favor\" (cf. Gen 6:8 of Noaḥ). English \"grace\" has been so thoroughly absorbed into Pauline-Augustinian-Reformation soteriological frameworks that it imports specific theological content (justification, sola gratia, etc.) that postdates the Johannine horizon. Transliteration foreignises the term to slow domesticated reading.",
      steps: [
        {
          n: 5,
          //// ==== Ro ==== ////
          text: "\"Grace\" carries Pauline-Augustinian-Reformation reception that domesticates the term.",
          result: "fail",
        },
      ],
    },

    'aletheia': {
      term: "alētheia",
      heb: "ἀλήθεια",
      mode: 2,
      axioms: ["TA1","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek ἀλήθεια: truth, un-hiddenness, that-which-is-not-concealed.",
      //// ==== Ro ==== ////
      note: "Greek ἀλήθεια is morphologically privative: ἀ- (\"un-\") + λήθη (\"forgetfulness, hiddenness\"). The literal sense is \"un-hiddenness, that-which-is-disclosed.\" In the LXX it commonly translates Hebrew אֱמֶת (emet, \"faithfulness, reliability\"). The Johannine usage layers both registers — disclosure (especially of the Theos, cf. v.18) and faithfulness/reliability. \"Truth\" carries the disclosure sense weakly.",
      steps: [
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Truth\" in English has become primarily propositional (correct-statement) and loses the disclosure register.",
          result: "partial",
        },
      ],
    },

    'nomos': {
      term: "nomos",
      heb: "νόμος",
      mode: 2,
      axioms: ["TA1","TA5","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek νόμος: law, custom, instruction. LXX rendering of Hebrew תּוֹרָה (Torah).",
      //// ==== Ro ==== ////
      note: "Greek νόμος in pre-100 AD usage denotes law, custom, established practice. The LXX adopts νόμος to translate Hebrew תּוֹרָה (Torah, \"instruction, teaching\"), but the semantic ranges only partially overlap: Torah includes narrative, instruction, and statute, while νόμος in classical Greek leans toward statutory/customary law. When John writes \"the nomos was given through Mōusēs\" (1:17), the referent is the Torah; rendering \"law\" risks importing a narrower juridical sense than Torah carries.",
      steps: [
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Law\" narrows the Hebrew Torah's broader range (instruction + narrative + statute).",
          result: "partial",
        },
      ],
    },

    'kosmos': {
      term: "kosmos",
      heb: "κόσμος",
      mode: 2,
      axioms: ["TA2","TA6"],
      //// ==== Ro ==== ////
      gloss: "Greek κόσμος: ordered-world, cosmos. In Johannine usage often the human-realm-set-against-Theos.",
      //// ==== Ro ==== ////
      note: "Greek κόσμος literally means \"ordered arrangement, ornament, beauty\" (cognate with English \"cosmetic\"). Philosophical usage extends it to \"the ordered universe / cosmos.\" The Johannine usage develops a specific technical sense: κόσμος as the human-realm, often as the realm-in-opposition-to-Theos (cf. 1:10; 3:16; 15:18–19; 17:14–16). In the Prologue the term first appears in v.9 and then cascades through vv. 10–11. \"World\" in English captures the basic referent but misses the ordered-arrangement etymology and the specifically Johannine adversarial register that develops later.",
      steps: [
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"World\" works as primary equivalent but under-determines the Johannine technical sense.",
          result: "partial",
        },
      ],
    },

    'katelaben': {
      term: "katelaben / katalambanō",
      heb: "κατέλαβεν / καταλαμβάνω",
      mode: 3,
      axioms: ["TA1","TA3"],
      //// ==== Ro ==== ////
      gloss: "Greek καταλαμβάνω: (a) to grasp / comprehend; (b) to overcome / overpower / seize.",
      //// ==== Ro ==== ////
      note: "The verb καταλαμβάνω in pre-100 AD Greek carries two distinct semantic ranges, both well-attested: (a) cognitive — \"to grasp, lay hold of mentally, comprehend, understand\"; (b) physical/agonistic — \"to overtake, overpower, seize, capture, master.\" Both senses are active in Johannine usage: cf. 12:35 where the verb appears in the agonistic sense (\"lest darkness overtake you\"). In 1:5 — *ἡ σκοτία αὐτὸ οὐ κατέλαβεν* — the Greek does not disambiguate. Both readings produce coherent meaning: (a) \"the darkness did not comprehend [the light]\" — failure of recognition; (b) \"the darkness did not overpower [the light]\" — failure of opposition. The translation marks the ambiguity as live rather than silently choosing.",
      steps: [
        {
          n: 1,
          //// ==== Ro ==== ////
          text: "Structurally pivotal — closes the Prologue's opening cosmogonic movement.",
          result: "pass",
        },
        {
          n: 2,
          //// ==== Ro ==== ////
          text: "Co-text does not disambiguate; both senses are coherent and Johannine.",
          result: "fail",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "No single English verb carries both grasp/comprehend and overcome/overpower.",
          result: "fail",
        },
      ],
    },

    'exegesato': {
      term: "exēgēsato / exēgeomai",
      heb: "ἐξηγήσατο / ἐξηγέομαι",
      mode: 2,
      axioms: ["TA1","TA4","TA6"],
      //// ==== Ro ==== ////
      gloss: "Aorist middle of ἐξηγέομαι: to lead-out, draw-out, unfold, narrate, expound. Source of English \"exegesis.\"",
      //// ==== Ro ==== ////
      note: "Greek ἐξηγέομαι (from ἐκ \"out\" + ἡγέομαι \"to lead\") literally means \"to lead out, to draw out, to bring forth into narrative.\" Classical usage spans: a guide leading travelers out of a place; a priest expounding sacred mysteries; a storyteller \"unfolding\" a story so the hearers can see it; a herald or interpreter giving voice to what was hidden. The English noun \"exegesis\" derives directly from this verb. In John 1:18 the verb closes the Prologue with a structural inclusio: no one has ever seen Theos (the deity), but the monogenēs has *exegeted* / *unfolded* / *drawn-out* the Father — made him narratable, knowable, perceivable. The image is not metaphysical transformation but narrative disclosure: the Father is \"led-forth into perception\" through the monogenēs. Conventional English \"made him known\" preserves the disclosure sense but loses the narrative-leading-out register that the Greek verb specifically activates.",
      steps: [
        {
          n: 1,
          //// ==== Ro ==== ////
          text: "Structurally pivotal — the closing verb of the Prologue, in inclusio with v.1.",
          result: "pass",
        },
        {
          n: 3,
          //// ==== Ro ==== ////
          text: "\"Made known / declared / explained\" all preserve part of the sense but lose the narrative-unfolding register.",
          result: "partial",
        },
        {
          n: 4,
          //// ==== Ro ==== ////
          text: "The verb is the etymological source of \"exegesis\" — preserving its visibility makes a structural feature of the Prologue audible to the reader.",
          result: "fail",
        },
      ],
    },

    'theon': {
      term: "Theon",
      heb: "θεόν",
      mode: 2,
      axioms: ["TA1"],
      //// ==== Ro ==== ////
      gloss: "Accusative singular of θεός. Object of \"no one has seen.\"",
      //// ==== Ro ==== ////
      note: "In John 1:18a the noun appears in the accusative case (Θεόν) as the direct object of ἑώρακεν (\"has seen\"). The Greek case ending is meaningful here because v.18 is in structural inclusio with v.1: v.1 ends with θεός in predicate position; v.18 opens with Θεόν in object position; the closing clause has μονογενὴς θεός (anarthrous, again predicate-like). Capitalising the form Theon in transliteration preserves the case visibility for English readers.",
      steps: [
        {
          n: 1,
          //// ==== Ro ==== ////
          text: "Inclusio structure with v.1 makes the case-ending visible significant.",
          result: "pass",
        },
      ],
    },

  };


  // ======================================================
  // AMBIGUITIES — clickable markers in the body text
  // ======================================================
  const AMBIGUITIES_EN = {

    'amb-D1-v4-genitive': {
      context: 'the light of the anthrōpoi',
      heb: 'τὸ φῶς τῶν ἀνθρώπων',
      gloss: 'Greek genitive plural — the type of "of" relation is grammatically open.',
      hebrew_feature: 'Greek genitives carry multiple grammatical functions. τῶν ἀνθρώπων could be: (a) genitive of advantage / benefit ("light for the benefit of humans"); (b) subjective / possessive ("the light belonging to humans, that is theirs"); (c) objective ("the light that illumines humans, with humans as its object"). Greek does not disambiguate. The construction zōē-as-light-of-humans does not specify which "of" is in play.',
      readings: [
        { label: 'Advantage / benefit', text: 'the light [for the benefit of] humans — light that serves them' },
        { label: 'Subjective / possessive', text: 'the light [belonging to] humans — their proper illumination' },
        { label: 'Objective', text: 'the light [that illumines] humans — humans as the object of the lighting' },
      ],
      note: 'All three readings flow in the same general direction: light flowing *toward* humans (the Logos as source from v.3 excludes any reading where humans generate the light). The question is *what kind of toward*. The translation preserves the openness rather than choosing one of the three.',
      axioms: ['TA1', 'TA3'],
    },

    'amb-D1-v5-katelaben': {
      context: 'the darkness it [grasp / overpower] not katelaben',
      heb: 'ἡ σκοτία αὐτὸ οὐ κατέλαβεν',
      gloss: 'The verb καταλαμβάνω carries two distinct semantic ranges, both well-attested.',
      hebrew_feature: 'καταλαμβάνω in pre-100 AD Greek means both "to grasp / lay hold of mentally / comprehend" (cognitive) AND "to overtake / overpower / seize / master" (physical-agonistic). Both senses are Johannine — cf. 12:35 where the agonistic sense is unambiguous ("lest darkness overtake you"). In 1:5 the surrounding co-text does not disambiguate.',
      readings: [
        { label: 'Cognitive', text: 'the darkness did-not-grasp it — failure of recognition / comprehension' },
        { label: 'Agonistic', text: 'the darkness did-not-overpower it — failure of opposition / mastery' },
      ],
      note: 'The translation marks the ambiguity as a live, structurally significant openness rather than silently selecting. The Johannine narrative develops both registers as the Gospel proceeds — light not understood by the kosmos (cognitive failure, vv. 10–11) and light not extinguished by opposition (agonistic failure, the passion-resurrection arc). The Prologue may intentionally hold both senses simultaneously.',
      axioms: ['TA1', 'TA3'],
    },

    'amb-D1-v9-parsing': {
      context: 'the true light, which enlightens every anthrōpos, was coming into the kosmos',
      heb: 'ἦν τὸ φῶς τὸ ἀληθινὸν ὃ φωτίζει πάντα ἄνθρωπον ἐρχόμενον εἰς τὸν κόσμον',
      gloss: 'The participle ἐρχόμενον ("coming") can attach to either subject. Two distinct parsings.',
      hebrew_feature: 'SBLGNT prints v.9 without commas, leaving the participle ἐρχόμενον syntactically open. The participle is morphologically ambiguous between (a) neuter nominative singular agreeing with τὸ φῶς ("the light coming") in periphrastic construction with ἦν, and (b) masculine accusative singular agreeing with πάντα ἄνθρωπον ("every person coming"). Both parsings are grammatically permitted.',
      readings: [
        { label: 'Periphrastic (modern critical preference)', text: 'The true light, which enlightens every anthrōpos, was coming into the kosmos. — the Logos is what is "coming"; v.9 anticipates the entry into the world that v.10 narrates.' },
        { label: 'Modifier (Vulgate / KJV / Old Syriac tradition)', text: 'The true light was [the one] which enlightens every anthrōpos coming into the kosmos. — every person who comes into the world is what is "coming"; v.9 makes a general statement about the lighting of humanity.' },
      ],
      note: 'Patristic and modern commentary tradition divides on this parsing. Reading A connects forward to vv. 10–11 (the Logos in the kosmos) and is favored by most modern critical editions on syntactic grounds (initial ἦν followed by participle suggests periphrasis, and "coming into the world" is not used elsewhere in John for human birth). Reading B has ancient versional support (Vulgate, Old Syriac) and was standard through the Reformation. The translation displays Reading A in the body text per the SBLGNT punctuation lean; Reading B is preserved here.',
      axioms: ['TA1', 'TA3'],
    },

    'amb-D1-v18-variant': {
      context: 'monogenēs Theos / monogenēs huios — textual variant',
      heb: 'μονογενὴς θεός / ὁ μονογενὴς υἱός',
      gloss: 'The word following μονογενής differs across the manuscript tradition. Not a syntactic ambiguity but a textual variant.',
      hebrew_feature: 'This is a textual-critical variant, not a grammatical ambiguity. The earliest Alexandrian witnesses (P66, P75, ℵ original hand, B, C* original hand, L) read μονογενὴς θεός ("monogenēs Theos"). The majority Byzantine tradition and most versional witnesses (Old Latin, Curetonian Syriac, Harklean Syriac, and citations from many Greek and Latin Fathers) read ὁ μονογενὴς υἱός ("the monogenēs son"). SBLGNT prints μονογενὴς θεός as the primary text, with the variant noted in apparatus.',
      readings: [
        { label: 'SBLGNT main text (Alexandrian)', text: 'monogenēs Theos, the-one being into the bosom of the Father, that-one exegeted-him.' },
        { label: 'Byzantine majority', text: 'the monogenēs huios (son), the-one being into the bosom of the Father, that-one exegeted-him.' },
      ],
      note: 'External evidence: the Alexandrian reading has the earliest support (2nd-century papyri P66 and P75, plus the great 4th-century uncials ℵ and B). Internal evidence is debated: lectio difficilior potior favors θεός (the harder reading; scribes would more likely soften θεός→υἱός than the reverse — υἱός is the standard Johannine designation, cf. 3:16, 18); but some critics (Wikgren minority report on UBS-4 committee; Ehrman) argue υἱός is original and θεός is a primitive Alexandrian transcriptional error in nomina-sacra abbreviation (ΥΣ → ΘΣ). The variant carries Christological weight that exceeds the present scope of the apparatus.',
      axioms: ['TA1', 'TA3', 'TA5'],
    },

  };

    // ======================================================
  // ROMANIAN — AMBIGUITIES
  // Translate the marked fields in place. Same structure as EN;
  // search for //// ==== Ro ==== //// markers.
  // ======================================================
  const AMBIGUITIES_RO = {

    'amb-D1-v4-genitive': {
      //// ==== Ro ==== ////
      context: "the light of the anthrōpoi",
      heb: "τὸ φῶς τῶν ἀνθρώπων",
      //// ==== Ro ==== ////
      gloss: "Greek genitive plural — the type of \"of\" relation is grammatically open.",
      //// ==== Ro ==== ////
      hebrew_feature: "Greek genitives carry multiple grammatical functions. τῶν ἀνθρώπων could be: (a) genitive of advantage / benefit (\"light for the benefit of humans\"); (b) subjective / possessive (\"the light belonging to humans, that is theirs\"); (c) objective (\"the light that illumines humans, with humans as its object\"). Greek does not disambiguate. The construction zōē-as-light-of-humans does not specify which \"of\" is in play.",
      readings: [
        {
          //// ==== Ro ==== ////
          label: "Advantage / benefit",
          //// ==== Ro ==== ////
          text: "the light [for the benefit of] humans — light that serves them",
        },
        {
          //// ==== Ro ==== ////
          label: "Subjective / possessive",
          //// ==== Ro ==== ////
          text: "the light [belonging to] humans — their proper illumination",
        },
        {
          //// ==== Ro ==== ////
          label: "Objective",
          //// ==== Ro ==== ////
          text: "the light [that illumines] humans — humans as the object of the lighting",
        },
      ],
      //// ==== Ro ==== ////
      note: "All three readings flow in the same general direction: light flowing *toward* humans (the Logos as source from v.3 excludes any reading where humans generate the light). The question is *what kind of toward*. The translation preserves the openness rather than choosing one of the three.",
      axioms: ["TA1","TA3"],
    },

    'amb-D1-v5-katelaben': {
      //// ==== Ro ==== ////
      context: "the darkness it [grasp / overpower] not katelaben",
      heb: "ἡ σκοτία αὐτὸ οὐ κατέλαβεν",
      //// ==== Ro ==== ////
      gloss: "The verb καταλαμβάνω carries two distinct semantic ranges, both well-attested.",
      //// ==== Ro ==== ////
      hebrew_feature: "καταλαμβάνω in pre-100 AD Greek means both \"to grasp / lay hold of mentally / comprehend\" (cognitive) AND \"to overtake / overpower / seize / master\" (physical-agonistic). Both senses are Johannine — cf. 12:35 where the agonistic sense is unambiguous (\"lest darkness overtake you\"). In 1:5 the surrounding co-text does not disambiguate.",
      readings: [
        {
          //// ==== Ro ==== ////
          label: "Cognitive",
          //// ==== Ro ==== ////
          text: "the darkness did-not-grasp it — failure of recognition / comprehension",
        },
        {
          //// ==== Ro ==== ////
          label: "Agonistic",
          //// ==== Ro ==== ////
          text: "the darkness did-not-overpower it — failure of opposition / mastery",
        },
      ],
      //// ==== Ro ==== ////
      note: "The translation marks the ambiguity as a live, structurally significant openness rather than silently selecting. The Johannine narrative develops both registers as the Gospel proceeds — light not understood by the kosmos (cognitive failure, vv. 10–11) and light not extinguished by opposition (agonistic failure, the passion-resurrection arc). The Prologue may intentionally hold both senses simultaneously.",
      axioms: ["TA1","TA3"],
    },

    'amb-D1-v9-parsing': {
      //// ==== Ro ==== ////
      context: "the true light, which enlightens every anthrōpos, was coming into the kosmos",
      heb: "ἦν τὸ φῶς τὸ ἀληθινὸν ὃ φωτίζει πάντα ἄνθρωπον ἐρχόμενον εἰς τὸν κόσμον",
      //// ==== Ro ==== ////
      gloss: "The participle ἐρχόμενον (\"coming\") can attach to either subject. Two distinct parsings.",
      //// ==== Ro ==== ////
      hebrew_feature: "SBLGNT prints v.9 without commas, leaving the participle ἐρχόμενον syntactically open. The participle is morphologically ambiguous between (a) neuter nominative singular agreeing with τὸ φῶς (\"the light coming\") in periphrastic construction with ἦν, and (b) masculine accusative singular agreeing with πάντα ἄνθρωπον (\"every person coming\"). Both parsings are grammatically permitted.",
      readings: [
        {
          //// ==== Ro ==== ////
          label: "Periphrastic (modern critical preference)",
          //// ==== Ro ==== ////
          text: "The true light, which enlightens every anthrōpos, was coming into the kosmos. — the Logos is what is \"coming\"; v.9 anticipates the entry into the world that v.10 narrates.",
        },
        {
          //// ==== Ro ==== ////
          label: "Modifier (Vulgate / KJV / Old Syriac tradition)",
          //// ==== Ro ==== ////
          text: "The true light was [the one] which enlightens every anthrōpos coming into the kosmos. — every person who comes into the world is what is \"coming\"; v.9 makes a general statement about the lighting of humanity.",
        },
      ],
      //// ==== Ro ==== ////
      note: "Patristic and modern commentary tradition divides on this parsing. Reading A connects forward to vv. 10–11 (the Logos in the kosmos) and is favored by most modern critical editions on syntactic grounds (initial ἦν followed by participle suggests periphrasis, and \"coming into the world\" is not used elsewhere in John for human birth). Reading B has ancient versional support (Vulgate, Old Syriac) and was standard through the Reformation. The translation displays Reading A in the body text per the SBLGNT punctuation lean; Reading B is preserved here.",
      axioms: ["TA1","TA3"],
    },

    'amb-D1-v18-variant': {
      //// ==== Ro ==== ////
      context: "monogenēs Theos / monogenēs huios — textual variant",
      heb: "μονογενὴς θεός / ὁ μονογενὴς υἱός",
      //// ==== Ro ==== ////
      gloss: "The word following μονογενής differs across the manuscript tradition. Not a syntactic ambiguity but a textual variant.",
      //// ==== Ro ==== ////
      hebrew_feature: "This is a textual-critical variant, not a grammatical ambiguity. The earliest Alexandrian witnesses (P66, P75, ℵ original hand, B, C* original hand, L) read μονογενὴς θεός (\"monogenēs Theos\"). The majority Byzantine tradition and most versional witnesses (Old Latin, Curetonian Syriac, Harklean Syriac, and citations from many Greek and Latin Fathers) read ὁ μονογενὴς υἱός (\"the monogenēs son\"). SBLGNT prints μονογενὴς θεός as the primary text, with the variant noted in apparatus.",
      readings: [
        {
          //// ==== Ro ==== ////
          label: "SBLGNT main text (Alexandrian)",
          //// ==== Ro ==== ////
          text: "monogenēs Theos, the-one being into the bosom of the Father, that-one exegeted-him.",
        },
        {
          //// ==== Ro ==== ////
          label: "Byzantine majority",
          //// ==== Ro ==== ////
          text: "the monogenēs huios (son), the-one being into the bosom of the Father, that-one exegeted-him.",
        },
      ],
      //// ==== Ro ==== ////
      note: "External evidence: the Alexandrian reading has the earliest support (2nd-century papyri P66 and P75, plus the great 4th-century uncials ℵ and B). Internal evidence is debated: lectio difficilior potior favors θεός (the harder reading; scribes would more likely soften θεός→υἱός than the reverse — υἱός is the standard Johannine designation, cf. 3:16, 18); but some critics (Wikgren minority report on UBS-4 committee; Ehrman) argue υἱός is original and θεός is a primitive Alexandrian transcriptional error in nomina-sacra abbreviation (ΥΣ → ΘΣ). The variant carries Christological weight that exceeds the present scope of the apparatus.",
      axioms: ["TA1","TA3","TA5"],
    },

  };


  // ======================================================
  // META — book metadata per language
  // ======================================================

  const DIVISIONS_BASE = [
    { id: 'D1',  range: 'John 1:1 – 1:18'   },
    // { id: 'D2',  range: 'John 1:19 – 1:51'  },
    // { id: 'D3',  range: 'John 2:1 – 2:25'   },
    // { id: 'D4',  range: 'John 3:1 – 3:36'   },
    // { id: 'D5',  range: 'John 4:1 – 4:54'   },
    // { id: 'D6',  range: 'John 5:1 – 5:47'   },
    // { id: 'D7',  range: 'John 6:1 – 6:71'   },
    // { id: 'D8',  range: 'John 7:1 – 7:52'   },
    // { id: 'D9',  range: 'John 8:12 – 8:59'  },
    // { id: 'D10', range: 'John 9:1 – 9:41'   },
    // { id: 'D11', range: 'John 10:1 – 10:42' },
    // { id: 'D12', range: 'John 11:1 – 11:57' },
    // { id: 'D13', range: 'John 12:1 – 12:50' },
    // { id: 'D14', range: 'John 13:1 – 13:38' },
    // { id: 'D15', range: 'John 14:1 – 14:31' },
    // { id: 'D16', range: 'John 15:1 – 15:27' },
    // { id: 'D17', range: 'John 16:1 – 16:33' },
    // { id: 'D18', range: 'John 17:1 – 17:26' },
    // { id: 'D19', range: 'John 18:1 – 18:40' },
    // { id: 'D20', range: 'John 19:1 – 19:42' },
    // { id: 'D21', range: 'John 20:1 – 20:31' },
    // { id: 'D22', range: 'John 21:1 – 21:25' },
  ];

  const DIVISIONS_EN = [
    { ...DIVISIONS_BASE[0],  label: 'D1',  title: 'In archē was the Logos…',                     subtitle: 'Prologue · The Logos and the light' },
    // { ...DIVISIONS_BASE[1],  label: 'D2',  title: 'The witness of Iōannēs…',                     subtitle: 'Iōannēs the witness · the first disciples' },
    // { ...DIVISIONS_BASE[2],  label: 'D3',  title: 'A wedding in Kana…',                          subtitle: 'Water to wine · the temple' },
    // { ...DIVISIONS_BASE[3],  label: 'D4',  title: 'Nikodēmos came to him by night…',             subtitle: 'Nikodēmos · being-born from above' },
    // { ...DIVISIONS_BASE[4],  label: 'D5',  title: 'A woman of Samareia at the well…',            subtitle: 'The Samaritan woman · the royal official' },
    // { ...DIVISIONS_BASE[5],  label: 'D6',  title: 'A feast of the Ioudaioi…',                    subtitle: 'The pool of Bēthesda · controversy' },
    // { ...DIVISIONS_BASE[6],  label: 'D7',  title: 'After these things Iēsous went away…',        subtitle: 'Five thousand · the bread of life' },
    // { ...DIVISIONS_BASE[7],  label: 'D8',  title: 'The feast of Tabernacles…',                   subtitle: 'Teaching at the feast' },
    // { ...DIVISIONS_BASE[8],  label: 'D9',  title: 'I am the light of the kosmos…',               subtitle: 'Light and freedom' },
    // { ...DIVISIONS_BASE[9],  label: 'D10', title: 'A man blind from birth…',                     subtitle: 'The healing of the blind man' },
    // { ...DIVISIONS_BASE[10], label: 'D11', title: 'I am the good shepherd…',                     subtitle: 'The shepherd discourse' },
    // { ...DIVISIONS_BASE[11], label: 'D12', title: 'A certain one was sick — Lazaros…',           subtitle: 'The raising of Lazaros' },
    // { ...DIVISIONS_BASE[12], label: 'D13', title: 'Six days before the Passover…',               subtitle: 'Anointing · entry · final teaching' },
    // { ...DIVISIONS_BASE[13], label: 'D14', title: 'Before the feast of the Passover…',           subtitle: 'The supper · the foot-washing' },
    // { ...DIVISIONS_BASE[14], label: 'D15', title: 'Let not your heart be troubled…',             subtitle: 'Farewell discourse I' },
    // { ...DIVISIONS_BASE[15], label: 'D16', title: 'I am the true vine…',                         subtitle: 'Farewell discourse II' },
    // { ...DIVISIONS_BASE[16], label: 'D17', title: 'These things I have spoken to you…',          subtitle: 'Farewell discourse III' },
    // { ...DIVISIONS_BASE[17], label: 'D18', title: 'Father, the hour has come…',                  subtitle: 'The high-priestly prayer' },
    // { ...DIVISIONS_BASE[18], label: 'D19', title: 'Iēsous went out across the Kedron…',          subtitle: 'Arrest · trial before Annas and Pilatos' },
    // { ...DIVISIONS_BASE[19], label: 'D20', title: 'Then Pilatos took Iēsous and scourged him…',  subtitle: 'Scourging · crucifixion · burial' },
    // { ...DIVISIONS_BASE[20], label: 'D21', title: 'On the first of the week, while still dark…', subtitle: 'The empty tomb · resurrection appearances' },
    // { ...DIVISIONS_BASE[21], label: 'D22', title: 'After these things Iēsous showed himself again…', subtitle: 'Epilogue · by the sea of Tiberias' },
  ];

  const DIVISIONS_RO = [
    { ...DIVISIONS_BASE[0],  label: 'D1',  title: 'În archē era Logosul…',                       subtitle: 'Prologul · Logosul și lumina' },
    // { ...DIVISIONS_BASE[1],  label: 'D2',  title: 'Mărturia lui Iōannēs…',                       subtitle: 'Iōannēs martorul · primii ucenici' },
    // { ...DIVISIONS_BASE[2],  label: 'D3',  title: 'O nuntă în Kana…',                            subtitle: 'Apa în vin · templul' },
    // { ...DIVISIONS_BASE[3],  label: 'D4',  title: 'Nikodēmos a venit la el noaptea…',            subtitle: 'Nikodēmos · nașterea de sus' },
    // { ...DIVISIONS_BASE[4],  label: 'D5',  title: 'O femeie din Samareia la fântână…',           subtitle: 'Femeia samariteancă · slujbașul împărătesc' },
    // { ...DIVISIONS_BASE[5],  label: 'D6',  title: 'O sărbătoare a Ioudaioi…',                    subtitle: 'Scăldătoarea Bēthesda · controversă' },
    // { ...DIVISIONS_BASE[6],  label: 'D7',  title: 'După acestea Iēsous a plecat…',               subtitle: 'Cinci mii · pâinea vieții' },
    // { ...DIVISIONS_BASE[7],  label: 'D8',  title: 'Sărbătoarea Corturilor…',                     subtitle: 'Învățătură la sărbătoare' },
    // { ...DIVISIONS_BASE[8],  label: 'D9',  title: 'Eu sunt lumina kosmos-ului…',                 subtitle: 'Lumină și libertate' },
    // { ...DIVISIONS_BASE[9],  label: 'D10', title: 'Un om orb din naștere…',                      subtitle: 'Vindecarea orbului' },
    // { ...DIVISIONS_BASE[10], label: 'D11', title: 'Eu sunt păstorul cel bun…',                   subtitle: 'Discursul păstorului' },
    // { ...DIVISIONS_BASE[11], label: 'D12', title: 'Unul oarecare era bolnav — Lazaros…',         subtitle: 'Învierea lui Lazaros' },
    // { ...DIVISIONS_BASE[12], label: 'D13', title: 'Cu șase zile înainte de Paște…',              subtitle: 'Ungerea · intrarea · ultima învățătură' },
    // { ...DIVISIONS_BASE[13], label: 'D14', title: 'Înainte de sărbătoarea Paștelui…',            subtitle: 'Cina · spălarea picioarelor' },
    // { ...DIVISIONS_BASE[14], label: 'D15', title: 'Să nu vi se tulbure inima…',                  subtitle: 'Discurs de rămas-bun I' },
    // { ...DIVISIONS_BASE[15], label: 'D16', title: 'Eu sunt vița cea adevărată…',                 subtitle: 'Discurs de rămas-bun II' },
    // { ...DIVISIONS_BASE[16], label: 'D17', title: 'Acestea vi le-am spus vouă…',                 subtitle: 'Discurs de rămas-bun III' },
    // { ...DIVISIONS_BASE[17], label: 'D18', title: 'Tată, a venit ceasul…',                       subtitle: 'Rugăciunea arhierească' },
    // { ...DIVISIONS_BASE[18], label: 'D19', title: 'Iēsous a ieșit dincolo de Kedron…',           subtitle: 'Arestarea · judecata · Pilatos' },
    // { ...DIVISIONS_BASE[19], label: 'D20', title: 'Atunci Pilatos l-a luat pe Iēsous și l-a biciuit…', subtitle: 'Biciuirea · răstignirea · înmormântarea' },
    // { ...DIVISIONS_BASE[20], label: 'D21', title: 'În prima zi a săptămânii, încă întuneric…',   subtitle: 'Mormântul gol · arătările' },
    // { ...DIVISIONS_BASE[21], label: 'D22', title: 'După acestea Iēsous s-a arătat din nou…',     subtitle: 'Epilog · la Marea Tiberiadei' },
  ];

  // ======================================================
  // SECTIONS — D1 (Prologue) fully populated. D2–D22 stubs.
  // ======================================================

  const SECTIONS_EN = {

    D1: [
      'In <span class="m2" data-term="arche">archē<span class="m2-apparatus"><span class="heb">ἀρχή</span></span></span> was the <span class="m3" data-term="logos">Logos</span>, and the <span class="m3" data-term="logos">Logos</span> was <span class="m2" data-term="pros">pros<span class="m2-apparatus"><span class="heb">πρός</span></span></span> the <span class="m3" data-term="theos">Theos</span>, and <span class="m3" data-term="theos">Theos</span> was the <span class="m3" data-term="logos">Logos</span>.',
      'This-one was in <span class="m2" data-term="arche">archē<span class="m2-apparatus"><span class="heb">ἀρχή</span></span></span> <span class="m2" data-term="pros">pros<span class="m2-apparatus"><span class="heb">πρός</span></span></span> the <span class="m3" data-term="theos">Theos</span>.',
      'All-things through him <span class="m2" data-term="egeneto">came-to-be<span class="m2-apparatus"><span class="heb">ἐγένετο</span></span></span>, and apart from him <span class="m2" data-term="egeneto">came-to-be<span class="m2-apparatus"><span class="heb">ἐγένετο</span></span></span> not-one [thing] that has <span class="m2" data-term="egeneto">come-to-be<span class="m2-apparatus"><span class="heb">γέγονεν</span></span></span>.',
      'In him was <span class="m3" data-term="zoe">zōē</span>, and the <span class="m3" data-term="zoe">zōē</span> was the light <span class="amb" data-amb="amb-D1-v4-genitive">[[of]]</span> the <span class="m3" data-term="anthropos">anthrōpoi</span>.',
      'And the light in the darkness shines, and the darkness it <span class="amb" data-amb="amb-D1-v5-katelaben">[[did-not-grasp | did-not-overpower]]</span> <span class="m3" data-term="katelaben">katelaben</span>.',
      '<span class="m2" data-term="egeneto">Came-to-be<span class="m2-apparatus"><span class="heb">ἐγένετο</span></span></span> a <span class="m3" data-term="anthropos">anthrōpos</span> sent from <span class="m3" data-term="theos">Theos</span>; name to him, <span class="m3" data-term="iohannes">Iōannēs</span>.',
      'This-one came for a witnessing, in-order-that he might bear-witness concerning the light, in-order-that all might <span class="m2" data-term="pisteuo-eis">trust-into<span class="m2-apparatus"><span class="heb">πιστεύω εἰς</span></span></span> through him.',
      'That-one was not the light, but [came] in-order-that he might bear-witness concerning the light.',
      'The true light, which enlightens every <span class="m3" data-term="anthropos">anthrōpos</span>, was coming into the <span class="m2" data-term="kosmos">kosmos<span class="m2-apparatus"><span class="heb">κόσμος</span></span></span>. <span class="amb" data-amb="amb-D1-v9-parsing">[[◊]]</span>',
      'In the <span class="m2" data-term="kosmos">kosmos<span class="m2-apparatus"><span class="heb">κόσμος</span></span></span> he was, and the <span class="m2" data-term="kosmos">kosmos<span class="m2-apparatus"><span class="heb">κόσμος</span></span></span> through him <span class="m2" data-term="egeneto">came-to-be<span class="m2-apparatus"><span class="heb">ἐγένετο</span></span></span>, and the <span class="m2" data-term="kosmos">kosmos<span class="m2-apparatus"><span class="heb">κόσμος</span></span></span> him not knew.',
      'Unto his-own [things/places] he came, and the his-own [people] him not received-alongside.',
      'But as-many-as received him, he gave to them authority <span class="m2" data-term="tekna">tekna<span class="m2-apparatus"><span class="heb">τέκνα</span></span></span> of <span class="m3" data-term="theos">Theos</span> to <span class="m2" data-term="egeneto">come-to-be<span class="m2-apparatus"><span class="heb">γενέσθαι</span></span></span>, to those <span class="m2" data-term="pisteuo-eis">trusting-into<span class="m2-apparatus"><span class="heb">πιστεύουσιν εἰς</span></span></span> the name of him,',
      'who not from bloods, neither from will of <span class="m3" data-term="sarx">sarx</span>, neither from will of a-man, but from <span class="m3" data-term="theos">Theos</span> were-begotten.',
      'And the <span class="m3" data-term="logos">Logos</span> <span class="m3" data-term="sarx">sarx</span> <span class="m2" data-term="egeneto">came-to-be<span class="m2-apparatus"><span class="heb">ἐγένετο</span></span></span> and <span class="m2" data-term="eskenosen">tabernacled<span class="m2-apparatus"><span class="heb">ἐσκήνωσεν</span></span></span> among us, and we beheld the <span class="m3" data-term="doxa">doxa</span> of him, <span class="m3" data-term="doxa">doxa</span> as of <span class="m3" data-term="monogenes">monogenēs</span> from a Father, full of <span class="m3" data-term="charis">charis</span> and <span class="m2" data-term="aletheia">alētheia<span class="m2-apparatus"><span class="heb">ἀλήθεια</span></span></span>.',
      '<span class="m3" data-term="iohannes">Iōannēs</span> witnesses concerning him and has-cried-out, saying — "This-one was [the one] of-whom I said: \'The-one after me coming, in-front-of me has-<span class="m2" data-term="egeneto">come-to-be<span class="m2-apparatus"><span class="heb">γέγονεν</span></span></span>, because before me he was.\'"',
      'Because out of his fullness we all received, and <span class="m3" data-term="charis">charis</span> in-place-of <span class="m3" data-term="charis">charis</span>.',
      'Because the <span class="m2" data-term="nomos">nomos<span class="m2-apparatus"><span class="heb">νόμος</span></span></span> through <span class="m3" data-term="mouses">Mōusēs</span> was-given, the <span class="m3" data-term="charis">charis</span> and the <span class="m2" data-term="aletheia">alētheia<span class="m2-apparatus"><span class="heb">ἀλήθεια</span></span></span> through <span class="m3" data-term="iesous">Iēsous</span> <span class="m3" data-term="christos">Christos</span> <span class="m2" data-term="egeneto">came-to-be<span class="m2-apparatus"><span class="heb">ἐγένετο</span></span></span>.',
      '<span class="m2" data-term="theon">Theon<span class="m2-apparatus"><span class="heb">θεόν</span></span></span> no-one has-seen ever; <span class="m3" data-term="monogenes">monogenēs</span> <span class="m3" data-term="theos">Theos</span>, the-one being into the bosom of the Father, that-one <span class="m2" data-term="exegesato">exegeted-him<span class="m2-apparatus"><span class="heb">ἐξηγήσατο</span></span></span>. <span class="amb" data-amb="amb-D1-v18-variant">[[◊]]</span>',
    ],

    D2: [], D3: [], D4: [], D5: [], D6: [], D7: [], D8: [], D9: [], D10: [], D11: [],
    D12: [], D13: [], D14: [], D15: [], D16: [], D17: [], D18: [], D19: [], D20: [], D21: [], D22: [],

  };

  const SECTIONS_RO = {
    D1: [
      '<em>[D1 — text în lucru. Înlocuiește acest paragraf cu traducerea ta în limba română, păstrând marcajele <code>m2</code>, <code>m3</code> și <code>amb</code> din versiunea engleză.]</em>',
    ],
    D2: [], D3: [], D4: [], D5: [], D6: [], D7: [], D8: [], D9: [], D10: [], D11: [],
    D12: [], D13: [], D14: [], D15: [], D16: [], D17: [], D18: [], D19: [], D20: [], D21: [], D22: [],
  };

  // ======================================================
  // COMMENTARIES — empty for now; populate as written
  // ======================================================
  const _emptyComm = {};
  for (let i = 1; i <= 22; i++) _emptyComm['D' + i] = [];
  const COMMENTARIES_EN = { ..._emptyComm };
  const COMMENTARIES_RO = { ..._emptyComm };

  // ======================================================
  // REGISTER
  // ======================================================
  SPS.books.registerBook({
    id: 'ioanes',
    testament: 'greek',
    meta: {
      en: {
        title: 'Ioanes',
        subtitle: 'John',
        blurb: 'The Gospel according to John. Greek text base: SBLGNT (Holmes 2010). Working horizon: pre-100 AD Greek usage.',
        divisions: DIVISIONS_EN,
      },
      ro: {
        title: 'Ioan',
        subtitle: 'Ioan',
        blurb: 'Evanghelia după Ioan. Text grec de bază: SBLGNT (Holmes 2010). Orizont de lucru: greaca pre-100 d.Hr.',
        divisions: DIVISIONS_RO,
      },
    },
    terms:        { en: TERMS_EN,        ro: TERMS_RO        },
    ambiguities:  { en: AMBIGUITIES_EN,  ro: AMBIGUITIES_RO  },
    sections:     { en: SECTIONS_EN,     ro: SECTIONS_RO     },
    commentaries: { en: COMMENTARIES_EN, ro: COMMENTARIES_RO },
  });

})();
