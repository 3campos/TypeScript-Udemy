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

