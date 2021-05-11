import gameEngine from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".\n';

// функция раунда игры
const gameFunc = () => {
  const questionNum = Math.floor(Math.random() * 100); // рандомное число-вопрос
  const corrertAnswer = (questionNum % 2 === 0) ? 'yes' : 'no'; // правильный ответ

  // возвращаем обьект с вопросом и корректным ответом
  return {
    question: questionNum,
    correctAnswer: corrertAnswer,
  };
};

export default () => gameEngine(rule, gameFunc);
