import {invoice} from './classes/invoice.js'
import { ListTemplate } from './classes/listTemplate.js'
import {payment} from './classes/paymemt.js'
import {HasFormatter} from './interfaces/HasFormatter.js'

//interfaces
//  interface Animal {
//     name: string;
//     age: number;
//     height: number;
//     color: string;
//     sound: Function
//  }

//  let Dog: Animal = {
//     name: "jack",
//     age: 5,
//     height: 2.3,
//     color: 'black',
//     sound: () => {
//         console.log("Wooouf")
//     }
//  }

//  Dog.sound()

const anchor = document.querySelector('a')!

const form = document.querySelector(".new-item-form") as HTMLFormElement
// console.log(form.children);


let docOne: HasFormatter
let doctwo: HasFormatter

docOne = new invoice('yoshi', "web work", 200)
doctwo = new payment('mario', "plumbing work", 250)

let docs: HasFormatter[] = []
docs.push(docOne);
docs.push(doctwo)

console.log(docs)

const invone = new invoice('mario', "work on the mario", 250)
const invtwo = new invoice('luigi', "work on the luigi", 300)

let invoices: invoice[] = []
invoices.push(invone);




// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details ') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    let doc: HasFormatter
    if(type.value == 'invoice'){
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
})