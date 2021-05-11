import gameEngine from '../index.js';

const rule = 'What is the result of the expression?\n';

// функция раунда игры
const gameFunc = () => {
  const operaions = ['+', '-', '*'];
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const operaion = operaions[Math.floor(Math.random() * operaions.length)];
  const questionStr = `${a} ${operaion} ${b}`;
  // eslint-disable-next-line no-eval
  const corrertAnswer = eval(questionStr);

  // возвращаем обьект с вопросом и корректным ответом
  return {
    question: questionStr,
    correctAnswer: corrertAnswer,
  };
};

export default () => gameEngine(rule, gameFunc);
