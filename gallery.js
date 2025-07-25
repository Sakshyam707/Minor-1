
// Hamburger menu logic
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Slider auto-scroll logic
const slider = document.getElementById('slider');
let scrollInterval;

function startAutoScroll() {
  scrollInterval = setInterval(() => {
    slider.scrollLeft += 1;
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = 0;
    }
  }, 30);
}

function stopAutoScroll() {
  clearInterval(scrollInterval);
}

slider.addEventListener('mouseenter', stopAutoScroll);
slider.addEventListener('mouseleave', startAutoScroll);
window.onload = startAutoScroll;
