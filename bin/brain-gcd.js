#!/usr/bin/env node

import {
  rules,
  getQuestion,
  getCorrectAnswer,
} from '../games/gcd.js';

import { startGame } from '../src/index.js';

startGame(rules, getQuestion, getCorrectAnswer);
