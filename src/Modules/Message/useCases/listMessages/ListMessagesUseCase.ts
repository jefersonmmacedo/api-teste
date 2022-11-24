import { collections } from "../../../../../services/database.service";
import { Messages } from "../../models/Messages";
import { IMessagesRepository } from "../../repositories/IMessagesRepository";

class ListMessagesUseCase {
  constructor(private MessagesRepository: IMessagesRepository) {
    " ";
  }

  async execute() {
    
   const Messages = await collections.messages.find({});
   const MessagesAll = Messages.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(MessagesAll)
        }
  }

export { ListMessagesUseCase };
