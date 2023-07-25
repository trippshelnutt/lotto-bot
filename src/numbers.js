const megaMillionsNumbers = require("./data/mega-millions.json");
const powerballNumbers = require("./data/powerball.json");

const loadMegaMillionsNumbers = () => {
  return megaMillionsNumbers.numbers;
};

const loadPowerballNumbers = () => {
  return powerballNumbers.numbers;
};

module.exports = { loadMegaMillionsNumbers, loadPowerballNumbers };
