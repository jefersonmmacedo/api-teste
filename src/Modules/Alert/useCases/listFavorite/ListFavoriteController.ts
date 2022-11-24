import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListFavoriteUseCase } from "./ListFavoriteUseCase";

class ListFavoriteController {
  constructor(private listFavoriteUseCase: ListFavoriteUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.favorite.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      console.log(result)
      return result;
     })

  }
}

export { ListFavoriteController };
