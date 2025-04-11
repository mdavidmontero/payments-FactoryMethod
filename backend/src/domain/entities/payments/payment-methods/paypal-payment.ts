import { IPaymentMethod } from "../IPaymentMethod";

export class PayPalPayment implements IPaymentMethod {
  pay(amount: number): string {
    const commision = 0.02;
    let finalAmount: number = +amount + amount * +commision;

    if (amount > 750) {
      finalAmount += 7;
    }

    return `Pago de $${finalAmount} realizado con PayPal`;
  }
}
