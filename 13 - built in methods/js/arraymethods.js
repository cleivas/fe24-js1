const days = ['mon', 'tues'];

console.log(days, days.length);

days.push('wed')
console.log(days, days.length);

days.push('wed', 'thu', 'fri')
console.log(days, days.length);

days.push(213213, { p: 10 }, [1, 2, 3,])
console.log(days, days.length);

console.log(days.pop());
console.log(days.pop());
console.log(days.pop());

console.log(days, days.length);

async function getSpanishCountries() {
    const url = 'https://restcountries.com/v3.1/lang/spanish';

    const response = await fetch(url);
    const countries = await response.json();

    // console.log(countries)
    return countries;
}

getSpanishCountries().then(handleCountries);

function handleCountries(countries) {

    console.log(countries)

    countries.forEach((country, index) => {
        console.log(country.name.common, index)
    });

    // Vi behöver endast common name och population
    // så vi skapar en ny array med hjälp av map

    const smallerCountries = countries.map(country => {
        console.log(country)
        return {
            name: country.name.common,
            population: country.population
        }
    })

    console.log(smallerCountries)

    // filtrera ut länder där population är mer än fem miljoner

    const bigPopulation = smallerCountries.filter(country => country.population > 5000000);
    console.log(bigPopulation)

    //  Sortera arrayen efter population
    bigPopulation.sort((countryA, countryB) => {

        const result = countryB.population - countryA.population;
        console.log(result);
        return result;
    });
    console.log(bigPopulation)


    // for(const country of countries){

    // }
}