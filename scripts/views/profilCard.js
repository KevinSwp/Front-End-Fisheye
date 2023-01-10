//function add multiple attribute
function setAttributes(element, value) {
    for (const key in value) {
        element.setAttribute(key, value[key]);
    }
}

//Display header profil photographer
function photographerFactoryProfil(data) {
    const {name, city, country, tagline, portrait} = data;
    const picture = `./assets/photographers/${portrait}`;

    function getUserCardDOMProfil() {
        const contact = document.createElement("button");
        contact.textContent = "Contactez-moi";

        const header = document.querySelector(".photograph-header");
        header.appendChild(contact);

        const article = document.createElement("article");

        const img = document.createElement("img");
        
        setAttributes(img, {"id" : "photo", "src" : picture, "alt" : name, "aria-label" : "Photographer"});
        setAttributes(contact, {"class" : "contact_button", "onclick" : "displayModal()"});

        const h2 = document.createElement("h2");
        h2.textContent = name;

        const location = document.createElement("h3");
        location.textContent = city + ", " + country;

        const tag = document.createElement("p");
        tag.textContent = tagline;
        
        //Add element as child
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag);

        return (article);
    }
    return {name, city, country, tagline, picture, getUserCardDOMProfil}
}

//Display media
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
}