//intersection types

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee extends Employee, Admin {}
//you could use instead interfaces instead of types by using the "interface" label before Admin and Employees and use an interface to extend both Employee and Admin. However this results in more code than intersection typing.

type ElevatedEmployee = Admin & Employee;
//this is an example of an "intersection" type. An intersection type dictates that the intersection type must have the object types that it's defined with. E.g., An ElevatedEmployee object must be comprised with the properties of the Admin object type and the Employee object type.

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

//you can also use intersection types with other types (besides object types), such as union types, like below
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
//Universal is an intersection type
//typescript sees that Universal is of type number

//The intersection operator can be used with any types and it then builds the intersection of these types. In the case of union types, the intersection is between the types that they have in common. In the case of object types, it is the combination of the object properties of those object types.

//type guards
//typeof type guard
function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        //^this is called a type guard using typeof
        return a.toString() + b.toString()
    }
    return a + b;
}

//another type guard example: the "in" type guard
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp:UnknownEmployee){
    console.log('Name: ' + emp.name);
    if ('privileges' in emp){
        //^this is javascript code that lets us check if privileges is a property in the employee object
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp){
        //^this is javascript code that lets us check if startDate is a property in the employee object
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);

//another type of type guard: the instance of type guard
class Car {
    drive() {
        console.log('Driving ...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount:number){
        console.log('Loading cargo ' + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if('loadCargo' in vehicle){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);