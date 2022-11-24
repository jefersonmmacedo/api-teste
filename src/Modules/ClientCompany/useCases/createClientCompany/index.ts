import { AccountClientRepository } from "../../repositories/implementations/ClientCompanyRepository";
import { CreateAccountClientController } from "./CreateClientCompanyController";
import { CreateAccountClientUseCase } from "./CreateClientCompanyUseCase";

const accountClientRepository = AccountClientRepository.getInstance();

const createAccountClientUseCase = new CreateAccountClientUseCase(accountClientRepository);

const createAccountClientController = new CreateAccountClientController(createAccountClientUseCase);

export { createAccountClientController };
