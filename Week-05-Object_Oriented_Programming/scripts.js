class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
    calcAge(){
        let date = new Date();
        console.log(date.getFullYear())
        return date.getFullYear() - this.birthYear;
    }
}


let person1 = new Person('Kristina', 1990)
let person2 = new Person('Victoria', 1989)
console.log(person1, person2)

console.log(person1.calcAge());
console.log(person2.calcAge())