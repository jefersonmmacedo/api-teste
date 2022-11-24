import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { CreateAccountClientController } from "./CreateAccountClientController";
import { CreateAccountClientUseCase } from "./CreateAccountClientUseCase";

const accountClientRepository = AccountClientRepository.getInstance();

const createAccountClientUseCase = new CreateAccountClientUseCase(accountClientRepository);

const createAccountClientController = new CreateAccountClientController(createAccountClientUseCase);

export { createAccountClientController };
