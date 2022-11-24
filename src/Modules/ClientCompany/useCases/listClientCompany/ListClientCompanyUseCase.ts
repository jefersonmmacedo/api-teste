import { collections } from "../../../../../services/database.service";
import { ClientCompany } from "../../../ClientCompany/models/ClientCompany";
import { IClientCompanyRepository } from "../../../ClientCompany/repositories/IClientCompanyRepository";

class ListClientCompanyUseCase {
  constructor(private ClientCompanyRepository: IClientCompanyRepository) {
    " ";
  }

  async execute() {
   const ClientCompany = await collections.account.find({});
   const ClientCompanyAll = ClientCompany.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(ClientCompanyAll)
        }
  }

export { ListClientCompanyUseCase };
