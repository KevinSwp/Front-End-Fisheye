function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        console.log(photographer);
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

function init() {
    fetch ("data/photographers.json")

    .then((response) => response.json())

    .then(
        (data) => {
            const { photographers } = data;
            console.log(photographers);
            displayData(photographers);
        }
    )
    
    .catch(
        (error) => {
            console.log(`Error fetching data : ${error}`)
            document.querySelector('.photographer_section').innerHTML = `Impossible d'afficher les photographes`
        }
    )
};

init();
    