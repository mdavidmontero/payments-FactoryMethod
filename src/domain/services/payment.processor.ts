import { PaymentFactory } from "../factories/paymentFactory";

export class PaymentProcessor {
  static processPayment(paymentType: string, amount: number): string {
    const paymentMethod = PaymentFactory.generatePayment(paymentType);
    return paymentMethod.pay(amount);
  }
}
