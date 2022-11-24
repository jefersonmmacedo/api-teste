import { collections } from "../../../../../services/database.service";
import { AccountClient } from "../../../AccountClient/models/AccountClient";
import { IAccountClientRepository } from "../../../AccountClient/repositories/IAccountClientRepository";

class ListAccountClientUseCase {
  constructor(private AccountClientRepository: IAccountClientRepository) {
    " ";
  }

  async execute() {
   const accountClient = await collections.account.find({});
   const accountClientAll = accountClient.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(accountClientAll)
        }
  }

export { ListAccountClientUseCase };
