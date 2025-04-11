import { CreateNotificationDto } from "../../dtos/notifications/create-notification.dto";
import { NotificationEntity } from "../../entities/notifications/notification.entity";

export interface NotificationDataSource {
  create(notification: CreateNotificationDto): Promise<NotificationEntity>;
  getAll(): Promise<NotificationEntity[]>;
}
