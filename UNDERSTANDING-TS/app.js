function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
//this function has a return type of "void", i.e., it doesn't return anything
printResult(add(5, 12));
function printResult2(num) {
    console.log('Result: ' + num);
    return;
}
//undefined is a valid type in typescript if you enter a return statement without returning an actual value
printResult2(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
