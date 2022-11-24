import { Plains } from "../models/Plains";

interface IPlainsDTO {
  id: string;
  name: string;
  value: string;
  period: number;
  infos: object;
  note: string;
}

interface IPlainsRepository {
  create({ id, name, value, period, infos, note }: IPlainsDTO): Promise<void>;
  update({id, name, value, period, infos, note }): Promise<void>
  list();
  delete({id});
}

export { IPlainsRepository, IPlainsDTO };
