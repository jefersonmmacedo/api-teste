import { ViewPropertyRepository } from "../../repositories/implementations/ViewPropertyRepository";
import { CreateViewPropertyController } from "./CreateViewPropertyController";
import { CreateViewPropertyUseCase } from "./CreateViewPropertyUseCase";

const viewPropertyRepository = ViewPropertyRepository.getInstance();

const createViewPropertyUseCase = new CreateViewPropertyUseCase(viewPropertyRepository);

const createViewPropertyController = new CreateViewPropertyController(createViewPropertyUseCase);

export { createViewPropertyController };
