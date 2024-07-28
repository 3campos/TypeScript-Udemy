interface Person {
    name: string;
    age: number;
    
    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Emilio',
    age: 29,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
};

user1.greet('Hi there - I am')

//an interface is used to desccribe the structure of an object but we can only define the structure, not the concrete values. E.g., I cannot write "name: string = 'Emilio'" but I can write "name: string" in the "Person" interface.