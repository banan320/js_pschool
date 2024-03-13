"use strict";
const panelText = document.querySelector(".panel");
const inputValue = document.querySelector(".input").value;
const button = document.querySelector(".button");
const notification = document.querySelector(".notification");
const testDiv = document.querySelector(".test");

// const one = document.querySelectorAll(".one")[0];
// const one2 = document.querySelectorAll(".one")[1];
// const one = document.querySelector(".one");
// const one2 = document.querySelector(".one ~ div");
// const two = document.querySelector("#two");
// const user_id = document.querySelector('[user-id="4"]');
// const user_id5 = document.querySelector('[user-id="5"]');
// console.log(one.innerText);
// console.log(one2.innerText);
// console.log(two.innerText);
// console.log(user_id.innerText);
// console.log(user_id5.innerText);

// console.log(panelText)
// panelText.innerText = "dskfbhsdkhfshbdkf";
// inputValue.value = "Test";

function submitForm() {
  const input = document.querySelector(".input").value;
  if (!input) {
    return;
  }
  document.querySelector(".panel").innerText = input;
  document.querySelector(".input").value = "";
  document.querySelector(".notification").classList.add("notification_active");
  const textString = JSON.stringify({
    text: input,
  });
  localStorage.setItem("text", textString);
}

function inputChanged(e) {
  if (e.code == "Enter") {
    submitForm();
  }
}

// button.addEventListener("click", submitForm);
// inputValue.addEventListener("keydown", inputChanged);

// const panelText2 = "Панель";
// const panelClass = "button";
// const newElement = document.createElement("div");
// newElement.setAttribute("user-id", 1);
// newElement.classList.add("panel");
// // newElement.innerText = "Кнопка";
// newElement.innerHTML = `<button class="${panelClass}">${panelText2}</button>`;
// testDiv.appendChild(newElement);
// const JSX = document.createElement("div");
// JSX.classList.add("panel");
// JSX.innerHTML = `
//         <h1>Hello world</h1>
//         <div>
//           <img src="./logo.svg" alt="" />
//         </div>
//       `;
// testDiv.appendChild(JSX);

// localStorage.setItem("token", "fsdis");
// localStorage.setItem("token1", 1);
// localStorage.setItem("token2", true);
// localStorage.removeItem("token1");
// localStorage.clear();

// const obj = JSON.parse('{"a":1}');
// console.log(obj.a);
// const str = JSON.stringify(obj);
// console.log(str);
