import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { UpdatePasswordController } from "./UpdatePasswordController";
import { UpdatePasswordUseCase } from "./UpdatePasswordUseCase";

const companyRepository = CompanyRepository.getInstance();

const updatePasswordUseCase = new UpdatePasswordUseCase(companyRepository);

const updatePasswordController = new UpdatePasswordController(updatePasswordUseCase);

export { updatePasswordController };
