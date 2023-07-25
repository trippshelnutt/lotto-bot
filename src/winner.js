const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function getUrlData(url) {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

function getNumbersFromDocument(data) {
  const dom = new JSDOM(data);
  const document = dom.window.document;
  return document.querySelectorAll(".balls-6");
}

function parseNumbersFromHtml(htmlNumbers) {
  return {
    regular: [
      parseInt(htmlNumbers[0].textContent),
      parseInt(htmlNumbers[1].textContent),
      parseInt(htmlNumbers[2].textContent),
      parseInt(htmlNumbers[3].textContent),
      parseInt(htmlNumbers[4].textContent),
    ],
    powerball: parseInt(
      htmlNumbers[5].querySelector("#bonus-ball-display").textContent
    ),
  };
}

const getLatestMegaMillionsWinner = async () => {
  const megaMillionsUrl =
    "https://www.valottery.com/data/draw-games/megamillions";

  const data = await getUrlData(megaMillionsUrl);
  const htmlNumbers = getNumbersFromDocument(data);
  const numbers = parseNumbersFromHtml(htmlNumbers);

  return numbers;
};

const getLatestPowerballWinner = async () => {
  const powerballUrl = "https://www.valottery.com/data/draw-games/powerball";

  const data = await getUrlData(powerballUrl);
  const htmlNumbers = getNumbersFromDocument(data);
  const numbers = parseNumbersFromHtml(htmlNumbers);

  return numbers;
};

module.exports = { getLatestMegaMillionsWinner, getLatestPowerballWinner };
