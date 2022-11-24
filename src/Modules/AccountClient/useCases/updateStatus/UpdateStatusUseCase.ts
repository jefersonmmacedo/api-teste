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

class UpdateStatusUseCase {
  constructor(private accountRepository: IAccountClientRepository) {
    " ";
  }
  
  async execute({id, name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf }: IRequest): Promise<void> {
    const passwordHash = await hash(await password, 8);

      await this.accountRepository.update({
        id, name, email, phone, whatsapp, password:passwordHash, status, verified, avatar, cep, city, uf
      });

  }
}

export { UpdateStatusUseCase };
