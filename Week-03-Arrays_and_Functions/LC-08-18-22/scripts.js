// console.log('hello')

// //1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// //a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// //(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
// //b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// //c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.


// let ages = [3, 9, 23, 64, 2, 8, 28, 93, 100];
// // console.log("original array",ages)
// // let firstEl = ages.shift(); // shift method allows me to remove the first element of an array

// // console.log("first element", firstEl);

// // let lastEl = ages.pop(); //pop method allows me to remove the last element of an array
// // console.log("last element",lastEl)

// // console.log(lastEl - firstEl)



// // ages.push(100);

// // console.log("ages after push",ages)


// // console.log(firstEl)
// // console.log(lastEl - firstEl)

// //first need to add all elements in the array and store in sum
// //sum / # of elements in the array


// // console.log(ages)
// // let total = 0;

// // for(let i = 0; i < ages.length; i++) {
// //     total = total + ages[i];
// //     //0 = 0 + 3
// //     //3 = 3 + 9
// //     //12 = 12 + 23
    
// // }
// // console.log(total)

// let names = ['Kristina', 'Tim', 'Ollie']
// // console.log(names.length);


// let total = 0;
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i].length)
//     total = total + names[i].length
// }

// console.log(total)

// let random = [1, 'Sadie', true, 2, 3]
// console.log(random.length);

// // for(let i = 0; i < random.length; i++) {
// //     console.log(random[i])
// // }

// console.log('')
// //2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// let myNames = ['Sam', 'Tommy', 'Tim']

// console.log(myNames[2])
// //a.	Use a loop to iterate through the array
//  //and calculate the average number of letters per name. Print the result to the console.

//  //what do i need to do to calc average
//  //to add every element

// let sum = 0;

// // for(let i = 0; i < myNames.length; i++) {
// //     console.log(myNames[i].length)
// //     sum += myNames[i].length
// //     sum = sum + myNames[i].length
// // }


// //create a variable with an array of numbers






let numberArray = [100, 100, 100];//creating array of numbers and assigning to a variable


let total = 0;//this is my starting total so I can add elements of the array to total

//for loop to iterate through numberArray
for(let i = 0; i < numberArray.length; i++) {
    total = total + numberArray[i]; //adds each iteration (number) to the total
}

let average = total / numberArray.length; //average calc by total / number of elements in array
console.log(average)