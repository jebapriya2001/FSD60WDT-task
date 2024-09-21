function compareObjects(obj1, obj2) {
    const obj1Keys = Object.keys(obj1).sort();
    const obj2Keys = Object.keys(obj2).sort();

    if (obj1Keys.length !== obj2Keys.length || !obj1Keys.every((key, index) => key === obj2Keys[index])) {
        return false;
    }
    return obj1Keys.every(key => obj1[key] === obj2[key]);
}

let obj1 = {name: "person 1", age: 5};
let obj2 = {age: 5, name: "person 1"};
console.log(compareObjects(obj1, obj2)); 