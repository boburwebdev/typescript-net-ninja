import { HasFormatter } from "../interfaces/HasFormatter";

class Payment implements HasFormatter {
  constructor(
    public recipient: string,
    private details: string,
    readonly amount: number
  ) {}

  format(): string {
    return `${this.recipient} is owed $${this.amount} for ${this.details}.`;
  }
}

export default Payment;
