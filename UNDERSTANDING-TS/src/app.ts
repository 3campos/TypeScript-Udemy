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

extractAndConvert({name: 'Max'}, 'name')

class DataStorage <T extends | string | number | boolean>{ 
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        };
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Mike');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number> ();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'}
// objStorage.addItem({name: 'Max'})
// objStorage.addItem({name: 'Manu'})
// objStorage.removeItem(maxObj)
// console.log(objStorage.getItems());