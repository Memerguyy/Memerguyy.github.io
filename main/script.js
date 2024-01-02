// if you see this, may god forgive your eyes for the shitshow that is my code, thank you, good luck

const meowThing = document.getElementById("meow")
const jScript = document.getElementById("javascript")
const rightBar = document.getElementById("rightBar")
const delay = ms => new Promise(res => setTimeout(res, ms));

const container = document.getElementById("thoughtTabs")
const tabsList = container.querySelector("ul")
const tabButtons = tabsList.querySelectorAll(".buttons")
const tabPanels = container.querySelectorAll("#tabsPanels > div")

let cboxCounter = 1
const cboxTitle = document.getElementById("cboxTitle")
const cbox = document.getElementById("cbox")

container.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("a")
    const tabber = container.querySelectorAll("ul li a")
    console.log(tabber)
    if(!clickedTab) return;
    e.preventDefault()
    
    tabber.forEach((list) => {
        list.style.backgroundColor = '#5e3070'
    })

    if (clickedTab.id == 'tab1') {
        container.style.backgroundImage = 'url(/assets/mainAssets/RGbg.gif)'
    } else {
        container.style.backgroundImage = 'url(/assets/mainAssets/flowerzdark.png)'
    }

    switchTab(clickedTab)
    clickedTab.style.backgroundColor = '#644686'
});

function switchTab(newTab) {
    const activePanelId = newTab.getAttribute("href")
    const activePanel = container.querySelector(activePanelId)
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true)
    });
    activePanel.removeAttribute("hidden", false)
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
    rightBar.innerHTML = "<h1>NO MORE RIGHT BAR SINCE YOU WANTED TO BE SO SMART<hr></h1>"
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