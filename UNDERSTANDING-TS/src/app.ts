class Department {
    name: string;

    constructor(n: string){
        this.name = n;
    }
    //constructor is a reserved keyword
    //this is a function tied to this class and to any object you create from this class that will be executed when the object is created.
}

const accounting = new Department('Accounting');
//this will create a JavaScript object

console.log(accounting)