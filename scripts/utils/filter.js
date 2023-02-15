/**
 * Hide/Display filter
*/
export const showFilterDropdown = () => {
    const option = document.querySelector(".dropdown_content");
    const selected = document.getElementById("selected");

    if (option.style.display === "none") {
        option.style.display = "block";
        selected.classList.remove = "selectedActive";
    }
    
    else {
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
export const textReplace = () => {
    const selected = document.getElementById("selected");
    const items = document.querySelectorAll(".item");

    items.forEach((item, index) => {
        // Start counter at 0 and add class to the last element
        if (index === items.length - 1) {
            item.classList.add("isLast");
        }

        item.addEventListener("click", () => {
            // Display / Remove twin
            items.forEach(newItem => {
                newItem.classList.remove("hidden");
                selected.innerHTML = item.innerHTML;
                hideFilterDropdown();
            })

            item.classList.add("hidden");
            // Replace button text
            selected.innerHTML = item.innerHTML;
            // If click on the last element we change the style
            document.querySelector(".dropdown_content").classList.remove("isLast");
            if (item.classList.contains("isLast")) {
                document.querySelector(".dropdown_content").classList.add("isLast");
            }
        })
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