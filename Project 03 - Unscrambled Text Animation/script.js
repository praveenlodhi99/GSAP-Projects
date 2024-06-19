// $(".elementToScramble").scramble(4000, 20, "alphabet", true);

var tl = gsap.timeline();

tl.to(".text-loader" , {
    opacity: 1,
    duration: 0.07,
    ease: "power1.inOut",
    stagger: {
        each:0.14, //0.07 to show  +  0.07 to hide == 0.14
        repeat:1,
        yoyo:true
    }
})
    .to("loader", {
        display: "none",
    })