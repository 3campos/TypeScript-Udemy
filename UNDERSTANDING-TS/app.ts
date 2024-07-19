function add(n1: number, n2: number) {
    return n1+n2;
}

function printResult(num: number){
    console.log('Result: ' + num)
}
//this function has a return type of "void", i.e., it doesn't return anything

printResult(add(5,12))