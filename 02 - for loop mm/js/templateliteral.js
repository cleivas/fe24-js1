const animal = 'hund';
const name = 'Jon Jones';

const sentence = `Min ${animal} heter ${name}`;
console.log(sentence);

const age = 3;
const sentence2 = `${name} är ${age*7} hundår gammal`;
console.log(sentence2);

// HSL
const h1 = document.querySelector('h1');

const hue = 200;
const hueBack = 200;

h1.style.color = `hsl(${hue}, 80%, 20%)`;
h1.style.backgroundColor = `hsl(${hueBack}, 80%, 80%)`;

// Lägg till en massa h1-element, gör så att bakgrundsfärgen skiftar sm regnbåge
for(let i=0; i<50; i++){

    const newH1 = document.createElement('h1');
    document.body.append(newH1);
    const newHue = 0 + i*20;

    newH1.innerText = `Element #${i+1} with hue ${newHue}`;

    newH1.style.backgroundColor =`hsl(${newHue}, 80%, 80%)`;
}