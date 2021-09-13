export interface IName{
    title?:string,
    first?:string,
    last?:string
}
export class Name implements IName{
    constructor(
        public title?:string,
        public first?:string,
        public last?:string
        ){

    }
}