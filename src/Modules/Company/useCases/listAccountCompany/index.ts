import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { ListCompanyUseCase } from "./ListAccountCompanyUseCase";
import { ListCompanyController } from "./ListAccountCompanyController";

const companyRepository = CompanyRepository.getInstance();

const listCompanyUsecase = new ListCompanyUseCase(companyRepository);

const listCompanyController = new ListCompanyController(listCompanyUsecase);

export { listCompanyController };
