import { Request, Response } from "express";

import { CreateFinancerUseCase } from "./CreateFinancerUseCase";

class CreateFinancerController {
  constructor(private createFinancerUseCase: CreateFinancerUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idCompany, idTransaction, title, description, type, value } = req.body;

    this.createFinancerUseCase.execute({
      id, idCompany, idTransaction, title, description, type, value
    });


    return res.status(201).json();
  }
}

export { CreateFinancerController };
