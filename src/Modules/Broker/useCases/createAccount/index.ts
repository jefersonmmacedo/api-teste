import { BrokerRepository } from "../../repositories/implementations/BrokerRepository";
import { CreateBrokerController } from "./CreateBrokerController";
import { CreateBrokerUseCase } from "./CreateBrokerUseCase";

const brokerRepository = BrokerRepository.getInstance();

const createBrokerUseCase = new CreateBrokerUseCase(brokerRepository);

const createBrokerController = new CreateBrokerController(createBrokerUseCase);

export { createBrokerController };
