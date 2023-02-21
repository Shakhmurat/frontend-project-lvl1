import { getRandomInteger } from '../src/index.js';

export const rules = 'What number is missing in the progression?';

let progression = '';
const minSize = 5;
let additionalSize = 0;
let startNumber = 0;
let stepSize = 0;
let hiddenElementIndex = 0;
const mask = '..';

export const getQuestion = () => {
  const numbers = [];
  additionalSize = getRandomInteger(5);
  const maxSize = minSize + additionalSize;
  startNumber = getRandomInteger();
  stepSize = getRandomInteger(10);
  hiddenElementIndex = getRandomInteger(maxSize - 1);
  let counter = maxSize;

  numbers.push(startNumber);

  while (counter > 1) {
    numbers.push(numbers[numbers.length - 1] + stepSize);
    counter -= 1;
  }

  numbers[hiddenElementIndex] = mask;
  progression = numbers.join(' ');
  return progression;
};

export const getCorrectAnswer = () => {
  const numbers = progression.split(' ');

  if (hiddenElementIndex === 0) {
    return Number(numbers[hiddenElementIndex + 1]) - stepSize;
  }

  return Number(numbers[hiddenElementIndex - 1]) + stepSize;
};
