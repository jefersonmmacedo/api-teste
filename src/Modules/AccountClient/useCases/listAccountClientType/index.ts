import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { ListAccountClientTypeUseCase } from "./ListAccountClientTypeUseCase";
import { ListAccountClientTypeController } from "./ListAccountClientTypeController";

const accountClientRepository = AccountClientRepository.getInstance();

const listAccountClientTypeUsecase = new ListAccountClientTypeUseCase(accountClientRepository);

const listAccountClientTypeController = new ListAccountClientTypeController(listAccountClientTypeUsecase);

export { listAccountClientTypeController };
