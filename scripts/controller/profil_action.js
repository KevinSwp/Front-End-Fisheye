/**
 * Import from file
 */
import MediaFactory from "../factories/Media_factory.js";
import {PHOTOGRAPHE_TYPES} from "../factories/Photographer_factory.js";
import PhotographersCardProfil from "../views/profil_view.js";
import {sortByPopularity, sortByDate, sortByTitle, showFilterDropdown, textReplace} from "../utils/filter.js";

/**
 * Select element from DOM
 */
const modalLightbox = document.querySelector(".modalLightbox");
const contactForm = document.getElementById("contact_modal");
const photographerHeader = document.querySelector(".photograph-header");
const filterMedia = document.querySelector(".filterMedia");
const photographerMedia = document.querySelector(".photograph-media");
const photographerPrice = document.querySelector(".price");

// Init total like
let totalLikes = 0;

/**
 * Display modal lightbox
 */
const displayModalLightbox = (media) => {
    media.forEach((mediaDataFromFile) => {
        // Get media object from factory
        const media = new MediaFactory(mediaDataFromFile, PHOTOGRAPHE_TYPES.JSON_V1);
        /* Display media card */
        // Get object from view
        const photographerObject = new PhotographersCardProfil(media);
        // Get content from view
        const mediaCardDOM = photographerObject.getLightbox();
        // Add as child
        modalLightbox.appendChild(mediaCardDOM);
    })
}

/**
 * Display contact form
 */
const manageContactForm = (photographerTemplate) => {
    const formName = photographerTemplate.getManageContactForm();

    contactForm.appendChild(formName);

    initEventListeners();
}

/**
 * Display all data of the photographer to the DOM
 */
const displayDataPhotographer = (photographerTemplate) => {
    // Get content from view
    const photographerCardDOM = photographerTemplate.getPhotographerHeader();
    // Add as child
    photographerHeader.appendChild(photographerCardDOM);
}

/**
 * Delete section media & total like
 */
const resetDisplayMedias = ( ) => {
    // Reset media
    photographerMedia.innerHTML = "";
    // Reset total like
    totalLikes = 0
}

/**
 * Sorted media
 */
const displayBySort = (type, medias) => {
    // Reset first
    resetDisplayMedias();
    // Sort medias list
    switch(type){
        case "popularity":
            medias = sortByPopularity(medias);
            break;

        case "date":
            medias = sortByDate(medias);
            break;

        case "title":
            medias = sortByTitle(medias);
            break;
    }

    textReplace();
    // Display sorted media
    displayDataMedia(medias);
}

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
    // Add listeners on filters
    document.getElementById("selected").addEventListener("click", showFilterDropdown);
    document.getElementById("btnPopularity").addEventListener("click", () => displayBySort("popularity", medias));
    document.getElementById("btnDate").addEventListener("click", () =>displayBySort("date", medias));
    document.getElementById("btnTitle").addEventListener("click", () => displayBySort("title", medias));
}

/**
 * Function display media
 */
const displayDataMedia = (media) => {
    media.forEach((mediaDataFromFile, index) => {
        // Get photographer object from factory
        const media = new MediaFactory(mediaDataFromFile, PHOTOGRAPHE_TYPES.JSON_V1);
        /* Display media card */
        // Get object from view
        const photographerObject = new PhotographersCardProfil(media);
        // Get content from view
        const mediaCardDOM = photographerObject.getPhotographerMedia(index);
        // Add as child
        photographerMedia.appendChild(mediaCardDOM);
        // Add like to total likes
        totalLikes += media.likes;
        document.querySelector(".likes").innerHTML = totalLikes;
        // If is already liked remove 1 else add 1
        mediaCardDOM.querySelector(".likeBtn").addEventListener("click", () => {
            const heartIcon = mediaCardDOM.querySelector(".likeBtn");
            const likeCounter = mediaCardDOM.querySelector(".likeCounter");

            if(media.isLiked){
                totalLikes -= 1;
                media.isLiked = false;
                likeCounter.innerHTML = media.likes
                heartIcon.classList.remove("bi-heart-fill");
                heartIcon.classList.add("bi-heart");
            }
            
            else{
                totalLikes += 1;
                media.isLiked = true;
                likeCounter.innerHTML = media.likes + 1
                heartIcon.classList.remove("bi-heart");
                heartIcon.classList.add("bi-heart-fill");
            }
            // Update counter total like
            document.querySelector(".likes").innerHTML = totalLikes;
        });
    })
}

/**
 * Function display total likes & price
 */
const displayTotaleLikes_Price = (photographerTemplate) => {
    // Get content from view
    const price = photographerTemplate.getPrice();
    const totalLikes = photographerTemplate.getTotalLikes();
    // Add as child
    photographerPrice.appendChild(totalLikes);
    photographerPrice.appendChild(price);
}

/**
 * Get ID from URL
 */
const findIDbyURL = () => {
    /*               document.location  .searchParams
                     _________↓_______  __↓__
                    |                 ||     |
    // Get URL (ex: /photographer.html?id=930)*/
    const params = (new URL(document.location)).searchParams;
    // Convert string to integer
    const id = parseInt(params.get("id"));

    return id;
}

/**
 * Fetch and display data photographer
 */
const initProfil = () => {
    // Fetch data json
    fetch("data/photographers.json")
        // Makes a promise
        .then((response) => response.json())
        // Display property photographers and media
        .then(
            (data) => {
                const { photographers, media } = data;
                const findID = findIDbyURL();
                // Check if same ID
                const photographer = photographers.find(photographer => photographer.id === findID);
                const mediasFromPhotographer = media.filter(medias => medias.photographerId === findID);

                const photographerTemplate = new PhotographersCardProfil(photographer);

                displayDataPhotographer(photographerTemplate);
                manageContactForm(photographerTemplate);
                displayTotaleLikes_Price(photographerTemplate);
                displayDataMedia(mediasFromPhotographer);
                displayModalLightbox(mediasFromPhotographer);                                         
                displayfilter(mediasFromPhotographer);
            }
        )
        // Catch error
        .catch(
            (error) => {
                console.error(`Error fetching data : ${error}`);
                document.querySelector(".photograph-header").innerHTML = "Impossible d'afficher le photographe";
            }
        )
}
// Call function
initProfil();
