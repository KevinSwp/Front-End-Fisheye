
// init position
let currentLightboxPosition = 0;

// Open the Modal
const openLightbox = (position) => {
  
// Get the position to use
currentLightboxPosition = position;
  
// Display the right silde
showSlides(currentLightboxPosition);

// Display lightbox
  document.querySelector(".modalLightbox").style.display = "block";
}

// Close the Modal
const closeLightbox = () => {
  document.querySelector(".modalLightbox").style.display = "none";
}

// // Next/previous controls
// const plusSlides = (n) => {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// const currentSlide = (n) => {
//   showSlides(slideIndex = n);
// }

/**
 * Previous slide
 */
const goToPreviousSlide = () => {
  showSlides(currentLightboxPosition - 1);
}

/**
 * Next slide
 */
const goToNextSlide = () => {
  showSlides(currentLightboxPosition + 1);
}

/**
 * Display the right slide in lightbox
 */
const showSlides = (newSlidePosition) => {
  const slides = document.getElementsByClassName("lightbox");

  // 
  if (newSlidePosition >= slides.length) {
    currentLightboxPosition = 0;
  }

  //
  if (newSlidePosition < 0) {
    currentLightboxPosition = slides.length - 1;
  }

  // Hide all others slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display only the right slide
  slides[currentLightboxPosition].style.display = "block";
}