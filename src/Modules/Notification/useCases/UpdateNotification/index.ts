import { NotificationRepository } from "../../repositories/implementations/NotificationRepository";
import { UpdateNotificationController } from "./UpdateNotificationController";
import { UpdateNotificationUseCase } from "./UpdateNotificationUseCase";

const notificationRepository = NotificationRepository.getInstance();

const updateNotificationUseCase = new UpdateNotificationUseCase(notificationRepository);

const updateNotificationController = new UpdateNotificationController(updateNotificationUseCase);

export { updateNotificationController };
