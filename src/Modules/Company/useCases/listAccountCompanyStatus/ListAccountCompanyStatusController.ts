import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListCompanyStatusUseCase } from "./ListAccountCompanyStatusUseCase";

class ListCompanyStatusController {
  constructor(private ListCompanyStatusUseCase: ListCompanyStatusUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const status = req.params;
   await collections.company.find(status).toArray(function(err, result){
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

export { ListCompanyStatusController };
