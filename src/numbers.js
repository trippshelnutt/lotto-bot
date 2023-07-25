const megaMillionsNumbers = require("./mega-millions.json");
const powerballNumbers = require("./powerball.json");

const loadMegaMillionsNumbers = () => {
  return megaMillionsNumbers.numbers;
};

const loadPowerballNumbers = () => {
  return powerballNumbers.numbers;
};

module.exports = { loadMegaMillionsNumbers, loadPowerballNumbers };
