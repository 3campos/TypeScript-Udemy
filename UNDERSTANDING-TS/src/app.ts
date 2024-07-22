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