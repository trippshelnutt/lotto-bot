const {
  getLatestMegaMillionsWinner,
  getLatestPowerballWinner,
} = require("./winner");

function assertResult(result) {
  expect(result.regular).not.toBeNull();
  expect(result.regular.length).toBe(5);
  result.regular.forEach((number) => {
    expect(typeof number).toBe("number");
  });
  expect(result.powerball).not.toBeNull();
  expect(typeof result.powerball).toBe("number");
}

test("getLatestMegaMillionsWinner returns expected result", async () => {
  var result = await getLatestMegaMillionsWinner();

  assertResult(result);
});

test("loadPowerballNumbers returns expected result", async () => {
  var result = await getLatestPowerballWinner();

  assertResult(result);
});
