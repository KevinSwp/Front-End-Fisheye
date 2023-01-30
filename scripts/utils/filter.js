/**
 * Hide/Display filter
*/
const filter = () => {
    const option = document.getElementById("dropdown_content");
    const btnPrimary = document.getElementById("btnPrimary");
    
    if (option.style.display === "none") {
        option.style.display = "block";
    }
    else {
        option.style.display = "none";
    }
    
    //Alternate on active
    // btnPrimary.addEventListener('click', function () {
    //     btnPrimary.classList.toggle('active');
    // });
}

const textReplace = () => {
    const option = document.getElementById("dropdown_content");
    const btnPrimary = document.getElementById("btnPrimary");
    const dropdownSelected = document.querySelectorAll(".dropdownSelected");
    //Replace text on click
    dropdownSelected.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const text = btn.innerText;
            btnPrimary.textContent = text;
            option.style.display = "none";
        })
    });
}

const sortByDate = () => {

    fetch("data/photographers.json")
    
    .then(response => response.json())
    
    .then(data => {
        data.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        console.log(data);
    })
    
    .catch(error => console.error(error));
}

const sortButton = document.getElementById("btnDate");
sortButton.addEventListener("click", () => {
    sortByDate();
})
