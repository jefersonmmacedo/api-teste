import { Request, Response } from "express";

import { CreateFavoriteUseCase } from "./CreateFavoriteUseCase";

class CreateFavoriteController {
  constructor(private createFavoriteUseCase: CreateFavoriteUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, idProperty, type } = req.body;

    this.createFavoriteUseCase.execute({
      id, idProperty, type
    });


    return res.status(201).json();
  }
}

export { CreateFavoriteController };
