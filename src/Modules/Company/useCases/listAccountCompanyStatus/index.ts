import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { ListCompanyStatusUseCase } from "./ListAccountCompanyStatusUseCase";
import { ListCompanyStatusController } from "./ListAccountCompanyStatusController";

const companyRepository = CompanyRepository.getInstance();

const listCompanyStatusUsecase = new ListCompanyStatusUseCase(companyRepository);

const listCompanyStatusController = new ListCompanyStatusController(listCompanyStatusUsecase);

export { listCompanyStatusController };
