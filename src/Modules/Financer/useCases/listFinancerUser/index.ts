import { FinancerRepository } from "../../repositories/implementations/FinancerRepository";
import { ListFinancerUserController } from "./ListFinancerUserController";
import { ListFinancerUserUseCase } from "./ListFinancerUserUseCase";

const financerRepository = FinancerRepository.getInstance();

const listFinancerUserUsecase = new ListFinancerUserUseCase(financerRepository);

const listFinancerUserController = new ListFinancerUserController(listFinancerUserUsecase);

export { listFinancerUserController };
