import Invoice from "./classes/Invoice.js";
import ListTemplate from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
const newItemForm = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul.item-list");
const itemList = new ListTemplate(ul);
newItemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    itemList.render(doc, type.value, "end");
});
