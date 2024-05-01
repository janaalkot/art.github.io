
document.addEventListener("DOMContentLoaded", function() {
  // First slider variables and functions
  const slides = document.querySelectorAll('.slide img');
  let slideIndex = 0;
  let interval = null;

  function initializeSlider() {
    slides[slideIndex].classList.add("displaynextslide");
    startAutoplay();
  }

  function showSlide(index) {
    if (index >= 0 && index < slides.length) {
      slides[slideIndex].classList.remove("displaynextslide");
      slideIndex = index;
      slides[slideIndex].classList.add("displaynextslide");
      resetAutoplay();
    }
  }


  function nextSlide() {
    showSlide(slideIndex === slides.length - 1 ? 0 : slideIndex + 1);
  }

  function startAutoplay() {
    interval = setInterval(nextSlide, 5000);
  }

  function resetAutoplay() {
    if (interval) {
      clearInterval(interval);
      interval = startAutoplay();
    }
  }

  // Second slider variables and functions
  const slides2 = document.querySelectorAll('.slide2 img');
  let slideIndex2 = 0;
  let interval2 = null;

  function initializeSlider2() {
    slides2[slideIndex2].classList.add("displaynextslide");
    startAutoplay2();
  }

  function showSlide2(index) {
    if (index >= 0 && index < slides2.length) {
      slides2[slideIndex2].classList.remove("displaynextslide");
      slideIndex2 = index;
      slides2[slideIndex2].classList.add("displaynextslide");
      resetAutoplay2();
    }
  }

  function prevSlide2() {
    showSlide2(slideIndex2 === 0 ? slides2.length - 1 : slideIndex2 - 1);
  }

  function nextSlide2() {
    showSlide2(slideIndex2 === slides2.length - 1 ? 0 : slideIndex2 + 1);
  }

  function startAutoplay2() {
    interval2 = setInterval(nextSlide2, 5000);
  }

  function resetAutoplay2() {
    if (interval2) {
      clearInterval(interval2);
      interval2 = startAutoplay2();
    }
  }

  // Initialize both sliders
  initializeSlider();
  initializeSlider2();
});
