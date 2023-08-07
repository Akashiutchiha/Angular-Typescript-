// variable definition
var myname = "Chris";
console.log(myname);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
// Arrays
var PLangages = ['python', 'javaScript', 'Java'];
PLangages.push('Dart');
console.log(PLangages);
// Objects
var meals = {
    chris: "boy",
    age: 20,
    height: 1.5
};
meals.chris;
// Explicit types
var character = "hello";
var age;
var isLoggedIn;
var ninjas; //arrays
var mixed = []; // Union types
age = 30;
// isLoggedIn= 20
isLoggedIn = false;
