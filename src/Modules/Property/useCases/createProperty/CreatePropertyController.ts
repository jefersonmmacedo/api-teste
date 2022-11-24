import { Request, Response } from "express";
import { CreatePropertyUseCase } from "./CreatePropertyUseCase";

class CreatePropertyController {
  constructor(private createPropertyUseCase: CreatePropertyUseCase) {
    ("");
  }

  handle(req: Request, res: Response) {
    const { 
      id, idCompany, title, road, district, city, uf, description, type, subType, status,
      availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium,
      iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
      images, featuredImage, platformVideo, video, slider, financing, characteristcs
     } = req.body;

    this.createPropertyUseCase.execute({
      id, idCompany, title, road, district, city, uf, description, type, subType, status,
      availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, condominium,
      iptu, otherPrices, buildingArea, siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction,
      images, featuredImage, platformVideo, video, slider, financing, characteristcs
    }).then((result) => {
      console.log(result);
      return res.status(201).json({result: result}).send(result);
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { CreatePropertyController };






