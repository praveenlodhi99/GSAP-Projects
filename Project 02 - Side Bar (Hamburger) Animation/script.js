var tl = gsap.timeline();

tl.from("#nav i", {
    x:100,
    y:0,
    duration:0.5,
    opacity:0
})

tl.to("#sidebar" , {
    right:0.5,
    duration:0.9,
    ease:"power3.out"
})

tl.from("#sidebar li", {
    x:50,
    duration:0.6,
    stagger:0.2,
    opacity:0
})

tl.from("#sidebar i", {
    x:100,
    y:0,
    duration:0.5,
    opacity:0,
})

var menu = document.querySelector("#nav i")
var cross = document.querySelector("#sidebar i")
var sidebar = document.querySelector("#sidebar i")

menu.addEventListener("click", function(){
    sidebar.addEventListener("click", function(){
        opacity:1
    })
    tl.play();
})

cross.addEventListener("click", function(){
    sidebar.addEventListener("click", function(){
        opacity:0
    })
    tl.reverse();
})