import { collections } from "../../../../../services/database.service";
import { Favorite } from "../../models/Alert";
import { IFavoriteRepository } from "../../repositories/IAlertRepository";

class ListFavoriteUseCase {
  constructor(private FavoriteRepository: IFavoriteRepository) {
    " ";
  }

  async execute() {
   const Favorite = await collections.favorite.find({});
   const FavoriteAll = Favorite.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(FavoriteAll)
        }
  }

export { ListFavoriteUseCase };
