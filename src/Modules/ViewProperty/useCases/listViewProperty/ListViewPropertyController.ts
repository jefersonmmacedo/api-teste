import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListViewPropertyUseCase } from "./ListViewPropertyUseCase";

class ListViewPropertyController {
  constructor(private listViewPropertyUseCase: ListViewPropertyUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.viewProperty.find().toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      console.log(result)
      return result;
     })

  }
}

export { ListViewPropertyController };
