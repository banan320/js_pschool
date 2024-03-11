"use strict";
const panelText = document.querySelector(".panel");
const inputValue = document.querySelector(".input");
const button = document.querySelector(".button");
const notification = document.querySelector(".notification");

// const one = document.querySelectorAll(".one")[0];
// const one2 = document.querySelectorAll(".one")[1];
const one = document.querySelector(".one");
const one2 = document.querySelector(".one ~ div");

const two = document.querySelector("#two");
const user_id = document.querySelector('[user-id="4"]');
const user_id5 = document.querySelector('[user-id="5"]');

// console.log(panelText)
// panelText.innerText = "dskfbhsdkhfshbdkf";
// inputValue.value = "Test";

function submitForm() {
  if (!inputValue) {
    return;
  }
  panelText.innerText = inputValue.value;
  inputValue.value = "";
  notification.classList.add("notification_active");
}
function inputChanged(e) {
  if (e.code == "Enter") {
    submitForm();
  }
}

button.addEventListener("click", submitForm);
inputValue.addEventListener("keydown", inputChanged);

console.log(one.innerText);
console.log(one2.innerText);
console.log(two.innerText);
console.log(user_id.innerText);
console.log(user_id5.innerText);
