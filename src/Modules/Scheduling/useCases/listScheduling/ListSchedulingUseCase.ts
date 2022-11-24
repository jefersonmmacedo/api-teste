import { collections } from "../../../../../services/database.service";
import { Scheduling } from "../../../Scheduling/models/Scheduling";
import { ISchedulingRepository } from "../../../Scheduling/repositories/ISchedulingRepository";

class ListSchedulingUseCase {
  constructor(private SchedulingRepository: ISchedulingRepository) {
    " ";
  }

  async execute() {
   const Scheduling = await collections.scheduling.find({});
   const SchedulingAll = Scheduling.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(SchedulingAll)
        }
  }

export { ListSchedulingUseCase };
