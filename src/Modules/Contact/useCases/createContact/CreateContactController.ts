import { Request, Response } from "express";

import { CreateContactUseCase } from "./CreateContactUseCase";

class CreateContactController {
  constructor(private createContactUseCase: CreateContactUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idProperty, idClient, idCompany, type } = req.body;

    this.createContactUseCase.execute({
      id, idProperty, idClient, idCompany, type
    });


    return res.status(201).json();
  }
}

export { CreateContactController };
