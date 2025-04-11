import { Router } from "express";
import { PaymentDatasourceImpl } from "../infrastructure/datasources/payments/payment.datasource.impl";
import { PaymentRepositoryImpl } from "../infrastructure/repositories/payments/payment.repository.impl";
import { PaymentsController } from "./payments/controller";
import { NotificationDataSourceImpl } from "../infrastructure/datasources/notifications/notification.datasource.impl";
import { NotificationController } from "./notifications/controller-notification";
import { NotificationRepositoryImpl } from "../infrastructure/repositories/notifications/notification.repository.impl";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    // Payments
    const paymentDatasource = new PaymentDatasourceImpl();
    const paymentRepository = new PaymentRepositoryImpl(paymentDatasource);
    const paymentController = new PaymentsController(paymentRepository);
    router.post("/api/payments", paymentController.createPayment);

    // Notifications
    const notificationDatasource = new NotificationDataSourceImpl();
    const notificationRepository = new NotificationRepositoryImpl(notificationDatasource);
    const notificationController = new NotificationController(notificationRepository);
    router.post("/api/notifications", notificationController.createNotification.bind(notificationController));
    router.get("/api/notifications", notificationController.getAll.bind(notificationController));
 

    return router;
  }
}
