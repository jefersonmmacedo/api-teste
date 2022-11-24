import { Router } from "express";
import { createSchedulingController } from "../../Modules/Scheduling/useCases/createScheduling";
import { listSchedulingController } from "../../Modules/Scheduling/useCases/listScheduling";
import { listSchedulingUnicController } from "../../Modules/Scheduling/useCases/listSchedulingUnic";
import { listSchedulingUnicCompanyController } from "../../Modules/Scheduling/useCases/listSchedulingUnicCompany";
import { updateSchedulingController } from "../../Modules/Scheduling/useCases/updateScheduling";

const SchedulingRouter = Router();

SchedulingRouter.post("/", (req, res) => {
  return createSchedulingController.handle(req, res);
});
SchedulingRouter.get("/", (req, res) => {
  return listSchedulingController.handle(req, res);
});
SchedulingRouter.get("/:idClient", (req, res) => {
  return listSchedulingUnicController.handle(req, res);
});
SchedulingRouter.get("/:idCompany", (req, res) => {
  return listSchedulingUnicCompanyController.handle(req, res);
});
SchedulingRouter.patch("/", (req, res) => {
  return updateSchedulingController.handle(req, res);
});


export { SchedulingRouter };
