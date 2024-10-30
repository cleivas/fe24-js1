let age = 37;
console.log(age)

age = 38;
console.log(age)

// age = 'thirtynine';
// console.log(age);

const firstName = 'Clara';
console.log(firstName);

// firstName = 'Ali';

console.log(age+age);
console.log(age+firstName);

// DOM
let aEl = document.querySelector('a');
console.log(aEl);

aEl.style.color = 'skyblue';
aEl.innerText = 'NY TEXT';

console.log( typeof aEl);

// Lägga till ett a-element till nav-elementet

// skapa elementet
const navAEl = document.createElement('a');
console.log(navAEl)

// Hämta elementet där a-elementet ska läggas till
const navEl = document.querySelector('nav');
console.log(navEl);

// lägg till a till nav
navEl.appendChild( navAEl );


// Lägg till textinnehåll
navAEl.innerText = 'HOME';

// Ta bort loggan
const imgEl = document.querySelector('img');
imgEl.remove();