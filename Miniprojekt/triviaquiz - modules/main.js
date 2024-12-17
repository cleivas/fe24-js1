/**
 * startGameForm is visible from the start. When submitted the game starts.
 * Once the game starts the questions show up one at a time using the questionForm
 */

import { startGame, answerQuestion } from "./modules/gameplay.js";

const startGameForm = document.querySelector('#startForm');
const questionForm = document.querySelector('#questionForm');

startGameForm.addEventListener('submit', startGame);
questionForm.addEventListener('submit', answerQuestion)