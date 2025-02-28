// if you see this, may god forgive your eyes for the shitshow that is my code, thank you, good luck

window.onload = () => {
    console.log("▄▀█ █▄░█ █▄█   █▀▀ █▀█ █▄░█ █▀ █▀█ █░░ █▀▀   █░░ █▀█ █▀▀ █▀   █▄█ █▀█ █░█   █▀ █▀▀ █▀▀   ▄▀█ █▀█ █▀▀\n█▀█ █░▀█ ░█░   █▄▄ █▄█ █░▀█ ▄█ █▄█ █▄▄ ██▄   █▄▄ █▄█ █▄█ ▄█   ░█░ █▄█ █▄█   ▄█ ██▄ ██▄   █▀█ █▀▄ ██▄\n█▀█ █░█ █▀█ █▀▀ █░░ █▄█   █▀▀ █▀█ █▀█   █▀▄ █▀▀ █▄▄ █░█ █▀▀   █▀█ █░█ █▀█ █▀█ █▀█ █▀ █▀▀ █▀ ░   █\n█▀▀ █▄█ █▀▄ ██▄ █▄▄ ░█░   █▀░ █▄█ █▀▄   █▄▀ ██▄ █▄█ █▄█ █▄█   █▀▀ █▄█ █▀▄ █▀▀ █▄█ ▄█ ██▄ ▄█ █   █\n█▀▀ ▄▀█ █▄░█ ▀ ▀█▀   █▄▄ █▀▀   █▄▄ █▀█ ▀█▀ █░█ █▀▀ █▀█ █▀▀ █▀▄   ▀█▀ █▀█   █▀█ █▀▀ █▀▄▀█ █▀█ █░█ █▀▀   ▀█▀ █░█ █▀▀ █▀▄▀█\n█▄▄ █▀█ █░▀█ ░ ░█░   █▄█ ██▄   █▄█ █▄█ ░█░ █▀█ ██▄ █▀▄ ██▄ █▄▀   ░█░ █▄█   █▀▄ ██▄ █░▀░█ █▄█ ▀▄▀ ██▄   ░█░ █▀█ ██▄ █░▀░█")
    sidebar();
    let hue= 0
    const aBElems = document.querySelector(`#awesomeBox`)
    setInterval(() => {
        if (hue<360) {
            hue++
            aBElems.style.filter = `hue-rotate(${hue}deg)`
        } else {
            hue = 0
        }
    }, 10);
}
//  general variables
const audioStop = document.getElementById("audioStop")
const portal = document.getElementById("portalAudio")

const tabXclass = document.getElementsByClassName("x")
const specialX = document.getElementById("x-special")

const XPChord = document.getElementById("audiotag")
const XPExclem = document.getElementById("exclemSound")

const Ahri = document.getElementById("ahriMessage")
const fourchan = document.getElementById("fourchanWarning")
const memer = document.getElementById("memerButton")

const meowThing = document.getElementById("meow")
const jScript = document.getElementById("javascript")
const rightBar = document.getElementById("rightBar")
const delay = ms => new Promise(res => setTimeout(res, ms));

const tab1 = document.getElementById("tab1")
const tab2 = document.getElementById("tab2")
const tab3 = document.getElementById("tab3")
const gaming = document.getElementById("specialTitle")

const container = document.getElementById("thoughtTabs")
const tabsList = container.querySelector("ul")
const tabButtons = tabsList.querySelectorAll(".buttons")
const tabPanels = container.querySelectorAll("#tabsPanels > div")

const sdBar = document.getElementById("infSidebar")

let cboxCounter = 1
const cboxTitle = document.getElementById("cboxTitle")
const cbox = document.getElementById("cbox")
//  -----------------------------------------------------------------------------------------------
async function hideScroll(elemClick) {
    elemClick.checked ? document.body.classList.add("hide-scrollbar") : document.body.classList.remove("hide-scrollbar")
}

// -----------------------------------------------------------------------------------------------
function sidebar() {
    const sidebarStopOrPlay = document.querySelectorAll("#infSidebar > ul")
    console.log(sidebarStopOrPlay + " this is a test")
    sidebarStopOrPlay.forEach((e) => {
        e.addEventListener('mouseover', () =>{
            e.style = 'animation-play-state: paused;'
        })
        e.addEventListener('mouseout', () => {
            e.style = 'animation-play-state: running;'
        })
        
    })
}
// -----------------------------------------------------------------------------------------------
let elemClickInt = 1
document.addEventListener('click', (e) => {
    let elemClick = e.target;
    if (elemClick == document.querySelector("body")) {
        return 
    } else if (elemClick) {
        elemClick.parentElement.style.zIndex = elemClickInt +1
        elemClickInt += 1
    }
    console.log(elemClick)
});
// -----------------------------------------------------------------------------------------------
for (let i = 0; i < tabXclass.length; i++) {
    tabXclass[i].addEventListener('click', (e) => {
        console.log(tabXclass[i].parentElement.parentElement.style = "visibility: hidden;")
    })
}
// -----------------------------------------------------------------------------------------------
specialX.addEventListener('click', (e) => {
    specialX.parentElement.parentElement.style = "visibility: hidden;"
})
// -----------------------------------------------------------------------------------------------
async function memerButton() {
    XPExclem.play()
    memer.removeAttribute("hidden")
    await delay(8000)
    memer.setAttribute("hidden", true)
}

async function Ahrimessage() {
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
// -----------------------------------------------------------------------------------------------
container.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("a")
    const whichHref = clickedTab.getAttribute("href")
    const tabber = container.querySelectorAll("ul li a")
    console.log(tabber)
    if(!clickedTab) return;
    e.preventDefault()
    
    tabber.forEach((list) => {
        list.style.backgroundColor = '#5e3070'    
        list.style.border = '2px outset rgb(67, 41, 82)'    
    })

    if (clickedTab) {
        document.getElementById("tabsPanels").removeAttribute("hidden")
    }

    switch (Boolean(clickedTab)) {
        case clickedTab.id == 'tab1':
            container.style.backgroundImage = 'url(/assets/mainAssets/RGbg.gif)'
            clickedTab.style.backgroundColor = '#644686'
        break;
        
        case clickedTab.id == 'tab2':
            container.style.backgroundImage = 'url(assets/mainAssets/StatusBg.gif)'
        break;

        case clickedTab.id == 'tab3':
            container.style.backgroundImage = 'url(assets/mainAssets/leagueBg.jpg'
        break;
    }

    switch (Boolean(whichHref)) {
        case whichHref == '#statuscafe':
            changeStyle("t1")
        break;

        case whichHref == '#League':
            changeStyle("t2")
        break;

        default:
            changeStyle("t3")
        break;
    };

    function changeStyle(mt) {
        switch (true) {
            case mt == "t1":
                tab2.style = 'background-color: #1c6d62 !important; border: 2px outset #0a332a;'
                tab1.style = 'background-color: #114740 !important; border: 2px outset #0a332a !important;'
                tab3.style = 'background-color: #114740 !important; border: 2px outset #0a332a !important;'
                gaming.classList.remove("title")
                gaming.classList.remove("league")
                gaming.classList.add("titleStatus")        
            break;

            case mt == "t2":
                tab1.style = 'background-color: rgb(71, 59, 26) !important; border: 2px outset rgb(155, 106, 32) !important;'
                tab2.style = 'background-color: rgb(71, 59, 26) !important; border: 2px outset rgb(155, 106, 32) !important;'
                tab3.style = 'background-color: rgb(155, 121, 37); border: 2px outset rgb(155, 106, 32)'
                gaming.classList.remove("title")
                gaming.classList.add("league")
            break;

            case mt == "t3":
                gaming.classList.remove("titleStatus")
                gaming.classList.remove("league")
                gaming.classList.add("title")
            break;
        }
    };
    switchTab(clickedTab);
});

function switchTab(newTab) {
    const activePanelId = newTab.getAttribute("href")
    const activePanel = container.querySelector(activePanelId)
    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true)
    });
    activePanel.removeAttribute("hidden")
}
// -----------------------------------------------------------------------------------------------
function alertLol(){
    alert("Lol I'm not for hire I'm wayy too lazy")
}
// -----------------------------------------------------------------------------------------------
function startMeow() {
    meowThing.play()
}
// -----------------------------------------------------------------------------------------------
async function itsMyBest() {
    jScript.setAttribute("hidden", true)
}
// add jarek button that fades in obscuring entire screen because funny
// -----------------------------------------------------------------------------------------------
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

function shittyRedirect() {
    window.location.href = "http://memer.online/rgs"
    //  DO NOT FUCKING FORGET. TO REPLACE THIS. WITH "http://memer.online/rgs"
}

(function () {
    var angle = 0;
    var p = document.querySelector('.rainbowAllTheWay');
    var text = p.textContent.split('');
    var len = text.length;
    var phaseJump = 360 / len;
    var spans;
    
    p.innerHTML = text.map(function (char) {
      return '<span>' + char + '</span>';
    }).join('');

    spans = p.children;

    (function wheee () {
      for (var i = 0; i < len; i++) {
        spans[i].style.color = 'hsl(' + (angle + Math.floor(i * phaseJump * .8)) + ', 65%, 70%)';
      }
      angle--;
      requestAnimationFrame(wheee);
    })();

    document.querySelector('.rainbowAllTheWay').innerHTML.addEventListener("click")
})();

function hideText(clickId) {
    // let objId = clickId.id
    console.log(clickId.parentElement.id)
    let hidden = document.querySelector(`#${clickId.parentElement.id} > div.text`).style;
    hidden.display == "block" ? hidden.display = "none" : hidden.display = "block"
}

function hueChange(hueNum) {
    if (hueNum.value > 360 || hueNum.value < -360) {
        hueNum.value = 0
    } else {
        document.body.style.filter = `hue-rotate(${hueNum.value}deg)`         
    }
}