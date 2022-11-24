import { hash } from "bcrypt";
import { INotificationRepository } from "../../repositories/INotificationRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idClient: string;
  idCompany: string;
  idBroker: string;
  text: string;
  type: string;
}

class UpdateNotificationUseCase {
  constructor(private NotificationRepository: INotificationRepository) {
    " ";
  }
  
  async execute({ id, idClient, idCompany, idBroker, text, type }: IRequest): Promise<void> {

      await this.NotificationRepository.update({
         id, idClient, idCompany, idBroker, text, type
      });

  }
}

export { UpdateNotificationUseCase };
