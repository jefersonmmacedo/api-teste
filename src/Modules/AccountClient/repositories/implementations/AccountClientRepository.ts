import { AccountClient } from "../../models/AccountClient";
import { IAccountClientRepository, IAccountClientDTO } from "../IAccountClientRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class AccountClientRepository implements IAccountClientRepository {
  private accountClient: AccountClient[];

  private static INSTANCE: AccountClientRepository;

  private constructor() {
    this.accountClient = [];
  }

  public static getInstance(): AccountClientRepository {
    if (!AccountClientRepository.INSTANCE) {
      AccountClientRepository.INSTANCE = new AccountClientRepository();
    }

    return AccountClientRepository.INSTANCE;
  }

  async findByEmail(email: string): Promise<void> {
    const findEmail = await collections.account.findOne({email})
      if(findEmail) {
        throw new Error("Email already exists!")
      } 
  }
  
  
  async findById(id: string): Promise<void>  {
    const findNickname = await collections.account.findOne({id})
    if(findNickname) {
      throw new Error("Nickname already exists!")
    } 
  }

  async create({name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf}: IAccountClientDTO) {
    const account: AccountClient = new AccountClient();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(account, {
        id, _id: id, name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf,created_at: new Date(),
      });
      this.accountClient.push(account);
      
      await collections.account.insertOne(account).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  async session(email: string, username: string, password: string){
    return {
      email,
      username,
      password
    }
  }
  async sessionFast(id: string){
    return {
     id
    }
  }

  list(){ }

  update({id, name, email, phone, whatsapp, password, status, verified, avatar, cep, city, uf}):void {}

  async delete({id}) {
    await collections.account.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { AccountClientRepository };




