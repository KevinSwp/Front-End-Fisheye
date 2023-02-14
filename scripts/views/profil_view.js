/**
 * Photographer card
 */
export default class PhotographerCardProfil {
    constructor(photographer) {
        this._photographer = photographer;
    }

    //Function manage contact form
    getManageContactForm = () => {
        //Create div element in the DOM
        const div = document.createElement('div');
        //Fill the DOM
        div.innerHTML = `
            <div role="dialog" class="modal">
                <header>
                    <h2 role="heading" class="h2FormContactName">Contactez-moi<br><span>${this._photographer.name}</span></h2>
                    <img class="btnContactClose" tabindex="1" role="button" src="assets/icons/close.svg" onclick="closeModal()" />
                </header>
                <form id="modal-form" name="contact" action="messageSuccess.html">
                    <div class="borderInput">
                        <label class="firstName" role="label" for="firstName">Prénom</label>
                        <input role="field" type="text" id="firstName" name="firstName" minlength="2" maxlength="20">
                        <p></p>
                    </div>
                    <div class="borderInput">
                        <label role="label" for="lastName">Nom</label>
                        <input role="field" type="text" id="lastName" name="lastName" minlength="2" maxlength="20">
                        <p></p>
                    </div>
                    <div class="borderInput">
                        <label role="label" for="email">Email</label>
                        <input role="field" type="email" id="email" name="email" minlength="5" maxlength="35">
                        <p></p>
                    </div>
                    <div>
                        <label role="label" for="message">Message</label>
                        <textarea role="field" id="textAera" class="textAera" type="text" minlength="50" maxlength="200"></textarea>
                        <p id="textAera-p"></p>
                    </div>
                        <button role="button" type="submit" class="contact_button">Envoyer</button>
                </form>
            </div>
        `;

        return div;
    }

    //Function content header
    getPhotographerHeader = () => {
        //Create article element in the DOM
        const article = document.createElement('article');
        //Add class to article
        article.classList.add("profilHeader");
        //Fill the DOM
        article.innerHTML = `
            <img role="image" class="profilPicture" src="assets/photographers/${this._photographer.portrait}" alt="${this._photographer.name}" aria-label="photographe ${this._photographer.name}"/>

            <button role="button" class="contact_button"  onclick="displayModal()">Contactez-moi</button>

            <div role="text" class="profil_info">
                <h2 class="profilNamePhotographer">${this._photographer.name}</h2>
                <h3 class="profilLocationPhotographer">${this._photographer.city}, ${this._photographer.country}</h3>
                <p class="profilTagPhotographer">${this._photographer.tagline}</p>
            </div>
        `;

        return article;
    }

    //Function content media
    getPhotographerMedia = (position) => {
        //Create article element in the DOM
        const article = document.createElement('article');
        article.classList.add("profilMedia");

        //Fill the DOM
        if (this._photographer.video === undefined) {
            article.innerHTML = `
                <div role="link" class="divImgMedia">
                    <img tabindex="0" data-position="${position}" class="imgMedia" src="${this._photographer.image}" onclick="openLightbox(${position});" alt="${this._photographer.title}" aria-label="Photo ${this._photographer.title}"/>
                </div>
                <div role="text" class="legend">
                    <h2 class="profilTitleMedia">${this._photographer.title}</h2>
                    <div class="likeHeart">
                        <span class="likeCounter">${this._photographer.likes}</span>
                        <button class="likeBtn bi-heart"></button>
                    </div>
                </div>
            `;
        }
        else {
            article.innerHTML = `
                <div role="link" class="div_video">
                    <i class="iconPlay"></i>
                    <video tabindex="0" class="profilVideo" onclick="openLightbox(${position});">
                        <source src="${this._photographer.video}" alt="${this._photographer.title}" aria-label="Video ${this._photographer.title}">
                    </video>
                    <div role="text" class="legendVideo">
                        <h2 class="profilTitleMedia mp4">${this._photographer.title}</h2>
                        <div class="likeHeartVideo">
                            <span class="likeCounter">${this._photographer.likes}</span>
                            <button class="likeBtn bi-heart"></button>
                        </div>
                    </div>
                </div>
            `;
        }

        return article;
    }

    //Function content filter
    getFilter = () => {
        //Create div element in the DOM
        const div = document.createElement('div');
        div.classList.add("filter");
        //Fill the DOM
        div.innerHTML = `
            <label role="label">Trier par</label>

            <div role="menu" class="dropdown active1">
                <button id="selected">Popularité</button>

                <div class="dropdown_content">
                    <button id="btnPopularity" class="item hidden">Popularité</button>
                    <button id="btnDate" class="item">Date</button>
                    <button id="btnTitle" class="item">Titre</button>
                </div>
            </div>
        `;

        return div;
    }

    //Function content total likes
    getTotalLikes = () => {

        //Create div element in the DOM
        const div = document.createElement('div');
        div.classList.add("totalLikes");
        //Fill the DOM
        div.innerHTML = `
            <span role="rext" class="likes" arial-label="Like"></span>
            <i class="bi bi-heart-fill"></i>
        `;

        return div;
    }

    //Function content price
    getPrice = () => {
        //Create div element in the DOM
        const div = document.createElement('div');
        div.classList.add("profilPrice");
        //Fill the DOM
        div.innerHTML = `
            <span class="pricePerDay">${this._photographer.price} € / jour</span>
        `;

        return div;
    }

    //Function content lightbox
    getLightbox = () => {
        //Create div element in the DOM
        const div = document.createElement('div');
        div.classList.add("lightbox");
        //Fill the DOM
        if (this._photographer.video === undefined) {
            div.innerHTML = `
                <button tabindex="2" role="link" class="previousSlide" onclick="goToPreviousSlide()">&#60;</button>
                <figure class="figure">
                    <img role="image" src="${this.photographer.image}">
                    <figcaption role="text" class="figcaption">${this.photographer.title}</figcaption>
                </figure>
                <button tabindex="1" role="button" class="closeModal"><img src="assets/icons/close.svg" onclick="closeLightbox()"></button>
                <button tabindex="3" role="link" class="nextSlide" onclick="goToNextSlide()">&#62;</button>
            `;
        }

        else {
            div.innerHTML = `
                <button tabindex="2" role="button" class="previousSlide" onclick="goToPreviousSlide()">&#60;</button>
                <figure class="figure">
                    <video role="video" controls><source src="${this._photographer.video}"></video>
                    <figcaption role="text" class="figcaption">${this.photographer.title}</figcaption>
                </figure>
                <button tabindex="1" role="button" class="closeModal"><img src="assets/icons/close.svg" onclick="closeLightbox()"></button>
                <button tabindex="3" role="link" class="nextSlide" onclick="goToNextSlide()">&#62;</button>
            `;
        }

        return div;
    }

    //get & set
    get photographer() {
        return this._photographer;
    }

    set photographer(value) {
        this._photographer = value;
    }
}

/*//function add multiple attribute
function setAttributes(element, value) {
    for (const key in value) {
        element.setAttribute(key, value[key]);
    }
}*/

/*//Display media
function photographerFactoryMedia(data) {
    const {title, image, video, date} = data;
    const photo = `assets/samplePhotos/${image}`;
    const clip = `assets/samplePhotos/${video}`;
    

    function getMediaCardDOM() {

        const article = document.createElement("article");

        const img = document.createElement("img");

        const mp4 = document.createElement("video");
        
        mp4.src = clip;
        mp4.controls = true;

        
        setAttributes(img, {"class" : "photo", "src" : photo, "alt" : title, "aria-label" : "Photo"});
        setAttributes(mp4, {"class" : "video", "alt" : title, "aria-label" : "Video"});
       
        const h2 = document.createElement("h2");
        h2.textContent = title;

        //Add element as child
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(mp4);

        return (article);
    }
    
    return {title, photo, clip, date, getMediaCardDOM}
}*/