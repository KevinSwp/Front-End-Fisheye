function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

function init() {
    //Fetch data json
    fetch ("data/photographers.json")

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
    