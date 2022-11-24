import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListContactUseCase } from "./ListContactUseCase";

class ListContactController {
  constructor(private listContactUseCase: ListContactUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.contact.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      console.log(result)
      return result;
     })

  }
}

export { ListContactController };
