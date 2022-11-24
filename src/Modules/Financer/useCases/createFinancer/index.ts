import { FinancerRepository } from "../../repositories/implementations/FinancerRepository";
import { CreateFinancerController } from "./CreateFinancerController";
import { CreateFinancerUseCase } from "./CreateFinancerUseCase";

const financerRepository = FinancerRepository.getInstance();

const createFinancerUseCase = new CreateFinancerUseCase(financerRepository);

const createFinancerController = new CreateFinancerController(createFinancerUseCase);

export { createFinancerController };
