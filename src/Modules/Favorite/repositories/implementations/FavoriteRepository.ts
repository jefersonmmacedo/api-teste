import { Favorite } from "../../models/Favorite";
import { ICreateFavoriteDTO, IFavoriteRepository } from "../IFavoriteRepository";
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

  async create({
    idCompany, idProperty, idClient
  }: ICreateFavoriteDTO) {
    const favorite: Favorite = new Favorite();
    const _id = uuidv4()
    Object.assign(favorite, {
      _id, id: _id,
      idCompany,
     idProperty,
     idClient,
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
