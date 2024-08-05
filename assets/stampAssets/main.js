console.log("script loaded! ");

const ctx = document.getElementById("canvas").getContext("2d");
const canv = document.getElementById("canvas");
const img = new Image();
const stamp = new Image();
stamp.src = "assets/stampAssets/stamp.png";

img.addEventListener("load", () => {
  canv.height = stamp.height;
  canv.width = stamp.width;
  ctx.drawImage(img, 2, 2, stamp.width - 4, stamp.height - 4);
  ctx.drawImage(stamp, 0, 0);


  console.log(imgdt)
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
