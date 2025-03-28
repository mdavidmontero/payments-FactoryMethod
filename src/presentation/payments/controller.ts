import { Response, Request } from "express";
import { PaymentRepository } from "../../domain/repositories/payment.repository";
import { CreatePaymentDto } from "../../domain/dtos/payments/create-payment.dto";
import { CreatePayment } from "../../domain/use-cases/use-case-factory";

export class PaymentsController {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  public createPayment = (req: Request, res: Response): any => {
    const [error, createPaymentDto] = CreatePaymentDto.create(req.body);
    if (error) {
      return res.status(400).json({ error });
    }

    new CreatePayment(this.paymentRepository)
      .execute(createPaymentDto)
      .then((payment) => res.json({ message: "Pago exitoso", payment }))
      .catch((error) => res.status(400).json({ error: error.message }));
  };
}
