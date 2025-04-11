import { IPaymentMethod } from "../IPaymentMethod";

export class DebitCardPayment implements IPaymentMethod {
  pay(amount: number): string {
    const commision = 0.01;
    let finalAmount = +amount + amount * +commision;

    if (amount > 500) {
      finalAmount += 5;
    }
    return `Pago de $${finalAmount} realizado con Tarjeta de Débito`;
  }
}
