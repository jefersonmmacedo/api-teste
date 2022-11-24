import { Request, Response } from "express";

import { CreatePlainsUseCase } from "./CreatePlainsUseCase";

class CreatePlainsController {
  constructor(private createPlainsUseCase: CreatePlainsUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const {id, name, value, period, infos, note} =
      req.body;
    this.createPlainsUseCase.execute({id, name, value, period, infos, note }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreatePlainsController };
