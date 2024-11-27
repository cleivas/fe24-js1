const jsonString = `{"name":"Marcela", "age":52}`;

console.log(typeof jsonString);
// console.log(jsonString.name);//får ej göra så pga är inte ett objekt

const obj = JSON.parse(jsonString);
console.log(obj);
console.log(obj.name);


console.log( JSON.stringify(obj))