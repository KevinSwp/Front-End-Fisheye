/**
 * Hide/Display filter
*/
export const showFilterDropdown = () => {
    const option = document.querySelector(".dropdown_content");
    const selected = document.getElementById("selected");

    if (option.style.display != "block") {
        option.style.display = "block";
        selected.classList.remove = "selectedActive";
    } else {
        option.style.display = "none";
        selected.classList.add("selectedActive");
    }
}

const hideFilterDropdown = () => {
    const option = document.querySelector(".dropdown_content");
    option.style.display = "none";
}

/**
 * Replace text on click
 */
export const textReplace = (textToReplace) => {
    const selected = document.getElementById("selected");
    const selectedText = document.getElementById("selectedText");
    const items = document.querySelectorAll(".item");

    selected.setAttribute('data-type', textToReplace);

    items.forEach((item, index) => {

         // On affiche tous les boutons
         item.classList.remove("hidden");

         // Lorsque c'est le bouton qui est cliqué
         if(index === textToReplace){
            selectedText.innerHTML = item.innerHTML;
            item.classList.add("hidden");
         }
    })

}

/**
 * Function sort by popularity
 */
export const sortByPopularity = (medias) => {
    medias.sort((a, b) => b.likes - a.likes);
    return medias;
};

/**
 * Function sort by date
 */
export const sortByDate = (medias) => {
    medias.sort((a, b) => new Date(a.date) - new Date(b.date));
    return medias;
};

/**
 * Function sort by title
 */
export const sortByTitle = (medias) => {
    medias.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    return medias;
};

export default sortByPopularity;