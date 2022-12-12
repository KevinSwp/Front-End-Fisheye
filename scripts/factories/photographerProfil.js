//Display photographer
function photographerFactoryProfil(data) {
    const {name, city, country, tagline, price, portrait} = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOMProfil() {
        const article = document.createElement("article");

        const img = document.createElement("img");

        //function add multiple attribute
        function setAttributes(element, value) {
            for (const key in value) {
                element.setAttribute(key, value[key]);
            }
        }
        setAttributes(img, {"id" : "photo", "src" : picture, "alt" : name, "aria-label" : "Photographer"});

        const h2 = document.createElement("h2");
        h2.textContent = name;

        const location = document.createElement("h3");
        location.textContent = city + ", " + country;

        const tag = document.createElement("p");
        tag.textContent = tagline;

        const prices = document.createElement( "span" );
        prices.textContent = price + "€" +" /jour";

        //Add element as child
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(prices);

        return (article);
    }
    
    return {name, city, country, tagline, price, picture, getUserCardDOMProfil}
}

//Display media
function photographerFactoryMedia(data) {
    const {title, image, date} = data;
    const photo = `assets/samplePhotos/${image}`;

    function getMediaCardDOM() {
        const article = document.createElement("article");

        const img = document.createElement("img");

        //function add multiple attribute
        function setAttributes(element, value) {
            for (const key in value) {
                element.setAttribute(key, value[key]);
            }
        }
        setAttributes(img, {"id" : "photo", "src" : photo, "alt" : title, "aria-label" : "Photo"});

        const h2 = document.createElement("h2");
        h2.textContent = title;

        //Add element as child
        article.appendChild(img);
        article.appendChild(h2);

        return (article);
    }
    
    return {title, photo, date, getMediaCardDOM}
}