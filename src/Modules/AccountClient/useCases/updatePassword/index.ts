import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { UpdatePasswordController } from "./UpdatePasswordController";
import { UpdatePasswordUseCase } from "./UpdatePasswordUseCase";

const accountClientRepository = AccountClientRepository.getInstance();

const updatePasswordUseCase = new UpdatePasswordUseCase(accountClientRepository);

const updatePasswordController = new UpdatePasswordController(updatePasswordUseCase);

export { updatePasswordController };
