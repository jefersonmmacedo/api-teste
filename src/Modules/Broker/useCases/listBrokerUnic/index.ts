import { BrokerRepository } from "../../repositories/implementations/BrokerRepository";
import { ListBrokerUnicUseCase } from "./ListBrokerUnicUseCase";
import { ListBrokerUnicController } from "./ListBrokerUnicController";

const brokerRepository = BrokerRepository.getInstance();

const listBrokerUnicUsecase = new ListBrokerUnicUseCase(brokerRepository);

const listBrokerUnicController = new ListBrokerUnicController(listBrokerUnicUsecase);

export { listBrokerUnicController };
