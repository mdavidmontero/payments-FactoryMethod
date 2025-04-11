import { CreateNotificationDto } from "../../dtos/notifications/create-notification.dto";
import { NotificationEntity } from "../../entities/notifications/notification.entity";


export interface NotificationRepository {
  create(notification: CreateNotificationDto): Promise<NotificationEntity>;
  getAll(): Promise<NotificationEntity[]>;
}
