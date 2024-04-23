import Invoice from "./classes/Invoice.js";

const invoiceOne = new Invoice("Mario", "work on the website", 300);
const invoiceTwo = new Invoice("Luigi", "work on ui design", 280);

const invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log("invoices: ", invoices);

invoices.forEach((item: Invoice) => {
  console.log(
    item.client,
    // "\n" + item.details, property has become private
    "\n" + item.amount,
    "\n" + item.format()
  );
});
