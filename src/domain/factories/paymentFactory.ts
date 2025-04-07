import { CredicarPaymentFabric } from "../entities/fabric/credicarFabric";
import { DebiCardPaymentFabric } from "../entities/fabric/debicardFabric";
import { PaypalPaymentFabric } from "../entities/fabric/paypalFabric";
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
      case "debit":
        return new DebiCardPaymentFabric();
      case "paypal":
        return new PaypalPaymentFabric();
      default:
        throw CustomError.badRequest("Método de pago no soportado");
    }
  }
}
