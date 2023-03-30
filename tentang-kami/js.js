// Select the elements
const menuToggle = document.getElementById('menu__toggle');
const menuBox = document.querySelector('.menu__box');
const body = document.querySelector('body');

// Add event listener to the body
body.addEventListener('click', (event) => {
  // Check if the clicked element is inside the menu box
  const isClickedInside = menuBox.contains(event.target);
  
  // Check if the menu toggle is checked and the clicked element is outside the menu box
  if (menuToggle.checked && !isClickedInside) {
    // Uncheck the menu toggle to close the menu
    menuToggle.checked = false;
  }
});
