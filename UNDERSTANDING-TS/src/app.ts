// const names: Array<string> = [];
// //^this is the same as const names: string[] = [], but the above is a generic type.

// const promise: Promise<any> = new Promise((resolve, reject) => {
// setTimeout(()=> {
//     resolve('This is done');
// }, 2000)
// });

// promise.then(data => {
//     data.split('')
// })

//generic types help you get additional type information if you have a complex class or function

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// console.log(merge({name:'Emilio'}, {age: 1117}))

const mergedObj = merge({name:'Emilio', hobbies:['sports']},  {age: 1117});
console.log(mergedObj.age)

interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1){
        descriptionText = 'Got 1 element';
    } else if (element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements.';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe(['gardening', 'reading', 'burgling']));

function extractAndConvert<T extends object, U extends keyof T> (obj: T, key:U){
    return 'value:' + obj[key]
}

console.log(extractAndConvert({name: 'Max'}, 'name'))