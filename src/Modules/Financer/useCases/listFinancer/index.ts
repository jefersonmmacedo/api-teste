import { FinancerRepository } from "../../repositories/implementations/FinancerRepository";
import { ListFinancerController } from "./ListFinancerController";
import { ListFinancerUseCase } from "./ListFinancerUseCase";

const financerRepository = FinancerRepository.getInstance();

const listFinancerUsecase = new ListFinancerUseCase(financerRepository);

const listFinancerController = new ListFinancerController(listFinancerUsecase);

export { listFinancerController };
