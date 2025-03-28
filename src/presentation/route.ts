import { Router } from "express";
import { PaymentDatasourceImpl } from "../infrastructure/datasources/payment.datasource.impl";
import { PaymentRepositoryImpl } from "../infrastructure/repositories/payment.repository.impl";
import { PaymentsController } from "./payments/controller";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new PaymentDatasourceImpl();
    const paymentRepository = new PaymentRepositoryImpl(datasource);
    const paymentController = new PaymentsController(paymentRepository);

    router.post("/api/payments", paymentController.createPayment);

    return router;
  }
}
