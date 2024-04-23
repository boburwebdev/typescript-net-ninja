class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}.`;
  }
}

const invoiceOne = new Invoice("Mario", "work on the website", 300);
const invoiceTwo = new Invoice("Luigi", "work on ui design", 280);
console.log(invoiceOne.format());
console.log(invoiceTwo.format());

const invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log("invoices: ", invoices);