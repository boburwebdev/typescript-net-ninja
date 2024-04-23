"use strict";
// class Invoice {
//   public client: string;
//   private details: string;
//   readonly amount: number;
//   constructor(client: string, details: string, amount: number) {
//     this.client = client;
//     this.details = details;
//     this.amount = amount;
//   }
//   format(): string {
//     return `${this.client} owes $${this.amount} for ${this.details}.`;
//   }
// }
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
const invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log("invoices: ", invoices);
invoices.forEach((item) => {
    console.log(item.client, 
    // "\n" + item.details, property has become private
    "\n" + item.amount, "\n" + item.format());
});
