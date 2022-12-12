//Display photographer
function displayDataProfil(photographer) {
    const photographersSection = document.querySelector(".photograph-header");
    photographer.filter((personne) => {
        const photographerModel = photographerFactoryProfil(personne);
        const userCardDOM = photographerModel.getUserCardDOMProfil();
        photographersSection.appendChild(userCardDOM);
    });
};

//Get ID from URL
function findIDbyURL() {
    const params = (new URL (document.location)).searchParams;
    const id = parseInt(params.get("id"));

    return id;
}

//Fetch and display data photographers
function initProfil() {
    //Fetch data json
    fetch ("data/photographers.json")

    //Makes a promise
    .then((response) => response.json())

    //Display property photographers and media
    .then(
        (data) => {
            const {photographers, media} = data;
            console.log(media);

            const findID = findIDbyURL();
            const idPhotographer = photographers.filter(photographer => photographer.id === findID);

            displayDataProfil(idPhotographer);
        }
    )
    
    //Catch error
    .catch(
        (error) => {
            console.log(`Error fetching data : ${error}`);
            document.querySelector(".photograph-header").innerHTML = "Impossible d'afficher le photographe";
        }
    )
};

initProfil();

