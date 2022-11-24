import { Router } from "express";
import { createMyPlainController } from "../../Modules/Plains/useCases/createMyPlain";
import { deleteMyPlainController } from "../../Modules/Plains/useCases/deleteMyPlain";
import { listMyPlainController } from "../../Modules/Plains/useCases/listMyPlain";



const MyPlainRoutes = Router();

MyPlainRoutes.post("/", (req, res) => {
  return createMyPlainController.handle(req, res);
});

MyPlainRoutes.get("/:idCompany", (req, res) => {
  return listMyPlainController.handle(req, res);
});

MyPlainRoutes.delete("/:id", (req, res) => {
  return deleteMyPlainController.handle(req, res);
});

export { MyPlainRoutes };


