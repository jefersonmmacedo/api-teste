import { IMyPlainRepository } from "../../repositories/IMyPlainRepository";

class DeleteMyPlainUseCase {
  constructor(private MyPlainRepository: IMyPlainRepository) {
    ("");
  }

  async execute({id}){

   await this.MyPlainRepository.delete({id});
  }
}

export { DeleteMyPlainUseCase };
