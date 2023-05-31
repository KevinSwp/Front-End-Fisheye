/**
 * Import from file
 */
import MediaFactory from '../factories/Media_factory.js';
import { PHOTOGRAPHE_TYPES } from '../factories/Photographer_factory.js';
import PhotographersCardProfil from '../views/profil_view.js';
import {
  sortByPopularity, sortByDate, sortByTitle, showFilterDropdown, textReplace, hideFilterDropdown,
} from '../utils/filter.js';

/**
 * Select element from DOM
 */
const modalLightbox = document.querySelector('.modalLightbox');
const contactForm = document.getElementById('contact_modal');
const photographerHeader = document.querySelector('.photograph-header');
const filterMedia = document.querySelector('.filterMedia');
const photographerMedia = document.querySelector('.photograph-media');
const photographerPrice = document.querySelector('.price');

// Init total like
let totalLikes = 0;

const ENUM_FILTER = {
  popularity: 0,
  date: 1,
  title: 2,
};

/**
 * Display modal lightbox
 */
const displayModalLightbox = (mediaLightbox) => {
  mediaLightbox.forEach((mediaDataFromFile) => {
    // Get media object from factory
    const media = new MediaFactory(mediaDataFromFile, PHOTOGRAPHE_TYPES.JSON_V1);
    /* Display media card */
    // Get object from view
    const photographerObject = new PhotographersCardProfil(media);
    // Get content from view
    const mediaCardDOM = photographerObject.getLightbox();
    // Add as child
    modalLightbox.appendChild(mediaCardDOM);
  });
};

/**
 * Display contact form
 */
const manageContactForm = (photographerTemplate) => {
  const formName = photographerTemplate.getManageContactForm();

  contactForm.appendChild(formName);

  initEventListeners();
};

/**
 * Display all data of the photographer to the DOM
 */
const displayDataPhotographer = (photographerTemplate) => {
  // Get content from view
  const photographerCardDOM = photographerTemplate.getPhotographerHeader();
  // Add as child
  photographerHeader.appendChild(photographerCardDOM);
};

/**
 * Delete section media & total like
 */
const resetDisplayMedias = () => {
  photographerMedia.innerHTML = '';
};

/**
 * Delete lightBox
 */
const resetPosition = () => {
  modalLightbox.innerHTML = '';
};

/**
 * Sorted media
 */
const displayBySort = (type, medias) => {
  let newMedias = [];
  // Reset total like
  totalLikes = 0;
  // Reset medias
  resetDisplayMedias();
  // Reset position
  resetPosition();
  // Sort medias list
  let text = '';

  switch (type) {
    case 'popularity':
      newMedias = sortByPopularity(medias);
      //medias = sortByPopularity(medias);
      text = ENUM_FILTER.popularity;
      break;

    case 'date':
      medias = sortByDate(medias);
      text = ENUM_FILTER.date;
      break;

    case 'title':
      medias = sortByTitle(medias);
      text = ENUM_FILTER.title;
      break;

    default:
      break;
  }

  // 0:Popularité, 1:Date, 2:Titre
  textReplace(text);
  // Display sorted media
  displayDataMedia(newMedias);
  // Display sorted position media
  displayModalLightbox(medias);
};

/**
 * Function display filter
 */
const displayfilter = (medias) => {
  /* Display filters */
  // Get object from view
  const photographerObject = new PhotographersCardProfil();
  // Get content from view
  const filter = photographerObject.getFilter();
  // Add as child
  filterMedia.appendChild(filter);
  // Init svg
  const svg = document.querySelector('.svgIcon svg');
  svg.classList.add('svgDisable');
  // Add listeners on filters
  document.getElementById('selected').addEventListener('click', showFilterDropdown);
  document.getElementById('btnPopularity').addEventListener('click', () => displayBySort('popularity', medias));
  document.getElementById('btnDate').addEventListener('click', () => displayBySort('date', medias));
  document.getElementById('btnTitle').addEventListener('click', () => displayBySort('title', medias));
};

/**
 * Hide dropdown on click outside
 */
const hideDropdownOnClickOutside = () => {
  // Add this after all your other event listeners
  document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.dropdown_content');
    const selected = document.getElementById('selected');
    const svg = document.querySelector('.svgIcon svg');

    // This checks if the click was inside your dropdown
    if (
      !dropdown.contains(event.target)
      && !selected.contains(event.target)
      && !svg.contains(event.target)) {
      hideFilterDropdown();
    }
  });
};

/**
 * Function display media
 */
const displayDataMedia = (media) => {
  media.forEach((mediaDataFromFile, index) => {
    // Get photographer object from factory
    const medias = new MediaFactory(mediaDataFromFile, PHOTOGRAPHE_TYPES.JSON_V1);
    /* Display media card */
    // Get object from view
    const photographerObject = new PhotographersCardProfil(medias);
    // Get content from view
    const mediaCardDOM = photographerObject.getPhotographerMedia(index);
    // Add as child
    photographerMedia.appendChild(mediaCardDOM);
    // Add like to total likes
    totalLikes += medias.likes;
    document.querySelector('.likes').innerHTML = totalLikes;
    // If is already liked remove 1 else add 1
    mediaCardDOM.querySelector('.likeBtn').addEventListener('click', () => {
      // Select element form DOM
      const heartIcon = mediaCardDOM.querySelector('.likeBtn');
      const likeCounter = mediaCardDOM.querySelector('.likeCounter');
      // Remove like if liked or add
      if (medias.isLiked) {
        totalLikes -= 1;
        medias.isLiked = false;
        likeCounter.innerHTML = medias.likes;
        heartIcon.classList.remove('bi-heart-fill');
        heartIcon.classList.add('bi-heart');
      } else {
        totalLikes += 1;
        medias.isLiked = true;
        likeCounter.innerHTML = medias.likes + 1;
        heartIcon.classList.remove('bi-heart');
        heartIcon.classList.add('bi-heart-fill');
      }
      // Update counter total like
      document.querySelector('.likes').innerHTML = totalLikes;
    });
    // Select element from DOM
    const imgMedia = mediaCardDOM.querySelector('.imgMedia');
    const videoMedia = mediaCardDOM.querySelector('.profilVideo');
    // Display image media with "Enter" if focus on it
    if (imgMedia !== undefined) {
      mediaCardDOM.addEventListener('keydown', (event) => {
        const imgPosition = imgMedia.getAttribute('data-position');
        // If focus on image
        if (!mediaCardDOM.querySelector('.likeBtn').contains(event.target)) {
          if (event.key === 'Enter') {
            openLightbox(imgPosition);
          }
        }
      });
    }
    // Display video media with "Enter" if focus on it
    else if (videoMedia !== undefined) {
      mediaCardDOM.addEventListener('keydown', (event) => {
        const videoPosition = videoMedia.getAttribute('data-position');
        // If focus on image
        if (!mediaCardDOM.querySelector('.likeBtn').contains(event.target)) {
          if (event.key === 'Enter') {
            openLightbox(videoPosition);
          }
        }
      });
    }
  });
};

/**
 * Function display sorted media
 */
const displayDataMediaSorted = (media) => {
  // Sort media by number of likes
  media.sort((a, b) => b.likes - a.likes);
  // Call function
  displayDataMedia(media);
};

/**
 * Function display total likes & price
 */
const displayTotaleLikesPrice = (photographerTemplate) => {
  // Get content from view
  const price = photographerTemplate.getPrice();
  const totalLike = photographerTemplate.getTotalLikes();
  // Add as child
  photographerPrice.appendChild(totalLike);
  photographerPrice.appendChild(price);
};

/**
 * Get ID from URL
 */
const findIDbyURL = () => {
  /*               document.location  .searchParams
                     _________↓_______  __↓__
                    |                 ||     |
    // Get URL (ex: /photographer.html?id=930) */
  const params = (new URL(document.location)).searchParams;
  // Convert string to integer
  const id = parseInt(params.get('id'), 10);

  return id;
};

/**
 * Fetch and display data photographer
 */
const initProfil = () => {
  // Fetch data json
  fetch('data/photographers.json')
  // Makes a promise
    .then((response) => response.json())
  // Display property photographers and media
    .then(
      (data) => {
        const { photographers, media } = data;
        const findID = findIDbyURL();
        // Check if same ID
        const photographer = photographers.find((photographe) => photographe.id === findID);
        const mediasFromPhotographer = media.filter((medias) => medias.photographerId === findID);
        // Object
        const photographerTemplate = new PhotographersCardProfil(photographer);
        // Call function
        displayDataPhotographer(photographerTemplate);
        manageContactForm(photographerTemplate);
        displayTotaleLikesPrice(photographerTemplate);
        displayDataMediaSorted(mediasFromPhotographer);
        displayModalLightbox(mediasFromPhotographer);
        displayfilter(mediasFromPhotographer);
        hideDropdownOnClickOutside();
        textReplace(ENUM_FILTER.popularity);
      },
    );
};
// Call function
initProfil();
