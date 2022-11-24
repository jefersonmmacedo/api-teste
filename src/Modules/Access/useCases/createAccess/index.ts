import { AccessRepository } from "../../repositories/implementations/AccessRepository";
import { CreateAccessController } from "./CreateAccessController";
import { CreateAccessUseCase } from "./CreateAccessUseCase";

const accessRepository = AccessRepository.getInstance();

const createAccessUseCase = new CreateAccessUseCase(accessRepository);

const createAccessController = new CreateAccessController(createAccessUseCase);

export { createAccessController };
