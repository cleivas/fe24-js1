console.log( document.querySelector('h2') );


console.log( document.querySelector('.art-2 h2') );

console.log( document.querySelectorAll('h2'));

// Hämta och logga knappen under water
console.log( document.querySelector('.art-3 button') )
console.log( document.querySelectorAll('button')[2] )


// Ändra på element

// Byt text på första a-elementet
document.querySelector('a').innerText = "FE24";

// document.querySelector('div').innerText = '<h1>Nytt h1 element</h1>';

// document.querySelector('div').innerHTML = '<h1>Nytt h1 element</h1>';

// Använd endast av pedagogiska syften eller om det inte går att göra på annat sätt. Annar använder du klasser för att ändra på styling
document.querySelector('h2').style.color = 'hotpink';

//Ändrar src-attributet på det tredje img-elementet till en bild på Nick Cage
document.querySelectorAll('img')[2].src = "https://cdn.mos.cms.futurecdn.net/KG7kYHyteTset4EW6MqxV-650-80.jpg";


// Lägg till ta bort klasser
document.querySelector('nav').classList.add('bg-red' )
document.querySelector('div').classList.remove('wrapper');