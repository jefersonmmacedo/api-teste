import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";
import { UpdatePropertyAvailabilityUseCase } from "./UpdatePropertyAvailabilityUseCase";

class UpdatePropertyAvailabilityController {
  constructor(private UpdatePropertyAvailabilityUseCase: UpdatePropertyAvailabilityUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability } = req.body;
    const id = req.params; 


    await collections.property.findOneAndUpdate(id, {$set:{ availability }}, {upsert: true}).then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
      return res.status(500);
    })

  }
}

export { UpdatePropertyAvailabilityController };
