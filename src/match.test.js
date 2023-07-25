const checkMatch = require("./match");

test("checkMatch returns correct result when all numbers match", () => {
  var number = { balls: [1, 2, 3, 4, 5], powerball: 5 };
  var winningNumber = { balls: [1, 2, 3, 4, 5], powerball: 5 };

  var result = checkMatch(number, winningNumber);

  expect(result).not.toBeNull();
  expect(result.matches).toBe(5);
  expect(result.powerballMatch).toBeTruthy();
});

test("checkMatch returns correct result when no numbers match", () => {
  var number = { balls: [1, 2, 3, 4, 5], powerball: 5 };
  var winningNumber = { balls: [11, 12, 13, 14, 15], powerball: 15 };

  var result = checkMatch(number, winningNumber);

  expect(result).not.toBeNull();
  expect(result.matches).toBe(0);
  expect(result.powerballMatch).toBeFalsy();
});

test("checkMatch returns correct result when some numbers match", () => {
  var number = { balls: [1, 2, 3, 4, 5], powerball: 5 };
  var winningNumber = { balls: [1, 2, 13, 14, 15], powerball: 15 };

  var result = checkMatch(number, winningNumber);

  expect(result).not.toBeNull();
  expect(result.matches).toBe(2);
  expect(result.powerballMatch).toBeFalsy();
});

test("checkMatch returns correct result when only powerball matches", () => {
  var number = { balls: [1, 2, 3, 4, 5], powerball: 5 };
  var winningNumber = { balls: [11, 12, 13, 14, 15], powerball: 5 };

  var result = checkMatch(number, winningNumber);

  expect(result).not.toBeNull();
  expect(result.matches).toBe(0);
  expect(result.powerballMatch).toBeTruthy();
});
