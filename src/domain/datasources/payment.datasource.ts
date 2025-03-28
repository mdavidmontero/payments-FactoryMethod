import { CreatePaymentDto } from "../dtos/payments/create-payment.dto";
import { PaymentEntity } from "../entities/payment.entity";

export abstract class PaymentDatasource {
  abstract create(createPaymentDto: CreatePaymentDto): Promise<PaymentEntity>;
}
