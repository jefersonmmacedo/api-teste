import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteFavoriteUseCase } from "./DeleteFavoriteUseCase";

class DeleteFavoriteController {
  constructor(private DeleteFavoriteUseCase: DeleteFavoriteUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.favorite.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteFavoriteController };
