import { collections } from "../../../../../services/database.service";
import { Messages } from "../../models/Messages";
import { IMessagesDTO, IMessagesRepository } from "../IMessagesRepository";
import {v4 as uuidv4} from 'uuid'

class MessagesRepository implements IMessagesRepository {
  private messages: Messages[];

  private static INSTANCE: MessagesRepository;

  private constructor() {
    this.messages = [];
  }

  public static getInstance(): MessagesRepository {
    if (!MessagesRepository.INSTANCE) {
      MessagesRepository.INSTANCE = new MessagesRepository();
    }

    return MessagesRepository.INSTANCE;
  }

  async create({ idRomm, idCompany, IdClient, idProperty, avatar, text, link }: IMessagesDTO) {
    const message: Messages = new Messages();
    const _id = uuidv4()
    Object.assign(message, {
      _id, id: _id, idRomm, idCompany, IdClient, idProperty, avatar, text, link, created_at: new Date(),
    });

    this.messages.push(message);
    console.log(message)

    await collections.messages.insertOne(message).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.messages.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({idRomm, idCompany, IdClient, idProperty, avatar, text, link}): Promise<void> {}
}

export { MessagesRepository };
