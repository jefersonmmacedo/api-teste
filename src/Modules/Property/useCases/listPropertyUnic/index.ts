import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyUnicUseCase } from "./ListPropertyUnicUseCase";
import { ListPropertyUnicController } from "./ListPropertyUnicController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyUnicUsecase = new ListPropertyUnicUseCase(propertyRepository);

const listPropertyUnicController = new ListPropertyUnicController(listPropertyUnicUsecase);

export { listPropertyUnicController };
