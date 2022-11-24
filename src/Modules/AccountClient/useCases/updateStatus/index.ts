import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { UpdateStatusController } from "./UpdateStatusController";
import { UpdateStatusUseCase } from "./UpdateStatusUseCase";

const accountClientRepository = AccountClientRepository.getInstance();

const updateStatusUseCase = new UpdateStatusUseCase(accountClientRepository);

const updateStatusController = new UpdateStatusController(updateStatusUseCase);

export { updateStatusController };
