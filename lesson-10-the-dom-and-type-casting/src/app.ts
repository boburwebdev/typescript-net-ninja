// const anchor = document.querySelector("a");

// 3 ways to solve "'anchor' is possibly 'null'" error: optional chaining, if statement, exclamation point
// console.log("href: ", anchor?.href);

// if (anchor) {
//   console.log("href: ", anchor.href);
// }

// const anchor = document.querySelector("a")!;
// console.log("href: ", anchor.href);




// const newItemForm = document.querySelector("form");
const newItemForm = document.querySelector(".new-item-form") as HTMLFormElement;
console.log("form: ", newItemForm);
console.log("children of form: ", newItemForm.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

newItemForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
});
