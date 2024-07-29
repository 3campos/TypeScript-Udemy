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
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

//type guards are used to check if a property or method exists before you try to use it or if you can do something with the type before you try to do it.

//discriminated union - a pattern which you can use when working with union types that makes implementing type guards easier. It's available when you work with object types. 
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch(animal.type){
        case 'bird':
        speed = animal.flyingSpeed;
        break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10})

//type casting
//type casting helps you convey to typescript that some value is of a specific type where typescript is unable to detect it on its own

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
//^the commented out version is not a React friendly version of type casting but the next line is React friendly.
//the "as HTMLInputElement" ("as <type>") code is an example of type casting. Type casting signals to TypeScript that the preceding expression will yield a value of the written type. In this case, the preceding expression will yield a value for an HTMLInputElement type.
//The "!" will convey to TypeScript the preceding expression will never yield null.

userInputElement.value = "Hi there!";

//alternatively written type casting when you're not sure whether the expression will not return null, you can use an if check instead of the ! operator.
const userInputElement2 = document.getElementById('user-input');

if(userInputElement2){
    (userInputElement2 as HTMLInputElement).value = "Hi there!";
}