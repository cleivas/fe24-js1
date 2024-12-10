console.log(_) //Från underscore-biblioteket

async function getCountries(){
    const res = await fetch('https://restcountries.com/v3.1/lang/spanish');
    const countries = await res.json();
    return countries;
}

getCountries()
    .then(countries => {
        console.log(countries)

        // Kan användas som map
        const flags = _.pluck(countries, 'flag');
        console.log(flags)

        const sortedCountries = _.sortBy(countries, 'population');
        console.log(sortedCountries)

        // Max population
        const largest = _.max(countries, country => country.population);
        console.log(largest)

    })

// Math max
const numbers = [34, 3, 23, 54, 3];
// const largest = Math.max(...numbers);

// console.log(numbers);
// console.log(...numbers)
// console.log(34, 3, 23, 54, 3)
// console.log(largest)


const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Kn', 'Q', 'K', 'A'];
const deck = [];


for(const suit of suits){
   
    chars.forEach( (char, value)=>{ //value är indexnumret
        deck.push({suit, char, value})
    } )
}
console.log('Original deck: ', deck);

let shuffledDeck = _.shuffle(deck);
console.log(shuffledDeck)

const randomCardIndex = _.random(0, 51);
console.log(randomCardIndex)

const pokerHand = _.sample(shuffledDeck, 5);
console.log(pokerHand);
console.log(shuffledDeck);

shuffledDeck = _.without(shuffledDeck, ...pokerHand);
console.log('latest deck:', shuffledDeck);