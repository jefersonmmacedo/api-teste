import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { UpdatePropertyAvailabilityController } from "./UpdatePropertyAvailabilityController";
import { UpdatePropertyAvailabilityUseCase } from "./UpdatePropertyAvailabilityUseCase";

const propertyRepository = PropertyRepository.getInstance();

const updatePropertyAvailabilityUseCase = new UpdatePropertyAvailabilityUseCase(propertyRepository);

const updatePropertyAvailabilityController = new UpdatePropertyAvailabilityController(updatePropertyAvailabilityUseCase);

export { updatePropertyAvailabilityController };
