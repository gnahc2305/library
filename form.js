const nameInput = document.getElementById("bookName");

nameInput.addEventListener("input", (event) => {
  if (nameInput.validity.typeMismatch) {
    nameInput.setCustomValidity("I am expecting an e-mail address!");
    nameInput.reportValidity();
  } else {
    nameInput.setCustomValidity("");
  }
});
