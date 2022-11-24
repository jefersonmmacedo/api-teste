import { NotificationRepository } from "../../repositories/implementations/NotificationRepository";
import { DeleteNotificationController } from "./DeleteNotificationController";
import { DeleteNotificationUseCase } from "./DeleteNotificationUseCase";

const notificationRepository = NotificationRepository.getInstance();
const deleteNotificationUseCase = new DeleteNotificationUseCase(notificationRepository);
const deleteNotificationController = new DeleteNotificationController(deleteNotificationUseCase);

export { deleteNotificationController };
