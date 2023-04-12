const editBtn = document.getElementById("edit-btn");
const inputs = document.querySelectorAll(".form-input");

function toggleInputs() {
  inputs.forEach((input) => {
    input.readOnly = !input.readOnly;
  });
}

editBtn.addEventListener("click", toggleInputs);

function onEditButtonClicked() {
  inputs.forEach(input => {
    input.removeAttribute("disabled");
  });
  editBtn.textContent = "Simpan";
  editBtn.removeEventListener("click", onEditButtonClicked);
  editBtn.addEventListener("click", onSaveButtonClicked);
}

function onSaveButtonClicked() {
  inputs.forEach(input => {
    input.setAttribute("disabled", "");
  });
  editBtn.textContent = "Edit";
  editBtn.removeEventListener("click", onSaveButtonClicked);
  editBtn.addEventListener("click", onEditButtonClicked);
}

editBtn.addEventListener("click", onEditButtonClicked);

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
