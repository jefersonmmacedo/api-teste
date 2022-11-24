import { BrokerRepository } from "../../repositories/implementations/BrokerRepository";
import { UpdateBrokerController } from "./UpdateBrokerController";
import { UpdateBrokerUseCase } from "./UpdateBrokerUseCase";

const brokerRepository = BrokerRepository.getInstance();

const updateBrokerUseCase = new UpdateBrokerUseCase(brokerRepository);

const updateBrokerController = new UpdateBrokerController(updateBrokerUseCase);

export { updateBrokerController };
