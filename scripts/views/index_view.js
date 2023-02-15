/**
 * Photographers card
 */
export default class PhotographerCardIndex {
    constructor(photographer) {
        this._photographer = photographer;
    }

    //Function content home page
    getPhotographerCardIndex = () => {
        // Create article element in the DOM
        const article = document.createElement('article');
        // Fill the DOM
        article.innerHTML = `
            <a role="link" class="photographerBloc" href="photographer.html?id=${this._photographer.id}" aria-label="photographe ${this._photographer.name}">
                <img src="${this._photographer.portrait}" alt="${this._photographer.name}" aria-label="photographe ${this._photographer.name}"/>
                <h2 class="indexNamePhotographer">${this._photographer.name}</h2>
            </a>

            <div role="paragraph" class="paragraph">
                <h3 tabindex="0" class="indexLocationPhotographer">${this._photographer.city}, ${this._photographer.country}</h3>
                <p tabindex="0" class="indexTagPhotographer">${this._photographer.tagline}</p>
                <span tabindex="0" aria-label="truc par jour" class="indexPricePhotographer">${this._photographer.price}€/jour</span>
            </div>
        `;

        return article;
    }

    // get & set
    get photographer() {
        return this._photographer;
    }

    set photographer(value) {
        this._photographer = value;
    }
}
    /*getOldPhotographerCard = () => {
        const picture = `assets/photographers/${this._photographer.portrait}`;
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
        link.setAttribute("href", "photographer.html" + "?" + "id=" + id);
        //Add img as child
        link.appendChild(img);
        
        const h2 = document.createElement("h2");
        h2.textContent = name;

        const location = document.createElement("h3");
        location.textContent = city + ", " + country;

        const tag = document.createElement("p");
        tag.textContent = tagline;

        const prices = document.createElement( "span" );
        prices.textContent = price + "€" +" /jour";

        //Add element as child
        article.appendChild(link);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);
        article.appendChild(prices);

        return (article);
    }*/