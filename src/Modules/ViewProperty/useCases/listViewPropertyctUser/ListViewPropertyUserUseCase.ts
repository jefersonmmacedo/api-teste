import { collections } from "../../../../../services/database.service";
import { ViewProperty } from "../../models/ViewProperty";
import { IViewPropertyRepository } from "../../repositories/IViewPropertyRepository";

class ListViewPropertyUserUseCase {
  constructor(private ViewPropertyRepository: IViewPropertyRepository) {
    " ";
  }

  async execute() {
   const ViewProperty = await collections.viewProperty.find({});
   const ViewPropertyAll = ViewProperty.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(ViewPropertyAll)
        }
  }

export { ListViewPropertyUserUseCase };
