#!/usr/bin/env node
const chalk = require("chalk");
const moment = require("moment");
const data = require("./data.json");

const getItem = () => {
  let foundItem = undefined;
  const now = moment(new Date());

  data.sekki.forEach((sekki, index) => {
    if (foundItem) return;

    const current = moment(convertDate(sekki.startDate));

    if (data.sekki[index + 1] === undefined) {
      foundItem = sekki;
    } else {
      const next = moment(convertDate(data.sekki[index + 1].startDate));

      if (now.isBetween(current, next)) {
        foundItem = sekki;
      }
    }
  });

  return foundItem;
};

const convertDate = (value) => `${new Date().getFullYear()}-${value}`;

const run = () => {
  const item = getItem();

  console.log(`
  ${chalk("Twenty-four Sekki")}
  ${chalk.bold.gray("SEASON")} ${chalk(item.season)}
  ${chalk.bold.gray("NAME")} ${chalk(item.romanji)} (${chalk(item.kanji)})
  ${chalk.bold.gray("MEANING")} ${chalk(item.title)}
  ${chalk.bold.gray("ASSOCIATIONS")} ${chalk(item.description)}
  ${chalk.bold.gray("APPROX. DATE")} ${chalk(
    moment(convertDate(item.startDate)).format("MMM Do")
  )}
  `);
};

run();
