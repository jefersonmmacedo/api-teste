import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { IAccountClientRepository } from "../../repositories/IAccountClientRepository";

interface IResponse {
          token: string;
          id: string;
          name: string;
          email: string;
          phone: string;
          password: string;
          whatsapp: string;
          status: string;
          verified: boolean;
          avatar: string;
          cep: string;
          city: string;
          uf: string;
          expiresIn: string;
          date: Date;
}

interface IRequest {
  id: string;
  email: string;
  password: string;
}

class AuthenticateAccountClientUseCase {
  constructor(private accountRepository: IAccountClientRepository) {
    " ";
  }
  
  async execute({email, id, password  }: IRequest): Promise<IResponse> {
      await this.accountRepository.session(email, id, password);

      let user;

      if(email !== undefined) {
        user = await collections.account.findOne({email});
      }
      if(id !== undefined) {
        user = await collections.account.findOne({id});
      }
      
      const passwordCompare = await compare(password, user.password)


      if(!user ) {
        throw new Error("Username or email, incorrect!")
        }  else if(!passwordCompare) {
          throw new Error("password, incorrect!")
        }
        const userData = {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          password: user.password,
          whatsapp: user.whatsap,
          status: user.status,
          verified: user.verified,
          avatar: user.avatar,
          cep: user.cep,
          city: user.city,
          uf: user.uf,
        }
        console.log(userData)

      const token = sign({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
        whatsapp: user.whatsapp,
        status: user.status,
        verified: user.verified,
        avatar: user.avatar,
        cep: user.cep,
        city: user.city,
        uf: user.uf
      }, "d64d7c8b83dd7212c25c3745933ee76e", 
      {
        subject: userData.id,
        expiresIn: "1d",
      });

      // console.log(token)
      // console.log(userData)

      return {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          password: user.password,
          whatsapp: user.whatsapp,
          status: user.status,
          verified: user.verified,
          avatar: user.avatar,
          cep: user.cep,
          city: user.city,
          uf: user.uf,
          date: user.created_at,
          token:token,
          expiresIn: "1d",
      }
  }
}

export { AuthenticateAccountClientUseCase };