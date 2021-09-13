export interface ICustomHttpResponse {
    results?: [],
}
export class CustomHttpResponse implements ICustomHttpResponse {
    constructor(
        public results?: [],
    ) {}
}