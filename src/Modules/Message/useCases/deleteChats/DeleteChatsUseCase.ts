import { IChatsRepository } from "../../repositories/IChatsRepository";

class DeleteChatsUseCase {
  constructor(private ChatsRepository: IChatsRepository) {
    ("");
  }

  async execute({id}){

   await this.ChatsRepository.delete({id});
  }
}

export { DeleteChatsUseCase };
