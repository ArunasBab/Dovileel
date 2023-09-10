const burger = document.getElementById("burger")
const topnav = document.querySelector(".top-nav")

burger.addEventListener("click", function(){
    this.classList.toggle("rotatez")
    topnav.classList.toggle("transformy")
})

// Resize event
window.addEventListener("resize", function(){
    if(window.innerWidth > 1110) {
        burger.classList.remove("rotatez")
        topnav.classList.remove("transformy")
    }
})