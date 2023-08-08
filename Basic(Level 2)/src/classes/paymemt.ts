import {HasFormatter} from '../interfaces/HasFormatter.js'

export class payment implements HasFormatter{
    // client: string;
    // details: string;
    // amount: number;

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.recipient} was owed $${this.amount} for ${this.details}`
    }
}
