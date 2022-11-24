import { Request, Response } from "express";
import { CreateAccountClientUseCase } from "./CreateAccountClientUseCase";

class CreateAccountClientController {
  constructor(private createAccountClientUseCase: CreateAccountClientUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { id,name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf } = req.body;

    this.createAccountClientUseCase.execute({
      id,name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf
    }).then((result) => {
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreateAccountClientController };






