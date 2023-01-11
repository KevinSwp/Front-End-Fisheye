/**
 * Photographer card
 */
export default class PhotographerCardProfil {
    constructor (photographer){
        this._photographer = photographer;
    }

    //Function content header
    getPhotographerHeader = () => {
        //Create article element in the DOM
        const article = document.createElement('article');
        //Add class to article
        article.classList.add("profilHeader");
        //Fill the DOM
        article.innerHTML = `
            <img class="profilPicture" src="${this._photographer.portrait}" alt="${this._photographer.name}" aria-label="photographer"/>
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
    getPhotographerMedia = () => {
        //Create article element in the DOM
        const article = document.createElement('article');
        article.classList.add("profilMedia");
        //Fill the DOM
        article.innerHTML = `
            <div>
                <img class="profilPictureMedia" src="${this._photographer.image}" alt="${this._photographer.title}" aria-label="Media"/>
                <!--<video controls class="profilVideo">
                    <source src="${this._photographer.video}">
                </video>-->
                <h2 class="profilTitleMedia">${this._photographer.title}</h2>
            </div>
        `;

        return article;
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