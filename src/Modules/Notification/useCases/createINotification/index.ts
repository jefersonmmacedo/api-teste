import { NotificationRepository } from "../../repositories/implementations/NotificationRepository";
import { CreateNotificationController } from "./CreateNotificationController";
import { CreateNotificationUseCase } from "./CreateNotificationUseCase";

const notificationRepository = NotificationRepository.getInstance();

const createNotificationUseCase = new CreateNotificationUseCase(notificationRepository);

const createNotificationController = new CreateNotificationController(createNotificationUseCase);

export { createNotificationController };
