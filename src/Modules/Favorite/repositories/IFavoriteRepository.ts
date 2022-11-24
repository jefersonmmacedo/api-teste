import { Favorite } from "../models/Favorite";

interface ICreateFavoriteDTO {
  id: string;
  idCompany: string;
  idProperty: string;
  idClient: string;
}

interface IFavoriteRepository {
  create({
    idCompany, idProperty, idClient
  }: ICreateFavoriteDTO): void;
  update({
   id, idCompany, idProperty, idClient
  }: ICreateFavoriteDTO): void;
  list();
  delete({id});
}

export { IFavoriteRepository, ICreateFavoriteDTO };
