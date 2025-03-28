export class CreatePaymentDto {
  private constructor(public paymentType: string, public amount: number) {}

  static create(props: { [key: string]: any }): [string?, CreatePaymentDto?] {
    const { paymentType, amount } = props;
    if (!paymentType || paymentType.length === 0)
      return ["paymentType is required", undefined];

    return [undefined, new CreatePaymentDto(paymentType, amount)];
  }
}
