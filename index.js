// byId is a shorthand for document.getElementById,
function byId(e) { return document.getElementById(e) }


// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________
// begin CONSTANTS list
// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________

const CardType = {
	Monster: "Monster",
	Spell: "Spell",
	Trap: "Trap",
	Token: "Token"  // rendered similar to Monster
}

const CardSubtype = {
	MonsterNormal: "MonsterNormal",
	MonsterEffect: "MonsterEffect",
	MonsterRitual: "MonsterRitual",
	MonsterFusion: "MonsterFusion",
	MonsterSynchro: "MonsterSynchro",
	MonsterXyz: "MonsterXyz",
	MonsterLink: "MonsterLink",

	SpellNormal: "SpellNormal",
	SpellQuickPlay: "SpellQuickPlay",
	SpellRitual: "SpellRitual",
	SpellContinuous: "SpellContinuous",
	SpellField: "SpellField",
	SpellEquip: "SpellEquip",

	TrapNormal: "TrapNormal",
	TrapCounter: "TrapCounter",
	TrapContinuous: "TrapContinuous",
}

const MonsterAttribute = {
	DARK: "DARK",
	EARTH: "EARTH",
	FIRE: "FIRE",
	LIGHT: "LIGHT",
	WATER: "WATER",
	WIND: "WIND",
	DIVINE: "DIVINE",
}

const Ability = {
	Flip: "Flip",
	Gemini: "Gemini",
	Spirit: "Spirit",
	Toon: "Toon",
	Tuner: "Tuner",
	Union: "Union",
}

const LinkArrow = {
	UpLeft: "UpLeft",
	Up: "Up",
	UpRight: "UpRight",
	Left: "Left",
	Right: "Right",
	DownLeft: "DownLeft",
	Down: "Down",
	DownRight: "DownRight",
}

// MonsterType has 25 types (excluded "Illusion"),
// https://yugipedia.com/wiki/Type
const MonsterType = {
	Aqua: "Aqua",
	Beast: "Beast",
	BeastWarrior: "Beast-Warrior",
	CreatorGod: "Creator God",
	Cyberse: "Cyberse",
	Dinosaur: "Dinosaur",
	DivineBeast: "Divine-Beast",
	Dragon: "Dragon",
	Fairy: "Fairy",
	Fiend: "Fiend",
	Fish: "Fish",
	Illusion: "Illusion",
	Insect: "Insect",
	Machine: "Machine",
	Plant: "Plant",
	Psychic: "Psychic",
	Pyro: "Pyro",
	Reptile: "Reptile",
	Rock: "Rock",
	SeaSerpent: "Sea Serpent",
	Spellcaster: "Spellcaster",
	Thunder: "Thunder",
	Warrior: "Warrior",
	WingedBeast: "Winged Beast",
	Wyrm: "Wyrm",
	Zombie: "Zombie",
}


const testCNameL03 = "Umi"
const testCNameL08 = 'Maxx "C"'
const testCNameL19 = "PSY-Framegear Gamma"
const testCNameL22 = "Blue-Eyes White Dragon"
const testCNameL36 = "Divine Arsenal AA-ZEUS - Sky Thunder"
const testCNameL47 = "Number 38: Hope Harbinger Dragon Titanic Galaxy"
const testCNameL52 = "Black Luster Soldier - Envoy of the Evening Twilight"

const testCEffectL012ST = `Draw 1 card.`
const testCEffectL046ST = `① Destroy all monsters your opponent controls.`
const testCEffectL069ST = `① Add 1 Level 4 or lower Warrior monster from your Deck to your hand.`
const testCEffectL123ME = `1 Tuner + 1+ non-Tuner monsters
① Your opponent cannot target this card with card effects, except during your Main Phase 2.`
const testCEffectL330ST = `If you control no cards, you can activate this card from your hand.
① Target 1 face-up monster your opponent controls; negate its effects (until the end of this turn), then, if this card was Set before activation and is on the field at resolution, for the rest of this turn all other Spell/Trap effects in this column are negated.`
const testCEffectL264ME = `1 Level 1 monster, except a Token
You can only use the effect ① of "Relinquished Anima" once per turn.
① You can target 1 face-up monster this card points to; equip that face-up monster to this card (max. 1).
② This card gains ATK equal to that equipped monster's.`
const testCEffectL276ME = `2 Level 4 monsters
① While this card has a material attached that was originally WATER, all WATER monsters you control gain 500 ATK.
② Once per turn (Quick Effect): You can detach 1 material from this card; your opponent cannot activate any card effects in their GY this turn.`
const testCEffectL508ME = `1 Tuner + 1 or more non-Tuner Synchro Monsters
① Once per turn, when another monster's effect is activated (Quick Effect): You can negate the activation, and if you do, destroy it, and if you do that, this card gains ATK equal to the destroyed monster's original ATK until the end of this turn.
② If this card battles an opponent's Level 5 or higher monster, during damage calculation: This card gains ATK equal to the current ATK of the opponent's monster it is battling during that damage calculation only.`
const testCEffectL514ME = `2 Level 12 monsters
Once per turn, if an Xyz Monster battled this turn, you can also Xyz Summon "Divine Arsenal AA-ZEUS - Sky Thunder" by using 1 Xyz Monster you control as material. (Transfer its materials to this card.)
① (Quick Effect): You can detach 2 materials from this card; send all other cards from the field to the GY.
② Once per turn, if another card(s) you control is destroyed by battle or an opponent's card effect: You can attach 1 card from your hand, Deck, or Extra Deck to this card as material.`
const testCEffectL571MM = `You can only use each of the following effects ① and ③ of "Blue-Eyes Jet Dragon" once per turn, and can only activate them while "Blue-Eyes White Dragon" is on your field or in your GY.
① If a card(s) on the field is destroyed by battle or card effect: You can Special Summon this card from the GY (if it was there when the card was destroyed) or hand (even if not).
② Other cards you control cannot be destroyed by your opponent's card effects.
③ At the start of the Damage Step, if this card battles: You can target 1 card your opponent controls; return it to the hand.`
const testCEffectL594ME = `2 Level 6 monsters
You can also Xyz Summon this card by sending 1 "Burning Abyss" monster from your hand to the GY, then using 1 "Dante" monster you control as material. (Transfer its materials to this card.) If Summoned this way, the following effect ① cannot be activated this turn.
① Once per turn (Quick Effect): You can detach 1 material from this card; send 1 card from your Deck to the GY.
② If this card in your possession is destroyed by your opponent's card and sent to your GY: You can Special Summon 1 "Burning Abyss" monster from your Extra Deck, ignoring its Summoning conditions.`
const testCEffectL630MM = `You can only use 1 "Lord of the Heavenly Prison" effect per turn, and only once that turn.
① During your Main Phase: You can activate this effect; this card in your hand becomes revealed until the end of your opponent's turn. While this card is revealed by this effect, Set cards on the field cannot be destroyed by card effects.
② If a Set Spell/Trap Card is activated (except during the Damage Step): You can Special Summon this card from your hand, then, if you activated this effect while this card was revealed, you can reveal and Set 1 Spell/Trap directly from your Deck, but banish it during the End Phase of the next turn.`
const testCEffectL579PM = `① Once per turn, when a Spell/Trap Card or effect is activated (Quick Effect): You can return 1 card you control with a Spell Counter to the hand, and if you do, negate the activation, and if you do that, destroy it. Then, you can place the same number of Spell Counters on this card that the returned card had.
② While this card has a Spell Counter, your opponent cannot target it with card effects, also it cannot be destroyed by your opponent's card effects.
③ When this card with a Spell Counter is destroyed by battle: You can add 1 Normal Spell from your Deck to your hand.`
const testCEffectL400PP = `You can only use the Pendulum Effect of "Endymion, the Mighty Master of Magic" once per turn.
① You can remove 6 Spell Counters from your field; Special Summon this card from the Pendulum Zone, then count the number of cards you control that can have a Spell Counter, destroy up to that many cards on the field, and if you do, place Spell Counters on this card equal to the number of cards destroyed.`


let DefaultCard = {
	CardName: "",
	CardType: CardType.Monster,
	CardSubtype: CardSubtype.MonsterNormal,
	CardEffect: "",
	CardArt: "",

	MonsterAttribute: MonsterAttribute.DARK,
	MonsterType: MonsterType.Warrior,
	MonsterLevelRankLink: 0,
	MonsterATK: 0,
	MonsterATKStr: "",  // sometimes ATK can be "?" instead of 0
	MonsterDEF: 0,
	MonsterDEFStr: "-",  // sometimes DEF can be "?" instead of 0
	MonsterAbilities: [],  // Ability.Tuner, Ability.Flip, ...
	MonsterLinkArrows: [],  // LinkArrow.Up, LinkArrow.UpRight, ...

	IsPendulum: false,
	PendulumScale: 0,
	PendulumEffect: "",

	MiscKonamiSet: "",
	// e.g. "4007", "4960 errata>2017"
	MiscKonamiCardID: "",
	// e.g. "89631139"
	MiscCardPassword: "",
	// e.g. "89631139 #4007", depends on Password and CardID
	DisplayPasswordAndCardID: "",
	MiscYear: (new Date()).getFullYear(),
	MiscCreator: "daominah.github.io",
}


const MapImg = {
	Spell: "icon/attr_SPELL.png",
	Trap: "icon/attr_TRAP.png",

	DARK: "icon/attr_DARK.png",
	DIVINE: "icon/attr_DIVINE.png",
	EARTH: "icon/attr_EARTH.png",
	FIRE: "icon/attr_FIRE.png",
	LIGHT: "icon/attr_LIGHT.png",
	WATER: "icon/attr_WATER.png",
	WIND: "icon/attr_WIND.png",

	TrapCounter: "icon/GUI_T_Icon1_Icon01.png",
	SpellField: "icon/GUI_T_Icon1_Icon02.png",
	SpellEquip: "icon/GUI_T_Icon1_Icon03.png",
	TrapContinuous: "icon/GUI_T_Icon1_Icon04.png",
	SpellContinuous: "icon/GUI_T_Icon1_Icon04.png",
	SpellQuickPlay: "icon/GUI_T_Icon1_Icon05.png",
	SpellRitual: "icon/GUI_T_Icon1_Icon06.png",

	// Level: "icon/GUI_T_Icon1_Other_Level.png",
	Level: "icon/GUI_T_Icon1_Other_Level_Yugipedia64.png",
	Rank: "icon/GUI_T_Icon1_Other_Rank.png",
}

const MapCardSubtypeText = {
	SpellNormal: "Normal Spell",
	SpellQuickPlay: "Quick-Play Spell",
	SpellRitual: "Ritual Spell",
	SpellContinuous: "Continuous Spell",
	SpellField: "Field Spell",
	SpellEquip: "Equip Spell",
	TrapNormal: "Normal Trap",
	TrapCounter: "Counter Trap",
	TrapContinuous: "Continuous Trap",
}

const MapLinkMarker = {
	[LinkArrow.UpLeft]: "RenderLinkArrowUpLeft",
	[LinkArrow.Up]: "RenderLinkArrowUp",
	[LinkArrow.UpRight]: "RenderLinkArrowUpRight",
	[LinkArrow.Left]: "RenderLinkArrowLeft",
	[LinkArrow.Right]: "RenderLinkArrowRight",
	[LinkArrow.DownLeft]: "RenderLinkArrowDownLeft",
	[LinkArrow.Down]: "RenderLinkArrowDown",
	[LinkArrow.DownRight]: "RenderLinkArrowDownRight",
}


const StorageKeyScale = "StorageKeyScale"
const StorageKeyArtResolution = "StorageKeyArtResolution"


function toDisplayPasswordAndCardID(cardPassword, cardID) {
	if (!cardID || cardID === "") {
		return cardPassword
	}
	if (cardPassword && cardPassword.trim().length > 0) {
		return `${cardPassword} #${cardID}`
	}
	// if cardID starts with not a digit, then it is flavor text, keep it as is
	if (!/^[0-9]/.test(cardID)) {
		return cardID
	}
	return `#${cardID}`
}

// fromDisplayPasswordAndCardID always returns a list of 2 elements,
// cardPassword and cardID, either of them can be empty string.
function fromDisplayPasswordAndCardID(displayPasswordAndCardID) {
	let cardPassword = ""
	let cardID = ""
	let parts = displayPasswordAndCardID.split("#")
	if (parts.length === 1) {
		tmp = parts[0].trim()
		if (6 <= tmp.length && tmp.length <= 8) {
			// cardID only has 5 digits, so probably this is a card password,
			// card password has exactly 8 digits, but can be mistaken missing prefix zeroes
			cardPassword = tmp.padStart(8, "0")
		} else {
			cardID = tmp  // in this repo old card, only cardID is displayed and exported
		}
	}
	if (parts.length >= 2) {
		cardPassword = parts[0].trim()
		cardID = parts[1].trim()
	}
	return [cardPassword, cardID]
}


// declared in file `konami_data/konami_db_en.js`
// const CardDatabase = []
console.log(`len CardDatabase: ${CardDatabase.length}`)

// MapCardDatabase helps to access CardDatabase by cardID
const MapCardDatabase = {}
for (let card of CardDatabase) {
	card.DisplayPasswordAndCardID = toDisplayPasswordAndCardID(card.MiscCardPassword, card.MiscKonamiCardID)
	MapCardDatabase[card.MiscKonamiCardID] = card
}


// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________
// begin GLOBAL VARIABLES list (end CONSTANTS list)
// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________


// GlobalCard's value will be updated by `colLeft` inputs,
// colMid will use the GlobalCard to render the card image,
let GlobalCard = NewCard();


// LastUpdateCardState throttles func `updateCardState`
let LastUpdateCardState = new Date(0)
// LastCardName helps to only send log in renderCard when CardName changed
let LastCardName = ""


// IndexCardDatabase will be initialized in func `buildIndexCardDatabase`,
// this is result of indexing MapCardDatabase by CardName using library
// "https://github.com/olivernn/lunr.js"
let IndexCardDatabase


// PerfNav is metrics associated with navigating duration,
// https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Navigation_timing,
// TLDR: fields are duration in milliseconds from `performance.timeOrigin`,
// this will be assigned to `performance.getEntriesByType("navigation")[0]`
// after func `window.onload` returned.
let PerfNav

// OperatingSystem is user's operating system (win__, mac__, linux__)
let OperatingSystem = "linux x86_64"
// IsNotLinuxOS (Windows or Mac) is calculated once from OperatingSystem in func "window.onload"
let IsNotLinuxOS = false
// IsWindowsOS is calculated once from OperatingSystem in func "window.onload"
let IsWindowsOS = false


// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________
// end GLOBAL VARIABLES list
// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________


// updateCardState reads "colLeft" then draws to "colMid",
// this function will be called when anything on "colLeft" changed, multiple
// calls to this function do not update HTML more than once per 100ms
function updateCardState() {
	let now = new Date()
	let sinceLast = now - LastUpdateCardState // milliseconds
	if (sinceLast < 50) {
		console.log(`${now.toISOString()} SKIP updateCardState, sinceLast: ${sinceLast} ms`)
		return
	}
	LastUpdateCardState = now
	// console.log(`${now.toISOString()} updateCardState, sinceLast: ${sinceLast} ms`)
	GlobalCard = readCardFromHTML();

	renderCard(GlobalCard)

	// console.log(`updateCardState dur: ${fmtSec(new Date() - now)}`)
}

// handleClickCardType shows corresponding CardSubtype elements of the cardType
function handleClickCardType(cardType) {
	// console.log("handleClickCardType:", cardType)
	let em = byId("CardSubtypeMonster")
	let es = byId("CardSubtypeSpell")
	let et = byId("CardSubtypeTrap")
	let show = em
	switch (cardType) {
		case CardType.Token:  // JS switch case will fallthrough (if no "break")
		case CardType.Monster:
			em.style.display = ""
			es.style.display = "none"
			et.style.display = "none"
			break
		case CardType.Spell:
			em.style.display = "none"
			es.style.display = ""
			et.style.display = "none"
			show = es
			break
		default: // case CardType.Trap:
			em.style.display = "none"
			es.style.display = "none"
			et.style.display = ""
			show = et
	}
	show.getElementsByTagName("input")[0].checked = true
	if (cardType === CardType.Monster || cardType === CardType.Token) {
		byId("MonsterDetail").classList.remove("disabledElement")
	} else {
		byId("MonsterDetail").classList.add("disabledElement")
		byId("IsPendulum").checked = false
	}
	updateCardState()
}

function handleInput(event) {
	// console.log(`event input tag: ${event.target.tagName}, id: ${event.target.id}`)
	updateCardState()
}

function handleClick() {
	// console.log(`event click tag: ${this.id}`)
	updateCardState()
}


function loadMonsterTypeElements() {
	let select = byId("MonsterType")
	let monsterTypes = Object.keys(MonsterType)
	for (let i = 0; i < monsterTypes.length; i++) {
		let option = document.createElement("option")
		option.id = MonsterType[monsterTypes[i]]
		option.value = MonsterType[monsterTypes[i]]
		option.innerHTML = MonsterType[monsterTypes[i]]
		select.appendChild(option)
	}
}


function hideMonsterDetailElements() {
	byId("RenderMonsterAbilities").style.display = "none"
	byId("RenderMonsterAbilitiesSmall").style.display = "none"
	byId("RenderMonsterEffect").style.display = "none"
	byId("RenderMonsterEffectSmall").style.display = "none"
	byId("RenderMonsterSplitLine").style.display = "none"
	byId("RenderMonsterATKLabel").style.display = "none"
	byId("RenderMonsterATK").style.display = "none"
	byId("RenderMonsterDEFLabel").style.display = "none"
	byId("RenderMonsterDEF").style.display = "none"
	byId("RenderMonsterLinkLabel").style.display = "none"
	byId("RenderMonsterLinkRating").style.display = "none"
}

// calcTextWidth calculates the text width on one line nowrap; by rendering
// the text on a SHARED hidden element then measure clientWidth; this is kind of
// a hack, I think concurrent calls to this function may cause wrong results but
// things seem right (is being used in fitTextOneLine to render CardName,
// MonsterAbilities, MonsterAtkDefLink)
function calcTextWidth(text, styleFont) {
	let test = byId("testTextWidth")
	test.innerHTML = text
	test.style.whiteSpace = "nowrap"
	test.style.font = styleFont
	let width = test.clientWidth
	test.innerHTML = ""
	// console.log(`calcTextWidth "${text}" ${styleFont} result: ${width}`)
	return width;
}

// renderTextFitOneLine clears the input element then fit the text into it,
// the text width will be scaled automatically if overflowed,
// magic value scaleFont=1.5 and scaleH=1.15 helps to fit card name
function fitTextOneLine(text, element, scaleFont = 1.0,
                        scaleH = 1.15, scaleW = 1.0) {
	if (!element) {
		console.log(`error fitTextOneLine element: ${element}, should be unreachable`)
		return
	}
	element.innerHTML = ""
	element.style.lineHeight = "1"
	element.style.fontSize = (element.offsetHeight * scaleFont).toString() + "px"
	let textW = calcTextWidth(text, window.getComputedStyle(element).font)
	if (textW > element.clientWidth) {
		scaleW = element.clientWidth / textW
	}
	// console.log(`fitTextOneLine ${element.id} scaleW: ${scaleW}`)
	let child = document.createElement("div")
	child.textContent = text
	child.style.transform = `scale(${scaleW}, ${scaleH})`
	child.style.transformOrigin = "bottom left"
	if (window.getComputedStyle(element).textAlign === "right") {
		child.style.transformOrigin = "bottom right"
	}

	// How to position text that its baseline is aligned with the bottom of its CSS box?
	// https://stackoverflow.com/a/26304590/4097963 (method using an extra .strut element).
	// The following method does not work on Windows:

	let magicBaseline = document.createElement("div")
	magicBaseline.style.height = element.offsetHeight.toString() + "px"
	magicBaseline.style.display = "inline-block"
	child.appendChild(magicBaseline)

	element.appendChild(child)
}

// chooseFont renders the text on a SHARED hidden element then measures
// the clientHeight, if overflowed, repeat with a smaller fontSize,
// this function return an integer (need to add "px" to set fontSize)
function chooseFontSize(textHTML, width, height, fontFamily, fontWeight) {
	let test = byId("testTextHeight")
	test.style.width = `${width}px`
	test.style.fontFamily = fontFamily
	test.style.fontWeight = fontWeight

	let chosenSize = 42
	let log = "";
	for (let i = 0; i < 60; i++) {
		test.innerHTML = textHTML
		test.style.fontSize = `${chosenSize}px`
		log = `chooseFontSize ${chosenSize}px, testWH: ${test.clientWidth}x${test.clientHeight}, targetWH: ${width}x${height}`
		// console.log(log)
		if (test.clientHeight <= height) {
			break
		}
		chosenSize -= 0.5
	}
	// console.log(log)
	test.innerHTML = ""
	return chosenSize
}


// NewCard returns a card obj with default fields value
function NewCard() {
	let jsoned = JSON.stringify(DefaultCard)
	return JSON.parse(jsoned)
}

function CloneCard(card) {
	return JSON.parse(JSON.stringify(card))
}


// readCardFromHTML returns a card object with all fields value read from
// current page HTML "colLeft", if a field is undefined or null, this function
// will set the field value equals to DefaultCard
function readCardFromHTML() {
	let c = NewCard()
	c.CardName = byId("CardName").value
	if (c.CardName) {
		c.CardName = c.CardName.trim()
	} else {
		c.CardName = DefaultCard.CardName
	}

	let radiosCardType = document.querySelector('input[name="CardType"]:checked')
	if (radiosCardType) {
		c.CardType = radiosCardType.id
	}
	let radiosCardSubtype = document.querySelector('input[name="CardSubtype"]:checked')
	if (radiosCardSubtype) {
		c.CardSubtype = radiosCardSubtype.id
	}

	c.CardEffect = byId("CardEffect").value
	if (c.CardEffect) {
		c.CardEffect = c.CardEffect.trim()
	} else {
		c.CardEffect = DefaultCard.CardEffect
	}

	let radiosMonsterAttribute = document.querySelector(
		'input[name="MonsterAttribute"]:checked')
	if (radiosMonsterAttribute) {
		c.MonsterAttribute = radiosMonsterAttribute.id
	}

	c.MonsterType = byId("MonsterType").value
	if (!c.MonsterType) {
		c.MonsterType = DefaultCard.MonsterType
	}

	c.MonsterLevelRankLink = byId("MonsterLevelRankLink").value
	if (c.MonsterLevelRankLink) {
		c.MonsterLevelRankLink = Math.floor(c.MonsterLevelRankLink)
	} else {
		c.MonsterLevelRankLink = DefaultCard.MonsterLevelRankLink
	}
	c.MonsterATKStr = byId("MonsterATK").value
	c.MonsterATK = parseInt(c.MonsterATKStr) | DefaultCard.MonsterATK
	c.MonsterDEFStr = byId("MonsterDEF").value
	c.MonsterDEF = parseInt(c.MonsterDEFStr) | DefaultCard.MonsterDEF

	c.MonsterAbilities = []
	let abilitiesInputs = document.getElementsByName("MonsterAbilities")
	for (let i = 0; i < abilitiesInputs.length; i++) {
		let e = abilitiesInputs[i];
		if (e.checked) {
			c.MonsterAbilities.push(e.id)
		}
	}
	c.MonsterAbilities.sort()

	c.MonsterLinkArrows = []
	let linkArrowInputs = document.getElementsByName("MonsterLinkArrows")
	for (let i = 0; i < linkArrowInputs.length; i++) {
		let e = linkArrowInputs[i];
		if (e.checked) {
			c.MonsterLinkArrows.push(e.id)
		}
	}

	c.IsPendulum = byId("IsPendulum").checked
	if (c.IsPendulum) {
		c.PendulumScale = byId("PendulumScale").value
		if (c.PendulumScale) {
			c.PendulumScale = Math.floor(c.PendulumScale)
		} else {
			c.PendulumScale = DefaultCard.PendulumScale
		}
		c.PendulumEffect = byId("PendulumEffect").value
		if (c.PendulumEffect) {
			c.PendulumEffect = c.PendulumEffect.trim()
		} else {
			c.PendulumEffect = DefaultCard.PendulumEffect
		}
	}
	if (c.IsPendulum) {
		c.CardArt = byId("ImgRenderCardArtPendulum").src
	} else {
		c.CardArt = byId("ImgRenderCardArt").src
	}

	c.MiscKonamiSet = byId("SetNumber").value
	let arr = fromDisplayPasswordAndCardID(byId("CardID").value)
	c.MiscCardPassword = arr[0]
	c.MiscKonamiCardID = arr[1]
	c.MiscYear = byId("Year").value
	c.MiscCreator = byId("Creator").value

	return c
}

// loadCardToHTML uses the input card object to fill HTML elements on "colLeft"
function loadCardToHTML(c) {
	console.log("loadCardToHTML", c)
	byId("CardName").value = c.CardName
	byId(c.CardType).checked = true
	let em = byId("CardSubtypeMonster")
	let es = byId("CardSubtypeSpell")
	let et = byId("CardSubtypeTrap")
	switch (c.CardType) {
		case CardType.Monster:
			em.style.display = ""
			es.style.display = "none"
			et.style.display = "none"
			break
		case CardType.Spell:
			em.style.display = "none"
			es.style.display = ""
			et.style.display = "none"
			break
		default: // case CardType.Trap:
			em.style.display = "none"
			es.style.display = "none"
			et.style.display = ""
	}
	byId(c.CardSubtype).checked = true
	if (c.CardArt) {
		byId("ImgRenderCardArtPendulum").className = "fitImgPendulum"
		byId("ImgRenderCardArtPendulum").src = c.CardArt
		byId("ImgRenderCardArt").src = c.CardArt
	} else {
		setCardArtSrcWithURL(c.MiscKonamiCardID)
	}
	byId("CardEffect").value = c.CardEffect
	if (byId(c.MonsterAttribute)) {
		byId(c.MonsterAttribute).checked = true
	}
	byId("MonsterType").value = c.MonsterType
	byId("MonsterLevelRankLink").value = c.MonsterLevelRankLink

	if (!c.hasOwnProperty("MonsterATKStr")) {
		byId("MonsterATK").value = c.MonsterATK.toString()
	} else {
		byId("MonsterATK").value = c.MonsterATKStr
	}
	if (!c.hasOwnProperty("MonsterDEFStr")) {
		byId("MonsterDEF").value = c.MonsterDEF.toString()
	} else {
		byId("MonsterDEF").value = c.MonsterDEFStr
	}

	for (let k in Ability) {
		let checkbox = byId(k)
		if (checkbox) {
			checkbox.checked = false
		}
	}
	if (c.MonsterAbilities) {
		for (let i = 0; i < c.MonsterAbilities.length; i++) {
			let checkbox = byId(c.MonsterAbilities[i])
			if (checkbox) {
				checkbox.checked = true
			}
		}
	}

	for (let k in LinkArrow) {
		let checkbox = byId(k)
		if (checkbox) {
			checkbox.checked = false
		}
	}
	if (c.MonsterLinkArrows) {
		for (let i = 0; i < c.MonsterLinkArrows.length; i++) {
			let checkbox = byId(c.MonsterLinkArrows[i])
			if (checkbox) {
				checkbox.checked = true
			}
		}
	}

	byId("IsPendulum").checked = !!c.IsPendulum;
	if (c.PendulumScale) {
		byId("PendulumScale").value = c.PendulumScale
	}
	if (c.PendulumEffect) {
		byId("PendulumEffect").value = c.PendulumEffect
	}

	byId("SetNumber").value = c.MiscKonamiSet
	if (c.DisplayPasswordAndCardID && c.DisplayPasswordAndCardID.length > 0) {
		byId("CardID").value = c.DisplayPasswordAndCardID
	} else {
		byId("CardID").value = toDisplayPasswordAndCardID(c.MiscCardPassword, c.MiscKonamiCardID)
	}
	byId("Year").value = c.MiscYear
	if (c.MiscCreator) {  // keep "Creator"
		byId("Creator").value = c.MiscCreator
	}

	return c
}


// renderCard draw the card image by updating HTML "colMid"
function renderCard(card) {
	if (card.CardName !== LastCardName && card.CardName !== "") {
		let cardNameNoSpace = card.CardName.replace(/ /g, "_");
		logURLQuery = `?func=renderCard&cardName=${cardNameNoSpace}`;
		console.log(logURLQuery);
		fetch(`https://log.daominah.uk/log${logURLQuery}`, {method: 'GET'})
			.then(response => console.log('log sent successfully'))
			.catch(error => console.error('error sending log:', error));
	}
	LastCardName = card.CardName

	renderCardFrame(card)
	renderCardName(card)
	renderCardAttribute(card)
	renderCardTypeLevelRank(card)
	renderLinkArrow(card)
	renderMiscFooter(card)
	renderPendulum(card)

	let [chosenEffectElement, autoFontSize] = renderCardEffect(card)
	byId("AutoFont").value = autoFontSize
	byId("ChosenEffectElementID").value = chosenEffectElement.id

	if (card.CardName !== "" || card.MiscKonamiCardID !== "") {
		let cardID = card.MiscKonamiCardID  // example "4095 errata<2014"
		cardID = cardID.replace("<", "_before_")
		cardID = cardID.replace(">", "_after_")
		let normalizedName = normalizeFileName(`${(card.CardName)}_${cardID}`)
		if (normalizedName !== "") {
			document.getElementById("ExportCardJSONName").textContent = normalizedName
		} else {
			document.getElementById("ExportCardJSONName").textContent = " "
		}
	}
}

function renderCardFrame(card) {
	let s = byId("RenderCard").style
	if (card.CardType === CardType.Spell) {
		s.backgroundImage = "url(card_frame/spell.png)"
	} else if (card.CardType === CardType.Trap) {
		s.backgroundImage = "url(card_frame/trap.png)"
	} else if (card.CardType === CardType.Token) {
		s.backgroundImage = "url(card_frame/monster_token.png)"
	} else {  // CardType.Monster
		if (!card.IsPendulum) {
			switch (card.CardSubtype) {
				case CardSubtype.MonsterNormal:
					s.backgroundImage = "url(card_frame/monster_normal.png)"
					break
				case CardSubtype.MonsterEffect:
					s.backgroundImage = "url(card_frame/monster_effect.png)"
					break
				case CardSubtype.MonsterRitual:
					s.backgroundImage = "url(card_frame/monster_ritual.png)"
					break
				case CardSubtype.MonsterFusion:
					s.backgroundImage = "url(card_frame/monster_fusion.png)"
					break
				case CardSubtype.MonsterSynchro:
					s.backgroundImage = "url(card_frame/monster_synchro.png)"
					break
				case CardSubtype.MonsterXyz:
					s.backgroundImage = "url(card_frame/monster_xyz.png)"
					break
				case CardSubtype.MonsterLink:
					s.backgroundImage = "url(card_frame/monster_link.png)"
					break
			}
		} else {
			switch (card.CardSubtype) {
				case CardSubtype.MonsterNormal:
					s.backgroundImage = "url(card_frame/pendulum_normal.png)"
					break
				case CardSubtype.MonsterEffect:
					s.backgroundImage = "url(card_frame/pendulum_effect.png)"
					break
				case CardSubtype.MonsterRitual:
					s.backgroundImage = "url(card_frame/pendulum_ritual.png)"
					break
				case CardSubtype.MonsterFusion:
					s.backgroundImage = "url(card_frame/pendulum_fusion.png)"
					break
				case CardSubtype.MonsterSynchro:
					s.backgroundImage = "url(card_frame/pendulum_synchro.png)"
					break
				case CardSubtype.MonsterXyz:
					s.backgroundImage = "url(card_frame/pendulum_xyz.png)"
					break
				default:
					s.backgroundImage = "url(card_frame/pendulum_normal.png)"
					break
			}
		}
	}
}

function renderCardName(card) {
	let e = byId("RenderCardName")
	e.style.color = "black"
	if (card.CardType === CardType.Spell ||
		card.CardType === CardType.Trap) {
		e.style.color = "white"
	} else if (card.CardType === CardType.Monster) {
		if (card.CardSubtype === CardSubtype.MonsterXyz ||
			card.CardSubtype === CardSubtype.MonsterLink) {
			e.style.color = "white"
		}
	}
	fitTextOneLine(card.CardName, e, 1.5)
}

function renderCardAttribute(card) {
	let e = byId("ImgRenderCardAttribute")
	if (card.CardType === CardType.Spell) {
		e.src = MapImg.Spell
	} else if (card.CardType === CardType.Trap) {
		e.src = MapImg.Trap
	} else {
		e.src = MapImg[card.MonsterAttribute]
	}
}


function loadMonsterLevelRankElements() {
	let levelsElement = byId("RenderMonsterLevel")
	let ranksElement = byId("RenderMonsterRank")
	levelsElement.style.visibility = "visible"
	ranksElement.style.visibility = "visible"
	let levelsRanksWidth = Math.max(levelsElement.clientWidth, ranksElement.clientWidth)
	let starWidth = Math.floor(levelsRanksWidth / 12 - 2) + "px"
	console.log(`levelsRanksWidth: ${levelsRanksWidth}, starWidth: ${starWidth}`)
	{ // red star elements to represent monster level
		let wrapStarStyle = function (style) {
			style.visibility = "hidden"
			style.display = "inline-block"
			style.width = starWidth
			style.height = window.getComputedStyle(levelsElement).height
			style.paddingLeft = "2px"
		}
		// star elements ID are StarWrap1, StarWrap2, ..., StarWrap12
		// they will be used in func renderCardTypeLevelRank
		for (let i = 12; i >= 1; i--) {
			let starWrap = document.createElement("div")
			starWrap.id = `StarWrap${i}`
			wrapStarStyle(starWrap.style)
			let star = document.createElement("img")
			star.src = MapImg.Level
			star.style.width = "100%"
			starWrap.innerHTML = ''
			starWrap.appendChild(star)
			levelsElement.appendChild(starWrap)
		}
	}
	{ // black star elements to represent monster rank (upto rank 12)
		ranksElement.style.visibility = "visible"
		let wrapStarStyle = function (style) {
			style.visibility = "hidden"
			style.display = "inline-block"
			style.width = starWidth
			style.height = window.getComputedStyle(ranksElement).height
			style.paddingRight = "2px"
		}
		// star elements ID are BlackStarWrap1, BlackStarWrap2, ..., BlackStarWrap12
		// they will be used in func renderCardTypeLevelRank
		for (let i = 1; i <= 12; i++) {
			let starWrap = document.createElement("div")
			starWrap.id = `BlackStarWrap${i}`
			wrapStarStyle(starWrap.style)
			let star = document.createElement("img")
			star.src = MapImg.Rank
			star.style.width = "100%"
			starWrap.innerHTML = ''
			starWrap.appendChild(star)
			ranksElement.appendChild(starWrap)
		}
	}
	{ // now YuGiOh only has 2 monsters that have rank 13:
		// * Raidraptor - Rising Rebellion Falcon
		// * Number iC1000: Numerounius Numerounia
		let mainElem = byId("RenderMonsterRank13")
		mainElem.style.visibility = "visible"
		let wrapStarStyle = function (style) {
			style.display = "inline-block"
			style.width = starWidth
			style.height = window.getComputedStyle(mainElem).height
			style.paddingRight = "1px"
		}
		for (let i = 1; i <= 13; i++) {
			let starWrap = document.createElement("div")
			wrapStarStyle(starWrap.style)
			let staticStar = document.createElement("img")
			staticStar.src = MapImg.Rank
			staticStar.style.width = "100%"
			starWrap.innerHTML = ''
			starWrap.appendChild(staticStar)
			mainElem.appendChild(starWrap)
		}
	}
}

function renderCardTypeLevelRank(card) {
	let level = byId("RenderMonsterLevel")
	let rank = byId("RenderMonsterRank")
	let rank13 = byId("RenderMonsterRank13")
	let cardType = byId("RenderCardType")
	let subType = byId("RenderCardSubtype")
	for (let v of [level, rank, rank13, cardType, subType]) {
		v.style.display = "none"
	}
	if (card.CardType === CardType.Monster || card.CardType === CardType.Token) {
		if (card.CardSubtype === CardSubtype.MonsterLink) {
			return
		}
		if (card.CardSubtype !== CardSubtype.MonsterXyz) {
			level.style.display = ""
			level.style.visibility = "visible";
			for (let i = 1; i <= 12; i++) {
				let e = byId(`StarWrap${i}`)
				if (!e) {
					continue
				}
				if (i <= card.MonsterLevelRankLink) {
					e.style.visibility = "visible"
				} else {
					e.style.visibility = "hidden"
				}
			}
		} else if (card.MonsterLevelRankLink <= 12) {
			rank.style.display = ""
			rank.style.visibility = "visible";
			for (let i = 1; i <= 12; i++) {
				if (i <= card.MonsterLevelRankLink) {
					byId(`BlackStarWrap${i}`).style.visibility = "visible"
				} else {
					byId(`BlackStarWrap${i}`).style.visibility = "hidden"
				}
			}
		} else {
			rank13.style.display = ""
			rank13.style.visibility = "visible";
		}
	} else { // Spell or Trap
		cardType.style.display = ""
		let textContent = ""
		const spaceImg = " ".repeat(5)  // depend on `fontCardType` in CSS
		if (card.CardType === CardType.Spell) {
			if (card.CardSubtype === CardSubtype.SpellNormal) {
				textContent = "[Spell Card]"
			} else {
				textContent = `[Spell Card${spaceImg}]`
				subType.style.display = ""
				byId("ImgRenderCardSubtype").src = MapImg[card.CardSubtype]
			}
		} else if (card.CardType === CardType.Trap) {
			if (card.CardSubtype === CardSubtype.TrapNormal) {
				textContent = "[Trap Card]"
			} else {
				textContent = `[Trap Card${spaceImg}]`
				subType.style.display = ""
				byId("ImgRenderCardSubtype").src = MapImg[card.CardSubtype]
			}
		}
		cardType.textContent = textContent
	}
}

function renderLinkArrow(card) {
	for (let k in MapLinkMarker) {
		byId(MapLinkMarker[k]).style.visibility = "hidden"
	}
	if (card.CardSubtype !== CardSubtype.MonsterLink) {
		return
	}
	for (let v of card.MonsterLinkArrows) {
		let tmp = byId(MapLinkMarker[v])
		if (tmp) {tmp.style.visibility = "visible"}
	}
}

// renderCardEffect chooses and renders effect element based on card type and
// how long the effect is; this function also returns
// [chosenElement: HTMLElement, autoFontSize: number] for further processing
function renderCardEffect(card) {
	if (card.CardType === CardType.Spell || card.CardType === CardType.Trap) {
		let e = byId("RenderSpellTrapEffect")
		e.style.display = ""
		hideMonsterDetailElements()
		let innerHTML = card.CardEffect.replaceAll("\n", "<br>")
		e.innerHTML = innerHTML
		let s = window.getComputedStyle(e)
		let fontSizePx = chooseFontSize(innerHTML,
			e.clientWidth, e.clientHeight, s.fontFamily, s.fontWeight)
		e.style.fontSize = fontSizePx + "px"
		// console.log(`chooseFontSize RenderSpellTrapEffect: ${fontSizePx}`)
		return [e, fontSizePx]
	}
	byId("RenderSpellTrapEffect").style.display = "none"

	// Monster effect and more detail:

	byId("RenderMonsterSplitLine").style.display = ""
	renderMonsterAtkDefLink(card)

	// choose RenderMonsterEffect or RenderMonsterEffectSmall

	let e1 = byId("RenderMonsterEffect")
	let a1 = byId("RenderMonsterAbilities")
	let s1 = window.getComputedStyle(e1)
	let e2 = byId("RenderMonsterEffectSmall")
	let a2 = byId("RenderMonsterAbilitiesSmall")
	let s2 = window.getComputedStyle(e2)

	let effectHTML = card.CardEffect.replaceAll("\n", "<br>")
	if (card.CardSubtype === CardSubtype.MonsterNormal) {
		e1.style.fontStyle = "italic"
		e2.style.fontStyle = "italic"
	} else {
		e1.style.fontStyle = ""
		e2.style.fontStyle = ""
	}

	e1.style.display = ""
	a1.style.display = ""
	e2.style.display = "none"
	a2.style.display = "none"
	let fontSizePx = chooseFontSize(effectHTML,
		e1.clientWidth, e1.clientHeight, s1.fontFamily, s1.fontWeight)
	// console.log(`chooseFontSize RenderMonsterEffect: ${fontSizePx}`)
	if (fontSizePx >= 32) {
		e1.style.fontSize = fontSizePx + "px"
		e1.innerHTML = effectHTML
		renderMonsterAbilities(card, a1)
		return [e1, fontSizePx]
	} else {
		e1.style.display = "none"
		a1.style.display = "none"
		e2.style.display = ""
		a2.style.display = ""
		let reFontSizePx = chooseFontSize(effectHTML,
			e2.clientWidth, e2.clientHeight, s2.fontFamily, s2.fontWeight)
		// console.log(`chooseFontSize RenderMonsterEffectSmall: ${reFontSizePx}`)
		e2.style.fontSize = reFontSizePx + "px"
		e2.innerHTML = effectHTML
		renderMonsterAbilities(card, a2)
		return [e2, reFontSizePx]
	}
}

function textMonsterAbilities(card) {
	const separator = " / "
	let s = card.MonsterType

	if (card.CardSubtype === CardSubtype.MonsterRitual) {
		s += separator + "Ritual"
	} else if (card.CardSubtype === CardSubtype.MonsterFusion) {
		s += separator + "Fusion"
	} else if (card.CardSubtype === CardSubtype.MonsterSynchro) {
		s += separator + "Synchro"
	} else if (card.CardSubtype === CardSubtype.MonsterXyz) {
		s += separator + "Xyz"
	} else if (card.CardSubtype === CardSubtype.MonsterLink) {
		s += separator + "Link"
	}

	if (card.IsPendulum) {
		s += separator + "Pendulum"
	}
	if (card.MonsterAbilities) {
		for (let i = 0; i < card.MonsterAbilities.length; i++) {
			s += separator + card.MonsterAbilities[i]
		}
	}

	if (card.CardSubtype === CardSubtype.MonsterNormal) {
		s += separator + "Normal"
	} else if (card.CardSubtype === CardSubtype.MonsterEffect) {
		s += separator + "Effect"
	} else {
		if (card.CardEffect.trim().includes("\n")) {
			s += separator + "Effect"
		} else {
			// an extra deck non-effect monster or a ritual monster,
			// card text only has 1 line that is summoning condition.
		}
	}
	s = "[ " + s + " ]"
	return s
}

function renderMonsterAbilities(card, elementMonsterAbilities) {
	let tmp = textMonsterAbilities(card)
	fitTextOneLine(tmp, elementMonsterAbilities, 1.0)
}

function renderMonsterAtkDefLink(card) {
	if (card.CardType !== CardType.Monster) {
		return
	}
	let labelATK = byId("RenderMonsterATKLabel")
	let valueATK = byId("RenderMonsterATK")
	let labelDEF = byId("RenderMonsterDEFLabel")
	let valueDEF = byId("RenderMonsterDEF")
	let labelLINK = byId("RenderMonsterLinkLabel")
	let valueLINK = byId("RenderMonsterLinkRating")

	labelATK.style.display = ""
	valueATK.style.display = ""
	fitTextOneLine("ATK/", labelATK, 1.5, 1.15, 1.15)
	let displayStrATK = ""
	if (card.hasOwnProperty("MonsterATKStr") && card.MonsterATKStr !== "" && card.MonsterATKStr !== "-") {
		displayStrATK = card.MonsterATKStr
	} else {
		displayStrATK = card.MonsterATK.toString()
	}

	const scaleStrQuestionMark = 1.2
	if (!IsWindowsOS) {
		let scaleH = 1.15
		if (displayStrATK === "?") {
			scaleH = scaleH * scaleStrQuestionMark
		}
		fitTextOneLine(displayStrATK, valueATK, 1.5, scaleH, 1.2)
	} else {
		let scaleH = 1.35
		if (displayStrATK === "?") {
			scaleH = scaleH * scaleStrQuestionMark
		}
		fitTextOneLine(displayStrATK, valueATK, 1.35, scaleH, 1.35)
	}

	labelDEF.style.display = ""
	valueDEF.style.display = ""
	labelLINK.style.display = "none"
	valueLINK.style.display = "none"
	let displayStrDEF = ""
	if (card.hasOwnProperty("MonsterDEFStr") && card.MonsterDEFStr !== "" && card.MonsterDEFStr !== "-") {
		displayStrDEF = card.MonsterDEFStr
	} else {
		displayStrDEF = card.MonsterDEF.toString()
	}
	fitTextOneLine("DEF/", labelDEF, 1.5, 1.15, 1.15)
	if (!IsWindowsOS) {
		let scaleH = 1.15
		if (displayStrDEF === "?") {
			scaleH = scaleH * scaleStrQuestionMark
		}
		fitTextOneLine(displayStrDEF, valueDEF, 1.5, scaleH, 1.2)
	} else {
		let scaleH = 1.35
		if (displayStrDEF === "?") {
			scaleH = scaleH * scaleStrQuestionMark
		}
		fitTextOneLine(displayStrDEF, valueDEF, 1.35, scaleH, 1.35)
	}

	// card.CardSubtype = CardSubtype.MonsterLink  // for testing
	if (card.CardSubtype === CardSubtype.MonsterLink) {
		labelDEF.style.display = "none"
		valueDEF.style.display = "none"
		labelLINK.style.display = ""
		valueLINK.style.display = ""
		fitTextOneLine("LINK-", labelLINK, 1.1, 0.96, 1.2)
		fitTextOneLine(card.MonsterLevelRankLink, valueLINK, 1, 1.0, 1.1)
	}
}

function renderMiscFooter(card) {
	let kSet = byId("RenderKonamiSet")
	let kSetL = byId("RenderKonamiSetLink")
	let kSetP = byId("RenderKonamiSetPendulum")
	let kCid = byId("RenderKonamiCardID")
	let year = byId("RenderYearCreator")
	let all = [kSet, kSetL, kSetP, kCid, year]
	if (card.IsPendulum) {
		kSet.style.display = "none"
		kSetL.style.display = "none"
		kSetP.style.display = ""
	} else if (card.CardSubtype === CardSubtype.MonsterLink) {
		kSet.style.display = "none"
		kSetL.style.display = ""
		kSetP.style.display = "none"
	} else {
		kSet.style.display = ""
		kSetL.style.display = "none"
		kSetP.style.display = "none"
	}
	if (card.IsPendulum) {
		for (let v of all) {v.style.color = "black"}
	} else {
		if (card.CardSubtype === CardSubtype.MonsterXyz) {
			for (let v of all) {v.style.color = "rgb(224,224,224)"}
		} else {
			for (let v of all) {v.style.color = "black"}
		}
	}

	let scaleFont = 1.0, scaleH = 1.15, scaleW = 1.0
	fitTextOneLine(card.MiscKonamiSet, kSet, scaleFont, scaleH, 1.1)
	fitTextOneLine(card.MiscKonamiSet, kSetL, scaleFont, scaleH, 1.1)
	fitTextOneLine(card.MiscKonamiSet, kSetP, scaleFont, scaleH, 1.1)
	let cardPasswordAndID = card.DisplayPasswordAndCardID
	if (!cardPasswordAndID) {
		cardPasswordAndID = toDisplayPasswordAndCardID(card.MiscCardPassword, card.MiscKonamiCardID)
	}
	fitTextOneLine(cardPasswordAndID, kCid, scaleFont, scaleH, 1.1)
	let copyleft = `🄯`
	if (IsNotLinuxOS) {
		// workaround Windows and MacOS cannot show CopyLeft symbol in browsers
		copyleft = `Ⓨ`
	}
	fitTextOneLine(`${copyleft}${card.MiscYear} ${card.MiscCreator}`, year)
}

function renderPendulum(card) {
	// console.log("renderPendulum", card.IsPendulum)
	let normalArt = byId("RenderCardArt")
	let pArt = byId("RenderCardArtPendulum")
	let pScaleL = byId("RenderPScaleLeft")
	let pScaleR = byId("RenderPScaleRight")
	let pEffect = byId("RenderPendulumEffect")
	if (!card.IsPendulum) {
		normalArt.style.display = ""
		pArt.style.display = "none"
		pScaleL.style.display = "none"
		pScaleR.style.display = "none"
		pEffect.style.display = "none"
		return
	}
	normalArt.style.display = "none"
	pArt.style.display = ""
	pScaleL.style.display = ""
	pScaleR.style.display = ""
	pEffect.style.display = ""
	fitTextOneLine(card.PendulumScale, pScaleL, 1.25)
	fitTextOneLine(card.PendulumScale, pScaleR, 1.25)
	let pEffectHTML = card.PendulumEffect.replaceAll("\n", "<br>")
	let s = window.getComputedStyle(pEffect)
	let fontSizePx = chooseFontSize(pEffectHTML,
		pEffect.clientWidth, pEffect.clientHeight, s.fontFamily, s.fontWeight)
	pEffect.style.fontSize = fontSizePx + "px"
	pEffect.innerHTML = pEffectHTML
}


function twitchFontCopyAuto() {
	byId("TwitchFont").value = byId("AutoFont").value
	byId("TwitchFontScaleY").value = "1.0"
}

function twitchFontCardEffect() {
	// cardEffectElement.id can be "RenderSpellTrapEffect" or
	// "RenderMonsterEffect" or
	// "RenderMonsterEffectSmall"
	let cardEffectElement = byId(byId("ChosenEffectElementID").value)
	if (!cardEffectElement) {
		return
	}
	let fontSize = document.getElementById("TwitchFont").value + "px"
	let scaleY = document.getElementById("TwitchFontScaleY").value
	cardEffectElement.style.fontSize = fontSize
	cardEffectElement.style.transform = `scale(1.0, ${scaleY})`
	cardEffectElement.style.transformOrigin = `top left`
}

// getText gets all text from an HTML element
function getText(node) {
	let resultArray = []

	function getTextRecur(node) {
		if (node.nodeType === 3) {// "3" is text node
			resultArray.push(node.nodeValue.trim())
		} else {
			for (let child of node.childNodes) {
				getTextRecur(child)
			}
		}
	}

	getTextRecur(node)
	return resultArray.join(" ")
}


// exportCardPNG downloads the rendered card HTML as a PNG image;
// https://stackoverflow.com/a/32776834/4097963:
// tried html2canvas, domtoimage,rasterizeHTML
function exportCardPNG() {
	let cardElem = byId("RenderCard")
	if (true) {
		html2canvas(cardElem).then(
			function (canvas) {
				downloadAsImage(canvas.toDataURL())
			})
	}

	if (true) {
		{
			let canvas = document.createElement("canvas");
			canvas.height = cardElem.clientHeight;
			canvas.width = cardElem.clientWidth;
			rasterizeHTML.drawHTML(cardElem.outerHTML, canvas)
				.then(function (renderResult) {
					downloadAsImage(canvas.toDataURL())
				});
		}
	}

	if (true) {
		domtoimage.toPng(cardElem, null).then(
			function (dataUrl) {
				downloadAsImage(dataUrl)
			})
			.catch(function (err) {
				window.debug = err
				console.error(`error domtoimage: ${err}`);
			});
	}
}

// downloadAsImage makes browser download dataURL as a PNG image,
// output name based on current time
function downloadAsImage(dataURL) {
	let now = (new Date()).toISOString()
	now = now.replace(/[^A-Za-z0-9]/g, "");
	let outputFileName = `${now}.png`
	let link = document.createElement("a");
	link.id = "downloadAsImage"
	if (typeof link.download === "string") {
		link.href = dataURL;
		link.download = outputFileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	} else {
		window.open(dataURL);
	}
}


function fmtSec(ms) {return `${ms / 1000}s`}


//  AllowChars are lowercase alphanumeric, good for file name cross-platform
const AllowChars = {}
for (let char of "abcdefghijklmnopqrstuvwxyz_.0123456789".split("")) {
	AllowChars[char] = true
}

function normalizeFileName(str) {
	let ret = []
	for (let char of str.toLowerCase().split("")) {
		if (!AllowChars[char]) {
			ret.push('_')
		} else {
			ret.push(char)
		}
	}
	return ret.join("")
}


function exportCardJSON(isKeepCardArt = false) {
	if (!GlobalCard || !GlobalCard.CardName) {
		return
	}
	let card = CloneCard(GlobalCard)
	if (!isKeepCardArt) {
		card.CardArt = ""  // art file size is very big
	}
	let link = document.createElement("a");
	let beauty = JSON.stringify(card, null, "\t")
	link.href = `data:text/json;charset=utf-8,${encodeURIComponent(beauty)}`
	let cardID = card.MiscKonamiCardID  // example "4095 errata<2014"
	cardID = cardID.replace("<", "_before_")
	cardID = cardID.replace(">", "_after_")
	link.download = normalizeFileName(`${(card.CardName)}_${cardID}.json`)
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function importCardJSON(jsonDataURI) {
	// console.log(`importCardJSON jsonDataURI: ${jsonDataURI}`)
	// https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
	let prefixLen = "data:application/json;base64,".length
	let jsonStr = atob(jsonDataURI.substring(prefixLen))  // bad Unicode char
	let binStringUnicode = Uint8Array.from(jsonStr, (m) => m.codePointAt(0))
	let jsonStrUnicode = new TextDecoder().decode(binStringUnicode)
	GlobalCard = JSON.parse(jsonStrUnicode)

	// automatically fill cardPassword from cardID in imported card JSON
	// (if cardID exists in cards database konami_data/konami_db_en.js)
	if (GlobalCard.MiscKonamiCardID && GlobalCard.MiscKonamiCardID.length > 0) {
		if (!GlobalCard.MiscCardPassword) {
			let cardInDB = MapCardDatabase[GlobalCard.MiscKonamiCardID]
			console.log(`cardInDB: ${JSON.stringify(cardInDB)}`)
			if (cardInDB && cardInDB.hasOwnProperty("MiscCardPassword")) {
				GlobalCard.MiscCardPassword = cardInDB["MiscCardPassword"]
			}
		}
	}
	if (GlobalCard.MiscCardPassword && GlobalCard.MiscCardPassword.length < 8) {
		GlobalCard.MiscCardPassword = GlobalCard.MiscCardPassword.padStart(8, "0");
	}

	// automatically change Creator "daominah" to "daominah.github.io"
	// so people know where to find this card editor
	if (GlobalCard.MiscCreator === "daominah") {
		GlobalCard.MiscCreator = "daominah.github.io"
	}

	loadCardToHTML(GlobalCard)
	renderCard(GlobalCard)
}


function buildIndexCardDatabase() {
	let beginT = new Date()
	IndexCardDatabase = lunr(function () {
		this.field("CardName")
		// this.field("CardEffect")
		for (let i = 0; i < CardDatabase.length; i++) {
			let c = CardDatabase[i]
			this.add({
				"CardName": c.CardName,
				// "CardEffect": [c.CardEffect, c.PendulumEffect].join(" "),
				"id": c.MiscKonamiCardID,
			})
		}
		let duration = (new Date()) - beginT
		console.log(`indexed card database, dur: ${fmtSec(duration)}`)
	})
}

function konamiDatabaseURL(cardID, language = "ja") {
	return `https://www.db.yugioh-card.com/yugiohdb/card_search.action` +
		`?ope=2&request_locale=${language}&cid=${cardID}`
}

function SearchCardDatabase() {
	let searchQuery = document.getElementById("SearchCardQuery").value

	if (searchQuery) {
		logURLQuery = `?func=SearchCardDatabase&searchQuery=${searchQuery}`;
		console.log(logURLQuery);
		fetch(`https://log.daominah.uk/log${logURLQuery}`, {method: 'GET'})
			.then(response => console.log('log sent successfully'))
			.catch(error => console.error('error sending log:', error));
	}

	let searchResult = [] // []Card
	let limit = 16, offset = 0  // TODO: paginate search result
	// search: https://github.com/olivernn/lunr.js
	let matches, err = null
	try {
		matches = IndexCardDatabase.search(searchQuery)
	} catch (exception) {
		err = exception
		console.log(`debug searchQuery ${searchQuery} causes exception IndexCardDatabase.search: ${err}, ${err === null}`)
	}
	if (matches === undefined || matches === null || matches.length === 0) {
		// slow search string contain
		for (let card of CardDatabase) {
			// console.log(`debug SearchCardDatabase: ${card.CardName}`)
			if (card.CardName.toLowerCase().includes(searchQuery.toLowerCase())) {
				searchResult.push(card)
			}
			if (searchResult.length >= limit) {break}
		}
	} else {
		let indexedResult = matches.slice(offset, offset + limit)
		for (let v of indexedResult) {
			// e.g. v = {"ref":"14297","score":7.307,"matchData":{"metadata":{"avramax":{"CardName":{}}}}}
			if (!v.ref) {continue}
			if (!MapCardDatabase[v.ref]) {continue}
			searchResult.push(MapCardDatabase[v.ref])
		}
	}

	// clone before processing because displaying DO modify card object
	let cloneResult = []
	for (let card of searchResult) {
		cloneResult.push(JSON.parse(JSON.stringify(card)))
	}
	let resultWrap = document.getElementById("SearchCardResult")
	resultWrap.innerHTML = ""
	for (let card of cloneResult) {
		if (!card) {continue}
		let row = document.createElement("div")
		row.className = "searchRow"
		let cardName = document.createElement("div")
		cardName.innerHTML = card.CardName
		row.appendChild(cardName)
		for (let language of ["ja", "en"]) {
			let konamiURL = document.createElement("a")
			konamiURL.href = konamiDatabaseURL(card.MiscKonamiCardID, language)
			konamiURL.target = "_blank"
			konamiURL.textContent = ` ${language}       `
			row.appendChild(konamiURL)
		}
		let summary = document.createElement("span")
		summary.style.float = "right"
		if (card.CardType === CardType.Spell) {
			row.style.backgroundColor = "lightgreen"
			let text = MapCardSubtypeText[card.CardSubtype]
			summary.appendChild(document.createTextNode(text))
		} else if (card.CardType === CardType.Trap) {
			row.style.backgroundColor = "violet"
			let text = MapCardSubtypeText[card.CardSubtype]
			summary.appendChild(document.createTextNode(text))
		} else {
			row.style.backgroundColor = "khaki"
			let text = textMonsterAbilities(card)
			summary.appendChild(document.createTextNode(text))
		}
		row.appendChild(summary)
		row.onclick = function (mouseEvent) {
			if (mouseEvent.target !== this) { // click on a descendant
				if (mouseEvent.target.tagName === "A") {
					// open Konami link, do not refresh GlobalCard
					return
				}
			}
			// console.log(`mouseEvent searchRow: ${mouseEvent.target}`,)
			if (!card.MiscCreator) {  // keep "Creator"
				card.MiscCreator = byId("Creator").value
			}
			GlobalCard = card
			loadCardToHTML(GlobalCard)
			if (card.CardType === CardType.Monster) {
				byId("MonsterDetail").classList.remove("disabledElement")
			} else {
				byId("MonsterDetail").classList.add("disabledElement")
			}
			renderCard(GlobalCard)
		}
		resultWrap.appendChild(row)
	}
}


function HandleClickScalePage(scaleStr) {
	let viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
	let vpH = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
	let documentWidth = document.body.scrollWidth;
	let docH = document.body.scrollHeight;
	console.log(`${(new Date()).toISOString()} document: ${documentWidth}x${docH}, view: ${viewWidth}x${vpH}`)

	if (!scaleStr) {
		if (documentWidth / viewWidth >= 1.5) {
			scaleStr = "0.5"
		}
	}

	switch (scaleStr) {
		case "0.2":
			document.getElementById("ScalePage02").checked = true
			break
		case "0.25":
			document.getElementById("ScalePage025").checked = true
			break
		case "0.3125":
			document.getElementById("ScalePage03125").checked = true
			break
		case "0.5":
			document.getElementById("ScalePage05").checked = true
			break
		case "0.8":
			document.getElementById("ScalePage08").checked = true
			break
		default:
			scaleStr = "1"
			document.getElementById("ScalePage1").checked = true
			break
	}
	localStorage.setItem(StorageKeyScale, scaleStr)
	console.log(`StorageKeyScale: ${localStorage.getItem(StorageKeyScale)}`)
	if (Number(scaleStr) !== "1") {
		document.body.style.transform = `scale(${scaleStr})`
		document.body.style.transformOrigin = "top left"
	} else {
		document.body.style.transform = ""
	}
}


function HandleClickArtResolution(pxStr) {
	switch (pxStr) {
		case "2048":
			localStorage.setItem(StorageKeyArtResolution, "2048")
			document.getElementById("ArtResolution2048").checked = true

			break
		default:
			localStorage.setItem(StorageKeyArtResolution, "512")
			document.getElementById("ArtResolution512").checked = true
			break
	}
	console.log(`StorageKeyArtResolution: ${localStorage.getItem(StorageKeyArtResolution)}, host: ${getArtHost()}`)
	if (!GlobalCard.CardArt) {
		setCardArtSrcWithURL(GlobalCard.MiscKonamiCardID)
	}
	renderCard(GlobalCard)
}

function getArtHost() {
	// Cloudflared on SG1
	if (localStorage.getItem(StorageKeyArtResolution) === "2048") {
		return "https://mdygo2048.daominah.uk"
	}
	return "https://mdygo.daominah.uk"
}

function setCardArtSrcWithURL(cardID) {
	if (!cardID || cardID.length === 0) {
		// prevent browser try "daominah.uk/.png" when cardID is empty,
		// which will show a red 404 error in console
		byId("ImgRenderCardArtPendulum").src = ""
		byId("ImgRenderCardArt").src = ""
		return
	}
	let daominahArtURL = `${getArtHost()}/${cardID}.png`
	byId("ImgRenderCardArtPendulum").className = "fitImgPendulumLong"
	byId("ImgRenderCardArtPendulum").src = daominahArtURL
	byId("ImgRenderCardArt").src = daominahArtURL
}


window.onload = () => {
	HandleClickScalePage(localStorage.getItem(StorageKeyScale))
	HandleClickArtResolution(localStorage.getItem(StorageKeyArtResolution))

	loadMonsterTypeElements()
	loadMonsterLevelRankElements()

	loadCardToHTML(DefaultCard)

	byId("CardArt").addEventListener("change", ev => {
		if (!ev.target.files || !ev.target.files.length) {return null}
		const r = new FileReader();
		r.onload = function (event) {
			if (window.getComputedStyle(byId("RenderCardArt")).display !== "none") {
				byId("ImgRenderCardArt").setAttribute("src", event.target.result)
			} else {
				byId("ImgRenderCardArtPendulum").setAttribute("src", event.target.result)
			}
			updateCardState()
		}
		r.readAsDataURL(ev.target.files[0]);
	});
	byId("ImportCardJSONFile").addEventListener("change", ev => {
		if (!ev.target.files || !ev.target.files.length) {return null}
		const r = new FileReader();
		r.onload = function (event) {
			// console.log(`data ImportCardJSONFile: ${event.target.result}`)
			importCardJSON(event.target.result)
		}
		r.readAsDataURL(ev.target.files[0]);
	});

	for (let v of document.getElementsByName("CardType")) {
		v.onclick = function () {handleClickCardType(v.id)}
	}

	byId("SearchCardQuery").addEventListener("keyup",
		function (event) {
			if (event.key === "Enter") {
				byId("SearchCardDatabase").click()
			}
		});

	// almost all elements on "colLeft"
	let inputs = [
		document.getElementById("CardName"),
		// CardSubtypeWrap
		document.getElementById("MonsterNormal"),
		document.getElementById("MonsterEffect"),
		document.getElementById("MonsterRitual"),
		document.getElementById("MonsterFusion"),
		document.getElementById("MonsterSynchro"),
		document.getElementById("MonsterXyz"),
		document.getElementById("MonsterLink"),
		document.getElementById("SpellNormal"),
		document.getElementById("SpellQuickPlay"),
		document.getElementById("SpellRitual"),
		document.getElementById("SpellContinuous"),
		document.getElementById("SpellField"),
		document.getElementById("SpellEquip"),
		document.getElementById("TrapNormal"),
		document.getElementById("TrapCounter"),
		document.getElementById("TrapContinuous"),
		// Misc
		document.getElementById("Year"),
		document.getElementById("Creator"),
		document.getElementById("SetNumber"),
		document.getElementById("CardID"),
		//
		document.getElementById("CardEffect"),
		// MonsterAttributeWrap
		document.getElementById("DARK"),
		document.getElementById("EARTH"),
		document.getElementById("FIRE"),
		document.getElementById("LIGHT"),
		document.getElementById("WATER"),
		document.getElementById("WIND"),
		document.getElementById("DIVINE"),
		document.getElementById("MonsterType"),
		document.getElementById("MonsterLevelRankLink"),
		document.getElementById("MonsterATK"),
		document.getElementById("MonsterDEF"),
		// MonsterAbilitiesWrap
		document.getElementById("Flip"),
		document.getElementById("Gemini"),
		document.getElementById("Spirit"),
		document.getElementById("Toon"),
		document.getElementById("Tuner"),
		document.getElementById("Union"),
		// MonsterLinkArrows
		document.getElementById("UpLeft"),
		document.getElementById("Up"),
		document.getElementById("UpRight"),
		document.getElementById("Left"),
		document.getElementById("Right"),
		document.getElementById("DownLeft"),
		document.getElementById("Down"),
		document.getElementById("DownRight"),
		// PendulumWrap
		document.getElementById("IsPendulum"),
		document.getElementById("PendulumScale"),
		document.getElementById("PendulumEffect"),
	]
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].oninput = handleInput
		inputs[i].onclick = handleClick
	}

	if (window.navigator.platform) {
		OperatingSystem = window.navigator.platform
	} else if (navigator.userAgentData) {
		// https://stackoverflow.com/a/70361732/4097963
		OperatingSystem = navigator.userAgentData.platform
	}
	if (OperatingSystem.toLowerCase().includes("mac") ||
		OperatingSystem.toLowerCase().includes("win")) {
		IsNotLinuxOS = true
		if (OperatingSystem.toLowerCase().includes("win")) {
			IsWindowsOS = true
		}
	}
	console.log(`operating system: ${OperatingSystem}\nuser agent: ${window.navigator.userAgent}`)

	if (IsWindowsOS) {
		let needCSSWindows = [
			document.getElementById("RenderMonsterATKLabel"),
			document.getElementById("RenderMonsterATK"),
			document.getElementById("RenderMonsterDEFLabel"),
			document.getElementById("RenderMonsterDEF"),
			document.getElementById("RenderMonsterLinkLabel"),
			document.getElementById("RenderMonsterLinkRating"),
		]
		let replaceClasses = []  // to avoid changing the array while looping
		for (let i = 0; i < needCSSWindows.length; i++) {
			for (let k = 0; k < needCSSWindows[i].classList.length; k++) {
				let oldClass = needCSSWindows[i].classList[k]
				if (oldClass !== "db") {  // "db" means debug
					replaceClasses.push(oldClass)
				}
			}
		}
		for (let i = 0; i < replaceClasses.length; i++) {
			let oldClass = replaceClasses[i]
			let newClass = oldClass + "Windows"
			needCSSWindows[i].classList.remove(oldClass)
			needCSSWindows[i].classList.add(newClass)
			// console.log(`replace class ${oldClass} with ${newClass}`)
		}
	}

	updateCardState()
	if (Boolean(window.chrome)) {
		// workaround Chromium based browsers calculate wrong font width
		// at the first load
		setTimeout(function () {renderCard(GlobalCard)}, 500)
	}


	if (!true) {  // DEPRECATED, this will get CORS error if run as a local file
		fetch('konami_data/konami_db_en.json').then(response => response.json()).then(
			function (data) {
				CardDatabase = data
				buildIndexCardDatabase()
			}
		).catch(function (err) {console.log(`error cardDatabase: ${err}`)});
	} else { // CardDatabase is declared in file `konami_data/konami_db_en.js`
		if (typeof CardDatabase === 'undefined' || CardDatabase === null) {
			console.log(`error CardDatabase is undefined`)
		} else {
			buildIndexCardDatabase()
		}
	}
	byId("SearchCardDatabase").click()


	setTimeout(function () {
		PerfNav = performance.getEntriesByType("navigation")[0]
		let durPageDownloaded = PerfNav.domInteractive
		let durOnload = PerfNav.loadEventEnd - PerfNav.loadEventStart
		console.log(`duration downloading page: ${fmtSec(durPageDownloaded)}, onload func: ${fmtSec(durOnload)}`)
	}, 0);  // setTimeout 0 is similar to defer
}
