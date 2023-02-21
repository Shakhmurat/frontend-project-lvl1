import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  let userName = readlineSync.question('May I have your name? ');

  if (userName.length === 0) {
    userName = 'Anonymous';
  }

  console.log(`Hello, ${userName}!`);

  return userName;
};
