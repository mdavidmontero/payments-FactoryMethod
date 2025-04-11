import { INotificationMethod } from "../INotificationMethod";

export class SmsNotification implements INotificationMethod {
    send(message: string): string {
      return `SMS enviado con el mensaje: ${message}`;
    }
  }