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
