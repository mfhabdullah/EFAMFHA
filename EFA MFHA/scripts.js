// Testimonial Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Initialize first slide
showSlide(currentSlide);