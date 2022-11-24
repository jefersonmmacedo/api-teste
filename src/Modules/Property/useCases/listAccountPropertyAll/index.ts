import { PropertyRepository } from "../../repositories/implementations/PropertyRepository";
import { ListPropertyAllUseCase } from "./ListPropertyAllUseCase";
import { ListPropertyAllController } from "./ListPropertyAllController";

const propertyRepository = PropertyRepository.getInstance();

const listPropertyAllUsecase = new ListPropertyAllUseCase(propertyRepository);

const listPropertyAllController = new ListPropertyAllController(listPropertyAllUsecase);

export { listPropertyAllController };
