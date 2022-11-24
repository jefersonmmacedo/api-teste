
import { FindNotificationUseCase } from "./FindNotificationUseCase";
import { FindNotificationController } from "./FindNotificationController";
import { NotificationRepository } from "../../repositories/implementations/NotificationRepository";

const notificationRepository = NotificationRepository.getInstance();

const findNotificationUsecase = new FindNotificationUseCase(notificationRepository);

const findNotificationController = new FindNotificationController(findNotificationUsecase);

export { findNotificationController };
