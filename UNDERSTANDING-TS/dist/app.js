"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Emilio', hobbies: ['sports'] }, { age: 1117 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['gardening', 'reading', 'burgling']));
function extractAndConvert(obj, key) {
    return 'value:' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        ;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Mike');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
//# sourceMappingURL=app.js.map