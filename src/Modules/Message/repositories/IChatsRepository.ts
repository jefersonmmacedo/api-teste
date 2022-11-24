import { Chats } from "../models/Chats";

interface IChatsDTO {
  id
  Room: string;
  idCompany: string;
  IdClient:string;
  idProperty:string;
  avatarClient: string;
  imageProperty: string;
}


interface IChatsRepository {
  create({Room, idCompany, IdClient, idProperty, avatarClient, imageProperty }: IChatsDTO): Promise<void>;
  list();
  delete({id});
  update({id, Room, idCompany, IdClient, idProperty, avatarClient, imageProperty}): Promise<void>
}

export { IChatsRepository, IChatsDTO };
