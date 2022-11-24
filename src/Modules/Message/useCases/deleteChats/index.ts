import { ChatsRepository } from "../../repositories/implementations/ChatsRepository";
import { DeleteChatsController } from "./DeleteChatsController";
import { DeleteChatsUseCase } from "./DeleteChatsUseCase";

const chatsRepository = ChatsRepository.getInstance();
const deleteChatsUseCase = new DeleteChatsUseCase(chatsRepository);
const deleteChatsController = new DeleteChatsController(deleteChatsUseCase);

export { deleteChatsController };
