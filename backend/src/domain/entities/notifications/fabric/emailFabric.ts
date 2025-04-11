import { INotificationMethod } from "../INotificationMethod";
import { NotificationFactory } from "../NotificationFactory";
import { EmailNotification } from "../notifications-methods/email-notification";


export class EmailNotificationFactory extends NotificationFactory {
  createNotification(): INotificationMethod {
    return new EmailNotification();
  }
}