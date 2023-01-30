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
            <div class="modal">
                <header>
                    <h2 class="h2FormContactName">Contactez-moi<br><span>${this._photographer.name}</span></h2>
                    <img src="assets/icons/close.svg" onclick="closeModal()" />
                </header>
                <form id="modal-form" name="contact" action="messageSuccess.html">
                    <div class="borderInput">
                        <label for="firstName">Prénom</label>
                        <input type="text" id="firstName" name="firstName" minlength="2" maxlength="20">
                        <p></p>
                    </div>
                    <div class="borderInput">
                        <label for="lastName">Nom</label>
                        <input type="text" id="lastName" name="lastName" minlength="2" maxlength="20">
                        <p></p>
                    </div>
                    <div class="borderInput">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" minlength="5" maxlength="35">
                        <p></p>
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea id="textAera" class="textAera" type="text" minlength="50" maxlength="200"></textarea>
                        <p id="textAera-p"></p>
                    </div>
                        <button type="submit" class="contact_button">Envoyer</button>
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
            <img class="profilPicture" src="assets/photographers/${this._photographer.portrait}" alt="${this._photographer.name}" aria-label="photographer"/>

            <button class="contact_button"  onclick="displayModal()">Contactez-moi</button>

            <div class="profil_info">
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
                <div class="divImgMedia" >
                    <img class="imgMedia" src="${this._photographer.image}" onclick="openLightbox(${position}); currentSlide(n)" alt="${this._photographer.title}" aria-label="Media"/>
                </div>
                <div class="legend">
                    <h2 class="profilTitleMedia">${this._photographer.title}</h2>
                    <div class="likeHeart">
                        <span>${this._photographer.likes}</span>
                        <i class="bi bi-heart-fill likeBtn"></i>
                    </div>
                </div>
            `;
        } 
        else {
            article.innerHTML = `
                <div class="div_video">
                    <i class="iconPlay"></i>
                    <video class="profilVideo">
                        <source src="${this._photographer.video}">
                    </video>
                    <div class="legendVideo">
                        <h2 class="profilTitleMedia mp4">${this._photographer.title}</h2>
                        <div class="likeHeartVideo">
                            <span>${this._photographer.likes}</span>
                            <i class="bi bi-heart-fill likeBtn"></i>
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
            <label>Trier par</label>

            <div class="dropdown">
                <button id="btnPrimary" onclick="filter()">Popularité</button>

                <div id="dropdown_content">
                    <div class="dropdown_content">
                        <button id="btnPopularity" onclick="textReplace()" class="dropdownSelected">Popularité</button>
                        <button id="btnDate" onclick="textReplace()" class="dropdownSelected">Date</button>
                        <button id="btnTitle" onclick="textReplace()" class="dropdownSelected">Titre</button>
                    </div>
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
            <span class="likes"></span>
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
        div.innerHTML = `
            <button class="previousSlide" onclick="goToNextSlide()">&#60;</button>
            <figure class="figure">
                <img src="${this.photographer.image}">
                <figcaption class="figcaption">${this.photographer.title}</figcaption>
            </figure>
            <img class="closeModal" src="assets/icons/close.svg" onclick="closeLightbox()">
            <button class="nextSlide" onclick="goToPreviousSlide()">&#62;</button>
        `;

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