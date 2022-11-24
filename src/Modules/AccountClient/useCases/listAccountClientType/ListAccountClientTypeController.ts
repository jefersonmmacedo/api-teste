import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListAccountClientTypeUseCase } from "./ListAccountClientTypeUseCase";

class ListAccountClientTypeController {
  constructor(private listAccountClientUseCase: ListAccountClientTypeUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const status = "active";
    const verified = true;
    const type = req.params;
   await collections.account.find({type: type, status: status, verified: verified}).toArray(function(err, result){
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

export { ListAccountClientTypeController };
