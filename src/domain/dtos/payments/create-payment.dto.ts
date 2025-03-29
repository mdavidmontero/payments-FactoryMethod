export class CreatePaymentDto {
  private constructor(public paymentType: string, public amount: number) {}

  static create(props: { [key: string]: any }): [string?, CreatePaymentDto?] {
    const { paymentType, amount } = props;
    if (!paymentType || paymentType.length === 0)
      return ["el tipo de pago es requerido", undefined];
    if (!amount) return ["el monto es requerido", undefined];
    if (amount < 0) return ["el monto no puede ser negativo", undefined];

    return [undefined, new CreatePaymentDto(paymentType, amount)];
  }
}
