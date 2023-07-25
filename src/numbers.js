const megaMillionsNumbers = require("./data/mega-millions.json");
const powerballNumbers = require("./data/powerball.json");

const loadMegaMillionsNumbers = () => {
  return megaMillionsNumbers;
};

const loadPowerballNumbers = () => {
  return powerballNumbers;
};

module.exports = { loadMegaMillionsNumbers, loadPowerballNumbers };
