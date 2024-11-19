// function square(x){
//     return x*x;
// }

// const square = function(x){
//     return x*x;
// }

// const square = (x) => {
//     return x*x;
// }

const square = x => x*x;
console.log( square(10) );

// Anonym funktion
(function(){

    console.log('min anonyma funktion');
})();


// använda anonyma funktioner och arrowfunktioner som callbackfunktioner
function calcNumberArray(arr, calcNumberFunc){

    const newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr[i] = calcNumberFunc(arr[i]);
    }

    return newArr;
}
const numbers = [3,2, 5, 65,24, 3];


let newArray = calcNumberArray(numbers, function(number){
    return number*number;
})

newArray = calcNumberArray(numbers, x=>x*x);
console.log(newArray);

// Längre arrowfunctions
const add = (x,y) => x+y;
console.log(add(1, 2))

const logSomething = x => console.log(x);
logSomething('test');
console.log(logSomething('test igen'))

const displayX = x => {
    const h1 = document.createElement('h1');
    h1.innerText = x;
    document.body.append(h1);
}

displayX('X');
console.log(displayX('X'));