import { ICoordinate } from "./coordinate.model";
import { IStreet } from "./street.model";

export interface ILocation{
    city?:string,
    state?:string,
    country?:string,
    postcode?:string,
    number?:number,
    name?:string,
    coordinates?:ICoordinate,
    street?:IStreet
}
export class Location implements ILocation{

    constructor(
        public city?:string,
        public state?:string,
        public country?:string,
        public postcode?:string,
        public number?:number,
        public name?:string,
        public coordinates?:ICoordinate,
        public street?:IStreet,
        ){

    }
}