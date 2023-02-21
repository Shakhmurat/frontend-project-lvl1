import { getRandomInteger, isNoRemainder } from '../src/index.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

let randomInteger = 0;

export const getQuestion = () => {
  randomInteger = getRandomInteger();
  return randomInteger;
};

export const getCorrectAnswer = () => (isNoRemainder(randomInteger, 2) ? 'yes' : 'no');
