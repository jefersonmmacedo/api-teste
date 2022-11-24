import { MyPlain } from "../models/MyPlain";

interface IMyPlainDTO {
  id: string;
  idPlain: string;
  idCompany: string;
  status: string;
}
 

interface IMyPlainRepository {
  create({idPlain, idCompany, status }: IMyPlainDTO): Promise<void>;
  list();
  delete({id});
  update({id, idPlain, idCompany, status}): Promise<void>
}

export { IMyPlainRepository, IMyPlainDTO };
