import { Request, Response } from "express";
import { CreateNotificationDto } from "../../domain/dtos/notifications/create-notification.dto";
import { NotificationRepository } from "../../domain/repositories/notifications/notification.repository";
import { CustomError } from "../../domain/errors/custom.error";
import { CreateNotificationUseCase } from "../../domain/use-cases/notifications/use-case-factory-notifications";



export class NotificationController {
  constructor(private readonly notificationRepository: NotificationRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res
        .status(error.statusCode)
        .json({ error: error.message || error });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  };

  public createNotification = (req: Request, res: Response): any => {
    const [error, createNotificationDto] = CreateNotificationDto.create(req.body);
    if (error) {
      return this.handleError(error, res.json({ error }));
    }

    new CreateNotificationUseCase(this.notificationRepository)
      .execute(createNotificationDto)
      .then((notificationEntity) =>
        res.status(201).json({
          message: `${createNotificationDto.type.toUpperCase()} enviado con exito`,
          notification: { notificationEntity },
        })
      )
      .catch((error) => this.handleError(error, res));
  };

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const notifications = await this.notificationRepository.getAll();
      return res.status(200).json(notifications);
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener las notificaciones" });
    }
  };
}