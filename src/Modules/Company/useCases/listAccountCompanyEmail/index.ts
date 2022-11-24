import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { ListCompanyEmailUseCase } from "./ListAccountCompanyEmailUseCase";
import { ListCompanyEmailController } from "./ListAccountCompanyEmailController";

const companyRepository = CompanyRepository.getInstance();

const listCompanyEmailUsecase = new ListCompanyEmailUseCase(companyRepository);

const listCompanyEmailController = new ListCompanyEmailController(listCompanyEmailUsecase);

export { listCompanyEmailController };
