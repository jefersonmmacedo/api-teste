import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAccessUseCase } from "./ListAccessUseCase";

class ListAccessController {
  constructor(private listAccessUseCase: ListAccessUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.access.find().toArray(function(err, result){
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

export { ListAccessController };
