import { PaymentRepository } from "../../repositories/payments/payment.repository";
import { CreatePaymentDto } from "../../dtos/payments/create-payment.dto";
import { PaymentEntity } from "../../entities/payments/payment.entity";
import { PaymentProcessor } from "../../services/payments/payment.processor";


export class CreatePayment {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(
    createPaymentDto: CreatePaymentDto
  ): Promise<{ paymentEntity: PaymentEntity; confirmation: void }> {
    const { paymentType, amount } = createPaymentDto;
    const confirmation = PaymentProcessor.processPayment(paymentType, amount);
    const paymentEntity = await this.paymentRepository.create(createPaymentDto);
    return { paymentEntity, confirmation };
  }
}
