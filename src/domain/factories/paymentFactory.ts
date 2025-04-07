import { CredicarPaymentFabric } from "../entities/fabric/credicarFabric";
import { IPaymentMethod } from "../entities/IPaymentMethod";
import { CreditCardPayment } from "../entities/payment-methods/credicarPayment";
import { DebitCardPayment } from "../entities/payment-methods/debitcard-payment";
import { PayPalPayment } from "../entities/payment-methods/paypal-payment";
import { PaymentFactory } from "../entities/PaymentFactory";
import { CustomError } from "../errors/custom.error";

export abstract class PaymentFactorys {
  static generatePayment(paymentType: string): PaymentFactory {
    switch (paymentType) {
      case "credit":
        return new CredicarPaymentFabric();
      // case "debit":
      //   return new DebitCardPayment();
      // case "paypal":
      //   return new PayPalPayment();
      default:
        throw CustomError.badRequest("Método de pago no soportado");
    }
  }
}
