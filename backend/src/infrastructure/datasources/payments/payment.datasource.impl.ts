import { PaymentDatasource } from "../../../domain/datasources/payments/payment.datasource";
import { CreatePaymentDto } from "../../../domain/dtos/payments/create-payment.dto";
import { PaymentEntity } from "../../../domain/entities/payments/payment.entity";


export class PaymentDatasourceImpl implements PaymentDatasource {
  async create(createPaymentDto: CreatePaymentDto): Promise<PaymentEntity> {
    return PaymentEntity.fromObject(createPaymentDto);
  }
}
