import { Person } from "./person";
export class Hobby
{
    constructor(name:string,description:string,mainImg:string,famousPerson:Person)
    {
        this._name=name;
        this._description=description;
        this._mainImgSrc=mainImg;
        this._famoustPerson=famousPerson;
    }
    private _name:string="";
    private _description:string="";
    private _mainImgSrc:string="";
    private _famoustPerson:Person;

    public get name()
    {
        return this._name;
    }

    public set name(name:string)
    {
        this._name=name;
    }

    public get description()
    {
        return this._description;
    }

    public set description(description:string)
    {
        this._description=description;
    }

    public get famoustPerson()
    {
        return this._famoustPerson;
    }

    public set famoustPerson(famoustPerson:Person)
    {
        this._famoustPerson=famoustPerson;
    }

    public get mainImgSrc()
    {
        return this._mainImgSrc;
    }

    public set mainImgSrc(mainImgSrc:string)
    {
        this._mainImgSrc=mainImgSrc;

    }
}