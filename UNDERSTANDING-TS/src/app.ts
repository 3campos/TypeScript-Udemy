const userName = 'Max';

// let age = 30;
// age = 29;

// function add(a: number, b: number){
//     let result;
//     result = a + b
//     return result;
// }

// if (age>20){
//     let isOld = true;
// }

// console.log(isOld)

// const add = (a: number, b: number = 1) => a + b;
//default arguments like "=1" for parameter "b", must be last in the parameter list.

// console.log(add(2, 5))

// const printOutput: (a: string | number ) => void = output => console.log(output);

// const button = document.querySelector('button')

// if (button){
//     button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies]

activeHobbies.push(...hobbies);
// you can use the spread operator to add the individually listed elements of an array to another array by:
// (1) adding the spread operator within another array like on line 34
// (2) using the push method in combination with the spread operator that references the array you want to obtain elements from

const person = {
    firstName: 'Emilio',
    age: 30
};

const copiedPerson = { ...person };
//the spread operator can also be used to add a list of key-value pairs from one object to another

//rest parameters example. Rest parameters are used to accept an unlimited amount of arguments
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers = add(5, 10, 2, 3.7)
console.log(addedNumbers)

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
//array destructuring works by pulling elements out of an array based on their positioning, so, you can name each targeted element as you see fit like I've done here: hobby1, hobby2.
console.log(hobbies, hobby1, hobby2);

const {firstName, age} = person;
//object destructuring works by pulling elements out of an object by their key name, not by their positioning. However, you can used a JavaScript-based override to override the key by adding a colon, like so: "firstName: userName"

console.log(firstName, age , person)