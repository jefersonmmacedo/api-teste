import { Router } from "express";
import { createChatsController } from "../../Modules/Message/useCases/createChats";



const chatsRoutes = Router();

chatsRoutes.post("/", (req, res) => {
  return createChatsController.handle(req, res);
});


export { chatsRoutes };


