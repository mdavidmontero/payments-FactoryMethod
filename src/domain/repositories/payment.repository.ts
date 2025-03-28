import { CreatePaymentDto } from "../dtos/payments/create-payment.dto";
import { PaymentEntity } from "../entities/payment.entity";

export abstract class PaymentRepository {
  abstract create(createPaymentDto: CreatePaymentDto): Promise<PaymentEntity>;
}
