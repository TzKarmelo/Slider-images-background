const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let autoPlayInterval;
let isPaused = false;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = 1;
        } else {
            slide.style.opacity = 0;
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        if (!isPaused) {
            nextSlide();
        }
    }, 3000);
}

startAutoPlay();

document.querySelector('.next-btn').addEventListener('click', () => {
    nextSlide();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    prevSlide();
});

document.querySelector('.play-pause-btn').addEventListener('click', () => {
    isPaused = !isPaused;
    const playPauseBtn = document.querySelector('.play-pause-btn');
    playPauseBtn.textContent = isPaused ? 'Reanudar' : 'Pausa';
});
