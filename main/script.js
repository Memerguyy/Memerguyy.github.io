// if you see this, may god forgive your eyes for the shitshow that is my code, thank you, good luck

const meowThing = document.getElementById("meow")
const jScript = document.getElementById("javascript")
const rightBar = document.getElementById("rightBar")
const delay = ms => new Promise(res => setTimeout(res, ms));

const container = document.getElementById("thoughtTabs")
const tabsList = container.querySelector("ul")
const tabButtons = tabsList.querySelectorAll(".buttons")
const tabPanels = container.querySelectorAll("#tabsPanels > div")

tabButtons.forEach((tab, index) => {
    if (index === 0) {

    } else {
        tabPanels[index].setAttribute("hidden", "")
    }
});

container.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("a")
    const tabber = container.querySelectorAll("ul li a")
    console.log(tabber)
    if(!clickedTab) return;
    e.preventDefault()
    
    tabber.forEach((list) => {
        list.style.backgroundColor = '#5e3070'
    })

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
    alert("Lol I'm not for hire xd I can barely move my own ass up for myself in the mornings, no way can I do the same for others")
}

function startMeow() {
    meowThing.play()
}

async function itsMyBest() {
    jScript.style.opacity = 0
    await delay(400)
    rightBar.innerHTML = "<h1>NO MORE JAVASCRIPT YOU LOST THOSE RIGHTS<hr></h1>"
}
// add jarek button that fades in obscuring entire screen because funny