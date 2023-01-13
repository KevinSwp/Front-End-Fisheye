/**
 * Import object from file
 */
import PhotographerFactory from '../factories/Photographer_factory.js';
import MediaFactory from '../factories/Media_factory.js';
import PhotographersCardProfil from '../views/profil_view.js';

//Select element from DOM
const contactForm = document.getElementById('contact_modal');
const photographerHeader = document.querySelector(".photograph-header");
const filterMedia = document.querySelector(".filterMedia");
const photographerMedia = document.querySelector(".photograph-media");
const photographerPrice = document.querySelector(".price");

/**
 * Display photographer name on contact form
 */
const displayPhotographerNameOnContactForm = (photographers) => {
    photographers.forEach((photographerDataFromFile) => {
            const photographer = new PhotographerFactory(photographerDataFromFile, 'JSON_V1');
            const photographerObject = new PhotographersCardProfil(photographer);
            const formName = photographerObject.getPhotographerNameOnForm();
            contactForm.appendChild(formName);
        }
    )
}

/**
 * Display all data of the photographer to the DOM
 */
//Function display infos photographer at profil page
const displayDataPhotographer = (photographers) => {
    photographers.forEach((photographerDataFromFile) => {
            //Get photographer object from factory
            const photographer = new PhotographerFactory(photographerDataFromFile, 'JSON_V1');
            //const photographers = new PhotographerFactory(photographerData, 'JSON_V2');

            /**
             * Display photographer card
             */
            //Get object from view
            const photographerObject = new PhotographersCardProfil(photographer);
            //Get content from view
            const photographerCardDOM = photographerObject.getPhotographerHeader();
            //Add as child
            photographerHeader.appendChild(photographerCardDOM);
        }
    )
}

//Function display media at profil page
function displayfilter (){
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

//Function display media at profil page
const displayDataMedia = (media) => {
    media.forEach((mediaDataFromFile) => {
            //Get photographer object from factory
            const media = new MediaFactory(mediaDataFromFile, 'JSON_V1');

            /**
             * Display media card
             */
            //Get object from view
            const photographerObject = new PhotographersCardProfil(media);
            //Get content from view
            const mediaCardDOM = photographerObject.getPhotographerMedia();
            //Add as child
            photographerMedia.appendChild(mediaCardDOM);
        }
    )
}

//Function display price
const displayPrice = (photographers) => {
    photographers.forEach((photographerDataFromFile) => {
            //Get photographer object from factory
            const photographer = new PhotographerFactory(photographerDataFromFile, 'JSON_V1');
            //const photographers = new PhotographerFactory(photographerData, 'JSON_V2');

            /**
             * Display photographer card
             */
            //Get object from view
            const photographerObject = new PhotographersCardProfil(photographer);
            //Get content from view
            const price = photographerObject.getPrice();
            //Add as child
            photographerPrice.appendChild(price);
        }
    )
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
    const params = (new URL (document.location)).searchParams;
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
    fetch ("data/photographers.json")

    //Makes a promise
    .then((response) => response.json())

    //Display property photographers and media
    .then(
        (data) => {
            const {photographers, media} = data;
            const findID = findIDbyURL();

            //Check if same ID
            const idPhotographer = photographers.filter(photographer => photographer.id === findID);
            const idMedia = media.filter(medias => medias.photographerId === findID);

            displayPhotographerNameOnContactForm(idPhotographer);
            displayDataPhotographer(idPhotographer);
            displayDataMedia(idMedia);
            displayPrice(idPhotographer);
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

