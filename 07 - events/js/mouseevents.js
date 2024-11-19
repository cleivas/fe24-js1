// 
const btns = document.querySelectorAll('#buttons button');

btns[0].addEventListener('click', response )
btns[1].addEventListener('click', response )
btns[2].addEventListener('click', response )

function response(event){
    console.log('knappen klickades!');
    console.log(event.target); //Elementet som klickades

    const h1 = document.querySelector('h1');
    h1.innerText = event.target.innerText;
}

// ändra bakgrundsfärg vid hover med mousteenter och mouseleave
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

// mousemove
const mousemoveDiv = document.querySelector('#mousemove');
mousemoveDiv.addEventListener('mousemove', changeColor);

function changeColor(event){
    //Använd musens x-position (event.clientX) för att bestämma bakgrundsfärgen
    const hue = event.clientX * 0.5; 
    console.log(hue);
    event.target.style.backgroundColor = `hsl(${hue}, 70%, 80%)`;
}