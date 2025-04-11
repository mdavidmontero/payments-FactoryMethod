import { CredicarPaymentFabric } from "../../entities/payments/fabric/credicarFabric";
import { DebiCardPaymentFabric } from "../../entities/payments/fabric/debicardFabric";
import { PaypalPaymentFabric } from "../../entities/payments/fabric/paypalFabric";
import { IPaymentMethod } from "../../entities/payments/IPaymentMethod";
import { PaymentFactory } from "../../entities/payments/PaymentFactory";
import { CustomError } from "../../errors/custom.error";

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
