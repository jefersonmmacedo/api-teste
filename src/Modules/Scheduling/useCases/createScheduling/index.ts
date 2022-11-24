import { SchedulingRepository } from "../../repositories/implementations/SchedulingRepository";
import { CreateSchedulingController } from "./CreateSchedulingController";
import { CreateSchedulingUseCase } from "./CreateSchedulingUseCase";

const schedulingRepository = SchedulingRepository.getInstance();

const createSchedulingUseCase = new CreateSchedulingUseCase(schedulingRepository);

const createSchedulingController = new CreateSchedulingController(createSchedulingUseCase);

export { createSchedulingController };
