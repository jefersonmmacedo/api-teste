import { FavoriteRepository } from "../../repositories/implementations/FavoriteRepository";
import { ListFavoriteCompanyController } from "./ListFavoriteCompanyController";
import { ListFavoriteCompanyUseCase } from "./ListFavoriteCompanyUseCase";

const favoriteRepository = FavoriteRepository.getInstance();

const listFavoriteCompanyUsecase = new ListFavoriteCompanyUseCase(favoriteRepository);

const listFavoriteCompanyController = new ListFavoriteCompanyController(listFavoriteCompanyUsecase);

export { listFavoriteCompanyController };
