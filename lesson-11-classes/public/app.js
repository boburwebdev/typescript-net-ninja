"use strict";
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}.`;
    }
}
const invoiceOne = new Invoice("Mario", "work on the website", 300);
const invoiceTwo = new Invoice("Luigi", "work on ui design", 280);
console.log(invoiceOne.format());
console.log(invoiceTwo.format());
const invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log("invoices: ", invoices);
