import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListPropertyAllUseCase } from "./ListPropertyAllUseCase";

class ListPropertyAllController {
  constructor(private listPropertyAllUseCase: ListPropertyAllUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const {availability} = req.params;

   await collections.property.find({availability}).sort( { created_at: -1 } ).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
     // console.log(result)
      return result;
     })

  }
}

export { ListPropertyAllController };
