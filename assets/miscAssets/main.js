const hackerInputSigma = document.getElementById("hackerInputSigma")
const scrollCheck = document.getElementById("hackerContainer")

const keywords = {
    trans: "<br><p>&nbsp&nbspYou went through all this trouble and for what? To get an answer? An answer to a question which doesn't concern you? You really should mind your own business... But since you went through all this trouble <sub>(or looked inside of the .js file...)</sub> I guess you deserve some sort of reward.</p><p>&nbsp&nbspI'm transfem, I came out 'officialy' on 14/02/2025, but, now to adress the obvious question, why is this seemingly small piece of information hidden so, so deeply inside?</p><p>&nbsp&nbspBeing up-front and point-blank, it's simply because it isn't really any of your concern if you're reading this as a stranger. If you're my friend then you most likely already know and are only seeing this message because I told you how to get to it, but my identity isn't of any concern to those who I don't know</p><p>&nbsp&nbspI'm sure I'll add more entries here in the future, some easter eggs, maybe I'll try messing around with databases but that's absolutely not anywhere in the near future since I don't even know how to sanitze them properly, I'll be using this as my 'secret diary' of sorts I guess.<br><br>",
}
let lineNum = 1;

//  FOR WHATEVER FUCKING REASON, WHENEVER I TRIED MAKING A DIV INSIDE THE FUCKING HTML THIS PIECE OF SHIT JUST ***REFUSED*** TO BE IN THE DIV OF H.I.S, SO I HAVE TO DO TWO ADDITIONAL METHODS ON THIS TWAT FOR IT TO WORK. GOD SAVE ME.
hackerInputSigma.appendChild(document.createElement("div"))
hackerInputSigma.childNodes[lineNum].innerHTML = "> "

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        for (const key in keywords) {
            if (hackerInputSigma.childNodes[lineNum].innerHTML.toLowerCase().includes(key)) {
                hackerInputSigma.appendChild(document.createElement("div"))
                lineNum++
                hackerInputSigma.childNodes[lineNum].innerHTML += `${keywords[key]}`
                lineNum++
                hackerInputSigma.appendChild(document.createElement("div"))
                hackerInputSigma.childNodes[lineNum].innerHTML = "> "
            } else {
                hackerInputSigma.appendChild(document.createElement("div"))
                lineNum++
                hackerInputSigma.childNodes[lineNum].innerHTML = "> "
                return
            }
        }
    } else {
        hackerInputSigma.childNodes[lineNum].innerHTML += e.key
    }
})
