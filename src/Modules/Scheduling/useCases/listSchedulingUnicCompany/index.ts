import { SchedulingRepository } from "../../repositories/implementations/SchedulingRepository";
import { ListSchedulingUnicCompanyUseCase } from "./ListSchedulingUnicCompanyUseCase";
import { ListSchedulingUnicCompanyController } from "./ListSchedulingUnicCompanyController";

const schedulingRepository = SchedulingRepository.getInstance();

const listSchedulingUnicCompanyUsecase = new ListSchedulingUnicCompanyUseCase(schedulingRepository);

const listSchedulingUnicCompanyController = new ListSchedulingUnicCompanyController(listSchedulingUnicCompanyUsecase);

export { listSchedulingUnicCompanyController };
