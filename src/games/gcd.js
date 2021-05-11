import gameEngine from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.\n';

// рекурсивно ищем наименьший общий делитель
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

// функция раунда игры
const gameFunc = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);

  // возвращаем обьект с вопросом и корректным ответом
  return {
    question: `${a} ${b}`,
    correctAnswer: gcd(a, b),
  };
};

export default () => gameEngine(rule, gameFunc);
