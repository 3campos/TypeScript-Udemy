// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
//     //role is a tuple. Dictates the number of elements with specific types in an array.
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

const ADMIN = 0;
const READ_ONLY =1;
const AUTHOR=2;

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};


// person.role.push('admin');
// person.role[1]=10;

// person.role=[0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
//string[], conveys that we want to return an array with a specific type, i.e., strings
//use any[] to have a mixed types array

console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === ADMIN){
    console.log('is admin');
}