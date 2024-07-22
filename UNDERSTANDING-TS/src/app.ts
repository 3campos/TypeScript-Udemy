const userName = 'Max';

let age = 30;
age = 29;

// function add(a: number, b: number){
//     let result;
//     result = a + b
//     return result;
// }

// if (age>20){
//     let isOld = true;
// }

// console.log(isOld)

const add = (a: number, b: number = 1) => a + b;
//default arguments like "=1" for parameter "b", must be last in the parameter list.

console.log(add(2, 5))

const printOutput: (a: string | number ) => void = output => console.log(output);

const button = document.querySelector('button')

if (button){
    button.addEventListener('click', event => console.log(event))
}

printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies]

activeHobbies.push(...hobbies);
// you can use the spread operator to add the individually listed elements of an array to another array by:
// (1) adding the spread operator within another array like on line 34
// (2) using the push method in combination with the spread operator that references the array you want to obtain elements from

const person = {
    name: 'Max',
    age: 30
};

const copiedPerson = { ...person };
//the spread operator can also be used to add a list of key-value pairs from one object to another