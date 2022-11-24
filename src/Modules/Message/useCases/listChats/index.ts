import { ChatsRepository } from "../../repositories/implementations/ChatsRepository";
import { ListChatsController } from "./ListChatsController";
import { ListChatsUseCase } from "./ListChatsUseCase";

const chatsRepository = ChatsRepository.getInstance();

const listChatsUsecase = new ListChatsUseCase(chatsRepository);

const listChatsController = new ListChatsController(listChatsUsecase);

export { listChatsController };
