import { Person } from "./person";

export class ResumePerson extends Person
{
    constructor(name:string,lastName:string,photo:string,phone:string,email:string,address:string,experience:string[],skills:string[],links:string[])
    {
        super(name,lastName,photo);
        this.phone=phone;
        this.email=email;
        this.address=address;
        this.experience=experience;
        this.skills=skills;
        this.links=links;
    }
    phone:string="";
    email:string="";
    address:string="";
    experience:string[]=[];
    skills:string[]=[];
    links:string[]=[];

}