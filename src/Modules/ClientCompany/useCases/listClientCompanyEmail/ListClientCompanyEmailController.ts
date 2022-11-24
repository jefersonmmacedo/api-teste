import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListClientCompanyEmailUseCase } from "./ListClientCompanyEmailUseCase";

class ListClientCompanyEmailController {
  constructor(private ListClientCompanyEmailUseCase: ListClientCompanyEmailUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const email = req.params;
   await collections.account.find(email).toArray(function(err, result){
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

export { ListClientCompanyEmailController };
