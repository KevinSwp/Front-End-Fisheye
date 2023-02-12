// Select element from the DOM
const modal = document.querySelector(".modalLightbox");
const mainContent = document.getElementById('main');

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
    // Display modal
    modal.style.display = "block";
    // Hide main
    mainContent.style.display = "none";
    //Use keyboard arrows to slide media
    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            goToPreviousSlide();
        }
        
        else if (event.key === "ArrowRight") {
            goToNextSlide();
        }
    });
    //escap to close modal
    document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
            mainContent.style.display = "block";
        }
    });
}

/**
 * Close modal
 */
const closeLightbox = () => {
    // Hide modal
    modal.style.display = "none";
    // Display main
    mainContent.style.display = "block";
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
    // Back to start
    if (newSlidePosition >= slides.length) {
      currentPosition = 0;
    }
    // Back to end
    if (newSlidePosition < 0) {
      currentPosition = slides.length - 1;
    }
    // Switch slide
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