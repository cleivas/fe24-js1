// https://dog.ceo/api/breeds/image/random 
const randomDogJson = `{"message":"https:\/\/images.dog.ceo\/breeds\/terrier-irish\/n02093991_2973.jpg","status":"success"}`;

const randomDogObj = JSON.parse(randomDogJson);
console.log(randomDogObj);
console.log(randomDogObj.message);

displayDogImage(randomDogObj.message)


// En bild på en poodle
// https://dog.ceo/api/breed/poodle/images/random
const randomPoodleJson = `{"message":"https:\/\/images.dog.ceo\/breeds\/poodle-miniature\/n02113712_1572.jpg","status":"success"}`;

const randomPoodleObj = JSON.parse(randomPoodleJson);
displayDogImage(randomPoodleObj.message);

// Ni ska hämta 10 pomeranian-bilder
// kopiera över json till vs-Code
// Visa alla tio bilder, utan att modifiera displayDogImage

// https://dog.ceo/api/breed/pomeranian/images/random/10

const pomeJson = `{"message":["https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_10309.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_11105.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_2271.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_2691.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_2790.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_3097.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_4554.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_6098.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_653.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/pic1_p_1.jpg"],"status":"success"}`;

const pomeObj = JSON.parse(pomeJson);
console.log(pomeObj.message); //Innehåller nu en array

for(const imgUrl of pomeObj.message){
    console.log(imgUrl)
    displayDogImage(imgUrl);
}

function displayDogImage(imgUrl){
    const imgEl = document.createElement('img');
    imgEl.src = imgUrl;

    document.body.append(imgEl);
}