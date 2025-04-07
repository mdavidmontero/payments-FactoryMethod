import { Response, Request } from "express";
import { PaymentRepository } from "../../domain/repositories/payment.repository";
import { CreatePaymentDto } from "../../domain/dtos/payments/create-payment.dto";
import { CreatePayment } from "../../domain/use-cases/use-case-factory";
import { CustomError } from "../../domain/errors/custom.error";
import { request } from "http";

export class PaymentsController {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res
        .status(error.statusCode)
        .json({ error: error.message || error });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  };

  public createPayment = (req: Request, res: Response): any => {
    const [error, createPaymentDto] = CreatePaymentDto.create(req.body);
    if (error) {
      return this.handleError(error, res.json({ error }));
    }

    new CreatePayment(this.paymentRepository)
      .execute(createPaymentDto)
      .then((payment) => res.json({ message: "Pago exitoso", payment }))
      .catch((error) => this.handleError(error, res));
  };
}
