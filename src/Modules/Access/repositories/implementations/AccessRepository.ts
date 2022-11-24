import { Access } from "../../models/Access";
import { ICreateAccessDTO, IAccessRepository } from "../IAccessRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class AccessRepository implements IAccessRepository {
  private access: Access[];

  private static INSTANCE: AccessRepository;

  private constructor() {
    this.access = [];
  }

  public static getInstance(): AccessRepository {
    if (!AccessRepository.INSTANCE) {
      AccessRepository.INSTANCE = new AccessRepository();
    }

    return AccessRepository.INSTANCE;
  }

 async create({
  idCompany, device, browser
  }: ICreateAccessDTO) {
    const access: Access = new Access();
    const _id = uuidv4()
    Object.assign(access, {
      _id, id: _id,
      idCompany, device, browser,
      created_at: new Date()
    });

    this.access.push(access);
    console.log(Access)
    await collections.access.insertOne(access).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.access.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { AccessRepository };
