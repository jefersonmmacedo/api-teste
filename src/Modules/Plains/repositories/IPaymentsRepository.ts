import { Payments } from "../models/Payments";

interface IPaymentsDTO {
  id: string;
  idPlain: string;
  idCompany: string;
  email:string;
  namePlain:string;
  value: string;
  period: number;
  linkComprovant: string;
  aceptTerms: string;
  status: string;
}

interface IPaymentsRepository {
  create({idPlain, idCompany, email, namePlain, value, period, linkComprovant, aceptTerms, status }: IPaymentsDTO): Promise<void>;
  list();
  delete({id});
  update({id, idPlain, idCompany, email, namePlain, value, period, linkComprovant, aceptTerms, status}): Promise<void>
}

export { IPaymentsRepository, IPaymentsDTO };
