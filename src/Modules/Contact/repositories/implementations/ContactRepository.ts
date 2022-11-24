import { Contact } from "../../models/Contact";
import { ICreateContactDTO, IContactRepository } from "../IContactRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class ContactRepository implements IContactRepository {
  private contact: Contact[];

  private static INSTANCE: ContactRepository;

  private constructor() {
    this.contact = [];
  }

  public static getInstance(): ContactRepository {
    if (!ContactRepository.INSTANCE) {
      ContactRepository.INSTANCE = new ContactRepository();
    }

    return ContactRepository.INSTANCE;
  }

 async create({
   idProperty, idClient, idCompany, type
  }: ICreateContactDTO) {
    const contact: Contact = new Contact();
    const _id = uuidv4()
    Object.assign(contact, {
      _id, id: _id,
     idProperty,
     idClient,
      idCompany, type,
      created_at: new Date()
    });

    this.contact.push(contact);
    console.log(contact)
    await collections.contact.insertOne(contact).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.contact.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { ContactRepository };
