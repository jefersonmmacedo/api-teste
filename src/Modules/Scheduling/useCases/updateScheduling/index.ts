import { SchedulingRepository } from "../../repositories/implementations/SchedulingRepository";
import { UpdateSchedulingController } from "./UpdateSchedulingController";
import { UpdateSchedulingUseCase } from "./UpdateSchedulingUseCase";

const schedulingRepository = SchedulingRepository.getInstance();

const updateSchedulingUseCase = new UpdateSchedulingUseCase(schedulingRepository);

const updateSchedulingController = new UpdateSchedulingController(updateSchedulingUseCase);

export { updateSchedulingController };
