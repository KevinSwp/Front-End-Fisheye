/**
 * Display data photographers
 */
function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographerData) => {
        const photographers = new PhotographerFactory(photographerData, 'JSON_V1');
        //const photographers = new PhotographerFactory(photographerData, 'JSON_V2');
        const photographerCard = new PhotographerCard(photographers);

        const userCardDOM = photographerCard.getPhotographerCard();
        photographersSection.appendChild(userCardDOM);
    });
};

/**
 * qu'es ce que fait la fonction ?
 */
function init() {
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
            console.log(`Error fetching data : ${error}`);
            document.querySelector(".photographer_section").innerHTML = "Impossible d'afficher les photographes";
        }
    )
};

init();
    