import { FavoriteRepository } from "../../repositories/implementations/FavoriteRepository";
import { ListFavoriteController } from "./ListFavoriteController";
import { ListFavoriteUseCase } from "./ListFavoriteUseCase";

const favoriteRepository = FavoriteRepository.getInstance();

const listFavoriteUsecase = new ListFavoriteUseCase(favoriteRepository);

const listFavoriteController = new ListFavoriteController(listFavoriteUsecase);

export { listFavoriteController };
