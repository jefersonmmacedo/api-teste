import { collections } from "../../../../../services/database.service";
import { ClientCompany } from "../../models/ClientCompany";
import { IClientCompanyRepository } from "../../repositories/IClientCompanyRepository";

class ListClientCompanyAdmUseCase {
  constructor(private ClientCompanyAdmRepository: IClientCompanyRepository) {
    " ";
  }

  async execute() {
   const ClientCompanyAdm = await collections.account.find({});
   const ClientCompanyAdmAll = ClientCompanyAdm.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(ClientCompanyAdmAll)
        }
  }

export { ListClientCompanyAdmUseCase };
