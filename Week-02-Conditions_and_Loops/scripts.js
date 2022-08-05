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
