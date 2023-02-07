/**
 * Hide/Display filter
*/
const filter = () => {
    const option = document.querySelector(".dropdown_content");
    
    if (option.style.display === "none") {
        option.style.display = "block";
    }
    else {
        option.style.display = "none";
    }
}

/**
 * Replace text on click
 */
const textReplace = () => {
    const selected = document.getElementById('selected');
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {

        // Start counter at 0 and add class to the last element
        if(index === items.length - 1){
            item.classList.add('isLast')
        }

        item.addEventListener('click', () => {

            // Display / Remove twin
            items.forEach(newItem => {
                newItem.classList.remove('hidden');
                selected.innerHTML = item.innerHTML;
                filter();
            })

            item.classList.add('hidden');

            // Replace button text
            selected.innerHTML = item.innerHTML;

            // If click on the last element we change the style
            document.querySelector('.dropdown_content').classList.remove('isLast')
            if(item.classList.contains('isLast')){
                document.querySelector('.dropdown_content').classList.add('isLast')
            }
        })
    })
}

displayMediaSorted = () => {
    // Delete content section media
    photographerMedia.innerHTML = "";

    // Display sorted media
    displayDataMedia(media);
}

sortByPopularity = () => {
    media.sort((a, b) => b.likes - a.likes);

    displayMediaSorted();
};

sortByDate = () => {
    // sort by ascending order
    media.sort((a, b) => new Date(a.date) - new Date(b.date));

    displayMediaSorted();
};

sortByTitle = () => {
    media.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

    displayMediaSorted();
};

// Add listener on sort button
document.getElementById("btnPopularity").addEventListener("click", sortByPopularity());
document.getElementById("btnDate").addEventListener("click", sortByDate());
document.getElementById("btnTitle").addEventListener("click", sortByTitle());