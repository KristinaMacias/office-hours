// Notes for variables
// 1. Variables are used to store values.
// 2. Variables can be declared with the var keyword. This is not recommended.
// 3. Variables can be declared with the let keyword.
// 4. Variables can be declared with the const keyword.

//What is let?
//let is a keyword that is used to declare a variable. It is used to declare a variable that can be reassigned.

//difference between let and var?
//let is a block scoped variable.
//What is block scope?
//block scope is the scope of a block of code. A block is a group of statements enclosed in curly braces {}.

//var is a function scoped variable.
//What is function scope?
//When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

let carMake; //creating a variable for make of car
let carModel; //creating a variable for model of car
let carYear; //creating a variable for year of car

console.log(carMake); //expected undefined b/c have not assigned value
console.log(carModel); //expected undefined b/c have not assigned value
console.log(carYear); //expected undefined b/c have not assigned value

carMake = "Honda"; //assigning a string to car make
carModel = "Civic"; //assigning a string to car model
carYear = 2021; //assigning a numeric value to car year

carMake = "Toyota"; //changing car make. it's possible due to let
carModel = "Tacoma"; //changing car model. it's possible due to let
carYear = 2022; //chaning car year. it's possible due to let

console.log(`Car Make: ${carMake}`); //expected toyota because we reassigned value
console.log(`Car Model: ${carModel}`); //expected tacoma because we reassigned value
console.log(`Car Year: ${carYear}`); //expected 2022 because we reassigned value

//Challenges:
//Create a new variable for carType that also contains variables created on lines 7, 9 and 11.
//There should be a space between car make, model and year

let carType = carMake + " " + carModel + " " + carYear;
console.log(`Car Type: ${carType}`); // expected Toyota Tacoma 2022
console.log(`Car Details: ${carType}`); // expected Toyota Tacoma 2022

//const example
//block scope
//Give me some examples when someone might want to use const instead of let
//birthYear because birthday will not change

const birthYear = 1990; //assigning a number to birth year. Birthyear cannot change.
let currentYear = 2022; //assigning a number to current year. Current year can change.

console.log(birthYear); //expected 1990
console.log(currentYear); //expected 2022

//Challenges:
let age = currentYear - birthYear; //creating a variable for age and assigning the result of current year minus birth year
console.log(`My age: ${age}`); //expected 32

//Extra extra! Here's some tips for template literals

//template literals
//template literals are string literals that allow embedded expressions.
//you can find backticks (`) at the beginning and end of the string.
//you can use expressions inside of the backticks.
//back ticks are to the left of the #1 on your keyboard. :)
//template literals are enclosed in backticks (`) and embedded expressions are enclosed in ${}

//example
let name = "Kristina";
let myAge = 32;
let myFavoriteFood = "sushi";
console.log(
  `My name is ${name} and I am ${myAge} years old. My favorite food is ${myFavoriteFood}`
);
