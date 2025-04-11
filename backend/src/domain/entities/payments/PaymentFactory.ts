import { IPaymentMethod } from "./IPaymentMethod";

export abstract class PaymentFactory {
  abstract createPayment(): IPaymentMethod;

  processpaymets(amount: number): void {
    const process = this.createPayment();

    process.pay(amount);
  }
}
