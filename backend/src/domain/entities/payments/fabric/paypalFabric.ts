import { IPaymentMethod } from "../IPaymentMethod";
import { PayPalPayment } from "../payment-methods/paypal-payment";
import { PaymentFactory } from "../PaymentFactory";

export class PaypalPaymentFabric extends PaymentFactory {
  createPayment(): IPaymentMethod {
    return new PayPalPayment();
  }
}