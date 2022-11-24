import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFavoriteCompanyUseCase } from "./ListFavoriteCompanyUseCase";

class ListFavoriteCompanyController {
  constructor(private listFavoriteUseCase: ListFavoriteCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idCompany} = req.params;

   await collections.favorite.find({idCompany}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListFavoriteCompanyController };
