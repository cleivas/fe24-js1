for(let i=0; i<5; i++){
    console.log(i);
}
// logga 10, 9, 8 ... 1
for(let i=10; i>0; i-- ){
    console.log(i);
}

console.log('----')
// logga 0, 5, 10, 15 ... 50
for(let i=0; i<51; i+=5 ){
    console.log(i)
}

let x = 0;
x+5;
x+5;
x+5;
x+5;
console.log(x)
x+=5;
x+=5;
x+=5;
x+=5;
x=x+5;
console.log(x)

// Skapa 10 h1-element där texten ska gå från 1 till 10
for(let i=0; i<10; i++){
    const h1El = document.createElement('h1');
    document.body.appendChild(h1El);
    h1El.innerText = i+1;
}


// skapa en numrerad lista med 5 punkter där texten för varje punkt ska vara 5, 4, 3, 2, 1

// 1. 5
// 2. 4
// 3. 3
// 4. 2
// 5. 1

const olEl = document.createElement('ol');
document.body.append(olEl);
// for(let i=0; i<5; i++){
//     const liEl = document.createElement('li');
//     olEl.append(liEl);
//     liEl.innerText = 5-i;
// }

for(let i=5; i>0; i--){
    const liEl = document.createElement('li');
    olEl.append(liEl);
    liEl.innerText = i;
}

// appendChild(element)
// append(element1, element2, element3 ..)

// FÖRKLARA DEFER