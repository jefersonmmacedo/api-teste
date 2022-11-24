import { IFavoriteRepository } from "../../repositories/IFavoriteRepository";

interface IRequest {
  id: string;
  idCompany: string;
  idProperty: string;
  idClient: string;
}

class CreateFavoriteUseCase {
  constructor(private FavoriteRepository: IFavoriteRepository) {
    " ";
  }

  execute({ id, idCompany, idProperty, idClient }: IRequest): void {

    this.FavoriteRepository.create({
      id, idCompany, idProperty, idClient
    });
  }
}

export { CreateFavoriteUseCase };
