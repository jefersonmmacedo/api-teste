import { Router } from "express";
import { createFinancerController } from "../../Modules/Financer/useCases/createFinancer";
import { listFinancerController } from "../../Modules/Financer/useCases/listFinancer";
import { listFinancerUserController } from "../../Modules/Financer/useCases/listFinancerUser";

const financerRoutes = Router();

financerRoutes.post("/", (req, res) => {
  return createFinancerController.handle(req, res);
});
financerRoutes.get("/", (req, res) => {
  return listFinancerController.handle(req, res);
});
financerRoutes.get("/company/:idCompany", (req, res) => {
  return listFinancerUserController.handle(req, res);
});


export { financerRoutes };
