import { IFinancerRepository } from "../../repositories/IFinancerRepository";

interface IRequest {
  id: string;
  idCompany: string;
  idTransaction: string;
  title: string;
  description: string;
  type: string;
  value: string;
}

class CreateFinancerUseCase {
  constructor(private FinancerRepository: IFinancerRepository) {
    " ";
  }

  execute({ id, idCompany, idTransaction, title, description, type, value }: IRequest): void {
    this.FinancerRepository.create({
      id, idCompany, idTransaction, title, description, type, value
    });
  }
}

export { CreateFinancerUseCase };
