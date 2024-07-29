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