function add(n1: number, n2: number) {
    return n1+n2;
}

function printResult(num: number){
    console.log('Result: ' + num)
}
//this function has a return type of "void", i.e., it doesn't return anything

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    //assigning a void type to the cb function does not prohibit you from returning anything. It just tells you that anything returned by the cb function will not be used by the addAndHandle function.
    const result = n1 + n2;
    cb(result);
}

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

addAndHandle(10, 20, (result) => {
    console.log(result);
});