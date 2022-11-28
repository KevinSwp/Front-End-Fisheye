function photographerFactory(data) {
    const {id, name, city, country, tagline, price, portrait} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");

        const img = document.createElement("img");

        //function add multiple attribute
        function setAttributes(element, value) {
            for (const key in value) {
                element.setAttribute(key, value[key]);
            }
        }
        setAttributes(img, {"id" : "photo", "src" : picture, "alt" : name, "aria-label" : "Photographer"});

        const link = document.createElement("a");
        link.setAttribute("href", "photographer.html/" + id);
        //Add img as child
        link.appendChild(img);
        
        const h2 = document.createElement("h2");
        h2.textContent = name;

        const location = document.createElement("h3");
        location.textContent = city + ", " + country;

        const tag = document.createElement("p");
        tag.textContent = tagline;

        const prices = document.createElement( 'span' );
        prices.textContent = price + "€" +" /jour";

        //Add element as child
        article.appendChild(link);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(prices);

        return (article);
    }
    
    return {name, city, country, tagline, price, picture, getUserCardDOM}
}