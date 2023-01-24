
let currentLightboxPosition = 0

// Open the Modal
  function openLightbox(position) {
    
    // On récupère la position à utiliser
    currentLightboxPosition = position

    // Affiche la bonne slide
    showSlides(currentLightboxPosition);

    // Affiche la lightbox
    document.querySelector(".modalLightbox").style.display = "block";
  }
  
  // Close the Modal
  function closeLightbox() {
    document.querySelector(".modalLightbox").style.display = "none";
  }
  

  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  



  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  


  /**
   * 
   */
    const goToPreviousSlide = () => {
      showSlides(currentLightboxPosition - 1)
    }
  
    /**
     * 
     */
    const goToNextSlide = () => {
      showSlides(currentLightboxPosition + 1)
    }

  /**
   * Permet d'afficher la bonne slide dans la lightbox
   */
  const showSlides = (newSlidePosition) => {
    const slides = document.getElementsByClassName("lightbox");

    //
    if (newSlidePosition >= slides.length) {
      currentLightboxPosition = 0
    }

    //
    if (newSlidePosition < 0) {
      currentLightboxPosition = slides.length - 1
    }

    // On masque toutes les slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // On affiche la bonne slide uniquement
    slides[currentLightboxPosition].style.display = "block";
  }