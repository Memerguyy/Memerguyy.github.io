const slider = document.getElementById("slider")
const sliderWidth = slider.offsetWidth;
const slideList = document.getElementById("sliderWrapper")
let count = 0
const items = slideList.querySelectorAll("li").length
const prev = document.getElementById("prev")
const next = document.getElementById("next")

window.onload = () => {
    nextSlide()
    responsiveSlider()    
    console.log(sliderWidth, items, count)
}

let responsiveSlider = () => {
    next.addEventListener("click", (e) => {
        nextSlide()
    })    
    prev.addEventListener("click", (e) => {
        prevSlide()
    })  
}

const prevSlide = () => {
    if (count > 1) {
        console.log(count = count - 2)
        console.log(slideList.style.left = "-" + sliderWidth * count + "px")
        console.log(count++)
    } else if (count = 1){        
        console.log(count = items - 1)        
        console.log(slideList.style.left = "-" + sliderWidth * count + "px") 
        console.log(count++)       
    }
}

const nextSlide = () => {
    if (count < items) {        
        console.log(slideList.style.left = "-" + count * sliderWidth + "px")  
        console.log(count++)      
    } else if (count = items) {
        console.log(slideList.style.left = "0px")
        console.log(count = 1)
    } else if (count = count) {
        console.log(slideList.style.left = "-" + count * sliderWidth + "px")
    }
}