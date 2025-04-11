import { INotificationMethod } from "../INotificationMethod";


export class WhatsappNotification implements INotificationMethod {
    send(message: string): string {
      return `WhatsApp enviado con el mensaje: ${message}`;
    }
  }