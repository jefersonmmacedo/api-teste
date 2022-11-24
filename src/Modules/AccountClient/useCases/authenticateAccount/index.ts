import { AccountClientRepository } from "../../repositories/implementations/AccountClientRepository";
import { AuthenticateAccountClientController } from "./AuthenticateAccountClientController";
import { AuthenticateAccountClientUseCase } from "./AuthenticateAccountClientUseCase";

const accountClientRepository = AccountClientRepository.getInstance();

const authenticateAccountUseCase = new AuthenticateAccountClientUseCase(accountClientRepository);

const authenticateAccountController = new AuthenticateAccountClientController(authenticateAccountUseCase);

export { authenticateAccountController };
