let randomNumber, numberOfGuesses;
const form = document.querySelector('form');
const resetBtn = document.querySelector('#resetBtn');

resetGame();
form.addEventListener('submit', handleGuess)
resetBtn.addEventListener('click', resetGame );

function handleGuess(event){
    event.preventDefault();

    const resultEl = document.querySelector('#result');
    const userGuess = form.querySelector('input').value;

    numberOfGuesses++;

    if(userGuess > randomNumber){
        resultEl.innerText = "Gissa lägre."
    }
    else if(userGuess < randomNumber){
        resultEl.innerText = "Gissa högre."
    }
    else{
        resultEl.innerText = `Du gisssade rätt! Det tog dig ${numberOfGuesses} gånger. Spelet startar om...`

        // Set timeout tar två argument, en callbackfunktion och antal millisekunder
        // Callbackfunktion anropas efter 3000 millisekunder, alltså 3 sekunder
        setTimeout(()=>{
            resultEl.innerText = '';
        }, 3000);
    }

    form.reset();
}

function resetGame(){
    randomNumber = Math.floor(Math.random()*100) + 1;
    console.log(randomNumber);
    numberOfGuesses = 0;
}