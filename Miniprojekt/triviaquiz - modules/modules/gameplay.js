/**
 * Functions related to the game play and logic.
 * 
 * Underscore is used to pluck the correct answers from all of the questions
 * https://underscorejs.org/#pluck 
 */

import _, { map } from 'https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js';
import { getTriviaQuestions } from "./triviaAPI.js";
import { displayQuestion, displayFinalScore } from "./display.js";

let questions = [];
let currentIndex = 0;
let correctAnswers =[];
let score = 0;

//Get questions from the API using the form data and display the first question
export async function startGame(event){
    event.preventDefault();
    
    const category = startForm.querySelector('#category').value;
    const difficulty = startForm.querySelector('#difficulty').value;
    const numberOfQuestions = startForm.querySelector('#numberOfQuestions').value;
    
    startForm.classList.add('hidden');
    
    questions = await getTriviaQuestions(category, difficulty, numberOfQuestions);
    correctAnswers = _.pluck(questions, 'correct_answer');
    
    displayQuestion( questions[currentIndex] );
}



// Check if the answer is correct and display a message
export function answerQuestion(event){
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
            displayFinalScore(score, questions.length)
            currentIndex = 0;
            score = 0;
        };

    }, 2000)
}




