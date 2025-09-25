// PRELOADER
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// DARK MODE
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

// TYPING EFFECT
const typedText = document.getElementById("typed-text");
const phrases = ["Software Developer", "Java Enthusiast", "Web Developer", "Problem Solver"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function type() {
  typedText.textContent = currentPhrase.join("");
  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  } else if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }
  setTimeout(type, isDeleting ? 80 : 150);
}
type();

// CONTACT FORM
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "✅ Thanks! I'll get back to you soon.";
  form.reset();
});
