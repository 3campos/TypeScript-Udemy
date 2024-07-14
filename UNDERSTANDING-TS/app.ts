// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
//string[], conveys that we want to return an array with a specific type, i.e., strings
//use any[] to have a mixed types array

console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby)
}