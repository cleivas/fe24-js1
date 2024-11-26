const animalObj = {
    type: 'Zebra',
    numberOfLegs: 4,
    color: 'black and white',
    hasTail: true,
    speak(name){
        console.log(`Hello ${name}, I want funny grass!`)
    },
    run: ()=>{
        console.log('I am running');
    }
};

console.log(animalObj)
console.log( animalObj.type );
console.log( typeof animalObj.type );
console.log( typeof animalObj);
console.log(animalObj.hasTail);

console.log(animalObj.newProp)
animalObj.numberOfLegs = 3;
console.log(animalObj)

animalObj.hashTail = false;
console.log(animalObj)

// domEl.innertext
animalObj.speak('Lareb');
animalObj.speak('Leon');
animalObj.run();

// Komplexa objekt
const outerObj = {
    innerObj: {
        innerArray: [
            {
                p1: 'something in first array object'
            },
            {
                p1: 'something in second array object'
            }
        ]
    }
}
// Målet är att logga 'something in second array object'

console.log(outerObj);
console.log(outerObj.innerObj);
console.log(outerObj.innerObj.innerArray);
console.log(outerObj.innerObj.innerArray[1]);
console.log(outerObj.innerObj.innerArray[1].p1);

