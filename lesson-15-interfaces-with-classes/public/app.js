import Invoice from "./classes/Invoice.js";
import Payment from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("Yoshi", "work on website db", 300);
docTwo = new Payment("Mario", "work on website architecture", 320);
const docs = [];
docs.push(docOne, docTwo);
console.log("docs: ", docs);
const newItemForm = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
newItemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log("doc: ", doc);
});
