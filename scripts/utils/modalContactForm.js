// Touch "Enter" to close modal
const btnClose = (event) => {
    const modal = document.getElementById("contact_modal");

    if (event.key === "Enter") {
        modal.style.display = "none";
    }
}

// Function display contact form
const displayModal = () => {
    // Select element from the DOM
    const modal = document.getElementById("contact_modal");
    const btnContactClose = document.querySelector('.btnContactClose');
    // Display modal contact
	modal.style.display = "block";
    // Escap to close modal
    document.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
    // Hide contact modal with "Enter" if focus on it
    btnContactClose.addEventListener("focus", () => {
        document.addEventListener("keydown", btnClose);
    })
    // Do nothing when losing focus on it
    btnContactClose.addEventListener("focusout", () => {
        document.removeEventListener("keydown", btnClose);
    })
    // Focus by default
    document.querySelector(".btnContactClose").focus();
}

// Function display off contact form
const closeModal = () => {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
