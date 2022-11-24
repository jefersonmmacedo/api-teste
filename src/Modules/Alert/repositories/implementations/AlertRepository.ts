import { Favorite } from "../../models/Alert";
import { ICreateFavoriteDTO, IFavoriteRepository } from "../IAlertRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class FavoriteRepository implements IFavoriteRepository {
  private favorite: Favorite[];

  private static INSTANCE: FavoriteRepository;

  private constructor() {
    this.favorite = [];
  }

  public static getInstance(): FavoriteRepository {
    if (!FavoriteRepository.INSTANCE) {
      FavoriteRepository.INSTANCE = new FavoriteRepository();
    }

    return FavoriteRepository.INSTANCE;
  }

  async findByIdProfessional(idProfessional: any):Promise<void> {
    const findIdProfessional = await collections.favorite.findOne({idProfessional})
    if(findIdProfessional) {
      throw new Error("findIdProfessional already exists!")
    } 
  }

  async create({
   idProperty, type
  }: ICreateFavoriteDTO) {
    const favorite: Favorite = new Favorite();
    const _id = uuidv4()
    Object.assign(favorite, {
      _id, id: _id,
     idProperty,
     type,
      created_at: new Date()
    });

    this.favorite.push(favorite);
    console.log(favorite)
    await collections.favorite.insertOne(favorite).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.favorite.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { FavoriteRepository };
