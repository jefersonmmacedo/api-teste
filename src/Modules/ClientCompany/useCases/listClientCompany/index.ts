import { ClientCompanyRepository } from "../../../ClientCompany/repositories/implementations/ClientCompanyRepository";
import { ListClientCompanyUseCase } from "./ListClientCompanyUseCase";
import { ListClientCompanyController } from "./ListClientCompanyController";

const clientCompanyRepository = ClientCompanyRepository.getInstance();

const listClientCompanyUsecase = new ListClientCompanyUseCase(clientCompanyRepository);

const listClientCompanyController = new ListClientCompanyController(listClientCompanyUsecase);

export { listClientCompanyController };
