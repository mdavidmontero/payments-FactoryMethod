import { NotificationDataSource } from "../../../domain/datasources/notifications/notification.datasource";
import { CreateNotificationDto } from "../../../domain/dtos/notifications/create-notification.dto";
import { NotificationEntity } from "../../../domain/entities/notifications/notification.entity";
import { v4 as uuid } from "uuid";

export class NotificationDataSourceImpl implements NotificationDataSource {
  private notifications: NotificationEntity[] = [];

  async create(notification: CreateNotificationDto): Promise<NotificationEntity> {

    const newNotification = new NotificationEntity(
      notification.type,
      notification.message,
    );

    this.notifications.push(newNotification);
    return newNotification;
  }

  async getAll(): Promise<NotificationEntity[]> {
    return this.notifications;
  }
}
