import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { ListAccountClientEmailUseCase } from "./ListAccountClientEmailUseCase";
import { ListAccountClientEmailController } from "./ListAccountClientEmailController";

const accountClientRepository = AccountClientRepository.getInstance();

const listAccountClientEmailUsecase = new ListAccountClientEmailUseCase(accountClientRepository);

const listAccountClientEmailController = new ListAccountClientEmailController(listAccountClientEmailUsecase);

export { listAccountClientEmailController };
