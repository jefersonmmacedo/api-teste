import { collections } from "../../../../../services/database.service";
import { Scheduling } from "../../models/Scheduling";
import { ISchedulingRepository } from "../../repositories/ISchedulingRepository";

class ListSchedulingUnicCompanyUseCase {
  constructor(private SchedulingRepository: ISchedulingRepository) {
    " ";
  }

  async execute() {
   const Scheduling = await collections.scheduling.find({});
   const SchedulingAll = Scheduling.toArray(function(err, result){
    console.log(result)
    return result;
   })
  //console.log(SchedulingAll)
        }
  }

export { ListSchedulingUnicCompanyUseCase };
