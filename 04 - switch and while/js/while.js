let randomNumber = Math.random();


while(randomNumber>=0.1){
    console.log(randomNumber);
    randomNumber = Math.random()
}

// Dåligt exemple på hur man vill använda while
let i=10;
while(i<10){
    console.log(i);
    i++;
}

// Kodblocket tolkas alltid minnst en gång även om mitt condition är falskt första gången
let j=5;
do{
    console.log(j);
    j++;
}while(j<5)

