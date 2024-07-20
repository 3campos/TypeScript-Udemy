var userInput;
//we use unknown when we don't know what type the user will enter.
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
//the never type
//never types are intended to never return anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred!', 500);
console.log(result);
