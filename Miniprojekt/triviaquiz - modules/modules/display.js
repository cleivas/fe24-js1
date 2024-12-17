/**
 * Underscore is used to shuffle the the answers
 * https://underscorejs.org/#shuffle 
 */

import _, { map } from 'https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js';

// When the game is over, dispaly the final score
function displayFinalScore(score, maxScore){
    const scoreEl = document.querySelector("#score");
    scoreEl.classList.remove('hidden');

    scoreEl.querySelector('span').innerText = `${score} / ${maxScore}`;
    
    setTimeout(()=>{
        scoreEl.classList.add('hidden');
        startForm.classList.remove('hidden');
    }, 5000)
}

// Populate the question form with the current question and answers
function displayQuestion(question){
    const questionForm = document.querySelector('#questionForm');
    const questionP = questionForm.querySelector('p');
    const radios = questionForm.querySelectorAll('input');
    const labels = questionForm.querySelectorAll('label');

    questionForm.classList.remove('hidden');
    questionP.innerHTML = question.question;


    let answers = [...question.incorrect_answers, question.correct_answer];
    answers = _.shuffle(answers); 
    

    answers.forEach( (answer, i) =>{
        //Using innerHTML to decode special characters
        labels[i].innerHTML = answer; 
        radios[i].value = labels[i].innerHTML;
    })
}


export {displayFinalScore, displayQuestion};