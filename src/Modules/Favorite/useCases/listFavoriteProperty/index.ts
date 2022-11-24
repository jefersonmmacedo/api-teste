import { FavoriteRepository } from "../../repositories/implementations/FavoriteRepository";
import { ListFavoritePropertyController } from "./ListFavoritePropertyController";
import { ListFavoritePropertyUseCase } from "./ListFavoritePropertyUseCase";

const favoriteRepository = FavoriteRepository.getInstance();

const listFavoritePropertyUsecase = new ListFavoritePropertyUseCase(favoriteRepository);

const listFavoritePropertyController = new ListFavoritePropertyController(listFavoritePropertyUsecase);

export { listFavoritePropertyController };
