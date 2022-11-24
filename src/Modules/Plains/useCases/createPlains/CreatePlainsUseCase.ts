import { IPlainsRepository } from "../../repositories/IPlainsRepository";

interface IRequest {
  id: string;
  name: string;
  value: string;
  period: number;
  infos: object;
  note: string;
}

class CreatePlainsUseCase {
  constructor(private PlainsRepository: IPlainsRepository) {
    ("");
  }

  async execute({id, name, value, period, infos, note }: IRequest): Promise<void>{

   await this.PlainsRepository.create({id, name, value, period, infos, note});
  }
}

export { CreatePlainsUseCase };
