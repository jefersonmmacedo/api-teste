import { PropertyRepository } from "../../../Property/repositories/implementations/PropertyRepository";
import { ListPropertyUseCase } from "./ListPropertyUseCase";
import { ListPropertyController } from "./ListPropertyController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyUsecase = new ListPropertyUseCase(propertyRepository);

const listPropertyController = new ListPropertyController(listPropertyUsecase);

export { listPropertyController };
