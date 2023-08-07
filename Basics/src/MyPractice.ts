// Exercise 1: Manipulating Arrays
// Create a new array called `favoriteLanguages` 
// and initialize it as an empty array. Use array
//  methods to add your favorite programming languages 
// from the `PLangages` array to `favoriteLanguages`.
//  Then, remove the second element from 
// `favoriteLanguages` and log the updated array.

let PLangages1 = ['python', 'C', "C++/C#", "javascript", "typyscript", "Dart"]
let favoriteLanguages:string[] = []
favoriteLanguages.push(PLangages1[0])
favoriteLanguages.push(PLangages1[3])
favoriteLanguages.push(PLangages1[4])

favoriteLanguages.splice(1);




// Exercise 2: Working with Objects
// Add a new property called `gender` to the 
// `meals` object, and assign it a value of your 
// choice. Log the updated `meals` object. Next, 
// create a new object called `person` with 
// properties `name`, `age`, `gender`, and
//  `height`. Assign appropriate values to each 
// property and log the `person` object.

let meals1:object;
meals1 = {
    gender: 'male',
}

let person: object = {
    name:'chris',
    age: 15,
    gender: 'Male',
    height: 1.36
}


// Exercise 3: Type Annotations and Functions
// Create a function called `getTotal` that takes 
// in an array of numbers as an argument and returns
//  the sum of all the numbers. Call the `getTotal`
//  function with an array of numbers of your choice
//  and log the result.

let getTotal = (nums: number[]) =>{
    console.log(nums)
}

// Exercise 4: Type Aliases and Function Usage
// Define a type alias called `Book` that represents
//  an object with properties `title` (string), 
// `author` (string), and `year` (number). 
// Then, create a function called `displayBookDetails`
//  that takes in a parameter of type `Book` and logs
//  the book's title, author, and year. Call the
//  `displayBookDetails` function with an object that
//  matches the `Book` type and log the book details.

type Book = {
    title: string,
    author:string,
    year: number
}

function displayBookDetails (book: Book){
    console.log(book.author, book.title, book.year)
}

let book1:Book
book1 = {
    title: 'Readme.md',
    author: "chris",
    year: 2023
}

displayBookDetails(book1)
// Exercise 5: Working with Classes
// Create a new class called `User` with properties `name` (string) and `email` (string). Define a method on the `User` class called `sendEmail` that logs a message with the user's name and email. Instantiate a new `User` object with your own name and email. Call the `sendEmail` method on the user object.

// These exercises cover various topics such as array manipulation, object manipulation, type annotations, type aliases, function usage, and class usage. They provide opportunities to practice and reinforce the concepts you have learned from the provided code.