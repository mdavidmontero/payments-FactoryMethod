import { PaymentFactorys } from "../factories/paymentFactory";


export class PaymentProcessor {
  static processPayment(paymentType: string, amount: number): string {
    const paymentMethod = PaymentFactorys.generatePayment(paymentType);
    return paymentMethod.pay(amount);
  }
}
