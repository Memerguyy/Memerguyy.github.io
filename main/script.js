// if you see this, may god forgive your eyes for the shitshow that is my code, thank you, good luck
const tabXclass = document.getElementsByClassName("x")
const specialX = document.getElementById("x-special")

const XPChord = document.getElementById("audiotag")

const Ahri = document.getElementById("ahriMessage")
const fourchan = document.getElementById("fourchanWarning")

const meowThing = document.getElementById("meow")
const jScript = document.getElementById("javascript")
const rightBar = document.getElementById("rightBar")
const delay = ms => new Promise(res => setTimeout(res, ms));

const tab1 = document.getElementById("tab1")
const tab2 = document.getElementById("tab2")
const gaming = document.getElementById("specialTitle")

const container = document.getElementById("thoughtTabs")
const tabsList = container.querySelector("ul")
const tabButtons = tabsList.querySelectorAll(".buttons")
const tabPanels = container.querySelectorAll("#tabsPanels > div")

let cboxCounter = 1
const cboxTitle = document.getElementById("cboxTitle")
const cbox = document.getElementById("cbox")

for (let i = 0; i < tabXclass.length; i++) {
    tabXclass[i].addEventListener('click', (e) => {
        console.log(tabXclass[i].parentElement.parentElement.style = "display:none;")
    })
}

specialX.addEventListener('click', (e) => {
    specialX.parentElement.parentElement.style = "display:none;"
})

async function Ahrimessage() {
    await delay(700)
    XPChord.play()
    Ahri.removeAttribute("hidden")
    await delay(5000)
    Ahri.setAttribute("hidden", true)
}

async function fourChanWarning() {
    XPChord.play()
    fourchan.removeAttribute("hidden")
    await delay(5000)
    fourchan.setAttribute("hidden", true)
}

container.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("a")
    // const forStyle = e.target.closest("href")
    const whichHref = clickedTab.getAttribute("href")
    const tabber = container.querySelectorAll("ul li a")
    console.log(tabber)
    if(!clickedTab) return;
    e.preventDefault()
    
    tabber.forEach((list) => {
        list.style.backgroundColor = '#5e3070'    
        list.style.border = '2px outset rgb(67, 41, 82)'    
    })

    if (clickedTab.id == 'tab1') {
        container.style.backgroundImage = 'url(/assets/mainAssets/RGbg.gif)'
        clickedTab.style.backgroundColor = '#644686'
    } else if (clickedTab.id == 'tab2') {
        container.style.backgroundImage = 'url(assets/mainAssets/StatusBg.gif)'
    }
    
    switchTab(clickedTab)
    clickedTab.style.backgroundColor = '#644686'

    if (whichHref == '#statuscafe') {
        console.log(tab2.style = 'background-color: #1c6d62 !important; border: 2px outset #0a332a;')
        tab1.style = 'background-color: #114740 !important; border: 2px outset #0a332a !important;'
        gaming.classList.remove("title")
        gaming.classList.add("titleStatus")        
    } else {
        gaming.classList.remove("titleStatus")
        gaming.classList.add("title")
    }
});

function switchTab(newTab) {
    const activePanelId = newTab.getAttribute("href")
    const activePanel = container.querySelector(activePanelId)
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true)
    });
    activePanel.removeAttribute("hidden")
}

function alertLol(){
    alert("Lol I'm not for hire I'm wayy too lazy")
}

function startMeow() {
    meowThing.play()
}

async function itsMyBest() {
    jScript.style.opacity = 0
    await delay(400)
    rightBar.innerHTML = "<h1>NO MORE RIGHT BAR SINCE YOU WANTED TO BE SO SMART</h1>"
    rightBar.style.lineHeight = "50px"
}
// add jarek button that fades in obscuring entire screen because funny

cboxTitle.addEventListener("click", (e) => {
    cbox.click()
    console.log("clicked!")
});

cbox.onclick = () => {
    console.log(cboxCounter)
    
    if (cboxCounter == 1) {
        cbox.removeAttribute("hidden")
        
        cboxCounter += 1 
    } else if(cboxCounter >= 2) {
        cbox.setAttribute("hidden", true)
        cboxCounter = 1
    }
}