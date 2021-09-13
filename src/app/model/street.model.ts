export interface IStreet{
    number?:number,
    name?:string
}
export class Street implements IStreet{
    constructor(
        public number?:number,
        public name?:string
        ){

    }
}