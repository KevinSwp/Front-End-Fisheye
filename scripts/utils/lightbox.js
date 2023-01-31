
// init position
let currentPosition = 0;

/**
 * Open modal
 */
const openLightbox = (position) => {
  // Get the position to use
  currentPosition = position;
    
  // Display the right silde
  showSlides(currentPosition);

  // Display lightbox
    document.querySelector(".modalLightbox").style.display = "block";
}

/**
 * Close modal
 */
const closeLightbox = () => {
  document.querySelector(".modalLightbox").style.display = "none";
}


/**
 * Previous slide
 */
const goToPreviousSlide = () => {
  showSlides(currentPosition - 1);
}

/**
 * Next slide
 */
const goToNextSlide = () => {
  showSlides(currentPosition + 1);
}

/**
 * Display the right slide in lightbox
 */
const showSlides = (newSlidePosition) => {
  const slides = document.getElementsByClassName("lightbox");

  // On retourne au début
  if (newSlidePosition >= slides.length) {
    currentPosition = 0;
  }

  // On retourne à la fin
  if (newSlidePosition < 0) {
    currentPosition = slides.length - 1;
  }

  // On modifie normalement le compteur
  if(newSlidePosition >= 0 && newSlidePosition < slides.length){
    currentPosition = newSlidePosition
  }


  // Hide all others slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display only the right slide
  slides[currentPosition].style.display = "block";
}