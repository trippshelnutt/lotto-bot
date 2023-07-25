const { loadMegaMillionsNumbers } = require("./numbers");
const { getLatestMegaMillionsWinner } = require("./winner");
const checkMatch = require("./match");
const getPrize = require("./prize");

function getNumberString(number) {
  const balls = number.balls.map(b => `${b}`.padStart(2, ' '));
  const powerballString = `${number.powerball}`.padStart(2, ' ');
  return `${balls[0]} ${balls[1]} ${balls[2]} ${balls[3]} ${balls[4]} : ${powerballString}`;
}

const executeEngine = async (options) => {
  const winner = await getLatestMegaMillionsWinner();
  console.log(`Winner: ${getNumberString(winner)}`);

  const numbers = loadMegaMillionsNumbers();

  const prizes = numbers.map((n) => checkMatch(n, winner)).map(getPrize);

  numbers.forEach((n, index) => {
    console.log(`${getNumberString(n)} -> ${prizes[index]}`);
  });
};

module.exports = executeEngine;
