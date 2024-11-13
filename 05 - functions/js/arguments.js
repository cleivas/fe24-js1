function logSomething(something){
    // console.log(something, typeof something == 'string');

    if(typeof something == 'string') console.log(something);
    else console.log('Wrong datatype, please enter a string.')
}

logSomething();
let test;
console.log(test)


logSomething(333);
logSomething('Lite text');

function createElement(type = 'h1', text = 'Lorem ipsum'){
    const el = document.createElement(type);
    el.innerText = text;

    document.body.append(el);
}

createElement('p', 'ett p element');
createElement('h1', 'ett h1 element');
// createElement(undefined, 'ett h1 element');
createElement();
createElement('h5');
createElement(undefined, 'Ny text!');

// Utgå från createListWithRandomRed
// Men när funktionen anropas ska man kunna bestämma hur många li-element som ska finnas och vilket av dem som ska vara rött
function createListWithRedItem(numbersOfItems, redItem){
    // redItem-=1;

    const ol = document.createElement('ol');
    document.body.append(ol);
    
    for(let i=0; i<numbersOfItems; i++){
        const li = document.createElement('li');
        ol.append(li);
        
        if( (redItem-1) == i) li.style.color = 'red';
    }
}

createListWithRedItem(3, 1);
createListWithRedItem(23, 10);

function noParams(){
    const arr = [2, 3, 4, 5, 5];

    // För att visa att det är skilnnad på arrayer och på Arguments
    console.log(arr)
    console.log(arguments);

    for(const arg of arguments){
        console.log(arg)
    }

    for(let i=0; i<arguments.length; i++){
        console.log(arguments[i])
    }
}

noParams(2, 3, 4, 'text');
noParams('ett argument');

// Använd er av arguments
// Varje argument ska vara ett item i en Ordered List

// createList('Clara', 'Younes', 'Matti');
// 1. Clara
// 2. Younes
// 3. Matti

function createList(){
    const ol = document.createElement('ol');
    document.body.append(ol);

    for(let i=0; i<arguments.length; i++){
        const li = document.createElement('li');
        ol.append(li);
        li.textContent = arguments[i];
    }
}

createList('Clara', 'Younes', 'Matti');
createList('Clara', 'Younes', 'Matti', 'Mehdi', 'Leon', 'Abdulle');

