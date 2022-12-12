//Display photographer
function displayDataPhotographer(photographer) {
    const photographersSection = document.querySelector(".photograph-header");
    photographer.filter((person) => {
        const photographerModel = photographerFactoryProfil(person);
        const userCardDOM = photographerModel.getUserCardDOMProfil();
        photographersSection.appendChild(userCardDOM);
    });
};

//Display media
function displayDataMedia(media) {
    const mediaSection = document.querySelector(".photograph-header");
    media.filter((photo) => {
        const mediaModel = photographerFactoryMedia(photo);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });
};

//Get ID from URL
function findIDbyURL() {
    const params = (new URL (document.location)).searchParams;
    const id = parseInt(params.get("id"));

    return id;
}

//Fetch and display data photographer
function initProfil() {
    //Fetch data json
    fetch ("data/photographers.json")

    //Makes a promise
    .then((response) => response.json())

    //Display property photographers and media
    .then(
        (data) => {
            const {photographers, media} = data;
            const findID = findIDbyURL();

            //Check same ID
            const idPhotographer = photographers.filter(photographer => photographer.id === findID);
            const idMedia = media.filter(medias => medias.photographerId === findID);

            displayDataPhotographer(idPhotographer);
            displayDataMedia(idMedia);
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

