//Display photographer
function photographerFactoryProfil(data) {
    const {name, city, country, tagline, portrait} = data;
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
    const photo = `assets/samplePhotos/Rhode/${image}`;
    const clip = `assets/samplePhotos/Rhode/${video}`;

    function getMediaCardDOM() {
        const contact = document.querySelector(".contact_button");
        const header = document.querySelector(".photograph-header :nth-child(2)");
        header.appendChild(contact);

        const article = document.createElement("article");

        const img = document.createElement("img");

        const mp4 = document.createElement("video");
        mp4.src = clip;
        mp4.controls = true;

        //function add multiple attribute
        function setAttributes(element, value) {
            for (const key in value) {
                element.setAttribute(key, value[key]);
            }
        }
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