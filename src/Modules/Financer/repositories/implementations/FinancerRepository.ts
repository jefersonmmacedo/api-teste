import { Financer } from "../../models/Financer";
import { ICreateFinancerDTO, IFinancerRepository } from "../IFinancerRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class FinancerRepository implements IFinancerRepository {
  private financer: Financer[];

  private static INSTANCE: FinancerRepository;

  private constructor() {
    this.financer = [];
  }

  public static getInstance(): FinancerRepository {
    if (!FinancerRepository.INSTANCE) {
      FinancerRepository.INSTANCE = new FinancerRepository();
    }

    return FinancerRepository.INSTANCE;
  }

 async create({
  idCompany, idTransaction, title, description, type, value
  }: ICreateFinancerDTO) {
    const financer: Financer = new Financer();
    const _id = uuidv4()
    Object.assign(financer, {
      _id, id: _id,
      idCompany, idTransaction, title, description, type, value,
      created_at: new Date()
    });

    this.financer.push(financer);
    console.log(financer)
    await collections.financer.insertOne(financer).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.financer.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { FinancerRepository };
