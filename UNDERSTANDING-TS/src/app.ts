class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = [];
    //protected means that this class is available to classes that inherit this class or i.e., to classes that extend this base class. protected also means that this function is not available otherwise.

    constructor(private readonly id: string, public name: string){
        // ^shorthand initialization for fields
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

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}
//you can only inherit from one class
//you have to use "super" whenever you add a constructor to a class that inherits from another class

const it = new ITDepartment('d1', ['Emilio']);
//this will create a JavaScript object

it.addEmployee('max');
it.addEmployee('emilio');

it.describe();
it.printEmployeeInformation();

// const itCopy = {describe: it.describe}

console.log(it);

// itCopy.describe()

class AccountingDepartment extends Department{
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error ('No report found.');
    }

    set mostRecentReport(value:string) {
        if (!value){
            throw new Error('please pass in a valid value!');
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports)
    }
}

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Emilio');

accounting.printReports()
accounting.printEmployeeInformation();