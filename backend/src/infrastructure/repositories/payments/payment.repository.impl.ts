import { PaymentDatasource } from "../../../domain/datasources/payments/payment.datasource";
import { CreatePaymentDto } from "../../../domain/dtos/payments/create-payment.dto";
import { PaymentEntity } from "../../../domain/entities/payments/payment.entity";
import { PaymentRepository } from "../../../domain/repositories/payments/payment.repository";

export class PaymentRepositoryImpl implements PaymentRepository {
  constructor(private readonly datasource: PaymentDatasource) {}
  create(createPaymentDto: CreatePaymentDto): Promise<PaymentEntity> {
    return this.datasource.create(createPaymentDto);
  }
}
