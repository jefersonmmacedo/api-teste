import { IPaymentsRepository } from "../../repositories/IPaymentsRepository";

interface IRequest {
  id: string;
  idPlain: string;
  idCompany: string;
  email:string;
  namePlain:string;
  value: string;
  period: number;
  linkComprovant: string;
  aceptTerms: string;
  status: string;

}

class UpdatePaymentsUseCase {
  constructor(private PaymentsRepository: IPaymentsRepository) {
    " ";
  }
  
  async execute({id,idPlain, idCompany, email, namePlain, value, period, linkComprovant, aceptTerms, status }: IRequest): Promise<void> {
         await this.PaymentsRepository.update({
      id, idPlain, idCompany, email, namePlain, value, period, linkComprovant, aceptTerms, status
      });

  }
}

export { UpdatePaymentsUseCase };
