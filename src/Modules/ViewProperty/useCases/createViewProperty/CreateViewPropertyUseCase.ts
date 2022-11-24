import { IViewPropertyRepository } from "../../repositories/IViewPropertyRepository";

interface IRequest {
  id: string;
  idProperty: string;
  idClient: string;
  idCompany: string;
}

class CreateViewPropertyUseCase {
  constructor(private ViewPropertyRepository: IViewPropertyRepository) {
    " ";
  }

  execute({ id, idProperty, idClient, idCompany }: IRequest): void {
    this.ViewPropertyRepository.create({
      id, idProperty, idClient, idCompany
    });
  }
}

export { CreateViewPropertyUseCase };
