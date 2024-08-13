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
console.log(extractAndConvert({ name: 'Max' }, 'name'));
//# sourceMappingURL=app.js.map