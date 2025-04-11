import { INotificationMethod } from "../INotificationMethod";

export class EmailNotification implements INotificationMethod {
    send(message: string): string {
      return `Email enviado con el mensaje: ${message}`;
    }
  }