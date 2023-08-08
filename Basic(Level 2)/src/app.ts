import {invoice} from './classes/invoice.js'

const anchor = document.querySelector('a')!

const form = document.querySelector(".new-item-form") as HTMLFormElement
// console.log(form.children);

// class
const invone = new invoice('mario', "work on the mario", 250)
const invtwo = new invoice('luigi', "work on the luigi", 300)

let invoices: invoice[] = []
invoices.push(invone);




// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details ') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value
    )
})