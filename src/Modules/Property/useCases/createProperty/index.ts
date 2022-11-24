import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { CreatePropertyController } from "./CreatePropertyController";
import { CreatePropertyUseCase } from "./CreatePropertyUseCase";

const propertyRepository = PropertyRepository.getInstance();

const createPropertyUseCase = new CreatePropertyUseCase(propertyRepository);

const createPropertyController = new CreatePropertyController(createPropertyUseCase);

export { createPropertyController };
