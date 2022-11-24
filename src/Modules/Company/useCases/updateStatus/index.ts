import { CompanyRepository } from "../../repositories/implementations/CompanyRepository";
import { UpdateStatusController } from "./UpdateStatusController";
import { UpdateStatusUseCase } from "./UpdateStatusUseCase";

const companyRepository = CompanyRepository.getInstance();

const updateStatusUseCase = new UpdateStatusUseCase(companyRepository);

const updateStatusController = new UpdateStatusController(updateStatusUseCase);

export { updateStatusController };
