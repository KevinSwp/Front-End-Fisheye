const filter = () => {
    const option = document.getElementById("dropdown_content");
    
    if (option.style.display === "none") {
        option.style.display = "block";
    }
    else {
        option.style.display = "none";
    }
}

const dropdown = document.querySelector(".dropdown");
const btnPrimary = document.getElementById("btnPrimary");
const dropdownSelected = document.querySelectorAll(".dropdownSelected");

btnPrimary.addEventListener('click', function () {
    dropdown.classList.toggle('active');
});

dropdownSelected.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const text = btn.innerText;
        btnPrimary.textContent = text;
    })
});