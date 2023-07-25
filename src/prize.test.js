const getPrize = require("./prize");

test("getPrize returns expected results", async () => {
  var matches = [
    { "matches": 0, "powerballMatch": false },
    { "matches": 1, "powerballMatch": false },
    { "matches": 2, "powerballMatch": false },
    { "matches": 3, "powerballMatch": false },
    { "matches": 4, "powerballMatch": false },
    { "matches": 5, "powerballMatch": false },
    { "matches": 0, "powerballMatch": true },
    { "matches": 1, "powerballMatch": true },
    { "matches": 2, "powerballMatch": true },
    { "matches": 3, "powerballMatch": true },
    { "matches": 4, "powerballMatch": true },
    { "matches": 5, "powerballMatch": true }
  ];

  var results = matches.map(getPrize);

  expect(results).toEqual(["$0", "$0", "$0", "$10", "$500", "$1M!", "$2", "$4", "$10", "$200", "$10K", "Jackpot!"]);
});
