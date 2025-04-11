import { INotificationMethod } from "../INotificationMethod";
import { NotificationFactory } from "../NotificationFactory";
import { WhatsappNotification } from "../notifications-methods/whatsapp-notification";

export class WhatsappNotificationFactory extends NotificationFactory {
    createNotification(): INotificationMethod {
      return new WhatsappNotification();
    }
  }