import { ViewPropertyRepository } from "../../repositories/implementations/ViewPropertyRepository";
import { ListViewPropertyController } from "./ListViewPropertyController";
import { ListViewPropertyUseCase } from "./ListViewPropertyUseCase";

const viewPropertyRepository = ViewPropertyRepository.getInstance();

const listViewPropertyUsecase = new ListViewPropertyUseCase(viewPropertyRepository);

const listViewPropertyController = new ListViewPropertyController(listViewPropertyUsecase);

export { listViewPropertyController };
