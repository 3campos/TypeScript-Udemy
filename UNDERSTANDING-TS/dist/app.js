"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`Department(${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const employee1 = Department.createEmployee('new Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Emilio']);
it.addEmployee('max');
it.addEmployee('emilio');
it.describe();
it.printEmployeeInformation();
console.log(it);
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('please pass in a valid value!');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Emilio');
accounting.printReports();
accounting.printEmployeeInformation();
//# sourceMappingURL=app.js.map