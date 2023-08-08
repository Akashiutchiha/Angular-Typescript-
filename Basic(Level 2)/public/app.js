import { invoice } from './classes/invoice.js';
import { payment } from './classes/paymemt.js';
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
const anchor = document.querySelector('a');
const form = document.querySelector(".new-item-form");
// console.log(form.children);
let docOne;
let doctwo;
docOne = new invoice('yoshi', "web work", 200);
doctwo = new payment('mario', "plumbing work", 250);
let docs = [];
docs.push(docOne);
docs.push(doctwo);
console.log(docs);
const invone = new invoice('mario', "work on the mario", 250);
const invtwo = new invoice('luigi', "work on the luigi", 300);
let invoices = [];
invoices.push(invone);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details ');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
