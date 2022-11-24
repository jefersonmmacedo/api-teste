import { AccountClient } from "../models/AccountClient";

interface IAccountClientDTO {
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



 
interface IAccountClientRepository {
  create({ name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf}: IAccountClientDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findById(id: string): Promise<void>;
  session(email: string, id: string, password: string);
  list();
  update({id, name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf}: IAccountClientDTO): void;
  delete({id});
}

export { IAccountClientRepository, IAccountClientDTO };
