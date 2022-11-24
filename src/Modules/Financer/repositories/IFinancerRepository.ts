import { Financer } from "../models/Financer";

interface ICreateFinancerDTO {
  id: string;
  idCompany: string;
  idTransaction: string; //Venda - Aluguel
  title: string;
  description: string;
  type: string;
  value: string;
}

 
interface IFinancerRepository {
  create({
   idCompany, idTransaction, title, description, type, value
  }: ICreateFinancerDTO): void;
  update({
   id, idCompany, idTransaction, title, description, type, value
  }: ICreateFinancerDTO): void;
  list();
  delete({id});
}

export { IFinancerRepository, ICreateFinancerDTO };
