import { FavoriteRepository } from "../../repositories/implementations/FavoriteRepository";
import { DeleteFavoriteController } from "./DeleteFavoriteController";
import { DeleteFavoriteUseCase } from "./DeleteFavoriteUseCase";

const favoriteRepository = FavoriteRepository.getInstance();
const deleteFavoriteUseCase = new DeleteFavoriteUseCase(favoriteRepository);
const deleteFavoriteController = new DeleteFavoriteController(deleteFavoriteUseCase);

export { deleteFavoriteController };
