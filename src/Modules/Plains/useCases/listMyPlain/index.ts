import { MyPlainRepository } from "../../repositories/implementations/MyPlainRepository";
import { ListMyPlainController } from "./ListMyPlainController";
import { ListMyPlainUseCase } from "./ListMyPlainUseCase";

const myPlainRepository = MyPlainRepository.getInstance();

const listMyPlainUsecase = new ListMyPlainUseCase(myPlainRepository);

const listMyPlainController = new ListMyPlainController(listMyPlainUsecase);

export { listMyPlainController };
