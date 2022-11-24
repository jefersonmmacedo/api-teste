import { collections } from "../../../../../services/database.service";
import { Financer } from "../../models/Financer";
import { IFinancerRepository } from "../../repositories/IFinancerRepository";

class ListFinancerUserUseCase {
  constructor(private FinancerRepository: IFinancerRepository) {
    " ";
  }

  async execute() {
   const Financer = await collections.financer.find({});
   const FinancerAll = Financer.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(FinancerAll)
        }
  }

export { ListFinancerUserUseCase };
