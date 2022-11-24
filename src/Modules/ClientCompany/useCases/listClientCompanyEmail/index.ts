import { ClientCompanyRepository } from "../../repositories/implementations/ClientCompanyRepository";
import { ListClientCompanyEmailUseCase } from "./ListClientCompanyEmailUseCase";
import { ListClientCompanyEmailController } from "./ListClientCompanyEmailController";

const clientCompanyRepository = ClientCompanyRepository.getInstance();

const listClientCompanyEmailUsecase = new ListClientCompanyEmailUseCase(clientCompanyRepository);

const listClientCompanyEmailController = new ListClientCompanyEmailController(listClientCompanyEmailUsecase);

export { listClientCompanyEmailController };
