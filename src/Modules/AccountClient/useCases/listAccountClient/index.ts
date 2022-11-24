import { AccountClientRepository } from "../../../AccountClient/repositories/implementations/AccountClientRepository";
import { ListAccountClientUseCase } from "./ListAccountClientUseCase";
import { ListAccountClientController } from "./ListAccountClientController";

const accountClientRepository = AccountClientRepository.getInstance();

const listAccountClientUsecase = new ListAccountClientUseCase(accountClientRepository);

const listAccountClientController = new ListAccountClientController(listAccountClientUsecase);

export { listAccountClientController };
