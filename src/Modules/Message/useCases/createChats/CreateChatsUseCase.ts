import { IChatsRepository } from "../../repositories/IChatsRepository";

interface IRequest {
  id: string;
  Room: string;
  idCompany: string;
  IdClient:string;
  idProperty:string;
  avatarClient: string;
  imageProperty: string;
}

class CreateChatsUseCase {
  constructor(private ChatsRepository: IChatsRepository) {
    ("");
  }

  async execute({
    id,Room, idCompany, IdClient, idProperty, avatarClient, imageProperty
  }: IRequest): Promise<void>{

   await this.ChatsRepository.create({
   id, Room, idCompany, IdClient, idProperty, avatarClient, imageProperty
    });
  }
}

export { CreateChatsUseCase };
