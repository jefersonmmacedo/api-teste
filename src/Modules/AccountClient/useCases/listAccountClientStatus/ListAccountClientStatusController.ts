import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAccountClientStatusUseCase } from "./ListAccountClientStatusUseCase";

class ListAccountClientStatusController {
  constructor(private ListAccountClientStatusUseCase: ListAccountClientStatusUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const status = req.params;
   await collections.account.find(status).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })
  }
////
}

export { ListAccountClientStatusController };
