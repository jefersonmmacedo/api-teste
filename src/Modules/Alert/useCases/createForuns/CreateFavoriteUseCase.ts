import { IFavoriteRepository } from "../../repositories/IAlertRepository";

interface IRequest {
  id: string;
  idProperty: string;
  type: string;
}

class CreateFavoriteUseCase {
  constructor(private FavoriteRepository: IFavoriteRepository) {
    " ";
  }

  execute({ id, idProperty, type }: IRequest): void {
    this.FavoriteRepository.findByIdProfessional(idProperty);


    this.FavoriteRepository.create({
      id, idProperty, type
    });
  }
}

export { CreateFavoriteUseCase };
