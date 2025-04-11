import { INotificationMethod } from "../INotificationMethod";
import { NotificationFactory } from "../NotificationFactory";
import { SmsNotification } from "../notifications-methods/sms-notification";


export class SmsNotificationFactory extends NotificationFactory {
  createNotification(): INotificationMethod {
    return new SmsNotification();
  }
}