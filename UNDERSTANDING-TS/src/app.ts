class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];
    //private (verbiage: "making employees a private property") entails that a method or property can only be modified by calling on a function or method contained within the class. This prevents the manipulation of objects by direct assignment, for example.

    constructor(private readonly id: string, public name: string){
        // ^shorthand initialization
        // this.id = id;
        // this.name = n;
    }
    //constructor is a reserved keyword
    //this is a function tied to this class and to any object you create from this class that will be executed when the object is created.
    describe(this: Department){
        console.log(`Department(${this.id}): ${this.name}`);
        //what "this" in this.name is doing: when describe is executed, "this" refers to an instance that is based on the department class.
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('d1', 'Accounting');
//this will create a JavaScript object

accounting.addEmployee('max');
accounting.addEmployee('emilio');

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {describe: accounting.describe}

// accountingCopy.describe()