import { Router } from "express";
import { NotificationController } from "./controller-notification";
import { NotificationRepositoryImpl } from "../../infrastructure/repositories/notifications/notification.repository.impl";
import { NotificationDataSourceImpl } from "../../infrastructure/datasources/notifications/notification.datasource.impl";


const dataSource = new NotificationDataSourceImpl();
const repository = new NotificationRepositoryImpl(dataSource);
const controller = new NotificationController(repository);


export const notificationRoutes = Router();


notificationRoutes.post("/notifications", controller.createNotification.bind(controller));
notificationRoutes.get("/notifications", controller.getAll.bind(controller));