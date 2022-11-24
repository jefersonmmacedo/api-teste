import { collections } from "../../../../../services/database.service";
import { ClientCompany } from "../../models/ClientCompany";
import { IClientCompanyRepository } from "../../repositories/IClientCompanyRepository";

class ListClientCompanyEmailUseCase {
  constructor(private ClientCompanyRepository: IClientCompanyRepository) {
    " ";
  }

  async execute() {
   const ClientCompany = await collections.account.find({});
   const ClientCompanyAll = ClientCompany.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(ClientCompanyAll)
        }
  }

export { ListClientCompanyEmailUseCase };
