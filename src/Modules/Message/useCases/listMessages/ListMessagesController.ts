import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListMessagesUseCase } from "./ListMessagesUseCase";

class ListMessagesController {
  constructor(private listPostseCase: ListMessagesUseCase) {
    ("");
  }


  async handle(req: Request, res: Response) {
    const page = req.query.page;
    const limit = req.query.limit;

console.log(page)
console.log(limit)
await collections.messages.find({}).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
        console.log(result)
        console.log(result.length)
      }
      return result;
     })

  }
}

export { ListMessagesController };
