import { ClientCompanyRepository } from "../../repositories/implementations/ClientCompanyRepository";
import { ListClientCompanyAdmUseCase } from "./ListClientCompanyAdmUseCase";
import { ListClientCompanyAdmController } from "./ListClientCompanyAdmController";

const clientCompanyAdmRepository = ClientCompanyRepository.getInstance();

const listClientCompanyAdmUsecase = new ListClientCompanyAdmUseCase(clientCompanyAdmRepository);

const listClientCompanyAdmController = new ListClientCompanyAdmController(listClientCompanyAdmUsecase);

export { listClientCompanyAdmController };
