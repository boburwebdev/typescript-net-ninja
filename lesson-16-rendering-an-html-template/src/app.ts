import Invoice from "./classes/Invoice.js";
import ListTemplate from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const newItemForm = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul.item-list") as HTMLUListElement;
const itemList = new ListTemplate(ul);

newItemForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  itemList.render(doc, type.value, "end");
});
