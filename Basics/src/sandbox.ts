// variable definition(2)
let myname = "Chris";
console.log(myname);

let inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((input)=>{
    console.log(input);
})

// Arrays(3)
let PLangages = ['python', 'javaScript', 'Java']

PLangages.push('Dart')
console.log(PLangages)

// Objects

let meals = {
    chris:"boy",
    age : 20,
    height:1.5
}

meals.chris;

// Explicit types(5)
let character: string = "hello";
let age:number;
let isLoggedIn: boolean;
let ninjas: string[]; //arrays

let mixed: (string|number|boolean)[] = [] // Union types

let uid: (string|number); //for variables
uid="123"
uid=20

let ninjaOne: object; //for objects
ninjaOne = {
    namor: 'yoshi',
    age: 20
}


let ninjaTwo:{
    name: String,
    age: number,
    beltColour: string
}

ninjaTwo = {
    name: 'chris',
    age: 20,
    beltColour: "red"
}


age = 30;
// isLoggedIn= 20
isLoggedIn = false

// Dynamic types (any) - 6

let age1: any = 25;

age1 = true
age1 = "56"
age1 = {
    boris: "14"
}
age1= 2

// Functions - Basics(6)
let greet: Function
greet =()=>{
    console.log('Good morning')
}

const add =(a:number , b:number, c?: boolean | string)=>{
    console.log(a + b)
}
 add(8, 9)

// Type Aliases

type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid ${uid}`) 
}

const greetings = (user: objWithName):void => {
    console.log(`${user.name} says hello`);
}

// classes
class invoice{
    // client: string;
    // details: string;
    // amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invone = new invoice('mario', "work on the mario", 250)
const invtwo = new invoice('luigi', "work on the luigi", 300)

let invoices: invoice[] = []
invoices.push(invone);

