class Department {
    name: string;
    private employees: string[] = [];

    constructor(n: string){
        this.name = n;
    }
    //constructor is a reserved keyword
    //this is a function tied to this class and to any object you create from this class that will be executed when the object is created.
    describe(this: Department){
        console.log('Department' + this.name);
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

const accounting = new Department('Accounting');
//this will create a JavaScript object

accounting.addEmployee('max');
accounting.addEmployee('emilio');

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {describe: accounting.describe}

// accountingCopy.describe()