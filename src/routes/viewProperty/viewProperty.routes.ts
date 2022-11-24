import { Router } from "express";
import { createContactController } from "../../Modules/Contact/useCases/createContact";
import { createViewPropertyController } from "../../Modules/ViewProperty/useCases/createViewProperty";

const ViewPropertyRoutes = Router();

ViewPropertyRoutes.post("/", (req, res) => {
  return createViewPropertyController.handle(req, res);
});


export { ViewPropertyRoutes };
