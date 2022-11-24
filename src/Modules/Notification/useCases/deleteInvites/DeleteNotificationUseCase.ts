import { INotificationRepository } from "../../repositories/INotificationRepository";

class DeleteNotificationUseCase {
  constructor(private commentsRepository: INotificationRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteNotificationUseCase };
