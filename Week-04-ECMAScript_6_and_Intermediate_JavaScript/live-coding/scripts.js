
console.log
let foodTrucks = [
    {
        name: 'Taco Mania',
        mainFood: 'Tacos',
        city: 'Long Beach',
        state: 'California'
    },

    {
        name: 'Sushi Heaven',
        mainFood: 'Sushi',
        city: 'Redondo Beach',
        state: 'California'
    },
    {
        name: 'The Best Pizza Ever',
        mainFood: 'Pizza',
        city: 'New York City',
        state: 'New York'
    }
];




//Function that has some if statements 
//if statement when the state is 'california'
//if it is, console.log state

// function getState(data) {
//     for(let i = 0; i < data.length; i++) {
//         //console.log(data[i])

//         //if statement
//         if(data[i].state == 'California') {
//             console.log('I found food truck(s) in CA. Here are the details:')
//             console.log(data[i])
//         } else {
//             console.log('I cannot locate a food truck in CA. Here are the details:')
//             console.log(data[i])
//         }
//     }

// }

// getState(foodTrucks)


//function that gets names that start with 'T'

const trucksT = [];//empty array 

function getLetterT(data) {
    for(let i = 0; i < data.length; i++) {
        //we want to check for first letter 'T' (name)
        if(data[i].name[0] == 'T' || data[i].name[0] == 't' ){
            trucksT.push(data[i].name)
            console.log('Found the letter t in name', data[i].name)
        } else {
            console.log('Cannot locate t as the first letter in any name')
            console.log(data[i].name)
        }
        //put that value in a different array
    }
}

getLetterT(foodTrucks)

console.log(trucksT)

console.log(10 % 3)