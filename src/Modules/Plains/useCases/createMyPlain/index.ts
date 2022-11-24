import { MyPlainRepository } from "../../repositories/implementations/MyPlainRepository";
import { CreateMyPlainController } from "./CreateMyPlainController";
import { CreateMyPlainUseCase } from "./CreateMyPlainUseCase";

const myPlainRepository = MyPlainRepository.getInstance();
const createMyPlainUseCase = new CreateMyPlainUseCase(myPlainRepository);
const createMyPlainController = new CreateMyPlainController(createMyPlainUseCase);

export { createMyPlainController };
