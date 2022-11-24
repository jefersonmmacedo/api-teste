import { SchedulingRepository } from "../../../Scheduling/repositories/implementations/SchedulingRepository";
import { ListSchedulingUseCase } from "./ListSchedulingUseCase";
import { ListSchedulingController } from "./ListSchedulingController";

const schedulingRepository = SchedulingRepository.getInstance();

const listSchedulingUsecase = new ListSchedulingUseCase(schedulingRepository);

const listSchedulingController = new ListSchedulingController(listSchedulingUsecase);

export { listSchedulingController };
