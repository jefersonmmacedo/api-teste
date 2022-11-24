import { IAccessRepository } from "../../repositories/IAccessRepository";

interface IRequest {
  id: string;
  idCompany: string;
  device: string;
  browser: string;
}

class CreateAccessUseCase {
  constructor(private AccessRepository: IAccessRepository) {
    " ";
  }

  execute({ id, idCompany, device, browser }: IRequest): void {
    this.AccessRepository.create({
      id, idCompany, device, browser
    });
  }
}

export { CreateAccessUseCase };
