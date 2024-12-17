// Form elements
const startForm = document.querySelector('#startForm');
const questionForm = document.querySelector('#questionForm');

// Global variables
let questions = [];
let currentIndex = 0;
let correctAnswers =[];
let score = 0;

startForm.addEventListener('submit', startGame);
questionForm.addEventListener('submit', answerQuestion)

//Get all questions from the API and display the first question
async function startGame(event){
    event.preventDefault();
    
    // Get form data
    const category = startForm.querySelector('#category').value;
    const difficulty = startForm.querySelector('#difficulty').value;
    const numberOfQuestions = startForm.querySelector('#numberOfQuestions').value;
    
    startForm.classList.add('hidden');
    
    questions = await getTriviaQuestions(category, difficulty, numberOfQuestions);
    correctAnswers = _.pluck(questions, 'correct_answer');
    
    displayQuestion( questions[currentIndex] );
}


async function getTriviaQuestions(category, difficulty, numberOfQuestions){

    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;

    const response = await fetch(url);
    const questions = await response.json();
    return questions.results;
}

// Populate the question form with the current question and answers
function displayQuestion(question){

    const questionP = questionForm.querySelector('p');
    const radios = questionForm.querySelectorAll('input');
    const labels = questionForm.querySelectorAll('label');

    questionForm.classList.remove('hidden');
    questionP.innerHTML = question.question;
    // console.log(question)

    // Combine and shuffle the answers
    let answers = [...question.incorrect_answers, question.correct_answer];
    answers = _.shuffle(answers);
    

    answers.forEach( (answer, i) =>{
        //Using innerHTML to decode special characters
        labels[i].innerHTML = answer; 
        radios[i].value = labels[i].innerHTML;
    })
}

// Check if the answer is correct and display a message
function answerQuestion(event){
    event.preventDefault(); 

    const messageDiv = document.querySelector('#messageDiv');
    const radioInput = document.querySelector(`input[type="radio"]:checked`);


    const isCorrectAnswer = radioInput.value == correctAnswers[currentIndex];
    radioInput.checked = false;
   
    questionForm.classList.add('hidden');
    messageDiv.classList.remove('hidden');
    

    if(isCorrectAnswer){
        messageDiv.querySelector('p').innerText = `Correct! 🥳`;
        score++;
    }
    else{
        messageDiv.querySelector('p').innerHTML = `Wrong answer... 😬 <br>
        The correct answer is: <span>${correctAnswers[currentIndex]}</span>`;
    }

    // Wait two seconds before displaying the next question or, if there are no more questions, ending the game
    setTimeout(()=>{
        messageDiv.classList.add('hidden');
        currentIndex++;

        if(currentIndex < questions.length) {
            displayQuestion(questions[currentIndex]);
        }
        else {
            currentIndex = 0;
            displayFinalScore()
        };

    }, 2000)
}

// When the game is over, dispaly the final score
function displayFinalScore(){
    const scoreEl = document.querySelector("#score");
    scoreEl.classList.remove('hidden');

    scoreEl.querySelector('span').innerText = `${score} / ${questions.length}`;
    
    setTimeout(()=>{
        scoreEl.classList.add('hidden');
        startForm.classList.remove('hidden');
    }, 5000)
}


