import { collections } from "../../../../../services/database.service";
import { Property } from "../../../Property/models/Property";
import { IPropertyRepository } from "../../../Property/repositories/IPropertyRepository";

class ListPropertyUseCase {
  constructor(private PropertyRepository: IPropertyRepository) {
    " ";
  }

  async execute() {
   const Property = await collections.property.find({});
   const PropertyAll = Property.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(PropertyAll)
        }
  }

export { ListPropertyUseCase };
