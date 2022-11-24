import { collections } from "../../../../../services/database.service";
import { Chats } from "../../models/Chats";
import { IChatsDTO, IChatsRepository } from "../IChatsRepository";
import {v4 as uuidv4} from 'uuid'

class ChatsRepository implements IChatsRepository {
  private Chats: Chats[];

  private static INSTANCE: ChatsRepository;

  private constructor() {
    this.Chats = [];
  }

  public static getInstance(): ChatsRepository {
    if (!ChatsRepository.INSTANCE) {
      ChatsRepository.INSTANCE = new ChatsRepository();
    }

    return ChatsRepository.INSTANCE;
  }

  async create({ Room, idCompany, IdClient, idProperty, avatarClient, imageProperty }: IChatsDTO) {
    const payment: Chats = new Chats();
    const _id = uuidv4()
    Object.assign(payment, {
      _id, id: _id, Room, idCompany, IdClient, idProperty, avatarClient, imageProperty, created_at: new Date(),
    });

    this.Chats.push(payment);
    console.log(payment)

    await collections.chats.insertOne(payment).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.chats.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({id, Room, idCompany, IdClient, idProperty, avatarClient, imageProperty}): Promise<void> {}
}

export { ChatsRepository };
