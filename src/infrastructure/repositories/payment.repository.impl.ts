import { PaymentDatasource } from "../../domain/datasources/payment.datasource";
import { CreatePaymentDto } from "../../domain/dtos/payments/create-payment.dto";
import { PaymentEntity } from "../../domain/entities/payment.entity";
import { PaymentRepository } from "../../domain/repositories/payment.repository";

export class PaymentRepositoryImpl implements PaymentRepository {
  constructor(private readonly datasource: PaymentDatasource) {}
  create(createPaymentDto: CreatePaymentDto): Promise<PaymentEntity> {
    return this.datasource.create(createPaymentDto);
  }
}
