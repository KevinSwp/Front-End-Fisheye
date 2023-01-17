/**
 * Import object from file
 */
import MediaFactory from '../factories/Media_factory.js';
import PhotographerFactory from '../factories/Photographer_factory.js';
import {PHOTOGRAPHE_TYPES} from '../factories/Photographer_factory.js';
import PhotographersCardProfil from '../views/profil_view.js';

//Select element from DOM
const modalLightbox = document.querySelector(".modalLightbox");
const contactForm = document.getElementById("contact_modal");
const photographerHeader = document.querySelector(".photograph-header");
const filterMedia = document.querySelector(".filterMedia");
const photographerMedia = document.querySelector(".photograph-media");
const photographerPrice = document.querySelector(".price");

/**
 * Display modal lightbox
 */
const displayModalLightbox = (media) => {
    media.forEach((mediaDataFromFile) => {
        //Get photographer object from factory
        const media = new MediaFactory(mediaDataFromFile, PHOTOGRAPHE_TYPES.JSON_V1);

        /**
         * Display media card
         */
        //Get object from view
        const photographerObject = new PhotographersCardProfil(media);
        //Get content from view
        const mediaCardDOM = photographerObject.getLightbox();
        //Add as child
        modalLightbox.appendChild(mediaCardDOM);

        // mettre les listeners sur la modal
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
    //Get content from view
    const photographerCardDOM = photographerTemplate.getPhotographerHeader();
    //Add as child
    photographerHeader.appendChild(photographerCardDOM);
}

//Function display filter
const displayfilter = () => {
    /**
    * Display photographer card
    */
    //Get object from view
    const photographerObject = new PhotographersCardProfil();
    //Get content from view
    const filter = photographerObject.getFilter();
    //Add as child
    filterMedia.appendChild(filter);
}

//Function display media
const displayDataMedia = (media) => {
    media.forEach((mediaDataFromFile) => {
        //Get photographer object from factory
        const media = new MediaFactory(mediaDataFromFile, PHOTOGRAPHE_TYPES.JSON_V1);

        /* Display media card */
        //Get object from view
        const photographerObject = new PhotographersCardProfil(media);
        //Get content from view
        const mediaCardDOM = photographerObject.getPhotographerMedia();
        //Add as child
        photographerMedia.appendChild(mediaCardDOM);
    })
}

//Function display price
const displayPrice = (photographerTemplate) => {
    //Get content from view
    const price = photographerTemplate.getPrice();
    //Add as child
    photographerPrice.appendChild(price);
}

/**
 * Get ID from URL
 */
//Function
const findIDbyURL = () => {
    //              document.location  .searchParams
    //              _________↓_______  __↓__
    //             |                 ||     |
    //Get URL (ex: /photographer.html?id=930) 
    const params = (new URL(document.location)).searchParams;
    //Convert string to integer
    const id = parseInt(params.get("id"));

    return id;
}

/**
 * Fetch and display data photographer
 */
//Function
const initProfil = () => {
    //Fetch data json
    fetch("data/photographers.json")

        //Makes a promise
        .then((response) => response.json())

        //Display property photographers and media
        .then(
            (data) => {
                const { photographers, media } = data;
                const findID = findIDbyURL();

                //Check if same ID
                const photographer = photographers.find(photographer => photographer.id === findID);
                const idMedia = media.filter(medias => medias.photographerId === findID);

                const photographerTemplate = new PhotographersCardProfil(photographer);

                // displayModalLightbox(idMedia);
                manageContactForm(photographerTemplate);
                displayDataPhotographer(photographerTemplate);
                displayPrice(photographerTemplate);
                displayDataMedia(idMedia);
            }
        )

        //Catch error
        .catch(
            (error) => {
                console.error(`Error fetching data : ${error}`);
                document.querySelector(".photograph-header").innerHTML = "Impossible d'afficher le photographe";
            }
        )
}

//Call function
initProfil();
displayfilter();

