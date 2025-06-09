let websiteTitle = "Startpage! ";
let websiteTitleArray = websiteTitle.split('');
let newTitle = [];
let positionPositive = 0;
let positionNegative = websiteTitleArray.length

function array_move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr.join(''); 
    // im not even lying i stole this shit from npm, idc, it works, im too lazy to type allat
};

setInterval(() => {
    document.title = array_move(websiteTitleArray,-websiteTitleArray.length,-1)
}, 200);