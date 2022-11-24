import { SchedulingRepository } from "../../repositories/implementations/SchedulingRepository";
import { ListSchedulingUnicUseCase } from "./ListSchedulingUnicUseCase";
import { ListSchedulingUnicController } from "./ListSchedulingUnicController";

const schedulingRepository = SchedulingRepository.getInstance();

const listSchedulingUnicUsecase = new ListSchedulingUnicUseCase(schedulingRepository);

const listSchedulingUnicController = new ListSchedulingUnicController(listSchedulingUnicUsecase);

export { listSchedulingUnicController };
