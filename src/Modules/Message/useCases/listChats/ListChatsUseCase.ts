import { collections } from "../../../../../services/database.service";
import { Chats } from "../../models/Chats";
import { IChatsRepository } from "../../repositories/IChatsRepository";

class ListChatsUseCase {
  constructor(private ChatssRepository: IChatsRepository) {
    " ";
  }

  async execute() {
    
   const Chats = await collections.chats.find({});
   const ChatsAll = Chats.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(ChatsAll)
        }
  }

export { ListChatsUseCase };
