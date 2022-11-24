import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { ListAccountClientStatusUseCase } from "./ListAccountClientStatusUseCase";
import { ListAccountClientStatusController } from "./ListAccountClientStatusController";

const accountClientRepository = AccountClientRepository.getInstance();

const listAccountClientStatusUsecase = new ListAccountClientStatusUseCase(accountClientRepository);

const listAccountClientStatusController = new ListAccountClientStatusController(listAccountClientStatusUsecase);

export { listAccountClientStatusController };
