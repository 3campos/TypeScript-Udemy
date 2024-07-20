let userInput: unknown;
//we use unknown when we don't know what type the user will enter.
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string'){
userName=userInput
}

//the never type
//never types are intended to never return anything
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

const result = generateError('An error occurred!', 500);
console.log(result);