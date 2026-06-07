// TAROT APP — script.js
// Cheatsheets: 01 Variablen · 02 Typen · 03 Funktionen · 04 Bedingungen
//              05 DOM · 06 Events · 09 Arrays · 11 Objekte · 13 API


// ─── KARTENDATEN (→ Cheatsheet 11: Objekte) ──────────────────────────
const germanCards = {
    // STÄBE
    'wapp': { imgFile: 'bube_staebe.webp', name: 'Bube der Stäbe', suit: 'wands', keywords: 'Entdeckergeist · Inspiration', description: 'Ein plötzlicher Funke voller Begeisterung. Es ist der Moment, in dem eine neue Idee dein Herz höherschlagen lässt und du die Lust spürst, ein neues Abenteuer zu wagen.', meaning_up: 'Du trägst ein inneres Feuer in dir, das nur darauf wartet, sich in einem neuen Projekt oder Hobby zu entfalten. Der Bube der Stäbe bringt dir frische, dynamische Energie und oft auch spannende Nachrichten oder Chancen von außen. Du bist bereit, die Welt mit neugierigen Augen zu sehen und dich von deiner Leidenschaft anstecken zu lassen. Lass dich nicht von Zweifeln bremsen – dieser Moment gehört deiner Spontaneität und deinem Mut, etwas völlig Neues auszuprobieren.', meaning_rev: 'Welche neue Idee oder welcher Impuls lässt dein Herz gerade höherschlagen – und wie kannst du diesem Funken heute nachgehen?' },
    'wakn': { imgFile: 'ritter_staebe.webp', name: 'Ritter der Stäbe', suit: 'wands', keywords: 'Tatendrang · Leidenschaft', description: 'Mit unbändiger Energie und Mut voranpreschen. Du fackelst nicht lange, sondern brennst für deine Ziele und reißt andere mit deinem Elan mit.', meaning_up: 'Wenn du dir etwas in den Kopf gesetzt hast, hält dich so schnell nichts mehr auf. Du steckst voller Tatendrang und bist bereit, Risiken einzugehen, um deine Träume Wirklichkeit werden zu lassen. Manchmal neigst du vielleicht dazu, etwas unüberlegt zu handeln oder ungeduldig zu werden, aber deine Begeisterung ist deine größte Superkraft. Es ist an der Zeit, die Ärmel hochzukrempeln, auf deine eigene Stärke zu vertrauen und die Komfortzone entschlossen zu verlassen.', meaning_rev: 'Wo solltest du jetzt mit vollem Elan und ohne langes Zögern mutig voranschreiten?' },
    'waqu': { imgFile: 'koenigin_staebe.webp', name: 'Königin der Stäbe', suit: 'wands', keywords: 'Selbstbewusstsein · Charisma', description: 'Deine eigene Kraft stolz nach außen tragen. Du strahlst Lebensfreude, Unabhängigkeit und Wärme aus, die deine Mitmenschen magisch anzieht.', meaning_up: 'Du weißt genau, wer du bist, was du willst und was du wert bist. Du gehst aufrecht durchs Leben und übernehmst ganz selbstverständlich die Führung in deinem eigenen Reich. Deine Energie ist magnetisch, optimistisch und mutig. Du lässt dich nicht von den Meinungen anderer einschränken, sondern feierst deine Einzigartigkeit. Diese Karte erinnert dich daran, dass du das Recht hast, gesehen zu werden und deinen Raum voll und ganz einzunehmen.', meaning_rev: 'In welchem Bereich deines Lebens darfst du heute absolut selbstbewusst und stolz deine eigene Kraft zeigen?' },
    'waki': { imgFile: 'Koenig_staebe.webp', name: 'König der Stäbe', suit: 'wands', keywords: 'Vision · Führungsqualität', description: 'Große Ziele mit Weitblick und Autorität meistern. Du bist der Schöpfer deiner eigenen Zukunft und inspirierst andere durch dein Handeln.', meaning_up: 'Du bist ein geborener Visionär und Anführer. Du besitzt nicht nur das leidenschaftliche Feuer für eine Idee, sondern auch die Disziplin und den Weitblick, um sie langfristig zum Erfolg zu führen. Wenn Herausforderungen auftauchen, nimmst du die Fäden fest in die Hand. Deine Autorität basiert nicht auf Druck, sondern auf Inspiration und Aufrichtigkeit. Du hast die Kraft, Großes zu bewegen – vertraue deiner Fähigkeit, langfristig zu planen und zu siegen.', meaning_rev: 'Welches langfristige Ziel erfordert jetzt deine volle Entschlossenheit und deine Fähigkeit, die Fäden in die Hand zu nehmen?' },
    // KELCHE
    'cupp': { imgFile: 'bube_kelche.webp', name: 'Bube der Kelche', suit: 'cups', keywords: 'Emotionale Offenheit · Sensibilität', description: 'Eine liebevolle Geste oder eine kreative Eingebung, die dein Herz berührt. Du erlaubst dir, wieder verletzlich, verträumt und empfindsam zu sein.', meaning_up: 'Du öffnest dein Herz für die leisen, schönen Zwischentöne des Lebens. Der Bube der Kelche bringt dir oft eine versöhnliche Botschaft, eine kreative Idee oder eine unerwartete, liebevolle Geste eines Mitmenschen. Er erinnert dich daran, wie wichtig es ist, deinen Gefühlen Raum zu geben und weich zu werden. Lass deine Intuition und deine Fantasie fließen – es ist ein Moment der Heilung und des emotionalen Neubeginns, in dem du Wunder zulassen darfst.', meaning_rev: 'Welche emotionale Botschaft oder welcher kreative Impuls möchte gerade von dir wahrgenommen und angenommen werden?' },
    'cukn': { imgFile: 'ritter_kelche.webp', name: 'Ritter der Kelche', suit: 'cups', keywords: 'Herzensweg · Romantik', description: 'Deinen Träumen und Sehnsüchten voller Liebe folgen. Du suchst nach tiefer, echter Verbundenheit und schenkst deinen Mitmenschen Harmonie.', meaning_up: 'Du bist ein Botschafter der Liebe und der Harmonie. Du triffst Entscheidungen nicht nur mit dem Kopf, sondern folgst dem Ruf deines Herzens. Du sehnst dich nach Ästhetik, tiefen Gesprächen und echten emotionalen Verbindungen. Der Ritter lädt dich ein, dich auf Angebote einzulassen, Frieden zu stiften oder dich voll und ganz einer kreativen oder romantischen Sehnsucht hinzugeben. Geh los für das, was deine Seele berührt.', meaning_rev: 'Welchem schönen Traum oder welchem Herzenswunsch solltest du jetzt erlauben, dich zu leiten?' },
    'cuqu': { imgFile: 'koenigin_kelche.webp', name: 'Königin der Kelche', suit: 'cups', keywords: 'Empathie · Intuition', description: 'Tiefe emotionale Weisheit und Mitgefühl. Du spürst, was andere brauchen, und bist ein sicherer Hafen voller Geborgenheit und seelischer Heilung.', meaning_up: 'Deine Fähigkeit zu fühlen und dich in andere hineinzuversetzen, ist grenzenlos. Du besitzt eine ausgeprägte Intuition und verstehst die emotionalen Strömungen um dich herum, ohne dich darin zu verlieren. Du bist die Karte des tiefen Mitgefühls und der seelischen Fürsorge. Diese Energie erinnert dich daran, auf deine Träume und dein Bauchgefühl zu hören. Indem du dir selbst und anderen mit Sanftheit begegnest, bringst du Licht ins Dunkel.', meaning_rev: 'Wie kannst du dir selbst oder einem geliebten Menschen heute mit tieferem Verständnis und Mitgefühl begegnen?' },
    'cuki': { imgFile: 'koenig_kelche.webp', name: 'König der Kelche', suit: 'cups', keywords: 'Emotionale Reife · Souveränität', description: 'Ein Fels in der Brandung, wenn die emotionalen Wellen hochschlagen. Du bewahrst in emotionalen Situationen einen klaren Kopf. Andere vertrauen dir.', meaning_up: 'Du bist der Meister deiner eigenen Gefühlswelt. Selbst wenn um dich herum das Chaos ausbricht oder die Emotionen hochkochen, verlierst du nicht den Boden unter den Füßen. Du hast gelernt, tief zu fühlen, ohne dich von den Stürmen des Lebens mitreißen zu lassen. Das macht dich zu einem sicheren Hafen für die Menschen in deinem Umfeld – sie spüren deine ehrliche Empathie und schätzen deinen weisen, unaufgeregten Rat. Deine Stärke liegt darin, Herz und Verstand perfekt in Balance zu halten.', meaning_rev: 'In welcher aktuellen Situation hilft es dir am meisten, einen kühlen Kopf zu bewahren, ohne dabei dein Herz zu verschließen?' },
    // SCHWERTER
    'swpp': { imgFile: 'bube_schwerter.webp', name: 'Bube der Schwerter', suit: 'swords', keywords: 'Wachsamkeit · Scharfsinn', description: 'Die Dinge kritisch hinterfragen und Wahrheiten aufdecken. Du nutzt deinen Verstand, um Situationen ganz sachlich und ohne Illusionen zu analysieren.', meaning_up: 'Du lässt dich nicht so leicht an der Nase herumführen. Dein Verstand ist hellwach, neugierig und bereit, Unklarheiten aufzudecken. Manchmal bringt der Bube der Schwerter auch konstruktive Kritik, einen Konflikt oder eine intellektuelle Herausforderung mit sich. Er fordert dich auf, den Dingen auf den Grund zu gehen, wachsam zu sein und eine Situation ganz nüchtern zu betrachten, bevor du handelst. Lass dich nicht von Emotionen blenden – die Wahrheit ist dein Kompass.', meaning_rev: 'Welche Situation in deinem Leben solltest du gerade ganz nüchtern, logisch und ohne emotionale Voreingenommenheit prüfen?' },
    'swkn': { imgFile: 'ritter_schwerter.webp', name: 'Ritter der Schwerter', suit: 'swords', keywords: 'Intellektueller Fokus · Entschlossenheit', description: 'Mit scharfem Verstand und klaren Worten für die Wahrheit kämpfen. Du preschst voran, um Probleme rational und kompromisslos zu lösen.', meaning_up: 'Du bist bereit für die mentale Auseinandersetzung. Wenn es gilt, ein Problem zu lösen oder für Gerechtigkeit zu kämpfen, fackelst du nicht lange. Du nutzt deine logischen Argumente wie eine Klinge – präzise, schnell und treffsicher. Achte darauf, dass du in deinem Drang nach Wahrheit und Fortschritt nicht zu ungeduldig oder verletzend auf deine Mitmenschen wirkst. Deine Entschlossenheit ist unaufhaltsam, wenn du deinen Kopf einschaltest.', meaning_rev: 'Wo musst du jetzt eine klare, unmissverständliche Wahrheit aussprechen, ohne dich von Gefühlen bremsen zu lassen?' },
    'swqu': { imgFile: 'koenigin_schwerter.webp', name: 'Königin der Schwerter', suit: 'swords', keywords: 'Unabhängigkeit · Klarheit', description: 'Klare Grenzen setzen und Illusionen durchschneiden. Du bist scharfsinnig, objektiv und lässt dich von niemandem mehr blenden.', meaning_up: 'Du hast im Leben viel gelernt und dich durch schmerzhafte Erfahrungen zu einer unabhängigen, starken Persönlichkeit entwickelt. Du besitzt die Gabe der absoluten Objektivität: Du schaust hinter die Masken der Menschen und schneidest alte Verstrickungen mit logischem Verstand durch. Du stehst stolz für dich selbst ein und kommunizierst deine Grenzen unmissverständlich. Diese Karte erinnert dich an deine geistige Freiheit und deine Fähigkeit, dich selbst zu schützen.', meaning_rev: 'Wo ist es für dich an der Zeit, eine klare Grenze zu ziehen und dich von alten Mustern oder Einflüssen zu distanzieren, die dir nicht guttun?' },
    'swki': { imgFile: 'koenig_schwerter.webp', name: 'König der Schwerter', suit: 'swords', keywords: 'Logik · Gerechtigkeit', description: 'Die höchste Instanz des Verstandes und der Fairness. Du triffst strategische Entscheidungen sachlich, unparteiisch und prinzipientreu.', meaning_up: 'Du blickst auf dein Leben wie ein weiser Richter oder Anwalt: analytisch, gerecht und distanziert von emotionalen Verwirrungen. Du besitzt die Fähigkeit, selbst komplexeste Situationen strategisch zu durchdringen und die richtige, faire Entscheidung zu treffen. Du stehst für moralische Integrität, Eloquenz und geistige Führungskraft. Verlasse dich jetzt ganz auf Fakten, Logik und deine klaren Prinzipien – sie führen dich sicher ans Ziel.', meaning_rev: 'Welche wichtige Entscheidung in deinem Leben verlangt jetzt nach absoluter Klarheit, Logik und vernünftigen Prinzipien statt nach Bauchgefühl?' },
    // MÜNZEN
    'pepp': { imgFile: 'bube_muenzen.webp', name: 'Bube der Münzen', suit: 'pentacles', keywords: 'Chance · Fundament', description: 'Ein konkretes, greifbares Angebot oder eine neue Gelegenheit zum Lernen. Du bist bereit, mit Geduld und Fleiß eine solide Basis aufzubauen.', meaning_up: 'Du stehst am Anfang eines Weges, der dir echte Stabilität bringen kann. Ob im Beruf, bei den Finanzen oder beim Erlernen einer neuen Fähigkeit: Du gehst die Dinge mit Realismus, Sorgfalt und gesunder Neugier an. Der Bube der Münzen schenkt dir die Ausdauer, die nötig ist, um aus einem kleinen Samen eine große Pflanze wachsen zu lassen. Nutze diese Phase, um Informationen zu sammeln, dich weiterzubilden und deine Zukunft auf ein sicheres Fundament zu stellen.', meaning_rev: 'Welche neue Fähigkeit oder welches praktische Projekt möchtest du jetzt mit Geduld von Grund auf erlernen?' },
    'pekn': { imgFile: 'ritter_muenzen.webp', name: 'Ritter der Münzen', suit: 'pentacles', keywords: 'Ausdauer · Verlässlichkeit', description: 'Schritt für Schritt und ohne Eile ans Ziel kommen. Du bestichst durch Fleiß, Pflichtbewusstsein und die Sicherheit der Beständigkeit.', meaning_up: 'Du bist der Fels, auf den man sich blind verlassen kann. Du musst nicht rasen, um zu gewinnen; deine Stärke liegt in deiner unerschütterlichen Ausdauer und deiner Liebe zum Detail. Du erledigst deine Aufgaben gründlich, schätzt gesunde Routinen und verlierst nie den praktischen Nutzen aus den Augen. Auch wenn der Fortschritt manchmal langsam erscheint, weißt du ganz genau: Qualität braucht Zeit, und wahre Sicherheit entsteht durch Beständigkeit.', meaning_rev: 'Bei welcher Aufgabe zahlt es sich für dich gerade aus, einfach dranzubleiben und geduldig Schritt für Schritt weiterzugehen?' },
    'pequ': { imgFile: 'koenigin_muenzen.webp', name: 'Königin der Münzen', suit: 'pentacles', keywords: 'Fülle · Fürsorge', description: 'Wohlbefinden auf allen Ebenen erschaffen. Du genießt die materiellen und natürlichen Freuden des Lebens und sorgst liebevoll für dich und dein Umfeld.', meaning_up: 'Du verkörperst die pure Erdung und die Fülle des Lebens. Du verstehst es, ein gemütliches Zuhause zu schaffen, klug mit deinen Ressourcen umzugehen und gleichzeitig großzügig zu sein. Deine Fürsorge gilt nicht nur deinen Projekten, sondern auch deinem eigenen Körper und der Natur. Du erinnerst dich daran, dass wahrer Reichtum darin liegt, gesund zu sein, die Früchte deiner Arbeit zu genießen und dich in deiner eigenen Haut rundum sicher und geborgen zu fühlen.', meaning_rev: 'Was kannst du heute tun, um deinem Körper etwas Gutes zu tun und dir selbst ein Gefühl von Geborgenheit und Fülle zu schenken?' },
    'peki': { imgFile: 'koenig_muenze.webp', name: 'König der Münzen', suit: 'pentacles', keywords: 'Wohlstand · Meisterschaft', description: 'Wirtschaftlicher Erfolg und absolute Stabilität. Du hast dir durch harte Arbeit ein Imperium aufgebaut und genießt stolz deinen Status.', meaning_up: 'Du hast bewiesen, dass du Träume in greifbare Realität verwandeln kannst. Du stehst für geschäftlichen Erfolg, finanzielle Sicherheit und meisterhafte Zuverlässigkeit im Beruf. Du schützt und vermehrst das, was du dir aufgebaut hast, und bietest deinem Umfeld Schutz und Stabilität. Du bist pragmatisch, großzügig und genießt den Komfort, den dir dein Erfolg bringt. Nutze diese Energie, um deine langfristigen Erfolge zu sichern und dankbar darauf zu blicken.', meaning_rev: 'Worauf in deinem Leben, das du dir selbst durch Fleiß aufgebaut hast, kannst du heute mit Stolz blicken?' }
}


// ─── ZUSTAND (→ Cheatsheet 01) ───────────────────────────────────────
let allCards      = []
let currentCard   = null
let revealTimeouts = []


// ─── DOM-ELEMENTE (→ Cheatsheet 05) ─────────────────────────────────
const screenStart   = document.querySelector('#screen-start')
const screenShuffle = document.querySelector('#screen-shuffle')
const screenSelect  = document.querySelector('#screen-select')
const screenReady   = document.querySelector('#screen-ready')
const screenResult  = document.querySelector('#screen-result')
const allScreens    = [screenStart, screenShuffle, screenSelect, screenReady, screenResult]

const cardRow        = document.querySelector('#card-row')
const resultImgArea  = document.querySelector('#result-img-area')
const resultCardName = document.querySelector('#result-card-name')
const resultCardKw   = document.querySelector('#result-card-kw')
const resultKwTop    = document.querySelector('#result-kw-top')
const resultName     = document.querySelector('#result-name')
const resultDesc     = document.querySelector('#result-desc')

const modal      = document.querySelector('#modal')
const modalKw    = document.querySelector('#modal-kw')
const modalTitle = document.querySelector('#modal-title')
const modalUp    = document.querySelector('#modal-up')
const modalRev   = document.querySelector('#modal-rev')
const modalDesc  = document.querySelector('#modal-desc')


// ─── SCREEN WECHSELN (→ Cheatsheet 05: classList) ───────────────────
// .screen--in löst die CSS-Einblende-Animation aus.
// void offsetWidth erzwingt einen Reflow → Animation startet neu,
// auch wenn der Screen kurz davor schon aktiv war.
function showScreen(screen) {
    allScreens.forEach(function(s) {
        s.classList.remove('active', 'screen--in')
    })
    screen.classList.add('active')
    void screen.offsetWidth
    screen.classList.add('screen--in')
}


// ─── 5 ZUFÄLLIGE KARTEN WÄHLEN (→ Cheatsheet 09: Arrays) ───────────
function getRandomCards() {
    const shuffled = [...allCards].sort(function() { return Math.random() - 0.5 })
    return shuffled.slice(0, 5)
}


// ─── KARTENAUSWAHL AUFBAUEN (→ Cheatsheet 05: createElement) ────────
function renderCardSelection() {
    cardRow.innerHTML = ''
    let selected = false

    getRandomCards().forEach(function(card) {
        const button = document.createElement('button')
        button.classList.add('selectable-card')

        const img = document.createElement('img')
        img.src = 'img/deckblatt.webp'
        img.alt = ''
        img.setAttribute('aria-hidden', 'true')
        button.appendChild(img)

        button.addEventListener('click', function() {
            if (selected) return
            selected = true
            magicTransition(function() { showReadyScreen(card) })
        })

        cardRow.appendChild(button)
    })
}


// ─── BLUR-ÜBERGANG ZWISCHEN SCREENS ─────────────────────────────────
function magicTransition(callback) {
    const overlay = document.getElementById('magic-overlay')
    overlay.classList.add('visible')
    setTimeout(function() { callback() }, 380)
    setTimeout(function() { overlay.classList.remove('visible') }, 430)
}


// ─── SCREEN 4: LOTTIE LADESCREEN (→ Cheatsheet 06: setTimeout) ──────
// Lottie muss manuell per .stop()/.play() gestartet werden,
// da autoplay nicht greift wenn der Screen beim Laden versteckt ist.
function showReadyScreen(card) {
    showScreen(screenReady)

    const lottie = document.getElementById('eye-lottie')
    lottie.stop()
    lottie.play()

    const readyTitle = document.getElementById('ready-title')
    readyTitle.classList.remove('ready-text--visible')

    setTimeout(function() { readyTitle.classList.add('ready-text--visible') }, 1500)
    setTimeout(function() { selectCard(card) }, 3500)
}


// ─── KARTE AUSWÄHLEN → SCREEN 5 ─────────────────────────────────────
function selectCard(card) {
    currentCard = card
    renderResult(card)
    showScreen(screenResult)
    requestAnimationFrame(startSoloMode)
}


// ─── SCREEN 5 AUFBAUEN (→ Cheatsheet 05: DOM) ───────────────────────
function renderResult(card) {
    const resultCard = document.querySelector('.result-card')
    resultCard.style.transform  = ''
    resultCard.style.transition = ''
    resultCard.style.cursor     = ''
    document.getElementById('solo-overlay').classList.remove('visible')

    revealTimeouts.forEach(function(id) { clearTimeout(id) })
    revealTimeouts = []

    resultKwTop.innerText    = card.keywords
    resultName.innerText     = card.name
    resultDesc.innerText     = card.description
    resultCardName.innerText = card.name
    resultCardKw.innerText   = card.keywords

    const textEls = [
        document.querySelector('.result-eyebrow'), resultKwTop, resultName,
        resultDesc, resultCardName, resultCardKw,
        document.querySelector('.result-card-footer'),
        document.querySelector('.result-card-diamond'),
        document.querySelector('.result-actions')
    ]
    textEls.forEach(function(el) {
        if (!el) return
        el.style.transition = 'none'
        el.classList.add('result-hidden')
    })
    requestAnimationFrame(function() {
        textEls.forEach(function(el) { if (el) el.style.transition = '' })
    })

    // Flip-Struktur: Deckblatt + Kartenbild
    resultImgArea.innerHTML = ''
    resultImgArea.removeAttribute('style')

    const flipInner = document.createElement('div')
    flipInner.classList.add('result-flip-inner')

    const faceBack = document.createElement('div')
    faceBack.classList.add('result-face-back')
    const backImg = document.createElement('img')
    backImg.src = 'img/deckblatt.webp'
    backImg.alt = ''
    backImg.setAttribute('aria-hidden', 'true')
    faceBack.appendChild(backImg)

    const faceFront = document.createElement('div')
    faceFront.classList.add('result-face-front')
    const frontImg = document.createElement('img')
    frontImg.alt = card.name
    frontImg.src = card.imagePath
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

    const footerHint = document.createElement('p')
    footerHint.classList.add('flip-hint-footer')
    footerHint.innerText = 'Klicke zum Aufdecken'
    resultCard.appendChild(footerHint)
}


// ─── SOLO-MODUS: KARTE ZENTRIEREN + KLICK-FLIP ──────────────────────
function startSoloMode() {
    const resultCard  = document.querySelector('.result-card')
    const soloOverlay = document.getElementById('solo-overlay')
    soloOverlay.classList.add('visible')

    const rect   = resultCard.getBoundingClientRect()
    const deltaX = (window.innerWidth  / 2) - (rect.left + rect.width  / 2)
    const deltaY = (window.innerHeight / 2) - (rect.top  + rect.height / 2)

    resultCard.style.transition = 'none'
    resultCard.style.transform  = `translate(${deltaX}px, ${deltaY}px) scale(1.2)`
    resultCard.style.cursor     = 'pointer'

    requestAnimationFrame(function() {
        requestAnimationFrame(function() { resultCard.style.transition = '' })
    })

    function onCardFlip() {
        resultCard.removeEventListener('click', onCardFlip)
        resultCard.style.cursor = 'default'
        const footerHint = resultCard.querySelector('.flip-hint-footer')
        if (footerHint) footerHint.remove()
        document.querySelector('.result-flip-inner').classList.add('flipped')
        setTimeout(function() { endSoloMode(resultCard, soloOverlay) }, 1800)
    }

    resultCard.addEventListener('click', onCardFlip)
}


// ─── SOLO-MODUS BEENDEN + TEXTE EINBLENDEN ──────────────────────────
function endSoloMode(resultCard, soloOverlay) {
    resultCard.style.transform = ''
    soloOverlay.classList.remove('visible')
    revealTimeouts.push(setTimeout(revealResultTexts, 950))
}

function revealResultTexts() {
    const order = [
        document.querySelector('.result-eyebrow'),
        document.querySelector('.result-card-footer'),
        document.querySelector('.result-card-diamond'),
        resultCardName, resultCardKw, resultKwTop, resultName, resultDesc,
        document.querySelector('.result-actions')
    ]
    order.forEach(function(el, index) {
        if (!el) return
        const tid = setTimeout(function() { el.classList.remove('result-hidden') }, index * 160)
        revealTimeouts.push(tid)
    })
}


// ─── FARBE PRO ELEMENT (→ Cheatsheet 04: Bedingungen) ───────────────
function getSuitColor(suit) {
    if (suit === 'wands')    return '#d4845e'
    if (suit === 'cups')     return '#5e9ad4'
    if (suit === 'swords')   return '#7ab5c8'
    if (suit === 'pentacles') return '#6aaa7c'
    return '#b8a9d4'
}


// ─── SHUFFLE STARTEN ─────────────────────────────────────────────────
function startShuffle() {
    showScreen(screenShuffle)
    renderCardSelection()
    setTimeout(function() { showScreen(screenSelect) }, 2000)
}


// ─── MODAL ───────────────────────────────────────────────────────────
function openModal() {
    if (!currentCard) return
    modalKw.innerText    = currentCard.keywords
    modalTitle.innerText = currentCard.name
    modalUp.innerText    = currentCard.meaning_up
    modalRev.innerText   = currentCard.meaning_rev
    modalDesc.innerText  = currentCard.description
    modal.classList.remove('hidden')
}

function closeModal() {
    modal.classList.add('hidden')
}


// ─── EVENT LISTENERS (→ Cheatsheet 06) ──────────────────────────────
document.querySelector('#btn-shuffle').addEventListener('click', function() { startShuffle() })
document.querySelector('#btn-again').addEventListener('click',   function() { startShuffle() })
document.querySelector('#btn-more').addEventListener('click',    function() { openModal() })
document.querySelector('#modal-close').addEventListener('click', function() { closeModal() })
document.querySelector('#modal-backdrop').addEventListener('click', function() { closeModal() })
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeModal()
})


// ─── API LADEN (→ Cheatsheet 13: async/await) ────────────────────────
async function loadData() {
    try {
        const response = await fetch('https://tarotapi.dev/api/v1/cards/courts')
        return await response.json()
    } catch (error) {
        console.error(error)
        return false
    }
}

const allShortcodes = ['wapp','wakn','waqu','waki','cupp','cukn','cuqu','cuki','swpp','swkn','swqu','swki','pepp','pekn','pequ','peki']

async function init() {
    const data = await loadData()

    if (data !== false) {
        data.cards.forEach(function(apiCard) {
            const german = germanCards[apiCard.name_short]
            if (!german) return
            allCards.push({
                name_short: apiCard.name_short,
                suit:        apiCard.suit,
                name:        german.name,
                keywords:    german.keywords,
                description: german.description,
                meaning_up:  german.meaning_up,
                meaning_rev: german.meaning_rev,
                imagePath:  'img/' + german.imgFile
            })
        })
        console.log('✓ ' + allCards.length + ' Karten von der API geladen.')
    }

    // Fallback: lokale Daten wenn API nicht erreichbar
    if (allCards.length === 0) {
        allShortcodes.forEach(function(shortcode) {
            const german = germanCards[shortcode]
            allCards.push({
                name_short:  shortcode,
                suit:        german.suit,
                name:        german.name,
                keywords:    german.keywords,
                description: german.description,
                meaning_up:  german.meaning_up,
                meaning_rev: german.meaning_rev,
                imagePath:  'img/' + german.imgFile
            })
        })
        console.log('⚠️ Lokale Kartendaten (' + allCards.length + ' Karten).')
    }
}

showScreen(screenStart)
init()
