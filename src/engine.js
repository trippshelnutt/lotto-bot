const { loadMegaMillionsNumbers, loadPowerballNumbers } = require("./numbers");
const {
  getLatestMegaMillionsWinner,
  getLatestPowerballWinner,
} = require("./winner");
const checkMatch = require("./match");
const getPrize = require("./prize");

// TODO: refactor to numbers.js
function getNumberString(number) {
  const balls = number.balls.map((b) => `${b}`.padStart(2, " "));
  const powerballString = `${number.powerball}`.padStart(2, " ");
  return `${balls[0]} ${balls[1]} ${balls[2]} ${balls[3]} ${balls[4]} : ${powerballString}`;
}

// TODO: refactor to match.js
function getMatchString(match) {
  return `${match.powerballMatch ? "*" : ""}${match.matches}`.padStart(2, " ");
}

async function checkNumbers(gameName, getWinner, loadNumbers) {
  console.log(`${gameName} Winner:`);
  const winner = await getWinner();
  console.log(`${getNumberString(winner)}`);
  console.log();

  const numbers = loadNumbers();
  const matches = numbers.map((n) => checkMatch(n, winner));
  const prizes = matches.map(getPrize);

  console.log("Numbers:");
  numbers.forEach((n, index) => {
    const matchString = getMatchString(matches[index]);
    const prizeString = prizes[index];
    const numberString = getNumberString(n);
    const messageString = `${numberString} -> ${matchString} for ${prizeString}`;

    console.log(messageString);
  });
  console.log();
}

const executeEngine = async (options) => {
  if (options.m) {
    await checkNumbers(
      "MegaMillions",
      getLatestMegaMillionsWinner,
      loadMegaMillionsNumbers
    );
  }

  if (options.p) {
    await checkNumbers(
      "Powerball",
      getLatestPowerballWinner,
      loadPowerballNumbers
    );
  }
};

module.exports = executeEngine;
