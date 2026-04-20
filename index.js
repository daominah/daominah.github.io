// byId is a shorthand for document.getElementById,
function byId(e) {
	return document.getElementById(e)
}

// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________
// begin CONSTANTS list
// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________

let CardType = {
	Monster: "Monster",
	Spell: "Spell",
	Trap: "Trap",
	Token: "Token", // rendered similar to Normal Monster
}

let CardSubtype = {
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

let MonsterAttribute = {
	DARK: "DARK",
	EARTH: "EARTH",
	FIRE: "FIRE",
	LIGHT: "LIGHT",
	WATER: "WATER",
	WIND: "WIND",
	DIVINE: "DIVINE",
}

let Ability = {
	Flip: "Flip",
	Gemini: "Gemini",
	Spirit: "Spirit",
	Toon: "Toon",
	Tuner: "Tuner",
	Union: "Union",
	RushMaximum: "Maximum", // value matches the HTML element id="Maximum"
}

let LinkArrow = {
	UpLeft: "UpLeft",
	Up: "Up",
	UpRight: "UpRight",
	Left: "Left",
	Right: "Right",
	DownLeft: "DownLeft",
	Down: "Down",
	DownRight: "DownRight",
}

// MonsterType has 26 types
// https://yugipedia.com/wiki/Type
let MonsterType = {
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

let DefaultCreator = "daominah.github.io"

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
	MonsterATKStr: "", // sometimes ATK can be "?" instead of 0
	MonsterDEF: 0,
	MonsterDEFStr: "-", // sometimes DEF can be "?" instead of 0
	MonsterAbilities: [], // Ability.Tuner, Ability.Flip, ...
	MonsterLinkArrows: [], // LinkArrow.Up, LinkArrow.UpRight, ...

	IsPendulum: false,
	PendulumScale: 0,
	PendulumEffect: "",

	RushIsLegend: false,
	RushMaximumATK: "", // MAXIMUM ATK value on the Main card (e.g. "3400"), empty if unused

	MiscKonamiSet: "",
	// e.g. "4007", "4960 errata>2017"
	MiscKonamiCardID: "",
	// e.g. "89631139"
	MiscCardPassword: "",
	// e.g. "89631139 #4007", depends on Password and CardID
	DisplayPasswordAndCardID: "",
	MiscYear: new Date().getFullYear(),
	MiscCreator: DefaultCreator,
	// AltArtID: selected alt art ID (example "3801" for Blue-Eyes White Dragon),
	// this is an empty string "" if no alt art or default art selected
	AltArtID: "",
}

let MapImg = {
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
	// Rank: "icon/GUI_T_Icon1_Other_Rank.png",
	Rank: "icon/GUI_T_Icon1_Other_Rank_Yugipedia64.png",

	RushStarLevel: "icon/Rush_StarLevel.png",
	RushStarRank: "icon/Rush_StarRank.png",
	RushBadgeLabelLevel: "icon/svg/badge_label_LEVEL.svg",
	RushBadgeLabelRank: "icon/svg/badge_label_RANK.svg",
	RushBadgeLabelLink: "icon/svg/badge_label_LINK.svg",
}

let MapCardSubtypeText = {
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

let MapLinkMarker = {
	[LinkArrow.UpLeft]: "RenderLinkArrowUpLeft",
	[LinkArrow.Up]: "RenderLinkArrowUp",
	[LinkArrow.UpRight]: "RenderLinkArrowUpRight",
	[LinkArrow.Left]: "RenderLinkArrowLeft",
	[LinkArrow.Right]: "RenderLinkArrowRight",
	[LinkArrow.DownLeft]: "RenderLinkArrowDownLeft",
	[LinkArrow.Down]: "RenderLinkArrowDown",
	[LinkArrow.DownRight]: "RenderLinkArrowDownRight",
}

// Rush Duel link arrows: maps LinkArrow values to inline SVG <g> element IDs
let MapRushLinkArrow = {
	[LinkArrow.UpLeft]: "RushArrowUpLeft",
	[LinkArrow.Up]: "RushArrowUp",
	[LinkArrow.UpRight]: "RushArrowUpRight",
	[LinkArrow.Left]: "RushArrowLeft",
	[LinkArrow.Right]: "RushArrowRight",
	[LinkArrow.DownLeft]: "RushArrowDownLeft",
	[LinkArrow.Down]: "RushArrowDown",
	[LinkArrow.DownRight]: "RushArrowDownRight",
}

// ArtSource tracks whether the card art was set by the user (file upload) or auto-fetched
// from the remote server. Only "manual" art is saved in card.CardArt / exported to JSON.
let ArtSource = {
	Manual: "manual",
	Auto: "auto",
}

// the following localStorage keys are for user preferences that persist across page reloads:

let StorageKeyScale = "StorageKeyScale"
let StorageKeyArtResolution = "StorageKeyArtResolution"
let StorageKeyCardLayout = "StorageKeyCardLayout"

// in-memory cache for optimizing read localStorage (write still needs to set localStorage)
let GlobalCardLayout = "standard" // "standard" | "rushduel"

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
// example input arg: "89631139 #4007", output: ["89631139", "4007"]
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
			cardID = tmp // fallback for this repo old code, only cardID was displayed and exported
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
let MapCardDatabase = {}
for (let card of CardDatabase) {
	card.DisplayPasswordAndCardID = toDisplayPasswordAndCardID(
		card.MiscCardPassword,
		card.MiscKonamiCardID,
	)
	MapCardDatabase[card.MiscKonamiCardID] = card
}

// MapAltArts maps OriginalCardID to AltArtIDs array
// declared in file `konami_data/alt_arts.js`
let MapAltArts = {}
if (typeof AltArts !== "undefined" && AltArts) {
	for (let entry of AltArts) {
		if (entry.OriginalCardID && entry.AltArtIDs && entry.AltArtIDs.length > 0) {
			MapAltArts[entry.OriginalCardID] = entry.AltArtIDs
		}
	}
}
console.log(`len MapAltArts: ${Object.keys(MapAltArts).length}`)

// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________
// begin GLOBAL VARIABLES list (end CONSTANTS list)
// _____________________________________________________________________________
// _____________________________________________________________________________
// _____________________________________________________________________________

// GlobalCard's value will be updated by `colLeft` inputs,
// colMid will use the GlobalCard to render the card image,
let GlobalCard = NewCard()

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

	// init alt art selector elements based on "CardID" element which has value "password #cardID",
	// OR if the alt art radios already here, do nothing (so respect selected alt art)
	let [_, cardID] = fromDisplayPasswordAndCardID(byId("CardID").value)
	loadHTMLAltArtSelector(cardID)

	// collect user inputs from "colLeft" into GlobalCard then render to "colMid"
	GlobalCard = readCardFromHTML()
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
		case CardType.Token: // JS switch case will fallthrough (if no "break")
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

function handleClickMaximum() {
	if (this.checked) {
		byId("RushMaximumATKWrap").classList.remove("disabledElement")
	} else {
		byId("RushMaximumATKWrap").classList.add("disabledElement")
	}
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

// loadMonsterLevelRankElements inits all the stars elements for monster level display
// (but hidden by default, will be shown depending on the card level)
function loadMonsterLevelRankElements() {
	let levelsElement = byId("RenderMonsterLevel")
	let ranksElement = byId("RenderMonsterRank")
	levelsElement.style.visibility = "visible"
	ranksElement.style.visibility = "visible"
	let levelsRanksWidth = Math.max(levelsElement.clientWidth, ranksElement.clientWidth)
	let starWidth = Math.floor(levelsRanksWidth / 12 - 2) + "px"
	console.log(`levelsRanksWidth: ${levelsRanksWidth}, starWidth: ${starWidth}`)
	{
		// red star elements to represent monster level
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
			starWrap.innerHTML = ""
			starWrap.appendChild(star)
			levelsElement.appendChild(starWrap)
		}
	}
	{
		// black star elements to represent monster rank (upto rank 12)
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
			starWrap.innerHTML = ""
			starWrap.appendChild(star)
			ranksElement.appendChild(starWrap)
		}
	}
	{
		// now YuGiOh only has 2 monsters that have rank 13:
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
			starWrap.innerHTML = ""
			starWrap.appendChild(staticStar)
			mainElem.appendChild(starWrap)
		}
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
	// use the test element inside the active renderer — testTextWidth is inside #RenderCard
	// which is display:none in Rush Duel mode, making clientWidth always 0
	let testId = "testTextWidth"
	if (GlobalCardLayout === "rushduel") {
		testId = "testRushTextWidth"
	}
	let test = byId(testId)
	test.innerHTML = text
	test.style.whiteSpace = "nowrap"
	test.style.font = styleFont
	let width = test.clientWidth
	test.innerHTML = ""
	// console.log(`calcTextWidth "${text}" ${styleFont} result: ${width}`)
	return width
}

// fitTextOneLine clears the input element then fit the text into it,
// the text width will be scaled automatically if overflowed,
// magic value scaleFont=1.5 and scaleH=1.15 helps to fit card name.
//
// scaleFont: sets fontSize = element.offsetHeight * scaleFont,
//   affects both character width and height, so changing it will
//   alter the visual weight/thickness of the text.
// scaleH: CSS transform scaleY, stretches rendered text vertically
//   from the transformOrigin without changing character width,
//   easier to control alignment between elements.
// scaleW: CSS transform scaleX, auto-shrunk if text overflows the box.
//
// For ATK/DEF: label (fontCardName) and value (fontATKValue) use different fonts,
// so the same scaleFont will NOT produce the same visual size.
// The original scales were hand-tuned to make label and value appear similar.
// If the gap between label and value needs adjusting, tweak the CSS left/width of label boxes (e.g.
// cRenderMonsterATKLabel) so label right edge meets value left edge.
function fitTextOneLine(text, element, scaleFont = 1.0, scaleH = 1.15, scaleW = 1.0) {
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
	// the magicBaseline here uses the same concept as the stackoverflow answer.
	let magicBaseline = document.createElement("div")
	magicBaseline.style.height = element.offsetHeight.toString() + "px"
	magicBaseline.style.display = "inline-block"
	child.appendChild(magicBaseline)

	element.appendChild(child)
}

// chooseFontSize renders the text on a SHARED hidden element then measures
// the clientHeight, if overflowed, repeat with a smaller fontSize,
// this function return an integer (need to add "px" to set fontSize)
function chooseFontSize(textHTML, width, height, fontFamily, fontWeight) {
	let test = byId("testTextHeight")
	test.style.width = `${width}px`
	test.style.fontFamily = fontFamily
	test.style.fontWeight = fontWeight

	let chosenSize = 42
	let log = ""
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

// ensureCardHasAltArtID ensures the card object has AltArtID field (empty string if missing)
function ensureCardHasAltArtID(card) {
	if (!card.hasOwnProperty("AltArtID") || card.AltArtID === undefined || card.AltArtID === null) {
		card.AltArtID = ""
	}
	return card
}

// readCardFromHTML returns a card object with all fields value read from
// current page HTML "colLeft", if a field is undefined or null, this function
// will set the field value equals to DefaultCard's corresponding field
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

	let radiosMonsterAttribute = document.querySelector('input[name="MonsterAttribute"]:checked')
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
		let e = abilitiesInputs[i]
		if (e.checked) {
			c.MonsterAbilities.push(e.id)
		}
	}
	c.MonsterAbilities.sort()

	c.MonsterLinkArrows = []
	let linkArrowInputs = document.getElementsByName("MonsterLinkArrows")
	for (let i = 0; i < linkArrowInputs.length; i++) {
		let e = linkArrowInputs[i]
		if (e.checked) {
			c.MonsterLinkArrows.push(e.id)
		}
	}

	c.IsPendulum = byId("IsPendulum").checked
	c.RushIsLegend = byId("RushIsLegend").checked
	c.RushMaximumATK = byId("RushMaximumATK").value.trim()
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
	// Only set CardArt if it was manually set (file upload), not auto-generated
	if (c.IsPendulum) {
		let img = byId("ImgRenderCardArtPendulum")
		if (img.dataset.artSource === ArtSource.Manual) {
			c.CardArt = img.src
		} else {
			c.CardArt = ""
		}
	} else {
		let img = byId("ImgRenderCardArt")
		if (img.dataset.artSource === ArtSource.Manual) {
			c.CardArt = img.src
		} else {
			c.CardArt = ""
		}
	}

	c.MiscKonamiSet = byId("SetNumber").value
	let arr = fromDisplayPasswordAndCardID(byId("CardID").value)
	c.MiscCardPassword = arr[0]
	let newCardID = arr[1]

	// Read selected alt art ID (DefaultArt uses cardID as value, AltArt uses altID)
	ensureCardHasAltArtID(c) // Ensure AltArtID field exists
	let altArtIDs = MapAltArts[newCardID]
	if (altArtIDs && altArtIDs.length > 0) {
		let selectedArtID = getSelectedAltArtID()
		// If selectedArtID equals cardID, it means DefaultArt is selected (empty string)
		// Otherwise, it's an alt art ID
		if (selectedArtID === newCardID) {
			c.AltArtID = ""
		} else {
			c.AltArtID = selectedArtID
		}
	} else {
		c.AltArtID = ""
	}

	c.MiscKonamiCardID = newCardID

	c.MiscYear = byId("Year").value
	c.MiscCreator = byId("Creator").value

	return c
}

// loadDevTestCardByID loads a card from MapCardDatabase by its Konami card ID
// and renders it. Used by the DevTestCards buttons.
function loadDevTestCardByID(cardID) {
	if (!cardID) {
		console.log("loadDevTestCardByID: no cardID specified")
		return
	}
	let card = MapCardDatabase[cardID]
	if (!card) {
		if (cardID === "3922") {
			card = {
				CardName: "Emissary of Darkness Token",
				CardType: CardType.Token,
				CardSubtype: CardSubtype.MonsterNormal,
				CardEffect: `This card can be used as an "Emissary of Darkness Token" summoned by the effect of "Gorz the Emissary of Darkness"`,
				MonsterAttribute: MonsterAttribute.LIGHT,
				MonsterType: MonsterType.Fairy,
				MonsterLevelRankLink: 7,
				MonsterATKStr: "?",
				MonsterDEFStr: "?",
				MiscKonamiSet: "17TP-JP215",
				MiscKonamiCardID: "3922",
				MiscCardPassword: "This card cannot be in a Deck.",
				MiscYear: "2017",
			}
		} else if (cardID === "19097") {
			card = {
				CardName: "ハーピィ三姉妹", // Harpy Lady Sisters (center Maximum Monster)
				CardType: CardType.Monster,
				CardSubtype: CardSubtype.MonsterEffect,
				CardEffect:
					"「ハーピィ三姉妹[L]」「ハーピィ三姉妹[R]」と揃えてマキシマム召喚できる。\n        【条件】自分の墓地のモンスター(風属性/鳥獣族)2体をデッキに戻して発動できる。\n        【効果】自分フィールドの表側表示モンスター1体を選び、その攻撃力をターン終了時まで500アップする。このカードがマキシマムモードの場合、さらに相手に500ダメージを与える。",
				MonsterAttribute: MonsterAttribute.WIND,
				MonsterType: MonsterType.WingedBeast,
				MonsterLevelRankLink: 5,
				MonsterATK: 2100,
				MonsterDEF: 0,
				MonsterAbilities: [Ability.RushMaximum],
				RushIsLegend: false,
				RushMaximumATK: "3400",
				MiscKonamiSet: "RD/TB01-JP002",
				MiscKonamiCardID: "19097",
				MiscYear: "2023",
			}
		} else {
			console.log(`loadDevTestCardByID: card not found for ID "${cardID}"`)
			return
		}
	}
	card.MiscCreator = DefaultCreator

	GlobalCard = card
	ensureCardHasAltArtID(GlobalCard)
	loadCardToHTML(GlobalCard)
	renderCard(GlobalCard)
}

// loadCardToHTML uses the input card object to fill HTML elements on "colLeft",
// usually used to load a card from search result
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

	// Update alt art selector based on cardID
	// loadHTMLAltArtSelector will respect c.AltArtID when creating radio buttons
	loadHTMLAltArtSelector(c.MiscKonamiCardID, c.AltArtID)

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
		let checkbox = byId(Ability[k])
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

	byId("IsPendulum").checked = !!c.IsPendulum
	byId("RushIsLegend").checked = Boolean(c.RushIsLegend)
	byId("RushMaximumATK").value = c.RushMaximumATK || ""
	byId("RushMaximumATKWrap").classList.toggle(
		"disabledElement",
		!(c.MonsterAbilities && c.MonsterAbilities.includes(Ability.RushMaximum)),
	)
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
	if (c.MiscCreator) {
		// keep "Creator"
		byId("Creator").value = c.MiscCreator
	}

	return c
}

function sendLog(urlQuery) {
	if (location.protocol === "file:") {
		return
	}
	fetch(`https://log.daominah.uk/log${urlQuery}`, {method: "GET"})
		.then((response) => console.log("log sent successfully"))
		.catch((error) => console.error("error sending log:", error))
}

// renderCard draw the card image by updating HTML "colMid"
function renderCard(card) {
	if (card.CardName !== LastCardName && card.CardName !== "") {
		let cardNameNoSpace = card.CardName.replace(/ /g, "_")
		let logURLQuery = `?func=renderCard&cardName=${cardNameNoSpace}`
		console.log(logURLQuery)
		sendLog(logURLQuery)
	}
	LastCardName = card.CardName

	// Load art into ImgRenderCardArt — shared by both standard and Rush Duel paths
	if (!card.CardArt) {
		renderCardArtImgSrcByCardID(card)
	}

	if (GlobalCardLayout === "rushduel") {
		renderRushDuelCard(card)
		return
	}

	renderCardFrame(card)
	renderCardName(card)
	renderCardAttribute(card)
	renderCardTypeLevelRank(card)
	renderLinkArrow(card)
	renderMiscFooter(card)
	renderPendulum(card)
	// renderPendulum already does show/hide the art based on card.IsPendulum,
	// the following set value for both art elements but only one is visible
	if (card.CardArt) {
		byId("ImgRenderCardArtPendulum").className = "fitImgPendulum"
		byId("ImgRenderCardArtPendulum").src = card.CardArt
		byId("ImgRenderCardArtPendulum").dataset.artSource = ArtSource.Manual
		byId("ImgRenderCardArt").src = card.CardArt
		byId("ImgRenderCardArt").dataset.artSource = ArtSource.Manual
	} else {
		renderCardArtImgSrcByCardID(card)
	}

	let [chosenEffectElement, autoFontSize] = renderCardEffect(card)
	byId("AutoFont").value = autoFontSize
	byId("ChosenEffectElementID").value = chosenEffectElement.id

	updateExportCardJSONName(card)
}

function updateExportCardJSONName(card) {
	if (card.CardName === "" && card.MiscKonamiCardID === "") {
		document.getElementById("ExportCardJSONName").textContent = " "
		return
	}
	let cardID = card.MiscKonamiCardID // example "4095 errata<2014"
	cardID = cardID.replace("<", "_before_")
	cardID = cardID.replace(">", "_after_")
	let normalizedName = normalizeFileName(`${card.CardName}_${cardID}`)
	if (normalizedName !== "") {
		document.getElementById("ExportCardJSONName").textContent = normalizedName
	} else {
		document.getElementById("ExportCardJSONName").textContent = " "
	}
}

function renderRushDuelCard(card) {
	renderRushDuelFrame(card)
	renderRushDuelName(card)
	renderRushDuelAttribute(card)
	renderRushDuelLegend(card)
	renderRushDuelArt(card)
	renderRushDuelLevel(card)
	renderRushDuelLinkArrow(card)
	renderRushDuelAtkDef(card)
	renderRushDuelAbilities(card)
	renderRushDuelEffect(card)
	renderRushDuelFooter(card)
	updateExportCardJSONName(card)
}

function renderRushDuelFrame(card) {
	let frameMap = {
		[CardType.Token]: "card_frame_rushduel/fallback.svg",
		[CardType.Spell]: "card_frame_rushduel/spell.png",
		[CardType.Trap]: "card_frame_rushduel/trap.png",
		[CardSubtype.MonsterNormal]: "card_frame_rushduel/monster_normal.png",
		[CardSubtype.MonsterEffect]: "card_frame_rushduel/monster_effect.png",
		[CardSubtype.MonsterFusion]: "card_frame_rushduel/monster_fusion.png",
		[CardSubtype.MonsterRitual]: "card_frame_rushduel/monster_ritual.png",
		[CardSubtype.MonsterSynchro]: "card_frame_rushduel/monster_synchro.png",
		[CardSubtype.MonsterXyz]: "card_frame_rushduel/monster_xyz.png",
		[CardSubtype.MonsterLink]: "card_frame_rushduel/monster_link.png",
	}
	let fallback = "card_frame_rushduel/fallback.svg"
	let key = card.CardType
	if (card.CardType === CardType.Monster) {
		key = card.CardSubtype
	}
	byId("RenderCardRushduel").style.backgroundImage = `url(${frameMap[key] || fallback})`
}

function renderRushDuelName(card) {
	let e = byId("Rush_CardName")
	e.style.color = "black"
	if (card.CardType === CardType.Spell || card.CardType === CardType.Trap) {
		e.style.color = "white"
	} else if (
		card.CardSubtype === CardSubtype.MonsterXyz ||
		card.CardSubtype === CardSubtype.MonsterLink
	) {
		e.style.color = "white"
	}
	fitTextOneLine(card.CardName, e, 1.0)
}

function renderRushDuelAttribute(card) {
	let img = byId("ImgRush_Attribute")
	if (card.CardType === CardType.Spell) {
		img.src = MapImg.Spell
	} else if (card.CardType === CardType.Trap) {
		img.src = MapImg.Trap
	} else {
		img.src = MapImg[card.MonsterAttribute] || ""
	}
}

function renderRushDuelLegend(card) {
	if (!card.RushIsLegend) {
		byId("Rush_Legend").style.display = "none"
	} else {
		byId("Rush_Legend").style.display = ""
	}
}

function renderRushDuelArt(card) {
	let img = byId("ImgRush_Art")
	// ghost shares the same src as the main art; cRush_ArtGhost positions it at z-index:2
	// with low opacity so it bleeds through overlapping elements (Level, ATK, DEF, Attribute)
	let ghost = byId("ImgRush_ArtGhost")
	// card.CardArt is only set when artSource === ArtSource.Manual (user file upload);
	// otherwise mirror ImgRenderCardArt which holds the auto-fetched URL
	if (card.CardArt) {
		img.src = card.CardArt
		ghost.src = card.CardArt
		img.dataset.artSource = ArtSource.Manual
	} else {
		let stdImg = byId("ImgRenderCardArt")
		img.src = stdImg.src
		ghost.src = stdImg.src
		img.dataset.artSource = ArtSource.Auto
		stdImg.onload = () => {
			img.src = stdImg.src
			ghost.src = stdImg.src
		}
	}
}

function renderRushDuelLevel(card) {
	let e = byId("Rush_Level")
	let labelEl = byId("Rush_LevelLabel")
	if (card.CardType !== CardType.Monster && card.CardType !== CardType.Token) {
		e.style.display = "none"
		labelEl.style.display = "none"
		return
	}
	e.style.display = ""
	labelEl.style.display = ""
	let level = card.MonsterLevelRankLink || 0
	let levelNumEl = byId("Rush_LevelNumber")
	levelNumEl.textContent = level
	levelNumEl.classList.toggle(
		"cRushWhiteNumberRedOutline",
		card.CardSubtype !== CardSubtype.MonsterXyz && card.CardSubtype !== CardSubtype.MonsterLink,
	)
	levelNumEl.classList.toggle(
		"cRushWhiteNumberGrayOutline",
		card.CardSubtype === CardSubtype.MonsterXyz,
	)
	levelNumEl.classList.toggle(
		"cRushWhiteNumberBlueOutline",
		card.CardSubtype === CardSubtype.MonsterLink,
	)
	let isLink = card.CardSubtype === CardSubtype.MonsterLink
	if (isLink) {
		byId("Rush_LevelStar").style.display = "none"
		byId("Rush_LinkBadge_Off").style.display = ""
		byId("Rush_LinkBadge").style.display = ""
	} else {
		byId("Rush_LevelStar").style.display = ""
		byId("Rush_LinkBadge_Off").style.display = "none"
		byId("Rush_LinkBadge").style.display = "none"
	}
	if (card.CardSubtype === CardSubtype.MonsterXyz) {
		byId("Rush_LevelStar").src = MapImg.RushStarRank
		byId("Rush_LevelLabel").src = MapImg.RushBadgeLabelRank
	} else if (isLink) {
		byId("Rush_LevelLabel").src = MapImg.RushBadgeLabelLink
	} else {
		byId("Rush_LevelStar").src = MapImg.RushStarLevel
		byId("Rush_LevelLabel").src = MapImg.RushBadgeLabelLevel
	}
}

// toggles Rush Duel link badge arrows based on card.MonsterLinkArrows
function renderRushDuelLinkArrow(card) {
	for (let k in MapRushLinkArrow) {
		let el = document.getElementById(MapRushLinkArrow[k])
		if (el) {
			el.style.visibility = "hidden"
		}
	}
	if (card.CardSubtype !== CardSubtype.MonsterLink) {
		return
	}
	for (let v of card.MonsterLinkArrows) {
		let el = document.getElementById(MapRushLinkArrow[v])
		if (el) {
			el.style.visibility = "visible"
		}
	}
}

function renderRushDuelAtkDef(card) {
	let atkBadgeEl = byId("Rush_ATKBadge")
	let atkEl = byId("Rush_ATK")
	let defBadgeEl = byId("Rush_DEFBadge")
	let defEl = byId("Rush_DEF")
	let maxBadgeEl = byId("Rush_MaximumATKBadge")
	let maxEl = byId("Rush_MaximumATK")
	if (card.CardType !== CardType.Monster && card.CardType !== CardType.Token) {
		atkBadgeEl.style.display = "none"
		atkEl.style.display = "none"
		defBadgeEl.style.display = "none"
		defEl.style.display = "none"
		maxBadgeEl.style.display = "none"
		maxEl.style.display = "none"
		byId("Rush_AtkDefStrip").style.display = "none"
		return
	}
	let stripEl = byId("Rush_AtkDefStrip")
	stripEl.style.display = ""
	stripEl.classList.toggle("cRush_AtkDefStripLink", card.CardSubtype === CardSubtype.MonsterLink)
	let isMaximum = card.MonsterAbilities && card.MonsterAbilities.includes(Ability.RushMaximum)
	if (isMaximum && card.RushMaximumATK) {
		maxBadgeEl.style.display = ""
		maxEl.style.display = ""
		maxEl.textContent = card.RushMaximumATK
	} else {
		maxBadgeEl.style.display = "none"
		maxEl.style.display = "none"
	}
	atkBadgeEl.style.display = ""
	atkEl.style.display = ""
	if (card.CardSubtype === CardSubtype.MonsterLink) {
		defBadgeEl.style.display = "none"
		defEl.style.display = "none"
	} else {
		defBadgeEl.style.display = ""
		defEl.style.display = ""
	}
	let atkVal = String(card.MonsterATK)
	if (
		card.hasOwnProperty("MonsterATKStr") &&
		card.MonsterATKStr !== "" &&
		card.MonsterATKStr !== "-"
	) {
		atkVal = card.MonsterATKStr
	}
	let defVal = String(card.MonsterDEF)
	if (
		card.hasOwnProperty("MonsterDEFStr") &&
		card.MonsterDEFStr !== "" &&
		card.MonsterDEFStr !== "-"
	) {
		defVal = card.MonsterDEFStr
	}
	atkEl.textContent = atkVal
	defEl.textContent = defVal
}

function renderRushDuelAbilities(card) {
	let el = byId("Rush_MonsterAbilities")
	if (
		card.CardSubtype === CardSubtype.MonsterXyz ||
		card.CardSubtype === CardSubtype.MonsterLink
	) {
		el.style.color = "#E8E8E8"
	} else {
		el.style.color = ""
	}
	if (card.CardType === CardType.Monster) {
		fitTextOneLine(textMonsterAbilities(card), el, 1.0)
		return
	}

	let text = ""
	let iconSrc = ""
	if (card.CardType === CardType.Spell) {
		if (card.CardSubtype === CardSubtype.SpellNormal) {
			text = "[ Spell Card ]"
		} else {
			let subtypeName = MapCardSubtypeText[card.CardSubtype].replaceAll("Spell", "")
			text = `[ Spell Card / ${subtypeName} ]`
			iconSrc = MapImg[card.CardSubtype] || ""
		}
	} else if (card.CardType === CardType.Trap) {
		if (card.CardSubtype === CardSubtype.TrapNormal) {
			text = "[ Trap Card ]"
		} else {
			let subtypeName = MapCardSubtypeText[card.CardSubtype].replaceAll("Trap", "")
			text = `[ Trap Card / ${subtypeName} ]`
			iconSrc = MapImg[card.CardSubtype] || ""
		}
	}
	fitTextOneLine(text, el, 1.0)

	if (!iconSrc) {
		return
	}
	// fitTextOneLine creates: el > child(div) > [textNode, magicBaseline(div)]
	// Inject Spell/Trap subtype icon before the closing "]" character in the text node
	let child = el.firstChild
	if (!child || !child.firstChild) {
		return
	}
	let textNode = child.firstChild
	if (textNode.nodeType !== Node.TEXT_NODE) {
		return
	}
	textNode.textContent = textNode.textContent.slice(0, -1) // remove trailing "]"
	let img = document.createElement("img")
	img.src = iconSrc
	img.style.height = "1.15em" // matches fitTextOneLine default scaleH=1.15
	img.style.verticalAlign = "text-bottom"
	let magicBaseline = child.childNodes[1]
	child.insertBefore(img, magicBaseline)
	child.insertBefore(document.createTextNode(" ]"), magicBaseline)
}

function renderRushDuelEffect(card) {
	let e = byId("Rush_Effect")
	let effectHTML = ""
	if (card.CardEffect) {
		effectHTML = escapeHTML(card.CardEffect)
	}
	e.innerHTML = effectHTML

	if (card.CardSubtype === CardSubtype.MonsterNormal) {
		e.style.fontStyle = "italic"
	} else {
		e.style.fontStyle = ""
	}

	let twitchFont = parseFloat(byId("TwitchFont").value)
	let twitchScaleY = parseFloat(byId("TwitchFontScaleY").value)
	if (twitchFont > 0) {
		e.style.fontSize = twitchFont + "px"
		e.style.transform = `scale(1.0, ${twitchScaleY})`
		e.style.transformOrigin = "top left"
	} else {
		let fontSize = 42
		e.style.fontSize = fontSize + "px"
		e.style.transform = ""
		while (e.scrollHeight > e.clientHeight && fontSize > 18) {
			fontSize -= 0.5
			e.style.fontSize = fontSize + "px"
		}
		byId("AutoFont").value = fontSize
	}

	byId("ChosenEffectElementID").value = e.id
}

function renderRushDuelFooter(card) {
	let copyleft = `🄯`
	if (IsNotLinuxOS) {
		copyleft = `Ⓨ`
	}
	let footLeft = ""
	if (card.MiscYear || card.MiscCreator) {
		footLeft = `${copyleft}${card.MiscYear} ${card.MiscCreator}`
	}
	fitTextOneLine(footLeft, byId("Rush_FooterLeft"), 1.0, 1.0, 1.0)
	let passwordAndID =
		card.DisplayPasswordAndCardID ||
		toDisplayPasswordAndCardID(card.MiscCardPassword, card.MiscKonamiCardID)
	fitTextOneLine(passwordAndID, byId("Rush_PasswordAndID"), 1.0, 1.0, 1.0)
	let footerRightEl = byId("Rush_FooterRight")
	if (passwordAndID.length < 10) {
		// expand right up to the left edge of cRush_PasswordAndID (740px),
		// right edge is fixed at 1180-66=1114px, so max width = 374px
		footerRightEl.style.width = "374px"
	} else {
		footerRightEl.style.width = ""
	}
	fitTextOneLine(card.MiscKonamiSet || "", footerRightEl, 1.0, 1.0, 1.0)
}

function renderCardFrame(card) {
	let s = byId("RenderCard").style
	if (card.CardType === CardType.Spell) {
		s.backgroundImage = "url(card_frame/spell.png)"
	} else if (card.CardType === CardType.Trap) {
		s.backgroundImage = "url(card_frame/trap.png)"
	} else if (card.CardType === CardType.Token) {
		s.backgroundImage = "url(card_frame/monster_token.png)"
	} else {
		// CardType.Monster
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
	if (card.CardType === CardType.Spell || card.CardType === CardType.Trap) {
		e.style.color = "white"
	} else if (card.CardType === CardType.Monster) {
		if (
			card.CardSubtype === CardSubtype.MonsterXyz ||
			card.CardSubtype === CardSubtype.MonsterLink
		) {
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
			level.style.visibility = "visible"
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
			rank.style.visibility = "visible"
			for (let i = 1; i <= 12; i++) {
				if (i <= card.MonsterLevelRankLink) {
					byId(`BlackStarWrap${i}`).style.visibility = "visible"
				} else {
					byId(`BlackStarWrap${i}`).style.visibility = "hidden"
				}
			}
		} else {
			rank13.style.display = ""
			rank13.style.visibility = "visible"
		}
	} else {
		// Spell or Trap
		cardType.style.display = ""
		let textContent = ""
		let spaceImg = " ".repeat(5) // depend on `fontCardType` in CSS
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
		if (tmp) {
			tmp.style.visibility = "visible"
		}
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
		let innerHTML = escapeHTML(card.CardEffect)
		e.innerHTML = innerHTML
		let s = window.getComputedStyle(e)
		let fontSizePx = chooseFontSize(
			innerHTML,
			e.clientWidth,
			e.clientHeight,
			s.fontFamily,
			s.fontWeight,
		)
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

	let effectHTML = escapeHTML(card.CardEffect)
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
	let fontSizePx = chooseFontSize(
		effectHTML,
		e1.clientWidth,
		e1.clientHeight,
		s1.fontFamily,
		s1.fontWeight,
	)
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
		let reFontSizePx = chooseFontSize(
			effectHTML,
			e2.clientWidth,
			e2.clientHeight,
			s2.fontFamily,
			s2.fontWeight,
		)
		// console.log(`chooseFontSize RenderMonsterEffectSmall: ${reFontSizePx}`)
		e2.style.fontSize = reFontSizePx + "px"
		e2.innerHTML = effectHTML
		renderMonsterAbilities(card, a2)
		return [e2, reFontSizePx]
	}
}

function textMonsterAbilities(card) {
	let separator = " / "
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
	if (
		card.hasOwnProperty("MonsterATKStr") &&
		card.MonsterATKStr !== "" &&
		card.MonsterATKStr !== "-"
	) {
		displayStrATK = card.MonsterATKStr
	} else {
		displayStrATK = card.MonsterATK.toString()
	}

	let scaleStrQuestionMark = 1.2
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
	if (
		card.hasOwnProperty("MonsterDEFStr") &&
		card.MonsterDEFStr !== "" &&
		card.MonsterDEFStr !== "-"
	) {
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
		for (let v of all) {
			v.style.color = "black"
		}
	} else {
		if (card.CardSubtype === CardSubtype.MonsterXyz) {
			for (let v of all) {
				v.style.color = "rgb(224,224,224)"
			}
		} else {
			for (let v of all) {
				v.style.color = "black"
			}
		}
	}

	let scaleFont = 1.0,
		scaleH = 1.15,
		scaleW = 1.0
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
	let pEffectHTML = escapeHTML(card.PendulumEffect)
	let s = window.getComputedStyle(pEffect)
	let fontSizePx = chooseFontSize(
		pEffectHTML,
		pEffect.clientWidth,
		pEffect.clientHeight,
		s.fontFamily,
		s.fontWeight,
	)
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

// escapeHTML sanitizes a card text string for safe innerHTML assignment:
// escapes HTML special chars then converts newlines to <br> tags.
function escapeHTML(str) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/\n/g, "<br>")
}

// getText gets all text from an HTML element
function getText(node) {
	let resultArray = []

	function getTextRecur(node) {
		if (node.nodeType === 3) {
			// "3" is text node
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

// exportCardPNG downloads the rendered card as a PNG image.
// TODO: implement — html2canvas, dom-to-image, and rasterizeHTML all had issues.
function exportCardPNG() {
	alert("Export PNG is not yet implemented.")
}

// downloadAsImage makes browser download dataURL as a PNG image,
// output name based on current time
function downloadAsImage(dataURL) {
	let now = new Date().toISOString()
	now = now.replace(/[^A-Za-z0-9]/g, "")
	let outputFileName = `${now}.png`
	let link = document.createElement("a")
	link.id = "downloadAsImage"
	if (typeof link.download === "string") {
		link.href = dataURL
		link.download = outputFileName
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	} else {
		window.open(dataURL)
	}
}

function fmtSec(ms) {
	return `${ms / 1000}s`
}

//  AllowChars are lowercase alphanumeric, good for file name cross-platform
let AllowChars = {}
for (let char of "abcdefghijklmnopqrstuvwxyz_.0123456789".split("")) {
	AllowChars[char] = true
}

function normalizeFileName(str) {
	let ret = []
	for (let char of str.toLowerCase().split("")) {
		if (!AllowChars[char]) {
			ret.push("_")
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
		card.CardArt = "" // art file size is very big
	}
	let link = document.createElement("a")
	let beauty = JSON.stringify(card, null, "\t")
	link.href = `data:text/json;charset=utf-8,${encodeURIComponent(beauty)}`
	let cardID = card.MiscKonamiCardID // example "4095 errata<2014"
	cardID = cardID.replace("<", "_before_")
	cardID = cardID.replace(">", "_after_")
	link.download = normalizeFileName(`${card.CardName}_${cardID}.json`)
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

function importCardJSON(jsonDataURI) {
	// console.log(`importCardJSON jsonDataURI: ${jsonDataURI}`)
	// https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
	let prefixLen = "data:application/json;base64,".length
	let jsonStr = atob(jsonDataURI.substring(prefixLen)) // bad Unicode char
	let binStringUnicode = Uint8Array.from(jsonStr, (m) => m.codePointAt(0))
	let jsonStrUnicode = new TextDecoder().decode(binStringUnicode)
	GlobalCard = JSON.parse(jsonStrUnicode)
	ensureCardHasAltArtID(GlobalCard)

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
		GlobalCard.MiscCardPassword = GlobalCard.MiscCardPassword.padStart(8, "0")
	}

	// automatically change Creator "daominah" to "daominah.github.io"
	// so people know where to find this card editor
	if (GlobalCard.MiscCreator === "daominah") {
		GlobalCard.MiscCreator = DefaultCreator
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
				CardName: c.CardName,
				// "CardEffect": [c.CardEffect, c.PendulumEffect].join(" "),
				id: c.MiscKonamiCardID,
			})
		}
		let duration = new Date() - beginT
		console.log(`indexed card database, dur: ${fmtSec(duration)}`)
	})
}

function konamiDatabaseURL(cardID, language = "ja") {
	return (
		`https://www.db.yugioh-card.com/yugiohdb/card_search.action` +
		`?ope=2&request_locale=${language}&cid=${cardID}`
	)
}

function SearchCardDatabase() {
	let searchQuery = document.getElementById("SearchCardQuery").value

	if (searchQuery) {
		let logURLQuery = `?func=SearchCardDatabase&searchQuery=${searchQuery}`
		console.log(logURLQuery)
		sendLog(logURLQuery)
	}

	let searchResult = [] // []Card
	let limit = 14,
		offset = 0 // TODO: paginate search result
	// search: https://github.com/olivernn/lunr.js
	let matches,
		err = null
	try {
		matches = IndexCardDatabase.search(searchQuery)
	} catch (exception) {
		err = exception
		console.log(
			`debug searchQuery ${searchQuery} causes exception IndexCardDatabase.search: ${err}, ${err === null}`,
		)
	}
	if (matches === undefined || matches === null || matches.length === 0) {
		// slow search string contain
		for (let card of CardDatabase) {
			// console.log(`debug SearchCardDatabase: ${card.CardName}`)
			if (card.CardName.toLowerCase().includes(searchQuery.toLowerCase())) {
				searchResult.push(card)
			}
			if (searchResult.length >= limit) {
				break
			}
		}
	} else {
		let indexedResult = matches.slice(offset, offset + limit)
		for (let v of indexedResult) {
			// e.g. v = {"ref":"14297","score":7.307,"matchData":{"metadata":{"avramax":{"CardName":{}}}}}
			if (!v.ref) {
				continue
			}
			if (!MapCardDatabase[v.ref]) {
				continue
			}
			searchResult.push(MapCardDatabase[v.ref])
		}
	}

	// clone before processing because displaying DO modify card object
	let cloneResult = []
	for (let card of searchResult) {
		let cloned = JSON.parse(JSON.stringify(card))
		ensureCardHasAltArtID(cloned) // Ensure AltArtID is present (CardDatabase items don't have it)
		cloneResult.push(cloned)
	}
	let resultWrap = document.getElementById("SearchCardResult")
	resultWrap.innerHTML = ""
	for (let card of cloneResult) {
		if (!card) {
			continue
		}
		let row = document.createElement("div")
		row.className = "searchRow"
		let cardName = document.createElement("div")
		cardName.textContent = card.CardName
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
			if (mouseEvent.target !== this) {
				// click on a descendant
				if (mouseEvent.target.tagName === "A") {
					// open Konami link, do not refresh GlobalCard
					return
				}
			}
			// console.log(`mouseEvent searchRow: ${mouseEvent.target}`,)
			if (!card.MiscCreator) {
				// keep current "Creator" inputted by user
				card.MiscCreator = byId("Creator").value
			}

			// prefer to show alt art instead of default art when click on search result
			if (MapAltArts[card.MiscKonamiCardID] && MapAltArts[card.MiscKonamiCardID].length > 0) {
				let altArtIDs = MapAltArts[card.MiscKonamiCardID]
				card.AltArtID = altArtIDs[altArtIDs.length - 1]
			}

			GlobalCard = card
			ensureCardHasAltArtID(GlobalCard)
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
	let documentWidth = document.body.scrollWidth
	let docH = document.body.scrollHeight
	console.log(
		`${new Date().toISOString()} document: ${documentWidth}x${docH}, view: ${viewWidth}x${vpH}`,
	)

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
	let scale = Number(scaleStr)
	if (scale !== 1) {
		document.body.style.transform = `scale(${scaleStr})`
		document.body.style.transformOrigin = "top left"
		// scale() is visual only: the layout box keeps its original size,
		// so we shrink html to hide the phantom scroll space
		document.documentElement.style.height = "100vh"
		document.documentElement.style.overflow = "hidden"
		document.body.style.width = 100 / scale + "%"
		document.body.style.height = 100 / scale + "vh"
		document.body.style.overflow = "auto"
	} else {
		document.body.style.transform = ""
		document.documentElement.style.height = ""
		document.documentElement.style.overflow = ""
		document.body.style.width = ""
		document.body.style.height = ""
		document.body.style.overflow = ""
	}
}

function handleClickCardLayout(layout) {
	GlobalCardLayout = layout
	localStorage.setItem(StorageKeyCardLayout, layout)
	if (layout === "standard") {
		byId("RenderCard").style.display = ""
	} else {
		byId("RenderCard").style.display = "none"
	}
	if (layout === "rushduel") {
		byId("RenderCardRushduel").style.display = ""
	} else {
		byId("RenderCardRushduel").style.display = "none"
	}
	let rushElements = document.querySelectorAll(".rushDuelOnly")
	for (let i = 0; i < rushElements.length; i++) {
		if (layout === "rushduel") {
			rushElements[i].style.display = ""
		} else {
			rushElements[i].style.display = "none"
		}
	}
	byId("RushMaximumATKWrap").classList.toggle("disabledElement", !byId("Maximum").checked)
	updateCardState()
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
	console.log(
		`StorageKeyArtResolution: ${localStorage.getItem(StorageKeyArtResolution)}, host: ${getArtHost()}`,
	)
	renderCard(GlobalCard)
}

function getArtHost() {
	// Cloudflared on SG1
	if (localStorage.getItem(StorageKeyArtResolution) === "2048") {
		return "https://mdygo2048.daominah.uk"
	}
	return "https://mdygo.daominah.uk"
}

// getSelectedAltArtID returns the altArtID corresponding to the selected radio
function getSelectedAltArtID() {
	let selector = byId("AltArtSelector")
	let radios = selector.querySelectorAll('input[type="radio"][name="AltArt"]')
	for (let radio of radios) {
		if (radio.checked) {
			return radio.value
		}
	}
	return ""
}

// loadHTMLAltArtSelector inits the alt art selector based on the current cardID,
// if the cardID is the same as existing radio buttons, this function does nothing
// @param {string} cardID: the card ID (e.g., "4007")
// @param {string} preferredArtID: optional preferred alt art ID to select
function loadHTMLAltArtSelector(cardID, preferredArtID) {
	let section = byId("AltArtSection")
	let label = byId("AltArtLabel")
	let selector = byId("AltArtSelector")

	// check if we need to reload alt arts radios for the input cardID,
	// if the radio buttons already created from the same cardID, this does nothing
	if (section.dataset.originalCardId === String(cardID) && selector.children.length > 0) {
		return
	}

	selector.innerHTML = "" // Clear existing radios

	// no alt arts data, just hide the label and radios
	if (!cardID || cardID.length === 0) {
		// Hide label but keep space (use visibility to maintain height)
		label.style.visibility = "hidden"
		return
	}
	let altArtIDs = MapAltArts[cardID]
	if (!altArtIDs || altArtIDs.length === 0) {
		label.style.visibility = "hidden"
		return
	}

	label.style.visibility = "visible"
	section.dataset.originalCardId = cardID

	// Helper function to create a radio button with common onchange handler
	function createAltArtRadio(radioID, radioValue, isChecked) {
		let label = document.createElement("label")
		let radio = document.createElement("input")
		radio.type = "radio"
		radio.name = "AltArt"
		radio.id = radioID
		radio.value = radioValue
		radio.checked = isChecked
		radio.onchange = function () {
			updateCardState()
		}
		label.appendChild(radio)
		label.appendChild(document.createTextNode(` ${radioID} `))
		selector.appendChild(label)
	}

	// Select DefaultArt by default, unless preferredArtID matches an alt art
	let defaultArtChecked = true
	for (let i = 0; i < altArtIDs.length; i++) {
		let altID = altArtIDs[i]
		let isChecked = preferredArtID && preferredArtID === altID
		if (isChecked) {
			defaultArtChecked = false // uncheck default if alt art matches
		}
		createAltArtRadio(`AltArt${altID}`, altID, isChecked)
	}
	createAltArtRadio("DefaultArt", cardID, defaultArtChecked)
}

// renderCardArtImgSrcByCardID automatically set card art URL src based on
// cardID and selected alt art (if any).
// Note that "ImgRenderCardArt" elements can be updated by inputting file too,
// this func should not be called in that case to avoid overwriting user input.
function renderCardArtImgSrcByCardID(card) {
	let lenCardArtBegin = 0
	if (card.CardArt) {
		lenCardArtBegin = card.CardArt.length
	}
	console.log(
		`begin renderCardArtImgSrcByCardID cardID=${card.MiscKonamiCardID}, altArtID=${card.AltArtID}, lenCartArt=${lenCardArtBegin}`,
	)
	if (!card) {
		return
	}
	if (!card.MiscKonamiCardID || card.MiscKonamiCardID.length === 0) {
		// prevent browser try "daominah.uk/.png" when cardID is empty,
		// which will show a red 404 error in console
		byId("ImgRenderCardArtPendulum").src = ""
		byId("ImgRenderCardArtPendulum").dataset.artSource = ArtSource.Auto
		byId("ImgRenderCardArt").src = ""
		byId("ImgRenderCardArt").dataset.artSource = ArtSource.Auto
		return
	}
	let artID = card.MiscKonamiCardID
	if (card.AltArtID && card.AltArtID.length > 0) {
		artID = card.AltArtID
	}
	let daominahArtURL = `${getArtHost()}/${artID}.png`
	byId("ImgRenderCardArtPendulum").className = "fitImgPendulumLong"
	byId("ImgRenderCardArtPendulum").src = daominahArtURL
	byId("ImgRenderCardArtPendulum").dataset.artSource = ArtSource.Auto
	byId("ImgRenderCardArt").src = daominahArtURL
	byId("ImgRenderCardArt").dataset.artSource = ArtSource.Auto
	let lenCardArtEnd = 0
	if (card.CardArt) {
		lenCardArtEnd = card.CardArt.length
	}
	console.log(
		`end renderCardArtImgSrcByCardID CardArtSrc=${daominahArtURL}, lenCardArt=${lenCardArtEnd}`,
	)
}

window.onload = () => {
	HandleClickScalePage(localStorage.getItem(StorageKeyScale))
	HandleClickArtResolution(localStorage.getItem(StorageKeyArtResolution))

	loadMonsterTypeElements()
	loadMonsterLevelRankElements()

	let savedLayout = localStorage.getItem(StorageKeyCardLayout) || "standard"
	handleClickCardLayout(savedLayout)
	if (savedLayout === "standard") {
		byId("LayoutStandard").checked = true
	} else {
		byId("LayoutRushduel").checked = true
	}

	loadCardToHTML(DefaultCard)

	// handling user choosing a file (from their computer) as card art
	byId("CardArt").addEventListener("change", (ev) => {
		if (!ev.target.files || !ev.target.files.length) {
			return null
		}
		let r = new FileReader()
		r.onload = function (event) {
			if (window.getComputedStyle(byId("RenderCardArt")).display !== "none") {
				let img = byId("ImgRenderCardArt")
				img.setAttribute("src", event.target.result)
				img.dataset.artSource = ArtSource.Manual
			} else {
				let img = byId("ImgRenderCardArtPendulum")
				img.setAttribute("src", event.target.result)
				img.dataset.artSource = ArtSource.Manual
			}
			// set GlobalCard.CardArt consistent with the pattern of
			// updating "colLeft" updates GlobalCard.
			if (GlobalCard) {
				GlobalCard.CardArt = event.target.result
			}
			updateCardState()
		}
		r.readAsDataURL(ev.target.files[0])
	})
	byId("ImportCardJSONFile").addEventListener("change", (ev) => {
		if (!ev.target.files || !ev.target.files.length) {
			return null
		}
		let r = new FileReader()
		r.onload = function (event) {
			// console.log(`data ImportCardJSONFile: ${event.target.result}`)
			importCardJSON(event.target.result)
		}
		r.readAsDataURL(ev.target.files[0])
	})

	for (let v of document.getElementsByName("CardType")) {
		v.onclick = function () {
			handleClickCardType(v.id)
		}
	}

	byId("SearchCardQuery").addEventListener("keyup", function (event) {
		if (event.key === "Enter") {
			byId("SearchCardDatabase").click()
		}
	})

	// Tab cycles through radio buttons within the same group
	// instead of jumping to the next form element
	for (let groupName of ["ArtResolution", "CardLayout"]) {
		let radios = document.getElementsByName(groupName)
		for (let radio of radios) {
			radio.addEventListener("keydown", function (event) {
				if (event.key !== "Tab") {
					return
				}
				event.preventDefault()
				let list = Array.from(radios)
				let idx = list.indexOf(this)
				let next = list[(idx + 1) % list.length]
				next.focus()
				next.click()
			})
		}
	}

	// Tab/Shift+Tab cycles through DevTestCards buttons, clicking each one
	{
		let buttons = byId("DevTestCards").querySelectorAll("button")
		for (let btn of buttons) {
			btn.addEventListener("keydown", function (event) {
				if (event.key !== "Tab") {
					return
				}
				event.preventDefault()
				let list = Array.from(buttons)
				let idx = list.indexOf(this)
				let step = 1
				if (event.shiftKey) {
					step = -1
				}
				let next = list[(idx + step + list.length) % list.length]
				next.focus()
				next.click()
			})
		}
	}

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
	if (
		OperatingSystem.toLowerCase().includes("mac") ||
		OperatingSystem.toLowerCase().includes("win")
	) {
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
		let replaceClasses = [] // to avoid changing the array while looping
		for (let i = 0; i < needCSSWindows.length; i++) {
			for (let k = 0; k < needCSSWindows[i].classList.length; k++) {
				let oldClass = needCSSWindows[i].classList[k]
				if (oldClass !== "db") {
					// "db" means debug
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
	if (!IsWindowsOS) {
		let needCSSLinux = [
			document.getElementById("Rush_LevelNumber"),
			document.getElementById("Rush_ATK"),
			document.getElementById("Rush_DEF"),
			document.getElementById("Rush_MaximumATK"),
		]
		let replaceClasses = []
		for (let i = 0; i < needCSSLinux.length; i++) {
			for (let k = 0; k < needCSSLinux[i].classList.length; k++) {
				let oldClass = needCSSLinux[i].classList[k]
				if (oldClass !== "db" && !oldClass.startsWith("cRushWhiteNumber")) {
					replaceClasses.push(oldClass)
				}
			}
		}
		for (let i = 0; i < replaceClasses.length; i++) {
			let oldClass = replaceClasses[i]
			let newClass = oldClass + "Linux"
			needCSSLinux[i].classList.remove(oldClass)
			needCSSLinux[i].classList.add(newClass)
		}
	}

	updateCardState()
	if (Boolean(window.chrome)) {
		// workaround Chromium based browsers calculate wrong font width
		// at the first load
		setTimeout(function () {
			renderCard(GlobalCard)
		}, 500)
	}

	// CardDatabase is declared in file `konami_data/konami_db_en.js`
	if (typeof CardDatabase === "undefined" || CardDatabase === null) {
		console.log(`error CardDatabase is undefined`)
	} else {
		buildIndexCardDatabase()
	}
	byId("SearchCardDatabase").click()
	// pulse the first result row to draw attention to the card database on first load
	setTimeout(function () {
		let firstRow = byId("SearchCardResult").querySelector(".searchRow")
		if (firstRow) {
			firstRow.classList.add("firstResultBeacon")
		}
	}, 0)

	setTimeout(function () {
		PerfNav = performance.getEntriesByType("navigation")[0]
		let durPageDownloaded = PerfNav.domInteractive
		let durOnload = PerfNav.loadEventEnd - PerfNav.loadEventStart
		console.log(
			`duration downloading page: ${fmtSec(durPageDownloaded)}, onload func: ${fmtSec(durOnload)}`,
		)
	}, 0) // setTimeout 0 is similar to defer
}
