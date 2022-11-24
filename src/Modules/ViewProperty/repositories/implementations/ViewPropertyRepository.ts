import { ViewProperty } from "../../models/ViewProperty";
import { ICreateViewPropertyDTO, IViewPropertyRepository } from "../IViewPropertyRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class ViewPropertyRepository implements IViewPropertyRepository {
  private viewProperty: ViewProperty[];

  private static INSTANCE: ViewPropertyRepository;

  private constructor() {
    this.viewProperty = [];
  }

  public static getInstance(): ViewPropertyRepository {
    if (!ViewPropertyRepository.INSTANCE) {
      ViewPropertyRepository.INSTANCE = new ViewPropertyRepository();
    }

    return ViewPropertyRepository.INSTANCE;
  }

 async create({
   idProperty, idClient, idCompany
  }: ICreateViewPropertyDTO) {
    const viewProperty: ViewProperty = new ViewProperty();
    const _id = uuidv4()
    Object.assign(viewProperty, {
      _id, id: _id,
     idProperty,
     idClient,
      idCompany,
      created_at: new Date()
    });

    this.viewProperty.push(viewProperty);
    console.log(viewProperty)
    await collections.viewProperty.insertOne(viewProperty).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.viewProperty.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { ViewPropertyRepository };
