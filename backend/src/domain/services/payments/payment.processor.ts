import { PaymentFactorys } from "../../factories/payments/paymentFactory";


export class PaymentProcessor {
  static processPayment(paymentType: string, amount: number): void {
    const paymentFactory = PaymentFactorys.generatePayment(paymentType);
    return paymentFactory.processpaymets(amount);
  }
}
