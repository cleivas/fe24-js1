const form = document.querySelector('form');
const loadingDiv = document.querySelector("#loadingAnimation");

const loadingAnimation = anime({
    targets: '#loadingAnimation',
    rotate: '360deg',
    easing: 'linear',
    loop: true
})
loadingAnimation.pause();

form.addEventListener('submit', async event =>{
    event.preventDefault();
    const container = document.querySelector('#countriesContainer');
    container.innerHTML = '';
    loadingDiv.classList.remove('hidden');
    loadingAnimation.restart();

    const language = form.querySelector('input').value;
    const url = `https://restcountries.com/v3.1/lang/${language}`;

    const response = await fetch(url)
    const countries = await response.json();

    // console.log(countries)
    displayCountries(countries);
});

function displayCountries(countries){
    const container = document.querySelector('#countriesContainer');
    container.innerHTML = '';
    loadingDiv.classList.add('hidden');
    loadingAnimation.pause();

    countries.forEach( country =>{
        const img = document.createElement('img');
        img.src = country.flags.png;

        container.append(img);
    })

    // Animera flaggorna
    // använd stagger
    anime({
        targets: 'img',
        scale: 1.3,

        duration: 500,
        // direction: 'alternate',
        delay: anime.stagger(50)
    })
}