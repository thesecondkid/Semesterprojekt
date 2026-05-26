// ─────────────────────────────────────────────────────────────────────
// TAROT APP — script.js
//
// Diese App zieht eine zufällige Tarotkarte von der API und zeigt
// dem User die Bedeutung auf Deutsch.
//
// Cheatsheets die hier angewendet werden:
//   01 Variablen    → const und let
//   02 Typen        → Strings, Booleans, Objekte, Arrays
//   03 Funktionen   → function name() {}
//   04 Bedingungen  → if / else
//   05 DOM          → querySelector, innerText, createElement
//   06 Events       → addEventListener, setTimeout
//   09 Arrays       → forEach, sort, slice
//   11 Objekte      → Objekte mit Properties
//   13 API          → async/await, fetch, try/catch
// ─────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────
// KARTENDATEN AUF DEUTSCH
// (→ Cheatsheet 11: Objekte)
//
// Ein grosses Objekt mit allen 16 Karten.
// Jede Karte ist selbst ein Objekt mit verschiedenen Properties.
// Der Key (z.B. 'wapp') ist das Kürzel, das die API zurückgibt.
//
// ⚠️ img = Bildnummer anpassen!
//    Öffne den img-Ordner und schau, welches Bild welche Karte ist.
//    Dann trage die richtige Zahl ein, z.B. img: '05'
// ─────────────────────────────────────────────────────────────────────
const germanCards = {

    // STÄBE (Wands) – Element Feuer
    'wapp': {
        imgFile: 'bube_staebe.png',
        name: 'Bube der Stäbe',
        suit: 'wands',
        keywords: 'Entdeckergeist · Inspiration',
        description: 'Ein plötzlicher Funke voller Begeisterung. Es ist der Moment, in dem eine neue Idee dein Herz höherschlagen lässt und du die Lust spürst, ein neues Abenteuer zu wagen.',
        meaning_up: 'Du trägst ein inneres Feuer in dir, das nur darauf wartet, sich in einem neuen Projekt oder Hobby zu entfalten. Der Bube der Stäbe bringt dir frische, dynamische Energie und oft auch spannende Nachrichten oder Chancen von außen. Du bist bereit, die Welt mit neugierigen Augen zu sehen und dich von deiner Leidenschaft anstecken zu lassen. Lass dich nicht von Zweifeln bremsen – dieser Moment gehört deiner Spontaneität und deinem Mut, etwas völlig Neues auszuprobieren.',
        meaning_rev: 'Welche neue Idee oder welcher Impuls lässt dein Herz gerade höherschlagen – und wie kannst du diesem Funken heute nachgehen?'
    },
    'wakn': {
        imgFile: 'ritter_staebe.png',
        name: 'Ritter der Stäbe',
        suit: 'wands',
        keywords: 'Tatendrang · Leidenschaft',
        description: 'Mit unbändiger Energie und Mut voranpreschen. Du fackelst nicht lange, sondern brennst für deine Ziele und reißt andere mit deinem Elan mit.',
        meaning_up: 'Wenn du dir etwas in den Kopf gesetzt hast, hält dich so schnell nichts mehr auf. Du steckst voller Tatendrang und bist bereit, Risiken einzugehen, um deine Träume Wirklichkeit werden zu lassen. Manchmal neigst du vielleicht dazu, etwas unüberlegt zu handeln oder ungeduldig zu werden, aber deine Begeisterung ist deine größte Superkraft. Es ist an der Zeit, die Ärmel hochzukrempeln, auf deine eigene Stärke zu vertrauen und die Komfortzone entschlossen zu verlassen.',
        meaning_rev: 'Wo solltest du jetzt mit vollem Elan und ohne langes Zögern mutig voranschreiten?'
    },
    'waqu': {
        imgFile: 'koenigin_staebe.png',
        name: 'Königin der Stäbe',
        suit: 'wands',
        keywords: 'Selbstbewusstsein · Charisma',
        description: 'Deine eigene Kraft stolz nach außen tragen. Du strahlst Lebensfreude, Unabhängigkeit und Wärme aus, die deine Mitmenschen magisch anzieht.',
        meaning_up: 'Du weißt genau, wer du bist, was du willst und was du wert bist. Du gehst aufrecht durchs Leben und übernehmst ganz selbstverständlich die Führung in deinem eigenen Reich. Deine Energie ist magnetisch, optimistisch und mutig. Du lässt dich nicht von den Meinungen anderer einschränken, sondern feierst deine Einzigartigkeit. Diese Karte erinnert dich daran, dass du das Recht hast, gesehen zu werden und deinen Raum voll und ganz einzunehmen.',
        meaning_rev: 'In welchem Bereich deines Lebens darfst du heute absolut selbstbewusst und stolz deine eigene Kraft zeigen?'
    },
    'waki': {
        imgFile: 'Koenig_staebe.png',
        name: 'König der Stäbe',
        suit: 'wands',
        keywords: 'Vision · Führungsqualität',
        description: 'Große Ziele mit Weitblick und Autorität meistern. Du bist der Schöpfer deiner eigenen Zukunft und inspirierst andere durch dein Handeln.',
        meaning_up: 'Du bist ein geborener Visionär und Anführer. Du besitzt nicht nur das leidenschaftliche Feuer für eine Idee, sondern auch die Disziplin und den Weitblick, um sie langfristig zum Erfolg zu führen. Wenn Herausforderungen auftauchen, nimmst du die Fäden fest in die Hand. Deine Autorität basiert nicht auf Druck, sondern auf Inspiration und Aufrichtigkeit. Du hast die Kraft, Großes zu bewegen – vertraue deiner Fähigkeit, langfristig zu planen und zu siegen.',
        meaning_rev: 'Welches langfristige Ziel erfordert jetzt deine volle Entschlossenheit und deine Fähigkeit, die Fäden in die Hand zu nehmen?'
    },

    // KELCHE (Cups) – Element Wasser
    'cupp': {
        imgFile: 'bube_kelche.png',
        name: 'Bube der Kelche',
        suit: 'cups',
        keywords: 'Emotionale Offenheit · Sensibilität',
        description: 'Eine liebevolle Geste oder eine kreative Eingebung, die dein Herz berührt. Du erlaubst dir, wieder verletzlich, verträumt und empfindsam zu sein.',
        meaning_up: 'Du öffnest dein Herz für die leisen, schönen Zwischentöne des Lebens. Der Bube der Kelche bringt dir oft eine versöhnliche Botschaft, eine kreative Idee oder eine unerwartete, liebevolle Geste eines Mitmenschen. Er erinnert dich daran, wie wichtig es ist, deinen Gefühlen Raum zu geben und weich zu werden. Lass deine Intuition und deine Fantasie fließen – es ist ein Moment der Heilung und des emotionalen Neubeginns, in dem du Wunder zulassen darfst.',
        meaning_rev: 'Welche emotionale Botschaft oder welcher kreative Impuls möchte gerade von dir wahrgenommen und angenommen werden?'
    },
    'cukn': {
        imgFile: 'ritter_kelche.png',
        name: 'Ritter der Kelche',
        suit: 'cups',
        keywords: 'Herzensweg · Romantik',
        description: 'Deinen Träumen und Sehnsüchten voller Liebe folgen. Du suchst nach tiefer, echter Verbundenheit und schenkst deinen Mitmenschen Harmonie.',
        meaning_up: 'Du bist ein Botschafter der Liebe und der Harmonie. Du triffst Entscheidungen nicht nur mit dem Kopf, sondern folgst dem Ruf deines Herzens. Du sehnst dich nach Ästhetik, tiefen Gesprächen und echten emotionalen Verbindungen. Der Ritter lädt dich ein, dich auf Angebote einzulassen, Frieden zu stiften oder dich voll und ganz einer kreativen oder romantischen Sehnsucht hinzugeben. Geh los für das, was deine Seele berührt.',
        meaning_rev: 'Welchem schönen Traum oder welchem Herzenswunsch solltest du jetzt erlauben, dich zu leiten?'
    },
    'cuqu': {
        imgFile: 'koenigin_kelche.png',
        name: 'Königin der Kelche',
        suit: 'cups',
        keywords: 'Empathie · Intuition',
        description: 'Tiefe emotionale Weisheit und Mitgefühl. Du spürst, was andere brauchen, und bist ein sicherer Hafen voller Geborgenheit und seelischer Heilung.',
        meaning_up: 'Deine Fähigkeit zu fühlen und dich in andere hineinzuversetzen, ist grenzenlos. Du besitzt eine ausgeprägte Intuition und verstehst die emotionalen Strömungen um dich herum, ohne dich darin zu verlieren. Du bist die Karte des tiefen Mitgefühls und der seelischen Fürsorge. Diese Energie erinnert dich daran, auf deine Träume und dein Bauchgefühl zu hören. Indem du dir selbst und anderen mit Sanftheit begegnest, bringst du Licht ins Dunkel.',
        meaning_rev: 'Wie kannst du dir selbst oder einem geliebten Menschen heute mit tieferem Verständnis und Mitgefühl begegnen?'
    },
    'cuki': {
        imgFile: 'koenig_kelche.png',
        name: 'König der Kelche',
        suit: 'cups',
        keywords: 'Emotionale Reife · Souveränität',
        description: 'Ein Fels in der Brandung, wenn die emotionalen Wellen hochschlagen. Du bewahrst in emotionalen Situationen einen klaren Kopf. Andere vertrauen dir.',
        meaning_up: 'Du bist der Meister deiner eigenen Gefühlswelt. Selbst wenn um dich herum das Chaos ausbricht oder die Emotionen hochkochen, verlierst du nicht den Boden unter den Füßen. Du hast gelernt, tief zu fühlen, ohne dich von den Stürmen des Lebens mitreißen zu lassen. Das macht dich zu einem sicheren Hafen für die Menschen in deinem Umfeld – sie spüren deine ehrliche Empathie und schätzen deinen weisen, unaufgeregten Rat. Deine Stärke liegt darin, Herz und Verstand perfekt in Balance zu halten.',
        meaning_rev: 'In welcher aktuellen Situation hilft es dir am meisten, einen kühlen Kopf zu bewahren, ohne dabei dein Herz zu verschließen?'
    },

    // SCHWERTER (Swords) – Element Luft
    'swpp': {
        imgFile: 'bube_schwerter.png',
        name: 'Bube der Schwerter',
        suit: 'swords',
        keywords: 'Wachsamkeit · Scharfsinn',
        description: 'Die Dinge kritisch hinterfragen und Wahrheiten aufdecken. Du nutzt deinen Verstand, um Situationen ganz sachlich und ohne Illusionen zu analysieren.',
        meaning_up: 'Du lässt dich nicht so leicht an der Nase herumführen. Dein Verstand ist hellwach, neugierig und bereit, Unklarheiten aufzudecken. Manchmal bringt der Bube der Schwerter auch konstruktive Kritik, einen Konflikt oder eine intellektuelle Herausforderung mit sich. Er fordert dich auf, den Dingen auf den Grund zu gehen, wachsam zu sein und eine Situation ganz nüchtern zu betrachten, bevor du handelst. Lass dich nicht von Emotionen blenden – die Wahrheit ist dein Kompass.',
        meaning_rev: 'Welche Situation in deinem Leben solltest du gerade ganz nüchtern, logisch und ohne emotionale Voreingenommenheit prüfen?'
    },
    'swkn': {
        imgFile: 'ritter_schwerter.png',
        name: 'Ritter der Schwerter',
        suit: 'swords',
        keywords: 'Intellektueller Fokus · Entschlossenheit',
        description: 'Mit scharfem Verstand und klaren Worten für die Wahrheit kämpfen. Du preschst voran, um Probleme rational und kompromisslos zu lösen.',
        meaning_up: 'Du bist bereit für die mentale Auseinandersetzung. Wenn es gilt, ein Problem zu lösen oder für Gerechtigkeit zu kämpfen, fackelst du nicht lange. Du nutzt deine logischen Argumente wie eine Klinge – präzise, schnell und treffsicher. Achte darauf, dass du in deinem Drang nach Wahrheit und Fortschritt nicht zu ungeduldig oder verletzend auf deine Mitmenschen wirkst. Deine Entschlossenheit ist unaufhaltsam, wenn du deinen Kopf einschaltest.',
        meaning_rev: 'Wo musst du jetzt eine klare, unmissverständliche Wahrheit aussprechen, ohne dich von Gefühlen bremsen zu lassen?'
    },
    'swqu': {
        imgFile: 'koenigin_schwerter.png',
        name: 'Königin der Schwerter',
        suit: 'swords',
        keywords: 'Unabhängigkeit · Klarheit',
        description: 'Klare Grenzen setzen und Illusionen durchschneiden. Du bist scharfsinnig, objektiv und lässt dich von niemandem mehr blenden.',
        meaning_up: 'Du hast im Leben viel gelernt und dich durch schmerzhafte Erfahrungen zu einer unabhängigen, starken Persönlichkeit entwickelt. Du besitzt die Gabe der absoluten Objektivität: Du schaust hinter die Masken der Menschen und schneidest alte Verstrickungen mit logischem Verstand durch. Du stehst stolz für dich selbst ein und kommunizierst deine Grenzen unmissverständlich. Diese Karte erinnert dich an deine geistige Freiheit und deine Fähigkeit, dich selbst zu schützen.',
        meaning_rev: 'Wo ist es für dich an der Zeit, eine klare Grenze zu ziehen und dich von alten Mustern oder Einflüssen zu distanzieren, die dir nicht guttun?'
    },
    'swki': {
        imgFile: 'koenig_schwerter.png',
        name: 'König der Schwerter',
        suit: 'swords',
        keywords: 'Logik · Gerechtigkeit',
        description: 'Die höchste Instanz des Verstandes und der Fairness. Du triffst strategische Entscheidungen sachlich, unparteiisch und prinzipientreu.',
        meaning_up: 'Du blickst auf dein Leben wie ein weiser Richter oder Anwalt: analytisch, gerecht und distanziert von emotionalen Verwirrungen. Du besitzt die Fähigkeit, selbst komplexeste Situationen strategisch zu durchdringen und die richtige, faire Entscheidung zu treffen. Du stehst für moralische Integrität, Eloquenz und geistige Führungskraft. Verlasse dich jetzt ganz auf Fakten, Logik und deine klaren Prinzipien – sie führen dich sicher ans Ziel.',
        meaning_rev: 'Welche wichtige Entscheidung in deinem Leben verlangt jetzt nach absoluter Klarheit, Logik und vernünftigen Prinzipien statt nach Bauchgefühl?'
    },

    // MÜNZEN (Pentacles) – Element Erde
    'pepp': {
        imgFile: 'bube_muenzen.png',
        name: 'Bube der Münzen',
        suit: 'pentacles',
        keywords: 'Chance · Fundament',
        description: 'Ein konkretes, greifbares Angebot oder eine neue Gelegenheit zum Lernen. Du bist bereit, mit Geduld und Fleiß eine solide Basis aufzubauen.',
        meaning_up: 'Du stehst am Anfang eines Weges, der dir echte Stabilität bringen kann. Ob im Beruf, bei den Finanzen oder beim Erlernen einer neuen Fähigkeit: Du gehst die Dinge mit Realismus, Sorgfalt und gesunder Neugier an. Der Bube der Münzen schenkt dir die Ausdauer, die nötig ist, um aus einem kleinen Samen eine große Pflanze wachsen zu lassen. Nutze diese Phase, um Informationen zu sammeln, dich weiterzubilden und deine Zukunft auf ein sicheres Fundament zu stellen.',
        meaning_rev: 'Welche neue Fähigkeit oder welches praktische Projekt möchtest du jetzt mit Geduld von Grund auf erlernen?'
    },
    'pekn': {
        imgFile: 'ritter_muenzen.png',
        name: 'Ritter der Münzen',
        suit: 'pentacles',
        keywords: 'Ausdauer · Verlässlichkeit',
        description: 'Schritt für Schritt und ohne Eile ans Ziel kommen. Du bestichst durch Fleiß, Pflichtbewusstsein und die Sicherheit der Beständigkeit.',
        meaning_up: 'Du bist der Fels, auf den man sich blind verlassen kann. Du musst nicht rasen, um zu gewinnen; deine Stärke liegt in deiner unerschütterlichen Ausdauer und deiner Liebe zum Detail. Du erledigst deine Aufgaben gründlich, schätzt gesunde Routinen und verlierst nie den praktischen Nutzen aus den Augen. Auch wenn der Fortschritt manchmal langsam erscheint, weißt du ganz genau: Qualität braucht Zeit, und wahre Sicherheit entsteht durch Beständigkeit.',
        meaning_rev: 'Bei welcher Aufgabe zahlt es sich für dich gerade aus, einfach dranzubleiben und geduldig Schritt für Schritt weiterzugehen?'
    },
    'pequ': {
        imgFile: 'koenigin_muenzen.png',
        name: 'Königin der Münzen',
        suit: 'pentacles',
        keywords: 'Fülle · Fürsorge',
        description: 'Wohlbefinden auf allen Ebenen erschaffen. Du genießt die materiellen und natürlichen Freuden des Lebens und sorgst liebevoll für dich und dein Umfeld.',
        meaning_up: 'Du verkörperst die pure Erdung und die Fülle des Lebens. Du verstehst es, ein gemütliches Zuhause zu schaffen, klug mit deinen Ressourcen umzugehen und gleichzeitig großzügig zu sein. Deine Fürsorge gilt nicht nur deinen Projekten, sondern auch deinem eigenen Körper und der Natur. Du erinnerst dich daran, dass wahrer Reichtum darin liegt, gesund zu sein, die Früchte deiner Arbeit zu genießen und dich in deiner eigenen Haut rundum sicher und geborgen zu fühlen.',
        meaning_rev: 'Was kannst du heute tun, um deinem Körper etwas Gutes zu tun und dir selbst ein Gefühl von Geborgenheit und Fülle zu schenken?'
    },
    'peki': {
        imgFile: 'koenig_muenze.png',
        name: 'König der Münzen',
        suit: 'pentacles',
        keywords: 'Wohlstand · Meisterschaft',
        description: 'Wirtschaftlicher Erfolg und absolute Stabilität. Du hast dir durch harte Arbeit ein Imperium aufgebaut und genießt stolz deinen Status.',
        meaning_up: 'Du hast bewiesen, dass du Träume in greifbare Realität verwandeln kannst. Du stehst für geschäftlichen Erfolg, finanzielle Sicherheit und meisterhafte Zuverlässigkeit im Beruf. Du schützt und vermehrst das, was du dir aufgebaut hast, und bietest deinem Umfeld Schutz und Stabilität. Du bist pragmatisch, großzügig und genießt den Komfort, den dir dein Erfolg bringt. Nutze diese Energie, um deine langfristigen Erfolge zu sichern und dankbar darauf zu blicken.',
        meaning_rev: 'Worauf in deinem Leben, das du dir selbst durch Fleiß aufgebaut hast, kannst du heute mit Stolz blicken?'
    }
}


// ─────────────────────────────────────────────────────────────────────
// ZUSTAND DER APP
// (→ Cheatsheet 01: Variablen)
// ─────────────────────────────────────────────────────────────────────
let allCards = []       // Alle 16 Karten – wird von der API befüllt
let currentCard = null  // Die aktuell gezogene Karte
let revealTimeouts = [] // IDs aller laufenden Reveal-Timer (zum Abbrechen bei "Nochmal ziehen")


// ─────────────────────────────────────────────────────────────────────
// DOM-ELEMENTE LADEN
// (→ Cheatsheet 05: DOM — querySelector)
// ─────────────────────────────────────────────────────────────────────

// Die 5 Screens der App
const screenStart   = document.querySelector('#screen-start')
const screenShuffle = document.querySelector('#screen-shuffle')
const screenSelect  = document.querySelector('#screen-select')
const screenReady   = document.querySelector('#screen-ready')
const screenResult  = document.querySelector('#screen-result')

// Alle Screens in einem Array – für showScreen() nützlich
const allScreens = [screenStart, screenShuffle, screenSelect, screenReady, screenResult]

// Elemente auf Screen 3 und 5
const cardRow        = document.querySelector('#card-row')
const resultImgArea  = document.querySelector('#result-img-area')
const resultCardName = document.querySelector('#result-card-name')
const resultCardKw   = document.querySelector('#result-card-kw')
const resultKwTop    = document.querySelector('#result-kw-top')
const resultName     = document.querySelector('#result-name')
const resultDesc     = document.querySelector('#result-desc')

// Elemente im Modal
const modal      = document.querySelector('#modal')
const modalKw    = document.querySelector('#modal-kw')
const modalTitle = document.querySelector('#modal-title')
const modalUp    = document.querySelector('#modal-up')
const modalRev   = document.querySelector('#modal-rev')
const modalDesc  = document.querySelector('#modal-desc')


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: showScreen
// (→ Cheatsheet 05: DOM — classList)
// ─────────────────────────────────────────────────────────────────────
function showScreen(screen) {
    allScreens.forEach(function(s) {
        s.classList.remove('active')
    })
    screen.classList.add('active')
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: getRandomCards
// (→ Cheatsheet 09: Arrays — sort, slice)
// ─────────────────────────────────────────────────────────────────────
function getRandomCards() {
    const shuffled = [...allCards]
    shuffled.sort(function() {
        return Math.random() - 0.5
    })
    return shuffled.slice(0, 5)
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: renderCardSelection
// (→ Cheatsheet 05: DOM — createElement, appendChild)
// ─────────────────────────────────────────────────────────────────────
function renderCardSelection() {
    // getRandomCards() wählt 5 zufällige Karten aus allCards.
    const randomCards = getRandomCards()

    // innerHTML = '' löscht zuerst alle alten Karten aus dem #card-row-Container.
    cardRow.innerHTML = ''

    // selected verhindert, dass mehrere Karten gleichzeitig angeklickt werden können.
    let selected = false

    // Für jede der 5 Karten bauen wir eine einfache Struktur:
    //   <button class="selectable-card">
    //     <img src="img/deckblatt.png">   ← nur das Deckblatt, kein Flip hier
    //   </button>
    //
    // Das Kartenbild (Flip) wird ERST auf Screen 5 gezeigt.
    randomCards.forEach(function(card) {
        const button = document.createElement('button')
        button.classList.add('selectable-card')

        // Das Deckblatt-Bild als einziges Kind des Buttons
        const img = document.createElement('img')
        img.src = 'img/deckblatt.png'
        img.alt = ''
        img.setAttribute('aria-hidden', 'true')
        button.appendChild(img)

        button.addEventListener('click', function() {
            // Schon eine Karte angeklickt? → nichts tun
            if (selected) return
            selected = true

            // magicTransition() blendet einen Blur-Overlay ein.
            // Sobald der Übergang läuft, wird selectCard(card) aufgerufen.
            magicTransition(function() {
                selectCard(card)
            })
        })

        cardRow.appendChild(button)
    })
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: magicTransition
// Blendet den lila Blur-Overlay ein, ruft dann callback() auf
// (= Screenwechsel), und blendet den Overlay wieder aus.
// Das erzeugt den mystischen "Vorhang"-Effekt zwischen den Screens.
// ─────────────────────────────────────────────────────────────────────
function magicTransition(callback) {
    const overlay = document.getElementById('magic-overlay')

    // Overlay einblenden (CSS-Transition: 0.6s)
    overlay.classList.add('visible')

    // Nach 700ms ist der Blur vollständig → Screen wechseln
    setTimeout(function() {
        callback()
    }, 700)

    // Nach 800ms beginnt der Overlay wieder auszublenden
    setTimeout(function() {
        overlay.classList.remove('visible')
    }, 800)
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: selectCard
// (→ Cheatsheet 06: Events — setTimeout, requestAnimationFrame)
// Wird nach dem Overlay-Übergang aufgerufen.
// Bereitet Screen 5 vor, zeigt ihn, startet dann den Solo-Modus.
// requestAnimationFrame stellt sicher, dass der Browser den Screen
// erst rendert, bevor wir mit getBoundingClientRect() messen.
// ─────────────────────────────────────────────────────────────────────
function selectCard(card) {
    currentCard = card
    renderResult(card)       // Screen 5 befüllen (mit verdeckter Karte)
    showScreen(screenResult) // Screen 5 einblenden
    requestAnimationFrame(startSoloMode) // Karte zentrieren + Blur starten
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: renderResult
// (→ Cheatsheet 05: DOM — innerText, createElement)
//
// Bereitet Screen 5 vor: Texte befüllen, alles verstecken,
// Flip-Struktur aufbauen. Der Klick-Handler und die Zentrierung
// der Karte kommen in startSoloMode() (wird danach aufgerufen).
// ─────────────────────────────────────────────────────────────────────
function renderResult(card) {
    // Falls "Nochmal ziehen" gedrückt wird, Solo-Zustand zurücksetzen
    const resultCard = document.querySelector('.result-card')
    resultCard.style.transform  = ''
    resultCard.style.transition = ''
    resultCard.style.cursor     = ''
    document.getElementById('solo-overlay').classList.remove('visible')

    // Alle noch laufenden Reveal-Timer abbrechen.
    // Ohne das würden alte Timer später result-hidden entfernen,
    // obwohl wir gerade einen neuen Durchlauf starten.
    revealTimeouts.forEach(function(id) { clearTimeout(id) })
    revealTimeouts = []

    // Texte vorbefüllen (anfangs alle unsichtbar durch .result-hidden)
    resultKwTop.innerText    = card.keywords
    resultName.innerText     = card.name
    resultDesc.innerText     = card.description
    resultCardName.innerText = card.name
    resultCardKw.innerText   = card.keywords

    // Alle Text-Elemente verstecken – tauchen erst nach dem Flip gestaffelt auf.
    // Auch .result-eyebrow ("Für dich heute.") ist dabei.
    const textEls = [
        document.querySelector('.result-eyebrow'),
        resultKwTop,
        resultName,
        resultDesc,
        resultCardName,
        resultCardKw,
        document.querySelector('.result-card-footer'),
        document.querySelector('.result-card-diamond'),
        document.querySelector('.result-actions')
    ]
    // transition: none → Elemente SOFORT auf opacity 0 setzen, kein langsames Ausblenden.
    // Ohne das würden Texte beim zweiten Durchlauf kurz durchscheinen
    // (Fade-out trifft auf Fade-in des Screens).
    textEls.forEach(function(el) {
        if (!el) return
        el.style.transition = 'none'
        el.classList.add('result-hidden')
    })
    // Nach einem Browser-Frame: Transitions wieder aktivieren (für den gestaffelten Reveal)
    requestAnimationFrame(function() {
        textEls.forEach(function(el) {
            if (el) el.style.transition = ''
        })
    })

    // Bildbereich: Flip-Struktur aufbauen
    //
    //   <div class="result-flip-inner">        ← das dreht sich
    //     <div class="result-face-back">        ← Seite 1: Deckblatt (sichtbar)
    //       <img src="img/deckblatt.png">
    //       <span class="flip-hint">…</span>
    //     </div>
    //     <div class="result-face-front">       ← Seite 2: Kartenbild (erst nach Flip)
    //       <img src="img/bube_staebe.png">
    //     </div>
    //   </div>
    resultImgArea.innerHTML = ''
    resultImgArea.removeAttribute('style')

    const flipInner = document.createElement('div')
    flipInner.classList.add('result-flip-inner')

    // Deckblatt-Seite
    const faceBack = document.createElement('div')
    faceBack.classList.add('result-face-back')

    const backImg = document.createElement('img')
    backImg.src = 'img/deckblatt.png'
    backImg.alt = ''
    backImg.setAttribute('aria-hidden', 'true')
    faceBack.appendChild(backImg)

    const hint = document.createElement('span')
    hint.classList.add('flip-hint')
    hint.innerText = 'Klicke zum Aufdecken'
    faceBack.appendChild(hint)

    // Kartenbild-Seite (erst nach dem Flip sichtbar)
    const faceFront = document.createElement('div')
    faceFront.classList.add('result-face-front')

    const frontImg = document.createElement('img')
    frontImg.alt = card.name
    frontImg.src = card.imagePath

    // Falls das Bild nicht geladen werden kann → farbiger Fallback
    frontImg.addEventListener('error', function() {
        frontImg.remove()
        faceFront.style.background     = getSuitColor(card.suit)
        faceFront.style.display        = 'flex'
        faceFront.style.alignItems     = 'center'
        faceFront.style.justifyContent = 'center'
        faceFront.style.fontSize       = '4rem'
        faceFront.style.color          = 'rgba(255,255,255,0.75)'
        faceFront.innerText            = card.name.charAt(0)
    })
    faceFront.appendChild(frontImg)

    flipInner.appendChild(faceBack)
    flipInner.appendChild(faceFront)
    resultImgArea.appendChild(flipInner)
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: startSoloMode
//
// Wird aufgerufen NACHDEM Screen 5 sichtbar ist.
// 1. Hintergrund-Blur einblenden (solo-overlay)
// 2. Karte in die Bildschirmmitte verschieben (getBoundingClientRect
//    misst die aktuelle Position, transform verschiebt sie dorthin)
// 3. Klick-Handler: Flip auslösen + danach endSoloMode() aufrufen
// ─────────────────────────────────────────────────────────────────────
function startSoloMode() {
    const resultCard = document.querySelector('.result-card')
    const soloOverlay = document.getElementById('solo-overlay')

    // Hintergrund-Blur einblenden
    soloOverlay.classList.add('visible')

    // Karte zentrieren: aktuelle Position messen und Versatz berechnen
    const rect    = resultCard.getBoundingClientRect()
    const deltaX  = (window.innerWidth  / 2) - (rect.left + rect.width  / 2)
    const deltaY  = (window.innerHeight / 2) - (rect.top  + rect.height / 2)
    const scale   = 1.2  // Karte leicht vergrössern

    // Sofortige Positionierung (ohne Animation)
    resultCard.style.transition = 'none'
    resultCard.style.transform  = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`
    resultCard.style.cursor     = 'pointer'

    // Nach zwei Browser-Frames: CSS-Transition reaktivieren (für den "Flug" zurück).
    // Zwei Frames nötig, damit der Browser die obige sofortige Position erst rendert,
    // bevor die Transition wieder eingeschaltet wird.
    requestAnimationFrame(function() {
        requestAnimationFrame(function() {
            resultCard.style.transition = ''
        })
    })

    // Klick auf die Karte = Flip (nur einmal auslösbar)
    function onCardFlip() {
        resultCard.removeEventListener('click', onCardFlip)
        resultCard.style.cursor = 'default'

        // Karte umdrehen (CSS-Transition 0.8s)
        document.querySelector('.result-flip-inner').classList.add('flipped')

        // 1800ms Pause nach dem Flip, dann zur linken Seite fliegen
        setTimeout(function() {
            endSoloMode(resultCard, soloOverlay)
        }, 1800)
    }

    resultCard.addEventListener('click', onCardFlip)
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: endSoloMode
//
// Beendet den Solo-Modus:
// 1. transform entfernen → CSS-Transition lässt die Karte zur
//    Grid-Position "fliegen" (0.9s)
// 2. Hintergrund-Blur ausblenden
// 3. Nach Abschluss des Flugs: Texte gestaffelt einblenden
// ─────────────────────────────────────────────────────────────────────
function endSoloMode(resultCard, soloOverlay) {
    // transform = '' entfernt den inline-Style → die Karte springt zurück
    // auf ihre natürliche Grid-Position, die CSS-Transition animiert den Weg
    resultCard.style.transform = ''

    // Hintergrund-Blur gleichzeitig ausblenden
    soloOverlay.classList.remove('visible')

    // 950ms warten (≈ Dauer der Fly-Transition 0.9s), dann Texte einblenden
    // Timer-ID speichern, damit er bei "Nochmal ziehen" abgebrochen werden kann
    revealTimeouts.push(setTimeout(revealResultTexts, 950))
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: revealResultTexts
// Entfernt .result-hidden von jedem Element mit 160ms Abstand.
// Wird von endSoloMode() aufgerufen, sobald die Fly-Animation fertig ist.
// Die CSS-Transitions auf den Elementen übernehmen das sanfte Einblenden.
// ─────────────────────────────────────────────────────────────────────
function revealResultTexts() {
    // Reihenfolge: Eyebrow zuerst, dann Karten-Footer, dann rechte Spalte
    const order = [
        document.querySelector('.result-eyebrow'),
        document.querySelector('.result-card-footer'),
        document.querySelector('.result-card-diamond'),
        resultCardName,
        resultCardKw,
        resultKwTop,
        resultName,
        resultDesc,
        document.querySelector('.result-actions')
    ]

    order.forEach(function(el, index) {
        if (!el) return
        // Timer-ID speichern → kann bei "Nochmal ziehen" abgebrochen werden
        const tid = setTimeout(function() {
            el.classList.remove('result-hidden')
        }, index * 160)  // gestaffelt: jedes Element 160ms nach dem vorherigen
        revealTimeouts.push(tid)
    })
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: getSuitColor
// (→ Cheatsheet 04: Bedingungen — if/else)
// ─────────────────────────────────────────────────────────────────────
function getSuitColor(suit) {
    if (suit === 'wands') {
        return '#d4845e'
    } else if (suit === 'cups') {
        return '#5e9ad4'
    } else if (suit === 'swords') {
        return '#7ab5c8'
    } else if (suit === 'pentacles') {
        return '#6aaa7c'
    } else {
        return '#b8a9d4'
    }
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: startShuffle
// (→ Cheatsheet 06: Events — setTimeout)
// ─────────────────────────────────────────────────────────────────────
function startShuffle() {
    showScreen(screenShuffle)
    renderCardSelection()

    setTimeout(function() {
        showScreen(screenSelect)
    }, 2000)
}


// ────────────────────────────────────────────────────────────────────
// FUNKTION: openModal
// (→ Cheatsheet 05: DOM — innerText, classList)
// ─────────────────────────────────────────────────────────────────────
function openModal() {
    if (currentCard === null) {
        return
    }

    modalKw.innerText    = currentCard.keywords
    modalTitle.innerText = currentCard.name
    modalUp.innerText    = currentCard.meaning_up
    modalRev.innerText   = currentCard.meaning_rev
    modalDesc.innerText  = currentCard.description

    modal.classList.remove('hidden')
}


// ─────────────────────────────────────────────────────────────────────
// FUNKTION: closeModal
// ─────────────────────────────────────────────────────────────────────
function closeModal() {
    modal.classList.add('hidden')
}


// ─────────────────────────────────────────────────────────────────────
// EVENT LISTENERS
// (→ Cheatsheet 06: Events — addEventListener)
//
// Diese werden sofort eingebunden, bevor die API geladen wird.
// So funktionieren die Buttons von Anfang an.
// ─────────────────────────────────────────────────────────────────────
document.querySelector('#btn-shuffle').addEventListener('click', function() {
    startShuffle()
})

document.querySelector('#btn-again').addEventListener('click', function() {
    startShuffle()
})

document.querySelector('#btn-more').addEventListener('click', function() {
    openModal()
})

document.querySelector('#modal-close').addEventListener('click', function() {
    closeModal()
})

document.querySelector('#modal-backdrop').addEventListener('click', function() {
    closeModal()
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal()
    }
})


// ─────────────────────────────────────────────────────────────────────
// API-DATEN LADEN
// (→ Cheatsheet 13: API — async/await in einer Funktion)
//
// loadData() lädt die Karten von der API.
// init() ruft sie auf und baut danach allCards auf.
// init() wird als async function deklariert, damit await darin funktioniert.
// ─────────────────────────────────────────────────────────────────────
async function loadData() {
    const url = 'https://tarotapi.dev/api/v1/cards/courts'
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.error(error)
        return false
    }
}

const allShortcodes = [
    'wapp', 'wakn', 'waqu', 'waki',
    'cupp', 'cukn', 'cuqu', 'cuki',
    'swpp', 'swkn', 'swqu', 'swki',
    'pepp', 'pekn', 'pequ', 'peki'
]

async function init() {
    // loadData() holt die Karten von der API (async = wartet auf die Antwort).
    // Falls die API antwortet, enthält 'data' ein Objekt mit data.cards[].
    // Falls die API nicht erreichbar ist, gibt loadData() false zurück.
    const data = await loadData()
    console.log(data)

    if (data !== false) {
        // ✅ API hat geantwortet → Karten aus API mit deutschen Texten kombinieren
        data.cards.forEach(function(apiCard) {
            // apiCard.name_short ist das Kürzel der API, z.B. 'wapp'.
            // Damit suchen wir in unserem germanCards-Objekt nach dem passenden Eintrag.
            const german = germanCards[apiCard.name_short]

            // Sicherheitscheck: Falls die API eine Karte liefert, die nicht in
            // unserem germanCards-Objekt steht, überspringen wir sie.
            if (!german) {
                console.warn('Unbekannte Karte übersprungen:', apiCard.name_short)
                return
            }

            // Aus API-Daten und deutschen Texten bauen wir ein einziges Karten-Objekt.
            const card = {
                name_short: apiCard.name_short,
                suit: apiCard.suit,           // Element (wands, cups, swords, pentacles)
                name: german.name,            // Deutscher Name, z.B. "Bube der Stäbe"
                keywords: german.keywords,    // Kurzschlagwörter, z.B. "Energie · Abenteuer"
                description: german.description,
                meaning_up: german.meaning_up,
                meaning_rev: german.meaning_rev,
                imagePath: 'img/' + german.imgFile  // Pfad zur PNG-Datei im img-Ordner
            }

            allCards.push(card)
        })
        console.log('✓ ' + allCards.length + ' Karten von der API geladen.')
    }

    // Fallback: Wenn die API nicht erreichbar war ODER keine bekannten Karten
    // geliefert hat, befüllen wir allCards direkt aus unserem lokalen germanCards-Objekt.
    if (allCards.length === 0) {
        allShortcodes.forEach(function(shortcode) {
            const german = germanCards[shortcode]

            const card = {
                name_short: shortcode,
                suit: german.suit,
                name: german.name,
                keywords: german.keywords,
                description: german.description,
                meaning_up: german.meaning_up,
                meaning_rev: german.meaning_rev,
                imagePath: 'img/' + german.imgFile
            }

            allCards.push(card)
        })
        console.log('⚠️ Lokale Kartendaten werden verwendet (' + allCards.length + ' Karten).')
    }
}

// Start-Screen sofort anzeigen
showScreen(screenStart)

// Karten im Hintergrund laden (API-Aufruf)
init()