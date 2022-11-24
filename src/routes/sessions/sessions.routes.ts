import { Router } from "express";
import { authenticateAccountController } from "../../Modules/AccountClient/useCases/authenticateAccount";
import { authenticateCompanyController } from "../../Modules/Company/useCases/authenticateCompany";

const SessionClientRouter = Router();

SessionClientRouter.post("/company", (req, res) => {
  return authenticateCompanyController.handle(req, res);
});

SessionClientRouter.post("/client", (req, res) => {
  return authenticateAccountController.handle(req, res);
})


export { SessionClientRouter };
