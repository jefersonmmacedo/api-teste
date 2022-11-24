import { collections } from "../../../../../services/database.service";
import { MyPlain } from "../../models/MyPlain";
import { IMyPlainRepository } from "../../repositories/IMyPlainRepository";

class ListMyPlainUseCase {
  constructor(private MyPlainRepository: IMyPlainRepository) {
    " ";
  }

  async execute() {
    
   const MyPlain = await collections.myPlain.find({});
   const MyPlainAll = MyPlain.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(MyPlainAll)
        }
  }

export { ListMyPlainUseCase };
