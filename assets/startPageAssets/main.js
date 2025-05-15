let websiteTitle = "Startpage! ";
let websiteTitleArray = websiteTitle.split('');
let newTitle = [];
let positionPositive = 0;
let positionNegative = websiteTitleArray.length



window.onload = (e) => {
    for (let i = 0; i <= websiteTitleArray.length; i++) {
        // // console.log("AAAAAAAAAAAAA")
        // // newTitle.push(websiteTitleArray[websiteTitleArray.length-1])
        // // newTitle.push(websiteTitleArray[0])
        // // websiteTitleArray.pop();
        // // websiteTitleArray.shift();
        // // console.log(newTitle);
        // console.log(w
    }
    websiteTitleArray.forEach(e => {
        
        // console.log(websiteTitle.substring(websiteTitle.length,position) + " " + websiteTitle.substring(position, 0))
        
    });
}

setInterval(() => {
    document.title = websiteTitle.substring(0,positionPositive) + " " + websiteTitle.substring(positionNegative, 0)
    positionPositive++
    positionNegative--
    if (positionPositive >= websiteTitleArray.length) {
        positionNegative = websiteTitleArray.length
        positionPositive = 0
    }
}, 200);