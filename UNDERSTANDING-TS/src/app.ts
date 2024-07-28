interface Greetable {
    name: string;
    
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