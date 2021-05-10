import readlineSync from 'readline-sync';
import getName from '../cli.js';

export default () => {
  console.log('Welcome to the Brain Games!\n');
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  let successCount = 0;

  do {
    const num = Math.floor(Math.random() * 100);
    console.log('Question: ', num);
    const corrertAnswer = (num % 2 === 0) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === corrertAnswer) {
      console.log('Correct!');
      successCount += 1;
    } else {
      console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${corrertAnswer}\'.\n Let\'s try again, ${name}!`);
      return;
    }
  } while (successCount < 3);
  console.log(`Congratulations, ${name}!`);
};
