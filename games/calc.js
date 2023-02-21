import { getRandomInteger } from '../src/index.js';

export const rules = 'What is the result of the expression?';

const arithmeticOperators = ['+', '-', '*'];

let leftOperand = 0;
let rightOperand = 0;
let arithmeticOperator = 0;

export const getQuestion = () => {
  leftOperand = getRandomInteger();
  arithmeticOperator = arithmeticOperators[getRandomInteger(arithmeticOperators.length - 1)];
  rightOperand = getRandomInteger(leftOperand);

  return `${leftOperand} ${arithmeticOperator} ${rightOperand}`;
};

export const getCorrectAnswer = () => {
  switch (arithmeticOperator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    default:
      return leftOperand * rightOperand;
  }
};
