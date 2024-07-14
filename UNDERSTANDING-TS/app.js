// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// person.role.push('admin');
// person.role[1]=10;
person.role = [0, 'admin'];
var favoriteActivities;
//string[], conveys that we want to return an array with a specific type, i.e., strings
//use any[] to have a mixed types array
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
