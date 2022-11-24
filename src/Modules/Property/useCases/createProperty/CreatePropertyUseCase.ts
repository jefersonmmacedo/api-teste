import { hash } from "bcrypt";
import { IPropertyRepository } from "../../repositories/IPropertyRepository";
import { Request, Response } from "express";

interface IRequest {
  id: string;
  idCompany: string;
  title: string;
  road: string;
  district: string;
  city: string;
  uf: string;
  description: string;
  type: string;
  subType: string;
  status: string;
  availability: string;
  bedroom: string;
  garage: string;
  suite: string;
  restroom: string;
  priceSale: string;
  priceRent: string;
  textRent: string;
  condominium: string;
  iptu: string;
  otherPrices: string;
  yearOfConstruction: string;
  buildingArea: string;
  siglaBuildingArea: string;
  totalArea: string;
  siglaTotalArea: string;
  images: object;
  featuredImage: string;
  platformVideo: string;
  video: string;
  slider: string;
  financing: string;
  characteristcs: object;
}

class CreatePropertyUseCase {
  constructor(private PropertyRepository: IPropertyRepository) {
    " ";
  }
  
  async execute({
    id, idCompany, title, road, district, city, uf, description, type, subType, status,
    availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium,
    iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
    images, featuredImage, platformVideo, video, slider, financing, characteristcs
  }: IRequest): Promise<void> {

      await this.PropertyRepository.create({
        id, idCompany, title, road, district, city, uf, description, type, subType, status,
        availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium,
        iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
        images, featuredImage, platformVideo, video, slider, financing, characteristcs
      });

  }
}

export { CreatePropertyUseCase };