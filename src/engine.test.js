const executeEngine = require("./engine");

test("executeEngine logs expected output", () => {
  jest.spyOn(global.console, "log");

  executeEngine({ name: "test" });

  expect(console.log).toHaveBeenCalledWith("Hello, test");
});
