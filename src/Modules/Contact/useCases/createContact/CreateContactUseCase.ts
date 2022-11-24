import { IContactRepository } from "../../repositories/IContactRepository";

interface IRequest {
  id: string;
  idProperty: string;
  idClient: string;
  idCompany: string;
  type: string;
}

class CreateContactUseCase {
  constructor(private ContactRepository: IContactRepository) {
    " ";
  }

  execute({ id, idProperty, idClient, idCompany, type }: IRequest): void {
    this.ContactRepository.create({
      id, idProperty, idClient, idCompany, type
    });
  }
}

export { CreateContactUseCase };
