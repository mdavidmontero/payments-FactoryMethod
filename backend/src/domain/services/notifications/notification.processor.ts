import { CreateNotificationDto } from "../../dtos/notifications/create-notification.dto";
import { NotificationEntity } from "../../entities/notifications/notification.entity";
import { NotificationFactorys } from "../../factories/notifications/notification.factorys";
import { NotificationRepository } from "../../repositories/notifications/notification.repository";

export class NotificationProcessor {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  async execute(notification: CreateNotificationDto): Promise<NotificationEntity> {
    const factory = NotificationFactorys.generateNotification(notification.type);
    const method = factory.createNotification();
    
    // Ejecutas el método pero no lo guardas
    method.send(notification.message); 

    // Guardas solo el mensaje original
    return this.notificationRepository.create(notification);
  }
}
