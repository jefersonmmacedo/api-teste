import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { ListContactController } from "./ListContactController";
import { ListContactUseCase } from "./ListContactUseCase";

const contactRepository = ContactRepository.getInstance();

const listContactUsecase = new ListContactUseCase(contactRepository);

const listContactController = new ListContactController(listContactUsecase);

export { listContactController };
