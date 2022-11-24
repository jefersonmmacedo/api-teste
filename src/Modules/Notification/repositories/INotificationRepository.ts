import { Notification } from "../models/Notification";

interface INotificationDTO {
  id: string;
  idClient: string;
  idCompany: string;
  idBroker: string;
  text: string;
  type: string;
}

 
interface INotificationRepository {
  create({ idClient, idCompany, idBroker, text, type }: INotificationDTO): Promise<void>;
  update({ id, idClient, idCompany, idBroker, text, type }: INotificationDTO): Promise<void>;
  list();
  delete({id});
}

export { INotificationRepository, INotificationDTO };

