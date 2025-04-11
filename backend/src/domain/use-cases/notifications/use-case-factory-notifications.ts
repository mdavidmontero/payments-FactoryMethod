import { CreateNotificationDto } from "../../../domain/dtos/notifications/create-notification.dto";
import { NotificationEntity } from "../../../domain/entities/notifications/notification.entity";
import { NotificationProcessor } from "../../services/notifications/notification.processor";
import { NotificationRepository } from "../../../domain/repositories/notifications/notification.repository";

export class CreateNotificationUseCase {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  execute(createNotificationDto: CreateNotificationDto): Promise<NotificationEntity> {
    const processor = new NotificationProcessor(this.notificationRepository);
    return processor.execute(createNotificationDto);
  }
}
