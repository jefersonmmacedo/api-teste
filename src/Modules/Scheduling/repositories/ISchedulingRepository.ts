import { Scheduling } from "../models/Scheduling";

interface ISchedulingDTO {
  id: string;
  idClient: string;
  idProperty: string;
  idCompany: string;
  email: string;
  phone: string;
  whatsapp: string;
  status: string;
  day: string;
  month: string;
  shift: string;
  hour: string;
  ownACar: string;
  address: string;
  similarProperties: string;
  amountOfPeople: string;
  dateCompleted: Date;
}

 
interface ISchedulingRepository {
  create({ idClient, idProperty, idCompany, email, phone, whatsapp, status,
    day, month, shift, hour, ownACar, address, similarProperties, amountOfPeople, dateCompleted}: ISchedulingDTO): Promise<void>;
  list();
  update({id, idClient, idProperty, idCompany, email, phone, whatsapp, status,
    day, month, shift, hour, ownACar, address, similarProperties, amountOfPeople, dateCompleted}: ISchedulingDTO): void;
  delete({id});
}

export { ISchedulingRepository, ISchedulingDTO };
