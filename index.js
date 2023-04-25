const miStorage = window.localStorage;

const addButtons = document.querySelectorAll(".add-item");

addButtons.forEach((addButton) => {
  addButton.addEventListener("click", () => {
    console.log("Clickeado");
  });
});
