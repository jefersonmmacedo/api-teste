import { collections } from "../../../../../services/database.service";
import { Contact } from "../../models/Contact";
import { IContactRepository } from "../../repositories/IContactRepository";

class ListContactUseCase {
  constructor(private ContactRepository: IContactRepository) {
    " ";
  }

  async execute() {
   const Contact = await collections.contact.find({});
   const ContactAll = Contact.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(ContactAll)
        }
  }

export { ListContactUseCase };
