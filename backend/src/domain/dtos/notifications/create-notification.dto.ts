import { NotificationType } from "../../entities/notifications/notification.entity";

export class CreateNotificationDto {
  constructor(
    public readonly message: string,
    public readonly type: NotificationType
  ) {}

  static create(body: any): [string?, CreateNotificationDto?] {
    const { message, type } = body;

    if (!message || typeof message !== "string") {
      return ['El campo "message" es obligatorio y debe ser un string'];
    }

    if (!type || !["email", "sms", "whatsapp"].includes(type)) {
      return ['El campo "type" es obligatorio y debe ser uno de: email, sms, whatsapp'];
    }

    return [undefined, new CreateNotificationDto(message, type)];
  }
}
