const words = [
    "Frontend Developer",
    "Computer Science Student",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        delay = 1500; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300; 
    }

    setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingElement) {
        type();
    }
});