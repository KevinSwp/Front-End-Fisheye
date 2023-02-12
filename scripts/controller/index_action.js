/**
 * Import object from file
 */
import PhotographerFactory from "../factories/Photographer_factory.js";
import {PHOTOGRAPHE_TYPES} from "../factories/Photographer_factory.js";
import PhotographerCardIndex from "../views/index_view.js";

//Select element from DOM
const photographersSection = document.querySelector(".photographer_section");

/**
 * Display all photographers to the DOM at home page
 */
const displayPhotographers = (photographers) => {
    photographers.forEach((photographerDataFromFile) => {
        // Get photographer object from factory
        const photographer = new PhotographerFactory(photographerDataFromFile, PHOTOGRAPHE_TYPES.JSON_V1);
        /* Display photographer card */
        // Get object from view
        const photographerCard = new PhotographerCardIndex(photographer);
        // Get content card from view
        const photographerCardDOM = photographerCard.getPhotographerCardIndex();
        // Add "userCardDom" as child
        photographersSection.appendChild(photographerCardDOM);
    })
}

/**
 * Initialize data of the index page
 */
const init = () => {
    // Fetch data json
    fetch ("data/photographers.json")
    // Makes response
    .then((response) => response.json())
    // Display property photographers
    .then(
        (data) => {
            const {photographers} = data;
            displayPhotographers(photographers);
        }
    )
    // Catch error
    .catch(
        (error) => {
            console.error(`Error fetching data : ${error}`);
            document.querySelector(".photographer_section").innerHTML = "Impossible d'afficher les photographes";
        }
    )
}

// Call the function
init();
    