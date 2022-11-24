import { Broker } from "../../models/Broker";
import { IBrokerRepository, IBrokerDTO } from "../IBrokerRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class BrokerRepository implements IBrokerRepository {
  private broker: Broker[];

  private static INSTANCE: BrokerRepository;

  private constructor() {
    this.broker = [];
  }

  public static getInstance(): BrokerRepository {
    if (!BrokerRepository.INSTANCE) {
      BrokerRepository.INSTANCE = new BrokerRepository();
    }

    return BrokerRepository.INSTANCE;
  }

  async findByEmail(email: string): Promise<void> {
    const findEmail = await collections.broker.findOne({email})
      if(findEmail) {
        throw new Error("Email already exists!")
      } 
  }
  
  
  async findById(id: string): Promise<void>  {
    const findNickname = await collections.broker.findOne({id})
    if(findNickname) {
      throw new Error("Nickname already exists!")
    } 
  }

  async create({idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube,}: IBrokerDTO) {
    const broker: Broker = new Broker();
      const idMini = uuidv4()
      const id = idMini.substring(0,8)
      Object.assign(broker, {
        id, _id: id, idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube,created_at: new Date(),
      });
      this.broker.push(broker);
      
      await collections.broker.insertOne(broker).then((result) => {
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

  update({id, idCompany, creci, name, email, phone, whatsapp, avatar, facebook, instagram, linkedin, youtube,}):void {}

  async delete({id}) {
    await collections.broker.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { BrokerRepository };




