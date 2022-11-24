import { Request, Response } from "express";
import { CreateBrokerUseCase } from "./CreateBrokerUseCase";

class CreateBrokerController {
  constructor(private createBrokerUseCase: CreateBrokerUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube, } = req.body;

    this.createBrokerUseCase.execute({
      id,idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube,
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateBrokerController };






