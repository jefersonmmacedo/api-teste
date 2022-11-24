import { ViewPropertyRepository } from "../../repositories/implementations/ViewPropertyRepository";
import { ListViewPropertyUserController } from "./ListViewPropertyUserController";
import { ListViewPropertyUserUseCase } from "./ListViewPropertyUserUseCase";

const viewPropertyRepository = ViewPropertyRepository.getInstance();

const listViewPropertyUserUsecase = new ListViewPropertyUserUseCase(viewPropertyRepository);

const listViewPropertyUserController = new ListViewPropertyUserController(listViewPropertyUserUsecase);

export { listViewPropertyUserController };
