// PARDA OPEN + CONFETTI + SHOW CONTENT

const curtain = document.getElementById("curtain");
const openBtn = document.getElementById("openBtn");
const mainContent = document.querySelector(".main-content");
// const bgMusic = document.getElementById("bg-music"); // agar audio use kare

function fireConfetti() {
    // simple confetti burst
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 }
    });

    // thoda extra
    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { x: 0.2, y: 0.7 }
        });
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { x: 0.8, y: 0.7 }
        });
    }, 400);
}

function openSurprise() {
    // parda slide
    curtain.classList.add("open");

    // main content show
    mainContent.classList.remove("hidden");

    // confetti fire
    fireConfetti();

    // music play (agar audio tag use kare to)
    // if (bgMusic) {
    //     bgMusic.play().catch(() => {});
    // }
}

openBtn.addEventListener("click", openSurprise);

// mobile user kahin bhi parda pe tap kare to bhi chale
curtain.addEventListener("click", (e) => {
    if (e.target.id === "curtain") {
        openSurprise();
    }
});

// ---------- SIMPLE SLIDESHOW ----------

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

// auto change every 4s
setInterval(nextSlide, 4000);
