// "движок" с общей логикой игры, принимает строку правил и логику раунда, выполняет игру
import readlineSync from 'readline-sync';

export default (rule, gameFunc) => {
  // приветствие, получение имени
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // вывод правила
  console.log(rule);

  // цикл игры
  let successCount = 0;
  do {
    // получаем correctAnswer и question из функции раунда  - gameFunc
    const data = gameFunc();

    // выводим вопрос, сравниваем ответ юзера с корректным ответом, считаем победы до первой неудачи и выводим результат
    console.log('Question: ', data.question);
    const corrertAnswer = data.correctAnswer;
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer == corrertAnswer) {
      console.log('Correct!');
      successCount += 1;
    } else {
      console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${corrertAnswer}\'.\nLet\'s try again, ${name}!`);
      return;
    }
  } while (successCount < 3);
  console.log(`Congratulations, ${name}!`);
};
