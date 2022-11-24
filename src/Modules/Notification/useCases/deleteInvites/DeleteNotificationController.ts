import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteNotificationUseCase } from "./DeleteNotificationUseCase";

class DeleteNotificationController {
  constructor(private DeleteNotificationUseCase: DeleteNotificationUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.notification.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteNotificationController };
