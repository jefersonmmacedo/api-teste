import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFavoriteClientUseCase } from "./ListFavoriteClientUseCase";

class ListFavoriteClientController {
  constructor(private listFavoriteUseCase: ListFavoriteClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idProperty, idClient} = req.params;

   await collections.favorite.find({idProperty, idClient}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListFavoriteClientController };
