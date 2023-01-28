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

        if (btnPrimary === text) {
            option.style.display = "none";
        }
    });
}