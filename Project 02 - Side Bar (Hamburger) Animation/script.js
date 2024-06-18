var tl = gsap.timeline();

tl.to("#sidebar" , {
    right:0.5,
    duration:0.7,
    ease:"power3.out",
})

tl.from("#sidebar i", {
    x:100,
    y:0,
    duration:0.5,
    opacity:0,
    ease:"power3.out",
    rotate:360
})

tl.from("#sidebar li", {
    x:80,
    duration:0.7,
    stagger:0.4,
    opacity:0,
    ease:"power3.out"
})

tl.pause()

var menu = document.querySelector("#nav i")
var cross = document.querySelector("#sidebar i")

menu.addEventListener("click", function(){
    tl.play();
})

cross.addEventListener("click", function(){
    tl.reverse();
})
