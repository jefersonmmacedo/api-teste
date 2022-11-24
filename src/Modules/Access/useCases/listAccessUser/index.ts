import { AccessRepository } from "../../repositories/implementations/AccessRepository";
import { ListAccessUserController } from "./ListAccessUserController";
import { ListAccessUserUseCase } from "./ListAccessUserUseCase";

const accessRepository = AccessRepository.getInstance();

const listAccessUserUsecase = new ListAccessUserUseCase(accessRepository);

const listAccessUserController = new ListAccessUserController(listAccessUserUsecase);

export { listAccessUserController };
