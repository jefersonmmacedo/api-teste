import { IMyPlainRepository } from "../../repositories/IMyPlainRepository";

interface IRequest {
  id: string;
  idPlain: string;
  idCompany: string;
  status: string;

}

class CreateMyPlainUseCase {
  constructor(private MyPlainRepository: IMyPlainRepository) {
    ("");
  }

  async execute({
    id,idPlain, idCompany, status
  }: IRequest): Promise<void>{

   await this.MyPlainRepository.create({
   id, idPlain, idCompany, status
    });
  }
}

export { CreateMyPlainUseCase };
