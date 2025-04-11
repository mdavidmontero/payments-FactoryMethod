import { Router } from "express";
import { PaymentDatasourceImpl } from "../../infrastructure/datasources/payments/payment.datasource.impl";
import { PaymentRepositoryImpl } from "../../infrastructure/repositories/payments/payment.repository.impl";
import { PaymentsController } from "./controller";

export class PaymentRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new PaymentDatasourceImpl();
    const paymentRepository = new PaymentRepositoryImpl(datasource);
    const paymentController = new PaymentsController(paymentRepository);

    router.post("/", paymentController.createPayment);

    return router;
  }
}
