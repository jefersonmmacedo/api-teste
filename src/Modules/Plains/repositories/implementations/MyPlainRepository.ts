import { collections } from "../../../../../services/database.service";
import { MyPlain } from "../../models/MyPlain";
import { IMyPlainDTO, IMyPlainRepository } from "../IMyPlainRepository";
import {v4 as uuidv4} from 'uuid'

class MyPlainRepository implements IMyPlainRepository {
  private myPlain: MyPlain[];

  private static INSTANCE: MyPlainRepository;

  private constructor() {
    this.myPlain = [];
  }

  public static getInstance(): MyPlainRepository {
    if (!MyPlainRepository.INSTANCE) {
      MyPlainRepository.INSTANCE = new MyPlainRepository();
    }

    return MyPlainRepository.INSTANCE;
  }

  async create({ idPlain, idCompany, status }: IMyPlainDTO) {
    const payment: MyPlain = new MyPlain();
    const _id = uuidv4()
    Object.assign(payment, {
      _id, id: _id, idPlain, idCompany, status, created_at: new Date(),
    });

    this.myPlain.push(payment);
    console.log(payment)

    await collections.myPlain.insertOne(payment).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.myPlain.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({idPlain, idCompany, status}): Promise<void> {}
}

export { MyPlainRepository };
