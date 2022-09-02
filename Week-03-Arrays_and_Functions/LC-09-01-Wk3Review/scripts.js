console.log("\nQuestion 2:");
// 2.   Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names)
console.log("Length of names array: ", names.length)

// a.   Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

let lettersInNames = 0; 

for(let i = 0; i < names.length; i++) {
    //print each iteration
    console.log("Index #: ",i, "name:", names[i]);
    console.log("Index #: ", i, " count: ", names[i].length);
    lettersInNames = lettersInNames + names[i].length;
    console.log("Length of the name",lettersInNames)
}
console.log("Sum of letters in names array: ", lettersInNames)
//take average
let average = lettersInNames / names.length;
console.log("average letters in names array: ", average)



// b.   Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
console.log(names);
let concatenatedNames = "";
console.log(concatenatedNames)

for(let i = 0; i < names.length; i++) {
    console.log("each name: ", names[i]);
    concatenatedNames = concatenatedNames + names[i] + " ";
}
console.log("Concat names: ", concatenatedNames)


console.log("\nQuestion 5:");
// 5.   Create a new array called nameLengths.
//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

let nameLengths = [];
console.log(nameLengths)

for(let i = 0; i < names.length; i++) {
    console.log("name ", names[i]);
    console.log("letter count:", names[i].length);
    nameLengths.push(names[i].length);
}
console.log("Pushed sum of letters of each name to nameLengths: ", nameLengths)

console.log("\nQuestion 6:");
// 6.   Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let total = 0;
for(let i = 0; i < nameLengths.length; i++) {
    console.log("nameLengths", nameLengths[i]);
    total = total + nameLengths[i];
}
console.log("sum of nameLengths array: ", total)

console.log("\nQuestion 9:");

// 9.   Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.


let arr1 = [100, 200, 300, 400];
let arr2 = [0, 100, 20, 10, 30];

function sumArray(array, array2) {
    //we need a for loop to iterate

    let sumOfNumbers = 0;

    for(let i = 0; i < array.length; i++) {
        console.log("printing all numbers of array: ",array[i]);
        sumOfNumbers = sumOfNumbers + array[i];
        //0 = 0 + 100
        //100 = 100 + 200
        //300 = 300 + 300
    }
    console.log("sum of all numbers in array", sumOfNumbers)
    //we need to get sum of all elements in our array
    
    let sumOfNumbers2 = 0;
    for(let i = 0; i < array2.length; i++) {
        console.log(array2[i]);
        sumOfNumbers2 = sumOfNumbers2 + array2[i];
    }
    console.log('sum of all numbers in second array: ', sumOfNumbers2);


    //condition to test if array is greater than array2 (sum)
    if(sumOfNumbers > sumOfNumbers2) {
        return 'arr1 array is greater than arr2 array'
    } else {
        return 'arr2 array is greater than arr1 array'
    }


}
console.log(sumArray(arr1, arr2));




console.log("\nQuestion 10:");
// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.

console.log("\nQuestion 11:");
// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
