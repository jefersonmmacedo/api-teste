import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListChatsUseCase } from "./ListChatsUseCase";

class ListChatsController {
  constructor(private listChatseCase: ListChatsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idAccount = req.params;
   await collections.chats.find(idAccount).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListChatsController };
