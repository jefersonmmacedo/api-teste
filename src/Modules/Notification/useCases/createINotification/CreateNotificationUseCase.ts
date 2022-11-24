import { INotificationRepository } from "../../repositories/INotificationRepository";


interface IRequest {
  id: string;
  idClient: string;
  idCompany: string;
  idBroker: string;
  text: string;
  type: string;
}

class CreateNotificationUseCase {
  constructor(private NotificationRepository: INotificationRepository) {
    " ";
  }
  
  async execute({id, idClient, idCompany, idBroker, text, type }: IRequest): Promise<void> {
      await this.NotificationRepository.create({
        id, idClient, idCompany, idBroker, text, type
      });

  }
}

export { CreateNotificationUseCase };
