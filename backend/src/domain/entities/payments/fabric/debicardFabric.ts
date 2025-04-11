import { IPaymentMethod } from "../IPaymentMethod";
import { DebitCardPayment } from "../payment-methods/debitcard-payment";
import { PaymentFactory } from "../PaymentFactory";

export class DebiCardPaymentFabric extends PaymentFactory {
  createPayment(): IPaymentMethod {
    return new DebitCardPayment();
  }
}
