const executeEngine = require("./engine");

afterEach(() => {
  jest.restoreAllMocks();
});

test("executeEngine shows MegaMillions", async () => {
  jest.spyOn(global.console, "log").mockImplementation();

  await executeEngine({ m: true, p: false });

  expect(console.log).toHaveBeenCalledWith("MegaMillions Winner:");
  expect(console.log).not.toHaveBeenCalledWith("Powerball Winner:");
});

test("executeEngine shows Powerball", async () => {
  jest.spyOn(global.console, "log").mockImplementation();

  await executeEngine({ m: false, p: true });

  expect(console.log).not.toHaveBeenCalledWith("MegaMillions Winner:");
  expect(console.log).toHaveBeenCalledWith("Powerball Winner:");
});

test("executeEngine shows both", async () => {
  jest.spyOn(global.console, "log").mockImplementation();

  await executeEngine({ m: true, p: true });

  expect(console.log).toHaveBeenCalledWith("MegaMillions Winner:");
  expect(console.log).toHaveBeenCalledWith("Powerball Winner:");
});

test("executeEngine shows neither", async () => {
  jest.spyOn(global.console, "log").mockImplementation();

  await executeEngine({ m: false, p: false });

  expect(console.log).not.toHaveBeenCalledWith("MegaMillions Winner:");
  expect(console.log).not.toHaveBeenCalledWith("Powerball Winner:");
});
