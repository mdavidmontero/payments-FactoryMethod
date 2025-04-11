import { IPaymentMethod } from "../IPaymentMethod";
import { CreditCardPayment } from "../payment-methods/credicarPayment";
import { PaymentFactory } from "../PaymentFactory";

export class CredicarPaymentFabric extends PaymentFactory {
  createPayment(): IPaymentMethod {
    return new CreditCardPayment();
  }
}
