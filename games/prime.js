import { getRandomInteger, isNoRemainder } from '../src/index.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let randomInteger = 0;

export const getQuestion = () => {
  randomInteger = getRandomInteger();
  return randomInteger;
};

export const getCorrectAnswer = () => {
  if (randomInteger <= 1) {
    return 'no';
  }

  let counter = randomInteger - 1;

  while (counter > 1) {
    if (isNoRemainder(randomInteger, counter)) {
      return 'no';
    }

    counter -= 1;
  }

  return 'yes';
};
