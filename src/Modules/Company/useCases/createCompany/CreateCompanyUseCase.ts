import { hash } from "bcrypt";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  type: string;
  status: string;
  cnpj: string;
  verified: boolean;
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

class CreateCompanyUseCase {
  constructor(private CompanyRepository: ICompanyRepository) {
    " ";
  }
  
  async execute({id,type,verified, status, cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf, website, facebook,
    instagram, linkedin, youtube}: IRequest): Promise<void> {
    const findEmail = await this.CompanyRepository.findByEmail(email);
    const passwordHash = await hash(await password, 8);

      await this.CompanyRepository.create({
        id, type,verified, status, cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, password:passwordHash, responsibleName,
        emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf, website, facebook,
        instagram, linkedin, youtube
      });

  }
}

export { CreateCompanyUseCase };