/**
 * Import file
 */
import PhotographerFactory from '../factories/Photographer_factory.js';
import PhotographersCardProfil from '../views/profil_view.js';

/**
 * Display all photographers cards to the DOM
 */
//Function
const displayDataPhotographer = (photographers) => {

    photographers.forEach((photographerDataFromFile) => {

        //Get photographer object from factory
        const photographer = new PhotographerFactory(photographerDataFromFile, 'JSON_V1');
        //const photographers = new PhotographerFactory(photographerData, 'JSON_V2');

        /**
         * Display photographer card
         */
        //Get photographer object from model
        const photographerCard = new PhotographersCardProfil(photographer);
        //Get photographer card from view
        const userCardDOM = photographerCard.getPhotographerCardProfil();
        //Add "userCardDom" as child
        photographersSection.appendChild(userCardDOM);
    });
};

/*//Display header photographer
function displayDataPhotographer(photographer) {
    const photographersSection = document.querySelector(".photograph-header");
    photographer.filter((person) => {
        const photographerModel = photographerFactoryProfil(person);
        const userCardDOM = photographerModel.getUserCardDOMProfil();
        photographersSection.appendChild(userCardDOM);
    });
};*/

/*//Display media
function displayDataMedia(media) {
    const mediaSection = document.querySelector(".photograph-media");
    media.filter((photo) => {
        const mediaModel = photographerFactoryMedia(photo);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
};*/

/**
 * Get ID from URL
 */
//Function
const findIDbyURL = () => {
    //               document.location   .searchParams
    //             |                    |     |
    //Get URL (ex: /photographer.html/?/id=930) 
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

            displayDataPhotographer(idPhotographer);
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
};

initProfil();

