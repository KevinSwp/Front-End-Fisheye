function displayDataProfil([photographers]) {
    const photographersSection = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactoryProfil(photographer);
        const userCardDOM = photographerModel.getUserCardDOMProfil();
        photographersSection.appendChild(userCardDOM);
    });
};

//Fetch ID within URL
function fetchIDbyURL() {
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
            console.log(photographers, media);
            fetchIDbyURL();
            console.log(fetchIDbyURL());
            // console.log(Object.values(photographers[0]));
            
            displayDataProfil(photographers);
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

