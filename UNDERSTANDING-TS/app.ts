function add(n1: number, n2: number) {
    return n1+n2;
}

function printResult(num: number){
    console.log('Result: ' + num)
}
//this function has a return type of "void", i.e., it doesn't return anything

printResult(add(5,12))

function printResult2(num: number): undefined{
    console.log('Result: ' + num)
    return;
}
//undefined is a valid type in typescript if you enter a return statement without returning an actual value
printResult2(add(5,12))

let combineValues: (a: number, b: number) => number;
//combineValues should accept any fn that takes 2 parameters, where each parameter is a number and where the function overall returns a number
//the add function comports with the definition of combineValues (a:number, b: number) => number

combineValues = add;
// combineValues = 5;

console.log(combineValues(8,8))