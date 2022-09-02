console.log('Hello World')

//11.	Write a function that takes two arrays of numbers 
//and returns true if the average of the elements in the 
//first array is greater than the average of the elements in the second array.


//we need two array of numbers
//we need to create function 
//function needs to take two arrays of numbers
//we need our function to calculate an average
//we want to check if the first array average is greater than the second (if statement)

let test1 = [1, 2, 3, 4, 5];
let test2 = [5, 6, 10, 20];


// console.log(array1);

//function to calculate average
// function calcAverage(array1, array2) {
//     //need starting total
//     let total1 = 0;
//     let average1 = Math.round();

//     //need a for loop
//     for(let i = 0; i < array1.length; i++) {
//         total1 = total1 + array1[i]
//         //0 = 0 + 0
//         //0 = 0 + 1
//         average1 = total1 / array1.length;
//     }
//     console.log("Array 1 Total: ",total1)
//     console.log("Average of Array 1: ", Math.round(average1))
//     console.log()
    
//     let total2= 0
//     let average2


//     for(let i = 0; i < array2.length; i++) {
//         total2 = total2 + array2[i];
//         average2 = Math.round(total2 / array2.length);
//     }
//     console.log("Array 2 Total: ",total2)
//     console.log("Average of Array 2: ", average2)

//     //conditional statements to compare average 1 and average 2
//     if(average1 > average2) {
//         console.log(true)
//         return true;
//     } else {
//         console.log(false)
//         return false;
//     }

// }

// calcAverage(test1, test2);


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [5, 6, 10, 20];


// function calcAverage(array1, array2){
//     let total1 = 0
//     array1.forEach(element => console.log(total1 = total1 + element))
 

//     let total2 = 0
//     array2.forEach(element => console.log(total2  = total2 + element))
// }

// calcAverage(arr1, arr2)


// let firstName = 'Kristina'

// function greeting(name) { //name is a parameter
//     console.log('Hello,', name); //call on parameter
    
// }
// greeting(firstName)//calling on my function / I am passing 'Kristina' as the argument to my function


let names = ['Kristina', 'Ollie', 'Victoria', 'Sadie'];
let nameLengths = [];
let sum = 0;
let average;
for(let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(sum);
console.log(nameLengths)