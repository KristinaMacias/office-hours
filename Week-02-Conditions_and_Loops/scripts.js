//conditions and loops

//challenge
//use if else statements to determine if we have enough money to buy a cup of coffee
let money = 20; //we have $5 to spend
let coffeeCost = 10; //we know that cofffe cost $10

if (money >= coffeeCost) {
  // if money is greater or equal to cost of coffee
  console.log("I can buy a cup of coffee today!"); //we will buy a cup of coffee
} else {
  //if we don't have enough money
  console.log("I am going to make coffee at home"); //we will make our own
}

//challenge
//using a switch statement, assign grades as described below:
// A when (grade >= 90)
// B when (grade < 90 && grade >= 80)
// C when (grade < 80 && grade >= 70)
// D when grade < 70 && grade >= 60)
// F when (grade < 60)

let grade = 60; //creating a variable for grade and assigning a numeric value to represent score
let letterGrade; //creating a letter grade. I will assign a letter grade (string) based on the score

switch (true) {
  case grade >= 90: //test case to evaluate
    letterGrade = "A"; //assigning a letter grade based on the condition we defined
    break; //if the condition is not met, we want to break out and test the next case
  case grade < 90 && grade >= 80: //condition for getting B
    letterGrade = "B";
    break;
  case grade < 80 && grade >= 70: //condition for getting C
    letterGrade = "C";
    break;
  case grade < 70 && grade >= 60: //condition for getting D
    letterGrade = "D";
    break;
  case grade < 60:
    letterGrade = "F"; //condition for getting F
    break;
  default: //default is what we want to occur when above conditions aren't met
    console.log("Please enter a valid score!");
}

console.log(letterGrade);

//example
let accountBalance = 200;
let rent = 1000;

let balanceAfterRent = accountBalance - rent;
console.log(`Remaining balance after rent: ${balanceAfterRent}`);

if (accountBalance >= rent) {
  //what we want to happen if the condition is met
  console.log("I am going to pay rent today");
} else if (accountBalance < rent) {
  //what we want to happen if the first condition is not true, but this one is
  console.log("I will pick up some more shifts");
}


// create an if else statement that evaluates:
// if it is hot ouside && we have $5, then we will buy a soft drink

// if (isHotOutside && moneyInPocket >= 5) {
  //   //is hot outside and money in pocket?
  //   console.log("It is a hot day and I have enough money to buy a soft drink");
  // } else {
    //   console.log("I am not going to buy a soft drink today");
    // }
    
//example below has an additonal condition for when it's not hot outside, but DO have enough money
let isHotOutside = false; //boolean
let moneyInPocket = 12; //number

console.log("another example");
if (isHotOutside && moneyInPocket >= 5) {
  //evaluates if its hot outside and money greater than or equal to 5
  console.log(
    "It is a hot day and I have money in my pocket. I will buy a soft drink"
  );
} else if (!isHotOutside && moneyInPocket >= 5) {
  //evaluates its not hot outside but money IS greater than or equal to 5
  //! means NOT, so above is not hot outside and money is greater than or equal to 5
  console.log(
    "I have enough money, but it is not hot outside. I will not buy a soft drink"
  );
} else if (isHotOutside && moneyInPocket < 5) {
  //evaluates if its hot outside and money is less than 5 ****** this is an update from office hours
  console.log(
    "It is hot outside, but I need some more money in my pocket. I will not buy a soft drink"
  );
} else {
  //evaluates if its not hot outside and money is less than 5
  console.log(
    "It is hot, but I don't have enough money in my pocket. I am not going to buy a soft drink today"
  );
}

let y = 10;

console.log((y += 2)); //number = number + 10

let numberGrade = 80;
if (numberGrade >= 90) {
  letterGrade = "A";
} else if (numberGrade >= 80) {
  letterGrade = "B";
} else if (numberGrade >= 70) {
  letterGrade = "C";
} else if (numberGrade >= 60) {
  letterGrade = "D";
} else {
  letterGrade = "F";
}
console.log(letterGrade);

//for loop
// a for loop is a loop that repeats a block of code a certain number of times

//while loop
//a while loop is a loop that repeats a block of code while a certain condition is true

//do while loop
//a do while loop is a loop that repeats a block of code at least once, even if the condition is false

//for/in
//for/in loops through properties of an object

//for/of - loops through the values of an iterable object
