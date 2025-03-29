import { IPaymentMethod } from "../entities/IPaymentMethod";
import { CreditCardPayment } from "../entities/payment-methods/credicarPayment";
import { DebitCardPayment } from "../entities/payment-methods/debitcard-payment";
import { PayPalPayment } from "../entities/payment-methods/paypal-payment";
import { CustomError } from "../errors/custom.error";

export abstract class PaymentFactory {
  static generatePayment(paymentType: string): IPaymentMethod {
    switch (paymentType) {
      case "credit":
        return new CreditCardPayment();
      case "debit":
        return new DebitCardPayment();
      case "paypal":
        return new PayPalPayment();
      default:
        throw CustomError.badRequest("Método de pago no soportado");
    }
  }
}
