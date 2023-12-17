//  <!-- toggle margin top button -->
function handleClick() {
  const buttonBelow = document.getElementById("buttonBelow");

  if (window.innerWidth <= 425) {
    if (
      buttonBelow.style.marginTop === "180px" &&
      buttonBelow.style.marginBottom === ""
    ) {
      buttonBelow.style.marginTop = "";
      buttonBelow.style.marginBottom = "";
    } else {
      buttonBelow.style.marginTop = "180px";
      buttonBelow.style.marginBottom = "";
    }
  }
}

const button1 = document.getElementById("dropdownInput");
button1.addEventListener("click", handleClick);

// Dropdown menu selecting items
const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    buttonBelow.style.marginTop = "";
    const selectedText = item.textContent.trim();
    const dropdownButton = document.querySelector("#dropdownInput");
    dropdownButton.innerHTML = `${selectedText} <i class="bi bi-chevron-down"></i>`;
  });
});

// ------Form Validation------

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var nameInput = document.getElementById("nameInput");
  var nameInputError = document.getElementById("nameInputError");
  if (nameInput.value.trim() === "") {
    nameInputError.textContent = "Ве молиме внесете го вашето име и презиме";
    nameInput.classList.add("is-invalid");
  } else {
    nameInputError.textContent = "";
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
  }
  // company name
  var companyNameInput = document.getElementById("companyName");
  var companyNameInputError = document.getElementById("companyNameInputError");
  if (companyName.value.trim() === "") {
    companyNameInputError.textContent =
      "Ве молиме внесете го името на вашата компанија";
    companyName.classList.add("is-invalid");
  } else {
    companyNameInputError.textContent = "";
    companyName.classList.remove("is-invalid");
    companyName.classList.add("is-valid");
  }
  // Validate email input
  var emailInput = document.getElementById("emailInput");
  var emailInputError = document.getElementById("emailInputError");

  if (emailInput.value.trim() === "") {
    emailInputError.textContent = "Ве молиме внесете ја вашата имејл адреса";
    emailInput.classList.add("is-invalid");
  } else {
    emailInputError.textContent = "";
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  }

  // Number input validation
  var numberInput = document.getElementById("numberInput");
  var numberInputError = document.getElementById("numberInputError");
  if (numberInput.value.trim() === "") {
    numberInputError.textContent =
      "Ве молиме внесете го вашиот контакт телефон";
    numberInput.classList.add("is-invalid");
  } else {
    numberInputError.textContent = "";
    numberInput.classList.remove("is-invalid");
    numberInput.classList.add("is-valid");
  }

  // Validate dropdown menu
  var dropdownInput = document.getElementById("dropdownInput");
  var dropdownInputError = document.getElementById("dropdownInputError");

  if (dropdownInput.innerText.trim() === "Изберете тип на студент") {
    dropdownInputError.textContent = "Ве молиме изберете тип на студент";
    dropdownInput.classList.add("is-invalid");
  } else {
    dropdownInputError.textContent = "";
    dropdownInput.classList.remove("is-invalid");
    dropdownInput.classList.add("is-valid");
  }

  var isValid = !document.getElementsByClassName("is-invalid").length;
  var successMessage = document.getElementById("successMessage");

  if (isValid) {
    successMessage.textContent = "Формата е успешно испратена!";
    successMessage.classList.add("text-success");
  } else {
    successMessage.textContent = "";
    successMessage.classList.remove("text-success");
  }
});
