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
    readonly name?: string;
    outputName?: string;
    //the question mark symbolizes that the outputName value is optional. You can mark methods as optional using an exclamation point.
}

interface Greetable extends Named {    
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?:string){
        // optional parameter added with ?
        if(n){ 
            this.name = n;
        }
    }

    greet(phrase: string){
        if(this.name){
            console.log(phrase + ' ' + this.name);

        } else {
            console.log('Hi!');
        }
    }
}

let user1: Greetable;

user1 = new Person()

user1.greet('Hi there - I am')
console.log(user1)

//an interface is used to desccribe the structure of an object but we can only define the structure, not the concrete values. E.g., I cannot write "name: string = 'Emilio'" but I can write "name: string" in the "Person" interface.