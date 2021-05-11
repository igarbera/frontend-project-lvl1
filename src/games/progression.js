import gameEngine from '../index.js';

const rule = 'What number is missing in the progression?\n';

// генерируем массив с прогрессией
const genProgression = () => {
  const length = Math.floor(Math.random() * (10 - 5) + 5); // случайная длина  прогрессии от 5 до 10 элементов
  const step = Math.floor(Math.random() * (5 - 1) + 1); // случайный шаг прогрессии от 1 до 5

  const progressionArray = [];
  const firstElement = Math.floor(Math.random() * 100);
  progressionArray.push(firstElement);
  for (let i = 0; i < length - 1; i++) {
    const lastItem = progressionArray[progressionArray.length - 1];
    progressionArray.push(lastItem + step);
  }
  return progressionArray;
};

// функция раунда игры
const gameFunc = () => {
  const progression = genProgression();
  const randIndex = Math.floor(Math.random() * progression.length);
  const answer = progression[randIndex];
  progression[randIndex] = '..';

  // возвращаем обьект с вопросом и корректным ответом
  return {
    question: progression.join(' '),
    correctAnswer: answer,
  };
};

export default () => gameEngine(rule, gameFunc);
