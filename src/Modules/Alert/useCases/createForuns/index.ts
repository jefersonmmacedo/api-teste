import { FavoriteRepository } from "../../repositories/implementations/AlertRepository";
import { CreateFavoriteController } from "./CreateFavoriteController";
import { CreateFavoriteUseCase } from "./CreateFavoriteUseCase";

const favoriteRepository = FavoriteRepository.getInstance();

const createFavoriteUseCase = new CreateFavoriteUseCase(favoriteRepository);

const createFavoriteController = new CreateFavoriteController(createFavoriteUseCase);

export { createFavoriteController };
