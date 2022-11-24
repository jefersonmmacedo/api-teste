import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { AuthenticateCompanyController } from "./AuthenticateCompanyController";
import { AuthenticateCompanyUseCase } from "./AuthenticateCompanyUseCase";

const companyRepository = CompanyRepository.getInstance();

const authenticateAccountUseCase = new AuthenticateCompanyUseCase(companyRepository);

const authenticateCompanyController = new AuthenticateCompanyController(authenticateAccountUseCase);

export { authenticateCompanyController };
