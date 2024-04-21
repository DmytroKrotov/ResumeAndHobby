import { Person } from "./person";

export class ResumePerson extends Person
{
    constructor(name:string,lastName:string,photo:string,phone:string,email:string,address:string,experience:string[],skills:string[],links:string[],power: number,salary:number)
    {
        super(name,lastName,photo);
        this.phone=phone;
        this.email=email;
        this.address=address;
        this.experience=experience;
        this.skills=skills;
        this.links=links;
        this.power=power;
        this.salary=salary;
    }
    phone:string="";
    email:string="";
    address:string="";
    experience:string[]=[];
    skills:string[]=[];
    links:string[]=[];
    private _power: number=0;
    salary:number;

    get power()
    {
        return this._power;
    }
    set power(power:number)
    {
        if(power<=1&&power>=0)
            this._power=power;
        else
            this._power= -1;

    }

}