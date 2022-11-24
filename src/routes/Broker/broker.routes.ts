import { Router } from "express";
import { createBrokerController } from "../../Modules/Broker/useCases/createAccount";

const BrokerRouter = Router();

BrokerRouter.post("/", (req, res) => {
  return createBrokerController.handle(req, res);
});



export { BrokerRouter };
