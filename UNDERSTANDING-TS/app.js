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
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};
// person.role.push('admin');
// person.role[1]=10;
// person.role=[0, 'admin'];
var favoriteActivities;
favoriteActivities = ['Sports'];
//string[], conveys that we want to return an array with a specific type, i.e., strings
//use any[] to have a mixed types array
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === ADMIN) {
    console.log('is admin');
}
