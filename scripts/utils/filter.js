/**
 * Hide/Display filter
*/
export const showFilterDropdown = () => {
  const selected = document.getElementById('selected');
  const svg = document.querySelector('.svgIcon svg');
  const option = document.querySelector('.dropdown_content');

  if (option.style.display !== 'block') {
    // Open dropdown
    option.style.display = 'block';
    selected.classList.add('selectedActive');
    svg.classList.add('svgEnable');
    svg.classList.remove('svgDisable');
  } else {
    option.style.display = 'none';
    selected.classList.remove('selectedActive');
    svg.classList.add('svgDisable');
    svg.classList.remove('svgEnable');
  }
};

/**
 * Hide filter
 */
export const hideFilterDropdown = () => {
  const selected = document.getElementById('selected');
  const svg = document.querySelector('.svgIcon svg');
  const option = document.querySelector('.dropdown_content');
  option.style.display = 'none';
  selected.classList.remove('selectedActive');
  svg.classList.add('svgDisable');
};

/**
 * Replace text on click
 */
export const textReplace = (textToReplace) => {
  const selected = document.getElementById('selected');
  const selectedText = document.getElementById('selectedText');
  const items = document.querySelectorAll('.item');

  selected.setAttribute('data-type', textToReplace);

  items.forEach((item, index) => {
    // Display all buttons
    item.classList.remove('hidden');
    // If selected button add hidden
    if (index === textToReplace) {
      selectedText.innerHTML = item.innerHTML;
      item.classList.add('hidden');
      hideFilterDropdown();
    }
  });
};

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
