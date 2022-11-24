import { FavoriteRepository } from "../../repositories/implementations/FavoriteRepository";
import { ListFavoriteClientController } from "./ListFavoriteClientController";
import { ListFavoriteClientUseCase } from "./ListFavoriteClientUseCase";

const favoriteRepository = FavoriteRepository.getInstance();

const listFavoriteClientUsecase = new ListFavoriteClientUseCase(favoriteRepository);

const listFavoriteClientController = new ListFavoriteClientController(listFavoriteClientUsecase);

export { listFavoriteClientController };
