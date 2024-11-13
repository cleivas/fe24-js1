function getSum(x, y){
    return x+y;
}

console.log( getSum(20, 5) );
const sum = getSum(10, 8);

console.log(sum);

// En funktion som skapar och returnerar ett DOM-element
function createElement(type, text){
    const el = document.createElement(type);
    el.innerText = text;
    // console.log(el)
    return el;
}

const newElement = createElement('h1', 'mitt element');
console.log(newElement);
// console.log(el)


function appendChildToParent(parent, child){
    parent.append(child);
}

appendChildToParent(document.body, newElement);


appendChildToParent( document.body, createElement('p', 'Utan variabel') );



function getWelcomeMessage(user, isReturningUser){

    const message = isReturningUser ? `Welcome back, ${user}!` : `Welcome, ${user}!`; 

    return message;
}

const welcomeMessage = getWelcomeMessage('Thea', true);
console.log(welcomeMessage)

const welcomeElement = createElement('h3', welcomeMessage);
console.log(welcomeElement);

appendChildToParent(document.body, welcomeElement);


// Uppgift 1 - definiera en funktion som har två parametrar som ska vara numbers och som returnerar produkten av dem;


// Uppgift 2 - definiera en funktion som har en parameter som ska vara ett number 
//och som returnerar true om argumentet är ett udda nummer och false om det är jämnt

function getProduct(x, y){
    return x*y;
}

console.log( getProduct(2, 6));
console.log( getProduct(32, 231));

function isOdd(x){
    // const result = x%2==0 ? false : true;
    // return result;
    return !(x%2==0);
}

console.log( isOdd(7))
console.log( isOdd(6))