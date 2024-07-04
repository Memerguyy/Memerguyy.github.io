const CPU = document.getElementById("CPUNumberGen");
const btnSlct = document.getElementById("btnSlct")
let selected = false
var RNG
let timerInterval = Math.floor(Math.random() * (3000 - 500) + 500)

function slctTxt() {
    selected = selected ? false : true
    if (selected == true) {
        document.getElementById("page-wrap").style.zIndex = '9'
    } else {
        document.getElementById("page-wrap").style.zIndex = '0'
    }
}

document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===112){
        window.location.href('https://memer.online/homepage')
    }
}

setInterval(() => {
    var RNG = Math.floor(Math.random() * (100 - 1) + 1)
    console.log(RNG)
    CPU.innerHTML = `CPU Usage: ${RNG}% <sup>Disclaimer: Not real CPU usage</sup>`
}, timerInterval);
//  I fucking tried making timerInterval random everytime its used but I CANNOT fucking figure it out, I cba to try further, this is the best it'll get