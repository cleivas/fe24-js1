let x = 'global';
// console.log(x);

function func(){
    x = 'function';
    let y = 'function Y';
}

func();
// console.log(x);

// y = x; 
// console.log(y);

{
    let a ='a';
    var b = 'b';
    c = 'c';
}

// console.log(b);
// console.log(c);
// console.log(a);

x = 1;
function newFunction(x){
    x+=10;
    // console.log(x)
    // Det inre scopets X har skrivit över yttre scopets x, så det yttre scopet är inte tillgängligt
}

newFunction(x);

//console.log(x); //I det yttre scopet finns inte inre scopets x

function outer(){
    x = 'outer';

    function inner(){
        x = 'inner';
    }
    inner();
}

outer();
console.log(x);


// minFunktion('Meddelande'); //Meddelande
// minFunktion('Nytt meddelande'); // Nytt meddelande

const minFunktion = function(m){
    console.log(m);
}

console.log( minFunktion ); // 
console.log( typeof minFunktion ); //