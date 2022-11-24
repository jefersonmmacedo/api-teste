import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { UpdatePropertyController } from "./UpdatePropertyController";
import { UpdatePropertyUseCase } from "./UpdatePropertyUseCase";

const propertyRepository = PropertyRepository.getInstance();

const updatePropertyUseCase = new UpdatePropertyUseCase(propertyRepository);

const updatePropertyController = new UpdatePropertyController(updatePropertyUseCase);

export { updatePropertyController };
