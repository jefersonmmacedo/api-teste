import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListCompanyUseCase } from "./ListAccountCompanyUseCase";

class ListCompanyController {
  constructor(private listCompanyUseCase: ListCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const type = req.params;
    const status = "active";
    const verified = true;
    console.log(type)
    const page = req.query.page;
    const limit = req.query.limit;
  await collections.company.find(type).sort( { created_at: -1 } ).skip(Number(page) > 0 ? (( Number(page) - 1) * Number(limit)) : 0).limit( Number(limit) ).toArray(function(err, result){
   //await collections.company.find(type).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
        console.log(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListCompanyController };
