import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPaymentsUseCase } from "./ListPaymentsUseCase";

class ListPaymentsController {
  constructor(private listPaymentseCase: ListPaymentsUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params;
   await collections.payments.find(idCompany).sort( { created_at: -1 } ).toArray(function(err, result){
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

export { ListPaymentsController };
