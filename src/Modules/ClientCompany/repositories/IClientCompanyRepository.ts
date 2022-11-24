import { ClientCompany } from "../models/ClientCompany";

interface IClientCompanyDTO {
  id: string;
  idProcess: string;
  name: string;
  rg: string;
  cpf: string;
  email: string;
  phone: string;
  whatsapp: string;
  avatar: string;
  road: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  interest: string;
  attendance: string;
}



 
interface IClientCompanyRepository {
  create({ idProcess, name, rg, cpf, email, phone, whatsapp, avatar, road, number, district, city, uf, interest, attendance}: IClientCompanyDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findById(id: string): Promise<void>;
  session(email: string, id: string, password: string);
  list();
  update({id, idProcess, name, rg, cpf, email, phone, whatsapp, avatar, road, number, district, city, uf, interest, attendance}: IClientCompanyDTO): void;
  delete({id});
}

export { IClientCompanyRepository, IClientCompanyDTO };
