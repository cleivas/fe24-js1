// minFunktion('Meddelande'); //Meddelande
// minFunktion('Nytt meddelande'); // Nytt meddelande

const minFunktion = function(m){
    console.log(m);
}

console.log( minFunktion ); // 
console.log( typeof minFunktion ); //



// Higher order and callback
function higherOrderFunc( callback ){
    console.log('higher order');
    callback();
}

function callbackFunc(){
    console.log('callback');
}

// callbackFunc();
higherOrderFunc( callbackFunc );

// Vi har en array med nummer som vi behöver göra olika beräkningar på
const numbers = [1, 3, 4, 6, 3, 34, 645, 45];


// Lösning Utan higher order 
function doubleNumbers(arr){
    const newArr = [];
    
    for(let i=0; i<arr.length; i++){
        newArr[i] = arr[i]*2;
    }
    return newArr;
}

const doubleArr = doubleNumbers(numbers);
console.log(doubleArr)


function halfNumbers(arr){
    const newArr = [];
    
    for(let i=0; i<arr.length; i++){
        newArr[i] = arr[i]/2;
    }
    return newArr;
}

const halfArr = halfNumbers(numbers);
console.log(halfArr)


// Lösning med higher order
// En higher order funktion som loopar igenom en array och utför en beräkning
// Några små callbackfunktioner som endast utför beräkningen på numret 

function doubleNumber(x){
    return x*2;
}
function halfNumber(x){
    return x/2;
}

function makeCalculationOnNumberArray(arr, calculateNumberFunc){

    const newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr[i] = calculateNumberFunc(arr[i]);
    }

    return newArr;
}

const doubleArr2 = makeCalculationOnNumberArray(numbers, doubleNumber)
console.log(doubleArr2)
const halfArr2 = makeCalculationOnNumberArray(numbers, halfNumber)
console.log(halfArr2)

