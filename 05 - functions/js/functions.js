
logSomething();
logSomething();
logSomething();
logSomething();
logSomething();


createH1();
createListWithRandomRed();
createH1();
createH1();
createH1();

createListWithRandomRed();

// Detta fungerar ej
// console.log(test)
// const test = 1;



function logSomething(){
    console.log('I am logging something');
}
// Skapa en lista med 5 punkter, där en random punkt är röd

function createListWithRandomRed(){
    
    const ol = document.createElement('ol');
    document.body.append(ol);
    
    // ett random nummer från 0 till 9
    const randomIndex = Math.floor(Math.random() * 10);
    
    for(let i=0; i<10; i++){
        const li = document.createElement('li');
        ol.append(li);
        
        if(randomIndex == i) li.style.color = 'red';
    }
}

function createH1(){
    const h1 = document.createElement('h1');
    h1.innerText = 'H1 created';
    document.body.append(h1);
}