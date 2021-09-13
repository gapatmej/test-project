export interface ICoordinate{
    latitude?:string,
    longitude?:string
}
export class Coordinate implements ICoordinate{
    constructor(
        public latitude?:string,
        public longitude?:string
        ){

    }
}