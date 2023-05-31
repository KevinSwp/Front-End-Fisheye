// Select element from the DOM
const modal = document.querySelector('.modalLightbox');
const mainContent = document.getElementById('main');

// init position
let currentPosition = 0;

/**
 * Function go to previous or next
 */
const arrowKeySwitchSlide = (event) => {
  // Slide to left
  if (event.key === 'ArrowLeft') {
    goToPreviousSlide();
  }
  // Slide to right
  else if (event.key === 'ArrowRight') {
    goToNextSlide();
  }
};

/**
 * Close modal
 */
const closeLightbox = () => {
  // Hide modal
  modal.style.display = 'none';
  // Display main
  mainContent.style.display = 'block';
  // Delete event listener
  window.removeEventListener('keydown', arrowKeySwitchSlide);
};

/**
 * Display the right slide in lightbox
 */
const showSlides = (newSlidePosition) => {
  const slides = document.getElementsByClassName('lightbox');
  // Back to start
  if (newSlidePosition >= slides.length) {
    currentPosition = 0;
  }
  // Back to end
  if (newSlidePosition < 0) {
    currentPosition = slides.length - 1;
  }
  // Switch slide
  if (newSlidePosition >= 0 && newSlidePosition < slides.length) {
    currentPosition = newSlidePosition;
  }
  // Hide all others slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // Display only the right slide
  slides[currentPosition].style.display = 'block';

  // Ajouter le focus sur le bouton "fermer"
  slides[currentPosition].querySelector('.closeModal').focus();
};

/**
 * Previous slide
 */
const goToPreviousSlide = () => {
  showSlides(parseInt(currentPosition) - 1);
};

/**
 * Next slide
 */
const goToNextSlide = () => {
  showSlides(parseInt(currentPosition) + 1);
};

/*
* Touch "Enter" to close modal
*/
const btnClose = (event) => {
  if (event.key === 'Enter') {
    modal.style.display = 'none';
    mainContent.style.display = 'block';
  }
};

/**
 * Open modal
 */
const openLightbox = (position) => {
  // Display modal
  modal.style.display = 'block';
  // Hide main
  mainContent.style.display = 'none';
  // Get the position to use
  // const currentPosition = position;
  const currentPosition = position;
  // Display the right silde
  showSlides(currentPosition);
  // Select button
  const btnCloseLightboxModal = document.querySelectorAll('.closeModal');
  // Use keyboard arrows to slide media
  window.addEventListener('keydown', arrowKeySwitchSlide);
  // Escap to close modal
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });

  // Hide lightbox modal with "Enter" if focus on it
  btnCloseLightboxModal.forEach((btn) => {
    btn.addEventListener('keydown', btnClose);
  });
};
