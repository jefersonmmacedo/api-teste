import { Router } from "express";
import { createMessagesController } from "../../Modules/Message/useCases/createMessages";


const MessagesRoutes = Router();

MessagesRoutes.post("/", (req, res) => {
  return createMessagesController.handle(req, res);
});

export { MessagesRoutes };


