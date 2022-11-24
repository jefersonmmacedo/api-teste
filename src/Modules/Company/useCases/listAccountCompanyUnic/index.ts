import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { ListCompanyUnicUseCase } from "./ListAccountCompanyUnicUseCase";
import { ListCompanyUnicController } from "./ListAccountCompanyUnicController";

const companyRepository = CompanyRepository.getInstance();

const listCompanyUnicUsecase = new ListCompanyUnicUseCase(companyRepository);

const listCompanyUnicController = new ListCompanyUnicController(listCompanyUnicUsecase);

export { listCompanyUnicController };
