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

export default Invoice;