function displayDataProfil(photographers) {
    const photographersSection = document.querySelector(".photograph-header");

    const photographerModel = photographerFactoryProfil(photographers);
    const userCardDOM = photographerModel.getUserCardDOMProfil();
    photographersSection.appendChild(userCardDOM);
};

function initProfil() {
    //Fetch data json
    fetch ("data/photographers.json")

    //Makes response
    .then((response) => response.json())

    //Display property photographers
    .then(
        (data) => {
            const {photographers} = data;
            console.log(photographers);
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

