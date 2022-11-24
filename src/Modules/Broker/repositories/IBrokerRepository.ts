import { Broker } from "../models/Broker";

interface IBrokerDTO {
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


interface IBrokerRepository {
  create({ idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube,}: IBrokerDTO): Promise<void>;
  findByEmail(email: string): Promise<void> ;
  findById(id: string): Promise<void>;
  session(email: string, id: string, password: string);
  list();
  update({id, idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube,}: IBrokerDTO): void;
  delete({id});
}

export { IBrokerRepository, IBrokerDTO };
