import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateNotificationUseCase } from "./UpdateNotificationUseCase";

class UpdateNotificationController {
  constructor(private UpdateNotificationUseCase: UpdateNotificationUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { idClient, idCompany, idBroker, text, type } = req.body;
    const id = req.params; 


    await collections.notification.findOneAndUpdate(id, {$set:{ idClient, idCompany, idBroker, text, type}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })
  }
}

export { UpdateNotificationController };
