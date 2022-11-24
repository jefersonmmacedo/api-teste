import { FavoriteRepository } from "../../repositories/implementations/AlertRepository";
import { ListFavoriteController } from "./ListFavoriteController";
import { ListFavoriteUseCase } from "./ListFavoriteUseCase";

const favoriteRepository = FavoriteRepository.getInstance();

const listFavoriteUsecase = new ListFavoriteUseCase(favoriteRepository);

const listFavoriteController = new ListFavoriteController(listFavoriteUsecase);

export { listFavoriteController };
