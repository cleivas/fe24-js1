const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

fetch(dogApiUrl)
    .then( response => response.json() )
    .then( displayDogImage );

function displayDogImage( dogApiObject){
    console.log(dogApiObject)

    const imgEl = document.createElement('img');
    document.body.append(imgEl);

    imgEl.src = dogApiObject.message;
}