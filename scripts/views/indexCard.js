export default class PhotographerCard {
    constructor(photographer){
        this._photographer = photographer;
    }

    getNewPhotographerCard = () => {
        const article = document.createElement('article');

        article.innerHTML = `
            <a href="photographer.html/?/id=${this._photographer.id}">
                <img src="${this._photographer.portrait}" alt="${this._photographer.name}" aria-label="photographer"/>
            </a>
            <h2>${this._photographer.name}</h2>
            <h3>${this._photographer.city}, ${this._photographer.country}</h3>
            <p>${this._photographer.tagline}</p>
            <span>${this._photographer.price}€/jour</span>
        `;

        return article;
    }

    get photographer() {
        return this._photographer;
    }

    set photographer(value) {
        this._photographer = value;
    }
    
}
