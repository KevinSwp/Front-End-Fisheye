/**
 * Display main
 */
const displayMain = () => {
  // Select element from DOM
  const mainContent = document.getElementById('main');
  const header = document.querySelector('.header');
  // Display main
  mainContent.style.display = 'block';
  header.style.display = 'block';
};

/**
 * Hide main
 */
const hideMain = () => {
  // Select element from DOM
  const mainContent = document.getElementById('main');
  const header = document.querySelector('.header');
  // Display main
  mainContent.style.display = 'none';
  header.style.display = 'none';
};

/*
* Touch "Enter" to close modal
*/
const enterKeyToClose = (event) => {
  const modal = document.getElementById('contact_modal');

  if (event.key === 'Enter') {
    modal.style.display = 'none';
    // Call function
    displayMain();
  }
};

/**
 * Function display contact form
*/
const displayModal = () => {
  // Select element from the DOM
  const modal = document.getElementById('contact_modal');
  const btnContactClose = document.querySelector('.btnContactClose');
  // Call function
  hideMain();
  // Display modal contact
  modal.style.display = 'block';
  // Escap to close modal
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
      // Call function
      displayMain();
    }
  });
  // Hide contact modal with "Enter" if focus on it
  btnContactClose.addEventListener('focus', () => {
    document.addEventListener('keydown', enterKeyToClose);
  });
  // Do nothing when losing focus on it
  btnContactClose.addEventListener('focusout', () => {
    document.removeEventListener('keydown', enterKeyToClose);
  });
  // Focus by default
  document.querySelector('.btnContactClose').focus();
};

/*
* Function display off contact form
*/
const closeModal = () => {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
  // Call function
  displayMain();
};
