import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

class UpdateCompanyController {
  constructor(private UpdateCompanyUseCase: UpdateCompanyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {cnpj, fantasyName, socialReason, road, number, district, city, uf, cep, whatsapp, phone, email, crecij, logo, password } = req.body;
    const id = req.params; 


    await collections.company.findOneAndUpdate(id, {$set:{cnpj, fantasyName, socialReason, road, number, district, city, uf, cep, whatsapp, phone, email, crecij, logo, password}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdateCompanyController };
