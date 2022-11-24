import { Router } from "express";
import { createContactController } from "../../Modules/Contact/useCases/createContact";

const contactRoutes = Router();

contactRoutes.post("/", (req, res) => {
  return createContactController.handle(req, res);
});


export { contactRoutes };
