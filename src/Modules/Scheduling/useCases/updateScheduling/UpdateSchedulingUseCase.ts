import { hash } from "bcrypt";
import { ISchedulingRepository } from "../../repositories/ISchedulingRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idClient: string;
  idProperty: string;
  idCompany: string;
  email: string;
  phone: string;
  whatsapp: string;
  status: string;
  day: string;
  month: string;
  shift: string;
  hour: string;
  ownACar: string;
  address: string;
  amountOfPeople: string;
  similarProperties: string;
  dateCompleted: Date;
}

class UpdateSchedulingUseCase {
  constructor(private SchedulingRepository: ISchedulingRepository) {
    " ";
  }
  
  async execute({id, idClient, idProperty, idCompany, email, phone, whatsapp, status,
    day, month, shift, hour, ownACar, address, similarProperties, amountOfPeople, dateCompleted }: IRequest): Promise<void> {

      await this.SchedulingRepository.update({
        id, idClient, idProperty, idCompany, email, phone, whatsapp, status,
        day, month, shift, hour, ownACar, address, similarProperties, amountOfPeople, dateCompleted
      });

  }
}

export { UpdateSchedulingUseCase };
