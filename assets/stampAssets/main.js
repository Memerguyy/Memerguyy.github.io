console.log("script loaded! ");

const canv = document.getElementById("canvas");
if(canv == null) throw new Error("No canvas element!");
if(!(canv instanceof HTMLCanvasElement)) throw new Error("canvas id element is not a canvas!");

const width = document.getElementById("width");
const height = document.getElementById("height");
const ctx = canv.getContext("2d");
const img = new Image();
const stamp = new Image();
const tempOne = document.getElementById("tempOne")
const tempTwo = document.getElementById("tempTwo")

const stampSheet = new Image();
stampSheet.src = "./assets/stampAssets/stampsheet.png";
const stampTiles = {
               // x  y  w  h
  TOP_LEFT:      [0, 0, 4, 4],
  TOP_MIDDLE:    [4, 0, 4, 4],
  TOP_RIGHT:     [8, 0, 4, 4],
  LEFT:          [0, 4, 4, 4],
  RIGHT:         [8, 4, 4, 4],
  BOTTOM_LEFT:   [0, 8, 4, 5],
  BOTTOM_MIDDLE: [4, 8, 4, 5],
  BOTTOM_RIGHT:  [8, 8, 4, 5],
}

function drawTile(tile, x, y) {
  ctx.drawImage(stampSheet, tile[0], tile[1], tile[2], tile[3], x, y, tile[2], tile[3]);
  console.log(x, y)
}

function drawImage() {
  ctx.imageSmoothingEnabled = false
  let iw = Math.floor(width.value/stampTiles.TOP_LEFT[2])*stampTiles.TOP_LEFT[2];
  let ih = Math.floor(height.value/stampTiles.TOP_LEFT[3])*stampTiles.TOP_LEFT[3];
  canv.height = ih+stampTiles.BOTTOM_LEFT[3]+stampTiles.TOP_LEFT[3];
  canv.width = iw+stampTiles.BOTTOM_RIGHT[2]+stampTiles.TOP_RIGHT[3];
  ctx.drawImage(img, stampTiles.TOP_LEFT[3], stampTiles.TOP_LEFT[2], iw, ih);
  drawTile(stampTiles.TOP_LEFT, 0, 0);
  drawTile(stampTiles.TOP_RIGHT, iw + stampTiles.TOP_RIGHT[2], 0);
  drawTile(stampTiles.BOTTOM_LEFT, 0, ih + stampTiles.BOTTOM_LEFT[3]-1);
  drawTile(stampTiles.BOTTOM_RIGHT, iw + stampTiles.BOTTOM_RIGHT[2], ih + stampTiles.BOTTOM_RIGHT[3]-1);
  for(let x = stampTiles.TOP_LEFT[2]; x <= iw; x += stampTiles.TOP_MIDDLE[2]) {
    drawTile(stampTiles.TOP_MIDDLE, x, 0)
  }
  for(let y = stampTiles.LEFT[3]; y <= ih; y += stampTiles.LEFT[3]) { //set y to the height, in this case, 4, if y is less than the image's height, add +4 to y
    drawTile(stampTiles.LEFT, 0, y) //draws the first half of the stamptile image by only getting 4x4 of the image, starting from the top left of the stampsheet image, repeats the drawing at x = 0, changes the y downwards drawing the tile, repeat this until y is more than the image's height
  }
  for(let x = stampTiles.BOTTOM_LEFT[2]; x <= iw; x += stampTiles.BOTTOM_MIDDLE[2]) {
    drawTile(stampTiles.BOTTOM_MIDDLE, x, ih+stampTiles.BOTTOM_LEFT[3]-1)
  }
  for(let y = stampTiles.TOP_LEFT[3]; y <= ih; y += stampTiles.RIGHT[3]) {
    drawTile(stampTiles.RIGHT, iw+stampTiles.RIGHT[2], y)
  }
}

const slice = document.getElementById("slice");
slice.addEventListener("click", () => {
  width.value = width.value / 2
  height.value = height.value / 2
  drawImage()
});

const ecils = document.getElementById("ecils");
ecils.addEventListener("click", () => {
  width.value = width.value * 2
  height.value = height.value * 2
  drawImage()
});

const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("img-preview");

function getImgData() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      img.src = this.result;
    });
  }
}

img.addEventListener("change", () => {
  ctx.drawImage(img, 0, 0);
});

chooseFile.addEventListener("change", function () {
  getImgData();
});


// text
const MSM = document.querySelector("body > center > h1");
const textInside = MSM.textContent;
MSM.innerHTML = textInside;
let msmArr = MSM.textContent.split('');

MSM.innerHTML = msmArr.map((char) => {
  return '<span>' + char + '</span>'
}).join('');

let mayGodSaveMe = document.querySelector(`body > center > h1`)

for (x = 0; x < msmArr.length; x++ ) {
  let iDFKWID;
  iDFKWID = MSM.children;
  switch (true) {
    case x % 2 == 1:
      iDFKWID[x].id = `lighter`;
      iDFKWID[x - 1].id = `darker`;
    break;
  }
  console.log(mayGodSaveMe.children[x].id)
  // console.log(mayGodSaveMe.innerHTML)
};

let lever = true;

function leverOn() {
  for (x = 0; x < msmArr.length; x++ ) {
    switch (true) {
      case x % 2 == 1:
        mayGodSaveMe.children[x].id = `darker`;
        mayGodSaveMe.children[x - 1].id = `lighter`;
      break;
    }
  }
}

function leverOff() {
  for (x = 0; x < msmArr.length; x++ ) {
    switch (true) {
      case x % 2 == 1:
        mayGodSaveMe.children[x].id = `lighter`;
        mayGodSaveMe.children[x - 1].id = `darker`;
      break;
    }
  }
}

setInterval(() => {
  if(lever == true) {
    leverOn()
    lever = false
  } else if (lever == false) {
    leverOff()
    lever = true
  }
}, 1000);


tempOne.addEventListener("click", () => {
  ctx.reset()
  stamp.src = "./assets/stampAssets/stamp.png";
  width.value = stamp.width
  height.value = stamp.height
  canv.height = stamp.height
  canv.width = stamp.width
  ctx.drawImage(img, 2, 2, stamp.width - 4, stamp.height - 4);
  ctx.drawImage(stamp, 0, 0);
});

tempTwo.addEventListener("click", () => {
  ctx.reset()
  stamp.src = "./assets/stampAssets/stamp2.png";
  width.value = stamp.width
  height.value = stamp.height
  canv.height = stamp.height
  canv.width = stamp.width
  ctx.drawImage(img, 2, 2, stamp.width - 4, stamp.height - 4);
  ctx.drawImage(stamp, 0, 0);
});

img.addEventListener("load", () => {
  width.value = img.width
  height.value = img.height
  drawImage()
});

width.oninput = function() {
  drawImage()  
}
height.oninput = function() {
  drawImage()
}

canvBtn.addEventListener("click", () => {
  canv.toBlob((blob) => {navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);}, "image/png");
})