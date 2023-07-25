const checkMatch = (number, winningNumber) => {
  const matches = number.balls.filter((n) => winningNumber.balls.includes(n));
  const powerballMatch = number.powerball === winningNumber.powerball;

  return { matches: matches.length, powerballMatch: powerballMatch };
};

module.exports = checkMatch;
