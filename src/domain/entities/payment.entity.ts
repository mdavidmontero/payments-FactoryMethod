export class PaymentEntity {
  constructor(public paymentType: string, public amount: number) {}

  public static fromObject(object: { [key: string]: any }): PaymentEntity {
    const { paymentType, amount } = object;
    if (!paymentType) throw "Id is required";
    if (!amount) throw "Amount is required";

    return new PaymentEntity(paymentType, amount);
  }
}
