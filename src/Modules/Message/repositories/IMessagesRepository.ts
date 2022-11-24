import { Messages } from "../models/Messages";

interface IMessagesDTO {
  id: string;
  idRomm: string;
  idCompany: string;
  IdClient: string;
  idProperty: string;
  avatar: string;
  text: string;
  link: string;
}
 


interface IMessagesRepository {
  create({idRomm, idCompany, IdClient, idProperty, avatar, text, link }: IMessagesDTO): Promise<void>;
  list();
  delete({id});
  update({id, idRomm, idCompany, IdClient, idProperty, avatar, text, link}): Promise<void>
}

export { IMessagesRepository, IMessagesDTO };
