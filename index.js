#!/usr/bin/env node
const chalk = require("chalk");
const moment = require("moment");

const data = require("./data.json");
const item = data.sekki[0];

const convertDate = (value) => `${new Date().getFullYear()}-${value}`;

const printOutput = () => {
  console.log(`
  ${chalk("Twenty Four Sekki")}
  ${chalk.bold.gray("SEASON")} ${chalk(item.season)}
  ${chalk.bold.gray("NAME")} ${chalk(item.romanji)} (${chalk(item.kanji)})
  ${chalk.bold.gray("MEANING")} ${chalk(item.title)}
  ${chalk.bold.gray("ASSOCIATIONS")} ${chalk(item.description)}
  ${chalk.bold.gray("APPROX. DATE")} ${chalk(
    moment(convertDate(item.startDate)).format("MMM Do")
  )}
  `);
};

printOutput();
