import { Router } from "express";
import { createFavoriteController } from "../../Modules/Favorite/useCases/createForuns";
import { deleteFavoriteController } from "../../Modules/Favorite/useCases/deleteFavorite";
import { listFavoriteController } from "../../Modules/Favorite/useCases/listFavorite";
import { listFavoriteClientController } from "../../Modules/Favorite/useCases/listFavoriteClient";
import { listFavoriteCompanyController } from "../../Modules/Favorite/useCases/listFavoriteCompany";
import { listFavoritePropertyController } from "../../Modules/Favorite/useCases/listFavoriteProperty";
import { listFavoriteUserController } from "../../Modules/Favorite/useCases/listFavoriteUser";




const favoriteRoutes = Router();

favoriteRoutes.post("/", (req, res) => {
  return createFavoriteController.handle(req, res);
});

favoriteRoutes.get("/", (req, res) => {
  return listFavoriteController.handle(req, res);
});

favoriteRoutes.get("/filter/:idProperty/:idClient", (req, res) => {
  return listFavoriteUserController.handle(req, res);
});
favoriteRoutes.get("/filter/:idCompany", (req, res) => {
  return listFavoriteCompanyController.handle(req, res);
});
favoriteRoutes.get("/filter/:idClient", (req, res) => {
  return listFavoriteClientController.handle(req, res);
});
favoriteRoutes.get("/filter/:idProperty", (req, res) => {
  return listFavoritePropertyController.handle(req, res);
});

favoriteRoutes.delete("/:id", (req, res) => {
  return deleteFavoriteController.handle(req, res);
});


export { favoriteRoutes };
