/**
 * Import file
 */
import PhotographerFactory from '../factories/Photographer_factory.js';
import PhotographersCardIndex from '../views/index_view.js';

//Select element from DOM
const photographersSection = document.querySelector(".photographer_section");

/**
 * Display all photographers cards to the DOM
 */
//Function
const displayData = (photographers) => {

    photographers.forEach((photographerDataFromFile) => {

        //Get photographer object from factory
        const photographer = new PhotographerFactory(photographerDataFromFile, 'JSON_V1');
        //const photographers = new PhotographerFactory(photographerData, 'JSON_V2');

        /**
         * Display photographer card
         */
        //Get photographer object from model
        const photographerCard = new PhotographersCardIndex(photographer);
        //Get photographer card from view
        const userCardDOM = photographerCard.getPhotographerCardIndex();
        //Add "userCardDom" as child
        photographersSection.appendChild(userCardDOM);
    });
};


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
            displayData(photographers);
        }
    )
    
    //Catch error
    .catch(
        (error) => {
            console.error(`Error fetching data : ${error}`);
            document.querySelector(".photographer_section").innerHTML = "Impossible d'afficher les photographes";
        }
    )
};

//Call the function
init();
    