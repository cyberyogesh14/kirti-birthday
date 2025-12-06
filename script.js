// PARDA OPEN + CONFETTI + SHOW CONTENT

const curtain = document.getElementById("curtain");
const openBtn = document.getElementById("openBtn");
const mainContent = document.querySelector(".main-content");
const bgMusic = document.getElementById("bg-music"); // MUSIC ENABLED ✔️


function fireConfetti() {
    confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });

    setTimeout(() => {
        confetti({ particleCount: 150, spread: 120, origin: { x: 0.2, y: 0.7 } });
        confetti({ particleCount: 150, spread: 120, origin: { x: 0.8, y: 0.7 } });
    }, 400);
}

function openSurprise() {
    curtain.classList.add("open");
    mainContent.classList.remove("hidden");
    fireConfetti();

    // PLAY MUSIC HERE 🔥
    if (bgMusic) {
        bgMusic.play().catch(() => {});
    }
}

openBtn.addEventListener("click", openSurprise);

// mobile tap anywhere
curtain.addEventListener("click", (e) => {
    if (e.target.id === "curtain") {
        openSurprise();
    }
});

// ---------- SLIDESHOW ----------
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((img, i) => {
        img.classList.toggle("active", i === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 4000);
