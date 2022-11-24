import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { ListAccountClientUnicUseCase } from "./ListAccountClientUnicUseCase";
import { ListAccountClientUnicController } from "./ListAccountClientUnicController";

const accountClientRepository = AccountClientRepository.getInstance();

const listAccountClientUnicUsecase = new ListAccountClientUnicUseCase(accountClientRepository);

const listAccountClientUnicController = new ListAccountClientUnicController(listAccountClientUnicUsecase);

export { listAccountClientUnicController };
