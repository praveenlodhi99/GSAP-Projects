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

// Add event listener for image hover effects
imageDiv.addEventListener("mouseenter", function () {
    cursor.textContent = "View More"; // Change cursor content
    gsap.to(cursor, {
        scale: 4, // Scale cursor up on hover
        duration: 0.8,
        ease: "back.out",
        border: "0.2px dashed white",
        backgroundColor: "rgba(255, 255, 255, 0.4)", // Corrected RGBA value
        opacity: 0.8, // Set the opacity value
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 1.2), -1px -1px 8px rgba(255, 255, 255, 0.5)" // Corrected property
    });
});


imageDiv.addEventListener("mouseleave", function () {
    cursor.textContent = ""; // Reset cursor content
    gsap.to(cursor, {
        scale: 1, // Scale cursor back to normal
        duration: 0.8,
        ease: "back.out",
        backgroundColor: "white"
    });
});







