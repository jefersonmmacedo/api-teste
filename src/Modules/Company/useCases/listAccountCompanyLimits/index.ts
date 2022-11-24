import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { ListCompanyLimitsUseCase } from "./ListAccountCompanyLimitsUseCase";
import { ListCompanyLimitsController } from "./ListAccountCompanyLimits";

const companyRepository = CompanyRepository.getInstance();

const listCompanyLimitsUsecase = new ListCompanyLimitsUseCase(companyRepository);

const listCompanyLimitsController = new ListCompanyLimitsController(listCompanyLimitsUsecase);

export { listCompanyLimitsController };
