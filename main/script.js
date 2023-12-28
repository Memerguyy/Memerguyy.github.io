// if you see this, may god forgive your eyes for the shitshow that is my code, thank you, good luck

let meowThing = document.getElementById("meow")
let jScript = document.getElementById("javascript")
let rightBar = document.getElementById("rightBar")
const delay = ms => new Promise(res => setTimeout(res, ms));

function alertLol(){
    alert("Lol I'm not for hire xd I can barely move my own ass up for myself in the mornings, no way can I do the same for others")
}

function startMeow() {
    meowThing.play()
}

async function itsMyBest() {
    jScript.style.opacity = 0
    await delay(700)
    rightBar.innerHTML = "<h1>NO MORE JAVA<br>SCRIPT YOU LOST THOSE RIGHTS<hr></h1>"
}