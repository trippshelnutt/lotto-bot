const { loadMegaMillionsNumbers, loadPowerballNumbers } = require("./numbers");

function assertResult(result) {
  expect(result.length).toBe(10);
  result.forEach((number) => {
    expect(number.regular).not.toBeNull();
    expect(number.regular.length).toBe(5);
    number.regular.forEach((number) => {
      expect(typeof number).toBe("number");
    });
    expect(number.powerball).not.toBeNull();
    expect(typeof number.powerball).toBe("number");
  });
}

test("loadMegaMillionsNumbers returns expected result", () => {
  var result = loadMegaMillionsNumbers();

  assertResult(result);
});

test("loadPowerballNumbers returns expected result", () => {
  var result = loadPowerballNumbers();

  assertResult(result);
});
