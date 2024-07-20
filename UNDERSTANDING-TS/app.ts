let userInput: unknown;
//we use unknown when we don't know what type the user will enter.
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string'){
userName=userInput
}
