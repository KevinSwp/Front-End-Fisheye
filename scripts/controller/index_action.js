/**
 * Import object from file
 */
import PhotographerFactory from '../factories/Photographer_factory.js';
import PhotographerCardIndex from '../views/index_view.js';

//Select element from DOM
const photographersSection = document.querySelector(".photographer_section");

/**
 * Display all photographers to the DOM
 */
//Function display photographers at home page
const displayPhotographers = (photographers) => {
    //Array photographers
    photographers.forEach((photographerDataFromFile) => {
            //Get photographer object from factory
            const photographer = new PhotographerFactory(photographerDataFromFile, 'JSON_V1');
            //const photographers = new PhotographerFactory(photographerData, 'JSON_V2');

            /**
             * Display photographer card
             */
            //Get object from view
            const photographerCard = new PhotographerCardIndex(photographer);
            //Get content card from view
            const photographerCardDOM = photographerCard.getPhotographerCardIndex();
            //Add "userCardDom" as child
            photographersSection.appendChild(photographerCardDOM);
        }
    )
}


/**
 * Initialize data of the index page
 */
//Function
const init = () => {
    //Fetch data json
    fetch ("data/photographers.json")
    //fetch ("data/photographersV2.json")

    //Makes response
    .then((response) => response.json())
    
    //Display property photographers
    .then(
        (data) => {
            const {photographers} = data;
            displayPhotographers(photographers);
        }
    )
    //Catch error
    .catch(
        (error) => {
            console.error(`Error fetching data : ${error}`);
            document.querySelector(".photographer_section").innerHTML = "Impossible d'afficher les photographes";
        }
    )
}
//Call the function
init();
    