import { collections } from "../../../../../services/database.service";
import { Broker } from "../../models/Broker";
import { IBrokerRepository } from "../../repositories/IBrokerRepository";

class ListBrokerUnicUseCase {
  constructor(private BrokerRepository: IBrokerRepository) {
    " ";
  }

  async execute() {
   const Broker = await collections.broker.find({});
   const BrokerAll = Broker.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(BrokerAll)
        }
  }

export { ListBrokerUnicUseCase };
