import { hash } from "bcrypt";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  type: string;
  verified: boolean;
  status: string;
  cnpj: string;
  socialReason: string;
  fantasyName: string;
  creci: string;
  email: string;
  phone: string;
  whatsapp: string;
  responsibleName: string;
  emailResponsible: string;
  whatsappResponsible: string;
  logo: string;
  cep: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  website: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  nameSlug: string;
  password: Promise<string>;
}



class UpdateStatusUseCase {
  constructor(private accountRepository: ICompanyRepository) {
    " ";
  }
  
  async execute({ id, type, verified, status, cnpj, socialReason, fantasyName, creci, email, phone, whatsapp, password, responsibleName, emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf, website, facebook, instagram, linkedin, youtube, nameSlug, }: IRequest): Promise<void> {
    const passwordHash = await hash(await password, 8);

      await this.accountRepository.update({

        id, type, verified, status, cnpj, socialReason, fantasyName, creci, email, phone, whatsapp, password: passwordHash, responsibleName, emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf, website, facebook, instagram, linkedin, youtube, nameSlug, 
      });

  }
}

export { UpdateStatusUseCase };
