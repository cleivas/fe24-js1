const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

const fetchPromise = fetch(dogApiUrl);
console.log(fetchPromise);

// Vi behöver tillgång till response-objektet
// Vi talar om för browsern vad den ska göra om fetchPromise blir fulfilled

// jsonPromise innehåller promiset som returneras från response.json()
const jsonPromise = fetchPromise.then( response =>{
    console.log(response);

    //Gör om JSON till JS-objekt men returnerar direkt ett promise
    return response.json() 
} )
console.log(jsonPromise);


jsonPromise.then( dogAPIObject =>{
    console.log(dogAPIObject.message);
} )

console.log('Det här är sist i koden');