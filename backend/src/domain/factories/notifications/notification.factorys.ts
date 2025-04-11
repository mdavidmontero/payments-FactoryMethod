import { EmailNotificationFactory } from "../../entities/notifications/fabric/emailFabric";
import { SmsNotificationFactory } from "../../entities/notifications/fabric/smsFabric";
import { WhatsappNotificationFactory } from "../../entities/notifications/fabric/whatsappFabric";
import { NotificationFactory } from "../../entities/notifications/NotificationFactory";
import { CustomError } from "../../errors/custom.error";

export abstract class NotificationFactorys {
  static generateNotification(notificationType: string): NotificationFactory {
    switch (notificationType) {
      case "email":
        return new EmailNotificationFactory();
      case "sms":
        return new SmsNotificationFactory();
      case "whatsapp":
        return new WhatsappNotificationFactory();
      default:
        throw CustomError.badRequest("Método de notificación no soportado");
    }
  }
}
