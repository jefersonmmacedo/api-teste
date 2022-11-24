import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateBrokerUseCase } from "./UpdateBrokerUseCase";

class UpdateBrokerController {
  constructor(private UpdateBrokerUseCase: UpdateBrokerUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube, } = req.body;
    const id = req.params; 


    await collections.broker.findOneAndUpdate(id, {$set:{idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateBrokerController };
