import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
  constructor(private createCompanyUseCase: CreateCompanyUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,type, verified, status, cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf, website, facebook,
    instagram, linkedin, youtube } = req.body;

    this.createCompanyUseCase.execute({
      id,type, verified, status, cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf, website, facebook,
    instagram, linkedin, youtube
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateCompanyController };






