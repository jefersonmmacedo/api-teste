import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListClientCompanyUseCase } from "./ListClientCompanyUseCase";

class ListClientCompanyController {
  constructor(private listClientCompanyUseCase: ListClientCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const status = "active";
    const verified = true;
   await collections.account.find({status: status, verified: verified}).toArray(function(err, result){
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

export { ListClientCompanyController };
