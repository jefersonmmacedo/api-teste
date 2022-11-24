import { collections } from "../../../../../services/database.service";
import { Broker } from "../../../Broker/models/Broker";
import { IBrokerRepository } from "../../../Broker/repositories/IBrokerRepository";

class ListBrokerUseCase {
  constructor(private BrokerRepository: IBrokerRepository) {
    " ";
  }

  async execute() {
   const Broker = await collections.broker.find({});
   const BrokerAll = Broker.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(BrokerAll)
        }
  }

export { ListBrokerUseCase };
