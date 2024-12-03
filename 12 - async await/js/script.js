const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const language = form.querySelector('input').value;

    const url = `https://restcountries.com/v3.1/lang/${language}`;
    // console.log(url)

    fetch(url)
        .then(response => {
            console.log(response)
            // Om allt gick bra, alltså statuskoden är 200 till 299
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            else if( response.status == 404){
                throw "The languge does not exist."
            }
            else{
                throw "Something whent wrong. Please try again later."
            }
        })
        .then(displayCountries)
        .catch( displayError )


    // form.reset();
})

function displayError(error){
    const errorP = document.querySelector('#errorMessage');
    errorP.innerText = error;
}

function displayCountries(countries) {
    // console.log(countries);

    const countryContainer = document.querySelector("#countriesContainer");
    document.querySelector('#errorMessage').innerText = '';
    countryContainer.innerHTML = "";

    for (const country of countries) {
        // console.log(country.name.official, country.subregion,country.flags.png);


        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const img = document.createElement('img');

        h1.innerText = country.name.official;
        p.innerText = country.subregion;
        img.src = country.flags.png;

        countryContainer.append(h1, p, img);
    }
}