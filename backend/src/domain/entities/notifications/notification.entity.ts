export type NotificationType = 'email' | 'sms' | 'whatsapp';

export class NotificationEntity {
  constructor(
    public readonly type: NotificationType,
    public readonly message: string,
  ) {}
}
