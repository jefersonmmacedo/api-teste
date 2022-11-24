import { MyPlainRepository } from "../../repositories/implementations/MyPlainRepository";
import { DeleteMyPlainController } from "./DeleteMyPlainController";
import { DeleteMyPlainUseCase } from "./DeleteMyPlainUseCase";

const myPlainRepository = MyPlainRepository.getInstance();
const deleteMyPlainUseCase = new DeleteMyPlainUseCase(myPlainRepository);
const deleteMyPlainController = new DeleteMyPlainController(deleteMyPlainUseCase);

export { deleteMyPlainController };
