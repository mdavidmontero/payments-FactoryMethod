import { PaymentRepository } from "../repositories/payment.repository";
import { CreatePaymentDto } from "../dtos/payments/create-payment.dto";
import { PaymentEntity } from "../entities/payment.entity";
import { PaymentProcessor } from "../services/payment.processor";

export class CreatePayment {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(
    createPaymentDto: CreatePaymentDto
  ): Promise<{ paymentEntity: PaymentEntity; confirmation: string }> {
    const { paymentType, amount } = createPaymentDto;
    const confirmation = PaymentProcessor.processPayment(paymentType, amount);
    const paymentEntity = await this.paymentRepository.create(createPaymentDto);
    return { paymentEntity, confirmation };
  }
}
