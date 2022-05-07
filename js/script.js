// get DOM Elements
let formElement = document.getElementById("form");
let messageEl = document.getElementById("messege");
let messageContainerEl = document.querySelector(".message-container");
let passwords = document.querySelectorAll(".password");

// Flags/Vaiables
let isValid = false;
let passwordMatch = false;
let storedData = {};

// ******Validate form function start*******************************************************
const validateForm = () => {
  isValid = formElement.checkValidity();
  if (!isValid) {
    messageEl.innerHTML = "Registration failed";
    messageContainerEl.classList.remove("pass");
    messageContainerEl.classList.add("fail");
    return false;
  } else {
    messageEl.innerHTML = "Registration Successfull";
    messageContainerEl.classList.remove("fail");
    messageContainerEl.classList.add("pass");
    return true;
  }
};
// ******Validate form function end***********************************************************

// **************checkPassword function start*************************************************
const checkPassword = () => {
  let password1Value = passwords[0].value;
  let password2Value = passwords[1].value;

  if (password1Value === password2Value) {
    messageContainerEl.classList.remove("fail");
    messageContainerEl.classList.add("pass");
    passwordMatch = true;
    passwords.forEach((password) => {
      passwordMatch === true
        ? password.classList.remove("fail") + password.classList.add("pass")
        : "";
    });
    return true;
  } else {
    messageEl.innerHTML = "Password missmatch found";
    messageContainerEl.classList.remove("pass");
    messageContainerEl.classList.add("fail");

    passwordMatch = false;
    passwords.forEach((password) => {
      passwordMatch === false
        ? password.classList.remove("pass") + password.classList.add("fail")
        : "";
    });
    return false;
  }
  console.log(checkPassword);
};
// **************checkPassword function end****************************************************

// *********************Data store function start***********************************************
const storeFormData = () => {
  storedData = {
    fullName: formElement.name.value,
    phNumber: formElement.email.value,
    emailAddress: formElement.email.value,
    website: formElement.website.value,
    password: formElement.password1.value,
  };
  console.log(storedData);
};
// *********************Data store function end***********************************************

// Processing the Form Data
const processFormData = (event) => {
  event.preventDefault();
  let check1 = false;
  let check2 = false;
  // Validate form
  check1 = validateForm();

  if (check1) {
    check2 = checkPassword();
  }
  //   check password

  // Store data
  if (check1 && check2) {
    storeFormData();
  }
};

// Event listeners
formElement.addEventListener("submit", processFormData);
