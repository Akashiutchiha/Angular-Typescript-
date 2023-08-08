import { invoice } from './classes/invoice.js';
let Dog = {
    name: "jack",
    age: 5,
    height: 2.3,
    color: 'black',
    sound: () => {
        console.log("Wooouf");
    }
};
Dog.sound();
const anchor = document.querySelector('a');
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// class
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
    console.log(type.value, tofrom.value, details.value, amount.value);
});
