import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateAccountClientUseCase } from "./UpdateAccountClientUseCase";

class UpdateAccountClientController {
  constructor(private UpdateAccountClientUseCase: UpdateAccountClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf } = req.body;
    const id = req.params; 


    await collections.account.findOneAndUpdate(id, {$set:{name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateAccountClientController };
