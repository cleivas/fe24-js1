const form = document.createElement('form');
const btn = document.createElement('button');
btn.innerText = 'submit';

form.addEventListener('submit', event =>{
    event.preventDefault();

    const selectValue = document.querySelector('select').value;
    const radioValue = document.querySelector(`input[type="radio"]:checked`).value
    console.log( radioValue, selectValue)

    
    // console.log(form.querySelectorAll('input'));
    // for(const input of form.querySelectorAll('input')){
    //     console.log(input.checked)
    //     if(input.checked) console.log(input.value)
    // }
})

const genres = {
    text: ['Action', 'Drama', 'Sci-Fi'],
    values: ['act', 'dra', 'sci']
}

const select = document.createElement('select');


for(let i=0; i<genres.text.length; i++){
    const option = document.createElement('option');
    option.innerText = genres.text[i];
    option.value = genres.values[i];
    select.append(option);
}

for(let i=0; i<genres.text.length; i++){
    const radioInput = document.createElement('input');
    const label = document.createElement('label');

    radioInput.type = 'radio'
    radioInput.id = genres.values[i]
    radioInput.value = genres.values[i]
    radioInput.name = 'radioGenre'

    label.innerText = genres.text[i];
    label.htmlFor = genres.values[i]; //lägger till for-attributet

    form.append(radioInput, label);
}

form.append(select, btn);
document.body.append(form);

