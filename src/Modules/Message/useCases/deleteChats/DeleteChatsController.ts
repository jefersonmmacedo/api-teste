import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteChatsUseCase } from "./DeleteChatsUseCase";

class DeleteChatsController {
  constructor(private DeleteChatsUseCase: DeleteChatsUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.chats.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteChatsController };
