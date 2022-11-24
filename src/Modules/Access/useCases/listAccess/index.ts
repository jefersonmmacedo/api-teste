import { AccessRepository } from "../../repositories/implementations/AccessRepository";
import { ListAccessController } from "./ListAccessController";
import { ListAccessUseCase } from "./ListAccessUseCase";

const accessRepository = AccessRepository.getInstance();

const listAccessUsecase = new ListAccessUseCase(accessRepository);

const listAccessController = new ListAccessController(listAccessUsecase);

export { listAccessController };
