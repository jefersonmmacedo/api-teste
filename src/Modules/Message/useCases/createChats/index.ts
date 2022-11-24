import { ChatsRepository } from "../../repositories/implementations/ChatsRepository";
import { CreateChatsController } from "./CreateChatsController";
import { CreateChatsUseCase } from "./CreateChatsUseCase";

const chatsRepository = ChatsRepository.getInstance();
const createChatsUseCase = new CreateChatsUseCase(chatsRepository);
const createChatsController = new CreateChatsController(createChatsUseCase);

export { createChatsController };
