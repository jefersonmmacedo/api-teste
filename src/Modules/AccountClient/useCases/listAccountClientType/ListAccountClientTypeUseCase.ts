import { collections } from "../../../../../services/database.service";
import { AccountClient } from "../../models/AccountClient";
import { IAccountClientRepository } from "../../repositories/IAccountClientRepository";

class ListAccountClientTypeUseCase {
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

export { ListAccountClientTypeUseCase };
