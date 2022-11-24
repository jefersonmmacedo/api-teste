import { Request, Response } from "express";

import { CreateMyPlainUseCase } from "./CreateMyPlainUseCase";

class CreateMyPlainController {
  constructor(private createMyPlainUseCase: CreateMyPlainUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      id, idPlain, idCompany, status
     } =
      req.body;
    this.createMyPlainUseCase.execute({
      id, idPlain, idCompany, status
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateMyPlainController };
