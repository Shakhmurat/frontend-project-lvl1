#!/usr/bin/env node

import {
  rules,
  getQuestion,
  getCorrectAnswer,
} from '../games/prime.js';

import { startGame } from '../src/index.js';

startGame(rules, getQuestion, getCorrectAnswer);
