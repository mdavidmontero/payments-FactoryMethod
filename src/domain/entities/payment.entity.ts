import { CustomError } from "../errors/custom.error";

export class PaymentEntity {
  constructor(public paymentType: string, public amount: number) {}

  public static fromObject(object: { [key: string]: any }): PaymentEntity {
    const { paymentType, amount } = object;
    if (!paymentType) CustomError.badRequest("paymentType is required");
    if (!amount) CustomError.badRequest("amount is required");

    return new PaymentEntity(paymentType, amount);
  }
}
