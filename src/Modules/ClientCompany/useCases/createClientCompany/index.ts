import { ClientCompanyRepository } from "../../repositories/implementations/ClientCompanyRepository";
import { CreateClientCompanyController } from "./CreateClientCompanyController";
import { CreateClientCompanyUseCase } from "./CreateClientCompanyUseCase";

const clientCompanyRepository = ClientCompanyRepository.getInstance();

const createClientCompanyUseCase = new CreateClientCompanyUseCase(clientCompanyRepository);

const createClientCompanyController = new CreateClientCompanyController(createClientCompanyUseCase);

export { createClientCompanyController };
