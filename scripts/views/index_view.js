/**
 * Photographers card
 */
export default class PhotographerCardIndex {
  constructor(photographer) {
    this.this_photographer = photographer;
  }

  // Function content home page
  getPhotographerCardIndex = () => {
    // Create article element in the DOM
    const article = document.createElement('article');
    // Fill the DOM
    article.innerHTML = `
            <a role="link" class="photographerBloc" href="photographer.html?id=${this.this_photographer.id}" aria-label="photographe ${this.this_photographer.name}">
                <img src="assets/photographers/${this.this_photographer.portrait}" alt="${this.this_photographer.name}" aria-label="photographe ${this.this_photographer.name}"/>
                <h2 class="indexNamePhotographer">${this.this_photographer.name}</h2>
            </a>

            <div role="paragraph" class="paragraph">
                <h3 tabindex="0" class="indexLocationPhotographer">${this.this_photographer.city}, ${this.this_photographer.country}</h3>
                <p tabindex="0" class="indexTagPhotographer" aria-label="tag de ${this.this_photographer.name}">${this.this_photographer.tagline}</p>
                <span tabindex="0" aria-label="truc par jour" class="indexPricePhotographer">${this.this_photographer.price}€/jour</span>
            </div>
        `;

    return article;
  };

  // get & set
  get photographer() {
    return this.this_photographer;
  }

  set photographer(value) {
    this.this_photographer = value;
  }
}
