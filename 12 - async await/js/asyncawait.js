async function getRandomDogImage() {
    const dogAPiUrl = `https://dog.ceo/api/breeds/ige/random`;

    try {
        const response = await fetch(dogAPiUrl);
        console.log(response);

        if(response.status == 404){
            throw 404;
        }
        else{
            const data = await response.json();
            console.log(data);
    
            return data.message;
        }
    }
    catch (error) {
        // Detta gör så att promiset som returneras från getRandomDogImage blir rejected
        throw error;
    }
}

// console.log( getRandomDogImage() );
getRandomDogImage()
    .then( displayDogImage )
    .catch( displayError );

function displayError(error){
    console.log(error)
}

function displayDogImage(imgUrl) {
    console.log(imgUrl)
    const img = document.createElement('img');
    img.src = imgUrl;
    document.body.append(img)
}
console.log('Det här ligger sist i koden');