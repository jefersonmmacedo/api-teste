import { ClientCompanyRepository } from "../../repositories/implementations/ClientCompanyRepository";
import { UpdateClientCompanyController } from "./UpdateClientCompanyController";
import { UpdateClientCompanyUseCase } from "./UpdateClientCompanyUseCase";

const clientCompanyRepository = ClientCompanyRepository.getInstance();

const updateClientCompanyUseCase = new UpdateClientCompanyUseCase(clientCompanyRepository);

const updateClientCompanyController = new UpdateClientCompanyController(updateClientCompanyUseCase);

export { updateClientCompanyController };
