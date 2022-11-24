import { BrokerRepository } from "../../../Broker/repositories/implementations/BrokerRepository";
import { ListBrokerUseCase } from "./ListBrokerUseCase";
import { ListBrokerController } from "./ListBrokerController";

const brokerRepository = BrokerRepository.getInstance();

const listBrokerUsecase = new ListBrokerUseCase(brokerRepository);

const listBrokerController = new ListBrokerController(listBrokerUsecase);

export { listBrokerController };
