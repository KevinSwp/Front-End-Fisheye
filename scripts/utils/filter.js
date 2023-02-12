/**
 * Hide/Display filter
*/
export const showFilterDropdown = () => {
    const option = document.querySelector(".dropdown_content");
    

    // TODO : Rempalcer aussi la classe active2 du dropdown
        // object.classList.contains
        // object.classList.add
        // object.classList.remove


    if (option.style.display === "block") {
        option.style.display = "none";
    }
    else {
        option.style.display = "block";
    }
}

/**
 * Replace text on click
 */
export const textReplace = () => {
    const selected = document.getElementById('selected');
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {

        //Start counter at 0 and add class to the last element
        if(index === items.length - 1){
            item.classList.add('isLast')
        }

        item.addEventListener('click', () => {

            //Display / Remove twin
            items.forEach(newItem => {
                newItem.classList.remove('hidden');
                selected.innerHTML = item.innerHTML;
                showFilterDropdown();
            })

            item.classList.add('hidden');

            //Replace button text
            selected.innerHTML = item.innerHTML;

            //If click on the last element we change the style
            document.querySelector('.dropdown_content').classList.remove('isLast')
            if(item.classList.contains('isLast')){
                document.querySelector('.dropdown_content').classList.add('isLast')
            }
        })
    })
}

/**
 * Function sort by popularity
 */
export const sortByPopularity = (medias) => {
    console.log('call sortByPopularity ')
    medias.sort((a, b) => b.likes - a.likes);
    return medias
};

/**
 * Function sort by date
 */
export const sortByDate = (medias) => {
    console.log('call sortByDate ')
    medias.sort((a, b) => new Date(a.date) - new Date(b.date));
    return medias
};

/**
 * Function sort by title
 */
export const sortByTitle = (medias) => {
    console.log('call sortByTitle ')
    medias.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    return medias
};

export default sortByPopularity;