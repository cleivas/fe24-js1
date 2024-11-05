const colors = ['hotpink', 'aliceblue', 'antiquewhite', 'aqua', 'limegreen', 'lightgray', 'purple' ];

console.log(colors);
console.log(colors[3]);
console.log(colors.length);

for(let i=0; i<colors.length; i++){
    console.log(colors[i]);
}

// For of loop, for each element of an array
console.log('----- for of --------')
for(const color of colors){
    console.log(color);
}

for(const color of colors){
    const h1 = document.createElement('h1');
    h1.innerText = color;
    h1.style.color = color;

    document.body.append(h1);
}

const animals = ['elephant', 'horse', 'goat', 'owl', 'cat', 'turtle'];

// Skriv ut alla djur på webbsidan, valfritt element
// Var tredje djur ska ha en border, valfri
// horse ska ha brun bakgrundsfärg
// Turtle ska ha grön bakgrundsfärg

// Bestäm om du använder for eller for of och var du behöver if-statements

for(let i=0; i<animals.length; i++){
    const pEl = document.createElement('p');
    pEl.innerText = animals[i];

    document.body.append(pEl);

    if(i%3==2){
        pEl.style.border = '1px solid black';
    }
    
    if(pEl.innerText == 'horse'){
        pEl.style.backgroundColor = 'brown';
    }
    else if(pEl.innerText == 'turtle'){
        pEl.style.backgroundColor = 'green';
    }
}

// for(const animal of animals){
//     const pEl = document.createElement('p');
//     pEl.innerText = animal;

//     document.body.append(pEl);

//     if(animals.indexOf(animal)%3==2){
//         pEl.style.border = '1px solid black';
//     }
    
//     if(pEl.innerText == 'horse'){
//         pEl.style.backgroundColor = 'brown';
//     }
//     else if(pEl.innerText == 'turtle'){
//         pEl.style.backgroundColor = 'green';
//     }
// }

for(let i=0; i<100; i++){
    console.log(i, i/10, i%10);
}