const hackerInputSigma = document.getElementById("hackerInputSigma")
const element = document.createElement("div")
const scrollCheck = document.getElementById("hackerContainer")

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        hackerInputSigma.appendChild(element)
        scrollCheck.scrollTop = scrollCheck.scrollHeight
    } else {
        hackerInputSigma.innerHTML += e.key
    }
})