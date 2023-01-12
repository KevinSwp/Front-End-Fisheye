//################## MESSAGE IF ERRORS ##################
const messageName = "2 lettres minimum. Chiffre, espace, caractère spécial non autorisé. ";
const messageEmail = "Adresse E-mail invalide (exemple@domain.com).";

//################## DOM ELEMENTS ##################
// First name
const firstName = document.getElementById("firstName");
const firstNameError = document.querySelector("#firstName + p");
// Last name
const lastName = document.getElementById("lastName");
const lastNameError = document.querySelector("#lastName + p");
// Email
const email = document.getElementById("email");
const emailError = document.querySelector("#email + p");

//################## CHECKERS ##################
// Check if the name has minimum 2 characters, whithout number, without space and special character.
function validName(name) {
    const regex = /^[a-zA-Z]+[a-zA-Z-]*[a-zA-Z]$/;
  
    return regex.test(name);
}

// Check email
function validEmail(email) {
    const regex = /^[a-zA-Z0-9]+[a-zA-Z0-9_-]+@[a-z]+[a-z]+\.[a-z]{2,4}$/;
  
    return regex.test(email);
}

// Check form
function validForm() {
    return (
        validName(firstName.value) &&
        validName(lastName.value) &&
        validEmail(email.value)
    );
}

// ################## ADD/REMOVE ERRORS MESSAGES ##################
// Add/remove error message of first name/last name
function nameValidity(inputField, errorField) {
    if (validName(inputField.value)) {
        inputField.classList.remove("border-red");

        errorField.textContent = "";
        errorField.classList.remove("text-red");
    } 
    else {
        inputField.classList.add("border-red");

        errorField.textContent = messageName;
        errorField.classList.add("text-red");
    }
}

// Add/remove error message of email
function emailValidity(emailField, errorField) {
    if (validEmail(emailField.value)) {
        emailField.classList.remove("border-red");
    
        errorField.textContent = "";
        errorField.classList.remove("text-red");
    } 
    else {
        emailField.classList.add("border-red");
    
        errorField.textContent = messageEmail;
        errorField.classList.add("text-red");
    }
}

// ################## CHECK INPUT FIELD ##################
// Check first name validity oninput
firstName.oninput = () => {
    nameValidity(firstName, firstNameError);
};
firstName.addEventListener = () => {
    nameValidity(firstName, firstNameError);
};

// Check last name validity oninput
lastName.oninput = () => {
    nameValidity(lastName, lastNameError);
};
lastName.addEventListener = () => {
    nameValidity(lastName, lastNameError);
};  

// Check email validity oninput
email.oninput = () => {
    emailValidity(email, emailError);
};
email.addEventListener = () => {
    emailValidity(email, emailError);
};

// ################## CHECK FORM ON SUBMIT ##################
document.getElementById("modal-form").onsubmit = (event) => {
    event.preventDefault();

    nameValidity(firstName, firstNameError);
    nameValidity(lastName, lastNameError);
    emailValidity(email, emailError);

    if (validForm()) {
        console.log("Message envoyé");
    }
};