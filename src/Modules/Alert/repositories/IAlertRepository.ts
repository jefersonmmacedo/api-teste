import { Favorite } from "../models/Alert";

interface ICreateFavoriteDTO {
  id: string;
  idProperty: string;
  type: string;
}

interface IFavoriteRepository {
  create({
   idProperty, type
  }: ICreateFavoriteDTO): void;
  update({
   id, idProperty, type
  }: ICreateFavoriteDTO): void;
  findByIdProfessional(idProperty: string): Promise<void>;
  list();
  delete({id});
}

export { IFavoriteRepository, ICreateFavoriteDTO };
