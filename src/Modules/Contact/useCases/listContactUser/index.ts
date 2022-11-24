import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { ListContactUserController } from "./ListContactUserController";
import { ListContactUserUseCase } from "./ListContactUserUseCase";

const contactRepository = ContactRepository.getInstance();

const listContactUserUsecase = new ListContactUserUseCase(contactRepository);

const listContactUserController = new ListContactUserController(listContactUserUsecase);

export { listContactUserController };
