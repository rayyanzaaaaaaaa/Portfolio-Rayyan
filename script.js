function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    " FRONT-END DEVELOPER",
    " SISWA SMKN 69 JAKARTA",
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter
const hamburgerIcon = document.getElementById('hamburger-icon');
const cancelIcon = document.getElementById('cancel-icon');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownLinks = dropdownMenu.querySelectorAll('.links a');
if (hamburgerIcon) {
    hamburgerIcon.addEventListener('click', toggleDropdown);
}
if (cancelIcon) {
    cancelIcon.addEventListener('click', toggleDropdown);
}
// Disable right-click on the home image
            const homeImage = document.getElementById('home-image');
            if (homeImage) {
                homeImage.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                });
            }
            document.addEventListener('DOMContentLoaded', () => {
    // ... (Your existing JavaScript code) ...

    // --- Add this new JavaScript code to prevent zoom ---

    // Prevent pinch-to-zoom for most browsers
    document.addEventListener('touchmove', function(event) {
        // Check if there are multiple touches (indicating pinch)
        if (event.touches.length > 1) {
            event.preventDefault(); // Prevent default browser zoom behavior
        }
    }, { passive: false }); // Use { passive: false } to allow preventDefault()

    // Prevent zoom gestures specifically for some iOS versions
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
        // document.body.style.zoom = 0.99; // Some sources suggest this as a hack, but it can be problematic
    }, { passive: false });

    document.addEventListener('gesturechange', function(e) {
        e.preventDefault();
        // document.body.style.zoom = 0.99; // Same as above
    }, { passive: false });

    document.addEventListener('gestureend', function(e) {
        e.preventDefault();
        // document.body.style.zoom = 1; // Same as above
    }, { passive: false });

    // Optional: Prevent zoom on certain input fields (mobile browsers sometimes zoom on focus)
    // Ensure input font size is at least 16px to prevent automatic zoom on focus
    // This is more of a guideline for input fields than a general zoom prevention.
    document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(input => {
        input.style.fontSize = '16px'; // Set minimum font size
    });
});