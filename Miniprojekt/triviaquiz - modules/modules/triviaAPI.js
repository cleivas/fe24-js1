/**
 * Getting the questions for the game using the open trivia database.
 * https://opentdb.com/
 */
 


export async function getTriviaQuestions(category, difficulty, numberOfQuestions){

    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;

    const response = await fetch(url);
    const questions = await response.json();
    return questions.results;
}