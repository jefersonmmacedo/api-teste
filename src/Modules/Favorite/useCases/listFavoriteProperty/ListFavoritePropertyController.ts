import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFavoritePropertyUseCase } from "./ListFavoritePropertyUseCase";

class ListFavoritePropertyController {
  constructor(private listFavoriteUseCase: ListFavoritePropertyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idProperty} = req.params;

   await collections.favorite.find({idProperty}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListFavoritePropertyController };
