import { collections } from "../../../../../services/database.service";
import { INotificationRepository } from "../../repositories/INotificationRepository";


class FindNotificationUseCase {
  constructor(private NotificationRepository: INotificationRepository) {
    " ";
  }

  async execute() {
   const accounts = await collections.notification.find({});
   const accountsAll = accounts.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(accountsAll)
        }
  }

export { FindNotificationUseCase };
