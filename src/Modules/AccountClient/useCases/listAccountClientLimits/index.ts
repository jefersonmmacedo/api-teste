import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { ListAccountClientLimitsUseCase } from "./ListAccountClientLimitsUseCase";
import { ListAccountClientLimitsController } from "./ListAccountClientLimits";

const accountClientRepository = AccountClientRepository.getInstance();

const listAccountClientLimitsUsecase = new ListAccountClientLimitsUseCase(accountClientRepository);

const listAccountClientLimitsController = new ListAccountClientLimitsController(listAccountClientLimitsUsecase);

export { listAccountClientLimitsController };
