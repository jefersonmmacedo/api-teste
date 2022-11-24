import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateClientCompanyUseCase } from "./UpdateClientCompanyUseCase";

class UpdateClientCompanyController {
  constructor(private UpdateClientCompanyUseCase: UpdateClientCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idProcess, name, rg, cpf, email, phone, whatsapp, avatar, road, number, district, city, uf, interest, attendance} = req.body;
    const id = req.params; 


    await collections.clientCompany.findOneAndUpdate(id, {$set:{idProcess, name, rg, cpf, email, phone, whatsapp, avatar, road, number, district, city, uf, interest, attendance}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateClientCompanyController };
