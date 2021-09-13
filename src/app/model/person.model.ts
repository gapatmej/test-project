import { ILocation } from "./location.model";
import { IName } from "./name.model";

export interface IPerson{
    location?:ILocation,
    name?: IName,
}
export class Person implements IPerson{

    constructor(
        public location?:ILocation,
        public name?:IName,
        ){

    }
}