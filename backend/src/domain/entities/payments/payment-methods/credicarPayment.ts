import { IPaymentMethod } from "../IPaymentMethod";

export class CreditCardPayment implements IPaymentMethod {
  pay(amount: number): string {
    let finalAmount = 0;
    const commision = 0.03;
    finalAmount = +amount + amount * +commision;

    if (amount > 1000) {
      finalAmount += 10;
    }
    return `Pago de $${finalAmount} realizado con Tarjeta de Crédito`;
  }
}
