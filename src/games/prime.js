import gameEngine from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

// определяем простое ли число
function isPrime(num) {
  let flag = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = false;
      break; // выйдем из цикла
    }
  }
  return flag;
}

// функция раунда игры
const gameFunc = () => {
  const a = Math.floor(Math.random() * (500 - 2) + 2);

  // возвращаем обьект с вопросом и корректным ответом
  return {
    question: `${a}`,
    correctAnswer: isPrime(a) ? 'yes' : 'no',
  };
};

export default () => gameEngine(rule, gameFunc);
