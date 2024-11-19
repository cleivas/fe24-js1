// Hämta the event source
const btns = document.querySelectorAll('button');


btns[0].addEventListener('click', response )
btns[1].addEventListener('click', response )
btns[2].addEventListener('click', response )

function response(event){
    console.log('knappen klickades!');
    console.log(event.target); //Elementet som klickades

    // event.target.style.backgroundColor = 'hotpink';

    const h1 = document.querySelector('h1');
    h1.innerText = event.target.innerText;
}

// ändra bakgrundsfärg vid hover


const h2s = document.querySelectorAll('h2');

for( const h2 of h2s){
    h2.addEventListener('mouseenter', event => {
        console.log(event.target.innerText);

        document.body.style.backgroundColor = event.target.innerText;
    });

    h2.addEventListener('mouseleave', event => {
        document.body.style.backgroundColor = 'white';
    });
}