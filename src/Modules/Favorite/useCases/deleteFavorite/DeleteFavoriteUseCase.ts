import { IFavoriteRepository } from "../../repositories/IFavoriteRepository";

class DeleteFavoriteUseCase {
  constructor(private commentsRepository: IFavoriteRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteFavoriteUseCase };
