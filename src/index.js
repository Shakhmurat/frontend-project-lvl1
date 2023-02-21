import readlineSync from 'readline-sync';
import greeting from './cli.js';

let userPoints = 0;
const pointsForVictory = 3;

export const getRandomInteger = (max = 100) => Math.floor(Math.random() * max);

export const isNoRemainder = (dividend, divisor) => dividend % divisor === 0;

export const startGame = (rules, getQuestion, getCorrectAnswer) => {
  const userName = greeting();
  console.log(rules);

  const successMessage = 'Correct!';
  const congratMessage = `Congratulations, ${userName}!`;

  while (userPoints !== pointsForVictory) {
    console.log(`Question: ${getQuestion()}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(getCorrectAnswer());
    const failMessage = (
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`
    );

    if (userAnswer === correctAnswer) {
      userPoints += 1;
      console.log(successMessage);
    } else {
      return console.log(failMessage);
    }
  }

  return console.log(congratMessage);
};
