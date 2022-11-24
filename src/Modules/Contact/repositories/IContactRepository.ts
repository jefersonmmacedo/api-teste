import { Contact } from "../models/Contact";

interface ICreateContactDTO {
  id: string;
  idProperty: string;
  idClient: string;
  idCompany: string;
  type: string;
}

interface IContactRepository {
  create({
   idProperty, idClient, idCompany, type
  }: ICreateContactDTO): void;
  update({
   id, idProperty, idClient, idCompany, type
  }: ICreateContactDTO): void;
  list();
  delete({id});
}

export { IContactRepository, ICreateContactDTO };
