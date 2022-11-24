import { IMessagesRepository } from "../../repositories/IMessagesRepository";

interface IRequest {
  id: string;
  idRomm: string;
  idCompany: string;
  IdClient: string;
  idProperty: string;
  avatar: string;
  text: string;
  link: string;
}

class CreateMessagesUseCase {
  constructor(private MessagesRepository: IMessagesRepository) {
    ("");
  }

  async execute({
    id,idRomm, idCompany, IdClient, idProperty, avatar, text, link
  }: IRequest): Promise<void>{

   await this.MessagesRepository.create({
   id, idRomm, idCompany, IdClient, idProperty, avatar, text, link
    });
  }
}

export { CreateMessagesUseCase };
