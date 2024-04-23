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
  constructor(
    public client: string,
    private details: string,
    readonly amount: number
  ) {}

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}.`;
  }
}


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
