const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const textInput = document.querySelector('input')
    console.log( textInput.value );

    // Istället för att byta ut texten på p elementet
    // Lägg till ett nytt element vid varje submit, där innerText = textInputens value
    // Lägg till p-elementet i diven med id:t 'container'

    const pEl = document.createElement('p');    
    pEl.innerText = textInput.value;

    document.querySelector('#container').append(pEl);

    form.reset();
} 