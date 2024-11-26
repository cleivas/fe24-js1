let primitive1 = 10;
let primitive2 = primitive1;
console.log(primitive1, primitive2)

primitive2 = 0;
console.log(primitive1, primitive2);

let nonPrimitive1 = {
    prop: 10
}
let nonPrimitive2 = nonPrimitive1;
console.log(nonPrimitive1, nonPrimitive2);

nonPrimitive1.prop = 0;
console.log(nonPrimitive1, nonPrimitive2);

// Klona objekt

let np1 = {
    prop: 1
}
let np2 = {};

Object.assign(np2, np1);
np2.prop = 100;
console.log(np1, np2);


// Const vs let 
const obj1 = {
    p1: 'property 1 obj 1'
}

let obj2 = { 
    p1: 'property 1 obj 2'
}

obj1.p1 = 'new prop';
console.log(obj1)
// obj1 = {newObj: 'test'};

obj2.p1 = 'new prop'
obj2 = {newObj: 'test'};
console.log(obj2)