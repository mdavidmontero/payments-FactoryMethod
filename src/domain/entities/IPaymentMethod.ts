export interface IPaymentMethod {
  pay(amount: number): string;
}
