var tl = gsap.timeline();

tl.to(".text-loader", {
    opacity: 1,
    duration: 0.07,
    ease: "power1.inOut",
    stagger: {
        each: 0.14, // 0.07 to show + 0.07 to hide == 0.14
        repeat: 1,
        yoyo: true
    }
})

    .to(".loader", {
        opacity: 0,
        duration: 0.5,
        onComplete: function () {
            document.querySelector(".loader").style.display = "none";
        }
    })

    .to(".fixed-p", {
        opacity: 1,
        visibility: 'visible',
        duration: 0.5
    })

    .to(".cntr-p", {
        onStart: function () {
            $(".cntr-p").scramble(2000, 40, "alphabet", true);
        }
    }, 'scr')

    .to(".cntr-p2", {
        onStart: function () {
            $(".cntr-p2").scramble(2000, 40, "alphabet", true);
        }
    }, 'scr')
