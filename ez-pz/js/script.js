const checkbox = document.querySelector("#menu__toggle");
const menusc = document.querySelector("#menusection");

menusc.addEventListener("click", function(event) {
  // Check if the clicked element is the burger menu or its label
  const isBurgerMenu = event.target.matches(".menu__btn") || event.target.matches(".menu__btn img");
  // Check if the clicked element is inside the menu box
  const isInsideMenuBox = event.target.closest(".menu__box");

  if (!isBurgerMenu && !isInsideMenuBox) {
    // Close menu box if the click is outside of the box
    checkbox.checked = false;
  }
});
