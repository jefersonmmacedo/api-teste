import { hash } from "bcrypt";
import { IAccountClientRepository } from "../../repositories/IAccountClientRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  whatsapp: string;
  status: string;
  verified: boolean;
  avatar: string;
  cep: string;
  city: string;
  uf: string;
}

class UpdateAccountClientUseCase {
  constructor(private accountClientRepository: IAccountClientRepository) {
    " ";
  }
  
  async execute({id, name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf }: IRequest): Promise<void> {
    const findEmail = await this.accountClientRepository.findByEmail(email);
    const passwordHash = await hash(await password, 8);

      await this.accountClientRepository.update({
        id, name, email, phone, whatsapp, password:passwordHash, status, verified, avatar, cep, city, uf
      });

  }
}

export { UpdateAccountClientUseCase };
