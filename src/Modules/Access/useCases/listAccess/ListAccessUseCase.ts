import { collections } from "../../../../../services/database.service";
import { Access } from "../../models/Access";
import { IAccessRepository } from "../../repositories/IAccessRepository";

class ListAccessUseCase {
  constructor(private AccessRepository: IAccessRepository) {
    " ";
  }

  async execute() {
   const Access = await collections.access.find({});
   const AccessAll = Access.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(AccessAll)
        }
  }

export { ListAccessUseCase };
