// variable definition
let myname = "Chris";
console.log(myname);

let inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((input)=>{
    console.log(input);
})

// Arrays
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

// Explicit types
let character: string = "hello";
let age:number;
let isLoggedIn: boolean;
let ninjas: string[]; //arrays
let mixed: (string|number|boolean)[] = [] // Union types


age = 30;
// isLoggedIn= 20
isLoggedIn = false