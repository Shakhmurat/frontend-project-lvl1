#!/usr/bin/env node

import {
  rules,
  getQuestion,
  getCorrectAnswer,
} from '../games/calc.js';

import { startGame } from '../src/index.js';

startGame(rules, getQuestion, getCorrectAnswer);
