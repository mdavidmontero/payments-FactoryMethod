import { INotificationMethod } from "./INotificationMethod";

export abstract class NotificationFactory {
    abstract createNotification(): INotificationMethod;
  
    processNotification(message: string): string {
      const sender = this.createNotification();
      return sender.send(message);
    }
  }