import { Company } from "../../models/Company";
import { ICompanyRepository, ICompanyDTO } from "../ICompanyRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class CompanyRepository implements ICompanyRepository {
  private company: Company[];

  private static INSTANCE: CompanyRepository;

  private constructor() {
    this.company = [];
  }

  public static getInstance(): CompanyRepository {
    if (!CompanyRepository.INSTANCE) {
      CompanyRepository.INSTANCE = new CompanyRepository();
    }

    return CompanyRepository.INSTANCE;
  }

  async findByEmail(email: string): Promise<void> {
    const findEmail = await collections.company.findOne({email})
      if(findEmail) {
        throw new Error("Email already exists!")
      } 
  }
  
  
  async findById(id: string): Promise<void>  {
    const findNickname = await collections.company.findOne({id})
    if(findNickname) {
      throw new Error("Nickname already exists!")
    } 
  }

  async create({type,verified,status, cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf, website, facebook,
    instagram, linkedin, youtube }: ICompanyDTO) {
    const company: Company = new Company();
    const idMini = uuidv4()
    const id = idMini.substring(0,8)
      Object.assign(company, {
        id, _id: id, type,verified, status, cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, password, responsibleName,
        emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf, website, facebook,
        instagram, linkedin, youtube ,created_at: new Date(),
      });
      this.company.push(company);
      
      await collections.company.insertOne(company).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  async session(email: string, username: string, password: string){
    return {
      email,
      username,
      password
    }
  }
  async sessionFast(id: string){
    return {
     id
    }
  }

  list(){ }

  update({id, type, verified, status, cnpj,nameSlug, socialReason, fantasyName, creci, email, phone, whatsapp, password, responsibleName,
    emailResponsible, whatsappResponsible, logo, cep, road, number, district, city, uf, website, facebook,
    instagram, linkedin, youtube}):void {}

  async delete({id}) {
    await collections.company.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { CompanyRepository };




