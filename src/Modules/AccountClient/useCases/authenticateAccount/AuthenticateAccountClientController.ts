import { compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { AuthenticateAccountClientUseCase } from "./AuthenticateAccountClientUseCase";

class AuthenticateAccountClientController {
  constructor(private authenticateAccountClientUseCase: AuthenticateAccountClientUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { email, id, password } = req.body;

    this.authenticateAccountClientUseCase.execute({
      email, id, password,
    }).then((result) => {
      console.log({"Message": "Login efetuado com sucesso"})
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { AuthenticateAccountClientController };