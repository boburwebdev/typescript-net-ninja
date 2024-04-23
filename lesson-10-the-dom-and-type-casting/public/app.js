"use strict";
// const anchor = document.querySelector("a");
// 3 ways to solve "'anchor' is possibly 'null'" error: optional chaining, if statement, exclamation point
// console.log("href: ", anchor?.href);
// if (anchor) {
//   console.log("href: ", anchor.href);
// }
// const anchor = document.querySelector("a")!;
// console.log("href: ", anchor.href);
// const newItemForm = document.querySelector("form");
const newItemForm = document.querySelector(".new-item-form");
console.log("form: ", newItemForm);
console.log("children of form: ", newItemForm.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
newItemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
