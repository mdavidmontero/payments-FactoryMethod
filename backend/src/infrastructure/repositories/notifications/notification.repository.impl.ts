import { NotificationDataSource } from "../../../domain/datasources/notifications/notification.datasource";
import { CreateNotificationDto } from "../../../domain/dtos/notifications/create-notification.dto";
import { NotificationEntity } from "../../../domain/entities/notifications/notification.entity";
import { NotificationRepository } from "../../../domain/repositories/notifications/notification.repository";


export class NotificationRepositoryImpl implements NotificationRepository {
  constructor(private readonly dataSource: NotificationDataSource) {}

  async create(notification: CreateNotificationDto): Promise<NotificationEntity> {
    return this.dataSource.create(notification);
  }

  async getAll(): Promise<NotificationEntity[]> {
    return this.dataSource.getAll(); // <-- Aquí está la implementación
  }
}