import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePropertyUseCase } from "./UpdatePropertyUseCase";

class UpdatePropertyController {
  constructor(private UpdatePropertyUseCase: UpdatePropertyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {idCompany, title, road, district, city, uf, description, type, subType, status,
      availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, buildingArea,
      siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction, images, featuredImage,
      platformVideo, video, slider, financing, characteristcs, } = req.body;
    const id = req.params; 


    await collections.property.findOneAndUpdate(id, {$set:{ idCompany, title, road, district, city, uf, description, type, subType, status,
      availability, bedroom, garage, suite, restroom, priceSale, priceRent, textRent, buildingArea,
      siglaBuildingArea, totalArea, siglaTotalArea, yearOfConstruction, images, featuredImage,
      platformVideo, video, slider, financing, characteristcs,}}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdatePropertyController };
