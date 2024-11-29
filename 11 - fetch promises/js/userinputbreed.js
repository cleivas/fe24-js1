const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const breed = form.querySelector('#breedInput').value;
    const amount = form.querySelector('#amountInput').value;
    // console.log(breed, amount)

    const dogUrl = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`
    // console.log(dogUrl)

    fetch(dogUrl)
        .then(response => response.json())
        .then(displayDogImage);
})

function displayDogImage(dogObj) {
    console.log(dogObj.message)
    const imgContainer = document.querySelector('#imageContainer');
    imgContainer.innerHTML = '';

    for (const imgUrl of dogObj.message) {
        const imgEl = document.createElement('img');
        imgEl.src = imgUrl;
        imgContainer.append(imgEl);
    }
}