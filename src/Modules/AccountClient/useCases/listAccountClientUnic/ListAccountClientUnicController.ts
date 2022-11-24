import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAccountClientUnicUseCase } from "./ListAccountClientUnicUseCase";

class ListAccountClientUnicController {
  constructor(private ListAccountClientUnicUseCase: ListAccountClientUnicUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const id = req.params;
   await collections.account.find(id).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
    //  console.log(result)
      return result;
     })
  }
}

export { ListAccountClientUnicController };
