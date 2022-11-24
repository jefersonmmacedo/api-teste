import { Request, Response } from "express";

import { CreateMessagesUseCase } from "./CreateMessagesUseCase";

class CreateMessagesController {
  constructor(private createMessagesUseCase: CreateMessagesUseCase) {
    ("");
  }
  handle(req: Request, res: Response) {
    const { 
      id, idRomm, idCompany, IdClient, idProperty, avatar, text, link
     } =
      req.body;
    this.createMessagesUseCase.execute({
      id, idRomm, idCompany, IdClient, idProperty, avatar, text, link
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })

  }
}

export { CreateMessagesController };
