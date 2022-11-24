import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { ICompanyRepository } from "../../repositories/ICompanyRepository";

interface IResponse {
          token: string;
          id: string;
          type: string;
          verified: boolean;
          status: string;
          cnpj: string;
          socialReason: string;
          fantasyName: string;
          creci: string;
          email: string;
          phone: string;
          whatsapp: string;
          password: string;
          responsibleName: string;
          emailResponsible: string;
          whatsappResponsible: string;
          logo: string;
          cep: string;
          road: string;
          number: string;
          district: string;
          city: string;
          uf: string;
          website: string;
          facebook: string;
          instagram: string;
          linkedin: string;
          youtube: string;
          nameSlug: string;
          expiresIn: string;
          date: Date;
}

interface IRequest {
  id: string;
  email: string;
  password: string;
}

class AuthenticateCompanyUseCase {
  constructor(private accountRepository: ICompanyRepository) {
    " ";
  }
  
  async execute({email, id, password  }: IRequest): Promise<IResponse> {
      await this.accountRepository.session(email, id, password);

      let user;

      if(email !== undefined) {
        user = await collections.company.findOne({email});
      }
      if(id !== undefined) {
        user = await collections.company.findOne({id});
      }
      
      const passwordCompare = await compare(password, user.password)


      if(!user ) {
        throw new Error("Username or email, incorrect!")
        }  else if(!passwordCompare) {
          throw new Error("password, incorrect!")
        }
        const userData = {
          id2: user.id,
          id: user.id,
          type: user.type,
          verified: user.verified,
          status: user.status,
          cnpj: user.cnpj,
          socialReason: user.socialReason,
          fantasyName: user.fantasyName,
          creci: user.creci,
          email: user.email,
          phone: user.phone,
          whatsapp: user.whatsapp,
          password: user.password,
          responsibleName: user.responsibleName,
          emailResponsible: user.emailResponsible,
          whatsappResponsible: user.whatsappResponsible,
          logo: user.logo,
          cep: user.cep,
          road: user.road,
          number: user.number,
          district: user.district,
          city: user.city,
          uf: user.uf,
          website: user.website,
          facebook: user.facebook,
          instagram: user.instagram,
          linkedin: user.linkedin,
          youtube: user.youtube,
          nameSlug: user.nameSlug,
          expiresIn: user.expiresIn,
          date: user.created_at,
        }
        console.log(userData)

      const token = sign({
        id2: user.id,
        id: user.id,
        type: user.type,
        verified: user.verified,
        status: user.status,
        cnpj: user.cnpj,
        socialReason: user.socialReason,
        fantasyName: user.fantasyName,
        creci: user.creci,
        email: user.email,
        phone: user.phone,
        whatsapp: user.whatsapp,
        password: user.password,
        responsibleName: user.responsibleName,
        emailResponsible: user.emailResponsible,
        whatsappResponsible: user.whatsappResponsible,
        logo: user.logo,
        cep: user.cep,
        road: user.road,
        number: user.number,
        district: user.district,
        city: user.city,
        uf: user.uf,
        website: user.website,
        facebook: user.facebook,
        instagram: user.instagram,
        linkedin: user.linkedin,
        youtube: user.youtube,
        nameSlug: user.nameSlug,
        date: user.created_at,
      }, "d64d7c8b83dd7212c25c3745933ee76e", 
      {
        subject: userData.id,
        expiresIn: "1d",
      });

      // console.log(token)
      // console.log(userData)

      return {
        id: user.id,
        type: user.type,
        verified: user.verified,
        status: user.status,
        cnpj: user.cnpj,
        socialReason: user.socialReason,
        fantasyName: user.fantasyName,
        creci: user.creci,
        email: user.email,
        phone: user.phone,
        whatsapp: user.whatsapp,
        password: user.password,
        responsibleName: user.responsibleName,
        emailResponsible: user.emailResponsible,
        whatsappResponsible: user.whatsappResponsible,
        logo: user.logo,
        cep: user.cep,
        road: user.road,
        number: user.number,
        district: user.district,
        city: user.city,
        uf: user.uf,
        website: user.website,
        facebook: user.facebook,
        instagram: user.instagram,
        linkedin: user.linkedin,
        youtube: user.youtube,
        nameSlug: user.nameSlug,
        date: user.created_at,
        token:token,
        expiresIn: "1d",
      }
  }
}

export { AuthenticateCompanyUseCase };