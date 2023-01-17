//################## MESSAGE IF ERRORS ##################
const messageName = "2 lettres minimum. Chiffre, espace, caractère spécial non autorisé. ";
const messageEmail = "Adresse E-mail invalide (exemple@domain.com).";
const messageTextAera = "Caractères 50 min./200 max.";

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

function validMessage(message) {
    if (message.length < 50 || message.length > 200) {
        return false;
    }
    else {
        return true;
    }
}

// Check form
function validForm() {
    return (
        validName(firstName.value) &&
        validName(lastName.value) &&
        validEmail(email.value) &&
        validMessage(textAera.value)
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

// Add/remove error message of text aera
function messageValidity(emailField, errorField) {
    if (validMessage(emailField.value)) {
        emailField.classList.remove("border-red");
    
        errorField.textContent = "";
        errorField.classList.remove("text-red");
    } 
    else {
        emailField.classList.add("border-red");
    
        errorField.textContent = messageTextAera;
        errorField.classList.add("text-red");
    }
}

// ################## CHECK INPUT FIELD ##################
const initEventListeners = () => {
    // First name
    const firstName = document.getElementById("firstName");
    const firstNameError = document.querySelector("#firstName + p");
    // Last name
    const lastName = document.getElementById("lastName");
    const lastNameError = document.querySelector("#lastName + p");
    // Email
    const email = document.getElementById("email");
    const emailError = document.querySelector("#email + p");
    // Message
    const textAera = document.getElementById("textAera");
    const textAeraError = document.querySelector("#textAera + p");

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

    // Check email validity oninput
    textAera.oninput = () => {
        messageValidity(textAera, textAeraError);
    };
    textAera.addEventListener = () => {
        messageValidity(textAera, textAeraError);
    };

    // ################## CHECK FORM ON SUBMIT ##################
    document.getElementById("modal-form").onsubmit = (event) => {
        event.preventDefault();

        nameValidity(firstName, firstNameError);
        nameValidity(lastName, lastNameError);
        emailValidity(email, emailError);
        messageValidity(textAera,textAeraError);

        if (validForm()) {
            console.log("Message envoyé");
            console.log({'Prénom': firstName, 'Nom': lastName, 'Email': email, 'Message': textAera})
        }
    };
}

