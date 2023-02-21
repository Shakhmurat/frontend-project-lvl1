import { getRandomInteger, isNoRemainder } from '../src/index.js';

export const rules = 'Find the greatest common divisor of given numbers.';

let firstNum = 0;
let secondNum = 0;

export const getQuestion = () => {
  firstNum = getRandomInteger();
  secondNum = getRandomInteger();

  return `${firstNum} ${secondNum}`;
};

export const getCorrectAnswer = () => {
  let commonDivisor = Math.min(firstNum, secondNum);

  while (commonDivisor > 0) {
    if (
      isNoRemainder(firstNum, commonDivisor)
      && isNoRemainder(secondNum, commonDivisor)
    ) {
      return commonDivisor;
    }

    commonDivisor -= 1;
  }

  return commonDivisor;
};
