import { Router } from "express";
import { createAccountClientController } from "../../Modules/AccountClient/useCases/createAccount";
import { listAccountClientController } from "../../Modules/AccountClient/useCases/listAccountClient";

const AccountClientRouter = Router();

AccountClientRouter.post("/", (req, res) => {
  return createAccountClientController.handle(req, res);
});

AccountClientRouter.get("/", (req, res) => {
  return listAccountClientController.handle(req, res);
})


export { AccountClientRouter };
