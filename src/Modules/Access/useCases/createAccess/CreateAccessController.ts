import { Request, Response } from "express";

import { CreateAccessUseCase } from "./CreateAccessUseCase";

class CreateAccessController {
  constructor(private createAccessUseCase: CreateAccessUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idCompany, device, browser } = req.body;

    this.createAccessUseCase.execute({
      id, idCompany, device, browser
    });


    return res.status(201).json();
  }
}

export { CreateAccessController };
