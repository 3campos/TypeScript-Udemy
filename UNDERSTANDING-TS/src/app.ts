// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
    //this is an example of an anonymous function in an interface
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2
}
interface Named {
    readonly name: string;
}

interface Greetable extends Named {    
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n:string){
        this.name = n;
    }

    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Emilio')

user1.greet('Hi there - I am')
console.log(user1)

//an interface is used to desccribe the structure of an object but we can only define the structure, not the concrete values. E.g., I cannot write "name: string = 'Emilio'" but I can write "name: string" in the "Person" interface.