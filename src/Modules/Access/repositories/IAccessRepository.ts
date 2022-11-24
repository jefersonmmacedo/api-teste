import { Access } from "../models/Access";

interface ICreateAccessDTO {
  id: string;
  idCompany: string;
  device: string;
  browser: string;
}


interface IAccessRepository {
  create({
   idCompany, device, browser
  }: ICreateAccessDTO): void;
  update({
   id, idCompany, device, browser
  }: ICreateAccessDTO): void;
  list();
  delete({id});
}

export { IAccessRepository, ICreateAccessDTO };
