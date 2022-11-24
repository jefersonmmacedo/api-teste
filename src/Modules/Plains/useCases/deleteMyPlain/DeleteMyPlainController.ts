import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteMyPlainUseCase } from "./DeleteMyPlainUseCase";

class DeleteMyPlainController {
  constructor(private DeleteMyPlainUseCase: DeleteMyPlainUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.myPlain.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteMyPlainController };
