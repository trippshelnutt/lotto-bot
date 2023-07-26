#!/usr/bin/env node

const yargs = require("yargs");
const executeEngine = require("./engine");

const options = yargs
  .usage("Usage: $0 [-m] [-p]")
  .option("m", {
    alias: "mega-millions",
    describe: "Check MegaMillions",
    type: "boolean",
  })
  .option("p", {
    alias: "powerball",
    describe: "Check Powerball",
    type: "boolean",
  }).argv;

if (!options.m && !options.p) {
  yargs.showHelp("log");
} else {
  executeEngine(options);
}
