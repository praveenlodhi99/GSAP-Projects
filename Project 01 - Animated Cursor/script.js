// Select elements
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector('#image');

// Add event listener for cursor movement
main.addEventListener("mousemove", function (event) {

    // 'to' --> iniial to final position    ||     'from' --> initial from final position     ||      directly writing 'cursor' coz we alread make a variable above.

    // Update cursor position
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.8,
        ease: "back.out"
    });
});








