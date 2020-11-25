import {HasFormatter} from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
    constructor(
        readonly client:string,
        private details:string,
        private amount:number,
    ) {}

    format(){
        return `${this.client} is owed ${this.amount} for ${this.details}`;
    }
}