import { Router } from "express";
import { createCompanyController } from "../../Modules/Company/useCases/createCompany";
import { listCompanyController } from "../../Modules/Company/useCases/listAccountCompany";
import { listCompanyUnicController } from "../../Modules/Company/useCases/listAccountCompanyUnic";

const CompanyRouter = Router();

CompanyRouter.post("/", (req, res) => {
  return createCompanyController.handle(req, res);
});


CompanyRouter.get("/:type", (req, res) => {
  return listCompanyController.handle(req, res);
})

CompanyRouter.get("/unic/:id", (req, res) => {
  return listCompanyUnicController.handle(req, res);
})


export { CompanyRouter };
