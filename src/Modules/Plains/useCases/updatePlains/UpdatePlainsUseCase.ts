import { IPlainsRepository } from "../../repositories/IPlainsRepository";

interface IRequest {
  id: string;
  name: string;
  value: string;
  period: number;
  infos: object;
  note: string;
}

class UpdatePlainsUseCase {
  constructor(private PlainsRepository: IPlainsRepository) {
    " ";
  }
  
  async execute({id, name, value, period, infos, note }: IRequest): Promise<void> {
         await this.PlainsRepository.update({
       id, name, value, period, infos, note
      });

  }
}

export { UpdatePlainsUseCase };
