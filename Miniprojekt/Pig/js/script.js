/**
 * This is a simplyfied version of the dice game Pig. 
 * See the rules here: https://en.wikipedia.org/wiki/Pig_(dice_game) 
 * 
 * The game starts when a player enters their name. 
 * The goal of the game is to reach a score of 100.
 * When the score reaches 100 the game starts over. 
 * 
 */

// DOM elements
const gamePlayDiv = document.querySelector('#gameDiv');
const winnerMessageDiv = document.querySelector('#winnerDiv');
const form = document.querySelector('form');
const rollBtn = document.querySelector('#rollBtn');
const holdBtn = document.querySelector('#holdBtn');
const resetBtn = document.querySelector('#resetBtn');

// Player and score data
let playerName = '';
let totalScore = 0;
let turnScore = 0;
let turns =  0;
const targetScore = 100;

//Keeps track of what class to remove from the die
//Eg if the player gets a three in this roll and got a five in the previous roll, the class to remove is "five", before adding the new class "three"
let preCSSClass = 'one'; 

// Eventlisteners
form.addEventListener('submit', startGame );
rollBtn.addEventListener('click', rollDie );
holdBtn.addEventListener('click', holdScore );
resetBtn.addEventListener('click', startGame);

// Resets all scores, displays the game play elements and hides the winnerDiv and form elements
function startGame(event){
    event.preventDefault();

    totalScore = 0;
    turns = 0;
    turnScore = 0;
    playerName = form.querySelector('input').value;

    document.querySelector('#name').innerText = playerName;
    updateScoreBoard();

    form.classList.add('hidden');
    winnerDiv.classList.add('hidden');
    gameDiv.classList.remove('hidden');
}

// Roll die, update score and die elements
function rollDie(){
    const rand = Math.ceil(Math.random()*6);
    updateDie(rand);

    if(rand === 1){
        turns++;
        turnScore = 0;
        document.querySelector('#turns').innerText = 'Turns: ' + turns;
    }
    else{
        turnScore += rand;
    }
    document.querySelector('#turnScore').innerText = 'Turn score: ' + turnScore;
}

// Update score with turn score
function holdScore(){
    totalScore += turnScore;
    turnScore = 0;
    turns++;

    if(totalScore >= targetScore) showWinner();
    else updateScoreBoard();
}

// Displays current score
function updateScoreBoard(){
    document.querySelector('#turns').innerText = 'Turns: ' + turns;
    document.querySelector('#turnScore').innerText = 'Turn score: ' + turnScore;
    document.querySelector('#score').innerText = 'Score: ' + totalScore;
}

// Hides game elements and displays reset btn
function showWinner(){
    document.querySelector('#winnerDiv h1').innerText = `${playerName}, you reached a score of ${totalScore} in ${turns} turns!`
    gameDiv.classList.add('hidden');
    winnerDiv.classList.remove('hidden');
}

function updateDie(number){
    const classes = ['one', 'two', 'three', 'four', 'five', 'six'];
    const currentClass = classes[number-1];
    const die = document.querySelector('.die');
    die.innerHTML = ''; //Remove all dots

    die.classList.remove(preCSSClass);
    die.classList.add(currentClass);
    preCSSClass = currentClass;

    for(let i=0; i<number; i++){
        const dot = document.createElement('div');
        die.append(dot);
    }
}