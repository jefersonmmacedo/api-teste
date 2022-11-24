import { Request, Response } from "express";

import { CreateFavoriteUseCase } from "./CreateFavoriteUseCase";

class CreateFavoriteController {
  constructor(private createFavoriteUseCase: CreateFavoriteUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idCompany, idProperty, idClient } = req.body;

    this.createFavoriteUseCase.execute({
      id, idCompany, idProperty, idClient
    });

    return res.status(201).json();
  }
}

export { CreateFavoriteController };
