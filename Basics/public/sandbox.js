"use strict";
// variable definition(2)
let myname = "Chris";
console.log(myname);
let inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((input) => {
    console.log(input);
});
// Arrays(3)
let PLangages = ['python', 'javaScript', 'Java'];
PLangages.push('Dart');
console.log(PLangages);
// Objects
let meals = {
    chris: "boy",
    age: 20,
    height: 1.5
};
meals.chris;
// Explicit types(5)
let character = "hello";
let age;
let isLoggedIn;
let ninjas; //arrays
let mixed = []; // Union types
let uid; //for variables
uid = "123";
uid = 20;
let ninjaOne; //for objects
ninjaOne = {
    namor: 'yoshi',
    age: 20
};
let ninjaTwo;
ninjaTwo = {
    name: 'chris',
    age: 20,
    beltColour: "red"
};
age = 30;
// isLoggedIn= 20
isLoggedIn = false;
// Dynamic types (any) - 6
let age1 = 25;
age1 = true;
age1 = "56";
age1 = {
    boris: "14"
};
age1 = 2;
// Functions - Basics(6)
let greet;
greet = () => {
    console.log('Good morning');
};
const add = (a, b, c) => {
    console.log(a + b);
};
add(8, 9);
