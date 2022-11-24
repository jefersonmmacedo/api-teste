import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { UpdateAccountClientController } from "./UpdateAccountClientController";
import { UpdateAccountClientUseCase } from "./UpdateAccountClientUseCase";

const accountClientRepository = AccountClientRepository.getInstance();

const updateAccountClientUseCase = new UpdateAccountClientUseCase(accountClientRepository);

const updateAccountClientController = new UpdateAccountClientController(updateAccountClientUseCase);

export { updateAccountClientController };
