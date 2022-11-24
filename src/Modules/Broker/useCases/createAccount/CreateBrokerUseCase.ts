import { hash } from "bcrypt";
import { IBrokerRepository } from "../../repositories/IBrokerRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  creci: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  avatar: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

class CreateBrokerUseCase {
  constructor(private BrokerRepository: IBrokerRepository) {
    " ";
  }
  
  async execute({id,idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube,}: IRequest): Promise<void> {
    const findEmail = await this.BrokerRepository.findByEmail(email);

      await this.BrokerRepository.create({
        id, idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube, 
      });

  }
}

export { CreateBrokerUseCase };


