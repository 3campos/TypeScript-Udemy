abstract class Department {
    //abstract classes cannot be instantiated themselves. It's just a class that's there to be inherited from so that the inheriting classes can be instantiated and are forced to provide concrete implementations following the structure outlined in the class.
    static fiscalYear = 2020;
    // static makes this property available without instantiating the class (Department)

    // private id: string;
    // private name: string;
    protected employees: string[] = [];
    //protected means that this class is available to classes that inherit this class or i.e., to classes that extend this base class. protected also means that this function is not available otherwise.

    constructor(protected readonly id: string, public name: string){
        // ^shorthand initialization for fields
        // this.id = id;
        // this.name = n;
    }
    //constructor is a reserved keyword

    static createEmployee(name:string){
        return {name: name};
    }
    //createEmployee is a static method
    
    //this is a function tied to this class and to any object you create from this class that will be executed when the object is created.
    abstract describe(this: Department): void;
        //abstract is a keyword will force inheriting classes to add this method

    
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
    describe(){
        console.log('IT department - Id:' + this.id)
    }
}
//you can only inherit from one class
//you have to use "super" whenever you add a constructor to a class that inherits from another class

const employee1 = Department.createEmployee('new Max');
console.log(employee1, Department.fiscalYear)

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

    describe(){
        console.log('Accounting Department - ID: ' + this.id)
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

// accounting.printReports()
// accounting.printEmployeeInformation();

accounting.describe();